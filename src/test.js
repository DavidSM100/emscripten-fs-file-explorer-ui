import { mount } from "svelte";
import App from "./lib/App.svelte";

async function start() {
  const ioquake3 = await import("../ioquake3_opengl2.wasm32.js");
  const module = await ioquake3.default();
  mount(App, {
    target: document.getElementById("app"),
    // @ts-ignore
    props: { FS: module.FS },
  });
}

start();
