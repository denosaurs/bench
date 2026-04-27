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

| Framework                                                                            | Mean      | Stddev  | Max       | Relative |
| ------------------------------------------------------------------------------------ | --------- | ------- | --------- | -------- |
| Hyper Express                                                                        | 100125.60 | 6052.52 | 118142.05 | 100%     |
| Bun                                                                                  | 99916.68  | 5562.08 | 118506.04 | 100%     |
| Stric                                                                                | 98136.83  | 6875.95 | 113726.70 | 98%      |
| Elysia                                                                               | 94163.25  | 6523.04 | 112061.36 | 94%      |
| Deno                                                                                 | 79288.85  | 5690.32 | 99601.96  | 79%      |
| Fastro                                                                               | 73078.39  | 5637.16 | 101506.59 | 73%      |
| Vixeny (Deno)                                                                        | 72661.58  | 5752.32 | 101037.26 | 73%      |
| NHttp                                                                                | 71160.97  | 4943.10 | 101826.88 | 71%      |
| Fast                                                                                 | 70942.53  | 4727.44 | 95718.67  | 71%      |
| Hono                                                                                 | 69633.60  | 4900.25 | 94840.62  | 70%      |
| Megalo                                                                               | 65090.43  | 3312.78 | 79222.86  | 65%      |
| Deso                                                                                 | 63881.78  | 3485.37 | 82173.49  | 64%      |
| Alosaur                                                                              | 61107.69  | 2954.57 | 71850.58  | 61%      |
| Reno                                                                                 | 55886.83  | 2354.38 | 62831.98  | 56%      |
| Cheetah                                                                              | 55702.22  | 2759.94 | 59114.06  | 56%      |
| http                                                                                 | 54475.26  | 5965.65 | 62711.41  | 54%      |
| Router                                                                               | 52377.22  | 5047.04 | 61675.71  | 52%      |
| Danet V2 (Hono)                                                                      | 48134.94  | 3247.93 | 51058.69  | 48%      |
| Danet (Oak)                                                                          | 45439.94  | 2606.37 | 47644.15  | 45%      |
| Oak                                                                                  | 42224.88  | 4160.99 | 44783.23  | 42%      |
| Aqua                                                                                 | 39587.70  | 4394.98 | 44815.89  | 40%      |
| Little                                                                               | 39170.00  | 4513.03 | 44809.76  | 39%      |
| Node                                                                                 | 33311.55  | 3196.10 | 55466.40  | 33%      |
| Dinatra                                                                              | 24888.46  | 3390.63 | 31428.27  | 25%      |
| Fastify                                                                              | 23948.64  | 2446.27 | 36865.37  | 24%      |
| Abc                                                                                  | 18778.34  | 2034.82 | 29119.53  | 19%      |
| Express (Deno)                                                                       | 14399.90  | 2946.04 | 18349.76  | 14%      |
| Express                                                                              | 9496.66   | 2065.16 | 13375.58  | 9%       |
| Servest                                                                              | 8659.50   | 2556.46 | 18818.10  | 9%       |
| Acorn                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00    | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-a3385d5f-9fc6-4951-9ab5-d0d37c19197e) |           |         |           |          |

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
| 18778.34 | 2034.82 | 29119.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16954.67 | 17876.65 | 18910.59 | 19804.38 | 20754.17 | 21401.09 | 23905.40 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      |

