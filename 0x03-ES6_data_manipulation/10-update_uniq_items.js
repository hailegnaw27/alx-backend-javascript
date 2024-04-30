// Define the function updateUniqueItems
const updateUniqueItems = (map) => {
  // Check if the provided argument is not a Map
  if (!(map instanceof Map)) {
    // If the argument is not a Map, throw an error
    throw new Error('Cannot process');
  }

  // Iterate over each entry in the map
  for (const [key, value] of map.entries()) {
    // Check if the quantity is 1
    if (value === 1) {
      // Update the quantity to 100
      map.set(key, 100);
    }
  }
};

// Export the function as the default export
export default updateUniqueItems;

