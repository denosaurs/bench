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
| Vixeny (Deno)                                                                        | 70646.56 | 15547.36 | 79884.45  | 100%     |
| Fast                                                                                 | 68999.65 | 15579.93 | 79241.78  | 98%      |
| NHttp                                                                                | 68993.81 | 16551.07 | 79199.62  | 98%      |
| Hyper Express                                                                        | 67023.82 | 17955.70 | 84754.86  | 95%      |
| Deno                                                                                 | 66692.95 | 18923.06 | 81831.16  | 94%      |
| Fastro                                                                               | 65450.92 | 14900.17 | 75355.59  | 93%      |
| Bun                                                                                  | 64886.19 | 15004.37 | 89145.64  | 92%      |
| Stric                                                                                | 64517.74 | 14615.72 | 86930.83  | 91%      |
| Deso                                                                                 | 63322.36 | 13419.54 | 71669.25  | 90%      |
| Hono                                                                                 | 58657.75 | 19321.13 | 74450.23  | 83%      |
| Cheetah                                                                              | 55397.72 | 9156.55  | 62562.51  | 78%      |
| Reno                                                                                 | 54765.38 | 7132.72  | 58933.53  | 78%      |
| Node                                                                                 | 40646.46 | 6060.70  | 43977.33  | 58%      |
| http                                                                                 | 38833.01 | 10132.24 | 53648.07  | 55%      |
| Alosaur                                                                              | 32012.71 | 6995.69  | 48537.30  | 45%      |
| Router                                                                               | 29279.97 | 4491.98  | 34963.18  | 41%      |
| Fastify                                                                              | 26881.07 | 11576.04 | 38794.56  | 38%      |
| Aqua                                                                                 | 26838.56 | 4335.70  | 33052.11  | 38%      |
| Little                                                                               | 24838.74 | 4109.69  | 30140.67  | 35%      |
| Oak                                                                                  | 24363.92 | 4395.36  | 29662.29  | 34%      |
| Dinatra                                                                              | 22659.20 | 4535.55  | 29173.35  | 32%      |
| Abc                                                                                  | 21844.71 | 2698.80  | 26000.14  | 31%      |
| Danet (Oak)                                                                          | 18631.81 | 3307.85  | 23324.24  | 26%      |
| Express (Deno)                                                                       | 12071.36 | 2410.68  | 16124.77  | 17%      |
| Opine                                                                                | 11741.10 | 1944.80  | 15792.88  | 17%      |
| Express                                                                              | 7844.25  | 1423.59  | 12945.66  | 11%      |
| Servest                                                                              | 6915.76  | 2163.58  | 11044.73  | 10%      |
| Acorn                                                                                | 5532.18  | 10859.30 | 151515.15 | 8%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-de0bce7a-784b-412f-9a17-461a5980d779) |          |          |           |          |

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
| 21844.71 | 2698.80 | 26000.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20533.17 | 21336.04 | 22165.97 | 22921.21 | 24273.57 | 24828.52 | 25436.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 5532.18  | 10859.30 | 151515.15 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 67.53 | 98.58 | 3605.30 | 7122.77 | 9856.25 | 11788.33 | 67294.75 |
| **Latency** | 5ms   | 7ms   | 15ms    | 21ms    | 25ms    | 27ms     | 39ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32012.71 | 6995.69 | 48537.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26459.42 | 29618.83 | 34808.55 | 35706.00 | 36312.14 | 36822.33 | 38194.54 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26838.56 | 4335.70 | 33052.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24716.47 | 26052.38 | 28301.60 | 28948.32 | 29454.98 | 30096.33 | 31637.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64886.19 | 15004.37 | 89145.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45005.89 | 50612.70 | 71412.20 | 78785.15 | 80535.82 | 81300.88 | 83277.38 |
| **Latency** | 459µs    | 570µs    | 691µs    | 950µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55397.72 | 9156.55 | 62562.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47669.37 | 57427.38 | 58413.83 | 59111.60 | 59602.78 | 59834.50 | 60136.57 |
| **Latency** | 749µs    | 822µs    | 854µs    | 883µs    | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18631.81 | 3307.85 | 23324.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17023.78 | 18402.34 | 19606.36 | 20149.26 | 20489.41 | 21061.03 | 21966.06 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66692.95 | 18923.06 | 81831.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31229.20 | 59673.46 | 77703.64 | 79006.50 | 79914.27 | 80301.90 | 80926.43 |
| **Latency** | 497µs    | 557µs    | 670µs    | 709µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63322.36 | 13419.54 | 71669.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37158.59 | 67113.28 | 69242.71 | 69873.05 | 70650.01 | 70902.53 | 71155.60 |
| **Latency** | 635µs    | 681µs    | 712µs    | 748µs    | 896µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22659.20 | 4535.55 | 29173.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20288.82 | 21138.72 | 24140.00 | 25598.50 | 25973.40 | 26482.23 | 27963.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7844.25  | 1423.59 | 12945.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5616.83 | 7777.05 | 8539.08 | 8635.20 | 8700.76 | 8724.30 | 8775.71 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12071.36 | 2410.68 | 16124.77 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9434.24 | 12042.43 | 13022.21 | 13253.37 | 13350.52 | 13537.55 | 14264.06 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68999.65 | 15579.93 | 79241.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35900.62 | 73212.99 | 76004.36 | 76830.18 | 77516.84 | 77843.43 | 78615.99 |
| **Latency** | 583µs    | 617µs    | 653µs    | 693µs    | 784µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 26881.07 | 11576.04 | 38794.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14284.10 | 14683.38 | 35926.86 | 37825.24 | 38281.06 | 38414.50 | 38561.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65450.92 | 14900.17 | 75355.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30887.65 | 69755.84 | 72263.15 | 73255.50 | 74082.05 | 74473.56 | 74948.70 |
| **Latency** | 610µs    | 653µs    | 685µs    | 716µs    | 870µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58657.75 | 19321.13 | 74450.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27251.99 | 30826.01 | 71217.65 | 72203.46 | 73057.83 | 73345.32 | 73836.76 |
| **Latency** | 616µs    | 657µs    | 693µs    | 755µs    | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38833.01 | 10132.24 | 53648.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22118.75 | 37337.70 | 44235.71 | 45651.42 | 46323.06 | 46670.47 | 47330.82 |
| **Latency** | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67023.82 | 17955.70 | 84754.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40839.93 | 41876.11 | 79006.08 | 80822.14 | 81737.40 | 82114.46 | 82821.29 |
| **Latency** | 466µs    | 532µs    | 678µs    | 719µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24838.74 | 4109.69 | 30140.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22844.04 | 24522.39 | 26030.18 | 26869.77 | 27262.04 | 27728.94 | 28577.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

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
| 68993.81 | 16551.07 | 79199.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30563.55 | 73448.21 | 76871.31 | 77705.34 | 78215.52 | 78483.27 | 78914.95 |
| **Latency** | 570µs    | 605µs    | 646µs    | 694µs    | 771µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40646.46 | 6060.70 | 43977.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40641.04 | 41443.45 | 42044.08 | 42578.76 | 42957.06 | 43205.55 | 43602.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24363.92 | 4395.36 | 29662.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22404.22 | 23878.92 | 25715.97 | 26444.12 | 27035.01 | 27566.73 | 28849.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11741.10 | 1944.80 | 15792.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10627.62 | 11506.46 | 12322.84 | 12586.51 | 12783.80 | 13270.39 | 14569.01 |
| **Latency** | 3ms      | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 8ms      |

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
| 54765.38 | 7132.72 | 58933.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51861.75 | 56233.86 | 56817.55 | 57430.95 | 57968.92 | 58144.13 | 58462.34 |
| **Latency** | 782µs    | 846µs    | 885µs    | 909µs    | 959µs    | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29279.97 | 4491.98 | 34963.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25921.08 | 28311.02 | 30982.09 | 31698.95 | 32171.17 | 32552.94 | 33540.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64517.74 | 14615.72 | 86930.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45540.66 | 49812.03 | 71186.88 | 78408.43 | 79819.08 | 80629.73 | 81815.91 |
| **Latency** | 465µs    | 582µs    | 694µs    | 997µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6915.76  | 2163.58 | 11044.73 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5024.46 | 5915.32 | 7651.26 | 8163.01 | 8799.60 | 9068.59 | 10777.64 |
| **Latency** | 4ms     | 5ms     | 7ms     | 8ms     | 10ms    | 14ms    | 18ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 70646.56 | 15547.36 | 79884.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34660.44 | 74622.28 | 77359.47 | 78141.34 | 78633.05 | 78930.70 | 79400.71 |
| **Latency** | 568µs    | 603µs    | 641µs    | 689µs    | 742µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-09-01T19:58:53.317Z</p>
