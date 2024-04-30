// Export a constant instance of WeakMap named weakMap
export const weakMap = new WeakMap();

// Define the function queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint exists in the weakMap
  if (weakMap.has(endpoint)) {
    // Increment the count for the endpoint
    const currentCount = weakMap.get(endpoint) + 1;
    
    // Update the count in the weakMap
    weakMap.set(endpoint, currentCount);
    
    // Check if the count is >= 5
    if (currentCount >= 5) {
      // If the count is >= 5, throw an error
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint does not exist in the weakMap, add it with a count of 1
    weakMap.set(endpoint, 1);
  }
}

