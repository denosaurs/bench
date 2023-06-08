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
| Deno                                                                                 | 67961.19 | 15835.90 | 78741.05  | 100%     |
| Bun                                                                                  | 65355.56 | 12537.73 | 83805.67  | 96%      |
| Hyper Express                                                                        | 64015.08 | 17526.38 | 85085.23  | 94%      |
| NHttp                                                                                | 61568.89 | 13125.10 | 71173.01  | 91%      |
| Fast                                                                                 | 60233.52 | 11493.43 | 67514.95  | 89%      |
| Hono                                                                                 | 59732.38 | 11962.88 | 68075.86  | 88%      |
| Fastro                                                                               | 58283.37 | 8803.73  | 64447.10  | 86%      |
| Deso                                                                                 | 57921.01 | 10616.49 | 64926.67  | 85%      |
| Megalo                                                                               | 56065.66 | 9498.62  | 61507.13  | 82%      |
| Reno                                                                                 | 48683.68 | 5909.99  | 52039.95  | 72%      |
| http                                                                                 | 41020.79 | 9161.91  | 49201.07  | 60%      |
| Node                                                                                 | 40228.76 | 5940.47  | 43436.02  | 59%      |
| Cheetah                                                                              | 39163.77 | 6640.99  | 43722.35  | 58%      |
| Peko                                                                                 | 36965.51 | 7827.28  | 46746.03  | 54%      |
| Fastify                                                                              | 36542.22 | 6468.28  | 39807.62  | 54%      |
| Alosaur                                                                              | 31961.01 | 7943.63  | 42176.04  | 47%      |
| Router                                                                               | 28920.73 | 5273.95  | 35069.04  | 43%      |
| Little                                                                               | 24985.88 | 4869.64  | 32293.90  | 37%      |
| Aqua                                                                                 | 22910.97 | 4153.54  | 35396.51  | 34%      |
| Dinatra                                                                              | 20882.52 | 4301.05  | 44083.24  | 31%      |
| Abc                                                                                  | 18724.53 | 2660.88  | 24407.51  | 28%      |
| Opine                                                                                | 10107.94 | 2188.56  | 19796.16  | 15%      |
| Express (Deno)                                                                       | 9697.84  | 1846.16  | 14295.07  | 14%      |
| Express                                                                              | 7808.16  | 1512.45  | 10372.15  | 11%      |
| Acorn                                                                                | 7103.57  | 9989.86  | 136986.30 | 10%      |
| Servest                                                                              | 6501.28  | 1948.05  | 9756.21   | 10%      |
| Oak                                                                                  | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-10edd773-b897-4893-942e-2665d453b8e6) |          |          |           |          |

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
| 18724.53 | 2660.88 | 24407.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16037.71 | 16925.24 | 19714.41 | 20438.84 | 20902.32 | 21596.14 | 22305.26 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 7103.57  | 9989.86 | 136986.30 |     |

