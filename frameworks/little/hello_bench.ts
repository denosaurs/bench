import App from "https://deno.land/x/little/mod.ts";

const app = new App();

app.use(async (_, next) => {
  await next();
});

app.use(async (ctx) => {
  await ctx.respond(new Response("Hello, Bench!"));
});

app.detect({ port: 8000 });
