const EventEmitter = require("events");
const celebrity = new EventEmitter();
//Subscribe to the celeberity observer 1
celebrity.on("Code", (result) => {
  if (result === "done") {
    console.log("Your code is good for go in production");
  }
});

// Subscribe to the celeberity observer 2
celebrity.on("Code", (result) => {
  if (result === "done") {
    console.log("Your code have bug can you fixed this");
  }
});

process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});
celebrity.emit("Code", "done");
celebrity.emit("Code", " done");
celebrity.emit("Code", "done");
