import { Controller, Get, Area, App } from "https://deno.land/x/alosaur/mod.ts";

@Controller()
class HomeController {
  @Get("/")
  text() {
    return "Hello, Bench!";
  }
}

// Declare module
@Area({
  controllers: [HomeController],
})
class HomeArea {}

// Create alosaur application
const app = new App({
  areas: [HomeArea],
});

app.listen();
