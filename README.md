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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Bun                                                                                  | 69091.08 | 11440.16 | 91141.54 | 100%     |
| Hyper Express                                                                        | 63321.39 | 18005.26 | 86602.12 | 92%      |
| Deno                                                                                 | 48181.11 | 10432.77 | 55071.33 | 70%      |
| NHttp                                                                                | 43956.03 | 8259.26  | 49545.41 | 64%      |
| http                                                                                 | 43516.22 | 7925.42  | 49305.06 | 63%      |
| Hono                                                                                 | 43383.81 | 7692.53  | 50421.23 | 63%      |
| Fast                                                                                 | 42183.92 | 8909.54  | 50341.61 | 61%      |
| Fastro                                                                               | 41695.10 | 8377.66  | 51236.48 | 60%      |
| Megalo                                                                               | 40855.13 | 8117.74  | 46914.07 | 59%      |
| Node                                                                                 | 39875.16 | 8236.53  | 44991.08 | 58%      |
| Deso                                                                                 | 39659.36 | 7331.58  | 45686.67 | 57%      |
| Peko                                                                                 | 38574.43 | 7360.73  | 48298.73 | 56%      |
| Reno                                                                                 | 35875.79 | 7755.80  | 42775.76 | 52%      |
| Alosaur                                                                              | 33424.25 | 5986.90  | 90451.81 | 48%      |
| Fastify                                                                              | 32327.02 | 9938.97  | 39427.39 | 47%      |
| Router                                                                               | 29826.87 | 4042.64  | 33122.74 | 43%      |
| Little                                                                               | 25732.94 | 3614.48  | 29595.02 | 37%      |
| Oak                                                                                  | 23728.99 | 4186.19  | 27903.93 | 34%      |
| Aqua                                                                                 | 23536.54 | 3297.11  | 26551.80 | 34%      |
| Dinatra                                                                              | 20794.14 | 3936.78  | 28412.30 | 30%      |
| Abc                                                                                  | 18520.87 | 2769.30  | 22046.64 | 27%      |
| Opine                                                                                | 9693.07  | 1276.32  | 14744.87 | 14%      |
| Express (Deno)                                                                       | 9288.61  | 1856.43  | 30009.10 | 13%      |
| Express                                                                              | 8129.53  | 1367.66  | 10526.50 | 12%      |
| Servest                                                                              | 6244.22  | 1622.13  | 9293.59  | 9%       |
| Acorn                                                                                | 4348.31  | 3763.89  | 89685.52 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-c1a4a750-4223-4e90-bc70-c39747fb2d81) |          |          |          |          |

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
| 18520.87 | 2769.30 | 22046.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16008.28 | 17553.06 | 19451.29 | 19763.78 | 21176.92 | 21563.71 | 21847.09 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4348.31  | 3763.89 | 89685.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2200.51 | 2710.44 | 3345.45 | 4735.36 | 9309.41 | 11214.06 | 13386.77 |
| **Latency** | 4ms     | 5ms     | 11ms    | 16ms    | 20ms    | 21ms     | 22ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33424.25 | 5986.90 | 90451.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26325.16 | 34176.13 | 35660.44 | 36055.19 | 36617.32 | 36965.98 | 37280.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23536.54 | 3297.11 | 26551.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21881.74 | 22491.22 | 24784.95 | 25005.61 | 25214.91 | 25839.93 | 26302.61 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69091.08 | 11440.16 | 91141.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54823.98 | 60228.03 | 68291.87 | 80103.63 | 81720.86 | 82666.85 | 85491.10 |
| **Latency** | 445µs    | 562µs    | 681µs    | 804µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48181.11 | 10432.77 | 55071.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33030.74 | 46404.89 | 53183.78 | 53708.34 | 54156.83 | 54383.83 | 54666.68 |
| **Latency** | 816µs    | 905µs    | 964µs    | 994µs    | 1ms      | 1ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39659.36 | 7331.58 | 45686.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34093.49 | 37014.99 | 42904.52 | 43607.80 | 44021.59 | 44249.84 | 44571.96 |
| **Latency** | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20794.14 | 3936.78 | 28412.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16920.54 | 19988.01 | 20833.82 | 23764.55 | 24542.80 | 24742.64 | 25415.08 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8129.53  | 1367.66 | 10526.50 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5968.63 | 8243.97 | 8767.30 | 8853.26 | 8897.57 | 8918.78 | 8945.76 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 12ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9288.61  | 1856.43 | 30009.10 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7535.19 | 8722.14 | 9996.83 | 10169.28 | 10244.46 | 10281.92 | 11529.28 |
| **Latency** | 3ms     | 5ms     | 5ms     | 5ms      | 6ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42183.92 | 8909.54 | 50341.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27743.13 | 40681.18 | 46331.55 | 46955.16 | 47439.42 | 47633.22 | 47933.46 |
| **Latency** | 920µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32327.02 | 9938.97 | 39427.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15532.68 | 32023.20 | 37665.32 | 38370.78 | 38675.96 | 38799.87 | 39129.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41695.10 | 8377.66 | 51236.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34749.83 | 42417.14 | 45205.07 | 45781.63 | 46107.63 | 46343.71 | 46908.63 |
| **Latency** | 939µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43383.81 | 7692.53 | 50421.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36734.14 | 42507.93 | 46624.57 | 47386.88 | 47762.66 | 47976.39 | 48330.19 |
| **Latency** | 910µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43516.22 | 7925.42 | 49305.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36021.06 | 43580.68 | 47010.54 | 47517.84 | 47810.11 | 47970.02 | 48325.14 |
| **Latency** | 907µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63321.39 | 18005.26 | 86602.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40577.28 | 42404.01 | 69925.49 | 80310.01 | 81630.91 | 82123.37 | 84134.88 |
| **Latency** | 469µs    | 566µs    | 679µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25732.94 | 3614.48 | 29595.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23828.22 | 25126.81 | 26813.71 | 27430.57 | 28043.30 | 28394.30 | 28712.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40855.13 | 8117.74 | 46914.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29498.07 | 38262.16 | 44528.26 | 45255.95 | 45649.00 | 45897.28 | 46205.70 |
| **Latency** | 949µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43956.03 | 8259.26 | 49545.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36179.25 | 43370.89 | 47562.53 | 48049.60 | 48547.33 | 48803.74 | 49102.23 |
| **Latency** | 898µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39875.16 | 8236.53 | 44991.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26828.02 | 41970.70 | 42712.09 | 43444.94 | 43960.86 | 44280.79 | 44638.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23728.99 | 4186.19 | 27903.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21364.59 | 23564.74 | 24965.82 | 25628.69 | 26377.28 | 26644.92 | 27006.63 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9693.07  | 1276.32 | 14744.87 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9208.80 | 9514.79 | 10107.68 | 10178.61 | 10226.36 | 10256.12 | 11080.01 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 5ms      | 6ms      | 9ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38574.43 | 7360.73 | 48298.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33213.10 | 37351.03 | 41765.34 | 42281.56 | 42534.22 | 42724.12 | 43039.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35875.79 | 7755.80 | 42775.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22447.44 | 32887.59 | 39687.96 | 40367.75 | 40734.36 | 40925.18 | 41387.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29826.87 | 4042.64 | 33122.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26508.85 | 29507.80 | 31440.33 | 31639.28 | 31810.84 | 31948.04 | 32483.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6244.22  | 1622.13 | 9293.59 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4225.29 | 6227.62 | 6802.14 | 7106.36 | 7470.13 | 7627.24 | 8851.81 |
| **Latency** | 6ms     | 7ms     | 7ms     | 7ms     | 10ms    | 11ms    | 19ms    |

---

<p align="center">Generated 2023-04-17T01:40:58.922Z</p>
