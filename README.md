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
| Bun                                                                                  | 65004.09 | 7281.90 | 79812.53 | 100%     |
| Megalo                                                                               | 59182.02 | 7092.49 | 71799.20 | 91%      |
| Deno                                                                                 | 58825.41 | 5557.36 | 69139.12 | 90%      |
| Fast                                                                                 | 55363.75 | 5291.70 | 64201.68 | 85%      |
| Hono                                                                                 | 51109.49 | 6019.11 | 59343.72 | 79%      |
| Reno                                                                                 | 44888.07 | 5264.57 | 57798.13 | 69%      |
| Node                                                                                 | 39494.96 | 6219.82 | 47931.51 | 61%      |
| http                                                                                 | 38585.68 | 7925.42 | 45283.29 | 59%      |
| Alosaur                                                                              | 29551.31 | 6296.24 | 35557.93 | 45%      |
| Router                                                                               | 28529.23 | 4266.38 | 37104.80 | 44%      |
| Fastify                                                                              | 27586.65 | 6991.02 | 33875.89 | 42%      |
| Oak                                                                                  | 25298.41 | 3969.19 | 33113.55 | 39%      |
| Little                                                                               | 24995.73 | 4415.22 | 32914.71 | 38%      |
| Aqua                                                                                 | 21365.08 | 2998.34 | 25686.15 | 33%      |
| Dinatra                                                                              | 16473.17 | 3482.25 | 33466.25 | 25%      |
| Abc                                                                                  | 13907.79 | 1983.73 | 24037.99 | 21%      |
| Opine                                                                                | 9161.91  | 1281.84 | 13249.96 | 14%      |
| Express                                                                              | 6117.90  | 1790.34 | 40907.82 | 9%       |
| Servest                                                                              | 5386.66  | 1661.94 | 10245.24 | 8%       |
| Acorn                                                                                | 4081.89  | 4597.99 | 62110.68 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-af9d01e6-5a27-4093-8079-c7d4e612fe88) |          |         |          |          |

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
| 13907.79 | 1983.73 | 24037.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11161.52 | 13229.37 | 14405.32 | 15108.76 | 15727.76 | 16322.52 | 17037.78 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4081.89  | 4597.99 | 62110.68 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1778.10 | 2407.64 | 2977.60 | 4209.58 | 8111.72 | 9537.59 | 12743.77 |
| **Latency** | 4ms     | 6ms     | 13ms    | 19ms    | 22ms    | 25ms    | 28ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29551.31 | 6296.24 | 35557.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18815.59 | 30549.45 | 32318.06 | 32833.45 | 33371.27 | 33640.81 | 34384.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21365.08 | 2998.34 | 25686.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18140.54 | 20412.96 | 22435.55 | 23130.68 | 23636.62 | 23941.68 | 24419.03 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 65004.09 | 7281.90 | 79812.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59664.86 | 63836.20 | 65822.54 | 67998.96 | 70929.58 | 74170.64 | 76741.22 |
| **Latency** | 517µs    | 610µs    | 784µs    | 853µs    | 901µs    | 974µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58825.41 | 5557.36 | 69139.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53472.60 | 57814.90 | 60122.73 | 61629.58 | 62886.60 | 63814.59 | 65909.85 |
| **Latency** | 616µs    | 712µs    | 850µs    | 931µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16473.17 | 3482.25 | 33466.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11503.24 | 15117.81 | 17147.16 | 19356.98 | 20097.45 | 20372.15 | 20957.58 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6117.90  | 1790.34 | 40907.82 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3802.68 | 6222.31 | 6671.37 | 6841.99 | 6966.65 | 7049.33 | 7742.80 |
| **Latency** | 7ms     | 7ms     | 7ms     | 7ms     | 10ms    | 12ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55363.75 | 5291.70 | 64201.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50766.32 | 54416.24 | 56516.17 | 58032.28 | 59211.03 | 59708.44 | 61010.87 |
| **Latency** | 726µs    | 805µs    | 872µs    | 961µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27586.65 | 6991.02 | 33875.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11410.76 | 29201.34 | 30372.48 | 30914.85 | 31566.61 | 31860.73 | 32464.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 5ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51109.49 | 6019.11 | 59343.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47271.62 | 50214.32 | 52135.27 | 53623.42 | 55509.80 | 56301.94 | 58172.75 |
| **Latency** | 825µs    | 883µs    | 941µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38585.68 | 7925.42 | 45283.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25052.74 | 40246.85 | 41809.12 | 42423.43 | 43102.00 | 43670.65 | 44415.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24995.73 | 4415.22 | 32914.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20584.46 | 23849.17 | 26227.01 | 27396.94 | 28401.90 | 29740.11 | 31663.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59182.02 | 7092.49 | 71799.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53301.45 | 56451.70 | 60088.17 | 63458.84 | 66211.73 | 67721.48 | 69939.67 |
| **Latency** | 651µs    | 721µs    | 824µs    | 919µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39494.96 | 6219.82 | 47931.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35757.47 | 38222.98 | 40519.34 | 42688.68 | 44431.85 | 45424.41 | 46703.14 |
| **Latency** | 980µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25298.41 | 3969.19 | 33113.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21704.30 | 24357.77 | 26167.33 | 27505.31 | 28698.39 | 29230.13 | 30331.53 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9161.91  | 1281.84 | 13249.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7926.36 | 8813.39 | 9255.81 | 9728.23 | 10325.76 | 10912.73 | 12246.34 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44888.07 | 5264.57 | 57798.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42027.25 | 43820.53 | 45249.70 | 46910.72 | 49334.46 | 51052.51 | 54361.86 |
| **Latency** | 882µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28529.23 | 4266.38 | 37104.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23346.61 | 27961.26 | 29626.41 | 30828.73 | 32013.31 | 32953.49 | 34604.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5386.66  | 1661.94 | 10245.24 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2902.02 | 5200.72 | 5817.61 | 6254.91 | 6724.40 | 7156.95 | 8040.11 |
| **Latency** | 7ms     | 8ms     | 8ms     | 9ms     | 13ms    | 15ms    | 20ms    |

---

<p align="center">Generated 2022-10-20T02:53:53.318Z</p>
