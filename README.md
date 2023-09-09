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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Fast                                                                                 | 63310.22 | 12822.34 | 71365.31 | 100%     |
| NHttp                                                                                | 63046.41 | 14196.52 | 72344.12 | 100%     |
| Vixeny (Deno)                                                                        | 61840.62 | 15130.03 | 72352.03 | 98%      |
| Deno                                                                                 | 61226.31 | 15381.62 | 73278.23 | 97%      |
| Hyper Express                                                                        | 60913.49 | 16305.59 | 76037.14 | 96%      |
| Hono                                                                                 | 60123.75 | 12215.04 | 67448.13 | 95%      |
| Stric                                                                                | 59898.60 | 12626.08 | 77380.29 | 95%      |
| Fastro                                                                               | 57458.17 | 13520.47 | 67003.12 | 91%      |
| Bun                                                                                  | 57237.69 | 13212.29 | 77256.78 | 90%      |
| Deso                                                                                 | 56053.56 | 12898.51 | 64849.20 | 89%      |
| Reno                                                                                 | 49040.15 | 8292.46  | 54120.51 | 77%      |
| Cheetah                                                                              | 45489.05 | 12032.05 | 55084.53 | 72%      |
| http                                                                                 | 35362.73 | 9156.63  | 45689.96 | 56%      |
| Node                                                                                 | 34457.84 | 5328.50  | 38100.34 | 54%      |
| Fastify                                                                              | 31542.40 | 5203.58  | 34301.33 | 50%      |
| Alosaur                                                                              | 28538.55 | 6575.81  | 84813.19 | 45%      |
| Router                                                                               | 26411.97 | 4691.12  | 31880.17 | 42%      |
| Aqua                                                                                 | 24909.12 | 4252.51  | 30845.31 | 39%      |
| Oak                                                                                  | 21430.89 | 4049.92  | 39701.84 | 34%      |
| Little                                                                               | 21087.34 | 4501.89  | 28084.68 | 33%      |
| Danet (Oak)                                                                          | 16585.66 | 3089.29  | 22252.95 | 26%      |
| Abc                                                                                  | 15918.89 | 5196.19  | 32311.72 | 25%      |
| Opine                                                                                | 10623.62 | 2265.79  | 17154.50 | 17%      |
| Express (Deno)                                                                       | 10587.37 | 2057.07  | 13771.74 | 17%      |
| Express                                                                              | 6288.80  | 1450.81  | 9944.84  | 10%      |
| Acorn                                                                                | 6039.46  | 9607.05  | 70845.86 | 10%      |
| Servest                                                                              | 5998.13  | 1874.61  | 9502.77  | 9%       |
| Dinatra                                                                              | 0.00     | 0.00     | 0.00     | 0%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-622d7923-91c4-4969-8325-0b5d3bf973dc) |          |          |          |          |

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
| 15918.89 | 5196.19 | 32311.72 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9533.25 | 9809.89 | 17514.18 | 20514.08 | 21148.84 | 21513.09 | 22211.95 |
| **Latency** | 2ms     | 2ms     | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6039.46  | 9607.05 | 70845.86 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 55.19 | 78.55 | 4124.02 | 8160.58 | 12247.24 | 16428.09 | 63157.13 |
| **Latency** | 6ms   | 7ms   | 16ms    | 24ms    | 29ms     | 31ms     | 34ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28538.55 | 6575.81 | 84813.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20860.90 | 25693.70 | 31301.86 | 32110.23 | 32702.54 | 33077.92 | 34362.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24909.12 | 4252.51 | 30845.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20032.23 | 23975.99 | 26583.18 | 27277.96 | 27766.05 | 28118.66 | 29324.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57237.69 | 13212.29 | 77256.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41175.29 | 45368.90 | 60222.20 | 70222.93 | 71832.95 | 72427.42 | 73718.59 |
| **Latency** | 508µs    | 636µs    | 778µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45489.05 | 12032.05 | 55084.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23268.38 | 43061.09 | 52071.25 | 52789.29 | 53249.14 | 53499.53 | 53998.11 |
| **Latency** | 847µs    | 918µs    | 958µs    | 1ms      | 2ms      | 2ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16585.66 | 3089.29 | 22252.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13708.07 | 16053.86 | 17544.10 | 18144.41 | 18584.33 | 19315.20 | 20831.85 |
| **Latency** | 1ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61226.31 | 15381.62 | 73278.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30229.28 | 59805.11 | 69313.86 | 70741.65 | 71529.43 | 71948.97 | 72348.23 |
| **Latency** | 550µs    | 608µs    | 759µs    | 796µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56053.56 | 12898.51 | 64849.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26207.91 | 59134.82 | 62213.44 | 62928.87 | 63417.54 | 63700.69 | 64116.68 |
| **Latency** | 704µs    | 749µs    | 792µs    | 850µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6288.80  | 1450.81 | 9944.84 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4254.32 | 5291.60 | 7020.07 | 7247.46 | 7338.22 | 7369.86 | 7424.49 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 11ms    | 12ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10587.37 | 2057.07 | 13771.74 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8802.72 | 10335.69 | 11425.47 | 11602.63 | 11723.20 | 11785.75 | 12309.78 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 6ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63310.22 | 12822.34 | 71365.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40404.80 | 66189.94 | 68511.65 | 69344.99 | 70005.73 | 70228.32 | 70674.83 |
| **Latency** | 642µs    | 686µs    | 726µs    | 764µs    | 860µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31542.40 | 5203.58 | 34301.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31222.13 | 32253.51 | 32860.43 | 33388.11 | 33632.37 | 33782.40 | 34031.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57458.17 | 13520.47 | 67003.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26487.38 | 59554.19 | 63917.83 | 64838.84 | 65581.60 | 65910.00 | 66423.48 |
| **Latency** | 684µs    | 732µs    | 767µs    | 815µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60123.75 | 12215.04 | 67448.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34373.87 | 63450.68 | 64963.68 | 65881.62 | 66592.93 | 66820.64 | 67132.81 |
| **Latency** | 675µs    | 721µs    | 756µs    | 802µs    | 948µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35362.73 | 9156.63 | 45689.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21316.65 | 32813.09 | 40448.99 | 41516.56 | 42152.96 | 42463.44 | 43231.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60913.49 | 16305.59 | 76037.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35151.28 | 42367.75 | 70542.43 | 73410.21 | 74427.46 | 74882.10 | 75801.14 |
| **Latency** | 508µs    | 579µs    | 750µs    | 785µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21087.34 | 4501.89 | 28084.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14804.28 | 19940.57 | 22410.03 | 24188.89 | 24549.56 | 24875.61 | 25764.12 |
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
| 63046.41 | 14196.52 | 72344.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28415.15 | 66020.39 | 69526.01 | 70609.81 | 71140.48 | 71447.85 | 71913.43 |
| **Latency** | 626µs    | 667µs    | 721µs    | 763µs    | 857µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34457.84 | 5328.50 | 38100.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33951.23 | 35263.08 | 35724.61 | 36389.48 | 36632.93 | 36751.41 | 36979.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21430.89 | 4049.92 | 39701.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19202.67 | 20518.85 | 22680.74 | 23323.66 | 24006.57 | 24514.92 | 26142.05 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10623.62 | 2265.79 | 17154.50 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7898.41 | 10108.88 | 11216.93 | 11526.95 | 11992.63 | 14016.35 | 16063.74 |
| **Latency** | 2ms     | 4ms      | 4ms      | 5ms      | 5ms      | 6ms      | 10ms     |

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
| 49040.15 | 8292.46 | 54120.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36549.89 | 51280.97 | 52073.29 | 52767.21 | 53221.76 | 53438.68 | 53723.04 |
| **Latency** | 850µs    | 921µs    | 961µs    | 994µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26411.97 | 4691.12 | 31880.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22402.88 | 25111.77 | 28251.95 | 28896.59 | 29469.81 | 30049.45 | 31287.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59898.60 | 12626.08 | 77380.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42770.61 | 46788.38 | 65802.56 | 71714.98 | 73015.98 | 73705.82 | 74979.93 |
| **Latency** | 499µs    | 616µs    | 763µs    | 906µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5998.13  | 1874.61 | 9502.77 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3821.93 | 5011.19 | 6659.73 | 7214.28 | 7563.98 | 7778.79 | 9061.06 |
| **Latency** | 4ms     | 6ms     | 8ms     | 9ms     | 12ms    | 15ms    | 20ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61840.62 | 15130.03 | 72352.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27803.86 | 65558.44 | 69118.11 | 70123.76 | 70643.09 | 70977.69 | 71454.26 |
| **Latency** | 625µs    | 670µs    | 722µs    | 775µs    | 875µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-09-09T01:21:20.429Z</p>
