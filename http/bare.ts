import { serve } from "https://deno.land/std/http/server.ts";

serve(() => new Response("Hello, Bench!"), { port: 8000 });
