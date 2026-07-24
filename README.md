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
| Hyper Express                                                                        | 153719.02 | 4451.85  | 164432.51 | 100%     |
| Stric                                                                                | 153049.44 | 7773.18  | 168528.86 | 100%     |
| Bun                                                                                  | 150297.01 | 8152.05  | 171353.84 | 98%      |
| Elysia                                                                               | 146525.70 | 5790.08  | 159585.09 | 95%      |
| Deno                                                                                 | 131373.74 | 10019.95 | 150350.45 | 85%      |
| Fastro                                                                               | 127931.08 | 8278.49  | 149830.22 | 83%      |
| NHttp                                                                                | 126428.56 | 8918.16  | 148420.53 | 82%      |
| Vixeny (Deno)                                                                        | 124391.66 | 9948.96  | 148648.85 | 81%      |
| Fast                                                                                 | 123815.70 | 9659.79  | 154211.78 | 81%      |
| Hono                                                                                 | 122439.56 | 9694.21  | 153415.40 | 80%      |
| Megalo                                                                               | 106341.41 | 6672.66  | 127424.77 | 69%      |
| Alosaur                                                                              | 89707.55  | 5518.26  | 98506.62  | 58%      |
| Reno                                                                                 | 86117.16  | 3931.07  | 94577.23  | 56%      |
| Cheetah                                                                              | 83291.46  | 6282.83  | 90728.49  | 54%      |
| http                                                                                 | 73223.41  | 10409.78 | 86614.76  | 48%      |
| Router                                                                               | 72767.01  | 8078.53  | 88245.34  | 47%      |
| Danet V2 (Hono)                                                                      | 69341.03  | 4931.77  | 73797.88  | 45%      |
| Node                                                                                 | 65098.39  | 6899.68  | 77720.07  | 42%      |
| Danet (Oak)                                                                          | 63570.01  | 5075.90  | 68741.03  | 41%      |
| Oak                                                                                  | 60074.24  | 5991.11  | 64430.31  | 39%      |
| Fastify                                                                              | 58179.27  | 5686.57  | 65725.94  | 38%      |
| Little                                                                               | 52327.94  | 6522.88  | 60020.57  | 34%      |
| Aqua                                                                                 | 48372.43  | 5457.87  | 58990.00  | 31%      |
| Dinatra                                                                              | 36038.66  | 5123.29  | 44905.75  | 23%      |
| Abc                                                                                  | 27157.22  | 2794.95  | 33331.52  | 18%      |
| Express                                                                              | 17773.25  | 3316.42  | 22083.21  | 12%      |
| Express (Deno)                                                                       | 14792.65  | 2641.86  | 18082.40  | 10%      |
| Servest                                                                              | 10863.66  | 2551.29  | 19558.74  | 7%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Deso                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-24603b14-cbbd-4802-b4eb-9044319cc7b6) |           |          |           |          |

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
| 27157.22 | 2794.95 | 33331.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25128.01 | 26025.93 | 27274.32 | 28745.63 | 30116.93 | 30842.55 | 32012.89 |
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

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 89707.55 | 5518.26 | 98506.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 85578.51 | 89326.75 | 90730.33 | 91988.72 | 93225.03 | 94080.55 | 96151.15 |
| **Latency** | 480µs    | 509µs    | 555µs    | 589µs    | 622µs    | 657µs    | 766µs    |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48372.43 | 5457.87 | 58990.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45280.69 | 47456.65 | 49222.34 | 51193.67 | 52813.59 | 53413.61 | 54660.84 |
| **Latency** | 666µs    | 935µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 150297.01 | 8152.05 | 171353.84 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 141124.93 | 147772.42 | 151815.26 | 154857.06 | 157845.33 | 159200.83 | 163360.67 |
| **Latency** | 209µs     | 270µs     | 330µs     | 391µs     | 439µs     | 481µs     | 607µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 83291.46 | 6282.83 | 90728.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 78924.67 | 83513.65 | 84831.09 | 85937.36 | 86778.47 | 87264.47 | 88263.45 |
| **Latency** | 513µs    | 543µs    | 596µs    | 631µs    | 683µs    | 717µs    | 860µs    |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63570.01 | 5075.90 | 68741.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59912.30 | 63026.62 | 64834.76 | 65953.30 | 66620.30 | 67126.42 | 67790.49 |
| **Latency** | 668µs    | 703µs    | 785µs    | 830µs    | 895µs    | 935µs    | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69341.03 | 4931.77 | 73797.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67133.16 | 69564.90 | 70500.44 | 70982.48 | 71661.68 | 71962.79 | 72759.84 |
| **Latency** | 618µs    | 648µs    | 723µs    | 758µs    | 819µs    | 852µs    | 965µs    |

### [Deno](#deno)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 131373.74 | 10019.95 | 150350.45 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 123568.08 | 128547.38 | 133223.46 | 136670.77 | 139777.50 | 141354.87 | 145376.91 |
| **Latency** | 282µs     | 334µs     | 380µs     | 422µs     | 464µs     | 499µs     | 623µs     |

### [Deso](#deso)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36038.66 | 5123.29 | 44905.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32209.25 | 35153.69 | 36723.72 | 38529.20 | 40914.34 | 42214.42 | 44124.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      |

