<script>
  import {
    ArrowLeftIcon,
    CheckIcon,
    FilePlusIcon,
    FolderPlusIcon,
    XIcon,
  } from "@lucide/svelte";
  import { syncfs } from "./util";
  import { addFiles } from "./lib";
  import { tick } from "svelte";

  let { FS, dirPath = $bindable(), dirData } = $props();

  let newFolderNameEl = $state(undefined);
  let showNewFolderDiv = $state(false);
  let folderName = $state("");
  let canCreateFolder = $derived(folderName.trim() !== "");

  let folderCreationError = $state("");

  function goBack() {
    const path = dirData.data.parentPath;
    dirPath.path = path;
    FS.chdir(path);
  }

  function importFile() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.hidden = true;
    fileInput.multiple = true;
    fileInput.onchange = async () => {
      const files = Array.from(fileInput.files);
      if (files.length) {
        let dir = dirPath.path;
        if (!dir.endsWith("/")) {
          dir += "/";
        }
        try {
          await addFiles(FS, dir, files);
          await syncfs(FS);
          dirPath.path = undefined;
          dirPath.path = FS.cwd();
        } catch (err) {
          console.log(err);
        }
      }
      fileInput.remove();
    };
    document.body.append(fileInput);
    fileInput.click();
  }

  async function createFolder() {
    try {
      FS.mkdir(folderName);
      try {
        await syncfs(FS);
      } catch (err) {
        console.log(err);
      }
      dirPath.path = undefined;
      dirPath.path = FS.cwd();
      folderCreationError = "";
      folderName = "";
      showNewFolderDiv = false;
    } catch (err) {
      folderCreationError = String(err);
    }
  }
</script>

<div class="toolbar">
  <button onclick={goBack}>
    <ArrowLeftIcon />
  </button>
  <button onclick={importFile}>
    <FilePlusIcon />
  </button>
  <button
    onclick={() => {
      showNewFolderDiv = true;
      tick().then(() => newFolderNameEl.focus());
    }}
  >
    <FolderPlusIcon />
  </button>
  <input type="text" bind:value={dirPath.path} disabled />
</div>
{#if showNewFolderDiv}
  <form
    class="new-folder"
    onsubmit={(e) => {
      e.preventDefault();
      createFolder();
    }}
  >
    <input
      type="text"
      placeholder="Folder name"
      required
      bind:value={folderName}
      bind:this={newFolderNameEl}
    />
    <button type="submit" disabled={!canCreateFolder}>
      <CheckIcon />
    </button>
    <button
      type="button"
      onclick={() => {
        showNewFolderDiv = false;
        folderCreationError = "";
      }}
    >
      <XIcon />
    </button>
  </form>
  <div role="alert">
    {#if folderCreationError}
      <div class="error">
        {folderCreationError}
      </div>
    {/if}
  </div>
{/if}
<hr />

<style>
  .toolbar {
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
  }

  .toolbar input {
    flex-grow: 1;
  }

  .new-folder {
    display: flex;
    gap: 5px;
  }

  .error {
    color: red;
  }
</style>
