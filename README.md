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
| Bun                                                                                  | 52981.95 | 9555.06  | 73047.91  | 100%     |
| Hyper Express                                                                        | 52284.83 | 15713.87 | 73317.50  | 99%      |
| Deno                                                                                 | 46497.75 | 11832.18 | 61525.54  | 88%      |
| NHttp                                                                                | 44213.98 | 10739.60 | 138498.40 | 83%      |
| Hono                                                                                 | 43706.82 | 12678.54 | 54840.38  | 82%      |
| Fastro                                                                               | 41416.73 | 16175.59 | 62580.08  | 78%      |
| Fast                                                                                 | 40437.89 | 13389.86 | 60431.44  | 76%      |
| Megalo                                                                               | 39768.08 | 11423.61 | 51714.20  | 75%      |
| http                                                                                 | 36158.87 | 7474.85  | 43832.47  | 68%      |
| Peko                                                                                 | 33116.38 | 6967.15  | 39251.72  | 63%      |
| Reno                                                                                 | 32633.40 | 8680.99  | 42372.58  | 62%      |
| Node                                                                                 | 30679.20 | 5576.59  | 35629.67  | 58%      |
| Alosaur                                                                              | 27983.85 | 6477.71  | 34251.08  | 53%      |
| Fastify                                                                              | 27454.65 | 5238.69  | 31618.75  | 52%      |
| Router                                                                               | 24709.89 | 4889.63  | 30518.24  | 47%      |
| Little                                                                               | 23149.65 | 4104.43  | 27665.64  | 44%      |
| Aqua                                                                                 | 21322.49 | 3271.19  | 25672.46  | 40%      |
| Oak                                                                                  | 20285.53 | 3387.56  | 28145.95  | 38%      |
| Dinatra                                                                              | 16195.60 | 3644.18  | 31742.19  | 31%      |
| Abc                                                                                  | 14507.78 | 2496.60  | 17912.91  | 27%      |
| Express (Deno)                                                                       | 9398.14  | 5523.27  | 116109.62 | 18%      |
| Opine                                                                                | 8136.86  | 1960.79  | 62238.51  | 15%      |
| Express                                                                              | 5841.34  | 3540.71  | 110523.49 | 11%      |
| Acorn                                                                                | 4862.87  | 5023.44  | 25124.73  | 9%       |
| Servest                                                                              | 4813.64  | 1417.96  | 10116.29  | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-d60a9951-50f8-4a8c-be01-24923948fc1c) |          |          |           |          |

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
| 14507.78 | 2496.60 | 17912.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11411.75 | 13311.56 | 15460.30 | 16019.04 | 16459.95 | 16763.34 | 17484.49 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4862.87  | 5023.44 | 25124.73 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 89.40 | 2295.18 | 3222.50 | 5531.02 | 10045.09 | 20237.35 | 23183.21 |
| **Latency** | 4ms   | 6ms     | 13ms    | 19ms    | 23ms     | 24ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27983.85 | 6477.71 | 34251.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18600.25 | 22202.62 | 31520.59 | 32117.52 | 32758.75 | 33118.04 | 33683.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21322.49 | 3271.19 | 25672.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18690.52 | 20417.63 | 22640.75 | 22892.74 | 23129.53 | 23597.98 | 24535.42 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52981.95 | 9555.06 | 73047.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43319.17 | 46795.98 | 50531.94 | 61812.42 | 65533.48 | 66614.17 | 69008.34 |
| **Latency** | 566µs    | 709µs    | 854µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46497.75 | 11832.18 | 61525.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30836.17 | 39611.61 | 52649.64 | 54922.43 | 56100.45 | 56799.83 | 58404.84 |
| **Latency** | 700µs    | 806µs    | 978µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16195.60 | 3644.18 | 31742.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12013.62 | 15229.59 | 16517.41 | 18890.34 | 19573.27 | 19861.25 | 20612.24 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5841.34  | 3540.71 | 110523.49 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3700.34 | 5886.91 | 6324.24 | 6453.27 | 6561.04 | 6632.05 | 6964.79 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 11ms    | 13ms    | 19ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9398.14  | 5523.27 | 116109.62 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5660.07 | 6792.42 | 8933.50 | 10642.09 | 14327.94 | 15003.53 | 17938.99 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 7ms      | 8ms      | 16ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40437.89 | 13389.86 | 60431.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17508.10 | 36391.09 | 46466.54 | 50974.58 | 51916.46 | 52451.75 | 54440.08 |
| **Latency** | 863µs    | 929µs    | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27454.65 | 5238.69 | 31618.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24900.82 | 28220.12 | 29078.89 | 29538.79 | 29936.91 | 30258.50 | 30753.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41416.73 | 16175.59 | 62580.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14448.59 | 37518.87 | 49629.44 | 52440.54 | 53564.04 | 54424.11 | 55507.39 |
| **Latency** | 839µs    | 899µs    | 968µs    | 1ms      | 1ms      | 1ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43706.82 | 12678.54 | 54840.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20113.94 | 44947.15 | 49113.55 | 50139.27 | 50933.27 | 51484.09 | 52912.36 |
| **Latency** | 908µs    | 957µs    | 1ms      | 1ms      | 1ms      | 1ms      | 6ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36158.87 | 7474.85 | 43832.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25729.06 | 37110.54 | 39256.90 | 40039.86 | 40638.96 | 41054.64 | 42069.22 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52284.83 | 15713.87 | 73317.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31793.24 | 33444.91 | 60023.81 | 66774.79 | 68367.79 | 69157.36 | 70614.81 |
| **Latency** | 569µs    | 669µs    | 821µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23149.65 | 4104.43 | 27665.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20385.06 | 22204.11 | 24577.19 | 25268.60 | 25940.55 | 26186.21 | 26538.82 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39768.08 | 11423.61 | 51714.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21599.89 | 34882.54 | 45848.27 | 47539.74 | 48416.59 | 48910.40 | 49793.11 |
| **Latency** | 920µs    | 993µs    | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 44213.98 | 10739.60 | 138498.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28710.99 | 39308.25 | 48539.44 | 51237.46 | 52389.94 | 52835.80 | 54399.70 |
| **Latency** | 859µs    | 924µs    | 995µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30679.20 | 5576.59 | 35629.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29276.50 | 31519.32 | 32173.13 | 32743.64 | 33256.63 | 33523.90 | 34235.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20285.53 | 3387.56 | 28145.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16965.49 | 20321.60 | 21369.23 | 21924.13 | 22533.97 | 22833.98 | 23434.70 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8136.86  | 1960.79 | 62238.51 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 7103.22 | 7812.29 | 8405.26 | 8648.47 | 8769.66 | 8891.98 | 9843.79 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 7ms     | 10ms    |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33116.38 | 6967.15 | 39251.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24134.84 | 31680.81 | 36428.54 | 37019.01 | 37569.33 | 37910.39 | 38448.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32633.40 | 8680.99 | 42372.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19023.64 | 30155.27 | 36498.61 | 38121.45 | 39216.60 | 39703.40 | 40612.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24709.89 | 4889.63 | 30518.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17593.34 | 22826.32 | 27043.96 | 27518.83 | 27946.85 | 28230.56 | 28751.22 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4813.64  | 1417.96 | 10116.29 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2306.14 | 4843.66 | 5401.96 | 5520.89 | 5616.08 | 5716.88 | 6741.89 |
| **Latency** | 8ms     | 9ms     | 9ms     | 10ms    | 14ms    | 15ms    | 25ms    |

---

<p align="center">Generated 2023-04-07T01:29:47.395Z</p>
