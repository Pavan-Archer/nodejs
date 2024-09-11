// const hello = 'Hello world!'
// console.log(hello)

// Blocking Synchronous way

// Read File

const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textIn);

// Create New File

const textOut = `Reading the input file : ${textIn}`;
fs.writeFileSync("./txt/output.txt", textOut);

console.log("Its Working!");

// Non Blocking Synchronous way

fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  if (err) return console.log("ERROR!");
  console.log(data);
  fs.writeFile("./txt/final.txt", "utf-8", (err) => {
    console.log("Your files has been written!");
  });
});
