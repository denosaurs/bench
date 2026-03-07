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
| Stric                                                                                | 123977.03 | 13258.58 | 149382.02 | 100%     |
| Bun                                                                                  | 113888.51 | 16987.03 | 146100.94 | 92%      |
| Hyper Express                                                                        | 112151.12 | 14224.90 | 144433.36 | 90%      |
| Elysia                                                                               | 100706.35 | 10700.92 | 137379.51 | 81%      |
| Deno                                                                                 | 84224.04  | 4528.97  | 108196.61 | 68%      |
| Fastro                                                                               | 77753.50  | 3678.24  | 90651.22  | 63%      |
| Vixeny (Deno)                                                                        | 76450.04  | 3593.84  | 88800.97  | 62%      |
| NHttp                                                                                | 75644.96  | 3376.78  | 87851.17  | 61%      |
| Fast                                                                                 | 75589.07  | 3607.12  | 87112.75  | 61%      |
| Hono                                                                                 | 73887.11  | 3910.36  | 85452.40  | 60%      |
| Megalo                                                                               | 71226.19  | 3713.23  | 81293.21  | 57%      |
| Deso                                                                                 | 70356.88  | 3675.14  | 86478.44  | 57%      |
| Alosaur                                                                              | 62892.60  | 3522.30  | 68864.86  | 51%      |
| Cheetah                                                                              | 58249.19  | 3536.21  | 61577.43  | 47%      |
| Reno                                                                                 | 57788.09  | 3051.05  | 60235.15  | 47%      |
| http                                                                                 | 52948.68  | 6181.76  | 62328.41  | 43%      |
| Router                                                                               | 49484.36  | 5430.06  | 56010.99  | 40%      |
| Danet V2 (Hono)                                                                      | 48395.29  | 3560.08  | 50770.86  | 39%      |
| Danet (Oak)                                                                          | 44852.13  | 3429.09  | 46844.66  | 36%      |
| Oak                                                                                  | 41182.47  | 4253.15  | 44289.77  | 33%      |
| Node                                                                                 | 37841.57  | 3126.28  | 41432.52  | 31%      |
| Little                                                                               | 36817.53  | 4895.48  | 42540.68  | 30%      |
| Aqua                                                                                 | 36747.24  | 4358.47  | 45492.93  | 30%      |
| Fastify                                                                              | 33755.87  | 3246.76  | 36525.35  | 27%      |
| Dinatra                                                                              | 25878.29  | 3719.90  | 32745.41  | 21%      |
| Abc                                                                                  | 20990.39  | 2209.83  | 24923.09  | 17%      |
| Express (Deno)                                                                       | 11248.81  | 2265.64  | 13404.05  | 9%       |
| Express                                                                              | 9056.65   | 1511.48  | 12057.20  | 7%       |
| Servest                                                                              | 8000.37   | 2667.73  | 17137.07  | 6%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-8ae9f588-9e2f-4db9-9457-304d2bc299bb) |           |          |           |          |

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
| 20990.39 | 2209.83 | 24923.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19128.97 | 20409.34 | 21157.82 | 22149.48 | 23205.02 | 23552.24 | 24046.34 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      |

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
| 62892.60 | 3522.30 | 68864.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61930.53 | 62821.38 | 63379.22 | 63982.46 | 64361.42 | 64761.69 | 65354.58 |
| **Latency** | 698µs    | 728µs    | 803µs    | 841µs    | 867µs    | 892µs    | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36747.24 | 4358.47 | 45492.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34435.35 | 35996.42 | 37579.36 | 39113.98 | 39712.53 | 40613.70 | 41935.87 |
| **Latency** | 848µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 113888.51 | 16987.03 | 146100.94 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 91081.72 | 98480.66 | 114858.77 | 127857.98 | 136627.37 | 140162.51 | 144173.90 |
| **Latency** | 263µs    | 332µs    | 417µs     | 502µs     | 639µs     | 747µs     | 990µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58249.19 | 3536.21 | 61577.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57512.70 | 58410.64 | 58730.15 | 59113.29 | 59558.12 | 59781.80 | 60146.56 |
| **Latency** | 748µs    | 781µs    | 868µs    | 906µs    | 946µs    | 987µs    | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44852.13 | 3429.09 | 46844.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44242.58 | 45133.48 | 45421.56 | 45684.01 | 46009.26 | 46230.08 | 46544.86 |
| **Latency** | 963µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48395.29 | 3560.08 | 50770.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47776.63 | 48516.42 | 48966.91 | 49440.63 | 49800.59 | 49971.40 | 50301.70 |
| **Latency** | 897µs    | 930µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 84224.04 | 4528.97 | 108196.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 80806.86 | 82203.95 | 83685.95 | 85901.57 | 89215.88 | 91214.28 | 96589.61 |
| **Latency** | 492µs    | 548µs    | 598µs    | 641µs    | 680µs    | 716µs    | 794µs    |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 70356.88 | 3675.14 | 86478.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69299.51 | 70104.95 | 70597.93 | 71334.37 | 72181.35 | 72828.61 | 74329.52 |
| **Latency** | 653µs    | 677µs    | 706µs    | 733µs    | 762µs    | 793µs    | 861µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25878.29 | 3719.90 | 32745.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24331.90 | 25211.83 | 26088.98 | 27913.11 | 29086.46 | 29655.48 | 30579.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Elysia](#elysia)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 100706.35 | 10700.92 | 137379.51 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 88302.38 | 92787.93 | 99335.63 | 107227.26 | 116228.57 | 120471.01 | 129143.84 |
| **Latency** | 289µs    | 373µs    | 484µs    | 583µs     | 693µs     | 812µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9056.65  | 1511.48 | 12057.20 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7104.70 | 8715.78 | 9243.84 | 9592.87 | 11109.26 | 11539.34 | 11747.20 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 7ms      | 8ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11248.81 | 2265.64 | 13404.05 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7746.61 | 11130.72 | 12249.73 | 12527.76 | 12663.75 | 12747.65 | 13028.10 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 75589.07 | 3607.12 | 87112.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 73425.91 | 74702.56 | 75856.55 | 76911.95 | 78053.15 | 79254.31 | 82563.41 |
| **Latency** | 577µs    | 613µs    | 664µs    | 704µs    | 733µs    | 757µs    | 835µs    |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33755.87 | 3246.76 | 36525.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33416.66 | 33822.84 | 34266.90 | 34628.30 | 34995.00 | 35228.98 | 35577.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 77753.50 | 3678.24 | 90651.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 75480.21 | 76418.42 | 77632.56 | 79046.23 | 80759.76 | 82509.08 | 85832.73 |
| **Latency** | 557µs    | 596µs    | 646µs    | 686µs    | 716µs    | 744µs    | 814µs    |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 73887.11 | 3910.36 | 85452.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72613.54 | 73357.15 | 74165.13 | 75091.37 | 76021.82 | 76802.55 | 78436.81 |
| **Latency** | 591µs    | 625µs    | 679µs    | 717µs    | 746µs    | 778µs    | 853µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52948.68 | 6181.76 | 62328.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49342.17 | 50991.82 | 55101.05 | 56105.21 | 57105.94 | 57641.62 | 58604.58 |
| **Latency** | 641µs    | 879µs    | 957µs    | 991µs    | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 112151.12 | 14224.90 | 144433.36 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 95005.18 | 100963.82 | 110512.38 | 121977.80 | 133018.78 | 137337.58 | 142281.12 |
| **Latency** | 260µs    | 334µs     | 424µs     | 533µs     | 637µs     | 727µs     | 979µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36817.53 | 4895.48 | 42540.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34909.26 | 36573.89 | 37904.58 | 39101.18 | 39893.79 | 40400.66 | 41925.05 |
| **Latency** | 854µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 71226.19 | 3713.23 | 81293.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 70305.62 | 70945.94 | 71678.66 | 72232.26 | 73019.39 | 73601.34 | 74828.66 |
| **Latency** | 614µs    | 646µs    | 705µs    | 743µs    | 773µs    | 807µs    | 873µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 75644.96 | 3376.78 | 87851.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 73955.50 | 74841.14 | 75713.23 | 76615.84 | 78026.24 | 79166.68 | 82351.61 |
| **Latency** | 577µs    | 613µs    | 664µs    | 703µs    | 731µs    | 754µs    | 829µs    |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37841.57 | 3126.28 | 41432.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37281.98 | 37765.25 | 38209.10 | 38641.19 | 39217.84 | 39616.50 | 40303.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41182.47 | 4253.15 | 44289.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40728.51 | 41426.36 | 42058.52 | 42424.59 | 42807.69 | 43096.81 | 43531.44 |
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
| 57788.09 | 3051.05 | 60235.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57301.92 | 57706.14 | 58328.87 | 58667.36 | 59081.25 | 59349.81 | 59801.91 |
| **Latency** | 756µs    | 788µs    | 878µs    | 917µs    | 949µs    | 991µs    | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49484.36 | 5430.06 | 56010.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46505.38 | 48003.52 | 51193.23 | 52448.04 | 53202.47 | 53859.01 | 54844.00 |
| **Latency** | 677µs    | 951µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 123977.03 | 13258.58 | 149382.02 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 105256.81 | 114101.99 | 124812.69 | 134632.62 | 141052.99 | 143144.00 | 146602.87 |
| **Latency** | 246µs     | 307µs     | 383µs     | 465µs     | 590µs     | 680µs     | 887µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8000.37  | 2667.73 | 17137.07 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5222.86 | 6553.11 | 8323.95 | 9806.89 | 10679.86 | 11726.92 | 13289.93 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 8ms      | 11ms     | 13ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 76450.04 | 3593.84 | 88800.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74252.12 | 75315.49 | 76493.50 | 77753.98 | 79103.24 | 80303.13 | 84243.29 |
| **Latency** | 570µs    | 606µs    | 657µs    | 696µs    | 724µs    | 747µs    | 831µs    |

---

<p align="center">Generated 2026-03-07T02:45:25.017Z</p>
