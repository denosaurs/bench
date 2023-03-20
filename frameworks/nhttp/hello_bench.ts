import nhttp from "https://deno.land/x/nhttp/mod.ts";

const app = nhttp();

app.get("/", () => "Hello, Bench!");

app.listen(8000);
