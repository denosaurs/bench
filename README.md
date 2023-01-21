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
| Bun                                                                                  | 61444.60 | 9743.67  | 80423.60  | 100%     |
| Fast                                                                                 | 52628.18 | 13526.07 | 65628.82  | 86%      |
| Deno                                                                                 | 51503.16 | 13318.30 | 68958.23  | 84%      |
| Hyper Express                                                                        | 51240.24 | 12075.17 | 58413.27  | 83%      |
| Hono                                                                                 | 50340.86 | 12486.71 | 65810.94  | 82%      |
| Megalo                                                                               | 49738.38 | 11838.12 | 62053.02  | 81%      |
| http                                                                                 | 45237.52 | 9110.10  | 51951.27  | 74%      |
| Fastro                                                                               | 42482.40 | 8621.03  | 48513.35  | 69%      |
| Peko                                                                                 | 42252.64 | 7763.57  | 47838.59  | 69%      |
| Reno                                                                                 | 39512.96 | 12132.07 | 150753.77 | 64%      |
| Node                                                                                 | 36600.29 | 6065.42  | 40139.67  | 60%      |
| Alosaur                                                                              | 35710.71 | 7382.47  | 44738.70  | 58%      |
| Fastify                                                                              | 32096.57 | 5990.96  | 35203.72  | 52%      |
| Router                                                                               | 29589.45 | 5718.85  | 36620.01  | 48%      |
| Little                                                                               | 28085.93 | 3932.77  | 32326.30  | 46%      |
| Aqua                                                                                 | 26052.19 | 3751.95  | 29932.19  | 42%      |
| Oak                                                                                  | 25142.86 | 4110.94  | 31175.45  | 41%      |
| Dinatra                                                                              | 20641.22 | 3667.39  | 28197.89  | 34%      |
| Abc                                                                                  | 18824.32 | 2552.35  | 22483.39  | 31%      |
| Opine                                                                                | 10471.21 | 1341.90  | 14501.21  | 17%      |
| Express                                                                              | 6291.28  | 1705.94  | 7940.95   | 10%      |
| Servest                                                                              | 6199.64  | 5376.84  | 139015.03 | 10%      |
| Acorn                                                                                | 4605.26  | 4956.18  | 108930.09 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-d3d611df-13ae-4b1e-870c-34fab823bb52) |          |          |           |          |

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
| 18824.32 | 2552.35 | 22483.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16209.57 | 18150.27 | 19632.78 | 20170.43 | 20748.96 | 21272.43 | 21827.75 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4605.26  | 4956.18 | 108930.09 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 84.07 | 2440.46 | 3588.55 | 7468.84 | 8949.32 | 11194.68 | 13674.27 |
| **Latency** | 4ms   | 5ms     | 13ms    | 17ms    | 21ms    | 22ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35710.71 | 7382.47 | 44738.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25001.89 | 37161.09 | 39032.72 | 39444.96 | 40054.70 | 40330.50 | 40662.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26052.19 | 3751.95 | 29932.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23479.49 | 24306.99 | 27781.09 | 28039.37 | 28203.11 | 28308.09 | 28848.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61444.60 | 9743.67 | 80423.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51900.47 | 54769.79 | 58209.65 | 71837.77 | 74318.25 | 75144.33 | 76893.49 |
| **Latency** | 492µs    | 614µs    | 750µs    | 903µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51503.16 | 13318.30 | 68958.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33164.15 | 42805.43 | 56837.88 | 62814.81 | 63897.82 | 64322.25 | 65311.26 |
| **Latency** | 598µs    | 717µs    | 878µs    | 971µs    | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20641.22 | 3667.39 | 28197.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15912.99 | 19583.07 | 21001.18 | 23551.73 | 24479.34 | 24657.20 | 25221.64 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6291.28  | 1705.94 | 7940.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4113.06 | 4642.98 | 7437.91 | 7710.15 | 7821.95 | 7864.70 | 7900.47 |
| **Latency** | 6ms     | 6ms     | 6ms     | 9ms     | 10ms    | 12ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52628.18 | 13526.07 | 65628.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30746.01 | 47100.67 | 59533.14 | 61630.27 | 62212.85 | 62530.43 | 63083.97 |
| **Latency** | 709µs    | 759µs    | 818µs    | 918µs    | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32096.57 | 5990.96 | 35203.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30967.39 | 33127.03 | 33937.55 | 34438.44 | 34663.65 | 34790.67 | 35024.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42482.40 | 8621.03 | 48513.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30103.51 | 43503.33 | 46434.00 | 47048.73 | 47504.59 | 47678.81 | 47954.48 |
| **Latency** | 925µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50340.86 | 12486.71 | 65810.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31852.62 | 42221.42 | 54766.06 | 61413.28 | 62227.14 | 62613.27 | 63438.14 |
| **Latency** | 636µs    | 754µs    | 887µs    | 978µs    | 1ms      | 1ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45237.52 | 9110.10 | 51951.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31739.86 | 46065.67 | 49431.95 | 50200.72 | 50745.48 | 50904.90 | 51204.99 |
| **Latency** | 879µs    | 965µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51240.24 | 12075.17 | 58413.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23206.66 | 55505.39 | 57070.03 | 57609.05 | 57801.56 | 57914.90 | 58098.02 |
| **Latency** | 815µs    | 824µs    | 838µs    | 857µs    | 1ms      | 2ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28085.93 | 3932.77 | 32326.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25373.98 | 26326.71 | 29831.39 | 30167.67 | 30394.10 | 30904.83 | 31561.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49738.38 | 11838.12 | 62053.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32056.98 | 45180.41 | 55404.85 | 57170.03 | 57972.93 | 58225.48 | 58708.67 |
| **Latency** | 784µs    | 832µs    | 886µs    | 945µs    | 1ms      | 1ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36600.29 | 6065.42 | 40139.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36310.33 | 37438.42 | 38103.67 | 38531.15 | 39036.24 | 39304.26 | 39677.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25142.86 | 4110.94 | 31175.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19807.85 | 23447.52 | 26861.15 | 27403.21 | 27913.73 | 28209.49 | 28551.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10471.21 | 1341.90 | 14501.21 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9584.87 | 10200.95 | 10916.53 | 11017.88 | 11112.37 | 11324.54 | 12704.87 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 5ms      | 7ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42252.64 | 7763.57 | 47838.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32419.99 | 42374.89 | 46008.47 | 46353.06 | 46749.64 | 46987.26 | 47286.39 |
| **Latency** | 937µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 39512.96 | 12132.07 | 150753.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18710.60 | 32531.76 | 45851.32 | 47510.77 | 48416.94 | 48766.34 | 49505.28 |
| **Latency** | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29589.45 | 5718.85 | 36620.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20918.54 | 26320.07 | 32657.72 | 33939.58 | 34798.70 | 35114.06 | 35437.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6199.64  | 5376.84 | 139015.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3429.17 | 5840.63 | 6623.03 | 7006.12 | 7317.24 | 7438.13 | 8084.25 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 11ms    | 13ms    | 22ms    |

---

<p align="center">Generated 2023-01-21T01:47:48.778Z</p>
