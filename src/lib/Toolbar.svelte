<script>
  import {
    ArrowLeftIcon,
    CheckIcon,
    FilePlusIcon,
    FolderPlusIcon,
    XIcon,
  } from "@lucide/svelte";
  import { syncfs } from "./util";
  let { FS, dirPath = $bindable(), dirData } = $props();

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
    fileInput.onchange = async () => {
      const file = fileInput.files[0];
      if (file) {
        let path = dirPath.path;
        if (!path.endsWith("/")) {
          path += "/";
        }
        path += file.name;
        const uint8arr = new Uint8Array(await file.arrayBuffer());
        try {
          FS.writeFile(path, uint8arr, { flags: "w+" });
          try {
            await syncfs(FS);
          } catch (err) {
            console.log(err);
          }
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
      } catch(err) {
        console.log(err)
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
  <button onclick={() => (showNewFolderDiv = true)}>
    <FolderPlusIcon />
  </button>
  <input type="text" bind:value={dirPath.path} disabled />
</div>
{#if showNewFolderDiv}
  <div class="new-folder">
    <input type="text" placeholder="Folder name" bind:value={folderName} />
    <button disabled={!canCreateFolder} onclick={createFolder}>
      <CheckIcon />
    </button>
    <button onclick={() => (showNewFolderDiv = false)}>
      <XIcon />
    </button>
  </div>
  {#if folderCreationError}
    <div class="error">
      {folderCreationError}
    </div>
  {/if}
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
