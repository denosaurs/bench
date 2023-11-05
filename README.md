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
| NHttp                                                                                | 44028.37 | 12319.07 | 61136.36  | 100%     |
| Vixeny (Deno)                                                                        | 42677.83 | 12025.00 | 60954.46  | 97%      |
| Deno                                                                                 | 41337.72 | 13831.63 | 62377.03  | 94%      |
| Fast                                                                                 | 40927.82 | 12257.12 | 58033.97  | 93%      |
| Hyper Express                                                                        | 40280.68 | 16129.60 | 65376.44  | 91%      |
| Bun                                                                                  | 39589.93 | 12569.08 | 144032.92 | 90%      |
| Stric                                                                                | 39524.44 | 12186.76 | 66479.72  | 90%      |
| Hono                                                                                 | 39338.72 | 11780.10 | 55241.14  | 89%      |
| Fastro                                                                               | 38777.36 | 10622.84 | 54232.79  | 88%      |
| Deso                                                                                 | 37328.64 | 10444.39 | 53146.47  | 85%      |
| Megalo                                                                               | 35373.13 | 9925.49  | 50722.99  | 80%      |
| Cheetah                                                                              | 34273.41 | 7628.30  | 44455.80  | 78%      |
| Reno                                                                                 | 32341.92 | 6478.73  | 41222.46  | 73%      |
| http                                                                                 | 27073.15 | 6301.53  | 36479.13  | 61%      |
| Alosaur                                                                              | 21696.67 | 5007.09  | 29435.88  | 49%      |
| Aqua                                                                                 | 18485.81 | 3677.58  | 25577.30  | 42%      |
| Node                                                                                 | 18390.76 | 3488.03  | 24901.72  | 42%      |
| Router                                                                               | 17958.57 | 3727.73  | 25422.09  | 41%      |
| Little                                                                               | 16462.87 | 4439.97  | 89650.65  | 37%      |
| Oak                                                                                  | 15195.69 | 3497.66  | 22826.65  | 35%      |
| Fastify                                                                              | 14748.83 | 2755.32  | 18319.69  | 33%      |
| Dinatra                                                                              | 13277.61 | 3063.44  | 22167.13  | 30%      |
| Abc                                                                                  | 10559.43 | 2175.98  | 15783.60  | 24%      |
| Danet (Oak)                                                                          | 9806.28  | 2784.91  | 30253.07  | 22%      |
| Opine                                                                                | 6729.67  | 1621.62  | 16841.08  | 15%      |
| Express (Deno)                                                                       | 6473.64  | 1517.21  | 9744.35   | 15%      |
| Acorn                                                                                | 5152.61  | 8732.99  | 144931.04 | 12%      |
| Servest                                                                              | 4287.88  | 1387.39  | 9679.30   | 10%      |
| Express                                                                              | 4025.39  | 1032.08  | 10969.85  | 9%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-ce6d845d-848e-49d0-939f-41f231505ebf) |          |          |           |          |

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
| 10559.43 | 2175.98 | 15783.60 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7431.85 | 9906.29 | 11002.81 | 11934.55 | 12743.14 | 13161.40 | 13903.69 |
| **Latency** | 3ms     | 3ms     | 3ms      | 5ms      | 7ms      | 7ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5152.61  | 8732.99 | 144931.04 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 51.28 | 71.18 | 4288.32 | 7160.95 | 10515.41 | 13277.70 | 41510.84 |
| **Latency** | 8ms   | 10ms  | 19ms    | 25ms    | 29ms     | 32ms     | 39ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21696.67 | 5007.09 | 29435.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16020.27 | 20384.30 | 23139.10 | 24645.70 | 25808.91 | 26487.07 | 27916.15 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18485.81 | 3677.58 | 25577.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14339.74 | 17505.47 | 19202.79 | 20679.48 | 21815.95 | 22490.94 | 23601.48 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 39589.93 | 12569.08 | 144032.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24297.95 | 30012.76 | 38651.25 | 50320.93 | 55982.06 | 58446.41 | 62468.73 |
| **Latency** | 634µs    | 810µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34273.41 | 7628.30 | 44455.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22114.00 | 33354.59 | 36627.28 | 38852.64 | 40732.18 | 41662.27 | 42931.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9806.28  | 2784.91 | 30253.07 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5712.87 | 8509.32 | 10527.50 | 11449.93 | 12170.65 | 13022.11 | 15433.89 |
| **Latency** | 3ms     | 4ms     | 4ms      | 5ms      | 6ms      | 8ms      | 13ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41337.72 | 13831.63 | 62377.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19548.77 | 29500.15 | 46429.95 | 52626.04 | 55455.38 | 57143.14 | 60016.58 |
| **Latency** | 740µs    | 843µs    | 978µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37328.64 | 10444.39 | 53146.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18485.30 | 31525.54 | 41745.45 | 44720.76 | 46944.33 | 48145.12 | 50415.85 |
| **Latency** | 917µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13277.61 | 3063.44 | 22167.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10161.53 | 11610.15 | 14052.26 | 15331.96 | 16206.56 | 16632.12 | 17654.64 |
| **Latency** | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4025.39  | 1032.08 | 10969.85 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2591.33 | 3432.58 | 4406.54 | 4709.87 | 4892.69 | 5010.50 | 5243.65 |
| **Latency** | 10ms    | 10ms    | 11ms    | 12ms    | 17ms    | 19ms    | 25ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6473.64  | 1517.21 | 9744.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4192.93 | 6052.81 | 6955.73 | 7450.24 | 7809.13 | 8040.64 | 8622.79 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 12ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40927.82 | 12257.12 | 58033.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18932.66 | 34926.36 | 45346.92 | 50023.43 | 53069.78 | 54118.99 | 56213.76 |
| **Latency** | 801µs    | 890µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14748.83 | 2755.32 | 18319.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11946.62 | 14520.10 | 15517.60 | 16265.45 | 16768.31 | 17106.40 | 17704.19 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38777.36 | 10622.84 | 54232.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18806.44 | 34136.35 | 43082.50 | 46132.27 | 48347.28 | 49439.16 | 51840.84 |
| **Latency** | 887µs    | 988µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39338.72 | 11780.10 | 55241.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18580.36 | 32510.56 | 44110.80 | 47624.99 | 50445.53 | 51756.96 | 53467.09 |
| **Latency** | 842µs    | 940µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27073.15 | 6301.53 | 36479.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19052.54 | 25449.14 | 29025.09 | 30778.35 | 32286.35 | 33125.47 | 34710.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40280.68 | 16129.60 | 65376.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16805.79 | 23952.33 | 43662.21 | 55027.02 | 59053.22 | 60793.31 | 63815.62 |
| **Latency** | 613µs    | 774µs    | 948µs    | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16462.87 | 4439.97 | 89650.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12147.23 | 15863.93 | 17366.27 | 18550.89 | 19466.97 | 20033.29 | 21357.67 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 9ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35373.13 | 9925.49 | 50722.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17511.29 | 31142.78 | 39274.02 | 42018.69 | 44285.68 | 45614.82 | 47477.50 |
| **Latency** | 982µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44028.37 | 12319.07 | 61136.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20253.77 | 38518.88 | 48682.51 | 52761.70 | 55614.18 | 56703.11 | 58991.08 |
| **Latency** | 767µs    | 847µs    | 967µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18390.76 | 3488.03 | 24901.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15131.89 | 17837.54 | 19227.20 | 20333.04 | 21195.91 | 21697.31 | 22528.72 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15195.69 | 3497.66 | 22826.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10844.48 | 14008.05 | 16122.14 | 17246.68 | 18296.92 | 19052.22 | 20608.96 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6729.67  | 1621.62 | 16841.08 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5144.80 | 6358.51 | 7013.73 | 7503.11 | 7925.39 | 8128.30 | 11003.02 |
| **Latency** | 5ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 17ms     |

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
| 32341.92 | 6478.73 | 41222.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22303.68 | 30775.88 | 34356.09 | 36307.59 | 38008.51 | 38860.42 | 40101.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17958.57 | 3727.73 | 25422.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14344.92 | 17148.10 | 18710.55 | 20016.67 | 21156.72 | 21917.67 | 23563.81 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39524.44 | 12186.76 | 66479.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22906.20 | 29107.32 | 39299.43 | 49887.35 | 55875.71 | 58832.07 | 62312.77 |
| **Latency** | 635µs    | 792µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4287.88  | 1387.39 | 9679.30 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2416.95 | 3800.66 | 4703.92 | 5152.84 | 5501.89 | 5722.57 | 6584.50 |
| **Latency** | 6ms     | 8ms     | 11ms    | 14ms    | 18ms    | 21ms    | 28ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42677.83 | 12025.00 | 60954.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19802.47 | 37640.70 | 47153.04 | 51018.60 | 53607.22 | 55449.98 | 57820.51 |
| **Latency** | 790µs    | 875µs    | 998µs    | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-11-05T01:30:58.225Z</p>
