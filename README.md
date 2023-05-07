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
| Deno                                                                                 | 69609.64 | 20047.79 | 83994.89  | 100%     |
| Bun                                                                                  | 67027.38 | 11450.05 | 89544.64  | 96%      |
| Fast                                                                                 | 66706.98 | 14827.13 | 75807.96  | 96%      |
| NHttp                                                                                | 66668.34 | 15374.86 | 76037.24  | 96%      |
| Hyper Express                                                                        | 66409.51 | 16490.12 | 87277.33  | 95%      |
| Hono                                                                                 | 65608.04 | 14287.55 | 74725.03  | 94%      |
| Fastro                                                                               | 64354.28 | 14875.96 | 74400.20  | 92%      |
| Deso                                                                                 | 62282.65 | 12627.90 | 70922.36  | 89%      |
| Megalo                                                                               | 62162.00 | 11257.08 | 68729.56  | 89%      |
| Reno                                                                                 | 53160.26 | 5674.50  | 58105.21  | 76%      |
| Cheetah                                                                              | 43782.67 | 4195.03  | 49505.22  | 63%      |
| http                                                                                 | 42406.69 | 8900.91  | 61055.65  | 61%      |
| Node                                                                                 | 39571.61 | 7909.32  | 45110.60  | 57%      |
| Peko                                                                                 | 38066.74 | 7846.73  | 46648.73  | 55%      |
| Fastify                                                                              | 36911.93 | 6528.74  | 40545.60  | 53%      |
| Alosaur                                                                              | 34576.56 | 7462.46  | 86725.06  | 50%      |
| Router                                                                               | 29760.08 | 5238.72  | 40713.11  | 43%      |
| Little                                                                               | 25644.88 | 4264.25  | 29201.90  | 37%      |
| Oak                                                                                  | 23704.36 | 5161.22  | 105448.15 | 34%      |
| Aqua                                                                                 | 23674.75 | 3556.57  | 27657.80  | 34%      |
| Dinatra                                                                              | 21637.84 | 4130.09  | 45206.51  | 31%      |
| Abc                                                                                  | 18827.10 | 2538.98  | 34021.55  | 27%      |
| Express (Deno)                                                                       | 9647.54  | 1870.71  | 14261.89  | 14%      |
| Opine                                                                                | 8760.76  | 3690.65  | 28473.97  | 13%      |
| Express                                                                              | 7401.73  | 1680.10  | 11071.91  | 11%      |
| Servest                                                                              | 6433.12  | 1939.35  | 9970.14   | 9%       |
| Acorn                                                                                | 4446.76  | 5922.42  | 68306.01  | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-3ea239ac-e540-4cb3-b97a-b637ea166765) |          |          |           |          |

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
| 18827.10 | 2538.98 | 34021.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17009.62 | 17945.32 | 19628.37 | 20172.38 | 20617.84 | 21113.00 | 22078.60 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4446.76  | 5922.42 | 68306.01 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 59.10 | 2164.01 | 3293.95 | 5913.20 | 8164.80 | 10180.12 | 25608.30 |
| **Latency** | 4ms   | 7ms     | 15ms    | 22ms    | 25ms    | 26ms     | 37ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34576.56 | 7462.46 | 86725.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30818.66 | 33185.90 | 37291.56 | 38121.17 | 38703.30 | 39062.71 | 39584.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23674.75 | 3556.57 | 27657.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21931.91 | 23344.71 | 24535.71 | 25530.23 | 25939.42 | 26322.06 | 26856.12 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67027.38 | 11450.05 | 89544.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54713.96 | 59075.29 | 64894.97 | 78217.11 | 80214.86 | 81261.75 | 83445.63 |
| **Latency** | 454µs    | 569µs    | 691µs    | 823µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43782.67 | 4195.03 | 49505.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43123.56 | 44263.97 | 44812.33 | 45194.33 | 45462.59 | 45653.63 | 45968.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69609.64 | 20047.79 | 83994.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32186.43 | 63031.84 | 81033.65 | 81957.79 | 82526.84 | 82831.84 | 83238.27 |
| **Latency** | 489µs    | 563µs    | 630µs    | 683µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62282.65 | 12627.90 | 70922.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36159.13 | 65260.07 | 67863.47 | 68534.75 | 69163.99 | 69533.04 | 70125.47 |
| **Latency** | 680µs    | 699µs    | 718µs    | 745µs    | 901µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21637.84 | 4130.09 | 45206.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20478.90 | 21535.86 | 22396.39 | 22970.79 | 23805.58 | 24519.26 | 27128.35 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7401.73  | 1680.10 | 11071.91 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5525.78 | 5721.14 | 8461.55 | 8697.19 | 8789.25 | 8829.89 | 8941.17 |
| **Latency** | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9647.54  | 1870.71 | 14261.89 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7549.08 | 9441.43 | 10458.01 | 10573.45 | 10628.29 | 10662.06 | 11179.09 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 5ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66706.98 | 14827.13 | 75807.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32708.34 | 70851.27 | 73605.51 | 74413.77 | 74773.11 | 75008.15 | 75233.48 |
| **Latency** | 627µs    | 647µs    | 663µs    | 687µs    | 831µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36911.93 | 6528.74 | 40545.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36621.05 | 37922.58 | 38513.30 | 39291.37 | 39514.04 | 39617.25 | 39845.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64354.28 | 14875.96 | 74400.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31232.63 | 68052.77 | 71708.64 | 72191.32 | 72701.34 | 73420.92 | 73907.09 |
| **Latency** | 644µs    | 665µs    | 684µs    | 707µs    | 900µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65608.04 | 14287.55 | 74725.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32415.89 | 68920.33 | 72236.48 | 73127.60 | 73799.62 | 74019.61 | 74410.66 |
| **Latency** | 633µs    | 654µs    | 671µs    | 700µs    | 861µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42406.69 | 8900.91 | 61055.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32913.33 | 40335.42 | 46526.29 | 47571.67 | 48094.58 | 48393.07 | 49011.96 |
| **Latency** | 905µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66409.51 | 16490.12 | 87277.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40953.37 | 48248.01 | 77103.47 | 79347.21 | 80217.26 | 80712.45 | 81529.53 |
| **Latency** | 472µs    | 551µs    | 688µs    | 746µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25644.88 | 4264.25 | 29201.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23431.93 | 25331.79 | 26732.08 | 27940.76 | 28163.37 | 28390.42 | 28894.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62162.00 | 11257.08 | 68729.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41706.98 | 65754.25 | 66685.11 | 67074.79 | 67316.49 | 67506.41 | 68033.69 |
| **Latency** | 701µs    | 720µs    | 738µs    | 758µs    | 924µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66668.34 | 15374.86 | 76037.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32765.37 | 71353.16 | 74038.87 | 74867.65 | 75238.05 | 75397.16 | 75606.03 |
| **Latency** | 621µs    | 642µs    | 657µs    | 681µs    | 845µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39571.61 | 7909.32 | 45110.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26447.47 | 41529.27 | 42168.10 | 42998.68 | 43406.72 | 43595.25 | 44266.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 23704.36 | 5161.22 | 105448.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21562.67 | 22883.88 | 25104.14 | 25905.03 | 26387.34 | 26734.74 | 27856.72 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8760.76  | 3690.65 | 28473.97 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5003.93 | 6800.99 | 9426.82 | 10605.89 | 11033.26 | 12436.40 | 20023.80 |
| **Latency** | 3ms     | 4ms     | 5ms     | 6ms      | 9ms      | 10ms     | 19ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38066.74 | 7846.73 | 46648.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28678.61 | 36662.03 | 41707.49 | 42766.49 | 43412.35 | 43693.50 | 44098.64 |
| **Latency** | 993µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53160.26 | 5674.50 | 58105.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52539.48 | 53923.45 | 54337.20 | 54940.91 | 55555.27 | 55768.08 | 56041.50 |
| **Latency** | 875µs    | 893µs    | 903µs    | 919µs    | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29760.08 | 5238.72 | 40713.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27708.05 | 28930.14 | 31601.42 | 32265.66 | 32964.96 | 33312.46 | 33712.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6433.12  | 1939.35 | 9970.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5046.05 | 5601.99 | 7156.92 | 7601.79 | 8067.47 | 8180.94 | 8679.21 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 9ms     | 14ms    | 17ms    |

---

<p align="center">Generated 2023-05-07T01:48:18.505Z</p>
