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
| Stric                                                                                | 77968.03 | 9741.03  | 99760.44  | 100%     |
| Bun                                                                                  | 77525.00 | 10276.74 | 100137.69 | 99%      |
| Hyper Express                                                                        | 76915.23 | 16124.74 | 99611.11  | 99%      |
| Deno                                                                                 | 52802.60 | 5457.60  | 84401.88  | 68%      |
| Vixeny (Deno)                                                                        | 50582.63 | 5604.44  | 78626.78  | 65%      |
| NHttp                                                                                | 49813.04 | 4348.78  | 76912.46  | 64%      |
| Fast                                                                                 | 48231.38 | 3458.00  | 70927.28  | 62%      |
| Hono                                                                                 | 47135.62 | 3545.89  | 69113.54  | 60%      |
| Fastro                                                                               | 47112.14 | 3060.37  | 59876.56  | 60%      |
| Deso                                                                                 | 44934.34 | 2638.12  | 53724.40  | 58%      |
| Megalo                                                                               | 43978.87 | 2517.41  | 60738.07  | 56%      |
| Cheetah                                                                              | 40046.82 | 2323.35  | 45328.77  | 51%      |
| Reno                                                                                 | 38062.94 | 1832.69  | 40826.40  | 49%      |
| http                                                                                 | 36702.42 | 3954.28  | 46346.66  | 47%      |
| Alosaur                                                                              | 31784.38 | 4242.55  | 37201.12  | 41%      |
| Router                                                                               | 29418.55 | 2933.15  | 36130.40  | 38%      |
| Aqua                                                                                 | 27428.39 | 3004.58  | 33524.04  | 35%      |
| Little                                                                               | 25930.30 | 3265.19  | 29919.84  | 33%      |
| Oak                                                                                  | 25872.09 | 3746.32  | 30723.39  | 33%      |
| Danet (Oak)                                                                          | 18485.76 | 3010.01  | 22081.41  | 24%      |
| Node                                                                                 | 16648.86 | 1356.37  | 18985.88  | 21%      |
| Fastify                                                                              | 15691.28 | 1757.65  | 25669.23  | 20%      |
| Abc                                                                                  | 15062.64 | 2579.94  | 25905.78  | 19%      |
| Dinatra                                                                              | 14957.22 | 2017.46  | 18020.02  | 19%      |
| Opine                                                                                | 12363.64 | 1998.35  | 15942.50  | 16%      |
| Express (Deno)                                                                       | 11294.87 | 1923.81  | 13390.50  | 14%      |
| Servest                                                                              | 6597.03  | 1450.43  | 9982.37   | 8%       |
| Express                                                                              | 6162.33  | 971.40   | 7847.31   | 8%       |
| Acorn                                                                                | 5708.29  | 9333.03  | 85037.63  | 7%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-d5268831-9eb2-4788-9057-d3b24354e77a) |          |          |           |          |

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
| 15062.64 | 2579.94 | 25905.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12628.52 | 13800.70 | 14734.32 | 16243.25 | 18218.29 | 19931.86 | 21210.26 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5708.29  | 9333.03 | 85037.63 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 78.88 | 1901.93 | 3486.07 | 6513.42 | 10764.51 | 15775.42 | 64845.39 |
| **Latency** | 5ms   | 8ms     | 14ms    | 19ms    | 23ms     | 25ms     | 35ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31784.38 | 4242.55 | 37201.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28801.81 | 30692.53 | 33125.43 | 34042.52 | 34679.99 | 35309.09 | 36104.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27428.39 | 3004.58 | 33524.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25732.80 | 26939.19 | 28131.09 | 28891.04 | 29513.72 | 29910.97 | 30719.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 77525.00 | 10276.74 | 100137.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64554.48 | 68540.54 | 76826.14 | 86020.85 | 92107.76 | 94302.01 | 97921.09 |
| **Latency** | 381µs    | 473µs    | 601µs    | 767µs    | 968µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40046.82 | 2323.35 | 45328.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38480.06 | 39539.79 | 40313.73 | 41000.37 | 41793.76 | 42268.35 | 43625.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18485.76 | 3010.01 | 22081.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17262.31 | 18427.27 | 19226.88 | 19844.07 | 20275.07 | 20648.37 | 21445.02 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52802.60 | 5457.60 | 84401.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49934.27 | 50672.08 | 51535.46 | 52533.26 | 55377.82 | 65241.58 | 77913.66 |
| **Latency** | 747µs    | 897µs    | 962µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44934.34 | 2638.12 | 53724.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43055.44 | 43871.02 | 44699.33 | 46120.55 | 47885.44 | 48816.80 | 51135.26 |
| **Latency** | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14957.22 | 2017.46 | 18020.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13024.35 | 14208.92 | 15621.50 | 16100.09 | 16531.15 | 16804.43 | 17408.72 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6162.33  | 971.40 | 7847.31 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4676.01 | 5862.32 | 6354.75 | 6589.70 | 7467.32 | 7645.93 | 7748.24 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 11ms    | 14ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11294.87 | 1923.81 | 13390.50 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8407.11 | 11300.16 | 12086.39 | 12341.58 | 12482.25 | 12547.03 | 12895.24 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 4ms      | 6ms      | 9ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48231.38 | 3458.00 | 70927.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46105.87 | 46915.40 | 47602.43 | 48505.21 | 52000.93 | 54886.31 | 60211.07 |
| **Latency** | 928µs    | 994µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15691.28 | 1757.65 | 25669.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15100.70 | 15501.62 | 15844.64 | 16190.80 | 16534.59 | 16865.02 | 19810.38 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47112.14 | 3060.37 | 59876.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44912.15 | 45705.49 | 46712.26 | 48254.25 | 50509.95 | 52023.84 | 55467.96 |
| **Latency** | 944µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47135.62 | 3545.89 | 69113.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44456.68 | 45467.18 | 46543.69 | 48466.96 | 51048.03 | 52604.63 | 57371.38 |
| **Latency** | 916µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36702.42 | 3954.28 | 46346.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33695.03 | 36161.72 | 37726.95 | 38666.55 | 39503.44 | 39861.90 | 40738.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 76915.23 | 16124.74 | 99611.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55251.68 | 59433.59 | 81420.42 | 92305.35 | 95620.88 | 96586.28 | 98037.32 |
| **Latency** | 376µs    | 471µs    | 593µs    | 794µs    | 974µs    | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25930.30 | 3265.19 | 29919.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24380.97 | 25609.57 | 26696.48 | 27572.87 | 28098.73 | 28431.68 | 29172.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43978.87 | 2517.41 | 60738.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42559.41 | 43263.84 | 44076.19 | 44727.65 | 45514.64 | 46548.16 | 50179.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49813.04 | 4348.78 | 76912.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46856.95 | 47567.34 | 48460.46 | 50961.01 | 55383.41 | 58713.35 | 63890.24 |
| **Latency** | 807µs    | 973µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16648.86 | 1356.37 | 18985.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16324.62 | 16610.45 | 16848.59 | 17087.12 | 17319.87 | 17501.81 | 17800.94 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25872.09 | 3746.32 | 30723.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24121.46 | 25665.52 | 26916.56 | 27564.56 | 28236.88 | 28638.46 | 29489.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12363.64 | 1998.35 | 15942.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10896.99 | 12111.07 | 12832.02 | 13331.54 | 13732.00 | 14277.92 | 15282.63 |
| **Latency** | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 8ms      |

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
| 38062.94 | 1832.69 | 40826.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36891.55 | 37839.92 | 38321.94 | 38875.24 | 39293.64 | 39532.59 | 40021.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29418.55 | 2933.15 | 36130.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27531.90 | 28960.52 | 30113.82 | 30893.41 | 31568.97 | 32008.91 | 32737.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 77968.03 | 9741.03 | 99760.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65641.89 | 70043.09 | 76855.64 | 85796.09 | 92290.52 | 94488.70 | 98113.97 |
| **Latency** | 377µs    | 472µs    | 599µs    | 759µs    | 969µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6597.03  | 1450.43 | 9982.37 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5339.17 | 6032.56 | 6902.86 | 7408.00 | 7895.06 | 8572.04 | 9204.17 |
| **Latency** | 4ms     | 5ms     | 7ms     | 8ms     | 10ms    | 12ms    | 15ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50582.63 | 5604.44 | 78626.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46822.06 | 47820.63 | 48705.70 | 51301.83 | 58203.32 | 62131.08 | 71439.78 |
| **Latency** | 703µs    | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2023-12-11T01:30:03.434Z</p>
