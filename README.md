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
| Bun                                                                                  | 75462.80 | 3649.88 | 91472.95 | 100%     |
| Deno                                                                                 | 64282.42 | 6504.33 | 73592.99 | 85%      |
| Fast                                                                                 | 61235.61 | 5147.59 | 66770.78 | 81%      |
| Hono                                                                                 | 60812.83 | 6042.04 | 65327.50 | 81%      |
| Megalo                                                                               | 59869.72 | 5110.21 | 64892.15 | 79%      |
| Reno                                                                                 | 49039.92 | 3828.93 | 52606.32 | 65%      |
| http                                                                                 | 45847.60 | 8943.12 | 53620.28 | 61%      |
| Node                                                                                 | 42208.62 | 6338.69 | 45975.45 | 56%      |
| Fastify                                                                              | 36256.84 | 6357.11 | 40300.04 | 48%      |
| Alosaur                                                                              | 36210.69 | 7717.59 | 47670.04 | 48%      |
| Router                                                                               | 33254.53 | 4580.22 | 37400.69 | 44%      |
| Little                                                                               | 29958.28 | 4884.16 | 34470.91 | 40%      |
| Oak                                                                                  | 26942.62 | 4386.66 | 31796.05 | 36%      |
| Aqua                                                                                 | 24849.36 | 3364.28 | 29777.99 | 33%      |
| Dinatra                                                                              | 19009.82 | 3288.52 | 23219.05 | 25%      |
| Abc                                                                                  | 15506.54 | 3466.22 | 20271.84 | 21%      |
| Opine                                                                                | 10176.37 | 1408.36 | 13705.84 | 13%      |
| Express                                                                              | 7598.92  | 1475.15 | 9048.69  | 10%      |
| Servest                                                                              | 6140.49  | 1763.19 | 11210.14 | 8%       |
| Acorn                                                                                | 4421.14  | 4715.54 | 78630.90 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-4fb3c349-0d98-48da-bad5-5200d6ed2dcd) |          |         |          |          |

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
| 15506.54 | 3466.22 | 20271.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10025.77 | 14242.88 | 16057.65 | 18096.32 | 19388.71 | 19655.87 | 20008.22 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4421.14  | 4715.54 | 78630.90 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1872.04 | 2655.41 | 3437.88 | 4880.49 | 9221.78 | 11483.77 | 13618.00 |
| **Latency** | 3ms     | 5ms     | 11ms    | 17ms    | 21ms    | 23ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36210.69 | 7717.59 | 47670.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25262.46 | 37295.46 | 39515.51 | 40349.65 | 40925.86 | 41249.43 | 41725.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24849.36 | 3364.28 | 29777.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21754.51 | 23390.59 | 26141.47 | 26796.20 | 27238.54 | 27601.53 | 28347.46 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 75462.80 | 3649.88 | 91472.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 71274.88 | 74118.58 | 75577.50 | 76912.34 | 78216.46 | 79807.21 | 87804.43 |
| **Latency** | 451µs    | 543µs    | 702µs    | 733µs    | 765µs    | 796µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64282.42 | 6504.33 | 73592.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58701.23 | 63812.19 | 66418.64 | 67640.96 | 68426.34 | 68922.81 | 69655.37 |
| **Latency** | 566µs    | 639µs    | 785µs    | 846µs    | 911µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19009.82 | 3288.52 | 23219.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15554.37 | 16426.30 | 20536.00 | 21035.82 | 21401.83 | 21597.80 | 22386.22 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7598.92  | 1475.15 | 9048.69 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5073.42 | 7669.80 | 8286.60 | 8435.94 | 8547.88 | 8625.80 | 8754.11 |
| **Latency** | 5ms     | 5ms     | 6ms     | 6ms     | 8ms     | 10ms    | 14ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61235.61 | 5147.59 | 66770.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57698.13 | 60815.86 | 62524.43 | 63509.92 | 64261.45 | 64861.09 | 65730.50 |
| **Latency** | 688µs    | 740µs    | 792µs    | 851µs    | 918µs    | 976µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36256.84 | 6357.11 | 40300.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35725.78 | 37016.29 | 37868.22 | 38562.50 | 39016.69 | 39257.77 | 39700.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60812.83 | 6042.04 | 65327.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57313.23 | 60403.95 | 62384.78 | 63237.37 | 63831.34 | 64125.70 | 64729.51 |
| **Latency** | 693µs    | 739µs    | 795µs    | 857µs    | 912µs    | 956µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45847.60 | 8943.12 | 53620.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33175.38 | 47523.81 | 49752.28 | 50421.10 | 50935.19 | 51192.35 | 51591.54 |
| **Latency** | 869µs    | 928µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29958.28 | 4884.16 | 34470.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26502.94 | 28106.50 | 32025.97 | 32708.51 | 33218.61 | 33512.43 | 33953.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59869.72 | 5110.21 | 64892.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57771.06 | 59516.72 | 60851.17 | 61770.00 | 62542.04 | 63131.63 | 63917.39 |
| **Latency** | 717µs    | 760µs    | 808µs    | 871µs    | 945µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42208.62 | 6338.69 | 45975.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41685.91 | 42802.18 | 43554.76 | 44306.69 | 44802.64 | 45061.33 | 45368.55 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26942.62 | 4386.66 | 31796.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22708.65 | 26792.89 | 28711.80 | 29117.86 | 29588.44 | 29889.15 | 30465.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10176.37 | 1408.36 | 13705.84 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9026.82 | 9594.31 | 10559.00 | 10777.31 | 11120.42 | 11788.66 | 12504.39 |
| **Latency** | 3ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49039.92 | 3828.93 | 52606.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47826.83 | 48815.18 | 49673.78 | 50446.50 | 51107.72 | 51566.25 | 52236.36 |
| **Latency** | 903µs    | 959µs    | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33254.53 | 4580.22 | 37400.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28581.56 | 32896.09 | 35209.17 | 35620.00 | 36002.36 | 36326.62 | 36828.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6140.49  | 1763.19 | 11210.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3807.12 | 5988.10 | 6704.77 | 7144.38 | 7458.33 | 7732.18 | 9087.13 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 11ms    | 13ms    | 18ms    |

---

<p align="center">Generated 2022-11-01T02:50:29.775Z</p>
