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
| Bun                                                                                  | 62769.59 | 11215.71 | 81461.26  | 100%     |
| Deno                                                                                 | 61711.11 | 16949.83 | 73952.76  | 98%      |
| Hyper Express                                                                        | 59456.30 | 16314.27 | 78112.17  | 95%      |
| NHttp                                                                                | 56875.01 | 12799.36 | 66308.28  | 91%      |
| Fast                                                                                 | 56708.80 | 12435.92 | 64649.83  | 90%      |
| Hono                                                                                 | 55777.36 | 11674.22 | 64010.52  | 89%      |
| Deso                                                                                 | 54461.06 | 9113.32  | 60195.54  | 87%      |
| Fastro                                                                               | 52887.88 | 8862.96  | 58618.80  | 84%      |
| Megalo                                                                               | 52886.04 | 9200.07  | 59101.34  | 84%      |
| Reno                                                                                 | 45499.08 | 6238.47  | 49264.80  | 72%      |
| http                                                                                 | 37815.93 | 8892.32  | 48325.15  | 60%      |
| Cheetah                                                                              | 36852.77 | 5571.18  | 40079.10  | 59%      |
| Node                                                                                 | 34886.01 | 5215.20  | 37656.61  | 56%      |
| Peko                                                                                 | 34604.25 | 7162.70  | 42637.74  | 55%      |
| Alosaur                                                                              | 29981.53 | 7593.52  | 38680.46  | 48%      |
| Fastify                                                                              | 29624.03 | 7629.38  | 34050.90  | 47%      |
| Router                                                                               | 28057.69 | 5139.27  | 33853.00  | 45%      |
| Little                                                                               | 24426.83 | 4532.67  | 29795.05  | 39%      |
| Aqua                                                                                 | 24231.22 | 3436.30  | 34602.61  | 39%      |
| Oak                                                                                  | 22369.54 | 4161.43  | 27898.07  | 36%      |
| Acorn                                                                                | 19814.91 | 23798.07 | 112358.04 | 32%      |
| Dinatra                                                                              | 19092.83 | 3961.34  | 38667.43  | 30%      |
| Abc                                                                                  | 17499.22 | 2409.45  | 21625.34  | 28%      |
| Opine                                                                                | 9752.18  | 2936.11  | 59043.68  | 16%      |
| Express (Deno)                                                                       | 8431.75  | 1695.46  | 11040.71  | 13%      |
| Servest                                                                              | 6087.42  | 1811.87  | 9073.34   | 10%      |
| Express                                                                              | 5944.67  | 1653.97  | 11891.73  | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-7ab2d686-6313-4294-8acc-d7f640f255b7) |          |          |           |          |

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
| 17499.22 | 2409.45 | 21625.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15994.43 | 17300.71 | 17907.92 | 18619.48 | 19409.83 | 19855.64 | 21041.21 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 19814.91 | 23798.07 | 112358.04 |     |

