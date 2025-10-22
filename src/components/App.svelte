<script lang="ts">
  import Toolbar from "./Toolbar.svelte";
  import FolderContent from "./FolderContent.svelte";
  import Editor from "./Editor.svelte";
  import { dirPath, editorOpened } from "../state.svelte";
  import type { FileExplorerOptions, EmscriptenFS } from "../../types";

  let { FS, options = {} }: { FS: EmscriptenFS; options: FileExplorerOptions } =
    $props();
  let initialDir = options.initialDir || FS.cwd();
  try {
    FS.chdir(initialDir);
  } catch (err) {
    console.log("Invalid `initialDir` value, using default value.");
    initialDir = FS.cwd();
  } finally {
    dirPath.path = initialDir;
  }
  let dirData = $derived(FS.analyzePath(dirPath.path));
  let dirParent = $derived(dirData.parentPath);
  let dirContent: globalThis.FS.FSNode[] = $derived.by(() => {
    //@ts-ignore
    const contents = dirData.object.contents;
    if (contents) {
      return Object.values(contents);
    } else {
      return [];
    }
  });
</script>

<div class="container">
  {#if editorOpened.path !== null}
    <Editor {FS} />
  {:else}
    <Toolbar {FS} {dirParent} />
    <FolderContent {FS} {dirContent} />
  {/if}
</div>

<style>
  .container {
    padding: 5px;
    height: calc(100% - 10px);
  }
</style>
