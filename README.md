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
| NHttp                                                                                | 36456.64 | 11035.02 | 50803.80  | 100%     |
| Stric                                                                                | 36017.66 | 11138.48 | 57581.92  | 99%      |
| Vixeny (Deno)                                                                        | 35969.00 | 11401.09 | 51981.22  | 99%      |
| Fast                                                                                 | 35768.81 | 10453.67 | 50087.52  | 98%      |
| Deno                                                                                 | 35151.34 | 12387.20 | 57031.26  | 96%      |
| Hyper Express                                                                        | 34883.10 | 13829.56 | 63944.90  | 96%      |
| Fastro                                                                               | 33138.40 | 9929.51  | 115384.62 | 91%      |
| Megalo                                                                               | 33017.87 | 9059.22  | 47535.30  | 91%      |
| Deso                                                                                 | 32351.51 | 9159.92  | 44501.78  | 89%      |
| Hono                                                                                 | 31797.82 | 9884.62  | 47074.55  | 87%      |
| Bun                                                                                  | 31625.78 | 11261.06 | 57704.68  | 87%      |
| Reno                                                                                 | 30618.12 | 6867.83  | 39331.15  | 84%      |
| Cheetah                                                                              | 27909.90 | 7438.38  | 38040.35  | 77%      |
| http                                                                                 | 23620.35 | 6469.89  | 32139.92  | 65%      |
| Alosaur                                                                              | 18708.74 | 5115.17  | 26314.75  | 51%      |
| Router                                                                               | 16737.62 | 4936.70  | 99337.75  | 46%      |
| Aqua                                                                                 | 14962.05 | 5422.78  | 116822.43 | 41%      |
| Node                                                                                 | 14637.82 | 2903.66  | 20056.60  | 40%      |
| Little                                                                               | 14277.18 | 4069.70  | 61500.36  | 39%      |
| Oak                                                                                  | 13243.34 | 3631.10  | 47656.68  | 36%      |
| Fastify                                                                              | 13045.11 | 3214.26  | 17768.26  | 36%      |
| Dinatra                                                                              | 11076.15 | 3175.68  | 26699.68  | 30%      |
| Abc                                                                                  | 8049.21  | 2759.36  | 14440.35  | 22%      |
| Opine                                                                                | 5923.81  | 1803.34  | 20202.02  | 16%      |
| Acorn                                                                                | 5695.10  | 8882.88  | 94061.76  | 16%      |
| Express (Deno)                                                                       | 5670.51  | 1507.77  | 10108.91  | 16%      |
| Servest                                                                              | 3806.26  | 1368.01  | 8101.72   | 10%      |
| Express                                                                              | 3389.59  | 1047.31  | 14725.17  | 9%       |
| Danet (Oak)                                                                          | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-46123138-b86c-4c47-acb5-7992cab33d29) |          |          |           |          |

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
| 8049.21  | 2759.36 | 14440.35 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 4630.11 | 5444.44 | 8625.08 | 10514.21 | 11285.54 | 11549.51 | 12333.20 |
| **Latency** | 3ms     | 3ms     | 5ms     | 7ms      | 9ms      | 12ms     | 18ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5695.10  | 8882.88 | 94061.76 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 49.09 | 73.02 | 3603.97 | 7068.61 | 13583.01 | 17796.55 | 45756.69 |
| **Latency** | 9ms   | 12ms  | 21ms    | 27ms    | 32ms     | 35ms     | 44ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18708.74 | 5115.17 | 26314.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11378.14 | 16519.67 | 20341.69 | 22265.29 | 23435.17 | 23905.62 | 25045.03 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 8ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 14962.05 | 5422.78 | 116822.43 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8639.44 | 12598.34 | 15906.54 | 18074.43 | 19405.40 | 19959.90 | 21863.24 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      | 10ms     |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 31625.78 | 11261.06 | 57704.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16158.10 | 23603.56 | 32169.84 | 40342.04 | 46531.21 | 48736.50 | 51718.65 |
| **Latency** | 758µs    | 951µs    | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27909.90 | 7438.38 | 38040.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15345.35 | 24800.77 | 30424.67 | 33355.73 | 35109.52 | 35895.88 | 36874.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35151.34 | 12387.20 | 57031.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17308.68 | 23115.25 | 37944.77 | 46000.81 | 49696.94 | 51261.08 | 53575.66 |
| **Latency** | 847µs    | 959µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32351.51 | 9159.92 | 44501.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16929.99 | 26476.81 | 36127.86 | 39434.36 | 40952.88 | 42027.88 | 43113.42 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11076.15 | 3175.68 | 26699.68 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6682.80 | 9703.32 | 11683.11 | 13274.01 | 14542.64 | 15039.41 | 15836.01 |
| **Latency** | 3ms     | 3ms     | 3ms      | 5ms      | 6ms      | 8ms      | 13ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3389.59  | 1047.31 | 14725.17 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2162.12 | 2748.29 | 3669.40 | 4115.18 | 4318.65 | 4426.91 | 4969.27 |
| **Latency** | 11ms    | 11ms    | 13ms    | 17ms    | 20ms    | 23ms    | 27ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5670.51  | 1507.77 | 10108.91 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3514.54 | 4746.72 | 6185.67 | 6688.14 | 7124.76 | 7345.82 | 7851.35 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 12ms    | 14ms    | 20ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35768.81 | 10453.67 | 50087.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17332.77 | 27798.42 | 40120.39 | 43748.58 | 46001.70 | 47000.95 | 48511.18 |
| **Latency** | 934µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13045.11 | 3214.26 | 17768.26 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8127.53 | 12254.95 | 14095.24 | 15183.27 | 15825.50 | 16116.31 | 16724.45 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 5ms      | 6ms      | 11ms     |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 33138.40 | 9929.51 | 115384.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16416.07 | 27910.10 | 37317.61 | 40015.67 | 41753.93 | 42500.51 | 44124.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31797.82 | 9884.62 | 47074.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15770.96 | 24700.22 | 35263.96 | 39874.66 | 42010.59 | 42915.98 | 44612.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23620.35 | 6469.89 | 32139.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14698.71 | 21114.99 | 25734.28 | 28249.78 | 29432.27 | 29994.85 | 30833.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 34883.10 | 13829.56 | 63944.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16612.50 | 20975.14 | 35790.64 | 47355.52 | 53230.62 | 54940.14 | 57311.03 |
| **Latency** | 702µs    | 867µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14277.18 | 4069.70 | 61500.36 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8624.92 | 12906.82 | 15448.20 | 16840.52 | 17641.74 | 18117.24 | 19363.33 |
| **Latency** | 2ms     | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33017.87 | 9059.22 | 47535.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17137.83 | 29113.50 | 36522.44 | 39440.73 | 41191.73 | 42251.08 | 44680.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36456.64 | 11035.02 | 50803.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17745.82 | 29568.66 | 40815.60 | 44633.13 | 47356.90 | 48468.75 | 49575.54 |
| **Latency** | 912µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14637.82 | 2903.66 | 20056.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11319.95 | 14338.31 | 15460.95 | 16192.99 | 16813.83 | 17154.59 | 17653.70 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13243.34 | 3631.10 | 47656.68 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7838.84 | 12167.65 | 14104.12 | 15396.89 | 16365.44 | 17195.05 | 18680.21 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 5ms      | 6ms      | 11ms     |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5923.81  | 1803.34 | 20202.02 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4102.87 | 5311.59 | 6134.92 | 6734.86 | 7142.37 | 7647.34 | 10552.87 |
| **Latency** | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 13ms    | 18ms     |

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
| 30618.12 | 6867.83 | 39331.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20498.27 | 28921.46 | 32985.17 | 35004.61 | 36179.38 | 36906.41 | 37666.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16737.62 | 4936.70 | 99337.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11260.49 | 15067.28 | 17912.75 | 19410.49 | 20516.10 | 21044.10 | 22607.35 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36017.66 | 11138.48 | 57581.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21043.40 | 27317.61 | 36628.97 | 45586.97 | 50064.48 | 52223.00 | 55100.80 |
| **Latency** | 723µs    | 885µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3806.26  | 1368.01 | 8101.72 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1821.17 | 3164.60 | 4169.60 | 4705.33 | 5074.01 | 5443.89 | 6283.41 |
| **Latency** | 7ms     | 9ms     | 12ms    | 16ms    | 20ms    | 26ms    | 34ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35969.00 | 11401.09 | 51981.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16937.13 | 28647.34 | 40777.17 | 44410.76 | 46648.23 | 47658.34 | 49158.12 |
| **Latency** | 922µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

---

<p align="center">Generated 2023-11-13T01:28:44.613Z</p>
