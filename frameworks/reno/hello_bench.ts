import {
  createRouteMap,
  createRouter,
} from "https://deno.land/x/reno/reno/mod.ts";

const routes = createRouteMap([
  ["/", () => new Response("Hello, Bench!")],
]);

const router = createRouter(routes);

Deno.serve((req) => router(req), {
  port: 8000,
});
