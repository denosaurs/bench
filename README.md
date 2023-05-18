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
  - [Cheetah](#cheetah)
  - [Deno](#deno)
  - [Deso](#deso)
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
    - [Cheetah](#cheetah-1)
    - [Deno](#deno-1)
    - [Deso](#deso-1)
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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Deno                                                                                 | 71548.31 | 17348.24 | 82769.95 | 100%     |
| Bun                                                                                  | 69236.20 | 13155.38 | 89940.97 | 97%      |
| Hyper Express                                                                        | 67267.03 | 17944.17 | 84955.10 | 94%      |
| NHttp                                                                                | 64814.95 | 15021.92 | 74770.29 | 91%      |
| Hono                                                                                 | 64383.69 | 14529.24 | 75412.20 | 90%      |
| Fastro                                                                               | 64121.76 | 12990.98 | 73028.63 | 90%      |
| Fast                                                                                 | 63486.42 | 15675.90 | 74224.58 | 89%      |
| Deso                                                                                 | 62655.86 | 12222.20 | 69775.71 | 88%      |
| Megalo                                                                               | 60809.90 | 12505.69 | 68230.89 | 85%      |
| Reno                                                                                 | 51693.05 | 6650.05  | 54936.69 | 72%      |
| Cheetah                                                                              | 43136.99 | 4342.07  | 45245.18 | 60%      |
| Node                                                                                 | 42150.03 | 6232.32  | 45674.80 | 59%      |
| http                                                                                 | 42042.61 | 10010.23 | 72708.16 | 59%      |
| Peko                                                                                 | 37635.90 | 8614.92  | 46567.19 | 53%      |
| Fastify                                                                              | 37528.19 | 6455.66  | 40666.77 | 52%      |
| Alosaur                                                                              | 35376.19 | 6871.44  | 42788.19 | 49%      |
| Router                                                                               | 30576.72 | 4844.85  | 38179.92 | 43%      |
| Little                                                                               | 26685.95 | 4616.21  | 31534.39 | 37%      |
| Oak                                                                                  | 24860.00 | 4221.27  | 29018.54 | 35%      |
| Aqua                                                                                 | 24631.63 | 3322.78  | 28003.41 | 34%      |
| Dinatra                                                                              | 22833.14 | 4272.69  | 48981.25 | 32%      |
| Abc                                                                                  | 17079.07 | 4928.36  | 24261.98 | 24%      |
| Opine                                                                                | 10896.12 | 1764.13  | 13346.22 | 15%      |
| Express (Deno)                                                                       | 9771.75  | 1804.42  | 14370.11 | 14%      |
| Express                                                                              | 8054.99  | 1350.91  | 11065.22 | 11%      |
| Servest                                                                              | 6743.10  | 1944.71  | 9830.49  | 9%       |
| Acorn                                                                                | 3815.08  | 5864.44  | 88262.81 | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-248a54aa-e803-4676-9fbc-a47929fdc89b) |          |          |          |          |

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

## [Cheetah](https://github.com/azurystudio/cheetah)

🐈 A blazing fast framework for the modern web.

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Deso](https://github.com/gothammm/deso)

A simple & fast HTTP web framework for Deno

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
| 17079.07 | 4928.36 | 24261.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10431.01 | 12127.25 | 19415.79 | 21690.90 | 22154.50 | 22395.62 | 23200.44 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3815.08  | 5864.44 | 88262.81 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1875.12 | 2237.67 | 2800.74 | 3860.26 | 5635.43 | 9516.38 | 12177.50 |
| **Latency** | 4ms     | 7ms     | 14ms    | 20ms    | 24ms    | 26ms    | 28ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35376.19 | 6871.44 | 42788.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31142.82 | 34144.20 | 38115.03 | 39050.67 | 39426.83 | 39674.06 | 40274.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24631.63 | 3322.78 | 28003.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23688.66 | 24291.27 | 25735.37 | 26214.58 | 26434.07 | 26663.73 | 27499.32 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69236.20 | 13155.38 | 89940.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52442.83 | 57162.07 | 76028.43 | 81069.72 | 82735.92 | 83333.68 | 85602.60 |
| **Latency** | 438µs    | 547µs    | 671µs    | 804µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43136.99 | 4342.07 | 45245.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43121.79 | 43606.43 | 44192.64 | 44382.32 | 44611.27 | 44800.53 | 45098.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 71548.31 | 17348.24 | 82769.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33818.87 | 77069.76 | 79904.27 | 80835.17 | 81400.66 | 81713.49 | 82183.78 |
| **Latency** | 505µs    | 580µs    | 627µs    | 677µs    | 764µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62655.86 | 12222.20 | 69775.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37714.43 | 66521.61 | 67838.32 | 68259.71 | 68834.75 | 69049.37 | 69404.02 |
| **Latency** | 681µs    | 704µs    | 724µs    | 752µs    | 868µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22833.14 | 4272.69 | 48981.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20221.53 | 21696.35 | 24065.21 | 25123.48 | 25815.10 | 27830.16 | 28294.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8054.99  | 1350.91 | 11065.22 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5932.90 | 8074.88 | 8725.43 | 8808.23 | 8866.63 | 8886.95 | 8919.07 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 9ms     | 12ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9771.75  | 1804.42 | 14370.11 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8124.80 | 9668.52 | 10480.69 | 10631.67 | 10679.19 | 10710.24 | 11439.89 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 5ms      | 6ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63486.42 | 15675.90 | 74224.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31087.18 | 63747.21 | 71951.88 | 72605.29 | 72916.12 | 73040.98 | 73271.18 |
| **Latency** | 642µs    | 663µs    | 684µs    | 717µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37528.19 | 6455.66 | 40666.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37210.29 | 38559.72 | 39141.85 | 39733.86 | 40007.69 | 40121.51 | 40341.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64121.76 | 12990.98 | 73028.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37412.46 | 68113.83 | 69534.98 | 70424.09 | 70914.36 | 71217.95 | 71815.30 |
| **Latency** | 672µs    | 691µs    | 709µs    | 728µs    | 847µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64383.69 | 14529.24 | 75412.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31914.11 | 68303.26 | 71445.88 | 72036.17 | 72621.94 | 72817.15 | 73036.00 |
| **Latency** | 650µs    | 669µs    | 686µs    | 713µs    | 837µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42042.61 | 10010.23 | 72708.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24465.85 | 41620.66 | 47028.77 | 48163.18 | 48611.12 | 48902.58 | 49414.91 |
| **Latency** | 894µs    | 996µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67267.03 | 17944.17 | 84955.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41694.21 | 42832.11 | 79249.68 | 81707.71 | 82546.88 | 83010.03 | 83899.66 |
| **Latency** | 462µs    | 532µs    | 672µs    | 730µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26685.95 | 4616.21 | 31534.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22706.80 | 26609.31 | 27930.43 | 29019.74 | 29741.60 | 30088.34 | 30477.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60809.90 | 12505.69 | 68230.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34256.54 | 65043.96 | 66403.11 | 66722.66 | 66961.20 | 67067.65 | 67562.84 |
| **Latency** | 708µs    | 728µs    | 745µs    | 765µs    | 899µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64814.95 | 15021.92 | 74770.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31962.89 | 67716.27 | 72518.10 | 73138.58 | 73443.88 | 73594.93 | 73905.20 |
| **Latency** | 638µs    | 658µs    | 679µs    | 710µs    | 848µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42150.03 | 6232.32 | 45674.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42050.34 | 43028.71 | 43542.55 | 44027.61 | 44410.53 | 44703.45 | 45054.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24860.00 | 4221.27 | 29018.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23002.25 | 24628.68 | 26099.76 | 26807.66 | 27128.40 | 27791.60 | 28296.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10896.12 | 1764.13 | 13346.22 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9700.28 | 11007.57 | 11357.75 | 11644.31 | 11743.90 | 11850.70 | 12809.77 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 5ms      | 5ms      | 9ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37635.90 | 8614.92 | 46567.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23460.25 | 37620.62 | 42018.43 | 43053.42 | 43624.81 | 44000.10 | 44485.16 |
| **Latency** | 984µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51693.05 | 6650.05 | 54936.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50985.58 | 53042.79 | 53354.73 | 54002.43 | 54343.28 | 54513.55 | 54776.02 |
| **Latency** | 895µs    | 913µs    | 924µs    | 939µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30576.72 | 4844.85 | 38179.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29059.60 | 30090.60 | 32089.40 | 32985.71 | 33357.78 | 33647.79 | 34110.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6743.10  | 1944.71 | 9830.49 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5346.17 | 5941.10 | 7556.20 | 8013.84 | 8142.97 | 8221.26 | 8447.58 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 8ms     | 13ms    | 16ms    |

---

<p align="center">Generated 2023-05-18T01:42:44.520Z</p>
