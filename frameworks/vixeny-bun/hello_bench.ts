
import { vixeny } from "vixeny";


export default {
  port: 8000,
  fetch: vixeny()([
    {
      path: "/",
      type: "response",
      r: () => new Response('Hello, Bench!')
    },
  ])
}