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
| Bun       | 70233.57 | 6364.64 | 84461.74  | 100%     |
| Deno      | 59306.85 | 4278.31 | 65811.48  | 84%      |
| Fast      | 57401.03 | 5086.01 | 62500.95  | 82%      |
| Hono      | 54410.48 | 4985.17 | 59145.67  | 77%      |
| Reno      | 44807.71 | 3925.99 | 48365.40  | 64%      |
| http      | 43302.73 | 8518.56 | 49526.50  | 62%      |
| Node      | 38155.04 | 5450.11 | 41084.01  | 54%      |
| Alosaur   | 33906.62 | 8389.19 | 162601.63 | 48%      |
| Fastify   | 31989.42 | 5234.83 | 35624.41  | 46%      |
| Router    | 30026.20 | 4244.33 | 34368.33  | 43%      |
| Little    | 28103.40 | 4203.53 | 32265.20  | 40%      |
| Oak       | 24648.05 | 3719.09 | 29319.78  | 35%      |
| Aqua      | 23492.01 | 3273.28 | 27361.98  | 33%      |
| Dinatra   | 17142.97 | 3699.89 | 36294.26  | 24%      |
| Abc       | 15307.74 | 2626.64 | 18725.00  | 22%      |
| Opine     | 10001.14 | 4185.98 | 139856.88 | 14%      |
| Express   | 6643.95  | 1839.92 | 41245.55  | 9%       |
| Servest   | 5566.01  | 1621.99 | 10570.21  | 8%       |
| Acorn     | 3885.73  | 2632.55 | 14943.52  | 6%       |

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
| 15307.74 | 2626.64 | 18725.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11301.31 | 13645.78 | 16534.99 | 16941.42 | 17274.41 | 17446.67 | 17910.13 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 5ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3885.73  | 2632.55 | 14943.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1873.64 | 2425.62 | 3007.58 | 4153.00 | 8541.93 | 10124.96 | 12386.28 |
| **Latency** | 4ms     | 5ms     | 12ms    | 18ms    | 22ms    | 23ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 33906.62 | 8389.19 | 162601.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22170.12 | 35098.49 | 36812.33 | 37323.85 | 37666.14 | 38024.91 | 39067.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23492.01 | 3273.28 | 27361.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20363.95 | 22237.98 | 24713.96 | 25311.51 | 26062.45 | 26387.01 | 26701.03 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 70233.57 | 6364.64 | 84461.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64879.48 | 69611.49 | 71391.59 | 72640.34 | 74430.14 | 76824.72 | 81849.51 |
| **Latency** | 478µs    | 565µs    | 742µs    | 782µs    | 823µs    | 881µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59306.85 | 4278.31 | 65811.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56056.24 | 58539.51 | 60317.86 | 61316.93 | 62027.26 | 62419.72 | 63422.58 |
| **Latency** | 609µs    | 694µs    | 871µs    | 927µs    | 973µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17142.97 | 3699.89 | 36294.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12330.15 | 15462.54 | 17748.18 | 19956.20 | 20552.01 | 21053.90 | 21587.64 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6643.95  | 1839.92 | 41245.55 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4022.18 | 6692.46 | 7344.03 | 7474.11 | 7540.30 | 7574.04 | 7679.75 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 10ms    | 12ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 57401.03 | 5086.01 | 62500.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53563.13 | 56631.42 | 58809.70 | 59826.59 | 60517.85 | 60936.31 | 61493.53 |
| **Latency** | 725µs    | 779µs    | 836µs    | 934µs    | 983µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31989.42 | 5234.83 | 35624.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31413.57 | 32320.53 | 33318.83 | 34037.96 | 34367.19 | 34519.85 | 34727.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54410.48 | 4985.17 | 59145.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51277.16 | 53436.60 | 55512.49 | 56726.94 | 57444.33 | 57822.26 | 58423.66 |
| **Latency** | 801µs    | 845µs    | 887µs    | 938µs    | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43302.73 | 8518.56 | 49526.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29111.64 | 45048.89 | 47129.82 | 47814.11 | 48215.77 | 48368.08 | 48802.92 |
| **Latency** | 922µs    | 978µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28103.40 | 4203.53 | 32265.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24123.03 | 25863.32 | 30030.18 | 30496.82 | 31005.36 | 31447.33 | 31756.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38155.04 | 5450.11 | 41084.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37704.33 | 38599.00 | 39333.23 | 40019.05 | 40361.95 | 40555.35 | 40819.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24648.05 | 3719.09 | 29319.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20645.11 | 24719.89 | 26115.03 | 26512.76 | 26902.90 | 27255.63 | 27661.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 10001.14 | 4185.98 | 139856.88 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8641.69 | 9287.28 | 10181.04 | 10470.18 | 11178.40 | 11964.71 | 13007.05 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44807.71 | 3925.99 | 48365.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43895.91 | 44883.53 | 45490.16 | 46120.34 | 46679.63 | 46964.24 | 47573.40 |
| **Latency** | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30026.20 | 4244.33 | 34368.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24435.80 | 30106.47 | 31890.32 | 32238.91 | 32694.98 | 33060.86 | 33476.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5566.01  | 1621.99 | 10570.21 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3026.07 | 5484.49 | 6074.44 | 6470.93 | 6807.72 | 6937.50 | 8124.91 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 14ms    | 20ms    |

---

<p align="center">Generated 2022-09-30T03:17:23.724Z</p>
