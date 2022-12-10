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
  - [Fastro](#fastro)
  - [Hono](#hono)
  - [http](#http)
  - [Hyper Express](#hyper-express)
  - [Little](#little)
  - [Megalo](#megalo)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
  - [Peko](#peko)
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
    - [Fastro](#fastro-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Hyper Express](#hyper-express-1)
    - [Little](#little-1)
    - [Megalo](#megalo-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Peko](#peko-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Bun                                                                                  | 44517.69 | 10059.93 | 66684.46  | 100%     |
| Deno                                                                                 | 32101.94 | 9441.65  | 49999.11  | 72%      |
| http                                                                                 | 31699.71 | 8678.39  | 42906.78  | 71%      |
| Fast                                                                                 | 31186.98 | 9994.89  | 46624.67  | 70%      |
| Hyper Express                                                                        | 30577.47 | 8145.10  | 38951.91  | 69%      |
| Fastro                                                                               | 30255.62 | 7769.25  | 37257.32  | 68%      |
| Megalo                                                                               | 29924.01 | 9985.00  | 48031.81  | 67%      |
| Peko                                                                                 | 29482.37 | 8311.15  | 41608.49  | 66%      |
| Reno                                                                                 | 27205.30 | 7840.57  | 37985.53  | 61%      |
| Alosaur                                                                              | 26016.41 | 5775.78  | 31397.88  | 58%      |
| Hono                                                                                 | 24540.25 | 8192.22  | 136893.48 | 55%      |
| Router                                                                               | 22964.90 | 4342.00  | 32184.38  | 52%      |
| Aqua                                                                                 | 20171.36 | 3482.78  | 25000.57  | 45%      |
| Little                                                                               | 18750.96 | 3843.85  | 23381.83  | 42%      |
| Node                                                                                 | 16154.95 | 3132.60  | 38168.02  | 36%      |
| Oak                                                                                  | 16026.52 | 2847.52  | 20067.21  | 36%      |
| Fastify                                                                              | 13419.06 | 2723.93  | 16196.63  | 30%      |
| Dinatra                                                                              | 11566.15 | 2519.86  | 18565.67  | 26%      |
| Abc                                                                                  | 9770.02  | 2195.64  | 14267.52  | 22%      |
| Opine                                                                                | 6339.14  | 1018.56  | 9591.69   | 14%      |
| Acorn                                                                                | 4095.30  | 4342.21  | 64363.14  | 9%       |
| Servest                                                                              | 4011.19  | 3455.80  | 109890.11 | 9%       |
| Express                                                                              | 3825.07  | 940.22   | 10050.69  | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-903be163-33f8-458e-aa96-9c715f2893e2) |          |          |           |          |

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

## [Fastro](https://fastro.dev)

Fast and simple web application framework for deno

## [Hono](https://github.com/honojs/hono)

Ultrafast web framework for Cloudflare Workers and Deno. Fast, but not only
fast.

## [http](https://deno.land/std/http)

The deno standard library http server

## [Hyper Express](https://github.com/kartikk221/hyper-express)

High performance Node.js webserver with a simple-to-use API powered by
uWebsockets.js under the hood.

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

## [Peko](https://peko.deno.dev)

Featherweight server/router framework + middleware and handler library 🐣

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
| 9770.02  | 2195.64 | 14267.52 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5843.67 | 9040.43 | 10617.24 | 11248.17 | 11709.39 | 11861.65 | 12135.70 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 7ms      | 8ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4095.30  | 4342.21 | 64363.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1754.62 | 2452.51 | 3137.36 | 5296.02 | 7174.85 | 8223.26 | 14576.59 |
| **Latency** | 5ms     | 7ms     | 13ms    | 19ms    | 22ms    | 24ms    | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26016.41 | 5775.78 | 31397.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17585.27 | 25628.50 | 28709.82 | 29276.52 | 29820.84 | 30161.24 | 30689.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20171.36 | 3482.78 | 25000.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15980.78 | 18932.95 | 21541.82 | 22258.98 | 22741.21 | 23191.91 | 23789.26 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44517.69 | 10059.93 | 66684.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32589.42 | 38011.11 | 43302.27 | 53518.64 | 57989.57 | 58866.88 | 61618.02 |
| **Latency** | 622µs    | 784µs    | 955µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32101.94 | 9441.65 | 49999.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21085.14 | 26211.59 | 31052.86 | 40337.38 | 45535.19 | 46685.73 | 47883.64 |
| **Latency** | 893µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11566.15 | 2519.86 | 18565.67 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8531.88 | 10329.15 | 12016.13 | 13498.13 | 14074.63 | 14310.49 | 14878.55 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 6ms      | 6ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3825.07  | 940.22 | 10050.69 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2451.56 | 3462.54 | 4216.34 | 4355.15 | 4455.71 | 4505.24 | 4979.33 |
| **Latency** | 11ms    | 11ms    | 11ms    | 13ms    | 17ms    | 20ms    | 25ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31186.98 | 9994.89 | 46624.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18101.77 | 25758.78 | 31050.85 | 40117.74 | 44115.98 | 44941.88 | 45675.53 |
| **Latency** | 992µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13419.06 | 2723.93 | 16196.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10615.15 | 13514.49 | 14276.56 | 14802.32 | 15233.86 | 15347.46 | 15513.23 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 11ms     |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30255.62 | 7769.25 | 37257.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17985.11 | 27200.45 | 34154.19 | 35217.37 | 35863.02 | 36248.70 | 36782.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 24540.25 | 8192.22 | 136893.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11379.31 | 20665.60 | 27462.68 | 29419.53 | 31106.19 | 32441.60 | 34306.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31699.71 | 8678.39 | 42906.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16904.10 | 27538.72 | 36326.60 | 37590.30 | 38186.77 | 38556.76 | 39135.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30577.47 | 8145.10 | 38951.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13931.26 | 28823.99 | 34700.44 | 35720.45 | 36281.73 | 36522.74 | 37024.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18750.96 | 3843.85 | 23381.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12516.61 | 17404.91 | 20317.31 | 21352.57 | 21938.85 | 22235.29 | 22897.69 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29924.01 | 9985.00 | 48031.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13604.24 | 25137.39 | 31732.76 | 37629.80 | 41493.44 | 42706.94 | 43965.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16154.95 | 3132.60 | 38168.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12549.22 | 16046.73 | 17082.03 | 17839.65 | 18221.54 | 18332.67 | 18557.94 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16026.52 | 2847.52 | 20067.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12876.39 | 15623.70 | 17027.49 | 17536.51 | 18058.55 | 18474.63 | 19118.26 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6339.14  | 1018.56 | 9591.69 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5414.36 | 6089.58 | 6653.05 | 6810.97 | 6965.54 | 7189.93 | 8249.62 |
| **Latency** | 5ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 15ms    |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29482.37 | 8311.15 | 41608.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15167.38 | 25003.56 | 33686.51 | 35139.23 | 35858.89 | 36207.98 | 36804.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27205.30 | 7840.57 | 37985.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14714.01 | 23748.26 | 30709.28 | 32808.60 | 33981.78 | 34405.83 | 35135.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22964.90 | 4342.00 | 32184.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18401.15 | 22058.87 | 24658.91 | 25450.41 | 26103.91 | 26499.62 | 27068.93 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4011.19  | 3455.80 | 109890.11 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2046.25 | 3737.38 | 4268.30 | 4499.79 | 4844.50 | 5046.22 | 5451.44 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 17ms    | 20ms    | 27ms    |

---

<p align="center">Generated 2022-12-10T01:46:44.685Z</p>
