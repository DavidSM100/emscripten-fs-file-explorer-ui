import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      name: "mountEmscriptenFileExplorer",
      entry: "src/lib/index.js",
      formats: ["iife", "es"],
    },
  },
});
