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
  - [Fastro](#fastro)
  - [Hono](#hono)
  - [http](#http)
  - [Hyper Express](#hyper-express)
  - [Little](#little)
  - [Megalo](#megalo)
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
    - [Fast](#fast-1)
    - [Fastify](#fastify-1)
    - [Fastro](#fastro-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Hyper Express](#hyper-express-1)
    - [Little](#little-1)
    - [Megalo](#megalo-1)
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
| Bun                                                                                  | 60274.36 | 9820.36  | 80915.30  | 100%     |
| Hono                                                                                 | 57315.66 | 8438.53  | 64310.77  | 95%      |
| Hyper Express                                                                        | 50536.87 | 11115.38 | 58213.26  | 84%      |
| Fast                                                                                 | 47257.44 | 12156.29 | 65310.30  | 78%      |
| Megalo                                                                               | 45396.68 | 12758.01 | 63052.19  | 75%      |
| http                                                                                 | 44860.62 | 9192.30  | 51851.50  | 74%      |
| Deno                                                                                 | 42693.51 | 10540.30 | 65227.83  | 71%      |
| Fastro                                                                               | 40722.87 | 8554.16  | 48166.11  | 68%      |
| Peko                                                                                 | 40718.88 | 8294.48  | 47223.90  | 68%      |
| Reno                                                                                 | 39877.06 | 10306.17 | 48962.59  | 66%      |
| Node                                                                                 | 36110.52 | 6096.53  | 40077.25  | 60%      |
| Alosaur                                                                              | 33716.05 | 8207.96  | 82567.67  | 56%      |
| Fastify                                                                              | 32009.31 | 6342.88  | 35264.52  | 53%      |
| Router                                                                               | 30602.71 | 5311.68  | 35369.63  | 51%      |
| Little                                                                               | 27669.84 | 4390.43  | 31822.13  | 46%      |
| Oak                                                                                  | 25106.82 | 4105.31  | 31485.20  | 42%      |
| Aqua                                                                                 | 24822.80 | 4434.51  | 32049.47  | 41%      |
| Dinatra                                                                              | 19244.42 | 4151.45  | 24430.81  | 32%      |
| Abc                                                                                  | 17319.28 | 2438.62  | 20740.14  | 29%      |
| Opine                                                                                | 9826.02  | 1611.78  | 15294.70  | 16%      |
| Express                                                                              | 6164.09  | 1745.02  | 10611.68  | 10%      |
| Servest                                                                              | 5792.27  | 1781.28  | 10390.60  | 10%      |
| Acorn                                                                                | 4641.45  | 5297.42  | 110497.24 | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-e76ab711-e900-4e50-aa08-371e15372c76) |          |          |           |          |

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
| 17319.28 | 2438.62 | 20740.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14032.52 | 16121.23 | 17845.10 | 19176.80 | 19990.95 | 20294.48 | 20578.85 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4641.45  | 5297.42 | 110497.24 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 88.15 | 2433.58 | 3487.66 | 5935.00 | 9220.70 | 11461.52 | 22765.82 |
| **Latency** | 4ms   | 5ms     | 13ms    | 18ms    | 22ms    | 22ms     | 24ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33716.05 | 8207.96 | 82567.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22154.85 | 29487.40 | 37865.79 | 38576.76 | 38950.68 | 39175.40 | 39509.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24822.80 | 4434.51 | 32049.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18044.70 | 23181.74 | 26913.65 | 27561.15 | 27930.62 | 28205.56 | 28644.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60274.36 | 9820.36 | 80915.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49627.25 | 52427.69 | 57587.49 | 70462.83 | 73059.02 | 74102.16 | 75314.17 |
| **Latency** | 501µs    | 626µs    | 764µs    | 915µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42693.51 | 10540.30 | 65227.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29172.88 | 38714.92 | 42809.19 | 48134.01 | 58006.28 | 59820.43 | 61698.03 |
| **Latency** | 676µs    | 863µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19244.42 | 4151.45 | 24430.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15174.17 | 16043.52 | 21230.04 | 21693.82 | 22072.35 | 22713.11 | 23290.11 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6164.09  | 1745.02 | 10611.68 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4049.80 | 4425.57 | 7249.64 | 7625.45 | 7749.32 | 7817.02 | 7903.22 |
| **Latency** | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 12ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47257.44 | 12156.29 | 65310.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30517.12 | 40552.65 | 46170.08 | 58949.97 | 60232.99 | 60811.76 | 61610.33 |
| **Latency** | 709µs    | 792µs    | 904µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32009.31 | 6342.88 | 35264.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31033.19 | 32950.99 | 33918.30 | 34585.76 | 34803.12 | 34904.30 | 35059.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40722.87 | 8554.16 | 48166.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28874.16 | 40906.80 | 44903.42 | 45476.38 | 45901.33 | 46106.02 | 46475.61 |
| **Latency** | 963µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 57315.66 | 8438.53 | 64310.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51706.59 | 57726.27 | 60292.18 | 61181.34 | 61835.96 | 62254.93 | 62973.96 |
| **Latency** | 616µs    | 683µs    | 882µs    | 936µs    | 986µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44860.62 | 9192.30 | 51851.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30770.71 | 46324.44 | 49129.85 | 49619.23 | 50007.93 | 50284.65 | 50703.87 |
| **Latency** | 889µs    | 973µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50536.87 | 11115.38 | 58213.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24639.89 | 54184.95 | 55502.09 | 56196.52 | 56502.69 | 56645.18 | 56888.05 |
| **Latency** | 833µs    | 846µs    | 861µs    | 882µs    | 1ms      | 2ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27669.84 | 4390.43 | 31822.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24108.62 | 25835.59 | 29750.92 | 30198.20 | 30609.41 | 31050.12 | 31541.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45396.68 | 12758.01 | 63052.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25248.66 | 40260.55 | 50210.93 | 56164.97 | 57096.37 | 57512.66 | 58009.05 |
| **Latency** | 787µs    | 846µs    | 916µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36110.52 | 6096.53 | 40077.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35118.26 | 36850.03 | 37732.36 | 38414.51 | 38824.15 | 39012.78 | 39390.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25106.82 | 4105.31 | 31485.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20906.85 | 24306.02 | 26625.09 | 27267.76 | 27919.91 | 28106.67 | 28607.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9826.02  | 1611.78 | 15294.70 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8036.87 | 9162.56 | 10283.06 | 10630.18 | 10925.87 | 11616.81 | 13548.72 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 6ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40718.88 | 8294.48 | 47223.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30488.33 | 40471.45 | 44520.38 | 45224.45 | 45737.86 | 45997.13 | 46364.15 |
| **Latency** | 965µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39877.06 | 10306.17 | 48962.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23286.10 | 38529.55 | 45231.48 | 46133.57 | 46827.47 | 47248.56 | 47879.23 |
| **Latency** | 990µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30602.71 | 5311.68 | 35369.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21683.46 | 27885.59 | 33358.98 | 33721.79 | 34066.88 | 34480.25 | 34906.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5792.27  | 1781.28 | 10390.60 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3013.95 | 5814.93 | 6370.18 | 6762.81 | 7139.02 | 7237.76 | 8514.65 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 12ms    | 15ms    | 20ms    |

---

<p align="center">Generated 2023-01-28T01:50:19.783Z</p>
