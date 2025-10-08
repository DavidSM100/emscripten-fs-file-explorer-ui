import { mount } from "svelte";
import App from "./App.svelte";

/**
 * @type {import("../types").default}
 */
export default function mountEmscriptenFileExplorer(container, FS, options) {
  mount(App, {
    target: container,
    props: { FS: FS, options: options },
  });
}
