import * as Peko from "https://deno.land/x/peko/mod.ts";

const server = new Peko.Server();

server.addRoute({
  route: "/",
  method: "GET",
  handler: (_) => new Response("Hello, Bench!"),
});

server.listen(8000);
