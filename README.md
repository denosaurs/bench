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
| Fast                                                                                 | 66772.85 | 18551.48 | 79433.71  | 100%     |
| Fastro                                                                               | 65605.61 | 17710.40 | 77862.31  | 98%      |
| Hono                                                                                 | 64412.49 | 15916.65 | 74811.81  | 96%      |
| Vixeny (Deno)                                                                        | 63843.68 | 20190.42 | 79993.05  | 96%      |
| Deso                                                                                 | 62305.76 | 17829.49 | 74591.18  | 93%      |
| Bun                                                                                  | 62037.25 | 12168.05 | 86636.84  | 93%      |
| Stric                                                                                | 60024.17 | 10399.28 | 89549.96  | 90%      |
| Hyper Express                                                                        | 59500.45 | 14524.25 | 85694.92  | 89%      |
| NHttp                                                                                | 58983.60 | 21473.88 | 83072.92  | 88%      |
| Deno                                                                                 | 58745.74 | 17187.75 | 78767.57  | 88%      |
| Reno                                                                                 | 56260.94 | 8109.36  | 60157.93  | 84%      |
| Cheetah                                                                              | 48680.07 | 16202.40 | 61178.33  | 73%      |
| Node                                                                                 | 42026.00 | 7095.58  | 45665.51  | 63%      |
| http                                                                                 | 39048.54 | 9390.05  | 47097.08  | 58%      |
| Fastify                                                                              | 36297.98 | 6759.56  | 39409.34  | 54%      |
| Alosaur                                                                              | 32780.59 | 7070.39  | 46423.72  | 49%      |
| Router                                                                               | 28154.35 | 5378.08  | 35236.90  | 42%      |
| Aqua                                                                                 | 26355.53 | 5038.41  | 32986.97  | 39%      |
| Oak                                                                                  | 25505.96 | 5071.59  | 36874.42  | 38%      |
| Little                                                                               | 25270.90 | 5600.16  | 31738.01  | 38%      |
| Dinatra                                                                              | 23053.70 | 5284.49  | 29861.97  | 35%      |
| Abc                                                                                  | 18741.41 | 5545.55  | 26505.10  | 28%      |
| Danet (Oak)                                                                          | 18293.96 | 4212.53  | 24252.85  | 27%      |
| Opine                                                                                | 11889.43 | 4424.04  | 100390.97 | 18%      |
| Express (Deno)                                                                       | 11595.09 | 2497.91  | 15320.88  | 17%      |
| Servest                                                                              | 7629.18  | 2512.02  | 12559.72  | 11%      |
| Express                                                                              | 7521.15  | 1685.28  | 11119.13  | 11%      |
| Acorn                                                                                | 5701.94  | 10897.84 | 148148.15 | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-6aee9b7a-dd92-4f5f-8aad-797f69ed2f53) |          |          |           |          |

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
| 18741.41 | 5545.55 | 26505.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11254.91 | 12968.85 | 21425.43 | 23412.85 | 24278.75 | 24918.87 | 25682.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 5701.94  | 10897.84 | 148148.15 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 56.98 | 83.19 | 3992.77 | 7542.30 | 10115.42 | 11657.98 | 62543.43 |
| **Latency** | 5ms   | 7ms   | 14ms    | 22ms    | 26ms     | 29ms     | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32780.59 | 7070.39 | 46423.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27808.74 | 31017.19 | 35766.42 | 36500.61 | 37063.27 | 37499.78 | 38369.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26355.53 | 5038.41 | 32986.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18280.34 | 26151.01 | 28266.70 | 29164.21 | 29633.54 | 29996.58 | 31252.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62037.25 | 12168.05 | 86636.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49591.42 | 53046.86 | 57483.10 | 75506.43 | 79338.50 | 80385.79 | 82568.21 |
| **Latency** | 456µs    | 596µs    | 707µs    | 988µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48680.07 | 16202.40 | 61178.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24210.26 | 26414.39 | 59316.31 | 60222.55 | 60516.95 | 60674.93 | 60873.62 |
| **Latency** | 749µs    | 813µs    | 845µs    | 899µs    | 1ms      | 2ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18293.96 | 4212.53 | 24252.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12855.34 | 18000.45 | 19817.41 | 20757.54 | 21206.68 | 21693.49 | 23026.49 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58745.74 | 17187.75 | 78767.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31528.84 | 45151.71 | 62763.70 | 75613.97 | 76925.79 | 77505.01 | 78121.47 |
| **Latency** | 532µs    | 615µs    | 695µs    | 882µs    | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62305.76 | 17829.49 | 74591.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27201.25 | 61503.37 | 72233.76 | 73028.93 | 73407.69 | 73683.30 | 74234.42 |
| **Latency** | 615µs    | 657µs    | 691µs    | 724µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23053.70 | 5284.49 | 29861.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15324.89 | 21020.28 | 23417.88 | 26789.80 | 28406.54 | 28721.66 | 29190.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7521.15  | 1685.28 | 11119.13 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5256.74 | 5872.16 | 8509.48 | 8701.25 | 8819.17 | 8854.31 | 8907.96 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11595.09 | 2497.91 | 15320.88 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8131.59 | 11613.84 | 12501.18 | 12809.35 | 13252.95 | 13589.18 | 13751.11 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66772.85 | 18551.48 | 79433.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29318.60 | 66065.87 | 76711.84 | 77810.46 | 78325.67 | 78565.46 | 78988.66 |
| **Latency** | 563µs    | 606µs    | 646µs    | 701µs    | 922µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36297.98 | 6759.56 | 39409.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36110.63 | 37555.75 | 38145.06 | 38755.99 | 38986.72 | 39103.40 | 39230.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65605.61 | 17710.40 | 77862.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29023.06 | 68018.64 | 74839.26 | 75550.21 | 76258.10 | 76527.90 | 76882.57 |
| **Latency** | 592µs    | 631µs    | 665µs    | 699µs    | 847µs    | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64412.49 | 15916.65 | 74811.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29259.66 | 68607.17 | 72056.69 | 72837.47 | 73260.40 | 73510.62 | 74214.45 |
| **Latency** | 614µs    | 657µs    | 691µs    | 722µs    | 847µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39048.54 | 9390.05 | 47097.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19499.17 | 37822.11 | 43863.42 | 45181.23 | 45789.98 | 46073.82 | 46623.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59500.45 | 14524.25 | 85694.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40413.16 | 46737.15 | 60028.49 | 71402.78 | 78944.57 | 81650.44 | 84241.09 |
| **Latency** | 496µs    | 591µs    | 702µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25270.90 | 5600.16 | 31738.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15588.45 | 25726.88 | 27301.10 | 28582.81 | 29058.72 | 29385.06 | 30367.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

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
| 58983.60 | 21473.88 | 83072.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29360.32 | 33776.47 | 67026.60 | 79643.37 | 80878.82 | 81372.80 | 82013.78 |
| **Latency** | 500µs    | 597µs    | 666µs    | 772µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42026.00 | 7095.58 | 45665.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41219.15 | 43282.87 | 43900.20 | 44562.59 | 45002.46 | 45163.44 | 45437.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25505.96 | 5071.59 | 36874.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19068.35 | 25461.41 | 27243.23 | 28045.85 | 28599.50 | 29042.25 | 29877.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 11889.43 | 4424.04 | 100390.97 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8779.16 | 11433.67 | 12344.58 | 12912.66 | 13443.09 | 14257.06 | 15290.11 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 5ms      | 5ms      | 9ms      |

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
| 56260.94 | 8109.36 | 60157.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55920.94 | 57916.29 | 58429.73 | 58881.52 | 59254.79 | 59434.45 | 59901.50 |
| **Latency** | 760µs    | 828µs    | 862µs    | 889µs    | 930µs    | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28154.35 | 5378.08 | 35236.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19255.54 | 27580.78 | 30304.71 | 31313.42 | 31960.27 | 32574.13 | 33336.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60024.17 | 10399.28 | 89549.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49484.93 | 53353.90 | 57299.46 | 66687.00 | 75917.47 | 79886.45 | 83914.65 |
| **Latency** | 458µs    | 592µs    | 769µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7629.18  | 2512.02 | 12559.72 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 4525.77 | 6529.61 | 8626.70 | 9237.21 | 9815.78 | 10058.44 | 10432.61 |
| **Latency** | 3ms     | 4ms     | 6ms     | 7ms     | 9ms     | 13ms     | 17ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63843.68 | 20190.42 | 79993.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28201.37 | 47323.72 | 76637.82 | 78015.95 | 78609.78 | 78933.75 | 79313.78 |
| **Latency** | 517µs    | 595µs    | 666µs    | 718µs    | 1ms      | 1ms      | 2ms      |

---

<p align="center">Generated 2023-10-04T01:26:45.242Z</p>
