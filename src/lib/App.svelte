<script>
  import Toolbar from "./Toolbar.svelte";
  import Entry from "./Entry.svelte";
  import Editor from "./Editor.svelte";
  import { onMount } from "svelte";
  import { addFiles } from "./lib";
  import { syncfs } from "./util";

  /**
   * @type {{FS: typeof globalThis.FS, initialDir: string}}
   */
  let { FS, initialDir = FS.cwd() } = $props();
  FS.chdir(initialDir);
  let dirPath = $state({ path: initialDir });
  let dirData = $derived({ data: FS.analyzePath(dirPath.path) });

  let editorOpened = $state({ path: null });

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
    <Editor {FS} bind:editorOpened />
  {:else}
    <Toolbar {FS} bind:dirPath {dirData} />
    <section class="folder-content" aria-label="Folder content">
      {#if dirData.data.object.contents}
        {@const contentsArr = Object.values(dirData.data.object.contents)}
        {#if contentsArr.length > 0}
          {#each contentsArr as entry}
            <Entry {FS} {entry} bind:dirPath bind:editorOpened />
          {/each}
        {:else}
          This folder is empty
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
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
</style>
