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
| Bun                                                                                  | 65821.75 | 7466.04 | 80900.70 | 100%     |
| Deno                                                                                 | 56560.98 | 5152.74 | 63908.89 | 86%      |
| Fast                                                                                 | 55332.55 | 4959.01 | 63107.23 | 84%      |
| Megalo                                                                               | 49633.87 | 4842.76 | 56614.19 | 75%      |
| Hono                                                                                 | 49120.75 | 5506.37 | 55429.82 | 75%      |
| Reno                                                                                 | 40321.59 | 4387.42 | 45411.27 | 61%      |
| http                                                                                 | 39777.22 | 7959.54 | 46593.21 | 60%      |
| Node                                                                                 | 34885.49 | 5413.85 | 40747.88 | 53%      |
| Alosaur                                                                              | 30697.89 | 6325.83 | 37066.04 | 47%      |
| Fastify                                                                              | 28077.01 | 5282.89 | 32977.17 | 43%      |
| Router                                                                               | 26248.91 | 3971.90 | 31316.65 | 40%      |
| Little                                                                               | 24859.01 | 3868.22 | 29927.67 | 38%      |
| Oak                                                                                  | 22297.09 | 3877.31 | 27520.99 | 34%      |
| Aqua                                                                                 | 21486.12 | 3065.71 | 25819.67 | 33%      |
| Dinatra                                                                              | 15582.87 | 3438.68 | 33097.85 | 24%      |
| Abc                                                                                  | 13848.02 | 2132.07 | 17587.86 | 21%      |
| Opine                                                                                | 8531.86  | 1215.44 | 18179.33 | 13%      |
| Express                                                                              | 6061.63  | 1445.85 | 11286.12 | 9%       |
| Acorn                                                                                | 5369.92  | 6986.76 | 60970.91 | 8%       |
| Servest                                                                              | 4870.23  | 1487.70 | 10075.84 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-8331745a-9ecb-4efb-acb3-8b85e777bb79) |          |         |          |          |

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
| 13848.02 | 2132.07 | 17587.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10903.41 | 12732.89 | 14531.14 | 15111.38 | 15616.95 | 16240.91 | 16995.10 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5369.92  | 6986.76 | 60970.91 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 96.14 | 2253.33 | 3247.31 | 6284.96 | 10166.06 | 19237.67 | 46306.21 |
| **Latency** | 5ms   | 6ms     | 13ms    | 19ms    | 24ms     | 26ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30697.89 | 6325.83 | 37066.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19513.58 | 31760.80 | 33164.49 | 33931.02 | 34817.01 | 35204.72 | 36018.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21486.12 | 3065.71 | 25819.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18184.47 | 20432.65 | 22547.62 | 23129.87 | 23904.91 | 24316.50 | 24976.05 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 65821.75 | 7466.04 | 80900.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58597.08 | 64800.33 | 66923.09 | 68922.62 | 71911.16 | 75639.86 | 78898.95 |
| **Latency** | 514µs    | 604µs    | 770µs    | 840µs    | 910µs    | 978µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56560.98 | 5152.74 | 63908.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50921.54 | 55722.28 | 57825.84 | 59219.94 | 60425.19 | 61101.32 | 62221.58 |
| **Latency** | 653µs    | 739µs    | 882µs    | 964µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15582.87 | 3438.68 | 33097.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10829.93 | 14879.67 | 16933.18 | 17428.18 | 18502.54 | 19228.54 | 20046.29 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6061.63  | 1445.85 | 11286.12 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3764.21 | 6221.76 | 6638.75 | 6836.15 | 6980.02 | 7073.05 | 7613.64 |
| **Latency** | 7ms     | 7ms     | 7ms     | 7ms     | 11ms    | 12ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55332.55 | 4959.01 | 63107.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50745.06 | 53724.57 | 56328.64 | 58033.57 | 59423.68 | 60203.96 | 61757.34 |
| **Latency** | 736µs    | 802µs    | 873µs    | 967µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28077.01 | 5282.89 | 32977.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24831.53 | 28638.90 | 29606.49 | 30302.72 | 30825.58 | 31211.11 | 32000.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49120.75 | 5506.37 | 55429.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46565.76 | 48701.24 | 50308.14 | 51405.24 | 52342.40 | 52845.23 | 53916.40 |
| **Latency** | 880µs    | 927µs    | 978µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39777.22 | 7959.54 | 46593.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26135.87 | 41239.06 | 42713.22 | 43826.41 | 44564.94 | 45044.77 | 46034.21 |
| **Latency** | 986µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24859.01 | 3868.22 | 29927.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21131.75 | 23302.55 | 26330.09 | 27134.18 | 27725.34 | 28022.51 | 28636.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49633.87 | 4842.76 | 56614.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47307.88 | 48879.71 | 50445.48 | 51792.56 | 52906.89 | 53548.78 | 54234.18 |
| **Latency** | 844µs    | 905µs    | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34885.49 | 5413.85 | 40747.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34012.06 | 35028.55 | 36032.13 | 36935.64 | 37637.45 | 38088.82 | 39071.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22297.09 | 3877.31 | 27520.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18194.32 | 22343.58 | 23638.12 | 24258.15 | 24752.82 | 25084.30 | 25883.56 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8531.86  | 1215.44 | 18179.33 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 7351.39 | 8323.15 | 8807.12 | 9027.12 | 9274.43 | 9588.72 | 10819.96 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 6ms     | 7ms     | 10ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40321.59 | 4387.42 | 45411.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39422.91 | 40350.71 | 41026.29 | 41828.83 | 42775.87 | 43328.22 | 44286.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26248.91 | 3971.90 | 31316.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21053.78 | 26459.84 | 27680.76 | 28367.77 | 28914.95 | 29232.79 | 29874.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4870.23  | 1487.70 | 10075.84 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2231.51 | 4922.91 | 5379.19 | 5654.42 | 5887.03 | 6022.12 | 6841.05 |
| **Latency** | 8ms     | 8ms     | 9ms     | 10ms    | 14ms    | 16ms    | 22ms    |

---

<p align="center">Generated 2022-10-10T02:50:17.222Z</p>
