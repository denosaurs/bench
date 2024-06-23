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
| Hyper Express                                                                        | 81258.78 | 16256.57 | 124603.43 | 100%     |
| Bun                                                                                  | 78740.74 | 9779.57  | 101484.31 | 97%      |
| Stric                                                                                | 77377.85 | 9803.92  | 100694.84 | 95%      |
| Elysia                                                                               | 76178.29 | 13396.72 | 100731.17 | 94%      |
| Vixeny (Bun)                                                                         | 72971.95 | 13678.41 | 101459.92 | 90%      |
| Deno                                                                                 | 66108.32 | 12712.71 | 92905.16  | 81%      |
| NHttp                                                                                | 56513.74 | 9668.79  | 85522.43  | 70%      |
| Vixeny (Deno)                                                                        | 55574.94 | 8669.58  | 85167.75  | 68%      |
| Hono                                                                                 | 51530.68 | 5565.49  | 81210.31  | 63%      |
| Fastro                                                                               | 50959.17 | 3897.91  | 81147.93  | 63%      |
| Fast                                                                                 | 50957.07 | 3846.64  | 78813.79  | 63%      |
| Deso                                                                                 | 48952.53 | 3936.18  | 65312.45  | 60%      |
| Megalo                                                                               | 48081.65 | 3033.01  | 63527.56  | 59%      |
| Alosaur                                                                              | 45262.63 | 3154.46  | 58798.83  | 56%      |
| http                                                                                 | 43909.46 | 3448.04  | 50533.41  | 54%      |
| Router                                                                               | 42401.86 | 3143.54  | 46874.17  | 52%      |
| Cheetah                                                                              | 41958.44 | 2339.99  | 51757.42  | 52%      |
| Reno                                                                                 | 40532.67 | 2108.04  | 49502.54  | 50%      |
| Danet V2 (Hono)                                                                      | 36214.96 | 2116.25  | 38324.08  | 45%      |
| Danet (Oak)                                                                          | 34268.29 | 2222.52  | 35955.76  | 42%      |
| Aqua                                                                                 | 34112.21 | 2881.69  | 38923.57  | 42%      |
| Little                                                                               | 33812.93 | 3670.75  | 39529.16  | 42%      |
| Oak                                                                                  | 31898.43 | 2673.62  | 35219.77  | 39%      |
| Acorn                                                                                | 30105.98 | 3078.78  | 42363.88  | 37%      |
| Dinatra                                                                              | 18546.31 | 1979.63  | 22045.90  | 23%      |
| Node                                                                                 | 17479.50 | 1536.73  | 28112.27  | 22%      |
| Fastify                                                                              | 17205.36 | 1878.69  | 21148.30  | 21%      |
| Opine                                                                                | 15185.43 | 2158.16  | 23141.57  | 19%      |
| Express (Deno)                                                                       | 14654.59 | 2142.79  | 16471.53  | 18%      |
| Abc                                                                                  | 14428.94 | 1337.63  | 16270.41  | 18%      |
| Servest                                                                              | 6571.65  | 1343.75  | 11193.77  | 8%       |
| Express                                                                              | 6281.86  | 983.20   | 7993.20   | 8%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-0aabf768-b47a-40ae-a842-d344d4c4a0aa) |          |          |           |          |

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
| 14428.94 | 1337.63 | 16270.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13043.15 | 13926.99 | 14561.48 | 15400.70 | 15656.13 | 15789.51 | 16016.14 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30105.98 | 3078.78 | 42363.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26302.31 | 29068.40 | 30969.52 | 31436.34 | 31976.01 | 32248.97 | 40009.08 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45262.63 | 3154.46 | 58798.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43314.31 | 44335.63 | 45335.09 | 46125.18 | 47543.62 | 49045.03 | 53622.65 |
| **Latency** | 966µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34112.21 | 2881.69 | 38923.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32228.20 | 33315.64 | 34618.26 | 35567.32 | 36356.30 | 36842.00 | 37925.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 78740.74 | 9779.57 | 101484.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66352.41 | 70740.19 | 78114.57 | 85987.72 | 92908.26 | 95752.26 | 99055.00 |
| **Latency** | 376µs    | 468µs    | 594µs    | 755µs    | 949µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41958.44 | 2339.99 | 51757.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40281.83 | 41571.06 | 42186.84 | 42820.09 | 43523.06 | 44300.39 | 46008.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34268.29 | 2222.52 | 35955.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33751.18 | 34295.09 | 34566.05 | 34901.61 | 35274.56 | 35401.71 | 35670.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36214.96 | 2116.25 | 38324.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35647.74 | 36224.43 | 36560.36 | 36819.73 | 37131.18 | 37345.57 | 37630.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66108.32 | 12712.71 | 92905.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53813.02 | 55319.11 | 60328.21 | 76941.06 | 85400.84 | 88226.76 | 92054.36 |
| **Latency** | 503µs    | 563µs    | 783µs    | 919µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48952.53 | 3936.18 | 65312.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45801.14 | 46642.08 | 47987.22 | 51152.69 | 54161.51 | 55938.37 | 59368.12 |
| **Latency** | 775µs    | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18546.31 | 1979.63 | 22045.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16835.89 | 17750.93 | 18931.82 | 19797.38 | 20326.08 | 20603.27 | 21271.79 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 76178.29 | 13396.72 | 100731.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58289.35 | 63214.29 | 76800.21 | 88404.36 | 93828.63 | 95540.41 | 98046.14 |
| **Latency** | 384µs    | 473µs    | 597µs    | 803µs    | 975µs    | 1ms      | 1ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6281.86  | 983.20 | 7993.20 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4950.63 | 5914.77 | 6357.57 | 6722.97 | 7719.34 | 7871.03 | 7924.72 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14654.59 | 2142.79 | 16471.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13004.87 | 14788.81 | 15474.24 | 15690.74 | 15791.73 | 15851.65 | 16098.70 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50957.07 | 3846.64 | 78813.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48843.71 | 49705.46 | 50532.14 | 51224.92 | 52450.28 | 55574.09 | 69907.29 |
| **Latency** | 849µs    | 914µs    | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17205.36 | 1878.69 | 21148.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15761.20 | 16565.04 | 17828.20 | 18201.10 | 18417.34 | 18540.51 | 18800.10 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50959.17 | 3897.91 | 81147.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48801.34 | 49610.92 | 50516.79 | 51321.41 | 52662.91 | 57295.40 | 67115.48 |
| **Latency** | 848µs    | 915µs    | 993µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51530.68 | 5565.49 | 81210.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48411.43 | 49337.40 | 50040.44 | 51206.16 | 57837.44 | 64640.72 | 72439.90 |
| **Latency** | 776µs    | 908µs    | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43909.46 | 3448.04 | 50533.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41201.34 | 42953.33 | 44617.57 | 45700.37 | 46624.15 | 47093.14 | 48361.57 |
| **Latency** | 853µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 81258.78 | 16256.57 | 124603.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 56270.06 | 63813.00 | 87458.31 | 95332.66 | 98293.37 | 98986.41 | 100077.42 |
| **Latency** | 364µs    | 456µs    | 564µs    | 717µs    | 942µs    | 1ms      | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33812.93 | 3670.75 | 39529.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32120.19 | 33462.15 | 34565.07 | 35545.80 | 36322.21 | 36902.45 | 37663.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48081.65 | 3033.01 | 63527.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46060.13 | 46946.86 | 47750.16 | 48774.12 | 51036.29 | 53504.44 | 56838.74 |
| **Latency** | 906µs    | 968µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56513.74 | 9668.79 | 85522.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49530.03 | 50429.51 | 51649.98 | 61025.56 | 73101.62 | 77964.06 | 83195.02 |
| **Latency** | 578µs    | 713µs    | 931µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17479.50 | 1536.73 | 28112.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17133.67 | 17435.28 | 17701.75 | 17918.10 | 18173.94 | 18348.36 | 18865.26 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31898.43 | 2673.62 | 35219.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31422.96 | 32112.38 | 32388.28 | 32677.57 | 33043.01 | 33203.95 | 33623.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15185.43 | 2158.16 | 23141.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13102.92 | 15004.85 | 15582.38 | 16086.75 | 16525.07 | 17540.61 | 19557.23 |
| **Latency** | 1ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      |

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
| 40532.67 | 2108.04 | 49502.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38629.39 | 40031.85 | 40970.50 | 41567.48 | 42000.24 | 42201.83 | 42929.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42401.86 | 3143.54 | 46874.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40308.91 | 41406.42 | 43032.33 | 43991.56 | 44809.52 | 45329.43 | 46387.87 |
| **Latency** | 875µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 77377.85 | 9803.92 | 100694.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65707.58 | 69460.61 | 75843.70 | 84939.65 | 91767.27 | 94239.84 | 98637.68 |
| **Latency** | 381µs    | 475µs    | 604µs    | 767µs    | 968µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6571.65  | 1343.75 | 11193.77 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5239.53 | 5845.15 | 6632.46 | 7134.05 | 8157.55 | 8852.18 | 9819.07 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 9ms     | 9ms     | 13ms    |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 72971.95 | 13678.41 | 101459.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56410.63 | 59815.95 | 72029.85 | 85622.19 | 92195.18 | 94607.98 | 97835.40 |
| **Latency** | 392µs    | 484µs    | 624µs    | 850µs    | 1ms      | 1ms      | 1ms      |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55574.94 | 8669.58 | 85167.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49787.85 | 50745.15 | 51764.29 | 57126.91 | 69921.30 | 76015.45 | 83190.13 |
| **Latency** | 589µs    | 815µs    | 940µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-06-23T01:44:54.350Z</p>
