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
| Bun                                                                                  | 61080.75 | 9996.12  | 79112.76  | 100%     |
| Hyper Express                                                                        | 58892.27 | 15562.29 | 77519.12  | 96%      |
| Fast                                                                                 | 48661.75 | 12892.40 | 64118.68  | 80%      |
| Deno                                                                                 | 48011.38 | 12111.80 | 67119.05  | 79%      |
| Megalo                                                                               | 47902.28 | 11692.06 | 61174.11  | 78%      |
| Fastro                                                                               | 45853.63 | 15944.75 | 58870.02  | 75%      |
| Hono                                                                                 | 45702.13 | 15125.13 | 60674.92  | 75%      |
| http                                                                                 | 42299.00 | 9207.12  | 48919.28  | 69%      |
| Reno                                                                                 | 38618.23 | 10994.85 | 127521.20 | 63%      |
| Node                                                                                 | 36444.80 | 5924.65  | 40214.23  | 60%      |
| Alosaur                                                                              | 35128.96 | 7360.08  | 47121.00  | 58%      |
| Fastify                                                                              | 31270.79 | 6223.41  | 34735.82  | 51%      |
| Router                                                                               | 30378.89 | 5592.44  | 37587.54  | 50%      |
| Little                                                                               | 27164.01 | 4450.51  | 32832.51  | 44%      |
| Aqua                                                                                 | 24706.38 | 3886.65  | 28958.19  | 40%      |
| Oak                                                                                  | 23563.83 | 3980.20  | 29448.05  | 39%      |
| Dinatra                                                                              | 18485.15 | 3625.81  | 36579.12  | 30%      |
| Abc                                                                                  | 16395.95 | 2440.73  | 19688.99  | 27%      |
| Opine                                                                                | 9669.64  | 1323.83  | 15011.41  | 16%      |
| Express                                                                              | 6472.40  | 1534.68  | 11959.22  | 11%      |
| Servest                                                                              | 5604.90  | 1534.02  | 10193.26  | 9%       |
| Acorn                                                                                | 4296.81  | 5794.26  | 114068.44 | 7%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-1a2985df-041c-4fdb-84a2-5ca16a3ac651) |          |          |           |          |

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
| 16395.95 | 2440.73 | 19688.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13428.19 | 15302.68 | 16505.47 | 18454.81 | 19132.72 | 19272.11 | 19546.32 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4296.81  | 5794.26 | 114068.44 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1779.01 | 2480.60 | 3091.73 | 4543.61 | 8358.77 | 10492.58 | 12669.86 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 21ms    | 22ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35128.96 | 7360.08 | 47121.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23916.51 | 36410.61 | 38424.62 | 38914.84 | 39218.85 | 39411.88 | 39972.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24706.38 | 3886.65 | 28958.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21924.72 | 22904.12 | 26320.83 | 26606.22 | 26857.35 | 27314.83 | 28083.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61080.75 | 9996.12 | 79112.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49418.58 | 52832.27 | 59711.74 | 70822.50 | 72828.84 | 73711.15 | 75817.10 |
| **Latency** | 499µs    | 625µs    | 765µs    | 890µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48011.38 | 12111.80 | 67119.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31715.07 | 42127.45 | 47223.68 | 59439.77 | 60820.26 | 61286.10 | 62015.60 |
| **Latency** | 648µs    | 786µs    | 919µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18485.15 | 3625.81 | 36579.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14814.11 | 15653.56 | 20232.73 | 20517.51 | 20737.49 | 20947.30 | 22077.36 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6472.40  | 1534.68 | 11959.22 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4241.32 | 5818.86 | 7185.52 | 7364.52 | 7520.32 | 7576.76 | 7648.81 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 11ms    | 12ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48661.75 | 12892.40 | 64118.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29117.26 | 42908.18 | 55037.67 | 58016.89 | 58881.92 | 59628.10 | 60679.70 |
| **Latency** | 754µs    | 813µs    | 877µs    | 969µs    | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31270.79 | 6223.41 | 34735.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28602.06 | 32275.57 | 33241.75 | 33832.52 | 34118.12 | 34270.81 | 34516.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45853.63 | 15944.75 | 58870.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17527.63 | 41646.10 | 53748.14 | 56297.70 | 57066.60 | 57521.81 | 58157.38 |
| **Latency** | 788µs    | 847µs    | 901µs    | 979µs    | 1ms      | 1ms      | 6ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45702.13 | 15125.13 | 60674.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18413.55 | 40455.93 | 52746.54 | 57404.95 | 58617.21 | 59028.21 | 59786.76 |
| **Latency** | 745µs    | 812µs    | 914µs    | 1ms      | 1ms      | 2ms      | 5ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42299.00 | 9207.12 | 48919.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29903.19 | 42983.68 | 46425.34 | 47171.54 | 47529.79 | 47737.35 | 48103.41 |
| **Latency** | 927µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58892.27 | 15562.29 | 77519.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34915.24 | 41234.08 | 67667.43 | 71696.05 | 72992.47 | 73430.94 | 74724.23 |
| **Latency** | 523µs    | 612µs    | 761µs    | 838µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27164.01 | 4450.51 | 32832.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23970.63 | 25497.59 | 28917.56 | 29525.99 | 29835.51 | 30025.40 | 30529.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47902.28 | 11692.06 | 61174.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29810.14 | 49337.78 | 53062.62 | 54232.84 | 54926.80 | 55316.42 | 55935.88 |
| **Latency** | 823µs    | 873µs    | 931µs    | 992µs    | 1ms      | 1ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36444.80 | 5924.65 | 40214.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36426.12 | 37114.73 | 37774.18 | 38500.65 | 38789.36 | 38996.46 | 39296.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23563.83 | 3980.20 | 29448.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19996.14 | 21943.84 | 25124.57 | 25691.30 | 26078.28 | 26323.70 | 26726.77 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9669.64  | 1323.83 | 15011.41 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8441.36 | 9302.82 | 10054.98 | 10218.77 | 10441.01 | 10903.96 | 12807.96 |
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

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 38618.23 | 10994.85 | 127521.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21873.49 | 33484.63 | 43964.90 | 45021.27 | 45708.67 | 45979.34 | 46672.77 |
| **Latency** | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30378.89 | 5592.44 | 37587.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25385.83 | 28900.55 | 32903.94 | 33309.82 | 33608.76 | 33780.68 | 34244.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5604.90  | 1534.02 | 10193.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3246.13 | 5565.50 | 6144.48 | 6470.73 | 6749.94 | 6818.27 | 7911.22 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 13ms    | 23ms    |

---

<p align="center">Generated 2023-03-13T01:48:28.480Z</p>
