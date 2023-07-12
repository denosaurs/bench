const { serverFactory } = require('@geut/fastify-uws');
const fastify = require("fastify")({ serverFactory });

// Declare a route
fastify.get("/", (_, __) => {
  return "Hello, Bench!";
});

// Run the server!
fastify.listen(8000);
