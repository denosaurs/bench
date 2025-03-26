
import vixeny from "https://deno.land/x/endofunctor@v0.0.950/fun.ts";

Deno.serve(
  vixeny()([
    {
      path: "/",
      type: "response",
      r: () => new Response('Hello, Bench!')
    },
  ]),
);

