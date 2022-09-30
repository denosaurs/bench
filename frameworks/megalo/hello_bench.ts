import { Megalo } from "https://deno.land/x/megalo/mod.ts";

new Megalo()
  .get('/', (_req, res) => res.body("Hello, Bench!"))
  .serve({ port: 8000 });
