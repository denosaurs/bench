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
| Stric                                                                                | 154149.52 | 7336.94  | 169453.17 | 100%     |
| Bun                                                                                  | 153227.38 | 7115.04  | 172837.96 | 99%      |
| Hyper Express                                                                        | 148209.16 | 6079.69  | 160135.55 | 96%      |
| Elysia                                                                               | 138784.82 | 11938.63 | 159748.62 | 90%      |
| Deno                                                                                 | 130908.34 | 7371.69  | 149850.93 | 85%      |
| Vixeny (Deno)                                                                        | 125460.74 | 8715.40  | 146804.19 | 81%      |
| Fastro                                                                               | 122853.12 | 10009.86 | 149137.84 | 80%      |
| NHttp                                                                                | 122134.34 | 9154.99  | 145536.01 | 79%      |
| Fast                                                                                 | 120084.50 | 10032.12 | 154146.18 | 78%      |
| Hono                                                                                 | 113926.47 | 13669.79 | 148110.43 | 74%      |
| Megalo                                                                               | 103597.56 | 9023.56  | 136553.56 | 67%      |
| Alosaur                                                                              | 92025.53  | 10483.97 | 107890.21 | 60%      |
| Reno                                                                                 | 84166.41  | 4205.31  | 90347.92  | 55%      |
| http                                                                                 | 70945.96  | 8496.02  | 85581.14  | 46%      |
| Danet V2 (Hono)                                                                      | 66726.72  | 5993.75  | 72128.72  | 43%      |
| Node                                                                                 | 64873.26  | 6639.75  | 81907.36  | 42%      |
| Oak                                                                                  | 58462.76  | 6679.44  | 64920.56  | 38%      |
| Fastify                                                                              | 56224.73  | 5776.33  | 64500.88  | 36%      |
| Aqua                                                                                 | 47547.36  | 5668.28  | 61879.50  | 31%      |
| Little                                                                               | 46383.45  | 5934.08  | 55787.06  | 30%      |
| Abc                                                                                  | 30824.94  | 3391.41  | 37106.53  | 20%      |
| Express                                                                              | 16920.27  | 3474.54  | 22060.46  | 11%      |
| Express (Deno)                                                                       | 14068.45  | 2871.99  | 17246.16  | 9%       |
| Servest                                                                              | 10505.52  | 2768.93  | 21543.92  | 7%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Cheetah                                                                              | 0.00      | 0.00     | 0.00      | 0%       |
| Danet (Oak)                                                                          | 0.00      | 0.00     | 0.00      | 0%       |
| Deso                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Dinatra                                                                              | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Router                                                                               | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-98defd39-4c98-4cbd-aad4-05f610ed28fd) |           |          |           |          |

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
| 30824.94 | 3391.41 | 37106.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27808.70 | 29708.13 | 31115.86 | 32853.86 | 34215.29 | 35208.93 | 35966.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      |

### [Acorn](#acorn)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Alosaur](#alosaur)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 92025.53 | 10483.97 | 107890.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 79543.76 | 92268.32 | 95444.17 | 97308.59 | 98875.13 | 99995.39 | 103586.95 |
| **Latency** | 455µs    | 485µs    | 531µs    | 567µs    | 628µs    | 705µs    | 930µs     |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47547.36 | 5668.28 | 61879.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44092.16 | 46234.02 | 48216.51 | 50459.25 | 52210.39 | 53467.73 | 57136.45 |
| **Latency** | 677µs    | 895µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 153227.38 | 7115.04 | 172837.96 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 147702.69 | 150828.85 | 154222.64 | 157131.50 | 159519.72 | 160924.24 | 163681.72 |
| **Latency** | 208µs     | 266µs     | 327µs     | 384µs     | 423µs     | 459µs     | 577µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 66726.72 | 5993.75 | 72128.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62919.30 | 66356.79 | 68330.39 | 69413.38 | 70132.36 | 70684.75 | 71311.83 |
| **Latency** | 637µs    | 669µs    | 747µs    | 786µs    | 852µs    | 896µs    | 1ms      |

### [Deno](#deno)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 130908.34 | 7371.69 | 149850.93 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 123800.30 | 127608.79 | 131480.08 | 134962.89 | 137846.89 | 140320.42 | 143475.85 |
| **Latency** | 284µs     | 337µs     | 383µs     | 425µs     | 463µs     | 494µs     | 579µs     |

