// Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Define the Director class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

// Define the Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// Define the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
    // If salary is a number and less than 500, return a new Teacher
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    // Otherwise, return a new Director
    return new Director();
}

// Test the function with examples
console.log(createEmployee(200)); // Output: Teacher
console.log(createEmployee(1000)); // Output: Director
console.log(createEmployee('$500')); // Output: Director
// Define the isDirector function as a type predicate
function isDirector(employee: Director | Teacher): employee is Director {
    // Return true if the employee is an instance of Director
    return employee instanceof Director;
}

// Define the executeWork function
function executeWork(employee: Director | Teacher): void {
    // If the employee is a Director, call workDirectorTasks
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        // If the employee is a Teacher, call workTeacherTasks
        console.log(employee.workTeacherTasks());
    }
}

// Test the executeWork function
executeWork(createEmployee(200)); // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks
// Define the Subjects type as a string literal type
type Subjects = 'Math' | 'History';

// Define the teachClass function
function teachClass(todayClass: Subjects): string {
    // Return the appropriate teaching message based on the todayClass argument
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    } else {
        throw new Error('Invalid subject');
    }
}

// Test the teachClass function with examples
console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History

