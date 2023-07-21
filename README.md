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
| Vixeny (Deno)                                                                        | 64675.75 | 14470.41 | 73604.92 | 100%     |
| Deno                                                                                 | 63676.01 | 15679.21 | 75539.50 | 98%      |
| NHttp                                                                                | 63096.19 | 12953.00 | 71437.55 | 98%      |
| Bun                                                                                  | 61624.02 | 10367.85 | 81234.17 | 95%      |
| Hono                                                                                 | 61370.45 | 12837.97 | 70033.59 | 95%      |
| Fast                                                                                 | 61346.05 | 15881.39 | 72161.70 | 95%      |
| Stric                                                                                | 60373.06 | 10458.98 | 79383.98 | 93%      |
| Hyper Express                                                                        | 59223.42 | 16380.64 | 77517.42 | 92%      |
| Deso                                                                                 | 55839.16 | 13468.32 | 65235.95 | 86%      |
| Fastro                                                                               | 52612.02 | 14030.09 | 64728.81 | 81%      |
| Reno                                                                                 | 47637.52 | 9303.53  | 53504.06 | 74%      |
| Cheetah                                                                              | 46025.24 | 5024.93  | 49357.58 | 71%      |
| http                                                                                 | 36483.70 | 8496.48  | 44419.48 | 56%      |
| Node                                                                                 | 35903.50 | 5488.65  | 38909.18 | 56%      |
| Peko                                                                                 | 32248.11 | 6756.15  | 81464.74 | 50%      |
| Fastify                                                                              | 30920.49 | 5576.18  | 33528.32 | 48%      |
| Alosaur                                                                              | 29202.81 | 6832.20  | 36316.88 | 45%      |
| Router                                                                               | 25994.37 | 4404.40  | 31715.55 | 40%      |
| Aqua                                                                                 | 22899.64 | 3198.27  | 27705.28 | 35%      |
| Little                                                                               | 22168.08 | 4627.16  | 28487.54 | 34%      |
| Oak                                                                                  | 21130.22 | 3920.83  | 26845.44 | 33%      |
| Dinatra                                                                              | 19754.77 | 4413.69  | 40962.86 | 31%      |
| Abc                                                                                  | 16339.69 | 4238.51  | 22109.78 | 25%      |
| Danet (Oak)                                                                          | 16275.42 | 3152.04  | 22307.93 | 25%      |
| Express (Deno)                                                                       | 7387.72  | 1416.21  | 9648.59  | 11%      |
| Express                                                                              | 6814.86  | 1329.17  | 9311.15  | 11%      |
| Acorn                                                                                | 5833.59  | 8101.14  | 95954.82 | 9%       |
| Servest                                                                              | 5781.58  | 1735.47  | 8916.51  | 9%       |
| Opine                                                                                | 4857.60  | 2266.46  | 11545.15 | 8%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-9257069c-04fc-43a3-8559-375ab8da8331) |          |          |          |          |

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
| 16339.69 | 4238.51 | 22109.78 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9449.06 | 15318.61 | 17965.43 | 19274.27 | 20039.12 | 21201.81 | 21717.92 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5833.59  | 8101.14 | 95954.82 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 49.02 | 67.00 | 5623.61 | 8007.31 | 12586.02 | 15651.15 | 41003.47 |
| **Latency** | 7ms   | 8ms   | 18ms    | 24ms    | 28ms     | 31ms     | 34ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29202.81 | 6832.20 | 36316.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24093.00 | 26763.67 | 32097.21 | 32827.90 | 33583.21 | 34046.68 | 35443.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22899.64 | 3198.27 | 27705.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21469.86 | 22119.60 | 23808.62 | 24485.16 | 24969.72 | 25303.09 | 26300.59 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61624.02 | 10367.85 | 81234.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48069.83 | 51701.69 | 63413.48 | 71895.81 | 73339.08 | 74123.92 | 75608.52 |
| **Latency** | 494µs    | 619µs    | 756µs    | 892µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46025.24 | 5024.93 | 49357.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45313.11 | 46305.99 | 47050.22 | 47663.61 | 48351.87 | 48603.05 | 49018.31 |
| **Latency** | 963µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16275.42 | 3152.04 | 22307.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13317.45 | 15812.46 | 17249.24 | 17767.51 | 18365.56 | 19329.16 | 21236.26 |
| **Latency** | 1ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63676.01 | 15679.21 | 75539.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30145.83 | 65508.34 | 71617.00 | 72943.78 | 73729.30 | 74101.76 | 74852.08 |
| **Latency** | 540µs    | 593µs    | 732µs    | 769µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55839.16 | 13468.32 | 65235.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26363.94 | 58909.08 | 62396.39 | 63344.82 | 63983.94 | 64337.35 | 64778.45 |
| **Latency** | 701µs    | 747µs    | 789µs    | 846µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19754.77 | 4413.69 | 40962.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16336.20 | 17333.73 | 21482.44 | 22940.47 | 23329.37 | 23527.08 | 24914.34 |
| **Latency** | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6814.86  | 1329.17 | 9311.15 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4684.83 | 6906.61 | 7420.74 | 7549.86 | 7616.58 | 7641.93 | 7687.23 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7387.72  | 1416.21 | 9648.59 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5619.28 | 7102.80 | 8022.90 | 8129.54 | 8218.40 | 8524.14 | 8902.26 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61346.05 | 15881.39 | 72161.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27330.06 | 65152.89 | 69006.85 | 70088.38 | 70680.59 | 70956.66 | 71557.54 |
| **Latency** | 633µs    | 674µs    | 721µs    | 766µs    | 898µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30920.49 | 5576.18 | 33528.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30697.76 | 31811.28 | 32472.57 | 32934.07 | 33123.67 | 33221.75 | 33351.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52612.02 | 14030.09 | 64728.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28214.82 | 45392.39 | 60800.32 | 61501.51 | 61836.81 | 62010.25 | 62507.83 |
| **Latency** | 734µs    | 789µs    | 827µs    | 860µs    | 999µs    | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61370.45 | 12837.97 | 70033.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35414.00 | 64978.98 | 66683.10 | 67505.10 | 68101.21 | 68308.30 | 68642.00 |
| **Latency** | 662µs    | 707µs    | 742µs    | 781µs    | 920µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36483.70 | 8496.48 | 44419.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22579.16 | 33491.25 | 40886.05 | 41717.00 | 42263.59 | 42534.14 | 43210.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59223.42 | 16380.64 | 77517.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35560.20 | 37781.42 | 70113.66 | 72767.10 | 73887.56 | 74507.33 | 75287.77 |
| **Latency** | 511µs    | 596µs    | 750µs    | 855µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22168.08 | 4627.16 | 28487.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18013.06 | 21908.01 | 23708.46 | 24638.14 | 25018.90 | 25505.49 | 26381.38 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

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
| 63096.19 | 12953.00 | 71437.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37449.57 | 66724.83 | 68424.31 | 69082.39 | 69591.46 | 69903.68 | 70298.97 |
| **Latency** | 648µs    | 690µs    | 728µs    | 766µs    | 867µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35903.50 | 5488.65 | 38909.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35547.49 | 36637.59 | 37266.57 | 37749.30 | 38070.66 | 38216.66 | 38530.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21130.22 | 3920.83 | 26845.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18718.79 | 20390.79 | 22329.18 | 23070.34 | 23608.72 | 24166.04 | 25803.79 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4857.60  | 2266.46 | 11545.15 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1507.93 | 4109.26 | 4941.15 | 6105.60 | 6704.61 | 7348.05 | 11545.15 |
| **Latency** | 8ms     | 8ms     | 9ms     | 11ms    | 16ms    | 22ms    | 27ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32248.11 | 6756.15 | 81464.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27586.23 | 30528.00 | 34700.35 | 35685.05 | 36407.42 | 36844.99 | 37995.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47637.52 | 9303.53 | 53504.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27669.34 | 50323.08 | 51316.72 | 52073.21 | 52567.59 | 52844.17 | 53154.11 |
| **Latency** | 858µs    | 938µs    | 977µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25994.37 | 4404.40 | 31715.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23514.96 | 24934.76 | 27580.55 | 28173.42 | 28662.12 | 29012.07 | 30230.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60373.06 | 10458.98 | 79383.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47368.03 | 50416.30 | 59132.17 | 71167.35 | 72812.10 | 73407.37 | 75513.31 |
| **Latency** | 496µs    | 620µs    | 765µs    | 936µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5781.58  | 1735.47 | 8916.51 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4007.48 | 4986.48 | 6343.82 | 6841.85 | 7177.14 | 7305.09 | 8762.88 |
| **Latency** | 5ms     | 5ms     | 8ms     | 10ms    | 13ms    | 15ms    | 21ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64675.75 | 14470.41 | 73604.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28820.97 | 68290.01 | 70949.44 | 71881.00 | 72465.72 | 72720.13 | 73240.76 |
| **Latency** | 611µs    | 652µs    | 703µs    | 752µs    | 814µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-07-21T01:48:19.861Z</p>
