<script>
  import Toolbar from "./Toolbar.svelte";
  import FolderContent from "./FolderContent.svelte";
  import Editor from "./Editor.svelte";
  import { dirPath, editorOpened } from "../state.svelte";

  /**
   * @type {{FS: typeof globalThis.FS, options: import("../../types").FileExplorerOptions}}
   */
  let { FS, options = {} } = $props();
  let initialDir = options.initialDir || FS.cwd();
  try {
    FS.chdir(initialDir);
  } catch (err) {
    console.log("Invalid `initialDir` value, using default value.");
    initialDir = FS.cwd();
  } finally {
    dirPath.path = initialDir;
  }
  let dirData = $derived({ data: FS.analyzePath(dirPath.path) });
</script>

<div class="container">
  {#if editorOpened.path !== null}
    <Editor {FS} />
  {:else}
    <Toolbar {FS} {dirData} />
    <FolderContent {FS} {dirData} />
  {/if}
</div>

<style>
  .container {
    padding: 5px;
    height: calc(100% - 10px);
  }
</style>
