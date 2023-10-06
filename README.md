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
| NHttp                                                                                | 53329.53 | 14853.10 | 69971.48  | 100%     |
| Fastro                                                                               | 48708.69 | 12453.84 | 62229.66  | 91%      |
| Deno                                                                                 | 48669.82 | 15080.51 | 66947.04  | 91%      |
| Fast                                                                                 | 48304.01 | 14837.43 | 64634.00  | 91%      |
| Hono                                                                                 | 47174.96 | 12140.83 | 62127.19  | 88%      |
| Stric                                                                                | 47060.97 | 9378.85  | 89101.84  | 88%      |
| Bun                                                                                  | 47030.14 | 10234.33 | 71719.09  | 88%      |
| Deso                                                                                 | 46496.05 | 12617.19 | 59055.49  | 87%      |
| Hyper Express                                                                        | 45393.35 | 12699.59 | 67464.31  | 85%      |
| Reno                                                                                 | 40268.00 | 7469.94  | 47743.88  | 76%      |
| Cheetah                                                                              | 40086.75 | 9254.59  | 48372.49  | 75%      |
| http                                                                                 | 29318.30 | 7881.49  | 38542.76  | 55%      |
| Node                                                                                 | 28609.25 | 5841.14  | 35016.13  | 54%      |
| Vixeny (Deno)                                                                        | 27489.75 | 12876.73 | 41533.36  | 52%      |
| Fastify                                                                              | 24654.28 | 5210.71  | 30066.56  | 46%      |
| Alosaur                                                                              | 24400.61 | 6092.24  | 33074.16  | 46%      |
| Router                                                                               | 21673.06 | 4831.05  | 28481.94  | 41%      |
| Aqua                                                                                 | 20884.76 | 5711.70  | 124365.73 | 39%      |
| Little                                                                               | 20399.54 | 4317.57  | 28880.23  | 38%      |
| Oak                                                                                  | 18986.98 | 4481.52  | 29932.46  | 36%      |
| Dinatra                                                                              | 16794.75 | 4002.72  | 37809.24  | 31%      |
| Abc                                                                                  | 15252.71 | 3060.73  | 19943.42  | 29%      |
| Danet (Oak)                                                                          | 13731.34 | 3653.74  | 26829.89  | 26%      |
| Opine                                                                                | 8342.09  | 2597.76  | 33318.14  | 16%      |
| Express (Deno)                                                                       | 8259.10  | 1966.14  | 11614.81  | 15%      |
| Acorn                                                                                | 5594.27  | 7999.58  | 93200.37  | 10%      |
| Servest                                                                              | 5348.07  | 1884.51  | 10080.14  | 10%      |
| Express                                                                              | 5199.48  | 1403.04  | 18412.10  | 10%      |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-99ec7186-31b5-4f10-a924-85b692566a4d) |          |          |           |          |

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
| 15252.71 | 3060.73 | 19943.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10967.31 | 14334.05 | 15863.04 | 17139.32 | 18365.82 | 18933.64 | 19535.29 |
| **Latency** | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5594.27  | 7999.58 | 93200.37 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 46.39 | 63.20 | 5021.79 | 7569.32 | 11938.33 | 18112.72 | 41930.83 |
| **Latency** | 7ms   | 8ms   | 19ms    | 27ms    | 31ms     | 34ms     | 51ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24400.61 | 6092.24 | 33074.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17605.85 | 21467.16 | 26983.95 | 28208.25 | 29026.77 | 29600.95 | 30653.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 20884.76 | 5711.70 | 124365.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16405.96 | 19501.82 | 22223.21 | 23396.31 | 24081.21 | 24446.04 | 26013.94 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47030.14 | 10234.33 | 71719.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35307.66 | 40131.05 | 45530.86 | 54426.46 | 62233.36 | 64123.61 | 66755.19 |
| **Latency** | 589µs    | 750µs    | 929µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40086.75 | 9254.59 | 48372.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25914.43 | 38297.26 | 43541.23 | 45948.28 | 47000.92 | 47365.70 | 47912.79 |
| **Latency** | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13731.34 | 3653.74 | 26829.89 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8515.53 | 12436.88 | 14672.40 | 16024.50 | 16959.52 | 17935.10 | 20023.46 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 9ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48669.82 | 15080.51 | 66947.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24239.89 | 35224.11 | 55831.86 | 61321.74 | 63515.01 | 64435.13 | 66124.76 |
| **Latency** | 635µs    | 750µs    | 849µs    | 986µs    | 1ms      | 2ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46496.05 | 12617.19 | 59055.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22189.42 | 42140.40 | 52992.32 | 55103.01 | 56107.50 | 56752.70 | 57829.36 |
| **Latency** | 795µs    | 850µs    | 908µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16794.75 | 4002.72 | 37809.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12818.02 | 15166.22 | 17922.32 | 19276.65 | 20458.18 | 20959.21 | 21663.34 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5199.48  | 1403.04 | 18412.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3124.55 | 4825.49 | 5744.62 | 5991.81 | 6121.78 | 6196.69 | 6392.75 |
| **Latency** | 8ms     | 8ms     | 8ms     | 9ms     | 12ms    | 14ms    | 18ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8259.10  | 1966.14 | 11614.81 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 5548.14 | 7553.66 | 9055.42 | 9571.95 | 9793.00 | 10009.24 | 10401.88 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 9ms      | 15ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48304.01 | 14837.43 | 64634.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23343.10 | 36570.55 | 56109.06 | 60335.69 | 61803.72 | 62345.66 | 63582.88 |
| **Latency** | 724µs    | 782µs    | 839µs    | 962µs    | 2ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24654.28 | 5210.71 | 30066.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18006.08 | 24872.82 | 26515.20 | 27440.18 | 27958.19 | 28315.35 | 28810.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48708.69 | 12453.84 | 62229.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23209.30 | 44425.86 | 54331.93 | 57200.54 | 58667.06 | 59408.17 | 60602.81 |
| **Latency** | 765µs    | 819µs    | 869µs    | 981µs    | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47174.96 | 12140.83 | 62127.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23142.06 | 42446.45 | 52860.49 | 55816.98 | 57189.12 | 57800.49 | 58977.33 |
| **Latency** | 779µs    | 837µs    | 897µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29318.30 | 7881.49 | 38542.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16709.74 | 26090.21 | 32823.98 | 34820.22 | 35723.72 | 36205.98 | 37104.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45393.35 | 12699.59 | 67464.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29074.85 | 33097.70 | 46514.03 | 56854.76 | 61926.20 | 63172.12 | 65004.47 |
| **Latency** | 620µs    | 759µs    | 893µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20399.54 | 4317.57 | 28880.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16899.97 | 19683.30 | 21601.22 | 22849.41 | 23537.10 | 24129.21 | 25101.34 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

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
| 53329.53 | 14853.10 | 69971.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25109.17 | 44331.44 | 60989.53 | 64249.97 | 65719.58 | 66282.54 | 67324.30 |
| **Latency** | 646µs    | 730µs    | 807µs    | 871µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28609.25 | 5841.14 | 35016.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24469.27 | 29002.05 | 30345.15 | 31327.66 | 32223.55 | 32569.70 | 33200.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18986.98 | 4481.52 | 29932.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13487.18 | 18123.09 | 20357.31 | 21578.65 | 22503.19 | 22999.24 | 24696.13 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8342.09  | 2597.76 | 33318.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5574.94 | 6852.26 | 8502.98 | 9619.67 | 11528.48 | 12607.64 | 13823.65 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 8ms      | 9ms      | 14ms     |

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
| 40268.00 | 7469.94 | 47743.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28010.07 | 40014.85 | 43222.03 | 44629.88 | 45532.38 | 45984.13 | 46581.97 |
| **Latency** | 986µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21673.06 | 4831.05 | 28481.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16209.75 | 20134.34 | 23223.45 | 24713.48 | 25517.14 | 26020.52 | 27279.58 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47060.97 | 9378.85 | 89101.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36974.81 | 40247.44 | 44345.41 | 54206.97 | 61002.03 | 63826.38 | 66630.20 |
| **Latency** | 597µs    | 754µs    | 953µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5348.07  | 1884.51 | 10080.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2906.31 | 4333.90 | 5926.62 | 6549.73 | 6946.21 | 7317.65 | 8896.37 |
| **Latency** | 5ms     | 6ms     | 8ms     | 11ms    | 15ms    | 19ms    | 27ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 27489.75 | 12876.73 | 41533.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11683.83 | 15568.67 | 30218.54 | 38191.31 | 41241.50 | 41533.36 | 41533.36 |
| **Latency** | 979µs    | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 7ms      |

---

<p align="center">Generated 2023-10-06T01:25:08.615Z</p>
