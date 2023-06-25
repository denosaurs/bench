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
| Stric                                                                                | 44941.30 | 13618.19 | 68416.73  | 100%     |
| Bun                                                                                  | 44108.38 | 12384.52 | 65716.88  | 98%      |
| Hyper Express                                                                        | 43999.18 | 14732.75 | 64499.36  | 98%      |
| Deno                                                                                 | 43595.09 | 14029.57 | 63323.95  | 97%      |
| Vixeny (Deno)                                                                        | 43002.48 | 11604.28 | 61721.01  | 96%      |
| Fast                                                                                 | 41463.01 | 11001.80 | 57482.04  | 92%      |
| NHttp                                                                                | 41088.48 | 11591.43 | 56765.94  | 91%      |
| Hono                                                                                 | 39964.60 | 11719.80 | 56027.01  | 89%      |
| Reno                                                                                 | 35043.92 | 6617.05  | 45112.26  | 78%      |
| http                                                                                 | 27292.95 | 6645.92  | 37374.92  | 61%      |
| Cheetah                                                                              | 23505.67 | 3798.78  | 29426.55  | 52%      |
| Peko                                                                                 | 23117.50 | 5039.81  | 51567.88  | 51%      |
| Alosaur                                                                              | 20497.18 | 7080.43  | 146252.29 | 46%      |
| Router                                                                               | 18846.93 | 3724.97  | 26216.19  | 42%      |
| Node                                                                                 | 18567.62 | 3677.76  | 24150.75  | 41%      |
| Aqua                                                                                 | 16953.36 | 3373.71  | 25474.99  | 38%      |
| Little                                                                               | 14548.34 | 2818.77  | 20442.05  | 32%      |
| Oak                                                                                  | 14097.05 | 3141.04  | 20867.24  | 31%      |
| Fastify                                                                              | 13043.24 | 3422.92  | 18359.01  | 29%      |
| Dinatra                                                                              | 12083.99 | 2833.96  | 25006.19  | 27%      |
| Abc                                                                                  | 10226.33 | 1869.45  | 18271.14  | 23%      |
| Danet (Oak)                                                                          | 9683.97  | 2738.13  | 53147.78  | 22%      |
| Opine                                                                                | 6390.80  | 2131.68  | 40246.10  | 14%      |
| Express (Deno)                                                                       | 5904.01  | 1309.11  | 9769.74   | 13%      |
| Acorn                                                                                | 5153.47  | 8375.48  | 108695.65 | 11%      |
| Express                                                                              | 4150.15  | 1141.49  | 23597.03  | 9%       |
| Servest                                                                              | 4065.15  | 1222.07  | 7393.84   | 9%       |
| Deso                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| Fastro                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-4842c647-7808-4fe8-b1ec-dd37cd60b3d3) |          |          |           |          |

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
| 10226.33 | 1869.45 | 18271.14 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8027.27 | 9530.95 | 10600.28 | 11330.44 | 11996.90 | 12420.29 | 13422.73 |
| **Latency** | 3ms     | 3ms     | 4ms      | 5ms      | 7ms      | 8ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5153.47  | 8375.48 | 108695.65 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 61.66 | 87.41 | 3496.10 | 6515.29 | 10248.40 | 15130.31 | 47694.59 |
| **Latency** | 8ms   | 10ms  | 19ms    | 24ms    | 28ms     | 31ms     | 41ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 20497.18 | 7080.43 | 146252.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11201.87 | 17928.72 | 22300.60 | 24228.71 | 25702.18 | 26528.25 | 28196.35 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16953.36 | 3373.71 | 25474.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13228.31 | 15789.48 | 17594.87 | 19008.30 | 20200.50 | 20941.54 | 22510.06 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44108.38 | 12384.52 | 65716.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27303.74 | 33024.34 | 45705.80 | 55210.31 | 59368.08 | 60980.96 | 63509.33 |
| **Latency** | 592µs    | 754µs    | 947µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23505.67 | 3798.78 | 29426.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19701.91 | 22335.60 | 24310.87 | 25808.51 | 27109.14 | 27757.05 | 28522.96 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9683.97  | 2738.13 | 53147.78 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6624.78 | 8425.84 | 10002.47 | 10993.12 | 12206.88 | 13382.75 | 15336.54 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43595.09 | 14029.57 | 63323.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19603.48 | 35200.94 | 48521.10 | 54280.29 | 57806.81 | 59331.88 | 61826.81 |
| **Latency** | 689µs    | 805µs    | 952µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12083.99 | 2833.96 | 25006.19 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9223.87 | 10913.51 | 12516.20 | 13904.83 | 14901.89 | 15484.33 | 16402.09 |
| **Latency** | 2ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4150.15  | 1141.49 | 23597.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2828.79 | 3669.72 | 4451.81 | 4736.79 | 4961.76 | 5105.14 | 5513.57 |
| **Latency** | 9ms     | 10ms    | 11ms    | 12ms    | 15ms    | 17ms    | 24ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5904.01  | 1309.11 | 9769.74 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4144.26 | 5562.17 | 6176.98 | 6769.37 | 7073.48 | 7301.95 | 7708.96 |
| **Latency** | 6ms     | 7ms     | 8ms     | 9ms     | 10ms    | 12ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41463.01 | 11001.80 | 57482.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19186.24 | 38622.27 | 44833.44 | 48917.94 | 51651.17 | 53001.43 | 55320.89 |
| **Latency** | 812µs    | 901µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13043.24 | 3422.92 | 18359.01 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7121.89 | 12863.04 | 13979.35 | 14878.57 | 15905.71 | 16545.41 | 17333.70 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 12ms     |

