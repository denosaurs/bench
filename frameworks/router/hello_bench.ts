import { serve } from "https://deno.land/std/http/server.ts";
import { router } from "https://crux.land/router@0.0.12";

await serve(
  router({
    "/": (_) => new Response("Hello, Bench!"),
  }),
  { port: 8000 },
);
