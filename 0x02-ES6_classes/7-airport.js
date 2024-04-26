// Define a class named Airport
class Airport {
  // Constructor to initialize the attributes
  constructor(name, code) {
    // Set the name and code attributes
    this._name = name;
    this._code = code;
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Getter for the code attribute
  get code() {
    return this._code;
  }

  // Override the toString() method to return the airport code
  toString() {
    return `[object ${this.code}]`;
  }
}

// Export the class as the default export
export default Airport;
