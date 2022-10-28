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

| Framework                                                                            | Mean     | Stddev  | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | -------- | -------- |
| Bun                                                                                  | 78011.35 | 6861.55 | 90454.03 | 100%     |
| Deno                                                                                 | 69019.87 | 4558.19 | 77317.39 | 88%      |
| Fast                                                                                 | 66347.32 | 6225.93 | 71318.22 | 85%      |
| Megalo                                                                               | 64733.22 | 5116.70 | 69941.97 | 83%      |
| Hono                                                                                 | 61787.31 | 5265.16 | 67124.87 | 79%      |
| Reno                                                                                 | 51130.81 | 4085.50 | 54335.77 | 66%      |
| http                                                                                 | 49933.28 | 8315.23 | 56126.96 | 64%      |
| Node                                                                                 | 45397.65 | 6717.84 | 48233.25 | 58%      |
| Fastify                                                                              | 39181.91 | 6621.85 | 42271.21 | 50%      |
| Alosaur                                                                              | 38795.31 | 7102.21 | 44305.10 | 50%      |
| Router                                                                               | 34038.43 | 4213.99 | 38384.87 | 44%      |
| Little                                                                               | 32128.81 | 4201.84 | 36334.50 | 41%      |
| Oak                                                                                  | 27552.40 | 5205.27 | 37085.58 | 35%      |
| Aqua                                                                                 | 26334.35 | 3081.32 | 29934.70 | 34%      |
| Dinatra                                                                              | 20661.29 | 3737.57 | 30144.53 | 26%      |
| Abc                                                                                  | 18387.74 | 2351.62 | 22177.99 | 24%      |
| Opine                                                                                | 11199.03 | 1352.46 | 14327.29 | 14%      |
| Express                                                                              | 7890.31  | 1627.04 | 9876.91  | 10%      |
| Servest                                                                              | 6423.27  | 1807.13 | 11189.39 | 8%       |
| Acorn                                                                                | 4276.88  | 2952.77 | 16335.32 | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-d1da4e7d-9570-4364-b3dd-2e342d19823a) |          |         |          |          |

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
| 18387.74 | 2351.62 | 22177.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16504.92 | 17655.79 | 19132.09 | 19520.45 | 19825.32 | 20040.83 | 21800.96 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4276.88  | 2952.77 | 16335.32 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2186.03 | 2771.29 | 3235.85 | 4495.81 | 9792.61 | 11999.23 | 14506.63 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 20ms    | 22ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38795.31 | 7102.21 | 44305.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29543.84 | 38850.57 | 42018.37 | 42527.72 | 42926.11 | 43160.03 | 43578.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26334.35 | 3081.32 | 29934.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24318.65 | 25448.81 | 27302.93 | 27979.67 | 28462.72 | 28865.64 | 29211.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78011.35 | 6861.55 | 90454.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74266.64 | 78000.57 | 79433.16 | 80476.52 | 82010.45 | 83404.14 | 85901.64 |
| **Latency** | 435µs    | 511µs    | 674µs    | 700µs    | 721µs    | 778µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69019.87 | 4558.19 | 77317.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64740.04 | 68425.65 | 70218.85 | 71139.72 | 71837.96 | 72329.69 | 72909.25 |
| **Latency** | 535µs    | 604µs    | 747µs    | 795µs    | 840µs    | 865µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20661.29 | 3737.57 | 30144.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15704.53 | 20024.40 | 22198.76 | 22545.59 | 24404.65 | 24664.22 | 25779.83 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7890.31  | 1627.04 | 9876.91 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5382.35 | 7060.38 | 8769.53 | 8905.09 | 8994.61 | 9016.43 | 9046.70 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 66347.32 | 6225.93 | 71318.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61969.97 | 66027.08 | 68307.93 | 69118.38 | 69702.66 | 70012.85 | 70612.59 |
| **Latency** | 579µs    | 665µs    | 734µs    | 808µs    | 850µs    | 892µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39181.91 | 6621.85 | 42271.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39019.11 | 40185.38 | 40804.67 | 41337.80 | 41734.00 | 41896.79 | 42059.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61787.31 | 5265.16 | 67124.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59720.83 | 61704.86 | 62922.58 | 63455.34 | 63892.00 | 64197.80 | 65062.71 |
| **Latency** | 729µs    | 760µs    | 789µs    | 819µs    | 859µs    | 884µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49933.28 | 8315.23 | 56126.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39628.22 | 51626.83 | 53592.37 | 54024.78 | 54382.34 | 54602.65 | 54903.59 |
| **Latency** | 815µs    | 863µs    | 952µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32128.81 | 4201.84 | 36334.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29608.83 | 30627.34 | 33933.05 | 34363.80 | 34675.41 | 35095.79 | 35493.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64733.22 | 5116.70 | 69941.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62306.81 | 64713.82 | 65825.46 | 66549.51 | 67130.16 | 67470.51 | 68202.26 |
| **Latency** | 670µs    | 712µs    | 753µs    | 802µs    | 857µs    | 898µs    | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45397.65 | 6717.84 | 48233.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45258.80 | 46358.05 | 46866.51 | 47534.66 | 47777.37 | 47891.91 | 48052.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27552.40 | 5205.27 | 37085.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19525.76 | 26144.17 | 29982.99 | 30433.47 | 30818.93 | 31097.76 | 31518.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11199.03 | 1352.46 | 14327.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10467.70 | 10821.24 | 11585.66 | 11680.52 | 11766.25 | 12260.84 | 13267.92 |
| **Latency** | 3ms      | 3ms      | 4ms      | 5ms      | 5ms      | 5ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51130.81 | 4085.50 | 54335.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50288.93 | 50908.65 | 51738.87 | 52518.82 | 53015.29 | 53318.30 | 53785.06 |
| **Latency** | 892µs    | 931µs    | 961µs    | 996µs    | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34038.43 | 4213.99 | 38384.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29962.00 | 33363.02 | 35783.52 | 36140.80 | 36614.51 | 36963.65 | 37303.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6423.27  | 1807.13 | 11189.39 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4312.85 | 6139.63 | 7035.16 | 7450.64 | 7715.73 | 7911.14 | 9555.17 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 10ms    | 12ms    | 16ms    |

---

<p align="center">Generated 2022-10-28T02:40:30.790Z</p>
