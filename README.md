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
| Bun                                                                                  | 71000.77 | 3973.73 | 84049.14  | 100%     |
| Deno                                                                                 | 60645.04 | 6529.17 | 69816.28  | 85%      |
| Fast                                                                                 | 58748.02 | 4760.25 | 63166.90  | 83%      |
| Hono                                                                                 | 57281.05 | 5416.60 | 63904.74  | 81%      |
| Megalo                                                                               | 57077.12 | 4705.70 | 60835.62  | 80%      |
| Reno                                                                                 | 46004.03 | 4011.47 | 49535.95  | 65%      |
| http                                                                                 | 43451.37 | 8485.78 | 49663.60  | 61%      |
| Node                                                                                 | 37063.43 | 5305.58 | 41528.92  | 52%      |
| Alosaur                                                                              | 34136.24 | 6947.87 | 86848.10  | 48%      |
| Fastify                                                                              | 31761.30 | 5149.76 | 35518.62  | 45%      |
| Router                                                                               | 30428.48 | 4227.06 | 34273.48  | 43%      |
| Little                                                                               | 28400.66 | 3872.45 | 32613.93  | 40%      |
| Oak                                                                                  | 24500.66 | 3704.46 | 28106.85  | 35%      |
| Aqua                                                                                 | 24374.07 | 3266.73 | 27675.74  | 34%      |
| Dinatra                                                                              | 17903.15 | 3465.34 | 37493.91  | 25%      |
| Abc                                                                                  | 13193.72 | 3905.97 | 19288.48  | 19%      |
| Opine                                                                                | 10366.77 | 5520.19 | 137096.77 | 15%      |
| Express                                                                              | 6736.76  | 1406.79 | 8476.40   | 9%       |
| Servest                                                                              | 5692.64  | 1587.98 | 8457.80   | 8%       |
| Acorn                                                                                | 3917.72  | 2675.88 | 15384.34  | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-0eecf3a1-5e49-4b09-9bc2-ce05101a5c01) |          |         |           |          |

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
| 13193.72 | 3905.97 | 19288.48 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8522.44 | 9507.14 | 14223.37 | 16933.92 | 17593.85 | 18076.30 | 18503.28 |
| **Latency** | 2ms     | 2ms     | 2ms      | 5ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3917.72  | 2675.88 | 15384.34 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1929.58 | 2501.67 | 2974.14 | 4091.69 | 8304.10 | 10835.91 | 13070.78 |
| **Latency** | 4ms     | 5ms     | 12ms    | 18ms    | 21ms    | 23ms     | 24ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34136.24 | 6947.87 | 86848.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23111.88 | 35537.10 | 37025.20 | 37467.34 | 38013.46 | 38292.71 | 38775.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24374.07 | 3266.73 | 27675.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21345.65 | 23107.45 | 25822.03 | 26175.44 | 26492.19 | 26787.44 | 27173.41 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 71000.77 | 3973.73 | 84049.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66245.30 | 70015.06 | 71707.38 | 72727.15 | 74019.49 | 75413.07 | 81676.27 |
| **Latency** | 478µs    | 561µs    | 743µs    | 781µs    | 818µs    | 850µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60645.04 | 6529.17 | 69816.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56451.80 | 60646.42 | 62535.74 | 63468.04 | 64279.91 | 64666.62 | 65527.05 |
| **Latency** | 587µs    | 672µs    | 843µs    | 899µs    | 952µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17903.15 | 3465.34 | 37493.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13712.53 | 15949.20 | 19021.75 | 19522.71 | 21268.07 | 21842.86 | 22277.36 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6736.76  | 1406.79 | 8476.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4304.23 | 6762.17 | 7422.00 | 7563.11 | 7656.46 | 7694.99 | 7738.49 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58748.02 | 4760.25 | 63166.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54573.92 | 58213.03 | 60136.35 | 60933.92 | 61579.85 | 61971.20 | 62507.91 |
| **Latency** | 691µs    | 764µs    | 821µs    | 914µs    | 965µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31761.30 | 5149.76 | 35518.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31405.46 | 32266.60 | 33214.09 | 33611.39 | 33820.77 | 33932.71 | 34114.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 57281.05 | 5416.60 | 63904.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53910.47 | 57029.94 | 58635.47 | 59360.01 | 59960.48 | 60273.23 | 60785.33 |
| **Latency** | 743µs    | 785µs    | 842µs    | 910µs    | 970µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43451.37 | 8485.78 | 49663.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28957.08 | 45628.02 | 47227.73 | 47655.31 | 47988.04 | 48242.67 | 48589.79 |
| **Latency** | 925µs    | 976µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28400.66 | 3872.45 | 32613.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24737.08 | 26020.07 | 30257.62 | 30535.27 | 30795.26 | 31099.48 | 31548.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 57077.12 | 4705.70 | 60835.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54208.43 | 56894.76 | 58169.01 | 58942.18 | 59598.80 | 59866.67 | 60407.58 |
| **Latency** | 740µs    | 793µs    | 855µs    | 930µs    | 983µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37063.43 | 5305.58 | 41528.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36549.50 | 37569.37 | 38164.36 | 38962.59 | 39211.62 | 39327.06 | 39513.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24500.66 | 3704.46 | 28106.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20533.16 | 24298.99 | 26029.52 | 26355.80 | 26774.74 | 27049.47 | 27561.66 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 10366.77 | 5520.19 | 137096.77 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8924.49 | 9595.13 | 10477.41 | 10703.48 | 11221.87 | 12110.39 | 13331.81 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46004.03 | 4011.47 | 49535.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45232.32 | 45825.07 | 46600.68 | 47370.66 | 47926.74 | 48279.28 | 48807.71 |
| **Latency** | 969µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30428.48 | 4227.06 | 34273.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25203.65 | 30196.47 | 32313.92 | 32661.15 | 33024.72 | 33376.72 | 33772.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5692.64  | 1587.98 | 8457.80 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3030.84 | 5621.73 | 6164.14 | 6640.61 | 6886.65 | 7025.47 | 8182.61 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 12ms    | 13ms    | 19ms    |

---

<p align="center">Generated 2022-10-27T02:31:17.313Z</p>