| **Stat**    | 10    | 25    | 50      | 75       | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51.34 | 71.51 | 4902.21 | 10150.33 | 16435.12 | 19318.66 | 64412.98 |
| **Latency** | 5ms   | 6ms   | 15ms    | 21ms     | 24ms     | 30ms     | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31961.01 | 7943.63 | 42176.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18524.10 | 29817.32 | 35507.84 | 36784.48 | 37945.19 | 38401.84 | 39078.87 |
| **Latency** | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22910.97 | 4153.54 | 35396.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18634.11 | 22718.25 | 23825.51 | 25082.03 | 25731.59 | 26847.54 | 27779.56 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65355.56 | 12537.73 | 83805.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49443.07 | 53021.79 | 68727.55 | 77488.16 | 79255.57 | 80097.94 | 82218.98 |
| **Latency** | 461µs    | 579µs    | 697µs    | 882µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39163.77 | 6640.99 | 43722.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26617.36 | 40811.48 | 41551.43 | 42010.04 | 42222.38 | 42365.67 | 42655.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67961.19 | 15835.90 | 78741.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32000.20 | 71719.46 | 75554.50 | 76444.86 | 77028.60 | 77396.36 | 78092.25 |
| **Latency** | 587µs    | 620µs    | 657µs    | 701µs    | 809µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57921.01 | 10616.49 | 64926.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39122.90 | 60769.55 | 62236.80 | 62872.35 | 63417.20 | 63790.66 | 64305.53 |
| **Latency** | 732µs    | 767µs    | 795µs    | 828µs    | 970µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20882.52 | 4301.05 | 44083.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18733.93 | 19534.21 | 21256.78 | 23232.03 | 25007.73 | 25352.63 | 27220.51 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7808.16  | 1512.45 | 10372.15 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5474.66 | 7618.37 | 8578.68 | 8682.14 | 8743.64 | 8768.85 | 8814.96 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9697.84  | 1846.16 | 14295.07 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8008.10 | 9351.53 | 10489.78 | 10624.97 | 10695.65 | 10733.54 | 11420.56 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 5ms      | 6ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60233.52 | 11493.43 | 67514.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38106.53 | 63313.41 | 65083.43 | 65713.66 | 66145.07 | 66365.13 | 66773.20 |
| **Latency** | 703µs    | 736µs    | 761µs    | 790µs    | 940µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36542.22 | 6468.28 | 39807.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36112.69 | 37538.35 | 38231.19 | 38866.13 | 39122.12 | 39236.94 | 39428.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58283.37 | 8803.73 | 64447.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46132.36 | 60400.01 | 61305.61 | 61985.01 | 62839.60 | 63129.13 | 63440.69 |
| **Latency** | 744µs    | 780µs    | 808µs    | 836µs    | 984µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59732.38 | 11962.88 | 68075.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36375.35 | 63003.30 | 64905.99 | 65831.09 | 66377.81 | 66762.86 | 67442.45 |
| **Latency** | 701µs    | 733µs    | 760µs    | 793µs    | 945µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41020.79 | 9161.91 | 49201.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26194.85 | 39313.04 | 45518.42 | 46579.38 | 47097.68 | 47417.85 | 48191.62 |
| **Latency** | 843µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64015.08 | 17526.38 | 85085.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39423.72 | 41606.16 | 74320.91 | 79026.99 | 80147.07 | 80683.89 | 82506.68 |
| **Latency** | 473µs    | 559µs    | 690µs    | 826µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24985.88 | 4869.64 | 32293.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17834.63 | 24814.43 | 26511.71 | 27963.00 | 28438.36 | 29050.17 | 30182.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56065.66 | 9498.62 | 61507.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44171.46 | 58620.62 | 59429.82 | 59910.29 | 60313.37 | 60717.10 | 61211.73 |
| **Latency** | 769µs    | 805µs    | 835µs    | 868µs    | 991µs    | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61568.89 | 13125.10 | 71173.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32110.95 | 64988.44 | 67800.06 | 68402.80 | 68776.54 | 69040.91 | 69504.41 |
| **Latency** | 660µs    | 700µs    | 731µs    | 768µs    | 926µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40228.76 | 5940.47 | 43436.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39565.33 | 40963.13 | 41555.74 | 42292.25 | 42632.88 | 42827.47 | 43196.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10107.94 | 2188.56 | 19796.16 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7469.95 | 9775.80 | 10536.19 | 10949.33 | 11561.53 | 13617.45 | 15271.01 |
| **Latency** | 2ms     | 4ms     | 5ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36965.51 | 7827.28 | 46746.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29447.28 | 35618.55 | 39813.33 | 41403.06 | 42019.02 | 42684.29 | 43521.49 |
| **Latency** | 922µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48683.68 | 5909.99 | 52039.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48389.41 | 49432.08 | 50048.09 | 50714.61 | 51174.04 | 51432.96 | 51733.20 |
| **Latency** | 930µs    | 956µs    | 989µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28920.73 | 5273.95 | 35069.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23841.41 | 28195.03 | 30620.86 | 31889.81 | 32552.38 | 33211.05 | 34214.29 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6501.28  | 1948.05 | 9756.21 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5162.89 | 5486.81 | 7023.82 | 7857.38 | 8226.28 | 8282.18 | 9469.79 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 9ms     | 13ms    | 17ms    |

---

<p align="center">Generated 2023-06-08T02:01:51.095Z</p>
