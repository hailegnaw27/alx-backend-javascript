// Import the Car class from 10-car.js
import Car from './10-car';

// Define a class named EVCar that extends from Car
class EVCar extends Car {
  // Constructor to initialize the attributes
  constructor(brand, motor, color, range) {
    // Call the parent class constructor with the common attributes
    super(brand, motor, color);
    // Initialize the range attribute
    this._range = range;
  }

  // Getter for the range attribute
  get range() {
    return this._range;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    // Create a new instance of Car with the current object's attributes
    return new Car(this._brand, this._motor, this._color);
  }
}

// Export the class as the default export
export default EVCar;

