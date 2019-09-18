const fs = require('fs');
const chalk = require('chalk');

// GetNotes
const getNote = (title) => {
      const allNotes = loadNotes();
      const note = allNotes.find((note) => note.title === title );
      if(note) {
          console.log(chalk.bgGreen(note.title), note.body);
      }else{
          console.log(chalk.bgRed("Unable to Find Note!"));
      }
};



// Add Notes
const addNotes = (title, body) => {
    const allNotes = loadNotes();
    const duplicateNote = allNotes.find(note => note.title === title);
    if(!duplicateNote){
      const updatedData = allNotes.concat({title, body});
      saveNotes(updatedData);
      console.log(chalk.bgGreen("New Note Added :)"));
    }else {
      console.log(chalk.bgRed("Note already Exist!"));
    }
};

// Remove Notes
const removeNote = (title) => {
    const allNotes = loadNotes();
    const updatedData = allNotes.filter(note => note.title !== title);
    if(allNotes.length === updatedData.length) {
        console.log(chalk.bgRed("No Note Found!"));
    }else {
      saveNotes(updatedData);
      console.log(chalk.bgGreen("Note Removed!"));

    }
};
// List Notes
const listNotes = () => {
  const allNotes = loadNotes();
  allNotes.map(note => console.log(`Title: ${note.title} body: ${note.body}`));
}

// Save Notes
const saveNotes = (updatedData) => {
  const notesJSON = JSON.stringify(updatedData);
    fs.writeFileSync('notes-json.json', notesJSON);
}

//Load Notes
const loadNotes = () => {
    try{
    const bufferData = fs.readFileSync('notes-json.json');
    const notesJSON = bufferData.toString();
    const notes = JSON.parse(notesJSON);
    return notes;
    }catch{
      return [];
    }
}


module.exports = {
  getNote,
  addNotes,
  removeNote, 
  listNotes
};

