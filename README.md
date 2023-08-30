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
  - [Danet (Oak)](#danet-oak)
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
  - [Stric](#stric)
  - [Servest](#servest)
  - [Vixeny (Deno)](#vixeny-deno)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Acorn](#acorn-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Cheetah](#cheetah-1)
    - [Danet (Oak)](#danet-oak-1)
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
    - [Stric](#stric-1)
    - [Servest](#servest-1)
    - [Vixeny (Deno)](#vixeny-deno-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Deno                                                                                 | 62253.19 | 14972.23 | 73680.06  | 100%     |
| Fast                                                                                 | 61901.51 | 14485.29 | 72528.37  | 99%      |
| Vixeny (Deno)                                                                        | 61556.29 | 14276.69 | 71336.57  | 99%      |
| NHttp                                                                                | 60570.54 | 14581.88 | 70350.62  | 97%      |
| Bun                                                                                  | 59578.53 | 12178.16 | 77084.26  | 96%      |
| Stric                                                                                | 59361.32 | 11691.86 | 75608.09  | 95%      |
| Fastro                                                                               | 59013.26 | 12564.22 | 67911.93  | 95%      |
| Hono                                                                                 | 57619.75 | 12402.96 | 66186.85  | 93%      |
| Hyper Express                                                                        | 55956.95 | 15112.13 | 77058.11  | 90%      |
| Deso                                                                                 | 55364.52 | 13038.89 | 64526.36  | 89%      |
| Reno                                                                                 | 49354.75 | 7294.72  | 53942.56  | 79%      |
| Cheetah                                                                              | 40610.02 | 12121.08 | 50788.41  | 65%      |
| http                                                                                 | 36652.42 | 9279.87  | 44588.88  | 59%      |
| Node                                                                                 | 34597.84 | 5629.94  | 37637.42  | 56%      |
| Fastify                                                                              | 31250.86 | 5126.73  | 33911.56  | 50%      |
| Alosaur                                                                              | 27321.63 | 8105.66  | 38397.04  | 44%      |
| Router                                                                               | 26743.93 | 4839.79  | 33046.76  | 43%      |
| Aqua                                                                                 | 24465.05 | 4304.87  | 31429.69  | 39%      |
| Little                                                                               | 22430.38 | 3957.33  | 26806.19  | 36%      |
| Oak                                                                                  | 21474.76 | 4093.64  | 30116.72  | 34%      |
| Dinatra                                                                              | 19581.12 | 4573.15  | 43034.51  | 31%      |
| Danet (Oak)                                                                          | 15934.30 | 3476.15  | 36705.93  | 26%      |
| Abc                                                                                  | 15530.11 | 4796.77  | 32757.43  | 25%      |
| Opine                                                                                | 10606.37 | 4376.39  | 133665.27 | 17%      |
| Express (Deno)                                                                       | 10256.51 | 2129.67  | 13477.24  | 16%      |
| Express                                                                              | 6395.49  | 1425.77  | 9860.53   | 10%      |
| Servest                                                                              | 6074.45  | 1952.57  | 9708.55   | 10%      |
| Acorn                                                                                | 5801.50  | 7325.58  | 65842.00  | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-b228cdf9-3728-4a46-b16e-f8db59236a3c) |          |          |           |          |

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

## [Danet (Oak)](https://docs.danet.land/)

The most mature backend framework for Deno

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

## [Stric](https://bun.sh/docs/ecosystem/stric)

Stric is a minimalist, fast web framework for Bun.

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

## [Vixeny (Deno)](https://github.com/mimiMonads/functor)

A pure functional web framework

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15530.11 | 4796.77 | 32757.43 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9670.50 | 10005.21 | 16790.08 | 19911.56 | 20437.82 | 20959.33 | 21995.00 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5801.50  | 7325.58 | 65842.00 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 48.34 | 66.12 | 6086.37 | 8410.32 | 11951.84 | 15096.10 | 41655.15 |
| **Latency** | 6ms   | 7ms   | 17ms    | 24ms    | 28ms     | 30ms     | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27321.63 | 8105.66 | 38397.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15026.22 | 24459.97 | 31691.10 | 32761.75 | 33438.55 | 34107.66 | 35376.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24465.05 | 4304.87 | 31429.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21632.51 | 23213.36 | 26104.52 | 26807.85 | 27301.44 | 27700.92 | 28619.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59578.53 | 12178.16 | 77084.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43312.26 | 46992.08 | 65121.08 | 70815.14 | 72480.73 | 73148.91 | 74550.89 |
| **Latency** | 501µs    | 616µs    | 766µs    | 909µs    | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40610.02 | 12121.08 | 50788.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22351.28 | 23271.57 | 48320.97 | 48904.28 | 49236.16 | 49467.99 | 49745.10 |
| **Latency** | 916µs    | 992µs    | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15934.30 | 3476.15 | 36705.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11201.40 | 15450.75 | 16903.29 | 17694.10 | 18151.44 | 19102.91 | 21311.68 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62253.19 | 14972.23 | 73680.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29799.15 | 63927.95 | 69528.90 | 71228.41 | 72081.25 | 72558.82 | 73160.18 |
| **Latency** | 547µs    | 614µs    | 751µs    | 789µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55364.52 | 13038.89 | 64526.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26084.53 | 59120.37 | 61502.30 | 62348.76 | 62913.67 | 63209.95 | 63649.48 |
| **Latency** | 707µs    | 767µs    | 800µs    | 850µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19581.12 | 4573.15 | 43034.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15476.09 | 16605.11 | 21561.95 | 22889.07 | 23506.07 | 23728.85 | 24231.53 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6395.49  | 1425.77 | 9860.53 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4171.87 | 6199.19 | 7037.22 | 7256.68 | 7363.42 | 7406.53 | 7495.06 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 12ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10256.51 | 2129.67 | 13477.24 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7700.28 | 10011.46 | 11165.41 | 11363.87 | 11482.07 | 11585.55 | 12213.14 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 6ms      | 13ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61901.51 | 14485.29 | 72528.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27814.61 | 65730.72 | 68431.49 | 69501.07 | 70158.23 | 70611.28 | 71402.83 |
| **Latency** | 639µs    | 677µs    | 729µs    | 778µs    | 891µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31250.86 | 5126.73 | 33911.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30831.75 | 31863.76 | 32663.07 | 33121.23 | 33357.07 | 33467.63 | 33611.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59013.26 | 12564.22 | 67911.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33172.55 | 62361.37 | 64276.86 | 65157.53 | 66103.50 | 66448.72 | 66828.64 |
| **Latency** | 682µs    | 730µs    | 764µs    | 803µs    | 979µs    | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57619.75 | 12402.96 | 66186.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30116.67 | 60737.33 | 62910.93 | 63720.50 | 64351.73 | 64926.22 | 65642.92 |
| **Latency** | 693µs    | 748µs    | 780µs    | 826µs    | 988µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36652.42 | 9279.87 | 44588.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22448.03 | 33484.45 | 41409.75 | 42334.65 | 42909.93 | 43261.10 | 43896.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55956.95 | 15112.13 | 77058.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34907.91 | 41465.31 | 58677.42 | 70803.09 | 72929.44 | 73626.78 | 75528.44 |
| **Latency** | 523µs    | 630µs    | 758µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22430.38 | 3957.33 | 26806.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20110.44 | 21839.73 | 23709.47 | 24509.54 | 24862.78 | 25105.51 | 25954.10 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60570.54 | 14581.88 | 70350.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27455.01 | 64282.81 | 67226.99 | 68196.74 | 68816.09 | 69218.27 | 69933.84 |
| **Latency** | 653µs    | 696µs    | 738µs    | 782µs    | 928µs    | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34597.84 | 5629.94 | 37637.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34254.96 | 35382.59 | 35942.59 | 36711.90 | 37020.91 | 37135.81 | 37353.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21474.76 | 4093.64 | 30116.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19122.30 | 20467.26 | 22812.25 | 23473.81 | 24115.12 | 24562.54 | 26225.46 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 10606.37 | 4376.39 | 133665.27 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8008.59 | 9977.10 | 11068.94 | 11450.16 | 11898.80 | 13605.36 | 15802.20 |
| **Latency** | 2ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 9ms      |

### [Peko](#peko)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49354.75 | 7294.72 | 53942.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44593.32 | 50790.61 | 51578.67 | 52335.73 | 52907.57 | 53128.72 | 53412.97 |
| **Latency** | 850µs    | 928µs    | 968µs    | 999µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26743.93 | 4839.79 | 33046.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22087.82 | 25259.79 | 28810.32 | 29424.12 | 29952.58 | 30302.49 | 31305.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59361.32 | 11691.86 | 75608.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43536.45 | 47368.07 | 65130.21 | 70013.27 | 71660.55 | 72425.24 | 73494.12 |
| **Latency** | 504µs    | 624µs    | 776µs    | 922µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6074.45  | 1952.57 | 9708.55 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3815.42 | 5011.44 | 6739.23 | 7347.40 | 7728.77 | 7950.16 | 9232.22 |
| **Latency** | 4ms     | 6ms     | 8ms     | 10ms    | 12ms    | 16ms    | 21ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61556.29 | 14276.69 | 71336.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29121.05 | 64647.28 | 68028.05 | 69327.95 | 69975.13 | 70256.14 | 70746.86 |
| **Latency** | 635µs    | 678µs    | 736µs    | 787µs    | 885µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-08-30T01:23:07.835Z</p>
