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
| NHttp                                                                                | 56176.59 | 15625.69 | 71029.55 | 100%     |
| Fast                                                                                 | 51866.13 | 14991.96 | 66111.98 | 92%      |
| Vixeny (Deno)                                                                        | 49800.36 | 14649.81 | 64057.80 | 89%      |
| Hono                                                                                 | 49591.62 | 11360.50 | 60303.73 | 88%      |
| Deno                                                                                 | 49512.72 | 13989.98 | 66808.98 | 88%      |
| Bun                                                                                  | 49014.82 | 11155.96 | 70853.37 | 87%      |
| Deso                                                                                 | 48561.06 | 13128.06 | 61508.53 | 86%      |
| Stric                                                                                | 48468.88 | 11915.28 | 70324.94 | 86%      |
| Hyper Express                                                                        | 48115.36 | 12646.05 | 70677.30 | 86%      |
| Fastro                                                                               | 47426.27 | 11993.86 | 59220.71 | 84%      |
| Megalo                                                                               | 47056.41 | 12091.68 | 59566.39 | 84%      |
| Reno                                                                                 | 43582.64 | 6390.41  | 49637.51 | 78%      |
| Cheetah                                                                              | 43417.82 | 7831.96  | 48720.10 | 77%      |
| http                                                                                 | 31389.35 | 7498.98  | 38718.37 | 56%      |
| Node                                                                                 | 30137.15 | 4726.75  | 33772.75 | 54%      |
| Fastify                                                                              | 26755.19 | 5216.27  | 30298.40 | 48%      |
| Alosaur                                                                              | 25841.99 | 6300.26  | 43082.09 | 46%      |
| Router                                                                               | 23993.11 | 4599.44  | 30434.03 | 43%      |
| Aqua                                                                                 | 20833.70 | 4486.48  | 30671.15 | 37%      |
| Oak                                                                                  | 20527.98 | 4200.72  | 35880.36 | 37%      |
| Little                                                                               | 20094.63 | 4240.22  | 26133.93 | 36%      |
| Dinatra                                                                              | 16881.22 | 3862.98  | 48407.58 | 30%      |
| Abc                                                                                  | 15591.14 | 2831.09  | 20885.35 | 28%      |
| Danet (Oak)                                                                          | 15061.31 | 3315.48  | 47505.15 | 27%      |
| Opine                                                                                | 9563.25  | 3425.02  | 90170.11 | 17%      |
| Express (Deno)                                                                       | 9355.50  | 2052.42  | 18006.66 | 17%      |
| Acorn                                                                                | 6570.44  | 9418.74  | 88382.72 | 12%      |
| Servest                                                                              | 5608.55  | 1918.28  | 10551.26 | 10%      |
| Express                                                                              | 5502.41  | 1403.29  | 9743.31  | 10%      |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-83e33364-e7f7-4b00-8e22-474d852b8e07) |          |          |          |          |

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
| 15591.14 | 2831.09 | 20885.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12026.51 | 14529.26 | 15826.17 | 17602.41 | 18893.05 | 19283.46 | 19686.83 |
| **Latency** | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6570.44  | 9418.74 | 88382.72 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 44.11 | 63.98 | 5174.87 | 8493.10 | 15648.24 | 23408.43 | 50024.76 |
| **Latency** | 7ms   | 8ms   | 20ms    | 26ms    | 32ms     | 34ms     | 54ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25841.99 | 6300.26 | 43082.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18691.52 | 24061.32 | 28401.84 | 29402.90 | 30187.43 | 30707.82 | 31903.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20833.70 | 4486.48 | 30671.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16737.20 | 19468.85 | 22322.32 | 23526.37 | 24228.80 | 24653.37 | 26235.76 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49014.82 | 11155.96 | 70853.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35423.20 | 39521.03 | 48447.94 | 59976.45 | 63610.90 | 64649.61 | 67218.46 |
| **Latency** | 578µs    | 722µs    | 873µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43417.82 | 7831.96 | 48720.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33262.70 | 44674.00 | 46420.65 | 46992.43 | 47408.76 | 47677.27 | 48200.65 |
| **Latency** | 945µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15061.31 | 3315.48 | 47505.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11277.44 | 14342.66 | 15932.45 | 16793.06 | 17402.18 | 18183.83 | 19929.00 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49512.72 | 13989.98 | 66808.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25730.24 | 39010.61 | 54203.53 | 61715.76 | 63829.70 | 64615.20 | 65830.82 |
| **Latency** | 644µs    | 752µs    | 851µs    | 976µs    | 1ms      | 2ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48561.06 | 13128.06 | 61508.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22347.41 | 45309.75 | 55357.86 | 56765.06 | 57842.78 | 58546.02 | 59575.95 |
| **Latency** | 782µs    | 836µs    | 883µs    | 957µs    | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16881.22 | 3862.98 | 48407.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13914.59 | 15200.40 | 17542.08 | 19210.93 | 20420.90 | 20865.43 | 21585.08 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5502.41  | 1403.29 | 9743.31 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3127.21 | 5241.91 | 6148.29 | 6360.78 | 6469.06 | 6511.29 | 6717.97 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 15ms    | 19ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9355.50  | 2052.42 | 18006.66 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6363.33 | 9162.83 | 10286.03 | 10493.75 | 10611.68 | 10686.44 | 11277.94 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 8ms      | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51866.13 | 14991.96 | 66111.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23535.88 | 45058.78 | 60116.22 | 61777.78 | 63014.98 | 63590.24 | 64722.92 |
| **Latency** | 714µs    | 765µs    | 823µs    | 880µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26755.19 | 5216.27 | 30298.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23706.11 | 27424.62 | 28456.56 | 28920.99 | 29250.24 | 29470.36 | 29958.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47426.27 | 11993.86 | 59220.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23303.63 | 42929.57 | 53432.50 | 55414.86 | 56656.41 | 57185.06 | 58226.68 |
| **Latency** | 788µs    | 842µs    | 896µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49591.62 | 11360.50 | 60303.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25327.80 | 49072.24 | 54772.09 | 56487.06 | 57310.16 | 57753.82 | 58674.04 |
| **Latency** | 783µs    | 844µs    | 890µs    | 959µs    | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31389.35 | 7498.98 | 38718.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19780.99 | 28066.23 | 35125.73 | 36324.32 | 36947.83 | 37299.61 | 37858.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48115.36 | 12646.05 | 70677.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31468.72 | 35060.08 | 49144.43 | 59883.45 | 64342.70 | 65837.76 | 68122.04 |
| **Latency** | 597µs    | 737µs    | 870µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20094.63 | 4240.22 | 26133.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15940.05 | 19414.87 | 21495.74 | 22469.29 | 23152.47 | 23665.84 | 24742.37 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47056.41 | 12091.68 | 59566.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22878.81 | 41948.52 | 53409.86 | 55362.24 | 56260.44 | 56818.43 | 57618.70 |
| **Latency** | 796µs    | 854µs    | 906µs    | 999µs    | 1ms      | 2ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56176.59 | 15625.69 | 71029.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25151.15 | 50135.64 | 64145.16 | 66500.36 | 67914.53 | 68723.04 | 69843.38 |
| **Latency** | 605µs    | 695µs    | 782µs    | 841µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30137.15 | 4726.75 | 33772.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27873.70 | 30447.84 | 31418.04 | 32066.83 | 32607.54 | 32826.07 | 33376.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20527.98 | 4200.72 | 35880.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17547.66 | 19596.42 | 21970.13 | 22692.31 | 23268.92 | 23784.88 | 24803.09 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9563.25  | 3425.02 | 90170.11 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7110.63 | 8585.67 | 9606.10 | 10363.10 | 11787.33 | 12606.91 | 15443.57 |
| **Latency** | 3ms     | 4ms     | 5ms     | 5ms      | 6ms      | 7ms      | 11ms     |

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
| 43582.64 | 6390.41 | 49637.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37820.57 | 44137.40 | 45610.68 | 46513.21 | 47243.66 | 47721.71 | 48545.89 |
| **Latency** | 960µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23993.11 | 4599.44 | 30434.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20033.03 | 22732.65 | 25621.78 | 26420.33 | 27183.38 | 27801.22 | 29086.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48468.88 | 11915.28 | 70324.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33214.11 | 37655.73 | 48514.78 | 59928.93 | 64009.26 | 65413.44 | 68188.14 |
| **Latency** | 584µs    | 731µs    | 872µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5608.55  | 1918.28 | 10551.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3129.09 | 4904.59 | 6218.38 | 6837.46 | 7190.47 | 7375.65 | 9036.01 |
| **Latency** | 5ms     | 6ms     | 8ms     | 10ms    | 14ms    | 18ms    | 25ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49800.36 | 14649.81 | 64057.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23813.54 | 39250.42 | 57391.57 | 61212.36 | 62331.06 | 62672.63 | 63402.88 |
| **Latency** | 724µs    | 772µs    | 838µs    | 919µs    | 1ms      | 2ms      | 2ms      |

---

<p align="center">Generated 2023-10-22T01:30:06.375Z</p>
