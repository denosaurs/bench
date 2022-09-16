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
| Bun       | 73144.49 | 6645.86 | 87158.13  | 100%     |
| Deno      | 62962.48 | 4926.66 | 73004.56  | 86%      |
| Fast      | 60158.50 | 4983.78 | 66964.96  | 82%      |
| Hono      | 56744.71 | 5124.73 | 61744.81  | 78%      |
| Reno      | 46490.54 | 3581.45 | 49673.49  | 64%      |
| http      | 42531.36 | 8162.02 | 53000.60  | 58%      |
| Node      | 40556.81 | 6289.20 | 43872.00  | 55%      |
| Alosaur   | 33559.06 | 7136.45 | 79463.33  | 46%      |
| Fastify   | 33089.91 | 5346.45 | 54848.28  | 45%      |
| Router    | 30408.49 | 4146.15 | 34397.14  | 42%      |
| Little    | 27643.41 | 3818.74 | 31654.75  | 38%      |
| Oak       | 24436.02 | 3759.87 | 28648.03  | 33%      |
| Aqua      | 24078.35 | 3385.48 | 27484.19  | 33%      |
| Abc       | 17127.90 | 2575.50 | 20990.46  | 23%      |
| Dinatra   | 13712.46 | 2800.25 | 17526.58  | 19%      |
| Opine     | 10194.77 | 5765.39 | 147783.25 | 14%      |
| Express   | 6834.79  | 1598.10 | 11360.84  | 9%       |
| Servest   | 5570.22  | 1539.47 | 10631.07  | 8%       |
| Acorn     | 4686.27  | 5078.86 | 74183.10  | 6%       |

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
| 17127.90 | 2575.50 | 20990.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13741.84 | 15744.36 | 17884.55 | 18659.67 | 20107.05 | 20481.59 | 20838.67 |
| **Latency** | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4686.27  | 5078.86 | 74183.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1639.00 | 2437.96 | 3265.60 | 4745.12 | 9524.95 | 12142.57 | 24380.02 |
| **Latency** | 4ms     | 5ms     | 12ms    | 18ms    | 21ms    | 22ms     | 28ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33559.06 | 7136.45 | 79463.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22977.32 | 34715.96 | 36482.44 | 37165.30 | 37706.40 | 37942.53 | 38653.42 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24078.35 | 3385.48 | 27484.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21018.85 | 23172.29 | 25373.83 | 25816.94 | 26619.86 | 26909.05 | 27221.34 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 73144.49 | 6645.86 | 87158.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67139.72 | 73027.57 | 74509.77 | 75620.48 | 77181.08 | 79087.10 | 85166.17 |
| **Latency** | 454µs    | 526µs    | 706µs    | 751µs    | 796µs    | 847µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 62962.48 | 4926.66 | 73004.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59189.77 | 62587.42 | 64234.17 | 65100.55 | 65728.74 | 66134.83 | 66951.90 |
| **Latency** | 570µs    | 648µs    | 822µs    | 873µs    | 920µs    | 958µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13712.46 | 2800.25 | 17526.58 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9605.44 | 13483.15 | 14970.01 | 15243.85 | 15408.43 | 15669.52 | 16736.87 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6834.79  | 1598.10 | 11360.84 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4357.77 | 5900.10 | 7698.28 | 7842.32 | 7942.71 | 7978.48 | 8024.69 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 10ms    | 11ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60158.50 | 4983.78 | 66964.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56115.54 | 59747.61 | 61582.72 | 62324.37 | 62905.16 | 63212.21 | 63796.23 |
| **Latency** | 675µs    | 742µs    | 802µs    | 893µs    | 940µs    | 972µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33089.91 | 5346.45 | 54848.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32397.44 | 33674.61 | 34447.04 | 34958.30 | 35410.18 | 35624.50 | 35868.42 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56744.71 | 5124.73 | 61744.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54053.86 | 55663.07 | 57728.34 | 59263.28 | 59983.22 | 60348.43 | 60923.47 |
| **Latency** | 745µs    | 800µs    | 856µs    | 921µs    | 967µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42531.36 | 8162.02 | 53000.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29220.08 | 44730.68 | 46106.92 | 46568.87 | 46921.04 | 47122.54 | 47694.52 |
| **Latency** | 945µs    | 999µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27643.41 | 3818.74 | 31654.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24550.26 | 26209.88 | 29291.93 | 29612.05 | 30098.40 | 30513.20 | 31000.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40556.81 | 6289.20 | 43872.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40246.14 | 41303.18 | 42072.21 | 42573.50 | 42984.52 | 43227.08 | 43513.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24436.02 | 3759.87 | 28648.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20772.18 | 24543.12 | 25873.67 | 26194.95 | 27055.48 | 27325.14 | 27622.22 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 10194.77 | 5765.39 | 147783.25 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8703.29 | 9402.43 | 10263.84 | 10511.32 | 10994.19 | 11978.86 | 13016.93 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46490.54 | 3581.45 | 49673.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45514.94 | 46190.02 | 46981.20 | 47749.18 | 48432.02 | 48777.39 | 49165.44 |
| **Latency** | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30408.49 | 4146.15 | 34397.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26017.61 | 30301.73 | 32156.51 | 32542.52 | 32912.71 | 33159.40 | 33637.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5570.22  | 1539.47 | 10631.07 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3224.11 | 5493.21 | 6071.30 | 6462.12 | 6705.88 | 6760.04 | 7724.14 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 13ms    | 20ms    |

---

<p align="center">Generated 2022-09-16T02:58:23.067Z</p>
