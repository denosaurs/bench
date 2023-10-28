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
| NHttp                                                                                | 51326.15 | 14718.31 | 64809.41  | 100%     |
| Fast                                                                                 | 49606.72 | 14238.44 | 64193.79  | 97%      |
| Hono                                                                                 | 48953.24 | 12267.14 | 59896.71  | 95%      |
| Vixeny (Deno)                                                                        | 48556.55 | 13420.45 | 61991.18  | 95%      |
| Stric                                                                                | 48476.97 | 10832.99 | 79968.86  | 94%      |
| Fastro                                                                               | 47334.82 | 11285.75 | 57907.68  | 92%      |
| Deno                                                                                 | 47025.20 | 13790.89 | 65059.56  | 92%      |
| Bun                                                                                  | 46680.39 | 11244.44 | 68537.14  | 91%      |
| Deso                                                                                 | 46543.67 | 12127.76 | 56906.95  | 91%      |
| Megalo                                                                               | 46043.59 | 12687.19 | 57508.47  | 90%      |
| Hyper Express                                                                        | 45842.29 | 11930.73 | 68027.56  | 89%      |
| Cheetah                                                                              | 41264.76 | 7851.92  | 47380.42  | 80%      |
| Reno                                                                                 | 39864.70 | 7808.17  | 47989.52  | 78%      |
| http                                                                                 | 30652.65 | 6854.41  | 38331.30  | 60%      |
| Node                                                                                 | 29045.96 | 6246.17  | 35228.71  | 57%      |
| Fastify                                                                              | 26214.85 | 6370.59  | 30640.58  | 51%      |
| Alosaur                                                                              | 25563.66 | 6817.28  | 135135.14 | 50%      |
| Router                                                                               | 22139.60 | 4963.62  | 50181.00  | 43%      |
| Aqua                                                                                 | 21073.85 | 4600.98  | 56210.72  | 41%      |
| Little                                                                               | 19411.57 | 4765.02  | 26008.53  | 38%      |
| Oak                                                                                  | 19059.20 | 5645.02  | 113743.72 | 37%      |
| Dinatra                                                                              | 16416.04 | 3924.35  | 35230.07  | 32%      |
| Abc                                                                                  | 15225.47 | 3026.44  | 21828.08  | 30%      |
| Danet (Oak)                                                                          | 14253.41 | 3296.68  | 20940.20  | 28%      |
| Opine                                                                                | 8921.50  | 2745.96  | 35696.40  | 17%      |
| Express (Deno)                                                                       | 8919.24  | 1970.59  | 13913.81  | 17%      |
| Acorn                                                                                | 7139.75  | 9568.16  | 58376.43  | 14%      |
| Servest                                                                              | 5242.78  | 1897.00  | 9135.72   | 10%      |
| Express                                                                              | 4779.60  | 1478.17  | 9507.85   | 9%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-8d48cabd-1e65-4bc4-81a2-6c07f84f054d) |          |          |           |          |

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
| 15225.47 | 3026.44 | 21828.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10812.91 | 14109.27 | 15825.13 | 17280.28 | 18369.01 | 19010.02 | 19641.46 |
| **Latency** | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7139.75  | 9568.16 | 58376.43 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 44.21 | 57.25 | 5651.96 | 8532.93 | 19668.89 | 27921.93 | 44329.97 |
| **Latency** | 6ms   | 8ms   | 19ms    | 26ms    | 31ms     | 33ms     | 40ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 25563.66 | 6817.28 | 135135.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19660.04 | 22445.08 | 27903.45 | 28820.13 | 29542.81 | 29917.30 | 31217.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21073.85 | 4600.98 | 56210.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16010.03 | 19723.44 | 22779.02 | 23700.91 | 24318.93 | 24720.47 | 26303.07 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46680.39 | 11244.44 | 68537.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33001.29 | 37752.45 | 45219.55 | 57471.22 | 61990.46 | 63166.91 | 65094.28 |
| **Latency** | 603µs    | 753µs    | 908µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41264.76 | 7851.92 | 47380.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27115.43 | 42194.50 | 44370.17 | 45654.72 | 46077.81 | 46297.69 | 46916.87 |
| **Latency** | 973µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14253.41 | 3296.68 | 20940.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10025.97 | 13335.55 | 15061.94 | 16252.76 | 16953.66 | 17849.24 | 19836.36 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47025.20 | 13790.89 | 65059.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24737.12 | 35812.91 | 50647.21 | 59300.29 | 62274.48 | 63104.60 | 64083.23 |
| **Latency** | 669µs    | 779µs    | 862µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46543.67 | 12127.76 | 56906.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22298.88 | 41811.33 | 52973.33 | 54864.84 | 55588.08 | 55880.75 | 56503.08 |
| **Latency** | 812µs    | 867µs    | 920µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16416.04 | 3924.35 | 35230.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12614.85 | 14521.23 | 17204.51 | 19062.59 | 20207.72 | 20509.48 | 21168.42 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4779.60  | 1478.17 | 9507.85 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3132.94 | 3752.43 | 5133.69 | 6118.80 | 6290.98 | 6355.30 | 6483.52 |
| **Latency** | 7ms     | 8ms     | 8ms     | 13ms    | 13ms    | 17ms    | 21ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8919.24  | 1970.59 | 13913.81 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6218.30 | 8548.75 | 9622.30 | 10046.44 | 10340.03 | 10579.30 | 10826.93 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 6ms      | 8ms      | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49606.72 | 14238.44 | 64193.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23623.37 | 40259.49 | 57614.71 | 59831.44 | 61267.49 | 61647.01 | 62400.96 |
| **Latency** | 725µs    | 785µs    | 846µs    | 937µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26214.85 | 6370.59 | 30640.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13308.44 | 27371.79 | 28619.25 | 29546.47 | 29747.08 | 29840.66 | 30023.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47334.82 | 11285.75 | 57907.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24306.39 | 45647.81 | 52584.71 | 54572.18 | 55779.36 | 56248.21 | 57151.28 |
| **Latency** | 799µs    | 860µs    | 913µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48953.24 | 12267.14 | 59896.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22972.70 | 48253.58 | 54666.85 | 56367.80 | 57503.14 | 58134.47 | 59099.91 |
| **Latency** | 778µs    | 833µs    | 883µs    | 988µs    | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30652.65 | 6854.41 | 38331.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22257.01 | 27104.71 | 33824.12 | 35190.43 | 36090.70 | 36475.33 | 37233.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45842.29 | 11930.73 | 68027.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30906.06 | 33852.99 | 46155.28 | 55645.47 | 62811.56 | 64543.29 | 66387.39 |
| **Latency** | 624µs    | 757µs    | 916µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19411.57 | 4765.02 | 26008.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13206.70 | 18836.19 | 20841.15 | 22306.13 | 22949.21 | 23307.29 | 24784.27 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 8ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46043.59 | 12687.19 | 57508.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21923.59 | 42262.07 | 52541.90 | 54394.37 | 55470.41 | 56037.26 | 56855.27 |
| **Latency** | 806µs    | 860µs    | 920µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51326.15 | 14718.31 | 64809.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23535.66 | 42145.31 | 59317.50 | 61816.82 | 63024.27 | 63591.74 | 64352.87 |
| **Latency** | 698µs    | 751µs    | 821µs    | 906µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29045.96 | 6246.17 | 35228.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22446.81 | 29607.85 | 31076.92 | 32021.61 | 33165.83 | 33611.60 | 34109.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 19059.20 | 5645.02 | 113743.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12589.24 | 17851.91 | 20826.36 | 21752.17 | 22382.05 | 22822.35 | 24581.88 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8921.50  | 2745.96 | 35696.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6234.20 | 7331.49 | 8894.75 | 9822.89 | 12393.51 | 13390.00 | 14622.06 |
| **Latency** | 3ms     | 5ms     | 5ms     | 6ms     | 7ms      | 8ms      | 14ms     |

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
| 39864.70 | 7808.17 | 47989.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27443.51 | 39501.80 | 43003.09 | 44223.02 | 45052.54 | 45425.69 | 46104.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22139.60 | 4963.62 | 50181.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17410.66 | 20758.64 | 23907.03 | 24986.37 | 25667.87 | 26220.33 | 28206.65 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48476.97 | 10832.99 | 79968.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34896.52 | 38834.98 | 48157.59 | 59100.95 | 62240.82 | 63235.16 | 64976.87 |
| **Latency** | 592µs    | 748µs    | 885µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5242.78  | 1897.00 | 9135.72 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2529.20 | 4342.76 | 5829.71 | 6472.87 | 6862.65 | 7134.72 | 8731.27 |
| **Latency** | 5ms     | 6ms     | 9ms     | 11ms    | 15ms    | 19ms    | 25ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48556.55 | 13420.45 | 61991.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22902.20 | 41778.22 | 55074.91 | 58376.64 | 59645.08 | 60081.27 | 61000.97 |
| **Latency** | 743µs    | 799µs    | 870µs    | 975µs    | 1ms      | 2ms      | 2ms      |

---

<p align="center">Generated 2023-10-28T01:22:30.864Z</p>
