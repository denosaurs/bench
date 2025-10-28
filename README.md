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
| Stric                                                                                | 124763.56 | 12635.59 | 150095.30 | 100%     |
| Bun                                                                                  | 118509.96 | 14136.19 | 148040.80 | 95%      |
| Hyper Express                                                                        | 113976.27 | 13933.68 | 149506.37 | 91%      |
| Elysia                                                                               | 102329.52 | 10378.13 | 138730.78 | 82%      |
| Deno                                                                                 | 86286.08  | 4445.59  | 104327.15 | 69%      |
| Vixeny (Deno)                                                                        | 78662.76  | 3665.67  | 95298.36  | 63%      |
| NHttp                                                                                | 78262.67  | 3373.88  | 88641.78  | 63%      |
| Fast                                                                                 | 77574.72  | 3694.61  | 110138.64 | 62%      |
| Fastro                                                                               | 76451.79  | 10857.25 | 107203.42 | 61%      |
| Hono                                                                                 | 76289.62  | 5009.31  | 99801.25  | 61%      |
| Deso                                                                                 | 71908.52  | 4009.05  | 101496.71 | 58%      |
| Megalo                                                                               | 71762.97  | 3628.02  | 76071.61  | 58%      |
| Alosaur                                                                              | 66304.20  | 3834.13  | 71558.09  | 53%      |
| Cheetah                                                                              | 61210.18  | 3400.43  | 65809.04  | 49%      |
| Reno                                                                                 | 58905.71  | 3092.72  | 61638.14  | 47%      |
| http                                                                                 | 52732.36  | 6331.07  | 61116.15  | 42%      |
| Router                                                                               | 51040.47  | 5552.66  | 59549.06  | 41%      |
| Danet V2 (Hono)                                                                      | 49251.14  | 3522.33  | 51618.50  | 39%      |
| Danet (Oak)                                                                          | 45191.83  | 3470.66  | 47829.79  | 36%      |
| Oak                                                                                  | 39002.16  | 4048.72  | 42031.62  | 31%      |
| Node                                                                                 | 38632.90  | 3366.48  | 42490.93  | 31%      |
| Little                                                                               | 36761.01  | 4828.45  | 42826.30  | 29%      |
| Aqua                                                                                 | 36010.33  | 5394.46  | 46967.54  | 29%      |
| Fastify                                                                              | 34873.08  | 3355.56  | 37274.99  | 28%      |
| Dinatra                                                                              | 25679.65  | 3704.85  | 32603.00  | 21%      |
| Abc                                                                                  | 21718.55  | 2311.54  | 25965.97  | 17%      |
| Express (Deno)                                                                       | 11278.54  | 2397.14  | 15510.88  | 9%       |
| Express                                                                              | 8972.82   | 1481.57  | 12045.52  | 7%       |
| Servest                                                                              | 7900.71   | 2547.52  | 16075.78  | 6%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-a6aaa708-5306-4d20-8828-02d7f732a94a) |           |          |           |          |

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
| 21718.55 | 2311.54 | 25965.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20175.56 | 21016.14 | 22108.30 | 22959.33 | 23523.89 | 23854.42 | 24901.02 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

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
| 66304.20 | 3834.13 | 71558.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64967.63 | 66200.24 | 66947.41 | 67602.71 | 68327.13 | 68606.76 | 69517.92 |
| **Latency** | 662µs    | 692µs    | 761µs    | 796µs    | 823µs    | 858µs    | 939µs    |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36010.33 | 5394.46 | 46967.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29000.39 | 34908.63 | 37626.76 | 39614.91 | 40669.02 | 41369.80 | 42582.94 |
| **Latency** | 845µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 118509.96 | 14136.19 | 148040.80 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 102458.10 | 106080.41 | 117306.75 | 130536.56 | 138465.90 | 141841.25 | 146482.69 |
| **Latency** | 258µs     | 324µs     | 403µs     | 476µs     | 622µs     | 720µs     | 904µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61210.18 | 3400.43 | 65809.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60642.51 | 61120.16 | 61699.43 | 62072.70 | 62472.95 | 62708.95 | 63063.51 |
| **Latency** | 715µs    | 745µs    | 828µs    | 862µs    | 896µs    | 936µs    | 985µs    |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45191.83 | 3470.66 | 47829.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44451.69 | 45284.78 | 45669.48 | 46291.11 | 46625.66 | 46840.33 | 47287.69 |
| **Latency** | 959µs    | 994µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49251.14 | 3522.33 | 51618.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48505.18 | 49202.40 | 49836.98 | 50179.89 | 50603.84 | 50782.91 | 51150.04 |
| **Latency** | 884µs    | 916µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 86286.08 | 4445.59 | 104327.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 83158.99 | 84473.95 | 85907.26 | 87914.79 | 90978.94 | 92444.42 | 97126.56 |
| **Latency** | 480µs    | 532µs    | 581µs    | 623µs    | 670µs    | 713µs    | 804µs    |

