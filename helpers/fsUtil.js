const fs = require('fs');
const util = require('util');

// promisify the fs module
// Used(https://nodejs.org/api/util.html#utilpromisifyoriginal) to learn about promisify.
const readFileAsync = util.promisify(fs.readFile);

const writeToFile = (dest, data) => 
  fs.writeFile(dest, JSON.stringify(data, null, 2), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${dest}`)
  );