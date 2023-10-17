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
| Megalo                                                                               | 67721.22 | 12926.17 | 74650.36  | 100%     |
| Fast                                                                                 | 67315.57 | 18345.28 | 79724.75  | 99%      |
| Fastro                                                                               | 66069.78 | 18097.32 | 78184.24  | 98%      |
| Hono                                                                                 | 65279.21 | 17027.44 | 76176.58  | 96%      |
| Deso                                                                                 | 65107.77 | 14934.83 | 73571.42  | 96%      |
| Deno                                                                                 | 64559.10 | 19227.15 | 80886.87  | 95%      |
| NHttp                                                                                | 62843.38 | 22158.35 | 82668.39  | 93%      |
| Bun                                                                                  | 62349.82 | 13234.10 | 90780.32  | 92%      |
| Stric                                                                                | 60730.10 | 10834.44 | 88900.78  | 90%      |
| Hyper Express                                                                        | 59026.83 | 14367.60 | 85670.29  | 87%      |
| Vixeny (Deno)                                                                        | 58075.67 | 21059.17 | 78985.05  | 86%      |
| Cheetah                                                                              | 57222.62 | 10573.56 | 62966.92  | 84%      |
| Reno                                                                                 | 56143.83 | 9074.35  | 60475.63  | 83%      |
| http                                                                                 | 39637.99 | 10756.18 | 224003.58 | 59%      |
| Node                                                                                 | 37937.41 | 10185.77 | 45307.12  | 56%      |
| Fastify                                                                              | 35854.81 | 6491.34  | 39743.20  | 53%      |
| Alosaur                                                                              | 31912.50 | 7039.21  | 40163.68  | 47%      |
| Router                                                                               | 27823.19 | 6214.42  | 35577.15  | 41%      |
| Aqua                                                                                 | 26901.88 | 4851.45  | 33343.86  | 40%      |
| Little                                                                               | 26307.28 | 5040.27  | 32160.15  | 39%      |
| Oak                                                                                  | 25975.37 | 5063.22  | 32034.57  | 38%      |
| Dinatra                                                                              | 22878.11 | 4885.78  | 29581.09  | 34%      |
| Abc                                                                                  | 20849.65 | 7386.68  | 205530.91 | 31%      |
| Danet (Oak)                                                                          | 18232.00 | 3940.99  | 25024.00  | 27%      |
| Express (Deno)                                                                       | 11996.57 | 2439.70  | 21951.41  | 18%      |
| Opine                                                                                | 11862.35 | 2089.81  | 16067.41  | 18%      |
| Express                                                                              | 7984.07  | 1432.59  | 12456.17  | 12%      |
| Servest                                                                              | 7482.67  | 2443.49  | 12471.45  | 11%      |
| Acorn                                                                                | 5040.39  | 8562.21  | 90059.82  | 7%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-05b6a5fd-4ede-48be-848c-54b719065886) |          |          |           |          |

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

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 20849.65 | 7386.68 | 205530.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12603.36 | 20959.01 | 22398.39 | 23015.23 | 24008.69 | 24994.22 | 25641.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5040.39  | 8562.21 | 90059.82 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 57.15 | 1005.74 | 3502.65 | 6939.18 | 9714.09 | 10811.71 | 67692.72 |
| **Latency** | 5ms   | 7ms     | 15ms    | 21ms    | 26ms    | 29ms     | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31912.50 | 7039.21 | 40163.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24786.79 | 30009.71 | 34999.28 | 35916.82 | 36521.11 | 36886.39 | 37848.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26901.88 | 4851.45 | 33343.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23301.79 | 26492.93 | 28515.19 | 29412.43 | 30017.00 | 30440.07 | 31592.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62349.82 | 13234.10 | 90780.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48637.00 | 53117.73 | 58070.90 | 77024.72 | 79759.92 | 80671.93 | 83384.30 |
| **Latency** | 457µs    | 590µs    | 700µs    | 975µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57222.62 | 10573.56 | 62966.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47673.37 | 60008.35 | 60876.32 | 61373.59 | 61720.31 | 61859.62 | 62119.32 |
| **Latency** | 734µs    | 790µs    | 824µs    | 852µs    | 949µs    | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18232.00 | 3940.99 | 25024.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13632.85 | 16902.36 | 19585.83 | 20658.82 | 21147.61 | 21509.53 | 22864.10 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64559.10 | 19227.15 | 80886.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31103.83 | 49336.89 | 76616.94 | 78232.93 | 78941.28 | 79311.34 | 79808.22 |
| **Latency** | 503µs    | 551µs    | 683µs    | 723µs    | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65107.77 | 14934.83 | 73571.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29823.27 | 69923.76 | 71619.90 | 72093.42 | 72502.01 | 72892.30 | 73280.32 |
| **Latency** | 617µs    | 662µs    | 693µs    | 728µs    | 830µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22878.11 | 4885.78 | 29581.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19114.91 | 21171.40 | 24226.65 | 26084.86 | 26929.37 | 27624.31 | 28375.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7984.07  | 1432.59 | 12456.17 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5756.18 | 7869.88 | 8680.18 | 8790.36 | 8837.90 | 8855.34 | 8888.53 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 12ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11996.57 | 2439.70 | 21951.41 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8605.37 | 12157.55 | 13062.42 | 13262.45 | 13357.98 | 13434.18 | 13988.96 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67315.57 | 18345.28 | 79724.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28709.40 | 68802.87 | 76972.41 | 77816.93 | 78311.00 | 78618.90 | 79048.93 |
| **Latency** | 578µs    | 609µs    | 646µs    | 687µs    | 806µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35854.81 | 6491.34 | 39743.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34482.74 | 37103.69 | 37632.63 | 38307.26 | 38501.43 | 38550.10 | 38775.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66069.78 | 18097.32 | 78184.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28842.59 | 69341.91 | 75463.91 | 76328.65 | 76939.52 | 77284.66 | 77762.94 |
| **Latency** | 586µs    | 624µs    | 658µs    | 694µs    | 851µs    | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65279.21 | 17027.44 | 76176.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28300.92 | 70116.55 | 73614.66 | 74471.31 | 75010.22 | 75192.95 | 75614.28 |
| **Latency** | 600µs    | 641µs    | 676µs    | 713µs    | 833µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 39637.99 | 10756.18 | 224003.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21787.99 | 37918.44 | 44120.57 | 45328.81 | 45935.81 | 46304.62 | 46922.35 |
| **Latency** | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59026.83 | 14367.60 | 85670.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40989.18 | 45416.12 | 60607.03 | 71033.03 | 77409.25 | 81010.17 | 83783.60 |
| **Latency** | 503µs    | 593µs    | 715µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26307.28 | 5040.27 | 32160.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18110.70 | 26434.12 | 27724.70 | 29056.87 | 29533.53 | 30045.57 | 30695.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67721.22 | 12926.17 | 74650.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64973.13 | 71151.56 | 72103.19 | 72488.77 | 72799.81 | 72968.86 | 73230.36 |
| **Latency** | 613µs    | 659µs    | 690µs    | 719µs    | 774µs    | 867µs    | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62843.38 | 22158.35 | 82668.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28523.77 | 39308.00 | 78212.00 | 80450.62 | 81203.53 | 81601.10 | 82129.03 |
| **Latency** | 495µs    | 581µs    | 654µs    | 704µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37937.41 | 10185.77 | 45307.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19043.31 | 40968.18 | 42772.47 | 43490.65 | 43992.10 | 44201.85 | 44657.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25975.37 | 5063.22 | 32034.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21022.46 | 25892.93 | 27610.88 | 28509.52 | 29009.69 | 29441.04 | 30697.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11862.35 | 2089.81 | 16067.41 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9734.74 | 11740.13 | 12430.85 | 12867.14 | 13110.60 | 13750.16 | 14804.94 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 8ms      |

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
| 56143.83 | 9074.35 | 60475.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55592.01 | 58138.53 | 58618.34 | 59084.66 | 59617.02 | 59895.38 | 60145.53 |
| **Latency** | 756µs    | 824µs    | 860µs    | 886µs    | 930µs    | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27823.19 | 6214.42 | 35577.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18000.22 | 27115.52 | 30606.67 | 32008.43 | 32594.56 | 33220.59 | 34287.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60730.10 | 10834.44 | 88900.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49207.03 | 52981.88 | 58325.83 | 69106.44 | 76516.71 | 79992.01 | 84903.81 |
| **Latency** | 451µs    | 580µs    | 746µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7482.67  | 2443.49 | 12471.45 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4527.72 | 6574.12 | 8374.07 | 9002.19 | 9438.82 | 9747.58 | 10114.43 |
| **Latency** | 3ms     | 4ms     | 6ms     | 7ms     | 10ms    | 13ms    | 17ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58075.67 | 21059.17 | 78985.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28120.72 | 31459.55 | 70421.33 | 76722.47 | 77796.73 | 78139.30 | 78640.23 |
| **Latency** | 534µs    | 620µs    | 679µs    | 749µs    | 1ms      | 1ms      | 2ms      |

---

<p align="center">Generated 2023-10-17T01:25:31.262Z</p>
