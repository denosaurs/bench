const fastify = require("fastify")();

// Declare a route
fastify.get("/", (request, reply) => {
  return "Hello, Bench!";
});

// Run the server!
fastify.listen(8000);
