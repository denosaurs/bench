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
| Bun                                                                                  | 63999.85 | 6598.13 | 77751.50  | 100%     |
| Fast                                                                                 | 54135.24 | 5054.82 | 60139.23  | 85%      |
| Deno                                                                                 | 52346.54 | 5195.32 | 63631.29  | 82%      |
| Hono                                                                                 | 46453.09 | 6457.22 | 53184.66  | 73%      |
| Megalo                                                                               | 46338.23 | 5969.35 | 53519.94  | 72%      |
| http                                                                                 | 39772.47 | 7373.75 | 46808.41  | 62%      |
| Reno                                                                                 | 37984.00 | 5437.42 | 43389.79  | 59%      |
| Node                                                                                 | 29662.85 | 5158.85 | 33698.49  | 46%      |
| Alosaur                                                                              | 29405.38 | 6375.08 | 52173.01  | 46%      |
| Little                                                                               | 25007.16 | 3977.57 | 29794.15  | 39%      |
| Router                                                                               | 24893.85 | 4533.89 | 32059.16  | 39%      |
| Fastify                                                                              | 23610.85 | 8571.89 | 95143.97  | 37%      |
| Oak                                                                                  | 22229.39 | 5067.44 | 118340.39 | 35%      |
| Aqua                                                                                 | 21342.48 | 3085.43 | 26486.77  | 33%      |
| Dinatra                                                                              | 14202.83 | 3081.73 | 21242.45  | 22%      |
| Abc                                                                                  | 11868.57 | 3459.74 | 17639.80  | 19%      |
| Opine                                                                                | 8907.74  | 1295.72 | 12678.82  | 14%      |
| Express                                                                              | 5518.02  | 1400.13 | 10131.53  | 9%       |
| Servest                                                                              | 4778.47  | 1496.67 | 12010.37  | 7%       |
| Acorn                                                                                | 4510.82  | 7068.71 | 106382.98 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-5d4dc613-42d5-4415-95ac-18ae0d3f4554) |          |         |           |          |

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
| 11868.57 | 3459.74 | 17639.80 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7206.65 | 8474.71 | 13050.14 | 14733.78 | 15358.35 | 16168.07 | 17077.72 |
| **Latency** | 3ms     | 3ms     | 3ms      | 5ms      | 6ms      | 6ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4510.82  | 7068.71 | 106382.98 |     |

| **Stat**    | 10     | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------ | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 708.37 | 2297.49 | 2987.22 | 4546.75 | 8330.56 | 10007.23 | 49278.26 |
| **Latency** | 4ms    | 6ms     | 13ms    | 20ms    | 24ms    | 26ms     | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29405.38 | 6375.08 | 52173.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18461.01 | 29479.83 | 32381.33 | 32885.71 | 33286.26 | 33610.81 | 34163.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21342.48 | 3085.43 | 26486.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18152.61 | 19769.08 | 22605.08 | 23065.31 | 23756.46 | 24069.08 | 24515.77 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63999.85 | 6598.13 | 77751.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59181.82 | 63224.19 | 65334.14 | 66876.73 | 68439.17 | 69658.07 | 74603.16 |
| **Latency** | 526µs    | 620µs    | 796µs    | 858µs    | 910µs    | 995µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52346.54 | 5195.32 | 63631.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46891.56 | 50767.38 | 53735.06 | 55408.27 | 56568.22 | 57214.44 | 58304.80 |
| **Latency** | 674µs    | 788µs    | 960µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14202.83 | 3081.73 | 21242.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10346.00 | 11641.24 | 15700.61 | 16275.93 | 16692.57 | 16932.59 | 17806.81 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5518.02  | 1400.13 | 10131.53 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3160.31 | 5449.44 | 6151.44 | 6315.42 | 6418.69 | 6469.63 | 7443.11 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 14ms    | 20ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54135.24 | 5054.82 | 60139.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50044.16 | 53539.76 | 55271.79 | 56532.92 | 57518.74 | 58129.21 | 59145.17 |
| **Latency** | 742µs    | 824µs    | 892µs    | 985µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23610.85 | 8571.89 | 95143.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10364.28 | 14753.26 | 28207.68 | 29045.09 | 29450.43 | 29843.65 | 30524.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      | 4ms      | 5ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46453.09 | 6457.22 | 53184.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41109.14 | 45541.55 | 48526.32 | 49885.05 | 50742.56 | 51224.20 | 51916.70 |
| **Latency** | 834µs    | 927µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39772.47 | 7373.75 | 46808.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27131.89 | 40910.68 | 42721.89 | 43545.74 | 44246.11 | 44684.04 | 45527.65 |
| **Latency** | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25007.16 | 3977.57 | 29794.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21361.57 | 23321.06 | 26617.63 | 27248.58 | 27776.72 | 28018.82 | 28720.43 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46338.23 | 5969.35 | 53519.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39954.73 | 45231.74 | 47836.00 | 49880.93 | 51186.60 | 51678.68 | 52194.08 |
| **Latency** | 866µs    | 932µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29662.85 | 5158.85 | 33698.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26299.22 | 29666.23 | 31074.04 | 32275.93 | 32897.79 | 33071.85 | 33368.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 22229.39 | 5067.44 | 118340.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18224.41 | 21914.08 | 23664.01 | 24288.34 | 24792.02 | 25034.62 | 26332.44 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8907.74  | 1295.72 | 12678.82 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 7735.15 | 8704.83 | 9179.69 | 9438.80 | 9701.31 | 10077.41 | 11767.76 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms     | 7ms      | 9ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37984.00 | 5437.42 | 43389.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33640.88 | 38183.34 | 39659.72 | 40445.71 | 41206.29 | 41605.93 | 42471.01 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24893.85 | 4533.89 | 32059.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19548.41 | 23502.25 | 26598.78 | 27714.76 | 28447.15 | 28828.73 | 29534.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4778.47  | 1496.67 | 12010.37 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2218.55 | 4663.77 | 5254.09 | 5579.64 | 5774.50 | 6147.91 | 7103.50 |
| **Latency** | 8ms     | 8ms     | 9ms     | 10ms    | 14ms    | 16ms    | 23ms    |

---

<p align="center">Generated 2022-10-31T02:45:06.274Z</p>
