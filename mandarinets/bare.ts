import {
  Controller,
  GET,
  MandarineCore,
} from "https://deno.land/x/mandarinets/mod.ts";

@Controller()
export class Boo {
  @GET("/")
  public httpHandler(): string {
    return "Hello, Bench!";
  }
}

new MandarineCore().MVC().run({ port: 8000 });
