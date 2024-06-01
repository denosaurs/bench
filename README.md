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
| Hyper Express                                                                        | 83285.72 | 15377.11 | 102407.18 | 100%     |
| Bun                                                                                  | 78870.04 | 9821.42  | 101237.55 | 95%      |
| Vixeny (Bun)                                                                         | 78692.39 | 14026.75 | 102061.27 | 94%      |
| Elysia                                                                               | 78063.96 | 13437.07 | 100834.72 | 94%      |
| Stric                                                                                | 77891.05 | 9521.71  | 100714.49 | 94%      |
| Deno                                                                                 | 62885.45 | 12170.10 | 91702.09  | 76%      |
| NHttp                                                                                | 58475.80 | 11179.17 | 87003.83  | 70%      |
| Hono                                                                                 | 54128.86 | 6760.33  | 79027.16  | 65%      |
| Fastro                                                                               | 53691.25 | 7662.97  | 82159.57  | 64%      |
| Vixeny (Deno)                                                                        | 51148.80 | 4606.04  | 82921.08  | 61%      |
| Fast                                                                                 | 50022.21 | 2553.95  | 68657.49  | 60%      |
| Megalo                                                                               | 47733.12 | 3213.67  | 63252.17  | 57%      |
| Deso                                                                                 | 46978.92 | 3373.79  | 68719.44  | 56%      |
| Alosaur                                                                              | 45037.11 | 2874.14  | 70123.56  | 54%      |
| http                                                                                 | 43811.80 | 3495.78  | 50842.14  | 53%      |
| Router                                                                               | 42589.57 | 3232.44  | 50406.07  | 51%      |
| Cheetah                                                                              | 42107.54 | 2398.96  | 49276.64  | 51%      |
| Reno                                                                                 | 41580.76 | 2327.24  | 52379.10  | 50%      |
| Danet V2 (Hono)                                                                      | 36233.12 | 2250.07  | 39616.57  | 44%      |
| Aqua                                                                                 | 34283.02 | 2989.85  | 39527.24  | 41%      |
| Danet (Oak)                                                                          | 34255.31 | 2214.71  | 36135.01  | 41%      |
| Little                                                                               | 33892.49 | 3489.76  | 40759.66  | 41%      |
| Oak                                                                                  | 32086.07 | 2789.77  | 36734.14  | 39%      |
| Dinatra                                                                              | 18269.01 | 2019.76  | 29723.98  | 22%      |
| Node                                                                                 | 17232.35 | 1511.29  | 24400.38  | 21%      |
| Fastify                                                                              | 16378.07 | 1731.14  | 25534.40  | 20%      |
| Opine                                                                                | 15570.25 | 2181.87  | 20699.95  | 19%      |
| Abc                                                                                  | 15060.03 | 2323.12  | 24211.83  | 18%      |
| Express (Deno)                                                                       | 12407.15 | 1747.08  | 14081.46  | 15%      |
| Servest                                                                              | 6348.47  | 1302.07  | 10692.18  | 8%       |
| Express                                                                              | 6138.37  | 894.24   | 7854.43   | 7%       |
| Acorn                                                                                | 4835.45  | 3301.07  | 18370.47  | 6%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-bf51e1e7-5804-44fc-9905-a13fed9f2601) |          |          |           |          |

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
| 15060.03 | 2323.12 | 24211.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12900.12 | 13616.56 | 14633.19 | 16834.50 | 18977.33 | 19486.28 | 19771.41 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4835.45  | 3301.07 | 18370.47 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2909.73 | 3079.63 | 3712.36 | 4772.32 | 7111.42 | 14204.29 | 17196.21 |
| **Latency** | 3ms     | 3ms     | 10ms    | 14ms    | 16ms    | 18ms     | 19ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45037.11 | 2874.14 | 70123.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43181.66 | 44097.94 | 45002.84 | 45603.74 | 47334.83 | 50735.17 | 52160.58 |
| **Latency** | 972µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34283.02 | 2989.85 | 39527.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32481.08 | 33404.90 | 34814.98 | 35768.54 | 36716.84 | 37261.86 | 38238.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 78870.04 | 9821.42 | 101237.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66614.52 | 70850.85 | 77836.61 | 86609.69 | 93102.34 | 96030.44 | 98732.99 |
| **Latency** | 372µs    | 466µs    | 594µs    | 754µs    | 952µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42107.54 | 2398.96 | 49276.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39945.71 | 41742.08 | 42385.91 | 43135.51 | 43913.03 | 44584.80 | 45851.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34255.31 | 2214.71 | 36135.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33917.35 | 34302.49 | 34546.33 | 34821.23 | 35239.69 | 35359.14 | 35675.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36233.12 | 2250.07 | 39616.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35716.24 | 36303.73 | 36550.04 | 36844.01 | 37155.16 | 37411.50 | 37809.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62885.45 | 12170.10 | 91702.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52392.23 | 53557.32 | 56125.16 | 72416.10 | 82827.65 | 85742.41 | 89809.94 |
| **Latency** | 521µs    | 591µs    | 837µs    | 950µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46978.92 | 3373.79 | 68719.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44670.60 | 45487.19 | 46342.58 | 47730.67 | 51018.26 | 53133.10 | 57000.55 |
| **Latency** | 957µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18269.01 | 2019.76 | 29723.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16430.55 | 17439.47 | 18629.65 | 19559.09 | 20087.09 | 20407.67 | 20808.83 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78063.96 | 13437.07 | 100834.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59410.28 | 65839.16 | 79517.33 | 90486.12 | 94725.97 | 96735.54 | 99481.76 |
| **Latency** | 380µs    | 465µs    | 583µs    | 774µs    | 954µs    | 1ms      | 1ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6138.37  | 894.24 | 7854.43 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4912.64 | 5908.97 | 6206.27 | 6554.63 | 7342.12 | 7691.53 | 7794.78 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12407.15 | 1747.08 | 14081.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11392.69 | 12526.24 | 12849.92 | 13242.41 | 13367.27 | 13476.46 | 13940.46 |
| **Latency** | 3ms      | 3ms      | 4ms      | 4ms      | 4ms      | 4ms      | 8ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50022.21 | 2553.95 | 68657.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48353.23 | 49189.61 | 49986.08 | 50763.85 | 51492.69 | 52373.58 | 60037.73 |
| **Latency** | 870µs    | 927µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16378.07 | 1731.14 | 25534.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15360.29 | 16110.34 | 16781.37 | 17144.88 | 17410.88 | 17557.68 | 17907.36 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53691.25 | 7662.97 | 82159.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48332.11 | 49312.55 | 50509.58 | 56346.90 | 65655.57 | 71419.72 | 77505.03 |
| **Latency** | 613µs    | 860µs    | 969µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54128.86 | 6760.33 | 79027.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48548.55 | 49562.42 | 51820.39 | 58047.72 | 64102.16 | 67705.73 | 72122.96 |
| **Latency** | 620µs    | 830µs    | 962µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43811.80 | 3495.78 | 50842.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40983.94 | 42613.19 | 44524.97 | 45647.01 | 46468.90 | 47028.60 | 48530.22 |
| **Latency** | 856µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 83285.72 | 15377.11 | 102407.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 59137.31 | 69437.19 | 89213.61 | 96353.59 | 98873.15 | 99840.93 | 101410.09 |
| **Latency** | 354µs    | 448µs    | 556µs    | 688µs    | 911µs    | 1ms      | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33892.49 | 3489.76 | 40759.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32217.11 | 33341.52 | 34522.55 | 35575.29 | 36353.85 | 36920.90 | 38200.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47733.12 | 3213.67 | 63252.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45605.25 | 46417.77 | 47301.76 | 48495.58 | 51146.17 | 53547.17 | 57898.97 |
| **Latency** | 907µs    | 976µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58475.80 | 11179.17 | 87003.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49032.16 | 50238.26 | 52629.00 | 66301.70 | 77333.06 | 81010.64 | 85088.86 |
| **Latency** | 560µs    | 621µs    | 913µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17232.35 | 1511.29 | 24400.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16790.09 | 17117.52 | 17427.09 | 17731.46 | 18039.84 | 18221.33 | 18782.01 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32086.07 | 2789.77 | 36734.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31709.26 | 32215.25 | 32551.54 | 33004.03 | 33245.59 | 33402.04 | 33725.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15570.25 | 2181.87 | 20699.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13404.79 | 15401.33 | 15939.37 | 16446.55 | 16910.09 | 18370.41 | 19971.45 |
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
| 41580.76 | 2327.24 | 52379.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39758.88 | 41030.96 | 41904.57 | 42554.31 | 43439.26 | 44057.05 | 45547.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42589.57 | 3232.44 | 50406.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40169.03 | 41420.24 | 43227.73 | 44307.10 | 45120.97 | 45636.61 | 46856.72 |
| **Latency** | 867µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 77891.05 | 9521.71 | 100714.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66371.13 | 70170.96 | 76479.49 | 84736.30 | 91933.52 | 95137.96 | 98154.77 |
| **Latency** | 378µs    | 472µs    | 601µs    | 764µs    | 961µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6348.47  | 1302.07 | 10692.18 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5138.91 | 5640.08 | 6421.15 | 6937.64 | 7959.94 | 8477.07 | 9217.37 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 10ms    | 13ms    |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78692.39 | 14026.75 | 102061.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58606.31 | 65121.82 | 81972.45 | 91235.36 | 95301.25 | 97204.94 | 99510.57 |
| **Latency** | 374µs    | 461µs    | 577µs    | 761µs    | 958µs    | 1ms      | 1ms      |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51148.80 | 4606.04 | 82921.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48743.84 | 49567.27 | 50422.72 | 51240.49 | 52719.29 | 57935.02 | 73006.49 |
| **Latency** | 836µs    | 912µs    | 991µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-06-01T01:43:00.100Z</p>
