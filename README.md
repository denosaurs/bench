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
| Stric                                                                                | 102282.10 | 5505.67 | 118203.08 | 100%     |
| Hyper Express                                                                        | 100413.67 | 6146.53 | 121433.32 | 98%      |
| Bun                                                                                  | 98981.76  | 6656.44 | 115973.62 | 97%      |
| Elysia                                                                               | 93906.84  | 6866.71 | 114906.71 | 92%      |
| Deno                                                                                 | 79848.31  | 6108.53 | 102243.89 | 78%      |
| Vixeny (Deno)                                                                        | 73471.35  | 5691.26 | 102536.89 | 72%      |
| Fastro                                                                               | 72714.63  | 6097.64 | 103490.81 | 71%      |
| NHttp                                                                                | 72687.68  | 5984.21 | 102578.50 | 71%      |
| Fast                                                                                 | 71968.43  | 5619.44 | 101422.54 | 70%      |
| Hono                                                                                 | 69537.79  | 4957.27 | 93220.62  | 68%      |
| Deso                                                                                 | 66030.20  | 4197.73 | 88145.13  | 65%      |
| Megalo                                                                               | 64952.65  | 3146.51 | 76216.74  | 64%      |
| Alosaur                                                                              | 61266.58  | 3131.70 | 73913.49  | 60%      |
| Cheetah                                                                              | 56049.08  | 2911.26 | 65465.62  | 55%      |
| Reno                                                                                 | 56028.50  | 2412.90 | 58971.01  | 55%      |
| http                                                                                 | 54614.98  | 5768.51 | 62905.79  | 53%      |
| Router                                                                               | 52590.19  | 4941.40 | 60827.05  | 51%      |
| Danet V2 (Hono)                                                                      | 47943.42  | 3102.21 | 50651.08  | 47%      |
| Danet (Oak)                                                                          | 45669.87  | 2919.38 | 48052.89  | 45%      |
| Oak                                                                                  | 42532.86  | 3601.54 | 44939.69  | 42%      |
| Aqua                                                                                 | 40818.38  | 4211.57 | 49004.59  | 40%      |
| Little                                                                               | 40386.11  | 4597.35 | 45579.79  | 39%      |
| Node                                                                                 | 34957.16  | 3250.94 | 43700.78  | 34%      |
| Dinatra                                                                              | 26958.51  | 3879.10 | 34226.59  | 26%      |
| Fastify                                                                              | 24625.69  | 2284.80 | 37629.79  | 24%      |
| Abc                                                                                  | 18728.22  | 1898.99 | 25031.55  | 18%      |
| Express (Deno)                                                                       | 14128.52  | 3009.85 | 17436.35  | 14%      |
| Express                                                                              | 9319.19   | 2130.90 | 13457.94  | 9%       |
| Servest                                                                              | 8321.94   | 2324.46 | 16115.06  | 8%       |
| Acorn                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00    | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-538a31eb-d489-4470-a570-0b1d4422d07b) |           |         |           |          |

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
| 18728.22 | 1898.99 | 25031.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17234.46 | 18061.59 | 18940.34 | 19682.12 | 20445.44 | 20896.18 | 22824.89 |
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
| 61266.58 | 3131.70 | 73913.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60054.96 | 60871.11 | 61621.86 | 62224.98 | 62854.94 | 63340.39 | 65703.02 |
| **Latency** | 720µs    | 753µs    | 822µs    | 864µs    | 894µs    | 923µs    | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40818.38 | 4211.57 | 49004.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38714.14 | 40129.53 | 41526.15 | 42885.47 | 43864.71 | 44597.53 | 46555.50 |
| **Latency** | 819µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 98981.76 | 6656.44 | 115973.62 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 91331.01 | 95854.35 | 99564.20 | 103003.07 | 106700.16 | 108370.05 | 111737.92 |
| **Latency** | 316µs    | 398µs    | 481µs    | 585µs     | 723µs     | 811µs     | 1ms       |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56049.08 | 2911.26 | 65465.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55132.03 | 55815.37 | 56401.25 | 56927.63 | 57464.82 | 57749.80 | 58663.26 |
| **Latency** | 781µs    | 815µs    | 901µs    | 940µs    | 990µs    | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45669.87 | 2919.38 | 48052.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45048.47 | 45554.42 | 46204.76 | 46569.00 | 46842.49 | 47050.71 | 47462.63 |
| **Latency** | 953µs    | 991µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47943.42 | 3102.21 | 50651.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47375.13 | 47819.53 | 48498.23 | 48846.47 | 49151.62 | 49431.01 | 49822.63 |
| **Latency** | 909µs    | 943µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 79848.31 | 6108.53 | 102243.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74044.15 | 75520.40 | 79175.03 | 83305.16 | 88100.91 | 90623.85 | 95506.34 |
| **Latency** | 468µs    | 565µs    | 639µs    | 699µs    | 739µs    | 779µs    | 855µs    |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 66030.20 | 4197.73 | 88145.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63512.77 | 64460.32 | 65405.08 | 66707.30 | 70316.29 | 73279.96 | 79337.65 |
| **Latency** | 675µs    | 727µs    | 759µs    | 795µs    | 831µs    | 876µs    | 968µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26958.51 | 3879.10 | 34226.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24366.40 | 25862.06 | 27457.44 | 29256.88 | 30517.45 | 31097.32 | 32407.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Elysia](#elysia)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 93906.84 | 6866.71 | 114906.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 85233.38 | 89412.02 | 93940.36 | 98514.40 | 102578.06 | 104777.67 | 108728.52 |
| **Latency** | 335µs    | 414µs    | 513µs    | 616µs    | 737µs     | 861µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9319.19  | 2130.90 | 13457.94 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6548.52 | 8008.85 | 9214.72 | 10964.11 | 12333.37 | 12800.40 | 13124.59 |
| **Latency** | 3ms     | 4ms     | 5ms     | 6ms      | 6ms      | 8ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14128.52 | 3009.85 | 17436.35 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8881.72 | 13764.37 | 15302.78 | 16012.20 | 16278.48 | 16538.21 | 16920.18 |
| **Latency** | 2ms     | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 71968.43 | 5619.44 | 101422.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 68308.48 | 69312.57 | 70511.17 | 73621.55 | 78726.85 | 82111.04 | 91562.16 |
| **Latency** | 558µs    | 648µs    | 705µs    | 758µs    | 790µs    | 818µs    | 903µs    |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24625.69 | 2284.80 | 37629.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23735.60 | 24261.25 | 24748.91 | 25292.37 | 25919.62 | 26608.39 | 28777.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 72714.63 | 6097.64 | 103490.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 68781.62 | 69652.15 | 70814.28 | 74918.47 | 79835.88 | 83744.38 | 92812.38 |
| **Latency** | 541µs    | 640µs    | 700µs    | 754µs    | 786µs    | 819µs    | 905µs    |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69537.79 | 4957.27 | 93220.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66553.55 | 67496.71 | 68523.96 | 70663.96 | 75322.38 | 77931.35 | 83854.51 |
| **Latency** | 595µs    | 668µs    | 726µs    | 779µs    | 813µs    | 854µs    | 940µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54614.98 | 5768.51 | 62905.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51009.41 | 52731.51 | 56448.17 | 57800.31 | 58658.04 | 59196.18 | 60295.82 |
| **Latency** | 671µs    | 805µs    | 915µs    | 961µs    | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 100413.67 | 6146.53 | 121433.32 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 93013.88 | 96603.99 | 100908.54 | 104242.55 | 107722.73 | 109489.12 | 112955.62 |
| **Latency** | 313µs    | 400µs    | 485µs     | 579µs     | 683µs     | 780µs     | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40386.11 | 4597.35 | 45579.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38577.38 | 40471.71 | 41446.61 | 42345.60 | 43121.31 | 43604.74 | 44559.93 |
| **Latency** | 832µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64952.65 | 3146.51 | 76216.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63610.02 | 64302.49 | 65067.04 | 65742.98 | 66694.72 | 67419.47 | 73000.39 |
| **Latency** | 679µs    | 713µs    | 775µs    | 816µs    | 848µs    | 884µs    | 956µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 72687.68 | 5984.21 | 102578.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 68537.46 | 69562.75 | 70905.24 | 74485.05 | 79904.40 | 83936.25 | 95060.99 |
| **Latency** | 541µs    | 643µs    | 701µs    | 755µs    | 786µs    | 809µs    | 884µs    |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34957.16 | 3250.94 | 43700.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33731.70 | 34538.07 | 35342.69 | 36116.32 | 36790.97 | 37237.15 | 38955.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42532.86 | 3601.54 | 44939.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42042.62 | 42573.27 | 43224.01 | 43573.69 | 44020.84 | 44196.83 | 44570.92 |
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
| 56028.50 | 2412.90 | 58971.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55211.72 | 55807.57 | 56360.29 | 56774.00 | 57302.43 | 57549.06 | 58118.91 |
| **Latency** | 786µs    | 819µs    | 904µs    | 943µs    | 976µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52590.19 | 4941.40 | 60827.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49704.15 | 51522.13 | 53451.81 | 55342.22 | 56399.57 | 57061.86 | 58119.75 |
| **Latency** | 689µs    | 846µs    | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 102282.10 | 5505.67 | 118203.08 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 95316.97 | 98441.80 | 102433.70 | 106126.20 | 109124.30 | 111028.16 | 113766.42 |
| **Latency** | 306µs    | 395µs    | 472µs     | 570µs     | 669µs     | 767µs     | 961µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8321.94  | 2324.46 | 16115.06 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5346.28 | 7109.20 | 8530.92 | 9873.73 | 10945.91 | 11816.19 | 13384.77 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms     | 7ms      | 9ms      | 12ms     |

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
| 73471.35 | 5691.26 | 102536.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69501.66 | 70504.88 | 71753.97 | 75650.48 | 80603.72 | 83603.27 | 91747.55 |
| **Latency** | 535µs    | 636µs    | 694µs    | 747µs    | 777µs    | 800µs    | 872µs    |

---

<p align="center">Generated 2026-04-24T03:46:42.348Z</p>
