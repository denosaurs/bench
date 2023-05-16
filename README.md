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
| Deno                                                                                 | 59143.52 | 14684.50 | 79183.47  | 100%     |
| Bun                                                                                  | 53843.45 | 9478.50  | 73282.86  | 91%      |
| Hyper Express                                                                        | 52628.52 | 14513.51 | 68223.43  | 89%      |
| NHttp                                                                                | 50929.54 | 11015.19 | 63763.68  | 86%      |
| Fast                                                                                 | 49638.09 | 12062.80 | 58707.65  | 84%      |
| Hono                                                                                 | 49486.94 | 11416.90 | 58946.19  | 84%      |
| Fastro                                                                               | 49350.88 | 11139.46 | 58357.96  | 83%      |
| Megalo                                                                               | 46441.64 | 9688.19  | 53642.02  | 79%      |
| Deso                                                                                 | 45377.54 | 12852.64 | 61623.61  | 77%      |
| Reno                                                                                 | 39979.83 | 5199.65  | 43669.60  | 68%      |
| Cheetah                                                                              | 32910.97 | 4508.28  | 42081.96  | 56%      |
| http                                                                                 | 32897.72 | 8093.01  | 48094.13  | 56%      |
| Peko                                                                                 | 30769.27 | 6668.58  | 82641.21  | 52%      |
| Node                                                                                 | 29726.30 | 5034.54  | 32777.49  | 50%      |
| Alosaur                                                                              | 27310.53 | 5604.55  | 33002.13  | 46%      |
| Fastify                                                                              | 26072.07 | 5606.35  | 31045.13  | 44%      |
| Router                                                                               | 23506.69 | 5780.00  | 129023.93 | 40%      |
| Little                                                                               | 20333.91 | 3899.80  | 41376.46  | 34%      |
| Aqua                                                                                 | 19799.80 | 3403.97  | 24707.70  | 33%      |
| Oak                                                                                  | 18505.58 | 4305.19  | 83699.75  | 31%      |
| Dinatra                                                                              | 16349.44 | 3710.62  | 35860.35  | 28%      |
| Abc                                                                                  | 14583.43 | 2397.77  | 19638.38  | 25%      |
| Opine                                                                                | 8022.84  | 1410.23  | 10888.97  | 14%      |
| Express (Deno)                                                                       | 7117.58  | 2399.82  | 68665.40  | 12%      |
| Acorn                                                                                | 5439.38  | 11255.11 | 108687.78 | 9%       |
| Express                                                                              | 5380.98  | 1383.43  | 9227.75   | 9%       |
| Servest                                                                              | 4941.39  | 1455.74  | 7382.86   | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-93f6fa9d-f805-4d45-99af-8f8f67060955) |          |          |           |          |

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
| 14583.43 | 2397.77 | 19638.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12311.26 | 13216.05 | 15695.78 | 16227.99 | 16513.40 | 16722.82 | 17311.58 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 5439.38  | 11255.11 | 108687.78 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 93.37 | 1913.94 | 2624.09 | 3903.86 | 7715.36 | 28913.64 | 61145.38 |
| **Latency** | 6ms   | 8ms     | 18ms    | 24ms    | 29ms    | 30ms     | 34ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27310.53 | 5604.55 | 33002.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23127.03 | 25201.48 | 29562.24 | 30313.86 | 30927.97 | 31287.34 | 31884.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19799.80 | 3403.97 | 24707.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18265.27 | 19007.85 | 20701.31 | 21352.92 | 21998.41 | 22357.95 | 23777.63 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53843.45 | 9478.50 | 73282.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42836.97 | 47121.79 | 52078.81 | 62828.42 | 65971.45 | 66890.76 | 69509.20 |
| **Latency** | 558µs    | 706µs    | 850µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32910.97 | 4508.28 | 42081.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31422.77 | 33413.15 | 34101.39 | 34618.11 | 35217.03 | 35528.55 | 36195.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59143.52 | 14684.50 | 79183.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27113.12 | 59744.45 | 64939.23 | 67463.93 | 70221.26 | 72434.06 | 75991.43 |
| **Latency** | 605µs    | 687µs    | 758µs    | 829µs    | 971µs    | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45377.54 | 12852.64 | 61623.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22566.57 | 38390.34 | 52012.91 | 53519.43 | 55011.72 | 55914.80 | 58667.98 |
| **Latency** | 851µs    | 892µs    | 936µs    | 1ms      | 2ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16349.44 | 3710.62 | 35860.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12309.02 | 15178.25 | 16639.82 | 18578.65 | 19954.27 | 20398.07 | 21192.78 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5380.98  | 1383.43 | 9227.75 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3576.48 | 3883.47 | 6156.62 | 6336.20 | 6412.91 | 6452.94 | 6623.14 |
| **Latency** | 7ms     | 7ms     | 8ms     | 9ms     | 13ms    | 14ms    | 18ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7117.58  | 2399.82 | 68665.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5115.59 | 6654.32 | 7573.78 | 7859.70 | 8188.79 | 8587.62 | 8905.03 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 8ms     | 10ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49638.09 | 12062.80 | 58707.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23563.47 | 49757.40 | 55819.73 | 56792.16 | 57338.62 | 57545.94 | 58129.26 |
| **Latency** | 812µs    | 846µs    | 873µs    | 923µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26072.07 | 5606.35 | 31045.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20724.53 | 26936.46 | 28044.69 | 28474.70 | 28819.11 | 29114.53 | 30005.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49350.88 | 11139.46 | 58357.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25156.08 | 51685.97 | 54313.21 | 55238.84 | 56004.10 | 56326.65 | 57052.11 |
| **Latency** | 830µs    | 874µs    | 898µs    | 934µs    | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49486.94 | 11416.90 | 58946.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23596.84 | 51940.70 | 54843.52 | 55628.58 | 56136.13 | 56443.10 | 57183.13 |
| **Latency** | 823µs    | 855µs    | 888µs    | 947µs    | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32897.72 | 8093.01 | 48094.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22327.32 | 29760.22 | 36821.46 | 38056.26 | 38503.56 | 38738.48 | 39200.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52628.52 | 14513.51 | 68223.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30917.78 | 35720.19 | 60623.24 | 64816.95 | 65809.69 | 66520.15 | 67480.60 |
| **Latency** | 584µs    | 674µs    | 846µs    | 929µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20333.91 | 3899.80 | 41376.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17511.46 | 19314.97 | 21852.14 | 22378.65 | 22815.37 | 23110.02 | 23864.78 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46441.64 | 9688.19 | 53642.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26644.06 | 48448.23 | 50705.75 | 51353.60 | 52151.96 | 52512.35 | 53033.59 |
| **Latency** | 901µs    | 934µs    | 965µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50929.54 | 11015.19 | 63763.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26161.35 | 53984.41 | 55777.17 | 56464.01 | 56989.16 | 57316.25 | 57818.70 |
| **Latency** | 820µs    | 851µs    | 876µs    | 913µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29726.30 | 5034.54 | 32777.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29039.31 | 30295.25 | 30897.14 | 31694.90 | 32015.18 | 32126.15 | 32519.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18505.58 | 4305.19 | 83699.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15625.48 | 17356.66 | 20031.49 | 20462.63 | 20854.53 | 21284.72 | 22016.08 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8022.84  | 1410.23 | 10888.97 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6413.55 | 7799.37 | 8503.07 | 8765.75 | 8950.03 | 9065.00 | 9806.91 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 6ms     | 8ms     | 13ms    |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30769.27 | 6668.58 | 82641.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25627.20 | 28213.08 | 33311.78 | 34123.67 | 34714.71 | 34948.61 | 35518.05 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39979.83 | 5199.65 | 43669.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37312.83 | 40645.66 | 41354.17 | 42114.06 | 42428.58 | 42653.97 | 42986.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 23506.69 | 5780.00 | 129023.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19979.11 | 21913.19 | 25384.89 | 25901.25 | 26419.00 | 26860.45 | 27811.26 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4941.39  | 1455.74 | 7382.86 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3303.81 | 4216.76 | 5495.26 | 5866.20 | 6042.20 | 6154.57 | 7003.30 |
| **Latency** | 8ms     | 8ms     | 8ms     | 11ms    | 13ms    | 18ms    | 23ms    |

---

<p align="center">Generated 2023-05-16T01:44:52.549Z</p>
