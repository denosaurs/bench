export default {
  port: 8000,
  fetch(_) {
    return new Response("Hello, Bench!");
  },
};
