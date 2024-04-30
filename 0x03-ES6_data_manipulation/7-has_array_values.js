// Define the function hasValuesFromArray
const hasValuesFromArray = (set, array) => {
  // Iterate over each element in the array
  for (const element of array) {
    // Check if the set does not contain the current element
    if (!set.has(element)) {
      // If any element is not in the set, return false
      return false;
    }
  }
  
  // If all elements are found in the set, return true
  return true;
};

// Export the function as the default export
export default hasValuesFromArray;

