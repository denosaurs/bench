import { listenAndServe } from "https://deno.land/std/http/server.ts";

import {
  createRouteMap,
  createRouter,
  textResponse,
  ServerRequest,
} from "https://deno.land/x/reno/reno/mod.ts";

const BINDING = ":8000";

const routes = createRouteMap([
  ["/", () => textResponse("Hello, Bench!")],
]);

const router = createRouter(routes);

await listenAndServe(BINDING, async (req) => {
  /* This type assertion allows us to run the
   * existing version of Reno against the bleeding
   * edge Deno runtime and std/http/Server. There
   * will be breaking changes eventually, but this
   * prevents the benchmarks action from breaking every
   * time a new deno/std version is released; otherwise,
   * TypeScript complains about duplicate properties in
   * the ServerRequest type across the two versions. */
  req.respond(await router(req as unknown as ServerRequest));
});
