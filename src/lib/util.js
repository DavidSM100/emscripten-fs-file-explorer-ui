export function syncfs(FS) {
  return new Promise((resolve, reject) => {
    FS.syncfs(false, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
