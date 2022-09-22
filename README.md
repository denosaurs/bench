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
  - [Dinatra](#dinatra)
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
  - [Servest](#servest)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Acorn](#acorn-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Deno](#deno-1)
    - [Dinatra](#dinatra-1)
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
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework | Mean     | Stddev   | Max       | Relative |
| --------- | -------- | -------- | --------- | -------- |
| Bun       | 54830.05 | 12411.62 | 72965.32  | 100%     |
| Deno      | 45261.56 | 7991.33  | 59037.79  | 83%      |
| Fast      | 40583.66 | 8811.80  | 54096.33  | 74%      |
| Hono      | 39067.03 | 7307.93  | 56277.40  | 71%      |
| http      | 33939.68 | 6190.58  | 42906.54  | 62%      |
| Reno      | 31246.17 | 5173.46  | 40873.09  | 57%      |
| Alosaur   | 25401.14 | 6162.18  | 36897.65  | 46%      |
| Router    | 21756.00 | 3856.26  | 28460.44  | 40%      |
| Little    | 20086.18 | 3446.43  | 24984.93  | 37%      |
| Aqua      | 19458.49 | 3007.07  | 24561.60  | 35%      |
| Node      | 18442.33 | 3773.46  | 25036.43  | 34%      |
| Oak       | 16474.22 | 2938.88  | 21078.30  | 30%      |
| Fastify   | 13405.76 | 3275.94  | 49513.76  | 24%      |
| Abc       | 10735.10 | 1803.38  | 14310.51  | 20%      |
| Dinatra   | 7929.79  | 1622.33  | 12740.96  | 14%      |
| Opine     | 6837.88  | 1111.65  | 11877.28  | 12%      |
| Acorn     | 4284.25  | 4209.84  | 101010.10 | 8%       |
| Express   | 4086.05  | 955.52   | 8476.72   | 7%       |
| Servest   | 3905.60  | 1029.76  | 7848.95   | 7%       |

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

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

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

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10735.10 | 1803.38 | 14310.51 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8563.88 | 9829.39 | 11101.41 | 11912.80 | 12530.21 | 12925.31 | 13581.55 |
| **Latency** | 2ms     | 3ms     | 4ms      | 5ms      | 6ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4284.25  | 4209.84 | 101010.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1781.05 | 2486.34 | 3298.28 | 5469.03 | 8440.40 | 10083.59 | 12723.59 |
| **Latency** | 5ms     | 6ms     | 12ms    | 18ms    | 22ms    | 24ms     | 28ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25401.14 | 6162.18 | 36897.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16716.45 | 23625.72 | 27284.28 | 29797.58 | 30797.03 | 31140.90 | 31965.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19458.49 | 3007.07 | 24561.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16215.00 | 18371.25 | 20214.65 | 21578.95 | 22204.99 | 22517.67 | 23125.55 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54830.05 | 12411.62 | 72965.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37105.51 | 46103.85 | 59174.45 | 64939.95 | 67229.90 | 68213.97 | 69316.97 |
| **Latency** | 564µs    | 666µs    | 817µs    | 970µs    | 1ms      | 1ms      | 3ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45261.56 | 7991.33 | 59037.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35143.77 | 40114.66 | 45311.40 | 52123.74 | 54504.95 | 55213.55 | 56302.56 |
| **Latency** | 733µs    | 908µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7929.79  | 1622.33 | 12740.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5655.05 | 7327.07 | 8502.25 | 8875.13 | 9155.99 | 9382.99 | 10763.45 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 8ms     | 10ms    | 15ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 4086.05  | 955.52 | 8476.72 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2667.25 | 3605.50 | 4468.66 | 4730.39 | 4836.07 | 4891.10 | 4977.24 |
| **Latency** | 10ms    | 10ms    | 11ms    | 12ms    | 15ms    | 18ms    | 26ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40583.66 | 8811.80 | 54096.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31408.71 | 34613.32 | 39222.54 | 48566.28 | 51522.93 | 52268.38 | 53137.37 |
| **Latency** | 854µs    | 952µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13405.76 | 3275.94 | 49513.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10073.28 | 12036.41 | 14205.32 | 15516.67 | 16269.88 | 17048.32 | 17634.46 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 10ms     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39067.03 | 7307.93 | 56277.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31283.28 | 34272.48 | 38857.80 | 45441.56 | 47770.60 | 48804.61 | 49882.56 |
| **Latency** | 927µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33939.68 | 6190.58 | 42906.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24046.77 | 32299.31 | 36133.06 | 38067.57 | 39378.60 | 39907.95 | 40886.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20086.18 | 3446.43 | 24984.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15806.56 | 18602.26 | 21191.04 | 22503.26 | 23179.83 | 23550.99 | 24167.58 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18442.33 | 3773.46 | 25036.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13240.58 | 17440.20 | 19664.99 | 20803.64 | 21890.30 | 22238.14 | 22810.83 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16474.22 | 2938.88 | 21078.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13133.24 | 14952.88 | 17375.82 | 18546.32 | 19026.91 | 19382.93 | 20384.94 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6837.88  | 1111.65 | 11877.28 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5719.13 | 6381.02 | 6984.70 | 7410.66 | 7825.27 | 8501.55 | 9147.23 |
| **Latency** | 5ms     | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 12ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31246.17 | 5173.46 | 40873.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26579.62 | 29370.98 | 31605.13 | 34705.35 | 36544.69 | 37679.00 | 38933.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21756.00 | 3856.26 | 28460.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16807.94 | 20104.31 | 22216.98 | 24528.31 | 25829.27 | 26402.03 | 27246.16 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3905.60  | 1029.76 | 7848.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2423.62 | 3710.82 | 4159.75 | 4484.07 | 4764.63 | 5033.71 | 5497.82 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 17ms    | 20ms    | 26ms    |

---

<p align="center">Generated 2022-09-22T02:46:09.097Z</p>