### [Deso](#deso)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 71908.52 | 4009.05 | 101496.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 70156.45 | 71215.55 | 72139.26 | 73096.14 | 74116.19 | 74750.04 | 78748.84 |
| **Latency** | 638µs    | 662µs    | 691µs    | 718µs    | 749µs    | 784µs    | 859µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25679.65 | 3704.85 | 32603.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23912.10 | 24986.77 | 25907.58 | 27771.49 | 28920.59 | 29470.86 | 30580.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Elysia](#elysia)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 102329.52 | 10378.13 | 138730.78 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 90055.66 | 94349.49 | 100994.50 | 109274.59 | 116528.02 | 121372.25 | 129220.68 |
| **Latency** | 282µs    | 361µs    | 480µs     | 571µs     | 687µs     | 805µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8972.82  | 1481.57 | 12045.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7125.56 | 8320.87 | 9300.62 | 9602.41 | 10516.67 | 11487.80 | 11862.69 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 7ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11278.54 | 2397.14 | 15510.88 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7283.65 | 11115.48 | 12335.67 | 12640.53 | 12882.22 | 13104.17 | 13737.51 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 77574.72 | 3694.61 | 110138.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 75760.86 | 76707.36 | 77654.87 | 78794.46 | 79870.04 | 80947.58 | 84112.24 |
| **Latency** | 563µs    | 596µs    | 647µs    | 684µs    | 713µs    | 745µs    | 821µs    |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34873.08 | 3355.56 | 37274.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34333.69 | 34876.87 | 35369.29 | 35875.33 | 36246.56 | 36443.36 | 36764.55 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 76451.79 | 10857.25 | 107203.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 69130.33 | 71028.49 | 73273.38 | 81502.61 | 90737.08 | 96847.91 | 104400.96 |
| **Latency** | 457µs    | 574µs    | 668µs    | 734µs    | 771µs    | 810µs    | 997µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 76289.62 | 5009.31 | 99801.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74339.48 | 75615.86 | 76676.91 | 77809.42 | 78829.49 | 79602.80 | 81623.24 |
| **Latency** | 570µs    | 604µs    | 656µs    | 693µs    | 725µs    | 761µs    | 839µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52732.36 | 6331.07 | 61116.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48468.89 | 50922.00 | 54935.46 | 56252.41 | 57133.84 | 57524.65 | 58770.95 |
| **Latency** | 641µs    | 884µs    | 956µs    | 992µs    | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 113976.27 | 13933.68 | 149506.37 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 98021.87 | 104711.44 | 112104.33 | 122719.36 | 133345.46 | 138302.79 | 145405.22 |
| **Latency** | 255µs    | 326µs     | 420µs     | 525µs     | 621µs     | 709µs     | 948µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36761.01 | 4828.45 | 42826.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34756.66 | 36505.83 | 37721.04 | 39025.93 | 39978.15 | 40701.56 | 41582.25 |
| **Latency** | 848µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 71762.97 | 3628.02 | 76071.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 70582.17 | 71441.67 | 72112.06 | 72900.69 | 73689.97 | 74062.87 | 75115.63 |
| **Latency** | 611µs    | 642µs    | 701µs    | 736µs    | 764µs    | 800µs    | 865µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78262.67 | 3373.88 | 88641.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 76248.20 | 77437.24 | 78429.07 | 79520.57 | 80741.29 | 81731.08 | 83043.43 |
| **Latency** | 557µs    | 591µs    | 642µs    | 678µs    | 707µs    | 736µs    | 811µs    |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38632.90 | 3366.48 | 42490.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38017.32 | 38514.52 | 38981.67 | 39616.42 | 40180.72 | 40506.63 | 40993.05 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39002.16 | 4048.72 | 42031.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38427.25 | 39327.67 | 39886.71 | 40336.01 | 40655.41 | 40927.64 | 41360.97 |
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
| 58905.71 | 3092.72 | 61638.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57686.84 | 58891.01 | 59537.70 | 59880.69 | 60218.56 | 60540.56 | 60870.03 |
| **Latency** | 743µs    | 775µs    | 861µs    | 896µs    | 930µs    | 971µs    | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51040.47 | 5552.66 | 59549.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48116.65 | 49801.62 | 52225.70 | 53959.87 | 54994.84 | 55614.37 | 56888.74 |
| **Latency** | 658µs    | 921µs    | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 124763.56 | 12635.59 | 150095.30 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 107139.57 | 115382.16 | 125433.69 | 134748.70 | 141729.05 | 144607.55 | 148531.30 |
| **Latency** | 239µs     | 303µs     | 381µs     | 465µs     | 594µs     | 673µs     | 870µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7900.71  | 2547.52 | 16075.78 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5227.69 | 6642.47 | 8205.07 | 9558.65 | 10626.23 | 11103.79 | 13170.98 |
| **Latency** | 4ms     | 5ms     | 6ms     | 6ms     | 8ms      | 11ms     | 13ms     |

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
| 78662.76 | 3665.67 | 95298.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 77026.32 | 77867.93 | 78741.62 | 79805.37 | 81135.32 | 82100.07 | 84822.69 |
| **Latency** | 554µs    | 588µs    | 638µs    | 675µs    | 703µs    | 733µs    | 817µs    |

---

<p align="center">Generated 2025-10-28T02:08:00.152Z</p>
