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
| Deno                                                                                 | 63532.35 | 14845.53 | 74420.16  | 100%     |
| Hyper Express                                                                        | 60475.75 | 16413.19 | 77237.92  | 95%      |
| Bun                                                                                  | 60289.33 | 11290.54 | 76996.04  | 95%      |
| Fast                                                                                 | 56267.92 | 11622.63 | 63776.41  | 89%      |
| NHttp                                                                                | 56117.46 | 12030.81 | 64318.17  | 88%      |
| Hono                                                                                 | 55704.53 | 11963.61 | 63612.49  | 88%      |
| Deso                                                                                 | 52860.62 | 10040.23 | 59794.19  | 83%      |
| Fastro                                                                               | 51727.53 | 8727.04  | 57619.03  | 81%      |
| Megalo                                                                               | 50976.05 | 8642.66  | 56836.30  | 80%      |
| Reno                                                                                 | 44726.29 | 6016.90  | 48457.78  | 70%      |
| http                                                                                 | 37967.36 | 8613.42  | 58320.64  | 60%      |
| Cheetah                                                                              | 36954.11 | 3232.53  | 39223.30  | 58%      |
| Node                                                                                 | 35311.10 | 5490.61  | 39035.20  | 56%      |
| Peko                                                                                 | 33635.23 | 7625.60  | 72367.47  | 53%      |
| Alosaur                                                                              | 31471.26 | 6610.43  | 49447.71  | 50%      |
| Fastify                                                                              | 30975.82 | 5394.23  | 33905.44  | 49%      |
| Router                                                                               | 27529.36 | 4867.06  | 33970.14  | 43%      |
| Little                                                                               | 24465.12 | 4264.10  | 30126.32  | 39%      |
| Aqua                                                                                 | 23368.14 | 3491.16  | 28367.57  | 37%      |
| Oak                                                                                  | 21635.03 | 4346.30  | 27520.18  | 34%      |
| Dinatra                                                                              | 18738.27 | 3998.27  | 38510.48  | 29%      |
| Abc                                                                                  | 16835.13 | 2415.16  | 21102.96  | 26%      |
| Opine                                                                                | 9619.79  | 3065.37  | 85486.03  | 15%      |
| Express (Deno)                                                                       | 8281.82  | 1715.51  | 10881.05  | 13%      |
| Express                                                                              | 6004.78  | 1571.02  | 10028.37  | 9%       |
| Servest                                                                              | 5866.16  | 1825.37  | 8707.36   | 9%       |
| Acorn                                                                                | 5669.38  | 7278.75  | 109997.80 | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-2de4dbed-ec6f-4eaa-afc8-1f41d91019ba) |          |          |           |          |

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
| 16835.13 | 2415.16 | 21102.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15454.30 | 15907.27 | 16944.33 | 17653.60 | 19712.54 | 20043.15 | 20239.06 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5669.38  | 7278.75 | 109997.80 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 47.42 | 72.78 | 4531.65 | 8767.49 | 11453.80 | 12452.18 | 23374.17 |
| **Latency** | 5ms   | 7ms   | 16ms    | 22ms    | 29ms     | 30ms     | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31471.26 | 6610.43 | 49447.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25956.76 | 27917.21 | 34302.28 | 35083.02 | 35664.56 | 36130.44 | 37242.12 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23368.14 | 3491.16 | 28367.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21520.86 | 22565.17 | 23713.03 | 25200.04 | 26403.40 | 26911.48 | 27580.28 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60289.33 | 11290.54 | 76996.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46494.62 | 50418.89 | 61285.83 | 71396.87 | 72924.71 | 73537.40 | 75193.92 |
| **Latency** | 495µs    | 621µs    | 763µs    | 937µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36954.11 | 3232.53 | 39223.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36584.08 | 37187.36 | 37547.00 | 37949.26 | 38250.92 | 38405.35 | 38951.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63532.35 | 14845.53 | 74420.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29070.93 | 66585.17 | 70409.14 | 71849.77 | 72628.54 | 73014.70 | 73742.24 |
| **Latency** | 559µs    | 647µs    | 727µs    | 769µs    | 886µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52860.62 | 10040.23 | 59794.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33422.63 | 55437.60 | 56717.43 | 57583.97 | 58143.52 | 58483.54 | 59001.67 |
| **Latency** | 798µs    | 833µs    | 867µs    | 907µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18738.27 | 3998.27 | 38510.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15321.80 | 16549.56 | 20519.26 | 21063.34 | 21740.71 | 22153.78 | 24115.08 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6004.78  | 1571.02 | 10028.37 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4282.09 | 4531.81 | 7042.53 | 7294.16 | 7389.03 | 7444.74 | 7506.00 |
| **Latency** | 6ms     | 6ms     | 6ms     | 10ms    | 11ms    | 12ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8281.82  | 1715.51 | 10881.05 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5900.35 | 7904.11 | 9138.27 | 9266.22 | 9354.01 | 9419.49 | 9971.22 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56267.92 | 11622.63 | 63776.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33138.84 | 59516.11 | 61457.28 | 62120.62 | 62500.74 | 62748.44 | 63191.75 |
| **Latency** | 720µs    | 764µs    | 799µs    | 846µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30975.82 | 5394.23 | 33905.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30700.68 | 31724.82 | 32551.83 | 33009.98 | 33216.35 | 33318.35 | 33496.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51727.53 | 8727.04 | 57619.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38018.24 | 53752.67 | 54809.94 | 55731.84 | 56535.76 | 56810.87 | 57187.60 |
| **Latency** | 826µs    | 862µs    | 900µs    | 937µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55704.53 | 11963.61 | 63612.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29702.49 | 58823.55 | 61012.22 | 61804.34 | 62327.52 | 62536.92 | 62956.68 |
| **Latency** | 731µs    | 774µs    | 805µs    | 847µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37967.36 | 8613.42 | 58320.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25197.78 | 35191.46 | 41982.24 | 43222.51 | 43805.29 | 44132.03 | 44869.63 |
| **Latency** | 909µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60475.75 | 16413.19 | 77237.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35575.10 | 38482.83 | 70321.86 | 73725.15 | 74838.99 | 75241.46 | 75986.99 |
| **Latency** | 507µs    | 587µs    | 745µs    | 800µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24465.12 | 4264.10 | 30126.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22003.98 | 23798.50 | 25619.50 | 26785.97 | 27195.40 | 27728.80 | 29087.50 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50976.05 | 8642.66 | 56836.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35665.68 | 53200.10 | 54209.92 | 54838.64 | 55530.65 | 55911.83 | 56423.81 |
| **Latency** | 839µs    | 875µs    | 911µs    | 949µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56117.46 | 12030.81 | 64318.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29413.90 | 59499.40 | 61598.10 | 62326.34 | 62873.03 | 63154.23 | 63582.78 |
| **Latency** | 718µs    | 759µs    | 799µs    | 848µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35311.10 | 5490.61 | 39035.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35181.33 | 36004.77 | 36537.36 | 37331.07 | 37591.06 | 37716.68 | 37938.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21635.03 | 4346.30 | 27520.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18226.29 | 20723.10 | 23296.58 | 23852.17 | 24324.15 | 25219.06 | 26729.27 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9619.79  | 3065.37 | 85486.03 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7002.65 | 9085.42 | 9969.90 | 10303.11 | 11286.59 | 12759.15 | 14389.64 |
| **Latency** | 4ms     | 4ms     | 4ms     | 5ms      | 5ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33635.23 | 7625.60 | 72367.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24911.00 | 31320.17 | 36980.67 | 38159.55 | 38710.44 | 39101.76 | 40062.39 |
| **Latency** | 995µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44726.29 | 6016.90 | 48457.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43326.72 | 45682.12 | 46398.41 | 47142.27 | 47609.36 | 47812.89 | 48090.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27529.36 | 4867.06 | 33970.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24035.46 | 25914.15 | 29373.07 | 30099.56 | 30712.39 | 31368.26 | 32356.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5866.16  | 1825.37 | 8707.36 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4122.69 | 4628.05 | 6603.90 | 7074.79 | 7301.10 | 8222.37 | 8470.83 |
| **Latency** | 7ms     | 7ms     | 7ms     | 10ms    | 10ms    | 14ms    | 19ms    |

---

<p align="center">Generated 2023-06-02T02:00:52.551Z</p>
