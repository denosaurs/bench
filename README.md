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
  - [Express (Deno)](#express-deno)
  - [Fast](#fast)
  - [Fastify](#fastify)
  - [Fastro](#fastro)
  - [Hono](#hono)
  - [http](#http)
  - [Hyper Express](#hyper-express)
  - [Little](#little)
  - [Megalo](#megalo)
  - [NHttp](#nhttp)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
  - [Peko](#peko)
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
    - [Express (Deno)](#express-deno-1)
    - [Fast](#fast-1)
    - [Fastify](#fastify-1)
    - [Fastro](#fastro-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Hyper Express](#hyper-express-1)
    - [Little](#little-1)
    - [Megalo](#megalo-1)
    - [NHttp](#nhttp-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Peko](#peko-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Bun                                                                                  | 69278.30 | 11249.66 | 87872.36  | 100%     |
| Hyper Express                                                                        | 64776.41 | 18168.03 | 84908.53  | 94%      |
| Deno                                                                                 | 58205.32 | 14122.53 | 73295.74  | 84%      |
| Fast                                                                                 | 56037.75 | 14146.53 | 69717.85  | 81%      |
| Megalo                                                                               | 52659.64 | 11366.28 | 76070.75  | 76%      |
| Fastro                                                                               | 52175.80 | 17604.57 | 66932.38  | 75%      |
| NHttp                                                                                | 51939.16 | 11359.31 | 69039.56  | 75%      |
| Hono                                                                                 | 49904.73 | 14079.78 | 70416.47  | 72%      |
| http                                                                                 | 44974.26 | 8658.34  | 51025.64  | 65%      |
| Peko                                                                                 | 42968.54 | 8043.35  | 57432.53  | 62%      |
| Node                                                                                 | 42613.73 | 7411.47  | 46442.87  | 62%      |
| Reno                                                                                 | 41812.73 | 10791.52 | 52965.23  | 60%      |
| Fastify                                                                              | 36949.83 | 6542.45  | 40525.38  | 53%      |
| Alosaur                                                                              | 36773.82 | 7899.58  | 42562.36  | 53%      |
| Router                                                                               | 31725.51 | 5167.74  | 36250.17  | 46%      |
| Little                                                                               | 29043.69 | 4587.65  | 38986.50  | 42%      |
| Oak                                                                                  | 26213.94 | 6069.21  | 169491.53 | 38%      |
| Aqua                                                                                 | 26013.29 | 3193.02  | 31150.89  | 38%      |
| Dinatra                                                                              | 20592.60 | 4537.27  | 42344.90  | 30%      |
| Abc                                                                                  | 18118.51 | 3222.70  | 30349.15  | 26%      |
| Express (Deno)                                                                       | 11638.64 | 6240.34  | 142816.34 | 17%      |
| Opine                                                                                | 10628.11 | 1312.04  | 15751.18  | 15%      |
| Express                                                                              | 7228.73  | 1759.28  | 9538.94   | 10%      |
| Servest                                                                              | 6310.47  | 1617.58  | 9136.99   | 9%       |
| Acorn                                                                                | 4323.11  | 3291.21  | 59665.87  | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-d9bc8d90-5620-4f78-80e7-a92e0a160c4f) |          |          |           |          |

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

## [Express (Deno)](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js, run on Deno

## [Fast](https://deno.land/x/fast)

Small web framework with near-native performance.

## [Fastify](https://www.fastify.io/)

Fast and low overhead web framework, for Node.js

## [Fastro](https://fastro.dev)

Fast and simple web application framework for deno

## [Hono](https://github.com/honojs/hono)

Ultrafast web framework for Cloudflare Workers and Deno. Fast, but not only
fast.

## [http](https://deno.land/std/http)

The deno standard library http server

## [Hyper Express](https://github.com/kartikk221/hyper-express)

High performance Node.js webserver with a simple-to-use API powered by
uWebsockets.js under the hood.

## [Little](https://deno.land/x/little)

A minimalistic connect-like web framework. Automatically works out of the box
with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.

## [Megalo](https://github.com/tsar-boomba/megalo)

Deno HTTP server framework focused on speed

## [NHttp](https://github.com/nhttp/nhttp)

An Simple web-framework for Deno and Friends

## [Node](https://nodejs.org/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## [Oak](https://deno.land/x/oak)

A middleware framework for Deno's native HTTP server, Deno Deploy and Node.js
16.5 and later. It also includes a middleware router.

## [Opine](https://deno.land/x/opine)

Fast, minimalist web framework for Deno ported from ExpressJS.

## [Peko](https://peko.deno.dev)

Featherweight server/router framework + middleware and handler library 🐣

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
| 18118.51 | 3222.70 | 30349.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15527.67 | 17212.91 | 19277.99 | 19628.07 | 21063.18 | 21352.65 | 21604.94 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4323.11  | 3291.21 | 59665.87 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2179.63 | 2693.87 | 3309.03 | 4613.14 | 9762.45 | 11639.02 | 13531.20 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 20ms    | 21ms     | 22ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36773.82 | 7899.58 | 42562.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27871.60 | 35521.98 | 40602.75 | 41032.67 | 41421.11 | 41647.09 | 42141.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26013.29 | 3193.02 | 31150.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24024.72 | 24712.88 | 27215.81 | 27565.42 | 27779.81 | 28063.35 | 28552.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69278.30 | 11249.66 | 87872.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55761.16 | 60326.90 | 70732.08 | 79908.61 | 81302.75 | 82090.89 | 84702.00 |
| **Latency** | 447µs    | 560µs    | 683µs    | 786µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58205.32 | 14122.53 | 73295.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38309.22 | 49138.39 | 66195.37 | 68466.18 | 69280.91 | 69722.29 | 70470.67 |
| **Latency** | 565µs    | 630µs    | 793µs    | 841µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20592.60 | 4537.27 | 42344.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14412.88 | 19516.63 | 21407.52 | 23745.62 | 24843.63 | 25014.44 | 25709.04 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7228.73  | 1759.28 | 9538.94 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5358.69 | 5767.62 | 8361.98 | 8751.76 | 8834.21 | 8865.71 | 8903.85 |
| **Latency** | 5ms     | 5ms     | 5ms     | 8ms     | 8ms     | 10ms    | 14ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 11638.64 | 6240.34 | 142816.34 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7027.23 | 10823.01 | 12086.70 | 12835.52 | 13235.81 | 14484.05 | 16636.98 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56037.75 | 14146.53 | 69717.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35518.61 | 50879.50 | 63605.36 | 64660.60 | 65281.41 | 65579.00 | 66291.37 |
| **Latency** | 694µs    | 735µs    | 780µs    | 835µs    | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36949.83 | 6542.45 | 40525.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34725.14 | 38208.55 | 38863.89 | 39490.98 | 39718.03 | 39834.42 | 39983.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52175.80 | 17604.57 | 66932.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20384.88 | 54310.48 | 60514.76 | 61861.47 | 62705.26 | 63064.84 | 63820.03 |
| **Latency** | 745µs    | 778µs    | 808µs    | 843µs    | 909µs    | 1ms      | 6ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49904.73 | 14079.78 | 70416.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26525.04 | 47017.58 | 50129.37 | 63295.20 | 64947.06 | 65551.67 | 66702.98 |
| **Latency** | 686µs    | 746µs    | 818µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44974.26 | 8658.34 | 51025.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36682.06 | 44686.39 | 48728.92 | 49372.21 | 49769.42 | 49988.51 | 50228.62 |
| **Latency** | 877µs    | 958µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64776.41 | 18168.03 | 84908.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41187.56 | 42061.67 | 77637.23 | 80830.07 | 81718.29 | 82238.96 | 83234.43 |
| **Latency** | 469µs    | 564µs    | 677µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29043.69 | 4587.65 | 38986.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26803.58 | 28052.60 | 30715.77 | 31316.39 | 31639.71 | 31888.76 | 32494.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52659.64 | 11366.28 | 76070.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39507.64 | 49705.47 | 58043.54 | 58727.03 | 59259.14 | 59557.95 | 60283.73 |
| **Latency** | 768µs    | 818µs    | 859µs    | 904µs    | 996µs    | 1ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51939.16 | 11359.31 | 69039.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39237.41 | 47312.44 | 50027.27 | 63405.44 | 64667.44 | 65139.95 | 65870.76 |
| **Latency** | 692µs    | 747µs    | 819µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42613.73 | 7411.47 | 46442.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40305.36 | 44020.39 | 44668.93 | 45339.14 | 45753.22 | 45896.98 | 46073.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 26213.94 | 6069.21 | 169491.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23611.38 | 25200.82 | 27599.69 | 27868.99 | 28056.69 | 28305.43 | 30106.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10628.11 | 1312.04 | 15751.18 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9806.22 | 10304.00 | 11058.42 | 11171.40 | 11237.13 | 11458.93 | 12311.24 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 5ms      | 5ms      | 7ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42968.54 | 8043.35 | 57432.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36655.36 | 40585.50 | 46503.38 | 47025.99 | 47532.78 | 47766.95 | 48110.57 |
| **Latency** | 915µs    | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41812.73 | 10791.52 | 52965.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23410.36 | 37920.61 | 47007.43 | 48677.99 | 49356.13 | 49729.16 | 50539.97 |
| **Latency** | 972µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31725.51 | 5167.74 | 36250.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28123.96 | 30431.29 | 33714.91 | 34407.30 | 34942.63 | 35170.06 | 35524.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6310.47  | 1617.58 | 9136.99 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4444.90 | 6238.00 | 6831.91 | 7239.83 | 7515.13 | 7699.07 | 8772.94 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 11ms    | 18ms    |

---

<p align="center">Generated 2023-04-08T01:30:18.836Z</p>
