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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Vixeny (Deno)                                                                        | 61742.05 | 13488.59 | 70820.23 | 100%     |
| Deno                                                                                 | 61040.92 | 15556.43 | 73357.17 | 99%      |
| Stric                                                                                | 60808.61 | 12202.34 | 79550.10 | 98%      |
| Bun                                                                                  | 60183.05 | 12667.47 | 81894.25 | 97%      |
| Hyper Express                                                                        | 59971.99 | 16844.62 | 80017.56 | 97%      |
| NHttp                                                                                | 58137.75 | 15313.31 | 68938.59 | 94%      |
| Hono                                                                                 | 57745.72 | 13279.37 | 71603.20 | 94%      |
| Fast                                                                                 | 57552.56 | 15830.87 | 69312.46 | 93%      |
| Deso                                                                                 | 55460.60 | 11454.02 | 62848.85 | 90%      |
| Fastro                                                                               | 50370.41 | 14571.10 | 62886.12 | 82%      |
| Reno                                                                                 | 47133.05 | 8970.20  | 53017.68 | 76%      |
| Cheetah                                                                              | 43868.10 | 4927.57  | 47552.70 | 71%      |
| http                                                                                 | 35517.72 | 8670.53  | 44196.06 | 58%      |
| Node                                                                                 | 34892.58 | 6248.89  | 39108.60 | 57%      |
| Fastify                                                                              | 30512.43 | 5191.18  | 33071.13 | 49%      |
| Alosaur                                                                              | 29017.18 | 6714.37  | 84784.88 | 47%      |
| Router                                                                               | 25751.84 | 4608.87  | 32217.69 | 42%      |
| Aqua                                                                                 | 22470.59 | 3460.06  | 29724.50 | 36%      |
| Oak                                                                                  | 21060.85 | 4285.45  | 62722.89 | 34%      |
| Little                                                                               | 20963.07 | 4388.56  | 35825.92 | 34%      |
| Dinatra                                                                              | 19015.27 | 4354.72  | 36420.02 | 31%      |
| Abc                                                                                  | 16602.82 | 3612.30  | 21363.86 | 27%      |
| Danet (Oak)                                                                          | 15822.83 | 3297.23  | 22373.69 | 26%      |
| Opine                                                                                | 9754.09  | 2200.79  | 24852.17 | 16%      |
| Express (Deno)                                                                       | 9303.39  | 1997.90  | 13098.71 | 15%      |
| Express                                                                              | 6502.94  | 1335.80  | 9122.51  | 11%      |
| Servest                                                                              | 5842.59  | 1822.16  | 9160.65  | 9%       |
| Acorn                                                                                | 5677.95  | 6721.67  | 73605.80 | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-40ab2798-4c77-4387-b8af-f239cbd64c34) |          |          |          |          |

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
| 16602.82 | 3612.30 | 21363.86 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9528.38 | 16894.41 | 17981.29 | 18811.85 | 19150.17 | 19458.37 | 20764.99 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5677.95  | 6721.67 | 73605.80 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 47.77 | 63.37 | 6064.58 | 8409.21 | 12130.15 | 14855.80 | 29090.98 |
| **Latency** | 6ms   | 8ms   | 17ms    | 24ms    | 28ms     | 30ms     | 34ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29017.18 | 6714.37 | 84784.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23482.30 | 25882.83 | 31696.20 | 32494.65 | 33225.35 | 33713.13 | 34734.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22470.59 | 3460.06 | 29724.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20512.75 | 21620.32 | 23465.47 | 24302.84 | 24802.12 | 25319.73 | 26500.04 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60183.05 | 12667.47 | 81894.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43186.10 | 47279.15 | 66232.41 | 71585.56 | 72987.47 | 73729.41 | 75467.77 |
| **Latency** | 498µs    | 612µs    | 760µs    | 894µs    | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43868.10 | 4927.57 | 47552.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43239.09 | 44419.52 | 45107.64 | 45539.59 | 45915.51 | 46102.40 | 46439.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15822.83 | 3297.23 | 22373.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12658.48 | 15223.59 | 16779.93 | 17545.86 | 18169.08 | 18900.18 | 20557.34 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 8ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61040.92 | 15556.43 | 73357.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29807.43 | 61350.90 | 69175.37 | 70622.29 | 71529.28 | 71946.00 | 72605.15 |
| **Latency** | 554µs    | 618µs    | 756µs    | 797µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55460.60 | 11454.02 | 62848.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31146.08 | 58827.03 | 60109.58 | 60801.19 | 61699.31 | 62147.19 | 62636.51 |
| **Latency** | 728µs    | 783µs    | 821µs    | 858µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19015.27 | 4354.72 | 36420.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15413.71 | 16412.47 | 21065.27 | 22043.41 | 22646.87 | 22923.14 | 24591.64 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6502.94  | 1335.80 | 9122.51 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4197.12 | 6729.20 | 7114.30 | 7225.00 | 7306.06 | 7343.10 | 7440.65 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 11ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9303.39  | 1997.90 | 13098.71 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7003.51 | 8634.93 | 10185.14 | 10364.84 | 10484.71 | 10633.66 | 11140.64 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 7ms      | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57552.56 | 15830.87 | 69312.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26338.80 | 60737.65 | 65742.60 | 66781.65 | 67589.27 | 67941.18 | 68526.03 |
| **Latency** | 665µs    | 712µs    | 751µs    | 794µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30512.43 | 5191.18 | 33071.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30255.67 | 31131.76 | 31818.46 | 32408.75 | 32659.77 | 32766.52 | 32946.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50370.41 | 14571.10 | 62886.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25112.80 | 41202.05 | 58840.00 | 59903.62 | 60507.24 | 60803.11 | 61232.44 |
| **Latency** | 757µs    | 814µs    | 852µs    | 886µs    | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57745.72 | 13279.37 | 71603.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26963.14 | 60801.85 | 64007.81 | 64997.63 | 65541.28 | 66041.59 | 67083.80 |
| **Latency** | 683µs    | 733µs    | 768µs    | 812µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35517.72 | 8670.53 | 44196.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22801.58 | 32404.68 | 39902.17 | 40965.78 | 41687.98 | 41996.94 | 42821.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59971.99 | 16844.62 | 80017.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33635.53 | 40258.35 | 70723.02 | 72802.87 | 73864.00 | 74325.73 | 75430.89 |
| **Latency** | 513µs    | 590µs    | 747µs    | 792µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20963.07 | 4388.56 | 35825.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15165.35 | 18603.79 | 22115.38 | 24102.38 | 24475.50 | 24740.40 | 25867.44 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

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
| 58137.75 | 15313.31 | 68938.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26454.49 | 61398.54 | 65821.19 | 66813.78 | 67424.05 | 67792.16 | 68291.88 |
| **Latency** | 664µs    | 709µs    | 749µs    | 796µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34892.58 | 6248.89 | 39108.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33706.40 | 35727.14 | 36396.81 | 37250.28 | 37640.26 | 37846.16 | 38142.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21060.85 | 4285.45 | 62722.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18864.51 | 20072.25 | 22383.77 | 22962.69 | 23658.08 | 24018.55 | 25148.87 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9754.09  | 2200.79 | 24852.17 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7159.86 | 9201.76 | 10215.43 | 10576.14 | 11025.57 | 13068.79 | 15296.26 |
| **Latency** | 2ms     | 4ms     | 5ms      | 5ms      | 6ms      | 6ms      | 11ms     |

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
| 47133.05 | 8970.20 | 53017.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29249.13 | 49622.32 | 50418.46 | 51308.19 | 51851.91 | 52097.41 | 52472.99 |
| **Latency** | 866µs    | 949µs    | 990µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25751.84 | 4608.87 | 32217.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23191.37 | 24474.81 | 27358.58 | 28062.28 | 28621.59 | 29070.64 | 30249.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60808.61 | 12202.34 | 79550.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42660.22 | 47772.82 | 68083.05 | 70936.87 | 72207.20 | 72715.26 | 74371.22 |
| **Latency** | 504µs    | 618µs    | 763µs    | 856µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5842.59  | 1822.16 | 9160.65 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3741.49 | 4816.81 | 6510.81 | 7036.59 | 7333.17 | 7542.84 | 8819.30 |
| **Latency** | 4ms     | 6ms     | 8ms     | 10ms    | 13ms    | 16ms    | 21ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61742.05 | 13488.59 | 70820.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29813.59 | 65138.42 | 67581.76 | 68480.54 | 69029.67 | 69444.44 | 70196.93 |
| **Latency** | 650µs    | 693µs    | 735µs    | 774µs    | 901µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-08-04T01:35:08.917Z</p>
