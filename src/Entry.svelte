<script>
  import {
    DownloadIcon,
    FileIcon,
    FileSymlink,
    FolderIcon,
    MoreVerticalIcon,
    XIcon,
  } from "@lucide/svelte";
  /**
   * @type {{FS: typeof globalThis.FS, entry: globalThis.FS.FSNode, dirPath: {path: string}, editorOpened: {path: string}}}
   */
  let {
    FS,
    entry,
    dirPath = $bindable(),
    editorOpened = $bindable(),
  } = $props();

  let actionsDialog;

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
    </div>
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
  .actions {
    min-width: 300px;
    min-height: 300px;
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
</style>
