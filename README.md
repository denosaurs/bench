<div align="center">
  <h1><code>bench</code></h1>
  <p>
    <strong>📊 Daily benchmarks of deno & node & bun HTTP frameworks</strong>
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
  - [Danet V2 (Hono)](#danet-v2-hono)
  - [Deno](#deno)
  - [Deso](#deso)
  - [Dinatra](#dinatra)
  - [Elysia](#elysia)
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
  - [Vixeny (Bun)](#vixeny-bun)
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
    - [Danet V2 (Hono)](#danet-v2-hono-1)
    - [Deno](#deno-1)
    - [Deso](#deso-1)
    - [Dinatra](#dinatra-1)
    - [Elysia](#elysia-1)
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
    - [Vixeny (Bun)](#vixeny-bun-1)
    - [Vixeny (Deno)](#vixeny-deno-1)

# Overview

## Hello, bench!

> Requests per second

| Framework                                                                            | Mean      | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | --------- | -------- | --------- | -------- |
| Stric                                                                                | 111112.63 | 6087.96  | 126916.31 | 100%     |
| Hyper Express                                                                        | 110783.18 | 6942.62  | 127029.86 | 100%     |
| Bun                                                                                  | 108128.22 | 5933.14  | 121517.21 | 97%      |
| Elysia                                                                               | 98968.60  | 10043.31 | 121905.45 | 89%      |
| Deno                                                                                 | 89661.57  | 7550.67  | 109130.25 | 81%      |
| Fastro                                                                               | 86101.83  | 9713.17  | 118871.50 | 77%      |
| Vixeny (Deno)                                                                        | 84942.89  | 9092.30  | 113273.29 | 76%      |
| NHttp                                                                                | 83484.94  | 10371.89 | 118683.85 | 75%      |
| Hono                                                                                 | 81783.03  | 10235.84 | 116775.09 | 74%      |
| Fast                                                                                 | 80262.11  | 9134.51  | 119299.62 | 72%      |
| Megalo                                                                               | 71909.53  | 5338.45  | 101706.13 | 65%      |
| Deso                                                                                 | 69231.21  | 4910.35  | 88540.05  | 62%      |
| Alosaur                                                                              | 64508.25  | 3667.27  | 71926.36  | 58%      |
| Cheetah                                                                              | 58750.51  | 3500.44  | 62753.79  | 53%      |
| Reno                                                                                 | 58313.79  | 3193.05  | 62545.83  | 52%      |
| http                                                                                 | 53212.11  | 6249.13  | 62611.20  | 48%      |
| Router                                                                               | 49918.95  | 5835.00  | 56705.11  | 45%      |
| Danet V2 (Hono)                                                                      | 47983.03  | 3598.67  | 52124.65  | 43%      |
| Danet (Oak)                                                                          | 44939.65  | 3190.81  | 47380.71  | 40%      |
| Oak                                                                                  | 41499.21  | 4442.58  | 44756.82  | 37%      |
| Little                                                                               | 36847.62  | 5023.10  | 42681.20  | 33%      |
| Aqua                                                                                 | 36255.58  | 5314.26  | 47853.40  | 33%      |
| Node                                                                                 | 35693.05  | 3363.40  | 45707.95  | 32%      |
| Fastify                                                                              | 28869.66  | 3633.91  | 42879.12  | 26%      |
| Dinatra                                                                              | 23817.43  | 3910.74  | 30972.19  | 21%      |
| Abc                                                                                  | 18234.32  | 2002.63  | 23296.44  | 16%      |
| Express (Deno)                                                                       | 11067.51  | 2469.70  | 13595.79  | 10%      |
| Express                                                                              | 8817.38   | 1507.85  | 11427.65  | 8%       |
| Servest                                                                              | 7744.15   | 2389.45  | 14421.09  | 7%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-bfe68dbd-4fb3-4998-a127-b0c1366e1894) |           |          |           |          |

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

## [Danet V2 (Hono)](https://danet.land/)

The most mature backend framework for Deno, V2 in Alpha

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Deso](https://github.com/gothammm/deso)

A simple & fast HTTP web framework for Deno

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

## [Elysia](https://elysiajs.com/)

Ergonomic Framework for Humans

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

## [Vixeny (Bun)](https://vixeny.dev/)

A pure functional web framework

## [Vixeny (Deno)](https://vixeny.dev/)

A pure functional web framework

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18234.32 | 2002.63 | 23296.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16451.74 | 17302.89 | 18649.36 | 19445.22 | 20099.18 | 20322.68 | 21067.31 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64508.25 | 3667.27 | 71926.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63123.46 | 64058.69 | 64905.98 | 65692.44 | 66560.50 | 67068.56 | 68004.54 |
| **Latency** | 680µs    | 714µs    | 778µs    | 824µs    | 852µs    | 874µs    | 963µs    |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36255.58 | 5314.26 | 47853.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29621.14 | 35144.09 | 37247.46 | 39444.11 | 40599.10 | 41952.09 | 45273.19 |
| **Latency** | 886µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 108128.22 | 5933.14 | 121517.21 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 100013.84 | 104613.03 | 108933.82 | 112238.72 | 115221.40 | 116548.82 | 118797.99 |
| **Latency** | 289µs     | 366µs     | 456µs     | 522µs     | 669µs     | 739µs     | 902µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58750.51 | 3500.44 | 62753.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57807.75 | 58612.70 | 59261.05 | 59745.38 | 60317.26 | 60657.63 | 61420.88 |
| **Latency** | 743µs    | 777µs    | 858µs    | 897µs    | 939µs    | 979µs    | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44939.65 | 3190.81 | 47380.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43570.55 | 44704.05 | 45508.37 | 46045.26 | 46397.86 | 46595.26 | 46912.41 |
| **Latency** | 962µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47983.03 | 3598.67 | 52124.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46928.19 | 47606.11 | 48523.70 | 49237.31 | 49801.13 | 50049.76 | 50602.44 |
| **Latency** | 901µs    | 940µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 89661.57 | 7550.67 | 109130.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 81400.60 | 84836.81 | 89336.72 | 94446.76 | 99240.88 | 101412.03 | 105210.10 |
| **Latency** | 397µs    | 476µs    | 563µs    | 634µs    | 692µs    | 743µs     | 850µs     |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69231.21 | 4910.35 | 88540.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66045.48 | 67172.02 | 69145.95 | 70772.66 | 73607.53 | 76759.01 | 81807.41 |
| **Latency** | 652µs    | 690µs    | 723µs    | 755µs    | 790µs    | 826µs    | 928µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23817.43 | 3910.74 | 30972.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20739.02 | 22137.79 | 24608.99 | 26314.65 | 27528.07 | 27957.68 | 28911.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 98968.60 | 10043.31 | 121905.45 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 83552.53 | 93534.21 | 100830.92 | 106379.14 | 110006.85 | 112018.69 | 115547.04 |
| **Latency** | 319µs    | 391µs    | 480µs     | 570µs     | 727µs     | 848µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8817.38  | 1507.85 | 11427.65 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6618.79 | 8514.19 | 9116.86 | 9708.05 | 10297.09 | 10667.98 | 11132.80 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 7ms      | 7ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11067.51 | 2469.70 | 13595.79 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7126.08 | 10709.37 | 12232.53 | 12623.64 | 12779.55 | 12859.29 | 13153.95 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 7ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 80262.11 | 9134.51 | 119299.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 73442.11 | 74826.42 | 77096.53 | 84646.21 | 92004.00 | 98736.11 | 110016.39 |
| **Latency** | 442µs    | 560µs    | 642µs    | 701µs    | 737µs    | 770µs    | 860µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28869.66 | 3633.91 | 42879.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27235.51 | 27727.58 | 28387.34 | 29885.15 | 32822.31 | 34476.13 | 37853.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 86101.83 | 9713.17 | 118871.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 77015.92 | 78772.48 | 84270.24 | 91450.48 | 99502.83 | 103472.95 | 111618.66 |
| **Latency** | 410µs    | 480µs    | 601µs    | 669µs    | 709µs    | 742µs     | 829µs     |

### [Hono](#hono)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 81783.03 | 10235.84 | 116775.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 74042.95 | 75542.84 | 78468.15 | 86375.55 | 95592.19 | 102425.27 | 113304.06 |
| **Latency** | 429µs    | 527µs    | 632µs    | 694µs    | 731µs    | 761µs     | 843µs     |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53212.11 | 6249.13 | 62611.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49418.00 | 51507.34 | 55281.75 | 56410.02 | 57205.21 | 57721.64 | 59254.73 |
| **Latency** | 641µs    | 845µs    | 952µs    | 992µs    | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 110783.18 | 6942.62 | 127029.86 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 102454.62 | 107034.17 | 111564.34 | 115125.51 | 118135.72 | 120044.80 | 123267.57 |
| **Latency** | 291µs     | 359µs     | 440µs     | 512µs     | 639µs     | 720µs     | 910µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36847.62 | 5023.10 | 42681.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34857.45 | 36518.26 | 37888.98 | 39231.12 | 40152.90 | 40872.19 | 41834.58 |
| **Latency** | 854µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 71909.53 | 5338.45 | 101706.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69488.83 | 70500.65 | 71267.43 | 72641.40 | 77222.22 | 80620.39 | 87596.58 |
| **Latency** | 593µs    | 645µs    | 701µs    | 748µs    | 782µs    | 818µs    | 896µs    |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 83484.94 | 10371.89 | 118683.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 75111.79 | 76900.89 | 80631.79 | 88022.52 | 97824.24 | 104724.84 | 115427.85 |
| **Latency** | 420µs    | 503µs    | 621µs    | 684µs    | 721µs    | 748µs     | 843µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35693.05 | 3363.40 | 45707.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34705.96 | 35460.64 | 36045.08 | 36700.19 | 37383.01 | 38000.83 | 39300.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41499.21 | 4442.58 | 44756.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40533.41 | 41524.73 | 42436.68 | 43057.17 | 43406.45 | 43610.44 | 43963.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Opine](#opine)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

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
| 58313.79 | 3193.05 | 62545.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57002.51 | 57809.68 | 58799.04 | 59615.24 | 60114.13 | 60539.40 | 61222.46 |
| **Latency** | 748µs    | 784µs    | 863µs    | 909µs    | 946µs    | 985µs    | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49918.95 | 5835.00 | 56705.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46510.80 | 48214.48 | 51801.79 | 53027.03 | 54111.18 | 54683.94 | 55658.31 |
| **Latency** | 678µs    | 900µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 111112.63 | 6087.96 | 126916.31 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 102955.81 | 107162.77 | 111631.45 | 115322.28 | 118139.54 | 120092.23 | 123637.60 |
| **Latency** | 284µs     | 359µs     | 444µs     | 506µs     | 642µs     | 716µs     | 882µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7744.15  | 2389.45 | 14421.09 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5342.03 | 6502.67 | 8025.34 | 9343.00 | 10364.16 | 10806.16 | 11796.15 |
| **Latency** | 4ms     | 5ms     | 6ms     | 6ms     | 8ms      | 11ms     | 13ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 84942.89 | 9092.30 | 113273.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 76601.89 | 78236.87 | 83310.42 | 90305.95 | 97104.98 | 101976.76 | 109428.83 |
| **Latency** | 419µs    | 490µs    | 609µs    | 675µs    | 714µs    | 744µs     | 832µs     |

---

<p align="center">Generated 2026-04-20T03:50:50.322Z</p>
