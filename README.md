<div align="center">
  <h1><code>bench</code></h1>
  <p>
    <strong>📊 Daily benchmarks of deno & node HTTP frameworks</strong>
  </p>
  <br>
  <p align="center">
    <a alt="Bench" href="https://github.com/denosaurs/bench/actions">
      <img src="https://img.shields.io/github/workflow/status/denosaurs/bench/bench" />
    </a>
  </p>
</div>

# Table of Contents

- [Overview](#overview)
  - [Hello, bench!](#hello-bench)
- [Frameworks](#frameworks)
  - [Abc](#abc)
  - [Acorn](#acorn)
  - [Alosaur](#alosaur)
  - [Aqua](#aqua)
  - [Bun](#bun)
  - [Deno](#deno)
  - [Dinatra](#dinatra)
  - [Express](#express)
  - [Fast](#fast)
  - [Fastify](#fastify)
  - [Hono](#hono)
  - [http](#http)
  - [Little](#little)
  - [Megalo](#megalo)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
  - [Reno](#reno)
  - [Router](#router)
  - [Servest](#servest)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Acorn](#acorn-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Deno](#deno-1)
    - [Dinatra](#dinatra-1)
    - [Express](#express-1)
    - [Fast](#fast-1)
    - [Fastify](#fastify-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Little](#little-1)
    - [Megalo](#megalo-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Bun                                                                                  | 78895.92 | 6987.05  | 95807.02 | 100%     |
| Deno                                                                                 | 69311.43 | 4865.05  | 77037.06 | 88%      |
| Fast                                                                                 | 67534.36 | 5894.82  | 73424.26 | 86%      |
| Megalo                                                                               | 64604.96 | 5614.07  | 70396.83 | 82%      |
| Hono                                                                                 | 62952.38 | 5396.39  | 70334.25 | 80%      |
| Reno                                                                                 | 50390.00 | 4119.78  | 53500.50 | 64%      |
| http                                                                                 | 47851.65 | 7938.53  | 53446.33 | 61%      |
| Node                                                                                 | 45233.81 | 6558.72  | 48396.17 | 57%      |
| Alosaur                                                                              | 38020.34 | 7215.44  | 43586.60 | 48%      |
| Fastify                                                                              | 33122.14 | 11783.87 | 42356.63 | 42%      |
| Router                                                                               | 32895.32 | 4252.82  | 37400.22 | 42%      |
| Little                                                                               | 30855.54 | 4464.61  | 35448.87 | 39%      |
| Oak                                                                                  | 27173.15 | 4321.82  | 31132.15 | 34%      |
| Aqua                                                                                 | 25310.97 | 3542.06  | 29963.01 | 32%      |
| Dinatra                                                                              | 18892.41 | 4407.78  | 24661.08 | 24%      |
| Abc                                                                                  | 17225.28 | 2583.80  | 21102.35 | 22%      |
| Opine                                                                                | 10623.04 | 1350.97  | 13161.98 | 13%      |
| Express                                                                              | 8277.32  | 1521.59  | 10800.29 | 10%      |
| Servest                                                                              | 6207.67  | 1697.76  | 11356.69 | 8%       |
| Acorn                                                                                | 4355.62  | 3564.94  | 73753.63 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-b7642984-104e-4736-b43e-59849a66551d) |          |          |          |          |

# Frameworks

## [Abc](https://deno.land/x/abc)

A better Deno framework to create web application

## [Acorn](https://deno.land/x/acorn)

A focused RESTful server framework for Deno 🌰🦕

## [Alosaur](https://deno.land/x/alosaur)

Deno web framework with many decorators

## [Aqua](https://deno.land/x/aqua)

A minimal and fast 🏃 web framework for Deno

## [Bun](https://bun.sh/)

Bun is a fast all-in-one JavaScript runtime

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

## [Express](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js

## [Fast](https://deno.land/x/fast)

Small web framework with near-native performance.

## [Fastify](https://www.fastify.io/)

Fast and low overhead web framework, for Node.js

## [Hono](https://github.com/honojs/hono)

Ultrafast web framework for Cloudflare Workers and Deno. Fast, but not only
fast.

## [http](https://deno.land/std/http)

The deno standard library http server

## [Little](https://deno.land/x/little)

A minimalistic connect-like web framework. Automatically works out of the box
with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.

## [Megalo](https://github.com/tsar-boomba/megalo)

Deno HTTP server framework focused on speed

## [Node](https://nodejs.org/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## [Oak](https://deno.land/x/oak)

A middleware framework for Deno's native HTTP server, Deno Deploy and Node.js
16.5 and later. It also includes a middleware router.

## [Opine](https://deno.land/x/opine)

Fast, minimalist web framework for Deno ported from ExpressJS.

## [Reno](https://deno.land/x/reno)

A thin, testable routing library designed to sit on top of Deno's standard HTTP
module.

## [Router](https://crux.land/router@0.0.12)

The tiny, modern and fast router by the denosaurs for deno and deno deploy. Used
by projects like fresh

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17225.28 | 2583.80 | 21102.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14683.77 | 15617.92 | 17625.86 | 18430.41 | 20431.20 | 20681.32 | 20888.38 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4355.62  | 3564.94 | 73753.63 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2101.25 | 2744.85 | 3349.27 | 4718.99 | 9556.62 | 11393.81 | 14108.52 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 20ms    | 23ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38020.34 | 7215.44 | 43586.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28548.93 | 38439.39 | 41245.27 | 41756.30 | 42331.36 | 42625.43 | 43006.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25310.97 | 3542.06 | 29963.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22512.09 | 24006.38 | 26602.50 | 27265.00 | 27991.16 | 28338.62 | 28734.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78895.92 | 6987.05 | 95807.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 73911.65 | 78712.41 | 80151.06 | 81402.25 | 83130.56 | 85034.59 | 92636.82 |
| **Latency** | 428µs    | 505µs    | 667µs    | 696µs    | 722µs    | 769µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69311.43 | 4865.05 | 77037.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65265.68 | 68754.50 | 70615.65 | 71539.49 | 72318.87 | 72694.20 | 73449.29 |
| **Latency** | 535µs    | 599µs    | 743µs    | 789µs    | 837µs    | 866µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18892.41 | 4407.78 | 24661.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12221.10 | 15587.60 | 21462.62 | 22016.41 | 22590.93 | 23539.93 | 24151.60 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8277.32  | 1521.59 | 10800.29 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6066.77 | 8291.26 | 9013.76 | 9117.75 | 9208.26 | 9236.18 | 9272.20 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67534.36 | 5894.82 | 73424.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63392.74 | 67022.14 | 69230.08 | 69970.76 | 70656.00 | 70980.27 | 71636.31 |
| **Latency** | 604µs    | 667µs    | 712µs    | 789µs    | 834µs    | 857µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 33122.14 | 11783.87 | 42356.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15394.72 | 15702.48 | 40296.59 | 41063.52 | 41546.82 | 41671.13 | 41877.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 62952.38 | 5396.39 | 70334.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59910.00 | 61996.34 | 64421.71 | 65123.52 | 65720.18 | 66049.18 | 66766.72 |
| **Latency** | 702µs    | 738µs    | 771µs    | 810µs    | 860µs    | 881µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47851.65 | 7938.53 | 53446.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37466.57 | 49656.29 | 51319.34 | 51788.77 | 52120.97 | 52357.44 | 52805.85 |
| **Latency** | 848µs    | 895µs    | 998µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30855.54 | 4464.61 | 35448.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27673.76 | 29297.09 | 32812.78 | 33273.99 | 33812.15 | 34151.59 | 34584.42 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64604.96 | 5614.07 | 70396.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62703.58 | 64381.57 | 65645.76 | 66545.17 | 67230.94 | 67682.22 | 68755.56 |
| **Latency** | 669µs    | 711µs    | 753µs    | 801µs    | 864µs    | 911µs    | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45233.81 | 6558.72 | 48396.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45174.41 | 46072.17 | 46648.37 | 47204.18 | 47478.68 | 47627.49 | 47863.22 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27173.15 | 4321.82 | 31132.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23911.19 | 25747.05 | 29147.76 | 29316.98 | 29461.06 | 29725.28 | 30397.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10623.04 | 1350.97 | 13161.98 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9503.49 | 10412.12 | 11036.49 | 11109.90 | 11193.76 | 11801.04 | 12831.44 |
| **Latency** | 3ms     | 3ms      | 4ms      | 5ms      | 5ms      | 6ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50390.00 | 4119.78 | 53500.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49851.33 | 50461.08 | 51029.46 | 51597.84 | 52232.76 | 52531.87 | 52986.03 |
| **Latency** | 902µs    | 943µs    | 972µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32895.32 | 4252.82 | 37400.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28460.82 | 32564.71 | 34592.00 | 35115.59 | 35711.26 | 35992.51 | 36271.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6207.67  | 1697.76 | 11356.69 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4119.06 | 5988.01 | 6773.20 | 7161.35 | 7433.05 | 7746.30 | 8688.07 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 12ms    | 17ms    |

---

<p align="center">Generated 2022-10-09T02:49:59.518Z</p>
