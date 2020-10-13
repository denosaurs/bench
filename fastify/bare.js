const fastify = require('fastify')()

// Declare a route
fastify.get('/', (request, reply) => {
  return "Hello World!";
})

// Run the server!
fastify.listen(8000);

console.log("server started");