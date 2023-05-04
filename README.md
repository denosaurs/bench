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
  - [Servest](#servest)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Acorn](#acorn-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Cheetah](#cheetah-1)
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
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Deno                                                                                 | 71993.02 | 17792.12 | 83121.22 | 100%     |
| Bun                                                                                  | 71494.13 | 10005.58 | 91895.91 | 99%      |
| Hyper Express                                                                        | 67097.36 | 17255.75 | 85449.92 | 93%      |
| Fast                                                                                 | 63634.51 | 13325.55 | 72401.69 | 88%      |
| NHttp                                                                                | 63630.45 | 13991.00 | 72025.85 | 88%      |
| Hono                                                                                 | 63346.91 | 12435.07 | 71037.34 | 88%      |
| Fastro                                                                               | 58646.01 | 10874.15 | 65506.71 | 81%      |
| Deso                                                                                 | 58600.59 | 12486.26 | 66512.91 | 81%      |
| Megalo                                                                               | 58324.73 | 8912.40  | 64027.14 | 81%      |
| Reno                                                                                 | 50163.63 | 4786.44  | 53053.66 | 70%      |
| Cheetah                                                                              | 43254.16 | 3331.59  | 46152.55 | 60%      |
| http                                                                                 | 41845.41 | 8843.66  | 48982.49 | 58%      |
| Node                                                                                 | 41169.08 | 6551.87  | 45082.31 | 57%      |
| Peko                                                                                 | 37981.64 | 7626.28  | 45179.92 | 53%      |
| Fastify                                                                              | 36868.00 | 6312.14  | 40472.72 | 51%      |
| Alosaur                                                                              | 32684.68 | 7104.71  | 42709.27 | 45%      |
| Router                                                                               | 28562.71 | 4451.35  | 34708.81 | 40%      |
| Little                                                                               | 25807.03 | 4177.70  | 30101.98 | 36%      |
| Oak                                                                                  | 22832.43 | 4148.58  | 30558.02 | 32%      |
| Aqua                                                                                 | 20986.88 | 5218.34  | 27184.63 | 29%      |
| Dinatra                                                                              | 20362.85 | 3863.78  | 29245.21 | 28%      |
| Abc                                                                                  | 19171.36 | 2427.09  | 23040.05 | 27%      |
| Opine                                                                                | 9936.45  | 1504.11  | 12717.99 | 14%      |
| Express (Deno)                                                                       | 9508.54  | 1776.58  | 14325.44 | 13%      |
| Express                                                                              | 7449.45  | 1701.64  | 11235.03 | 10%      |
| Servest                                                                              | 6340.15  | 1929.44  | 9531.17  | 9%       |
| Acorn                                                                                | 3768.26  | 2411.97  | 13964.85 | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-607cccf1-a77e-4796-b218-ba46c91845f2) |          |          |          |          |

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

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19171.36 | 2427.09 | 23040.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17036.39 | 17825.95 | 19750.05 | 20925.87 | 21422.20 | 21621.97 | 22410.75 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3768.26  | 2411.97 | 13964.85 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2012.21 | 2510.66 | 3011.82 | 4163.97 | 6237.88 | 10402.35 | 11432.19 |
| **Latency** | 4ms     | 6ms     | 13ms    | 18ms    | 22ms    | 23ms     | 24ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32684.68 | 7104.71 | 42709.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23913.05 | 30908.22 | 36009.57 | 37081.29 | 37390.01 | 37570.91 | 38005.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20986.88 | 5218.34 | 27184.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14691.61 | 15138.14 | 23323.02 | 25161.23 | 25890.59 | 26295.94 | 26796.81 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 71494.13 | 10005.58 | 91895.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59222.69 | 62633.76 | 70315.69 | 81476.23 | 83242.09 | 84036.40 | 87165.66 |
| **Latency** | 436µs    | 546µs    | 670µs    | 773µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43254.16 | 3331.59 | 46152.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43204.12 | 43599.76 | 43916.93 | 44104.20 | 44312.65 | 44462.12 | 44942.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 71993.02 | 17792.12 | 83121.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32626.76 | 77729.94 | 80618.16 | 81414.27 | 81910.26 | 82152.64 | 82654.17 |
| **Latency** | 534µs    | 583µs    | 616µs    | 657µs    | 739µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58600.59 | 12486.26 | 66512.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30479.50 | 62796.26 | 64481.60 | 64973.11 | 65443.55 | 65748.35 | 66097.43 |
| **Latency** | 723µs    | 741µs    | 761µs    | 794µs    | 925µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20362.85 | 3863.78 | 29245.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17937.41 | 19232.80 | 20814.48 | 22904.06 | 23612.26 | 24748.84 | 25158.67 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7449.45  | 1701.64 | 11235.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5508.96 | 5805.26 | 8537.01 | 8687.18 | 8753.97 | 8775.61 | 8803.31 |
| **Latency** | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 9ms     | 14ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9508.54  | 1776.58 | 14325.44 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7459.00 | 9322.81 | 10290.03 | 10417.27 | 10472.48 | 10497.32 | 10927.37 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63634.51 | 13325.55 | 72401.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32039.91 | 67604.48 | 69474.08 | 70200.39 | 70605.34 | 70832.86 | 71105.20 |
| **Latency** | 673µs    | 691µs    | 709µs    | 732µs    | 852µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36868.00 | 6312.14 | 40472.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36739.55 | 37891.95 | 38451.39 | 39041.64 | 39238.68 | 39327.40 | 39464.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58646.01 | 10874.15 | 65506.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34916.26 | 62112.75 | 63124.33 | 63731.59 | 64204.69 | 64578.05 | 65115.90 |
| **Latency** | 749µs    | 766µs    | 783µs    | 802µs    | 941µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63346.91 | 12435.07 | 71037.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37531.02 | 67425.99 | 68653.93 | 69148.79 | 69779.72 | 70028.54 | 70314.30 |
| **Latency** | 679µs    | 698µs    | 716µs    | 740µs    | 857µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41845.41 | 8843.66 | 48982.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27843.23 | 40517.24 | 46114.55 | 47009.19 | 47561.86 | 47833.19 | 48252.78 |
| **Latency** | 915µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67097.36 | 17255.75 | 85449.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41275.35 | 42409.57 | 78174.96 | 80792.66 | 81753.45 | 82227.60 | 82791.24 |
| **Latency** | 468µs    | 541µs    | 678µs    | 721µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25807.03 | 4177.70 | 30101.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24126.81 | 25829.48 | 26728.78 | 27913.49 | 28102.35 | 28218.76 | 28914.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58324.73 | 8912.40 | 64027.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46007.16 | 60591.23 | 61432.45 | 62141.39 | 62460.13 | 62644.99 | 62999.63 |
| **Latency** | 774µs    | 791µs    | 804µs    | 819µs    | 942µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63630.45 | 13991.00 | 72025.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32077.81 | 67717.99 | 70164.95 | 70840.07 | 71206.51 | 71387.51 | 71630.49 |
| **Latency** | 665µs    | 684µs    | 701µs    | 724µs    | 852µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41169.08 | 6551.87 | 45082.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41449.15 | 42164.33 | 42727.16 | 43164.99 | 43594.41 | 43841.90 | 44359.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22832.43 | 4148.58 | 30558.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19848.20 | 22637.08 | 24211.48 | 24915.79 | 25107.57 | 25673.57 | 26457.90 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9936.45  | 1504.11 | 12717.99 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9190.83 | 9892.91 | 10412.51 | 10571.62 | 10647.29 | 10707.10 | 11840.26 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 6ms      | 9ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37981.64 | 7626.28 | 45179.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28356.35 | 37134.38 | 41120.10 | 42381.62 | 42758.79 | 42999.37 | 43355.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50163.63 | 4786.44 | 53053.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50130.37 | 50605.55 | 51031.43 | 51369.65 | 51892.31 | 52061.65 | 52218.58 |
| **Latency** | 942µs    | 958µs    | 969µs    | 983µs    | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28562.71 | 4451.35 | 34708.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26209.06 | 27719.21 | 30001.48 | 30758.62 | 31368.97 | 31685.15 | 32191.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6340.15  | 1929.44 | 9531.17 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4842.74 | 5506.86 | 7086.20 | 7455.59 | 7932.95 | 8043.58 | 9310.16 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 9ms     | 15ms    | 17ms    |

---

<p align="center">Generated 2023-05-04T10:20:56.993Z</p>
