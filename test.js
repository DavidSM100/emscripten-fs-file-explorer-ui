import openFileExplorer from "./src/lib/index.js";

async function start() {
  const emscripten = await import("./emscripten.js");
  const module = await emscripten.default();

  const container = document.getElementById("app");
  openFileExplorer(container, module.FS);
}

start();
