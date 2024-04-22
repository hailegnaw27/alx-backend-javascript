export default function createReportObject(employeesList) {
  // Return an object containing allEmployees and getNumberOfDepartments method
  return {
    // Set allEmployees to the employeesList
    allEmployees: employeesList,
    
    // Define a method that returns the number of departments
    getNumberOfDepartments(allEmployees) {
      // Return the number of keys in the allEmployees object
      return Object.keys(allEmployees).length;
    },
  };
}

