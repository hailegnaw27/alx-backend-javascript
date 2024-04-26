class Building {
  // Constructor to initialize the sqft attribute
  constructor(sqft) {
    // Set the sqft attribute
    this._sqft = sqft;
  }

  // Getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Ensure that the evacuationWarningMessage method is implemented in subclasses
  // If not, throw an error
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Export the class as the default export
export default Building;

