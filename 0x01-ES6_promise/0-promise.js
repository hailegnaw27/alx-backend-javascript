export default function getResponseFromAPI() {
  // Return a Promise
  return new Promise((resolve, reject) => {
    // Example: Resolve the Promise with a success message
    resolve('Success');
    // Optionally, you can reject the Promise if needed
    // reject('Error');
  });
}

