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

  /**
   * @type {null | any}
   */
  let folderCreationError = $state(null);

  function goBack() {
    const path = dirData.data.parentPath;
    dirPath.path = path;
    FS.chdir(path);
  }

  function importFiles() {
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
      folderCreationError = null;
      folderName = "";
      showNewFolderDiv = false;
    } catch (err) {
      folderCreationError = err;
    }
  }
</script>

<div class="toolbar">
  <button onclick={goBack} aria-label="Go back" title="Go back">
    <ArrowLeftIcon />
  </button>
  <button onclick={importFiles} aria-label="Import files" title="Import files">
    <FilePlusIcon />
  </button>
  <button
    onclick={() => {
      showNewFolderDiv = true;
      tick().then(() => newFolderNameEl.focus());
    }}
    aria-label="New folder"
    title="New folder"
  >
    <FolderPlusIcon />
  </button>
  <input
    type="text"
    bind:value={dirPath.path}
    disabled
    aria-label="Current directory"
    title="Current directory"
  />
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
    <button
      type="submit"
      disabled={!canCreateFolder}
      aria-label="Create folder"
      title="Create folder"
    >
      <CheckIcon />
    </button>
    <button
      type="button"
      onclick={() => {
        showNewFolderDiv = false;
        folderCreationError = null;
      }}
      aria-label="Cancel"
      title="Cancel"
    >
      <XIcon />
    </button>
  </form>
  <div role="alert">
    {#if folderCreationError}
      <!-- `key` ensures that the error is re-announced,
      even if the error text is the same. -->
      {#key folderCreationError}
        <div class="error">
          {folderCreationError}
        </div>
      {/key}
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