### [Elysia](#elysia)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 146525.70 | 5790.08 | 159585.09 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 140148.60 | 144114.46 | 147413.11 | 150125.99 | 152460.71 | 153819.37 | 156265.78 |
| **Latency** | 220µs     | 281µs     | 340µs     | 390µs     | 441µs     | 498µs     | 649µs     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17773.25 | 3316.42 | 22083.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13937.14 | 16507.07 | 18149.25 | 20710.95 | 21457.40 | 21624.16 | 21878.84 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14792.65 | 2641.86 | 18082.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11033.68 | 14536.68 | 15702.04 | 16263.61 | 16744.87 | 16948.43 | 17395.67 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Fast](#fast)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 123815.70 | 9659.79 | 154211.78 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 114376.91 | 118115.09 | 123629.06 | 129902.61 | 134733.58 | 138344.34 | 146757.78 |
| **Latency** | 303µs     | 350µs     | 405µs     | 453µs     | 489µs     | 516µs     | 612µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58179.27 | 5686.57 | 65725.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57309.15 | 58103.40 | 58934.17 | 59846.36 | 60636.23 | 61360.91 | 62667.46 |
| **Latency** | 785µs    | 808µs    | 831µs    | 857µs    | 951µs    | 1ms      | 1ms      |

### [Fastro](#fastro)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 127931.08 | 8278.49 | 149830.22 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 119411.20 | 123519.06 | 128237.96 | 132716.30 | 137126.25 | 139509.85 | 144455.17 |
| **Latency** | 291µs     | 341µs     | 391µs     | 438µs     | 473µs     | 498µs     | 588µs     |

### [Hono](#hono)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 122439.56 | 9694.21 | 153415.40 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 113601.38 | 116903.17 | 121737.19 | 127442.22 | 133924.03 | 137413.41 | 146461.09 |
| **Latency** | 310µs     | 356µs     | 410µs     | 456µs     | 491µs     | 518µs     | 604µs     |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 73223.41 | 10409.78 | 86614.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56815.79 | 72168.68 | 76332.59 | 79605.27 | 81444.75 | 82458.66 | 83755.13 |
| **Latency** | 469µs    | 603µs    | 667µs    | 707µs    | 789µs    | 974µs    | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 153719.02 | 4451.85 | 164432.51 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 149727.04 | 151964.78 | 154094.54 | 156132.54 | 157757.63 | 158776.88 | 160689.65 |
| **Latency** | 213µs     | 271µs     | 326µs     | 378µs     | 415µs     | 453µs     | 581µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52327.94 | 6522.88 | 60020.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48800.78 | 52623.77 | 54005.80 | 55038.75 | 56216.42 | 56893.80 | 57949.86 |
| **Latency** | 622µs    | 867µs    | 962µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 106341.41 | 6672.66 | 127424.77 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 102108.18 | 103296.38 | 105400.31 | 109194.31 | 113285.50 | 116229.55 | 121835.62 |
| **Latency** | 370µs     | 428µs     | 472µs     | 510µs     | 542µs     | 577µs     | 673µs     |

### [NHttp](#nhttp)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 126428.56 | 8918.16 | 148420.53 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 117236.93 | 121057.84 | 126504.19 | 131925.88 | 136444.28 | 140016.12 | 145462.94 |
| **Latency** | 295µs     | 343µs     | 395µs     | 445µs     | 480µs     | 504µs     | 598µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 65098.39 | 6899.68 | 77720.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58902.87 | 63877.64 | 66740.60 | 68540.59 | 70151.93 | 71061.35 | 73633.54 |
| **Latency** | 592µs    | 705µs    | 748µs    | 815µs    | 931µs    | 1ms      | 1ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60074.24 | 5991.11 | 64430.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57718.05 | 60191.77 | 61428.08 | 62402.39 | 63112.91 | 63431.79 | 64085.52 |
| **Latency** | 757µs    | 777µs    | 801µs    | 831µs    | 933µs    | 999µs    | 1ms      |

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
| 86117.16 | 3931.07 | 94577.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 85225.76 | 85949.41 | 86551.45 | 87132.11 | 87599.09 | 88007.33 | 88761.38 |
| **Latency** | 505µs    | 531µs    | 583µs    | 614µs    | 639µs    | 676µs    | 738µs    |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 72767.01 | 8078.53 | 88245.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69611.21 | 72210.33 | 74061.39 | 77150.87 | 78479.28 | 79187.06 | 80363.56 |
| **Latency** | 475µs    | 620µs    | 686µs    | 718µs    | 758µs    | 926µs    | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 153049.44 | 7773.18 | 168528.86 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 143519.56 | 150404.65 | 154699.67 | 157719.05 | 160377.15 | 161707.13 | 164913.57 |
| **Latency** | 208µs     | 266µs     | 324µs     | 384µs     | 430µs     | 471µs     | 591µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10863.66 | 2551.29 | 19558.74 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6830.58 | 10058.45 | 11159.16 | 12335.54 | 13603.78 | 14574.40 | 16446.20 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 7ms      | 10ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 124391.66 | 9948.96 | 148648.85 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 115006.02 | 119983.36 | 125464.80 | 130081.47 | 134801.54 | 137427.71 | 142294.98 |
| **Latency** | 296µs     | 351µs     | 401µs     | 449µs     | 489µs     | 521µs     | 638µs     |

---

<p align="center">Generated 2026-07-24T03:39:22.965Z</p>
