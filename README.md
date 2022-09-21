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

| Framework | Mean     | Stddev  | Max       | Relative |
| --------- | -------- | ------- | --------- | -------- |
| Bun       | 79380.08 | 7741.70 | 96916.93  | 100%     |
| Deno      | 68508.19 | 5086.74 | 76618.78  | 86%      |
| Fast      | 67142.96 | 5890.80 | 72220.62  | 85%      |
| Hono      | 61651.18 | 6254.36 | 65914.15  | 78%      |
| Reno      | 50131.60 | 4295.05 | 53076.36  | 63%      |
| Node      | 45982.79 | 6780.61 | 49286.51  | 58%      |
| http      | 45880.50 | 7362.00 | 51205.49  | 58%      |
| Fastify   | 38952.12 | 6608.17 | 42346.81  | 49%      |
| Alosaur   | 36863.89 | 7685.40 | 96322.24  | 46%      |
| Router    | 31928.85 | 3978.20 | 36149.85  | 40%      |
| Little    | 29875.99 | 4254.67 | 34634.09  | 38%      |
| Oak       | 26295.90 | 4032.58 | 30234.31  | 33%      |
| Aqua      | 24796.11 | 3121.93 | 28816.58  | 31%      |
| Abc       | 18408.07 | 2477.08 | 22527.39  | 23%      |
| Dinatra   | 15104.23 | 3445.07 | 19701.47  | 19%      |
| Opine     | 10436.22 | 1413.59 | 16138.49  | 13%      |
| Express   | 8224.31  | 1622.12 | 9742.09   | 10%      |
| Servest   | 6150.60  | 1666.10 | 10454.78  | 8%       |
| Acorn     | 4976.34  | 7451.03 | 156250.00 | 6%       |

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
| 18408.07 | 2477.08 | 22527.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15798.51 | 17278.53 | 19459.08 | 19952.38 | 20199.69 | 20326.95 | 21118.45 |
| **Latency** | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4976.34  | 7451.03 | 156250.00 |     |

| **Stat**    | 10     | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------ | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 100.36 | 2729.81 | 3648.06 | 5368.15 | 10359.52 | 12770.77 | 26589.97 |
| **Latency** | 3ms    | 4ms     | 11ms    | 17ms    | 20ms     | 21ms     | 24ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36863.89 | 7685.40 | 96322.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27327.76 | 37626.91 | 40028.18 | 40524.93 | 41115.81 | 41451.52 | 41927.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24796.11 | 3121.93 | 28816.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22604.19 | 23855.42 | 25824.15 | 26403.83 | 26911.02 | 27353.83 | 27789.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 79380.08 | 7741.70 | 96916.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 73580.30 | 79335.52 | 81007.92 | 82314.73 | 83969.03 | 85915.87 | 93921.65 |
| **Latency** | 426µs    | 497µs    | 656µs    | 688µs    | 717µs    | 776µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 68508.19 | 5086.74 | 76618.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64018.89 | 67892.96 | 69856.03 | 70835.78 | 71623.99 | 72064.53 | 72740.55 |
| **Latency** | 543µs    | 608µs    | 746µs    | 801µs    | 846µs    | 872µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15104.23 | 3445.07 | 19701.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11150.68 | 13621.31 | 16838.81 | 17060.99 | 17240.59 | 17574.42 | 18762.19 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 8224.31  | 1622.12 | 9742.09 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5746.58 | 7811.67 | 9036.73 | 9170.29 | 9256.43 | 9294.85 | 9364.85 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67142.96 | 5890.80 | 72220.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62961.33 | 66901.04 | 68766.79 | 69589.17 | 70277.66 | 70632.88 | 71397.32 |
| **Latency** | 615µs    | 670µs    | 715µs    | 794µs    | 838µs    | 866µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38952.12 | 6608.17 | 42346.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38757.17 | 39923.76 | 40596.42 | 41169.79 | 41465.31 | 41608.12 | 41869.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61651.18 | 6254.36 | 65914.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60108.80 | 61593.07 | 63015.41 | 63912.44 | 64551.44 | 64824.97 | 65311.34 |
| **Latency** | 697µs    | 740µs    | 790µs    | 839µs    | 887µs    | 938µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45880.50 | 7362.00 | 51205.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35411.17 | 47449.72 | 49019.37 | 49512.64 | 49918.90 | 50112.88 | 50459.80 |
| **Latency** | 884µs    | 933µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29875.99 | 4254.67 | 34634.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26922.59 | 28347.90 | 31776.37 | 32097.98 | 32792.06 | 33082.47 | 33441.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45982.79 | 6780.61 | 49286.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45920.11 | 46741.38 | 47422.08 | 48050.23 | 48369.91 | 48532.29 | 48817.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26295.90 | 4032.58 | 30234.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22808.33 | 25042.97 | 27964.91 | 28314.82 | 29007.90 | 29436.77 | 29827.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10436.22 | 1413.59 | 16138.49 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9481.14 | 10021.49 | 10856.22 | 10963.94 | 11090.18 | 11776.89 | 12698.06 |
| **Latency** | 3ms     | 3ms      | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50131.60 | 4295.05 | 53076.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49692.35 | 50335.33 | 50846.35 | 51350.38 | 51751.13 | 52012.24 | 52575.78 |
| **Latency** | 908µs    | 949µs    | 979µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31928.85 | 3978.20 | 36149.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27680.98 | 31810.36 | 33563.14 | 33945.64 | 34502.30 | 34869.61 | 35323.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6150.60  | 1666.10 | 10454.78 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4010.73 | 5941.62 | 6750.06 | 7063.61 | 7446.06 | 7588.80 | 8644.58 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 11ms    | 12ms    | 18ms    |

---

<p align="center">Generated 2022-09-21T02:59:38.247Z</p>
