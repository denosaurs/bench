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
| Bun       | 55453.20 | 6876.76 | 69369.87 | 100%     |
| Deno      | 44017.03 | 5846.68 | 54134.78 | 79%      |
| Fast      | 40941.94 | 5864.00 | 50857.84 | 74%      |
| Hono      | 37127.23 | 5947.41 | 46858.54 | 67%      |
| http      | 31701.93 | 6471.37 | 39611.36 | 57%      |
| Reno      | 31297.90 | 3819.59 | 38214.72 | 56%      |
| Alosaur   | 24680.59 | 5025.86 | 32963.83 | 45%      |
| Router    | 21384.16 | 3285.98 | 26620.09 | 39%      |
| Little    | 18680.77 | 3173.42 | 23868.93 | 34%      |
| Aqua      | 17787.16 | 2719.22 | 23518.37 | 32%      |
| Node      | 17511.56 | 3047.24 | 22315.21 | 32%      |
| Oak       | 15538.58 | 2751.05 | 21110.91 | 28%      |
| Fastify   | 11403.54 | 3504.74 | 30225.26 | 21%      |
| Abc       | 9057.12  | 2362.05 | 13906.37 | 16%      |
| Dinatra   | 7575.55  | 1480.74 | 11110.30 | 14%      |
| Opine     | 6133.98  | 943.37  | 11120.53 | 11%      |
| Acorn     | 4175.35  | 5247.79 | 71638.37 | 8%       |
| Express   | 3916.12  | 901.10  | 11199.24 | 7%       |
| Servest   | 3709.80  | 1021.35 | 7239.78  | 7%       |

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
| 9057.12  | 2362.05 | 13906.37 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6316.69 | 7053.79 | 9189.96 | 11035.47 | 11895.32 | 12463.85 | 13081.33 |
| **Latency** | 2ms     | 3ms     | 5ms     | 6ms      | 8ms      | 9ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4175.35  | 5247.79 | 71638.37 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1400.00 | 2387.55 | 3132.07 | 5519.51 | 7158.58 | 8127.63 | 30210.02 |
| **Latency** | 6ms     | 7ms     | 13ms    | 19ms    | 23ms    | 25ms    | 28ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24680.59 | 5025.86 | 32963.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16016.47 | 24554.48 | 26507.73 | 27567.83 | 28272.71 | 28657.41 | 29716.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17787.16 | 2719.22 | 23518.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14754.94 | 17104.69 | 18513.18 | 19354.65 | 20114.84 | 20555.56 | 21128.77 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55453.20 | 6876.76 | 69369.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46382.28 | 54018.89 | 57028.09 | 59213.80 | 61513.44 | 63249.52 | 67261.32 |
| **Latency** | 569µs    | 687µs    | 881µs    | 973µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44017.03 | 5846.68 | 54134.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36724.75 | 42639.39 | 45547.38 | 47346.69 | 48990.65 | 50029.71 | 51996.88 |
| **Latency** | 761µs    | 903µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7575.55  | 1480.74 | 11110.30 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5637.98 | 7451.92 | 8004.00 | 8320.19 | 8603.07 | 8925.14 | 9932.54 |
| **Latency** | 5ms     | 5ms     | 6ms     | 6ms     | 8ms     | 10ms    | 16ms    |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3916.12  | 901.10 | 11199.24 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2650.90 | 3731.27 | 4230.57 | 4380.83 | 4496.59 | 4598.81 | 4842.23 |
| **Latency** | 11ms    | 11ms    | 11ms    | 12ms    | 16ms    | 19ms    | 24ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40941.94 | 5864.00 | 50857.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33683.02 | 39429.00 | 42575.28 | 44480.02 | 45743.16 | 46821.32 | 48747.73 |
| **Latency** | 881µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11403.54 | 3504.74 | 30225.26 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6330.11 | 6975.31 | 13177.16 | 13866.08 | 14314.82 | 14650.63 | 15201.18 |
| **Latency** | 3ms     | 3ms     | 3ms      | 4ms      | 7ms      | 7ms      | 10ms     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37127.23 | 5947.41 | 46858.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31210.20 | 34737.46 | 38827.24 | 40872.51 | 42059.50 | 42849.34 | 44869.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31701.93 | 6471.37 | 39611.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20814.96 | 31758.40 | 34021.24 | 35171.36 | 36251.50 | 37038.56 | 38311.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18680.77 | 3173.42 | 23868.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14904.13 | 17726.17 | 19604.47 | 20571.13 | 21310.38 | 22032.90 | 23001.31 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17511.56 | 3047.24 | 22315.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15179.26 | 17308.61 | 18208.89 | 18854.71 | 19783.06 | 20372.15 | 21355.56 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15538.58 | 2751.05 | 21110.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12142.45 | 15039.29 | 16403.58 | 17028.45 | 17743.28 | 18181.06 | 18969.40 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 6133.98  | 943.37 | 11120.53 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5151.81 | 5915.09 | 6299.11 | 6572.21 | 6896.32 | 7150.18 | 8148.45 |
| **Latency** | 5ms     | 7ms     | 8ms     | 8ms     | 9ms     | 10ms    | 14ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31297.90 | 3819.59 | 38214.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29016.59 | 30506.04 | 31906.11 | 33118.91 | 34339.29 | 35058.60 | 36167.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21384.16 | 3285.98 | 26620.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17306.83 | 20789.93 | 22393.49 | 23301.25 | 24013.48 | 24513.62 | 25371.00 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3709.80  | 1021.35 | 7239.78 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2130.93 | 3538.62 | 3923.36 | 4255.47 | 4621.69 | 4865.19 | 5216.42 |
| **Latency** | 11ms    | 11ms    | 12ms    | 13ms    | 18ms    | 21ms    | 27ms    |

---

<p align="center">Generated 2022-09-20T02:48:40.417Z</p>
