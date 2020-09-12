import { App, get } from "https://denopkg.com/syumai/dinatra/mod.ts";

const app = new App(8000);

app.register(get("/", () => "Hello, Bench!"));

app.serve();
