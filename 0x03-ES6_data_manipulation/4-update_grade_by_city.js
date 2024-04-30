// Define the function updateStudentGradeByCity
const updateStudentGradeByCity = (students, city, newGrades) => {
  // Filter the list of students by the specified city
  return students.filter(student => student.location === city)
    .map(student => {
      // Find the new grade for the current student
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      
      // Add a grade property to the student object
      // If a grade is found, use it; otherwise, use 'N/A'
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      
      // Return a new object with the student's properties and the grade
      return {
        ...student,
        grade,
      };
    });
};

// Export the function as the default export
export default updateStudentGradeByCity;

