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

| Framework                                                                            | Mean      | Stddev  | Max       | Relative |
| ------------------------------------------------------------------------------------ | --------- | ------- | --------- | -------- |
| Bun                                                                                  | 103190.53 | 6844.96 | 122059.17 | 100%     |
| Stric                                                                                | 102376.74 | 6484.81 | 120453.47 | 99%      |
| Hyper Express                                                                        | 98094.22  | 8207.06 | 118508.79 | 95%      |
| Elysia                                                                               | 96300.13  | 7929.90 | 117049.15 | 93%      |
| Deno                                                                                 | 82912.20  | 7758.14 | 112154.16 | 80%      |
| Fastro                                                                               | 76336.15  | 8995.02 | 107469.16 | 74%      |
| Vixeny (Deno)                                                                        | 75476.60  | 8405.86 | 112660.81 | 73%      |
| NHttp                                                                                | 74233.46  | 8902.23 | 110974.35 | 72%      |
| Fast                                                                                 | 74189.54  | 8566.42 | 111015.23 | 72%      |
| Hono                                                                                 | 69774.86  | 6084.36 | 107936.67 | 68%      |
| Megalo                                                                               | 63993.20  | 4033.36 | 86111.38  | 62%      |
| Alosaur                                                                              | 58534.23  | 3683.39 | 65210.91  | 57%      |
| Cheetah                                                                              | 54105.32  | 3225.89 | 62237.32  | 52%      |
| Reno                                                                                 | 53802.84  | 3094.77 | 58517.71  | 52%      |
| http                                                                                 | 50064.39  | 6326.98 | 57473.34  | 49%      |
| Router                                                                               | 48367.82  | 5702.41 | 55388.94  | 47%      |
| Danet V2 (Hono)                                                                      | 44522.98  | 3245.95 | 54247.72  | 43%      |
| Danet (Oak)                                                                          | 40561.48  | 3294.60 | 44528.70  | 39%      |
| Oak                                                                                  | 38191.81  | 4098.30 | 41037.26  | 37%      |
| Aqua                                                                                 | 34828.58  | 4435.26 | 40853.52  | 34%      |
| Little                                                                               | 34723.12  | 4775.33 | 40335.79  | 34%      |
| Node                                                                                 | 33355.25  | 3433.46 | 42117.13  | 32%      |
| Fastify                                                                              | 29266.17  | 3415.99 | 32276.15  | 28%      |
| Dinatra                                                                              | 22774.09  | 3660.92 | 29987.26  | 22%      |
| Abc                                                                                  | 18205.45  | 2242.52 | 23121.30  | 18%      |
| Express (Deno)                                                                       | 10415.47  | 2334.72 | 13300.55  | 10%      |
| Express                                                                              | 8678.35   | 1609.17 | 11819.57  | 8%       |
| Servest                                                                              | 7479.40   | 2559.15 | 16291.46  | 7%       |
| Acorn                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Deso                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00    | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-78043a9e-1440-48e7-a781-ec1590724d2d) |           |         |           |          |

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
| 18205.45 | 2242.52 | 23121.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16117.19 | 17176.91 | 18443.42 | 19646.60 | 20572.29 | 20879.51 | 21444.71 |
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
| 58534.23 | 3683.39 | 65210.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57342.09 | 58312.88 | 58943.34 | 59716.24 | 60428.64 | 60861.24 | 62262.89 |
| **Latency** | 746µs    | 782µs    | 858µs    | 902µs    | 935µs    | 968µs    | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34828.58 | 4435.26 | 40853.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32570.04 | 33914.65 | 35805.63 | 37089.44 | 38037.62 | 38673.89 | 39607.87 |
| **Latency** | 896µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 103190.53 | 6844.96 | 122059.17 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 94428.21 | 99006.95 | 103621.17 | 108079.77 | 111191.73 | 113483.16 | 117750.27 |
| **Latency** | 301µs    | 380µs    | 465µs     | 554µs     | 704µs     | 788µs     | 981µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54105.32 | 3225.89 | 62237.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52958.19 | 53864.63 | 54522.81 | 55201.83 | 55665.05 | 56129.00 | 56872.27 |
| **Latency** | 802µs    | 840µs    | 932µs    | 975µs    | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40561.48 | 3294.60 | 44528.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39798.01 | 40704.34 | 41089.94 | 41466.13 | 41973.93 | 42161.18 | 42612.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44522.98 | 3245.95 | 54247.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43507.13 | 44431.41 | 45178.95 | 45510.40 | 45786.73 | 45982.28 | 46463.93 |
| **Latency** | 973µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 82912.20 | 7758.14 | 112154.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 74389.47 | 77438.70 | 82788.38 | 87747.56 | 92762.27 | 95661.34 | 100658.17 |
| **Latency** | 425µs    | 505µs    | 615µs    | 690µs    | 746µs    | 795µs    | 911µs     |

