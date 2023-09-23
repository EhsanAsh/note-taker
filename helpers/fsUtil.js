const fs = require('fs');
const util = require('util');

// promisify the fs module
// Used(https://nodejs.org/api/util.html#utilpromisifyoriginal) to learn about promisify.
const readFileAsync = util.promisify(fs.readFile);