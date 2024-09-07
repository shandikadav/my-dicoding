const fs = require("fs");

const data = fs.readFileSync("note.txt", "UTF-8");

console.log(data);
