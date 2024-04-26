// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom';

// Implement the function to initialize an array of ClassRoom objects
export default function initializeRooms() {
  // Create an array containing 3 ClassRoom objects with sizes 19, 20, and 34
  return [
    new ClassRoom(19), // Create a ClassRoom object with size 19
    new ClassRoom(20), // Create a ClassRoom object with size 20
    new ClassRoom(34), // Create a ClassRoom object with size 34
  ];
}
