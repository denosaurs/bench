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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Vixeny (Deno)                                                                        | 70571.58 | 14805.10 | 79663.68  | 100%     |
| NHttp                                                                                | 69489.89 | 15568.75 | 82759.85  | 98%      |
| Fast                                                                                 | 69228.05 | 14922.27 | 78325.92  | 98%      |
| Deno                                                                                 | 68575.57 | 17906.06 | 80929.39  | 97%      |
| Hono                                                                                 | 67914.31 | 15376.32 | 77957.75  | 96%      |
| Hyper Express                                                                        | 66704.24 | 17078.28 | 87225.45  | 95%      |
| Stric                                                                                | 66358.27 | 12560.05 | 86814.31  | 94%      |
| Bun                                                                                  | 64622.17 | 13429.86 | 84700.30  | 92%      |
| Reno                                                                                 | 54507.16 | 7483.32  | 59123.87  | 77%      |
| Node                                                                                 | 40938.87 | 5802.83  | 43963.51  | 58%      |
| http                                                                                 | 40866.82 | 8599.68  | 48631.02  | 58%      |
| Cheetah                                                                              | 36512.46 | 3197.83  | 38783.56  | 52%      |
| Fastify                                                                              | 36002.14 | 7073.67  | 39700.95  | 51%      |
| Peko                                                                                 | 35095.23 | 7590.17  | 41859.83  | 50%      |
| Alosaur                                                                              | 32555.62 | 5847.00  | 57769.74  | 46%      |
| Router                                                                               | 28438.28 | 4528.07  | 33505.24  | 40%      |
| Little                                                                               | 25021.76 | 4177.31  | 30188.20  | 35%      |
| Oak                                                                                  | 23994.75 | 4854.52  | 79817.10  | 34%      |
| Aqua                                                                                 | 23249.90 | 3337.17  | 28430.91  | 33%      |
| Dinatra                                                                              | 22738.11 | 4890.32  | 30055.01  | 32%      |
| Abc                                                                                  | 19794.50 | 3006.81  | 24534.94  | 28%      |
| Danet (Oak)                                                                          | 17492.69 | 3304.41  | 22953.76  | 25%      |
| Express (Deno)                                                                       | 10744.30 | 2292.71  | 15437.16  | 15%      |
| Opine                                                                                | 10346.03 | 1857.79  | 14980.03  | 15%      |
| Express                                                                              | 7777.57  | 1566.36  | 12587.92  | 11%      |
| Servest                                                                              | 6666.78  | 2062.76  | 10780.16  | 9%       |
| Acorn                                                                                | 5931.30  | 9661.23  | 148809.52 | 8%       |
| Deso                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| Fastro                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-e828d453-367f-474a-b437-77c8aec9865a) |          |          |           |          |

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
| 19794.50 | 3006.81 | 24534.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17697.58 | 18552.21 | 20673.66 | 22013.97 | 22328.47 | 22449.76 | 22712.81 |
| **Latency** | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5931.30  | 9661.23 | 148809.52 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 61.99 | 84.07 | 4157.98 | 8086.43 | 10723.60 | 15882.22 | 61439.08 |
| **Latency** | 5ms   | 6ms   | 14ms    | 21ms    | 24ms     | 27ms     | 38ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32555.62 | 5847.00 | 57769.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28497.87 | 30178.29 | 34877.26 | 35453.84 | 36037.50 | 36459.02 | 37531.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23249.90 | 3337.17 | 28430.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21523.96 | 22607.98 | 24195.64 | 24861.95 | 25409.08 | 26007.61 | 26990.66 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64622.17 | 13429.86 | 84700.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49235.13 | 53492.75 | 62948.70 | 77877.39 | 79642.56 | 80524.20 | 81933.89 |
| **Latency** | 458µs    | 576µs    | 696µs    | 892µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36512.46 | 3197.83 | 38783.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35665.18 | 36570.74 | 37213.56 | 37660.40 | 38012.92 | 38189.88 | 38453.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17492.69 | 3304.41 | 22953.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15917.58 | 17281.61 | 18550.76 | 19025.02 | 19385.69 | 19822.93 | 21295.50 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68575.57 | 17906.06 | 80929.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32348.01 | 68956.11 | 78038.46 | 79141.39 | 79885.20 | 80231.64 | 80656.90 |
| **Latency** | 499µs    | 544µs    | 670µs    | 709µs    | 1ms      | 1ms      | 1ms      |

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
| 22738.11 | 4890.32 | 30055.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20131.70 | 21143.82 | 23574.67 | 25811.11 | 26713.91 | 28100.55 | 28908.65 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7777.57  | 1566.36 | 12587.92 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5523.61 | 7527.43 | 8543.70 | 8632.76 | 8691.91 | 8712.24 | 8750.62 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10744.30 | 2292.71 | 15437.16 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7919.65 | 10508.83 | 11524.83 | 11889.64 | 12407.14 | 12775.61 | 13632.02 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69228.05 | 14922.27 | 78325.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37346.56 | 73360.26 | 75549.30 | 76352.33 | 76906.48 | 77282.72 | 77724.43 |
| **Latency** | 585µs    | 621µs    | 660µs    | 697µs    | 792µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36002.14 | 7073.67 | 39700.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33761.25 | 37425.22 | 38115.02 | 38721.46 | 38970.69 | 39088.89 | 39250.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67914.31 | 15376.32 | 77957.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30523.94 | 72311.89 | 74621.21 | 75522.23 | 76143.74 | 76412.57 | 76804.02 |
| **Latency** | 590µs    | 625µs    | 660µs    | 701µs    | 827µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40866.82 | 8599.68 | 48631.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27939.52 | 39162.05 | 44914.13 | 46155.31 | 46614.66 | 46899.53 | 47415.42 |
| **Latency** | 982µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66704.24 | 17078.28 | 87225.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41643.48 | 43312.80 | 78319.77 | 80932.01 | 81860.04 | 82380.47 | 83408.90 |
| **Latency** | 464µs    | 547µs    | 678µs    | 806µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25021.76 | 4177.31 | 30188.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23503.16 | 24765.57 | 26194.41 | 27004.23 | 27365.42 | 27843.68 | 28646.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

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
| 69489.89 | 15568.75 | 82759.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32290.32 | 73643.20 | 76423.27 | 77325.09 | 77840.06 | 78124.57 | 78510.67 |
| **Latency** | 578µs    | 612µs    | 651µs    | 691µs    | 778µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40938.87 | 5802.83 | 43963.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40801.00 | 41641.83 | 42164.70 | 42710.02 | 43062.06 | 43285.91 | 43601.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23994.75 | 4854.52 | 79817.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21844.71 | 23418.61 | 25254.67 | 26014.17 | 26613.56 | 27304.72 | 28602.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10346.03 | 1857.79 | 14980.03 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8503.27 | 10308.91 | 10940.51 | 11186.12 | 11387.34 | 11847.91 | 13007.68 |
| **Latency** | 3ms     | 4ms      | 4ms      | 5ms      | 5ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35095.23 | 7590.17 | 41859.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25851.82 | 33878.07 | 38364.37 | 39321.80 | 39894.02 | 40302.95 | 41010.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54507.16 | 7483.32 | 59123.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52096.12 | 55903.63 | 56609.91 | 57281.04 | 57757.47 | 58046.57 | 58442.31 |
| **Latency** | 784µs    | 831µs    | 888µs    | 924µs    | 987µs    | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28438.28 | 4528.07 | 33505.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26008.71 | 27714.03 | 29858.96 | 30624.20 | 31278.49 | 31843.70 | 32804.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66358.27 | 12560.05 | 86814.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50734.24 | 54947.02 | 63719.51 | 79254.65 | 80943.30 | 81742.08 | 83633.86 |
| **Latency** | 452µs    | 567µs    | 687µs    | 896µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6666.78  | 2062.76 | 10780.16 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4844.25 | 5814.33 | 7367.67 | 7883.04 | 8413.40 | 8640.01 | 9938.66 |
| **Latency** | 4ms     | 5ms     | 7ms     | 9ms     | 11ms    | 13ms    | 19ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 70571.58 | 14805.10 | 79663.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39210.38 | 74542.16 | 76631.40 | 77671.82 | 78251.25 | 78534.94 | 79110.01 |
| **Latency** | 576µs    | 609µs    | 647µs    | 689µs    | 760µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-06-27T02:07:43.011Z</p>