| **Stat**    | 10    | 25    | 50      | 75       | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52.87 | 69.94 | 8635.85 | 34438.65 | 61578.66 | 70117.53 | 76111.30 |
| **Latency** | 5ms   | 7ms   | 16ms    | 22ms     | 26ms     | 28ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29981.53 | 7593.52 | 38680.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19804.03 | 25916.42 | 33891.17 | 35680.36 | 36458.39 | 37039.19 | 38001.27 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24231.22 | 3436.30 | 34602.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22966.91 | 23798.52 | 24847.18 | 25928.52 | 26343.73 | 26785.85 | 28026.99 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62769.59 | 11215.71 | 81461.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48131.86 | 51711.01 | 67583.99 | 73185.39 | 74533.62 | 75185.86 | 76671.15 |
| **Latency** | 483µs    | 599µs    | 750µs    | 881µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36852.77 | 5571.18 | 40079.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34605.32 | 38208.76 | 38577.29 | 38958.15 | 39209.94 | 39323.74 | 39728.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61711.11 | 16949.83 | 73952.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28558.86 | 60438.74 | 70844.31 | 72130.68 | 72728.05 | 73050.80 | 73601.24 |
| **Latency** | 598µs    | 650µs    | 711µs    | 758µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54461.06 | 9113.32 | 60195.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41625.01 | 56758.61 | 57698.86 | 58465.09 | 58900.78 | 59084.69 | 59836.69 |
| **Latency** | 790µs    | 824µs    | 855µs    | 888µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19092.83 | 3961.34 | 38667.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15809.22 | 16926.30 | 20488.11 | 21550.93 | 22217.41 | 22471.26 | 24155.89 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5944.67  | 1653.97 | 11891.73 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4181.64 | 4488.49 | 7046.39 | 7240.29 | 7347.94 | 7405.58 | 7530.38 |
| **Latency** | 6ms     | 6ms     | 6ms     | 10ms    | 11ms    | 12ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8431.75  | 1695.46 | 11040.71 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6113.61 | 8170.39 | 9207.39 | 9331.31 | 9407.48 | 9445.20 | 9982.20 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56708.80 | 12435.92 | 64649.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26883.17 | 60431.59 | 62667.44 | 63152.89 | 63423.49 | 63534.54 | 63762.30 |
| **Latency** | 719µs    | 762µs    | 789µs    | 825µs    | 983µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29624.03 | 7629.38 | 34050.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13401.12 | 32153.20 | 32861.61 | 33412.19 | 33605.35 | 33705.55 | 33856.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52887.88 | 8862.96 | 58618.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41249.67 | 54927.74 | 56135.60 | 56736.55 | 57426.08 | 57686.77 | 58165.54 |
| **Latency** | 812µs    | 850µs    | 884µs    | 920µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55777.36 | 11674.22 | 64010.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30506.85 | 58826.19 | 60858.08 | 61448.80 | 61964.10 | 62243.84 | 62620.94 |
| **Latency** | 740µs    | 781µs    | 809µs    | 849µs    | 994µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37815.93 | 8892.32 | 48325.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23660.74 | 35907.23 | 42096.62 | 43495.70 | 44188.30 | 44497.56 | 45123.15 |
| **Latency** | 902µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59456.30 | 16314.27 | 78112.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36685.66 | 38413.13 | 68206.80 | 74069.75 | 75114.54 | 75661.31 | 76698.80 |
| **Latency** | 503µs    | 590µs    | 744µs    | 932µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24426.83 | 4532.67 | 29795.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18256.47 | 24083.63 | 25619.09 | 27007.02 | 27613.68 | 28321.30 | 29384.09 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52886.04 | 9200.07 | 59101.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37946.83 | 55341.73 | 56343.97 | 57001.93 | 57527.37 | 57880.15 | 58582.47 |
| **Latency** | 812µs    | 846µs    | 880µs    | 912µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56875.01 | 12799.36 | 66308.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26709.37 | 60245.45 | 63025.49 | 63580.39 | 63875.33 | 64097.74 | 64568.27 |
| **Latency** | 709µs    | 759µs    | 784µs    | 821µs    | 969µs    | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34886.01 | 5215.20 | 37656.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34003.91 | 35639.73 | 36213.94 | 36824.48 | 37112.80 | 37256.44 | 37375.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22369.54 | 4161.43 | 27898.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19812.59 | 21654.89 | 23854.81 | 24472.83 | 24927.78 | 25644.50 | 26714.83 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9752.18  | 2936.11 | 59043.68 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6901.83 | 9204.10 | 10054.85 | 10504.04 | 11574.90 | 12824.43 | 14959.57 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 11ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34604.25 | 7162.70 | 42637.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26632.64 | 32817.25 | 37556.06 | 38729.42 | 39360.02 | 39911.18 | 40717.20 |
| **Latency** | 984µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45499.08 | 6238.47 | 49264.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44303.34 | 46472.88 | 47224.21 | 47901.33 | 48376.14 | 48622.14 | 48924.72 |
| **Latency** | 981µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28057.69 | 5139.27 | 33853.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24022.65 | 27187.95 | 29613.18 | 30769.43 | 31842.56 | 32513.01 | 33189.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6087.42  | 1811.87 | 9073.34 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4737.08 | 5157.98 | 6443.80 | 7279.89 | 7514.78 | 7627.97 | 8774.38 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 14ms    | 18ms    |

---

<p align="center">Generated 2023-06-09T02:01:40.264Z</p>
