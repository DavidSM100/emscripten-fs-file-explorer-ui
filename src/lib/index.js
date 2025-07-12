import { mount } from "svelte";
import App from "./App.svelte";

//@ts-ignore
window.openFileExplorer = (container, FS) => {
  mount(App, {
    target: container,
    props: { FS },
  });
};
