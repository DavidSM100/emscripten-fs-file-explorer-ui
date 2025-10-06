/**
 * 
 * @param container HTML element where to mount the file explorer
 * @param FS The Emscripten filesystem object
 * @param initialDir Directory to open on start
 */
declare function mountEmscriptenFileExplorer(container: HTMLElement, FS: typeof globalThis.FS, initialDir?: string): void

export default mountEmscriptenFileExplorer