import { Controller, Get, Area, App } from "https://deno.land/x/alosaur/mod.ts";

@Controller()
class HomeController {
  @Get("/")
  text() {
    return "Hello, Bench!";
  }
}

@Area({
  controllers: [HomeController],
})
class HomeArea {}

const app = new App({
  areas: [HomeArea],
  logging: false,
});

app.listen();
