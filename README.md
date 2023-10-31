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
| NHttp                                                                                | 52677.00 | 13302.41 | 91850.42 | 100%     |
| Vixeny (Deno)                                                                        | 51491.05 | 14143.33 | 64014.76 | 98%      |
| Deso                                                                                 | 48045.88 | 11557.35 | 58491.03 | 91%      |
| Hyper Express                                                                        | 48013.02 | 13800.78 | 66159.87 | 91%      |
| Stric                                                                                | 47503.74 | 10964.12 | 71537.82 | 90%      |
| Fast                                                                                 | 47409.30 | 12397.67 | 62550.81 | 90%      |
| Bun                                                                                  | 47082.66 | 11590.23 | 68481.76 | 89%      |
| Megalo                                                                               | 46370.75 | 11311.79 | 57971.83 | 88%      |
| Hono                                                                                 | 46236.33 | 11163.21 | 59094.18 | 88%      |
| Fastro                                                                               | 45612.77 | 12613.88 | 58733.74 | 87%      |
| Deno                                                                                 | 44005.55 | 13604.38 | 65013.39 | 84%      |
| Cheetah                                                                              | 43806.33 | 7113.77  | 49528.43 | 83%      |
| Reno                                                                                 | 41052.92 | 6642.19  | 48676.43 | 78%      |
| http                                                                                 | 30387.50 | 7436.21  | 39696.82 | 58%      |
| Node                                                                                 | 29186.18 | 5988.28  | 35745.69 | 55%      |
| Alosaur                                                                              | 25591.72 | 5926.19  | 61409.34 | 49%      |
| Aqua                                                                                 | 21707.21 | 4308.01  | 38231.75 | 41%      |
| Router                                                                               | 21557.77 | 4407.51  | 28512.22 | 41%      |
| Fastify                                                                              | 21288.07 | 9289.70  | 31159.74 | 40%      |
| Little                                                                               | 20187.31 | 3979.76  | 27031.46 | 38%      |
| Oak                                                                                  | 19712.43 | 4425.20  | 47167.59 | 37%      |
| Dinatra                                                                              | 16347.30 | 3886.99  | 36213.51 | 31%      |
| Abc                                                                                  | 15845.99 | 3008.13  | 20138.59 | 30%      |
| Danet (Oak)                                                                          | 13616.42 | 3331.86  | 38344.70 | 26%      |
| Opine                                                                                | 9131.34  | 2717.42  | 59508.00 | 17%      |
| Express (Deno)                                                                       | 8591.64  | 1986.63  | 12953.46 | 16%      |
| Acorn                                                                                | 6396.94  | 10159.66 | 99006.63 | 12%      |
| Servest                                                                              | 5558.98  | 1927.23  | 9706.58  | 11%      |
| Express                                                                              | 5092.06  | 1338.00  | 10068.35 | 10%      |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-aab8fc7c-8330-4e40-ab94-7420cf0fc35f) |          |          |          |          |

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
| 15845.99 | 3008.13 | 20138.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13351.59 | 15256.04 | 15894.64 | 17605.67 | 19247.42 | 19525.71 | 19902.35 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 6396.94  | 10159.66 | 99006.63 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 44.77 | 61.07 | 5170.64 | 7629.06 | 13422.43 | 22559.36 | 48292.18 |
| **Latency** | 7ms   | 8ms   | 20ms    | 27ms    | 31ms     | 34ms     | 41ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25591.72 | 5926.19 | 61409.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19909.84 | 22978.81 | 28005.84 | 28700.53 | 29320.94 | 29783.41 | 30907.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21707.21 | 4308.01 | 38231.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17371.86 | 20444.03 | 23366.97 | 24086.47 | 24792.08 | 25273.31 | 26251.97 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47082.66 | 11590.23 | 68481.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31232.98 | 38200.22 | 47029.38 | 57703.53 | 61307.71 | 62912.32 | 65930.71 |
| **Latency** | 599µs    | 745µs    | 897µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43806.33 | 7113.77 | 49528.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36840.30 | 45220.72 | 46142.37 | 46729.83 | 47314.86 | 47762.38 | 48583.23 |
| **Latency** | 946µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13616.42 | 3331.86 | 38344.70 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9092.30 | 12393.84 | 14239.86 | 15684.69 | 16633.95 | 17728.47 | 19259.43 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44005.55 | 13604.38 | 65013.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24016.38 | 32450.68 | 47408.28 | 55809.41 | 59603.85 | 60860.17 | 62446.97 |
| **Latency** | 700µs    | 796µs    | 884µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48045.88 | 11557.35 | 58491.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23804.28 | 48093.98 | 53762.68 | 54632.53 | 55282.69 | 55624.79 | 56524.06 |
| **Latency** | 812µs    | 874µs    | 921µs    | 981µs    | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16347.30 | 3886.99 | 36213.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11965.77 | 14815.82 | 17157.84 | 18802.75 | 20231.99 | 20684.43 | 21367.60 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5092.06  | 1338.00 | 10068.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3003.35 | 4649.18 | 5616.56 | 5951.15 | 6158.61 | 6288.46 | 6444.46 |
| **Latency** | 8ms     | 8ms     | 8ms     | 9ms     | 13ms    | 16ms    | 21ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8591.64  | 1986.63 | 12953.46 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5773.18 | 8210.53 | 9341.06 | 9787.27 | 10124.60 | 10434.79 | 10675.41 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 7ms      | 8ms      | 15ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47409.30 | 12397.67 | 62550.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24202.10 | 41020.81 | 52430.24 | 56912.24 | 58715.66 | 59674.50 | 60868.42 |
| **Latency** | 753µs    | 809µs    | 874µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21288.07 | 9289.70 | 31159.74 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9938.83 | 10412.26 | 27767.68 | 29181.04 | 29538.02 | 29771.37 | 30179.60 |
| **Latency** | 1ms     | 1ms      | 1ms      | 2ms      | 4ms      | 4ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45612.77 | 12613.88 | 58733.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22406.21 | 38611.12 | 51623.09 | 54961.31 | 56168.33 | 56646.30 | 57436.54 |
| **Latency** | 789µs    | 849µs    | 920µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46236.33 | 11163.21 | 59094.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24202.97 | 43228.72 | 50742.28 | 53912.24 | 55582.25 | 56253.03 | 57292.03 |
| **Latency** | 791µs    | 850µs    | 931µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30387.50 | 7436.21 | 39696.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19519.27 | 27172.75 | 33591.05 | 35505.95 | 36354.43 | 36702.11 | 37621.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48013.02 | 13800.78 | 66159.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28977.02 | 32518.62 | 52578.23 | 60242.67 | 63046.62 | 64005.61 | 65410.07 |
| **Latency** | 609µs    | 739µs    | 871µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20187.31 | 3979.76 | 27031.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17014.62 | 19361.28 | 21179.02 | 22357.44 | 23129.70 | 23848.63 | 24930.31 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46370.75 | 11311.79 | 57971.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23052.10 | 44803.04 | 51207.06 | 53534.68 | 54941.63 | 55528.81 | 56340.73 |
| **Latency** | 811µs    | 875µs    | 937µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52677.00 | 13302.41 | 91850.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25177.49 | 48298.22 | 58536.16 | 61506.62 | 63441.19 | 64325.58 | 65941.01 |
| **Latency** | 696µs    | 753µs    | 818µs    | 921µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29186.18 | 5988.28 | 35745.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23481.69 | 29346.02 | 31142.61 | 32221.53 | 32746.11 | 33182.44 | 34037.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19712.43 | 4425.20 | 47167.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15803.44 | 18802.36 | 21218.53 | 22092.92 | 22628.28 | 23185.07 | 24508.54 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9131.34  | 2717.42 | 59508.00 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6652.22 | 7859.08 | 9162.91 | 10122.21 | 12028.29 | 12812.35 | 14230.21 |
| **Latency** | 3ms     | 5ms     | 5ms     | 6ms      | 6ms      | 7ms      | 11ms     |

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
| 41052.92 | 6642.19 | 48676.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32918.14 | 40206.78 | 43232.36 | 44922.77 | 46208.53 | 46935.61 | 47655.22 |
| **Latency** | 978µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21557.77 | 4407.51 | 28512.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16468.45 | 20182.98 | 23104.13 | 24285.70 | 25130.87 | 25653.06 | 26720.68 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47503.74 | 10964.12 | 71537.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33918.27 | 39156.29 | 46707.87 | 56902.55 | 62506.79 | 64836.28 | 66510.53 |
| **Latency** | 590µs    | 734µs    | 895µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5558.98  | 1927.23 | 9706.58 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3125.53 | 4534.50 | 6252.90 | 6868.27 | 7223.41 | 7412.52 | 8239.77 |
| **Latency** | 5ms     | 6ms     | 8ms     | 10ms    | 14ms    | 18ms    | 25ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51491.05 | 14143.33 | 64014.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23843.67 | 44414.16 | 59283.02 | 60873.27 | 61722.15 | 62139.28 | 62865.88 |
| **Latency** | 712µs    | 773µs    | 841µs    | 902µs    | 1ms      | 2ms      | 2ms      |

---

<p align="center">Generated 2023-10-31T01:25:59.166Z</p>
