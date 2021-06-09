//Error, if fs is not defined.
//Node module file system fs should be declared.  
const fs = require('fs'); 

//fs.writeFileSync('notes.txt', "My name is Ying Tee.");

//Challenge: Append the message to note.txt 
// 1. Use appendFileSync to append to the file 
// 2. Run the script 
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', ' Here is the appended message using apendFileSync'); 