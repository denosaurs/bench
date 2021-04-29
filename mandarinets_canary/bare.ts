import {
  Controller,
  GET,
  MandarineCore,
} from "https://raw.githubusercontent.com/mandarineorg/mandarinets/master/mod.ts";

@Controller()
export class Boo {
  @GET("/")
  httpHandler() {
    return "Hello, Bench!";
  }
}

new MandarineCore().MVC().run({ port: 8000 });
