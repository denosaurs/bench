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
| NHttp                                                                                | 44759.35 | 14368.58 | 63398.87 | 100%     |
| Vixeny (Deno)                                                                        | 43758.73 | 11871.15 | 57836.58 | 98%      |
| Bun                                                                                  | 43581.83 | 10816.81 | 70622.38 | 97%      |
| Hono                                                                                 | 43222.94 | 12194.13 | 56467.13 | 97%      |
| Stric                                                                                | 43174.86 | 13194.03 | 69405.12 | 96%      |
| Deno                                                                                 | 42798.85 | 15897.07 | 66061.13 | 96%      |
| Hyper Express                                                                        | 42243.60 | 16948.73 | 68801.05 | 94%      |
| Fast                                                                                 | 41547.72 | 13651.23 | 56762.29 | 93%      |
| Deso                                                                                 | 41278.31 | 11574.71 | 54470.22 | 92%      |
| Fastro                                                                               | 40881.63 | 11308.36 | 53935.62 | 91%      |
| Megalo                                                                               | 39182.28 | 11791.06 | 51867.26 | 88%      |
| Reno                                                                                 | 37918.43 | 8683.96  | 47709.86 | 85%      |
| Cheetah                                                                              | 36405.94 | 8023.89  | 44810.70 | 81%      |
| http                                                                                 | 27645.28 | 7161.03  | 37750.04 | 62%      |
| Alosaur                                                                              | 23262.95 | 5845.11  | 31458.52 | 52%      |
| Aqua                                                                                 | 19930.88 | 4227.98  | 31989.76 | 45%      |
| Router                                                                               | 19181.75 | 4483.90  | 25994.03 | 43%      |
| Node                                                                                 | 18219.80 | 3476.86  | 23022.76 | 41%      |
| Little                                                                               | 16336.87 | 3764.33  | 24592.35 | 36%      |
| Oak                                                                                  | 16134.46 | 4103.89  | 62084.26 | 36%      |
| Fastify                                                                              | 14346.31 | 3382.88  | 18764.15 | 32%      |
| Dinatra                                                                              | 11892.28 | 2900.96  | 24475.32 | 27%      |
| Abc                                                                                  | 11431.87 | 2323.26  | 16019.84 | 26%      |
| Danet (Oak)                                                                          | 10485.06 | 2446.93  | 15870.99 | 23%      |
| Opine                                                                                | 7258.56  | 1920.84  | 32540.59 | 16%      |
| Express (Deno)                                                                       | 6969.93  | 1648.79  | 20242.91 | 16%      |
| Acorn                                                                                | 4712.11  | 6298.85  | 75566.75 | 11%      |
| Express                                                                              | 4310.37  | 1046.03  | 12499.67 | 10%      |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| Servest                                                                              | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-eb5e2b90-a5be-436f-8e8b-0a453ffd835b) |          |          |          |          |

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
| 11431.87 | 2323.26 | 16019.84 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8435.32 | 10375.09 | 11717.48 | 13078.37 | 14071.44 | 14610.43 | 15293.35 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4712.11  | 6298.85 | 75566.75 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 62.16 | 90.97 | 3105.50 | 6858.31 | 11057.38 | 13488.60 | 20028.61 |
| **Latency** | 7ms   | 9ms   | 19ms    | 24ms    | 29ms     | 31ms     | 39ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23262.95 | 5845.11 | 31458.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15911.24 | 21628.81 | 25411.18 | 26793.49 | 27911.70 | 28458.16 | 29512.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19930.88 | 4227.98 | 31989.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16184.80 | 18828.07 | 20950.20 | 22452.89 | 23418.96 | 24085.52 | 25738.27 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43581.83 | 10816.81 | 70622.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30541.99 | 35421.57 | 42406.05 | 52075.98 | 58414.32 | 61833.56 | 66437.04 |
| **Latency** | 591µs    | 732µs    | 963µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36405.94 | 8023.89 | 44810.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25103.87 | 36182.68 | 39200.74 | 40870.78 | 42039.32 | 42608.90 | 43547.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10485.06 | 2446.93 | 15870.99 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6889.32 | 9768.05 | 11168.52 | 12004.79 | 12703.46 | 13114.66 | 14720.99 |
| **Latency** | 3ms     | 4ms     | 4ms      | 5ms      | 6ms      | 7ms      | 10ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42798.85 | 15897.07 | 66061.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20901.97 | 25906.45 | 46249.80 | 57433.05 | 61617.95 | 63130.08 | 64830.41 |
| **Latency** | 645µs    | 780µs    | 916µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41278.31 | 11574.71 | 54470.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19569.85 | 36252.19 | 46600.17 | 49109.29 | 50682.06 | 51321.01 | 52619.91 |
| **Latency** | 878µs    | 945µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11892.28 | 2900.96 | 24475.32 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8426.70 | 10756.14 | 12307.37 | 13756.39 | 14938.08 | 15364.98 | 16276.49 |
| **Latency** | 2ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 12ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4310.37  | 1046.03 | 12499.67 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2907.88 | 3843.50 | 4691.29 | 4917.40 | 5088.27 | 5163.87 | 5362.37 |
| **Latency** | 9ms     | 10ms    | 10ms    | 11ms    | 14ms    | 16ms    | 21ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6969.93  | 1648.79 | 20242.91 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4487.67 | 6568.57 | 7471.84 | 8025.27 | 8277.88 | 8468.41 | 8991.16 |
| **Latency** | 5ms     | 6ms     | 6ms     | 7ms     | 9ms     | 11ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41547.72 | 13651.23 | 56762.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18991.90 | 33804.60 | 47867.93 | 51748.59 | 53782.23 | 54731.70 | 56053.99 |
| **Latency** | 817µs    | 892µs    | 981µs    | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14346.31 | 3382.88 | 18764.15 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8141.27 | 13020.95 | 15668.77 | 16502.79 | 17186.10 | 17593.93 | 18035.33 |
| **Latency** | 2ms     | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      | 8ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40881.63 | 11308.36 | 53935.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19306.93 | 37610.49 | 45721.83 | 48342.48 | 50276.36 | 51156.21 | 52485.74 |
| **Latency** | 891µs    | 962µs    | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43222.94 | 12194.13 | 56467.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19612.14 | 41376.75 | 48918.40 | 50941.71 | 52375.34 | 53141.20 | 54241.85 |
| **Latency** | 846µs    | 913µs    | 983µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27645.28 | 7161.03 | 37750.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15753.22 | 25018.23 | 30210.54 | 32726.34 | 33834.05 | 34470.89 | 35174.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42243.60 | 16948.73 | 68801.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18313.34 | 25523.95 | 45749.27 | 57732.82 | 63343.08 | 64535.59 | 66393.61 |
| **Latency** | 591µs    | 735µs    | 889µs    | 1ms      | 2ms      | 2ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16336.87 | 3764.33 | 24592.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12128.67 | 14780.87 | 16892.23 | 19006.24 | 20100.36 | 20670.28 | 22194.78 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39182.28 | 11791.06 | 51867.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18420.42 | 34871.44 | 44662.02 | 47413.30 | 48974.37 | 49944.39 | 51101.47 |
| **Latency** | 910µs    | 981µs    | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44759.35 | 14368.58 | 63398.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19923.68 | 39203.09 | 48510.61 | 56511.79 | 59284.71 | 60739.02 | 61902.40 |
| **Latency** | 742µs    | 808µs    | 934µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18219.80 | 3476.86 | 23022.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14752.95 | 18126.25 | 19089.88 | 20009.58 | 20881.64 | 21402.11 | 22014.00 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16134.46 | 4103.89 | 62084.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11506.31 | 15464.15 | 17197.46 | 18309.30 | 19127.10 | 19600.13 | 21343.16 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7258.56  | 1920.84 | 32540.59 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5256.64 | 6857.78 | 7627.34 | 8094.80 | 8457.05 | 8669.12 | 10388.84 |
| **Latency** | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 15ms     |

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
| 37918.43 | 8683.96 | 47709.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22676.63 | 37026.15 | 41526.10 | 43125.38 | 44518.64 | 45056.26 | 45670.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19181.75 | 4483.90 | 25994.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13651.78 | 17489.87 | 20453.21 | 22212.59 | 23289.90 | 23946.42 | 25305.01 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43174.86 | 13194.03 | 69405.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25937.84 | 32522.05 | 43029.61 | 54218.36 | 61022.50 | 63087.26 | 66218.46 |
| **Latency** | 594µs    | 745µs    | 945µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43758.73 | 11871.15 | 57836.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20323.54 | 38058.94 | 49530.19 | 52147.38 | 53749.37 | 54467.13 | 55963.72 |
| **Latency** | 830µs    | 898µs    | 970µs    | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-10-18T01:25:28.218Z</p>
