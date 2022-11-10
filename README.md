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
  - [Hyper Express](#hyper-express)
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
    - [Hyper Express](#hyper-express-1)
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

| Framework                                                                            | Mean     | Stddev  | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | -------- | -------- |
| Bun                                                                                  | 70665.08 | 3432.02 | 82007.09 | 100%     |
| Deno                                                                                 | 60333.17 | 4794.83 | 68134.50 | 85%      |
| Hono                                                                                 | 56098.78 | 5438.62 | 60485.50 | 79%      |
| Hyper Express                                                                        | 55607.36 | 2432.92 | 57637.87 | 79%      |
| Megalo                                                                               | 55497.33 | 4474.41 | 59988.00 | 79%      |
| Fast                                                                                 | 45627.01 | 9266.12 | 56032.43 | 65%      |
| Reno                                                                                 | 45540.51 | 3735.80 | 48712.87 | 64%      |
| http                                                                                 | 45250.02 | 8757.16 | 51537.98 | 64%      |
| Node                                                                                 | 35593.64 | 5229.03 | 38362.80 | 50%      |
| Alosaur                                                                              | 33760.88 | 8231.90 | 78492.11 | 48%      |
| Router                                                                               | 31289.94 | 4520.20 | 35240.67 | 44%      |
| Fastify                                                                              | 30508.75 | 4866.33 | 33272.09 | 43%      |
| Little                                                                               | 28275.62 | 4341.42 | 32676.91 | 40%      |
| Oak                                                                                  | 24773.88 | 4070.58 | 28972.18 | 35%      |
| Aqua                                                                                 | 24527.00 | 3771.63 | 29789.50 | 35%      |
| Dinatra                                                                              | 17822.88 | 3364.99 | 37257.33 | 25%      |
| Abc                                                                                  | 15729.19 | 2515.91 | 19733.85 | 22%      |
| Opine                                                                                | 9954.96  | 1436.43 | 14075.60 | 14%      |
| Express                                                                              | 6376.67  | 1526.09 | 8337.99  | 9%       |
| Servest                                                                              | 5619.82  | 1639.01 | 8661.45  | 8%       |
| Acorn                                                                                | 5279.94  | 5951.76 | 63261.68 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-e4645f22-80aa-4be2-a276-fd1a17f35526) |          |         |          |          |

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

## [Hyper Express](https://github.com/kartikk221/hyper-express)

High performance Node.js webserver with a simple-to-use API powered by
uWebsockets.js under the hood.

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
| 15729.19 | 2515.91 | 19733.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11809.52 | 14620.61 | 16801.98 | 17133.79 | 17901.25 | 18112.71 | 19071.12 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5279.94  | 5951.76 | 63261.68 |     |

| **Stat**    | 10     | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------ | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 702.72 | 2343.01 | 3193.46 | 4963.27 | 11780.39 | 21130.19 | 22928.88 |
| **Latency** | 4ms    | 5ms     | 12ms    | 19ms    | 22ms     | 23ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33760.88 | 8231.90 | 78492.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21701.01 | 33305.00 | 37605.89 | 38350.21 | 38776.14 | 39007.36 | 39510.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24527.00 | 3771.63 | 29789.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21100.56 | 22667.93 | 26180.82 | 26641.69 | 26985.89 | 27508.45 | 28054.18 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 70665.08 | 3432.02 | 82007.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65992.82 | 69817.85 | 71200.46 | 72451.01 | 73969.07 | 74843.08 | 77373.03 |
| **Latency** | 481µs    | 568µs    | 748µs    | 783µs    | 818µs    | 850µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60333.17 | 4794.83 | 68134.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56765.85 | 59752.96 | 61462.23 | 62499.15 | 63226.96 | 63803.60 | 65209.52 |
| **Latency** | 593µs    | 678µs    | 856µs    | 910µs    | 957µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17822.88 | 3364.99 | 37257.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13412.56 | 16037.59 | 18816.49 | 19304.57 | 21290.12 | 21718.20 | 22158.51 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6376.67  | 1526.09 | 8337.99 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3714.06 | 6120.97 | 7165.40 | 7294.07 | 7390.96 | 7423.96 | 7503.35 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 11ms    | 12ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45627.01 | 9266.12 | 56032.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30572.27 | 47106.85 | 49689.77 | 50359.47 | 50732.69 | 51104.42 | 51572.59 |
| **Latency** | 872µs    | 935µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30508.75 | 4866.33 | 33272.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29761.83 | 30937.34 | 31841.29 | 32362.36 | 32582.03 | 32704.22 | 32911.08 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56098.78 | 5438.62 | 60485.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53029.52 | 55841.97 | 57409.83 | 58303.32 | 58925.15 | 59303.75 | 59718.07 |
| **Latency** | 691µs    | 798µs    | 862µs    | 959µs    | 997µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45250.02 | 8757.16 | 51537.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29717.44 | 47214.11 | 49023.86 | 49602.83 | 50042.96 | 50247.04 | 50639.19 |
| **Latency** | 885µs    | 949µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55607.36 | 2432.92 | 57637.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54626.03 | 55312.01 | 56060.94 | 56566.02 | 56901.54 | 57061.46 | 57291.50 |
| **Latency** | 824µs    | 836µs    | 852µs    | 870µs    | 913µs    | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28275.62 | 4341.42 | 32676.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24016.95 | 25863.28 | 30300.21 | 30806.07 | 31326.53 | 31659.38 | 32065.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55497.33 | 4474.41 | 59988.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52810.40 | 54791.34 | 56362.57 | 57453.11 | 58314.40 | 58719.85 | 59577.37 |
| **Latency** | 769µs    | 824µs    | 877µs    | 945µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35593.64 | 5229.03 | 38362.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35198.80 | 36043.86 | 36737.36 | 37525.40 | 37783.01 | 37906.71 | 38060.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24773.88 | 4070.58 | 28972.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20333.49 | 25429.42 | 26479.72 | 26685.08 | 26884.91 | 27168.07 | 28088.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9954.96  | 1436.43 | 14075.60 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8687.70 | 9393.71 | 10241.42 | 10541.97 | 11142.86 | 11905.84 | 13210.20 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45540.51 | 3735.80 | 48712.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44838.41 | 45507.95 | 46056.05 | 46701.20 | 47310.26 | 47610.69 | 48037.01 |
| **Latency** | 975µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31289.94 | 4520.20 | 35240.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25469.96 | 31104.88 | 33268.43 | 33685.80 | 34159.33 | 34489.03 | 34934.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5619.82  | 1639.01 | 8661.45 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2824.45 | 5583.15 | 6119.44 | 6626.55 | 6853.44 | 6952.73 | 8121.17 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 12ms    | 13ms    | 20ms    |

---

<p align="center">Generated 2022-11-10T18:15:37.825Z</p>
