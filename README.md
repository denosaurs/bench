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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Deno                                                                                 | 62950.45 | 15698.57 | 74371.76  | 100%     |
| Hyper Express                                                                        | 60475.67 | 16354.70 | 76416.48  | 96%      |
| Bun                                                                                  | 59885.18 | 12322.13 | 85563.78  | 95%      |
| Fast                                                                                 | 56714.57 | 12095.67 | 64602.45  | 90%      |
| NHttp                                                                                | 54963.74 | 11820.33 | 63163.65  | 87%      |
| Hono                                                                                 | 53828.89 | 12774.94 | 62805.39  | 86%      |
| Megalo                                                                               | 51811.78 | 8804.83  | 61073.14  | 82%      |
| Deso                                                                                 | 51521.90 | 12207.89 | 60850.44  | 82%      |
| Fastro                                                                               | 51170.81 | 7948.61  | 74044.05  | 81%      |
| Reno                                                                                 | 45177.11 | 5393.06  | 48564.19  | 72%      |
| http                                                                                 | 37541.21 | 8632.46  | 45148.57  | 60%      |
| Cheetah                                                                              | 36557.15 | 2611.15  | 38824.91  | 58%      |
| Node                                                                                 | 34551.39 | 6052.68  | 37907.60  | 55%      |
| Peko                                                                                 | 32931.36 | 7237.36  | 50359.73  | 52%      |
| Fastify                                                                              | 31293.21 | 5269.79  | 34226.49  | 50%      |
| Alosaur                                                                              | 30296.74 | 6552.58  | 37431.07  | 48%      |
| Router                                                                               | 26495.36 | 4754.36  | 37756.12  | 42%      |
| Little                                                                               | 23500.41 | 4161.87  | 31602.94  | 37%      |
| Aqua                                                                                 | 23295.31 | 3617.09  | 30412.69  | 37%      |
| Oak                                                                                  | 21491.44 | 4938.39  | 80159.25  | 34%      |
| Dinatra                                                                              | 18085.44 | 3739.64  | 35953.46  | 29%      |
| Acorn                                                                                | 16770.09 | 20344.53 | 111111.11 | 27%      |
| Abc                                                                                  | 15603.42 | 3207.57  | 20258.09  | 25%      |
| Opine                                                                                | 9384.76  | 3433.82  | 62110.90  | 15%      |
| Express (Deno)                                                                       | 8425.56  | 1761.97  | 11048.45  | 13%      |
| Express                                                                              | 6597.15  | 1296.23  | 9172.80   | 10%      |
| Servest                                                                              | 5793.50  | 1799.89  | 8544.68   | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-d3856178-156f-4f6f-a270-6ed83499355c) |          |          |           |          |

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
| 15603.42 | 3207.57 | 20258.09 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9648.49 | 15327.78 | 16264.28 | 17709.42 | 18779.56 | 19076.70 | 19694.29 |
| **Latency** | 2ms     | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 16770.09 | 20344.53 | 111111.11 |     |

