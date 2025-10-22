<script lang="ts">
  import Entry from "./Entry.svelte";
  import { onMount } from "svelte";
  import { addFiles, syncfs } from "../lib";
  import { dirPath } from "../state.svelte";
  import type { EmscriptenFS } from "../../types";
  let { FS, dirData }: { FS: EmscriptenFS; dirData: { data: FS.Analyze } } =
    $props();

  let dropZone: HTMLElement;
  onMount(() => {
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropZone.addEventListener(eventName, preventDefault, false);
    });

    function preventDefault(e: Event) {
      e.preventDefault();
      e.stopPropagation();
    }

    dropZone.addEventListener("drop", onDrop);
  });

  async function onDrop(e: DragEvent) {
    if (!e.dataTransfer) return;
    const files = Array.from(e.dataTransfer.files);
    if (!files.length) return;
    let dir = dirPath.path!;
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

<section
  class="folder-content"
  aria-label="Folder content"
  bind:this={dropZone}
>
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
