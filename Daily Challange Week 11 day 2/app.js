// app.js
const greet = require('./greeting');

console.log(greet('Alice'));



//Modify



// app.js
const colorfulMessage = require('./colorful-message');

colorfulMessage();


//modify

// app.js
const greet = require('./greeting');
const colorfulMessage = require('./colorful-message');
const readFile = require('./files/read-file');

greet('Bob');
colorfulMessage();
readFile('files/file-data.txt');
