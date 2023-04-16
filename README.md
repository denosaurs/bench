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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Bun                                                                                  | 67116.70 | 11845.46 | 86972.68  | 100%     |
| Hyper Express                                                                        | 63664.14 | 15655.53 | 88942.12  | 95%      |
| Deno                                                                                 | 47045.11 | 11015.80 | 55398.04  | 70%      |
| Hono                                                                                 | 43475.69 | 7511.56  | 52803.89  | 65%      |
| NHttp                                                                                | 43078.17 | 8845.22  | 53704.51  | 64%      |
| Fast                                                                                 | 42725.73 | 8269.38  | 48873.10  | 64%      |
| Node                                                                                 | 41313.23 | 8557.35  | 46205.13  | 62%      |
| Megalo                                                                               | 41310.43 | 7711.02  | 50209.28  | 62%      |
| Fastro                                                                               | 41155.15 | 8268.31  | 48149.72  | 61%      |
| http                                                                                 | 41121.67 | 9093.53  | 47876.37  | 61%      |
| Deso                                                                                 | 39120.60 | 8178.75  | 51628.33  | 58%      |
| Peko                                                                                 | 39077.78 | 7479.31  | 96916.30  | 58%      |
| Reno                                                                                 | 38055.97 | 6794.06  | 43119.25  | 57%      |
| Alosaur                                                                              | 31095.51 | 7041.04  | 43072.58  | 46%      |
| Fastify                                                                              | 30887.35 | 11314.84 | 40402.46  | 46%      |
| Router                                                                               | 29627.43 | 4545.08  | 34829.04  | 44%      |
| Little                                                                               | 25584.15 | 4243.74  | 29331.06  | 38%      |
| Oak                                                                                  | 24040.82 | 3528.93  | 28534.17  | 36%      |
| Aqua                                                                                 | 23129.23 | 3580.36  | 47477.74  | 34%      |
| Dinatra                                                                              | 20636.53 | 4156.95  | 43216.12  | 31%      |
| Abc                                                                                  | 18391.88 | 2809.82  | 31181.04  | 27%      |
| Opine                                                                                | 9900.80  | 1125.25  | 13912.18  | 15%      |
| Express (Deno)                                                                       | 9516.02  | 1626.85  | 12415.30  | 14%      |
| Express                                                                              | 7976.56  | 1495.54  | 9819.26   | 12%      |
| Servest                                                                              | 6564.02  | 5020.96  | 158731.36 | 10%      |
| Acorn                                                                                | 4494.48  | 5199.00  | 132978.72 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-9624d450-0d09-4b52-9038-f7049e132e34) |          |          |           |          |

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
| 18391.88 | 2809.82 | 31181.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16001.82 | 17486.30 | 19251.45 | 19639.52 | 21130.76 | 21334.76 | 21668.05 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4494.48  | 5199.00 | 132978.72 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2145.95 | 2710.07 | 3427.83 | 4900.88 | 9379.72 | 11209.67 | 13385.56 |
| **Latency** | 3ms     | 5ms     | 11ms    | 16ms    | 20ms    | 21ms     | 22ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31095.51 | 7041.04 | 43072.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21112.00 | 26068.39 | 35261.35 | 35767.64 | 36164.61 | 36630.10 | 37055.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23129.23 | 3580.36 | 47477.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17955.30 | 22150.56 | 24720.50 | 24960.40 | 25183.89 | 25762.79 | 26267.93 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67116.70 | 11845.46 | 86972.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53988.61 | 57861.61 | 63222.21 | 79342.95 | 81119.57 | 82032.10 | 84146.52 |
| **Latency** | 450µs    | 569µs    | 684µs    | 845µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47045.11 | 11015.80 | 55398.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27323.80 | 42319.51 | 52731.17 | 53435.52 | 53869.06 | 54132.43 | 54427.86 |
| **Latency** | 821µs    | 918µs    | 970µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39120.60 | 8178.75 | 51628.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24646.36 | 36552.31 | 43052.58 | 43710.10 | 44061.73 | 44269.31 | 44620.59 |
| **Latency** | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20636.53 | 4156.95 | 43216.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16323.36 | 19851.29 | 20806.48 | 23449.75 | 24501.99 | 24796.24 | 25494.14 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7976.56  | 1495.54 | 9819.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5636.70 | 7702.55 | 8726.71 | 8840.32 | 8903.39 | 8926.34 | 8969.72 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9516.02  | 1626.85 | 12415.30 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8209.61 | 9630.83 | 10142.22 | 10224.39 | 10284.36 | 10331.17 | 11491.90 |
| **Latency** | 3ms     | 5ms     | 5ms      | 5ms      | 6ms      | 6ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42725.73 | 8269.38 | 48873.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33486.51 | 42421.79 | 46375.87 | 46986.63 | 47405.27 | 47647.05 | 48009.70 |
| **Latency** | 917µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 30887.35 | 11314.84 | 40402.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15215.99 | 15714.10 | 38437.32 | 39303.18 | 39723.18 | 39873.00 | 40032.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41155.15 | 8268.31 | 48149.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34268.58 | 40830.58 | 44640.66 | 45275.72 | 45761.35 | 45999.11 | 46238.95 |
| **Latency** | 950µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43475.69 | 7511.56 | 52803.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36704.08 | 43407.87 | 46635.77 | 47225.68 | 47646.79 | 47811.01 | 48109.33 |
| **Latency** | 914µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41121.67 | 9093.53 | 47876.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25180.30 | 37107.87 | 46058.56 | 46485.84 | 46812.54 | 47106.19 | 47434.03 |
| **Latency** | 928µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63664.14 | 15655.53 | 88942.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41670.90 | 47833.55 | 66518.70 | 79304.07 | 81963.16 | 82860.58 | 86001.32 |
| **Latency** | 471µs    | 565µs    | 674µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25584.15 | 4243.74 | 29331.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21604.77 | 24716.33 | 27518.18 | 27845.37 | 28032.29 | 28248.31 | 28810.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41310.43 | 7711.02 | 50209.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35845.93 | 39607.97 | 44535.88 | 45104.11 | 45645.11 | 45887.91 | 46286.89 |
| **Latency** | 948µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43078.17 | 8845.22 | 53704.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28035.92 | 41021.38 | 47411.44 | 47824.74 | 48245.18 | 48559.82 | 49074.11 |
| **Latency** | 902µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41313.23 | 8557.35 | 46205.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26386.84 | 43560.60 | 44385.72 | 45027.07 | 45551.52 | 45768.70 | 46017.54 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24040.82 | 3528.93 | 28534.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22024.55 | 23737.80 | 24910.77 | 25531.72 | 26310.97 | 26549.20 | 26960.75 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9900.80  | 1125.25 | 13912.18 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9433.78 | 9754.81 | 10249.42 | 10299.81 | 10343.92 | 10366.33 | 10905.86 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39077.78 | 7479.31 | 96916.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33806.43 | 38087.39 | 42163.25 | 42445.23 | 42695.26 | 42907.86 | 43242.50 |
| **Latency** | 999µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38055.97 | 6794.06 | 43119.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32732.29 | 39510.34 | 40648.81 | 40945.94 | 41322.30 | 41714.06 | 42018.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29627.43 | 4545.08 | 34829.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26163.08 | 28452.96 | 31592.22 | 31825.07 | 31970.63 | 32082.70 | 32926.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6564.02  | 5020.96 | 158731.36 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4432.89 | 6303.16 | 7005.39 | 7336.98 | 7599.96 | 7787.31 | 8583.15 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 11ms    | 18ms    |

---

<p align="center">Generated 2023-04-16T01:47:15.373Z</p>
