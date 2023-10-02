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
| Hono                                                                                 | 68826.21 | 10634.09 | 74892.84  | 100%     |
| Deso                                                                                 | 68751.12 | 9365.47  | 73980.64  | 100%     |
| Fast                                                                                 | 65644.15 | 17949.94 | 78754.13  | 95%      |
| Vixeny (Deno)                                                                        | 65234.22 | 18703.08 | 79250.88  | 95%      |
| Fastro                                                                               | 65210.20 | 14761.09 | 75120.03  | 95%      |
| NHttp                                                                                | 62871.11 | 22548.19 | 171988.06 | 91%      |
| Stric                                                                                | 59229.08 | 8986.09  | 86817.95  | 86%      |
| Bun                                                                                  | 58793.45 | 10740.06 | 87228.87  | 85%      |
| Hyper Express                                                                        | 58624.27 | 13464.31 | 84303.90  | 85%      |
| Reno                                                                                 | 56667.99 | 6161.42  | 60336.08  | 82%      |
| Deno                                                                                 | 54572.84 | 14071.32 | 78074.69  | 79%      |
| Cheetah                                                                              | 49725.09 | 15621.00 | 60901.00  | 72%      |
| Node                                                                                 | 41893.01 | 6529.18  | 45337.02  | 61%      |
| http                                                                                 | 39444.95 | 8343.03  | 46916.40  | 57%      |
| Fastify                                                                              | 36563.20 | 5773.33  | 39552.29  | 53%      |
| Alosaur                                                                              | 31882.99 | 6902.75  | 73030.40  | 46%      |
| Router                                                                               | 29015.57 | 4535.38  | 34518.53  | 42%      |
| Aqua                                                                                 | 26523.57 | 4331.04  | 37777.19  | 39%      |
| Little                                                                               | 25808.78 | 4872.02  | 31085.26  | 37%      |
| Oak                                                                                  | 24351.62 | 5703.22  | 33894.36  | 35%      |
| Dinatra                                                                              | 22554.00 | 4643.38  | 49067.55  | 33%      |
| Abc                                                                                  | 20805.96 | 4446.43  | 34545.46  | 30%      |
| Danet (Oak)                                                                          | 17802.71 | 4528.14  | 57611.22  | 26%      |
| Opine                                                                                | 11719.95 | 2000.93  | 15604.60  | 17%      |
| Express (Deno)                                                                       | 11639.66 | 2361.78  | 15616.43  | 17%      |
| Express                                                                              | 7732.57  | 1528.93  | 11978.18  | 11%      |
| Servest                                                                              | 7353.43  | 2443.17  | 12515.59  | 11%      |
| Acorn                                                                                | 4943.04  | 7365.89  | 141843.97 | 7%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-6a22d1dc-cb15-40b3-95e5-268cd31b6a17) |          |          |           |          |

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
| 20805.96 | 4446.43 | 34545.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12396.64 | 20943.05 | 22132.57 | 22938.21 | 24280.78 | 25021.38 | 25669.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4943.04  | 7365.89 | 141843.97 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 54.59 | 83.25 | 4022.92 | 7762.43 | 9625.01 | 11077.90 | 15122.88 |
| **Latency** | 5ms   | 7ms   | 15ms    | 22ms    | 27ms    | 29ms     | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31882.99 | 6902.75 | 73030.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25817.58 | 29683.35 | 34673.72 | 35687.99 | 36376.70 | 36875.88 | 37679.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26523.57 | 4331.04 | 37777.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24413.56 | 25757.45 | 27873.86 | 28627.12 | 29199.18 | 29595.68 | 30802.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58793.45 | 10740.06 | 87228.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47848.20 | 52178.64 | 56561.58 | 65806.35 | 75407.28 | 77911.65 | 82590.08 |
| **Latency** | 461µs    | 601µs    | 780µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49725.09 | 15621.00 | 60901.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24252.78 | 26472.17 | 59132.91 | 60025.59 | 60323.31 | 60489.11 | 60707.67 |
| **Latency** | 756µs    | 815µs    | 849µs    | 898µs    | 1ms      | 2ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17802.71 | 4528.14 | 57611.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11580.80 | 17657.98 | 19310.55 | 20335.77 | 20824.67 | 21236.46 | 22642.42 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54572.84 | 14071.32 | 78074.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32523.31 | 44110.43 | 56229.04 | 66020.90 | 72801.20 | 74531.04 | 76581.96 |
| **Latency** | 567µs    | 643µs    | 703µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 68751.12 | 9365.47 | 73980.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67198.68 | 70249.64 | 71347.45 | 71920.61 | 72466.42 | 72697.89 | 73248.80 |
| **Latency** | 620µs    | 664µs    | 695µs    | 726µs    | 805µs    | 852µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22554.00 | 4643.38 | 49067.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19817.37 | 21042.99 | 23509.56 | 25596.83 | 26209.45 | 26737.59 | 27768.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7732.57  | 1528.93 | 11978.18 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5313.10 | 7870.02 | 8460.46 | 8575.52 | 8654.49 | 8690.75 | 8743.51 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11639.66 | 2361.78 | 15616.43 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8428.12 | 11535.80 | 12504.65 | 12755.60 | 13068.83 | 13540.99 | 13877.18 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65644.15 | 17949.94 | 78754.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29204.75 | 64752.77 | 75220.81 | 76355.51 | 77050.59 | 77434.26 | 77989.86 |
| **Latency** | 550µs    | 616µs    | 663µs    | 721µs    | 952µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36563.20 | 5773.33 | 39552.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36047.10 | 37150.03 | 37930.22 | 38564.16 | 38940.37 | 39075.28 | 39330.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65210.20 | 14761.09 | 75120.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30780.23 | 69025.30 | 71777.05 | 72847.97 | 73643.21 | 73906.92 | 74689.72 |
| **Latency** | 615µs    | 655µs    | 691µs    | 725µs    | 839µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68826.21 | 10634.09 | 74892.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66324.98 | 70459.66 | 72069.85 | 72847.44 | 73453.80 | 73673.43 | 74290.23 |
| **Latency** | 614µs    | 657µs    | 690µs    | 720µs    | 794µs    | 862µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39444.95 | 8343.03 | 46916.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25538.74 | 37505.88 | 43429.38 | 44653.99 | 45197.19 | 45523.06 | 45978.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58624.27 | 13464.31 | 84303.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40041.31 | 47012.53 | 59330.15 | 68956.29 | 77175.23 | 79958.07 | 82494.64 |
| **Latency** | 505µs    | 605µs    | 724µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25808.78 | 4872.02 | 31085.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20518.72 | 25728.38 | 27192.90 | 28416.25 | 29003.51 | 29360.21 | 29918.53 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 62871.11 | 22548.19 | 171988.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28008.87 | 40305.66 | 77003.59 | 79623.07 | 80508.33 | 80911.05 | 81696.59 |
| **Latency** | 507µs    | 593µs    | 655µs    | 708µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41893.01 | 6529.18 | 45337.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41752.88 | 42810.99 | 43446.34 | 43929.72 | 44357.96 | 44601.63 | 45004.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24351.62 | 5703.22 | 33894.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16806.83 | 24153.77 | 26704.45 | 27775.69 | 28285.17 | 28709.66 | 29677.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11719.95 | 2000.93 | 15604.60 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9929.95 | 11526.24 | 12236.59 | 12688.46 | 12940.35 | 13539.05 | 14328.46 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 8ms      |

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
| 56667.99 | 6161.42 | 60336.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55518.69 | 57083.15 | 58192.93 | 58743.19 | 59265.51 | 59519.92 | 59916.02 |
| **Latency** | 763µs    | 831µs    | 866µs    | 895µs    | 937µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29015.57 | 4535.38 | 34518.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26039.48 | 28069.37 | 30559.46 | 31376.64 | 31934.15 | 32458.94 | 33580.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59229.08 | 8986.09 | 86817.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49792.29 | 52810.39 | 56714.00 | 65141.48 | 73227.91 | 76617.67 | 81311.12 |
| **Latency** | 465µs    | 602µs    | 778µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7353.43  | 2443.17 | 12515.59 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4127.81 | 6341.77 | 8231.43 | 8824.33 | 9408.53 | 9700.65 | 11863.36 |
| **Latency** | 3ms     | 5ms     | 6ms     | 7ms     | 10ms    | 14ms    | 18ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65234.22 | 18703.08 | 79250.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28346.59 | 59333.58 | 75627.78 | 77168.94 | 77869.18 | 78202.09 | 78683.13 |
| **Latency** | 537µs    | 609µs    | 663µs    | 718µs    | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2023-10-02T01:25:22.226Z</p>
