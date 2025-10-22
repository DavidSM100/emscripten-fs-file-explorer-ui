<script lang="ts">
  import { ArrowLeftIcon, SaveIcon } from "@lucide/svelte";
  import { syncfs } from "../lib";
  import { editorOpened } from "../state.svelte";
  import type { EmscriptenFS } from "../../types";

  let { FS }: { FS: EmscriptenFS } = $props();
  let text = $state(FS.readFile(editorOpened.path!, { encoding: "utf8" }));
  let saving = $state(false);

  async function save() {
    saving = true;
    FS.writeFile(editorOpened.path!, text);
    try {
      await syncfs(FS);
    } catch (err) {
      console.log(err);
    } finally {
      saving = false;
    }
  }

  function close() {
    editorOpened.path = null;
  }
</script>

<div class="container">
  <section role="toolbar">
    <button onclick={close} title="Close" aria-label="Close">
      <ArrowLeftIcon />
    </button>
    <button disabled={saving} onclick={save}>
      <SaveIcon />
      {#if saving}
        Saving...
      {:else}
        Save
      {/if}
    </button>
  </section>
  <textarea aria-label="File contents" bind:value={text}></textarea>
</div>

<style>
  textarea {
    flex: 1;
    resize: none;
    font-family: "Courier New", Courier, monospace;
    padding: 10px;
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 5px;
  }
</style>
