// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'Los Angeles'
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table with students' first names and locations
function renderTable(students: Student[]) {
    // Create a table element
    const table = document.createElement('table');

    // Loop through each student in the list
    students.forEach((student) => {
        // Create a row for each student
        const row = document.createElement('tr');

        // Create cells for first name and location
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        // Set the text content of the cells
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        // Append the cells to the row
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        // Append the row to the table
        table.appendChild(row);
    });

    // Append the table to the document body
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);

