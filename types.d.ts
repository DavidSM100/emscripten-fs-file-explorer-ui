/**
 * 
 * @param container HTML element where to mount the file explorer
 * @param FS The Emscripten filesystem object
 * @param options Configuration options
 */
declare function mountEmscriptenFileExplorer(container: HTMLElement, FS: typeof globalThis.FS, options?: FileExplorerOptions): void

export interface FileExplorerOptions {
    initialDir?: string
}

export default mountEmscriptenFileExplorer