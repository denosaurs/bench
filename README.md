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
  - [Cheetah](#cheetah)
  - [Danet (Oak)](#danet-oak)
  - [Deno](#deno)
  - [Deso](#deso)
  - [Dinatra](#dinatra)
  - [Express](#express)
  - [Express (Deno)](#express-deno)
  - [Fast](#fast)
  - [Fastify](#fastify)
  - [Fastro](#fastro)
  - [Hono](#hono)
  - [http](#http)
  - [Hyper Express](#hyper-express)
  - [Little](#little)
  - [Megalo](#megalo)
  - [NHttp](#nhttp)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
  - [Peko](#peko)
  - [Reno](#reno)
  - [Router](#router)
  - [Stric](#stric)
  - [Servest](#servest)
  - [Vixeny (Deno)](#vixeny-deno)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Acorn](#acorn-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Cheetah](#cheetah-1)
    - [Danet (Oak)](#danet-oak-1)
    - [Deno](#deno-1)
    - [Deso](#deso-1)
    - [Dinatra](#dinatra-1)
    - [Express](#express-1)
    - [Express (Deno)](#express-deno-1)
    - [Fast](#fast-1)
    - [Fastify](#fastify-1)
    - [Fastro](#fastro-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Hyper Express](#hyper-express-1)
    - [Little](#little-1)
    - [Megalo](#megalo-1)
    - [NHttp](#nhttp-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Peko](#peko-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Stric](#stric-1)
    - [Servest](#servest-1)
    - [Vixeny (Deno)](#vixeny-deno-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Stric                                                                                | 39634.27 | 11510.00 | 55289.60 | 100%     |
| Deno                                                                                 | 38915.93 | 11449.68 | 53365.54 | 98%      |
| Hyper Express                                                                        | 38082.49 | 14248.16 | 57924.17 | 96%      |
| Fast                                                                                 | 37856.99 | 9137.50  | 48157.75 | 96%      |
| NHttp                                                                                | 36121.17 | 9964.71  | 48742.92 | 91%      |
| Bun                                                                                  | 35935.17 | 11680.73 | 55253.11 | 91%      |
| Vixeny (Deno)                                                                        | 35182.93 | 9647.03  | 47454.24 | 89%      |
| Hono                                                                                 | 33624.75 | 9001.95  | 45629.00 | 85%      |
| Deso                                                                                 | 32383.80 | 8730.33  | 44932.53 | 82%      |
| Fastro                                                                               | 31173.33 | 10294.19 | 44114.94 | 79%      |
| Reno                                                                                 | 30327.03 | 5957.86  | 36638.28 | 77%      |
| Cheetah                                                                              | 26921.43 | 5578.43  | 34963.13 | 68%      |
| http                                                                                 | 24974.54 | 6552.08  | 52104.42 | 63%      |
| Alosaur                                                                              | 19459.81 | 4883.56  | 28172.64 | 49%      |
| Node                                                                                 | 17147.17 | 3597.03  | 21417.50 | 43%      |
| Router                                                                               | 16542.31 | 3646.78  | 22833.83 | 42%      |
| Aqua                                                                                 | 15459.91 | 3082.04  | 22259.74 | 39%      |
| Little                                                                               | 13165.81 | 2755.41  | 19930.34 | 33%      |
| Fastify                                                                              | 13065.25 | 2765.74  | 16181.31 | 33%      |
| Oak                                                                                  | 12529.77 | 3194.09  | 20733.48 | 32%      |
| Dinatra                                                                              | 10894.17 | 2534.07  | 20080.42 | 27%      |
| Abc                                                                                  | 9569.97  | 1894.24  | 17601.29 | 24%      |
| Danet (Oak)                                                                          | 8945.40  | 2831.80  | 55613.32 | 23%      |
| Opine                                                                                | 5890.17  | 2354.44  | 23106.25 | 15%      |
| Express (Deno)                                                                       | 5596.55  | 1556.51  | 28409.09 | 14%      |
| Acorn                                                                                | 4643.53  | 5854.82  | 56834.25 | 12%      |
| Express                                                                              | 3698.85  | 2059.30  | 60484.14 | 9%       |
| Servest                                                                              | 3577.11  | 1269.08  | 8171.05  | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-ae4ab5f2-1c17-4f63-90b7-7fd82a22a910) |          |          |          |          |

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

## [Cheetah](https://github.com/azurystudio/cheetah)

🐈 A blazing fast framework for the modern web.

## [Danet (Oak)](https://docs.danet.land/)

The most mature backend framework for Deno

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Deso](https://github.com/gothammm/deso)

A simple & fast HTTP web framework for Deno

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

## [Express](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js

## [Express (Deno)](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js, run on Deno

## [Fast](https://deno.land/x/fast)

Small web framework with near-native performance.

## [Fastify](https://www.fastify.io/)

Fast and low overhead web framework, for Node.js

## [Fastro](https://fastro.dev)

Fast and simple web application framework for deno

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

## [NHttp](https://github.com/nhttp/nhttp)

An Simple web-framework for Deno and Friends

## [Node](https://nodejs.org/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## [Oak](https://deno.land/x/oak)

A middleware framework for Deno's native HTTP server, Deno Deploy and Node.js
16.5 and later. It also includes a middleware router.

## [Opine](https://deno.land/x/opine)

Fast, minimalist web framework for Deno ported from ExpressJS.

## [Peko](https://peko.deno.dev)

Featherweight server/router framework + middleware and handler library 🐣

## [Reno](https://deno.land/x/reno)

A thin, testable routing library designed to sit on top of Deno's standard HTTP
module.

## [Router](https://crux.land/router@0.0.12)

The tiny, modern and fast router by the denosaurs for deno and deno deploy. Used
by projects like fresh

## [Stric](https://bun.sh/docs/ecosystem/stric)

Stric is a minimalist, fast web framework for Bun.

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

## [Vixeny (Deno)](https://github.com/mimiMonads/functor)

A pure functional web framework

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9569.97  | 1894.24 | 17601.29 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7085.99 | 8412.98 | 10251.08 | 11008.47 | 11304.27 | 11472.11 | 12028.19 |
| **Latency** | 3ms     | 3ms     | 4ms      | 6ms      | 7ms      | 9ms      | 12ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4643.53  | 5854.82 | 56834.25 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 48.58 | 74.40 | 3858.85 | 6385.73 | 11089.98 | 12859.45 | 30187.43 |
| **Latency** | 10ms  | 12ms  | 22ms    | 28ms    | 33ms     | 37ms     | 56ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19459.81 | 4883.56 | 28172.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12960.96 | 17272.64 | 21209.45 | 22797.29 | 23688.69 | 24220.42 | 25584.61 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15459.91 | 3082.04 | 22259.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12316.22 | 14156.36 | 15825.43 | 17521.14 | 18386.30 | 18993.39 | 20115.40 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35935.17 | 11680.73 | 55253.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18810.34 | 26555.39 | 36641.65 | 46718.41 | 50226.91 | 51500.31 | 53074.85 |
| **Latency** | 735µs    | 919µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26921.43 | 5578.43 | 34963.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20194.02 | 24294.64 | 29025.42 | 30659.91 | 31649.94 | 32156.17 | 32911.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8945.40  | 2831.80 | 55613.32 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5929.61 | 7612.99 | 8958.84 | 10280.62 | 11613.32 | 13282.72 | 15089.38 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms      | 7ms      | 8ms      | 12ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38915.93 | 11449.68 | 53365.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18515.48 | 33354.42 | 43231.38 | 48335.56 | 50464.48 | 51404.41 | 52522.89 |
| **Latency** | 874µs    | 961µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32383.80 | 8730.33 | 44932.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16574.85 | 27612.86 | 36005.97 | 38989.14 | 40461.43 | 41400.77 | 42362.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10894.17 | 2534.07 | 20080.42 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8120.35 | 9852.87 | 11139.27 | 12702.87 | 13804.36 | 13983.00 | 14386.37 |
| **Latency** | 3ms     | 3ms     | 3ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3698.85  | 2059.30 | 60484.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2269.46 | 3315.57 | 4004.67 | 4264.85 | 4402.67 | 4465.08 | 4972.03 |
| **Latency** | 11ms    | 11ms    | 12ms    | 14ms    | 18ms    | 21ms    | 28ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5596.55  | 1556.51 | 28409.09 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3680.37 | 5035.28 | 6173.38 | 6505.30 | 6647.43 | 6730.34 | 6928.68 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 11ms    | 13ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37856.99 | 9137.50 | 48157.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19690.92 | 33704.91 | 42044.92 | 44450.53 | 45724.49 | 46404.65 | 47225.77 |
| **Latency** | 975µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13065.25 | 2765.74 | 16181.31 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9951.50 | 11107.50 | 14369.04 | 14944.91 | 15278.14 | 15453.55 | 15763.77 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 31173.33 | 10294.19 | 44114.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15819.52 | 23991.54 | 35800.86 | 39368.40 | 41238.59 | 41998.00 | 43422.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33624.75 | 9001.95 | 45629.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17104.95 | 29354.94 | 36384.09 | 41040.03 | 42638.97 | 43310.20 | 44617.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24974.54 | 6552.08 | 52104.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16220.85 | 22057.00 | 27669.98 | 29363.25 | 30257.35 | 30803.87 | 31807.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38082.49 | 14248.16 | 57924.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15816.50 | 25635.52 | 41333.70 | 51613.19 | 53827.75 | 54626.15 | 55821.47 |
| **Latency** | 697µs    | 857µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13165.81 | 2755.41 | 19930.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10258.32 | 11988.60 | 13716.79 | 14860.19 | 15700.86 | 16234.02 | 18096.84 |
| **Latency** | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Megalo](#megalo)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36121.17 | 9964.71 | 48742.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17655.71 | 31722.37 | 39676.79 | 44112.28 | 45972.40 | 46660.61 | 47901.30 |
| **Latency** | 951µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17147.17 | 3597.03 | 21417.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12078.82 | 17239.57 | 18533.46 | 19267.73 | 19719.82 | 19950.58 | 20401.74 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12529.77 | 3194.09 | 20733.48 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8435.72 | 11306.62 | 13304.46 | 14471.48 | 15277.75 | 16749.98 | 18500.74 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 11ms     |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5890.17  | 2354.44 | 23106.25 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 2743.25 | 5056.20 | 6432.68 | 6914.38 | 7171.25 | 7700.71 | 14435.19 |
| **Latency** | 6ms     | 7ms     | 8ms     | 9ms     | 12ms    | 15ms    | 24ms     |

### [Peko](#peko)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30327.03 | 5957.86 | 36638.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20794.77 | 30636.17 | 32523.47 | 33589.19 | 34346.74 | 34701.22 | 35441.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16542.31 | 3646.78 | 22833.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12122.20 | 15014.94 | 17906.90 | 18873.11 | 19488.67 | 19973.15 | 21428.01 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39634.27 | 11510.00 | 55289.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22835.67 | 28485.60 | 44257.32 | 49596.77 | 51507.47 | 52316.18 | 54005.69 |
| **Latency** | 709µs    | 871µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3577.11  | 1269.08 | 8171.05 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1757.58 | 3035.50 | 3941.53 | 4403.90 | 4749.27 | 5077.25 | 5649.38 |
| **Latency** | 7ms     | 10ms    | 13ms    | 17ms    | 22ms    | 26ms    | 35ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35182.93 | 9647.03 | 47454.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17232.60 | 30981.08 | 38300.81 | 43297.22 | 44801.92 | 45528.97 | 46712.37 |
| **Latency** | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-08-21T01:21:45.309Z</p>
