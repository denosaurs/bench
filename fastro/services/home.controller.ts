import type { Request } from "https://deno.land/x/fastro/mod.ts";
export const handler = (request: Request) => {
  request.send(`Hello world`);
};