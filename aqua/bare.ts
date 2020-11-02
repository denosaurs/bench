import Aqua from "https://deno.land/x/aqua/mod.ts";

const app = new Aqua(8000);

app.get("/", (req) => {
    return "Hello, Bench!";
});