| **Stat**    | 10    | 25    | 50      | 75       | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48.07 | 61.69 | 7467.92 | 36648.56 | 43776.66 | 51941.36 | 70632.02 |
| **Latency** | 5ms   | 8ms   | 17ms    | 23ms     | 27ms     | 28ms     | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30296.74 | 6552.58 | 37431.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24333.89 | 26823.57 | 32975.49 | 34107.78 | 35145.81 | 35641.15 | 36535.22 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23295.31 | 3617.09 | 30412.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21219.83 | 22431.01 | 23755.25 | 25226.35 | 26427.19 | 27004.99 | 27597.92 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59885.18 | 12322.13 | 85563.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45540.36 | 49581.43 | 62084.46 | 71719.29 | 73408.20 | 74355.05 | 75727.82 |
| **Latency** | 491µs    | 612µs    | 758µs    | 951µs    | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36557.15 | 2611.15 | 38824.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36100.86 | 36539.96 | 37102.73 | 37410.93 | 37704.29 | 37951.37 | 38267.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62950.45 | 15698.57 | 74371.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28960.68 | 64757.63 | 70861.31 | 72186.92 | 72880.68 | 73154.39 | 73758.44 |
| **Latency** | 589µs    | 650µs    | 709µs    | 761µs    | 923µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51521.90 | 12207.89 | 60850.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25018.15 | 55245.59 | 57310.35 | 58225.07 | 58891.72 | 59147.60 | 59567.04 |
| **Latency** | 791µs    | 826µs    | 859µs    | 904µs    | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18085.44 | 3739.64 | 35953.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15289.84 | 16508.41 | 19605.41 | 20184.00 | 20524.13 | 21289.93 | 23189.84 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6597.15  | 1296.23 | 9172.80 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4459.43 | 6809.44 | 7170.89 | 7273.07 | 7344.40 | 7395.89 | 7480.01 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 11ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8425.56  | 1761.97 | 11048.45 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6098.78 | 8089.27 | 9241.83 | 9377.41 | 9465.08 | 9523.17 | 10069.84 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56714.57 | 12095.67 | 64602.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29918.35 | 59884.19 | 62062.35 | 62950.73 | 63505.46 | 63731.60 | 64170.43 |
| **Latency** | 714µs    | 763µs    | 793µs    | 838µs    | 980µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31293.21 | 5269.79 | 34226.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31012.44 | 31833.93 | 32747.02 | 33232.76 | 33481.22 | 33588.87 | 33809.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51170.81 | 7948.61 | 74044.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39417.18 | 52664.69 | 53918.44 | 54698.33 | 55420.83 | 55824.03 | 56246.00 |
| **Latency** | 848µs    | 882µs    | 919µs    | 955µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53828.89 | 12774.94 | 62805.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25745.72 | 56883.16 | 59913.16 | 60903.28 | 61596.85 | 61847.74 | 62335.63 |
| **Latency** | 752µs    | 789µs    | 820µs    | 863µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37541.21 | 8632.46 | 45148.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25348.69 | 34613.35 | 41588.41 | 42620.28 | 43618.98 | 44044.11 | 44546.25 |
| **Latency** | 912µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60475.67 | 16354.70 | 76416.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34884.29 | 39966.89 | 70661.21 | 73115.95 | 74051.25 | 74529.99 | 75240.48 |
| **Latency** | 510µs    | 584µs    | 750µs    | 793µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23500.41 | 4161.87 | 31602.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20910.99 | 22778.26 | 24289.61 | 25694.52 | 26845.39 | 27395.09 | 28220.19 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51811.78 | 8804.83 | 61073.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38518.81 | 54041.93 | 55189.73 | 55864.57 | 56413.66 | 56731.54 | 57242.48 |
| **Latency** | 828µs    | 863µs    | 898µs    | 932µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54963.74 | 11820.33 | 63163.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27940.22 | 58407.89 | 60296.82 | 61110.09 | 61665.10 | 62040.67 | 62567.93 |
| **Latency** | 747µs    | 787µs    | 816µs    | 853µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34551.39 | 6052.68 | 37907.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34053.32 | 35525.43 | 36141.41 | 36774.86 | 37104.29 | 37264.68 | 37428.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21491.44 | 4938.39 | 80159.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18504.54 | 20527.00 | 22893.74 | 23521.91 | 24071.25 | 24972.37 | 26538.77 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9384.76  | 3433.82 | 62110.90 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6704.93 | 8348.80 | 9519.28 | 10039.70 | 11638.65 | 13573.77 | 16440.58 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms      | 6ms      | 7ms      | 12ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32931.36 | 7237.36 | 50359.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26114.15 | 30322.91 | 35876.97 | 36929.03 | 37935.57 | 38415.82 | 39067.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45177.11 | 5393.06 | 48564.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44339.03 | 45706.65 | 46343.66 | 47118.16 | 47514.85 | 47700.90 | 48067.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26495.36 | 4754.36 | 37756.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22818.77 | 24974.44 | 28359.85 | 29116.17 | 29674.66 | 30205.54 | 31037.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5793.50  | 1799.89 | 8544.68 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4020.49 | 4608.83 | 6487.39 | 6992.37 | 7232.07 | 8135.75 | 8379.36 |
| **Latency** | 7ms     | 7ms     | 7ms     | 10ms    | 11ms    | 14ms    | 19ms    |

---

<p align="center">Generated 2023-06-03T01:57:32.682Z</p>
