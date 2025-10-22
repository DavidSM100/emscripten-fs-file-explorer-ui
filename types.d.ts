/**
 * 
 * @param container HTML element where to mount the file explorer
 * @param FS The Emscripten filesystem object
 * @param options Configuration options
 */
declare function mountEmscriptenFileExplorer(container: HTMLElement, FS: EmscriptenFS, options?: FileExplorerOptions): void

export type EmscriptenFS = typeof globalThis.FS;
export interface FileExplorerOptions {
    initialDir?: string
}

export default mountEmscriptenFileExplorer