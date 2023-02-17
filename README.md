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
| Bun                                                                                  | 41564.41 | 13519.30 | 65264.75  | 100%     |
| Hyper Express                                                                        | 33758.44 | 8819.43  | 46303.09  | 81%      |
| http                                                                                 | 32791.09 | 8386.43  | 43921.39  | 79%      |
| Fastro                                                                               | 32038.27 | 7948.37  | 45431.44  | 77%      |
| Fast                                                                                 | 31327.37 | 9885.55  | 49083.72  | 75%      |
| Deno                                                                                 | 30537.72 | 8825.61  | 52716.12  | 73%      |
| Hono                                                                                 | 30054.96 | 6686.62  | 46716.13  | 72%      |
| Megalo                                                                               | 28698.14 | 8096.94  | 50104.34  | 69%      |
| Alosaur                                                                              | 25828.38 | 5530.53  | 33237.16  | 62%      |
| Reno                                                                                 | 23727.32 | 7989.90  | 36822.38  | 57%      |
| Router                                                                               | 21446.59 | 3790.03  | 26646.38  | 52%      |
| Little                                                                               | 19962.42 | 3622.42  | 26904.64  | 48%      |
| Aqua                                                                                 | 19540.78 | 3544.57  | 26288.24  | 47%      |
| Oak                                                                                  | 16744.62 | 4847.55  | 140845.07 | 40%      |
| Node                                                                                 | 15737.07 | 3210.28  | 47539.69  | 38%      |
| Fastify                                                                              | 14494.21 | 2842.82  | 40304.79  | 35%      |
| Dinatra                                                                              | 11966.49 | 2665.49  | 25579.58  | 29%      |
| Abc                                                                                  | 10781.89 | 2008.20  | 15039.71  | 26%      |
| Opine                                                                                | 7271.25  | 1276.41  | 13090.80  | 17%      |
| Servest                                                                              | 4238.94  | 1173.22  | 10601.10  | 10%      |
| Acorn                                                                                | 4099.80  | 3324.48  | 61703.26  | 10%      |
| Express                                                                              | 3798.54  | 982.41   | 6419.49   | 9%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-17bfd9f0-6d24-4ee9-99f9-79d590bd1611) |          |          |           |          |

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
| 10781.89 | 2008.20 | 15039.71 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8341.01 | 10231.38 | 11118.98 | 11980.38 | 12701.09 | 13216.21 | 13932.31 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4099.80  | 3324.48 | 61703.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1808.37 | 2414.85 | 3110.20 | 5184.23 | 8152.67 | 9590.30 | 15054.67 |
| **Latency** | 5ms     | 6ms     | 13ms    | 19ms    | 21ms    | 24ms    | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25828.38 | 5530.53 | 33237.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17100.15 | 25106.19 | 27495.59 | 29143.95 | 30410.24 | 31192.51 | 31993.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19540.78 | 3544.57 | 26288.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14740.34 | 18111.35 | 20363.24 | 21813.23 | 23098.37 | 23507.49 | 24792.35 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41564.41 | 13519.30 | 65264.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23205.03 | 29229.42 | 42547.06 | 53922.47 | 58598.83 | 60348.68 | 63218.23 |
| **Latency** | 618µs    | 784µs    | 982µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30537.72 | 8825.61 | 52716.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19706.04 | 25237.52 | 29837.20 | 37217.11 | 42822.55 | 44621.68 | 47548.19 |
| **Latency** | 926µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11966.49 | 2665.49 | 25579.58 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8448.55 | 11003.26 | 12556.97 | 13687.93 | 14513.01 | 14929.11 | 15622.13 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 3798.54  | 982.41 | 6419.49 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2433.57 | 3068.92 | 4188.83 | 4474.89 | 4645.09 | 4778.45 | 5078.24 |
| **Latency** | 10ms    | 11ms    | 11ms    | 14ms    | 17ms    | 20ms    | 26ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31327.37 | 9885.55 | 49083.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17666.37 | 25213.28 | 32080.50 | 39813.80 | 43122.28 | 44387.22 | 46734.14 |
| **Latency** | 972µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14494.21 | 2842.82 | 40304.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12194.10 | 14064.65 | 15147.21 | 15945.71 | 16595.37 | 16966.97 | 17601.53 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 8ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32038.27 | 7948.37 | 45431.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21101.19 | 27699.07 | 33380.00 | 38460.26 | 40276.86 | 41463.72 | 42623.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30054.96 | 6686.62 | 46716.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23172.14 | 26251.03 | 29205.75 | 34165.49 | 39631.05 | 41724.89 | 44456.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32791.09 | 8386.43 | 43921.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18420.57 | 29982.20 | 35601.36 | 38311.70 | 40518.68 | 41560.19 | 43158.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33758.44 | 8819.43 | 46303.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14836.60 | 32943.37 | 36745.08 | 39193.15 | 41114.25 | 42070.96 | 43814.65 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19962.42 | 3622.42 | 26904.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15924.47 | 18800.31 | 20805.76 | 22175.38 | 23365.62 | 23987.22 | 25374.28 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28698.14 | 8096.94 | 50104.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16467.96 | 25213.78 | 30143.82 | 33950.06 | 37586.70 | 39216.74 | 42570.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15737.07 | 3210.28 | 47539.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12366.61 | 15454.81 | 16373.96 | 17330.10 | 18245.00 | 18690.78 | 19559.79 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 16744.62 | 4847.55 | 140845.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13510.36 | 15812.10 | 17321.19 | 18347.73 | 19297.93 | 19717.92 | 20599.71 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7271.25  | 1276.41 | 13090.80 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5805.78 | 6876.44 | 7434.26 | 7976.12 | 8592.10 | 8838.68 | 9463.60 |
| **Latency** | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 8ms     | 12ms    |

### [Peko](#peko)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23727.32 | 7989.90 | 36822.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10065.39 | 18612.96 | 27029.64 | 29547.04 | 31147.53 | 31849.60 | 33473.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21446.59 | 3790.03 | 26646.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16750.14 | 20657.29 | 22568.08 | 23618.34 | 24560.00 | 25124.95 | 26100.43 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4238.94  | 1173.22 | 10601.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2508.09 | 4059.75 | 4566.25 | 4911.32 | 5138.73 | 5290.07 | 5912.95 |
| **Latency** | 9ms     | 10ms    | 10ms    | 12ms    | 16ms    | 18ms    | 25ms    |

---

<p align="center">Generated 2023-02-17T01:58:01.003Z</p>
