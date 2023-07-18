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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Deno                                                                                 | 66082.64 | 14227.98 | 75863.90  | 100%     |
| Vixeny (Deno)                                                                        | 63766.47 | 14133.99 | 72819.97  | 96%      |
| NHttp                                                                                | 62477.32 | 13326.59 | 71040.25  | 95%      |
| Fast                                                                                 | 62447.10 | 13261.56 | 70993.11  | 94%      |
| Bun                                                                                  | 61150.76 | 12002.40 | 80330.53  | 93%      |
| Hono                                                                                 | 60369.79 | 13696.36 | 69863.11  | 91%      |
| Stric                                                                                | 60329.78 | 10199.03 | 79636.61  | 91%      |
| Hyper Express                                                                        | 56943.90 | 17363.77 | 76289.67  | 86%      |
| Deso                                                                                 | 56940.51 | 11544.51 | 64114.37  | 86%      |
| Fastro                                                                               | 54596.52 | 14641.34 | 65716.44  | 83%      |
| Reno                                                                                 | 49456.45 | 7516.10  | 53959.96  | 75%      |
| Cheetah                                                                              | 44019.65 | 7783.76  | 48404.39  | 67%      |
| http                                                                                 | 37887.15 | 9022.56  | 49621.86  | 57%      |
| Node                                                                                 | 34835.13 | 5378.32  | 37619.94  | 53%      |
| Peko                                                                                 | 32963.60 | 9211.34  | 153846.15 | 50%      |
| Fastify                                                                              | 31421.25 | 5292.40  | 34375.63  | 48%      |
| Alosaur                                                                              | 29642.33 | 7396.52  | 156303.84 | 45%      |
| Router                                                                               | 26275.17 | 4402.82  | 36186.97  | 40%      |
| Little                                                                               | 22471.56 | 4282.65  | 75693.22  | 34%      |
| Aqua                                                                                 | 21893.32 | 4083.84  | 61855.03  | 33%      |
| Oak                                                                                  | 21369.10 | 4015.81  | 27126.59  | 32%      |
| Dinatra                                                                              | 19447.70 | 4780.87  | 40661.74  | 29%      |
| Abc                                                                                  | 16633.65 | 3641.39  | 21609.94  | 25%      |
| Danet (Oak)                                                                          | 15378.20 | 4055.22  | 61021.50  | 23%      |
| Opine                                                                                | 9827.40  | 2260.33  | 35756.85  | 15%      |
| Express (Deno)                                                                       | 9662.86  | 2008.07  | 14366.61  | 15%      |
| Express                                                                              | 6613.61  | 1404.04  | 10554.04  | 10%      |
| Acorn                                                                                | 6187.42  | 8778.69  | 79079.81  | 9%       |
| Servest                                                                              | 6009.31  | 1821.90  | 8863.19   | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-3b1414a6-07a7-4b55-83bd-6d6b6f0ea52b) |          |          |           |          |

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
| 16633.65 | 3641.39 | 21609.94 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9345.18 | 16335.66 | 17765.27 | 18865.17 | 19333.92 | 19650.88 | 21268.48 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6187.42  | 8778.69 | 79079.81 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 49.87 | 70.89 | 5265.09 | 8503.19 | 12757.79 | 17702.80 | 50112.04 |
| **Latency** | 6ms   | 7ms   | 17ms    | 23ms    | 28ms     | 30ms     | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 29642.33 | 7396.52 | 156303.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24670.71 | 26741.72 | 32033.25 | 32632.33 | 33230.74 | 33757.41 | 35379.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21893.32 | 4083.84 | 61855.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16324.81 | 21394.92 | 23119.88 | 24266.60 | 24782.52 | 25242.26 | 26042.46 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61150.76 | 12002.40 | 80330.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46818.46 | 50508.10 | 65018.99 | 72439.85 | 73852.73 | 74615.68 | 76733.77 |
| **Latency** | 490µs    | 607µs    | 754µs    | 914µs    | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44019.65 | 7783.76 | 48404.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43084.45 | 45626.01 | 46371.44 | 46906.11 | 47207.56 | 47406.67 | 47713.29 |
| **Latency** | 984µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15378.20 | 4055.22 | 61021.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10356.20 | 13525.11 | 16486.62 | 17956.17 | 18419.64 | 19030.83 | 20933.35 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66082.64 | 14227.98 | 75863.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32503.92 | 69037.32 | 72233.26 | 73496.10 | 74222.27 | 74725.45 | 75225.64 |
| **Latency** | 537µs    | 592µs    | 726µs    | 762µs    | 828µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56940.51 | 11544.51 | 64114.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32300.25 | 60135.45 | 61678.68 | 62429.99 | 63034.01 | 63367.82 | 63717.22 |
| **Latency** | 708µs    | 760µs    | 798µs    | 843µs    | 999µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19447.70 | 4780.87 | 40661.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16021.79 | 16922.85 | 21558.94 | 22963.61 | 23361.21 | 23532.01 | 24735.87 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6613.61  | 1404.04 | 10554.04 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4306.37 | 6456.50 | 7316.39 | 7420.53 | 7496.33 | 7529.74 | 7584.95 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 11ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9662.86  | 2008.07 | 14366.61 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7159.44 | 9276.15 | 10513.93 | 10716.05 | 10817.95 | 10906.20 | 11718.04 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 6ms      | 7ms      | 13ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62447.10 | 13261.56 | 70993.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31981.66 | 65766.95 | 68056.49 | 68847.86 | 69347.99 | 69698.28 | 70291.16 |
| **Latency** | 649µs    | 692µs    | 733µs    | 771µs    | 873µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31421.25 | 5292.40 | 34375.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31212.05 | 32145.33 | 32820.68 | 33300.67 | 33536.56 | 33659.92 | 33841.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54596.52 | 14641.34 | 65716.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26312.90 | 47231.92 | 63031.52 | 63787.20 | 64132.07 | 64318.39 | 64676.57 |
| **Latency** | 703µs    | 754µs    | 792µs    | 828µs    | 937µs    | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60369.79 | 13696.36 | 69863.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28650.43 | 63787.40 | 66537.07 | 67591.29 | 68354.36 | 68740.31 | 69343.00 |
| **Latency** | 656µs    | 700µs    | 745µs    | 793µs    | 946µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37887.15 | 9022.56 | 49621.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26815.56 | 34926.55 | 42265.86 | 43364.09 | 43899.75 | 44230.93 | 44740.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56943.90 | 17363.77 | 76289.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32077.63 | 36301.09 | 67345.13 | 72038.91 | 73394.69 | 74008.80 | 75045.41 |
| **Latency** | 516µs    | 600µs    | 759µs    | 875µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22471.56 | 4282.65 | 75693.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20368.85 | 21776.08 | 23643.74 | 24491.98 | 24875.12 | 25311.13 | 26054.16 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

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
| 62477.32 | 13326.59 | 71040.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31676.32 | 65805.26 | 68203.51 | 69029.68 | 69526.43 | 69860.79 | 70370.71 |
| **Latency** | 647µs    | 687µs    | 732µs    | 774µs    | 870µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34835.13 | 5378.32 | 37619.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34365.99 | 35596.12 | 36102.53 | 36798.25 | 37045.20 | 37166.16 | 37338.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21369.10 | 4015.81 | 27126.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19101.53 | 20491.18 | 22591.22 | 23358.77 | 24038.96 | 24475.49 | 25965.18 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9827.40  | 2260.33 | 35756.85 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6901.24 | 9358.07 | 10277.60 | 10575.08 | 10972.76 | 13124.18 | 15386.55 |
| **Latency** | 2ms     | 4ms     | 5ms      | 5ms      | 6ms      | 6ms      | 12ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 32963.60 | 9211.34 | 153846.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27502.25 | 30615.84 | 35405.31 | 36304.72 | 36932.86 | 37338.01 | 37972.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49456.45 | 7516.10 | 53959.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41697.80 | 51118.41 | 51828.63 | 52540.64 | 53189.36 | 53434.12 | 53765.61 |
| **Latency** | 843µs    | 928µs    | 966µs    | 995µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26275.17 | 4402.82 | 36186.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23650.14 | 25106.92 | 27757.06 | 28504.85 | 29059.21 | 29445.64 | 30533.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60329.78 | 10199.03 | 79636.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47108.83 | 50801.18 | 60425.99 | 70501.76 | 72015.95 | 72932.74 | 74568.95 |
| **Latency** | 497µs    | 625µs    | 773µs    | 929µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6009.31  | 1821.90 | 8863.19 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4234.68 | 5038.09 | 6526.63 | 7209.53 | 7501.05 | 7588.58 | 8684.24 |
| **Latency** | 4ms     | 4ms     | 7ms     | 10ms    | 13ms    | 15ms    | 21ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63766.47 | 14133.99 | 72819.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30953.20 | 67308.08 | 69838.03 | 70902.84 | 71494.38 | 71807.19 | 72186.86 |
| **Latency** | 624µs    | 663µs    | 715µs    | 762µs    | 837µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-07-18T02:15:50.686Z</p>
