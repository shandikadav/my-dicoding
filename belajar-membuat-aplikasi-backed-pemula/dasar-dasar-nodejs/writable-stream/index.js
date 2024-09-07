const fs = require("fs");

const readableStream = fs.createReadStream("./input.txt", {
  highWatermark: 15,
});

const writableStream = fs.createWriteStream("./output.txt");

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
    // process.stdout.write(`${readableStream.read()}\n`);
  } catch (error) {}
});

readableStream.on("end", () => {
  console.log("Done");
});

readableStream.emit("end");
