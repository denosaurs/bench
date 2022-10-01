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

| Framework                                                                            | Mean     | Stddev  | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | -------- | -------- |
| Bun                                                                                  | 60245.04 | 9057.48 | 78979.55 | 100%     |
| Deno                                                                                 | 51318.08 | 8605.52 | 67908.12 | 85%      |
| Hono                                                                                 | 49212.17 | 5211.99 | 60654.73 | 82%      |
| Fast                                                                                 | 49170.64 | 7836.59 | 59455.51 | 82%      |
| Megalo                                                                               | 43747.62 | 7635.92 | 56118.65 | 73%      |
| Reno                                                                                 | 40048.71 | 4419.37 | 48057.62 | 66%      |
| http                                                                                 | 35312.50 | 8281.90 | 47186.04 | 59%      |
| Node                                                                                 | 29300.84 | 6977.70 | 40831.04 | 49%      |
| Alosaur                                                                              | 28009.06 | 6636.57 | 69475.64 | 46%      |
| Fastify                                                                              | 26544.15 | 5167.31 | 31351.09 | 44%      |
| Router                                                                               | 23793.37 | 4444.44 | 31876.52 | 39%      |
| Little                                                                               | 22179.00 | 4425.67 | 29386.91 | 37%      |
| Oak                                                                                  | 21956.40 | 4018.26 | 31403.03 | 36%      |
| Aqua                                                                                 | 20601.62 | 3346.63 | 26692.26 | 34%      |
| Dinatra                                                                              | 15346.30 | 3501.31 | 32634.14 | 25%      |
| Abc                                                                                  | 13453.43 | 2123.19 | 17426.28 | 22%      |
| Opine                                                                                | 7976.73  | 1603.27 | 14138.07 | 13%      |
| Express                                                                              | 5481.23  | 1485.62 | 12764.27 | 9%       |
| Acorn                                                                                | 4848.86  | 6727.98 | 58807.74 | 8%       |
| Servest                                                                              | 4833.54  | 1910.70 | 45925.71 | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-c5ca0cdb-582f-43ff-8def-b8a028350c15) |          |         |          |          |

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
| 13453.43 | 2123.19 | 17426.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10738.47 | 12364.08 | 14116.64 | 14707.33 | 15354.91 | 15948.44 | 16646.98 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4848.86  | 6727.98 | 58807.74 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 95.08 | 2123.62 | 3115.03 | 5708.35 | 9048.70 | 11187.05 | 46121.11 |
| **Latency** | 4ms   | 6ms     | 13ms    | 20ms    | 24ms    | 26ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28009.06 | 6636.57 | 69475.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17390.40 | 25563.38 | 30950.60 | 32211.93 | 32765.58 | 33121.16 | 33925.65 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20601.62 | 3346.63 | 26692.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17358.91 | 19249.12 | 21834.27 | 22510.79 | 23203.48 | 23513.28 | 24533.02 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60245.04 | 9057.48 | 78979.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43019.34 | 58717.80 | 63505.04 | 65528.80 | 67009.35 | 68408.19 | 73100.12 |
| **Latency** | 547µs    | 652µs    | 815µs    | 882µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51318.08 | 8605.52 | 67908.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38631.66 | 45715.98 | 54196.70 | 57517.47 | 59632.13 | 61247.86 | 63727.21 |
| **Latency** | 678µs    | 793µs    | 923µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15346.30 | 3501.31 | 32634.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10809.19 | 14813.18 | 16555.75 | 17118.42 | 18302.74 | 19152.08 | 19932.00 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5481.23  | 1485.62 | 12764.27 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3135.33 | 4739.91 | 6159.93 | 6511.39 | 6703.95 | 6798.30 | 6948.25 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 12ms    | 15ms    | 20ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49170.64 | 7836.59 | 59455.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36913.27 | 47883.28 | 51893.90 | 54074.24 | 55276.86 | 55887.87 | 56964.29 |
| **Latency** | 795µs    | 862µs    | 946µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26544.15 | 5167.31 | 31351.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22970.74 | 27176.35 | 28072.41 | 28541.08 | 29228.04 | 29644.26 | 30413.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49212.17 | 5211.99 | 60654.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46541.87 | 48388.86 | 49811.55 | 51223.03 | 52816.35 | 53852.38 | 55720.04 |
| **Latency** | 885µs    | 935µs    | 985µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35312.50 | 8281.90 | 47186.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23508.45 | 31399.12 | 38451.94 | 41482.75 | 42646.93 | 43330.75 | 45716.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22179.00 | 4425.67 | 29386.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16210.19 | 20256.62 | 23684.59 | 25302.44 | 26159.82 | 26615.96 | 27766.15 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43747.62 | 7635.92 | 56118.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34514.50 | 37418.41 | 46544.22 | 50044.41 | 52006.86 | 52827.95 | 54514.83 |
| **Latency** | 860µs    | 935µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29300.84 | 6977.70 | 40831.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21048.61 | 23243.91 | 32413.92 | 34162.15 | 35665.96 | 36630.01 | 38498.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21956.40 | 4018.26 | 31403.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17808.44 | 21818.40 | 23202.00 | 24079.44 | 24732.17 | 25210.84 | 26483.69 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7976.73  | 1603.27 | 14138.07 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 6034.74 | 7239.97 | 8129.17 | 9004.07 | 9639.17 | 10010.15 | 11128.51 |
| **Latency** | 4ms     | 5ms     | 6ms     | 6ms     | 7ms     | 8ms      | 12ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40048.71 | 4419.37 | 48057.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34923.75 | 39988.69 | 41011.89 | 42110.06 | 43289.17 | 43952.75 | 45789.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23793.37 | 4444.44 | 31876.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18604.97 | 20918.00 | 25514.80 | 27286.11 | 27972.45 | 28368.52 | 29377.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4833.54  | 1910.70 | 45925.71 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2408.26 | 4731.03 | 5297.93 | 5557.75 | 5763.92 | 5963.33 | 7049.98 |
| **Latency** | 8ms     | 8ms     | 9ms     | 10ms    | 14ms    | 16ms    | 22ms    |

---

<p align="center">Generated 2022-10-01T03:12:54.194Z</p>
