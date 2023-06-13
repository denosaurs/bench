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
| Fast                                                                                 | 69127.01 | 13841.45 | 76921.28  | 100%     |
| NHttp                                                                                | 67741.44 | 14409.43 | 78145.06  | 98%      |
| Hono                                                                                 | 67300.97 | 14177.64 | 76019.53  | 97%      |
| Deno                                                                                 | 67043.24 | 17318.28 | 79906.71  | 97%      |
| Hyper Express                                                                        | 64466.43 | 18515.05 | 84186.48  | 93%      |
| Bun                                                                                  | 64230.55 | 14784.86 | 85748.05  | 93%      |
| Fastro                                                                               | 62444.57 | 14947.89 | 73204.75  | 90%      |
| Megalo                                                                               | 60810.66 | 13567.19 | 70521.47  | 88%      |
| Deso                                                                                 | 59116.98 | 16741.48 | 71843.17  | 86%      |
| Reno                                                                                 | 53694.50 | 7675.11  | 58822.43  | 78%      |
| Cheetah                                                                              | 47419.23 | 5787.11  | 50992.49  | 69%      |
| Node                                                                                 | 39316.98 | 6942.85  | 43322.33  | 57%      |
| http                                                                                 | 39044.66 | 8691.42  | 46764.77  | 56%      |
| Fastify                                                                              | 37469.54 | 6207.88  | 40608.71  | 54%      |
| Peko                                                                                 | 35295.82 | 7564.64  | 46272.95  | 51%      |
| Alosaur                                                                              | 31625.73 | 6060.54  | 38085.18  | 46%      |
| Router                                                                               | 28320.38 | 4785.86  | 34605.53  | 41%      |
| Little                                                                               | 24717.59 | 4187.91  | 30204.44  | 36%      |
| Oak                                                                                  | 23006.62 | 4270.24  | 41203.57  | 33%      |
| Aqua                                                                                 | 22783.50 | 3349.87  | 28278.95  | 33%      |
| Dinatra                                                                              | 21223.48 | 4487.70  | 44353.31  | 31%      |
| Abc                                                                                  | 19302.78 | 2526.23  | 23356.49  | 28%      |
| Express (Deno)                                                                       | 10372.36 | 2164.98  | 15140.91  | 15%      |
| Express                                                                              | 7507.81  | 1557.11  | 10601.10  | 11%      |
| Servest                                                                              | 6627.81  | 1991.26  | 10095.86  | 10%      |
| Acorn                                                                                | 5699.85  | 11189.81 | 141843.97 | 8%       |
| Opine                                                                                | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-39f799eb-e1f4-4c1f-85cb-e23b78c08084) |          |          |           |          |

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
| 19302.78 | 2526.23 | 23356.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17109.01 | 17910.86 | 20049.86 | 21146.66 | 21669.48 | 21846.11 | 22243.97 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 5699.85  | 11189.81 | 141843.97 |     |

