import { App } from "https://deno.land/x/tinyhttp/app.ts";

const app = new App();

app.get("/", (req, res) => {
  res.send("Hello, Bench!");
});

app.listen(8000);
