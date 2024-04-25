export default function divideFunction(numerator, denominator) {
  // Check if denominator is 0 and throw an error if it is
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  
  // Return the result of dividing the numerator by the denominator
  return numerator / denominator;
}

