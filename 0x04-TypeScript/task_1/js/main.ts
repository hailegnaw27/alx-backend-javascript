// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    // Index signature for additional properties
    [key: string]: any;
}

// Create an example Teacher object
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Additional property
};

// Print the Teacher object
console.log(teacher3);

// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    // Return the formatted string: first letter of firstName and full lastName
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Test the printTeacher function with an example
const exampleTeacherName = printTeacher("John", "Doe");
console.log(exampleTeacherName); // Output: J. Doe

// Define the constructor interface for the StudentClass
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

// Define the class interface for the StudentClass
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Define the StudentClass class
class StudentClass implements StudentClassInterface {
    // Properties
    private firstName: string;
    private lastName: string;

    // Constructor
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method workOnHomework: Returns a string "Currently working"
    workOnHomework(): string {
        return 'Currently working';
    }

    // Method displayName: Returns the firstName of the student
    displayName(): string {
        return this.firstName;
    }
}

// Test the class with an example
const student = new StudentClass('John', 'Doe');
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

