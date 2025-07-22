<script>
  import {
    DownloadIcon,
    FileIcon,
    FileSymlink,
    FolderIcon,
  } from "@lucide/svelte";
  let {
    FS,
    entry,
    dirPath = $bindable(),
    editorOpened = $bindable(),
  } = $props();

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

<div class="container">
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
  {#if FS.isFile(entry.mode)}
    <button onclick={download}>
      <DownloadIcon />
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
</style>
