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

| Framework                                                                            | Mean     | Stddev  | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | --------- | -------- |
| Bun                                                                                  | 55438.29 | 7876.39 | 77139.79  | 100%     |
| Deno                                                                                 | 44104.30 | 8049.68 | 54213.29  | 80%      |
| Fast                                                                                 | 44079.25 | 6560.91 | 53416.92  | 80%      |
| Megalo                                                                               | 42065.06 | 6665.80 | 51608.03  | 76%      |
| http                                                                                 | 34508.12 | 6978.81 | 42702.20  | 62%      |
| Reno                                                                                 | 30827.89 | 4597.10 | 37166.62  | 56%      |
| Hono                                                                                 | 30791.83 | 4203.94 | 42445.97  | 56%      |
| Alosaur                                                                              | 26694.45 | 5615.68 | 40008.13  | 48%      |
| Router                                                                               | 21537.50 | 3325.88 | 26377.67  | 39%      |
| Little                                                                               | 20953.99 | 3530.89 | 25982.75  | 38%      |
| Aqua                                                                                 | 18915.05 | 3102.82 | 24084.62  | 34%      |
| Node                                                                                 | 18883.57 | 4393.24 | 104789.75 | 34%      |
| Oak                                                                                  | 16088.25 | 3898.44 | 103626.94 | 29%      |
| Fastify                                                                              | 15408.35 | 2889.66 | 38054.67  | 28%      |
| Dinatra                                                                              | 11758.94 | 2260.83 | 20835.99  | 21%      |
| Abc                                                                                  | 8556.17  | 1914.11 | 13073.16  | 15%      |
| Opine                                                                                | 6422.17  | 1405.11 | 31094.33  | 12%      |
| Acorn                                                                                | 4126.27  | 5180.95 | 111111.11 | 7%       |
| Express                                                                              | 4075.07  | 921.83  | 11122.89  | 7%       |
| Servest                                                                              | 3903.14  | 1128.65 | 9115.69   | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-f70ebe36-0e9b-48a6-b55a-d3d82b05829c) |          |         |           |          |

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
| 8556.17  | 1914.11 | 13073.16 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5493.31 | 7535.19 | 9251.72 | 9943.66 | 10427.85 | 10750.10 | 11172.22 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms     | 8ms      | 9ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4126.27  | 5180.95 | 111111.11 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1659.37 | 2450.07 | 3114.01 | 5438.78 | 7500.45 | 8508.94 | 10039.30 |
| **Latency** | 5ms     | 6ms     | 13ms    | 19ms    | 22ms    | 23ms    | 28ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26694.45 | 5615.68 | 40008.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18347.73 | 25834.91 | 28760.13 | 30113.88 | 31022.31 | 31487.00 | 32458.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18915.05 | 3102.82 | 24084.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15265.74 | 17955.18 | 19711.68 | 20905.36 | 21765.30 | 22152.81 | 22976.86 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55438.29 | 7876.39 | 77139.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43729.46 | 52833.76 | 57430.45 | 60232.01 | 62328.26 | 64391.46 | 69737.65 |
| **Latency** | 566µs    | 688µs    | 866µs    | 978µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44104.30 | 8049.68 | 54213.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34004.51 | 42724.89 | 46663.87 | 48832.05 | 50736.07 | 51550.26 | 52777.72 |
| **Latency** | 726µs    | 879µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11758.94 | 2260.83 | 20835.99 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9089.04 | 10800.79 | 11953.92 | 13446.70 | 14163.49 | 14453.07 | 15073.04 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 4075.07  | 921.83 | 11122.89 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2760.58 | 3706.70 | 4370.11 | 4633.81 | 4802.27 | 4879.82 | 5096.08 |
| **Latency** | 10ms    | 10ms    | 11ms    | 12ms    | 15ms    | 18ms    | 24ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44079.25 | 6560.91 | 53416.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35644.89 | 42475.32 | 46123.38 | 48111.25 | 49559.02 | 50283.91 | 51711.02 |
| **Latency** | 814µs    | 937µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15408.35 | 2889.66 | 38054.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12776.18 | 15242.26 | 16158.38 | 16845.71 | 17369.01 | 17657.80 | 18191.73 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30791.83 | 4203.94 | 42445.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27625.49 | 29621.42 | 31303.20 | 33053.65 | 34586.16 | 35685.73 | 37665.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34508.12 | 6978.81 | 42702.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23958.79 | 33720.67 | 37092.77 | 38712.77 | 39909.65 | 40500.87 | 41424.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20953.99 | 3530.89 | 25982.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17183.06 | 19837.71 | 21917.44 | 23084.35 | 24068.32 | 24428.09 | 25146.86 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42065.06 | 6665.80 | 51608.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33937.18 | 38845.96 | 43820.30 | 46728.76 | 48353.34 | 49282.21 | 50327.34 |
| **Latency** | 900µs    | 985µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 18883.57 | 4393.24 | 104789.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15948.46 | 18607.32 | 19668.02 | 20553.00 | 21286.39 | 21719.40 | 22347.12 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 16088.25 | 3898.44 | 103626.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12471.01 | 15438.54 | 16957.92 | 17513.03 | 18227.85 | 18598.31 | 19496.97 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6422.17  | 1405.11 | 31094.33 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5500.85 | 6140.03 | 6603.62 | 6831.80 | 7058.82 | 7529.41 | 8603.26 |
| **Latency** | 5ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 15ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30827.89 | 4597.10 | 37166.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26948.31 | 30348.09 | 32020.32 | 33200.81 | 34308.43 | 34725.62 | 35507.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21537.50 | 3325.88 | 26377.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17231.20 | 20775.72 | 22696.51 | 23502.58 | 24191.80 | 24608.97 | 25501.99 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3903.14  | 1128.65 | 9115.69 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2120.08 | 3846.49 | 4206.54 | 4427.79 | 4844.21 | 5114.07 | 5455.51 |
| **Latency** | 11ms    | 11ms    | 11ms    | 13ms    | 17ms    | 20ms    | 25ms    |

---

<p align="center">Generated 2022-10-06T02:32:39.568Z</p>
