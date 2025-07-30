import { mount } from "svelte";
import App from "./App.svelte";

export default function openFileExplorer(container, FS, initialDir) {
  mount(App, {
    target: container,
    props: { FS, initialDir },
  });
}
