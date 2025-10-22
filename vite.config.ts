import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({ emitCss: false })],
  build: {
    lib: {
      name: "mountEmscriptenFileExplorer",
      entry: "src/index.js",
      formats: ["iife", "es"],
    },
  },
});
