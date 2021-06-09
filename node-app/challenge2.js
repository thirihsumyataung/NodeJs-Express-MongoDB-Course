// Challenge 2 : Define and use a function in a new file

// 1. Create a new file called notes.js 
// 2. Create a getNotes function that return your notes ...
// 3. Export getNote funtion 
// 4. From challenge2.js , load in and call the function printing the message to console . 

const NoteFunction = require('./notes.js');
const msg = NoteFunction(); 
console.log(msg); 