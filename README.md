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
| Hyper Express                                                                        | 81442.50 | 16164.70 | 101880.70 | 100%     |
| Stric                                                                                | 79666.35 | 9690.50  | 103173.51 | 98%      |
| Elysia                                                                               | 78824.98 | 11856.01 | 102330.14 | 97%      |
| Bun                                                                                  | 78336.45 | 9802.26  | 102470.70 | 96%      |
| Vixeny (Bun)                                                                         | 76981.31 | 14206.47 | 101608.34 | 95%      |
| Deno                                                                                 | 67771.53 | 13337.47 | 93608.63  | 83%      |
| Fast                                                                                 | 56577.02 | 9204.52  | 84017.79  | 69%      |
| Vixeny (Deno)                                                                        | 56247.35 | 9134.53  | 84617.90  | 69%      |
| NHttp                                                                                | 52080.47 | 5472.55  | 84742.57  | 64%      |
| Fastro                                                                               | 52047.31 | 5498.32  | 79398.83  | 64%      |
| Hono                                                                                 | 51422.47 | 4459.97  | 74807.34  | 63%      |
| Megalo                                                                               | 48906.29 | 3807.30  | 66780.47  | 60%      |
| Deso                                                                                 | 47054.50 | 2958.42  | 62010.13  | 58%      |
| Alosaur                                                                              | 46089.14 | 3003.60  | 66018.75  | 57%      |
| http                                                                                 | 44144.40 | 3653.61  | 50408.51  | 54%      |
| Router                                                                               | 42482.96 | 3281.52  | 50903.17  | 52%      |
| Cheetah                                                                              | 42336.26 | 2460.28  | 52976.45  | 52%      |
| Reno                                                                                 | 41532.47 | 2215.87  | 49228.03  | 51%      |
| Danet V2 (Hono)                                                                      | 36396.31 | 2261.85  | 42594.52  | 45%      |
| Aqua                                                                                 | 34361.49 | 2904.80  | 39115.86  | 42%      |
| Danet (Oak)                                                                          | 34234.23 | 2313.95  | 36570.89  | 42%      |
| Little                                                                               | 33887.86 | 3812.75  | 39075.29  | 42%      |
| Oak                                                                                  | 32273.29 | 2816.90  | 34601.32  | 40%      |
| Acorn                                                                                | 30898.55 | 2655.03  | 41303.42  | 38%      |
| Dinatra                                                                              | 17424.88 | 1895.33  | 21355.97  | 21%      |
| Node                                                                                 | 17163.70 | 1478.41  | 30813.85  | 21%      |
| Fastify                                                                              | 16550.08 | 2865.78  | 31985.25  | 20%      |
| Opine                                                                                | 15757.96 | 2279.30  | 24154.87  | 19%      |
| Abc                                                                                  | 14524.34 | 1970.32  | 20581.70  | 18%      |
| Express (Deno)                                                                       | 12302.30 | 2840.17  | 80980.09  | 15%      |
| Servest                                                                              | 6474.07  | 1285.79  | 10200.55  | 8%       |
| Express                                                                              | 6379.60  | 942.68   | 8014.23   | 8%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-fb8b02ed-e587-4a78-b132-f51435cc89ec) |          |          |           |          |

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
| 14524.34 | 1970.32 | 20581.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12845.54 | 13503.84 | 14266.48 | 15038.23 | 17235.74 | 18640.12 | 19513.09 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30898.55 | 2655.03 | 41303.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30025.69 | 30923.17 | 31199.08 | 31507.90 | 31934.40 | 32163.17 | 39310.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46089.14 | 3003.60 | 66018.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43775.61 | 44960.30 | 45865.73 | 47380.68 | 49011.91 | 50315.76 | 53436.34 |
| **Latency** | 939µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34361.49 | 2904.80 | 39115.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32521.04 | 33532.51 | 34807.37 | 35832.36 | 36697.79 | 37264.52 | 38270.30 |
| **Latency** | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 78336.45 | 9802.26 | 102470.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65691.40 | 70104.40 | 77799.59 | 85872.79 | 92168.95 | 94847.95 | 98731.02 |
| **Latency** | 377µs    | 470µs    | 595µs    | 756µs    | 964µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42336.26 | 2460.28 | 52976.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40736.96 | 41941.22 | 42604.72 | 43246.74 | 44149.55 | 44693.17 | 45837.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34234.23 | 2313.95 | 36570.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33664.45 | 34280.05 | 34562.61 | 34868.80 | 35298.54 | 35492.24 | 35758.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36396.31 | 2261.85 | 42594.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35952.97 | 36443.02 | 36686.14 | 36977.59 | 37340.59 | 37559.56 | 37868.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67771.53 | 13337.47 | 93608.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53642.63 | 55538.78 | 64898.74 | 79545.51 | 87200.35 | 90075.79 | 92819.88 |
| **Latency** | 498µs    | 553µs    | 722µs    | 905µs    | 996µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47054.50 | 2958.42 | 62010.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45197.51 | 45914.79 | 46609.66 | 47701.39 | 50307.12 | 52366.10 | 55563.76 |
| **Latency** | 969µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17424.88 | 1895.33 | 21355.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15558.90 | 16593.40 | 17676.01 | 18640.27 | 19320.83 | 19617.69 | 20346.24 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78824.98 | 11856.01 | 102330.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 60632.74 | 71661.57 | 78990.52 | 87148.10 | 94730.59 | 97318.17 | 100281.87 |
| **Latency** | 403µs    | 501µs    | 568µs    | 718µs    | 967µs    | 1ms      | 1ms       |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6379.60  | 942.68 | 8014.23 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5014.61 | 6124.57 | 6546.54 | 6720.56 | 7616.57 | 7790.38 | 7902.71 |
| **Latency** | 6ms     | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12302.30 | 2840.17 | 80980.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10582.78 | 12373.29 | 12729.04 | 13051.31 | 13371.26 | 13614.19 | 14069.25 |
| **Latency** | 3ms      | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56577.02 | 9204.52 | 84017.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49358.27 | 50304.38 | 51910.46 | 62109.70 | 71450.69 | 76716.00 | 81855.78 |
| **Latency** | 581µs    | 690µs    | 932µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16550.08 | 2865.78 | 31985.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15468.02 | 15753.90 | 16305.57 | 16721.56 | 17125.04 | 22751.22 | 28214.95 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52047.31 | 5498.32 | 79398.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48545.79 | 49510.80 | 50421.78 | 52131.01 | 59119.74 | 63918.19 | 73033.94 |
| **Latency** | 738µs    | 899µs    | 984µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51422.47 | 4459.97 | 74807.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48636.30 | 49405.10 | 50298.82 | 51913.59 | 57003.09 | 60152.50 | 66906.90 |
| **Latency** | 801µs    | 909µs    | 991µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44144.40 | 3653.61 | 50408.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41016.73 | 43015.18 | 44965.99 | 46103.20 | 46901.88 | 47665.49 | 48876.97 |
| **Latency** | 847µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 81442.50 | 16164.70 | 101880.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 57888.76 | 64419.12 | 87727.02 | 95741.65 | 98439.46 | 99385.06 | 100623.41 |
| **Latency** | 364µs    | 455µs    | 564µs    | 722µs    | 925µs    | 1ms      | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33887.86 | 3812.75 | 39075.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31930.07 | 33537.14 | 34738.54 | 35635.14 | 36407.64 | 37014.36 | 37990.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48906.29 | 3807.30 | 66780.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46153.49 | 47012.14 | 47952.61 | 50520.70 | 53718.90 | 55849.33 | 59438.18 |
| **Latency** | 850µs    | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52080.47 | 5472.55 | 84742.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49305.01 | 50122.29 | 50928.28 | 51899.37 | 54433.71 | 62963.28 | 78788.58 |
| **Latency** | 803µs    | 897µs    | 978µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17163.70 | 1478.41 | 30813.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16920.39 | 17146.83 | 17335.82 | 17547.17 | 17798.08 | 17934.50 | 18266.71 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32273.29 | 2816.90 | 34601.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31842.02 | 32392.61 | 32810.59 | 33200.27 | 33481.24 | 33693.86 | 34001.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15757.96 | 2279.30 | 24154.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13532.45 | 15506.97 | 16145.12 | 16651.14 | 17333.50 | 18899.28 | 20410.91 |
| **Latency** | 1ms      | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

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
| 41532.47 | 2215.87 | 49228.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39837.87 | 41000.88 | 41725.38 | 42518.65 | 43333.22 | 43935.00 | 45223.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42482.96 | 3281.52 | 50903.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40031.68 | 41337.77 | 43139.90 | 44060.29 | 45224.24 | 45762.00 | 46757.65 |
| **Latency** | 872µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 79666.35 | 9690.50 | 103173.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67211.41 | 72010.50 | 79124.92 | 86903.53 | 93336.60 | 95949.06 | 99706.41 |
| **Latency** | 372µs    | 463µs    | 587µs    | 746µs    | 941µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6474.07  | 1285.79 | 10200.55 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5222.19 | 5668.41 | 6553.38 | 7055.19 | 8066.61 | 8624.70 | 9177.47 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 9ms     | 13ms    |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 76981.31 | 14206.47 | 101608.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58597.94 | 62840.61 | 76857.85 | 90602.99 | 95116.03 | 97495.02 | 99832.22 |
| **Latency** | 377µs    | 467µs    | 591µs    | 796µs    | 966µs    | 1ms      | 1ms      |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56247.35 | 9134.53 | 84617.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49705.66 | 50580.21 | 51722.98 | 60414.11 | 72247.44 | 76521.19 | 81017.62 |
| **Latency** | 582µs    | 762µs    | 932µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-06-11T01:34:31.094Z</p>
