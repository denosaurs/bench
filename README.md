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
| Bun                                                                                  | 63745.38 | 7622.23 | 79350.40  | 100%     |
| Deno                                                                                 | 55480.31 | 5711.46 | 64220.76  | 87%      |
| Fast                                                                                 | 54406.73 | 5363.41 | 63528.56  | 85%      |
| Megalo                                                                               | 51677.97 | 5202.25 | 60287.90  | 81%      |
| Hono                                                                                 | 49830.70 | 5195.19 | 56481.58  | 78%      |
| Reno                                                                                 | 41066.32 | 3913.64 | 46775.53  | 64%      |
| http                                                                                 | 37810.04 | 7894.62 | 44862.73  | 59%      |
| Node                                                                                 | 34391.68 | 5413.62 | 39336.32  | 54%      |
| Alosaur                                                                              | 28826.89 | 7508.69 | 137924.69 | 45%      |
| Fastify                                                                              | 28446.74 | 5158.32 | 33324.10  | 45%      |
| Router                                                                               | 26288.25 | 3865.86 | 31031.95  | 41%      |
| Little                                                                               | 24724.38 | 3989.69 | 29160.62  | 39%      |
| Oak                                                                                  | 21042.59 | 4006.83 | 26255.42  | 33%      |
| Aqua                                                                                 | 20766.53 | 3305.35 | 25259.58  | 33%      |
| Dinatra                                                                              | 16169.67 | 3599.98 | 34431.67  | 25%      |
| Abc                                                                                  | 13797.01 | 2267.97 | 18366.76  | 22%      |
| Opine                                                                                | 8823.16  | 1235.84 | 11971.79  | 14%      |
| Acorn                                                                                | 6776.54  | 7132.54 | 45246.53  | 11%      |
| Express                                                                              | 5824.28  | 1475.57 | 8764.10   | 9%       |
| Servest                                                                              | 4841.25  | 1485.13 | 10080.51  | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-a8ab700a-db43-48d0-9f85-ae05c454b2d2) |          |         |           |          |

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
| 13797.01 | 2267.97 | 18366.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10927.20 | 12309.39 | 14659.74 | 15133.25 | 15500.37 | 15838.04 | 17019.35 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6776.54  | 7132.54 | 45246.53 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 93.26 | 2004.39 | 3571.95 | 9206.76 | 19828.52 | 20668.31 | 21711.89 |
| **Latency** | 5ms   | 6ms     | 13ms    | 20ms    | 23ms     | 25ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 28826.89 | 7508.69 | 137924.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17654.48 | 28895.01 | 31627.66 | 32501.01 | 33036.00 | 33372.67 | 34070.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20766.53 | 3305.35 | 25259.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17831.48 | 19760.50 | 22125.31 | 22524.32 | 22967.47 | 23345.37 | 24197.35 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63745.38 | 7622.23 | 79350.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57594.03 | 62335.71 | 64830.21 | 66908.22 | 71310.02 | 74320.45 | 76911.16 |
| **Latency** | 524µs    | 621µs    | 793µs    | 863µs    | 914µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55480.31 | 5711.46 | 64220.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49757.59 | 54200.72 | 57009.88 | 58482.11 | 59815.64 | 60759.75 | 62415.64 |
| **Latency** | 655µs    | 750µs    | 895µs    | 982µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16169.67 | 3599.98 | 34431.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11394.57 | 14933.80 | 16931.88 | 18691.56 | 20184.18 | 20505.57 | 21403.17 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5824.28  | 1475.57 | 8764.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3265.45 | 5673.32 | 6511.35 | 6686.35 | 6809.59 | 6877.19 | 7182.05 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 11ms    | 13ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54406.73 | 5363.41 | 63528.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49749.43 | 53505.54 | 55719.13 | 56910.96 | 58006.01 | 58594.99 | 60009.82 |
| **Latency** | 751µs    | 821µs    | 882µs    | 976µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28446.74 | 5158.32 | 33324.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26976.43 | 28961.23 | 29838.89 | 30486.71 | 31107.11 | 31445.72 | 32209.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49830.70 | 5195.19 | 56481.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46709.46 | 49026.63 | 50833.71 | 52069.42 | 53070.54 | 53606.07 | 54705.19 |
| **Latency** | 871µs    | 920µs    | 968µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37810.04 | 7894.62 | 44862.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24196.29 | 39215.40 | 41030.10 | 41810.98 | 42561.03 | 42965.03 | 43919.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24724.38 | 3989.69 | 29160.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21032.38 | 23410.62 | 26233.01 | 27006.58 | 27644.69 | 27962.29 | 28545.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51677.97 | 5202.25 | 60287.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48026.19 | 50749.35 | 52655.00 | 54048.29 | 55428.01 | 56123.79 | 57702.53 |
| **Latency** | 809µs    | 873µs    | 936µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34391.68 | 5413.62 | 39336.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33656.94 | 34700.81 | 35565.92 | 36249.01 | 36962.03 | 37326.26 | 38278.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21042.59 | 4006.83 | 26255.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16621.43 | 20631.81 | 22676.53 | 23056.86 | 23537.24 | 23945.55 | 24959.93 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8823.16  | 1235.84 | 11971.79 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 7651.47 | 8629.52 | 9112.24 | 9368.32 | 9657.52 | 9902.18 | 11145.47 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 6ms     | 7ms     | 10ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41066.32 | 3913.64 | 46775.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40117.39 | 40744.33 | 41513.85 | 42416.44 | 43371.43 | 44017.94 | 44817.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26288.25 | 3865.86 | 31031.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21099.83 | 26305.95 | 27781.33 | 28260.20 | 28930.08 | 29255.16 | 29704.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4841.25  | 1485.13 | 10080.51 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2310.48 | 4930.80 | 5334.49 | 5579.15 | 5811.59 | 5977.15 | 7041.58 |
| **Latency** | 8ms     | 8ms     | 9ms     | 10ms    | 14ms    | 17ms    | 22ms    |

---

<p align="center">Generated 2022-10-18T02:55:05.073Z</p>
