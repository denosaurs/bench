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
| Bun                                                                                  | 70956.80 | 6457.20 | 85351.47 | 100%     |
| Deno                                                                                 | 61203.54 | 5152.94 | 69137.29 | 86%      |
| Fast                                                                                 | 58548.17 | 4352.45 | 64639.35 | 83%      |
| Megalo                                                                               | 56544.50 | 5209.36 | 61867.76 | 80%      |
| Hono                                                                                 | 55676.74 | 5340.45 | 59595.42 | 78%      |
| Reno                                                                                 | 46541.61 | 4015.85 | 49927.46 | 66%      |
| http                                                                                 | 42121.58 | 7498.17 | 47684.82 | 59%      |
| Node                                                                                 | 35615.21 | 5011.03 | 53475.15 | 50%      |
| Alosaur                                                                              | 34680.53 | 6819.88 | 40806.24 | 49%      |
| Fastify                                                                              | 32136.66 | 5329.94 | 35147.65 | 45%      |
| Router                                                                               | 30887.95 | 4129.47 | 36609.75 | 44%      |
| Little                                                                               | 28464.99 | 4123.83 | 33547.63 | 40%      |
| Oak                                                                                  | 24953.01 | 3727.98 | 28454.32 | 35%      |
| Aqua                                                                                 | 24428.85 | 3271.42 | 28367.20 | 34%      |
| Dinatra                                                                              | 18301.94 | 3084.06 | 24148.86 | 26%      |
| Abc                                                                                  | 16228.78 | 2762.70 | 19936.11 | 23%      |
| Opine                                                                                | 10233.57 | 1480.48 | 20879.89 | 14%      |
| Express                                                                              | 6362.88  | 1563.97 | 10640.92 | 9%       |
| Servest                                                                              | 5589.07  | 1576.28 | 9671.25  | 8%       |
| Acorn                                                                                | 3929.73  | 2689.24 | 14310.95 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-08bdd88d-1844-4906-8657-c5d5dcefa8ff) |          |         |          |          |

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
| 16228.78 | 2762.70 | 19936.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13710.11 | 15485.27 | 16225.73 | 18229.46 | 19231.12 | 19362.53 | 19682.38 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3929.73  | 2689.24 | 14310.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1981.37 | 2524.51 | 2973.83 | 3979.21 | 8742.04 | 11104.28 | 12957.67 |
| **Latency** | 4ms     | 5ms     | 12ms    | 17ms    | 21ms    | 22ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34680.53 | 6819.88 | 40806.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24029.94 | 36082.84 | 37510.72 | 38202.52 | 38562.58 | 38810.62 | 39437.08 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24428.85 | 3271.42 | 28367.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21639.49 | 23247.56 | 25871.94 | 26181.58 | 26406.16 | 26711.37 | 27218.13 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 70956.80 | 6457.20 | 85351.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65984.85 | 70240.44 | 72314.16 | 73518.00 | 74926.67 | 76534.88 | 82901.11 |
| **Latency** | 475µs    | 561µs    | 741µs    | 774µs    | 806µs    | 856µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61203.54 | 5152.94 | 69137.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56974.97 | 60709.46 | 62648.55 | 63616.95 | 64229.92 | 64622.35 | 65525.99 |
| **Latency** | 590µs    | 674µs    | 839µs    | 896µs    | 948µs    | 988µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18301.94 | 3084.06 | 24148.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14815.36 | 15728.25 | 19749.83 | 20166.31 | 20403.81 | 20541.18 | 21892.82 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6362.88  | 1563.97 | 10640.92 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4108.28 | 4917.34 | 7238.92 | 7424.99 | 7545.32 | 7593.68 | 7661.18 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 12ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58548.17 | 4352.45 | 64639.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54855.86 | 58022.38 | 59706.94 | 60549.17 | 61280.36 | 61614.52 | 62197.05 |
| **Latency** | 647µs    | 739µs    | 848µs    | 929µs    | 970µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32136.66 | 5329.94 | 35147.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31672.71 | 32766.05 | 33624.74 | 34099.09 | 34373.76 | 34508.49 | 34779.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55676.74 | 5340.45 | 59595.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53110.39 | 55400.31 | 56846.94 | 57658.93 | 58300.29 | 58525.46 | 59303.85 |
| **Latency** | 788µs    | 829µs    | 869µs    | 913µs    | 973µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42121.58 | 7498.17 | 47684.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29105.81 | 43519.37 | 45307.49 | 45935.90 | 46492.58 | 46763.46 | 47213.85 |
| **Latency** | 959µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28464.99 | 4123.83 | 33547.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24719.91 | 26227.27 | 30413.86 | 30715.26 | 31008.85 | 31356.39 | 31942.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56544.50 | 5209.36 | 61867.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52620.24 | 55281.68 | 58011.98 | 59228.74 | 59933.28 | 60423.88 | 61018.02 |
| **Latency** | 737µs    | 795µs    | 860µs    | 938µs    | 991µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35615.21 | 5011.03 | 53475.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35203.34 | 36007.40 | 36718.80 | 37277.37 | 37608.85 | 37773.48 | 38018.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24953.01 | 3727.98 | 28454.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21082.98 | 25255.71 | 26507.18 | 26703.12 | 26955.42 | 27232.19 | 27781.01 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10233.57 | 1480.48 | 20879.89 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9010.60 | 9732.66 | 10523.31 | 10752.99 | 11251.28 | 12006.97 | 13441.39 |
| **Latency** | 3ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46541.61 | 4015.85 | 49927.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45569.53 | 46425.25 | 47207.62 | 47995.28 | 48576.43 | 48818.99 | 49320.27 |
| **Latency** | 943µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30887.95 | 4129.47 | 36609.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25777.55 | 31119.80 | 32606.40 | 33105.02 | 33570.17 | 33786.37 | 34121.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5589.07  | 1576.28 | 9671.25 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3227.85 | 5538.65 | 6104.25 | 6466.59 | 6752.43 | 7002.55 | 7825.74 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 14ms    | 19ms    |

---

<p align="center">Generated 2022-10-24T03:03:22.491Z</p>
