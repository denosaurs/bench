import {
  createApp,
  setLevel,
  Loglevel,
} from "https://deno.land/x/servest/mod.ts";

setLevel(Loglevel.NONE);

const app = createApp();
app.handle("/", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/plain",
    }),
    body: "Hello, Bench!",
  });
});

app.listen({ port: 8000 });
