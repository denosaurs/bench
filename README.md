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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Hyper Express                                                                        | 85281.39 | 17049.76 | 109059.29 | 100%     |
| Stric                                                                                | 82653.73 | 10228.71 | 106818.15 | 97%      |
| Bun                                                                                  | 82399.77 | 10291.70 | 108129.78 | 97%      |
| Vixeny (Bun)                                                                         | 80350.26 | 14851.81 | 106618.88 | 94%      |
| Elysia                                                                               | 79378.55 | 12090.16 | 105606.17 | 93%      |
| Deno                                                                                 | 59866.86 | 9912.02  | 95653.37  | 70%      |
| Vixeny (Deno)                                                                        | 55700.74 | 7118.13  | 87439.40  | 65%      |
| Fast                                                                                 | 55487.54 | 5439.24  | 76430.94  | 65%      |
| NHttp                                                                                | 55070.97 | 6641.36  | 85127.38  | 65%      |
| Hono                                                                                 | 52681.16 | 4514.64  | 73129.71  | 62%      |
| Fastro                                                                               | 52443.35 | 4060.80  | 76432.81  | 61%      |
| Megalo                                                                               | 49331.94 | 2928.97  | 62171.17  | 58%      |
| Deso                                                                                 | 47771.26 | 2752.00  | 57411.90  | 56%      |
| http                                                                                 | 45757.64 | 4494.72  | 55433.32  | 54%      |
| Alosaur                                                                              | 45532.52 | 2627.87  | 67900.26  | 53%      |
| Cheetah                                                                              | 44420.25 | 2701.64  | 58204.17  | 52%      |
| Router                                                                               | 43594.21 | 4094.07  | 50221.26  | 51%      |
| Reno                                                                                 | 43274.96 | 2305.52  | 48918.14  | 51%      |
| Danet V2 (Hono)                                                                      | 37400.14 | 2637.95  | 40252.04  | 44%      |
| Aqua                                                                                 | 35078.48 | 3761.56  | 40559.28  | 41%      |
| Oak                                                                                  | 34771.18 | 3172.20  | 37903.57  | 41%      |
| Danet (Oak)                                                                          | 34646.37 | 2468.04  | 40625.34  | 41%      |
| Little                                                                               | 34234.16 | 4298.76  | 40326.04  | 40%      |
| Node                                                                                 | 18375.00 | 1521.96  | 21937.80  | 22%      |
| Dinatra                                                                              | 18206.96 | 2432.69  | 24856.73  | 21%      |
| Fastify                                                                              | 17921.10 | 1978.50  | 23824.74  | 21%      |
| Abc                                                                                  | 16184.80 | 1973.31  | 26509.69  | 19%      |
| Opine                                                                                | 15732.61 | 2548.90  | 23785.83  | 18%      |
| Express (Deno)                                                                       | 12530.36 | 2118.13  | 15023.63  | 15%      |
| Servest                                                                              | 6804.92  | 1669.88  | 12249.05  | 8%       |
| Express                                                                              | 6723.82  | 990.05   | 8613.96   | 8%       |
| Acorn                                                                                | 3904.89  | 3396.30  | 76703.00  | 5%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-51ff3ca7-b1e5-473b-9a9a-0f398338e617) |          |          |           |          |

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
| 16184.80 | 1973.31 | 26509.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14688.08 | 15373.51 | 16138.01 | 16980.38 | 17923.70 | 18817.92 | 21478.41 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3904.89  | 3396.30 | 76703.00 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 2240.15 | 2500.32 | 3037.88 | 4117.21 | 5502.40 | 7191.68 | 16041.03 |
| **Latency** | 3ms     | 8ms     | 12ms    | 17ms    | 21ms    | 23ms    | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45532.52 | 2627.87 | 67900.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43408.49 | 44355.47 | 45362.36 | 46532.17 | 47850.31 | 49961.15 | 51997.27 |
| **Latency** | 953µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35078.48 | 3761.56 | 40559.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32856.13 | 34517.62 | 35655.05 | 36854.30 | 38029.86 | 38603.95 | 39369.96 |
| **Latency** | 968µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 82399.77 | 10291.70 | 108129.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 69537.72 | 73837.21 | 80988.42 | 90683.97 | 97224.86 | 99737.31 | 103504.29 |
| **Latency** | 358µs    | 446µs    | 568µs    | 720µs    | 906µs    | 1ms      | 1ms       |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44420.25 | 2701.64 | 58204.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42130.19 | 43359.42 | 44739.75 | 45708.14 | 46619.38 | 47434.12 | 48786.37 |
| **Latency** | 969µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34646.37 | 2468.04 | 40625.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33304.52 | 34154.35 | 34773.45 | 35809.84 | 36509.78 | 36779.99 | 37136.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37400.14 | 2637.95 | 40252.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35653.91 | 36779.94 | 37894.59 | 38687.15 | 39073.12 | 39305.31 | 39771.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59866.86 | 9912.02 | 95653.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53219.60 | 54630.63 | 56471.43 | 58541.68 | 77551.18 | 85668.20 | 90313.40 |
| **Latency** | 543µs    | 752µs    | 865µs    | 948µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47771.26 | 2752.00 | 57411.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45214.83 | 46374.55 | 47775.35 | 49026.84 | 50719.42 | 52346.04 | 54521.37 |
| **Latency** | 942µs    | 993µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18206.96 | 2432.69 | 24856.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16329.44 | 17550.26 | 18651.16 | 19618.99 | 20258.92 | 20597.22 | 21766.40 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 79378.55 | 12090.16 | 105606.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 61500.54 | 69919.16 | 81322.71 | 87553.03 | 95731.44 | 98850.39 | 102514.37 |
| **Latency** | 396µs    | 481µs    | 554µs    | 737µs    | 972µs    | 1ms      | 1ms       |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6723.82  | 990.05 | 8613.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5412.79 | 6413.02 | 6854.37 | 7164.11 | 7964.62 | 8211.73 | 8444.26 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12530.36 | 2118.13 | 15023.63 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9549.61 | 12519.78 | 13269.49 | 13677.66 | 13922.03 | 14040.95 | 14559.42 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55487.54 | 5439.24 | 76430.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50314.85 | 52004.42 | 54143.17 | 58544.10 | 62777.66 | 65762.44 | 71244.89 |
| **Latency** | 625µs    | 827µs    | 927µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17921.10 | 1978.50 | 23824.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16411.16 | 17286.90 | 18350.17 | 19007.00 | 19437.09 | 19636.45 | 19922.15 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52443.35 | 4060.80 | 76432.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49343.97 | 50499.93 | 51860.96 | 53348.96 | 57129.18 | 59990.15 | 65652.12 |
| **Latency** | 802µs    | 886µs    | 964µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52681.16 | 4514.64 | 73129.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49203.01 | 50363.25 | 52000.35 | 53709.05 | 57991.75 | 61118.14 | 67603.47 |
| **Latency** | 791µs    | 879µs    | 959µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45757.64 | 4494.72 | 55433.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41856.56 | 44615.50 | 46463.62 | 48366.61 | 49721.01 | 50304.44 | 52054.26 |
| **Latency** | 812µs    | 978µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 85281.39 | 17049.76 | 109059.29 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 60524.06 | 68131.46 | 90927.32 | 100009.69 | 103929.13 | 105415.92 | 107471.94 |
| **Latency** | 348µs    | 431µs    | 535µs    | 689µs     | 892µs     | 1ms       | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34234.16 | 4298.76 | 40326.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31604.99 | 33847.40 | 35301.29 | 36307.12 | 37222.84 | 37807.33 | 38941.60 |
| **Latency** | 990µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49331.94 | 2928.97 | 62171.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46630.76 | 47900.33 | 49422.61 | 50692.66 | 52230.22 | 53656.57 | 56114.53 |
| **Latency** | 873µs    | 939µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55070.97 | 6641.36 | 85127.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50292.98 | 51706.51 | 53145.56 | 55136.86 | 65370.06 | 71061.96 | 79067.85 |
| **Latency** | 637µs    | 842µs    | 932µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18375.00 | 1521.96 | 21937.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17640.91 | 18114.45 | 18604.58 | 18986.98 | 19353.87 | 19626.04 | 20108.61 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34771.18 | 3172.20 | 37903.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33436.88 | 34409.50 | 35333.47 | 36119.37 | 36451.96 | 36685.37 | 37139.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15732.61 | 2548.90 | 23785.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13517.61 | 15465.56 | 16224.99 | 16780.40 | 17556.73 | 18889.88 | 20191.50 |
| **Latency** | 1ms      | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

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
| 43274.96 | 2305.52 | 48918.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41205.15 | 42306.00 | 43567.15 | 44496.67 | 45323.42 | 45720.23 | 46892.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43594.21 | 4094.07 | 50221.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40813.56 | 42752.17 | 44332.69 | 45806.39 | 46756.94 | 47327.90 | 48718.05 |
| **Latency** | 841µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 82653.73 | 10228.71 | 106818.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 69016.64 | 74537.03 | 82236.23 | 90898.86 | 96874.71 | 99467.13 | 102859.51 |
| **Latency** | 356µs    | 444µs    | 564µs    | 719µs    | 912µs    | 1ms      | 1ms       |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6804.92  | 1669.88 | 12249.05 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5225.64 | 5958.72 | 6937.23 | 7721.27 | 8763.27 | 9356.20 | 10341.46 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 8ms     | 11ms    | 13ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 80350.26 | 14851.81 | 106618.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 60902.20 | 65612.14 | 82125.03 | 93718.37 | 99421.30 | 101676.80 | 104559.25 |
| **Latency** | 364µs    | 449µs    | 568µs    | 754µs    | 927µs    | 1ms       | 1ms       |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55700.74 | 7118.13 | 87439.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50188.22 | 51756.41 | 53518.23 | 56240.41 | 65888.10 | 72445.23 | 80168.52 |
| **Latency** | 611µs    | 826µs    | 923µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-04-23T01:27:48.614Z</p>
