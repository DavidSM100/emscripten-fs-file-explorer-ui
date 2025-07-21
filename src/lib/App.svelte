<script>
  import Toolbar from "./Toolbar.svelte";
  import Entry from "./Entry.svelte";
  import Editor from "./Editor.svelte";

  let { FS, initialDir = FS.cwd() } = $props();
  FS.chdir(initialDir);
  let dirPath = $state({ path: initialDir });
  let dirData = $derived({ data: FS.analyzePath(dirPath.path) });

  let editorOpened = $state({ path: null });
</script>

{#if editorOpened.path !== null}
  <Editor {FS} bind:editorOpened />
{:else}
  <Toolbar {FS} bind:dirPath {dirData} />
  <div class="folder-content">
    {#if dirData.data.object.contents}
      {#each Object.values(dirData.data.object.contents) as entry}
        <Entry {FS} {entry} bind:dirPath bind:editorOpened />
      {/each}
    {/if}
  </div>
{/if}

<style>
  .folder-content {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
</style>
