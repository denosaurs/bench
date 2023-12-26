import Elysia from "elysia";

new Elysia().get("/", "Hello, Bench!").listen(8000);