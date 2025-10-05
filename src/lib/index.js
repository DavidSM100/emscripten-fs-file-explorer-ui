import { mount } from "svelte";
import App from "./App.svelte";

export default function mountEmscriptenFileExplorer(container, FS, initialDir) {
  mount(App, {
    target: container,
    props: { FS: FS, initialDir: initialDir },
  });
}
