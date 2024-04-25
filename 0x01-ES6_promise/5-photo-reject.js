export default function uploadPhoto(fileName) {
  // Return a Promise that rejects with an error message
  return new Promise((_, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}

