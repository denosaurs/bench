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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Deno                                                                                 | 70628.06 | 16406.16 | 81519.36  | 100%     |
| Bun                                                                                  | 68036.66 | 13022.57 | 87738.86  | 96%      |
| Hyper Express                                                                        | 65257.44 | 17831.72 | 87905.05  | 92%      |
| NHttp                                                                                | 61986.46 | 15100.76 | 72942.67  | 88%      |
| Hono                                                                                 | 61505.53 | 12880.87 | 70407.11  | 87%      |
| Fast                                                                                 | 60704.11 | 15087.10 | 71377.15  | 86%      |
| Fastro                                                                               | 59808.77 | 10578.86 | 66664.06  | 85%      |
| Megalo                                                                               | 58368.18 | 10315.29 | 65287.25  | 83%      |
| Deso                                                                                 | 58349.48 | 13560.38 | 67634.56  | 83%      |
| Reno                                                                                 | 50584.59 | 6389.63  | 53898.80  | 72%      |
| Cheetah                                                                              | 42113.46 | 4152.82  | 45425.67  | 60%      |
| Node                                                                                 | 41257.35 | 6567.30  | 44560.32  | 58%      |
| http                                                                                 | 41228.36 | 9935.02  | 51546.44  | 58%      |
| Peko                                                                                 | 37912.48 | 8027.22  | 47435.40  | 54%      |
| Alosaur                                                                              | 34180.83 | 6518.73  | 44000.50  | 48%      |
| Router                                                                               | 29892.85 | 5055.62  | 36768.80  | 42%      |
| Fastify                                                                              | 29304.92 | 10920.87 | 38686.69  | 41%      |
| Little                                                                               | 26386.07 | 4749.65  | 32358.25  | 37%      |
| Oak                                                                                  | 24780.15 | 4502.20  | 30399.60  | 35%      |
| Aqua                                                                                 | 24344.71 | 3336.09  | 29063.06  | 34%      |
| Dinatra                                                                              | 21626.93 | 3829.70  | 45900.86  | 31%      |
| Abc                                                                                  | 19190.55 | 2855.73  | 22881.30  | 27%      |
| Acorn                                                                                | 15385.34 | 26651.36 | 163043.48 | 22%      |
| Opine                                                                                | 10623.43 | 3229.12  | 71154.42  | 15%      |
| Express (Deno)                                                                       | 9798.43  | 1993.94  | 15421.01  | 14%      |
| Express                                                                              | 7912.67  | 1493.36  | 9756.60   | 11%      |
| Servest                                                                              | 6808.19  | 2085.91  | 8970.89   | 10%      |
| ![Chart](https://quickchart.io/chart/render/sf-389131ce-9bd2-48ee-b626-940f6c2ae120) |          |          |           |          |

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
| 19190.55 | 2855.73 | 22881.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17129.31 | 17903.06 | 20172.50 | 21121.58 | 21571.21 | 21801.55 | 22235.89 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 15385.34 | 26651.36 | 163043.48 |     |

| **Stat**    | 10    | 25    | 50      | 75       | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59.21 | 90.28 | 4320.92 | 10855.10 | 71882.78 | 78624.08 | 90054.82 |
| **Latency** | 4ms   | 6ms   | 14ms    | 21ms     | 24ms     | 29ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34180.83 | 6518.73 | 44000.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29395.56 | 31834.53 | 36827.82 | 38169.88 | 38708.67 | 39118.46 | 40222.97 |
| **Latency** | 969µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24344.71 | 3336.09 | 29063.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23015.46 | 23926.25 | 25032.98 | 25966.28 | 26291.18 | 27030.07 | 27782.60 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68036.66 | 13022.57 | 87738.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51575.34 | 55711.47 | 73149.80 | 80167.61 | 81712.09 | 82330.78 | 83890.50 |
| **Latency** | 446µs    | 558µs    | 677µs    | 829µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42113.46 | 4152.82 | 45425.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42116.45 | 42504.99 | 42925.79 | 43244.37 | 43489.26 | 43700.55 | 44167.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 70628.06 | 16406.16 | 81519.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33125.24 | 75442.84 | 78422.03 | 79346.09 | 79922.56 | 80259.81 | 80658.99 |
| **Latency** | 544µs    | 592µs    | 636µs    | 683µs    | 781µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58349.48 | 13560.38 | 67634.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29362.06 | 61997.83 | 65041.69 | 65748.58 | 66345.54 | 66672.09 | 67179.63 |
| **Latency** | 701µs    | 734µs    | 761µs    | 797µs    | 994µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21626.93 | 3829.70 | 45900.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19915.15 | 21001.07 | 22051.16 | 23423.23 | 24141.06 | 25147.81 | 26289.17 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7912.67  | 1493.36 | 9756.60 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5615.40 | 7893.31 | 8671.55 | 8761.43 | 8818.88 | 8842.81 | 8888.09 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9798.43  | 1993.94 | 15421.01 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7207.69 | 9567.45 | 10555.44 | 10769.03 | 10861.67 | 11489.95 | 11857.24 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 5ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60704.11 | 15087.10 | 71377.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30021.34 | 64664.08 | 68334.93 | 69165.33 | 69740.51 | 70005.89 | 70400.72 |
| **Latency** | 668µs    | 700µs    | 724µs    | 757µs    | 995µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 29304.92 | 10920.87 | 38686.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14922.85 | 15380.61 | 36908.90 | 37683.32 | 37985.12 | 38104.07 | 38416.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59808.77 | 10578.86 | 66664.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40584.04 | 62589.70 | 64050.66 | 64773.26 | 65265.03 | 65592.90 | 66176.82 |
| **Latency** | 715µs    | 749µs    | 776µs    | 804µs    | 937µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61505.53 | 12880.87 | 70407.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33659.61 | 65400.71 | 67315.55 | 68117.23 | 68742.68 | 69011.11 | 69520.93 |
| **Latency** | 675µs    | 708µs    | 733µs    | 765µs    | 910µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41228.36 | 9935.02 | 51546.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23181.39 | 39908.03 | 45963.95 | 47291.41 | 48114.01 | 48726.84 | 49406.47 |
| **Latency** | 825µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65257.44 | 17831.72 | 87905.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41573.23 | 42641.04 | 74623.99 | 81586.96 | 82553.78 | 83222.45 | 85080.77 |
| **Latency** | 463µs    | 555µs    | 670µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26386.07 | 4749.65 | 32358.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20309.90 | 26012.29 | 27526.19 | 29058.16 | 29931.11 | 30492.18 | 31187.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58368.18 | 10315.29 | 65287.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40359.70 | 61103.24 | 62368.80 | 63235.61 | 63702.11 | 63934.72 | 64340.09 |
| **Latency** | 732µs    | 768µs    | 796µs    | 826µs    | 953µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61986.46 | 15100.76 | 72942.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29908.97 | 65994.57 | 69705.49 | 70720.76 | 71224.18 | 71420.72 | 71746.17 |
| **Latency** | 647µs    | 684µs    | 709µs    | 742µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41257.35 | 6567.30 | 44560.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40844.66 | 42257.20 | 42792.58 | 43470.15 | 43784.67 | 43941.91 | 44225.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24780.15 | 4502.20 | 30399.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21951.27 | 24601.81 | 26099.45 | 26871.68 | 27471.18 | 28186.23 | 29598.23 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10623.43 | 3229.12 | 71154.42 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8122.69 | 10101.72 | 10919.99 | 11288.00 | 12716.25 | 13427.98 | 15397.77 |
| **Latency** | 2ms     | 4ms      | 4ms      | 5ms      | 5ms      | 6ms      | 11ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37912.48 | 8027.22 | 47435.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26604.36 | 37006.06 | 41116.10 | 42621.46 | 43557.40 | 44117.96 | 44879.56 |
| **Latency** | 900µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50584.59 | 6389.63 | 53898.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50475.47 | 51653.57 | 52236.26 | 52700.18 | 53167.01 | 53319.16 | 53592.89 |
| **Latency** | 895µs    | 923µs    | 955µs    | 983µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29892.85 | 5055.62 | 36768.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26944.76 | 29514.13 | 31416.37 | 32522.41 | 32996.06 | 33404.10 | 34577.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6808.19  | 2085.91 | 8970.89 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5112.54 | 5944.96 | 7426.90 | 8320.19 | 8659.86 | 8778.41 | 8875.55 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 9ms     | 13ms    | 16ms    |

---

<p align="center">Generated 2023-05-26T01:44:37.623Z</p>
