import {
  Controller,
  GET,
  MandarineCore,
} from "https://deno.land/x/mandarinets/mod.ts";

@Controller()
export class Boo {
  @GET("/")
  httpHandler() {
    return "Hello, Bench!";
  }
}

new MandarineCore().MVC().run({ port: 8000 });
