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

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Hyper Express                                                                        | 38290.50 | 14670.44 | 63343.46  | 100%     |
| Vixeny (Deno)                                                                        | 37906.92 | 10210.61 | 53084.79  | 99%      |
| NHttp                                                                                | 37625.14 | 11321.60 | 55215.78  | 98%      |
| Deno                                                                                 | 37548.54 | 11878.30 | 55489.77  | 98%      |
| Bun                                                                                  | 36882.84 | 11089.13 | 66033.04  | 96%      |
| Hono                                                                                 | 35898.50 | 9799.35  | 49910.25  | 94%      |
| Stric                                                                                | 35815.79 | 10962.02 | 61558.71  | 94%      |
| Fast                                                                                 | 35790.94 | 10103.63 | 50842.45  | 93%      |
| Deso                                                                                 | 35066.04 | 8748.65  | 46122.49  | 92%      |
| Megalo                                                                               | 33950.04 | 9702.67  | 46659.56  | 89%      |
| Cheetah                                                                              | 32801.49 | 7389.42  | 41313.43  | 86%      |
| Reno                                                                                 | 30937.95 | 5106.80  | 39009.60  | 81%      |
| http                                                                                 | 24453.83 | 5966.00  | 48030.74  | 64%      |
| Alosaur                                                                              | 20016.40 | 4456.71  | 31417.86  | 52%      |
| Aqua                                                                                 | 17538.77 | 3760.72  | 26505.59  | 46%      |
| Node                                                                                 | 17453.11 | 3299.26  | 22125.79  | 46%      |
| Router                                                                               | 17080.24 | 3259.68  | 23211.62  | 45%      |
| Little                                                                               | 15126.30 | 3039.83  | 23383.81  | 40%      |
| Fastify                                                                              | 14075.07 | 2817.88  | 19224.34  | 37%      |
| Oak                                                                                  | 13543.80 | 3176.51  | 47938.41  | 35%      |
| Dinatra                                                                              | 11395.61 | 2586.10  | 21290.14  | 30%      |
| Abc                                                                                  | 10712.42 | 1769.12  | 19099.39  | 28%      |
| Danet (Oak)                                                                          | 9391.05  | 2465.25  | 42123.00  | 25%      |
| Opine                                                                                | 6369.20  | 1471.33  | 18263.94  | 17%      |
| Express (Deno)                                                                       | 6060.51  | 6171.74  | 204081.63 | 16%      |
| Acorn                                                                                | 5667.25  | 8885.81  | 70509.87  | 15%      |
| Servest                                                                              | 4038.51  | 1283.07  | 6956.98   | 11%      |
| Express                                                                              | 3882.18  | 958.98   | 15294.78  | 10%      |
| Fastro                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-dbf18e1f-ba4d-4035-8f9b-001babf36910) |          |          |           |          |

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
| 10712.42 | 1769.12 | 19099.39 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8826.20 | 10115.25 | 11037.06 | 11775.46 | 12477.42 | 12765.88 | 13355.40 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 9ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5667.25  | 8885.81 | 70509.87 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 57.39 | 79.15 | 4099.30 | 7167.63 | 12248.21 | 15801.23 | 52386.39 |
| **Latency** | 9ms   | 10ms  | 20ms    | 27ms    | 30ms     | 33ms     | 47ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20016.40 | 4456.71 | 31417.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15114.54 | 18529.61 | 21304.22 | 22744.76 | 23770.31 | 24406.04 | 25599.01 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17538.77 | 3760.72 | 26505.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13858.90 | 16805.34 | 18512.95 | 19572.67 | 20560.74 | 21359.69 | 22551.36 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36882.84 | 11089.13 | 66033.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21835.99 | 27985.41 | 37417.13 | 45798.63 | 51196.15 | 53414.30 | 57231.93 |
| **Latency** | 693µs    | 861µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32801.49 | 7389.42 | 41313.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18367.92 | 32531.03 | 35468.73 | 37109.19 | 38215.58 | 39016.89 | 39909.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9391.05  | 2465.25 | 42123.00 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6443.45 | 8294.98 | 9603.82 | 10549.31 | 11757.76 | 13070.05 | 14672.70 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 6ms      | 7ms      | 11ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37548.54 | 11878.30 | 55489.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18280.75 | 28424.38 | 41803.66 | 47070.55 | 49875.70 | 51319.97 | 53715.45 |
| **Latency** | 825µs    | 942µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35066.04 | 8748.65 | 46122.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17425.60 | 33461.49 | 38619.22 | 40587.01 | 42233.27 | 42907.57 | 44305.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11395.61 | 2586.10 | 21290.14 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8816.64 | 10360.90 | 11614.14 | 13045.86 | 14109.84 | 14574.88 | 15230.52 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3882.18  | 958.98 | 15294.78 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2581.47 | 3653.92 | 4166.74 | 4386.22 | 4532.99 | 4613.65 | 4956.29 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 16ms    | 19ms    | 25ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6060.51  | 6171.74 | 204081.63 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4002.55 | 5301.58 | 6322.89 | 6714.54 | 7123.16 | 7335.99 | 7774.91 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 11ms    | 13ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35790.94 | 10103.63 | 50842.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16973.91 | 31169.41 | 39692.79 | 43015.29 | 45031.38 | 46175.03 | 48706.43 |
| **Latency** | 925µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14075.07 | 2817.88 | 19224.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11661.51 | 13815.42 | 14806.70 | 15604.62 | 16203.02 | 16543.61 | 17128.88 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35898.50 | 9799.35 | 49910.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17396.83 | 32233.71 | 39808.18 | 42678.19 | 44615.67 | 45619.86 | 47579.73 |
| **Latency** | 951µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24453.83 | 5966.00 | 48030.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16444.06 | 22712.61 | 26476.91 | 28089.21 | 29308.50 | 29981.71 | 31394.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38290.50 | 14670.44 | 63343.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16624.93 | 23678.28 | 42799.00 | 51424.09 | 54523.23 | 56311.61 | 58486.58 |
| **Latency** | 669µs    | 834µs    | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15126.30 | 3039.83 | 23383.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12338.83 | 14337.08 | 15852.40 | 16899.36 | 17613.77 | 18095.00 | 19083.70 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33950.04 | 9702.67 | 46659.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16251.94 | 32249.78 | 38005.41 | 40419.49 | 41893.67 | 42561.45 | 44133.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37625.14 | 11321.60 | 55215.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17755.67 | 28585.63 | 42408.29 | 46403.50 | 48544.93 | 50043.81 | 52151.40 |
| **Latency** | 861µs    | 957µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17453.11 | 3299.26 | 22125.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14115.32 | 17107.62 | 18321.57 | 19318.07 | 20038.99 | 20353.24 | 21343.23 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13543.80 | 3176.51 | 47938.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10102.79 | 12557.10 | 14046.86 | 15216.51 | 16318.81 | 17154.56 | 18734.66 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6369.20  | 1471.33 | 18263.94 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5032.04 | 5975.27 | 6561.98 | 6993.88 | 7402.25 | 7760.78 | 10572.38 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 11ms    | 16ms     |

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
| 30937.95 | 5106.80 | 39009.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24377.55 | 30121.57 | 32420.94 | 33838.24 | 35157.36 | 35914.22 | 37309.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17080.24 | 3259.68 | 23211.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13661.60 | 16118.16 | 17881.49 | 19065.21 | 19884.30 | 20469.68 | 21691.02 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35815.79 | 10962.02 | 61558.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20746.60 | 26710.91 | 35704.45 | 45068.78 | 50533.67 | 52789.01 | 56421.79 |
| **Latency** | 708µs    | 885µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4038.51  | 1283.07 | 6956.98 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2168.07 | 3605.93 | 4405.62 | 4828.86 | 5201.75 | 5463.39 | 6137.45 |
| **Latency** | 7ms     | 9ms     | 12ms    | 15ms    | 19ms    | 23ms    | 30ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37906.92 | 10210.61 | 53084.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18082.04 | 33836.05 | 41637.53 | 45023.70 | 46928.33 | 48616.39 | 50719.09 |
| **Latency** | 892µs    | 990µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-10-24T01:25:34.636Z</p>
