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
  - [Vixeny (Bun)](#vixeny-bun)
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
    - [Vixeny (Bun)](#vixeny-bun-1)
    - [Vixeny (Deno)](#vixeny-deno-1)

# Overview

## Hello, bench!

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Stric                                                                                | 79661.54 | 10905.20 | 101822.59 | 100%     |
| Hyper Express                                                                        | 79173.60 | 16165.56 | 104615.26 | 99%      |
| Elysia                                                                               | 77646.57 | 13579.52 | 101810.98 | 97%      |
| Bun                                                                                  | 77101.55 | 10411.77 | 100763.55 | 97%      |
| Vixeny (Bun)                                                                         | 73397.38 | 14269.33 | 101932.47 | 92%      |
| Deno                                                                                 | 59634.53 | 10118.78 | 89139.33  | 75%      |
| Fast                                                                                 | 52786.43 | 5652.93  | 78239.76  | 66%      |
| Hono                                                                                 | 51972.71 | 5358.33  | 77846.45  | 65%      |
| Fastro                                                                               | 51235.12 | 4392.03  | 73128.56  | 64%      |
| NHttp                                                                                | 50577.49 | 4498.22  | 79248.71  | 63%      |
| Vixeny (Deno)                                                                        | 50316.21 | 3750.98  | 77924.24  | 63%      |
| Megalo                                                                               | 46987.61 | 2803.97  | 67379.78  | 59%      |
| Deso                                                                                 | 45991.34 | 2789.38  | 56527.92  | 58%      |
| Alosaur                                                                              | 44166.48 | 2655.71  | 62140.01  | 55%      |
| http                                                                                 | 42797.94 | 4812.14  | 50543.48  | 54%      |
| Reno                                                                                 | 41371.30 | 2264.87  | 54528.47  | 52%      |
| Cheetah                                                                              | 41343.43 | 2438.71  | 47460.07  | 52%      |
| Router                                                                               | 38349.53 | 4102.36  | 47048.22  | 48%      |
| Danet V2 (Hono)                                                                      | 34774.51 | 2217.07  | 36806.37  | 44%      |
| Danet (Oak)                                                                          | 33721.17 | 2284.81  | 40504.10  | 42%      |
| Oak                                                                                  | 33182.40 | 2821.32  | 35242.87  | 42%      |
| Aqua                                                                                 | 31099.11 | 3488.17  | 36427.29  | 39%      |
| Little                                                                               | 30243.89 | 3941.96  | 36475.54  | 38%      |
| Dinatra                                                                              | 17101.51 | 2250.98  | 20930.57  | 21%      |
| Node                                                                                 | 17004.05 | 1460.94  | 22641.94  | 21%      |
| Fastify                                                                              | 16341.63 | 1689.25  | 29103.34  | 21%      |
| Abc                                                                                  | 14778.93 | 1722.04  | 22371.26  | 19%      |
| Opine                                                                                | 14187.21 | 2810.50  | 29414.54  | 18%      |
| Express (Deno)                                                                       | 11708.76 | 2138.72  | 13984.40  | 15%      |
| Express                                                                              | 6401.31  | 997.30   | 8060.73   | 8%       |
| Servest                                                                              | 6222.45  | 1580.57  | 11004.08  | 8%       |
| Acorn                                                                                | 3672.82  | 2586.46  | 17559.38  | 5%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-455cc89d-b2aa-4933-a91a-bc7d90c2510c) |          |          |           |          |

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

## [Vixeny (Bun)](https://vixeny.dev/)

A pure functional web framework

## [Vixeny (Deno)](https://vixeny.dev/)

A pure functional web framework

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14778.93 | 1722.04 | 22371.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13434.98 | 14123.57 | 14978.52 | 15437.10 | 15826.95 | 16507.38 | 19931.00 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3672.82  | 2586.46 | 17559.38 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1864.22 | 2413.72 | 2920.01 | 3900.38 | 5333.04 | 8024.10 | 15104.72 |
| **Latency** | 3ms     | 8ms     | 13ms    | 18ms    | 21ms    | 24ms    | 27ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44166.48 | 2655.71 | 62140.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42238.13 | 43217.92 | 44242.70 | 45162.64 | 46343.27 | 47431.71 | 51189.45 |
| **Latency** | 985µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31099.11 | 3488.17 | 36427.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29228.69 | 30482.32 | 31876.16 | 32829.75 | 33516.84 | 34124.09 | 35239.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 77101.55 | 10411.77 | 100763.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64093.17 | 68660.97 | 76191.22 | 85118.66 | 92371.94 | 95201.04 | 98624.20 |
| **Latency** | 383µs    | 477µs    | 605µs    | 769µs    | 970µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41343.43 | 2438.71 | 47460.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39664.57 | 40842.69 | 41856.19 | 42382.77 | 43043.61 | 43350.26 | 44350.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33721.17 | 2284.81 | 40504.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33173.29 | 33567.98 | 34147.94 | 34438.72 | 34712.32 | 34958.66 | 35305.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34774.51 | 2217.07 | 36806.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34234.62 | 34607.19 | 35177.46 | 35507.11 | 35843.59 | 36038.67 | 36430.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59634.53 | 10118.78 | 89139.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51945.01 | 53173.80 | 54701.37 | 64511.26 | 77530.55 | 81331.90 | 86810.94 |
| **Latency** | 548µs    | 668µs    | 878µs    | 970µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45991.34 | 2789.38 | 56527.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43929.54 | 44856.18 | 45803.08 | 46849.64 | 48900.33 | 50442.42 | 53700.39 |
| **Latency** | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17101.51 | 2250.98 | 20930.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15291.15 | 16288.97 | 17544.70 | 18502.46 | 19125.11 | 19447.30 | 20017.33 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 77646.57 | 13579.52 | 101810.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58847.37 | 64968.50 | 79137.34 | 90233.62 | 94692.99 | 96715.42 | 99044.80 |
| **Latency** | 377µs    | 464µs    | 584µs    | 783µs    | 966µs    | 1ms      | 1ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6401.31  | 997.30 | 8060.73 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4983.14 | 5976.09 | 6571.38 | 6828.63 | 7749.77 | 7865.33 | 7997.04 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11708.76 | 2138.72 | 13984.40 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8403.06 | 11653.94 | 12522.66 | 12823.08 | 12998.67 | 13345.23 | 13759.95 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 9ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52786.43 | 5652.93 | 78239.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48312.87 | 49402.91 | 50685.61 | 55610.58 | 60823.74 | 63829.20 | 70396.41 |
| **Latency** | 649µs    | 883µs    | 978µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16341.63 | 1689.25 | 29103.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15551.57 | 16015.87 | 16574.13 | 17079.18 | 17425.64 | 17628.43 | 18321.24 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51235.12 | 4392.03 | 73128.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47799.35 | 48740.65 | 50012.10 | 53019.65 | 57332.61 | 59817.11 | 63623.61 |
| **Latency** | 761µs    | 911µs    | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51972.71 | 5358.33 | 77846.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48010.12 | 49012.05 | 50214.62 | 53873.88 | 59446.68 | 62179.34 | 69141.04 |
| **Latency** | 680µs    | 898µs    | 989µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42797.94 | 4812.14 | 50543.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39819.95 | 42026.10 | 43931.42 | 45172.01 | 46110.57 | 47045.51 | 48442.81 |
| **Latency** | 860µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 79173.60 | 16165.56 | 104615.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 56508.72 | 61931.45 | 83034.31 | 93663.78 | 97430.26 | 98823.24 | 100117.81 |
| **Latency** | 368µs    | 459µs    | 574µs    | 760µs    | 959µs    | 1ms      | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30243.89 | 3941.96 | 36475.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28334.09 | 29990.89 | 31002.56 | 32136.84 | 32956.97 | 33446.70 | 34452.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46987.61 | 2803.97 | 67379.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44969.16 | 46112.25 | 46923.41 | 47816.61 | 49130.27 | 50779.42 | 54144.87 |
| **Latency** | 929µs    | 987µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50577.49 | 4498.22 | 79248.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48121.15 | 48914.92 | 49744.35 | 50692.65 | 53001.35 | 59708.44 | 70945.01 |
| **Latency** | 845µs    | 921µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17004.05 | 1460.94 | 22641.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16621.91 | 16918.90 | 17220.09 | 17467.95 | 17754.65 | 17931.02 | 18299.81 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33182.40 | 2821.32 | 35242.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32879.73 | 33237.72 | 33605.27 | 34064.75 | 34319.24 | 34433.36 | 34798.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14187.21 | 2810.50 | 29414.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11428.36 | 13113.97 | 14452.85 | 15396.16 | 17393.01 | 18214.61 | 19055.65 |
| **Latency** | 1ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

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
| 41371.30 | 2264.87 | 54528.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40035.15 | 40910.48 | 41511.81 | 42225.20 | 43135.02 | 43625.92 | 45110.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38349.53 | 4102.36 | 47048.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35763.49 | 37541.24 | 39407.62 | 40480.54 | 41200.00 | 41712.69 | 42728.35 |
| **Latency** | 931µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 79661.54 | 10905.20 | 101822.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64903.00 | 71312.05 | 82521.89 | 88023.97 | 91158.17 | 93868.79 | 98813.10 |
| **Latency** | 401µs    | 463µs    | 544µs    | 744µs    | 959µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6222.45  | 1580.57 | 11004.08 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4956.25 | 5651.01 | 6408.72 | 7003.70 | 7818.23 | 8230.91 | 9238.29 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 15ms    |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 73397.38 | 14269.33 | 101932.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56370.62 | 59836.60 | 72367.16 | 87327.22 | 92701.01 | 95111.91 | 99117.49 |
| **Latency** | 389µs    | 482µs    | 622µs    | 842µs    | 1ms      | 1ms      | 1ms      |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50316.21 | 3750.98 | 77924.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48020.15 | 48900.01 | 49774.99 | 50718.08 | 52629.74 | 57333.03 | 65762.07 |
| **Latency** | 851µs    | 924µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-04-11T01:27:19.402Z</p>
