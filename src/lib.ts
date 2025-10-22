import type { EmscriptenFS } from "../types";
export { addFiles, syncfs };

async function addFile(FS: EmscriptenFS, dir: string, file: File) {
  const path = dir + file.name;
  const uint8arr = new Uint8Array(await file.arrayBuffer());
  FS.writeFile(path, uint8arr, { flags: "w+" });
}

async function addFiles(FS: EmscriptenFS, dir: string, files: File[]) {
  await Promise.all(
    files.map(async (file) => {
      await addFile(FS, dir, file);
    }),
  );
}

function syncfs(FS: EmscriptenFS): Promise<void> {
  return new Promise((resolve, reject) => {
    FS.syncfs(false, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
