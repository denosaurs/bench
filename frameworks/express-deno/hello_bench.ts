import express from "npm:express";
const app = express();
const port = 8000;

app.get("/", (_, res) => res.send("Hello, Bench!"));

app.listen(port);
