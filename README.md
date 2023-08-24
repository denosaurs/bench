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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Vixeny (Deno)                                                                        | 54844.09 | 13256.33 | 65019.02  | 100%     |
| Deno                                                                                 | 46924.00 | 13523.92 | 64384.09  | 86%      |
| Fast                                                                                 | 46918.13 | 13658.29 | 63085.39  | 86%      |
| Bun                                                                                  | 46877.83 | 12634.17 | 68460.82  | 85%      |
| Stric                                                                                | 45763.12 | 12312.44 | 65825.05  | 83%      |
| Hono                                                                                 | 44698.85 | 12538.52 | 58903.16  | 82%      |
| NHttp                                                                                | 44663.34 | 13288.09 | 62715.09  | 81%      |
| Hyper Express                                                                        | 44383.35 | 12936.25 | 66383.08  | 81%      |
| Deso                                                                                 | 43949.77 | 12797.91 | 59422.47  | 80%      |
| Fastro                                                                               | 43210.87 | 12737.05 | 59247.04  | 79%      |
| Reno                                                                                 | 39149.02 | 7860.60  | 47333.59  | 71%      |
| Cheetah                                                                              | 35115.31 | 10204.97 | 47431.63  | 64%      |
| http                                                                                 | 30429.73 | 8028.00  | 40421.24  | 55%      |
| Node                                                                                 | 27151.64 | 6765.69  | 116665.50 | 50%      |
| Alosaur                                                                              | 25491.73 | 5466.15  | 32896.74  | 46%      |
| Fastify                                                                              | 25350.02 | 5334.74  | 29153.44  | 46%      |
| Router                                                                               | 22413.46 | 4439.42  | 31246.73  | 41%      |
| Aqua                                                                                 | 20475.86 | 4570.89  | 27924.19  | 37%      |
| Oak                                                                                  | 18474.71 | 3748.11  | 26341.28  | 34%      |
| Little                                                                               | 18196.32 | 4034.90  | 26241.02  | 33%      |
| Dinatra                                                                              | 15507.71 | 4275.50  | 36319.28  | 28%      |
| Abc                                                                                  | 13818.13 | 3482.55  | 21172.45  | 25%      |
| Danet (Oak)                                                                          | 13279.01 | 3924.30  | 75261.04  | 24%      |
| Express (Deno)                                                                       | 9054.08  | 1794.14  | 11272.24  | 17%      |
| Opine                                                                                | 8545.11  | 2306.73  | 27689.02  | 16%      |
| Acorn                                                                                | 6349.32  | 8661.45  | 128203.12 | 12%      |
| Servest                                                                              | 5747.39  | 1788.52  | 11663.33  | 10%      |
| Express                                                                              | 4802.76  | 1281.66  | 10098.40  | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-319c67a5-b820-4213-89c7-c4ed65951351) |          |          |           |          |

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
| 13818.13 | 3482.55 | 21172.45 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8903.86 | 11550.77 | 14604.34 | 16568.40 | 17668.01 | 18401.25 | 19413.84 |
| **Latency** | 2ms     | 2ms      | 2ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6349.32  | 8661.45 | 128203.12 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 55.28 | 76.70 | 5841.83 | 8104.42 | 12402.46 | 18798.90 | 39465.88 |
| **Latency** | 6ms   | 8ms   | 12ms    | 21ms    | 25ms     | 27ms     | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25491.73 | 5466.15 | 32896.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19514.05 | 22675.81 | 27698.23 | 29180.23 | 29924.45 | 30360.30 | 31419.05 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20475.86 | 4570.89 | 27924.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13403.62 | 19114.61 | 21844.72 | 23532.40 | 24554.70 | 25036.63 | 26525.22 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46877.83 | 12634.17 | 68460.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29308.39 | 37228.96 | 49416.72 | 58163.89 | 61381.94 | 62627.46 | 64272.73 |
| **Latency** | 599µs    | 744µs    | 893µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35115.31 | 10204.97 | 47431.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17689.12 | 28864.32 | 39628.47 | 42615.73 | 44254.44 | 45009.51 | 45651.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13279.01 | 3924.30 | 75261.04 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8414.16 | 12136.11 | 13994.86 | 15246.55 | 16327.91 | 17177.79 | 18786.12 |
| **Latency** | 2ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46924.00 | 13523.92 | 64384.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24870.33 | 36184.23 | 52304.12 | 58328.36 | 60825.20 | 61914.03 | 62985.88 |
| **Latency** | 658µs    | 784µs    | 874µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43949.77 | 12797.91 | 59422.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21644.11 | 35606.35 | 49453.25 | 53827.36 | 55741.15 | 56883.30 | 57671.76 |
| **Latency** | 786µs    | 846µs    | 914µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15507.71 | 4275.50 | 36319.28 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9930.82 | 13809.11 | 16049.25 | 18575.24 | 19636.65 | 20306.23 | 21802.90 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4802.76  | 1281.66 | 10098.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3042.61 | 4329.55 | 5274.58 | 5629.65 | 5851.10 | 5950.83 | 6167.62 |
| **Latency** | 8ms     | 8ms     | 9ms     | 10ms    | 14ms    | 16ms    | 22ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9054.08  | 1794.14 | 11272.24 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6873.56 | 8502.81 | 9459.17 | 10337.62 | 10542.18 | 10626.65 | 10832.31 |
| **Latency** | 4ms     | 4ms     | 4ms     | 5ms      | 6ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46918.13 | 13658.29 | 63085.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23287.07 | 38597.79 | 52759.98 | 57483.55 | 59937.38 | 60904.14 | 62376.87 |
| **Latency** | 731µs    | 792µs    | 865µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25350.02 | 5334.74 | 29153.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20503.34 | 26183.37 | 27312.65 | 27813.73 | 28034.85 | 28131.88 | 28527.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43210.87 | 12737.05 | 59247.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21721.15 | 34348.19 | 48164.87 | 53590.20 | 55933.46 | 56865.30 | 58208.32 |
| **Latency** | 783µs    | 843µs    | 910µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44698.85 | 12538.52 | 58903.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22654.91 | 35878.27 | 50588.21 | 54517.72 | 56228.76 | 56824.51 | 57707.58 |
| **Latency** | 787µs    | 849µs    | 909µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30429.73 | 8028.00 | 40421.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17928.04 | 27517.44 | 32934.50 | 36421.79 | 37677.13 | 38184.20 | 39001.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44383.35 | 12936.25 | 66383.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27881.68 | 32952.60 | 45684.55 | 56082.81 | 60828.33 | 62526.26 | 64556.39 |
| **Latency** | 622µs    | 754µs    | 904µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18196.32 | 4034.90 | 26241.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12564.67 | 16623.12 | 19310.80 | 20991.61 | 21943.07 | 22388.43 | 23776.91 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Megalo](#megalo)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44663.34 | 13288.09 | 62715.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23126.10 | 35599.66 | 48122.54 | 56123.74 | 58774.52 | 59937.66 | 61586.32 |
| **Latency** | 737µs    | 803µs    | 880µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 27151.64 | 6765.69 | 116665.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19507.38 | 26652.71 | 29247.62 | 30506.66 | 31403.71 | 31762.81 | 32330.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18474.71 | 3748.11 | 26341.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13810.85 | 17645.50 | 19443.86 | 20785.76 | 21416.69 | 22049.79 | 23562.95 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8545.11  | 2306.73 | 27689.02 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6101.78 | 7409.06 | 8572.45 | 9547.22 | 11258.81 | 12539.92 | 14350.47 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 7ms      | 8ms      | 12ms     |

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
| 39149.02 | 7860.60 | 47333.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26804.02 | 36659.32 | 42128.47 | 44492.64 | 45603.13 | 46071.38 | 46663.37 |
| **Latency** | 965µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22413.46 | 4439.42 | 31246.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17004.28 | 21073.14 | 23728.04 | 25291.13 | 26081.56 | 26844.14 | 27894.97 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45763.12 | 12312.44 | 65825.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30122.91 | 35824.73 | 46880.26 | 57173.78 | 60826.90 | 62272.36 | 64106.47 |
| **Latency** | 607µs    | 760µs    | 898µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5747.39  | 1788.52 | 11663.33 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3413.52 | 4413.20 | 6394.29 | 6957.83 | 7311.50 | 7503.68 | 8467.99 |
| **Latency** | 5ms     | 6ms     | 8ms     | 10ms    | 13ms    | 15ms    | 22ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54844.09 | 13256.33 | 65019.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24502.68 | 56485.83 | 61005.72 | 62506.91 | 63282.92 | 63728.40 | 64437.41 |
| **Latency** | 657µs    | 748µs    | 831µs    | 882µs    | 1ms      | 2ms      | 2ms      |

---

<p align="center">Generated 2023-08-24T01:21:21.005Z</p>
