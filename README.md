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

| Framework                                                                            | Mean     | Stddev  | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | -------- | -------- |
| Bun                                                                                  | 78801.51 | 5047.01 | 96508.45 | 100%     |
| Stric                                                                                | 76960.19 | 5177.95 | 91408.98 | 98%      |
| Hyper Express                                                                        | 76871.39 | 6497.77 | 94157.51 | 98%      |
| Elysia                                                                               | 72900.19 | 6682.37 | 90798.92 | 93%      |
| Deno                                                                                 | 60519.31 | 5135.25 | 81632.99 | 77%      |
| Fastro                                                                               | 55214.85 | 3960.62 | 79715.01 | 70%      |
| NHttp                                                                                | 54834.39 | 4119.07 | 73937.29 | 70%      |
| Vixeny (Deno)                                                                        | 54669.17 | 3743.71 | 76363.21 | 69%      |
| Fast                                                                                 | 53796.25 | 3575.89 | 73365.09 | 68%      |
| Hono                                                                                 | 52831.83 | 3855.88 | 76630.48 | 67%      |
| Megalo                                                                               | 49996.97 | 2659.11 | 58899.77 | 63%      |
| Alosaur                                                                              | 47084.36 | 2703.26 | 53417.74 | 60%      |
| Cheetah                                                                              | 43375.92 | 2314.14 | 47292.71 | 55%      |
| Reno                                                                                 | 43351.53 | 2194.92 | 48759.44 | 55%      |
| http                                                                                 | 42150.71 | 4650.35 | 49211.52 | 53%      |
| Router                                                                               | 40472.67 | 4397.04 | 46321.31 | 51%      |
| Danet V2 (Hono)                                                                      | 37477.36 | 2580.75 | 40887.97 | 48%      |
| Danet (Oak)                                                                          | 35441.95 | 2442.78 | 38384.94 | 45%      |
| Oak                                                                                  | 32647.29 | 3048.32 | 35040.30 | 41%      |
| Aqua                                                                                 | 31484.68 | 3773.04 | 39808.33 | 40%      |
| Little                                                                               | 30708.16 | 3899.57 | 36542.10 | 39%      |
| Node                                                                                 | 27380.29 | 3168.28 | 36994.51 | 35%      |
| Fastify                                                                              | 25271.77 | 5572.35 | 47389.77 | 32%      |
| Dinatra                                                                              | 22106.26 | 2822.16 | 25839.35 | 28%      |
| Abc                                                                                  | 17613.81 | 1814.92 | 20596.13 | 22%      |
| Express (Deno)                                                                       | 11520.74 | 2419.62 | 15314.78 | 15%      |
| Express                                                                              | 7720.16  | 1632.30 | 11001.86 | 10%      |
| Servest                                                                              | 6802.47  | 2174.40 | 15322.72 | 9%       |
| Acorn                                                                                | 0.00     | 0.00    | 0.00     | 0%       |
| Deso                                                                                 | 0.00     | 0.00    | 0.00     | 0%       |
| Opine                                                                                | 0.00     | 0.00    | 0.00     | 0%       |
| Peko                                                                                 | 0.00     | 0.00    | 0.00     | 0%       |
| Vixeny (Bun)                                                                         | 0.00     | 0.00    | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-9e78222b-afed-43ca-9950-a8b6c3dd009d) |          |         |          |          |

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
| 17613.81 | 1814.92 | 20596.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16049.54 | 17259.12 | 17914.54 | 18453.19 | 19307.99 | 19538.88 | 19971.63 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

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
| 47084.36 | 2703.26 | 53417.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46205.36 | 46808.76 | 47446.88 | 47907.25 | 48458.64 | 48738.41 | 50219.46 |
| **Latency** | 938µs    | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31484.68 | 3773.04 | 39808.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28480.39 | 30788.98 | 32244.67 | 33579.45 | 34359.86 | 34962.50 | 36022.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78801.51 | 5047.01 | 96508.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72325.68 | 75410.91 | 78799.10 | 82232.74 | 85224.96 | 87207.99 | 89564.71 |
| **Latency** | 391µs    | 505µs    | 612µs    | 735µs    | 885µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43375.92 | 2314.14 | 47292.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42646.39 | 43174.87 | 43619.94 | 44138.35 | 44458.02 | 44729.48 | 45350.82 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35441.95 | 2442.78 | 38384.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34812.23 | 35388.69 | 35730.81 | 36242.68 | 36677.58 | 36850.49 | 37200.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37477.36 | 2580.75 | 40887.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36916.16 | 37535.65 | 37815.69 | 38137.75 | 38555.60 | 38713.77 | 39134.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60519.31 | 5135.25 | 81632.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56608.20 | 57534.46 | 58930.99 | 62894.87 | 66431.80 | 70360.46 | 77072.18 |
| **Latency** | 633µs    | 759µs    | 842µs    | 911µs    | 958µs    | 1ms      | 1ms      |

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
| 22106.26 | 2822.16 | 25839.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20615.72 | 21736.64 | 22604.21 | 23433.77 | 24116.06 | 24837.97 | 25624.16 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 72900.19 | 6682.37 | 90798.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64026.98 | 68475.18 | 72747.93 | 77620.55 | 81591.00 | 83942.41 | 87114.13 |
| **Latency** | 419µs    | 527µs    | 659µs    | 798µs    | 959µs    | 1ms      | 1ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7720.16  | 1632.30 | 11001.86 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5907.42 | 7273.30 | 7650.74 | 8105.50 | 10537.96 | 10750.58 | 10916.92 |
| **Latency** | 4ms     | 5ms     | 6ms     | 6ms     | 8ms      | 8ms      | 10ms     |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11520.74 | 2419.62 | 15314.78 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7780.77 | 11398.68 | 12470.10 | 12851.53 | 13200.91 | 13533.22 | 13845.24 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53796.25 | 3575.89 | 73365.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51709.50 | 52640.17 | 53311.98 | 54509.25 | 57411.82 | 59602.20 | 65548.51 |
| **Latency** | 795µs    | 864µs    | 938µs    | 997µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25271.77 | 5572.35 | 47389.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23038.07 | 23569.01 | 24064.85 | 25057.93 | 33909.20 | 36924.39 | 38112.21 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55214.85 | 3960.62 | 79715.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52775.43 | 53432.45 | 54412.46 | 56260.66 | 59418.96 | 61640.79 | 69254.35 |
| **Latency** | 754µs    | 844µs    | 918µs    | 979µs    | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52831.83 | 3855.88 | 76630.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50770.49 | 51725.71 | 52419.85 | 53533.92 | 56448.74 | 58561.18 | 63516.58 |
| **Latency** | 811µs    | 879µs    | 955µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42150.71 | 4650.35 | 49211.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38655.95 | 40900.68 | 43473.86 | 44562.07 | 45504.50 | 46059.95 | 46831.32 |
| **Latency** | 871µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 76871.39 | 6497.77 | 94157.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69048.75 | 72829.55 | 77250.44 | 81443.28 | 84638.87 | 86421.99 | 89768.08 |
| **Latency** | 399µs    | 512µs    | 626µs    | 759µs    | 905µs    | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30708.16 | 3899.57 | 36542.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28715.72 | 30231.74 | 31369.11 | 32677.58 | 33510.59 | 34104.15 | 35273.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49996.97 | 2659.11 | 58899.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48721.75 | 49591.96 | 50038.39 | 50721.46 | 51611.52 | 52507.91 | 55776.56 |
| **Latency** | 879µs    | 923µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54834.39 | 4119.07 | 73937.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52180.21 | 53025.52 | 53957.39 | 55839.52 | 59653.41 | 62401.16 | 68918.50 |
| **Latency** | 746µs    | 851µs    | 925µs    | 990µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27380.29 | 3168.28 | 36994.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26832.36 | 27418.27 | 27926.82 | 28418.96 | 28892.09 | 29267.24 | 30353.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32647.29 | 3048.32 | 35040.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32161.36 | 32624.11 | 33223.53 | 33605.01 | 34037.24 | 34219.24 | 34552.14 |
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
| 43351.53 | 2194.92 | 48759.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42317.45 | 43134.08 | 43590.81 | 44132.36 | 44603.67 | 44907.40 | 45594.42 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40472.67 | 4397.04 | 46321.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37608.87 | 39324.02 | 41568.15 | 42847.52 | 43694.05 | 44187.76 | 45108.04 |
| **Latency** | 894µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 76960.19 | 5177.95 | 91408.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 70104.67 | 73426.14 | 77227.11 | 80485.71 | 83253.95 | 85401.04 | 87979.35 |
| **Latency** | 399µs    | 517µs    | 630µs    | 750µs    | 905µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6802.47  | 2174.40 | 15322.72 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5132.19 | 5735.64 | 6961.53 | 7861.18 | 9429.03 | 9944.61 | 11148.78 |
| **Latency** | 5ms     | 6ms     | 7ms     | 7ms     | 9ms     | 12ms    | 15ms     |

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
| 54669.17 | 3743.71 | 76363.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52298.76 | 53099.87 | 54015.24 | 55313.85 | 58908.50 | 61461.00 | 66110.13 |
| **Latency** | 765µs    | 852µs    | 925µs    | 988µs    | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2026-06-13T04:48:17.603Z</p>
