// Storing Data with Json 
// Using Yargs 

const fs = require('fs');

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
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log("Title : " + argv.title);
        console.log("Body : " + argv.body);
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

yargs.parse();

//console.log(yargs.argv);


//We are trying to access the data store in Json file 
const dataBuffer = fs.readFileSync('../Playground/data.json');
const dataJson = dataBuffer.toString();
const user = JSON.parse(dataJson);
console.log(user);

user.name = "Ying Tee";
user.age = 28;
const userJson = JSON.stringify(user);
fs.writeFileSync('../Playground/data.json', userJson); 
//console.log(dataBuffer); 

//Challenge: Work with JSON and the file System 
// 1. Load and parse the JSON data 
// 2. Challenge the name and age properly using your info 
// 3. Stringfy the changed object and overwrite the original date 
// 4. Test your work by viewing data in the JSON file 