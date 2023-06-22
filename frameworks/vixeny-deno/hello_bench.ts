
import vixeny from "https://deno.land/x/endofunctor/fun.ts";

Deno.serve(
  vixeny({ hasName: "http://localhost:8000/" })([
    {
      path: "/",
      f: () => "hello world",
    },
  ]),
);

