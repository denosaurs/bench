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

| Framework | Mean     | Stddev  | Max       | Relative |
| --------- | -------- | ------- | --------- | -------- |
| Bun       | 78816.32 | 7357.60 | 95221.37  | 100%     |
| Deno      | 67623.89 | 5229.69 | 76846.68  | 86%      |
| Fast      | 65271.45 | 7614.55 | 70254.24  | 83%      |
| Hono      | 59875.37 | 5961.25 | 64280.94  | 76%      |
| http      | 46496.03 | 6834.10 | 51402.71  | 59%      |
| Node      | 43459.25 | 6531.07 | 46742.78  | 55%      |
| Fastify   | 38078.43 | 6345.58 | 42823.35  | 48%      |
| Alosaur   | 37084.40 | 7953.91 | 171428.57 | 47%      |
| Reno      | 34610.48 | 2841.21 | 50704.88  | 44%      |
| Router    | 32067.39 | 3599.12 | 35649.52  | 41%      |
| Oak       | 27043.87 | 4052.46 | 30715.43  | 34%      |
| Aqua      | 23695.51 | 2720.95 | 26796.86  | 30%      |
| Abc       | 17851.52 | 3115.44 | 22740.90  | 23%      |
| Little    | 15656.19 | 1833.66 | 18784.63  | 20%      |
| Dinatra   | 12542.78 | 2211.16 | 16219.39  | 16%      |
| Opine     | 10214.51 | 1374.67 | 13497.45  | 13%      |
| Express   | 7920.46  | 1830.01 | 12709.22  | 10%      |
| Servest   | 6366.74  | 1849.41 | 10943.74  | 8%       |
| Acorn     | 4320.40  | 3493.68 | 70108.80  | 5%       |

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
| 17851.52 | 3115.44 | 22740.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15105.37 | 16821.79 | 18731.75 | 19864.86 | 20458.37 | 20867.33 | 21378.70 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4320.40  | 3493.68 | 70108.80 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1939.38 | 2699.62 | 3420.63 | 4969.15 | 9445.16 | 10991.28 | 13894.85 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 21ms    | 23ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 37084.40 | 7953.91 | 171428.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27259.92 | 38500.90 | 39507.79 | 39842.05 | 40247.30 | 40565.76 | 41225.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23695.51 | 2720.95 | 26796.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21083.75 | 22869.10 | 24844.22 | 25048.18 | 25251.32 | 25675.79 | 26340.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78816.32 | 7357.60 | 95221.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 73885.36 | 78283.60 | 79975.31 | 81427.30 | 83200.45 | 85604.12 | 94119.56 |
| **Latency** | 426µs    | 507µs    | 664µs    | 696µs    | 723µs    | 780µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67623.89 | 5229.69 | 76846.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63050.14 | 66845.14 | 69000.63 | 70073.87 | 70831.54 | 71256.42 | 72230.00 |
| **Latency** | 549µs    | 615µs    | 758µs    | 810µs    | 846µs    | 882µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12542.78 | 2211.16 | 16219.39 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9249.91 | 12448.87 | 13512.50 | 13774.46 | 13878.77 | 13934.35 | 14183.32 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7920.46  | 1830.01 | 12709.22 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5456.61 | 6585.12 | 8942.89 | 9106.42 | 9202.90 | 9231.07 | 9269.48 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 65271.45 | 7614.55 | 70254.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62228.35 | 65134.89 | 67130.61 | 68224.94 | 68911.87 | 69183.41 | 69663.90 |
| **Latency** | 585µs    | 673µs    | 752µs    | 817µs    | 848µs    | 893µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38078.43 | 6345.58 | 42823.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38121.16 | 38930.56 | 39582.14 | 40221.28 | 40541.16 | 40744.22 | 41026.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59875.37 | 5961.25 | 64280.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58116.56 | 59714.62 | 61178.61 | 61961.16 | 62497.18 | 62747.76 | 63378.27 |
| **Latency** | 745µs    | 775µs    | 804µs    | 838µs    | 884µs    | 940µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46496.03 | 6834.10 | 51402.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35727.70 | 48330.22 | 49065.51 | 49519.81 | 49883.10 | 50115.02 | 50464.20 |
| **Latency** | 886µs    | 933µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15656.19 | 1833.66 | 18784.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13730.97 | 16033.92 | 16338.97 | 16455.54 | 16548.74 | 16621.86 | 17097.37 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43459.25 | 6531.07 | 46742.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43233.95 | 44217.92 | 44922.70 | 45568.13 | 45987.62 | 46151.93 | 46363.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27043.87 | 4052.46 | 30715.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23407.09 | 26330.42 | 28544.40 | 29048.37 | 29713.49 | 30068.84 | 30461.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10214.51 | 1374.67 | 13497.45 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9368.34 | 9736.70 | 10640.96 | 10728.67 | 10846.27 | 11539.18 | 12440.87 |
| **Latency** | 3ms     | 3ms     | 4ms      | 5ms      | 5ms      | 6ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34610.48 | 2841.21 | 50704.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34303.43 | 34634.33 | 35032.76 | 35315.32 | 35509.77 | 35631.18 | 36345.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32067.39 | 3599.12 | 35649.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27613.88 | 32312.44 | 33485.22 | 33944.01 | 34529.87 | 34794.24 | 35219.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6366.74  | 1849.41 | 10943.74 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 3869.91 | 5854.36 | 6627.91 | 7346.72 | 8248.74 | 8531.01 | 10489.55 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 11ms    | 18ms     |

---

<p align="center">Generated 2022-09-08T22:08:20.384Z</p>
