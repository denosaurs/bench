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
| Vixeny (Deno)                                                                        | 55629.31 | 12351.88 | 63773.24  | 100%     |
| NHttp                                                                                | 53700.98 | 15396.48 | 66673.84  | 97%      |
| Hono                                                                                 | 53605.66 | 10197.63 | 60227.63  | 96%      |
| Fast                                                                                 | 51615.47 | 13457.73 | 62845.43  | 93%      |
| Fastro                                                                               | 49907.09 | 12596.12 | 60043.32  | 90%      |
| Deso                                                                                 | 48900.15 | 11503.81 | 57195.66  | 88%      |
| Megalo                                                                               | 48048.94 | 12597.62 | 56972.10  | 86%      |
| Stric                                                                                | 47961.05 | 9060.88  | 70247.80  | 86%      |
| Bun                                                                                  | 46755.20 | 11582.98 | 71923.88  | 84%      |
| Hyper Express                                                                        | 45965.46 | 11585.07 | 68138.23  | 83%      |
| Deno                                                                                 | 44345.67 | 13874.81 | 64348.15  | 80%      |
| Cheetah                                                                              | 44009.79 | 6783.75  | 49456.07  | 79%      |
| Reno                                                                                 | 42202.50 | 8217.62  | 47853.69  | 76%      |
| http                                                                                 | 32574.93 | 7066.74  | 66728.50  | 59%      |
| Node                                                                                 | 29701.42 | 5507.09  | 33387.15  | 53%      |
| Fastify                                                                              | 27469.90 | 5678.60  | 32533.66  | 49%      |
| Alosaur                                                                              | 25406.27 | 6334.15  | 65540.62  | 46%      |
| Router                                                                               | 23122.08 | 4509.14  | 28957.29  | 42%      |
| Aqua                                                                                 | 21563.09 | 4811.58  | 27985.11  | 39%      |
| Little                                                                               | 20914.16 | 4286.31  | 27139.36  | 38%      |
| Oak                                                                                  | 20153.24 | 4421.69  | 56853.72  | 36%      |
| Dinatra                                                                              | 17241.73 | 4496.98  | 38886.60  | 31%      |
| Abc                                                                                  | 15792.89 | 3424.06  | 30335.45  | 28%      |
| Danet (Oak)                                                                          | 14530.10 | 3239.08  | 21125.87  | 26%      |
| Opine                                                                                | 9620.96  | 3723.31  | 70488.49  | 17%      |
| Express (Deno)                                                                       | 8933.72  | 2071.47  | 12047.62  | 16%      |
| Acorn                                                                                | 6882.00  | 10766.22 | 114279.18 | 12%      |
| Servest                                                                              | 5765.68  | 1930.09  | 9406.72   | 10%      |
| Express                                                                              | 5467.52  | 1293.48  | 10272.47  | 10%      |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-89336a05-7b43-4f47-bb1a-ae4bce295f34) |          |          |           |          |

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
| 15792.89 | 3424.06 | 30335.45 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9821.87 | 14796.75 | 16438.58 | 18425.74 | 19542.79 | 19698.70 | 20032.52 |
| **Latency** | 2ms     | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 6882.00  | 10766.22 | 114279.18 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 42.85 | 61.84 | 5491.35 | 8199.36 | 16015.66 | 23439.48 | 53024.85 |
| **Latency** | 7ms   | 8ms   | 19ms    | 26ms    | 30ms     | 33ms     | 38ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25406.27 | 6334.15 | 65540.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16979.69 | 22737.26 | 28016.64 | 29110.12 | 29902.51 | 30343.19 | 31794.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21563.09 | 4811.58 | 27985.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16553.03 | 20715.54 | 23408.27 | 24149.93 | 24754.34 | 25327.44 | 26964.58 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46755.20 | 11582.98 | 71923.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33910.62 | 39119.92 | 45951.46 | 56319.14 | 62024.80 | 64445.74 | 67854.50 |
| **Latency** | 584µs    | 732µs    | 920µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44009.79 | 6783.75 | 49456.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42043.13 | 45286.56 | 46032.11 | 46450.86 | 46861.64 | 47127.61 | 47635.66 |
| **Latency** | 955µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14530.10 | 3239.08 | 21125.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10122.28 | 13939.41 | 15469.04 | 16212.50 | 17093.40 | 18316.01 | 19878.54 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44345.67 | 13874.81 | 64348.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23625.24 | 32150.64 | 46922.75 | 57336.40 | 60714.46 | 62011.16 | 63571.82 |
| **Latency** | 686µs    | 795µs    | 862µs    | 1ms      | 2ms      | 2ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48900.15 | 11503.81 | 57195.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23264.70 | 50702.06 | 54476.30 | 55305.82 | 56019.65 | 56242.22 | 56661.80 |
| **Latency** | 806µs    | 861µs    | 909µs    | 960µs    | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17241.73 | 4496.98 | 38886.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11203.92 | 15563.27 | 19579.38 | 20226.68 | 20596.54 | 21195.75 | 22255.99 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5467.52  | 1293.48 | 10272.47 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3381.58 | 5416.08 | 6054.77 | 6189.41 | 6257.07 | 6290.72 | 6337.68 |
| **Latency** | 7ms     | 8ms     | 8ms     | 8ms     | 11ms    | 14ms    | 19ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8933.72  | 2071.47 | 12047.62 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6170.61 | 8537.54 | 9803.55 | 10197.31 | 10336.81 | 10530.54 | 10868.59 |
| **Latency** | 4ms     | 4ms     | 4ms     | 5ms      | 6ms      | 8ms      | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51615.47 | 13457.73 | 62845.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23623.22 | 47869.72 | 58141.92 | 60735.24 | 61647.17 | 62032.32 | 62426.67 |
| **Latency** | 730µs    | 778µs    | 843µs    | 910µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27469.90 | 5678.60 | 32533.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23284.17 | 28344.92 | 29211.30 | 29975.45 | 30161.67 | 30256.18 | 30412.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49907.09 | 12596.12 | 60043.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22682.00 | 51141.13 | 56129.13 | 57118.13 | 57968.93 | 58429.73 | 59085.93 |
| **Latency** | 778µs    | 834µs    | 871µs    | 932µs    | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53605.66 | 10197.63 | 60227.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38882.03 | 55027.65 | 57804.12 | 58639.21 | 59209.46 | 59526.27 | 59950.09 |
| **Latency** | 761µs    | 813µs    | 856µs    | 906µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32574.93 | 7066.74 | 66728.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26934.07 | 30704.27 | 35282.73 | 36341.24 | 36916.09 | 37249.93 | 37990.25 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45965.46 | 11585.07 | 68138.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31024.16 | 34353.71 | 47207.72 | 55876.76 | 61555.83 | 63460.52 | 66649.57 |
| **Latency** | 626µs    | 752µs    | 912µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20914.16 | 4286.31 | 27139.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17754.92 | 20502.02 | 22213.71 | 23116.91 | 23761.08 | 24200.44 | 25532.20 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48048.94 | 12597.62 | 56972.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22115.87 | 50757.14 | 54124.89 | 54882.08 | 55573.67 | 55955.33 | 56447.74 |
| **Latency** | 815µs    | 875µs    | 916µs    | 960µs    | 1ms      | 2ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53700.98 | 15396.48 | 66673.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24031.40 | 45732.83 | 62234.02 | 64425.63 | 65185.90 | 65558.72 | 66208.99 |
| **Latency** | 631µs    | 730µs    | 815µs    | 866µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29701.42 | 5507.09 | 33387.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28531.51 | 30544.60 | 31100.01 | 31812.85 | 32036.53 | 32162.20 | 32368.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20153.24 | 4421.69 | 56853.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16724.73 | 19329.61 | 21645.43 | 22226.85 | 22765.68 | 23238.78 | 24839.71 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9620.96  | 3723.31 | 70488.49 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7121.85 | 8794.22 | 9654.34 | 10246.12 | 11412.15 | 12278.09 | 15110.43 |
| **Latency** | 2ms     | 4ms     | 5ms     | 5ms      | 6ms      | 7ms      | 11ms     |

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
| 42202.50 | 8217.62 | 47853.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26005.38 | 44220.41 | 45315.10 | 46098.34 | 46669.15 | 46870.30 | 47195.66 |
| **Latency** | 968µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23122.08 | 4509.14 | 28957.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19106.13 | 22377.91 | 24539.72 | 25436.67 | 26196.44 | 26739.14 | 27742.44 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47961.05 | 9060.88 | 70247.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37370.70 | 40962.24 | 46581.69 | 54737.39 | 61257.33 | 63787.46 | 67201.37 |
| **Latency** | 583µs    | 735µs    | 925µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5765.68  | 1930.09 | 9406.72 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3331.65 | 4767.07 | 6451.66 | 7051.18 | 7410.83 | 7609.83 | 8118.21 |
| **Latency** | 4ms     | 6ms     | 8ms     | 10ms    | 13ms    | 18ms    | 24ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55629.31 | 12351.88 | 63773.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31587.88 | 58385.42 | 60961.20 | 61812.48 | 62335.77 | 62731.60 | 63313.42 |
| **Latency** | 724µs    | 771µs    | 816µs    | 857µs    | 974µs    | 1ms      | 2ms      |

---

<p align="center">Generated 2023-11-10T01:26:38.549Z</p>
