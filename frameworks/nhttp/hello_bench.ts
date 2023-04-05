import nhttp from "https://deno.land/x/nhttp/mod.ts";

const app = nhttp({ flash: true });

app.get("/", () => "Hello, Bench!");

app.listen(8000);
