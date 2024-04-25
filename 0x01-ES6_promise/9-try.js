export default function guardrail(mathFunction) {
  // Create an array named queue
  const queue = [];
  
  try {
    // Try executing the mathFunction
    const result = mathFunction();
    // Append the result of the function to the queue
    queue.push(result);
  } catch (error) {
    // If an error occurs, append the error message to the queue
    queue.push(`Error: ${error.message}`);
  } finally {
    // Append the message 'Guardrail was processed' to the queue in all cases
    queue.push('Guardrail was processed');
  }
  
  // Return the queue array
  return queue;
}

