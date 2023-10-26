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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Fastro                                                                               | 68440.68 | 13313.51 | 75969.23  | 100%     |
| Megalo                                                                               | 67120.84 | 11032.23 | 73262.30  | 98%      |
| NHttp                                                                                | 66888.18 | 19492.67 | 82231.28  | 98%      |
| Vixeny (Deno)                                                                        | 65687.45 | 18670.98 | 79361.68  | 96%      |
| Hono                                                                                 | 65662.20 | 16035.74 | 76303.12  | 96%      |
| Fast                                                                                 | 65088.80 | 18359.52 | 78617.47  | 95%      |
| Deso                                                                                 | 63980.40 | 14667.32 | 73141.39  | 93%      |
| Bun                                                                                  | 60509.37 | 12339.93 | 87635.70  | 88%      |
| Stric                                                                                | 60368.13 | 10770.90 | 88686.21  | 88%      |
| Hyper Express                                                                        | 59069.04 | 14142.25 | 85863.55  | 86%      |
| Deno                                                                                 | 57996.69 | 16209.78 | 79222.31  | 85%      |
| Reno                                                                                 | 56886.41 | 5421.26  | 60180.01  | 83%      |
| Cheetah                                                                              | 54568.13 | 10772.61 | 60980.20  | 80%      |
| http                                                                                 | 40686.88 | 8200.80  | 48617.85  | 59%      |
| Node                                                                                 | 39785.79 | 6390.69  | 43850.14  | 58%      |
| Alosaur                                                                              | 33083.08 | 6913.28  | 40625.81  | 48%      |
| Fastify                                                                              | 30779.71 | 10575.56 | 39241.75  | 45%      |
| Router                                                                               | 29485.21 | 5273.84  | 84366.83  | 43%      |
| Aqua                                                                                 | 26669.43 | 4199.78  | 33105.52  | 39%      |
| Little                                                                               | 26275.82 | 4642.27  | 31507.58  | 38%      |
| Oak                                                                                  | 26096.70 | 5132.17  | 33098.39  | 38%      |
| Dinatra                                                                              | 22592.39 | 4530.91  | 28831.12  | 33%      |
| Abc                                                                                  | 21561.54 | 3242.97  | 26309.80  | 32%      |
| Danet (Oak)                                                                          | 19144.62 | 5672.01  | 158730.16 | 28%      |
| Opine                                                                                | 12016.03 | 4690.76  | 112090.43 | 18%      |
| Express (Deno)                                                                       | 11759.11 | 2503.77  | 15871.09  | 17%      |
| Express                                                                              | 7919.10  | 1391.62  | 9151.78   | 12%      |
| Servest                                                                              | 7306.83  | 2445.66  | 12270.80  | 11%      |
| Acorn                                                                                | 4895.05  | 8402.47  | 145631.07 | 7%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-4acc5763-2ea3-4945-a406-2eed5a008169) |          |          |           |          |

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
| 21561.54 | 3242.97 | 26309.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20394.49 | 21269.95 | 22144.51 | 22644.89 | 24168.46 | 24737.85 | 25493.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4895.05  | 8402.47 | 145631.07 |     |

