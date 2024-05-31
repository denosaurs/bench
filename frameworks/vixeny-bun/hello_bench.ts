
import { vixeny } from "vixeny";


export default {
  port: 8000,
  fetch: vixeny()([
    //@ts-ignore
    {
      path: "/",
      type: "response",
      r: () => new Response('Hello, Bench!')
    },
  ])
}