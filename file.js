const fs = require('fs');

// Write to file
fs.writeFileSync('data.txt', 'Hello Node.js');

// Read from file
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);
