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
| Bun                                                                                  | 157755.47 | 6852.65  | 176931.69 | 100%     |
| Hyper Express                                                                        | 153825.73 | 6054.68  | 165712.69 | 98%      |
| Stric                                                                                | 153501.73 | 7007.53  | 175504.99 | 97%      |
| Elysia                                                                               | 153365.06 | 7784.25  | 171627.17 | 97%      |
| Deno                                                                                 | 135164.26 | 8096.23  | 152027.34 | 86%      |
| NHttp                                                                                | 126023.92 | 9918.64  | 152641.16 | 80%      |
| Vixeny (Deno)                                                                        | 125197.72 | 10481.51 | 150446.13 | 79%      |
| Fast                                                                                 | 123318.78 | 10254.05 | 155866.06 | 78%      |
| Fastro                                                                               | 122420.23 | 10775.49 | 149022.97 | 78%      |
| Hono                                                                                 | 118428.86 | 11406.46 | 152237.30 | 75%      |
| Megalo                                                                               | 106885.01 | 7610.64  | 136112.81 | 68%      |
| Alosaur                                                                              | 97173.38  | 7152.60  | 109620.12 | 62%      |
| Reno                                                                                 | 86153.53  | 4639.96  | 92309.95  | 55%      |
| http                                                                                 | 72905.25  | 8971.77  | 83389.39  | 46%      |
| Danet V2 (Hono)                                                                      | 72437.90  | 5322.48  | 90823.27  | 46%      |
| Danet (Oak)                                                                          | 65372.63  | 4866.97  | 69976.30  | 41%      |
| Node                                                                                 | 63477.26  | 6197.84  | 78342.63  | 40%      |
| Fastify                                                                              | 55145.40  | 5629.95  | 65368.94  | 35%      |
| Oak                                                                                  | 54646.07  | 5487.88  | 65573.30  | 35%      |
| Aqua                                                                                 | 54202.74  | 5555.00  | 61053.90  | 34%      |
| Little                                                                               | 50192.11  | 6726.75  | 58668.32  | 32%      |
| Abc                                                                                  | 32788.89  | 3662.06  | 38368.77  | 21%      |
| Express                                                                              | 16909.49  | 3262.64  | 22413.12  | 11%      |
| Express (Deno)                                                                       | 14930.63  | 2895.58  | 18695.07  | 9%       |
| Servest                                                                              | 10435.84  | 2679.62  | 21543.48  | 7%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Cheetah                                                                              | 0.00      | 0.00     | 0.00      | 0%       |
| Deso                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Dinatra                                                                              | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Router                                                                               | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-f4d94831-8543-48fa-8bf4-b960f5bb9974) |           |          |           |          |

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
| 32788.89 | 3662.06 | 38368.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29246.15 | 31745.22 | 33411.46 | 34727.91 | 36301.02 | 36955.54 | 37930.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      |

### [Acorn](#acorn)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 97173.38 | 7152.60 | 109620.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 90831.96 | 96878.37 | 98776.64 | 99930.03 | 101300.58 | 102751.21 | 105869.03 |
| **Latency** | 441µs    | 470µs    | 513µs    | 545µs    | 578µs     | 609µs     | 694µs     |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54202.74 | 5555.00 | 61053.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52080.20 | 53821.81 | 55137.33 | 56715.05 | 58207.28 | 58737.56 | 59863.33 |
| **Latency** | 597µs    | 845µs    | 936µs    | 983µs    | 1ms      | 1ms      | 1ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 157755.47 | 6852.65 | 176931.69 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 149332.76 | 154129.45 | 158671.85 | 162403.95 | 164997.56 | 167254.84 | 170342.49 |
| **Latency** | 198µs     | 255µs     | 313µs     | 371µs     | 425µs     | 473µs     | 591µs     |

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
| 65372.63 | 4866.97 | 69976.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63216.13 | 64368.50 | 65491.54 | 67808.21 | 68565.96 | 68900.99 | 69524.70 |
| **Latency** | 653µs    | 686µs    | 767µs    | 811µs    | 863µs    | 905µs    | 969µs    |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 72437.90 | 5322.48 | 90823.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67709.81 | 72713.20 | 73834.44 | 74401.18 | 75043.51 | 75308.62 | 75744.99 |
| **Latency** | 592µs    | 620µs    | 693µs    | 725µs    | 787µs    | 818µs    | 913µs    |

