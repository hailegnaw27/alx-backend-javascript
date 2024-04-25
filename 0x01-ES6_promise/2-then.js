export default function handleResponseFromAPI(promise) {
  // Handle the resolution and rejection of the Promise
  return promise
    .then(() => {
      // Log a message to the console for every resolution
      console.log('Got a response from the API');
      // Return an object with status and body for resolved Promise
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      // Return an empty Error object for rejected Promise
      return new Error();
    });
}

