import fast from "https://deno.land/x/fast/mod.ts";

const app = fast();

app.get("/", () => new Response("Hello, Bench!"));

await Deno.serve(app.handle, { port: 8000 });
