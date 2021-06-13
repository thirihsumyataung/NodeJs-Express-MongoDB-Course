const fs = require('fs'); 

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
        console.log("New note added ! "); 
    }
    //If we have found the duplicate note . 
    else {
        console.log("Note title Taken !"); 
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
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}