/**
 * Perform arithmetic operations based on the specified type.
 * 
 * @param {string} type - The type of operation to perform ('SUM', 'SUBTRACT', 'DIVIDE').
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the arithmetic operation or 'Error' if division by zero.
 */
const calculateNumber = (type, a, b) => {
  // Round the input numbers to the nearest integer
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Handle different types of arithmetic operations
  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      return roundedB === 0 ? 'Error' : roundedA / roundedB;
    default:
      return 0;
  }
};

// Export the function for use in other modules
module.exports = calculateNumber;

