import { Deso } from "https://deno.land/x/deso/mod.ts";

const app = new Deso();

app.get("/", (context) => context.text("Hello, Bench!"));

await app.serve({ port: 8000 });
