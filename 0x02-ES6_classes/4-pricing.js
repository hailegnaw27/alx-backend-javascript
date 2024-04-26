// Import the Currency class from 3-currency.js
import Currency from './3-currency';

// Define a class named Pricing
class Pricing {
  // Constructor to initialize the attributes
  constructor(amount, currency) {
    // Set the amount and currency attributes using the setters
    this.amount = amount;
    this.currency = currency;
  }

  // Getter for the amount attribute
  get amount() {
    return this._amount;
  }

  // Setter for the amount attribute with type validation
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Getter for the currency attribute
  get currency() {
    return this._currency;
  }

  // Setter for the currency attribute with type validation
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  // Method to display full price in the format "amount currency_name (currency_code)"
  displayFullPrice() {
    // Access the amount and currency attributes and format the output string
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method to convert price using a conversion rate
  static convertPrice(amount, conversionRate) {
    // Return the converted price by multiplying amount with conversion rate
    return amount * conversionRate;
  }
}

// Export the class as the default export
export default Pricing;

