import fast from "https://deno.land/x/fast/mod.ts";

const app = fast();

app.get("/", () => new Response("Hello, World!"));

await app.serve();
