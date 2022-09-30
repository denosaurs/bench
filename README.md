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

| Framework                                                                            | Mean     | Stddev  | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | -------- | -------- |
| Bun                                                                                  | 74733.74 | 6903.35 | 86492.58 | 100%     |
| Deno                                                                                 | 67634.89 | 4973.94 | 76465.15 | 91%      |
| Fast                                                                                 | 66099.42 | 6253.35 | 72914.95 | 88%      |
| Hono                                                                                 | 57100.19 | 4373.24 | 61357.58 | 76%      |
| Reno                                                                                 | 48630.90 | 4607.22 | 52692.78 | 65%      |
| http                                                                                 | 46767.82 | 7800.77 | 53609.21 | 63%      |
| Node                                                                                 | 44127.66 | 6696.94 | 48725.25 | 59%      |
| Fastify                                                                              | 36986.41 | 6667.59 | 41004.08 | 49%      |
| Alosaur                                                                              | 36945.37 | 7645.67 | 43296.53 | 49%      |
| Router                                                                               | 31952.90 | 4080.60 | 36299.82 | 43%      |
| Little                                                                               | 30113.48 | 4534.61 | 34525.32 | 40%      |
| Oak                                                                                  | 26934.71 | 4225.84 | 31082.48 | 36%      |
| Aqua                                                                                 | 25382.94 | 3204.43 | 29820.40 | 34%      |
| Dinatra                                                                              | 19173.64 | 3313.73 | 23917.90 | 26%      |
| Abc                                                                                  | 16146.85 | 3265.35 | 23168.14 | 22%      |
| Opine                                                                                | 10306.83 | 1390.14 | 13192.08 | 14%      |
| Express                                                                              | 8066.41  | 1594.60 | 9311.53  | 11%      |
| Servest                                                                              | 5950.19  | 1702.32 | 9332.00  | 8%       |
| Acorn                                                                                | 4725.15  | 6145.50 | 79476.39 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-a49f0cfe-172a-46c6-80c3-cc8b4788cbbe) |          |         |          |          |

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
| 16146.85 | 3265.35 | 23168.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10559.08 | 14827.70 | 16806.52 | 18304.25 | 19759.33 | 20120.27 | 20814.07 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4725.15  | 6145.50 | 79476.39 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1347.87 | 2671.61 | 3382.99 | 5039.40 | 9633.02 | 12309.09 | 15005.86 |
| **Latency** | 3ms     | 4ms     | 11ms    | 17ms    | 21ms    | 24ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36945.37 | 7645.67 | 43296.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26513.21 | 37517.94 | 40368.78 | 41031.09 | 41517.36 | 41819.48 | 42252.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25382.94 | 3204.43 | 29820.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22569.27 | 24290.51 | 26480.50 | 27172.18 | 27796.19 | 28252.32 | 28647.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 74733.74 | 6903.35 | 86492.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69488.95 | 73815.37 | 76591.14 | 78211.59 | 79305.41 | 80167.44 | 82606.46 |
| **Latency** | 444µs    | 542µs    | 697µs    | 730µs    | 769µs    | 842µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67634.89 | 4973.94 | 76465.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63309.47 | 66455.35 | 68804.51 | 70207.40 | 71118.72 | 71645.36 | 72477.59 |
| **Latency** | 551µs    | 620µs    | 752µs    | 811µs    | 852µs    | 888µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19173.64 | 3313.73 | 23917.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15697.75 | 16535.65 | 20794.96 | 21265.70 | 21615.21 | 21771.44 | 22690.57 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 8066.41  | 1594.60 | 9311.53 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5770.27 | 8115.89 | 8791.59 | 8990.88 | 9106.81 | 9151.42 | 9239.77 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 66099.42 | 6253.35 | 72914.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62324.21 | 65627.43 | 67617.89 | 68719.10 | 69623.16 | 70332.91 | 71600.81 |
| **Latency** | 644µs    | 682µs    | 725µs    | 800µs    | 849µs    | 898µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36986.41 | 6667.59 | 41004.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35910.36 | 37901.84 | 38804.98 | 39523.65 | 40078.10 | 40312.03 | 40714.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 57100.19 | 4373.24 | 61357.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54835.56 | 56689.48 | 58002.81 | 58748.28 | 59478.94 | 59838.81 | 60579.79 |
| **Latency** | 794µs    | 820µs    | 849µs    | 882µs    | 934µs    | 986µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46767.82 | 7800.77 | 53609.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35403.84 | 48113.22 | 50109.94 | 50860.13 | 51313.77 | 51557.26 | 52071.07 |
| **Latency** | 862µs    | 912µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30113.48 | 4534.61 | 34525.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26209.39 | 28576.65 | 32004.43 | 32741.17 | 33208.54 | 33606.97 | 34131.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44127.66 | 6696.94 | 48725.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42533.10 | 44612.42 | 45613.15 | 46543.21 | 47107.80 | 47416.99 | 47970.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26934.71 | 4225.84 | 31082.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23021.84 | 25862.55 | 28583.09 | 29112.63 | 29579.66 | 30054.62 | 30658.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10306.83 | 1390.14 | 13192.08 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9112.75 | 9768.99 | 10700.67 | 10949.48 | 11222.63 | 11701.66 | 12546.78 |
| **Latency** | 3ms     | 3ms     | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48630.90 | 4607.22 | 52692.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47200.60 | 48400.90 | 49503.40 | 50394.73 | 51098.55 | 51418.74 | 52198.58 |
| **Latency** | 927µs    | 968µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31952.90 | 4080.60 | 36299.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27420.12 | 31388.10 | 33700.04 | 34243.72 | 34623.75 | 34963.94 | 35550.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5950.19  | 1702.32 | 9332.00 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3613.22 | 5784.26 | 6458.15 | 6980.97 | 7365.70 | 7523.73 | 8313.69 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 11ms    | 13ms    | 18ms    |

---

<p align="center">Generated 2022-09-30T09:30:52.129Z</p>
