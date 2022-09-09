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
| Bun       | 71365.14 | 4327.35 | 81116.84 | 100%     |
| Deno      | 58757.27 | 4753.24 | 66519.76 | 82%      |
| Fast      | 58552.63 | 6199.33 | 65437.94 | 82%      |
| Hono      | 55585.61 | 5804.81 | 63286.94 | 78%      |
| http      | 42781.26 | 7205.64 | 48282.44 | 60%      |
| Node      | 38443.79 | 5576.62 | 41590.00 | 54%      |
| Alosaur   | 32970.88 | 6603.36 | 39002.16 | 46%      |
| Reno      | 31633.39 | 2718.91 | 45577.68 | 44%      |
| Fastify   | 31122.23 | 7318.09 | 35407.07 | 44%      |
| Router    | 29212.37 | 3273.23 | 32140.44 | 41%      |
| Oak       | 24257.89 | 4136.32 | 44941.31 | 34%      |
| Aqua      | 22626.64 | 2831.89 | 25716.75 | 32%      |
| Abc       | 14181.69 | 3581.33 | 21081.64 | 20%      |
| Little    | 13482.17 | 1665.00 | 16861.78 | 19%      |
| Dinatra   | 10870.92 | 2152.47 | 14930.52 | 15%      |
| Opine     | 9316.54  | 1292.86 | 13101.94 | 13%      |
| Express   | 6856.97  | 1513.80 | 8118.14  | 10%      |
| Servest   | 5849.63  | 1829.65 | 9940.64  | 8%       |
| Acorn     | 3850.87  | 2568.26 | 13602.40 | 5%       |

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
| 14181.69 | 3581.33 | 21081.64 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9254.27 | 10087.77 | 15517.44 | 16837.44 | 17711.37 | 18695.13 | 20640.03 |
| **Latency** | 2ms     | 2ms      | 2ms      | 4ms      | 5ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3850.87  | 2568.26 | 13602.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1889.10 | 2457.12 | 2965.31 | 4135.86 | 8200.63 | 9913.93 | 12412.69 |
| **Latency** | 4ms     | 5ms     | 12ms    | 18ms    | 22ms    | 23ms    | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32970.88 | 6603.36 | 39002.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21631.87 | 34715.74 | 35522.86 | 35999.85 | 36574.95 | 36897.89 | 37365.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22626.64 | 2831.89 | 25716.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19507.90 | 21744.01 | 23639.30 | 24136.78 | 24790.10 | 25084.65 | 25518.23 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 71365.14 | 4327.35 | 81116.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65618.62 | 70602.38 | 72414.76 | 73659.38 | 75141.61 | 75977.02 | 78537.49 |
| **Latency** | 468µs    | 552µs    | 733µs    | 771µs    | 829µs    | 873µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58757.27 | 4753.24 | 66519.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55540.57 | 58328.22 | 59814.19 | 60878.76 | 61613.10 | 62001.21 | 62944.49 |
| **Latency** | 600µs    | 682µs    | 890µs    | 937µs    | 980µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10870.92 | 2152.47 | 14930.52 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7184.23 | 11069.01 | 11791.08 | 11975.50 | 12222.54 | 12318.65 | 12796.54 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 7ms      | 8ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6856.97  | 1513.80 | 8118.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4213.42 | 7069.39 | 7562.51 | 7741.84 | 7849.49 | 7885.36 | 7937.99 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 10ms    | 11ms    | 15ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58552.63 | 6199.33 | 65437.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54979.42 | 58342.12 | 60289.79 | 61133.29 | 61926.06 | 62302.12 | 63031.33 |
| **Latency** | 629µs    | 688µs    | 866µs    | 925µs    | 970µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31122.23 | 7318.09 | 35407.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12673.05 | 32912.37 | 33822.80 | 34485.66 | 34751.57 | 34866.74 | 35054.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55585.61 | 5804.81 | 63286.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52563.29 | 55154.83 | 56999.48 | 58025.14 | 58721.10 | 59042.47 | 59750.60 |
| **Latency** | 777µs    | 825µs    | 865µs    | 918µs    | 974µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42781.26 | 7205.64 | 48282.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29240.77 | 44877.91 | 45432.86 | 45810.39 | 46154.23 | 46341.66 | 46901.60 |
| **Latency** | 960µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13482.17 | 1665.00 | 16861.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11247.96 | 13874.71 | 14078.49 | 14157.69 | 14261.67 | 14438.89 | 15672.63 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 5ms      | 6ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38443.79 | 5576.62 | 41590.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37888.44 | 38809.48 | 39727.97 | 40434.41 | 40779.28 | 40966.94 | 41253.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24257.89 | 4136.32 | 44941.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19704.81 | 24584.18 | 25739.20 | 26278.38 | 27043.11 | 27317.21 | 27685.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9316.54  | 1292.86 | 13101.94 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 8141.19 | 9006.52 | 9634.72 | 9839.60 | 9947.99 | 10529.99 | 12086.92 |
| **Latency** | 3ms     | 5ms     | 5ms     | 5ms     | 6ms     | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31633.39 | 2718.91 | 45577.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31223.24 | 31638.07 | 32040.51 | 32247.54 | 32443.61 | 32564.29 | 35245.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29212.37 | 3273.23 | 32140.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24311.03 | 29808.70 | 30567.62 | 30865.82 | 31171.57 | 31424.26 | 31798.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5849.63  | 1829.65 | 9940.64 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2916.19 | 5729.52 | 6196.50 | 6878.16 | 7517.46 | 7618.61 | 9679.86 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 13ms    | 20ms    |

---

<p align="center">Generated 2022-09-09T02:51:33.022Z</p>
