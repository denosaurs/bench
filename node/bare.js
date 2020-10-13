const http = require("http");
const port = process.argv[2] || "8000";
http
  .Server((req, res) => {git st
    res.end("Hello World!");
  })
  .listen(port);

console.log("server started");