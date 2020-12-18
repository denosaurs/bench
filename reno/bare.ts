import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { createRouter } from "https://deno.land/x/reno/reno/mod.ts";

const router = createRouter([
  ["/", "Hello, Bench!"],
]);

await listenAndServe(BINDING, async (req) => {
    req.respond(await router(req));
});
