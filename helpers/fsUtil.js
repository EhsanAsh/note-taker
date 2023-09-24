const fs = require('fs');
const util = require('util');

// promisify the fs module
// Used(https://nodejs.org/api/util.html#utilpromisifyoriginal) to learn about promisify.
const readFromFile = util.promisify(fs.readFile);

const writeToFile = (dest, content) => 
  fs.writeFile(dest, JSON.stringify(content, null, 2), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${dest}`)
  );

const readAndAppend = (content, src) => { 
  fs.readFile(src, 'utf8', (err, data) => { 
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(src, parsedData);
    }
  });
};

const readAndDelete = (id, file) => { 

  fs.readFile(file, 'utf8', (err, data) => { 
    if (err) {
      console.error(`Error in reading file: ${err}`);
    } else {

      const parsedData = JSON.parse(data);
      const noteIndex = parsedData.findIndex((note) => note.id === id);

      if (noteIndex !== -1) {
      // check if the note exists in the file and delete it.
        parsedData.splice(noteIndex, 1);
        writeToFile(file, parsedData);
      } else {
        console.error(`Error in deleting note with id: ${id}`);
      }

    }
  });

};

module.exports = { readFromFile, writeToFile, readAndAppend, readAndDelete };