// Getting Input from Users
// Using Yargs 
const chalk = require('chalk');
const yargs = require('yargs');

console.log(process.argv); 
const command = process.argv[2]; //Third item by index 

//Customize yargs version 
yargs.version('1.1.0');
//Create add command 
yargs.command({
    command: "add",
    describe: 'Add a new note',
    handler: function () {
        console.log("Adding a new note!")
    }
})

//Create remove command 
yargs.command({
    command: "remove",
    describe: "remove a note",
    handler: function () {
        console.log("Removing the note!")
    }
})

//Create list command 
yargs.command({
    command: "list",
    describe: "list a note",
    handler: function () {
        console.log("Listing the note!")
    }
})

// Create read command 
yargs.command({
    command: "read",
    describe: "read the note",
    handler: function () {
        console.log("Reading the note")
    }
})

//add, read, remove, list 
console.log(yargs.argv); 

// node lecture-2.js read / add/ remove / list 
// [
//   '/usr/local/bin/node',
//   '/Users/thirihsumyataung/Desktop/node-course/Section-4:FileSystemAndCommandLineArgs/lecture-2.js'
// ]
// { _: [], '$0': 'lecture-2.js' }

// Challenge
// 1. Setup command to support "list" command (print placeholder message for now.)
// 2. SetUp command to support "read" command (print placeholder message for now.)
// 3. Test Your work by running both commands and ensure correct output. 