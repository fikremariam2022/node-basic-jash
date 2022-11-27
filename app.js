// function sayHello(name) {
//   global.console.log("hello " + name);
// }
// sayHello("fikremariam");

// var log = require("./logger");
// log("the logged message");

// (function (exports, require, module, __filename, __dirname) {
//   console.log("hello world");
// })();

// var path = require("path");
// console.log(path);
// var pathObj = path.parse(__filename);
// console.log("PATH OBJ", pathObj);

// var os = require("os");
// var freeMemory = os.freemem;
// var totalMemory = os.totalmem;
// console.log(`free ${freeMemory}`);
// console.log(`total ${totalMemory}`);

// var fs = require("fs");
// var files = fs.readdirSync("./");
// console.log("fs sync", files);
// fs.readdir("./", function (err, result) {
//   if (err) console.log("fs", err);
//   else console.log("fs", result);
// });

//get the event emitter Class (not object)

//register the event with its call back fn

//var emitter = new EventEmitter();

// var Logger = require("./logger");
// var logger = new Logger();
// logger.emit("MyFirstEvent", [1, 2, 3, 4]);

// logger.log("message");
var http = require("http");
var server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.write("hello world");
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3, 4]));
  }
  res.end();
});
server.on("connection", (socket) => {
  console.log("New connection...");
});
server.listen(3000);
console.log("listening..");
