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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Bun                                                                                  | 70511.46 | 15005.91 | 94835.92 | 100%     |
| Deno                                                                                 | 68483.10 | 4180.87  | 74837.39 | 97%      |
| Fast                                                                                 | 64961.78 | 5975.68  | 69996.96 | 92%      |
| Megalo                                                                               | 64915.84 | 5266.68  | 69450.13 | 92%      |
| Hono                                                                                 | 62486.11 | 5152.98  | 68336.94 | 89%      |
| Reno                                                                                 | 50512.43 | 3970.94  | 53477.66 | 72%      |
| http                                                                                 | 49747.32 | 8689.50  | 55677.02 | 71%      |
| Node                                                                                 | 44084.22 | 6421.30  | 47409.90 | 63%      |
| Alosaur                                                                              | 38569.35 | 7628.62  | 44564.27 | 55%      |
| Router                                                                               | 34374.01 | 4454.23  | 39648.97 | 49%      |
| Fastify                                                                              | 32175.74 | 11643.16 | 41693.87 | 46%      |
| Little                                                                               | 31595.30 | 5096.82  | 36175.55 | 45%      |
| Oak                                                                                  | 28240.51 | 4090.02  | 32468.85 | 40%      |
| Aqua                                                                                 | 26053.07 | 3411.40  | 32625.62 | 37%      |
| Dinatra                                                                              | 20383.10 | 3835.48  | 25544.17 | 29%      |
| Abc                                                                                  | 15532.65 | 4185.89  | 21971.21 | 22%      |
| Opine                                                                                | 11166.90 | 1415.85  | 14610.66 | 16%      |
| Express                                                                              | 8088.16  | 1524.02  | 12756.28 | 11%      |
| Servest                                                                              | 6364.84  | 1799.75  | 11503.08 | 9%       |
| Acorn                                                                                | 4376.85  | 3686.89  | 73884.66 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-46b2ad78-bce0-41b6-95d9-bef6b5f76e09) |          |          |          |          |

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
| 15532.65 | 4185.89 | 21971.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10719.73 | 10930.30 | 17316.32 | 18709.20 | 19836.28 | 20941.02 | 21546.53 |
| **Latency** | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4376.85  | 3686.89 | 73884.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1952.67 | 2704.25 | 3356.64 | 4974.38 | 9667.31 | 12112.98 | 14995.80 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 21ms    | 23ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38569.35 | 7628.62 | 44564.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28311.41 | 39419.78 | 41851.85 | 42534.64 | 42906.94 | 43101.80 | 43741.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26053.07 | 3411.40 | 32625.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23621.87 | 24714.23 | 27463.88 | 27849.04 | 28114.39 | 28415.77 | 29070.82 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 70511.46 | 15005.91 | 94835.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45123.08 | 53830.61 | 78712.72 | 80198.84 | 81606.65 | 83034.19 | 91904.48 |
| **Latency** | 446µs    | 542µs    | 685µs    | 716µs    | 953µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 68483.10 | 4180.87 | 74837.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64103.14 | 68040.80 | 69660.07 | 70573.09 | 71338.11 | 71720.70 | 72552.09 |
| **Latency** | 543µs    | 610µs    | 750µs    | 801µs    | 845µs    | 872µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20383.10 | 3835.48 | 25544.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15418.47 | 17003.34 | 22112.66 | 22393.48 | 23856.78 | 24223.72 | 24467.37 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8088.16  | 1524.02 | 12756.28 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5672.85 | 8128.87 | 8833.59 | 8943.29 | 9037.06 | 9066.01 | 9103.47 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64961.78 | 5975.68 | 69996.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61145.38 | 65002.74 | 66575.17 | 67391.27 | 68032.12 | 68552.15 | 69109.83 |
| **Latency** | 658µs    | 702µs    | 746µs    | 799µs    | 851µs    | 890µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 32175.74 | 11643.16 | 41693.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15139.84 | 15498.43 | 39464.38 | 40306.46 | 40867.48 | 41100.05 | 41475.12 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 62486.11 | 5152.98 | 68336.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59648.37 | 61841.72 | 63799.00 | 64614.28 | 65173.76 | 65423.71 | 65945.61 |
| **Latency** | 705µs    | 744µs    | 776µs    | 819µs    | 864µs    | 893µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49747.32 | 8689.50 | 55677.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37278.43 | 51005.70 | 53622.08 | 54179.42 | 54512.63 | 54713.12 | 55025.00 |
| **Latency** | 813µs    | 863µs    | 953µs    | 999µs    | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31595.30 | 5096.82 | 36175.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28316.47 | 29938.36 | 33995.24 | 34379.30 | 34690.20 | 35059.85 | 35486.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64915.84 | 5266.68 | 69450.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62421.34 | 64901.30 | 66012.65 | 66828.18 | 67518.34 | 67910.30 | 68814.18 |
| **Latency** | 666µs    | 709µs    | 752µs    | 801µs    | 857µs    | 903µs    | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44084.22 | 6421.30 | 47409.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43868.51 | 44853.00 | 45428.70 | 46222.73 | 46571.80 | 46707.58 | 46904.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28240.51 | 4090.02 | 32468.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24716.39 | 27457.72 | 29790.68 | 30233.16 | 30813.93 | 31098.81 | 31616.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11166.90 | 1415.85 | 14610.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10347.06 | 10746.13 | 11555.62 | 11680.08 | 11956.24 | 12688.75 | 13462.65 |
| **Latency** | 3ms      | 3ms      | 4ms      | 5ms      | 5ms      | 5ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50512.43 | 3970.94 | 53477.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49944.06 | 50526.89 | 51094.63 | 51685.81 | 52342.52 | 52689.07 | 53121.37 |
| **Latency** | 897µs    | 940µs    | 971µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34374.01 | 4454.23 | 39648.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29941.39 | 33785.23 | 36117.06 | 36678.98 | 37329.29 | 37522.58 | 37835.54 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6364.84  | 1799.75 | 11503.08 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4231.41 | 6110.01 | 6968.45 | 7407.43 | 7647.74 | 7934.54 | 9448.35 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 10ms    | 12ms    | 17ms    |

---

<p align="center">Generated 2022-11-04T02:29:59.989Z</p>
