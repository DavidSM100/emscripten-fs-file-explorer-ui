<script lang="ts">
  import {
    DownloadIcon,
    FileIcon,
    FileSymlink,
    FolderIcon,
    MoreVerticalIcon,
    TrashIcon,
    XIcon,
  } from "@lucide/svelte";
  import { dirPath, editorOpened } from "../state.svelte";
  import { syncfs } from "../lib";
  import type { EmscriptenFS } from "../../types";

  let { FS, entry }: { FS: EmscriptenFS; entry: globalThis.FS.FSNode } =
    $props();

  let actionsDialog: HTMLDialogElement;
  let deleteDialog: HTMLDialogElement;

  function onclick() {
    if (FS.isDir(entry.mode)) {
      const path = FS.getPath(entry);
      dirPath.path = path;
      FS.chdir(path);
    }
    if (FS.isFile(entry.mode)) {
      const path = FS.getPath(entry);
      editorOpened.path = path;
    }
  }

  function download() {
    const file = new Blob([
      //@ts-ignore
      FS.readFile(FS.getPath(entry), { encoding: "binary" }),
    ]);

    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = entry.name;

    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    }, 1000);
  }

  async function remove() {
    try {
      FS.unlink(FS.getPath(entry));
    } catch (err) {
      console.log(err);
    }
    await syncfs(FS);
    dirPath.path = undefined;
    dirPath.path = FS.cwd();
    deleteDialog.close();
  }
</script>

<dialog class="actions" bind:this={actionsDialog}>
  <div class="container">
    <div class="header">
      <b>{entry.name}</b>
      <button aria-label="Close" onclick={() => actionsDialog.close()}>
        <XIcon />
      </button>
    </div>
    <div class="buttons">
      <button onclick={download}>
        <DownloadIcon />
        Download
      </button>
      <button
        onclick={() => {
          actionsDialog.close();
          deleteDialog.showModal();
        }}
      >
        <TrashIcon />
        Delete
      </button>
    </div>
  </div>
</dialog>

<dialog class="delete-dialog" bind:this={deleteDialog}>
  <div>
    Are you sure you want to delete "{entry.name}" ?
  </div>
  <br />
  <div style="display: flex; justify-content: space-between;">
    <button onclick={() => deleteDialog.close()}>Cancel</button>
    <button onclick={remove}>Delete</button>
  </div>
</dialog>

<div class="container">
  <button {onclick}>
    {#if FS.isDir(entry.mode)}
      <FolderIcon aria-label="Directory" />
    {:else if FS.isFile(entry.mode)}
      <FileIcon aria-label="File" />
    {:else if FS.isLink(entry.mode)}
      <FileSymlink aria-label="Symlink" />
    {/if}
    {entry.name}
  </button>
  {#if FS.isFile(entry.mode)}
    <button aria-label="More" onclick={() => actionsDialog.showModal()}>
      <MoreVerticalIcon />
    </button>
  {/if}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 5px;
  }
  button {
    display: inline-flex;
    gap: 5px;
    align-items: center;
    height: 30px;
  }
  dialog {
    min-width: 300px;
    min-height: 300px;
    max-width: 500px;
    padding: 5px;
    border: 2px solid;
    border-radius: 5px;
  }
  .actions .container,
  .actions .buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .actions .header {
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
  }
  .actions .buttons button {
    width: 100%;
  }

  .delete-dialog button {
    width: 40%;
    text-align: center;
    display: inline-block;
  }
</style>
