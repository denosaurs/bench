const HyperExpress = require("hyper-express");
const app = new HyperExpress.Server();

app.get("/", (_, response) => {
  response.send("Hello, Bench!");
});

app.listen(8000);
