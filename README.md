<div align="center">
  <h1><code>bench</code></h1>
  <p>
    <strong>📊 Daily benchmarks of deno & node & bun HTTP frameworks</strong>
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
  - [Danet V2 (Hono)](#danet-v2-hono)
  - [Deno](#deno)
  - [Deso](#deso)
  - [Dinatra](#dinatra)
  - [Elysia](#elysia)
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
    - [Danet V2 (Hono)](#danet-v2-hono-1)
    - [Deno](#deno-1)
    - [Deso](#deso-1)
    - [Dinatra](#dinatra-1)
    - [Elysia](#elysia-1)
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
| Bun                                                                                  | 80882.06 | 9342.03  | 100079.28 | 100%     |
| Hyper Express                                                                        | 78618.96 | 16043.70 | 99310.25  | 97%      |
| Stric                                                                                | 78540.43 | 10250.33 | 101295.33 | 97%      |
| Elysia                                                                               | 77412.92 | 13045.35 | 100852.84 | 96%      |
| Deno                                                                                 | 59553.05 | 10164.91 | 85521.30  | 74%      |
| NHttp                                                                                | 51523.94 | 5652.58  | 79040.86  | 64%      |
| Vixeny (Deno)                                                                        | 50953.39 | 5066.37  | 77565.36  | 63%      |
| Fastro                                                                               | 49598.91 | 3813.74  | 68274.15  | 61%      |
| Fast                                                                                 | 49082.89 | 4007.82  | 75876.17  | 61%      |
| Hono                                                                                 | 48057.75 | 3883.73  | 65896.72  | 59%      |
| Deso                                                                                 | 45907.40 | 2902.27  | 61398.13  | 57%      |
| Megalo                                                                               | 45219.66 | 2590.49  | 56608.64  | 56%      |
| Cheetah                                                                              | 40863.24 | 2346.51  | 50555.33  | 51%      |
| Reno                                                                                 | 39437.93 | 2008.50  | 54753.17  | 49%      |
| http                                                                                 | 39382.10 | 4151.11  | 47864.28  | 49%      |
| Router                                                                               | 35772.19 | 3157.56  | 39943.92  | 44%      |
| Danet V2 (Hono)                                                                      | 35488.14 | 2253.32  | 37653.59  | 44%      |
| Alosaur                                                                              | 33471.47 | 4019.28  | 38760.94  | 41%      |
| Danet (Oak)                                                                          | 31622.60 | 2382.27  | 39428.71  | 39%      |
| Aqua                                                                                 | 28636.72 | 2859.95  | 32702.63  | 35%      |
| Little                                                                               | 27878.35 | 3388.06  | 32574.65  | 34%      |
| Oak                                                                                  | 27269.10 | 3738.07  | 31732.77  | 34%      |
| Node                                                                                 | 17142.85 | 1439.57  | 23403.09  | 21%      |
| Fastify                                                                              | 15894.86 | 1477.90  | 18536.72  | 20%      |
| Dinatra                                                                              | 15675.15 | 1989.11  | 19118.32  | 19%      |
| Abc                                                                                  | 14842.82 | 1684.07  | 24200.91  | 18%      |
| Opine                                                                                | 13204.79 | 1960.11  | 17543.77  | 16%      |
| Express (Deno)                                                                       | 11809.70 | 2026.02  | 14133.96  | 15%      |
| Servest                                                                              | 6796.58  | 1474.23  | 9906.14   | 8%       |
| Express                                                                              | 6225.08  | 923.25   | 7951.81   | 8%       |
| Acorn                                                                                | 5651.76  | 10019.07 | 87986.54  | 7%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-f83c652f-2581-4bda-ad8d-e36f87455f0d) |          |          |           |          |

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

## [Danet V2 (Hono)](https://danet.land/)

The most mature backend framework for Deno, V2 in Alpha

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Deso](https://github.com/gothammm/deso)

A simple & fast HTTP web framework for Deno

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

## [Elysia](https://elysiajs.com/)

Ergonomic Framework for Humans

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
| 14842.82 | 1684.07 | 24200.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13411.20 | 14340.24 | 15081.89 | 15822.95 | 16242.69 | 16432.59 | 16849.43 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 5651.76  | 10019.07 | 87986.54 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 87.94 | 2276.78 | 3372.26 | 5412.60 | 11145.08 | 14342.50 | 69764.59 |
| **Latency** | 4ms   | 8ms     | 14ms    | 18ms    | 22ms     | 25ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33471.47 | 4019.28 | 38760.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30665.25 | 32843.73 | 34656.99 | 35521.29 | 36115.20 | 36537.25 | 37193.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28636.72 | 2859.95 | 32702.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27200.55 | 28213.98 | 29271.95 | 29950.06 | 30566.75 | 30907.48 | 31471.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 80882.06 | 9342.03 | 100079.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67829.61 | 74100.29 | 82636.02 | 88278.94 | 91232.03 | 93644.51 | 96872.90 |
| **Latency** | 383µs    | 449µs    | 557µs    | 749µs    | 927µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40863.24 | 2346.51 | 50555.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39099.31 | 40329.62 | 41206.18 | 41792.33 | 42508.17 | 43142.40 | 44781.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31622.60 | 2382.27 | 39428.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30949.00 | 31528.66 | 32090.66 | 32384.87 | 32704.95 | 32957.20 | 33350.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35488.14 | 2253.32 | 37653.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34755.27 | 35410.08 | 35796.08 | 36273.27 | 36581.99 | 36752.09 | 37225.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59553.05 | 10164.91 | 85521.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50919.31 | 52001.71 | 54355.88 | 66527.47 | 75787.00 | 80835.61 | 84400.72 |
| **Latency** | 561µs    | 626µs    | 898µs    | 979µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45907.40 | 2902.27 | 61398.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43711.23 | 44521.08 | 45429.63 | 47085.47 | 49130.51 | 50797.81 | 54134.61 |
| **Latency** | 966µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15675.15 | 1989.11 | 19118.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14137.09 | 15117.75 | 16000.73 | 16869.92 | 17423.30 | 17731.34 | 18461.27 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 77412.92 | 13045.35 | 100852.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59599.23 | 64914.56 | 78476.55 | 89139.86 | 93814.38 | 96149.73 | 98351.67 |
| **Latency** | 382µs    | 470µs    | 589µs    | 777µs    | 966µs    | 1ms      | 1ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6225.08  | 923.25 | 7951.81 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4848.80 | 5988.52 | 6318.62 | 6636.26 | 7431.41 | 7714.67 | 7891.40 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11809.70 | 2026.02 | 14133.96 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8831.24 | 12038.51 | 12484.71 | 12784.95 | 13072.39 | 13465.60 | 13720.92 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49082.89 | 4007.82 | 75876.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46734.74 | 47446.27 | 48235.01 | 49294.37 | 52914.18 | 57309.29 | 64714.23 |
| **Latency** | 902µs    | 980µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15894.86 | 1477.90 | 18536.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15493.08 | 15833.33 | 16136.68 | 16418.41 | 16662.13 | 16837.47 | 17176.21 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49598.91 | 3813.74 | 68274.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46614.75 | 47493.97 | 48610.46 | 51301.96 | 54622.32 | 56327.18 | 60746.66 |
| **Latency** | 819µs    | 974µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48057.75 | 3883.73 | 65896.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45308.65 | 46225.25 | 47180.47 | 49327.89 | 53065.94 | 55071.55 | 59535.82 |
| **Latency** | 875µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39382.10 | 4151.11 | 47864.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36465.28 | 38702.68 | 40495.44 | 41425.55 | 42110.73 | 42505.09 | 43768.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 78618.96 | 16043.70 | 99310.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55551.07 | 61042.61 | 83504.55 | 93553.82 | 96503.14 | 97506.79 | 98706.98 |
| **Latency** | 363µs    | 468µs    | 587µs    | 760µs    | 961µs    | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27878.35 | 3388.06 | 32574.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26100.28 | 27671.06 | 28660.44 | 29503.85 | 30060.47 | 30516.37 | 31271.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45219.66 | 2590.49 | 56608.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43509.72 | 44316.07 | 45106.39 | 45989.25 | 47701.91 | 49150.42 | 51503.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51523.94 | 5652.58 | 79040.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47224.11 | 48161.42 | 49263.41 | 53886.79 | 59454.79 | 63362.02 | 69854.07 |
| **Latency** | 664µs    | 937µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17142.85 | 1439.57 | 23403.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16815.69 | 17106.29 | 17332.04 | 17569.27 | 17834.50 | 18041.68 | 18510.41 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27269.10 | 3738.07 | 31732.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25672.09 | 27171.32 | 28164.85 | 28976.88 | 29589.54 | 29930.70 | 30839.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13204.79 | 1960.11 | 17543.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11800.67 | 13101.83 | 13714.44 | 14089.47 | 14419.51 | 14898.26 | 15859.19 |
| **Latency** | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 4ms      | 7ms      |

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
| 39437.93 | 2008.50 | 54753.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38208.44 | 39180.33 | 39620.59 | 40207.35 | 40762.47 | 41226.87 | 42187.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35772.19 | 3157.56 | 39943.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33662.14 | 35147.52 | 36530.68 | 37400.68 | 38015.37 | 38523.39 | 39362.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78540.43 | 10250.33 | 101295.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65020.52 | 69540.79 | 78258.09 | 86601.14 | 93273.74 | 94981.83 | 97626.88 |
| **Latency** | 379µs    | 469µs    | 594µs    | 754µs    | 956µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6796.58  | 1474.23 | 9906.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5316.95 | 6246.15 | 7043.78 | 7571.55 | 8404.28 | 8881.33 | 9357.26 |
| **Latency** | 4ms     | 5ms     | 7ms     | 8ms     | 10ms    | 12ms    | 15ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50953.39 | 5066.37 | 77565.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47326.51 | 48242.44 | 49199.60 | 52369.79 | 58157.24 | 61713.92 | 66320.31 |
| **Latency** | 710µs    | 948µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-01-10T01:31:05.728Z</p>
