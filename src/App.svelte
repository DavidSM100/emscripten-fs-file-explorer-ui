<script>
  import Toolbar from "./Toolbar.svelte";
  import Entry from "./Entry.svelte";
  import Editor from "./Editor.svelte";
  import { onMount } from "svelte";
  import { addFiles } from "./lib";
  import { syncfs } from "./util";
  import { dirPath, editorOpened } from "./state.svelte";

  /**
   * @type {{FS: typeof globalThis.FS, options: import("../types").FileExplorerOptions}}
   */
  let { FS, options = {} } = $props();
  const initialDir = options.initialDir || FS.cwd();
  FS.chdir(initialDir);
  dirPath.path = initialDir;
  let dirData = $derived({ data: FS.analyzePath(dirPath.path) });

  let dropZone;
  onMount(() => {
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropZone.addEventListener(eventName, preventDefault, false);
    });

    function preventDefault(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    dropZone.addEventListener("drop", onDrop);
  });

  async function onDrop(e) {
    const files = Array.from(e.dataTransfer.files);
    if (!files.length) return;
    let dir = dirPath.path;
    if (!dir.endsWith("/")) dir += "/";
    try {
      await addFiles(FS, dir, files);
      await syncfs(FS);
      dirPath.path = undefined;
      dirPath.path = FS.cwd();
    } catch (err) {
      console.log(err);
    }
  }
</script>

<div class="container" bind:this={dropZone}>
  {#if editorOpened.path !== null}
    <Editor {FS} />
  {:else}
    <Toolbar {FS} {dirData} />
    <section class="folder-content" aria-label="Folder content">
      {#if dirData.data.object.contents}
        {@const contentsArr = Object.values(dirData.data.object.contents)}
        {#if contentsArr.length > 0}
          {#each contentsArr as entry}
            <Entry {FS} {entry} />
          {/each}
        {:else}
          <div class="empty-info">
            <div>This folder is empty</div>
          </div>
        {/if}
      {/if}
    </section>
  {/if}
</div>

<style>
  .container {
    padding: 5px;
    height: calc(100% - 10px);
  }
  .folder-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
  .empty-info {
    height: 100%;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
