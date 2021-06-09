// Getting Input from Users

const chalk = require('chalk');

console.log(process.argv); 
const command = process.argv[2]; //Third item by index 
if (command === "add") {
    console.log("Adding Note!"); 
}
else if (command === "remove") {
    console.log("Removing Note!"); 
}


//node lecture-1.js add --title="This is my title"
// [
//   '/usr/local/bin/node',
//   '/Users/HKGHLJADGL/Desktop/node-course/Section-4:FileSystemAndCommandLineArgs/lecture-1.js',
//   'add',
//   '--title=This is my title'
// ]