### [Deso](#deso)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22774.09 | 3660.92 | 29987.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20346.60 | 21305.75 | 23224.65 | 25164.32 | 26228.37 | 27045.50 | 27777.73 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 96300.13 | 7929.90 | 117049.15 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 86129.04 | 91227.33 | 97110.63 | 101995.84 | 106046.37 | 108243.65 | 112050.05 |
| **Latency** | 321µs    | 397µs    | 488µs    | 604µs     | 756µs     | 871µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8678.35  | 1609.17 | 11819.57 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6577.27 | 8124.56 | 8930.33 | 9327.64 | 10691.18 | 11343.02 | 11603.94 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 7ms      | 7ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10415.47 | 2334.72 | 13300.55 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6902.26 | 10109.57 | 11309.41 | 11745.60 | 12134.17 | 12326.53 | 12828.96 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 7ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 74189.54 | 8566.42 | 111015.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 68543.00 | 69661.37 | 71209.51 | 77326.99 | 85062.66 | 90328.08 | 103032.51 |
| **Latency** | 479µs    | 622µs    | 692µs    | 751µs    | 785µs    | 814µs    | 925µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29266.17 | 3415.99 | 32276.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28818.65 | 29447.42 | 29956.42 | 30418.92 | 30739.68 | 31000.44 | 31417.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 76336.15 | 8995.02 | 107469.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 68939.48 | 70311.31 | 73310.42 | 81077.03 | 89000.37 | 94621.71 | 103517.93 |
| **Latency** | 459µs    | 566µs    | 676µs    | 744µs    | 785µs    | 823µs    | 925µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 69774.86 | 6084.36 | 107936.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66639.24 | 67803.34 | 68878.99 | 70273.79 | 74329.14 | 79633.93 | 92317.59 |
| **Latency** | 607µs    | 664µs    | 725µs    | 771µs    | 807µs    | 854µs    | 952µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50064.39 | 6326.98 | 57473.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46015.77 | 48025.98 | 52135.83 | 53309.08 | 54500.16 | 54969.97 | 56086.91 |
| **Latency** | 683µs    | 888µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 98094.22 | 8207.06 | 118508.79 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 89108.16 | 93407.31 | 98256.71 | 103204.64 | 107853.13 | 110003.08 | 113968.12 |
| **Latency** | 316µs    | 395µs    | 488µs    | 592µs     | 730µs     | 829µs     | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34723.12 | 4775.33 | 40335.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32551.89 | 34532.96 | 35724.57 | 37052.76 | 37962.48 | 38370.75 | 39093.17 |
| **Latency** | 900µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63993.20 | 4033.36 | 86111.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61864.22 | 62791.81 | 63697.59 | 65023.62 | 67303.99 | 69668.17 | 74666.27 |
| **Latency** | 674µs    | 721µs    | 786µs    | 836µs    | 873µs    | 922µs    | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 74233.46 | 8902.23 | 110974.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 68120.80 | 69538.81 | 71025.87 | 77666.83 | 85705.31 | 91805.33 | 106023.76 |
| **Latency** | 474µs    | 614µs    | 693µs    | 754µs    | 792µs    | 826µs    | 957µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33355.25 | 3433.46 | 42117.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32472.93 | 33081.57 | 33859.54 | 34511.24 | 35205.53 | 35561.40 | 37236.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38191.81 | 4098.30 | 41037.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37308.62 | 38355.63 | 39075.11 | 39479.77 | 40091.34 | 40349.96 | 40810.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

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
| 53802.84 | 3094.77 | 58517.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52836.00 | 53408.10 | 54221.71 | 54942.88 | 55467.23 | 55804.54 | 56529.59 |
| **Latency** | 810µs    | 846µs    | 938µs    | 981µs    | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48367.82 | 5702.41 | 55388.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45139.66 | 46736.64 | 49872.54 | 51568.23 | 52430.17 | 52849.03 | 54166.01 |
| **Latency** | 700µs    | 934µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 102376.74 | 6484.81 | 120453.47 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 93843.18 | 98223.81 | 102516.42 | 106995.48 | 110568.63 | 112722.88 | 116222.34 |
| **Latency** | 300µs    | 382µs    | 472µs     | 560µs     | 707µs     | 791µs     | 983µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7479.40  | 2559.15 | 16291.46 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5309.62 | 6138.44 | 7812.99 | 9134.20 | 10134.03 | 10562.30 | 12113.75 |
| **Latency** | 5ms     | 5ms     | 6ms     | 7ms     | 8ms      | 11ms     | 14ms     |

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
| 75476.60 | 8405.86 | 112660.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 69276.98 | 70715.81 | 72688.13 | 78549.10 | 86536.15 | 92235.15 | 107181.62 |
| **Latency** | 471µs    | 604µs    | 682µs    | 741µs    | 779µs    | 811µs    | 924µs     |

---

<p align="center">Generated 2026-07-07T04:16:46.608Z</p>
