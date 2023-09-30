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
| Deso                                                                                 | 67560.89 | 7853.86  | 72216.52  | 100%     |
| Hono                                                                                 | 67298.60 | 12777.19 | 74417.04  | 100%     |
| Fastro                                                                               | 66333.93 | 14803.72 | 75941.18  | 98%      |
| NHttp                                                                                | 65388.29 | 19091.94 | 79527.80  | 97%      |
| Vixeny (Deno)                                                                        | 63522.82 | 18597.02 | 78324.68  | 94%      |
| Fast                                                                                 | 63464.26 | 18613.63 | 78886.65  | 94%      |
| Stric                                                                                | 60310.28 | 9125.00  | 85743.62  | 89%      |
| Bun                                                                                  | 59545.98 | 10568.18 | 86809.41  | 88%      |
| Hyper Express                                                                        | 58793.16 | 13566.28 | 85717.21  | 87%      |
| Reno                                                                                 | 56726.71 | 6639.37  | 60453.70  | 84%      |
| Cheetah                                                                              | 56124.37 | 7195.54  | 60056.36  | 83%      |
| Deno                                                                                 | 54760.27 | 13632.00 | 77082.81  | 81%      |
| Node                                                                                 | 40968.15 | 6231.04  | 44401.73  | 61%      |
| http                                                                                 | 40246.75 | 8301.70  | 47601.86  | 60%      |
| Alosaur                                                                              | 32034.73 | 6940.93  | 99882.49  | 47%      |
| Fastify                                                                              | 29526.18 | 11029.14 | 39331.82  | 44%      |
| Router                                                                               | 29478.23 | 4982.81  | 35642.71  | 44%      |
| Aqua                                                                                 | 26249.12 | 4580.43  | 35236.69  | 39%      |
| Oak                                                                                  | 26248.28 | 4869.75  | 31587.91  | 39%      |
| Little                                                                               | 25774.70 | 4413.08  | 33512.63  | 38%      |
| Dinatra                                                                              | 21525.26 | 5071.07  | 45269.25  | 32%      |
| Abc                                                                                  | 21101.15 | 2920.54  | 25778.05  | 31%      |
| Danet (Oak)                                                                          | 18357.25 | 4296.75  | 96037.84  | 27%      |
| Opine                                                                                | 11868.25 | 2078.37  | 16482.03  | 18%      |
| Express (Deno)                                                                       | 11801.47 | 3139.05  | 76923.08  | 17%      |
| Express                                                                              | 7663.88  | 1599.68  | 12267.95  | 11%      |
| Servest                                                                              | 7495.32  | 2473.27  | 12583.89  | 11%      |
| Acorn                                                                                | 5286.70  | 8450.22  | 131004.37 | 8%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-19239782-e7cd-45b2-9ba8-76086e059dcf) |          |          |           |          |

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
| 21101.15 | 2920.54 | 25778.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18217.11 | 20164.85 | 21440.01 | 22758.95 | 24314.82 | 24709.35 | 25185.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5286.70  | 8450.22 | 131004.37 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 63.75 | 85.19 | 3936.99 | 7685.88 | 10066.05 | 12124.22 | 26752.29 |
| **Latency** | 5ms   | 6ms   | 16ms    | 22ms    | 26ms     | 28ms     | 40ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32034.73 | 6940.93 | 99882.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27067.97 | 29803.58 | 34558.68 | 35651.46 | 36367.98 | 36819.08 | 38042.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26249.12 | 4580.43 | 35236.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24138.82 | 25415.81 | 27723.54 | 28452.46 | 29020.97 | 29503.14 | 30561.01 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59545.98 | 10568.18 | 86809.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49317.67 | 52464.13 | 56857.09 | 67317.39 | 75066.96 | 79050.47 | 83440.05 |
| **Latency** | 463µs    | 597µs    | 765µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56124.37 | 7195.54 | 60056.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54945.25 | 57104.20 | 57963.08 | 58529.81 | 59059.27 | 59380.73 | 59822.56 |
| **Latency** | 764µs    | 829µs    | 863µs    | 895µs    | 985µs    | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18357.25 | 4296.75 | 96037.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16426.71 | 18073.71 | 19334.57 | 19911.63 | 20282.33 | 20716.71 | 22117.39 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54760.27 | 13632.00 | 77082.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33240.89 | 45001.30 | 57019.43 | 65742.66 | 71819.69 | 73837.58 | 76048.59 |
| **Latency** | 568µs    | 638µs    | 713µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67560.89 | 7853.86 | 72216.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66443.43 | 68491.69 | 69383.86 | 70133.57 | 70744.48 | 71035.91 | 71523.20 |
| **Latency** | 636µs    | 682µs    | 714µs    | 746µs    | 825µs    | 873µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21525.26 | 5071.07 | 45269.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16531.84 | 20230.12 | 22417.01 | 24995.64 | 25717.62 | 26159.01 | 27235.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7663.88  | 1599.68 | 12267.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4981.85 | 7773.53 | 8413.29 | 8566.72 | 8641.82 | 8683.70 | 8772.10 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 10ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11801.47 | 3139.05 | 76923.08 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8685.73 | 11635.89 | 12535.94 | 12878.14 | 13268.41 | 13513.94 | 13979.25 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63464.26 | 18613.63 | 78886.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28161.02 | 52430.88 | 74542.41 | 76269.33 | 76926.08 | 77424.70 | 78026.07 |
| **Latency** | 555µs    | 618µs    | 669µs    | 724µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 29526.18 | 11029.14 | 39331.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14890.22 | 15368.53 | 36939.12 | 37981.63 | 38272.30 | 38367.11 | 38561.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66333.93 | 14803.72 | 75941.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33055.19 | 70023.73 | 72926.95 | 73832.82 | 74446.12 | 74806.94 | 75274.95 |
| **Latency** | 606µs    | 645µs    | 680µs    | 715µs    | 822µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67298.60 | 12777.19 | 74417.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47982.30 | 70527.44 | 72310.56 | 72864.05 | 73306.65 | 73526.42 | 74012.20 |
| **Latency** | 615µs    | 657µs    | 691µs    | 721µs    | 808µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40246.75 | 8301.70 | 47601.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25704.55 | 38301.46 | 44405.32 | 45358.08 | 45939.76 | 46242.50 | 46714.32 |
| **Latency** | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58793.16 | 13566.28 | 85717.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39866.61 | 46782.29 | 60050.43 | 69913.85 | 77334.73 | 80005.53 | 83151.59 |
| **Latency** | 497µs    | 602µs    | 720µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25774.70 | 4413.08 | 33512.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23857.91 | 25488.42 | 26915.31 | 27984.11 | 28470.30 | 28914.12 | 29560.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

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
| 65388.29 | 19091.94 | 79527.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29018.25 | 56563.76 | 76524.40 | 77798.18 | 78359.28 | 78664.43 | 79088.24 |
| **Latency** | 533µs    | 602µs    | 661µs    | 712µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40968.15 | 6231.04 | 44401.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40895.65 | 41801.63 | 42368.59 | 42915.83 | 43329.81 | 43577.96 | 43914.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26248.28 | 4869.75 | 31587.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24047.08 | 25812.78 | 27766.81 | 28566.10 | 29102.01 | 29451.55 | 30693.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11868.25 | 2078.37 | 16482.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10173.76 | 11643.67 | 12434.81 | 12838.08 | 13189.88 | 13774.68 | 14935.06 |
| **Latency** | 3ms      | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 8ms      |

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
| 56726.71 | 6639.37 | 60453.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56084.08 | 57519.58 | 58267.54 | 58815.83 | 59283.54 | 59496.28 | 60089.82 |
| **Latency** | 758µs    | 831µs    | 864µs    | 891µs    | 931µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29478.23 | 4982.81 | 35642.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26031.41 | 28718.35 | 31208.70 | 32154.31 | 32704.69 | 33105.13 | 34431.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60310.28 | 9125.00 | 85743.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50256.23 | 53487.13 | 58091.39 | 66626.56 | 74693.36 | 77713.21 | 83545.84 |
| **Latency** | 460µs    | 592µs    | 760µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7495.32  | 2473.27 | 12583.89 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4416.69 | 6348.60 | 8469.29 | 9052.58 | 9536.91 | 9790.14 | 10328.29 |
| **Latency** | 3ms     | 5ms     | 6ms     | 7ms     | 10ms    | 13ms    | 17ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63522.82 | 18597.02 | 78324.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29554.93 | 50718.69 | 74840.88 | 76387.74 | 77025.30 | 77391.21 | 77904.57 |
| **Latency** | 532µs    | 613µs    | 678µs    | 730µs    | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2023-09-30T01:23:14.531Z</p>
