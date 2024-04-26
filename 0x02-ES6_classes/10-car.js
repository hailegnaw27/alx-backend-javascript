// Define a class named Car
class Car {
  // Constructor to initialize the attributes
  constructor(brand, motor, color) {
    // Initialize the attributes
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter for the brand attribute
  get brand() {
    return this._brand;
  }

  // Getter for the motor attribute
  get motor() {
    return this._motor;
  }

  // Getter for the color attribute
  get color() {
    return this._color;
  }

  // Method to clone the Car instance
  cloneCar() {
    // Create a new object with the same prototype as this instance
    const newObj = Object.create(Object.getPrototypeOf(this));
    // Copy the attributes to the new object
    newObj._brand = this._brand;
    newObj._motor = this._motor;
    newObj._color = this._color;
    // Return the cloned object
    return newObj;
  }
}

// Export the class as the default export
export default Car;

