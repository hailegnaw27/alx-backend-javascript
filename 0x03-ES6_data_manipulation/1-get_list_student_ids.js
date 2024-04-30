// Define the function getListStudentIds
const getListStudentIds = (students) => {
  // Check if the input is an array; if not, return an empty array
  if (!Array.isArray(students)) {
    return [];
  }
  
  // Use the map function to extract the id from each student object
  return students.map(student => student.id);
};

// Export the function as the default export
export default getListStudentIds;

