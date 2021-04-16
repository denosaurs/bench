import opine from "https://deno.land/x/opine/mod.ts";
const app = opine();
const port = 8000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port);

console.log("server started");