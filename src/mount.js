import { mount } from "svelte";
import App from "./lib/App.svelte";

export default function mountEmscriptenFileExplorer(container, FS, initialDir) {
  mount(App, {
    target: container,
    props: { FS: FS, initialDir: initialDir },
  });
}
