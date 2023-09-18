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
| Deno                                                                                 | 44609.70 | 13227.22 | 62012.47  | 100%     |
| NHttp                                                                                | 43634.32 | 11333.21 | 62355.25  | 98%      |
| Stric                                                                                | 41689.89 | 11781.23 | 66867.75  | 93%      |
| Fast                                                                                 | 41455.33 | 13057.59 | 57395.79  | 93%      |
| Hyper Express                                                                        | 39644.42 | 16146.79 | 66402.89  | 89%      |
| Bun                                                                                  | 39303.07 | 12679.98 | 65209.07  | 88%      |
| Vixeny (Deno)                                                                        | 38863.13 | 13384.25 | 57645.82  | 87%      |
| Hono                                                                                 | 38798.21 | 10135.17 | 51776.80  | 87%      |
| Fastro                                                                               | 37486.43 | 10816.03 | 51740.30  | 84%      |
| Deso                                                                                 | 37067.32 | 10464.33 | 51630.92  | 83%      |
| Cheetah                                                                              | 35128.26 | 8548.22  | 43701.33  | 79%      |
| Reno                                                                                 | 34435.10 | 6553.32  | 43914.37  | 77%      |
| http                                                                                 | 26652.85 | 6698.02  | 35843.33  | 60%      |
| Alosaur                                                                              | 22182.80 | 6737.98  | 141129.03 | 50%      |
| Aqua                                                                                 | 19287.43 | 3839.69  | 25862.71  | 43%      |
| Router                                                                               | 18870.79 | 3868.04  | 39546.48  | 42%      |
| Node                                                                                 | 17618.17 | 3346.32  | 22033.28  | 39%      |
| Little                                                                               | 14941.76 | 3399.17  | 52432.27  | 33%      |
| Fastify                                                                              | 14464.14 | 2941.38  | 18144.25  | 32%      |
| Oak                                                                                  | 13501.52 | 3107.64  | 20737.11  | 30%      |
| Dinatra                                                                              | 12715.40 | 2785.98  | 23973.29  | 29%      |
| Abc                                                                                  | 10758.40 | 1859.38  | 14930.08  | 24%      |
| Danet (Oak)                                                                          | 9841.34  | 3819.16  | 76779.41  | 22%      |
| Opine                                                                                | 6841.33  | 2154.22  | 36821.05  | 15%      |
| Express (Deno)                                                                       | 6217.66  | 1368.75  | 9202.66   | 14%      |
| Acorn                                                                                | 5055.33  | 7310.39  | 130434.78 | 11%      |
| Servest                                                                              | 3938.42  | 1320.35  | 11764.99  | 9%       |
| Express                                                                              | 3934.35  | 946.72   | 11359.68  | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-f41c232a-6dfc-43f0-861b-8f83737cd33e) |          |          |           |          |

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
| 10758.40 | 1859.38 | 14930.08 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8355.97 | 10162.48 | 11020.70 | 11949.93 | 12750.21 | 13101.51 | 13779.61 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5055.33  | 7310.39 | 130434.78 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 63.45 | 90.61 | 3400.24 | 7802.67 | 12621.60 | 13805.80 | 17823.33 |
| **Latency** | 8ms   | 10ms  | 20ms    | 27ms    | 32ms     | 35ms     | 43ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 22182.80 | 6737.98 | 141129.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15658.25 | 20363.51 | 23942.50 | 25243.88 | 26355.73 | 26867.58 | 28290.41 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19287.43 | 3839.69 | 25862.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15015.18 | 18311.50 | 20231.89 | 21617.72 | 22545.16 | 23084.65 | 24448.28 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39303.07 | 12679.98 | 65209.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23012.16 | 29431.50 | 38135.90 | 49980.36 | 56819.23 | 59410.98 | 63253.61 |
| **Latency** | 624µs    | 784µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35128.26 | 8548.22 | 43701.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19624.19 | 35524.82 | 38047.58 | 39940.94 | 41604.94 | 41999.02 | 43206.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9841.34  | 3819.16 | 76779.41 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5601.23 | 8309.21 | 10592.02 | 11546.97 | 12334.53 | 12909.06 | 15668.39 |
| **Latency** | 3ms     | 4ms     | 4ms      | 5ms      | 7ms      | 8ms      | 13ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44609.70 | 13227.22 | 62012.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20177.06 | 37503.71 | 50009.99 | 54573.48 | 56703.34 | 57857.89 | 59633.93 |
| **Latency** | 746µs    | 830µs    | 941µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37067.32 | 10464.33 | 51630.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17508.54 | 31456.28 | 41307.82 | 44626.26 | 46929.18 | 47929.18 | 49650.70 |
| **Latency** | 918µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12715.40 | 2785.98 | 23973.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10174.70 | 11377.46 | 13286.46 | 14477.36 | 15439.04 | 15880.78 | 16838.23 |
| **Latency** | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3934.35  | 946.72 | 11359.68 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2453.81 | 3583.20 | 4275.63 | 4529.90 | 4692.25 | 4749.73 | 4905.49 |
| **Latency** | 10ms    | 10ms    | 11ms    | 12ms    | 16ms    | 19ms    | 25ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6217.66  | 1368.75 | 9202.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4203.88 | 5763.42 | 6617.18 | 7118.19 | 7379.68 | 7553.76 | 7942.35 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 12ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41455.33 | 13057.59 | 57395.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18309.25 | 33706.47 | 47350.52 | 51079.62 | 52907.88 | 53838.71 | 55625.65 |
| **Latency** | 820µs    | 894µs    | 999µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14464.14 | 2941.38 | 18144.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11224.34 | 14252.86 | 15426.67 | 16091.38 | 16515.84 | 16777.15 | 17268.88 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37486.43 | 10816.03 | 51740.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18425.46 | 31747.90 | 42129.44 | 45368.91 | 47033.34 | 47914.32 | 49328.55 |
| **Latency** | 935µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38798.21 | 10135.17 | 51776.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18319.47 | 35695.88 | 43011.57 | 45600.40 | 47430.30 | 48327.01 | 49932.90 |
| **Latency** | 912µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26652.85 | 6698.02 | 35843.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16910.13 | 24072.37 | 29409.08 | 31126.17 | 32209.80 | 32821.96 | 33990.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39644.42 | 16146.79 | 66402.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16941.66 | 22921.75 | 41922.59 | 54277.97 | 59524.93 | 61526.39 | 63531.56 |
| **Latency** | 622µs    | 773µs    | 943µs    | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14941.76 | 3399.17 | 52432.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11687.33 | 13985.40 | 15691.31 | 16686.78 | 17516.24 | 18106.47 | 19572.12 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 8ms      |

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
| 43634.32 | 11333.21 | 62355.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20220.20 | 39616.60 | 48304.72 | 51425.66 | 53410.62 | 54516.61 | 56094.02 |
| **Latency** | 812µs    | 889µs    | 991µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17618.17 | 3346.32 | 22033.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14251.43 | 17251.05 | 18484.27 | 19459.53 | 20258.24 | 20641.88 | 21197.06 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13501.52 | 3107.64 | 20737.11 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9232.58 | 12605.16 | 14123.95 | 15259.33 | 16402.61 | 17387.24 | 18906.80 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6841.33  | 2154.22 | 36821.05 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4968.23 | 6249.45 | 7185.32 | 7668.81 | 8042.85 | 8342.84 | 11089.48 |
| **Latency** | 5ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 16ms     |

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
| 34435.10 | 6553.32 | 43914.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25122.84 | 33702.26 | 36501.78 | 38355.96 | 39828.60 | 40507.65 | 41746.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18870.79 | 3868.04 | 39546.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14030.64 | 17710.43 | 19802.62 | 21248.93 | 22192.36 | 22821.97 | 24355.06 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41689.89 | 11781.23 | 66867.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26996.94 | 32068.65 | 41295.79 | 51975.83 | 57905.73 | 59907.77 | 63043.44 |
| **Latency** | 612µs    | 765µs    | 972µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3938.42  | 1320.35 | 11764.99 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2213.01 | 3437.33 | 4385.58 | 4743.73 | 5083.62 | 5270.94 | 5946.58 |
| **Latency** | 6ms     | 9ms     | 12ms    | 15ms    | 19ms    | 22ms    | 29ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38863.13 | 13384.25 | 57645.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18201.21 | 23628.17 | 45440.85 | 49624.51 | 52004.63 | 53118.01 | 54809.81 |
| **Latency** | 834µs    | 917µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-09-18T01:24:17.318Z</p>
