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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Stric                                                                                | 40617.43 | 12175.81 | 65005.33 | 100%     |
| Vixeny (Deno)                                                                        | 40433.03 | 9476.63  | 53726.26 | 100%     |
| Bun                                                                                  | 40277.39 | 11102.90 | 59236.50 | 99%      |
| Deno                                                                                 | 39761.01 | 11229.56 | 55555.15 | 98%      |
| NHttp                                                                                | 39592.58 | 9634.04  | 51807.86 | 97%      |
| Hyper Express                                                                        | 39456.91 | 14718.49 | 59445.75 | 97%      |
| Fast                                                                                 | 38938.86 | 10780.95 | 52373.47 | 96%      |
| Deso                                                                                 | 35407.08 | 9115.01  | 47532.92 | 87%      |
| Hono                                                                                 | 35065.58 | 10946.26 | 53718.46 | 86%      |
| Fastro                                                                               | 33691.21 | 9911.12  | 60606.06 | 83%      |
| Reno                                                                                 | 31466.02 | 6046.23  | 40329.96 | 77%      |
| Cheetah                                                                              | 25896.68 | 4306.30  | 31751.51 | 64%      |
| http                                                                                 | 25351.03 | 6584.17  | 34013.30 | 62%      |
| Peko                                                                                 | 20911.93 | 4560.12  | 28669.85 | 51%      |
| Alosaur                                                                              | 19082.21 | 5091.66  | 57077.10 | 47%      |
| Node                                                                                 | 16240.43 | 3391.36  | 19901.23 | 40%      |
| Router                                                                               | 15809.28 | 3630.16  | 34221.21 | 39%      |
| Aqua                                                                                 | 15741.95 | 3022.19  | 22972.21 | 39%      |
| Fastify                                                                              | 14725.34 | 3077.33  | 18256.99 | 36%      |
| Little                                                                               | 13835.96 | 3136.66  | 20398.85 | 34%      |
| Oak                                                                                  | 11261.93 | 2607.53  | 17225.94 | 28%      |
| Dinatra                                                                              | 11250.15 | 2423.83  | 17814.59 | 28%      |
| Abc                                                                                  | 9628.36  | 1832.53  | 13096.98 | 24%      |
| Danet (Oak)                                                                          | 9331.05  | 2576.68  | 30086.27 | 23%      |
| Opine                                                                                | 5970.62  | 1766.51  | 23815.31 | 15%      |
| Express (Deno)                                                                       | 5458.79  | 1262.60  | 8136.71  | 13%      |
| Acorn                                                                                | 5049.86  | 6843.32  | 88494.01 | 12%      |
| Express                                                                              | 3951.09  | 1030.49  | 13560.53 | 10%      |
| Servest                                                                              | 3735.88  | 1090.24  | 7079.80  | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-12382ca8-5a4f-482b-be23-9e90ab2976f7) |          |          |          |          |

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
| 9628.36  | 1832.53 | 13096.98 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7250.19 | 8729.09 | 10243.31 | 10858.23 | 11256.49 | 11501.76 | 12109.24 |
| **Latency** | 3ms     | 3ms     | 4ms      | 6ms      | 7ms      | 8ms      | 12ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5049.86  | 6843.32 | 88494.01 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 48.81 | 65.31 | 4628.25 | 7514.24 | 11068.02 | 13240.83 | 33112.40 |
| **Latency** | 8ms   | 11ms  | 20ms    | 26ms    | 30ms     | 32ms     | 48ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19082.21 | 5091.66 | 57077.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11679.88 | 16847.67 | 20796.25 | 22367.49 | 23513.93 | 24121.38 | 25439.12 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15741.95 | 3022.19 | 22972.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12715.62 | 14644.65 | 16380.80 | 17498.73 | 18443.66 | 19056.77 | 20111.07 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40277.39 | 11102.90 | 59236.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24691.42 | 29752.44 | 43807.44 | 50171.37 | 52708.03 | 53812.51 | 56190.30 |
| **Latency** | 681µs    | 853µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25896.68 | 4306.30 | 31751.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22374.56 | 25239.73 | 27003.02 | 28200.38 | 29147.54 | 29743.59 | 30744.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9331.05  | 2576.68 | 30086.27 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6218.68 | 8149.03 | 9705.54 | 10606.51 | 11769.83 | 12976.00 | 15042.71 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 6ms      | 8ms      | 13ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39761.01 | 11229.56 | 55555.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18063.46 | 34590.81 | 44609.06 | 48125.66 | 49940.37 | 50939.16 | 52768.70 |
| **Latency** | 775µs    | 931µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35407.08 | 9115.01 | 47532.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17400.55 | 33420.96 | 39223.29 | 41566.67 | 43020.76 | 43634.87 | 45557.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11250.15 | 2423.83 | 17814.59 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8808.92 | 10326.05 | 11444.66 | 12823.62 | 13867.52 | 14290.38 | 15198.71 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3951.09  | 1030.49 | 13560.53 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2528.38 | 3718.23 | 4279.44 | 4498.80 | 4628.57 | 4734.57 | 4926.02 |
| **Latency** | 10ms    | 11ms    | 11ms    | 12ms    | 16ms    | 19ms    | 25ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5458.79  | 1262.60 | 8136.71 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3629.60 | 5064.12 | 5836.02 | 6340.90 | 6575.79 | 6741.00 | 7103.65 |
| **Latency** | 7ms     | 7ms     | 8ms     | 9ms     | 11ms    | 14ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38938.86 | 10780.95 | 52373.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17946.42 | 35763.67 | 43517.88 | 46326.38 | 47957.59 | 48787.88 | 50014.57 |
| **Latency** | 906µs    | 990µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14725.34 | 3077.33 | 18256.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10906.99 | 14670.72 | 15649.15 | 16348.58 | 16841.79 | 17235.86 | 17747.59 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33691.21 | 9911.12 | 60606.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16402.09 | 29019.60 | 38206.17 | 40386.89 | 41744.31 | 42578.04 | 44000.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35065.58 | 10946.26 | 53718.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16196.81 | 28454.10 | 39584.92 | 43418.78 | 45198.83 | 46207.45 | 48130.95 |
| **Latency** | 951µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25351.03 | 6584.17 | 34013.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15173.78 | 23005.81 | 27997.82 | 29626.70 | 30700.72 | 31329.49 | 32559.54 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39456.91 | 14718.49 | 59445.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15337.35 | 25607.55 | 45825.73 | 51738.40 | 54225.56 | 55466.68 | 56910.49 |
| **Latency** | 657µs    | 832µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13835.96 | 3136.66 | 20398.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10215.75 | 12792.00 | 14431.54 | 15794.18 | 16712.48 | 17325.91 | 19324.91 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Megalo](#megalo)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39592.58 | 9634.04 | 51807.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19025.10 | 39000.07 | 43033.21 | 45602.82 | 47304.63 | 48631.70 | 50218.17 |
| **Latency** | 922µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16240.43 | 3391.36 | 19901.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11804.27 | 16226.15 | 17301.76 | 18040.57 | 18715.13 | 19009.16 | 19603.37 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11261.93 | 2607.53 | 17225.94 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7585.49 | 10178.76 | 12108.25 | 12933.93 | 13541.43 | 13954.60 | 15297.87 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5970.62  | 1766.51 | 23815.31 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4505.84 | 5567.24 | 6159.35 | 6477.85 | 6841.86 | 7193.92 | 11572.04 |
| **Latency** | 6ms     | 7ms     | 8ms     | 9ms     | 10ms    | 12ms    | 18ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20911.93 | 4560.12 | 28669.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16032.94 | 19320.02 | 22363.52 | 23654.66 | 24574.01 | 25210.89 | 26466.49 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31466.02 | 6046.23 | 40329.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20497.93 | 30720.64 | 33524.19 | 35073.32 | 36304.49 | 36920.74 | 38338.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15809.28 | 3630.16 | 34221.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11014.64 | 14318.93 | 16898.56 | 18112.17 | 19072.37 | 19737.86 | 21106.98 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40617.43 | 12175.81 | 65005.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22777.26 | 28526.30 | 44381.80 | 51714.07 | 54205.65 | 55361.28 | 57234.85 |
| **Latency** | 671µs    | 839µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3735.88  | 1090.24 | 7079.80 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2271.98 | 3459.62 | 4041.96 | 4370.15 | 4727.48 | 4907.61 | 5282.34 |
| **Latency** | 7ms     | 10ms    | 13ms    | 16ms    | 20ms    | 23ms    | 32ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40433.03 | 9476.63 | 53726.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20614.07 | 39575.29 | 43706.67 | 46337.37 | 48143.59 | 49145.83 | 50745.71 |
| **Latency** | 908µs    | 991µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-07-17T02:11:40.101Z</p>
