// Define the function createInt8TypedArray
const createInt8TypedArray = (length, position, value) => {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  
  // Create a DataView to work with the buffer
  const dataView = new DataView(buffer);
  
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    // If the position is outside the range, throw an error
    throw new Error('Position outside range');
  }
  
  // Set the Int8 value at the specified position in the buffer
  dataView.setInt8(position, value);
  
  // Return the DataView representing the buffer
  return dataView;
};

// Export the function as the default export
export default createInt8TypedArray;

