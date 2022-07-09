const fastify = require("fastify")();

// Declare a route
fastify.get("/", (_, __) => {
  return "Hello, Bench!";
});

// Run the server!
fastify.listen(8000);
