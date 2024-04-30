// Define the function getStudentsByLocation
const getStudentsByLocation = (students, city) => {
  // Use the filter method to find students located in the specified city
  return students.filter(student => student.location === city);
};

// Export the function as the default export
export default getStudentsByLocation;

