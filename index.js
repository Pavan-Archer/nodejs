// const hello = 'Hello world!'
// console.log(hello) 

// Read File

const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn)

// Create New File

const textOut = `Reading the input file : ${textIn}`;
fs.writeFileSync('./txt/output.txt', textOut);

console.log('Its Working!')