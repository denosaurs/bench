import { Drash } from "https://deno.land/x/drash/mod.ts";

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];
  public GET() {
    this.response.body = "Hello, Bench!";
    return this.response;
  }
}

const server = new Drash.Http.Server({
  resources: [HomeResource],
});

server.run({
  hostname: "0.0.0.0",
  port: 8000,
});
