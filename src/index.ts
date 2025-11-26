//@ts-nocheck
import App from "./components/App.svelte";
import type { FileExplorerOptions, EmscriptenFS } from "../types";

interface EmscriptenFSExplorerElement extends HTMLElement {
  FS: EmscriptenFS;
  options: FileExplorerOptions;
}

export default function mountEmscriptenFileExplorer(
  container: HTMLElement,
  FS: EmscriptenFS,
  options: FileExplorerOptions,
) {
  const elem = document.createElement(
    "emscripten-fs-explorer",
  ) as EmscriptenFSExplorerElement;
  elem.FS = FS;
  elem.options = options;
  container.append(elem);
}
