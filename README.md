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
| Fast                                                                                 | 67187.59 | 17038.88 | 78863.58  | 100%     |
| Hono                                                                                 | 66331.47 | 15628.19 | 76431.63  | 99%      |
| Vixeny (Deno)                                                                        | 66025.08 | 19312.23 | 80605.82  | 98%      |
| Megalo                                                                               | 65616.64 | 12482.08 | 73267.92  | 98%      |
| NHttp                                                                                | 64719.73 | 19291.61 | 81632.40  | 96%      |
| Deso                                                                                 | 63310.61 | 16039.13 | 73926.58  | 94%      |
| Bun                                                                                  | 62840.26 | 13684.30 | 87581.15  | 94%      |
| Stric                                                                                | 62445.25 | 11181.39 | 87567.99  | 93%      |
| Deno                                                                                 | 60583.46 | 17493.12 | 80646.15  | 90%      |
| Hyper Express                                                                        | 58842.45 | 14628.79 | 91954.23  | 88%      |
| Reno                                                                                 | 56732.16 | 6563.31  | 61919.96  | 84%      |
| Cheetah                                                                              | 54719.43 | 10062.38 | 60785.81  | 81%      |
| http                                                                                 | 40153.16 | 8285.41  | 47806.70  | 60%      |
| Node                                                                                 | 39913.46 | 6107.85  | 43797.32  | 59%      |
| Fastify                                                                              | 35483.70 | 6177.78  | 38545.57  | 53%      |
| Alosaur                                                                              | 31960.55 | 6840.88  | 46284.51  | 48%      |
| Router                                                                               | 29305.74 | 5240.32  | 36630.74  | 44%      |
| Aqua                                                                                 | 26898.62 | 4560.32  | 34305.03  | 40%      |
| Little                                                                               | 25942.32 | 4852.06  | 59931.71  | 39%      |
| Oak                                                                                  | 25314.62 | 5107.96  | 31395.00  | 38%      |
| Dinatra                                                                              | 22812.95 | 4616.33  | 50371.91  | 34%      |
| Abc                                                                                  | 21698.32 | 3011.49  | 40705.56  | 32%      |
| Danet (Oak)                                                                          | 18990.78 | 3400.84  | 24194.50  | 28%      |
| Express (Deno)                                                                       | 11867.79 | 2608.64  | 16306.40  | 18%      |
| Opine                                                                                | 11744.26 | 1922.42  | 16151.54  | 17%      |
| Express                                                                              | 7696.78  | 1612.17  | 11207.84  | 11%      |
| Servest                                                                              | 7459.15  | 2482.75  | 12456.23  | 11%      |
| Acorn                                                                                | 5329.17  | 9223.53  | 131233.60 | 8%       |
| Fastro                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-8c9f20a9-73d5-40d1-b9d7-e1b31ee1bcb9) |          |          |           |          |

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
| 21698.32 | 3011.49 | 40705.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20126.04 | 21207.81 | 22224.48 | 22901.60 | 24315.01 | 24954.07 | 25644.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5329.17  | 9223.53 | 131233.60 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 59.84 | 92.89 | 3798.78 | 7397.92 | 9700.07 | 11233.02 | 62241.96 |
| **Latency** | 5ms   | 7ms   | 15ms    | 22ms    | 26ms    | 28ms     | 34ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31960.55 | 6840.88 | 46284.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26705.41 | 29226.46 | 34768.50 | 35774.17 | 36448.80 | 36851.34 | 37918.22 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26898.62 | 4560.32 | 34305.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24278.71 | 26073.87 | 28502.33 | 29273.81 | 29703.53 | 30095.51 | 31517.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62840.26 | 13684.30 | 87581.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46493.03 | 51143.57 | 62681.61 | 76279.33 | 78751.42 | 79623.25 | 81291.92 |
| **Latency** | 463µs    | 586µs    | 701µs    | 955µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54719.43 | 10062.38 | 60785.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40159.51 | 57141.24 | 58408.87 | 59062.12 | 59518.53 | 59845.59 | 60329.06 |
| **Latency** | 758µs    | 821µs    | 856µs    | 889µs    | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18990.78 | 3400.84 | 24194.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17138.81 | 18696.84 | 19909.20 | 20619.44 | 21043.06 | 21585.82 | 22583.98 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60583.46 | 17493.12 | 80646.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31391.20 | 46313.52 | 65962.32 | 77024.87 | 78469.82 | 78956.30 | 79653.69 |
| **Latency** | 523µs    | 606µs    | 678µs    | 786µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63310.61 | 16039.13 | 73926.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28435.70 | 66728.17 | 71368.66 | 72056.36 | 72516.83 | 72845.32 | 73282.63 |
| **Latency** | 621µs    | 665µs    | 697µs    | 735µs    | 861µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22812.95 | 4616.33 | 50371.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20383.05 | 21147.51 | 24741.13 | 25634.49 | 26114.10 | 26623.86 | 27948.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7696.78  | 1612.17 | 11207.84 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5156.95 | 7600.93 | 8476.48 | 8611.99 | 8721.04 | 8786.04 | 8847.36 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 10ms    | 14ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11867.79 | 2608.64 | 16306.40 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7652.38 | 12042.90 | 13040.98 | 13268.45 | 13387.88 | 13496.70 | 14058.47 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67187.59 | 17038.88 | 78863.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28604.93 | 71351.92 | 75226.49 | 76373.64 | 77045.33 | 77390.55 | 77963.69 |
| **Latency** | 568µs    | 616µs    | 663µs    | 711µs    | 794µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35483.70 | 6177.78 | 38545.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35009.18 | 36427.40 | 36989.23 | 37678.08 | 37935.20 | 38020.61 | 38203.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66331.47 | 15628.19 | 76431.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30418.32 | 70733.40 | 73539.91 | 74247.10 | 74698.86 | 74939.14 | 75511.60 |
| **Latency** | 600µs    | 640µs    | 674µs    | 713µs    | 833µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40153.16 | 8285.41 | 47806.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27969.55 | 37452.14 | 44312.95 | 45226.33 | 45891.71 | 46275.08 | 46911.83 |
| **Latency** | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58842.45 | 14628.79 | 91954.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40041.33 | 44717.09 | 58943.16 | 71715.24 | 78841.16 | 80860.56 | 84108.96 |
| **Latency** | 498µs    | 598µs    | 708µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25942.32 | 4852.06 | 59931.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22792.35 | 25598.09 | 27109.00 | 28456.13 | 29069.52 | 29414.77 | 30113.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65616.64 | 12482.08 | 73267.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45893.71 | 68716.63 | 70530.47 | 71135.70 | 71498.10 | 71742.18 | 72207.36 |
| **Latency** | 628µs    | 668µs    | 704µs    | 740µs    | 845µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64719.73 | 19291.61 | 81632.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29166.56 | 52480.63 | 75745.59 | 78562.55 | 79504.13 | 79888.00 | 80708.22 |
| **Latency** | 515µs    | 599µs    | 664µs    | 718µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39913.46 | 6107.85 | 43797.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39366.21 | 40755.10 | 41351.35 | 42004.70 | 42372.13 | 42581.41 | 43103.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25314.62 | 5107.96 | 31395.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20809.18 | 24822.28 | 27054.17 | 27912.06 | 28408.85 | 28900.93 | 30313.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11744.26 | 1922.42 | 16151.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10579.77 | 11513.50 | 12307.66 | 12624.79 | 12848.46 | 13471.16 | 14434.34 |
| **Latency** | 3ms      | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 8ms      |

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
| 56732.16 | 6563.31 | 61919.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56397.91 | 57530.62 | 58125.70 | 58733.02 | 59280.53 | 59505.78 | 59837.01 |
| **Latency** | 761µs    | 828µs    | 862µs    | 889µs    | 930µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29305.74 | 5240.32 | 36630.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25375.87 | 28254.77 | 31232.76 | 32140.72 | 32690.61 | 33109.14 | 34452.53 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62445.25 | 11181.39 | 87567.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48498.00 | 53011.97 | 61510.67 | 72443.14 | 78033.73 | 79851.28 | 84618.80 |
| **Latency** | 448µs    | 569µs    | 713µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7459.15  | 2482.75 | 12456.23 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4126.83 | 6437.16 | 8416.77 | 9025.38 | 9494.09 | 9827.84 | 10257.86 |
| **Latency** | 3ms     | 5ms     | 6ms     | 7ms     | 9ms     | 13ms    | 17ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66025.08 | 19312.23 | 80605.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29213.91 | 59826.79 | 77103.26 | 78515.60 | 79154.52 | 79509.72 | 79966.89 |
| **Latency** | 531µs    | 599µs    | 650µs    | 702µs    | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2023-10-23T01:25:33.004Z</p>
