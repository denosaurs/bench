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
  - [Alosaur](#alosaur)
  - [Aqua](#aqua)
  - [Bun](#bun)
  - [Deno](#deno)
  - [Dinatra](#dinatra)
  - [Drash](#drash)
  - [Express](#express)
  - [Fast](#fast)
  - [Fastify](#fastify)
  - [Hono](#hono)
  - [http](#http)
  - [Little](#little)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
  - [Reno](#reno)
  - [Router](#router)
  - [tinyhttp](#tinyhttp)
  - [Servest](#servest)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Deno](#deno-1)
    - [Dinatra](#dinatra-1)
    - [Drash](#drash-1)
    - [Express](#express-1)
    - [Fast](#fast-1)
    - [Fastify](#fastify-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Little](#little-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [tinyhttp](#tinyhttp-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework | Average  | Stddev  | Min      | Max      | Total     |
| --------- | -------- | ------- | -------- | -------- | --------- |
| Deno      | 50340.37 | 3806.46 | 38404.00 | 52017.00 | 553743.00 |
| Node      | 49350.55 | 5500.24 | 32011.00 | 51535.00 | 542814.00 |
| http      | 47180.80 | 3371.12 | 37145.00 | 48870.00 | 471804.00 |
| Bun       | 46808.73 | 2716.98 | 38286.00 | 48000.00 | 514901.00 |
| Hono      | 44071.28 | 2976.68 | 34722.00 | 45396.00 | 484787.00 |
| Fastify   | 42730.91 | 5755.46 | 24564.00 | 45167.00 | 470042.00 |
| Fast      | 38602.40 | 7755.07 | 22913.00 | 45844.00 | 386021.00 |
| Alosaur   | 35549.82 | 8072.60 | 18169.00 | 41035.00 | 391028.00 |
| Reno      | 34909.60 | 2576.16 | 27228.00 | 35997.00 | 349049.00 |
| Router    | 31921.46 | 1913.83 | 25995.00 | 32772.00 | 351139.00 |
| Oak       | 28748.37 | 2317.69 | 21499.00 | 30034.00 | 316207.00 |
| Aqua      | 25043.20 | 1880.94 | 19425.00 | 25939.00 | 250405.00 |
| Drash     | 19377.10 | 1484.29 | 14700.00 | 19998.00 | 213155.00 |
| Abc       | 18876.00 | 1534.29 | 14032.00 | 19464.00 | 207623.00 |
| Little    | 16434.00 | 1402.59 | 12250.00 | 17096.00 | 164337.00 |
| Dinatra   | 12989.60 | 972.25  | 10150.00 | 13642.00 | 129896.00 |
| Opine     | 10397.80 | 1008.85 | 7388.00  | 10917.00 | 103977.00 |
| Express   | 8287.60  | 1205.26 | 4795.00  | 9051.00  | 82876.00  |
| Servest   | 6227.20  | 549.73  | 4593.00  | 6510.00  | 62271.00  |
| tinyhttp  | 4961.20  | 1061.74 | 3303.00  | 6563.00  | 49605.00  |

# Frameworks

## [Abc](https://deno.land/x/abc)

A better Deno framework to create web application

## [Alosaur](https://deno.land/x/alosaur)

Deno web framework with many decorators

## [Aqua](https://deno.land/x/aqua)

A minimal and fast 🏃 web framework for Deno

## [Bun](https://bun.sh/)

Bun is a fast all-in-one JavaScript runtime

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

## [Drash](https://deno.land/x/drash)

A REST microframework for Deno's HTTP server with zero dependencies.

## [Express](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js

## [Fast](https://deno.land/x/fast)

Small web framework with near-native performance.

## [Fastify](https://www.fastify.io/)

Fast and low overhead web framework, for Node.js

## [Hono](https://github.com/honojs/hono)

Ultrafast web framework for Cloudflare Workers and Deno. Fast, but not only
fast.

## [http](https://deno.land/std/http)

The deno standard library http server

## [Little](https://deno.land/x/little)

A minimalistic connect-like web framework. Automatically works out of the box
with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.

## [Node](https://nodejs.org/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## [Oak](https://deno.land/x/oak)

A middleware framework for Deno's native HTTP server, Deno Deploy and Node.js
16.5 and later. It also includes a middleware router.

## [Opine](https://deno.land/x/opine)

Fast, minimalist web framework for Deno ported from ExpressJS.

## [Reno](https://deno.land/x/reno)

A thin, testable routing library designed to sit on top of Deno's standard HTTP
module.

## [Router](https://crux.land/router@0.0.12)

The tiny, modern and fast router by the denosaurs for deno and deno deploy. Used
by projects like fresh

## [tinyhttp](https://deno.land/x/tinyhttp)

🦕 Deno port of tinyhttp, 0-legacy, tiny & fast web framework

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 18876.00 | 1534.29 | 14032.00 | 19464.00 | 207623.00 |
| **Bytes/Sec** | 1.76 MB  | 143 kB  | 1.3 MB   | 1.81 MB  | 19.3 MB   |
| **Latency**   | 1ms      | 820µs   | 1ms      | 47ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 14039.00 | 14039.00 | 19407.00 | 19455.00 | 19471.00 | 19471.00 |
| **Bytes/Sec** | 1.31 MB  | 1.31 MB  | 1.81 MB  | 1.81 MB  | 1.81 MB  | 1.81 MB  |
| **Latency**   | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Alosaur](#alosaur)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 35549.82 | 8072.60 | 18169.00 | 41035.00 | 391028.00 |
| **Bytes/Sec** | 3.98 MB  | 904 kB  | 2.03 MB  | 4.6 MB   | 43.8 MB   |
| **Latency**   | 320µs    | 860µs   | 1ms      | 19ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 18175.00 | 18175.00 | 39999.00 | 40991.00 | 41055.00 | 41055.00 |
| **Bytes/Sec** | 2.04 MB  | 2.04 MB  | 4.48 MB  | 4.59 MB  | 4.6 MB   | 4.6 MB   |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 25043.20 | 1880.94 | 19425.00 | 25939.00 | 250405.00 |
| **Bytes/Sec** | 3.81 MB  | 286 kB  | 2.95 MB  | 3.94 MB  | 38.1 MB   |
| **Latency**   | 1ms      | 550µs   | 1ms      | 26ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 19439.00 | 19439.00 | 25695.00 | 25807.00 | 25951.00 | 25951.00 |
| **Bytes/Sec** | 2.95 MB  | 2.95 MB  | 3.91 MB  | 3.92 MB  | 3.94 MB  | 3.94 MB  |
| **Latency**   | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 46808.73 | 2716.98 | 38286.00 | 48000.00 | 514901.00 |
| **Bytes/Sec** | 4.31 MB  | 250 kB  | 3.52 MB  | 4.42 MB  | 47.4 MB   |
| **Latency**   | 70µs     | 350µs   | 1ms      | 16ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 38303.00 | 38303.00 | 47711.00 | 47999.00 | 48031.00 | 48031.00 |
| **Bytes/Sec** | 3.52 MB  | 3.52 MB  | 4.39 MB  | 4.42 MB  | 4.42 MB  | 4.42 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 50340.37 | 3806.46 | 38404.00 | 52017.00 | 553743.00 |
| **Bytes/Sec** | 7.65 MB  | 579 kB  | 5.84 MB  | 7.91 MB  | 84.2 MB   |
| **Latency**   | 90µs     | 580µs   | 1ms      | 61ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 38431.00 | 38431.00 | 51775.00 | 51967.00 | 52031.00 | 52031.00 |
| **Bytes/Sec** | 5.84 MB  | 5.84 MB  | 7.87 MB  | 7.9 MB   | 7.91 MB  | 7.91 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 0ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 12989.60 | 972.25  | 10150.00 | 13642.00 | 129896.00 |
| **Bytes/Sec** | 675 kB   | 50.6 kB | 528 kB   | 709 kB   | 6.75 MB   |
| **Latency**   | 2ms      | 1ms     | 1ms      | 53ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 10151.00 | 10151.00 | 13319.00 | 13487.00 | 13647.00 | 13647.00 |
| **Bytes/Sec** | 528 kB   | 528 kB   | 693 kB   | 701 kB   | 710 kB   | 710 kB   |
| **Latency**   | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 7ms      |

### [Drash](#drash)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 19377.10 | 1484.29 | 14700.00 | 19998.00 | 213155.00 |
| **Bytes/Sec** | 1.8 MB   | 138 kB  | 1.37 MB  | 1.86 MB  | 19.8 MB   |
| **Latency**   | 1ms      | 710µs   | 1ms      | 31ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 14703.00 | 14703.00 | 19887.00 | 19967.00 | 19999.00 | 19999.00 |
| **Bytes/Sec** | 1.37 MB  | 1.37 MB  | 1.85 MB  | 1.86 MB  | 1.86 MB  | 1.86 MB  |
| **Latency**   | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Express](#express)

| **Stat**      | Average | Stddev  | Min     | Max     | Total    |
| ------------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec**   | 8287.60 | 1205.26 | 4795.00 | 9051.00 | 82876.00 |
| **Bytes/Sec** | 1.99 MB | 289 kB  | 1.15 MB | 2.17 MB | 19.9 MB  |
| **Latency**   | 4ms     | 1ms     | 1ms     | 34ms    | N/A      |

| **Stat**      | 1       | 2.5     | 50      | 90      | 97.5    | 99      |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4795.00 | 4795.00 | 8735.00 | 8879.00 | 9055.00 | 9055.00 |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 2.1 MB  | 2.13 MB | 2.17 MB | 2.17 MB |
| **Latency**   | 2ms     | 3ms     | 4ms     | 6ms     | 9ms     | 12ms    |

### [Fast](#fast)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 38602.40 | 7755.07 | 22913.00 | 45844.00 | 386021.00 |
| **Bytes/Sec** | 5.87 MB  | 1.18 MB | 3.48 MB  | 6.97 MB  | 58.7 MB   |
| **Latency**   | 310µs    | 930µs   | 1ms      | 19ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 22927.00 | 22927.00 | 42783.00 | 44895.00 | 45855.00 | 45855.00 |
| **Bytes/Sec** | 3.48 MB  | 3.48 MB  | 6.5 MB   | 6.82 MB  | 6.97 MB  | 6.97 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 2ms      | 4ms      |

### [Fastify](#fastify)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 42730.91 | 5755.46 | 24564.00 | 45167.00 | 470042.00 |
| **Bytes/Sec** | 7.61 MB  | 1.02 MB | 4.37 MB  | 8.04 MB  | 83.7 MB   |
| **Latency**   | 180µs    | 710µs   | 1ms      | 52ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 24575.00 | 24575.00 | 44607.00 | 44959.00 | 45183.00 | 45183.00 |
| **Bytes/Sec** | 4.37 MB  | 4.37 MB  | 7.94 MB  | 8 MB     | 8.04 MB  | 8.04 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 44071.28 | 2976.68 | 34722.00 | 45396.00 | 484787.00 |
| **Bytes/Sec** | 6.74 MB  | 457 kB  | 5.31 MB  | 6.95 MB  | 74.2 MB   |
| **Latency**   | 110µs    | 520µs   | 1ms      | 19ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 34751.00 | 34751.00 | 45087.00 | 45407.00 | 45407.00 | 45407.00 |
| **Bytes/Sec** | 5.31 MB  | 5.31 MB  | 6.9 MB   | 6.95 MB  | 6.95 MB  | 6.95 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 0ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 47180.80 | 3371.12 | 37145.00 | 48870.00 | 471804.00 |
| **Bytes/Sec** | 7.83 MB  | 559 kB  | 6.17 MB  | 8.11 MB  | 78.3 MB   |
| **Latency**   | 100µs    | 480µs   | 1ms      | 18ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 37151.00 | 37151.00 | 48191.00 | 48735.00 | 48895.00 | 48895.00 |
| **Bytes/Sec** | 6.17 MB  | 6.17 MB  | 8 MB     | 8.09 MB  | 8.11 MB  | 8.11 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 0ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 16434.00 | 1402.59 | 12250.00 | 17096.00 | 164337.00 |
| **Bytes/Sec** | 2.5 MB   | 213 kB  | 1.86 MB  | 2.6 MB   | 25 MB     |
| **Latency**   | 2ms      | 680µs   | 1ms      | 26ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 12255.00 | 12255.00 | 16895.00 | 17023.00 | 17103.00 | 17103.00 |
| **Bytes/Sec** | 1.86 MB  | 1.86 MB  | 2.57 MB  | 2.59 MB  | 2.6 MB   | 2.6 MB   |
| **Latency**   | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Node](#node)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 49350.55 | 5500.24 | 32011.00 | 51535.00 | 542814.00 |
| **Bytes/Sec** | 6.71 MB  | 748 kB  | 4.35 MB  | 7.01 MB  | 73.8 MB   |
| **Latency**   | 140µs    | 530µs   | 1ms      | 22ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 32015.00 | 32015.00 | 51071.00 | 51519.00 | 51551.00 | 51551.00 |
| **Bytes/Sec** | 4.35 MB  | 4.35 MB  | 6.95 MB  | 7 MB     | 7.01 MB  | 7.01 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      | 1ms      |

### [Oak](#oak)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 28748.37 | 2317.69 | 21499.00 | 30034.00 | 316207.00 |
| **Bytes/Sec** | 4.4 MB   | 354 kB  | 3.29 MB  | 4.6 MB   | 48.4 MB   |
| **Latency**   | 1ms      | 560µs   | 1ms      | 23ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 21503.00 | 21503.00 | 29487.00 | 29839.00 | 30047.00 | 30047.00 |
| **Bytes/Sec** | 3.29 MB  | 3.29 MB  | 4.51 MB  | 4.57 MB  | 4.6 MB   | 4.6 MB   |
| **Latency**   | 0ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat**      | Average  | Stddev  | Min     | Max      | Total     |
| ------------- | -------- | ------- | ------- | -------- | --------- |
| **Req/Sec**   | 10397.80 | 1008.85 | 7388.00 | 10917.00 | 103977.00 |
| **Bytes/Sec** | 2.23 MB  | 216 kB  | 1.58 MB | 2.34 MB  | 22.3 MB   |
| **Latency**   | 3ms      | 1ms     | 1ms     | 36ms     | N/A       |

| **Stat**      | 1       | 2.5     | 50       | 90       | 97.5     | 99       |
| ------------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 7391.00 | 7391.00 | 10655.00 | 10895.00 | 10919.00 | 10919.00 |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 2.28 MB  | 2.33 MB  | 2.34 MB  | 2.34 MB  |
| **Latency**   | 2ms     | 2ms     | 4ms      | 4ms      | 5ms      | 8ms      |

### [Reno](#reno)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 34909.60 | 2576.16 | 27228.00 | 35997.00 | 349049.00 |
| **Bytes/Sec** | 5.31 MB  | 391 kB  | 4.14 MB  | 5.47 MB  | 53.1 MB   |
| **Latency**   | 860µs    | 620µs   | 1ms      | 24ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 27231.00 | 27231.00 | 35807.00 | 35999.00 | 35999.00 | 35999.00 |
| **Bytes/Sec** | 4.14 MB  | 4.14 MB  | 5.44 MB  | 5.47 MB  | 5.47 MB  | 5.47 MB  |
| **Latency**   | 0ms      | 0ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 31921.46 | 1913.83 | 25995.00 | 32772.00 | 351139.00 |
| **Bytes/Sec** | 4.85 MB  | 291 kB  | 3.95 MB  | 4.98 MB  | 53.4 MB   |
| **Latency**   | 1ms      | 430µs   | 1ms      | 20ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 25999.00 | 25999.00 | 32671.00 | 32735.00 | 32799.00 | 32799.00 |
| **Bytes/Sec** | 3.95 MB  | 3.95 MB  | 4.96 MB  | 4.98 MB  | 4.98 MB  | 4.98 MB  |
| **Latency**   | 0ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [tinyhttp](#tinyhttp)

| **Stat**      | Average | Stddev  | Min     | Max     | Total    |
| ------------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec**   | 4961.20 | 1061.74 | 3303.00 | 6563.00 | 49605.00 |
| **Bytes/Sec** | 570 kB  | 122 kB  | 380 kB  | 755 kB  | 5.7 MB   |
| **Latency**   | 7ms     | 15ms    | 1ms     | 54ms    | N/A      |

| **Stat**      | 1       | 2.5     | 50      | 90      | 97.5    | 99      |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 3303.00 | 3303.00 | 5355.00 | 5947.00 | 6563.00 | 6563.00 |
| **Bytes/Sec** | 380 kB  | 380 kB  | 616 kB  | 684 kB  | 755 kB  | 755 kB  |
| **Latency**   | 0ms     | 0ms     | 1ms     | 43ms    | 46ms    | 47ms    |

### [Servest](#servest)

| **Stat**      | Average | Stddev  | Min     | Max     | Total    |
| ------------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec**   | 6227.20 | 549.73  | 4593.00 | 6510.00 | 62271.00 |
| **Bytes/Sec** | 978 kB  | 86.4 kB | 721 kB  | 1.02 MB | 9.78 MB  |
| **Latency**   | 6ms     | 1ms     | 1ms     | 42ms    | N/A      |

| **Stat**      | 1       | 2.5     | 50      | 90      | 97.5    | 99      |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4595.00 | 4595.00 | 6387.00 | 6503.00 | 6511.00 | 6511.00 |
| **Bytes/Sec** | 721 kB  | 721 kB  | 1 MB    | 1.02 MB | 1.02 MB | 1.02 MB |
| **Latency**   | 4ms     | 4ms     | 6ms     | 8ms     | 13ms    | 14ms    |

---

<p align="center">Generated 2022-09-05T02:52:14.589Z</p>
