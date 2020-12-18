import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { createRouter, textResponse } from "https://deno.land/x/reno/reno/mod.ts";

const BINDING = ":8000";

const router = createRouter([
  ["/", () => textResponse("Hello, Bench!")],
]);

await listenAndServe(BINDING, async (req) => {
    req.respond(await router(req));
});
