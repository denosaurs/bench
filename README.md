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
| Bun                                                                                  | 77317.59 | 3483.34 | 87438.08 | 100%     |
| Deno                                                                                 | 67149.16 | 5632.75 | 75244.62 | 87%      |
| Fast                                                                                 | 66269.93 | 6163.75 | 71530.93 | 86%      |
| Hono                                                                                 | 61967.40 | 6450.94 | 66806.75 | 80%      |
| Megalo                                                                               | 61814.15 | 5475.88 | 67017.42 | 80%      |
| Reno                                                                                 | 49818.88 | 3863.95 | 54113.76 | 64%      |
| http                                                                                 | 47307.54 | 8214.54 | 53231.69 | 61%      |
| Node                                                                                 | 45360.44 | 6661.16 | 48506.93 | 59%      |
| Fastify                                                                              | 38950.10 | 7026.81 | 42964.35 | 50%      |
| Alosaur                                                                              | 37394.56 | 8116.80 | 43617.78 | 48%      |
| Router                                                                               | 32338.45 | 4241.50 | 36962.59 | 42%      |
| Little                                                                               | 29737.43 | 4259.17 | 34089.10 | 38%      |
| Oak                                                                                  | 26966.38 | 4159.57 | 31940.36 | 35%      |
| Aqua                                                                                 | 25477.83 | 3039.22 | 30135.61 | 33%      |
| Dinatra                                                                              | 19688.61 | 3240.83 | 23834.66 | 25%      |
| Abc                                                                                  | 15619.03 | 3523.74 | 20624.03 | 20%      |
| Opine                                                                                | 10492.45 | 1435.69 | 13615.24 | 14%      |
| Express                                                                              | 8324.46  | 1527.85 | 11813.60 | 11%      |
| Servest                                                                              | 6201.64  | 1727.60 | 11260.77 | 8%       |
| Acorn                                                                                | 4342.46  | 4277.98 | 72389.95 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-60d40481-d76b-469a-bd86-132c21c04bf7) |          |         |          |          |

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
| 15619.03 | 3523.74 | 20624.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10410.88 | 13931.61 | 16507.88 | 18326.55 | 19606.93 | 19759.20 | 20118.62 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4342.46  | 4277.98 | 72389.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1924.20 | 2657.29 | 3269.09 | 4770.42 | 9412.13 | 10913.39 | 13944.46 |
| **Latency** | 3ms     | 5ms     | 11ms    | 17ms    | 21ms    | 23ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37394.56 | 8116.80 | 43617.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27765.68 | 36427.05 | 41205.18 | 41819.89 | 42322.74 | 42674.49 | 43126.12 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25477.83 | 3039.22 | 30135.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22923.97 | 24042.74 | 26810.07 | 27025.70 | 27463.52 | 27831.11 | 28210.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 77317.59 | 3483.34 | 87438.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72637.42 | 76130.11 | 78108.99 | 79408.09 | 80606.50 | 81444.02 | 83037.82 |
| **Latency** | 438µs    | 529µs    | 685µs    | 715µs    | 744µs    | 774µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67149.16 | 5632.75 | 75244.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63466.91 | 66129.29 | 68354.37 | 69679.28 | 70593.74 | 71032.26 | 72267.05 |
| **Latency** | 553µs    | 623µs    | 756µs    | 811µs    | 852µs    | 896µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19688.61 | 3240.83 | 23834.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16228.73 | 16996.25 | 21255.06 | 21555.97 | 21876.04 | 22521.93 | 23312.45 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8324.46  | 1527.85 | 11813.60 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6192.65 | 8308.09 | 9034.73 | 9162.16 | 9255.39 | 9283.78 | 9339.64 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 66269.93 | 6163.75 | 71530.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61815.74 | 65828.05 | 67919.33 | 69003.07 | 69769.63 | 70146.92 | 70830.07 |
| **Latency** | 638µs    | 679µs    | 723µs    | 803µs    | 852µs    | 892µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38950.10 | 7026.81 | 42964.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38259.22 | 39981.43 | 40785.15 | 41563.31 | 42039.71 | 42192.54 | 42374.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61967.40 | 6450.94 | 66806.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59612.58 | 61581.97 | 63412.26 | 64409.13 | 64898.65 | 65162.63 | 65621.72 |
| **Latency** | 718µs    | 750µs    | 779µs    | 815µs    | 858µs    | 888µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47307.54 | 8214.54 | 53231.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35547.07 | 48701.16 | 50909.36 | 51487.95 | 51924.53 | 52192.89 | 52552.75 |
| **Latency** | 852µs    | 902µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29737.43 | 4259.17 | 34089.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26410.95 | 28208.03 | 31401.89 | 32179.93 | 32673.96 | 32983.93 | 33501.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61814.15 | 5475.88 | 67017.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59652.81 | 61413.84 | 62860.47 | 63927.55 | 64635.83 | 65049.47 | 65802.28 |
| **Latency** | 700µs    | 741µs    | 786µs    | 840µs    | 901µs    | 956µs    | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45360.44 | 6661.16 | 48506.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45180.17 | 46219.45 | 46873.64 | 47513.30 | 47819.34 | 47937.61 | 48163.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26966.38 | 4159.57 | 31940.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23066.17 | 25931.02 | 28565.24 | 29277.81 | 29591.63 | 30112.32 | 30863.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10492.45 | 1435.69 | 13615.24 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9191.51 | 10115.30 | 10915.97 | 11128.90 | 11247.75 | 11908.04 | 12616.65 |
| **Latency** | 3ms     | 3ms      | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49818.88 | 3863.95 | 54113.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48667.33 | 49801.80 | 50426.44 | 51116.59 | 51611.83 | 51915.47 | 52481.51 |
| **Latency** | 911µs    | 951µs    | 983µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32338.45 | 4241.50 | 36962.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28351.16 | 31949.34 | 34218.80 | 34523.16 | 34748.55 | 35011.22 | 35419.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6201.64  | 1727.60 | 11260.77 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3916.62 | 5947.30 | 6728.48 | 7212.57 | 7553.35 | 7755.97 | 9082.77 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 11ms    | 12ms    | 17ms    |

---

<p align="center">Generated 2022-10-07T02:43:37.853Z</p>
