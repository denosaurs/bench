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
  - [Fastro](#fastro)
  - [Hono](#hono)
  - [http](#http)
  - [Hyper Express](#hyper-express)
  - [Little](#little)
  - [Megalo](#megalo)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
  - [Peko](#peko)
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
    - [Fastro](#fastro-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Hyper Express](#hyper-express-1)
    - [Little](#little-1)
    - [Megalo](#megalo-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Peko](#peko-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Bun                                                                                  | 59048.03 | 10522.92 | 77815.94  | 100%     |
| Hyper Express                                                                        | 57082.20 | 15713.91 | 73620.95  | 97%      |
| Deno                                                                                 | 48833.44 | 13444.45 | 146128.39 | 83%      |
| Hono                                                                                 | 47185.68 | 13495.18 | 60110.45  | 80%      |
| Megalo                                                                               | 47105.60 | 12068.32 | 64970.80  | 80%      |
| Fast                                                                                 | 46418.37 | 14472.87 | 151513.51 | 79%      |
| Fastro                                                                               | 44674.40 | 15822.31 | 59609.66  | 76%      |
| http                                                                                 | 43845.45 | 10331.28 | 55741.09  | 74%      |
| Reno                                                                                 | 35353.14 | 10020.94 | 60975.25  | 60%      |
| Node                                                                                 | 34970.75 | 5874.10  | 38203.61  | 59%      |
| Alosaur                                                                              | 34384.24 | 7484.08  | 71371.36  | 58%      |
| Router                                                                               | 30914.16 | 5177.10  | 36245.94  | 52%      |
| Little                                                                               | 27489.68 | 4578.97  | 32225.47  | 47%      |
| Fastify                                                                              | 26785.24 | 9680.54  | 34347.23  | 45%      |
| Aqua                                                                                 | 25452.53 | 4023.63  | 34456.95  | 43%      |
| Oak                                                                                  | 24706.74 | 4572.90  | 29161.56  | 42%      |
| Dinatra                                                                              | 19341.55 | 4142.83  | 23569.58  | 33%      |
| Abc                                                                                  | 14420.54 | 4413.92  | 20530.10  | 24%      |
| Opine                                                                                | 9894.28  | 2203.15  | 66129.96  | 17%      |
| Express                                                                              | 6557.46  | 1218.70  | 8958.45   | 11%      |
| Servest                                                                              | 5709.21  | 1682.62  | 8268.21   | 10%      |
| Acorn                                                                                | 3832.26  | 2491.35  | 14205.40  | 6%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-d62e3bc3-8334-4ccd-b355-17693f0ae9de) |          |          |           |          |

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

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14420.54 | 4413.92 | 20530.10 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8531.77 | 9489.33 | 16340.76 | 17935.58 | 19422.27 | 19668.71 | 20197.24 |
| **Latency** | 2ms     | 2ms     | 2ms      | 4ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3832.26  | 2491.35 | 14205.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1948.68 | 2481.63 | 2922.21 | 4002.74 | 7954.53 | 9759.22 | 12247.36 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 21ms    | 22ms    | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34384.24 | 7484.08 | 71371.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22412.67 | 35310.67 | 37606.82 | 38339.33 | 38754.40 | 38981.18 | 39317.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25452.53 | 4023.63 | 34456.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22505.30 | 23994.85 | 26917.08 | 27468.82 | 27903.09 | 28269.70 | 28792.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59048.03 | 10522.92 | 77815.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47102.57 | 50222.34 | 56726.26 | 70134.77 | 72123.43 | 72929.44 | 74882.57 |
| **Latency** | 503µs    | 640µs    | 773µs    | 959µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 48833.44 | 13444.45 | 146128.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30264.81 | 42226.80 | 52974.03 | 59813.59 | 60768.66 | 61295.11 | 62168.14 |
| **Latency** | 645µs    | 767µs    | 917µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19341.55 | 4142.83 | 23569.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15205.04 | 16211.23 | 21352.14 | 21655.94 | 21967.56 | 22453.35 | 23028.68 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6557.46  | 1218.70 | 8958.45 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4524.96 | 6707.84 | 7102.88 | 7227.43 | 7304.71 | 7341.74 | 7416.58 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 9ms     | 11ms    | 15ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 46418.37 | 14472.87 | 151513.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24223.14 | 40823.66 | 52593.01 | 57364.01 | 58400.90 | 59059.38 | 60247.92 |
| **Latency** | 759µs    | 821µs    | 892µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26785.24 | 9680.54 | 34347.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11778.39 | 12052.25 | 32463.47 | 33432.27 | 33769.73 | 33911.02 | 34105.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      | 4ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44674.40 | 15822.31 | 59609.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16890.45 | 41100.61 | 51216.26 | 56319.92 | 57322.28 | 57874.15 | 58510.23 |
| **Latency** | 785µs    | 839µs    | 908µs    | 1ms      | 1ms      | 1ms      | 6ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47185.68 | 13495.18 | 60110.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25636.52 | 41328.40 | 53105.02 | 57432.43 | 58288.80 | 58702.03 | 59565.27 |
| **Latency** | 756µs    | 814µs    | 914µs    | 1ms      | 1ms      | 1ms      | 5ms      |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43845.45 | 10331.28 | 55741.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29503.09 | 43340.98 | 49029.14 | 49524.83 | 49932.66 | 50209.77 | 50591.29 |
| **Latency** | 890µs    | 979µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57082.20 | 15713.91 | 73620.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35015.57 | 36535.61 | 66522.92 | 70507.16 | 71598.90 | 72152.62 | 72972.94 |
| **Latency** | 529µs    | 627µs    | 777µs    | 914µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27489.68 | 4578.97 | 32225.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24079.56 | 25356.30 | 29544.76 | 29872.19 | 30155.71 | 30415.64 | 30724.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47105.60 | 12068.32 | 64970.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28602.41 | 43757.61 | 52851.49 | 54194.50 | 54820.57 | 55159.04 | 55738.80 |
| **Latency** | 822µs    | 873µs    | 936µs    | 1ms      | 1ms      | 1ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34970.75 | 5874.10 | 38203.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33636.82 | 35843.84 | 36447.55 | 37235.17 | 37564.70 | 37727.25 | 37959.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24706.74 | 4572.90 | 29161.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20580.87 | 24013.56 | 26402.20 | 27031.33 | 27801.98 | 28000.38 | 28315.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9894.28  | 2203.15 | 66129.96 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8536.26 | 9374.98 | 10307.66 | 10456.91 | 10603.37 | 11211.48 | 12313.50 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35353.14 | 10020.94 | 60975.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22261.08 | 27919.65 | 40987.10 | 43035.13 | 44272.57 | 44766.08 | 45309.08 |
| **Latency** | 967µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30914.16 | 5177.10 | 36245.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25786.75 | 30203.44 | 33112.05 | 33422.53 | 33657.81 | 33820.39 | 34490.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5709.21  | 1682.62 | 8268.21 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3000.07 | 5751.39 | 6275.40 | 6661.38 | 6917.95 | 7018.07 | 7721.26 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 12ms    | 14ms    | 25ms    |

---

<p align="center">Generated 2023-03-09T01:59:40.152Z</p>
