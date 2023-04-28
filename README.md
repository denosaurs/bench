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
| Bun                                                                                  | 44004.10 | 10104.49 | 62426.99 | 100%     |
| Hyper Express                                                                        | 41407.72 | 15668.37 | 63544.28 | 94%      |
| Deno                                                                                 | 32245.82 | 8736.54  | 44064.96 | 73%      |
| NHttp                                                                                | 29680.39 | 7197.19  | 61295.44 | 67%      |
| Hono                                                                                 | 29677.20 | 6518.36  | 38124.17 | 67%      |
| http                                                                                 | 29588.61 | 7099.68  | 37583.72 | 67%      |
| Fast                                                                                 | 28478.78 | 7783.30  | 39225.23 | 65%      |
| Megalo                                                                               | 28202.76 | 6411.80  | 38326.67 | 64%      |
| Fastro                                                                               | 27426.51 | 6196.84  | 37346.28 | 62%      |
| Deso                                                                                 | 26906.93 | 7339.34  | 77476.05 | 61%      |
| Peko                                                                                 | 25798.48 | 5656.90  | 44914.55 | 59%      |
| Reno                                                                                 | 24724.70 | 5682.76  | 33928.55 | 56%      |
| Alosaur                                                                              | 22995.24 | 4973.64  | 41862.07 | 52%      |
| Router                                                                               | 19476.63 | 3597.36  | 24607.19 | 44%      |
| Aqua                                                                                 | 17090.99 | 3017.44  | 22720.54 | 39%      |
| Little                                                                               | 16671.92 | 3187.50  | 30518.51 | 38%      |
| Node                                                                                 | 15076.86 | 3040.14  | 19138.86 | 34%      |
| Fastify                                                                              | 13888.88 | 2575.82  | 16784.83 | 32%      |
| Oak                                                                                  | 13629.71 | 2975.71  | 67048.85 | 31%      |
| Dinatra                                                                              | 11135.02 | 2347.24  | 20457.07 | 25%      |
| Abc                                                                                  | 9534.23  | 1732.97  | 15321.60 | 22%      |
| Opine                                                                                | 5675.43  | 2158.23  | 53594.88 | 13%      |
| Express (Deno)                                                                       | 5432.18  | 1257.04  | 13508.57 | 12%      |
| Acorn                                                                                | 4102.64  | 4105.01  | 71224.39 | 9%       |
| Express                                                                              | 3853.14  | 1050.85  | 20142.96 | 9%       |
| Servest                                                                              | 3637.00  | 1901.56  | 54426.67 | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-088d9e3d-71aa-4d44-9585-a8d84d6f6295) |          |          |          |          |

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
| 9534.23  | 1732.97 | 15321.60 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7429.08 | 8822.36 | 10208.51 | 10599.84 | 10870.92 | 11040.56 | 11609.57 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4102.64  | 4105.01 | 71224.39 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1743.74 | 2400.11 | 3108.14 | 5493.30 | 7390.59 | 9066.69 | 12954.20 |
| **Latency** | 6ms     | 7ms     | 13ms    | 19ms    | 22ms    | 25ms    | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22995.24 | 4973.64 | 41862.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16193.87 | 22279.14 | 24991.87 | 25978.83 | 26610.77 | 26909.60 | 27832.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17090.99 | 3017.44 | 22720.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14211.45 | 16204.58 | 17951.13 | 18833.41 | 19407.81 | 19793.17 | 20586.40 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44004.10 | 10104.49 | 62426.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31903.26 | 37482.73 | 43110.88 | 53240.00 | 56638.64 | 57681.46 | 59698.02 |
| **Latency** | 638µs    | 793µs    | 978µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32245.82 | 8736.54 | 44064.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18065.53 | 28247.10 | 36432.49 | 38077.20 | 39125.47 | 39826.67 | 40825.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26906.93 | 7339.34 | 77476.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15329.38 | 24338.37 | 30299.47 | 31515.09 | 32164.10 | 32683.45 | 33811.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11135.02 | 2347.24 | 20457.07 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8538.02 | 10341.81 | 11426.97 | 12741.79 | 13471.30 | 13733.83 | 14309.83 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3853.14  | 1050.85 | 20142.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2622.55 | 3562.17 | 4140.76 | 4312.22 | 4402.20 | 4455.38 | 4771.88 |
| **Latency** | 11ms    | 11ms    | 11ms    | 13ms    | 16ms    | 19ms    | 25ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5432.18  | 1257.04 | 13508.57 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3994.57 | 5179.38 | 5775.24 | 6029.25 | 6246.52 | 6464.16 | 7892.61 |
| **Latency** | 7ms     | 8ms     | 8ms     | 9ms     | 11ms    | 13ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28478.78 | 7783.30 | 39225.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14813.50 | 25191.86 | 32136.42 | 33522.55 | 34234.68 | 34773.94 | 35579.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13888.88 | 2575.82 | 16784.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10882.86 | 14015.47 | 14723.21 | 15163.44 | 15491.77 | 15706.97 | 16032.12 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27426.51 | 6196.84 | 37346.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17909.15 | 25047.58 | 30181.02 | 31279.14 | 31978.25 | 32415.44 | 33085.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29677.20 | 6518.36 | 38124.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21336.14 | 28225.79 | 32485.79 | 33510.66 | 34372.78 | 34825.31 | 36024.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29588.61 | 7099.68 | 37583.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17912.58 | 27755.25 | 33005.99 | 33916.33 | 34617.08 | 35053.71 | 36184.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41407.72 | 15668.37 | 63544.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16004.82 | 27371.65 | 46372.86 | 55547.84 | 58179.19 | 58959.45 | 61175.04 |
| **Latency** | 640µs    | 786µs    | 941µs    | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16671.92 | 3187.50 | 30518.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12963.14 | 15720.13 | 17684.15 | 18541.08 | 19197.97 | 19513.80 | 20244.81 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28202.76 | 6411.80 | 38326.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18601.69 | 25868.05 | 31109.22 | 32109.88 | 32868.18 | 33318.02 | 34046.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29680.39 | 7197.19 | 61295.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19209.42 | 26972.71 | 32895.42 | 34197.85 | 35006.37 | 35523.89 | 36526.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15076.86 | 3040.14 | 19138.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11253.01 | 15250.17 | 16038.33 | 16567.59 | 17105.47 | 17429.50 | 18020.90 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13629.71 | 2975.71 | 67048.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10792.29 | 13005.08 | 14223.03 | 15034.89 | 15678.58 | 16012.28 | 16669.25 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5675.43  | 2158.23 | 53594.88 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4288.65 | 5326.81 | 5833.72 | 6128.94 | 6409.07 | 6636.78 | 10348.14 |
| **Latency** | 7ms     | 8ms     | 8ms     | 9ms     | 10ms    | 12ms    | 17ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25798.48 | 5656.90 | 44914.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18485.23 | 24308.52 | 28100.58 | 29235.97 | 29847.47 | 30151.00 | 31082.42 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24724.70 | 5682.76 | 33928.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16419.00 | 23617.22 | 27204.91 | 28097.01 | 28831.52 | 29167.15 | 29832.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19476.63 | 3597.36 | 24607.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15686.93 | 18362.71 | 20752.25 | 21597.86 | 22238.58 | 22647.57 | 23335.04 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3637.00  | 1901.56 | 54426.67 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1939.31 | 3416.68 | 3853.12 | 4155.31 | 4514.30 | 4655.82 | 4983.17 |
| **Latency** | 11ms    | 12ms    | 12ms    | 15ms    | 18ms    | 21ms    | 28ms    |

---

<p align="center">Generated 2023-04-28T01:43:55.162Z</p>