| **Stat**    | 10    | 25     | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------ | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 69.80 | 300.14 | 3368.44 | 6676.72 | 9801.24 | 12358.88 | 71071.15 |
| **Latency** | 5ms   | 7ms    | 15ms    | 21ms    | 25ms    | 27ms     | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31625.73 | 6060.54 | 38085.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27304.77 | 29111.55 | 34114.55 | 35094.80 | 35617.69 | 35940.72 | 36763.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22783.50 | 3349.87 | 28278.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21106.26 | 22143.42 | 23732.17 | 24445.81 | 24915.69 | 25522.78 | 26743.95 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64230.55 | 14784.86 | 85748.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45135.51 | 50329.21 | 67499.58 | 78753.23 | 80139.81 | 80839.59 | 82878.48 |
| **Latency** | 463µs    | 580µs    | 692µs    | 980µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47419.23 | 5787.11 | 50992.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46638.26 | 48183.16 | 48875.07 | 49522.17 | 49872.41 | 50135.25 | 50435.38 |
| **Latency** | 903µs    | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67043.24 | 17318.28 | 79906.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31553.87 | 67801.61 | 76069.73 | 77315.71 | 78018.49 | 78442.91 | 79191.98 |
| **Latency** | 510µs    | 566µs    | 682µs    | 723µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59116.98 | 16741.48 | 71843.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27127.95 | 57252.50 | 68267.38 | 69150.09 | 69878.58 | 70310.31 | 70818.17 |
| **Latency** | 646µs    | 679µs    | 718µs    | 792µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21223.48 | 4487.70 | 44353.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19145.70 | 19933.22 | 21532.86 | 23435.57 | 25099.71 | 25429.72 | 27192.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7507.81  | 1557.11 | 10601.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5383.54 | 6265.27 | 8400.53 | 8580.72 | 8672.21 | 8710.43 | 8748.88 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 9ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10372.36 | 2164.98 | 15140.91 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7953.86 | 10145.28 | 11276.56 | 11465.22 | 11564.67 | 11599.42 | 13409.35 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69127.01 | 13841.45 | 76921.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45034.22 | 72745.60 | 74519.16 | 75331.40 | 75836.16 | 76080.92 | 76334.86 |
| **Latency** | 595µs    | 630µs    | 665µs    | 702µs    | 802µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37469.54 | 6207.88 | 40608.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37263.61 | 38336.68 | 38955.59 | 39630.79 | 39894.42 | 40044.72 | 40297.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62444.57 | 14947.89 | 73204.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29509.69 | 65086.08 | 69742.33 | 70716.75 | 71411.20 | 71788.80 | 72417.69 |
| **Latency** | 641µs    | 670µs    | 701µs    | 749µs    | 952µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67300.97 | 14177.64 | 76019.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41026.40 | 71216.16 | 73258.38 | 74116.85 | 74584.05 | 74843.96 | 75338.97 |
| **Latency** | 606µs    | 641µs    | 672µs    | 713µs    | 836µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39044.66 | 8691.42 | 46764.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24200.12 | 37501.02 | 43319.87 | 44268.53 | 44842.91 | 45256.04 | 45832.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64466.43 | 18515.05 | 84186.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40250.83 | 41295.63 | 77913.78 | 80507.48 | 81418.55 | 81851.29 | 82824.62 |
| **Latency** | 471µs    | 558µs    | 682µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24717.59 | 4187.91 | 30204.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22107.89 | 24524.02 | 25924.36 | 26815.54 | 27148.23 | 27503.77 | 28478.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60810.66 | 13567.19 | 70521.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28912.60 | 65108.89 | 66610.96 | 67724.92 | 68610.06 | 69101.15 | 69646.43 |
| **Latency** | 664µs    | 697µs    | 734µs    | 784µs    | 956µs    | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67741.44 | 14409.43 | 78145.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38617.29 | 71725.40 | 73529.91 | 74527.59 | 75406.64 | 75727.00 | 76273.25 |
| **Latency** | 605µs    | 637µs    | 664µs    | 704µs    | 829µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39316.98 | 6942.85 | 43322.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38484.19 | 40602.19 | 41234.39 | 41966.82 | 42238.10 | 42390.19 | 42683.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23006.62 | 4270.24 | 41203.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20704.81 | 22468.32 | 24283.01 | 25028.09 | 25582.65 | 26137.39 | 27614.70 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35295.82 | 7564.64 | 46272.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26592.85 | 34174.12 | 38470.07 | 39566.76 | 40200.06 | 40545.21 | 41402.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53694.50 | 7675.11 | 58822.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51010.78 | 55324.00 | 55920.21 | 56474.59 | 56999.28 | 57233.59 | 57523.94 |
| **Latency** | 793µs    | 840µs    | 901µs    | 937µs    | 997µs    | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28320.38 | 4785.86 | 34605.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25498.98 | 27606.95 | 29916.46 | 30739.09 | 31315.61 | 31849.84 | 32836.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6627.81  | 1991.26 | 10095.86 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5013.81 | 5701.03 | 7323.25 | 7908.57 | 8359.69 | 8502.90 | 9739.05 |
| **Latency** | 4ms     | 5ms     | 7ms     | 9ms     | 11ms    | 14ms    | 18ms    |

---

<p align="center">Generated 2023-06-13T01:58:40.046Z</p>
