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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Deno                                                                                 | 56087.98 | 13538.75 | 75140.31  | 100%     |
| Vixeny (Deno)                                                                        | 54364.94 | 12628.03 | 70385.13  | 97%      |
| NHttp                                                                                | 54203.70 | 11653.58 | 66840.03  | 97%      |
| Hyper Express                                                                        | 53323.54 | 15463.42 | 72668.20  | 95%      |
| Stric                                                                                | 53176.96 | 11035.67 | 74540.56  | 95%      |
| Bun                                                                                  | 52964.38 | 11336.10 | 72281.87  | 94%      |
| Fast                                                                                 | 52342.60 | 13230.82 | 69767.15  | 93%      |
| Hono                                                                                 | 50775.91 | 11633.46 | 65226.58  | 91%      |
| Deso                                                                                 | 47864.53 | 10673.72 | 63610.65  | 85%      |
| Fastro                                                                               | 45911.55 | 12261.11 | 60213.69  | 82%      |
| Reno                                                                                 | 41972.13 | 6936.63  | 53126.02  | 75%      |
| Cheetah                                                                              | 38789.00 | 6028.16  | 47625.10  | 69%      |
| http                                                                                 | 31678.93 | 7966.11  | 54874.90  | 56%      |
| Node                                                                                 | 30042.14 | 5136.38  | 36312.87  | 54%      |
| Peko                                                                                 | 27580.29 | 6114.05  | 63201.36  | 49%      |
| Fastify                                                                              | 25664.50 | 5499.54  | 34779.92  | 46%      |
| Alosaur                                                                              | 25274.65 | 5343.78  | 53682.47  | 45%      |
| Router                                                                               | 21907.42 | 4524.40  | 28613.74  | 39%      |
| Little                                                                               | 19051.50 | 3717.07  | 25216.64  | 34%      |
| Aqua                                                                                 | 18920.82 | 3670.50  | 60268.61  | 34%      |
| Oak                                                                                  | 17187.02 | 3734.07  | 23844.21  | 31%      |
| Dinatra                                                                              | 16444.57 | 3809.55  | 32946.00  | 29%      |
| Abc                                                                                  | 14871.57 | 2972.29  | 20835.91  | 27%      |
| Danet (Oak)                                                                          | 13410.01 | 2953.40  | 20434.07  | 24%      |
| Opine                                                                                | 8196.11  | 1587.69  | 18026.38  | 15%      |
| Acorn                                                                                | 5917.15  | 8520.83  | 108695.65 | 11%      |
| Express (Deno)                                                                       | 5859.53  | 1183.54  | 7242.06   | 10%      |
| Express                                                                              | 5575.86  | 1355.68  | 15561.29  | 10%      |
| Servest                                                                              | 4821.17  | 1564.01  | 7959.80   | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-1af57227-9b2a-44a7-b32a-2dcc3752a19d) |          |          |           |          |

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
| 14871.57 | 2972.29 | 20835.91 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9986.91 | 13612.43 | 16131.32 | 16890.19 | 17364.26 | 17695.05 | 18666.38 |
| **Latency** | 2ms     | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5917.15  | 8520.83 | 108695.65 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 45.87 | 60.71 | 4839.36 | 7931.52 | 13714.81 | 19503.80 | 37689.74 |
| **Latency** | 8ms   | 10ms  | 20ms    | 26ms    | 31ms     | 33ms     | 51ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25274.65 | 5343.78 | 53682.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19993.29 | 23772.98 | 27267.15 | 28021.18 | 28798.64 | 29373.07 | 30898.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18920.82 | 3670.50 | 60268.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16450.43 | 17979.13 | 19802.26 | 20668.52 | 21393.66 | 22041.66 | 23719.63 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52964.38 | 11336.10 | 72281.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38803.83 | 43117.80 | 57280.48 | 62913.02 | 64934.22 | 66384.58 | 69113.19 |
| **Latency** | 565µs    | 694µs    | 860µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38789.00 | 6028.16 | 47625.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36676.79 | 39147.24 | 40036.30 | 41065.98 | 42310.85 | 43647.64 | 45807.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13410.01 | 2953.40 | 20434.07 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9138.26 | 12658.73 | 14388.14 | 15012.18 | 15365.37 | 16423.00 | 18947.77 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56087.98 | 13538.75 | 75140.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25577.48 | 58081.59 | 62470.17 | 63738.82 | 64649.26 | 65213.20 | 66804.77 |
| **Latency** | 623µs    | 707µs    | 825µs    | 875µs    | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47864.53 | 10673.72 | 63610.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24690.53 | 50052.93 | 52308.70 | 53509.97 | 54540.55 | 55468.27 | 57712.50 |
| **Latency** | 826µs    | 889µs    | 941µs    | 991µs    | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16444.57 | 3809.55 | 32946.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13203.22 | 14696.18 | 17231.60 | 18833.75 | 20286.26 | 20706.14 | 21656.61 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5575.86  | 1355.68 | 15561.29 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3459.53 | 5648.73 | 6160.29 | 6302.00 | 6407.41 | 6489.87 | 7009.19 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 14ms    | 19ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5859.53  | 1183.54 | 7242.06 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4154.85 | 5376.92 | 6423.84 | 6544.01 | 6626.10 | 6673.86 | 6839.25 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 10ms    | 12ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52342.60 | 13230.82 | 69767.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23827.62 | 52599.30 | 58039.24 | 59667.75 | 61889.62 | 63305.56 | 66547.19 |
| **Latency** | 724µs    | 783µs    | 841µs    | 905µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25664.50 | 5499.54 | 34779.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21652.36 | 26185.84 | 27310.28 | 27969.38 | 28861.20 | 29746.64 | 31100.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45911.55 | 12261.11 | 60213.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24123.82 | 38737.11 | 52714.27 | 53684.56 | 54314.49 | 54915.76 | 56661.08 |
| **Latency** | 831µs    | 892µs    | 946µs    | 992µs    | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50775.91 | 11633.46 | 65226.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24417.93 | 52801.45 | 55517.02 | 56754.93 | 58243.13 | 59243.09 | 60910.09 |
| **Latency** | 774µs    | 829µs    | 883µs    | 940µs    | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31678.93 | 7966.11 | 54874.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20581.37 | 28122.55 | 35393.73 | 36446.59 | 37303.08 | 37804.09 | 39464.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53323.54 | 15463.42 | 72668.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28758.86 | 35189.65 | 62707.48 | 64745.25 | 66179.21 | 67170.07 | 69110.30 |
| **Latency** | 580µs    | 652µs    | 840µs    | 891µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19051.50 | 3717.07 | 25216.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16802.40 | 18309.31 | 20047.39 | 20927.80 | 21683.92 | 22317.82 | 23571.79 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

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
| 54203.70 | 11653.58 | 66840.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28221.70 | 56488.63 | 59026.36 | 59998.93 | 61030.45 | 61614.72 | 63737.54 |
| **Latency** | 734µs    | 788µs    | 838µs    | 890µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30042.14 | 5136.38 | 36312.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28886.63 | 30541.81 | 31254.98 | 31906.36 | 32404.51 | 32933.23 | 34373.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17187.02 | 3734.07 | 23844.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13201.59 | 16316.70 | 18482.78 | 19295.50 | 19908.03 | 20344.76 | 22113.36 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8196.11  | 1587.69 | 18026.38 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6547.18 | 7747.61 | 8667.40 | 8907.80 | 9158.37 | 9439.04 | 11890.60 |
| **Latency** | 3ms     | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 14ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27580.29 | 6114.05 | 63201.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22475.53 | 25200.78 | 29863.64 | 30815.49 | 31595.25 | 32115.99 | 33102.82 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41972.13 | 6936.63 | 53126.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33523.19 | 42937.51 | 44075.45 | 45009.64 | 45995.30 | 46902.32 | 49504.94 |
| **Latency** | 984µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21907.42 | 4524.40 | 28613.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17910.39 | 20601.90 | 23501.81 | 24318.48 | 25080.84 | 25679.92 | 26993.62 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53176.96 | 11035.67 | 74540.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38683.92 | 42731.57 | 56505.02 | 63212.61 | 65433.99 | 67003.99 | 69785.84 |
| **Latency** | 563µs    | 697µs    | 853µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4821.17  | 1564.01 | 7959.80 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2805.02 | 4159.80 | 5382.66 | 5782.28 | 6053.07 | 6323.52 | 7550.62 |
| **Latency** | 6ms     | 7ms     | 10ms    | 12ms    | 15ms    | 20ms    | 26ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54364.94 | 12628.03 | 70385.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25113.82 | 56622.64 | 59540.48 | 60851.92 | 62306.85 | 63578.19 | 65875.10 |
| **Latency** | 716µs    | 773µs    | 829µs    | 884µs    | 1ms      | 2ms      | 2ms      |

---

<p align="center">Generated 2023-07-22T01:45:50.832Z</p>
