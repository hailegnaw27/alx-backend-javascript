// Import the Building class from 5-building.js
import Building from './5-building';

// Define a class named SkyHighBuilding that extends from Building
class SkyHighBuilding extends Building {
  // Constructor to initialize the attributes
  constructor(sqft, floors) {
    // Call the parent class constructor with the sqft parameter
    super(sqft);
    // Set the floors attribute
    this._floors = floors;
  }

  // Getter for the floors attribute
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    // Return the evacuation warning message with the number of floors
    return `Evacuate slowly the ${this.floors} floors`;
  }
}

// Export the class as the default export
export default SkyHighBuilding;
