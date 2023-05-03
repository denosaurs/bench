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
| Deno                                                                                 | 66092.55 | 15568.32 | 76232.32 | 100%     |
| Bun                                                                                  | 62074.75 | 11311.37 | 82883.46 | 94%      |
| Hyper Express                                                                        | 60432.65 | 16072.19 | 79731.45 | 91%      |
| Hono                                                                                 | 57370.92 | 11760.35 | 65135.62 | 87%      |
| NHttp                                                                                | 57222.59 | 12618.46 | 67338.10 | 87%      |
| Fast                                                                                 | 55013.01 | 15306.41 | 66564.22 | 83%      |
| Deso                                                                                 | 53137.84 | 11355.12 | 60204.42 | 80%      |
| Megalo                                                                               | 52322.09 | 10238.34 | 59474.96 | 79%      |
| Fastro                                                                               | 52248.78 | 7330.39  | 57865.98 | 79%      |
| Reno                                                                                 | 45564.03 | 4522.46  | 48551.40 | 69%      |
| http                                                                                 | 37296.38 | 8131.74  | 45386.80 | 56%      |
| Node                                                                                 | 35156.09 | 5935.34  | 38233.49 | 53%      |
| Peko                                                                                 | 33094.74 | 6565.40  | 63091.48 | 50%      |
| Fastify                                                                              | 30817.47 | 5286.11  | 33478.99 | 47%      |
| Alosaur                                                                              | 28917.01 | 6474.22  | 65273.30 | 44%      |
| Router                                                                               | 25986.91 | 4225.07  | 34516.65 | 39%      |
| Little                                                                               | 22349.13 | 3762.32  | 26633.74 | 34%      |
| Aqua                                                                                 | 22148.82 | 3120.02  | 30206.22 | 34%      |
| Oak                                                                                  | 20447.94 | 3886.85  | 25852.62 | 31%      |
| Dinatra                                                                              | 17636.33 | 3143.91  | 33266.58 | 27%      |
| Abc                                                                                  | 15343.54 | 2758.07  | 19996.11 | 23%      |
| Opine                                                                                | 9123.60  | 1540.73  | 13083.07 | 14%      |
| Express (Deno)                                                                       | 8440.20  | 1703.80  | 11007.82 | 13%      |
| Express                                                                              | 6582.06  | 1408.12  | 9584.35  | 10%      |
| Servest                                                                              | 5454.34  | 1625.37  | 8052.44  | 8%       |
| Acorn                                                                                | 5001.64  | 10138.83 | 72866.93 | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-74b4aba6-3669-4f8a-92c1-eaaf4309afe8) |          |          |          |          |

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
| 15343.54 | 2758.07 | 19996.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11471.87 | 15121.45 | 15709.30 | 16949.92 | 17928.66 | 18313.22 | 18702.46 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 5001.64  | 10138.83 | 72866.93 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 96.07 | 2031.35 | 2700.17 | 4055.65 | 7647.07 | 9179.72 | 61691.58 |
| **Latency** | 5ms   | 7ms     | 16ms    | 22ms    | 27ms    | 29ms    | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28917.01 | 6474.22 | 65273.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22272.29 | 25828.15 | 31679.25 | 32558.36 | 33210.68 | 33491.98 | 34205.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22148.82 | 3120.02 | 30206.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20491.04 | 21416.21 | 22820.87 | 23835.59 | 24322.16 | 24618.07 | 25180.44 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62074.75 | 11311.37 | 82883.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49197.21 | 52454.13 | 62747.69 | 73203.92 | 74808.62 | 75511.61 | 77499.92 |
| **Latency** | 481µs    | 605µs    | 747µs    | 901µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66092.55 | 15568.32 | 76232.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30106.35 | 69444.73 | 73137.60 | 74533.05 | 75207.15 | 75466.96 | 75940.18 |
| **Latency** | 551µs    | 631µs    | 683µs    | 734µs    | 818µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53137.84 | 11355.12 | 60204.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29448.98 | 55909.19 | 57819.27 | 58565.19 | 59202.56 | 59459.43 | 59802.66 |
| **Latency** | 798µs    | 820µs    | 844µs    | 884µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17636.33 | 3143.91 | 33266.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15880.24 | 16780.85 | 18126.89 | 19258.03 | 20202.65 | 20789.02 | 21834.88 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6582.06  | 1408.12 | 9584.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4152.67 | 6798.95 | 7245.75 | 7381.00 | 7470.78 | 7495.68 | 7531.13 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 12ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8440.20  | 1703.80 | 11007.82 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6568.90 | 8110.91 | 9225.61 | 9338.37 | 9397.56 | 9435.19 | 9948.25 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55013.01 | 15306.41 | 66564.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26441.64 | 52829.83 | 63304.09 | 64343.43 | 64819.76 | 65052.36 | 65408.82 |
| **Latency** | 725µs    | 748µs    | 772µs    | 810µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30817.47 | 5286.11 | 33478.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30412.44 | 31503.69 | 32253.45 | 32742.39 | 32993.85 | 33132.04 | 33329.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52248.78 | 7330.39 | 57865.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44313.81 | 53724.99 | 54668.08 | 55297.77 | 55935.73 | 56267.08 | 56667.16 |
| **Latency** | 863µs    | 883µs    | 901µs    | 922µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57370.92 | 11760.35 | 65135.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32601.20 | 60530.68 | 62355.95 | 63271.13 | 63869.92 | 64128.98 | 64535.29 |
| **Latency** | 737µs    | 758µs    | 782µs    | 817µs    | 958µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37296.38 | 8131.74 | 45386.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27610.61 | 34836.38 | 41222.22 | 42211.18 | 42562.37 | 42739.15 | 43265.27 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60432.65 | 16072.19 | 79731.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36118.27 | 41609.38 | 69439.95 | 73897.47 | 75029.67 | 75504.16 | 76217.95 |
| **Latency** | 509µs    | 587µs    | 744µs    | 811µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22349.13 | 3762.32 | 26633.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19276.63 | 21915.71 | 23833.25 | 24445.22 | 24672.20 | 24828.17 | 25392.86 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52322.09 | 10238.34 | 59474.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32146.13 | 55109.44 | 56222.82 | 57200.54 | 57809.59 | 58131.13 | 58746.84 |
| **Latency** | 829µs    | 851µs    | 873µs    | 899µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57222.59 | 12618.46 | 67338.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28038.86 | 60243.71 | 63030.62 | 64065.08 | 64717.20 | 64956.21 | 65406.27 |
| **Latency** | 722µs    | 746µs    | 775µs    | 820µs    | 971µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35156.09 | 5935.34 | 38233.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34836.87 | 36075.70 | 36692.04 | 37181.00 | 37447.13 | 37623.65 | 37872.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20447.94 | 3886.85 | 25852.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18309.81 | 19436.16 | 21955.22 | 22384.93 | 22756.93 | 23104.99 | 25127.88 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9123.60  | 1540.73 | 13083.07 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 8019.21 | 8702.66 | 9405.28 | 9816.85 | 10087.95 | 11114.00 | 12155.35 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33094.74 | 6565.40 | 63091.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28429.47 | 31222.53 | 35784.70 | 36653.75 | 37061.11 | 37246.79 | 37746.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45564.03 | 4522.46 | 48551.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44996.64 | 45855.80 | 46501.29 | 47103.66 | 47526.45 | 47778.39 | 48061.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25986.91 | 4225.07 | 34516.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23722.46 | 24476.46 | 27762.54 | 28139.51 | 28461.04 | 28719.50 | 29361.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5454.34  | 1625.37 | 8052.44 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3926.97 | 4613.09 | 5993.80 | 6413.92 | 7007.46 | 7220.85 | 7373.50 |
| **Latency** | 7ms     | 7ms     | 8ms     | 10ms    | 11ms    | 18ms    | 19ms    |

---

<p align="center">Generated 2023-05-03T01:41:40.594Z</p>
