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
| Bun                                                                                  | 49204.77 | 8529.10 | 63245.45 | 100%     |
| Deno                                                                                 | 38243.72 | 5790.53 | 47312.52 | 78%      |
| Fast                                                                                 | 35577.53 | 6191.65 | 44146.10 | 72%      |
| Megalo                                                                               | 31318.82 | 5120.85 | 41719.17 | 64%      |
| Hono                                                                                 | 30850.62 | 5020.63 | 38902.71 | 63%      |
| http                                                                                 | 28958.55 | 6436.81 | 35903.49 | 59%      |
| Reno                                                                                 | 25494.20 | 3903.40 | 30839.04 | 52%      |
| Alosaur                                                                              | 21709.22 | 5821.64 | 28450.65 | 44%      |
| Router                                                                               | 19572.25 | 3242.28 | 24901.04 | 40%      |
| Node                                                                                 | 17915.87 | 3696.30 | 25899.26 | 36%      |
| Little                                                                               | 17423.90 | 3294.01 | 23662.73 | 35%      |
| Aqua                                                                                 | 16337.55 | 3002.88 | 21141.63 | 33%      |
| Oak                                                                                  | 14232.58 | 2705.20 | 19988.24 | 29%      |
| Fastify                                                                              | 11347.63 | 3985.91 | 18482.43 | 23%      |
| Dinatra                                                                              | 10016.48 | 2234.87 | 14559.68 | 20%      |
| Abc                                                                                  | 7333.04  | 2025.65 | 11673.12 | 15%      |
| Opine                                                                                | 6135.14  | 1726.92 | 52151.07 | 12%      |
| Express                                                                              | 4118.44  | 1076.79 | 12674.27 | 8%       |
| Acorn                                                                                | 3866.28  | 3911.98 | 48512.29 | 8%       |
| Servest                                                                              | 3675.12  | 3094.21 | 96914.17 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-4411d8e9-49cf-477e-8a39-a30394ef52e9) |          |         |          |          |

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
| 7333.04  | 2025.65 | 11673.12 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 4977.40 | 5403.15 | 7760.29 | 8936.94 | 9824.79 | 10318.77 | 10838.35 |
| **Latency** | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 10ms     | 13ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3866.28  | 3911.98 | 48512.29 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 98.49 | 2383.99 | 3090.80 | 5357.99 | 6851.61 | 7690.96 | 10072.65 |
| **Latency** | 6ms   | 7ms     | 12ms    | 20ms    | 24ms    | 26ms    | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21709.22 | 5821.64 | 28450.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12130.30 | 19765.63 | 24302.36 | 25705.68 | 26444.13 | 26841.21 | 27529.96 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16337.55 | 3002.88 | 21141.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12539.17 | 14990.07 | 17302.40 | 18293.90 | 18960.30 | 19406.52 | 20066.38 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49204.77 | 8529.10 | 63245.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38720.47 | 47172.62 | 51117.46 | 53645.02 | 57802.27 | 59722.99 | 62007.54 |
| **Latency** | 648µs    | 776µs    | 971µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38243.72 | 5790.53 | 47312.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30770.15 | 36461.95 | 39901.59 | 42016.77 | 43185.75 | 43712.64 | 44830.81 |
| **Latency** | 869µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10016.48 | 2234.87 | 14559.68 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6800.14 | 8818.83 | 10960.95 | 11501.66 | 11903.96 | 12193.46 | 12655.56 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4118.44  | 1076.79 | 12674.27 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2451.58 | 3646.75 | 4566.40 | 4779.19 | 4928.88 | 4990.63 | 5305.74 |
| **Latency** | 10ms    | 10ms    | 10ms    | 12ms    | 16ms    | 19ms    | 26ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35577.53 | 6191.65 | 44146.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28558.54 | 33704.03 | 37539.58 | 39497.12 | 40557.14 | 41226.27 | 42346.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11347.63 | 3985.91 | 18482.43 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6073.24 | 6911.68 | 13483.33 | 14677.79 | 15267.18 | 15456.80 | 15807.01 |
| **Latency** | 3ms     | 3ms     | 3ms      | 4ms      | 7ms      | 8ms      | 11ms     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30850.62 | 5020.63 | 38902.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26202.61 | 29814.00 | 32125.93 | 33641.87 | 34911.01 | 35508.65 | 36738.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28958.55 | 6436.81 | 35903.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18284.52 | 28702.16 | 31553.31 | 32642.47 | 33491.98 | 34000.69 | 34479.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 6ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17423.90 | 3294.01 | 23662.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13453.47 | 16285.60 | 18597.74 | 19454.85 | 20066.53 | 20496.29 | 21354.66 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31318.82 | 5120.85 | 41719.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25588.85 | 30292.04 | 32427.55 | 34318.94 | 35887.19 | 36593.20 | 38121.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17915.87 | 3696.30 | 25899.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13030.75 | 17762.52 | 19249.85 | 20003.99 | 20539.22 | 20813.31 | 21217.18 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14232.58 | 2705.20 | 19988.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11153.49 | 13584.34 | 15118.24 | 15752.80 | 16427.71 | 16800.02 | 17461.04 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6135.14  | 1726.92 | 52151.07 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5000.86 | 5816.05 | 6396.63 | 6621.47 | 6811.03 | 6983.39 | 8168.61 |
| **Latency** | 5ms     | 7ms     | 8ms     | 8ms     | 9ms     | 10ms    | 15ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25494.20 | 3903.40 | 30839.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21439.39 | 25131.91 | 26417.37 | 27566.07 | 28567.41 | 29100.20 | 30283.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19572.25 | 3242.28 | 24901.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15202.57 | 18819.91 | 20723.91 | 21615.11 | 22200.42 | 22515.70 | 23270.35 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3675.12  | 3094.21 | 96914.17 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1721.03 | 3444.13 | 3845.40 | 4218.38 | 4583.36 | 4813.91 | 5410.81 |
| **Latency** | 11ms    | 12ms    | 12ms    | 14ms    | 19ms    | 23ms    | 29ms    |

---

<p align="center">Generated 2022-10-15T02:57:16.219Z</p>
