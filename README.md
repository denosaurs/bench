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
  - [Megalo](#megalo)
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
    - [Megalo](#megalo-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev  | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | --------- | -------- |
| Bun                                                                                  | 56210.95 | 7816.89 | 77711.43  | 100%     |
| Deno                                                                                 | 41010.09 | 8553.87 | 51976.46  | 73%      |
| Fast                                                                                 | 39547.75 | 7114.08 | 48830.03  | 70%      |
| Megalo                                                                               | 35064.84 | 6047.31 | 44915.63  | 62%      |
| http                                                                                 | 30547.08 | 6354.04 | 40541.50  | 54%      |
| Reno                                                                                 | 29655.34 | 4826.51 | 36752.35  | 53%      |
| Hono                                                                                 | 29134.57 | 5070.87 | 37910.69  | 52%      |
| Alosaur                                                                              | 24182.86 | 5814.45 | 38255.25  | 43%      |
| Router                                                                               | 19776.97 | 4311.19 | 25626.80  | 35%      |
| Little                                                                               | 18422.41 | 3627.60 | 26729.07  | 33%      |
| Aqua                                                                                 | 18023.66 | 3045.32 | 23227.55  | 32%      |
| Node                                                                                 | 16580.47 | 3372.98 | 23327.10  | 29%      |
| Oak                                                                                  | 15010.29 | 3068.46 | 22104.75  | 27%      |
| Fastify                                                                              | 11723.04 | 3921.89 | 18610.46  | 21%      |
| Dinatra                                                                              | 10606.64 | 2392.37 | 18984.58  | 19%      |
| Abc                                                                                  | 8979.93  | 1462.47 | 11687.73  | 16%      |
| Opine                                                                                | 6142.29  | 2148.65 | 50568.26  | 11%      |
| Acorn                                                                                | 4516.00  | 6269.81 | 106382.98 | 8%       |
| Express                                                                              | 3767.27  | 1131.03 | 14158.05  | 7%       |
| Servest                                                                              | 3680.47  | 1506.54 | 34008.36  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-8c594331-75cd-4f08-960d-d3879491cafc) |          |         |           |          |

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

## [Megalo](https://github.com/tsar-boomba/megalo)

Deno HTTP server framework focused on speed

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
| 8979.93  | 1462.47 | 11687.73 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7103.00 | 8400.86 | 9360.08 | 9801.30 | 10498.61 | 10884.76 | 11181.54 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4516.00  | 6269.81 | 106382.98 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 98.79 | 2473.39 | 3212.77 | 5706.09 | 7748.29 | 11550.58 | 14609.10 |
| **Latency** | 6ms   | 7ms     | 13ms    | 19ms    | 23ms    | 25ms     | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24182.86 | 5814.45 | 38255.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15102.45 | 23021.37 | 26829.99 | 27653.81 | 28310.28 | 28659.91 | 29257.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18023.66 | 3045.32 | 23227.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14599.91 | 16728.81 | 19120.91 | 19910.20 | 20447.03 | 20855.88 | 21689.50 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56210.95 | 7816.89 | 77711.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45549.20 | 54629.31 | 58108.34 | 60028.90 | 63148.43 | 66638.08 | 68323.33 |
| **Latency** | 585µs    | 694µs    | 878µs    | 955µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41010.09 | 8553.87 | 51976.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28937.74 | 34733.41 | 43901.84 | 48168.00 | 49493.55 | 49980.21 | 51010.15 |
| **Latency** | 793µs    | 950µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10606.64 | 2392.37 | 18984.58 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7806.81 | 9485.12 | 11046.08 | 12300.95 | 12981.89 | 13425.39 | 14125.59 |
| **Latency** | 3ms     | 4ms     | 4ms      | 4ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3767.27  | 1131.03 | 14158.05 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2304.06 | 3327.22 | 4122.35 | 4346.25 | 4466.47 | 4544.78 | 5574.03 |
| **Latency** | 11ms    | 11ms    | 11ms    | 13ms    | 18ms    | 21ms    | 27ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39547.75 | 7114.08 | 48830.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30304.60 | 35169.83 | 42119.03 | 45118.58 | 46125.55 | 46681.65 | 47628.80 |
| **Latency** | 938µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11723.04 | 3921.89 | 18610.46 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6433.14 | 6877.04 | 13867.56 | 14757.88 | 15404.65 | 15947.40 | 16933.39 |
| **Latency** | 3ms     | 3ms     | 3ms      | 4ms      | 7ms      | 7ms      | 10ms     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29134.57 | 5070.87 | 37910.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20783.59 | 29062.54 | 30710.24 | 32011.91 | 33079.13 | 33570.23 | 35176.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30547.08 | 6354.04 | 40541.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20411.47 | 28810.43 | 33277.60 | 34714.61 | 35465.75 | 35759.39 | 36615.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18422.41 | 3627.60 | 26729.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13902.77 | 16792.07 | 19735.32 | 20802.96 | 21501.19 | 21910.61 | 22910.92 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35064.84 | 6047.31 | 44915.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27451.73 | 33029.71 | 36289.20 | 39043.61 | 40873.45 | 41735.90 | 42816.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16580.47 | 3372.98 | 23327.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11801.64 | 16368.07 | 17846.02 | 18468.50 | 19039.01 | 19278.83 | 19803.34 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15010.29 | 3068.46 | 22104.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11234.67 | 13689.66 | 16209.72 | 16975.21 | 17413.41 | 17813.45 | 18417.56 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6142.29  | 2148.65 | 50568.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4621.17 | 5765.76 | 6440.18 | 6659.15 | 6819.49 | 7094.44 | 8110.13 |
| **Latency** | 5ms     | 7ms     | 8ms     | 8ms     | 10ms    | 11ms    | 16ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29655.34 | 4826.51 | 36752.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23642.10 | 28210.04 | 31312.24 | 32606.21 | 33629.61 | 34143.55 | 34893.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19776.97 | 4311.19 | 25626.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13827.79 | 17404.71 | 21016.60 | 23183.95 | 23945.28 | 24355.84 | 25137.25 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3680.47  | 1506.54 | 34008.36 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1822.75 | 3419.77 | 3907.58 | 4237.59 | 4689.73 | 4916.65 | 5313.55 |
| **Latency** | 11ms    | 11ms    | 12ms    | 14ms    | 18ms    | 22ms    | 27ms    |

---

<p align="center">Generated 2022-10-17T03:05:46.111Z</p>
