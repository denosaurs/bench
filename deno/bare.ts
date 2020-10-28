import { serve } from "https://deno.land/std@0.75.0/http/server.ts";
const s = serve({ port: 8000 });
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
console.log("server started");