### [Deno](#deno)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 135164.26 | 8096.23 | 152027.34 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 125752.68 | 131592.17 | 136205.55 | 140336.38 | 143632.79 | 144838.85 | 148186.66 |
| **Latency** | 276µs     | 326µs     | 370µs     | 411µs     | 451µs     | 481µs     | 561µs     |

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

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 153365.06 | 7784.25 | 171627.17 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 141632.42 | 150350.43 | 155647.05 | 158657.09 | 161324.47 | 162523.44 | 164261.39 |
| **Latency** | 209µs     | 264µs     | 323µs     | 374µs     | 429µs     | 481µs     | 619µs     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16909.49 | 3262.64 | 22413.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13060.78 | 14962.44 | 16781.44 | 19161.90 | 21300.62 | 21744.74 | 22084.23 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14930.63 | 2895.58 | 18695.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11029.02 | 14638.01 | 15800.67 | 16751.53 | 17045.42 | 17199.07 | 17656.86 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Fast](#fast)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 123318.78 | 10254.05 | 155866.06 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 112335.95 | 117229.52 | 123332.59 | 129201.32 | 136034.19 | 139846.00 | 144980.37 |
| **Latency** | 303µs     | 350µs     | 406µs     | 456µs     | 494µs     | 524µs     | 611µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55145.40 | 5629.95 | 65368.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51505.15 | 55259.93 | 56338.95 | 57193.96 | 58011.85 | 58604.65 | 59673.49 |
| **Latency** | 823µs    | 846µs    | 870µs    | 901µs    | 1ms      | 1ms      | 1ms      |

### [Fastro](#fastro)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 122420.23 | 10775.49 | 149022.97 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 108333.63 | 115785.98 | 123259.08 | 129577.02 | 135415.50 | 138320.62 | 144104.41 |
| **Latency** | 301µs     | 355µs     | 408µs     | 459µs     | 503µs     | 533µs     | 620µs     |

### [Hono](#hono)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 118428.86 | 11406.46 | 152237.30 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 106757.12 | 112720.36 | 118424.90 | 125609.16 | 131049.60 | 134019.69 | 143110.30 |
| **Latency** | 313µs     | 365µs     | 423µs     | 472µs     | 515µs     | 548µs     | 649µs     |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 72905.25 | 8971.77 | 83389.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65958.00 | 71617.82 | 74835.62 | 78042.47 | 79690.58 | 80417.64 | 81516.70 |
| **Latency** | 469µs    | 617µs    | 679µs    | 717µs    | 766µs    | 877µs    | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 153825.73 | 6054.68 | 165712.69 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 147628.26 | 152128.62 | 154865.05 | 157446.45 | 159320.14 | 160427.27 | 162405.03 |
| **Latency** | 211µs     | 270µs     | 326µs     | 377µs     | 418µs     | 457µs     | 586µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50192.11 | 6726.75 | 58668.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45905.45 | 49501.29 | 52128.62 | 53507.79 | 54648.27 | 55487.51 | 56886.87 |
| **Latency** | 648µs    | 901µs    | 990µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 106885.01 | 7610.64 | 136112.81 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 99845.67 | 104104.61 | 106505.28 | 110027.53 | 115774.36 | 118311.55 | 124308.68 |
| **Latency** | 366µs    | 425µs     | 470µs     | 508µs     | 544µs     | 580µs     | 659µs     |

### [NHttp](#nhttp)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 126023.92 | 9918.64 | 152641.16 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 116244.54 | 120859.73 | 126206.36 | 131925.30 | 137108.01 | 140217.50 | 145526.12 |
| **Latency** | 294µs     | 345µs     | 397µs     | 445µs     | 481µs     | 509µs     | 606µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63477.26 | 6197.84 | 78342.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57970.99 | 62891.41 | 64767.37 | 66176.88 | 67552.18 | 68422.61 | 71408.38 |
| **Latency** | 661µs    | 734µs    | 768µs    | 822µs    | 918µs    | 1ms      | 1ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54646.07 | 5487.88 | 65573.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51008.52 | 53586.34 | 55024.44 | 56415.41 | 59393.97 | 62535.79 | 64210.39 |
| **Latency** | 809µs    | 852µs    | 884µs    | 923µs    | 999µs    | 1ms      | 1ms      |

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
| 86153.53 | 4639.96 | 92309.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 83944.78 | 86187.95 | 87160.61 | 87931.56 | 88415.61 | 88865.90 | 89728.35 |
| **Latency** | 502µs    | 529µs    | 581µs    | 612µs    | 647µs    | 689µs    | 751µs    |

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
| 153501.73 | 7007.53 | 175504.99 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 144302.41 | 150603.33 | 154594.16 | 157938.09 | 161039.85 | 162629.78 | 168160.51 |
| **Latency** | 202µs     | 261µs     | 322µs     | 380µs     | 437µs     | 486µs     | 611µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10435.84 | 2679.62 | 21543.48 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6417.31 | 9338.36 | 10842.61 | 12021.50 | 13144.20 | 14042.43 | 16251.40 |
| **Latency** | 3ms     | 3ms     | 4ms      | 5ms      | 6ms      | 8ms      | 10ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 125197.72 | 10481.51 | 150446.13 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 113520.17 | 120068.65 | 126125.25 | 131330.87 | 136519.14 | 139592.36 | 145029.47 |
| **Latency** | 296µs     | 346µs     | 399µs     | 448µs     | 488µs     | 520µs     | 616µs     |

---

<p align="center">Generated 2026-09-02T04:19:36.294Z</p>
