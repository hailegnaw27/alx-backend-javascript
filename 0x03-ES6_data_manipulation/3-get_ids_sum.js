// Define the function getStudentIdsSum
const getStudentIdsSum = (students) => {
  // Use the reduce method to sum up all the student ids
  return students.reduce((sum, student) => sum + student.id, 0);
};

// Export the function as the default export
export default getStudentIdsSum;

