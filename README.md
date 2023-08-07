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
| Vixeny (Deno)                                                                        | 70199.12 | 16135.54 | 79871.41  | 100%     |
| NHttp                                                                                | 70192.75 | 14730.67 | 78834.80  | 100%     |
| Deno                                                                                 | 69192.94 | 17925.63 | 81631.70  | 99%      |
| Fast                                                                                 | 68931.82 | 16239.18 | 79042.60  | 98%      |
| Hono                                                                                 | 68152.49 | 15444.86 | 77524.75  | 97%      |
| Stric                                                                                | 66677.03 | 14735.77 | 86318.66  | 95%      |
| Bun                                                                                  | 65447.78 | 15081.91 | 86242.44  | 93%      |
| Hyper Express                                                                        | 63822.56 | 17638.24 | 87440.10  | 91%      |
| Deso                                                                                 | 60360.18 | 16069.34 | 72421.56  | 86%      |
| Fastro                                                                               | 59519.13 | 16216.36 | 71745.77  | 85%      |
| Reno                                                                                 | 54465.35 | 7520.41  | 58899.76  | 78%      |
| Cheetah                                                                              | 50690.73 | 5587.19  | 54138.32  | 72%      |
| Node                                                                                 | 41748.37 | 5838.21  | 46323.63  | 59%      |
| http                                                                                 | 39611.64 | 10529.06 | 49024.57  | 56%      |
| Fastify                                                                              | 37334.09 | 5960.34  | 42120.18  | 53%      |
| Alosaur                                                                              | 31861.73 | 7148.26  | 56846.17  | 45%      |
| Router                                                                               | 28843.25 | 4746.72  | 34550.49  | 41%      |
| Little                                                                               | 24677.72 | 4340.16  | 49807.83  | 35%      |
| Oak                                                                                  | 23610.88 | 4348.97  | 38581.02  | 34%      |
| Aqua                                                                                 | 23501.76 | 3359.27  | 31231.61  | 33%      |
| Dinatra                                                                              | 22405.24 | 4573.78  | 49286.33  | 32%      |
| Abc                                                                                  | 19008.45 | 4783.50  | 25365.48  | 27%      |
| Danet (Oak)                                                                          | 17228.25 | 3578.45  | 23693.71  | 25%      |
| Express (Deno)                                                                       | 10826.69 | 2228.91  | 18348.98  | 15%      |
| Opine                                                                                | 10228.96 | 3415.49  | 68568.79  | 15%      |
| Express                                                                              | 7785.38  | 1515.52  | 12599.02  | 11%      |
| Servest                                                                              | 6741.59  | 2153.23  | 10834.47  | 10%      |
| Acorn                                                                                | 5166.25  | 9092.43  | 127229.70 | 7%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-6d902a17-66e3-4f17-b540-a786ad61e321) |          |          |           |          |

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
| 19008.45 | 4783.50 | 25365.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11120.72 | 13364.71 | 20729.92 | 21843.32 | 23959.93 | 24266.40 | 24608.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5166.25  | 9092.43 | 127229.70 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 58.56 | 1049.88 | 3663.53 | 7047.11 | 8971.92 | 10939.69 | 60087.38 |
| **Latency** | 5ms   | 7ms     | 15ms    | 21ms    | 27ms    | 29ms     | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31861.73 | 7148.26 | 56846.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23704.51 | 29693.07 | 34837.57 | 35865.48 | 36564.94 | 37099.37 | 38162.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23501.76 | 3359.27 | 31231.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21908.48 | 22944.53 | 24438.15 | 25165.48 | 25700.20 | 26172.68 | 27217.16 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65447.78 | 15081.91 | 86242.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45675.14 | 48749.11 | 73312.37 | 79591.13 | 80915.99 | 81564.24 | 83022.21 |
| **Latency** | 463µs    | 571µs    | 687µs    | 992µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50690.73 | 5587.19 | 54138.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50021.99 | 51311.18 | 52037.36 | 52403.65 | 52663.15 | 52800.74 | 53012.61 |
| **Latency** | 886µs    | 914µs    | 955µs    | 994µs    | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17228.25 | 3578.45 | 23693.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12816.12 | 16505.10 | 18314.80 | 19448.49 | 19774.14 | 20187.24 | 21720.00 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69192.94 | 17925.63 | 81631.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31907.94 | 71041.57 | 78453.72 | 79525.34 | 80248.85 | 80539.36 | 81268.64 |
| **Latency** | 498µs    | 550µs    | 662µs    | 702µs    | 937µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60360.18 | 16069.34 | 72421.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28229.81 | 58779.27 | 68979.22 | 70082.60 | 70617.40 | 70843.12 | 71620.49 |
| **Latency** | 644µs    | 690µs    | 721µs    | 753µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22405.24 | 4573.78 | 49286.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20429.70 | 21389.14 | 22505.59 | 25088.53 | 25527.09 | 26017.93 | 28295.65 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7785.38  | 1515.52 | 12599.02 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5583.13 | 6838.29 | 8623.19 | 8719.87 | 8781.66 | 8808.98 | 8836.13 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10826.69 | 2228.91 | 18348.98 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8462.64 | 10617.26 | 11507.70 | 11904.75 | 12304.54 | 12666.14 | 13030.22 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 6ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68931.82 | 16239.18 | 79042.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31412.23 | 73478.28 | 76325.13 | 77031.45 | 77609.25 | 77938.13 | 78442.30 |
| **Latency** | 581µs    | 618µs    | 649µs    | 684µs    | 785µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37334.09 | 5960.34 | 42120.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37420.17 | 38201.11 | 38735.92 | 39254.13 | 39500.69 | 39603.92 | 39777.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59519.13 | 16216.36 | 71745.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29946.39 | 52448.38 | 69145.84 | 69920.92 | 70308.22 | 70506.40 | 70926.18 |
| **Latency** | 651µs    | 698µs    | 728µs    | 755µs    | 866µs    | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68152.49 | 15444.86 | 77524.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31807.28 | 72663.43 | 74844.10 | 75740.77 | 76387.99 | 76669.71 | 77207.66 |
| **Latency** | 591µs    | 629µs    | 663µs    | 697µs    | 809µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39611.64 | 10529.06 | 49024.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22809.01 | 38011.38 | 45445.43 | 46818.71 | 47380.94 | 47708.09 | 48475.57 |
| **Latency** | 970µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63822.56 | 17638.24 | 87440.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40865.87 | 42200.45 | 71021.35 | 80313.55 | 81691.54 | 82122.78 | 84718.58 |
| **Latency** | 471µs    | 562µs    | 681µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24677.72 | 4340.16 | 49807.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20311.24 | 24519.84 | 25829.94 | 26924.07 | 27303.66 | 27775.79 | 28665.05 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

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
| 70192.75 | 14730.67 | 78834.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42105.86 | 73722.99 | 76134.97 | 77218.68 | 77800.81 | 78056.47 | 78531.61 |
| **Latency** | 581µs    | 616µs    | 650µs    | 686µs    | 765µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41748.37 | 5838.21 | 46323.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41036.93 | 42357.57 | 42994.16 | 43598.10 | 44034.75 | 44322.12 | 44942.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23610.88 | 4348.97 | 38581.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21740.20 | 23193.04 | 24857.54 | 25615.30 | 26105.10 | 26749.61 | 27824.18 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10228.96 | 3415.49 | 68568.79 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7342.96 | 10203.87 | 10782.81 | 11196.51 | 11365.81 | 11789.88 | 12909.98 |
| **Latency** | 3ms     | 4ms      | 4ms      | 5ms      | 5ms      | 6ms      | 13ms     |

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
| 54465.35 | 7520.41 | 58899.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52729.50 | 55913.39 | 56553.32 | 57224.28 | 57806.90 | 58096.41 | 58425.57 |
| **Latency** | 780µs    | 851µs    | 886µs    | 914µs    | 974µs    | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28843.25 | 4746.72 | 34550.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26105.21 | 28241.44 | 30331.62 | 31238.28 | 31826.12 | 32329.65 | 33223.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66677.03 | 14735.77 | 86318.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46207.82 | 50803.72 | 76122.03 | 79926.64 | 81296.60 | 82037.18 | 84084.09 |
| **Latency** | 455µs    | 564µs    | 682µs    | 931µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6741.59  | 2153.23 | 10834.47 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4031.08 | 5921.22 | 7535.56 | 8079.54 | 8582.99 | 8761.65 | 9180.34 |
| **Latency** | 4ms     | 5ms     | 7ms     | 8ms     | 10ms    | 14ms    | 18ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 70199.12 | 16135.54 | 79871.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33345.00 | 74920.95 | 77382.83 | 78214.27 | 78725.95 | 78993.67 | 79478.72 |
| **Latency** | 573µs    | 604µs    | 642µs    | 687µs    | 750µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-08-07T01:34:55.589Z</p>
