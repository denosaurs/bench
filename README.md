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
| Hono                                                                                 | 62525.08 | 8453.45  | 67730.68  | 100%     |
| Fastro                                                                               | 61542.31 | 10441.98 | 68712.91  | 98%      |
| Fast                                                                                 | 61036.59 | 15420.04 | 72011.98  | 98%      |
| NHttp                                                                                | 60827.30 | 15807.17 | 72835.54  | 97%      |
| Vixeny (Deno)                                                                        | 60800.76 | 16262.95 | 73142.14  | 97%      |
| Deso                                                                                 | 59197.34 | 9848.76  | 65372.32  | 95%      |
| Stric                                                                                | 54201.62 | 8389.73  | 81458.58  | 87%      |
| Bun                                                                                  | 53420.72 | 9474.87  | 78908.35  | 85%      |
| Hyper Express                                                                        | 52671.36 | 12124.55 | 78342.34  | 84%      |
| Cheetah                                                                              | 51686.45 | 7736.72  | 56823.61  | 83%      |
| Deno                                                                                 | 51165.68 | 14699.73 | 71718.50  | 82%      |
| Reno                                                                                 | 50275.27 | 5136.87  | 53830.87  | 80%      |
| http                                                                                 | 36192.22 | 8565.31  | 56239.81  | 58%      |
| Node                                                                                 | 34687.65 | 4880.20  | 38000.62  | 55%      |
| Alosaur                                                                              | 28476.81 | 6504.78  | 41198.70  | 46%      |
| Router                                                                               | 26187.39 | 4774.50  | 33029.83  | 42%      |
| Aqua                                                                                 | 24873.65 | 4339.78  | 31003.67  | 40%      |
| Fastify                                                                              | 23748.25 | 9916.57  | 33310.80  | 38%      |
| Little                                                                               | 23684.46 | 5952.03  | 148769.10 | 38%      |
| Oak                                                                                  | 21572.28 | 5530.94  | 28001.55  | 35%      |
| Dinatra                                                                              | 19084.32 | 4478.35  | 25773.78  | 31%      |
| Abc                                                                                  | 15010.14 | 4578.12  | 23062.39  | 24%      |
| Danet (Oak)                                                                          | 13894.24 | 3954.49  | 21078.65  | 22%      |
| Express (Deno)                                                                       | 10259.62 | 2169.80  | 14124.55  | 16%      |
| Express                                                                              | 6360.23  | 1474.58  | 11577.75  | 10%      |
| Servest                                                                              | 6309.33  | 3791.44  | 107887.96 | 10%      |
| Acorn                                                                                | 6131.62  | 8793.06  | 107526.88 | 10%      |
| Opine                                                                                | 4859.54  | 2075.50  | 7480.41   | 8%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-31ed248a-7f46-428c-8937-3784ee64c165) |          |          |           |          |

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
| 15010.14 | 4578.12 | 23062.39 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9574.54 | 9867.54 | 16578.73 | 19013.61 | 19852.31 | 20534.96 | 21539.79 |
| **Latency** | 2ms     | 2ms     | 2ms      | 4ms      | 4ms      | 6ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6131.62  | 8793.06 | 107526.88 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 47.02 | 64.12 | 5851.53 | 8666.53 | 12464.75 | 17196.36 | 47763.06 |
| **Latency** | 5ms   | 7ms   | 17ms    | 24ms    | 29ms     | 31ms     | 35ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28476.81 | 6504.78 | 41198.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22102.76 | 25392.81 | 31255.54 | 32114.28 | 32744.69 | 33259.03 | 34586.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24873.65 | 4339.78 | 31003.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21936.99 | 23619.42 | 26350.20 | 27115.59 | 27729.29 | 28104.17 | 29366.54 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53420.72 | 9474.87 | 78908.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43681.51 | 47259.55 | 51728.75 | 59319.49 | 67538.13 | 70909.55 | 75279.09 |
| **Latency** | 508µs    | 654µs    | 851µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51686.45 | 7736.72 | 56823.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50300.80 | 52634.53 | 53817.52 | 54446.96 | 55015.25 | 55271.09 | 55756.60 |
| **Latency** | 819µs    | 892µs    | 929µs    | 963µs    | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13894.24 | 3954.49 | 21078.65 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8754.46 | 11413.19 | 13891.62 | 17408.98 | 18565.60 | 18921.50 | 20511.19 |
| **Latency** | 2ms     | 2ms      | 3ms      | 4ms      | 5ms      | 5ms      | 8ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51165.68 | 14699.73 | 71718.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29404.35 | 38521.65 | 53620.27 | 65157.24 | 68603.97 | 69703.39 | 71071.99 |
| **Latency** | 602µs    | 701µs    | 753µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59197.34 | 9848.76 | 65372.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57335.30 | 60894.12 | 62098.49 | 62965.84 | 63676.14 | 64091.39 | 64720.74 |
| **Latency** | 708µs    | 760µs    | 798µs    | 835µs    | 940µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19084.32 | 4478.35 | 25773.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15311.85 | 16582.78 | 20990.25 | 22165.30 | 23102.59 | 23319.49 | 23847.04 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6360.23  | 1474.58 | 11577.75 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3930.33 | 6315.51 | 7053.86 | 7197.42 | 7278.43 | 7307.57 | 7370.80 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 12ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10259.62 | 2169.80 | 14124.55 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7219.37 | 10069.34 | 11278.46 | 11434.81 | 11525.16 | 11568.68 | 12010.33 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61036.59 | 15420.04 | 72011.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27425.40 | 63906.12 | 68603.82 | 70145.34 | 70821.56 | 71049.84 | 71551.25 |
| **Latency** | 633µs    | 672µs    | 727µs    | 775µs    | 960µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23748.25 | 9916.57 | 33310.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11916.04 | 12338.94 | 31147.86 | 32552.29 | 32862.98 | 32956.24 | 33107.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      | 4ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61542.31 | 10441.98 | 68712.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54733.17 | 63289.61 | 64926.33 | 65874.83 | 66458.88 | 66737.78 | 67290.03 |
| **Latency** | 672µs    | 724µs    | 760µs    | 798µs    | 867µs    | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 62525.08 | 8453.45 | 67730.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61577.34 | 63503.29 | 64659.22 | 65554.80 | 66172.53 | 66534.99 | 67129.29 |
| **Latency** | 680µs    | 728µs    | 764µs    | 802µs    | 869µs    | 949µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36192.22 | 8565.31 | 56239.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24840.29 | 32683.91 | 40325.65 | 41247.97 | 41904.59 | 42212.49 | 42888.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52671.36 | 12124.55 | 78342.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36401.83 | 41421.02 | 53701.47 | 61881.91 | 69007.41 | 71807.71 | 75740.70 |
| **Latency** | 547µs    | 657µs    | 809µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 23684.46 | 5952.03 | 148769.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20952.53 | 22854.08 | 24972.99 | 25923.76 | 26453.86 | 26859.57 | 27701.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

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
| 60827.30 | 15807.17 | 72835.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27825.51 | 58675.36 | 69105.86 | 70636.43 | 71514.01 | 71797.06 | 72383.11 |
| **Latency** | 602µs    | 665µs    | 724µs    | 779µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34687.65 | 4880.20 | 38000.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33948.41 | 35047.53 | 35695.17 | 36529.81 | 36818.57 | 36909.09 | 37143.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21572.28 | 5530.94 | 28001.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13303.72 | 21161.67 | 23976.20 | 24863.53 | 25336.62 | 25817.47 | 27189.70 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4859.54  | 2075.50 | 7480.41 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 87.51 | 4091.64 | 4940.02 | 6559.48 | 7403.42 | 7480.41 | 7480.41 |
| **Latency** | 6ms   | 7ms     | 9ms     | 11ms    | 19ms    | 22ms    | 28ms    |

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
| 50275.27 | 5136.87 | 53830.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49434.42 | 50572.91 | 51278.27 | 52114.46 | 52564.74 | 52808.26 | 53211.51 |
| **Latency** | 857µs    | 934µs    | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26187.39 | 4774.50 | 33029.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22034.08 | 24636.75 | 28094.92 | 28839.92 | 29355.89 | 29819.58 | 30913.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54201.62 | 8389.73 | 81458.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45055.90 | 48102.22 | 52205.05 | 59208.07 | 67782.80 | 70252.23 | 75171.45 |
| **Latency** | 511µs    | 660µs    | 852µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6309.33  | 3791.44 | 107887.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3615.75 | 5018.50 | 6947.77 | 7664.82 | 8113.03 | 8373.66 | 9437.88 |
| **Latency** | 4ms     | 5ms     | 7ms     | 9ms     | 12ms    | 16ms    | 22ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60800.76 | 16262.95 | 73142.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27918.32 | 56172.18 | 69583.85 | 71237.49 | 71926.96 | 72276.81 | 72689.97 |
| **Latency** | 618µs    | 661µs    | 715µs    | 768µs    | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2023-09-24T01:28:13.176Z</p>
