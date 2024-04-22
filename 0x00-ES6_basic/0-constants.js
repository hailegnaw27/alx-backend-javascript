// Function taskFirst uses const to declare the variable task
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Function getLast() returns the string ' is okay'
export function getLast() {
  return ' is okay';
}

// Function taskNext uses let to declare the variable combination
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast(); // Concatenating the return value from getLast()

  return combination;
}

