const fs = require('fs');

function readFileContent(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

module.exports = readFileContent;
