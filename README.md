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

| Framework                                                                            | Mean     | Stddev  | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | --------- | -------- |
| Bun                                                                                  | 63743.21 | 5963.04 | 79341.24  | 100%     |
| Deno                                                                                 | 56309.03 | 5032.46 | 65082.71  | 88%      |
| Fast                                                                                 | 54765.91 | 4713.47 | 60764.69  | 86%      |
| Megalo                                                                               | 53159.74 | 5194.44 | 59730.03  | 83%      |
| Hono                                                                                 | 49071.15 | 5284.26 | 56321.86  | 77%      |
| Reno                                                                                 | 41165.90 | 3953.46 | 45865.16  | 65%      |
| http                                                                                 | 39003.49 | 7283.63 | 46649.39  | 61%      |
| Node                                                                                 | 33164.13 | 5563.76 | 38587.33  | 52%      |
| Alosaur                                                                              | 30143.74 | 7113.91 | 135278.34 | 47%      |
| Fastify                                                                              | 28877.98 | 5866.39 | 124595.40 | 45%      |
| Router                                                                               | 26595.16 | 4027.54 | 30951.03  | 42%      |
| Little                                                                               | 24165.61 | 3988.73 | 29485.47  | 38%      |
| Oak                                                                                  | 21617.41 | 3677.81 | 32555.76  | 34%      |
| Aqua                                                                                 | 21230.97 | 2958.55 | 26962.55  | 33%      |
| Dinatra                                                                              | 15320.31 | 2944.88 | 20261.69  | 24%      |
| Abc                                                                                  | 13753.84 | 2028.75 | 18307.38  | 22%      |
| Opine                                                                                | 8537.98  | 1275.72 | 23989.05  | 13%      |
| Express                                                                              | 5807.36  | 1501.79 | 11267.22  | 9%       |
| Servest                                                                              | 4846.91  | 1479.23 | 10288.64  | 8%       |
| Acorn                                                                                | 4338.10  | 4750.07 | 56852.57  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-7eaeb5b5-4f0c-4f56-98ab-5aa85db1db98) |          |         |           |          |

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
| 13753.84 | 2028.75 | 18307.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11138.28 | 13005.94 | 14305.28 | 14745.37 | 15565.32 | 16293.46 | 16990.35 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4338.10  | 4750.07 | 56852.57 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1300.96 | 2281.59 | 3017.31 | 5351.94 | 8691.97 | 10487.51 | 20897.33 |
| **Latency** | 4ms     | 6ms     | 13ms    | 20ms    | 24ms    | 25ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 30143.74 | 7113.91 | 135278.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18902.95 | 31081.40 | 32527.06 | 33042.22 | 33469.19 | 33829.41 | 34467.08 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21230.97 | 2958.55 | 26962.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18126.17 | 20321.74 | 22313.72 | 22795.99 | 23559.99 | 23859.87 | 24367.06 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63743.21 | 5963.04 | 79341.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56510.73 | 62898.91 | 65139.72 | 66592.23 | 68137.46 | 69413.75 | 75630.99 |
| **Latency** | 520µs    | 619µs    | 806µs    | 859µs    | 947µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56309.03 | 5032.46 | 65082.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51826.56 | 55415.26 | 57635.28 | 58728.69 | 59742.21 | 60393.94 | 61525.59 |
| **Latency** | 658µs    | 744µs    | 893µs    | 965µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15320.31 | 2944.88 | 20261.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10852.41 | 14901.34 | 16543.19 | 16893.10 | 17585.05 | 18037.98 | 18789.75 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5807.36  | 1501.79 | 11267.22 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3353.43 | 5883.49 | 6495.34 | 6615.20 | 6724.14 | 6785.44 | 7085.46 |
| **Latency** | 7ms     | 7ms     | 7ms     | 7ms     | 11ms    | 14ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54765.91 | 4713.47 | 60764.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50486.20 | 54051.74 | 56206.59 | 57033.74 | 57767.72 | 58217.35 | 59225.88 |
| **Latency** | 769µs    | 820µs    | 873µs    | 966µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 28877.98 | 5866.39 | 124595.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28442.10 | 29302.32 | 30147.31 | 30521.98 | 30970.78 | 31250.32 | 31792.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49071.15 | 5284.26 | 56321.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46231.90 | 48612.63 | 50378.15 | 51307.80 | 51958.48 | 52435.34 | 53399.04 |
| **Latency** | 890µs    | 935µs    | 978µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39003.49 | 7283.63 | 46649.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26340.65 | 40946.63 | 41979.16 | 42441.06 | 42828.27 | 43202.58 | 44090.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24165.61 | 3988.73 | 29485.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20299.89 | 22200.60 | 26007.31 | 26369.66 | 26896.71 | 27314.21 | 27857.51 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53159.74 | 5194.44 | 59730.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49664.21 | 52416.39 | 54302.86 | 55474.05 | 56519.08 | 57108.09 | 58429.37 |
| **Latency** | 792µs    | 851µs    | 910µs    | 983µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33164.13 | 5563.76 | 38587.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32339.56 | 33763.58 | 34554.01 | 35110.60 | 35726.55 | 36106.25 | 37066.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21617.41 | 3677.81 | 32555.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17763.84 | 21739.37 | 22902.07 | 23352.88 | 24063.81 | 24421.10 | 25064.07 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8537.98  | 1275.72 | 23989.05 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 7428.17 | 8298.97 | 8798.76 | 9027.73 | 9304.59 | 9552.50 | 10663.26 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 6ms     | 7ms     | 10ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41165.90 | 3953.46 | 45865.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40219.24 | 40922.99 | 41739.29 | 42603.48 | 43327.28 | 43812.32 | 44612.53 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26595.16 | 4027.54 | 30951.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21511.05 | 26724.60 | 28140.35 | 28731.73 | 29233.74 | 29504.12 | 30222.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4846.91  | 1479.23 | 10288.64 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2417.63 | 4822.86 | 5353.86 | 5639.63 | 5762.64 | 5928.34 | 7058.85 |
| **Latency** | 8ms     | 8ms     | 9ms     | 10ms    | 14ms    | 17ms    | 22ms    |

---

<p align="center">Generated 2022-10-04T02:35:08.075Z</p>
