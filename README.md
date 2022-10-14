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
| Bun                                                                                  | 54273.40 | 9222.24 | 69285.07 | 100%     |
| Deno                                                                                 | 42227.96 | 7206.15 | 51519.01 | 78%      |
| Fast                                                                                 | 39970.92 | 6205.88 | 52413.29 | 74%      |
| Megalo                                                                               | 35323.81 | 5619.48 | 45823.34 | 65%      |
| http                                                                                 | 31903.69 | 6752.28 | 38177.27 | 59%      |
| Hono                                                                                 | 31178.34 | 4163.71 | 39849.40 | 57%      |
| Reno                                                                                 | 30714.26 | 4394.01 | 37077.59 | 57%      |
| Alosaur                                                                              | 21784.37 | 7423.97 | 36590.58 | 40%      |
| Router                                                                               | 21661.27 | 3692.29 | 26683.26 | 40%      |
| Little                                                                               | 18567.23 | 3309.06 | 23437.15 | 34%      |
| Node                                                                                 | 18056.58 | 3467.85 | 23919.94 | 33%      |
| Aqua                                                                                 | 17917.42 | 2977.30 | 23473.50 | 33%      |
| Oak                                                                                  | 14536.63 | 2762.13 | 19545.44 | 27%      |
| Fastify                                                                              | 13196.91 | 2506.57 | 20038.57 | 24%      |
| Dinatra                                                                              | 10486.08 | 2103.25 | 19171.19 | 19%      |
| Abc                                                                                  | 8814.98  | 1387.11 | 12666.92 | 16%      |
| Opine                                                                                | 6048.72  | 1041.83 | 10121.98 | 11%      |
| Acorn                                                                                | 4460.89  | 6405.99 | 90656.63 | 8%       |
| Express                                                                              | 3993.01  | 1039.38 | 13102.64 | 7%       |
| Servest                                                                              | 3648.17  | 1093.79 | 8062.34  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-a1d5eb40-ff2d-463e-a229-e07b0242111b) |          |         |          |          |

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
| 8814.98  | 1387.11 | 12666.92 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6845.17 | 8310.81 | 9154.37 | 9564.76 | 10259.79 | 10760.35 | 11266.63 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms      | 7ms      | 9ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4460.89  | 6405.99 | 90656.63 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1300.35 | 2384.36 | 3173.75 | 5577.51 | 7161.80 | 8182.57 | 41970.80 |
| **Latency** | 6ms     | 7ms     | 13ms    | 19ms    | 23ms    | 25ms    | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21784.37 | 7423.97 | 36590.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10160.45 | 16061.40 | 25749.90 | 27574.80 | 28425.33 | 28820.76 | 29500.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      | 5ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17917.42 | 2977.30 | 23473.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14333.43 | 16759.65 | 18932.24 | 19787.32 | 20421.42 | 20820.80 | 21592.78 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54273.40 | 9222.24 | 69285.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42363.48 | 52942.31 | 56274.23 | 58454.72 | 64056.31 | 65805.98 | 67547.63 |
| **Latency** | 596µs    | 709µs    | 894µs    | 986µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42227.96 | 7206.15 | 51519.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33297.19 | 40285.09 | 45000.41 | 46469.79 | 47523.74 | 48086.20 | 49301.43 |
| **Latency** | 796µs    | 924µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10486.08 | 2103.25 | 19171.19 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7602.04 | 9926.49 | 11029.77 | 11735.70 | 12507.12 | 12856.97 | 13450.16 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 6ms      | 7ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3993.01  | 1039.38 | 13102.64 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2468.17 | 3760.69 | 4373.25 | 4516.48 | 4618.19 | 4682.17 | 4796.60 |
| **Latency** | 10ms    | 11ms    | 11ms    | 12ms    | 16ms    | 19ms    | 25ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39970.92 | 6205.88 | 52413.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33474.61 | 38189.39 | 42170.47 | 43618.13 | 44535.55 | 44981.43 | 46002.26 |
| **Latency** | 957µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13196.91 | 2506.57 | 20038.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10252.90 | 13303.85 | 13955.25 | 14401.86 | 14864.35 | 15174.65 | 15531.98 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 9ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31178.34 | 4163.71 | 39849.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28170.97 | 30442.44 | 32014.70 | 33365.37 | 34345.94 | 35025.89 | 36099.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31903.69 | 6752.28 | 38177.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21128.34 | 31218.92 | 34827.13 | 35883.00 | 36390.21 | 36728.25 | 37386.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18567.23 | 3309.06 | 23437.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14358.92 | 17363.89 | 19682.87 | 20622.71 | 21269.96 | 21670.02 | 22491.88 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35323.81 | 5619.48 | 45823.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30386.93 | 33900.32 | 36260.90 | 38533.50 | 40512.13 | 41236.04 | 42635.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18056.58 | 3467.85 | 23919.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14720.45 | 18192.77 | 19089.13 | 19745.80 | 20261.78 | 20485.00 | 21084.52 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14536.63 | 2762.13 | 19545.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11007.04 | 14108.05 | 15325.58 | 16209.39 | 16671.88 | 17038.67 | 17732.29 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6048.72  | 1041.83 | 10121.98 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4815.07 | 5770.43 | 6300.80 | 6638.23 | 6821.54 | 7021.76 | 8103.72 |
| **Latency** | 5ms     | 7ms     | 8ms     | 9ms     | 10ms    | 11ms    | 16ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30714.26 | 4394.01 | 37077.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27262.42 | 30376.78 | 31775.93 | 32828.01 | 33833.05 | 34476.85 | 35434.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21661.27 | 3692.29 | 26683.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17056.62 | 20713.70 | 23073.08 | 23834.35 | 24453.98 | 24893.48 | 25416.73 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3648.17  | 1093.79 | 8062.34 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2071.12 | 3440.21 | 3910.95 | 4245.89 | 4637.93 | 4847.68 | 5172.27 |
| **Latency** | 11ms    | 12ms    | 12ms    | 14ms    | 18ms    | 21ms    | 27ms    |

---

<p align="center">Generated 2022-10-14T03:01:25.403Z</p>
