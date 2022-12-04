import application from "https://deno.land/x/fastro/server/mod.ts";

const app = application();

app.get("/", () => "Hello, Bench!");

await app.serve({ port: 8000 });
