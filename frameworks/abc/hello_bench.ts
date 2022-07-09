import { Application } from "https://deno.land/x/abc/mod.ts";

const app = new Application();

app
  .get("/", (_) => {
    return "Hello, Bench!";
  })
  .start({ port: 8000 });
