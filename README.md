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

| Framework | Mean     | Stddev   | Max       | Relative |
| --------- | -------- | -------- | --------- | -------- |
| Bun       | 79821.18 | 3746.77  | 92621.97  | 100%     |
| Deno      | 67740.65 | 4961.19  | 75550.31  | 85%      |
| Fast      | 67253.10 | 5495.82  | 71394.66  | 84%      |
| Hono      | 60850.54 | 6963.32  | 65308.60  | 76%      |
| Reno      | 50616.68 | 3546.12  | 53404.45  | 63%      |
| http      | 49030.46 | 8715.52  | 54900.26  | 61%      |
| Node      | 43698.90 | 6423.06  | 47124.30  | 55%      |
| Alosaur   | 38445.20 | 7334.48  | 44765.45  | 48%      |
| Fastify   | 34066.22 | 10714.72 | 41748.95  | 43%      |
| Router    | 33673.04 | 4322.18  | 37326.19  | 42%      |
| Little    | 31205.36 | 4680.20  | 35281.55  | 39%      |
| Oak       | 27946.44 | 4321.49  | 32341.78  | 35%      |
| Aqua      | 25998.70 | 3044.44  | 29249.25  | 33%      |
| Dinatra   | 19767.71 | 3191.10  | 24289.05  | 25%      |
| Abc       | 15304.62 | 3791.97  | 20791.67  | 19%      |
| Opine     | 10808.55 | 1322.89  | 14193.76  | 14%      |
| Express   | 8316.84  | 1587.81  | 9405.60   | 10%      |
| Servest   | 6218.65  | 1708.73  | 11191.35  | 8%       |
| Acorn     | 4888.05  | 6844.71  | 102893.23 | 6%       |

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
| 15304.62 | 3791.97 | 20791.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10433.89 | 10616.53 | 16823.18 | 17857.42 | 19665.01 | 19800.87 | 20346.26 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4888.05  | 6844.71 | 102893.23 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2013.32 | 2697.59 | 3429.78 | 4878.80 | 9988.82 | 12443.18 | 21392.62 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 20ms    | 22ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38445.20 | 7334.48 | 44765.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28619.07 | 38858.17 | 41749.67 | 42343.46 | 42696.90 | 42931.92 | 43390.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25998.70 | 3044.44 | 29249.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23532.20 | 24704.62 | 27105.07 | 27676.03 | 28285.36 | 28631.72 | 28980.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 79821.18 | 3746.77 | 92621.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74763.34 | 78909.26 | 80611.07 | 81733.25 | 83156.45 | 84530.10 | 87638.32 |
| **Latency** | 426µs    | 506µs    | 667µs    | 693µs    | 717µs    | 747µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67740.65 | 4961.19 | 75550.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63812.78 | 67105.21 | 68986.27 | 69882.13 | 70573.28 | 71083.78 | 71831.43 |
| **Latency** | 552µs    | 616µs    | 756µs    | 811µs    | 846µs    | 876µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19767.71 | 3191.10 | 24289.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16423.73 | 16931.53 | 21338.05 | 21584.39 | 21794.03 | 22200.92 | 22810.24 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 8316.84  | 1587.81 | 9405.60 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5963.32 | 8284.05 | 9087.68 | 9217.78 | 9289.25 | 9322.17 | 9370.83 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 9ms     | 12ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67253.10 | 5495.82 | 71394.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63696.67 | 66837.94 | 68638.24 | 69410.94 | 69960.73 | 70241.20 | 70803.79 |
| **Latency** | 630µs    | 676µs    | 715µs    | 790µs    | 827µs    | 852µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 34066.22 | 10714.72 | 41748.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15524.81 | 34959.00 | 39739.25 | 40438.72 | 40868.57 | 41138.13 | 41430.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60850.54 | 6963.32 | 65308.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59430.77 | 61117.44 | 62381.58 | 63377.19 | 64013.31 | 64264.64 | 64748.41 |
| **Latency** | 705µs    | 747µs    | 798µs    | 847µs    | 897µs    | 947µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49030.46 | 8715.52 | 54900.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37145.29 | 50877.95 | 52873.42 | 53336.14 | 53796.70 | 53987.33 | 54386.40 |
| **Latency** | 822µs    | 870µs    | 970µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31205.36 | 4680.20 | 35281.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28013.67 | 29749.02 | 33210.88 | 33819.88 | 34210.18 | 34516.84 | 34939.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43698.90 | 6423.06 | 47124.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43489.92 | 44445.68 | 45069.30 | 45755.26 | 46238.27 | 46425.43 | 46743.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27946.44 | 4321.49 | 32341.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24450.82 | 26796.41 | 29609.70 | 30105.65 | 30616.46 | 30903.55 | 31351.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10808.55 | 1322.89 | 14193.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10103.21 | 10523.18 | 11211.13 | 11302.51 | 11363.35 | 11434.87 | 13064.98 |
| **Latency** | 3ms      | 3ms      | 4ms      | 5ms      | 5ms      | 5ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50616.68 | 3546.12 | 53404.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50029.97 | 50566.23 | 51139.82 | 51812.87 | 52390.72 | 52605.14 | 52981.11 |
| **Latency** | 902µs    | 942µs    | 972µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33673.04 | 4322.18 | 37326.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29548.84 | 32862.93 | 35434.43 | 35852.89 | 36370.24 | 36659.80 | 36968.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6218.65  | 1708.73 | 11191.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4115.84 | 6026.34 | 6774.64 | 7239.81 | 7454.03 | 7748.88 | 9264.60 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 12ms    | 17ms    |

---

<p align="center">Generated 2022-09-25T02:53:14.545Z</p>
