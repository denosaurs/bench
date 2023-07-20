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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Vixeny (Deno)                                                                        | 70426.54 | 16144.94 | 80234.65  | 100%     |
| Hyper Express                                                                        | 69140.37 | 17400.54 | 84471.84  | 98%      |
| NHttp                                                                                | 68640.25 | 16379.52 | 78613.82  | 97%      |
| Stric                                                                                | 68067.51 | 11812.58 | 89293.92  | 97%      |
| Fast                                                                                 | 67264.06 | 16540.68 | 77650.53  | 96%      |
| Deno                                                                                 | 66958.49 | 19230.60 | 81474.59  | 95%      |
| Bun                                                                                  | 66490.57 | 13078.29 | 85850.80  | 94%      |
| Hono                                                                                 | 66322.35 | 16275.37 | 77408.99  | 94%      |
| Deso                                                                                 | 61724.99 | 14981.61 | 71995.90  | 88%      |
| Fastro                                                                               | 60550.31 | 16760.00 | 72141.37  | 86%      |
| Reno                                                                                 | 54603.11 | 8228.12  | 59124.03  | 78%      |
| Cheetah                                                                              | 49664.80 | 5863.08  | 52398.95  | 71%      |
| http                                                                                 | 41162.73 | 9227.44  | 48917.56  | 58%      |
| Node                                                                                 | 41119.94 | 6399.94  | 44638.46  | 58%      |
| Fastify                                                                              | 36483.82 | 6820.14  | 39555.85  | 52%      |
| Peko                                                                                 | 36005.75 | 7372.62  | 46675.56  | 51%      |
| Alosaur                                                                              | 30402.58 | 7997.03  | 66287.88  | 43%      |
| Router                                                                               | 28546.08 | 4901.02  | 33852.75  | 41%      |
| Little                                                                               | 24807.51 | 4522.27  | 29910.02  | 35%      |
| Oak                                                                                  | 23654.95 | 4120.10  | 28874.94  | 34%      |
| Aqua                                                                                 | 23495.31 | 3451.31  | 31181.22  | 33%      |
| Dinatra                                                                              | 22498.17 | 4550.72  | 29511.02  | 32%      |
| Abc                                                                                  | 19838.47 | 4561.03  | 25746.07  | 28%      |
| Danet (Oak)                                                                          | 17732.70 | 5669.70  | 153061.22 | 25%      |
| Express (Deno)                                                                       | 10733.87 | 2119.41  | 15435.42  | 15%      |
| Opine                                                                                | 10628.57 | 2060.72  | 40641.71  | 15%      |
| Express                                                                              | 8038.15  | 1438.54  | 11264.83  | 11%      |
| Servest                                                                              | 6831.07  | 2152.21  | 10414.18  | 10%      |
| Acorn                                                                                | 5070.91  | 8608.66  | 149253.73 | 7%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-ba44dc36-7b15-4879-a6ef-22337fbd3792) |          |          |           |          |

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
| 19838.47 | 4561.03 | 25746.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11465.79 | 20161.69 | 20919.86 | 22142.32 | 23996.49 | 24232.75 | 24628.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5070.91  | 8608.66 | 149253.73 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 59.39 | 92.25 | 3961.97 | 7296.80 | 9484.76 | 10755.84 | 21185.34 |
| **Latency** | 5ms   | 7ms   | 14ms    | 22ms    | 26ms    | 28ms     | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30402.58 | 7997.03 | 66287.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17521.92 | 28462.27 | 34408.91 | 35274.49 | 35819.39 | 36371.90 | 37619.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23495.31 | 3451.31 | 31181.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22040.14 | 22917.89 | 24425.20 | 25155.00 | 25602.12 | 26109.44 | 27357.24 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66490.57 | 13078.29 | 85850.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50211.56 | 54438.32 | 67808.29 | 79146.24 | 80821.15 | 81726.74 | 83377.88 |
| **Latency** | 455µs    | 569µs    | 688µs    | 873µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49664.80 | 5863.08 | 52398.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49237.43 | 50259.91 | 50911.31 | 51389.69 | 51822.97 | 51978.08 | 52210.55 |
| **Latency** | 902µs    | 930µs    | 973µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 17732.70 | 5669.70 | 153061.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13507.59 | 17455.02 | 18837.52 | 19447.84 | 19813.85 | 20345.21 | 22158.92 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66958.49 | 19230.60 | 81474.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30741.18 | 58924.91 | 77905.86 | 79134.22 | 79897.28 | 80211.42 | 80779.52 |
| **Latency** | 501µs    | 550µs    | 671µs    | 712µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61724.99 | 14981.61 | 71995.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29100.45 | 66033.15 | 69125.94 | 69742.42 | 70431.84 | 70706.20 | 71104.67 |
| **Latency** | 636µs    | 681µs    | 715µs    | 757µs    | 914µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22498.17 | 4550.72 | 29511.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20279.06 | 21211.87 | 23322.44 | 25315.99 | 25859.09 | 26438.65 | 28674.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8038.15  | 1438.54 | 11264.83 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5837.14 | 8054.95 | 8721.03 | 8817.65 | 8888.28 | 8913.41 | 8961.86 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 12ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10733.87 | 2119.41 | 15435.42 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8416.55 | 10520.36 | 11570.81 | 11767.63 | 11853.22 | 11903.24 | 13175.53 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 6ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67264.06 | 16540.68 | 77650.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30740.33 | 70983.90 | 75472.62 | 76276.19 | 76613.18 | 76829.63 | 77243.41 |
| **Latency** | 588µs    | 626µs    | 659µs    | 698µs    | 832µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36483.82 | 6820.14 | 39555.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36532.95 | 37717.80 | 38384.13 | 38860.70 | 39141.96 | 39251.10 | 39421.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60550.31 | 16760.00 | 72141.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28742.37 | 55217.77 | 70370.13 | 71142.83 | 71430.84 | 71654.58 | 71931.77 |
| **Latency** | 637µs    | 683µs    | 713µs    | 740µs    | 825µs    | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66322.35 | 16275.37 | 77408.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29847.81 | 70882.35 | 74026.78 | 74906.12 | 75338.56 | 75525.52 | 76382.62 |
| **Latency** | 596µs    | 636µs    | 671µs    | 707µs    | 844µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41162.73 | 9227.44 | 48917.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27409.91 | 39900.88 | 45391.26 | 46442.41 | 46981.91 | 47252.35 | 47748.29 |
| **Latency** | 972µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69140.37 | 17400.54 | 84471.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41929.01 | 46286.55 | 80560.58 | 82034.61 | 82783.93 | 83256.11 | 83970.23 |
| **Latency** | 459µs    | 522µs    | 669µs    | 700µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24807.51 | 4522.27 | 29910.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18563.32 | 24805.50 | 26118.98 | 27317.88 | 27752.04 | 28223.34 | 28857.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68640.25 | 16379.52 | 78613.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31161.25 | 73140.37 | 76375.00 | 77121.23 | 77524.98 | 77748.16 | 78118.05 |
| **Latency** | 583µs    | 616µs    | 652µs    | 692µs    | 794µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41119.94 | 6399.94 | 44638.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40729.39 | 41963.85 | 42610.30 | 43109.56 | 43510.95 | 43750.83 | 44222.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23654.95 | 4120.10 | 28874.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22001.14 | 23361.90 | 24811.95 | 25537.83 | 26077.23 | 26571.95 | 27655.31 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10628.57 | 2060.72 | 40641.71 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9205.91 | 10529.18 | 11099.69 | 11331.89 | 11514.89 | 12047.71 | 14088.96 |
| **Latency** | 3ms     | 4ms      | 4ms      | 5ms      | 5ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36005.75 | 7372.62 | 46675.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27150.73 | 35243.15 | 38840.21 | 40057.76 | 40621.88 | 41000.90 | 41723.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54603.11 | 8228.12 | 59124.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49038.91 | 56510.84 | 57220.41 | 57806.47 | 58363.13 | 58531.57 | 58750.39 |
| **Latency** | 777µs    | 841µs    | 878µs    | 903µs    | 977µs    | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28546.08 | 4901.02 | 33852.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25960.02 | 27934.74 | 30107.28 | 30987.75 | 31557.19 | 32076.45 | 33110.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68067.51 | 11812.58 | 89293.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52900.91 | 56123.63 | 72735.04 | 79237.38 | 80721.13 | 81495.17 | 82940.80 |
| **Latency** | 451µs    | 563µs    | 686µs    | 824µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6831.07  | 2152.21 | 10414.18 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5063.57 | 5785.37 | 7649.12 | 8180.76 | 8701.72 | 8841.96 | 9990.03 |
| **Latency** | 4ms     | 5ms     | 7ms     | 9ms     | 10ms    | 13ms    | 18ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 70426.54 | 16144.94 | 80234.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31321.01 | 75115.43 | 77517.18 | 78411.75 | 78949.62 | 79203.50 | 79655.84 |
| **Latency** | 558µs    | 598µs    | 639µs    | 689µs    | 752µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-07-20T01:46:19.431Z</p>
