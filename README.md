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
| Bun                                                                                  | 106568.21 | 6262.14  | 125853.54 | 100%     |
| Stric                                                                                | 106256.65 | 6130.44  | 124628.04 | 100%     |
| Hyper Express                                                                        | 100331.95 | 7958.13  | 121725.55 | 94%      |
| Elysia                                                                               | 95829.84  | 10616.30 | 120050.96 | 90%      |
| Deno                                                                                 | 85312.16  | 7292.16  | 112960.89 | 80%      |
| NHttp                                                                                | 77136.76  | 9005.82  | 115511.42 | 72%      |
| Vixeny (Deno)                                                                        | 76831.61  | 8407.32  | 113414.16 | 72%      |
| Fastro                                                                               | 76786.14  | 7706.28  | 112541.53 | 72%      |
| Hono                                                                                 | 74303.21  | 7741.94  | 111006.73 | 70%      |
| Fast                                                                                 | 73799.83  | 6120.03  | 110752.00 | 69%      |
| Megalo                                                                               | 65923.46  | 4418.85  | 82850.01  | 62%      |
| Alosaur                                                                              | 61574.79  | 3565.23  | 69347.77  | 58%      |
| Reno                                                                                 | 55572.11  | 3137.93  | 61214.86  | 52%      |
| http                                                                                 | 51339.81  | 6232.14  | 60323.53  | 48%      |
| Danet V2 (Hono)                                                                      | 45327.92  | 3391.27  | 48196.18  | 43%      |
| Danet (Oak)                                                                          | 41857.52  | 3309.18  | 47030.16  | 39%      |
| Oak                                                                                  | 38932.29  | 4226.09  | 41896.85  | 37%      |
| Aqua                                                                                 | 35831.85  | 4455.28  | 43970.58  | 34%      |
| Little                                                                               | 35130.15  | 4674.02  | 41810.11  | 33%      |
| Node                                                                                 | 33408.02  | 3505.41  | 40439.34  | 31%      |
| Fastify                                                                              | 29690.51  | 4180.37  | 51582.58  | 28%      |
| Abc                                                                                  | 19748.46  | 2159.40  | 23010.24  | 19%      |
| Express                                                                              | 8637.75   | 1572.50  | 11709.20  | 8%       |
| Express (Deno)                                                                       | 7813.63   | 1415.68  | 17119.04  | 7%       |
| Servest                                                                              | 7494.36   | 2452.64  | 16241.29  | 7%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Cheetah                                                                              | 0.00      | 0.00     | 0.00      | 0%       |
| Deso                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Dinatra                                                                              | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Router                                                                               | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-187a0350-6a5a-497b-a367-2df2a347a2cc) |           |          |           |          |

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
| 19748.46 | 2159.40 | 23010.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17855.32 | 18820.49 | 20161.38 | 21224.14 | 21736.19 | 21942.41 | 22235.86 |
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
| 61574.79 | 3565.23 | 69347.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60413.91 | 61183.51 | 61988.60 | 62823.93 | 63345.51 | 63888.83 | 65939.67 |
| **Latency** | 711µs    | 745µs    | 816µs    | 859µs    | 890µs    | 921µs    | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35831.85 | 4455.28 | 43970.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33090.27 | 35025.08 | 36606.11 | 38338.24 | 39088.08 | 39620.26 | 41023.69 |
| **Latency** | 903µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 106568.21 | 6262.14 | 125853.54 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 98614.37 | 102402.90 | 106495.04 | 110772.04 | 114704.97 | 116527.76 | 120335.35 |
| **Latency** | 288µs    | 367µs     | 455µs     | 540µs     | 667µs     | 756µs     | 950µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41857.52 | 3309.18 | 47030.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41129.59 | 41863.19 | 42298.06 | 42978.45 | 43418.19 | 43751.89 | 44473.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45327.92 | 3391.27 | 48196.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44803.78 | 45402.89 | 45803.69 | 46297.15 | 46607.61 | 46778.52 | 47291.64 |
| **Latency** | 958µs    | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 85312.16 | 7292.16 | 112960.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 78032.29 | 79712.26 | 84539.69 | 89768.92 | 95344.51 | 97808.28 | 102668.62 |
| **Latency** | 422µs    | 506µs    | 600µs    | 661µs    | 709µs    | 751µs    | 851µs     |

