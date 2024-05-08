<div align="center">
  <h1><code>bench</code></h1>
  <p>
    <strong>📊 Daily benchmarks of deno & node & bun HTTP frameworks</strong>
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
  - [Danet V2 (Hono)](#danet-v2-hono)
  - [Deno](#deno)
  - [Deso](#deso)
  - [Dinatra](#dinatra)
  - [Elysia](#elysia)
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
  - [Vixeny (Bun)](#vixeny-bun)
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
    - [Danet V2 (Hono)](#danet-v2-hono-1)
    - [Deno](#deno-1)
    - [Deso](#deso-1)
    - [Dinatra](#dinatra-1)
    - [Elysia](#elysia-1)
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
    - [Vixeny (Bun)](#vixeny-bun-1)
    - [Vixeny (Deno)](#vixeny-deno-1)

# Overview

## Hello, bench!

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Hyper Express                                                                        | 78337.12 | 15691.83 | 99706.04  | 100%     |
| Bun                                                                                  | 77490.07 | 10249.36 | 101749.80 | 99%      |
| Vixeny (Bun)                                                                         | 76720.62 | 13780.20 | 99891.56  | 98%      |
| Elysia                                                                               | 76509.49 | 12561.19 | 100106.68 | 98%      |
| Stric                                                                                | 75152.47 | 9438.72  | 98607.42  | 96%      |
| Deno                                                                                 | 61663.48 | 11362.42 | 89652.20  | 79%      |
| Fast                                                                                 | 52331.99 | 7104.61  | 79504.78  | 67%      |
| Vixeny (Deno)                                                                        | 51234.09 | 5337.45  | 83646.10  | 65%      |
| NHttp                                                                                | 50511.53 | 4666.21  | 73804.97  | 64%      |
| Hono                                                                                 | 49787.55 | 4862.56  | 72867.89  | 64%      |
| Fastro                                                                               | 49489.38 | 3976.22  | 69856.93  | 63%      |
| Megalo                                                                               | 46284.44 | 3095.96  | 56300.52  | 59%      |
| Deso                                                                                 | 45462.39 | 2893.81  | 63698.25  | 58%      |
| Alosaur                                                                              | 44812.86 | 3027.35  | 52847.86  | 57%      |
| http                                                                                 | 43158.82 | 4962.36  | 51552.60  | 55%      |
| Cheetah                                                                              | 42347.94 | 2721.38  | 48203.81  | 54%      |
| Router                                                                               | 40536.92 | 4287.38  | 47687.48  | 52%      |
| Reno                                                                                 | 40063.60 | 2474.52  | 47920.35  | 51%      |
| Danet V2 (Hono)                                                                      | 35311.39 | 2452.38  | 39833.88  | 45%      |
| Aqua                                                                                 | 32919.94 | 3724.83  | 37556.27  | 42%      |
| Danet (Oak)                                                                          | 32560.18 | 2227.33  | 34871.17  | 42%      |
| Oak                                                                                  | 32533.40 | 3297.49  | 34833.51  | 42%      |
| Little                                                                               | 32238.78 | 4439.80  | 38409.58  | 41%      |
| Node                                                                                 | 17458.44 | 1600.51  | 24724.40  | 22%      |
| Dinatra                                                                              | 16855.76 | 2536.63  | 20726.79  | 22%      |
| Fastify                                                                              | 16291.09 | 1732.01  | 21819.16  | 21%      |
| Abc                                                                                  | 14712.25 | 1742.66  | 27313.15  | 19%      |
| Opine                                                                                | 14383.34 | 2788.16  | 19957.90  | 18%      |
| Express (Deno)                                                                       | 11721.62 | 2250.17  | 14166.69  | 15%      |
| Express                                                                              | 6277.34  | 1012.61  | 7919.24   | 8%       |
| Servest                                                                              | 6038.15  | 1594.03  | 10798.79  | 8%       |
| Acorn                                                                                | 3541.35  | 2428.77  | 15090.18  | 5%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-8517ff08-c6f1-45b3-ade0-6925aced91eb) |          |          |           |          |

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

## [Danet V2 (Hono)](https://danet.land/)

The most mature backend framework for Deno, V2 in Alpha

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Deso](https://github.com/gothammm/deso)

A simple & fast HTTP web framework for Deno

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

## [Elysia](https://elysiajs.com/)

Ergonomic Framework for Humans

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

## [Vixeny (Bun)](https://vixeny.dev/)

A pure functional web framework

## [Vixeny (Deno)](https://vixeny.dev/)

A pure functional web framework

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14712.25 | 1742.66 | 27313.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13148.63 | 14159.11 | 15016.49 | 15692.43 | 16128.79 | 16417.98 | 16986.55 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3541.35  | 2428.77 | 15090.18 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1810.14 | 2351.45 | 2835.06 | 3729.97 | 5036.59 | 9760.86 | 14461.75 |
| **Latency** | 3ms     | 8ms     | 14ms    | 18ms    | 22ms    | 25ms    | 27ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44812.86 | 3027.35 | 52847.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42662.62 | 43637.07 | 44663.60 | 45782.06 | 47680.83 | 50029.44 | 51669.73 |
| **Latency** | 966µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32919.94 | 3724.83 | 37556.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30700.43 | 32218.67 | 33635.87 | 34915.19 | 35558.53 | 36031.44 | 37054.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 77490.07 | 10249.36 | 101749.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64553.78 | 68677.68 | 76631.82 | 85571.33 | 92274.97 | 95122.87 | 98903.60 |
| **Latency** | 381µs    | 474µs    | 603µs    | 767µs    | 962µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42347.94 | 2721.38 | 48203.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40642.62 | 41946.88 | 42619.51 | 43441.57 | 44314.99 | 44998.42 | 45814.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32560.18 | 2227.33 | 34871.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32036.34 | 32399.62 | 32924.81 | 33284.37 | 33603.23 | 33758.72 | 34169.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35311.39 | 2452.38 | 39833.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34737.66 | 35321.10 | 35616.95 | 36014.70 | 36426.71 | 36616.88 | 37236.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61663.48 | 11362.42 | 89652.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51923.21 | 53181.18 | 55445.12 | 70519.18 | 80576.57 | 83857.27 | 87337.82 |
| **Latency** | 536µs    | 598µs    | 853µs    | 963µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45462.39 | 2893.81 | 63698.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43510.41 | 44317.98 | 45215.64 | 46327.75 | 48306.71 | 50063.59 | 53156.08 |
| **Latency** | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16855.76 | 2536.63 | 20726.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15045.12 | 15875.03 | 17420.64 | 18359.04 | 19113.83 | 19521.74 | 20131.29 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 76509.49 | 12561.19 | 100106.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57453.67 | 68781.33 | 78207.02 | 86927.73 | 92611.33 | 94948.39 | 98123.02 |
| **Latency** | 401µs    | 497µs    | 581µs    | 738µs    | 996µs    | 1ms      | 1ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6277.34  | 1012.61 | 7919.24 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4834.60 | 5979.71 | 6435.54 | 6663.94 | 7607.01 | 7726.46 | 7839.53 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 11ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11721.62 | 2250.17 | 14166.69 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7958.05 | 11652.72 | 12569.39 | 12886.43 | 13125.72 | 13561.00 | 13913.93 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 4ms      | 6ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52331.99 | 7104.61 | 79504.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47666.75 | 48724.55 | 49735.67 | 53098.89 | 62638.47 | 69218.83 | 75342.91 |
| **Latency** | 632µs    | 890µs    | 988µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16291.09 | 1732.01 | 21819.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15503.98 | 15989.69 | 16638.19 | 17050.87 | 17370.58 | 17534.51 | 18107.74 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49489.38 | 3976.22 | 69856.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46953.81 | 47823.74 | 48695.93 | 50039.48 | 54170.46 | 57323.55 | 62363.75 |
| **Latency** | 855µs    | 940µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49787.55 | 4862.56 | 72867.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46650.61 | 47577.06 | 48613.72 | 50319.56 | 55635.49 | 59972.22 | 66427.80 |
| **Latency** | 811µs    | 934µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43158.82 | 4962.36 | 51552.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39113.41 | 42410.28 | 44453.39 | 45713.35 | 46561.83 | 47371.01 | 49367.47 |
| **Latency** | 856µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 78337.12 | 15691.83 | 99706.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55742.31 | 62315.28 | 82819.89 | 92695.30 | 95779.80 | 97037.65 | 98334.12 |
| **Latency** | 372µs    | 465µs    | 581µs    | 766µs    | 969µs    | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32238.78 | 4439.80 | 38409.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29999.91 | 31975.70 | 33194.88 | 34352.79 | 35251.94 | 35755.44 | 36482.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46284.44 | 3095.96 | 56300.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44321.45 | 45288.53 | 46267.58 | 47302.89 | 49202.27 | 50559.72 | 53676.74 |
| **Latency** | 938µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50511.53 | 4666.21 | 73804.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47619.13 | 48431.59 | 49362.47 | 50598.19 | 56200.67 | 60002.94 | 68500.84 |
| **Latency** | 814µs    | 923µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17458.44 | 1600.51 | 24724.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16962.95 | 17327.33 | 17672.36 | 18006.30 | 18338.51 | 18524.99 | 19011.45 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32533.40 | 3297.49 | 34833.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32161.61 | 32605.15 | 33164.40 | 33544.40 | 34044.48 | 34215.47 | 34534.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14383.34 | 2788.16 | 19957.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11601.31 | 13816.31 | 14809.90 | 15711.65 | 17094.87 | 17987.12 | 19157.77 |
| **Latency** | 1ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Peko](#peko)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40063.60 | 2474.52 | 47920.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38212.29 | 39703.52 | 40508.80 | 41115.51 | 41860.27 | 42324.74 | 43619.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40536.92 | 4287.38 | 47687.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37321.65 | 39175.38 | 41729.71 | 42914.70 | 43766.17 | 44188.50 | 45109.86 |
| **Latency** | 895µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 75152.47 | 9438.72 | 98607.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63811.45 | 67345.21 | 73807.56 | 82351.66 | 89521.29 | 92626.29 | 95913.52 |
| **Latency** | 391µs    | 490µs    | 627µs    | 789µs    | 987µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6038.15  | 1594.03 | 10798.79 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4522.56 | 5623.24 | 6175.39 | 6808.08 | 7757.24 | 8151.71 | 9147.15 |
| **Latency** | 6ms     | 7ms     | 8ms     | 8ms     | 10ms    | 12ms    | 15ms    |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 76720.62 | 13780.20 | 99891.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57201.50 | 63756.64 | 78669.83 | 89246.98 | 93553.62 | 95957.32 | 98030.54 |
| **Latency** | 379µs    | 472µs    | 590µs    | 782µs    | 981µs    | 1ms      | 1ms      |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51234.09 | 5337.45 | 83646.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48207.25 | 49094.84 | 50008.95 | 51035.09 | 56347.26 | 62946.44 | 74115.62 |
| **Latency** | 808µs    | 910µs    | 995µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-05-08T01:15:37.960Z</p>
