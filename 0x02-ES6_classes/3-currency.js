class Currency {
  // Constructor to initialize the attributes
  constructor(code, name) {
    // Set the code and name attributes using the setters
    this.code = code;
    this.name = name;
  }

  // Getter for the code attribute
  get code() {
    return this._code;
  }

  // Setter for the code attribute with type validation
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Setter for the name attribute with type validation
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display full currency format "name (code)"
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

// Export the class as the default export
export default Currency;

