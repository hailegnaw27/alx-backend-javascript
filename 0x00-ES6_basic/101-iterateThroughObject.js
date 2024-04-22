export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to hold all employee names
  const employeeNames = [];
  
  // Iterate through the reportWithIterator using a for...of loop
  for (const employee of reportWithIterator) {
    // Add each employee name to the employeeNames array
    employeeNames.push(employee);
  }
  
  // Join all employee names using '|' as the separator and return the result
  return employeeNames.join(' | ');
}
