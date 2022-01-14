import { HttpServer } from "https://deno.land/x/deco@0.9.1/mod.ts";

class Bench {
  @HttpServer.Get("/")
  bench() {
    return { body: "Hello, Bench!" };
  }
}

HttpServer.serve({
  port: 8000,
  controllers: [Bench],
});
