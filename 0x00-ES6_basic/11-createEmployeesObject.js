export default function createEmployeesObject(departmentName, employees) {
  // Create an object with a computed property name based on the departmentName parameter
  return {
    [departmentName]: employees,
  };
}
