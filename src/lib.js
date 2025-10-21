export { addFiles, syncfs };

/**
 * 
 * @param {typeof globalThis.FS} FS 
 * @param {string} dir 
 * @param {File} file 
 */
async function addFile(FS, dir, file) {
  const path = dir + file.name;
  const uint8arr = new Uint8Array(await file.arrayBuffer());
  FS.writeFile(path, uint8arr, { flags: "w+" });
}

/**
 * 
 * @param {typeof globalThis.FS} FS 
 * @param {string} dir 
 * @param {File[]} files 
 */
async function addFiles(FS, dir, files) {
  await Promise.all(
    files.map(async (file) => {
      await addFile(FS, dir, file);
    })
  );
}

/**
 * 
 * @param {typeof globalThis.FS} FS 
 * @returns 
 */
function syncfs(FS) {
  return new Promise((resolve, reject) => {
    FS.syncfs(false, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