| **Stat**    | 10    | 25     | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------ | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 60.00 | 300.10 | 3521.40 | 6895.22 | 9543.91 | 10782.19 | 41218.76 |
| **Latency** | 5ms   | 7ms    | 15ms    | 22ms    | 26ms    | 28ms     | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33083.08 | 6913.28 | 40625.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28320.25 | 30320.82 | 35928.50 | 36592.65 | 37206.72 | 37654.71 | 38722.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26669.43 | 4199.78 | 33105.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24412.81 | 25909.97 | 28007.97 | 28692.95 | 29153.49 | 29562.58 | 30855.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60509.37 | 12339.93 | 87635.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47304.91 | 51401.70 | 56600.28 | 74273.36 | 77310.34 | 78317.48 | 81909.05 |
| **Latency** | 469µs    | 610µs    | 724µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54568.13 | 10772.61 | 60980.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34563.70 | 57817.63 | 58715.37 | 59307.41 | 59688.45 | 59899.77 | 60259.39 |
| **Latency** | 749µs    | 821µs    | 854µs    | 885µs    | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 19144.62 | 5672.01 | 158730.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16624.20 | 18781.86 | 19952.27 | 20744.48 | 21183.45 | 21805.32 | 23028.08 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57996.69 | 16209.78 | 79222.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31655.19 | 45455.19 | 60391.70 | 73729.06 | 76812.60 | 77499.15 | 78430.13 |
| **Latency** | 536µs    | 618µs    | 693µs    | 932µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63980.40 | 14667.32 | 73141.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30226.68 | 67952.83 | 70329.74 | 71182.43 | 71761.92 | 72100.53 | 72615.67 |
| **Latency** | 627µs    | 673µs    | 704µs    | 742µs    | 853µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22592.39 | 4530.91 | 28831.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20327.97 | 21006.09 | 24822.18 | 25381.85 | 25718.62 | 26346.28 | 27320.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7919.10  | 1391.62 | 9151.78 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5605.80 | 8015.66 | 8574.29 | 8714.27 | 8787.30 | 8808.23 | 8843.19 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 12ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11759.11 | 2503.77 | 15871.09 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8316.05 | 11704.73 | 12705.75 | 13143.99 | 13302.85 | 13515.76 | 13972.44 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65088.80 | 18359.52 | 78617.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28804.73 | 58437.65 | 75601.07 | 76862.98 | 77453.54 | 77739.98 | 78203.46 |
| **Latency** | 552µs    | 611µs    | 663µs    | 716µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 30779.71 | 10575.56 | 39241.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14671.21 | 15078.01 | 37016.81 | 38120.61 | 38415.52 | 38509.01 | 38688.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68440.68 | 13313.51 | 75969.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45508.93 | 71870.51 | 73438.98 | 74138.84 | 74749.63 | 75081.86 | 75512.38 |
| **Latency** | 603µs    | 642µs    | 676µs    | 705µs    | 777µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65662.20 | 16035.74 | 76303.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29590.73 | 69184.59 | 73668.27 | 74400.59 | 74829.49 | 75115.99 | 75681.47 |
| **Latency** | 601µs    | 641µs    | 675µs    | 713µs    | 852µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40686.88 | 8200.80 | 48617.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28805.01 | 38112.22 | 44912.30 | 45888.83 | 46412.15 | 46666.97 | 47302.95 |
| **Latency** | 985µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59069.04 | 14142.25 | 85863.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41122.71 | 43900.80 | 60578.34 | 70912.29 | 78212.03 | 81064.36 | 84702.74 |
| **Latency** | 499µs    | 595µs    | 726µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26275.82 | 4642.27 | 31507.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23739.69 | 26123.04 | 27421.16 | 28635.90 | 29072.40 | 29458.39 | 30221.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67120.84 | 11032.23 | 73262.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61546.71 | 69613.40 | 70825.73 | 71401.32 | 71812.40 | 72036.70 | 72463.01 |
| **Latency** | 624µs    | 665µs    | 699µs    | 734µs    | 805µs    | 903µs    | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66888.18 | 19492.67 | 82231.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30369.56 | 54221.17 | 78825.48 | 80113.08 | 80816.27 | 81135.97 | 81664.75 |
| **Latency** | 505µs    | 582µs    | 642µs    | 697µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39785.79 | 6390.69 | 43850.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39324.51 | 40740.88 | 41225.70 | 41960.99 | 42225.06 | 42404.03 | 42803.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26096.70 | 5132.17 | 33098.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23905.35 | 25602.18 | 27794.42 | 28536.36 | 29046.88 | 29601.59 | 30633.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 12016.03 | 4690.76 | 112090.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10508.56 | 11632.35 | 12411.95 | 12733.79 | 12935.87 | 13473.63 | 14849.94 |
| **Latency** | 3ms      | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 9ms      |

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
| 56886.41 | 5421.26 | 60180.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56150.20 | 57413.20 | 58026.80 | 58523.32 | 59060.22 | 59289.26 | 59613.02 |
| **Latency** | 762µs    | 832µs    | 867µs    | 893µs    | 930µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29485.21 | 5273.84 | 84366.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26412.16 | 28318.54 | 31219.08 | 32117.13 | 32725.11 | 33219.60 | 34315.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60368.13 | 10770.90 | 88686.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47324.56 | 51602.01 | 58716.38 | 69301.66 | 75737.77 | 79016.34 | 84035.22 |
| **Latency** | 463µs    | 591µs    | 745µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7306.83  | 2445.66 | 12270.80 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4076.89 | 6266.17 | 8226.23 | 8747.49 | 9331.26 | 9723.72 | 11875.99 |
| **Latency** | 3ms     | 5ms     | 6ms     | 8ms     | 10ms    | 14ms    | 18ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65687.45 | 18670.98 | 79361.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29092.46 | 62475.29 | 76105.63 | 77229.92 | 77762.01 | 78095.82 | 78530.14 |
| **Latency** | 555µs    | 610µs    | 656µs    | 711µs    | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2023-10-26T01:23:25.599Z</p>
