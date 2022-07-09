import opine from "https://deno.land/x/opine/mod.ts";

const app = opine();

app.get("/", (_, res) => res.send("Hello, Bench!"));

app.listen(8000);
