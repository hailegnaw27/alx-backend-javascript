// Define the function cleanSet
const cleanSet = (set, startString) => {
  // Check if startString is not provided or is empty
  if (!startString) {
    // If startString is empty or not provided, return an empty string
    return '';
  }

  // Initialize an array to hold the cleaned set values
  const resultArray = [];

  // Iterate over each value in the set
  for (const value of set) {
    // Check if the value starts with the specified startString
    if (value.startsWith(startString)) {
      // Append the rest of the string (after startString) to the result array
      resultArray.push(value.slice(startString.length));
    }
  }

  // Join the result array with a hyphen and return the final string
  return resultArray.join('-');
};

// Export the function as the default export
export default cleanSet;

