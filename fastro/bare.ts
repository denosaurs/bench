import { Fastro } from "https://deno.land/x/fastro/mod.ts";

const server = new Fastro();

server.get("/", (req) => req.send("Hello World!"));

server.listen({
  port: 8000
});

console.log("server started");