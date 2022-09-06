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
| Bun       | 59291.04 | 9168.95 | 77408.89  | 100%     |
| http      | 34591.73 | 6314.29 | 44059.55  | 58%      |
| Fast      | 31859.57 | 6396.69 | 43311.20  | 54%      |
| Alosaur   | 26053.94 | 5886.66 | 33213.71  | 44%      |
| Router    | 23456.88 | 3223.86 | 28116.66  | 40%      |
| Reno      | 19114.66 | 4022.02 | 35606.21  | 32%      |
| Node      | 18432.23 | 3310.94 | 39711.52  | 31%      |
| Aqua      | 18114.65 | 2751.40 | 22729.23  | 31%      |
| Oak       | 17723.35 | 3091.73 | 23544.54  | 30%      |
| Fastify   | 14635.83 | 2771.18 | 42990.00  | 25%      |
| Abc       | 10683.55 | 1668.87 | 13932.56  | 18%      |
| Little    | 7882.42  | 1148.83 | 11923.43  | 13%      |
| Dinatra   | 6776.66  | 1181.01 | 9886.66   | 11%      |
| Opine     | 6656.31  | 3250.79 | 101010.10 | 11%      |
| Servest   | 4346.59  | 1328.22 | 8809.11   | 7%       |
| Express   | 4197.17  | 1006.47 | 11045.18  | 7%       |
| Acorn     | 4034.65  | 3368.80 | 62802.95  | 7%       |
| Deno      | 0.00     | 0.00    | 0.00      | 0%       |
| Hono      | 0.00     | 0.00    | 0.00      | 0%       |

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
| 10683.55 | 1668.87 | 13932.56 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9100.95 | 10255.36 | 10912.09 | 11648.26 | 12249.43 | 12530.61 | 13002.57 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 5ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4034.65  | 3368.80 | 62802.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1879.54 | 2446.74 | 3238.37 | 4748.21 | 7559.30 | 8802.59 | 13542.93 |
| **Latency** | 5ms     | 6ms     | 12ms    | 18ms    | 22ms    | 23ms    | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26053.94 | 5886.66 | 33213.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17550.07 | 25507.02 | 28411.28 | 29517.57 | 30309.86 | 30653.00 | 31410.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18114.65 | 2751.40 | 22729.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15230.39 | 17221.75 | 18809.31 | 19826.20 | 20397.37 | 20774.47 | 21748.53 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59291.04 | 9168.95 | 77408.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45903.87 | 57428.69 | 61949.41 | 65230.95 | 67017.72 | 67832.22 | 70919.45 |
| **Latency** | 522µs    | 635µs    | 809µs    | 902µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6776.66  | 1181.01 | 9886.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5260.52 | 6752.97 | 7131.91 | 7383.62 | 7563.10 | 7664.50 | 8101.98 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 15ms    |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4197.17  | 1006.47 | 11045.18 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2785.44 | 3882.40 | 4544.70 | 4767.23 | 4916.25 | 4989.84 | 5089.76 |
| **Latency** | 10ms    | 10ms    | 10ms    | 11ms    | 15ms    | 18ms    | 24ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31859.57 | 6396.69 | 43311.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22967.55 | 31316.97 | 34271.67 | 35503.37 | 36346.19 | 36706.68 | 37543.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14635.83 | 2771.18 | 42990.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12342.52 | 14603.43 | 15355.66 | 15884.43 | 16357.67 | 16610.56 | 17164.97 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34591.73 | 6314.29 | 44059.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24611.44 | 34672.83 | 36713.03 | 38027.55 | 38816.63 | 39398.10 | 40184.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7882.42  | 1148.83 | 11923.43 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6701.71 | 7715.78 | 8137.14 | 8502.34 | 8734.28 | 8888.66 | 9559.55 |
| **Latency** | 5ms     | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 11ms    |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18432.23 | 3310.94 | 39711.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15371.70 | 18255.95 | 19299.68 | 20121.22 | 20727.25 | 21061.17 | 21425.16 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17723.35 | 3091.73 | 23544.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14574.91 | 17171.80 | 18607.94 | 19448.32 | 20043.20 | 20417.49 | 21129.00 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6656.31  | 3250.79 | 101010.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5551.36 | 6244.49 | 6770.21 | 7051.78 | 7291.30 | 7586.73 | 8813.84 |
| **Latency** | 5ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 13ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19114.66 | 4022.02 | 35606.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16953.14 | 18010.16 | 18793.67 | 19453.59 | 20208.37 | 29697.19 | 33432.39 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23456.88 | 3223.86 | 28116.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19695.41 | 22690.89 | 24315.55 | 25410.03 | 26121.48 | 26624.60 | 27319.39 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4346.59  | 1328.22 | 8809.11 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2314.92 | 4042.74 | 4551.82 | 5031.08 | 5837.90 | 6237.35 | 6672.60 |
| **Latency** | 9ms     | 10ms    | 10ms    | 11ms    | 15ms    | 16ms    | 23ms    |

---

<p align="center">Generated 2022-09-06T23:47:32.189Z</p>
