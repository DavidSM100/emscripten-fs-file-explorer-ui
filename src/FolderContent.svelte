<script>
  import Entry from "./Entry.svelte";
  let { FS, dirData } = $props();
</script>

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

<style>
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
