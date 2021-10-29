import {
  Request,
  Resource,
  Response,
  Server,
} from "https://deno.land/x/drash/mod.ts";

class HomeResource extends Resource {
  public paths = ["/"];

  public GET(_request: Request, response: Response) {
    return response.send("text/plain", "Hello, Bench!");
  }
}

const server = new Server({
  hostname: "0.0.0.0",
  port: 8000,
  protocol: "http",
  resources: [
    HomeResource,
  ],
});

server.run();
