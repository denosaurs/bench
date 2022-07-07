import { serve } from "https://deno.land/std/http/server.ts";
import { Hono, RegExpRouter } from "https://deno.land/x/hono/mod.ts";

const app = new Hono({ router: new RegExpRouter() });

app.get("/", (c) => {
  return c.text("Hello, Bench!");
});

serve((req) => app.fetch(req));
