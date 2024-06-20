const Utils = require('./utils');

/**
 * Sends a payment request to the API by calculating the total cost.
 *
 * @param {number} totalAmount - The total amount for the payment.
 * @param {number} totalShipping - The shipping cost.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by summing amount and shipping
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  
  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

// Export the function for use in other modules
module.exports = sendPaymentRequestToApi;

