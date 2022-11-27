var EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.on("MyFirstEvent", function (args) {
      console.log("First event", args);
    });
    console.log(message);
    //somewhere emit the event
  }
}
module.exports = Logger;