### [Acorn](#acorn)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61107.69 | 2954.57 | 71850.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60206.18 | 60808.39 | 61419.10 | 61993.15 | 62529.75 | 62908.19 | 64099.44 |
| **Latency** | 723µs    | 754µs    | 825µs    | 864µs    | 892µs    | 923µs    | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39587.70 | 4394.98 | 44815.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37615.01 | 38853.54 | 40319.64 | 41856.50 | 42658.32 | 43292.41 | 44331.70 |
| **Latency** | 837µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 99916.68 | 5562.08 | 118506.04 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 92883.01 | 96345.00 | 100256.29 | 103619.10 | 106376.43 | 108484.26 | 112133.26 |
| **Latency** | 310µs    | 402µs    | 486µs     | 580µs     | 692µs     | 789µs     | 997µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55702.22 | 2759.94 | 59114.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55043.91 | 55438.04 | 56104.71 | 56509.03 | 56878.93 | 57209.91 | 57616.99 |
| **Latency** | 789µs    | 821µs    | 908µs    | 945µs    | 990µs    | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45439.94 | 2606.37 | 47644.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44730.77 | 45328.09 | 45719.05 | 46266.56 | 46612.67 | 46856.39 | 47399.73 |
| **Latency** | 958µs    | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48134.94 | 3247.93 | 51058.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47524.73 | 48361.59 | 48715.59 | 48983.47 | 49332.27 | 49554.42 | 49833.06 |
| **Latency** | 907µs    | 939µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 79288.85 | 5690.32 | 99601.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74100.70 | 75262.31 | 78251.78 | 82959.13 | 86727.98 | 89015.18 | 93316.80 |
| **Latency** | 480µs    | 575µs    | 643µs    | 700µs    | 739µs    | 777µs    | 851µs    |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63881.78 | 3485.37 | 82173.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62214.22 | 63002.74 | 63641.34 | 64473.92 | 66110.41 | 69261.97 | 73179.88 |
| **Latency** | 713µs    | 752µs    | 782µs    | 817µs    | 851µs    | 890µs    | 969µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24888.46 | 3390.63 | 31428.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22505.91 | 23930.67 | 25427.07 | 26919.06 | 27842.85 | 28345.66 | 29456.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Elysia](#elysia)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 94163.25 | 6523.04 | 112061.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 86231.60 | 90147.39 | 94501.21 | 98735.18 | 101610.03 | 104127.58 | 108100.25 |
| **Latency** | 333µs    | 416µs    | 514µs    | 612µs    | 737µs     | 851µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9496.66  | 2065.16 | 13375.58 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6674.84 | 8185.03 | 9520.60 | 11055.54 | 12254.20 | 12765.07 | 13151.40 |
| **Latency** | 3ms     | 4ms     | 5ms     | 5ms      | 6ms      | 7ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14399.90 | 2946.04 | 18349.76 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9464.79 | 14441.45 | 15563.70 | 16116.60 | 16419.18 | 16639.97 | 17091.22 |
| **Latency** | 2ms     | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 70942.53 | 4727.44 | 95718.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67713.48 | 68620.94 | 69687.28 | 72101.22 | 76933.54 | 79422.41 | 86020.39 |
| **Latency** | 582µs    | 658µs    | 715µs    | 766µs    | 796µs    | 823µs    | 908µs    |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23948.64 | 2446.27 | 36865.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23135.79 | 23523.13 | 23955.77 | 24407.88 | 25175.89 | 26554.70 | 30926.49 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 73078.39 | 5637.16 | 101506.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69318.37 | 70163.05 | 71399.91 | 75114.38 | 80279.88 | 83131.25 | 93064.62 |
| **Latency** | 540µs    | 638µs    | 697µs    | 749µs    | 782µs    | 812µs    | 889µs    |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69633.60 | 4900.25 | 94840.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66936.78 | 67634.07 | 68652.05 | 70545.30 | 74944.17 | 77689.29 | 85755.58 |
| **Latency** | 600µs    | 669µs    | 726µs    | 777µs    | 808µs    | 843µs    | 925µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54475.26 | 5965.65 | 62711.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50833.87 | 52790.15 | 56205.61 | 57701.94 | 58605.60 | 59203.06 | 60202.88 |
| **Latency** | 669µs    | 810µs    | 916µs    | 963µs    | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 100125.60 | 6052.52 | 118142.05 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 93106.49 | 96742.98 | 100378.37 | 104002.55 | 107061.32 | 109242.20 | 112923.73 |
| **Latency** | 313µs    | 403µs    | 484µs     | 582µs     | 686µs     | 783µs     | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39170.00 | 4513.03 | 44809.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36914.99 | 38771.17 | 40063.60 | 41281.91 | 42310.22 | 42792.73 | 43939.24 |
| **Latency** | 849µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 65090.43 | 3312.78 | 79222.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63841.79 | 64438.24 | 65132.16 | 65842.94 | 66812.16 | 68205.58 | 74224.30 |
| **Latency** | 676µs    | 710µs    | 773µs    | 815µs    | 847µs    | 890µs    | 964µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 71160.97 | 4943.10 | 101826.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 68023.07 | 68741.65 | 69834.35 | 72214.01 | 77325.34 | 80111.69 | 87286.20 |
| **Latency** | 581µs    | 657µs    | 713µs    | 763µs    | 793µs    | 819µs    | 911µs    |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33311.55 | 3196.10 | 55466.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32302.45 | 32985.52 | 33669.43 | 34343.98 | 35061.18 | 35654.73 | 37025.55 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42224.88 | 4160.99 | 44783.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41800.20 | 42474.80 | 43117.94 | 43478.74 | 43871.36 | 44102.37 | 44461.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Opine](#opine)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

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
| 55886.83 | 2354.38 | 62831.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55090.25 | 55617.85 | 56228.52 | 56631.31 | 57105.58 | 57378.40 | 58011.53 |
| **Latency** | 788µs    | 820µs    | 907µs    | 944µs    | 978µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52377.22 | 5047.04 | 61675.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49578.08 | 51126.32 | 53561.45 | 55164.40 | 56100.32 | 56707.85 | 57863.48 |
| **Latency** | 691µs    | 845µs    | 960µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 98136.83 | 6875.95 | 113726.70 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 89800.18 | 94723.96 | 99010.58 | 102533.35 | 105937.35 | 107702.36 | 111002.06 |
| **Latency** | 318µs    | 403µs    | 488µs    | 590µs     | 720µs     | 815µs     | 1ms       |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8659.50  | 2556.46 | 18818.10 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5534.92 | 7408.71 | 8979.35 | 10403.91 | 11422.15 | 11960.33 | 13871.54 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms      | 7ms      | 9ms      | 12ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 72661.58 | 5752.32 | 101037.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 68613.45 | 69633.53 | 71002.94 | 75099.31 | 79638.62 | 83097.39 | 90224.25 |
| **Latency** | 540µs    | 641µs    | 699µs    | 754µs    | 786µs    | 815µs    | 921µs    |

---

<p align="center">Generated 2026-04-27T03:59:29.527Z</p>
