import { Deso } from "jsr:@deso/core";

const app = new Deso();

app.get("/", (context) => context.text("Hello, Bench!"));

await app.serve({ port: 8000 });
