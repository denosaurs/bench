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
| NHttp                                                                                | 37619.50 | 10437.36 | 50873.13 | 100%     |
| Bun                                                                                  | 35138.36 | 12731.88 | 55629.48 | 93%      |
| Deno                                                                                 | 35011.86 | 11162.43 | 50762.44 | 93%      |
| Stric                                                                                | 35008.22 | 10240.88 | 54284.70 | 93%      |
| Vixeny (Deno)                                                                        | 34200.17 | 10560.03 | 50904.42 | 91%      |
| Hono                                                                                 | 33953.64 | 8892.36  | 45484.30 | 90%      |
| Fast                                                                                 | 33406.99 | 10037.04 | 48440.22 | 89%      |
| Hyper Express                                                                        | 32508.88 | 11470.87 | 52469.40 | 86%      |
| Fastro                                                                               | 32197.31 | 8757.57  | 44944.30 | 86%      |
| Deso                                                                                 | 29770.52 | 9194.75  | 44624.99 | 79%      |
| Cheetah                                                                              | 29628.77 | 7200.76  | 39402.41 | 79%      |
| Megalo                                                                               | 28106.86 | 7709.94  | 40446.02 | 75%      |
| Reno                                                                                 | 27692.15 | 6546.63  | 37279.43 | 74%      |
| http                                                                                 | 23742.59 | 6008.18  | 31665.46 | 63%      |
| Alosaur                                                                              | 19642.56 | 4487.85  | 26971.38 | 52%      |
| Router                                                                               | 17326.56 | 3334.67  | 25332.35 | 46%      |
| Aqua                                                                                 | 16520.29 | 3595.94  | 23504.41 | 44%      |
| Little                                                                               | 14178.77 | 3031.50  | 20213.69 | 38%      |
| Node                                                                                 | 14050.46 | 3644.07  | 19248.11 | 37%      |
| Fastify                                                                              | 13953.24 | 2781.11  | 17777.16 | 37%      |
| Oak                                                                                  | 13029.88 | 3073.07  | 26686.34 | 35%      |
| Dinatra                                                                              | 11106.63 | 2516.06  | 21505.15 | 30%      |
| Abc                                                                                  | 9636.25  | 1866.47  | 15403.78 | 26%      |
| Danet (Oak)                                                                          | 7838.75  | 3117.55  | 19485.76 | 21%      |
| Opine                                                                                | 6291.42  | 2214.89  | 50730.00 | 17%      |
| Express (Deno)                                                                       | 5959.82  | 1313.04  | 10809.10 | 16%      |
| Acorn                                                                                | 4682.32  | 6765.78  | 91239.21 | 12%      |
| Servest                                                                              | 3974.38  | 1318.24  | 6780.06  | 11%      |
| Express                                                                              | 3825.38  | 994.12   | 10789.52 | 10%      |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-6043178e-6827-4b19-88db-001e8fe995e3) |          |          |          |          |

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
| 9636.25  | 1866.47 | 15403.78 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7025.01 | 8657.48 | 10130.20 | 11080.71 | 11426.53 | 11676.10 | 12308.62 |
| **Latency** | 3ms     | 3ms     | 4ms      | 6ms      | 7ms      | 8ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4682.32  | 6765.78 | 91239.21 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 49.03 | 76.07 | 3965.31 | 6034.42 | 10332.49 | 12337.09 | 35601.47 |
| **Latency** | 9ms   | 11ms  | 21ms    | 26ms    | 30ms     | 33ms     | 52ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19642.56 | 4487.85 | 26971.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14528.34 | 17909.31 | 21382.34 | 22430.49 | 23210.25 | 23732.53 | 24800.74 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16520.29 | 3595.94 | 23504.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12625.13 | 15383.84 | 17588.83 | 18736.17 | 19516.40 | 19966.97 | 21201.93 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35138.36 | 12731.88 | 55629.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18050.18 | 22517.77 | 38302.26 | 46791.98 | 49891.00 | 51152.43 | 53053.89 |
| **Latency** | 734µs    | 890µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29628.77 | 7200.76 | 39402.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15653.27 | 26990.18 | 32595.22 | 34731.30 | 35950.01 | 36435.02 | 37828.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7838.75  | 3117.55 | 19485.76 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 3837.60 | 5156.07 | 8678.37 | 10211.69 | 10901.96 | 11772.59 | 13446.12 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms      | 11ms     | 12ms     | 19ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35011.86 | 11162.43 | 50762.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16813.28 | 26371.73 | 37093.42 | 44826.90 | 47552.31 | 48403.39 | 49702.69 |
| **Latency** | 924µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29770.52 | 9194.75 | 44624.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15183.42 | 23335.93 | 32566.72 | 37095.70 | 39377.63 | 40422.63 | 41692.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11106.63 | 2516.06 | 21505.15 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8237.89 | 10037.94 | 11370.33 | 12864.28 | 13803.75 | 14062.48 | 14604.53 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3825.38  | 994.12 | 10789.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2347.35 | 3538.18 | 4212.81 | 4403.39 | 4551.43 | 4644.07 | 4848.83 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 17ms    | 21ms    | 27ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5959.82  | 1313.04 | 10809.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4208.76 | 5464.44 | 6410.07 | 6729.33 | 7057.17 | 7321.56 | 7773.10 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 10ms    | 12ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 33406.99 | 10037.04 | 48440.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16799.84 | 28213.99 | 34904.37 | 41731.05 | 44284.23 | 45352.63 | 46866.33 |
| **Latency** | 999µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13953.24 | 2781.11 | 17777.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10761.88 | 14139.17 | 14911.19 | 15362.37 | 15705.34 | 15943.85 | 16610.80 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32197.31 | 8757.57 | 44944.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16051.54 | 28293.38 | 34315.17 | 39117.23 | 41120.17 | 41968.85 | 43337.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33953.64 | 8892.36 | 45484.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16614.46 | 30881.84 | 37749.08 | 40214.63 | 41784.44 | 42600.45 | 43851.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23742.59 | 6008.18 | 31665.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14738.62 | 21419.77 | 26429.12 | 27646.42 | 28501.80 | 28877.32 | 30109.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 32508.88 | 11470.87 | 52469.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15609.92 | 21889.42 | 34550.30 | 41439.38 | 47145.65 | 49673.97 | 51517.02 |
| **Latency** | 797µs    | 968µs    | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14178.77 | 3031.50 | 20213.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10463.08 | 13093.09 | 14921.82 | 16252.45 | 16893.69 | 17219.31 | 18524.52 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28106.86 | 7709.94 | 40446.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15059.03 | 24961.66 | 29507.68 | 34288.13 | 36511.09 | 37595.12 | 39090.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37619.50 | 10437.36 | 50873.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17434.68 | 32536.01 | 42043.87 | 45692.84 | 47167.43 | 47920.77 | 49134.10 |
| **Latency** | 934µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14050.46 | 3644.07 | 19248.11 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8713.01 | 12137.63 | 13079.92 | 17404.35 | 18003.06 | 18302.20 | 18820.33 |
| **Latency** | 2ms     | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      | 9ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13029.88 | 3073.07 | 26686.34 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9519.26 | 11879.48 | 13875.35 | 14737.65 | 15571.18 | 16791.30 | 18715.96 |
| **Latency** | 2ms     | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6291.42  | 2214.89 | 50730.00 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4730.53 | 5895.46 | 6575.11 | 6888.88 | 7134.29 | 7339.38 | 10574.67 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 10ms    | 11ms    | 19ms     |

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
| 27692.15 | 6546.63 | 37279.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15376.52 | 24945.44 | 30328.22 | 32278.90 | 33609.09 | 34129.71 | 35518.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17326.56 | 3334.67 | 25332.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13501.40 | 16009.83 | 18365.49 | 19360.22 | 20000.01 | 20551.52 | 21879.87 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35008.22 | 10240.88 | 54284.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21574.44 | 26897.70 | 35733.82 | 44263.64 | 47941.88 | 49023.13 | 50943.01 |
| **Latency** | 764µs    | 949µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3974.38  | 1318.24 | 6780.06 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2100.95 | 3558.54 | 4391.42 | 4756.47 | 5159.33 | 5558.02 | 6063.49 |
| **Latency** | 7ms     | 9ms     | 12ms    | 15ms    | 20ms    | 24ms    | 31ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 34200.17 | 10560.03 | 50904.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17010.89 | 26972.63 | 35820.67 | 43602.19 | 45769.38 | 46714.02 | 48310.16 |
| **Latency** | 959µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

---

<p align="center">Generated 2023-10-30T01:25:43.516Z</p>
