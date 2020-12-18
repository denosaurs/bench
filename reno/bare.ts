import { listenAndServe } from "https://deno.land/std/http/server.ts";

import {
  createRouteMap,
  createRouter,
  textResponse,
} from "https://deno.land/x/reno/reno/mod.ts";

const BINDING = ":8000";

const routes = createRouteMap([
  ["/", () => textResponse("Hello, Bench!")],
]);

const router = createRouter(routes);

await listenAndServe(BINDING, async (req) => {
  req.respond(await router(req));
});
