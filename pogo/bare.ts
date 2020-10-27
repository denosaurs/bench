import pogo from "https://deno.land/x/pogo/main.ts";

const server = pogo.server({ hostname: "0.0.0.0", port: 8000 });

server.router.get("/", () => {
  return "Hello, Bench!";
});

server.start();
