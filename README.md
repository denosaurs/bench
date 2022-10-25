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
| Bun                                                                                  | 78901.77 | 7885.84 | 94613.23 | 100%     |
| Deno                                                                                 | 70650.33 | 4532.34 | 78800.33 | 90%      |
| Fast                                                                                 | 67993.74 | 5929.89 | 74753.99 | 86%      |
| Megalo                                                                               | 64291.22 | 5201.43 | 68601.94 | 81%      |
| Hono                                                                                 | 63400.10 | 5930.20 | 67132.20 | 80%      |
| Reno                                                                                 | 50805.92 | 4212.95 | 54370.87 | 64%      |
| http                                                                                 | 47914.67 | 7943.25 | 53804.38 | 61%      |
| Node                                                                                 | 44776.28 | 6707.64 | 48768.73 | 57%      |
| Fastify                                                                              | 38436.65 | 6470.93 | 41706.26 | 49%      |
| Alosaur                                                                              | 38131.15 | 7295.71 | 43499.24 | 48%      |
| Router                                                                               | 33483.52 | 3873.89 | 37249.65 | 42%      |
| Little                                                                               | 30859.69 | 4729.03 | 34990.72 | 39%      |
| Oak                                                                                  | 27624.66 | 4078.25 | 35473.45 | 35%      |
| Aqua                                                                                 | 25583.84 | 2943.27 | 29661.06 | 32%      |
| Dinatra                                                                              | 20489.30 | 3937.09 | 30020.90 | 26%      |
| Abc                                                                                  | 16698.50 | 3676.82 | 21823.35 | 21%      |
| Opine                                                                                | 10946.10 | 1327.80 | 13842.78 | 14%      |
| Express                                                                              | 7926.72  | 1618.95 | 9634.87  | 10%      |
| Servest                                                                              | 6397.33  | 1753.29 | 11230.20 | 8%       |
| Acorn                                                                                | 4339.51  | 3689.87 | 72078.40 | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-be70420b-07d2-4b8c-982f-51efa33093a1) |          |         |          |          |

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
| 16698.50 | 3676.82 | 21823.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10687.21 | 15769.72 | 18136.46 | 18833.53 | 20546.05 | 21037.08 | 21502.56 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4339.51  | 3689.87 | 72078.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2151.59 | 2749.38 | 3311.41 | 4610.96 | 9380.64 | 11803.54 | 14262.19 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 21ms    | 23ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38131.15 | 7295.71 | 43499.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28638.90 | 38673.03 | 41311.81 | 41827.69 | 42390.03 | 42705.10 | 43139.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25583.84 | 2943.27 | 29661.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22854.98 | 23969.62 | 26922.51 | 27128.35 | 27597.00 | 28078.62 | 28487.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78901.77 | 7885.84 | 94613.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74713.43 | 78216.40 | 79571.06 | 80866.58 | 83895.29 | 90984.26 | 93917.82 |
| **Latency** | 437µs    | 512µs    | 668µs    | 697µs    | 717µs    | 759µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 70650.33 | 4532.34 | 78800.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66248.35 | 70022.76 | 71830.11 | 72744.58 | 73589.97 | 73978.13 | 74583.83 |
| **Latency** | 525µs    | 591µs    | 728µs    | 775µs    | 816µs    | 843µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20489.30 | 3937.09 | 30020.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15515.65 | 17104.43 | 22241.20 | 22512.08 | 24190.84 | 24409.53 | 24624.02 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7926.72  | 1618.95 | 9634.87 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5321.98 | 7255.06 | 8757.44 | 8895.26 | 8979.10 | 9013.24 | 9060.52 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67993.74 | 5929.89 | 74753.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63967.13 | 67425.59 | 69777.67 | 70479.22 | 71052.19 | 71335.29 | 71848.15 |
| **Latency** | 601µs    | 663µs    | 707µs    | 784µs    | 827µs    | 851µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38436.65 | 6470.93 | 41706.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38201.91 | 39369.27 | 40032.51 | 40549.06 | 40932.34 | 41124.61 | 41383.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63400.10 | 5930.20 | 67132.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60959.70 | 63134.07 | 64942.21 | 65536.83 | 65920.42 | 66134.90 | 66561.88 |
| **Latency** | 684µs    | 729µs    | 764µs    | 808µs    | 844µs    | 874µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47914.67 | 7943.25 | 53804.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37365.77 | 49555.49 | 51391.92 | 51818.15 | 52150.75 | 52339.24 | 52633.71 |
| **Latency** | 848µs    | 894µs    | 996µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30859.69 | 4729.03 | 34990.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27632.25 | 29408.82 | 32657.48 | 33445.84 | 34234.91 | 34469.35 | 34732.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64291.22 | 5201.43 | 68601.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62136.03 | 63921.44 | 65443.29 | 66230.45 | 66852.96 | 67208.86 | 67942.41 |
| **Latency** | 675µs    | 716µs    | 757µs    | 809µs    | 861µs    | 908µs    | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44776.28 | 6707.64 | 48768.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44536.04 | 45734.72 | 46250.85 | 46983.13 | 47248.62 | 47347.32 | 47558.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27624.66 | 4078.25 | 35473.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24564.31 | 26636.81 | 29306.80 | 29585.79 | 29973.95 | 30618.06 | 31033.43 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10946.10 | 1327.80 | 13842.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10188.58 | 10702.51 | 11347.66 | 11433.07 | 11499.28 | 11607.37 | 13176.48 |
| **Latency** | 3ms      | 3ms      | 4ms      | 5ms      | 5ms      | 5ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50805.92 | 4212.95 | 54370.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50259.79 | 50763.44 | 51389.95 | 52099.43 | 52616.22 | 52919.03 | 53516.39 |
| **Latency** | 895µs    | 936µs    | 966µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33483.52 | 3873.89 | 37249.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29706.53 | 32631.64 | 34965.03 | 35510.29 | 36146.62 | 36368.49 | 36695.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6397.33  | 1753.29 | 11230.20 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4213.10 | 6137.21 | 7000.42 | 7418.16 | 7668.55 | 7972.52 | 9510.66 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 12ms    | 16ms    |

---

<p align="center">Generated 2022-10-25T02:57:52.234Z</p>
