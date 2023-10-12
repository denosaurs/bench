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
| Hono                                                                                 | 65172.22 | 15769.77 | 75350.58  | 100%     |
| Deso                                                                                 | 64808.75 | 13290.76 | 72910.91  | 99%      |
| NHttp                                                                                | 63915.23 | 21675.32 | 81619.79  | 98%      |
| Vixeny (Deno)                                                                        | 63126.59 | 19906.10 | 79495.83  | 97%      |
| Fastro                                                                               | 61902.94 | 19218.20 | 76579.08  | 95%      |
| Fast                                                                                 | 60629.79 | 21035.46 | 78403.35  | 93%      |
| Stric                                                                                | 58638.72 | 10143.83 | 87087.24  | 90%      |
| Hyper Express                                                                        | 57829.54 | 13682.31 | 84799.71  | 89%      |
| Bun                                                                                  | 57753.92 | 10034.70 | 87675.55  | 89%      |
| Reno                                                                                 | 56412.50 | 6974.92  | 61725.46  | 87%      |
| Deno                                                                                 | 54039.10 | 13941.06 | 76440.71  | 83%      |
| Cheetah                                                                              | 48837.98 | 14675.71 | 60126.26  | 75%      |
| Node                                                                                 | 40082.30 | 6979.16  | 43713.34  | 62%      |
| http                                                                                 | 37874.39 | 9726.86  | 46281.82  | 58%      |
| Fastify                                                                              | 35698.43 | 7020.13  | 39042.66  | 55%      |
| Alosaur                                                                              | 31523.37 | 7302.86  | 39062.20  | 48%      |
| Router                                                                               | 28548.09 | 5232.32  | 34741.89  | 44%      |
| Aqua                                                                                 | 25741.59 | 4398.41  | 37226.90  | 39%      |
| Little                                                                               | 25445.17 | 5087.42  | 37857.83  | 39%      |
| Dinatra                                                                              | 22228.47 | 4868.16  | 47120.50  | 34%      |
| Oak                                                                                  | 22222.95 | 6319.90  | 30634.23  | 34%      |
| Abc                                                                                  | 18497.10 | 5218.15  | 25220.01  | 28%      |
| Danet (Oak)                                                                          | 18149.11 | 4637.59  | 71599.05  | 28%      |
| Express (Deno)                                                                       | 11745.79 | 2560.09  | 18129.12  | 18%      |
| Opine                                                                                | 10213.99 | 2827.92  | 14575.38  | 16%      |
| Express                                                                              | 7381.33  | 1729.56  | 12899.62  | 11%      |
| Servest                                                                              | 7331.88  | 2540.54  | 12544.48  | 11%      |
| Acorn                                                                                | 5556.87  | 12173.81 | 145631.07 | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-509ff88b-18e8-40b4-8d7e-564c5c28886b) |          |          |           |          |

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
| 18497.10 | 5218.15 | 25220.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10867.96 | 12625.29 | 20851.38 | 22047.00 | 24168.86 | 24609.53 | 24928.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 5556.87  | 12173.81 | 145631.07 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 56.27 | 1409.19 | 3441.41 | 7084.71 | 9656.06 | 11024.94 | 75400.57 |
| **Latency** | 5ms   | 7ms     | 15ms    | 21ms    | 27ms    | 29ms     | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31523.37 | 7302.86 | 39062.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23273.13 | 29314.43 | 34833.50 | 35699.59 | 36242.55 | 36612.44 | 37460.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25741.59 | 4398.41 | 37226.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22962.16 | 24911.08 | 27281.35 | 28060.78 | 28612.93 | 29015.44 | 30243.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57753.92 | 10034.70 | 87675.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47595.30 | 50762.05 | 55032.85 | 64810.31 | 72830.76 | 76501.69 | 81732.86 |
| **Latency** | 466µs    | 608µs    | 794µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48837.98 | 14675.71 | 60126.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23197.25 | 51044.57 | 56613.76 | 57454.00 | 58409.53 | 59013.49 | 59830.36 |
| **Latency** | 779µs    | 841µs    | 878µs    | 923µs    | 1ms      | 2ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18149.11 | 4637.59 | 71599.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12850.31 | 17868.83 | 19240.44 | 20009.08 | 20409.91 | 20776.77 | 22177.15 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54039.10 | 13941.06 | 76440.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32629.45 | 43423.36 | 54829.88 | 66210.10 | 71623.81 | 73420.76 | 74714.66 |
| **Latency** | 574µs    | 649µs    | 712µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64808.75 | 13290.76 | 72910.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42118.71 | 68118.58 | 69654.52 | 70611.48 | 71164.23 | 71501.00 | 72224.75 |
| **Latency** | 633µs    | 677µs    | 710µs    | 746µs    | 849µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22228.47 | 4868.16 | 47120.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19205.05 | 20756.97 | 23834.15 | 25280.94 | 25722.35 | 26354.36 | 27752.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7381.33  | 1729.56 | 12899.62 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5011.79 | 5663.79 | 8437.32 | 8626.33 | 8719.38 | 8753.51 | 8805.84 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 9ms     | 10ms    | 14ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11745.79 | 2560.09 | 18129.12 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8229.57 | 11642.18 | 12632.15 | 13115.06 | 13322.34 | 13597.96 | 14417.34 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60629.79 | 21035.46 | 78403.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27035.49 | 35104.09 | 74718.38 | 76242.78 | 76913.15 | 77161.48 | 77741.16 |
| **Latency** | 569µs    | 618µs    | 667µs    | 726µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35698.43 | 7020.13 | 39042.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34508.38 | 37130.18 | 37808.99 | 38419.31 | 38630.24 | 38725.19 | 38868.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61902.94 | 19218.20 | 76579.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27025.47 | 49724.50 | 73434.45 | 74335.14 | 75018.96 | 75504.73 | 75897.90 |
| **Latency** | 604µs    | 642µs    | 678µs    | 721µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65172.22 | 15769.77 | 75350.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28515.48 | 69418.24 | 72416.13 | 73179.96 | 73708.31 | 74015.35 | 74597.89 |
| **Latency** | 611µs    | 652µs    | 686µs    | 721µs    | 837µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37874.39 | 9726.86 | 46281.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18761.02 | 35964.07 | 43198.18 | 44436.11 | 45016.97 | 45357.81 | 45903.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57829.54 | 13682.31 | 84799.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39305.22 | 46747.35 | 59298.01 | 68450.16 | 75496.85 | 78302.47 | 82028.94 |
| **Latency** | 504µs    | 604µs    | 724µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25445.17 | 5087.42 | 37857.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18680.00 | 25517.45 | 26889.38 | 28225.64 | 28675.73 | 29116.69 | 29957.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

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
| 63915.23 | 21675.32 | 81619.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28104.01 | 43551.52 | 77825.90 | 79582.75 | 80363.08 | 80769.20 | 81387.43 |
| **Latency** | 509µs    | 588µs    | 650µs    | 703µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40082.30 | 6979.16 | 43713.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40194.17 | 41325.34 | 41915.21 | 42432.37 | 42819.82 | 43010.45 | 43302.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22222.95 | 6319.90 | 30634.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14020.29 | 17234.34 | 24865.95 | 27167.72 | 27777.28 | 28177.75 | 30063.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10213.99 | 2827.92 | 14575.38 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6497.57 | 8425.67 | 11362.50 | 12423.72 | 12784.49 | 12980.03 | 13960.16 |
| **Latency** | 3ms     | 3ms     | 4ms      | 5ms      | 6ms      | 8ms      | 14ms     |

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
| 56412.50 | 6974.92 | 61725.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56278.98 | 57407.08 | 58029.21 | 58544.04 | 59046.04 | 59310.87 | 59641.71 |
| **Latency** | 760µs    | 835µs    | 867µs    | 893µs    | 929µs    | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28548.09 | 5232.32 | 34741.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22643.31 | 27803.22 | 30581.45 | 31451.23 | 32039.81 | 32520.42 | 33789.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58638.72 | 10143.83 | 87087.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48615.03 | 52128.31 | 55816.08 | 64538.46 | 74645.97 | 78020.74 | 82372.97 |
| **Latency** | 463µs    | 607µs    | 790µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7331.88  | 2540.54 | 12544.48 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4017.78 | 6265.43 | 8325.71 | 9002.66 | 9503.73 | 9816.97 | 10361.22 |
| **Latency** | 3ms     | 4ms     | 6ms     | 8ms     | 10ms    | 14ms    | 18ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63126.59 | 19906.10 | 79495.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27900.75 | 49608.11 | 75497.66 | 77153.75 | 77825.97 | 78223.33 | 78787.18 |
| **Latency** | 533µs    | 608µs    | 667µs    | 720µs    | 1ms      | 1ms      | 2ms      |

---

<p align="center">Generated 2023-10-12T01:22:36.303Z</p>
