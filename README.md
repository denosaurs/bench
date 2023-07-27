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
| Vixeny (Deno)                                                                        | 68697.24 | 14905.52 | 77813.72  | 100%     |
| NHttp                                                                                | 67972.19 | 14010.45 | 76228.80  | 99%      |
| Fast                                                                                 | 67827.53 | 15810.68 | 77320.30  | 99%      |
| Deno                                                                                 | 67035.56 | 18085.18 | 80619.78  | 98%      |
| Stric                                                                                | 65824.90 | 12765.38 | 85861.20  | 96%      |
| Hono                                                                                 | 65714.15 | 13910.86 | 75341.68  | 96%      |
| Hyper Express                                                                        | 65087.83 | 17337.14 | 85040.41  | 95%      |
| Bun                                                                                  | 64242.76 | 14977.16 | 85621.06  | 94%      |
| Deso                                                                                 | 61469.63 | 13728.14 | 70881.19  | 89%      |
| Fastro                                                                               | 56447.66 | 17579.27 | 70403.14  | 82%      |
| Reno                                                                                 | 54004.13 | 7289.49  | 59831.38  | 79%      |
| Cheetah                                                                              | 49101.13 | 5562.24  | 57441.55  | 71%      |
| http                                                                                 | 39551.56 | 10123.77 | 50670.00  | 58%      |
| Node                                                                                 | 38682.04 | 6711.80  | 42353.17  | 56%      |
| Peko                                                                                 | 35330.47 | 7452.73  | 42549.09  | 51%      |
| Fastify                                                                              | 34931.08 | 7840.46  | 40805.91  | 51%      |
| Alosaur                                                                              | 32049.05 | 7224.66  | 98800.28  | 47%      |
| Router                                                                               | 28318.07 | 4901.57  | 33967.87  | 41%      |
| Little                                                                               | 25051.39 | 4496.48  | 30595.88  | 36%      |
| Aqua                                                                                 | 23242.73 | 3511.96  | 30965.36  | 34%      |
| Oak                                                                                  | 21596.56 | 4781.72  | 30819.30  | 31%      |
| Dinatra                                                                              | 21430.38 | 4653.47  | 45547.85  | 31%      |
| Abc                                                                                  | 19962.73 | 3147.38  | 26947.53  | 29%      |
| Danet (Oak)                                                                          | 17472.27 | 3118.58  | 22379.09  | 25%      |
| Opine                                                                                | 10185.01 | 1978.53  | 15902.33  | 15%      |
| Express (Deno)                                                                       | 9718.39  | 2087.99  | 14792.33  | 14%      |
| Express                                                                              | 7831.78  | 1380.05  | 9819.00   | 11%      |
| Servest                                                                              | 6415.74  | 1972.18  | 10079.76  | 9%       |
| Acorn                                                                                | 4980.43  | 7027.40  | 133333.33 | 7%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-a61086e9-72a4-40ea-ba53-bfa0456bc900) |          |          |           |          |

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
| 19962.73 | 3147.38 | 26947.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17512.33 | 18865.92 | 20597.82 | 22167.02 | 22513.50 | 22744.34 | 23346.56 |
| **Latency** | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4980.43  | 7027.40 | 133333.33 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 56.43 | 92.78 | 3778.35 | 7554.91 | 9545.39 | 12289.56 | 25287.37 |
| **Latency** | 6ms   | 7ms   | 15ms    | 22ms    | 26ms    | 28ms     | 40ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32049.05 | 7224.66 | 98800.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27260.08 | 29132.96 | 34521.19 | 35422.81 | 36120.96 | 36678.85 | 38011.65 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23242.73 | 3511.96 | 30965.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21653.28 | 22576.98 | 24113.37 | 25053.99 | 25503.75 | 25902.95 | 27417.19 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64242.76 | 14977.16 | 85621.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45656.89 | 49975.76 | 67789.44 | 78735.89 | 80441.90 | 81245.17 | 82246.55 |
| **Latency** | 459µs    | 576µs    | 689µs    | 968µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49101.13 | 5562.24 | 57441.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48704.56 | 49770.94 | 50376.87 | 50938.95 | 51265.34 | 51430.07 | 51767.32 |
| **Latency** | 904µs    | 935µs    | 980µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17472.27 | 3118.58 | 22379.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15779.18 | 17073.94 | 18487.84 | 18965.97 | 19324.74 | 19763.79 | 21108.13 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67035.56 | 18085.18 | 80619.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30976.68 | 64595.94 | 76690.81 | 78033.61 | 78945.38 | 79449.68 | 80051.64 |
| **Latency** | 504µs    | 559µs    | 679µs    | 719µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61469.63 | 13728.14 | 70881.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29035.57 | 65483.60 | 67714.55 | 68508.56 | 69243.30 | 69608.51 | 70258.49 |
| **Latency** | 650µs    | 696µs    | 728µs    | 767µs    | 919µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21430.38 | 4653.47 | 45547.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19424.38 | 20313.06 | 22028.75 | 23519.64 | 25210.74 | 25953.73 | 27363.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7831.78  | 1380.05 | 9819.00 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5690.57 | 7929.27 | 8483.37 | 8592.06 | 8652.65 | 8676.83 | 8720.10 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 9ms     | 12ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9718.39  | 2087.99 | 14792.33 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7199.24 | 9428.09 | 10541.69 | 10752.96 | 10886.67 | 11329.13 | 11780.03 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 5ms      | 7ms      | 13ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67827.53 | 15810.68 | 77320.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30315.31 | 72464.15 | 74874.52 | 75631.67 | 76114.10 | 76333.24 | 76677.22 |
| **Latency** | 589µs    | 627µs    | 661µs    | 701µs    | 827µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34931.08 | 7840.46 | 40805.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20642.84 | 36895.75 | 37590.79 | 38397.73 | 38651.61 | 38794.86 | 39012.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56447.66 | 17579.27 | 70403.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26153.48 | 50011.19 | 67296.09 | 68674.09 | 69160.81 | 69359.19 | 69738.16 |
| **Latency** | 661µs    | 708µs    | 741µs    | 771µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65714.15 | 13910.86 | 75341.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38515.36 | 69519.24 | 71400.37 | 72519.96 | 73139.88 | 73504.06 | 74543.61 |
| **Latency** | 611µs    | 652µs    | 686µs    | 722µs    | 888µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39551.56 | 10123.77 | 50670.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22590.25 | 37357.84 | 44455.20 | 46214.41 | 46877.12 | 47230.13 | 47925.00 |
| **Latency** | 975µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65087.83 | 17337.14 | 85040.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38992.04 | 44447.35 | 76309.38 | 79527.44 | 80581.99 | 81025.81 | 82041.44 |
| **Latency** | 473µs    | 554µs    | 686µs    | 773µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25051.39 | 4496.48 | 30595.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22755.98 | 24743.72 | 26393.43 | 27375.97 | 27769.90 | 28169.45 | 29069.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

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
| 67972.19 | 14010.45 | 76228.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43922.19 | 71618.99 | 73610.68 | 74445.80 | 74934.85 | 75177.80 | 75722.97 |
| **Latency** | 598µs    | 637µs    | 671µs    | 708µs    | 824µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38682.04 | 6711.80 | 42353.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37813.82 | 39850.83 | 40409.11 | 41256.32 | 41608.55 | 41738.21 | 42044.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21596.56 | 4781.72 | 30819.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15422.70 | 20994.19 | 23334.76 | 24680.01 | 25153.54 | 25443.88 | 27144.22 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10185.01 | 1978.53 | 15902.33 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7983.66 | 10003.96 | 10743.98 | 11104.06 | 11365.98 | 12145.10 | 13833.98 |
| **Latency** | 3ms     | 4ms      | 4ms      | 5ms      | 5ms      | 6ms      | 11ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35330.47 | 7452.73 | 42549.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26847.66 | 34116.89 | 38441.98 | 39562.01 | 40111.64 | 40567.14 | 41338.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54004.13 | 7289.49 | 59831.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51637.48 | 55238.97 | 55956.94 | 56723.57 | 57372.63 | 57718.64 | 58069.88 |
| **Latency** | 791µs    | 854µs    | 893µs    | 921µs    | 987µs    | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28318.07 | 4901.57 | 33967.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25500.40 | 27534.57 | 29900.16 | 30850.45 | 31433.02 | 31826.90 | 33048.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65824.90 | 12765.38 | 85861.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49501.28 | 53045.12 | 71188.80 | 77913.69 | 79630.47 | 80484.03 | 82333.40 |
| **Latency** | 460µs    | 571µs    | 695µs    | 869µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6415.74  | 1972.18 | 10079.76 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4707.19 | 5452.71 | 6929.43 | 7645.39 | 8089.55 | 8322.11 | 9803.29 |
| **Latency** | 4ms     | 5ms     | 7ms     | 9ms     | 11ms    | 14ms    | 20ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68697.24 | 14905.52 | 77813.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36207.49 | 73144.08 | 74977.85 | 75632.00 | 76217.29 | 76608.20 | 77143.14 |
| **Latency** | 586µs    | 622µs    | 661µs    | 708µs    | 783µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-07-27T01:31:48.652Z</p>
