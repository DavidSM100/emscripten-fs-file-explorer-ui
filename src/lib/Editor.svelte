<script>
  import { ArrowLeftIcon, SaveIcon } from "@lucide/svelte";
  import { syncfs } from "./util";
  let { FS, editorOpened = $bindable() } = $props();
  let text = $state(FS.readFile(editorOpened.path, { encoding: "utf8" }));
  let saving = $state(false);

  async function save() {
    saving = true;
    FS.writeFile(editorOpened.path, text);
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
  <div>
    <button onclick={close}>
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
  </div>
  <textarea bind:value={text}></textarea>
</div>

<style>
  textarea {
    flex: 1;
    resize: none;
    font-family: Arial, Helvetica, sans-serif;
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
