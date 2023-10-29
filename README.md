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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Hono                                                                                 | 59257.35 | 14023.09 | 69178.71 | 100%     |
| Fast                                                                                 | 58641.44 | 16365.89 | 72337.33 | 99%      |
| Deno                                                                                 | 58028.46 | 15761.45 | 73262.62 | 98%      |
| NHttp                                                                                | 57915.56 | 16732.50 | 74333.84 | 98%      |
| Deso                                                                                 | 56720.27 | 13780.83 | 66806.55 | 96%      |
| Megalo                                                                               | 56482.72 | 12556.31 | 65423.24 | 95%      |
| Fastro                                                                               | 56470.64 | 15115.81 | 67814.95 | 95%      |
| Vixeny (Deno)                                                                        | 53896.81 | 18925.77 | 72734.20 | 91%      |
| Stric                                                                                | 53002.54 | 10076.43 | 75604.94 | 89%      |
| Bun                                                                                  | 52851.38 | 10793.88 | 80327.91 | 89%      |
| Hyper Express                                                                        | 51604.52 | 12591.98 | 76941.97 | 87%      |
| Reno                                                                                 | 50989.87 | 5528.98  | 54255.81 | 86%      |
| Cheetah                                                                              | 49604.06 | 7366.98  | 54312.08 | 84%      |
| http                                                                                 | 35851.32 | 8037.56  | 44107.28 | 61%      |
| Node                                                                                 | 35444.16 | 5176.95  | 39295.31 | 60%      |
| Alosaur                                                                              | 28348.89 | 6317.72  | 61117.51 | 48%      |
| Router                                                                               | 26072.32 | 5119.60  | 31936.53 | 44%      |
| Fastify                                                                              | 25899.52 | 10083.22 | 34380.99 | 44%      |
| Aqua                                                                                 | 24231.07 | 4711.20  | 30472.52 | 41%      |
| Little                                                                               | 23354.49 | 4449.98  | 37592.57 | 39%      |
| Oak                                                                                  | 22020.42 | 5277.27  | 92590.34 | 37%      |
| Dinatra                                                                              | 19102.06 | 4404.84  | 26243.69 | 32%      |
| Abc                                                                                  | 17567.86 | 2926.72  | 22758.43 | 30%      |
| Danet (Oak)                                                                          | 17039.75 | 3205.35  | 31640.95 | 29%      |
| Express (Deno)                                                                       | 10494.25 | 2379.58  | 14149.24 | 18%      |
| Opine                                                                                | 10369.81 | 1996.32  | 17130.01 | 17%      |
| Express                                                                              | 6450.90  | 1551.89  | 14935.66 | 11%      |
| Servest                                                                              | 6400.54  | 2220.86  | 10509.96 | 11%      |
| Acorn                                                                                | 6033.36  | 8490.97  | 96150.76 | 10%      |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-fdcb96b1-5d8d-4309-8302-88616ea6dcf9) |          |          |          |          |

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
| 17567.86 | 2926.72 | 22758.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15170.89 | 16304.31 | 18423.57 | 19302.59 | 20070.35 | 20525.90 | 21504.36 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6033.36  | 8490.97 | 96150.76 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 49.15 | 68.81 | 5283.43 | 8433.23 | 12647.23 | 19109.62 | 47845.75 |
| **Latency** | 5ms   | 7ms   | 18ms    | 24ms    | 29ms     | 31ms     | 40ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28348.89 | 6317.72 | 61117.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22556.49 | 25545.47 | 30864.02 | 31639.67 | 32285.52 | 32670.80 | 33965.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24231.07 | 4711.20 | 30472.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20624.90 | 23031.54 | 25916.61 | 26809.79 | 27442.07 | 27946.26 | 29096.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52851.38 | 10793.88 | 80327.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42251.85 | 45376.04 | 50243.06 | 61358.81 | 69480.27 | 71308.88 | 75637.87 |
| **Latency** | 512µs    | 667µs    | 823µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49604.06 | 7366.98 | 54312.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42008.60 | 51028.31 | 52136.75 | 52740.34 | 53230.60 | 53599.51 | 54025.05 |
| **Latency** | 848µs    | 920µs    | 959µs    | 996µs    | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17039.75 | 3205.35 | 31640.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14001.39 | 16521.28 | 18115.49 | 18757.87 | 19024.23 | 19289.23 | 21257.43 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58028.46 | 15761.45 | 73262.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29713.81 | 46302.10 | 67018.46 | 69845.78 | 71050.15 | 71517.86 | 72476.92 |
| **Latency** | 564µs    | 651µs    | 762µs    | 813µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56720.27 | 13780.83 | 66806.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26525.86 | 58547.24 | 63414.26 | 64820.41 | 65527.18 | 65928.01 | 66330.17 |
| **Latency** | 691µs    | 742µs    | 778µs    | 832µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19102.06 | 4404.84 | 26243.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15421.05 | 16409.43 | 21077.07 | 22204.55 | 23041.59 | 23328.81 | 24191.84 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6450.90  | 1551.89 | 14935.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3966.22 | 6595.20 | 7124.33 | 7248.09 | 7340.70 | 7371.99 | 7705.36 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 12ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10494.25 | 2379.58 | 14149.24 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7328.58 | 10395.18 | 11421.64 | 11753.60 | 12040.16 | 12524.93 | 12798.67 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 6ms      | 13ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58641.44 | 16365.89 | 72337.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27622.81 | 49780.94 | 67839.69 | 69603.84 | 70386.05 | 70720.86 | 71338.89 |
| **Latency** | 628µs    | 675µs    | 734µs    | 786µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 25899.52 | 10083.22 | 34380.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11806.67 | 12100.06 | 32372.38 | 33359.55 | 33706.37 | 33805.94 | 34045.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      | 4ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56470.64 | 15115.81 | 67814.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26477.72 | 56935.02 | 64474.48 | 65437.35 | 66215.54 | 66622.74 | 67114.44 |
| **Latency** | 683µs    | 732µs    | 764µs    | 814µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59257.35 | 14023.09 | 69178.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27322.00 | 62679.93 | 66011.59 | 66801.89 | 67400.35 | 67702.41 | 68331.77 |
| **Latency** | 670µs    | 714µs    | 752µs    | 793µs    | 935µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35851.32 | 8037.56 | 44107.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25609.61 | 32205.16 | 39923.76 | 40766.59 | 41419.26 | 41719.05 | 42418.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51604.52 | 12591.98 | 76941.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35536.09 | 40034.65 | 51591.17 | 61716.33 | 69026.60 | 71477.94 | 74820.00 |
| **Latency** | 555µs    | 674µs    | 821µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23354.49 | 4449.98 | 37592.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19802.48 | 22575.41 | 24617.88 | 25732.58 | 26383.73 | 26843.62 | 27868.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56482.72 | 12556.31 | 65423.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27360.24 | 59724.81 | 62290.65 | 63063.40 | 63690.78 | 64031.39 | 64778.25 |
| **Latency** | 700µs    | 759µs    | 793µs    | 834µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57915.56 | 16732.50 | 74333.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29252.62 | 43100.24 | 68090.96 | 71483.01 | 72614.21 | 73075.38 | 73599.09 |
| **Latency** | 557µs    | 660µs    | 735µs    | 795µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35444.16 | 5176.95 | 39295.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34870.63 | 35957.01 | 36700.57 | 37335.30 | 37655.64 | 37851.31 | 38370.82 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22020.42 | 5277.27 | 92590.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18460.37 | 21204.41 | 23694.61 | 24498.74 | 25009.98 | 25465.26 | 26934.33 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10369.81 | 1996.32 | 17130.01 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8015.99 | 9803.09 | 10893.75 | 11255.00 | 11572.26 | 13049.76 | 14784.26 |
| **Latency** | 2ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 9ms      |

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
| 50989.87 | 5528.98 | 54255.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50308.87 | 51469.67 | 52188.82 | 52723.54 | 53207.26 | 53400.88 | 53830.75 |
| **Latency** | 846µs    | 922µs    | 962µs    | 992µs    | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26072.32 | 5119.60 | 31936.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21240.66 | 24467.78 | 28221.23 | 28991.61 | 29527.64 | 29965.98 | 30900.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53002.54 | 10076.43 | 75604.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41100.89 | 44710.82 | 51643.26 | 61829.49 | 67317.50 | 69263.31 | 73334.11 |
| **Latency** | 526µs    | 666µs    | 831µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6400.54  | 2220.86 | 10509.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 3600.23 | 5138.62 | 7119.90 | 7864.45 | 8328.88 | 8611.15 | 10264.95 |
| **Latency** | 4ms     | 5ms     | 7ms     | 9ms     | 12ms    | 16ms    | 22ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53896.81 | 18925.77 | 72734.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26606.84 | 27836.31 | 66413.83 | 69624.03 | 70662.13 | 71211.04 | 71873.76 |
| **Latency** | 617µs    | 679µs    | 743µs    | 821µs    | 1ms      | 1ms      | 2ms      |

---

<p align="center">Generated 2023-10-29T01:29:09.743Z</p>
