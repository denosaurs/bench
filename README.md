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
| Deno                                                                                 | 55599.78 | 14318.36 | 66809.26  | 100%     |
| Vixeny (Deno)                                                                        | 54418.40 | 12819.36 | 63578.30  | 98%      |
| Hyper Express                                                                        | 54147.45 | 14837.25 | 69606.59  | 97%      |
| NHttp                                                                                | 54011.89 | 11580.94 | 61663.77  | 97%      |
| Fast                                                                                 | 53698.02 | 12115.67 | 62137.73  | 97%      |
| Stric                                                                                | 52245.81 | 11895.10 | 71253.58  | 94%      |
| Bun                                                                                  | 51287.65 | 12931.11 | 68352.07  | 92%      |
| Hono                                                                                 | 49075.01 | 14596.14 | 60156.25  | 88%      |
| Deso                                                                                 | 48524.88 | 10967.93 | 56684.28  | 87%      |
| Fastro                                                                               | 44833.57 | 13579.01 | 55958.47  | 81%      |
| Reno                                                                                 | 42321.91 | 6765.44  | 46967.42  | 76%      |
| Cheetah                                                                              | 38246.59 | 4980.86  | 41725.00  | 69%      |
| http                                                                                 | 32165.75 | 8140.51  | 83238.24  | 58%      |
| Node                                                                                 | 30108.47 | 5050.10  | 32833.65  | 54%      |
| Peko                                                                                 | 27502.06 | 5932.91  | 56004.44  | 49%      |
| Alosaur                                                                              | 25165.19 | 5759.93  | 60501.72  | 45%      |
| Router                                                                               | 22576.39 | 4374.48  | 29992.85  | 41%      |
| Fastify                                                                              | 21551.96 | 8460.77  | 29015.97  | 39%      |
| Little                                                                               | 19439.55 | 3947.86  | 40927.64  | 35%      |
| Aqua                                                                                 | 19232.54 | 3367.73  | 25031.85  | 35%      |
| Oak                                                                                  | 18198.74 | 3602.56  | 23971.40  | 33%      |
| Dinatra                                                                              | 16713.93 | 3505.44  | 34670.95  | 30%      |
| Abc                                                                                  | 15083.86 | 2748.43  | 20023.96  | 27%      |
| Danet (Oak)                                                                          | 12938.46 | 3729.01  | 53828.93  | 23%      |
| Opine                                                                                | 8353.51  | 1660.51  | 25450.47  | 15%      |
| Express (Deno)                                                                       | 7229.97  | 2474.40  | 68697.57  | 13%      |
| Acorn                                                                                | 6335.01  | 9650.14  | 119242.30 | 11%      |
| Express                                                                              | 5440.13  | 1303.26  | 11827.24  | 10%      |
| Servest                                                                              | 4932.35  | 1513.41  | 7598.26   | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-97e708a1-9aa6-4fe2-8f65-20bd493a8083) |          |          |           |          |

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
| 15083.86 | 2748.43 | 20023.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12322.68 | 13616.89 | 16512.23 | 16944.50 | 17342.13 | 17519.21 | 18021.66 |
| **Latency** | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6335.01  | 9650.14 | 119242.30 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 44.59 | 65.54 | 5174.71 | 8449.18 | 14996.46 | 19998.60 | 49778.69 |
| **Latency** | 7ms   | 9ms   | 19ms    | 26ms    | 30ms     | 33ms     | 51ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25165.19 | 5759.93 | 60501.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19736.01 | 22209.78 | 27516.24 | 28312.84 | 28942.88 | 29303.14 | 30442.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19232.54 | 3367.73 | 25031.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17147.17 | 18306.24 | 20115.11 | 20849.98 | 21614.29 | 22485.44 | 24325.46 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51287.65 | 12931.11 | 68352.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34275.54 | 39556.81 | 55490.67 | 63549.15 | 65073.14 | 65874.60 | 66901.40 |
| **Latency** | 569µs    | 703µs    | 851µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38246.59 | 4980.86 | 41725.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37397.69 | 39109.82 | 39555.04 | 39978.38 | 40166.34 | 40302.16 | 40553.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12938.46 | 3729.01 | 53828.93 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8512.95 | 11184.66 | 13671.33 | 15107.42 | 15558.66 | 17050.89 | 19305.44 |
| **Latency** | 2ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55599.78 | 14318.36 | 66809.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25085.18 | 55629.02 | 63037.32 | 64391.66 | 65036.53 | 65431.54 | 66119.31 |
| **Latency** | 617µs    | 689µs    | 827µs    | 871µs    | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48524.88 | 10967.93 | 56684.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24079.10 | 50890.46 | 53216.22 | 54303.52 | 55017.86 | 55432.42 | 56108.68 |
| **Latency** | 822µs    | 880µs    | 925µs    | 971µs    | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16713.93 | 3505.44 | 34670.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14312.06 | 15186.62 | 17108.25 | 18952.42 | 20173.41 | 20578.51 | 21245.58 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5440.13  | 1303.26 | 11827.24 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3282.40 | 5461.01 | 6036.05 | 6174.80 | 6254.75 | 6295.92 | 6479.53 |
| **Latency** | 7ms     | 8ms     | 8ms     | 8ms     | 12ms    | 15ms    | 20ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7229.97  | 2474.40 | 68697.57 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5025.75 | 6701.03 | 7744.18 | 8072.45 | 8352.13 | 8613.65 | 8925.35 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 8ms     | 10ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53698.02 | 12115.67 | 62137.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28300.47 | 55735.29 | 59017.30 | 60179.76 | 60643.86 | 60941.34 | 61465.33 |
| **Latency** | 738µs    | 789µs    | 836µs    | 885µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21551.96 | 8460.77 | 29015.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10285.55 | 10437.75 | 27155.31 | 28243.68 | 28444.75 | 28542.15 | 28719.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      | 4ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44833.57 | 13579.01 | 55958.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21803.21 | 37167.22 | 53228.40 | 54316.78 | 54713.59 | 54894.06 | 55215.84 |
| **Latency** | 830µs    | 892µs    | 937µs    | 980µs    | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49075.01 | 14596.14 | 60156.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22162.41 | 44369.51 | 57429.16 | 58216.08 | 58624.09 | 58801.96 | 59234.45 |
| **Latency** | 765µs    | 817µs    | 860µs    | 923µs    | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32165.75 | 8140.51 | 83238.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21211.13 | 28808.22 | 35902.48 | 36802.37 | 37400.21 | 37729.97 | 38388.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54147.45 | 14837.25 | 69606.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31423.90 | 36343.42 | 62755.53 | 66052.64 | 67056.40 | 67559.73 | 68257.35 |
| **Latency** | 572µs    | 653µs    | 831µs    | 883µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19439.55 | 3947.86 | 40927.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16229.95 | 18789.64 | 20895.81 | 21460.23 | 21893.41 | 22322.69 | 23758.74 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

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
| 54011.89 | 11580.94 | 61663.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28314.62 | 56719.61 | 59036.30 | 59700.60 | 60137.03 | 60564.44 | 61101.12 |
| **Latency** | 746µs    | 796µs    | 839µs    | 880µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30108.47 | 5050.10 | 32833.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29323.02 | 30744.42 | 31180.65 | 32058.82 | 32249.82 | 32354.51 | 32534.65 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18198.74 | 3602.56 | 23971.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15811.46 | 17306.15 | 19338.78 | 19966.77 | 20505.04 | 21263.71 | 23048.59 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8353.51  | 1660.51 | 25450.47 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6644.69 | 7899.07 | 8921.14 | 9033.01 | 9112.65 | 9215.74 | 12383.97 |
| **Latency** | 4ms     | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 14ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27502.06 | 5932.91 | 56004.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21861.90 | 25154.42 | 29737.03 | 30653.85 | 31358.57 | 31766.45 | 33054.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42321.91 | 6765.44 | 46967.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33047.11 | 43724.28 | 44592.23 | 45421.52 | 45858.46 | 46044.45 | 46396.25 |
| **Latency** | 986µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22576.39 | 4374.48 | 29992.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19502.65 | 21388.56 | 24109.30 | 24791.70 | 25363.82 | 25830.15 | 26931.30 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52245.81 | 11895.10 | 71253.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36326.35 | 40711.95 | 55824.86 | 63790.60 | 65231.64 | 66165.44 | 67767.68 |
| **Latency** | 565µs    | 697µs    | 853µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4932.35  | 1513.41 | 7598.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3007.84 | 4209.33 | 5554.69 | 5928.38 | 6066.32 | 6146.81 | 6862.97 |
| **Latency** | 5ms     | 7ms     | 9ms     | 12ms    | 15ms    | 18ms    | 25ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54418.40 | 12819.36 | 63578.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23908.06 | 56852.10 | 60334.54 | 61248.21 | 61943.00 | 62345.86 | 63009.15 |
| **Latency** | 724µs    | 773µs    | 826µs    | 872µs    | 1ms      | 2ms      | 2ms      |

---

<p align="center">Generated 2023-08-03T01:34:20.526Z</p>
