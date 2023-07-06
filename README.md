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
| Fast                                                                                 | 61730.59 | 13829.31 | 72083.17 | 100%     |
| Hono                                                                                 | 61405.83 | 13182.20 | 69917.80 | 99%      |
| Deno                                                                                 | 60181.27 | 16127.13 | 73834.60 | 97%      |
| Stric                                                                                | 59670.72 | 11241.06 | 80577.83 | 97%      |
| Bun                                                                                  | 59623.11 | 11425.44 | 78453.06 | 97%      |
| Vixeny (Deno)                                                                        | 58713.38 | 13027.97 | 68923.50 | 95%      |
| NHttp                                                                                | 56460.41 | 11863.30 | 65272.88 | 91%      |
| Hyper Express                                                                        | 54245.51 | 16289.27 | 74539.90 | 88%      |
| Deso                                                                                 | 53404.93 | 11461.54 | 62605.27 | 87%      |
| Reno                                                                                 | 46215.97 | 10980.66 | 54037.52 | 75%      |
| http                                                                                 | 34940.56 | 8528.39  | 44081.88 | 57%      |
| Cheetah                                                                              | 33259.08 | 3658.47  | 37061.82 | 54%      |
| Node                                                                                 | 32601.73 | 6542.32  | 37232.60 | 53%      |
| Alosaur                                                                              | 30206.48 | 6379.25  | 88138.20 | 49%      |
| Fastify                                                                              | 29535.74 | 5216.57  | 32140.32 | 48%      |
| Peko                                                                                 | 27192.84 | 8835.50  | 39077.22 | 44%      |
| Router                                                                               | 26652.38 | 4759.08  | 37699.28 | 43%      |
| Aqua                                                                                 | 22732.41 | 3375.03  | 31560.02 | 37%      |
| Little                                                                               | 20888.36 | 4349.85  | 36178.56 | 34%      |
| Oak                                                                                  | 18915.03 | 4028.95  | 59316.38 | 31%      |
| Dinatra                                                                              | 17568.38 | 3638.34  | 35579.97 | 28%      |
| Abc                                                                                  | 17384.28 | 3344.22  | 22386.09 | 28%      |
| Danet (Oak)                                                                          | 16216.94 | 3105.40  | 22444.98 | 26%      |
| Express (Deno)                                                                       | 8566.49  | 1867.96  | 10850.82 | 14%      |
| Opine                                                                                | 8309.20  | 1870.15  | 22929.66 | 13%      |
| Acorn                                                                                | 6900.47  | 9705.46  | 78055.21 | 11%      |
| Express                                                                              | 6090.65  | 1322.64  | 10219.58 | 10%      |
| Servest                                                                              | 6073.44  | 1799.11  | 8921.03  | 10%      |
| Fastro                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-7898bfbd-c294-4bc7-8025-f49b061d90d9) |          |          |          |          |

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
| 17384.28 | 3344.22 | 22386.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13644.36 | 16630.91 | 18218.73 | 19325.36 | 20179.14 | 21009.88 | 21685.52 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6900.47  | 9705.46 | 78055.21 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 50.43 | 69.03 | 6061.31 | 9333.97 | 14914.67 | 20131.88 | 61319.16 |
| **Latency** | 5ms   | 7ms   | 16ms    | 23ms    | 27ms     | 30ms     | 34ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30206.48 | 6379.25 | 88138.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25620.37 | 27889.32 | 32464.39 | 33092.12 | 33786.32 | 34394.18 | 35805.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22732.41 | 3375.03 | 31560.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20900.92 | 22145.50 | 23574.11 | 24433.06 | 25023.12 | 25576.07 | 26729.98 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59623.11 | 11425.44 | 78453.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45862.56 | 49762.45 | 59996.63 | 70930.78 | 72732.35 | 73479.66 | 75622.23 |
| **Latency** | 499µs    | 628µs    | 770µs    | 941µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33259.08 | 3658.47 | 37061.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32592.92 | 33617.96 | 34175.37 | 34523.04 | 34850.40 | 35005.40 | 35274.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16216.94 | 3105.40 | 22444.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13504.46 | 15730.54 | 17007.72 | 17753.30 | 18293.45 | 19324.93 | 20884.21 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60181.27 | 16127.13 | 73834.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29146.44 | 55206.60 | 68714.04 | 70705.62 | 71942.80 | 72460.11 | 73393.91 |
| **Latency** | 555µs    | 626µs    | 757µs    | 803µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53404.93 | 11461.54 | 62605.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27178.66 | 56318.26 | 58111.22 | 59196.33 | 60203.27 | 60773.42 | 61451.26 |
| **Latency** | 742µs    | 790µs    | 832µs    | 901µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17568.38 | 3638.34 | 35579.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14886.72 | 15806.23 | 18155.62 | 19621.06 | 21087.61 | 21856.91 | 23130.10 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6090.65  | 1322.64 | 10219.58 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3923.09 | 6333.09 | 6615.18 | 6731.20 | 6909.09 | 7075.97 | 7363.14 |
| **Latency** | 7ms     | 7ms     | 7ms     | 7ms     | 10ms    | 12ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8566.49  | 1867.96 | 10850.82 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6119.06 | 8064.15 | 9431.35 | 9624.91 | 9777.41 | 9950.79 | 10294.18 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 15ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61730.59 | 13829.31 | 72083.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31100.07 | 63331.13 | 66191.72 | 69968.26 | 70881.09 | 71132.41 | 71702.32 |
| **Latency** | 639µs    | 682µs    | 735µs    | 784µs    | 898µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29535.74 | 5216.57 | 32140.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29050.97 | 30321.05 | 30901.99 | 31421.50 | 31651.14 | 31765.26 | 31902.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

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
| 61405.83 | 13182.20 | 69917.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31021.55 | 64817.79 | 67043.22 | 68034.33 | 68606.48 | 68767.71 | 69189.85 |
| **Latency** | 659µs    | 702µs    | 740µs    | 783µs    | 912µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34940.56 | 8528.39 | 44081.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22683.58 | 31476.00 | 38916.91 | 40584.46 | 41520.13 | 42046.43 | 43206.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54245.51 | 16289.27 | 74539.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30448.55 | 34291.16 | 64345.33 | 67636.89 | 68816.13 | 69491.84 | 70384.26 |
| **Latency** | 541µs    | 641µs    | 805µs    | 892µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20888.36 | 4349.85 | 36178.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17136.58 | 20115.88 | 22119.50 | 23336.13 | 24009.24 | 24431.73 | 25385.48 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

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
| 56460.41 | 11863.30 | 65272.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34606.74 | 59428.63 | 61226.62 | 62101.52 | 62594.79 | 62937.00 | 63859.71 |
| **Latency** | 710µs    | 758µs    | 801µs    | 851µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32601.73 | 6542.32 | 37232.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29228.19 | 33516.24 | 34564.44 | 35312.87 | 36062.08 | 36455.58 | 36829.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18915.03 | 4028.95 | 59316.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16226.03 | 17809.70 | 20112.76 | 20844.45 | 21488.02 | 21974.16 | 23771.27 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8309.20  | 1870.15 | 22929.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6300.78 | 7759.18 | 8828.37 | 9066.24 | 9301.50 | 9539.25 | 13641.57 |
| **Latency** | 3ms     | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 15ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27192.84 | 8835.50 | 39077.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16205.45 | 18766.92 | 30866.91 | 35130.09 | 36004.33 | 36463.38 | 37308.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46215.97 | 10980.66 | 54037.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23426.11 | 49329.96 | 51527.50 | 52314.88 | 53020.39 | 53262.60 | 53685.57 |
| **Latency** | 855µs    | 932µs    | 972µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26652.38 | 4759.08 | 37699.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22716.82 | 25968.25 | 28269.61 | 29186.52 | 29761.74 | 30119.40 | 31073.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59670.72 | 11241.06 | 80577.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45589.83 | 49117.38 | 59086.70 | 71130.19 | 72743.00 | 73557.87 | 75349.00 |
| **Latency** | 499µs    | 623µs    | 768µs    | 963µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6073.44  | 1799.11 | 8921.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4347.71 | 5220.75 | 6606.24 | 7182.39 | 7557.47 | 7684.90 | 8806.47 |
| **Latency** | 4ms     | 4ms     | 7ms     | 10ms    | 13ms    | 14ms    | 21ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58713.38 | 13027.97 | 68923.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28633.34 | 62023.22 | 64216.33 | 65140.02 | 66323.44 | 67011.67 | 67945.14 |
| **Latency** | 674µs    | 717µs    | 768µs    | 826µs    | 972µs    | 1ms      | 2ms      |

---

<p align="center">Generated 2023-07-06T02:08:08.513Z</p>
