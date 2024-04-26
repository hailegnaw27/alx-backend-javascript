class HolbertonCourse {
  // Constructor to initialize the attributes
  constructor(name, length, students) {
    // Set the name attribute using the setter
    this.name = name;
    // Set the length attribute using the setter
    this.length = length;
    // Set the students attribute using the setter
    this.students = students;
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

  // Getter for the length attribute
  get length() {
    return this._length;
  }

  // Setter for the length attribute with type validation
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter for the students attribute
  get students() {
    return this._students;
  }

  // Setter for the students attribute with type validation
  set students(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}

// Export the class as the default export
export default HolbertonCourse;

