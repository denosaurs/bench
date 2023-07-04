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
| Deno                                                                                 | 43723.62 | 11833.75 | 59113.74  | 100%     |
| Hyper Express                                                                        | 43719.05 | 16394.95 | 68721.48  | 100%     |
| Vixeny (Deno)                                                                        | 42342.99 | 11510.12 | 58861.08  | 97%      |
| Stric                                                                                | 42252.68 | 12491.83 | 64537.95  | 97%      |
| Bun                                                                                  | 40380.84 | 13933.81 | 64392.46  | 92%      |
| NHttp                                                                                | 39013.13 | 11078.90 | 54529.21  | 89%      |
| Fast                                                                                 | 37023.63 | 11758.29 | 57716.29  | 85%      |
| Hono                                                                                 | 36966.22 | 10377.22 | 53154.66  | 85%      |
| Deso                                                                                 | 34616.63 | 8758.10  | 45391.31  | 79%      |
| Reno                                                                                 | 31790.89 | 5773.75  | 40068.08  | 73%      |
| http                                                                                 | 26725.50 | 6559.02  | 34900.79  | 61%      |
| Cheetah                                                                              | 22821.83 | 3054.85  | 28469.01  | 52%      |
| Peko                                                                                 | 20790.14 | 5593.81  | 48993.53  | 48%      |
| Alosaur                                                                              | 20109.67 | 6112.15  | 142346.22 | 46%      |
| Router                                                                               | 18159.08 | 3756.52  | 62621.70  | 42%      |
| Node                                                                                 | 18042.95 | 3647.95  | 24665.42  | 41%      |
| Aqua                                                                                 | 16007.14 | 3118.86  | 23702.73  | 37%      |
| Fastify                                                                              | 14840.10 | 2867.66  | 18915.17  | 34%      |
| Little                                                                               | 14757.32 | 3125.59  | 24190.04  | 34%      |
| Oak                                                                                  | 13975.58 | 5308.39  | 139860.14 | 32%      |
| Dinatra                                                                              | 11329.96 | 2530.21  | 26953.45  | 26%      |
| Abc                                                                                  | 9608.06  | 1818.04  | 15280.01  | 22%      |
| Danet (Oak)                                                                          | 9221.90  | 4852.29  | 123075.66 | 21%      |
| Opine                                                                                | 5927.38  | 1726.19  | 29702.68  | 14%      |
| Express (Deno)                                                                       | 5479.72  | 1269.34  | 7697.61   | 13%      |
| Acorn                                                                                | 5453.16  | 8310.77  | 109878.04 | 12%      |
| Express                                                                              | 3891.41  | 1014.03  | 13747.71  | 9%       |
| Servest                                                                              | 3865.48  | 1216.83  | 11440.19  | 9%       |
| Fastro                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-96429123-87bc-48ab-8528-3b08712c4d0d) |          |          |           |          |

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
| 9608.06  | 1818.04 | 15280.01 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6839.26 | 8654.35 | 10244.48 | 10870.14 | 11280.32 | 11513.72 | 11981.27 |
| **Latency** | 3ms     | 3ms     | 4ms      | 6ms      | 7ms      | 8ms      | 12ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5453.16  | 8310.77 | 109878.04 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 49.94 | 64.98 | 4773.01 | 7702.18 | 11463.71 | 14516.78 | 46146.32 |
| **Latency** | 8ms   | 10ms  | 19ms    | 25ms    | 29ms     | 31ms     | 35ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 20109.67 | 6112.15 | 142346.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14078.26 | 18118.68 | 21686.34 | 22964.11 | 23883.21 | 24585.49 | 26369.91 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16007.14 | 3118.86 | 23702.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12762.41 | 14783.20 | 16764.07 | 17846.61 | 18806.61 | 19627.62 | 20915.87 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40380.84 | 13933.81 | 64392.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20708.94 | 26941.62 | 43720.22 | 53441.56 | 55802.10 | 57222.99 | 59197.22 |
| **Latency** | 648µs    | 813µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22821.83 | 3054.85 | 28469.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19969.89 | 22103.47 | 23368.08 | 24535.08 | 25500.94 | 26175.23 | 27208.08 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9221.90  | 4852.29 | 123075.66 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6004.33 | 7801.73 | 9264.86 | 10300.67 | 11628.51 | 12978.59 | 15222.05 |
| **Latency** | 3ms     | 4ms     | 5ms     | 6ms      | 7ms      | 8ms      | 13ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43723.62 | 11833.75 | 59113.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19307.57 | 40675.82 | 48536.99 | 52126.70 | 53823.27 | 54698.73 | 56540.66 |
| **Latency** | 780µs    | 876µs    | 984µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34616.63 | 8758.10 | 45391.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17501.60 | 32312.33 | 38443.12 | 40460.70 | 41774.01 | 42542.19 | 43939.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11329.96 | 2530.21 | 26953.45 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8736.80 | 10331.73 | 11543.76 | 12920.19 | 13973.16 | 14334.56 | 15428.86 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3891.41  | 1014.03 | 13747.71 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2608.90 | 3582.37 | 4189.58 | 4416.97 | 4621.45 | 4783.77 | 5242.63 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 17ms    | 19ms    | 24ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5479.72  | 1269.34 | 7697.61 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3672.25 | 4868.46 | 5933.59 | 6286.66 | 6617.95 | 6830.26 | 7343.40 |
| **Latency** | 6ms     | 7ms     | 8ms     | 9ms     | 12ms    | 14ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37023.63 | 11758.29 | 57716.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17208.11 | 29471.86 | 41524.19 | 45929.97 | 48634.17 | 49772.85 | 51562.16 |
| **Latency** | 888µs    | 978µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14840.10 | 2867.66 | 18915.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11716.31 | 14615.08 | 15633.17 | 16371.90 | 16940.69 | 17266.68 | 18181.31 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      | 8ms      |

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
| 36966.22 | 10377.22 | 53154.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17543.72 | 32018.01 | 40582.30 | 44316.07 | 47154.71 | 48433.56 | 50565.95 |
| **Latency** | 902µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26725.50 | 6559.02 | 34900.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18070.68 | 24513.55 | 28557.72 | 31031.42 | 32650.37 | 33411.01 | 34380.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43719.05 | 16394.95 | 68721.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16982.41 | 29566.90 | 49918.60 | 57391.12 | 60957.46 | 62871.47 | 65511.56 |
| **Latency** | 598µs    | 741µs    | 906µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14757.32 | 3125.59 | 24190.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11330.78 | 13840.72 | 15455.06 | 16524.11 | 17619.33 | 18158.41 | 19640.98 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

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
| 39013.13 | 11078.90 | 54529.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18476.90 | 34147.17 | 43064.26 | 47002.80 | 49433.72 | 50768.71 | 52388.71 |
| **Latency** | 872µs    | 973µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18042.95 | 3647.95 | 24665.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13732.27 | 17605.50 | 19018.68 | 20123.99 | 20954.53 | 21439.07 | 22727.10 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 13975.58 | 5308.39 | 139860.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10017.97 | 12909.42 | 14437.11 | 15661.42 | 16773.25 | 17331.07 | 19003.31 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5927.38  | 1726.19 | 29702.68 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4245.41 | 5471.73 | 6153.66 | 6573.93 | 7028.34 | 7494.40 | 10135.57 |
| **Latency** | 6ms     | 7ms     | 8ms     | 9ms     | 10ms    | 12ms    | 17ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20790.14 | 5593.81 | 48993.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12934.12 | 18270.50 | 22515.09 | 24600.54 | 25861.76 | 26406.52 | 28268.98 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31790.89 | 5773.75 | 40068.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25127.70 | 30566.70 | 33314.73 | 35274.50 | 36749.32 | 37503.45 | 38423.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18159.08 | 3756.52 | 62621.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14590.64 | 16947.15 | 18788.72 | 20076.53 | 21300.83 | 21849.70 | 23722.25 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42252.68 | 12491.83 | 64537.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24286.64 | 31329.46 | 43688.14 | 53823.80 | 57702.13 | 59406.07 | 61679.30 |
| **Latency** | 625µs    | 789µs    | 983µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3865.48  | 1216.83 | 11440.19 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2271.01 | 3390.89 | 4186.63 | 4620.06 | 5004.31 | 5213.50 | 5765.64 |
| **Latency** | 7ms     | 9ms     | 12ms    | 15ms    | 19ms    | 23ms    | 30ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42342.99 | 11510.12 | 58861.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19232.93 | 38631.38 | 46276.46 | 50603.73 | 53281.44 | 54718.72 | 55861.57 |
| **Latency** | 806µs    | 885µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-07-04T02:07:00.606Z</p>
