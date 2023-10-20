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
| NHttp                                                                                | 44113.92 | 12264.77 | 57765.22  | 100%     |
| Hyper Express                                                                        | 41556.99 | 15530.82 | 65715.61  | 94%      |
| Stric                                                                                | 41062.30 | 11570.45 | 67011.53  | 93%      |
| Bun                                                                                  | 40743.27 | 12084.51 | 62416.05  | 92%      |
| Deno                                                                                 | 40007.92 | 14166.45 | 60844.83  | 91%      |
| Fast                                                                                 | 39402.40 | 11172.70 | 54989.64  | 89%      |
| Vixeny (Deno)                                                                        | 38417.48 | 10426.51 | 51806.23  | 87%      |
| Megalo                                                                               | 35578.66 | 10023.76 | 46714.34  | 81%      |
| Deso                                                                                 | 35202.89 | 9818.11  | 48332.24  | 80%      |
| Hono                                                                                 | 34799.99 | 9961.39  | 50079.49  | 79%      |
| Fastro                                                                               | 33870.71 | 9790.83  | 47532.79  | 77%      |
| Reno                                                                                 | 33151.87 | 5553.81  | 39996.80  | 75%      |
| http                                                                                 | 25009.79 | 5992.28  | 34966.70  | 57%      |
| Alosaur                                                                              | 21071.49 | 4963.50  | 31542.16  | 48%      |
| Cheetah                                                                              | 20365.87 | 9179.19  | 39509.76  | 46%      |
| Aqua                                                                                 | 18194.20 | 3925.41  | 27256.68  | 41%      |
| Router                                                                               | 18133.44 | 3758.02  | 26985.20  | 41%      |
| Node                                                                                 | 18017.78 | 3442.96  | 24800.93  | 41%      |
| Little                                                                               | 15545.06 | 3556.16  | 22411.81  | 35%      |
| Fastify                                                                              | 14905.34 | 2981.82  | 20966.82  | 34%      |
| Oak                                                                                  | 14535.50 | 3403.59  | 21337.40  | 33%      |
| Dinatra                                                                              | 11979.03 | 2986.64  | 21917.52  | 27%      |
| Abc                                                                                  | 10430.25 | 1975.81  | 17008.37  | 24%      |
| Danet (Oak)                                                                          | 9538.86  | 2693.99  | 20008.15  | 22%      |
| Opine                                                                                | 6658.28  | 2458.76  | 50382.97  | 15%      |
| Express (Deno)                                                                       | 5974.17  | 1936.16  | 47392.99  | 14%      |
| Acorn                                                                                | 5519.07  | 9023.65  | 132667.78 | 13%      |
| Servest                                                                              | 4334.86  | 1444.52  | 9433.56   | 10%      |
| Express                                                                              | 3977.84  | 985.16   | 9100.95   | 9%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-6bdb5159-8583-45a3-b498-789c3f42ccc8) |          |          |           |          |

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
| 10430.25 | 1975.81 | 17008.37 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7421.13 | 9813.07 | 10865.64 | 11642.81 | 12385.57 | 12664.84 | 13160.10 |
| **Latency** | 3ms     | 3ms     | 3ms      | 5ms      | 7ms      | 7ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5519.07  | 9023.65 | 132667.78 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 54.15 | 77.64 | 4304.46 | 7314.31 | 11932.28 | 14318.56 | 49555.34 |
| **Latency** | 8ms   | 10ms  | 20ms    | 26ms    | 30ms     | 34ms     | 42ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21071.49 | 4963.50 | 31542.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15121.57 | 19055.20 | 22549.53 | 24179.60 | 25379.34 | 26007.19 | 27267.05 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18194.20 | 3925.41 | 27256.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14145.26 | 16980.46 | 19092.97 | 20558.73 | 21593.19 | 22364.75 | 23933.77 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40743.27 | 12084.51 | 62416.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23835.93 | 30840.93 | 41746.97 | 52024.30 | 55565.46 | 56807.22 | 59040.72 |
| **Latency** | 645µs    | 819µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20365.87 | 9179.19 | 39509.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12748.66 | 15165.62 | 16122.04 | 28945.94 | 36119.04 | 36850.01 | 38935.71 |
| **Latency** | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9538.86  | 2693.99 | 20008.15 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5713.24 | 8009.60 | 10444.42 | 11396.90 | 12025.03 | 12413.99 | 14365.74 |
| **Latency** | 3ms     | 4ms     | 4ms      | 5ms      | 7ms      | 8ms      | 13ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40007.92 | 14166.45 | 60844.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19745.95 | 24412.86 | 44062.87 | 52550.29 | 56035.43 | 57425.08 | 58972.11 |
| **Latency** | 736µs    | 850µs    | 989µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35202.89 | 9818.11 | 48332.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17744.13 | 29689.91 | 39324.93 | 42811.85 | 44373.52 | 45337.49 | 46427.71 |
| **Latency** | 999µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11979.03 | 2986.64 | 21917.52 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8009.03 | 10836.56 | 12658.19 | 13830.39 | 14917.56 | 15442.28 | 16391.15 |
| **Latency** | 2ms     | 3ms      | 3ms      | 5ms      | 5ms      | 7ms      | 13ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 3977.84  | 985.16 | 9100.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2499.84 | 3603.75 | 4351.26 | 4608.57 | 4758.48 | 4833.89 | 5032.91 |
| **Latency** | 10ms    | 10ms    | 11ms    | 12ms    | 16ms    | 19ms    | 24ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5974.17  | 1936.16 | 47392.99 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4014.96 | 5076.75 | 6318.21 | 7099.66 | 7453.15 | 7588.31 | 7980.14 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 11ms    | 13ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39402.40 | 11172.70 | 54989.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18623.98 | 32947.68 | 43979.59 | 47526.95 | 49798.46 | 50778.56 | 51977.30 |
| **Latency** | 874µs    | 957µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14905.34 | 2981.82 | 20966.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11530.03 | 14658.44 | 15917.46 | 16545.62 | 17013.05 | 17247.21 | 17662.12 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33870.71 | 9790.83 | 47532.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16716.31 | 28808.86 | 37796.29 | 41027.78 | 42966.17 | 44263.19 | 46098.11 |
| **Latency** | 987µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34799.99 | 9961.39 | 50079.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17331.84 | 28825.87 | 39205.36 | 42046.14 | 44192.11 | 45461.26 | 47720.02 |
| **Latency** | 964µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25009.79 | 5992.28 | 34966.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17104.83 | 22450.68 | 27267.00 | 28953.67 | 30017.63 | 30811.63 | 32345.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41556.99 | 15530.82 | 65715.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17015.28 | 28205.42 | 45322.11 | 55249.07 | 59004.62 | 60324.61 | 63377.80 |
| **Latency** | 614µs    | 779µs    | 948µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15545.06 | 3556.16 | 22411.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11290.60 | 14288.89 | 16502.60 | 17851.14 | 18729.17 | 19302.59 | 20305.22 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35578.66 | 10023.76 | 46714.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17197.56 | 33340.98 | 39977.76 | 42153.43 | 43432.90 | 44106.51 | 45525.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44113.92 | 12264.77 | 57765.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21634.41 | 39303.47 | 49698.58 | 53047.10 | 54758.14 | 55696.14 | 56346.11 |
| **Latency** | 784µs    | 860µs    | 965µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18017.78 | 3442.96 | 24800.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13742.85 | 17727.26 | 19023.93 | 19904.73 | 20631.37 | 21097.00 | 21672.12 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14535.50 | 3403.59 | 21337.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10739.34 | 13626.13 | 15489.65 | 16520.18 | 17494.64 | 18007.52 | 19642.17 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6658.28  | 2458.76 | 50382.97 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5138.10 | 6266.36 | 6882.32 | 7305.69 | 7630.54 | 7876.79 | 11829.51 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 17ms     |

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
| 33151.87 | 5553.81 | 39996.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25600.26 | 32207.74 | 34969.26 | 36435.62 | 37615.49 | 38154.44 | 39128.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18133.44 | 3758.02 | 26985.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13762.98 | 17064.13 | 19139.87 | 20395.14 | 21344.34 | 21999.73 | 23402.91 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41062.30 | 11570.45 | 67011.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25890.76 | 31448.88 | 41013.26 | 51303.18 | 56383.62 | 58268.99 | 61227.42 |
| **Latency** | 635µs    | 799µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4334.86  | 1444.52 | 9433.56 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2305.18 | 3828.82 | 4826.90 | 5204.73 | 5512.86 | 5806.72 | 6949.19 |
| **Latency** | 6ms     | 8ms     | 11ms    | 13ms    | 18ms    | 22ms    | 29ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38417.48 | 10426.51 | 51806.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18570.39 | 34363.24 | 42670.28 | 45666.15 | 47623.34 | 48626.75 | 50044.06 |
| **Latency** | 911µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-10-20T01:25:01.171Z</p>
