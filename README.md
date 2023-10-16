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

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Fastro                                                                               | 59837.44 | 14024.06 | 69336.12 | 100%     |
| Deso                                                                                 | 59760.65 | 10867.40 | 65902.25 | 100%     |
| Megalo                                                                               | 59731.99 | 10075.66 | 65805.40 | 100%     |
| Hono                                                                                 | 59672.21 | 13365.66 | 68957.95 | 100%     |
| NHttp                                                                                | 59426.93 | 18213.80 | 75777.39 | 99%      |
| Fast                                                                                 | 58889.72 | 16925.45 | 72870.99 | 98%      |
| Vixeny (Deno)                                                                        | 58211.84 | 17057.83 | 73425.45 | 97%      |
| Bun                                                                                  | 52940.67 | 9203.42  | 79101.58 | 88%      |
| Stric                                                                                | 52720.69 | 10058.03 | 81152.83 | 88%      |
| Hyper Express                                                                        | 52257.33 | 13784.74 | 77704.65 | 87%      |
| Deno                                                                                 | 50887.18 | 14465.77 | 72638.09 | 85%      |
| Reno                                                                                 | 49706.39 | 8121.57  | 54679.12 | 83%      |
| Cheetah                                                                              | 41923.47 | 14925.34 | 53334.73 | 70%      |
| Node                                                                                 | 35237.53 | 6708.19  | 40728.53 | 59%      |
| http                                                                                 | 35113.38 | 8939.00  | 45824.85 | 59%      |
| Fastify                                                                              | 30431.62 | 7047.31  | 34814.08 | 51%      |
| Alosaur                                                                              | 28707.66 | 6903.96  | 61590.47 | 48%      |
| Router                                                                               | 26119.54 | 5214.17  | 31894.73 | 44%      |
| Aqua                                                                                 | 24037.34 | 4829.53  | 34369.56 | 40%      |
| Oak                                                                                  | 22497.67 | 5420.68  | 80106.27 | 38%      |
| Little                                                                               | 22413.05 | 5145.33  | 28010.96 | 37%      |
| Dinatra                                                                              | 18658.55 | 4265.93  | 24996.59 | 31%      |
| Abc                                                                                  | 15420.12 | 4726.43  | 36028.39 | 26%      |
| Danet (Oak)                                                                          | 14167.24 | 4588.90  | 19920.74 | 24%      |
| Express (Deno)                                                                       | 10203.51 | 2230.01  | 15254.29 | 17%      |
| Opine                                                                                | 8801.32  | 2763.45  | 15802.60 | 15%      |
| Acorn                                                                                | 6751.59  | 10145.20 | 97402.07 | 11%      |
| Servest                                                                              | 6166.48  | 2170.32  | 10405.72 | 10%      |
| Express                                                                              | 6017.22  | 1622.85  | 10300.76 | 10%      |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-a79ce4c5-d6c4-4ff3-833b-a69c0a200fa0) |          |          |          |          |

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
| 15420.12 | 4726.43 | 36028.39 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9064.55 | 10211.98 | 16812.28 | 19186.93 | 20048.32 | 20422.60 | 21661.16 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 6751.59  | 10145.20 | 97402.07 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 45.12 | 65.95 | 5775.22 | 8782.69 | 14053.87 | 22341.18 | 52284.36 |
| **Latency** | 5ms   | 7ms   | 18ms    | 24ms    | 28ms     | 31ms     | 36ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28707.66 | 6903.96 | 61590.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22107.31 | 25889.59 | 31563.21 | 32481.44 | 33188.41 | 33809.79 | 34923.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24037.34 | 4829.53 | 34369.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19413.02 | 22996.87 | 25808.53 | 26801.09 | 27506.34 | 27941.53 | 29282.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52940.67 | 9203.42 | 79101.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42892.51 | 46346.37 | 50960.82 | 59621.67 | 66942.21 | 70542.54 | 76119.10 |
| **Latency** | 511µs    | 662µs    | 860µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41923.47 | 14925.34 | 53334.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16421.86 | 23615.37 | 50723.38 | 51889.82 | 52260.99 | 52517.90 | 52962.65 |
| **Latency** | 860µs    | 936µs    | 979µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14167.24 | 4588.90 | 19920.74 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7602.80 | 10850.58 | 16074.12 | 18101.83 | 18554.70 | 18873.53 | 19775.03 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      | 10ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50887.18 | 14465.77 | 72638.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29169.17 | 39328.07 | 53618.29 | 64139.72 | 67926.65 | 69308.06 | 70902.41 |
| **Latency** | 611µs    | 706µs    | 758µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59760.65 | 10867.40 | 65902.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56635.19 | 61700.48 | 63161.39 | 64041.90 | 64732.49 | 65067.05 | 65549.00 |
| **Latency** | 692µs    | 746µs    | 782µs    | 824µs    | 914µs    | 992µs    | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18658.55 | 4265.93 | 24996.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15183.27 | 16302.35 | 20619.08 | 21332.81 | 22336.00 | 22714.86 | 23501.86 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6017.22  | 1622.85 | 10300.76 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3635.59 | 4429.42 | 6936.01 | 7135.55 | 7280.46 | 7337.43 | 7424.59 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 11ms    | 13ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10203.51 | 2230.01 | 15254.29 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7108.42 | 10127.22 | 11194.81 | 11435.49 | 11554.45 | 11631.62 | 11965.95 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58889.72 | 16925.45 | 72870.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27552.39 | 52401.83 | 68041.06 | 70033.72 | 70821.36 | 71285.37 | 71719.17 |
| **Latency** | 594µs    | 671µs    | 740µs    | 791µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30431.62 | 7047.31 | 34814.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18621.82 | 32028.56 | 32913.54 | 33664.35 | 33935.34 | 34046.02 | 34183.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59837.44 | 14024.06 | 69336.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26960.22 | 63327.28 | 65887.69 | 66953.62 | 67815.66 | 68171.63 | 68724.43 |
| **Latency** | 666µs    | 712µs    | 747µs    | 787µs    | 936µs    | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59672.21 | 13365.66 | 68957.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31617.96 | 62835.24 | 64914.98 | 66141.35 | 67248.21 | 67715.63 | 68379.24 |
| **Latency** | 675µs    | 720µs    | 758µs    | 800µs    | 932µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35113.38 | 8939.00 | 45824.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21417.59 | 31738.99 | 39961.58 | 41021.37 | 41630.32 | 41940.24 | 42572.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52257.33 | 13784.74 | 77704.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34926.59 | 40109.28 | 53833.85 | 62965.69 | 70211.25 | 73153.32 | 76469.48 |
| **Latency** | 545µs    | 646µs    | 777µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22413.05 | 5145.33 | 28010.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15526.88 | 21812.33 | 24218.46 | 25369.89 | 25930.13 | 26315.03 | 27027.06 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59731.99 | 10075.66 | 65805.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56965.02 | 61564.46 | 62779.81 | 63584.01 | 64223.85 | 64634.34 | 65160.39 |
| **Latency** | 697µs    | 752µs    | 788µs    | 825µs    | 904µs    | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59426.93 | 18213.80 | 75777.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28326.95 | 43958.31 | 70589.03 | 72840.15 | 73949.19 | 74359.23 | 75032.91 |
| **Latency** | 547µs    | 644µs    | 721µs    | 774µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35237.53 | 6708.19 | 40728.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33320.01 | 36267.48 | 37153.92 | 37914.83 | 38348.73 | 38598.09 | 39114.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22497.67 | 5420.68 | 80106.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19330.76 | 21442.92 | 24105.81 | 24700.52 | 25226.09 | 25580.50 | 27412.09 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8801.32  | 2763.45 | 15802.60 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5608.19 | 7170.91 | 9208.62 | 10854.97 | 11258.31 | 12076.20 | 15660.66 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms      | 7ms      | 9ms      | 19ms     |

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
| 49706.39 | 8121.57 | 54679.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48174.73 | 51012.30 | 52010.18 | 52814.32 | 53350.10 | 53634.92 | 54134.71 |
| **Latency** | 845µs    | 924µs    | 964µs    | 996µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26119.54 | 5214.17 | 31894.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22549.82 | 24606.42 | 28159.63 | 28886.38 | 29459.01 | 29848.99 | 30905.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52720.69 | 10058.03 | 81152.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42397.55 | 46006.48 | 50488.90 | 59668.41 | 67501.69 | 70782.16 | 76332.13 |
| **Latency** | 509µs    | 657µs    | 856µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6166.48  | 2170.32 | 10405.72 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3318.92 | 4963.18 | 6935.52 | 7624.48 | 8091.52 | 8331.42 | 9960.92 |
| **Latency** | 4ms     | 5ms     | 7ms     | 9ms     | 12ms    | 17ms    | 22ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58211.84 | 17057.83 | 73425.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27113.89 | 47928.77 | 67568.94 | 70146.33 | 71144.13 | 71682.11 | 72542.37 |
| **Latency** | 575µs    | 673µs    | 750µs    | 797µs    | 1ms      | 1ms      | 2ms      |

---

<p align="center">Generated 2023-10-16T01:26:30.782Z</p>
