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
| Deno                                                                                 | 61557.91 | 15229.59 | 73425.68  | 100%     |
| Vixeny (Deno)                                                                        | 60887.81 | 13325.22 | 70681.75  | 99%      |
| Fast                                                                                 | 59671.35 | 13305.08 | 70461.66  | 97%      |
| NHttp                                                                                | 58623.86 | 15212.62 | 70614.80  | 95%      |
| Bun                                                                                  | 57428.23 | 13772.45 | 76928.89  | 93%      |
| Hyper Express                                                                        | 57041.09 | 15923.53 | 74820.85  | 93%      |
| Stric                                                                                | 55906.33 | 12553.55 | 73511.66  | 91%      |
| Deso                                                                                 | 54492.16 | 12071.56 | 64116.85  | 89%      |
| Hono                                                                                 | 54277.94 | 13963.77 | 65741.80  | 88%      |
| Reno                                                                                 | 47936.67 | 6947.12  | 52862.23  | 78%      |
| Fastro                                                                               | 47931.39 | 15302.81 | 61403.78  | 78%      |
| Cheetah                                                                              | 44857.58 | 4986.94  | 48887.79  | 73%      |
| http                                                                                 | 35683.82 | 8558.00  | 43130.30  | 58%      |
| Node                                                                                 | 33746.87 | 5226.75  | 37184.00  | 55%      |
| Fastify                                                                              | 30754.19 | 4695.64  | 33976.36  | 50%      |
| Alosaur                                                                              | 28730.88 | 5992.97  | 38675.50  | 47%      |
| Router                                                                               | 25023.29 | 4433.63  | 30448.46  | 41%      |
| Aqua                                                                                 | 22712.50 | 3640.91  | 28186.25  | 37%      |
| Little                                                                               | 21422.36 | 4262.64  | 26504.27  | 35%      |
| Oak                                                                                  | 20149.16 | 4295.11  | 26087.64  | 33%      |
| Dinatra                                                                              | 18514.94 | 4895.31  | 108477.64 | 30%      |
| Abc                                                                                  | 16653.50 | 3772.70  | 21448.78  | 27%      |
| Danet (Oak)                                                                          | 15626.93 | 3044.05  | 22033.88  | 25%      |
| Opine                                                                                | 9591.80  | 2466.39  | 23851.17  | 16%      |
| Express (Deno)                                                                       | 9437.16  | 2057.71  | 17021.04  | 15%      |
| Express                                                                              | 6184.86  | 1330.22  | 11651.93  | 10%      |
| Servest                                                                              | 5801.12  | 1942.56  | 9168.96   | 9%       |
| Acorn                                                                                | 5495.23  | 7014.18  | 109888.38 | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-a5f131ee-92c2-4f7c-bd01-9712e047be3f) |          |          |           |          |

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
| 16653.50 | 3772.70 | 21448.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10038.14 | 15737.92 | 18032.59 | 19096.55 | 20069.44 | 20274.27 | 20907.33 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5495.23  | 7014.18 | 109888.38 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 49.03 | 65.71 | 5696.99 | 8133.26 | 11643.48 | 14574.15 | 29485.09 |
| **Latency** | 6ms   | 8ms   | 18ms    | 24ms    | 29ms     | 30ms     | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28730.88 | 5992.97 | 38675.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23373.36 | 25896.06 | 31085.98 | 31738.60 | 32480.94 | 32895.62 | 33925.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22712.50 | 3640.91 | 28186.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20673.37 | 21627.09 | 23920.70 | 24558.90 | 25137.37 | 25564.83 | 26511.54 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57428.23 | 13772.45 | 76928.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39518.32 | 43641.33 | 64642.56 | 69426.96 | 71308.44 | 72224.03 | 73679.62 |
| **Latency** | 511µs    | 631µs    | 780µs    | 932µs    | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44857.58 | 4986.94 | 48887.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44321.13 | 45403.94 | 46053.67 | 46438.86 | 46727.41 | 47036.07 | 47579.22 |
| **Latency** | 983µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15626.93 | 3044.05 | 22033.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13069.63 | 14941.74 | 16386.81 | 17108.08 | 17812.25 | 18684.91 | 20830.98 |
| **Latency** | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61557.91 | 15229.59 | 73425.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29366.06 | 63525.17 | 69003.57 | 70504.67 | 71521.09 | 72221.74 | 73102.87 |
| **Latency** | 555µs    | 616µs    | 754µs    | 797µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54492.16 | 12071.56 | 64116.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26550.62 | 57784.64 | 59732.05 | 60789.14 | 61375.28 | 61901.23 | 62812.34 |
| **Latency** | 722µs    | 777µs    | 816µs    | 867µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 18514.94 | 4895.31 | 108477.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15420.86 | 16396.37 | 20415.24 | 20849.13 | 21503.93 | 22060.20 | 23303.95 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6184.86  | 1330.22 | 11651.93 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4104.79 | 6238.72 | 6800.63 | 6931.52 | 7037.06 | 7089.02 | 7242.64 |
| **Latency** | 7ms     | 7ms     | 7ms     | 7ms     | 11ms    | 12ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9437.16  | 2057.71 | 17021.04 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7064.62 | 8693.84 | 10333.86 | 10540.72 | 10687.16 | 10841.61 | 11417.98 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 7ms      | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59671.35 | 13305.08 | 70461.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27704.67 | 62609.90 | 65501.21 | 66582.34 | 67577.00 | 68048.32 | 69106.81 |
| **Latency** | 660µs    | 707µs    | 753µs    | 801µs    | 969µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30754.19 | 4695.64 | 33976.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30414.22 | 31143.39 | 31951.37 | 32420.20 | 32731.52 | 32996.78 | 33500.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47931.39 | 15302.81 | 61403.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23863.52 | 39084.49 | 56204.59 | 59418.93 | 59943.26 | 60416.21 | 61352.86 |
| **Latency** | 768µs    | 821µs    | 865µs    | 922µs    | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54277.94 | 13963.77 | 65741.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25131.89 | 55141.23 | 61226.80 | 62441.07 | 63300.51 | 63873.97 | 64737.10 |
| **Latency** | 708µs    | 754µs    | 793µs    | 862µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35683.82 | 8558.00 | 43130.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25211.04 | 32526.69 | 39764.55 | 40660.56 | 41216.41 | 41521.43 | 42173.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57041.09 | 15923.53 | 74820.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32712.71 | 39031.56 | 65841.39 | 70344.20 | 71779.85 | 72455.66 | 73610.31 |
| **Latency** | 522µs    | 611µs    | 775µs    | 853µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21422.36 | 4262.64 | 26504.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19310.39 | 20803.02 | 22721.09 | 23560.57 | 24089.43 | 24511.59 | 25406.79 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

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
| 58623.86 | 15212.62 | 70614.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26856.35 | 62068.80 | 65834.13 | 66921.98 | 68086.89 | 68716.71 | 69387.71 |
| **Latency** | 660µs    | 700µs    | 753µs    | 804µs    | 963µs    | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33746.87 | 5226.75 | 37184.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32804.87 | 34410.98 | 34923.00 | 35735.33 | 36043.20 | 36256.51 | 36773.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20149.16 | 4295.11 | 26087.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16547.47 | 19393.67 | 21665.06 | 22406.91 | 23022.30 | 23507.02 | 24790.44 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9591.80  | 2466.39 | 23851.17 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6741.86 | 8106.15 | 9607.10 | 10829.90 | 12753.03 | 13757.48 | 14905.99 |
| **Latency** | 2ms     | 4ms     | 5ms     | 5ms      | 6ms      | 6ms      | 11ms     |

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
| 47936.67 | 6947.12 | 52862.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45404.50 | 49123.75 | 49827.85 | 50757.80 | 51323.64 | 51625.76 | 52363.88 |
| **Latency** | 881µs    | 955µs    | 998µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25023.29 | 4433.63 | 30448.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22317.42 | 23704.31 | 26529.70 | 27288.20 | 27924.72 | 28341.69 | 29203.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55906.33 | 12553.55 | 73511.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39706.32 | 43068.35 | 60416.26 | 67959.65 | 69909.73 | 70811.98 | 72303.56 |
| **Latency** | 522µs    | 648µs    | 794µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5801.12  | 1942.56 | 9168.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3507.12 | 4915.77 | 6445.05 | 6981.60 | 7355.98 | 8485.27 | 8790.63 |
| **Latency** | 5ms     | 5ms     | 8ms     | 11ms    | 14ms    | 17ms    | 23ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60887.81 | 13325.22 | 70681.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28436.71 | 63901.21 | 66546.10 | 67516.20 | 68519.94 | 69156.78 | 69975.77 |
| **Latency** | 656µs    | 698µs    | 744µs    | 789µs    | 936µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-08-12T01:20:00.594Z</p>
