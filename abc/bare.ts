import { Application } from "https://deno.land/x/abc/mod.ts";

const app = new Application();

app
  .get("/", (c) => {
    return "Hello, Bench!";
  })
  .start({ port: 8000 });
