// We install npm library chalk

// Printing in Color

//Challenge 3 : Use the chalk library in your project 

// 1. Install version 2.4.1 of Chalk 
// 2. Load chalk into lecture-4.js
// 3. Use it to print the string "Success !" to the console in green 
// 4. Test ur work 

// Bonus: Use docs to mess around with other styles. Make text bold and inversed. 

const chalk = require('chalk');

const greenMessage = chalk.green('Success!')
console.log(greenMessage);
const boldAndInverseMessage = "Here is my Text"; 
console.log(chalk.blue.inverse.bold(boldAndInverseMessage));
console.log(chalk.yellow.inverse.bold(boldAndInverseMessage)); 