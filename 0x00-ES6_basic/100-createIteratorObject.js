export default function* createIteratorObject(report) {
  // Get the allEmployees property from the report object
  const allEmployees = report.allEmployees;
  
  // Iterate through each department in allEmployees
  for (const department of Object.values(allEmployees)) {
    // Iterate through each employee in the current department
    for (const employee of department) {
      // Yield the current employee
      yield employee;
    }
  }
}
