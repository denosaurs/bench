import cheetah from "https://deno.land/x/cheetah/mod.ts";

const app = new cheetah().get("/", () => "Hello, Bench!");

Deno.serve(app.fetch, { port: 8000 });
