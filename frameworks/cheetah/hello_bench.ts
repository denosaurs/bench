import cheetah from "https://deno.land/x/cheetah/mod.ts";

const app = new cheetah().get("/", () => "Hello, Bench!");

app.serve({ port: 8000 });
