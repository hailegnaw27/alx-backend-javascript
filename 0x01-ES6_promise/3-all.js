import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Use Promise.all to collectively resolve the uploadPhoto and createUser promises
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      // Destructure results into two variables: photo and user
      const [photo, user] = results;
      // Log the body from photo and the first and last names from user
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // Log an error message to the console in case of any error
      console.log('Signup system offline');
    });
}