### [Deso](#deso)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Dinatra](#dinatra)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 95829.84 | 10616.30 | 120050.96 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 81007.95 | 88612.59 | 97616.77 | 103315.39 | 108422.74 | 110737.16 | 115603.69 |
| **Latency** | 322µs    | 405µs    | 496µs    | 600µs     | 739µs     | 862µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8637.75  | 1572.50 | 11709.20 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6772.77 | 7928.29 | 8910.14 | 9010.85 | 10869.79 | 11434.78 | 11598.04 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 7ms      | 7ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7813.63  | 1415.68 | 17119.04 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6702.57 | 7507.49 | 8258.07 | 8443.54 | 8558.89 | 8724.30 | 10404.45 |
| **Latency** | 5ms     | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 13ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 73799.83 | 6120.03 | 110752.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 70516.26 | 71618.84 | 72518.56 | 74119.48 | 80131.48 | 84066.47 | 97222.06 |
| **Latency** | 562µs    | 631µs    | 689µs    | 733µs    | 764µs    | 793µs    | 884µs    |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29690.51 | 4180.37 | 51582.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27840.49 | 28643.63 | 30401.08 | 31082.43 | 31722.46 | 35455.62 | 37052.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 76786.14 | 7706.28 | 112541.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 71692.69 | 72875.94 | 74337.73 | 79009.18 | 86670.36 | 92932.61 | 102233.71 |
| **Latency** | 484µs    | 603µs    | 667µs    | 718µs    | 753µs    | 786µs    | 880µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 74303.21 | 7741.94 | 111006.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69505.17 | 70609.63 | 72087.47 | 76279.21 | 84021.81 | 88396.47 | 98917.26 |
| **Latency** | 489µs    | 623µs    | 688µs    | 741µs    | 776µs    | 810µs    | 906µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51339.81 | 6232.14 | 60323.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47410.42 | 49402.56 | 53284.08 | 54620.27 | 55540.41 | 56242.97 | 57327.64 |
| **Latency** | 669µs    | 863µs    | 982µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 100331.95 | 7958.13 | 121725.55 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 90929.95 | 95837.00 | 100578.62 | 105803.83 | 109703.48 | 111210.38 | 116089.34 |
| **Latency** | 310µs    | 387µs    | 480µs     | 584µs     | 706µs     | 804µs     | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35130.15 | 4674.02 | 41810.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33321.90 | 35132.18 | 35978.56 | 37336.85 | 38045.21 | 38413.96 | 39039.86 |
| **Latency** | 891µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 65923.46 | 4418.85 | 82850.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64513.19 | 65444.60 | 66283.90 | 67122.84 | 67928.03 | 68762.73 | 74313.05 |
| **Latency** | 661µs    | 697µs    | 761µs    | 801µs    | 838µs    | 884µs    | 980µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 77136.76 | 9005.82 | 115511.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 70209.35 | 71636.63 | 73790.65 | 81619.89 | 89046.79 | 94631.15 | 105042.44 |
| **Latency** | 455µs    | 584µs    | 669µs    | 731µs    | 767µs    | 796µs    | 901µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33408.02 | 3505.41 | 40439.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32817.25 | 33549.28 | 34037.58 | 34512.12 | 34905.22 | 35145.65 | 36033.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38932.29 | 4226.09 | 41896.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38247.87 | 39218.12 | 39727.13 | 40296.46 | 40666.79 | 40921.23 | 41534.55 |
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
| 55572.11 | 3137.93 | 61214.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54704.91 | 55370.35 | 56070.27 | 56550.66 | 57192.19 | 57496.75 | 58071.79 |
| **Latency** | 787µs    | 821µs    | 910µs    | 950µs    | 986µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 106256.65 | 6130.44 | 124628.04 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 98814.79 | 102444.90 | 106440.27 | 110477.23 | 113857.35 | 115853.93 | 118811.43 |
| **Latency** | 291µs    | 370µs     | 457µs     | 539µs     | 669µs     | 757µs     | 950µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7494.36  | 2452.64 | 16241.29 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5328.66 | 6307.82 | 7742.48 | 8942.35 | 10038.94 | 10511.66 | 13037.25 |
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

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 76831.61 | 8407.32 | 113414.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 71488.90 | 72682.18 | 73943.14 | 78201.59 | 88031.98 | 95857.88 | 106678.85 |
| **Latency** | 475µs    | 604µs    | 668µs    | 720µs    | 752µs    | 779µs    | 874µs     |

---

<p align="center">Generated 2026-08-24T01:57:36.908Z</p>
