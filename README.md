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
  - [Servest](#servest)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Acorn](#acorn-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Cheetah](#cheetah-1)
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
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Deno                                                                                 | 71358.46 | 16745.19 | 81737.83 | 100%     |
| Bun                                                                                  | 67892.47 | 11884.66 | 90951.84 | 95%      |
| Hyper Express                                                                        | 65083.86 | 17171.27 | 87244.79 | 91%      |
| NHttp                                                                                | 64018.43 | 14642.16 | 73642.37 | 90%      |
| Hono                                                                                 | 63344.06 | 14049.57 | 73635.68 | 89%      |
| Fast                                                                                 | 63151.62 | 14606.56 | 72526.05 | 88%      |
| Fastro                                                                               | 62371.47 | 12655.79 | 70634.13 | 87%      |
| Deso                                                                                 | 59599.07 | 13949.79 | 68639.31 | 84%      |
| Megalo                                                                               | 59454.70 | 12794.86 | 67554.45 | 83%      |
| Reno                                                                                 | 51195.66 | 6113.98  | 54715.45 | 72%      |
| Cheetah                                                                              | 42354.24 | 5035.23  | 45041.53 | 59%      |
| Node                                                                                 | 41583.57 | 5951.49  | 44938.00 | 58%      |
| http                                                                                 | 39741.41 | 10474.71 | 49314.71 | 56%      |
| Peko                                                                                 | 37986.72 | 8209.36  | 48325.88 | 53%      |
| Fastify                                                                              | 37561.29 | 6466.31  | 40745.15 | 53%      |
| Alosaur                                                                              | 34459.00 | 6576.06  | 45031.55 | 48%      |
| Router                                                                               | 28981.78 | 5587.75  | 33677.43 | 41%      |
| Little                                                                               | 25978.64 | 4516.99  | 32612.74 | 36%      |
| Aqua                                                                                 | 24677.66 | 3191.31  | 27737.30 | 35%      |
| Oak                                                                                  | 24486.94 | 4401.90  | 31715.25 | 34%      |
| Dinatra                                                                              | 22232.13 | 4273.59  | 48450.08 | 31%      |
| Abc                                                                                  | 20510.43 | 2819.63  | 24222.48 | 29%      |
| Opine                                                                                | 10607.38 | 1878.92  | 15563.08 | 15%      |
| Express (Deno)                                                                       | 9641.61  | 1902.42  | 14541.51 | 14%      |
| Express                                                                              | 7944.00  | 1466.24  | 9927.52  | 11%      |
| Servest                                                                              | 6516.46  | 2039.61  | 9881.47  | 9%       |
| Acorn                                                                                | 4783.19  | 6413.61  | 76986.35 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-c2450b56-e697-428b-b3d7-66e06b437038) |          |          |          |          |

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

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20510.43 | 2819.63 | 24222.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18802.22 | 20057.93 | 20521.92 | 22124.14 | 23311.38 | 23803.76 | 24042.78 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4783.19  | 6413.61 | 76986.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1765.64 | 2277.44 | 2864.72 | 4037.55 | 9808.34 | 26130.33 | 29288.79 |
| **Latency** | 4ms     | 8ms     | 14ms    | 20ms    | 24ms    | 25ms     | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34459.00 | 6576.06 | 45031.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30702.67 | 33413.75 | 37104.30 | 37779.89 | 38246.39 | 38560.88 | 39088.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24677.66 | 3191.31 | 27737.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23955.00 | 24395.40 | 25610.54 | 26164.94 | 26353.58 | 26448.01 | 27152.58 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67892.47 | 11884.66 | 90951.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55724.37 | 59219.89 | 64690.95 | 80104.48 | 81937.36 | 82660.14 | 84940.42 |
| **Latency** | 445µs    | 561µs    | 678µs    | 835µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42354.24 | 5035.23 | 45041.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42521.35 | 43215.62 | 43550.20 | 43906.21 | 44153.96 | 44260.31 | 44506.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 71358.46 | 16745.19 | 81737.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33805.66 | 75741.02 | 79410.11 | 80292.40 | 80757.54 | 81014.66 | 81482.52 |
| **Latency** | 515µs    | 586µs    | 629µs    | 679µs    | 759µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59599.07 | 13949.79 | 68639.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29590.03 | 64182.17 | 66531.91 | 66999.34 | 67656.72 | 67849.99 | 68128.05 |
| **Latency** | 694µs    | 716µs    | 737µs    | 770µs    | 954µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22232.13 | 4273.59 | 48450.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20636.75 | 21772.26 | 22525.32 | 24225.22 | 24739.36 | 25069.21 | 26523.63 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7944.00  | 1466.24 | 9927.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5700.30 | 7713.98 | 8669.55 | 8777.17 | 8850.93 | 8885.60 | 8929.59 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9641.61  | 1902.42 | 14541.51 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7261.18 | 9593.13 | 10453.13 | 10644.39 | 10701.91 | 10727.98 | 11506.85 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63151.62 | 14606.56 | 72526.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31255.93 | 66199.90 | 70577.58 | 71260.51 | 71656.15 | 71829.79 | 72116.77 |
| **Latency** | 653µs    | 676µs    | 698µs    | 728µs    | 890µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37561.29 | 6466.31 | 40745.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36841.97 | 38753.40 | 39309.75 | 39877.33 | 40138.85 | 40279.27 | 40500.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62371.47 | 12655.79 | 70634.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35414.80 | 66312.51 | 68016.92 | 68717.78 | 69182.55 | 69460.34 | 70035.65 |
| **Latency** | 689µs    | 709µs    | 727µs    | 748µs    | 872µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63344.06 | 14049.57 | 73635.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31105.81 | 67882.60 | 70001.17 | 70625.90 | 71102.62 | 71263.00 | 71537.83 |
| **Latency** | 661µs    | 682µs    | 700µs    | 728µs    | 852µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39741.41 | 10474.71 | 49314.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24458.66 | 34020.69 | 45656.54 | 47476.58 | 48109.07 | 48343.51 | 48736.86 |
| **Latency** | 909µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65083.86 | 17171.27 | 87244.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41647.26 | 43005.84 | 74233.55 | 80233.36 | 81396.92 | 81924.22 | 83373.95 |
| **Latency** | 471µs    | 559µs    | 681µs    | 940µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25978.64 | 4516.99 | 32612.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22913.62 | 26014.16 | 27121.36 | 28303.71 | 28563.94 | 28723.84 | 29647.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59454.70 | 12794.86 | 67554.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30116.43 | 63091.31 | 65338.93 | 65862.98 | 66163.63 | 66333.40 | 66717.10 |
| **Latency** | 718µs    | 737µs    | 756µs    | 779µs    | 919µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64018.43 | 14642.16 | 73642.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32048.24 | 67626.06 | 71423.24 | 72052.98 | 72406.10 | 72568.61 | 72839.00 |
| **Latency** | 644µs    | 667µs    | 690µs    | 722µs    | 864µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41583.57 | 5951.49 | 44938.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41501.48 | 42357.85 | 42838.80 | 43363.56 | 43660.51 | 43811.65 | 44208.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24486.94 | 4401.90 | 31715.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22726.26 | 24278.98 | 26080.09 | 26550.49 | 26718.31 | 26834.92 | 27721.53 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10607.38 | 1878.92 | 15563.08 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9022.51 | 10302.53 | 11149.85 | 11401.74 | 12206.91 | 12596.47 | 13107.04 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 5ms      | 5ms      | 9ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37986.72 | 8209.36 | 48325.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28789.11 | 37153.30 | 41506.65 | 42476.76 | 42872.79 | 43040.99 | 43591.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51195.66 | 6113.98 | 54715.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50509.82 | 52213.73 | 52689.44 | 53155.98 | 53554.55 | 53783.53 | 54046.75 |
| **Latency** | 909µs    | 926µs    | 937µs    | 952µs    | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28981.78 | 5587.75 | 33677.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20857.34 | 28404.97 | 31408.00 | 32103.05 | 32585.40 | 32952.91 | 33439.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6516.46  | 2039.61 | 9881.47 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4113.64 | 5705.90 | 7120.76 | 7974.60 | 8213.90 | 8338.49 | 9686.84 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 9ms     | 15ms    | 17ms    |

---

<p align="center">Generated 2023-05-15T01:45:13.793Z</p>
