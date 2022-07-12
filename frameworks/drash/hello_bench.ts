import {
  Request as DrashRequest,
  Resource,
  Response as DrashResponse,
  Server,
} from "https://deno.land/x/drash/mod.ts";

class HelloResource extends Resource {
  public paths = ["/"];

  public GET(_request: DrashRequest, response: DrashResponse) {
    return response.send("text/plain", "Hello, Bench!");
  }
}

const server = new Server({
  hostname: "localhost",
  port: 8000,
  protocol: "http",
  resources: [
    HelloResource,
  ],
});

server.run();
