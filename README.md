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
| Deno                                                                                 | 67335.51 | 14558.70 | 77333.94 | 100%     |
| NHttp                                                                                | 64948.45 | 14057.50 | 74037.68 | 96%      |
| Fast                                                                                 | 62561.65 | 13555.96 | 71150.68 | 93%      |
| Bun                                                                                  | 62318.43 | 10453.23 | 80492.41 | 93%      |
| Hono                                                                                 | 61629.20 | 13143.90 | 70388.56 | 92%      |
| Fastro                                                                               | 59737.91 | 13989.74 | 69535.51 | 89%      |
| Deso                                                                                 | 58589.15 | 12882.82 | 66628.58 | 87%      |
| Hyper Express                                                                        | 56708.40 | 16003.00 | 77777.99 | 84%      |
| Megalo                                                                               | 55887.21 | 12759.65 | 64778.23 | 83%      |
| Reno                                                                                 | 48473.09 | 7715.31  | 53731.15 | 72%      |
| http                                                                                 | 38915.10 | 7804.88  | 47113.76 | 58%      |
| Cheetah                                                                              | 38848.28 | 5639.30  | 41278.06 | 58%      |
| Node                                                                                 | 35490.59 | 6193.34  | 39619.21 | 53%      |
| Peko                                                                                 | 35104.60 | 6649.66  | 44052.40 | 52%      |
| Fastify                                                                              | 31436.95 | 5692.25  | 34288.08 | 47%      |
| Alosaur                                                                              | 31304.79 | 6382.66  | 38741.68 | 46%      |
| Router                                                                               | 27296.99 | 4187.46  | 31850.68 | 41%      |
| Aqua                                                                                 | 23324.96 | 3613.20  | 28263.87 | 35%      |
| Little                                                                               | 23145.41 | 4510.86  | 30875.47 | 34%      |
| Oak                                                                                  | 21584.35 | 4027.78  | 26757.76 | 32%      |
| Dinatra                                                                              | 19259.46 | 3776.71  | 41840.42 | 29%      |
| Abc                                                                                  | 16897.75 | 2755.99  | 20532.60 | 25%      |
| Opine                                                                                | 9742.90  | 1572.98  | 13368.64 | 14%      |
| Express (Deno)                                                                       | 8760.12  | 1719.61  | 11368.13 | 13%      |
| Express                                                                              | 6520.65  | 1327.88  | 10837.08 | 10%      |
| Acorn                                                                                | 6111.17  | 8207.08  | 71047.12 | 9%       |
| Servest                                                                              | 5760.32  | 1636.19  | 8587.09  | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-897a2b2b-b6fe-4e7e-a50a-f5773f4c8b38) |          |          |          |          |

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
| 16897.75 | 2755.99 | 20532.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15120.56 | 16586.70 | 17106.68 | 18470.86 | 19492.57 | 19981.75 | 20371.66 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6111.17  | 8207.08 | 71047.12 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 81.85 | 2002.14 | 2880.81 | 5838.29 | 22273.53 | 22757.21 | 23573.07 |
| **Latency** | 5ms   | 7ms     | 16ms    | 22ms    | 27ms     | 28ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31304.79 | 6382.66 | 38741.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25263.95 | 29625.51 | 33809.10 | 34804.50 | 35282.74 | 35547.80 | 36119.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23324.96 | 3613.20 | 28263.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22104.83 | 22767.91 | 24206.76 | 24953.27 | 25638.13 | 26070.50 | 26553.36 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62318.43 | 10453.23 | 80492.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50082.54 | 53506.49 | 62454.91 | 72562.99 | 74145.12 | 75104.36 | 77632.54 |
| **Latency** | 484µs    | 607µs    | 752µs    | 873µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38848.28 | 5639.30 | 41278.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39293.37 | 40191.67 | 40480.46 | 40649.54 | 40803.15 | 40930.96 | 41139.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67335.51 | 14558.70 | 77333.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32187.29 | 70279.64 | 73839.80 | 74946.50 | 75717.98 | 76108.62 | 76667.06 |
| **Latency** | 521µs    | 590µs    | 707µs    | 744µs    | 833µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58589.15 | 12882.82 | 66628.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28441.03 | 62021.96 | 64558.73 | 65192.57 | 65831.58 | 66113.47 | 66506.60 |
| **Latency** | 708µs    | 730µs    | 753µs    | 802µs    | 949µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19259.46 | 3776.71 | 41840.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16906.74 | 18000.52 | 20406.27 | 21303.39 | 21814.16 | 22077.72 | 24312.10 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6520.65  | 1327.88 | 10837.08 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4411.20 | 6649.67 | 7092.19 | 7220.86 | 7324.97 | 7382.90 | 7433.67 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 11ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8760.12  | 1719.61 | 11368.13 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6933.53 | 8520.73 | 9517.36 | 9657.89 | 9714.92 | 9736.46 | 10006.46 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 13ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62561.65 | 13555.96 | 71150.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30816.31 | 65819.60 | 68610.66 | 69322.83 | 69754.70 | 69969.34 | 70239.73 |
| **Latency** | 670µs    | 696µs    | 713µs    | 740µs    | 876µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31436.95 | 5692.25 | 34288.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30656.06 | 32362.74 | 33083.73 | 33570.45 | 33789.50 | 33908.09 | 34054.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59737.91 | 13989.74 | 69535.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28332.02 | 63213.20 | 66703.25 | 67450.33 | 68021.67 | 68302.36 | 68910.09 |
| **Latency** | 690µs    | 717µs    | 734µs    | 762µs    | 949µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61629.20 | 13143.90 | 70388.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32670.53 | 65087.79 | 67305.39 | 68264.79 | 68981.42 | 69307.15 | 69863.12 |
| **Latency** | 667µs    | 705µs    | 728µs    | 760µs    | 885µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38915.10 | 7804.88 | 47113.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32543.90 | 36595.01 | 42363.35 | 43209.04 | 43914.01 | 44141.45 | 44472.01 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56708.40 | 16003.00 | 77777.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34206.49 | 40257.12 | 60828.22 | 72029.17 | 73428.62 | 74013.31 | 75709.06 |
| **Latency** | 517µs    | 611µs    | 756µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23145.41 | 4510.86 | 30875.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17061.41 | 22563.39 | 24164.62 | 26079.31 | 26433.68 | 26703.63 | 27284.56 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55887.21 | 12759.65 | 64778.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27289.79 | 58735.76 | 62229.18 | 62825.58 | 63198.37 | 63508.82 | 64114.67 |
| **Latency** | 747µs    | 767µs    | 789µs    | 818µs    | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64948.45 | 14057.50 | 74037.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30931.74 | 68521.29 | 71045.57 | 71770.98 | 72235.32 | 72503.55 | 73225.13 |
| **Latency** | 633µs    | 675µs    | 696µs    | 727µs    | 822µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35490.59 | 6193.34 | 39619.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34587.12 | 36490.09 | 37189.59 | 37805.63 | 38138.48 | 38350.58 | 38841.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21584.35 | 4027.78 | 26757.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20038.04 | 20940.89 | 22616.26 | 23368.70 | 24237.07 | 24521.50 | 26189.10 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9742.90  | 1572.98 | 13368.64 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8294.89 | 9629.55 | 10128.67 | 10380.22 | 10562.41 | 11300.13 | 12311.56 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 9ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35104.60 | 6649.66 | 44052.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31031.79 | 33206.38 | 37938.67 | 38711.59 | 39015.19 | 39237.42 | 39655.43 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48473.09 | 7715.31 | 53731.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38187.11 | 50491.34 | 51208.70 | 51821.24 | 52262.00 | 52437.90 | 52773.89 |
| **Latency** | 927µs    | 948µs    | 962µs    | 984µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27296.99 | 4187.46 | 31850.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25193.74 | 26125.38 | 28853.96 | 29504.72 | 29781.14 | 30061.68 | 30453.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5760.32  | 1636.19 | 8587.09 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4620.46 | 5049.02 | 6314.20 | 6744.19 | 7051.88 | 7141.20 | 7788.22 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 15ms    | 18ms    |

---

<p align="center">Generated 2023-05-09T01:43:54.106Z</p>
