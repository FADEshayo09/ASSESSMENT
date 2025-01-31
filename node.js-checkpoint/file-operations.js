// file-operations.js
const fs = require('fs');

// Create and write to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully!');

  // Read from the file
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File Content:', data);
  });
});