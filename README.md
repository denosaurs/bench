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
| Bun                                                                                  | 62582.56 | 7767.15 | 78107.42  | 100%     |
| Deno                                                                                 | 56575.20 | 4928.52 | 64809.90  | 90%      |
| Fast                                                                                 | 52280.78 | 6680.01 | 62264.17  | 84%      |
| Hono                                                                                 | 50815.01 | 5860.16 | 59440.20  | 81%      |
| Megalo                                                                               | 49074.12 | 5873.10 | 57489.59  | 78%      |
| Reno                                                                                 | 40822.67 | 4429.24 | 47114.50  | 65%      |
| http                                                                                 | 39350.26 | 8167.58 | 46810.07  | 63%      |
| Node                                                                                 | 31445.45 | 5759.81 | 38049.36  | 50%      |
| Alosaur                                                                              | 29512.51 | 7212.48 | 80063.73  | 47%      |
| Router                                                                               | 27755.82 | 4172.40 | 32339.88  | 44%      |
| Little                                                                               | 25721.62 | 4097.15 | 31457.27  | 41%      |
| Fastify                                                                              | 22706.39 | 8676.88 | 33102.94  | 36%      |
| Oak                                                                                  | 22564.64 | 3950.54 | 31244.27  | 36%      |
| Aqua                                                                                 | 21580.28 | 3344.42 | 26588.39  | 34%      |
| Dinatra                                                                              | 15117.51 | 3658.84 | 21918.88  | 24%      |
| Abc                                                                                  | 11531.10 | 3335.68 | 18255.13  | 18%      |
| Opine                                                                                | 8394.62  | 1477.96 | 13352.42  | 13%      |
| Express                                                                              | 5646.04  | 1455.10 | 11075.16  | 9%       |
| Servest                                                                              | 4815.39  | 4532.93 | 142815.09 | 8%       |
| Acorn                                                                                | 4464.45  | 6946.83 | 91116.17  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-dabedd03-5131-4d50-a9cb-19ede5f7b55d) |          |         |           |          |

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
| 11531.10 | 3335.68 | 18255.13 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7137.11 | 8406.13 | 12216.08 | 14356.70 | 15499.65 | 15996.53 | 16828.60 |
| **Latency** | 3ms     | 3ms     | 3ms      | 5ms      | 6ms      | 6ms      | 9ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4464.45  | 6946.83 | 91116.17 |     |

| **Stat**    | 10     | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------ | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 200.08 | 2222.26 | 2972.23 | 4892.20 | 8163.79 | 9776.31 | 49531.92 |
| **Latency** | 4ms    | 6ms     | 13ms    | 20ms    | 24ms    | 26ms    | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29512.51 | 7212.48 | 80063.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18405.09 | 28106.16 | 32677.63 | 33663.84 | 34310.54 | 34629.35 | 35795.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21580.28 | 3344.42 | 26588.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18401.74 | 20350.51 | 22733.81 | 23541.57 | 24079.74 | 24471.29 | 25280.98 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 62582.56 | 7767.15 | 78107.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55030.02 | 60412.71 | 64199.11 | 66740.45 | 69016.29 | 71418.25 | 74814.64 |
| **Latency** | 530µs    | 632µs    | 793µs    | 871µs    | 964µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56575.20 | 4928.52 | 64809.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51290.60 | 55487.46 | 57799.16 | 59393.76 | 60590.91 | 61423.11 | 62956.28 |
| **Latency** | 645µs    | 739µs    | 884µs    | 968µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15117.51 | 3658.84 | 21918.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10507.70 | 13062.28 | 16228.83 | 17350.01 | 18832.14 | 19720.05 | 20415.63 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5646.04  | 1455.10 | 11075.16 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3319.04 | 5040.66 | 6305.46 | 6530.67 | 6679.12 | 6759.80 | 7357.27 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 12ms    | 14ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52280.78 | 6680.01 | 62264.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46326.33 | 50030.53 | 54030.73 | 56169.46 | 57798.61 | 58639.27 | 60372.24 |
| **Latency** | 761µs    | 830µs    | 907µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22706.39 | 8676.88 | 33102.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10469.51 | 11002.96 | 27655.51 | 29489.62 | 30476.72 | 31021.68 | 31819.29 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      | 4ms      | 6ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50815.01 | 5860.16 | 59440.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47320.65 | 49857.15 | 52121.76 | 53512.70 | 54766.90 | 55491.24 | 56895.92 |
| **Latency** | 826µs    | 885µs    | 943µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39350.26 | 8167.58 | 46810.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25834.03 | 40686.65 | 42591.60 | 43577.41 | 44262.86 | 44621.12 | 45602.12 |
| **Latency** | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25721.62 | 4097.15 | 31457.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21935.19 | 24284.44 | 27304.86 | 27906.06 | 28506.07 | 28922.55 | 29515.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49074.12 | 5873.10 | 57489.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44466.38 | 48008.03 | 50521.10 | 52194.85 | 53638.50 | 54350.40 | 55809.36 |
| **Latency** | 833µs    | 896µs    | 968µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31445.45 | 5759.81 | 38049.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25898.84 | 31239.59 | 33100.92 | 34542.74 | 35406.99 | 35859.07 | 36804.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22564.64 | 3950.54 | 31244.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18322.25 | 22549.44 | 23969.10 | 24511.50 | 25049.42 | 25518.81 | 26584.67 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8394.62  | 1477.96 | 13352.42 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6732.62 | 7825.68 | 8744.96 | 9233.23 | 9624.07 | 9859.45 | 11232.20 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 7ms     | 8ms     | 11ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40822.67 | 4429.24 | 47114.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38109.82 | 40476.41 | 41617.15 | 42902.48 | 43982.43 | 44531.02 | 45406.54 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27755.82 | 4172.40 | 32339.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22305.47 | 27749.32 | 29347.76 | 29916.37 | 30586.78 | 31019.46 | 31682.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4815.39  | 4532.93 | 142815.09 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2106.44 | 4505.21 | 5176.63 | 5564.98 | 5864.15 | 6164.76 | 7233.78 |
| **Latency** | 8ms     | 8ms     | 9ms     | 11ms    | 15ms    | 18ms    | 25ms    |

---

<p align="center">Generated 2022-11-05T02:20:14.234Z</p>
