import { serve } from "https://deno.land/std/http/server.ts";

const init = {
  headers: {
    "Content-Type": "text/html",
    "Cache-Control": "no-transform", // disables response body auto compression, see https://deno.land/manual/runtime/http_server_apis#automatic-body-compression
  },
};

await serve(
  // deno-lint-ignore require-await
  async (_) => {
    return new Response("Hello, Bench!", init);
  },
  { port: 8000 },
);
