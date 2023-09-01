
import vixeny from "https://deno.land/x/endofunctor/fun.ts";

Deno.serve(
  vixeny()([
    {
      path: "/",
      type: "response",
      r: () => new Response("hello world")
    },
  ]),
);

