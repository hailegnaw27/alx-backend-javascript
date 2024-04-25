export default function signUpUser(firstName, lastName) {
  // Return a resolved promise with the specified object
  return new Promise((resolve) => {
    resolve({
      firstName: firstName,
      lastName: lastName,
    });
  });
}

