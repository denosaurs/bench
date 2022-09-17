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
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework | Mean     | Stddev  | Max      | Relative |
| --------- | -------- | ------- | -------- | -------- |
| Bun       | 69086.80 | 7446.81 | 83421.35 | 100%     |
| Deno      | 58291.34 | 4082.16 | 64497.72 | 84%      |
| Fast      | 57014.35 | 5051.33 | 63027.56 | 83%      |
| Hono      | 53770.70 | 5244.47 | 62630.16 | 78%      |
| Reno      | 44954.14 | 4010.15 | 48707.71 | 65%      |
| http      | 42353.81 | 7809.89 | 48638.11 | 61%      |
| Node      | 36460.68 | 5217.89 | 39511.47 | 53%      |
| Alosaur   | 32544.77 | 6883.11 | 46639.70 | 47%      |
| Fastify   | 32309.42 | 5199.08 | 35608.82 | 47%      |
| Router    | 29272.08 | 4515.97 | 33665.56 | 42%      |
| Little    | 26663.17 | 4149.46 | 31733.22 | 39%      |
| Oak       | 23981.67 | 3919.57 | 28912.36 | 35%      |
| Aqua      | 23327.57 | 3476.82 | 28697.18 | 34%      |
| Abc       | 15582.60 | 3084.12 | 20567.01 | 23%      |
| Dinatra   | 13007.44 | 2974.78 | 18358.53 | 19%      |
| Opine     | 9564.36  | 1282.79 | 13692.31 | 14%      |
| Express   | 6692.70  | 1469.35 | 9492.66  | 10%      |
| Servest   | 5318.29  | 1569.66 | 8920.05  | 8%       |
| Acorn     | 3976.04  | 3397.45 | 60451.03 | 6%       |

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
| 15582.60 | 3084.12 | 20567.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11617.75 | 14108.90 | 15729.18 | 17875.40 | 19385.78 | 19900.47 | 20246.22 |
| **Latency** | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3976.04  | 3397.45 | 60451.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1818.73 | 2418.82 | 2998.18 | 4210.78 | 8274.80 | 10165.63 | 12612.24 |
| **Latency** | 4ms     | 5ms     | 12ms    | 18ms    | 22ms    | 23ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32544.77 | 6883.11 | 46639.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21302.65 | 33301.30 | 35560.39 | 36119.66 | 36545.36 | 36900.66 | 37752.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23327.57 | 3476.82 | 28697.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20123.04 | 21820.11 | 24777.53 | 25263.89 | 25644.86 | 26156.67 | 26838.19 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69086.80 | 7446.81 | 83421.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62751.01 | 68741.44 | 71103.98 | 72542.65 | 73856.19 | 74843.38 | 77626.29 |
| **Latency** | 472µs    | 570µs    | 747µs    | 789µs    | 852µs    | 921µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58291.34 | 4082.16 | 64497.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55312.74 | 57710.20 | 59130.56 | 60201.02 | 60836.92 | 61316.58 | 61799.89 |
| **Latency** | 612µs    | 702µs    | 892µs    | 947µs    | 992µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13007.44 | 2974.78 | 18358.53 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8574.59 | 12444.66 | 14275.06 | 14704.99 | 14930.15 | 15183.65 | 16556.63 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 5ms      | 7ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6692.70  | 1469.35 | 9492.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4101.88 | 6766.46 | 7381.56 | 7549.44 | 7667.08 | 7725.33 | 7846.44 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 10ms    | 11ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 57014.35 | 5051.33 | 63027.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53742.31 | 56442.74 | 58204.58 | 59213.55 | 59939.39 | 60344.23 | 61181.19 |
| **Latency** | 660µs    | 764µs    | 867µs    | 948µs    | 994µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32309.42 | 5199.08 | 35608.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31761.54 | 32777.93 | 33574.14 | 34259.19 | 34584.67 | 34737.09 | 35043.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53770.70 | 5244.47 | 62630.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51295.31 | 53132.30 | 54832.81 | 56118.41 | 57007.31 | 57360.11 | 58016.72 |
| **Latency** | 791µs    | 843µs    | 900µs    | 962µs    | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42353.81 | 7809.89 | 48638.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29477.04 | 44123.91 | 45712.83 | 46265.79 | 46658.71 | 46927.26 | 47392.33 |
| **Latency** | 951µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26663.17 | 4149.46 | 31733.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22844.83 | 24614.97 | 28556.49 | 29120.51 | 29417.60 | 29763.70 | 30277.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36460.68 | 5217.89 | 39511.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35926.23 | 36748.47 | 37547.24 | 38399.46 | 38773.29 | 38952.20 | 39254.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23981.67 | 3919.57 | 28912.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20055.86 | 23883.31 | 25497.69 | 25902.01 | 26551.47 | 27042.11 | 27490.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9564.36  | 1282.79 | 13692.31 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8480.71 | 9176.80 | 9864.22 | 10136.37 | 10342.26 | 10710.64 | 12257.90 |
| **Latency** | 3ms     | 4ms     | 5ms     | 5ms      | 6ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44954.14 | 4010.15 | 48707.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44011.81 | 45066.62 | 45661.57 | 46235.34 | 46770.72 | 47145.60 | 47823.35 |
| **Latency** | 983µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29272.08 | 4515.97 | 33665.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24130.65 | 28621.77 | 31100.95 | 31766.03 | 32404.62 | 32688.09 | 33106.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5318.29  | 1569.66 | 8920.05 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2806.70 | 5323.36 | 5838.95 | 6227.65 | 6456.35 | 6578.74 | 7595.81 |
| **Latency** | 7ms     | 8ms     | 8ms     | 9ms     | 13ms    | 15ms    | 22ms    |

---

<p align="center">Generated 2022-09-17T02:45:02.570Z</p>
