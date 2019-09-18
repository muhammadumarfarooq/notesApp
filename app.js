const yargs = require('yargs');
const fs = require('fs');

const notes = require('./utils');

//Adding Notes
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: "Add Note Title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Add body of Notes',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

//Removing Notes
yargs.command({
  command: 'remove',
  describe: 'Remove a Note',
  builder: {
    title: {
      describe: "Title of the Note",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  }
});

//Listing Notes
yargs.command({
  command: 'list',
  describe: 'List down all the Notes',
  
  handler: function () {
    notes.listNotes();
  }
});

// Read Notes
yargs.command({
  command: 'read',
  describe: 'Read note...',
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.getNote(argv.title);
  }
});

// console.log(yargs.argv);
yargs.parse();

