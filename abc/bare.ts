import { Application } from "https://deno.land/x/abc/mod.ts";

const app = new Application();

app
  .get("/hello", (c) => {
    return "Hello, Abc!";
  })
  .start({ port: 8000 });