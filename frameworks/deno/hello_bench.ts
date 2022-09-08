await Deno.serve(() => new Response("Hello, Bench!"), {
  port: 8000,
});
