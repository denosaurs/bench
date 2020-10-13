const http = require("http");
const port = process.argv[2] || "1447";
http
  .Server((req, res) => {
    res.end("Hello World!");
  })
  .listen(port);

console.log("server started");