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
| Deno                                                                                 | 57369.34 | 15908.12 | 78525.03 | 100%     |
| NHttp                                                                                | 56635.18 | 13905.59 | 70697.80 | 99%      |
| Hyper Express                                                                        | 56304.87 | 15425.32 | 80217.68 | 98%      |
| Hono                                                                                 | 55742.40 | 12828.16 | 71407.55 | 97%      |
| Bun                                                                                  | 53779.69 | 10193.36 | 71774.31 | 94%      |
| Deso                                                                                 | 53272.99 | 11486.17 | 65920.63 | 93%      |
| Fastro                                                                               | 52962.61 | 13452.04 | 66825.19 | 92%      |
| Megalo                                                                               | 52307.22 | 11832.90 | 64384.49 | 91%      |
| Fast                                                                                 | 51382.82 | 16503.49 | 71370.47 | 90%      |
| Reno                                                                                 | 45565.74 | 6703.55  | 53918.09 | 79%      |
| Cheetah                                                                              | 38488.38 | 5143.62  | 46373.31 | 67%      |
| http                                                                                 | 32976.81 | 7785.25  | 44246.77 | 57%      |
| Node                                                                                 | 31057.55 | 5915.04  | 37969.61 | 54%      |
| Peko                                                                                 | 29436.12 | 6234.96  | 41687.00 | 51%      |
| Fastify                                                                              | 27948.64 | 5946.38  | 34134.30 | 49%      |
| Alosaur                                                                              | 27110.44 | 5922.49  | 82156.73 | 47%      |
| Router                                                                               | 23487.96 | 4812.60  | 41287.65 | 41%      |
| Little                                                                               | 20475.34 | 3836.94  | 27401.18 | 36%      |
| Aqua                                                                                 | 20295.53 | 3064.44  | 28058.00 | 35%      |
| Oak                                                                                  | 18384.20 | 3525.39  | 24765.20 | 32%      |
| Dinatra                                                                              | 17390.68 | 3462.75  | 33434.27 | 30%      |
| Abc                                                                                  | 15663.35 | 2860.89  | 21501.62 | 27%      |
| Opine                                                                                | 8699.65  | 2389.28  | 64545.68 | 15%      |
| Express (Deno)                                                                       | 8189.28  | 1845.25  | 13019.20 | 14%      |
| Acorn                                                                                | 6557.86  | 9099.62  | 73252.08 | 11%      |
| Express                                                                              | 5700.45  | 1463.51  | 11158.46 | 10%      |
| Servest                                                                              | 5307.89  | 1578.47  | 8904.60  | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-c5f6a45f-4456-4803-87e3-972176402c32) |          |          |          |          |

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
| 15663.35 | 2860.89 | 21501.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12122.37 | 15042.02 | 16323.73 | 17240.78 | 18475.01 | 19009.10 | 19710.19 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6557.86  | 9099.62 | 73252.08 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 54.81 | 82.50 | 4178.33 | 8508.43 | 18142.69 | 23049.95 | 45002.27 |
| **Latency** | 6ms   | 7ms   | 18ms    | 24ms    | 28ms     | 31ms     | 35ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27110.44 | 5922.49 | 82156.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21926.88 | 25310.65 | 28872.34 | 30015.19 | 31179.78 | 31710.05 | 33507.22 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20295.53 | 3064.44 | 28058.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18411.28 | 19390.89 | 20868.12 | 21882.73 | 22739.98 | 23373.28 | 24913.75 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53779.69 | 10193.36 | 71774.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40816.26 | 44452.56 | 54759.15 | 63702.01 | 65820.22 | 66930.21 | 69004.92 |
| **Latency** | 556µs    | 693µs    | 850µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38488.38 | 5143.62 | 46373.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36713.93 | 38903.34 | 39681.38 | 40529.01 | 41505.13 | 42284.61 | 43553.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57369.34 | 15908.12 | 78525.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26589.41 | 53690.29 | 64747.06 | 67249.99 | 69867.10 | 71239.67 | 73599.87 |
| **Latency** | 582µs    | 655µs    | 787µs    | 857µs    | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53272.99 | 11486.17 | 65920.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28859.29 | 55209.07 | 57500.16 | 59466.09 | 61327.86 | 62200.89 | 63844.88 |
| **Latency** | 730µs    | 790µs    | 851µs    | 924µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17390.68 | 3462.75 | 33434.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15042.66 | 16153.99 | 17660.06 | 19427.30 | 20535.56 | 21011.03 | 22500.84 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5700.45  | 1463.51 | 11158.46 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3558.60 | 4414.83 | 6384.72 | 6684.82 | 6904.07 | 6997.82 | 7269.27 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 12ms    | 14ms    | 18ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8189.28  | 1845.25 | 13019.20 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5625.51 | 7854.16 | 8833.90 | 9274.84 | 9598.49 | 9797.04 | 10497.49 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 7ms     | 9ms     | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51382.82 | 16503.49 | 71370.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23615.99 | 36401.88 | 60125.94 | 62659.14 | 64634.36 | 65852.66 | 68267.23 |
| **Latency** | 689µs    | 752µs    | 813µs    | 891µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27948.64 | 5946.38 | 34134.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18848.14 | 28447.91 | 29721.55 | 30824.19 | 31801.75 | 32248.21 | 33116.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52962.61 | 13452.04 | 66825.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24754.14 | 54131.86 | 58814.52 | 61074.33 | 62729.28 | 63606.28 | 65365.84 |
| **Latency** | 710µs    | 772µs    | 836µs    | 907µs    | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55742.40 | 12828.16 | 71407.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26943.25 | 57886.73 | 60592.44 | 62522.25 | 64403.59 | 65432.13 | 67600.39 |
| **Latency** | 689µs    | 750µs    | 809µs    | 875µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32976.81 | 7785.25 | 44246.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21282.72 | 30427.70 | 36201.97 | 37571.14 | 38851.16 | 39478.31 | 40728.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56304.87 | 15425.32 | 80217.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33085.02 | 40337.09 | 62199.16 | 69622.24 | 72441.26 | 74149.66 | 76767.29 |
| **Latency** | 533µs    | 631µs    | 779µs    | 966µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20475.34 | 3836.94 | 27401.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18112.69 | 19726.98 | 21505.93 | 22330.84 | 23206.44 | 23877.07 | 25084.31 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52307.22 | 11832.90 | 64384.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26216.56 | 53401.11 | 56767.03 | 59045.73 | 60818.44 | 61614.22 | 63032.62 |
| **Latency** | 737µs    | 800µs    | 865µs    | 937µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56635.18 | 13905.59 | 70697.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25619.06 | 58360.04 | 62389.36 | 64652.29 | 66534.09 | 67552.52 | 69768.30 |
| **Latency** | 667µs    | 729µs    | 789µs    | 851µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31057.55 | 5915.04 | 37969.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29540.57 | 31615.60 | 32525.15 | 33302.10 | 34318.30 | 34950.44 | 36305.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18384.20 | 3525.39 | 24765.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16044.38 | 17634.78 | 19321.41 | 20190.68 | 20732.21 | 21447.74 | 23206.44 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8699.65  | 2389.28 | 64545.68 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 6938.10 | 8161.60 | 8873.85 | 9253.79 | 9686.49 | 10700.50 | 14191.22 |
| **Latency** | 3ms     | 5ms     | 5ms     | 6ms     | 7ms     | 7ms      | 13ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29436.12 | 6234.96 | 41687.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24511.96 | 27684.56 | 31608.46 | 32719.07 | 33751.12 | 34382.54 | 35439.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45565.74 | 6703.55 | 53918.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41238.34 | 45427.05 | 47211.59 | 48635.28 | 50012.13 | 50855.93 | 52237.67 |
| **Latency** | 898µs    | 974µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23487.96 | 4812.60 | 41287.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16688.71 | 22435.00 | 25038.13 | 26097.22 | 27106.74 | 27813.31 | 29033.47 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5307.89  | 1578.47 | 8904.60 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3616.66 | 4509.77 | 5843.99 | 6267.48 | 6649.00 | 7001.80 | 7775.10 |
| **Latency** | 5ms     | 5ms     | 8ms     | 12ms    | 14ms    | 17ms    | 24ms    |

---

<p align="center">Generated 2023-06-10T01:52:35.466Z</p>
