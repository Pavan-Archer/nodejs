// const hello = 'Hello world!'
// console.log(hello)

// Blocking Synchronous way

// Read File

const fs = require("fs");
const http = require("http");
const url = require("url");

////////// FILE //////////

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// Create New File

// const textOut = `Reading the input file : ${textIn}`;
// fs.writeFileSync("./txt/output.txt", textOut);

// console.log("Its Working!");

// Non Blocking Synchronous way

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("ERROR!");
//   console.log(data);
//   fs.writeFile("./txt/final.txt", "utf-8", (err) => {
//     console.log("Your files has been written!");
//   });
// });

////////////////////

// SERVER

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log(req.url);

  if (pathName === "/" || pathName === "/api") {
    res.end(data);
  } else {
    res.end("No Json Data!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
