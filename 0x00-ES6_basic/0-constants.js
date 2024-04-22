// Function taskFirst uses const to declare the variable task
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Function taskNext uses let to declare the variable combination
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

// Helper function getLast
export function getLast() {
  return ' is okay';
}

