import { Hono } from "https://deno.land/x/hono/mod.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello, Bench!");
});

await Deno.serve((req) => app.fetch(req), {
  port: 8000,
});
