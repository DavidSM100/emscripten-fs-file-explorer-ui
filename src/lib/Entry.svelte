<script>
  import { FileIcon, FileSymlink, FolderIcon } from "@lucide/svelte";
  let { FS, entry, dirPath = $bindable(), editorOpened = $bindable() } = $props();

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
</script>

<div>
  <button {onclick}>
    {#if FS.isDir(entry.mode)}
      <FolderIcon />
    {:else if FS.isFile(entry.mode)}
      <FileIcon />
    {:else if FS.isLink(entry.mode)}
      <FileSymlink />
    {/if}
    {entry.name}
  </button>
</div>

<style>
  button {
    display: flex;
    gap: 5px;
    align-items: center;
    height: 30px;
  }
</style>
