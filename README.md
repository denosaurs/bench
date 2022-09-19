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

| Framework | Mean     | Stddev  | Max      | Relative |
| --------- | -------- | ------- | -------- | -------- |
| Bun       | 87374.99 | 6707.34 | 97201.30 | 100%     |
| Deno      | 64503.98 | 5291.99 | 70462.53 | 74%      |
| Fast      | 60716.83 | 4704.96 | 66709.57 | 69%      |
| Hono      | 59742.93 | 5841.01 | 64225.10 | 68%      |
| Reno      | 48819.13 | 4630.42 | 53799.85 | 56%      |
| http      | 43391.85 | 8895.07 | 54269.36 | 50%      |
| Alosaur   | 35051.00 | 8645.76 | 41999.65 | 40%      |
| Node      | 33835.07 | 4814.44 | 36414.73 | 39%      |
| Router    | 31929.32 | 5372.37 | 36724.80 | 37%      |
| Little    | 29567.07 | 5766.42 | 35481.32 | 34%      |
| Fastify   | 29027.37 | 4489.74 | 32202.31 | 33%      |
| Oak       | 27463.44 | 5289.28 | 33184.45 | 31%      |
| Aqua      | 26056.61 | 4360.09 | 31555.74 | 30%      |
| Abc       | 17263.85 | 2903.89 | 23288.44 | 20%      |
| Dinatra   | 12892.64 | 2119.14 | 16962.31 | 15%      |
| Opine     | 12179.74 | 2048.72 | 15237.87 | 14%      |
| Express   | 6883.43  | 1520.16 | 12718.11 | 8%       |
| Servest   | 5548.20  | 1708.31 | 9635.38  | 6%       |
| Acorn     | 5000.83  | 3985.75 | 27032.51 | 6%       |

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
| 17263.85 | 2903.89 | 23288.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14037.08 | 15505.23 | 18256.37 | 19420.53 | 19908.27 | 20200.70 | 21014.22 |
| **Latency** | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5000.83  | 3985.75 | 27032.51 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 2359.66 | 2901.59 | 3831.66 | 5153.43 | 10587.00 | 13306.91 | 24523.89 |
| **Latency** | 3ms     | 4ms     | 10ms    | 14ms    | 18ms     | 20ms     | 27ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35051.00 | 8645.76 | 41999.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22506.18 | 33110.07 | 39420.69 | 40125.02 | 40525.39 | 40719.70 | 41228.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26056.61 | 4360.09 | 31555.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22982.73 | 24285.42 | 27807.52 | 28616.54 | 29006.47 | 29305.36 | 29662.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 87374.99 | 6707.34 | 97201.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 78658.10 | 87310.31 | 89211.99 | 90420.46 | 91757.30 | 93118.16 | 96606.11 |
| **Latency** | 366µs    | 459µs    | 604µs    | 634µs    | 685µs    | 767µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64503.98 | 5291.99 | 70462.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60284.78 | 64042.01 | 65561.84 | 66766.72 | 67755.95 | 68421.89 | 69652.66 |
| **Latency** | 514µs    | 638µs    | 807µs    | 867µs    | 930µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12892.64 | 2119.14 | 16962.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10904.95 | 12784.53 | 13516.02 | 13804.17 | 14125.07 | 14534.88 | 15657.69 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      | 6ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6883.43  | 1520.16 | 12718.11 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4800.90 | 6030.99 | 7392.40 | 7945.04 | 8102.49 | 8149.65 | 8283.69 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 11ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60716.83 | 4704.96 | 66709.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58132.05 | 60570.46 | 61666.24 | 62435.69 | 63171.39 | 63500.29 | 64642.08 |
| **Latency** | 621µs    | 698µs    | 835µs    | 898µs    | 942µs    | 983µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29027.37 | 4489.74 | 32202.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28915.92 | 29640.32 | 30163.45 | 30564.44 | 30755.52 | 30845.71 | 31157.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59742.93 | 5841.01 | 64225.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58066.67 | 59537.78 | 60912.88 | 61963.40 | 62626.28 | 63000.26 | 63667.97 |
| **Latency** | 689µs    | 749µs    | 809µs    | 881µs    | 937µs    | 993µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43391.85 | 8895.07 | 54269.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26600.86 | 46010.36 | 47342.79 | 47762.92 | 48073.17 | 48255.20 | 48618.04 |
| **Latency** | 922µs    | 967µs    | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29567.07 | 5766.42 | 35481.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23107.44 | 27048.42 | 32554.38 | 33217.32 | 33525.38 | 33783.29 | 34253.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33835.07 | 4814.44 | 36414.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33306.93 | 34271.72 | 34925.67 | 35458.77 | 35851.91 | 36053.40 | 36236.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27463.44 | 5289.28 | 33184.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22220.18 | 25871.30 | 29718.56 | 30333.19 | 30794.63 | 31066.24 | 31578.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12179.74 | 2048.72 | 15237.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10461.89 | 11743.92 | 12830.93 | 13210.58 | 13628.98 | 14140.72 | 14932.28 |
| **Latency** | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 5ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48819.13 | 4630.42 | 53799.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48416.63 | 49031.70 | 49558.46 | 50099.42 | 50509.17 | 50894.23 | 51826.02 |
| **Latency** | 913µs    | 973µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31929.32 | 5372.37 | 36724.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25178.99 | 31152.23 | 34444.63 | 35041.16 | 35384.38 | 35624.35 | 36148.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5548.20  | 1708.31 | 9635.38 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2809.26 | 5075.31 | 6242.39 | 6613.18 | 6911.16 | 7016.38 | 7803.60 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 12ms    | 15ms    | 21ms    |

---

<p align="center">Generated 2022-09-19T02:58:22.615Z</p>
