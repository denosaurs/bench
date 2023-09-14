import fastro from "https://deno.land/x/fastro/mod.ts";

const f = new fastro();

f.get("/", () => "Hello, Bench!");

await f.serve({ port: 8000 });
