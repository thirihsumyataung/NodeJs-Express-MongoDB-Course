
// Challenge : Setup command option and function 

// 1. Setup the remove command to take a required "--title" option 
// 2. Create and exports a removeNote function from lecture-5.js 
// 3. Call removeNote log to the title of the note to be removed. 
// 4. Have a removeNote log the title of the note to me removed 
// 5. Test your work using: node app.js remove --title="some title"

//Challenge: Wire up remove note 
// 1. Load existing notes 
// 2. Use array filter nethod to remove the matching note ( if any )
// 3. Save the newly created array 
// 4. Test your work with a title that exists and a title that doesn't exit 

const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return "Your Notes"; 
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title 
    });
    
    //Check if there is duplictae note or not  
    if (duplicateNotes.length === 0) {
         notes.push({
        title: title,
        body: body
    })
       // console.log(notes);
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added ! ")); 
    }
    //If we have found the duplicate note . 
    else {
        console.log(chalk.red.inverse("Note title Taken !")); 
    }
   
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON); 
}
const loadNotes = function () {

    try {   
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON); 
    } catch(error) {
        return []; 
    }
    
}

const removeNotes = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title; 
    })
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed! "));
        saveNotes(notesToKeep); 
    }
    else {
        console.log(chalk.red.inverse("No Note found!"));
        
    }
    
    //console.log(title); 
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
}