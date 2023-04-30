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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Hyper Express                                                                        | 54884.13 | 15388.65 | 83852.52  | 100%     |
| NHttp                                                                                | 51601.98 | 10870.75 | 60078.85  | 94%      |
| Hono                                                                                 | 51297.31 | 11282.07 | 61242.74  | 93%      |
| Bun                                                                                  | 48551.97 | 9670.16  | 67743.81  | 88%      |
| Fastro                                                                               | 48346.09 | 7953.58  | 56510.61  | 88%      |
| Megalo                                                                               | 47387.06 | 9261.98  | 54890.98  | 86%      |
| Deno                                                                                 | 46042.48 | 13417.09 | 61566.95  | 84%      |
| Reno                                                                                 | 41224.43 | 5174.58  | 45257.81  | 75%      |
| Fast                                                                                 | 40679.77 | 11070.73 | 53841.86  | 74%      |
| http                                                                                 | 33831.45 | 6868.02  | 41408.37  | 62%      |
| Node                                                                                 | 31165.22 | 5239.26  | 35024.07  | 57%      |
| Peko                                                                                 | 29208.59 | 6763.20  | 37064.31  | 53%      |
| Deso                                                                                 | 27153.75 | 6855.50  | 35218.69  | 49%      |
| Fastify                                                                              | 26688.52 | 6105.98  | 32100.56  | 49%      |
| Alosaur                                                                              | 25811.31 | 5996.94  | 34968.07  | 47%      |
| Router                                                                               | 22317.08 | 5009.91  | 28230.25  | 41%      |
| Little                                                                               | 20885.16 | 3557.47  | 24953.77  | 38%      |
| Oak                                                                                  | 18137.93 | 3482.83  | 23537.62  | 33%      |
| Aqua                                                                                 | 17651.23 | 3264.61  | 23357.46  | 32%      |
| Abc                                                                                  | 15191.92 | 2313.19  | 19152.84  | 28%      |
| Dinatra                                                                              | 12255.85 | 3114.67  | 26893.41  | 22%      |
| Opine                                                                                | 8051.85  | 1447.89  | 28190.32  | 15%      |
| Acorn                                                                                | 6526.59  | 9506.43  | 115606.94 | 12%      |
| Express (Deno)                                                                       | 6463.57  | 1574.57  | 22107.26  | 12%      |
| Servest                                                                              | 4870.53  | 1429.56  | 9351.58   | 9%       |
| Express                                                                              | 4713.26  | 1253.80  | 11409.01  | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-2f0aef38-4eea-4d3c-bdc2-a408716c056c) |          |          |           |          |

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
| 15191.92 | 2313.19 | 19152.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13106.14 | 14259.85 | 16148.08 | 16743.85 | 16960.32 | 17118.83 | 18028.98 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6526.59  | 9506.43 | 115606.94 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 80.09 | 1880.27 | 2746.33 | 6996.04 | 20865.68 | 21876.76 | 48846.01 |
| **Latency** | 6ms   | 8ms     | 18ms    | 24ms    | 27ms     | 29ms     | 34ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25811.31 | 5996.94 | 34968.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19210.11 | 23633.85 | 28079.80 | 29580.66 | 30399.78 | 30844.13 | 31723.29 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17651.23 | 3264.61 | 23357.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15141.22 | 16743.97 | 18547.70 | 19560.07 | 20142.78 | 20603.24 | 21392.57 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48551.97 | 9670.16 | 67743.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38317.91 | 41975.87 | 46978.33 | 57717.75 | 61046.36 | 62150.81 | 63741.54 |
| **Latency** | 596µs    | 755µs    | 909µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46042.48 | 13417.09 | 61566.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22511.20 | 37093.36 | 52715.85 | 56523.60 | 58087.80 | 58886.76 | 60121.49 |
| **Latency** | 745µs    | 816µs    | 888µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27153.75 | 6855.50 | 35218.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17696.50 | 24029.46 | 30367.89 | 31636.94 | 32407.37 | 32868.89 | 33554.25 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12255.85 | 3114.67 | 26893.41 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8619.89 | 10658.46 | 12673.95 | 14447.35 | 15573.97 | 16072.32 | 17298.39 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4713.26  | 1253.80 | 11409.01 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3045.51 | 4174.85 | 5071.09 | 5572.77 | 5720.58 | 5781.74 | 6964.00 |
| **Latency** | 8ms     | 8ms     | 9ms     | 11ms    | 14ms    | 16ms    | 21ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6463.57  | 1574.57 | 22107.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4201.46 | 6064.63 | 7068.55 | 7471.36 | 7643.88 | 7746.34 | 8256.17 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 9ms     | 12ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40679.77 | 11070.73 | 53841.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19761.21 | 36917.63 | 45297.59 | 48418.76 | 49964.83 | 50607.97 | 51582.41 |
| **Latency** | 894µs    | 945µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26688.52 | 6105.98 | 32100.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23872.28 | 27815.51 | 28549.32 | 29124.39 | 29601.11 | 29949.64 | 31336.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 7ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48346.09 | 7953.58 | 56510.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38016.64 | 49825.79 | 51100.04 | 52079.56 | 52815.72 | 53093.32 | 53800.41 |
| **Latency** | 900µs    | 928µs    | 964µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51297.31 | 11282.07 | 61242.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26710.09 | 54096.16 | 56047.29 | 57375.62 | 58153.96 | 58592.25 | 59159.61 |
| **Latency** | 802µs    | 829µs    | 868µs    | 920µs    | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33831.45 | 6868.02 | 41408.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25759.38 | 31661.98 | 36735.96 | 37714.24 | 38514.82 | 38805.70 | 39472.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54884.13 | 15388.65 | 83852.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31963.53 | 35440.67 | 64072.51 | 66811.84 | 68700.28 | 69608.43 | 70468.44 |
| **Latency** | 566µs    | 648µs    | 819µs    | 872µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20885.16 | 3557.47 | 24953.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18531.35 | 20425.98 | 22118.97 | 22588.24 | 23116.63 | 23512.98 | 24363.00 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47387.06 | 9261.98 | 54890.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28661.84 | 49633.14 | 50810.03 | 52017.30 | 52689.56 | 53111.01 | 53826.47 |
| **Latency** | 903µs    | 930µs    | 969µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51601.98 | 10870.75 | 60078.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30186.24 | 53907.92 | 55913.84 | 57127.17 | 58271.73 | 58745.25 | 59416.45 |
| **Latency** | 811µs    | 841µs    | 876µs    | 913µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31165.22 | 5239.26 | 35024.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30437.65 | 31523.55 | 32375.02 | 33159.92 | 33775.56 | 34070.10 | 34531.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18137.93 | 3482.83 | 23537.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16300.60 | 17593.46 | 19090.76 | 19819.47 | 20460.51 | 20809.45 | 21963.62 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8051.85  | 1447.89 | 28190.32 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 7000.19 | 7923.15 | 8373.37 | 8627.72 | 8871.39 | 8997.98 | 9819.06 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 6ms     | 8ms     | 12ms    |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29208.59 | 6763.20 | 37064.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19709.58 | 27789.00 | 32414.43 | 33364.31 | 33905.78 | 34290.14 | 35276.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41224.43 | 5174.58 | 45257.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40141.16 | 41334.11 | 42338.09 | 43168.59 | 43844.90 | 44244.91 | 44750.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22317.08 | 5009.91 | 28230.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15700.40 | 20291.18 | 24478.97 | 25875.58 | 26500.20 | 26815.66 | 27417.17 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4870.53  | 1429.56 | 9351.58 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3406.18 | 4130.51 | 5505.15 | 5671.80 | 5842.19 | 6005.62 | 6908.99 |
| **Latency** | 8ms     | 8ms     | 9ms     | 11ms    | 12ms    | 19ms    | 21ms    |

---

<p align="center">Generated 2023-04-30T01:45:27.856Z</p>
