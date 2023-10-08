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
| Vixeny (Deno)                                                                        | 55032.43 | 15575.21 | 68984.99  | 100%     |
| NHttp                                                                                | 53681.12 | 16303.28 | 69014.27  | 98%      |
| Fast                                                                                 | 52054.53 | 15492.94 | 65962.51  | 95%      |
| Hono                                                                                 | 51019.77 | 13362.62 | 61225.55  | 93%      |
| Fastro                                                                               | 49956.74 | 14043.73 | 60710.76  | 91%      |
| Deso                                                                                 | 49490.17 | 12454.53 | 59545.33  | 90%      |
| Stric                                                                                | 48286.60 | 9404.81  | 74135.73  | 88%      |
| Hyper Express                                                                        | 47366.33 | 14261.65 | 68338.87  | 86%      |
| Bun                                                                                  | 46629.33 | 10645.45 | 73429.13  | 85%      |
| Deno                                                                                 | 45460.26 | 13033.25 | 66054.80  | 83%      |
| Cheetah                                                                              | 44431.74 | 6478.31  | 48859.32  | 81%      |
| Reno                                                                                 | 43212.85 | 7765.68  | 48364.30  | 79%      |
| http                                                                                 | 31252.46 | 8187.09  | 52366.63  | 57%      |
| Node                                                                                 | 29536.39 | 6428.19  | 33546.90  | 54%      |
| Fastify                                                                              | 26650.43 | 6095.04  | 32025.76  | 48%      |
| Alosaur                                                                              | 25300.36 | 6607.27  | 85548.83  | 46%      |
| Router                                                                               | 23253.80 | 4695.48  | 29234.74  | 42%      |
| Aqua                                                                                 | 21795.93 | 4294.26  | 27885.71  | 40%      |
| Little                                                                               | 20551.44 | 4872.70  | 84552.77  | 37%      |
| Oak                                                                                  | 19688.00 | 4521.78  | 25801.56  | 36%      |
| Dinatra                                                                              | 16964.34 | 4073.75  | 22541.50  | 31%      |
| Abc                                                                                  | 15928.16 | 2808.82  | 20492.03  | 29%      |
| Danet (Oak)                                                                          | 14086.34 | 3357.56  | 21460.19  | 26%      |
| Express (Deno)                                                                       | 8727.78  | 1868.60  | 22477.30  | 16%      |
| Opine                                                                                | 8520.12  | 4039.20  | 62981.76  | 15%      |
| Acorn                                                                                | 6541.92  | 9314.72  | 111098.77 | 12%      |
| Servest                                                                              | 5695.67  | 3832.80  | 110857.47 | 10%      |
| Express                                                                              | 5477.05  | 1295.49  | 10035.76  | 10%      |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-e482a141-eb8a-48d3-991b-55110e628930) |          |          |           |          |

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
| 15928.16 | 2808.82 | 20492.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12723.14 | 15209.62 | 16017.82 | 17798.42 | 19018.88 | 19340.28 | 19745.51 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6541.92  | 9314.72 | 111098.77 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 45.13 | 58.18 | 6129.66 | 9167.68 | 14139.33 | 20123.97 | 42477.98 |
| **Latency** | 6ms   | 8ms   | 19ms    | 26ms    | 29ms     | 31ms     | 53ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25300.36 | 6607.27 | 85548.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16698.29 | 22607.51 | 28130.72 | 29020.38 | 29740.85 | 30300.45 | 31807.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21795.93 | 4294.26 | 27885.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18609.58 | 20580.70 | 23327.64 | 24110.86 | 24702.64 | 25373.62 | 26680.07 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46629.33 | 10645.45 | 73429.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34785.81 | 40009.87 | 45062.21 | 53915.20 | 62440.28 | 64905.69 | 68193.20 |
| **Latency** | 586µs    | 734µs    | 946µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44431.74 | 6478.31 | 48859.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42831.88 | 45523.42 | 46212.21 | 46819.59 | 47243.66 | 47611.15 | 48176.05 |
| **Latency** | 949µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14086.34 | 3357.56 | 21460.19 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9469.99 | 12249.82 | 14949.00 | 16318.64 | 16947.09 | 18140.92 | 20406.33 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45460.26 | 13033.25 | 66054.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25610.10 | 34392.82 | 48254.28 | 57389.40 | 60344.64 | 61404.22 | 63443.07 |
| **Latency** | 678µs    | 782µs    | 858µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49490.17 | 12454.53 | 59545.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22844.70 | 52030.60 | 55541.55 | 56428.85 | 56947.16 | 57256.55 | 57880.34 |
| **Latency** | 788µs    | 847µs    | 892µs    | 946µs    | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16964.34 | 4073.75 | 22541.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13520.70 | 15452.06 | 18340.21 | 19324.18 | 20383.80 | 21040.11 | 21789.61 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5477.05  | 1295.49 | 10035.76 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3330.55 | 5557.67 | 6065.80 | 6201.84 | 6276.56 | 6313.24 | 6424.07 |
| **Latency** | 7ms     | 8ms     | 8ms     | 8ms     | 12ms    | 13ms    | 19ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8727.78  | 1868.60 | 22477.30 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6139.66 | 8480.58 | 9529.24 | 9731.41 | 9831.90 | 9937.39 | 10588.17 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52054.53 | 15492.94 | 65962.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23335.26 | 46228.06 | 60473.67 | 61995.88 | 62896.68 | 63233.86 | 64269.12 |
| **Latency** | 714µs    | 762µs    | 820µs    | 873µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26650.43 | 6095.04 | 32025.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18615.59 | 27806.09 | 28854.50 | 29342.52 | 29618.93 | 29773.46 | 30297.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49956.74 | 14043.73 | 60710.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22897.97 | 49866.79 | 57305.72 | 58410.47 | 59127.04 | 59562.53 | 60101.93 |
| **Latency** | 764µs    | 821µs    | 860µs    | 913µs    | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51019.77 | 13362.62 | 61225.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23082.00 | 53611.29 | 57317.91 | 58536.43 | 59273.71 | 59688.97 | 60406.78 |
| **Latency** | 761µs    | 814µs    | 857µs    | 913µs    | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31252.46 | 8187.09 | 52366.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16496.07 | 27954.28 | 35481.47 | 36508.47 | 37116.37 | 37396.26 | 38271.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47366.33 | 14261.65 | 68338.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29896.10 | 32235.22 | 49369.36 | 61237.65 | 64347.25 | 65259.70 | 66617.61 |
| **Latency** | 601µs    | 735µs    | 862µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20551.44 | 4872.70 | 84552.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14078.95 | 20052.21 | 22002.60 | 22989.62 | 23585.37 | 23988.51 | 24973.42 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

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
| 53681.12 | 16303.28 | 69014.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24851.49 | 41001.05 | 62738.00 | 65737.85 | 66574.94 | 66919.27 | 67766.79 |
| **Latency** | 642µs    | 717µs    | 796µs    | 853µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29536.39 | 6428.19 | 33546.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23352.11 | 30925.61 | 31584.59 | 32223.78 | 32568.33 | 32755.29 | 33186.22 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19688.00 | 4521.78 | 25801.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14201.57 | 18946.45 | 21424.34 | 22078.55 | 22592.21 | 23032.16 | 24562.96 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8520.12  | 4039.20 | 62981.76 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5432.16 | 6662.68 | 8303.23 | 9660.39 | 12740.22 | 13828.49 | 14812.65 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 8ms      | 9ms      | 18ms     |

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
| 43212.85 | 7765.68 | 48364.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40324.66 | 44723.69 | 45574.09 | 46307.87 | 46849.16 | 47036.68 | 47478.58 |
| **Latency** | 964µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23253.80 | 4695.48 | 29234.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18410.13 | 21813.48 | 25010.52 | 25864.06 | 26578.79 | 27300.93 | 28262.49 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48286.60 | 9404.81 | 74135.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37921.13 | 41820.52 | 46554.77 | 55312.97 | 62012.17 | 65227.63 | 69236.77 |
| **Latency** | 572µs    | 721µs    | 927µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5695.67  | 3832.80 | 110857.47 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3162.05 | 4491.09 | 6298.52 | 6938.88 | 7319.69 | 7490.10 | 8936.38 |
| **Latency** | 5ms     | 6ms     | 8ms     | 10ms    | 14ms    | 18ms    | 24ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55032.43 | 15575.21 | 68984.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24515.27 | 53997.18 | 63128.53 | 64605.29 | 65348.47 | 65678.94 | 66470.81 |
| **Latency** | 674µs    | 730µs    | 787µs    | 847µs    | 1ms      | 2ms      | 2ms      |

---

<p align="center">Generated 2023-10-08T01:29:58.664Z</p>