### [Fastro](#fastro)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39964.60 | 11719.80 | 56027.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18722.33 | 33331.09 | 44913.73 | 48436.69 | 50829.56 | 52110.01 | 54201.19 |
| **Latency** | 827µs    | 923µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27292.95 | 6645.92 | 37374.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16686.33 | 24912.02 | 29465.47 | 31869.59 | 33409.01 | 34277.80 | 35810.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43999.18 | 14732.75 | 64499.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16216.31 | 36709.63 | 49600.11 | 55106.74 | 57984.22 | 59401.12 | 61588.54 |
| **Latency** | 569µs    | 729µs    | 945µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14548.34 | 2818.77 | 20442.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11538.46 | 13539.55 | 15128.63 | 16259.38 | 17175.69 | 17809.03 | 18902.44 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

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
| 41088.48 | 11591.43 | 56765.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19250.05 | 35905.36 | 46005.59 | 49329.11 | 51359.81 | 52518.45 | 54507.88 |
| **Latency** | 817µs    | 910µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18567.62 | 3677.76 | 24150.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14231.73 | 17822.19 | 19493.99 | 20749.62 | 21821.19 | 22361.07 | 23231.71 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14097.05 | 3141.04 | 20867.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10475.81 | 12932.51 | 14759.66 | 16068.11 | 17004.53 | 17687.06 | 19415.50 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6390.80  | 2131.68 | 40246.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4753.77 | 5814.45 | 6528.82 | 7071.43 | 7594.55 | 7973.14 | 16460.98 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 10ms    | 11ms    | 17ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23117.50 | 5039.81 | 51567.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18041.98 | 21468.45 | 24282.37 | 26014.86 | 27640.03 | 28448.39 | 30075.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35043.92 | 6617.05 | 45112.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25945.80 | 33247.68 | 36650.99 | 39241.40 | 41023.04 | 41964.97 | 43415.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18846.93 | 3724.97 | 26216.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15116.79 | 17802.74 | 19503.47 | 21184.72 | 22310.63 | 22885.42 | 24327.68 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44941.30 | 13618.19 | 68416.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26210.76 | 32572.26 | 46916.85 | 57609.08 | 61602.13 | 63541.67 | 65757.31 |
| **Latency** | 577µs    | 742µs    | 923µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4065.15  | 1222.07 | 7393.84 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2536.12 | 3560.77 | 4421.54 | 4865.50 | 5165.61 | 5369.49 | 5727.21 |
| **Latency** | 6ms     | 9ms     | 11ms    | 15ms    | 18ms    | 22ms    | 27ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43002.48 | 11604.28 | 61721.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20424.13 | 39365.41 | 47040.47 | 50970.81 | 53905.99 | 55185.56 | 57663.48 |
| **Latency** | 781µs    | 866µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-06-25T02:16:59.137Z</p>
