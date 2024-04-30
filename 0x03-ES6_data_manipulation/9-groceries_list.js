// Define the function groceriesList
const groceriesList = () => {
  // Create a new Map with the specified items and quantities
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  // Return the map of groceries
  return groceries;
};

// Export the function as the default export
export default groceriesList;

