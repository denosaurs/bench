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

| Framework | Average  | Mean     | Stddev   | Min      | Max      | Total     |
| --------- | -------- | -------- | -------- | -------- | -------- | --------- |
| Deno      | 65632.00 | 65632.00 | 2895.85  | 57492.00 | 68817.00 | 721940.00 |
| Fast      | 64871.28 | 64871.28 | 2221.57  | 59083.00 | 67284.00 | 713618.00 |
| Hono      | 64515.20 | 64515.20 | 2882.41  | 56165.00 | 66855.00 | 645116.00 |
| http      | 64173.10 | 64173.10 | 2813.26  | 55724.00 | 66489.00 | 705932.00 |
| Node      | 59536.00 | 59536.00 | 3755.21  | 47809.00 | 61621.00 | 654924.00 |
| Fastify   | 53473.46 | 53473.46 | 4665.77  | 38993.00 | 56412.00 | 588245.00 |
| Alosaur   | 51879.28 | 51879.28 | 2110.16  | 46974.00 | 54352.00 | 570662.00 |
| Reno      | 43675.64 | 43675.64 | 1056.43  | 40457.00 | 44469.00 | 480380.00 |
| Oak       | 36233.46 | 36233.46 | 1339.52  | 32073.00 | 36948.00 | 398579.00 |
| Aqua      | 33123.64 | 33123.64 | 1158.01  | 30394.00 | 34216.00 | 364342.00 |
| Abc       | 23240.00 | 23240.00 | 1219.71  | 20025.00 | 24159.00 | 255623.00 |
| Drash     | 22925.82 | 22925.82 | 1139.93  | 19658.00 | 23727.00 | 252177.00 |
| Router    | 22282.80 | 22282.80 | 11404.78 | 14322.00 | 42171.00 | 222857.00 |
| Bun       | 20720.00 | 20720.00 | 1295.56  | 17202.00 | 21903.00 | 207167.00 |
| Opine     | 12664.37 | 12664.37 | 737.70   | 10369.00 | 13083.00 | 139300.00 |
| Little    | 11145.10 | 11145.10 | 492.44   | 9627.00  | 11455.00 | 122595.00 |
| Dinatra   | 9110.19  | 9110.19  | 327.11   | 8434.00  | 9549.00  | 100203.00 |
| Express   | 6678.00  | 6678.00  | 493.79   | 5154.00  | 6935.00  | 73450.00  |
| Servest   | 2827.00  | 2827.00  | 212.78   | 2281.00  | 3005.00  | 28266.00  |
| tinyhttp  | 2586.10  | 2586.10  | 967.76   | 2067.00  | 3623.00  | 25859.00  |

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

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 23240.00 | 23240.00 | 1219.71 | 20025.00 | 24159.00 | 255623.00 |
| **Bytes/Sec** | 2.16 MB  | 2.16 MB  | 113 kB  | 1.86 MB  | 2.25 MB  | 23.8 MB   |
| **Latency**   | 1ms      | 1ms      | 490µs   | 1ms      | 42ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 20031.00 | 20031.00 | 23631.00 | 24127.00 | 24159.00 | 24159.00 |
| **Bytes/Sec** | 1.86 MB  | 1.86 MB  | 2.2 MB   | 2.24 MB  | 2.25 MB  | 2.25 MB  |
| **Latency**   | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Alosaur](#alosaur)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 51879.28 | 51879.28 | 2110.16 | 46974.00 | 54352.00 | 570662.00 |
| **Bytes/Sec** | 5.81 MB  | 5.81 MB  | 236 kB  | 5.26 MB  | 6.09 MB  | 63.9 MB   |
| **Latency**   | 120µs    | 120µs    | 410µs   | 1ms      | 16ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 46975.00 | 46975.00 | 52223.00 | 53951.00 | 54367.00 | 54367.00 |
| **Bytes/Sec** | 5.26 MB  | 5.26 MB  | 5.85 MB  | 6.04 MB  | 6.09 MB  | 6.09 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 0ms      | 1ms      | 2ms      |

### [Aqua](#aqua)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 33123.64 | 33123.64 | 1158.01 | 30394.00 | 34216.00 | 364342.00 |
| **Bytes/Sec** | 5.03 MB  | 5.03 MB  | 176 kB  | 4.62 MB  | 5.2 MB   | 55.4 MB   |
| **Latency**   | 910µs    | 910µs    | 430µs   | 1ms      | 20ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 30399.00 | 30399.00 | 33695.00 | 33983.00 | 34239.00 | 34239.00 |
| **Bytes/Sec** | 4.62 MB  | 4.62 MB  | 5.12 MB  | 5.17 MB  | 5.2 MB   | 5.2 MB   |
| **Latency**   | 0ms      | 0ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 20720.00 | 20720.00 | 1295.56 | 17202.00 | 21903.00 | 207167.00 |
| **Bytes/Sec** | 1.91 MB  | 1.91 MB  | 119 kB  | 1.58 MB  | 2.02 MB  | 19.1 MB   |
| **Latency**   | 1ms      | 1ms      | 560µs   | 1ms      | 17ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 17215.00 | 17215.00 | 21103.00 | 21439.00 | 21903.00 | 21903.00 |
| **Bytes/Sec** | 1.58 MB  | 1.58 MB  | 1.94 MB  | 1.97 MB  | 2.02 MB  | 2.02 MB  |
| **Latency**   | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Deno](#deno)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 65632.00 | 65632.00 | 2895.85 | 57492.00 | 68817.00 | 721940.00 |
| **Bytes/Sec** | 9.98 MB  | 9.98 MB  | 440 kB  | 8.74 MB  | 10.5 MB  | 110 MB    |
| **Latency**   | 70µs     | 70µs     | 290µs   | 1ms      | 15ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 57503.00 | 57503.00 | 66367.00 | 68607.00 | 68863.00 | 68863.00 |
| **Bytes/Sec** | 8.74 MB  | 8.74 MB  | 10.1 MB  | 10.4 MB  | 10.5 MB  | 10.5 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat**      | Average | Mean    | Stddev | Min     | Max     | Total     |
| ------------- | ------- | ------- | ------ | ------- | ------- | --------- |
| **Req/Sec**   | 9110.19 | 9110.19 | 327.11 | 8434.00 | 9549.00 | 100203.00 |
| **Bytes/Sec** | 474 kB  | 474 kB  | 17 kB  | 439 kB  | 497 kB  | 5.21 MB   |
| **Latency**   | 4ms     | 4ms     | 1ms    | 2ms     | 43ms    | N/A       |

| **Stat**      | 1       | 2.5     | 50      | 90      | 97.5    | 99      |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8439.00 | 8439.00 | 9063.00 | 9431.00 | 9551.00 | 9551.00 |
| **Bytes/Sec** | 439 kB  | 439 kB  | 471 kB  | 490 kB  | 497 kB  | 497 kB  |
| **Latency**   | 3ms     | 3ms     | 4ms     | 4ms     | 6ms     | 7ms     |

### [Drash](#drash)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 22925.82 | 22925.82 | 1139.93 | 19658.00 | 23727.00 | 252177.00 |
| **Bytes/Sec** | 2.13 MB  | 2.13 MB  | 106 kB  | 1.83 MB  | 2.21 MB  | 23.5 MB   |
| **Latency**   | 1ms      | 1ms      | 490µs   | 1ms      | 45ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 19663.00 | 19663.00 | 23407.00 | 23695.00 | 23727.00 | 23727.00 |
| **Bytes/Sec** | 1.83 MB  | 1.83 MB  | 2.18 MB  | 2.2 MB   | 2.21 MB  | 2.21 MB  |
| **Latency**   | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Express](#express)

| **Stat**      | Average | Mean    | Stddev | Min     | Max     | Total    |
| ------------- | ------- | ------- | ------ | ------- | ------- | -------- |
| **Req/Sec**   | 6678.00 | 6678.00 | 493.79 | 5154.00 | 6935.00 | 73450.00 |
| **Bytes/Sec** | 1.6 MB  | 1.6 MB  | 119 kB | 1.24 MB | 1.66 MB | 17.6 MB  |
| **Latency**   | 5ms     | 5ms     | 1ms    | 4ms     | 24ms    | N/A      |

| **Stat**      | 1       | 2.5     | 50      | 90      | 97.5    | 99      |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5155.00 | 5155.00 | 6859.00 | 6931.00 | 6935.00 | 6935.00 |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 1.65 MB | 1.66 MB | 1.67 MB | 1.67 MB |
| **Latency**   | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 10ms    |

### [Fast](#fast)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 64871.28 | 64871.28 | 2221.57 | 59083.00 | 67284.00 | 713618.00 |
| **Bytes/Sec** | 9.86 MB  | 9.86 MB  | 338 kB  | 8.98 MB  | 10.2 MB  | 108 MB    |
| **Latency**   | 70µs     | 70µs     | 280µs   | 1ms      | 16ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 59103.00 | 59103.00 | 65599.00 | 67007.00 | 67327.00 | 67327.00 |
| **Bytes/Sec** | 8.99 MB  | 8.99 MB  | 9.97 MB  | 10.2 MB  | 10.2 MB  | 10.2 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 53473.46 | 53473.46 | 4665.77 | 38993.00 | 56412.00 | 588245.00 |
| **Bytes/Sec** | 9.52 MB  | 9.52 MB  | 831 kB  | 6.94 MB  | 10 MB    | 105 MB    |
| **Latency**   | 150µs    | 150µs    | 430µs   | 1ms      | 19ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 39007.00 | 39007.00 | 54975.00 | 55775.00 | 56415.00 | 56415.00 |
| **Bytes/Sec** | 6.94 MB  | 6.94 MB  | 9.79 MB  | 9.93 MB  | 10 MB    | 10 MB    |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 64515.20 | 64515.20 | 2882.41 | 56165.00 | 66855.00 | 645116.00 |
| **Bytes/Sec** | 9.87 MB  | 9.87 MB  | 442 kB  | 8.59 MB  | 10.2 MB  | 98.7 MB   |
| **Latency**   | 70µs     | 70µs     | 300µs   | 1ms      | 17ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 56191.00 | 56191.00 | 65375.00 | 66175.00 | 66879.00 | 66879.00 |
| **Bytes/Sec** | 8.59 MB  | 8.59 MB  | 10 MB    | 10.1 MB  | 10.2 MB  | 10.2 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 64173.10 | 64173.10 | 2813.26 | 55724.00 | 66489.00 | 705932.00 |
| **Bytes/Sec** | 10.7 MB  | 10.7 MB  | 467 kB  | 9.25 MB  | 11 MB    | 117 MB    |
| **Latency**   | 70µs     | 70µs     | 290µs   | 1ms      | 15ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 55743.00 | 55743.00 | 64895.00 | 65855.00 | 66495.00 | 66495.00 |
| **Bytes/Sec** | 9.26 MB  | 9.26 MB  | 10.8 MB  | 10.9 MB  | 11 MB    | 11 MB    |
| **Latency**   | 0ms      | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat**      | Average  | Mean     | Stddev  | Min     | Max      | Total     |
| ------------- | -------- | -------- | ------- | ------- | -------- | --------- |
| **Req/Sec**   | 11145.10 | 11145.10 | 492.44  | 9627.00 | 11455.00 | 122595.00 |
| **Bytes/Sec** | 1.69 MB  | 1.69 MB  | 74.8 kB | 1.46 MB | 1.74 MB  | 18.6 MB   |
| **Latency**   | 3ms      | 3ms      | 500µs   | 1ms     | 17ms     | N/A       |

| **Stat**      | 1       | 2.5     | 50       | 90       | 97.5     | 99       |
| ------------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 9631.00 | 9631.00 | 11319.00 | 11415.00 | 11455.00 | 11455.00 |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 1.72 MB  | 1.74 MB  | 1.74 MB  | 1.74 MB  |
| **Latency**   | 2ms     | 2ms     | 3ms      | 3ms      | 4ms      | 5ms      |

### [Node](#node)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 59536.00 | 59536.00 | 3755.21 | 47809.00 | 61621.00 | 654924.00 |
| **Bytes/Sec** | 8.1 MB   | 8.1 MB   | 512 kB  | 6.5 MB   | 8.38 MB  | 89.1 MB   |
| **Latency**   | 100µs    | 100µs    | 350µs   | 1ms      | 19ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 47839.00 | 47839.00 | 60639.00 | 61407.00 | 61631.00 | 61631.00 |
| **Bytes/Sec** | 6.5 MB   | 6.5 MB   | 8.25 MB  | 8.35 MB  | 8.38 MB  | 8.38 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      |

### [Oak](#oak)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 36233.46 | 36233.46 | 1339.52 | 32073.00 | 36948.00 | 398579.00 |
| **Bytes/Sec** | 5.54 MB  | 5.54 MB  | 205 kB  | 4.91 MB  | 5.65 MB  | 61 MB     |
| **Latency**   | 840µs    | 840µs    | 470µs   | 1ms      | 20ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 32079.00 | 32079.00 | 36735.00 | 36927.00 | 36959.00 | 36959.00 |
| **Bytes/Sec** | 4.91 MB  | 4.91 MB  | 5.62 MB  | 5.65 MB  | 5.66 MB  | 5.66 MB  |
| **Latency**   | 0ms      | 0ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat**      | Average  | Mean     | Stddev | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------ | -------- | -------- | --------- |
| **Req/Sec**   | 12664.37 | 12664.37 | 737.70 | 10369.00 | 13083.00 | 139300.00 |
| **Bytes/Sec** | 2.71 MB  | 2.71 MB  | 158 kB | 2.22 MB  | 2.8 MB   | 29.8 MB   |
| **Latency**   | 2ms      | 2ms      | 700µs  | 1ms      | 34ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 10375.00 | 10375.00 | 12823.00 | 13087.00 | 13087.00 | 13087.00 |
| **Bytes/Sec** | 2.22 MB  | 2.22 MB  | 2.74 MB  | 2.8 MB   | 2.8 MB   | 2.8 MB   |
| **Latency**   | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Reno](#reno)

| **Stat**      | Average  | Mean     | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 43675.64 | 43675.64 | 1056.43 | 40457.00 | 44469.00 | 480380.00 |
| **Bytes/Sec** | 6.64 MB  | 6.64 MB  | 161 kB  | 6.15 MB  | 6.76 MB  | 73 MB     |
| **Latency**   | 180µs    | 180µs    | 450µs   | 1ms      | 17ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 40479.00 | 40479.00 | 43935.00 | 44415.00 | 44479.00 | 44479.00 |
| **Bytes/Sec** | 6.15 MB  | 6.15 MB  | 6.68 MB  | 6.75 MB  | 6.76 MB  | 6.76 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat**      | Average  | Mean     | Stddev   | Min      | Max      | Total     |
| ------------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec**   | 22282.80 | 22282.80 | 11404.78 | 14322.00 | 42171.00 | 222857.00 |
| **Bytes/Sec** | 3.39 MB  | 3.39 MB  | 1.73 MB  | 2.18 MB  | 6.41 MB  | 33.9 MB   |
| **Latency**   | 1ms      | 1ms      | 2ms      | 1ms      | 26ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 14327.00 | 14327.00 | 15007.00 | 40031.00 | 42175.00 | 42175.00 |
| **Bytes/Sec** | 2.18 MB  | 2.18 MB  | 2.28 MB  | 6.09 MB  | 6.41 MB  | 6.41 MB  |
| **Latency**   | 0ms      | 0ms      | 1ms      | 3ms      | 10ms     | 11ms     |

### [tinyhttp](#tinyhttp)

| **Stat**      | Average | Mean    | Stddev | Min     | Max     | Total    |
| ------------- | ------- | ------- | ------ | ------- | ------- | -------- |
| **Req/Sec**   | 2586.10 | 2586.10 | 967.76 | 2067.00 | 3623.00 | 25859.00 |
| **Bytes/Sec** | 297 kB  | 297 kB  | 111 kB | 238 kB  | 417 kB  | 2.97 MB  |
| **Latency**   | 1s      | 1s      | 352ms  | 98ms    | 2s      | N/A      |

| **Stat**      | 1     | 2.5   | 50      | 90      | 97.5    | 99      |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 0.00  | 0.00  | 2769.00 | 3515.00 | 3623.00 | 3623.00 |
| **Bytes/Sec** | 0 B   | 0 B   | 318 kB  | 404 kB  | 417 kB  | 417 kB  |
| **Latency**   | 227ms | 537ms | 1s      | 1s      | 1s      | 1s      |

### [Servest](#servest)

| **Stat**      | Average | Mean    | Stddev  | Min     | Max     | Total    |
| ------------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec**   | 2827.00 | 2827.00 | 212.78  | 2281.00 | 3005.00 | 28266.00 |
| **Bytes/Sec** | 444 kB  | 444 kB  | 33.4 kB | 358 kB  | 472 kB  | 4.44 MB  |
| **Latency**   | 13ms    | 13ms    | 6ms     | 1ms     | 56ms    | N/A      |

| **Stat**      | 1       | 2.5     | 50      | 90      | 97.5    | 99      |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 2281.00 | 2281.00 | 2949.00 | 2981.00 | 3005.00 | 3005.00 |
| **Bytes/Sec** | 358 kB  | 358 kB  | 463 kB  | 468 kB  | 472 kB  | 472 kB  |
| **Latency**   | 2ms     | 3ms     | 13ms    | 21ms    | 28ms    | 33ms    |

---

<p align="center">Generated 2022-07-09T17:59:48.427Z</p>
