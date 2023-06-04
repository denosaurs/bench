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
| Deno                                                                                 | 61497.35 | 16175.40 | 73941.96  | 100%     |
| Bun                                                                                  | 60730.65 | 11547.69 | 79059.43  | 99%      |
| Hyper Express                                                                        | 60706.02 | 16352.20 | 76131.37  | 99%      |
| Fast                                                                                 | 55562.51 | 11551.15 | 63932.17  | 90%      |
| NHttp                                                                                | 55355.90 | 11386.22 | 62904.88  | 90%      |
| Hono                                                                                 | 55199.25 | 10717.13 | 61810.40  | 90%      |
| Deso                                                                                 | 52907.04 | 8819.05  | 59204.71  | 86%      |
| Fastro                                                                               | 51660.76 | 7371.02  | 56549.16  | 84%      |
| Megalo                                                                               | 50944.08 | 8061.52  | 56321.47  | 83%      |
| Reno                                                                                 | 45326.44 | 4924.46  | 48507.96  | 74%      |
| http                                                                                 | 37622.07 | 8535.92  | 47289.22  | 61%      |
| Cheetah                                                                              | 36671.14 | 2720.06  | 39246.14  | 60%      |
| Peko                                                                                 | 33437.76 | 7035.11  | 39810.90  | 54%      |
| Fastify                                                                              | 31298.23 | 5968.84  | 35603.59  | 51%      |
| Alosaur                                                                              | 30862.33 | 6393.28  | 38797.78  | 50%      |
| Node                                                                                 | 29437.28 | 10440.53 | 37511.16  | 48%      |
| Router                                                                               | 27205.58 | 4723.16  | 33355.95  | 44%      |
| Aqua                                                                                 | 23761.20 | 3493.54  | 31434.37  | 39%      |
| Little                                                                               | 23725.91 | 4773.04  | 73976.41  | 39%      |
| Oak                                                                                  | 21712.59 | 4388.08  | 35853.23  | 35%      |
| Dinatra                                                                              | 18533.70 | 4014.32  | 25150.50  | 30%      |
| Abc                                                                                  | 14682.24 | 4005.24  | 21163.17  | 24%      |
| Acorn                                                                                | 13620.58 | 20534.46 | 115270.45 | 22%      |
| Opine                                                                                | 9424.19  | 2340.22  | 27720.25  | 15%      |
| Express (Deno)                                                                       | 8171.51  | 1790.09  | 27063.23  | 13%      |
| Express                                                                              | 6555.28  | 1300.53  | 9962.04   | 11%      |
| Servest                                                                              | 5654.78  | 1754.01  | 8100.24   | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-5bbed96d-ef43-401b-bc6b-ae0c7d46fb06) |          |          |           |          |

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
| 14682.24 | 4005.24 | 21163.17 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8646.49 | 10531.71 | 16136.10 | 17164.66 | 18869.74 | 19076.78 | 19431.98 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 13620.58 | 20534.46 | 115270.45 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 57.83 | 72.55 | 4658.32 | 9907.47 | 46983.69 | 63767.38 | 72075.92 |
| **Latency** | 5ms   | 7ms   | 17ms    | 22ms    | 26ms     | 27ms     | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30862.33 | 6393.28 | 38797.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24711.78 | 27358.84 | 33625.45 | 34883.26 | 35572.29 | 36093.40 | 36873.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23761.20 | 3493.54 | 31434.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22111.21 | 23017.84 | 24208.89 | 25555.76 | 26550.93 | 27221.41 | 27917.00 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60730.65 | 11547.69 | 79059.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46097.91 | 49085.23 | 64033.43 | 71788.68 | 73456.79 | 74229.50 | 75430.50 |
| **Latency** | 491µs    | 610µs    | 755µs    | 919µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36671.14 | 2720.06 | 39246.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36128.08 | 36699.18 | 37184.32 | 37545.33 | 37946.38 | 38149.60 | 38527.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61497.35 | 16175.40 | 73941.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29047.85 | 60091.15 | 69960.69 | 71528.57 | 72238.73 | 72612.16 | 73298.03 |
| **Latency** | 576µs    | 655µs    | 725µs    | 771µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52907.04 | 8819.05 | 59204.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38695.49 | 54982.97 | 56225.31 | 57024.96 | 57591.05 | 57975.27 | 58588.31 |
| **Latency** | 806µs    | 840µs    | 874µs    | 910µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18533.70 | 4014.32 | 25150.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15204.22 | 16444.85 | 20350.18 | 21087.68 | 21741.48 | 22090.11 | 23319.78 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6555.28  | 1300.53 | 9962.04 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4414.08 | 6710.45 | 7143.22 | 7252.14 | 7331.23 | 7373.96 | 7484.27 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 11ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8171.51  | 1790.09 | 27063.23 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5911.98 | 7748.32 | 8801.47 | 9094.56 | 9330.58 | 9599.06 | 9958.83 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 9ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55562.51 | 11551.15 | 63932.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31041.37 | 58499.87 | 60707.12 | 61417.02 | 61855.50 | 62136.53 | 62721.16 |
| **Latency** | 743µs    | 783µs    | 811µs    | 849µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31298.23 | 5968.84 | 35603.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29216.90 | 32259.01 | 33118.88 | 33715.83 | 33950.23 | 34053.78 | 34282.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51660.76 | 7371.02 | 56549.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44627.82 | 53026.92 | 53972.59 | 54706.99 | 55533.19 | 55907.21 | 56252.45 |
| **Latency** | 845µs    | 879µs    | 916µs    | 953µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55199.25 | 10717.13 | 61810.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34356.26 | 58016.13 | 59462.82 | 60230.61 | 60693.65 | 60916.33 | 61377.22 |
| **Latency** | 761µs    | 797µs    | 826µs    | 864µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37622.07 | 8535.92 | 47289.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25103.45 | 34799.39 | 41577.58 | 42746.03 | 43594.90 | 44045.96 | 44681.54 |
| **Latency** | 903µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60706.02 | 16352.20 | 76131.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34969.17 | 40823.58 | 70736.73 | 73127.61 | 74140.40 | 74653.79 | 75291.48 |
| **Latency** | 510µs    | 582µs    | 751µs    | 789µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23725.91 | 4773.04 | 73976.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17856.72 | 23241.24 | 24837.20 | 26464.66 | 26872.25 | 27220.08 | 28389.02 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50944.08 | 8061.52 | 56321.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41261.77 | 52754.44 | 53630.98 | 54263.75 | 55003.72 | 55373.31 | 55997.54 |
| **Latency** | 848µs    | 883µs    | 918µs    | 954µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55355.90 | 11386.22 | 62904.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32502.20 | 58578.35 | 60419.79 | 60925.36 | 61320.04 | 61522.00 | 62256.51 |
| **Latency** | 746µs    | 786µs    | 814µs    | 850µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 29437.28 | 10440.53 | 37511.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12615.48 | 12988.42 | 35362.86 | 36232.52 | 36820.89 | 36994.24 | 37212.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21712.59 | 4388.08 | 35853.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18807.65 | 20731.98 | 23391.32 | 23900.40 | 24290.05 | 25010.42 | 26928.87 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9424.19  | 2340.22 | 27720.25 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6878.46 | 8735.24 | 9665.24 | 10158.44 | 11607.05 | 13498.89 | 15485.89 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 6ms      | 7ms      | 12ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33437.76 | 7035.11 | 39810.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26622.29 | 31300.38 | 36316.84 | 37449.55 | 38230.19 | 38736.60 | 39271.62 |
| **Latency** | 999µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45326.44 | 4924.46 | 48507.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44609.55 | 45713.44 | 46359.48 | 47171.44 | 47625.43 | 47875.62 | 48210.67 |
| **Latency** | 994µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27205.58 | 4723.16 | 33355.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23952.79 | 25694.69 | 28994.19 | 29731.50 | 30264.71 | 30728.57 | 31485.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5654.78  | 1754.01 | 8100.24 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4046.76 | 4504.21 | 6183.13 | 6716.59 | 7812.11 | 7965.84 | 8028.92 |
| **Latency** | 7ms     | 7ms     | 7ms     | 10ms    | 11ms    | 15ms    | 20ms    |

---

<p align="center">Generated 2023-06-04T02:17:08.818Z</p>
