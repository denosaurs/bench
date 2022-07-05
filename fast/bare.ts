import fast from "https://deno.land/x/fast@1.0.0/mod.ts";

const app = fast();

app.get("/", () => new Response("Hello, World!"));

await app.serve();
