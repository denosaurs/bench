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
  - [Servest](#servest)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Acorn](#acorn-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Cheetah](#cheetah-1)
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
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Deno                                                                                 | 63952.49 | 15162.68 | 74949.32  | 100%     |
| NHttp                                                                                | 62787.11 | 13401.62 | 71428.00  | 98%      |
| Fast                                                                                 | 61882.98 | 12827.47 | 70045.84  | 97%      |
| Hono                                                                                 | 60624.54 | 13949.64 | 70062.69  | 95%      |
| Bun                                                                                  | 60569.12 | 10125.07 | 77736.68  | 95%      |
| Fastro                                                                               | 59360.25 | 13682.40 | 68541.63  | 93%      |
| Deso                                                                                 | 57242.28 | 12744.51 | 65958.85  | 90%      |
| Megalo                                                                               | 56471.82 | 11795.93 | 63997.87  | 88%      |
| Hyper Express                                                                        | 56428.70 | 16292.15 | 74085.51  | 88%      |
| Reno                                                                                 | 48652.11 | 5820.23  | 53008.78  | 76%      |
| Cheetah                                                                              | 39259.38 | 5391.94  | 41935.73  | 61%      |
| http                                                                                 | 38268.08 | 8472.75  | 86607.20  | 60%      |
| Node                                                                                 | 34444.96 | 5281.27  | 37762.00  | 54%      |
| Peko                                                                                 | 33864.96 | 7729.75  | 40357.48  | 53%      |
| Fastify                                                                              | 31992.37 | 4984.85  | 34739.33  | 50%      |
| Alosaur                                                                              | 31326.94 | 7159.76  | 154631.20 | 49%      |
| Router                                                                               | 26674.59 | 4715.38  | 32257.48  | 42%      |
| Little                                                                               | 23800.56 | 4283.15  | 28134.41  | 37%      |
| Aqua                                                                                 | 22975.73 | 3169.98  | 26354.58  | 36%      |
| Oak                                                                                  | 21862.34 | 3930.34  | 31212.13  | 34%      |
| Dinatra                                                                              | 18791.72 | 4376.30  | 25251.25  | 29%      |
| Abc                                                                                  | 17360.70 | 2499.40  | 23785.41  | 27%      |
| Opine                                                                                | 9901.64  | 4682.37  | 133328.89 | 15%      |
| Express (Deno)                                                                       | 8740.31  | 1695.75  | 11591.84  | 14%      |
| Express                                                                              | 6214.30  | 1547.76  | 10141.60  | 10%      |
| Servest                                                                              | 5760.60  | 1662.76  | 8555.21   | 9%       |
| Acorn                                                                                | 3417.66  | 4740.55  | 71122.49  | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-f6376954-0f84-4780-9e77-0262debdcdab) |          |          |           |          |

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

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17360.70 | 2499.40 | 23785.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15329.17 | 16545.64 | 17627.90 | 18930.57 | 19972.96 | 20181.49 | 20406.96 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3417.66  | 4740.55 | 71122.49 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1502.14 | 2086.92 | 2606.99 | 3789.08 | 5430.49 | 8561.79 | 9965.33 |
| **Latency** | 5ms     | 7ms     | 16ms    | 22ms    | 26ms    | 27ms    | 29ms    |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 31326.94 | 7159.76 | 154631.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27829.28 | 29686.38 | 33514.48 | 34262.92 | 34812.25 | 35154.99 | 35601.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22975.73 | 3169.98 | 26354.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21898.15 | 22431.41 | 24141.33 | 24551.63 | 24740.64 | 24824.55 | 25485.98 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60569.12 | 10125.07 | 77736.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48608.96 | 51269.68 | 58652.31 | 71132.81 | 72785.22 | 73511.17 | 74888.83 |
| **Latency** | 495µs    | 624µs    | 768µs    | 918µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39259.38 | 5391.94 | 41935.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38744.17 | 40410.99 | 40727.78 | 40977.41 | 41154.06 | 41309.88 | 41632.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63952.49 | 15162.68 | 74949.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30505.12 | 66438.02 | 71429.45 | 72734.33 | 73488.81 | 73858.96 | 74534.69 |
| **Latency** | 536µs    | 621µs    | 730µs    | 772µs    | 961µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57242.28 | 12744.51 | 65958.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28037.35 | 60422.48 | 63282.39 | 63890.86 | 64485.26 | 64666.75 | 64943.01 |
| **Latency** | 727µs    | 750µs    | 770µs    | 812µs    | 961µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18791.72 | 4376.30 | 25251.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14087.66 | 18000.04 | 20096.58 | 21515.54 | 21963.30 | 22200.09 | 24308.16 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6214.30  | 1547.76 | 10141.60 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4254.90 | 4819.48 | 7110.54 | 7278.11 | 7390.25 | 7440.57 | 7498.63 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 11ms    | 12ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8740.31  | 1695.75 | 11591.84 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6602.28 | 8543.39 | 9462.56 | 9608.44 | 9663.22 | 9683.49 | 9941.44 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61882.98 | 12827.47 | 70045.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36218.54 | 65413.21 | 67359.41 | 68106.27 | 68515.22 | 68733.82 | 69111.20 |
| **Latency** | 682µs    | 711µs    | 728µs    | 753µs    | 874µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31992.37 | 4984.85 | 34739.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31659.63 | 32633.03 | 33336.07 | 33722.03 | 33966.99 | 34118.84 | 34387.12 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59360.25 | 13682.40 | 68541.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28177.33 | 63125.38 | 65783.02 | 66544.05 | 67067.88 | 67521.07 | 68040.97 |
| **Latency** | 701µs    | 729µs    | 746µs    | 771µs    | 918µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60624.54 | 13949.64 | 70062.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28624.67 | 63741.60 | 67260.67 | 68082.65 | 68620.04 | 68888.17 | 69358.73 |
| **Latency** | 674µs    | 711µs    | 730µs    | 758µs    | 899µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38268.08 | 8472.75 | 86607.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27318.90 | 35916.29 | 42410.26 | 42993.83 | 43627.76 | 43918.53 | 44287.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56428.70 | 16292.15 | 74085.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34617.78 | 36687.04 | 66378.49 | 70661.48 | 71714.51 | 72330.72 | 73129.31 |
| **Latency** | 528µs    | 616µs    | 779µs    | 954µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23800.56 | 4283.15 | 28134.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20625.73 | 23760.64 | 24779.98 | 26101.24 | 26364.40 | 26482.30 | 26956.43 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56471.82 | 11795.93 | 63997.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31811.52 | 59856.94 | 61925.54 | 62404.49 | 62775.27 | 63040.71 | 63703.34 |
| **Latency** | 750µs    | 773µs    | 795µs    | 823µs    | 979µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62787.11 | 13401.62 | 71428.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32301.91 | 66564.03 | 68341.38 | 69172.38 | 69790.18 | 70207.86 | 70785.79 |
| **Latency** | 653µs    | 696µs    | 721µs    | 755µs    | 854µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34444.96 | 5281.27 | 37762.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34037.51 | 35158.08 | 35674.27 | 36245.74 | 36498.26 | 36630.85 | 36866.43 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21862.34 | 3930.34 | 31212.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20300.24 | 21281.84 | 22814.19 | 23671.43 | 24344.77 | 24682.69 | 25101.31 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9901.64  | 4682.37 | 133328.89 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8135.24 | 9544.40 | 10198.58 | 10488.92 | 10789.71 | 11527.23 | 12406.09 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33864.96 | 7729.75 | 40357.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22576.36 | 32617.03 | 37425.52 | 38625.13 | 39032.40 | 39235.26 | 39860.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48652.11 | 5820.23 | 53008.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47378.27 | 49408.00 | 50190.83 | 50752.38 | 51275.95 | 51593.49 | 51922.24 |
| **Latency** | 949µs    | 967µs    | 983µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26674.59 | 4715.38 | 32257.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21346.39 | 25705.97 | 28479.77 | 29457.12 | 29831.66 | 30044.68 | 30588.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5760.60  | 1662.76 | 8555.21 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4493.88 | 5130.22 | 6269.23 | 6716.99 | 7058.87 | 7134.83 | 8408.26 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 16ms    | 18ms    |

---

<p align="center">Generated 2023-05-08T01:35:22.158Z</p>
