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
const dataBuffer = fs.readFileSync('../Playground/1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.title); 
//console.log(dataBuffer); 