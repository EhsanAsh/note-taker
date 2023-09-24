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

const readAndDelete = (file) => { 
  fs.readFile(file, 'utf8', (err, data) => { 
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      const noteIndex = parsedData.findIndex((note) => note.id === id);
      parsedData.splice(noteIndex, 1);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend, readAndDelete };