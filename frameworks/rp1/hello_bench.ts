import Router from "https://deno.land/x/rp1/mod.ts";

const router = new Router();

router.get("/", () => "Hello, Bench!");

Deno.serve({ port: 8000, handler: router.handle });
