const http = require("http");
http
  .Server((_, res) => {
    res.end("Hello, Bench!");
  })
  .listen(8000);
