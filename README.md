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
| Bun       | 71846.86 | 7289.57 | 86709.97  | 100%     |
| Deno      | 61179.05 | 5285.36 | 68715.95  | 85%      |
| Fast      | 58800.39 | 5795.98 | 64559.05  | 82%      |
| Hono      | 54188.63 | 5688.76 | 59679.86  | 75%      |
| http      | 41704.06 | 8394.03 | 48126.06  | 58%      |
| Node      | 39521.85 | 5633.29 | 42861.94  | 55%      |
| Fastify   | 33546.33 | 5556.43 | 36449.03  | 47%      |
| Alosaur   | 33533.39 | 6860.95 | 47676.46  | 47%      |
| Reno      | 31295.29 | 2819.11 | 47301.54  | 44%      |
| Router    | 29650.72 | 3993.54 | 33905.73  | 41%      |
| Little    | 27159.38 | 4131.13 | 32035.90  | 38%      |
| Oak       | 24242.42 | 3581.61 | 30367.84  | 34%      |
| Aqua      | 23123.15 | 3022.66 | 27672.14  | 32%      |
| Abc       | 15655.54 | 2950.99 | 27371.58  | 22%      |
| Dinatra   | 13284.80 | 3052.58 | 19748.69  | 18%      |
| Opine     | 9758.58  | 3328.82 | 110109.64 | 14%      |
| Express   | 6805.46  | 1496.26 | 10683.02  | 9%       |
| Servest   | 5465.47  | 1605.17 | 10584.57  | 8%       |
| Acorn     | 4046.66  | 4544.59 | 101693.19 | 6%       |

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
| 15655.54 | 2950.99 | 27371.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12021.95 | 14108.69 | 15505.97 | 17733.61 | 19470.73 | 19669.20 | 19928.60 |
| **Latency** | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4046.66  | 4544.59 | 101693.19 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1892.26 | 2458.90 | 3042.21 | 4201.88 | 8203.98 | 10237.32 | 12608.86 |
| **Latency** | 4ms     | 5ms     | 12ms    | 18ms    | 22ms    | 23ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33533.39 | 6860.95 | 47676.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22509.80 | 35001.58 | 36403.83 | 37026.85 | 37473.27 | 37775.64 | 38242.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23123.15 | 3022.66 | 27672.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20626.59 | 22073.40 | 24418.45 | 24707.37 | 24972.18 | 25362.72 | 25915.46 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 71846.86 | 7289.57 | 86709.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65053.02 | 70971.56 | 73742.20 | 75019.15 | 76523.37 | 77804.30 | 84897.76 |
| **Latency** | 460µs    | 544µs    | 720µs    | 760µs    | 825µs    | 880µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61179.05 | 5285.36 | 68715.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56607.30 | 60600.80 | 62631.03 | 63639.81 | 64329.30 | 64782.35 | 65521.33 |
| **Latency** | 598µs    | 669µs    | 839µs    | 897µs    | 945µs    | 986µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13284.80 | 3052.58 | 19748.69 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9022.96 | 13116.07 | 14724.96 | 14870.26 | 14987.76 | 15133.19 | 15816.37 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6805.46  | 1496.26 | 10683.02 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4260.78 | 6942.87 | 7532.66 | 7648.22 | 7734.30 | 7762.14 | 7811.13 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 10ms    | 11ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58800.39 | 5795.98 | 64559.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54840.31 | 58431.27 | 60371.55 | 61331.59 | 61845.29 | 62279.17 | 62926.91 |
| **Latency** | 633µs    | 691µs    | 860µs    | 927µs    | 974µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33546.33 | 5556.43 | 36449.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33167.83 | 34102.56 | 35047.85 | 35580.24 | 35831.72 | 35976.46 | 36204.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54188.63 | 5688.76 | 59679.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52016.40 | 54015.41 | 55313.56 | 56210.41 | 57032.81 | 57480.19 | 58213.24 |
| **Latency** | 820µs    | 855µs    | 889µs    | 927µs    | 986µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41704.06 | 8394.03 | 48126.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27217.28 | 43827.32 | 45340.03 | 45935.60 | 46322.93 | 46618.88 | 47065.58 |
| **Latency** | 958µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27159.38 | 4131.13 | 32035.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23326.24 | 25124.75 | 29085.89 | 29378.37 | 29622.04 | 29963.84 | 30445.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39521.85 | 5633.29 | 42861.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38848.76 | 40030.22 | 40802.65 | 41401.86 | 41876.42 | 42128.02 | 42546.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24242.42 | 3581.61 | 30367.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20707.35 | 24215.62 | 25622.52 | 26013.92 | 26756.09 | 27043.38 | 27420.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9758.58  | 3328.82 | 110109.64 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8415.36 | 9147.96 | 9923.99 | 10203.13 | 10433.11 | 11676.46 | 12887.71 |
| **Latency** | 3ms     | 4ms     | 5ms     | 5ms      | 6ms      | 6ms      | 9ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31295.29 | 2819.11 | 47301.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30862.50 | 31338.99 | 31752.24 | 32103.37 | 32379.82 | 32566.86 | 33213.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29650.72 | 3993.54 | 33905.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24544.29 | 29892.52 | 31227.95 | 31766.83 | 32437.45 | 32711.92 | 33052.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5465.47  | 1605.17 | 10584.57 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2925.32 | 5450.12 | 5932.00 | 6402.44 | 6599.69 | 6715.21 | 7891.66 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 13ms    | 14ms    | 20ms    |

---

<p align="center">Generated 2022-09-10T02:52:13.751Z</p>
