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
| Deno                                                                                 | 71999.28 | 14908.23 | 81529.11 | 100%     |
| Bun                                                                                  | 66774.57 | 11617.77 | 92617.97 | 93%      |
| Fast                                                                                 | 62647.86 | 12402.81 | 70258.23 | 87%      |
| Hono                                                                                 | 60262.81 | 14572.01 | 70495.60 | 84%      |
| Megalo                                                                               | 59437.15 | 9398.96  | 65082.63 | 83%      |
| Fastro                                                                               | 59314.25 | 10192.18 | 65921.24 | 82%      |
| NHttp                                                                                | 58771.64 | 14592.45 | 68413.31 | 82%      |
| Hyper Express                                                                        | 56384.86 | 18623.52 | 86614.24 | 78%      |
| Reno                                                                                 | 49534.04 | 4729.01  | 53317.38 | 69%      |
| Node                                                                                 | 41402.22 | 5998.84  | 45682.05 | 58%      |
| http                                                                                 | 40357.65 | 9395.87  | 47852.79 | 56%      |
| Deso                                                                                 | 37800.61 | 8080.40  | 44719.47 | 53%      |
| Peko                                                                                 | 37562.59 | 7189.08  | 45721.13 | 52%      |
| Fastify                                                                              | 36754.79 | 6394.79  | 39939.80 | 51%      |
| Alosaur                                                                              | 30950.81 | 6844.54  | 41617.00 | 43%      |
| Router                                                                               | 28323.65 | 4730.26  | 34790.46 | 39%      |
| Little                                                                               | 25118.41 | 4101.41  | 29460.27 | 35%      |
| Oak                                                                                  | 23508.48 | 4222.03  | 35746.60 | 33%      |
| Aqua                                                                                 | 22985.70 | 3083.52  | 27016.39 | 32%      |
| Dinatra                                                                              | 20435.77 | 3873.62  | 29265.54 | 28%      |
| Abc                                                                                  | 18208.16 | 2496.59  | 21974.88 | 25%      |
| Opine                                                                                | 9922.37  | 1484.35  | 12201.25 | 14%      |
| Express (Deno)                                                                       | 9308.98  | 1814.87  | 12682.45 | 13%      |
| Express                                                                              | 8082.64  | 1302.22  | 11235.28 | 11%      |
| Servest                                                                              | 6370.34  | 1936.88  | 9664.82  | 9%       |
| Acorn                                                                                | 3768.23  | 2708.21  | 25858.06 | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-36388e06-1ef8-4a11-b559-c0cb3fcd0b9e) |          |          |          |          |

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
| 18208.16 | 2496.59 | 21974.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15813.37 | 16628.77 | 18964.91 | 19534.27 | 21122.96 | 21408.62 | 21688.15 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3768.23  | 2708.21 | 25858.06 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 94.74 | 2362.72 | 2966.66 | 4450.09 | 7718.61 | 9559.66 | 11197.98 |
| **Latency** | 4ms   | 7ms     | 14ms    | 21ms    | 25ms    | 26ms    | 28ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30950.81 | 6844.54 | 41617.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21293.39 | 28787.69 | 34450.51 | 35531.33 | 35850.29 | 36047.81 | 36835.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22985.70 | 3083.52 | 27016.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21712.08 | 22423.77 | 23948.56 | 24624.65 | 24869.18 | 25030.56 | 25964.08 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66774.57 | 11617.77 | 92617.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54962.58 | 58106.77 | 63491.20 | 78843.88 | 80925.12 | 81994.17 | 84464.78 |
| **Latency** | 452µs    | 571µs    | 687µs    | 838µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 71999.28 | 14908.23 | 81529.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39492.29 | 76240.94 | 78257.68 | 79278.14 | 79978.45 | 80261.90 | 80849.60 |
| **Latency** | 558µs    | 606µs    | 630µs    | 671µs    | 742µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37800.61 | 8080.40 | 44719.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26312.86 | 36562.42 | 41415.60 | 42735.23 | 43238.60 | 43666.21 | 44234.15 |
| **Latency** | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20435.77 | 3873.62 | 29265.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18113.33 | 19023.32 | 21008.53 | 23001.14 | 23680.71 | 24580.57 | 25208.10 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8082.64  | 1302.22 | 11235.28 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5922.29 | 8253.20 | 8689.32 | 8794.18 | 8861.02 | 8889.48 | 8944.87 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 12ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9308.98  | 1814.87 | 12682.45 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7110.36 | 9099.32 | 10116.08 | 10254.46 | 10319.98 | 10369.30 | 10829.83 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62647.86 | 12402.81 | 70258.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36604.95 | 66253.45 | 67851.42 | 68493.52 | 68926.56 | 69187.50 | 69756.88 |
| **Latency** | 688µs    | 707µs    | 725µs    | 748µs    | 876µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36754.79 | 6394.79 | 39939.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36537.35 | 37818.61 | 38370.47 | 39053.74 | 39310.08 | 39428.19 | 39697.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59314.25 | 10192.18 | 65921.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41064.10 | 62412.51 | 63316.22 | 63813.79 | 64506.84 | 64846.00 | 65268.73 |
| **Latency** | 743µs    | 760µs    | 779µs    | 798µs    | 957µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60262.81 | 14572.01 | 70495.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30139.74 | 64184.54 | 67539.58 | 68388.49 | 68988.73 | 69233.05 | 69708.10 |
| **Latency** | 684µs    | 706µs    | 726µs    | 760µs    | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40357.65 | 9395.87 | 47852.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24728.65 | 39009.99 | 45171.48 | 46323.57 | 46721.31 | 47000.86 | 47411.19 |
| **Latency** | 931µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56384.86 | 18623.52 | 86614.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38829.93 | 40809.22 | 44759.36 | 78792.67 | 81408.62 | 82204.60 | 83644.84 |
| **Latency** | 486µs    | 623µs    | 696µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25118.41 | 4101.41 | 29460.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22977.86 | 24800.23 | 26142.07 | 27122.94 | 27880.35 | 28277.28 | 28651.82 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59437.15 | 9398.96 | 65082.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46259.80 | 61779.62 | 62783.93 | 63433.37 | 63957.95 | 64189.76 | 64526.21 |
| **Latency** | 749µs    | 768µs    | 786µs    | 807µs    | 931µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58771.64 | 14592.45 | 68413.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31189.51 | 53270.41 | 67083.60 | 67515.12 | 67807.20 | 67930.02 | 68143.35 |
| **Latency** | 708µs    | 726µs    | 744µs    | 764µs    | 815µs    | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41402.22 | 5998.84 | 45682.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40663.69 | 42175.33 | 42838.82 | 43371.83 | 43694.22 | 43872.22 | 44329.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23508.48 | 4222.03 | 35746.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21309.59 | 23026.00 | 24711.02 | 25553.82 | 26150.89 | 26579.18 | 27008.00 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9922.37  | 1484.35 | 12201.25 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9354.22 | 9843.26 | 10387.78 | 10556.73 | 10631.34 | 10680.32 | 11620.34 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 5ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37562.59 | 7189.08 | 45721.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29780.35 | 36693.59 | 40622.18 | 41413.51 | 41990.06 | 42288.68 | 42865.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49534.04 | 4729.01 | 53317.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49321.51 | 50150.96 | 50459.08 | 51042.21 | 51435.46 | 51670.83 | 51913.82 |
| **Latency** | 948µs    | 964µs    | 975µs    | 990µs    | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28323.65 | 4730.26 | 34790.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24014.79 | 27618.27 | 30119.44 | 31015.18 | 31481.10 | 31681.24 | 32114.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6370.34  | 1936.88 | 9664.82 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5009.81 | 5549.49 | 7035.71 | 7454.78 | 7934.64 | 8078.67 | 9502.99 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 9ms     | 15ms    | 16ms    |

---

<p align="center">Generated 2023-04-29T01:41:15.128Z</p>