### [Deso](#deso)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Dinatra](#dinatra)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Elysia](#elysia)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 138784.82 | 11938.63 | 159748.62 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 122447.08 | 134014.21 | 141528.41 | 147345.93 | 150258.55 | 151992.85 | 155982.27 |
| **Latency** | 231µs     | 292µs     | 354µs     | 409µs     | 472µs     | 541µs     | 728µs     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16920.27 | 3474.54 | 22060.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12621.56 | 15027.66 | 17403.30 | 19911.94 | 21035.34 | 21300.65 | 21654.84 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14068.45 | 2871.99 | 17246.16 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9644.12 | 13614.59 | 15025.17 | 15851.50 | 16302.51 | 16659.91 | 17033.33 |
| **Latency** | 2ms     | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fast](#fast)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 120084.50 | 10032.12 | 154146.18 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 109964.63 | 114623.46 | 120100.62 | 126326.48 | 131922.56 | 134944.63 | 141924.33 |
| **Latency** | 311µs     | 362µs     | 417µs     | 466µs     | 504µs     | 535µs     | 649µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56224.73 | 5776.33 | 64500.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54547.43 | 55811.03 | 57051.00 | 58313.36 | 59384.05 | 60033.60 | 61380.59 |
| **Latency** | 802µs    | 829µs    | 857µs    | 890µs    | 978µs    | 1ms      | 1ms      |

### [Fastro](#fastro)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 122853.12 | 10009.86 | 149137.84 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 112543.30 | 117934.71 | 123807.34 | 128803.39 | 134137.76 | 135741.36 | 141122.27 |
| **Latency** | 300µs     | 357µs     | 406µs     | 454µs     | 494µs     | 529µs     | 648µs     |

### [Hono](#hono)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 113926.47 | 13669.79 | 148110.43 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 99535.89 | 109650.89 | 115497.51 | 121528.74 | 127946.59 | 131303.27 | 138834.34 |
| **Latency** | 323µs    | 376µs     | 435µs     | 486µs     | 538µs     | 589µs     | 786µs     |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 70945.96 | 8496.02 | 85581.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65253.24 | 68768.77 | 73172.00 | 75440.08 | 77539.65 | 78658.49 | 80408.81 |
| **Latency** | 486µs    | 630µs    | 699µs    | 740µs    | 784µs    | 845µs    | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 148209.16 | 6079.69 | 160135.55 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 142518.17 | 146029.25 | 148909.08 | 151649.85 | 154106.89 | 155255.47 | 157409.46 |
| **Latency** | 216µs     | 278µs     | 337µs     | 390µs     | 435µs     | 481µs     | 625µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46383.45 | 5934.08 | 55787.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42819.02 | 46235.11 | 47638.21 | 49224.33 | 50425.91 | 51221.63 | 52728.57 |
| **Latency** | 685µs    | 970µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 103597.56 | 9023.56 | 136553.56 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 94637.62 | 100833.76 | 104115.24 | 108363.99 | 112756.07 | 115156.48 | 121738.94 |
| **Latency** | 375µs    | 433µs     | 482µs     | 524µs     | 570µs     | 613µs     | 742µs     |

### [NHttp](#nhttp)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 122134.34 | 9154.99 | 145536.01 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 113056.06 | 117352.91 | 122461.89 | 127503.35 | 132314.17 | 135003.28 | 140220.57 |
| **Latency** | 306µs     | 359µs     | 410µs     | 457µs     | 494µs     | 523µs     | 631µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64873.26 | 6639.75 | 81907.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61725.25 | 63811.60 | 65846.18 | 67653.51 | 69535.52 | 70914.25 | 73487.18 |
| **Latency** | 610µs    | 714µs    | 755µs    | 800µs    | 929µs    | 1ms      | 1ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58462.76 | 6679.44 | 64920.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55642.42 | 58019.38 | 59799.08 | 61395.95 | 62417.44 | 62988.64 | 63769.60 |
| **Latency** | 770µs    | 794µs    | 823µs    | 859µs    | 936µs    | 1ms      | 1ms      |

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
| 84166.41 | 4205.31 | 90347.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 82490.88 | 83651.87 | 84757.30 | 85955.48 | 86704.72 | 87076.00 | 87814.42 |
| **Latency** | 515µs    | 541µs    | 596µs    | 628µs    | 657µs    | 702µs    | 768µs    |

### [Router](#router)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 154149.52 | 7336.94 | 169453.17 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 147239.61 | 151727.80 | 155043.32 | 158354.44 | 160925.68 | 162432.68 | 164921.11 |
| **Latency** | 205µs     | 263µs     | 322µs     | 382µs     | 427µs     | 467µs     | 589µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10505.52 | 2768.93 | 21543.92 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6431.47 | 9341.35 | 10816.88 | 12200.11 | 13373.23 | 14518.02 | 16722.06 |
| **Latency** | 3ms     | 3ms     | 4ms      | 5ms      | 6ms      | 8ms      | 10ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 125460.74 | 8715.40 | 146804.19 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 116900.15 | 120636.90 | 125616.05 | 130618.61 | 135583.04 | 138041.94 | 142620.17 |
| **Latency** | 295µs     | 350µs     | 399µs     | 446µs     | 482µs     | 509µs     | 610µs     |

---

<p align="center">Generated 2026-08-13T02:42:41.600Z</p>
