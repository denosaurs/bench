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
| Deno                                                                                 | 67795.23 | 15132.92 | 78768.31  | 100%     |
| NHttp                                                                                | 64011.53 | 14406.70 | 74058.56  | 94%      |
| Bun                                                                                  | 63247.41 | 8911.10  | 81616.51  | 93%      |
| Fast                                                                                 | 62650.87 | 13236.50 | 71405.92  | 92%      |
| Fastro                                                                               | 61338.25 | 13832.57 | 71258.80  | 90%      |
| Hyper Express                                                                        | 60542.78 | 16739.66 | 78006.41  | 89%      |
| Hono                                                                                 | 59980.60 | 14942.78 | 70252.36  | 88%      |
| Deso                                                                                 | 58282.21 | 12065.68 | 66986.56  | 86%      |
| Megalo                                                                               | 55612.05 | 12945.73 | 64715.00  | 82%      |
| Reno                                                                                 | 49252.55 | 7451.96  | 53305.77  | 73%      |
| Cheetah                                                                              | 40293.93 | 3003.46  | 42147.82  | 59%      |
| http                                                                                 | 39219.93 | 7769.69  | 45002.52  | 58%      |
| Peko                                                                                 | 35322.29 | 7179.15  | 62792.87  | 52%      |
| Node                                                                                 | 35076.70 | 5787.15  | 38154.63  | 52%      |
| Alosaur                                                                              | 32175.83 | 7120.84  | 39231.49  | 47%      |
| Fastify                                                                              | 30107.42 | 6145.54  | 34253.18  | 44%      |
| Router                                                                               | 27878.12 | 4729.78  | 33289.05  | 41%      |
| Little                                                                               | 23867.85 | 4265.28  | 28226.00  | 35%      |
| Aqua                                                                                 | 23381.68 | 3383.53  | 28550.68  | 34%      |
| Oak                                                                                  | 22282.87 | 4262.06  | 27854.37  | 33%      |
| Dinatra                                                                              | 19183.53 | 4294.34  | 42281.96  | 28%      |
| Abc                                                                                  | 14718.93 | 4134.21  | 19904.66  | 22%      |
| Opine                                                                                | 9768.52  | 3384.30  | 90087.57  | 14%      |
| Express (Deno)                                                                       | 8915.22  | 1880.41  | 13130.38  | 13%      |
| Express                                                                              | 6758.47  | 1265.09  | 10016.63  | 10%      |
| Servest                                                                              | 5810.72  | 1666.70  | 8643.16   | 9%       |
| Acorn                                                                                | 4168.28  | 8041.75  | 112717.79 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-ef10a744-cb2e-4269-bdf1-963b97d5f748) |          |          |           |          |

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
| 14718.93 | 4134.21 | 19904.66 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8758.17 | 9978.56 | 16475.61 | 17530.01 | 18743.13 | 19264.14 | 19559.49 |
| **Latency** | 2ms     | 2ms     | 2ms      | 3ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4168.28  | 8041.75 | 112717.79 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 95.39 | 2105.17 | 2764.37 | 4057.37 | 7420.74 | 9072.97 | 56130.90 |
| **Latency** | 5ms   | 7ms     | 16ms    | 22ms    | 26ms    | 27ms    | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32175.83 | 7120.84 | 39231.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24066.09 | 30704.03 | 35338.62 | 36107.27 | 36726.90 | 36936.72 | 37502.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23381.68 | 3383.53 | 28550.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22141.96 | 22695.44 | 24201.48 | 24934.09 | 25424.72 | 26000.72 | 26438.13 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63247.41 | 8911.10 | 81616.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52446.78 | 54881.22 | 61902.59 | 72650.68 | 74509.72 | 75214.66 | 77060.91 |
| **Latency** | 484µs    | 608µs    | 745µs    | 864µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40293.93 | 3003.46 | 42147.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39625.05 | 40530.24 | 40939.80 | 41216.07 | 41418.37 | 41523.83 | 41813.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67795.23 | 15132.92 | 78768.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32222.85 | 70760.84 | 74799.99 | 76182.25 | 76875.45 | 77176.82 | 77828.65 |
| **Latency** | 523µs    | 610µs    | 692µs    | 730µs    | 818µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58282.21 | 12065.68 | 66986.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31008.13 | 61837.86 | 63335.04 | 64408.35 | 65286.98 | 65777.76 | 66461.96 |
| **Latency** | 719µs    | 741µs    | 765µs    | 802µs    | 958µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19183.53 | 4294.34 | 42281.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16900.71 | 18032.67 | 20658.46 | 21635.74 | 21984.75 | 22236.58 | 24636.79 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6758.47  | 1265.09 | 10016.63 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4732.19 | 6947.47 | 7348.07 | 7439.15 | 7495.59 | 7523.94 | 7563.40 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8915.22  | 1880.41 | 13130.38 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6479.30 | 8595.16 | 9542.33 | 9842.03 | 10346.27 | 10571.70 | 10902.95 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 8ms      | 13ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62650.87 | 13236.50 | 71405.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33994.94 | 65738.86 | 68518.01 | 69331.93 | 69910.66 | 70231.54 | 70615.61 |
| **Latency** | 664µs    | 694µs    | 714µs    | 742µs    | 878µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30107.42 | 6145.54 | 34253.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27821.21 | 31277.95 | 32115.81 | 32647.41 | 32855.28 | 32942.24 | 33088.43 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61338.25 | 13832.57 | 71258.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29003.83 | 65077.80 | 67625.83 | 68501.50 | 69191.79 | 69513.35 | 70292.92 |
| **Latency** | 678µs    | 706µs    | 723µs    | 747µs    | 905µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59980.60 | 14942.78 | 70252.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28433.04 | 63606.49 | 67257.98 | 68134.89 | 68675.54 | 69050.68 | 69585.04 |
| **Latency** | 681µs    | 705µs    | 722µs    | 755µs    | 911µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39219.93 | 7769.69 | 45002.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33606.79 | 36393.56 | 42702.72 | 43602.27 | 44039.23 | 44263.63 | 44551.57 |
| **Latency** | 984µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60542.78 | 16739.66 | 78006.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36048.10 | 39921.24 | 70214.20 | 74802.41 | 75904.71 | 76357.04 | 77043.79 |
| **Latency** | 502µs    | 579µs    | 733µs    | 805µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23867.85 | 4265.28 | 28226.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20164.60 | 23410.12 | 25475.79 | 26292.08 | 26562.00 | 26706.94 | 27303.96 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55612.05 | 12945.73 | 64715.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27255.66 | 59127.32 | 61991.88 | 62518.26 | 62902.65 | 63151.08 | 64103.35 |
| **Latency** | 749µs    | 770µs    | 791µs    | 819µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64011.53 | 14406.70 | 74058.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31408.43 | 67596.29 | 70402.94 | 71543.93 | 72140.52 | 72415.26 | 73136.36 |
| **Latency** | 638µs    | 676µs    | 699µs    | 730µs    | 852µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35076.70 | 5787.15 | 38154.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34919.62 | 35919.82 | 36471.19 | 37126.06 | 37416.16 | 37562.80 | 37846.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22282.87 | 4262.06 | 27854.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20358.88 | 21364.50 | 23826.41 | 24389.81 | 24739.74 | 25074.27 | 26720.79 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9768.52  | 3384.30 | 90087.57 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8024.57 | 9405.66 | 10067.14 | 10390.86 | 10701.41 | 11376.25 | 12209.43 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35322.29 | 7179.15 | 62792.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31212.55 | 33116.72 | 38400.44 | 38999.80 | 39430.78 | 39780.26 | 40386.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49252.55 | 7451.96 | 53305.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44609.83 | 50960.74 | 51414.50 | 52170.35 | 52588.45 | 52805.13 | 53062.77 |
| **Latency** | 922µs    | 941µs    | 954µs    | 973µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27878.12 | 4729.78 | 33289.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25508.46 | 26449.91 | 29663.11 | 30242.83 | 30735.40 | 31237.28 | 31752.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5810.72  | 1666.70 | 8643.16 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4646.76 | 5059.00 | 6363.07 | 6794.51 | 7099.30 | 7178.33 | 8407.96 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 16ms    | 18ms    |

---

<p align="center">Generated 2023-05-10T01:34:00.340Z</p>
