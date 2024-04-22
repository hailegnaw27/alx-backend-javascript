export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const employ of reportWithIterator) {
    employees.push(employ);
  }

  return employees.join(" | ");
}
