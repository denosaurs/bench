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
| Hono                                                                                 | 59334.97 | 10212.26 | 65924.61  | 100%     |
| Fast                                                                                 | 59129.49 | 14431.56 | 69827.69  | 100%     |
| Vixeny (Deno)                                                                        | 58872.17 | 14353.73 | 70561.35  | 99%      |
| Megalo                                                                               | 58810.59 | 7006.21  | 63146.55  | 99%      |
| Fastro                                                                               | 58586.39 | 8876.54  | 64032.89  | 99%      |
| NHttp                                                                                | 56958.07 | 16596.51 | 70678.71  | 96%      |
| Deso                                                                                 | 55419.85 | 11460.76 | 63276.30  | 93%      |
| Bun                                                                                  | 53357.61 | 9953.56  | 78007.49  | 90%      |
| Stric                                                                                | 53073.59 | 9431.94  | 75205.79  | 89%      |
| Hyper Express                                                                        | 50754.56 | 11725.26 | 75290.06  | 86%      |
| Deno                                                                                 | 49310.38 | 14060.85 | 69704.07  | 83%      |
| Reno                                                                                 | 49233.50 | 7324.00  | 54383.04  | 83%      |
| Cheetah                                                                              | 47946.65 | 7706.10  | 52353.70  | 81%      |
| http                                                                                 | 35995.94 | 7729.47  | 43382.28  | 61%      |
| Node                                                                                 | 33989.70 | 6062.33  | 37466.95  | 57%      |
| Fastify                                                                              | 29983.03 | 5104.85  | 32800.88  | 51%      |
| Alosaur                                                                              | 28493.36 | 6653.07  | 35938.10  | 48%      |
| Router                                                                               | 25845.44 | 5180.35  | 33176.27  | 44%      |
| Aqua                                                                                 | 24291.38 | 4542.05  | 42751.09  | 41%      |
| Little                                                                               | 22506.84 | 5494.83  | 29036.19  | 38%      |
| Oak                                                                                  | 22060.61 | 6701.53  | 142343.69 | 37%      |
| Dinatra                                                                              | 19225.85 | 4747.82  | 32668.65  | 32%      |
| Abc                                                                                  | 17929.82 | 2891.88  | 32410.14  | 30%      |
| Danet (Oak)                                                                          | 16074.28 | 3655.33  | 21206.50  | 27%      |
| Express (Deno)                                                                       | 10340.38 | 2536.08  | 46414.72  | 17%      |
| Opine                                                                                | 10154.53 | 2661.61  | 52403.84  | 17%      |
| Acorn                                                                                | 7309.12  | 7879.08  | 85834.70  | 12%      |
| Servest                                                                              | 6156.32  | 2163.95  | 10109.53  | 10%      |
| Express                                                                              | 5705.01  | 1603.24  | 9789.68   | 10%      |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-13ea60e9-921c-4652-8c39-e452b5ca76fa) |          |          |           |          |

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
| 17929.82 | 2891.88 | 32410.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15681.81 | 16565.59 | 19152.98 | 19702.31 | 20027.18 | 20527.17 | 21675.30 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7309.12  | 7879.08 | 85834.70 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 72.83 | 97.22 | 7136.64 | 9062.33 | 13209.72 | 16972.82 | 40656.03 |
| **Latency** | 5ms   | 6ms   | 8ms     | 15ms    | 18ms     | 19ms     | 22ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28493.36 | 6653.07 | 35938.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22710.60 | 25711.43 | 31341.87 | 32014.31 | 32509.72 | 32926.50 | 33629.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24291.38 | 4542.05 | 42751.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22011.07 | 23162.81 | 25739.53 | 26412.86 | 27058.70 | 27518.32 | 29093.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53357.61 | 9953.56 | 78007.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41604.41 | 45007.47 | 51441.04 | 62482.22 | 67525.38 | 69118.38 | 73050.11 |
| **Latency** | 530µs    | 676µs    | 827µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47946.65 | 7706.10 | 52353.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43331.03 | 49382.77 | 50518.99 | 51040.12 | 51435.80 | 51624.06 | 51950.97 |
| **Latency** | 866µs    | 943µs    | 984µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16074.28 | 3655.33 | 21206.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10851.94 | 15694.88 | 17369.97 | 18189.00 | 18579.45 | 19043.29 | 20196.52 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49310.38 | 14060.85 | 69704.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28774.00 | 37303.24 | 51922.13 | 62427.90 | 65814.23 | 66709.09 | 68074.82 |
| **Latency** | 630µs    | 731µs    | 784µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55419.85 | 11460.76 | 63276.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34100.82 | 57620.21 | 59959.14 | 60835.65 | 61718.27 | 62153.90 | 62629.82 |
| **Latency** | 730µs    | 779µs    | 822µs    | 864µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19225.85 | 4747.82 | 32668.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15219.45 | 16218.46 | 21591.73 | 22425.07 | 23483.49 | 23781.65 | 24223.45 |
| **Latency** | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5705.01  | 1603.24 | 9789.68 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3634.34 | 4219.15 | 6672.52 | 6943.03 | 7095.33 | 7154.70 | 7211.23 |
| **Latency** | 7ms     | 7ms     | 7ms     | 10ms    | 12ms    | 13ms    | 18ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10340.38 | 2536.08 | 46414.72 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7151.89 | 10098.23 | 11338.54 | 11573.80 | 11688.92 | 11762.04 | 12051.97 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 7ms      | 13ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59129.49 | 14431.56 | 69827.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27023.42 | 61070.33 | 66230.90 | 67410.18 | 68225.02 | 68730.32 | 69583.29 |
| **Latency** | 651µs    | 696µs    | 755µs    | 805µs    | 999µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29983.03 | 5104.85 | 32800.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28947.58 | 30425.16 | 31381.81 | 32093.62 | 32317.35 | 32462.55 | 32630.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58586.39 | 8876.54 | 64032.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54760.61 | 60013.62 | 60984.58 | 62195.07 | 62988.15 | 63211.96 | 63603.48 |
| **Latency** | 709µs    | 766µs    | 804µs    | 843µs    | 909µs    | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59334.97 | 10212.26 | 65924.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47265.55 | 61329.25 | 62880.22 | 63671.56 | 64378.99 | 64900.45 | 65500.45 |
| **Latency** | 695µs    | 742µs    | 781µs    | 824µs    | 971µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35995.94 | 7729.47 | 43382.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29844.07 | 33519.20 | 39217.93 | 40264.94 | 40849.39 | 41136.42 | 41796.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50754.56 | 11725.26 | 75290.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34852.21 | 40104.96 | 51130.52 | 60436.74 | 66415.74 | 69291.56 | 73283.39 |
| **Latency** | 562µs    | 686µs    | 844µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22506.84 | 5494.83 | 29036.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14731.93 | 22143.70 | 24475.03 | 26029.95 | 26546.72 | 26975.18 | 27714.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58810.59 | 7006.21 | 63146.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56890.56 | 59716.54 | 60516.17 | 61177.53 | 61820.21 | 62357.14 | 62950.91 |
| **Latency** | 722µs    | 776µs    | 814µs    | 850µs    | 954µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56958.07 | 16596.51 | 70678.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26566.07 | 47715.74 | 66478.27 | 68045.39 | 68762.58 | 69113.54 | 69827.72 |
| **Latency** | 636µs    | 693µs    | 753µs    | 815µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33989.70 | 6062.33 | 37466.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33151.29 | 34743.32 | 35337.71 | 36537.16 | 36847.79 | 36999.79 | 37257.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 22060.61 | 6701.53 | 142343.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17466.85 | 20934.90 | 23766.79 | 24449.06 | 25101.54 | 25517.16 | 27143.89 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10154.53 | 2661.61 | 52403.84 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7372.30 | 9190.96 | 10496.56 | 10998.72 | 12422.44 | 14501.06 | 15776.80 |
| **Latency** | 2ms     | 4ms     | 5ms      | 5ms      | 6ms      | 6ms      | 11ms     |

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
| 49233.50 | 7324.00 | 54383.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48584.88 | 50261.67 | 50909.60 | 51929.44 | 52374.33 | 52595.50 | 53054.51 |
| **Latency** | 861µs    | 937µs    | 977µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25845.44 | 5180.35 | 33176.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22505.56 | 24765.24 | 27726.59 | 28506.25 | 29014.71 | 29355.61 | 30296.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53073.59 | 9431.94 | 75205.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41576.73 | 45427.60 | 52104.63 | 60618.61 | 66466.07 | 68968.80 | 72243.85 |
| **Latency** | 521µs    | 657µs    | 830µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6156.32  | 2163.95 | 10109.53 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3389.18 | 4934.68 | 6883.03 | 7645.93 | 8097.25 | 8380.01 | 9827.48 |
| **Latency** | 4ms     | 5ms     | 7ms     | 9ms     | 13ms    | 17ms    | 23ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58872.17 | 14353.73 | 70561.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27252.78 | 59866.69 | 65516.81 | 67435.80 | 68343.51 | 68762.72 | 69406.70 |
| **Latency** | 649µs    | 698µs    | 757µs    | 813µs    | 1ms      | 1ms      | 2ms      |

---

<p align="center">Generated 2023-11-14T01:27:02.357Z</p>
