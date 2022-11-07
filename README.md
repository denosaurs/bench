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
| Bun                                                                                  | 60024.76 | 8159.65 | 78027.42 | 100%     |
| Deno                                                                                 | 49828.69 | 8657.41 | 64682.86 | 83%      |
| Megalo                                                                               | 49719.92 | 8097.98 | 62473.03 | 83%      |
| Fast                                                                                 | 47488.15 | 7655.15 | 61441.83 | 79%      |
| Hono                                                                                 | 46597.77 | 7365.15 | 58066.53 | 78%      |
| Reno                                                                                 | 40259.92 | 6691.95 | 51596.03 | 67%      |
| http                                                                                 | 38355.55 | 8429.78 | 50536.01 | 64%      |
| Node                                                                                 | 31538.69 | 6343.26 | 40112.15 | 53%      |
| Alosaur                                                                              | 27819.17 | 6642.07 | 36247.43 | 46%      |
| Router                                                                               | 26019.06 | 4941.37 | 34168.08 | 43%      |
| Little                                                                               | 24034.12 | 4533.26 | 30641.16 | 40%      |
| Fastify                                                                              | 23065.73 | 8166.70 | 45669.17 | 38%      |
| Aqua                                                                                 | 20943.43 | 4008.27 | 26670.48 | 35%      |
| Oak                                                                                  | 20763.64 | 4491.43 | 27522.29 | 35%      |
| Dinatra                                                                              | 15656.90 | 3901.88 | 38247.03 | 26%      |
| Abc                                                                                  | 12016.46 | 3585.02 | 18616.97 | 20%      |
| Opine                                                                                | 8381.44  | 1610.86 | 19917.83 | 14%      |
| Express                                                                              | 5440.11  | 1549.19 | 20706.27 | 9%       |
| Servest                                                                              | 4801.73  | 1584.33 | 9230.70  | 8%       |
| Acorn                                                                                | 4031.47  | 5143.17 | 89019.45 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-0907069e-5dee-4f84-ba61-11c59e5d8aa5) |          |         |          |          |

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
| 12016.46 | 3585.02 | 18616.97 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7106.79 | 8659.30 | 12923.37 | 15123.38 | 15956.90 | 16645.53 | 17647.81 |
| **Latency** | 3ms     | 3ms     | 3ms      | 4ms      | 6ms      | 6ms      | 9ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4031.47  | 5143.17 | 89019.45 |     |

| **Stat**    | 10     | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------ | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 806.99 | 2208.80 | 3029.27 | 4715.97 | 7801.99 | 9178.29 | 12575.59 |
| **Latency** | 5ms    | 6ms     | 13ms    | 20ms    | 24ms    | 26ms    | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27819.17 | 6642.07 | 36247.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17342.94 | 26407.81 | 30347.14 | 32013.95 | 33038.95 | 33810.83 | 34723.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20943.43 | 4008.27 | 26670.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16605.74 | 19478.26 | 22348.62 | 23398.02 | 24256.59 | 24702.41 | 25621.08 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60024.76 | 8159.65 | 78027.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50714.48 | 57397.39 | 61720.04 | 64324.21 | 67653.16 | 69412.89 | 73507.03 |
| **Latency** | 540µs    | 650µs    | 814µs    | 896µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49828.69 | 8657.41 | 64682.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39257.16 | 47376.13 | 52186.16 | 55025.07 | 57163.57 | 59013.30 | 61218.79 |
| **Latency** | 675µs    | 795µs    | 943µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15656.90 | 3901.88 | 38247.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10743.27 | 14102.48 | 16677.51 | 17824.16 | 19492.90 | 20160.44 | 21062.51 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5440.11  | 1549.19 | 20706.27 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3207.94 | 4842.64 | 5974.78 | 6307.67 | 6545.07 | 6757.89 | 7125.41 |
| **Latency** | 7ms     | 7ms     | 8ms     | 9ms     | 12ms    | 15ms    | 20ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47488.15 | 7655.15 | 61441.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38640.19 | 45410.17 | 49204.24 | 52179.66 | 54293.62 | 55720.74 | 58166.13 |
| **Latency** | 798µs    | 880µs    | 970µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23065.73 | 8166.70 | 45669.17 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9870.04 | 16520.91 | 27209.27 | 28762.01 | 29733.48 | 30362.72 | 31998.42 |
| **Latency** | 1ms     | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      | 7ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46597.77 | 7365.15 | 58066.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39386.66 | 45211.11 | 48330.72 | 50477.87 | 52721.92 | 53920.26 | 55919.34 |
| **Latency** | 837µs    | 914µs    | 994µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38355.55 | 8429.78 | 50536.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25138.61 | 36233.55 | 41831.61 | 43434.84 | 44917.32 | 45653.68 | 47684.51 |
| **Latency** | 970µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24034.12 | 4533.26 | 30641.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18752.61 | 22251.89 | 25527.93 | 26940.02 | 28043.03 | 28607.86 | 29602.54 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49719.92 | 8097.98 | 62473.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40858.78 | 47651.12 | 51809.62 | 54477.53 | 56591.60 | 57672.22 | 59640.29 |
| **Latency** | 769µs    | 847µs    | 932µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31538.69 | 6343.26 | 40112.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24635.12 | 31145.65 | 33309.52 | 34907.71 | 36118.63 | 36873.22 | 38438.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20763.64 | 4491.43 | 27522.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15698.69 | 19207.02 | 22347.79 | 23511.18 | 24455.89 | 24949.43 | 26340.13 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8381.44  | 1610.86 | 19917.83 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 6657.14 | 7837.36 | 8670.49 | 9171.64 | 9722.19 | 10113.64 | 11504.79 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 7ms     | 8ms      | 11ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40259.92 | 6691.95 | 51596.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33430.62 | 39836.05 | 41744.90 | 43752.51 | 45264.08 | 46379.75 | 47827.06 |
| **Latency** | 983µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26019.06 | 4941.37 | 34168.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20125.45 | 24255.38 | 27601.82 | 29068.77 | 30135.18 | 30936.37 | 32476.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4801.73  | 1584.33 | 9230.70 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2269.48 | 4553.81 | 5308.84 | 5700.32 | 6022.04 | 6330.55 | 7581.71 |
| **Latency** | 8ms     | 8ms     | 9ms     | 11ms    | 15ms    | 18ms    | 24ms    |

---

<p align="center">Generated 2022-11-07T02:17:47.134Z</p>
