import "./src/lib/index.js";

async function start() {
  const ioquake3 = await import("./ioquake3_opengl2.wasm32.js");
  const module = await ioquake3.default();

  const container = document.getElementById("app");
  //@ts-ignore
  window.openFileExplorer(container, module.FS);
}

start();
