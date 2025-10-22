import { mount } from "svelte";
import App from "./components/App.svelte";
import type { FileExplorerOptions, EmscriptenFS } from "../types";

export default function mountEmscriptenFileExplorer(
  container: HTMLElement,
  FS: EmscriptenFS,
  options: FileExplorerOptions,
) {
  mount(App, {
    target: container,
    props: { FS: FS, options: options },
  });
}
