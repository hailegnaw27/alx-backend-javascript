import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // Call the uploadPhoto and createUser functions using await
    const photo = await uploadPhoto();
    const user = await createUser();
    
    // Return an object containing the response from both functions
    return {
      photo,
      user,
    };
  } catch (error) {
    // If an error occurs, return an empty object with null values
    return {
      photo: null,
      user: null,
    };
  }
}

