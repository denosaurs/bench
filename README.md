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
| Stric                                                                                | 122064.64 | 13065.62 | 149909.51 | 100%     |
| Bun                                                                                  | 115033.42 | 14297.13 | 149038.68 | 94%      |
| Hyper Express                                                                        | 107018.61 | 12320.07 | 144178.45 | 88%      |
| Elysia                                                                               | 97433.75  | 9407.10  | 133660.30 | 80%      |
| Deno                                                                                 | 81231.10  | 3734.71  | 100618.98 | 67%      |
| NHttp                                                                                | 75240.31  | 3325.77  | 97572.80  | 62%      |
| Vixeny (Deno)                                                                        | 74963.77  | 4029.28  | 91414.58  | 61%      |
| Fastro                                                                               | 74642.96  | 9134.20  | 106368.84 | 61%      |
| Fast                                                                                 | 73048.19  | 3554.76  | 88894.05  | 60%      |
| Hono                                                                                 | 72381.92  | 3868.02  | 89967.82  | 59%      |
| Megalo                                                                               | 67456.26  | 3243.90  | 72127.47  | 55%      |
| Deso                                                                                 | 66969.16  | 3679.14  | 72345.14  | 55%      |
| Alosaur                                                                              | 63047.09  | 3565.85  | 67016.14  | 52%      |
| Reno                                                                                 | 57065.66  | 2979.73  | 61390.63  | 47%      |
| Cheetah                                                                              | 56067.13  | 3176.94  | 64719.56  | 46%      |
| http                                                                                 | 52389.24  | 6423.96  | 62047.22  | 43%      |
| Router                                                                               | 49709.41  | 5789.86  | 58938.54  | 41%      |
| Danet V2 (Hono)                                                                      | 46269.97  | 3719.16  | 48514.94  | 38%      |
| Danet (Oak)                                                                          | 42759.24  | 3229.88  | 44991.23  | 35%      |
| Oak                                                                                  | 38891.79  | 4009.22  | 42530.12  | 32%      |
| Little                                                                               | 36507.05  | 4960.56  | 43082.86  | 30%      |
| Aqua                                                                                 | 36060.67  | 4203.26  | 44490.41  | 30%      |
| Node                                                                                 | 35963.50  | 3109.04  | 38586.39  | 29%      |
| Fastify                                                                              | 31808.60  | 3071.32  | 35417.79  | 26%      |
| Dinatra                                                                              | 23479.70  | 3883.52  | 39441.66  | 19%      |
| Abc                                                                                  | 19243.44  | 2355.47  | 25740.92  | 16%      |
| Express (Deno)                                                                       | 10855.07  | 2432.46  | 13758.99  | 9%       |
| Express                                                                              | 8615.18   | 1535.13  | 11596.63  | 7%       |
| Servest                                                                              | 7476.01   | 2443.39  | 15956.67  | 6%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-a771cfd4-3fda-47ae-bdd8-3d851fc4d47a) |           |          |           |          |

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
| 19243.44 | 2355.47 | 25740.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17352.97 | 18122.95 | 19926.98 | 20696.24 | 21275.94 | 21705.82 | 22292.24 |
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
| 63047.09 | 3565.85 | 67016.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61735.03 | 62805.41 | 63654.81 | 64282.30 | 64951.88 | 65245.72 | 66125.52 |
| **Latency** | 694µs    | 726µs    | 799µs    | 837µs    | 867µs    | 902µs    | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36060.67 | 4203.26 | 44490.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34225.58 | 35295.17 | 36701.16 | 38400.02 | 38883.80 | 39210.06 | 40723.74 |
| **Latency** | 861µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 115033.42 | 14297.13 | 149038.68 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 97708.20 | 102702.55 | 113844.42 | 126533.38 | 135398.95 | 139069.44 | 144968.04 |
| **Latency** | 262µs    | 329µs     | 411µs     | 497µs     | 647µs     | 747µs     | 941µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56067.13 | 3176.94 | 64719.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55137.15 | 55793.12 | 56457.78 | 56977.28 | 57505.15 | 57750.44 | 58290.36 |
| **Latency** | 777µs    | 810µs    | 904µs    | 940µs    | 981µs    | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42759.24 | 3229.88 | 44991.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42043.94 | 42949.77 | 43302.39 | 43621.99 | 44053.88 | 44204.36 | 44513.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46269.97 | 3719.16 | 48514.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45705.63 | 46518.90 | 46951.25 | 47436.52 | 47756.12 | 47952.88 | 48247.18 |
| **Latency** | 933µs    | 967µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 81231.10 | 3734.71 | 100618.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 78838.95 | 79809.03 | 80969.35 | 82592.51 | 84729.73 | 86367.18 | 89526.63 |
| **Latency** | 521µs    | 567µs    | 616µs    | 659µs    | 701µs    | 748µs    | 828µs    |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 66969.16 | 3679.14 | 72345.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65884.40 | 66829.32 | 67501.59 | 68203.84 | 68809.56 | 69225.63 | 70363.22 |
| **Latency** | 685µs    | 708µs    | 736µs    | 764µs    | 806µs    | 861µs    | 965µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23479.70 | 3883.52 | 39441.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20704.68 | 21525.45 | 23858.66 | 26208.67 | 27141.89 | 27530.64 | 28029.53 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 97433.75 | 9407.10 | 133660.30 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 86377.78 | 90902.05 | 96155.04 | 102888.45 | 109826.24 | 115055.09 | 124408.47 |
| **Latency** | 292µs    | 383µs    | 497µs    | 603µs     | 735µs     | 874µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8615.18  | 1535.13 | 11596.63 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6501.90 | 8211.65 | 8931.19 | 9192.68 | 10457.56 | 11077.80 | 11410.28 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 7ms      | 8ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10855.07 | 2432.46 | 13758.99 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7320.00 | 10456.22 | 11717.59 | 12362.24 | 12614.69 | 12740.61 | 13202.88 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 7ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 73048.19 | 3554.76 | 88894.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 71624.75 | 72452.56 | 73331.63 | 74282.43 | 75199.20 | 75916.88 | 78163.65 |
| **Latency** | 597µs    | 631µs    | 686µs    | 724µs    | 756µs    | 799µs    | 894µs    |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31808.60 | 3071.32 | 35417.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31110.04 | 31818.74 | 32382.88 | 32759.53 | 33076.41 | 33231.99 | 33753.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 74642.96 | 9134.20 | 106368.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 68338.26 | 69632.63 | 71397.49 | 78850.22 | 86627.12 | 93181.80 | 101223.03 |
| **Latency** | 468µs    | 607µs    | 687µs    | 751µs    | 785µs    | 813µs    | 987µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 72381.92 | 3868.02 | 89967.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 71036.78 | 71844.80 | 72726.36 | 73553.86 | 74258.34 | 75063.68 | 77100.20 |
| **Latency** | 603µs    | 637µs    | 693µs    | 730µs    | 763µs    | 805µs    | 883µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52389.24 | 6423.96 | 62047.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48446.49 | 50290.67 | 54539.99 | 55754.42 | 56715.47 | 57390.11 | 58611.97 |
| **Latency** | 643µs    | 887µs    | 964µs    | 999µs    | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 107018.61 | 12320.07 | 144178.45 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 93114.64 | 97525.48 | 105752.50 | 114939.07 | 124399.83 | 129543.44 | 136526.39 |
| **Latency** | 270µs    | 346µs    | 457µs     | 559µs     | 649µs     | 744µs     | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36507.05 | 4960.56 | 43082.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34533.53 | 36102.81 | 37238.86 | 38993.04 | 39968.19 | 40763.47 | 41977.72 |
| **Latency** | 850µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67456.26 | 3243.90 | 72127.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66315.16 | 67164.18 | 67742.38 | 68498.56 | 69222.71 | 69627.64 | 70645.23 |
| **Latency** | 649µs    | 681µs    | 745µs    | 783µs    | 814µs    | 861µs    | 941µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 75240.31 | 3325.77 | 97572.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 73591.26 | 74402.99 | 75311.79 | 76365.69 | 77431.34 | 78202.75 | 80564.30 |
| **Latency** | 580µs    | 614µs    | 667µs    | 705µs    | 734µs    | 767µs    | 861µs    |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35963.50 | 3109.04 | 38586.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35512.25 | 35910.10 | 36365.69 | 36821.50 | 37258.26 | 37479.88 | 37927.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38891.79 | 4009.22 | 42530.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38407.54 | 39226.69 | 39578.28 | 40132.93 | 40505.72 | 40722.22 | 41145.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

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
| 57065.66 | 2979.73 | 61390.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56256.45 | 56902.27 | 57466.09 | 57925.26 | 58533.86 | 58746.17 | 59412.01 |
| **Latency** | 765µs    | 797µs    | 889µs    | 925µs    | 958µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49709.41 | 5789.86 | 58938.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46348.69 | 47738.53 | 51708.54 | 52830.35 | 53831.37 | 54507.72 | 55537.21 |
| **Latency** | 670µs    | 944µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 122064.64 | 13065.62 | 149909.51 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 104601.37 | 112215.70 | 122347.62 | 132051.99 | 139437.18 | 142571.14 | 146416.75 |
| **Latency** | 247µs     | 310µs     | 387µs     | 475µs     | 604µs     | 686µs     | 899µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7476.01  | 2443.39 | 15956.67 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5507.31 | 6305.08 | 7790.79 | 9001.15 | 10008.83 | 10601.04 | 12082.83 |
| **Latency** | 5ms     | 5ms     | 6ms     | 7ms     | 8ms      | 11ms     | 14ms     |

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
| 74963.77 | 4029.28 | 91414.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 73420.79 | 74556.66 | 75479.01 | 76373.00 | 77437.27 | 78184.30 | 79740.49 |
| **Latency** | 581µs    | 615µs    | 668µs    | 706µs    | 737µs    | 781µs    | 892µs    |

---

<p align="center">Generated 2026-01-01T02:40:03.921Z</p>
