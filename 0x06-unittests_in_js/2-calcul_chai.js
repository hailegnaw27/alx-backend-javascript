/**
 * Function to perform arithmetic operations after rounding inputs.
 * 
 * @param {string} type - Operation type: 'SUM', 'SUBTRACT', 'DIVIDE'.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number|string} - Result of the operation or 'Error' if invalid.
 */
const calculateNumber = (type, a, b) => {
  // Round inputs to nearest integers
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Determine operation based on type
  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      // Handle division by zero
      return roundedB === 0 ? 'Error' : roundedA / roundedB;
    default:
      return 0;
  }
};

// Export the function for use in other modules
module.exports = calculateNumber;

