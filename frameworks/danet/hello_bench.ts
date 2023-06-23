import { Module, Controller, Get, DanetApplication } from "https://deno.land/x/danet/mod.ts";

@Controller()
class HelloBenchController {
    @Get()
    hello() {
        return 'Hello, Bench!'
    }
}

@Module({
    controllers: [HelloBenchController]
})
class HelloBenchModule {}

const danetApp = new DanetApplication();
await danetApp.init(HelloBenchModule);
await danetApp.listen(8000);