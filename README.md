<div align="center">
  <h1><code>bench</code></h1>
  <p>
    <strong>📊 Daily benchmarks of deno & node HTTP frameworks</strong>
  </p>
  <br>
  <p align="center">
    <a alt="Bench" href="https://github.com/denosaurs/bench/actions">
      <img src="https://img.shields.io/github/actions/workflow/status/denosaurs/bench/workflow.yml?branch=main" />
    </a>
  </p>
</div>

# Table of Contents

- [Table of Contents](#table-of-contents)
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
| Bun                                                                                  | 59520.07 | 9750.87  | 76626.26  | 100%     |
| Hyper Express                                                                        | 48644.34 | 13663.09 | 58859.90  | 82%      |
| Deno                                                                                 | 48448.09 | 12483.66 | 67173.74  | 81%      |
| Fast                                                                                 | 47031.31 | 12894.99 | 64595.87  | 79%      |
| Megalo                                                                               | 45264.70 | 12638.76 | 61350.46  | 76%      |
| http                                                                                 | 43471.26 | 9485.51  | 50707.98  | 73%      |
| Hono                                                                                 | 42633.77 | 11679.74 | 63474.74  | 72%      |
| Peko                                                                                 | 41254.84 | 8274.61  | 49205.88  | 69%      |
| Fastro                                                                               | 40498.47 | 9183.67  | 57288.62  | 68%      |
| Reno                                                                                 | 38535.44 | 10787.83 | 49589.80  | 65%      |
| Node                                                                                 | 35110.78 | 6306.07  | 39204.22  | 59%      |
| Alosaur                                                                              | 33368.49 | 8919.92  | 160000.00 | 56%      |
| Fastify                                                                              | 31330.21 | 5493.61  | 34336.99  | 53%      |
| Router                                                                               | 30988.34 | 4619.12  | 35256.56  | 52%      |
| Little                                                                               | 27753.36 | 4580.91  | 32043.66  | 47%      |
| Aqua                                                                                 | 24739.64 | 3681.47  | 31598.38  | 42%      |
| Oak                                                                                  | 24721.20 | 4500.29  | 29396.99  | 42%      |
| Dinatra                                                                              | 19175.21 | 4002.02  | 24298.04  | 32%      |
| Abc                                                                                  | 14961.49 | 4295.38  | 20461.00  | 25%      |
| Opine                                                                                | 9831.42  | 2109.89  | 59088.71  | 17%      |
| Express                                                                              | 6533.24  | 1561.49  | 11837.76  | 11%      |
| Servest                                                                              | 5633.79  | 1754.32  | 8513.58   | 9%       |
| Acorn                                                                                | 3888.15  | 2563.39  | 14144.29  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-e1469d1d-d9a3-499e-ae25-3761f7e3cb85) |          |          |           |          |

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
| 14961.49 | 4295.38 | 20461.00 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8629.32 | 11835.85 | 16754.17 | 18313.90 | 19428.17 | 19708.54 | 20097.37 |
| **Latency** | 2ms     | 2ms      | 2ms      | 2ms      | 5ms      | 5ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3888.15  | 2563.39 | 14144.29 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1953.80 | 2461.73 | 2961.96 | 4085.06 | 8366.29 | 9957.26 | 12370.63 |
| **Latency** | 4ms     | 5ms     | 12ms    | 18ms    | 22ms    | 23ms    | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 33368.49 | 8919.92 | 160000.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21910.02 | 32215.39 | 36931.36 | 37786.06 | 38340.20 | 38731.51 | 39245.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24739.64 | 3681.47 | 31598.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21460.07 | 22851.81 | 26305.10 | 26748.35 | 27055.38 | 27591.12 | 28192.16 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59520.07 | 9750.87 | 76626.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46554.80 | 49793.26 | 62680.97 | 68675.77 | 70381.31 | 71284.22 | 72942.42 |
| **Latency** | 511µs    | 644µs    | 787µs    | 908µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48448.09 | 12483.66 | 67173.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31288.43 | 40676.73 | 50575.23 | 59573.03 | 61159.71 | 61695.88 | 63201.74 |
| **Latency** | 630µs    | 773µs    | 919µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19175.21 | 4002.02 | 24298.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14813.59 | 16329.33 | 21144.95 | 21513.89 | 21744.29 | 21937.46 | 22737.45 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6533.24  | 1561.49 | 11837.76 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3816.25 | 6351.94 | 7278.44 | 7456.95 | 7568.63 | 7621.55 | 7715.17 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 12ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47031.31 | 12894.99 | 64595.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27520.98 | 41059.43 | 52007.15 | 57762.23 | 59031.37 | 59509.37 | 60287.87 |
| **Latency** | 741µs    | 809µs    | 909µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31330.21 | 5493.61 | 34336.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30561.96 | 31907.26 | 32846.89 | 33459.13 | 33745.80 | 33914.15 | 34063.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40498.47 | 9183.67 | 57288.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27401.02 | 39411.72 | 44995.73 | 45685.17 | 46062.86 | 46319.95 | 46708.67 |
| **Latency** | 966µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42633.77 | 11679.74 | 63474.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24565.99 | 39219.90 | 43020.97 | 49258.45 | 58032.35 | 59004.34 | 60312.75 |
| **Latency** | 685µs    | 853µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43471.26 | 9485.51 | 50707.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29116.52 | 44296.23 | 48220.13 | 48748.37 | 49253.05 | 49495.30 | 50001.38 |
| **Latency** | 902µs    | 962µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48644.34 | 13663.09 | 58859.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22155.35 | 48014.77 | 55973.76 | 56835.70 | 57484.38 | 57800.47 | 58102.21 |
| **Latency** | 804µs    | 818µs    | 835µs    | 870µs    | 1ms      | 2ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27753.36 | 4580.91 | 32043.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24072.64 | 25498.56 | 29876.76 | 30421.26 | 30731.79 | 31014.91 | 31656.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45264.70 | 12638.76 | 61350.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26383.59 | 38914.69 | 51405.53 | 54729.42 | 56016.11 | 56533.22 | 57435.81 |
| **Latency** | 801µs    | 863µs    | 930µs    | 1ms      | 1ms      | 1ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35110.78 | 6306.07 | 39204.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33311.25 | 36012.16 | 36775.67 | 37514.33 | 37937.09 | 38197.31 | 38382.05 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24721.20 | 4500.29 | 29396.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20451.93 | 24645.35 | 26641.29 | 26911.04 | 27182.05 | 27547.02 | 28200.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9831.42  | 2109.89 | 59088.71 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8312.16 | 9196.70 | 10103.31 | 10445.27 | 11114.42 | 11942.87 | 13015.62 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 6ms      | 6ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41254.84 | 8274.61 | 49205.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30599.39 | 41808.70 | 45107.27 | 45623.63 | 46102.09 | 46337.97 | 46806.02 |
| **Latency** | 960µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38535.44 | 10787.83 | 49589.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19603.29 | 33271.26 | 44283.14 | 45317.11 | 45907.10 | 46180.74 | 46771.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30988.34 | 4619.12 | 35256.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25515.01 | 30242.26 | 33089.64 | 33554.94 | 33875.69 | 34103.25 | 34511.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5633.79  | 1754.32 | 8513.58 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2715.53 | 5607.95 | 6218.14 | 6629.82 | 6994.78 | 7126.99 | 7933.05 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 13ms    | 15ms    | 21ms    |

---

<p align="center">Generated 2022-12-26T01:46:12.720Z</p>
