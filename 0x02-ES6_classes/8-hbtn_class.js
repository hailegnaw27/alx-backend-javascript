// Define a class named HolbertonClass
class HolbertonClass {
  // Constructor to initialize the attributes
  constructor(size, location) {
    // Set the size and location attributes
    this._size = size;
    this._location = location;
  }

  // Getter for the size attribute
  get size() {
    return this._size;
  }

  // Getter for the location attribute
  get location() {
    return this._location;
  }

  // Override the method to cast the class into a Number
  valueOf() {
    return this.size;
  }

  // Override the method to cast the class into a String
  toString() {
    return this.location;
  }
}

// Export the class as the default export
export default HolbertonClass;

