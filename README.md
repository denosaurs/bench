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
| Vixeny (Deno)                                                                        | 40968.62 | 10818.65 | 57160.94 | 100%     |
| Deno                                                                                 | 39907.22 | 14796.23 | 71135.37 | 97%      |
| NHttp                                                                                | 39099.71 | 12612.54 | 61387.03 | 95%      |
| Bun                                                                                  | 38785.94 | 11494.01 | 66496.49 | 95%      |
| Fast                                                                                 | 38766.16 | 12794.46 | 65999.66 | 95%      |
| Stric                                                                                | 37920.09 | 11864.26 | 69324.22 | 93%      |
| Hono                                                                                 | 37652.10 | 11097.56 | 57081.05 | 92%      |
| Hyper Express                                                                        | 36806.31 | 15295.36 | 71703.53 | 90%      |
| Fastro                                                                               | 36388.37 | 11548.55 | 58825.68 | 89%      |
| Deso                                                                                 | 35736.33 | 10963.51 | 57422.19 | 87%      |
| Reno                                                                                 | 33815.80 | 8527.21  | 49808.31 | 83%      |
| Cheetah                                                                              | 31383.14 | 8908.64  | 44985.37 | 77%      |
| http                                                                                 | 25410.74 | 7361.40  | 39273.25 | 62%      |
| Alosaur                                                                              | 20069.03 | 5363.28  | 39588.07 | 49%      |
| Aqua                                                                                 | 18291.84 | 4407.34  | 35894.91 | 45%      |
| Router                                                                               | 17602.55 | 3943.61  | 25659.07 | 43%      |
| Node                                                                                 | 16301.30 | 3773.44  | 24367.66 | 40%      |
| Little                                                                               | 15181.49 | 3830.29  | 46182.12 | 37%      |
| Fastify                                                                              | 14076.84 | 3062.64  | 19443.81 | 34%      |
| Oak                                                                                  | 13780.63 | 3620.56  | 39193.62 | 34%      |
| Dinatra                                                                              | 11700.04 | 2871.26  | 27015.74 | 29%      |
| Abc                                                                                  | 10282.39 | 2206.72  | 18008.95 | 25%      |
| Danet (Oak)                                                                          | 9246.59  | 2897.51  | 49831.63 | 23%      |
| Opine                                                                                | 6443.61  | 2385.69  | 43134.13 | 16%      |
| Express (Deno)                                                                       | 6163.31  | 2328.32  | 61987.48 | 15%      |
| Acorn                                                                                | 5642.92  | 8433.08  | 83020.67 | 14%      |
| Servest                                                                              | 4167.39  | 1479.83  | 14058.36 | 10%      |
| Express                                                                              | 3818.16  | 1042.20  | 13743.16 | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-fdce9d5f-d328-4d51-b985-071eaa3057b7) |          |          |          |          |

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
| 10282.39 | 2206.72 | 18008.95 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6901.35 | 9429.49 | 10928.57 | 11623.76 | 12303.15 | 12807.27 | 14008.21 |
| **Latency** | 3ms     | 3ms     | 3ms      | 5ms      | 7ms      | 8ms      | 12ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5642.92  | 8433.08 | 83020.67 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 55.20 | 79.07 | 3891.55 | 7627.42 | 13285.61 | 15900.67 | 44952.82 |
| **Latency** | 8ms   | 10ms  | 21ms    | 26ms    | 31ms     | 34ms     | 45ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20069.03 | 5363.28 | 39588.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12800.85 | 17707.55 | 21980.81 | 23381.43 | 24612.46 | 25352.37 | 26888.93 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18291.84 | 4407.34 | 35894.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12903.29 | 16961.34 | 19200.13 | 20892.44 | 22511.08 | 23312.50 | 24915.43 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38785.94 | 11494.01 | 66496.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24331.82 | 29041.19 | 38456.75 | 49558.89 | 53471.46 | 55523.80 | 59133.49 |
| **Latency** | 671µs    | 841µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31383.14 | 8908.64 | 44985.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15450.00 | 30054.64 | 34619.26 | 36901.40 | 38735.16 | 40020.12 | 41807.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9246.59  | 2897.51 | 49831.63 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5793.65 | 8019.86 | 9755.18 | 10635.33 | 11717.24 | 12695.22 | 14811.65 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 7ms      | 8ms      | 13ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39907.22 | 14796.23 | 71135.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19222.78 | 24157.26 | 44112.43 | 52110.27 | 56773.52 | 59137.25 | 65616.56 |
| **Latency** | 702µs    | 834µs    | 997µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35736.33 | 10963.51 | 57422.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16371.64 | 31014.77 | 40412.37 | 42846.96 | 44958.53 | 46776.12 | 50815.06 |
| **Latency** | 943µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11700.04 | 2871.26 | 27015.74 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8327.30 | 10336.78 | 12050.47 | 13713.48 | 14628.86 | 15192.32 | 16527.75 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 12ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3818.16  | 1042.20 | 13743.16 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2339.34 | 3328.52 | 4146.81 | 4412.08 | 4648.47 | 4785.55 | 5168.00 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 17ms    | 21ms    | 27ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6163.31  | 2328.32 | 61987.48 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4023.32 | 5300.78 | 6561.82 | 7174.55 | 7614.72 | 7822.36 | 8494.26 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 11ms    | 13ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38766.16 | 12794.46 | 65999.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17276.30 | 29609.38 | 44420.36 | 47873.21 | 50527.12 | 52052.51 | 57412.44 |
| **Latency** | 848µs    | 945µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14076.84 | 3062.64 | 19443.81 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9049.83 | 13874.59 | 15001.74 | 15815.44 | 16505.22 | 16934.65 | 17798.90 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36388.37 | 11548.55 | 58825.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17159.53 | 28608.77 | 41051.17 | 44620.82 | 46975.76 | 48700.64 | 53228.56 |
| **Latency** | 901µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37652.10 | 11097.56 | 57081.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18352.81 | 33023.36 | 41401.97 | 44686.62 | 48107.64 | 50811.56 | 54542.95 |
| **Latency** | 899µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25410.74 | 7361.40 | 39273.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14316.73 | 22335.87 | 28188.71 | 30120.39 | 31819.99 | 32865.64 | 34489.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36806.31 | 15295.36 | 71703.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15955.15 | 21148.56 | 37918.10 | 50670.24 | 55775.54 | 58008.26 | 63143.50 |
| **Latency** | 642µs    | 803µs    | 988µs    | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15181.49 | 3830.29 | 46182.12 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9703.56 | 14059.85 | 16305.17 | 17366.80 | 18310.93 | 19053.64 | 20934.30 |
| **Latency** | 2ms     | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

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
| 39099.71 | 12612.54 | 61387.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17352.17 | 31290.27 | 44419.84 | 47852.02 | 50353.41 | 52690.15 | 57411.87 |
| **Latency** | 850µs    | 943µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16301.30 | 3773.44 | 24367.66 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9825.14 | 15957.56 | 17447.02 | 18439.77 | 19147.18 | 19850.75 | 21604.68 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13780.63 | 3620.56 | 39193.62 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8535.04 | 12506.96 | 14612.23 | 15954.78 | 17032.59 | 17948.38 | 19763.55 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6443.61  | 2385.69 | 43134.13 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4189.52 | 5737.15 | 6679.92 | 7346.14 | 8002.78 | 8509.54 | 11302.98 |
| **Latency** | 5ms     | 6ms     | 7ms     | 8ms     | 10ms    | 12ms    | 18ms     |

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
| 33815.80 | 8527.21 | 49808.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19198.84 | 33107.49 | 36340.59 | 38605.26 | 41006.83 | 42927.77 | 47037.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17602.55 | 3943.61 | 25659.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13192.72 | 16436.91 | 18636.81 | 19851.48 | 20973.34 | 21894.31 | 23417.78 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37920.09 | 11864.26 | 69324.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22742.07 | 27914.98 | 36620.76 | 48415.07 | 54014.41 | 56530.98 | 61281.20 |
| **Latency** | 657µs    | 827µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4167.39  | 1479.83 | 14058.36 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2108.19 | 3441.07 | 4621.71 | 5076.49 | 5496.03 | 5814.75 | 6583.26 |
| **Latency** | 6ms     | 9ms     | 11ms    | 14ms    | 19ms    | 24ms    | 31ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40968.62 | 10818.65 | 57160.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19021.42 | 39197.06 | 44465.64 | 47341.01 | 50095.99 | 52709.28 | 55714.27 |
| **Latency** | 856µs    | 952µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-09-20T01:24:24.092Z</p>
