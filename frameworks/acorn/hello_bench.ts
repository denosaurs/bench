import { Router } from "https://deno.land/x/acorn/mod.ts";

const router = new Router();

router.get("/", () => new Response("Hello, Bench!"));

router.listen({ port: 8000 });
