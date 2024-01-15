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
    - [Vixeny (Deno)](#vixeny-deno-1)

# Overview

## Hello, bench!

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Hyper Express                                                                        | 82179.67 | 15624.65 | 101623.64 | 100%     |
| Stric                                                                                | 79946.28 | 9825.45  | 101664.29 | 97%      |
| Bun                                                                                  | 79107.15 | 10027.11 | 101623.83 | 96%      |
| Elysia                                                                               | 79035.69 | 13997.58 | 102708.94 | 96%      |
| Deno                                                                                 | 65306.14 | 11963.64 | 91010.14  | 79%      |
| NHttp                                                                                | 53631.97 | 6308.17  | 78514.08  | 65%      |
| Vixeny (Deno)                                                                        | 52639.11 | 5431.66  | 78463.34  | 64%      |
| Fast                                                                                 | 52388.51 | 6061.67  | 80105.13  | 64%      |
| Fastro                                                                               | 50098.82 | 4043.82  | 73660.45  | 61%      |
| Hono                                                                                 | 48827.13 | 3757.88  | 66457.87  | 59%      |
| Megalo                                                                               | 46834.56 | 2578.37  | 58036.52  | 57%      |
| Deso                                                                                 | 46733.82 | 3341.91  | 60715.12  | 57%      |
| http                                                                                 | 42565.59 | 4245.09  | 50101.90  | 52%      |
| Cheetah                                                                              | 42286.66 | 2564.95  | 51222.80  | 51%      |
| Reno                                                                                 | 40903.39 | 2270.80  | 48687.71  | 50%      |
| Router                                                                               | 38519.57 | 3838.69  | 46192.56  | 47%      |
| Alosaur                                                                              | 36262.43 | 4460.23  | 41814.56  | 44%      |
| Danet V2 (Hono)                                                                      | 35693.32 | 2512.32  | 38087.16  | 43%      |
| Danet (Oak)                                                                          | 30925.14 | 2170.69  | 33029.66  | 38%      |
| Aqua                                                                                 | 30795.81 | 3461.06  | 36103.99  | 37%      |
| Little                                                                               | 29934.99 | 3869.99  | 36148.36  | 36%      |
| Oak                                                                                  | 29353.88 | 4195.14  | 41558.29  | 36%      |
| Dinatra                                                                              | 17263.58 | 2274.42  | 21408.04  | 21%      |
| Node                                                                                 | 17007.22 | 1456.66  | 24934.12  | 21%      |
| Fastify                                                                              | 15657.65 | 1514.20  | 23129.38  | 19%      |
| Abc                                                                                  | 14694.20 | 1884.12  | 27931.85  | 18%      |
| Opine                                                                                | 13968.98 | 2596.97  | 40160.06  | 17%      |
| Express (Deno)                                                                       | 11574.24 | 2014.74  | 13790.98  | 14%      |
| Acorn                                                                                | 10933.84 | 19103.27 | 86197.79  | 13%      |
| Servest                                                                              | 6939.18  | 1652.96  | 10974.83  | 8%       |
| Express                                                                              | 6178.88  | 992.68   | 7987.77   | 8%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-96436f78-9507-4055-8229-354167aef430) |          |          |           |          |

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

## [Vixeny (Deno)](https://github.com/mimiMonads/functor)

A pure functional web framework

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14694.20 | 1884.12 | 27931.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13311.12 | 14129.84 | 14846.32 | 15406.95 | 15864.97 | 16260.46 | 21439.10 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 10933.84 | 19103.27 | 86197.79 |     |

| **Stat**    | 10    | 25    | 50      | 75       | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61.22 | 79.77 | 5244.61 | 11754.25 | 19282.70 | 72145.09 | 80897.64 |
| **Latency** | 4ms   | 6ms   | 14ms    | 19ms     | 24ms     | 26ms     | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36262.43 | 4460.23 | 41814.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33328.05 | 35450.15 | 37612.41 | 38553.08 | 39224.15 | 39598.59 | 40696.89 |
| **Latency** | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30795.81 | 3461.06 | 36103.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27550.94 | 30240.76 | 31699.62 | 32692.40 | 33408.21 | 33984.29 | 34992.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 79107.15 | 10027.11 | 101623.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66194.24 | 70617.75 | 78708.42 | 87057.60 | 93206.40 | 95551.96 | 98947.11 |
| **Latency** | 373µs    | 465µs    | 590µs    | 750µs    | 950µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42286.66 | 2564.95 | 51222.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40729.24 | 41837.75 | 42538.92 | 43318.17 | 44118.22 | 44775.64 | 46290.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30925.14 | 2170.69 | 33029.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30312.63 | 30946.56 | 31223.74 | 31517.73 | 31996.85 | 32163.33 | 32470.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35693.32 | 2512.32 | 38087.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34608.43 | 35534.42 | 36228.22 | 36633.63 | 36977.65 | 37166.47 | 37591.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65306.14 | 11963.64 | 91010.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52715.18 | 54271.46 | 62934.94 | 76112.93 | 83022.88 | 84979.57 | 89075.16 |
| **Latency** | 523µs    | 571µs    | 780µs    | 936µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46733.82 | 3341.91 | 60715.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44125.71 | 45140.03 | 46221.73 | 48219.84 | 50947.42 | 52540.62 | 54996.71 |
| **Latency** | 924µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17263.58 | 2274.42 | 21408.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15269.44 | 16528.90 | 17680.93 | 18638.90 | 19396.70 | 19742.26 | 20330.12 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 79035.69 | 13997.58 | 102708.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 59303.60 | 65407.21 | 80719.03 | 91709.77 | 96126.59 | 98318.64 | 100829.25 |
| **Latency** | 374µs    | 459µs    | 574µs    | 757µs    | 949µs    | 1ms      | 1ms       |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6178.88  | 992.68 | 7987.77 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4753.61 | 5800.49 | 6332.32 | 6662.05 | 7507.07 | 7765.08 | 7919.66 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 11ms    | 14ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11574.24 | 2014.74 | 13790.98 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8921.95 | 11515.38 | 12357.50 | 12641.64 | 12789.20 | 12848.72 | 13594.49 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 9ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52388.51 | 6061.67 | 80105.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47638.26 | 48758.72 | 50341.36 | 54714.65 | 60652.60 | 64594.49 | 72493.06 |
| **Latency** | 647µs    | 884µs    | 986µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15657.65 | 1514.20 | 23129.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15320.12 | 15649.89 | 15874.03 | 16135.62 | 16420.67 | 16597.16 | 16971.11 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50098.82 | 4043.82 | 73660.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46944.52 | 48141.05 | 49329.81 | 51892.71 | 55034.68 | 56681.69 | 61521.55 |
| **Latency** | 802µs    | 930µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48827.13 | 3757.88 | 66457.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46304.18 | 47326.88 | 48303.16 | 49446.62 | 52846.27 | 56251.10 | 60836.78 |
| **Latency** | 881µs    | 953µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42565.59 | 4245.09 | 50101.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39320.73 | 41486.71 | 43619.91 | 44799.43 | 45810.36 | 46418.27 | 47845.89 |
| **Latency** | 872µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 82179.67 | 15624.65 | 101623.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 57025.70 | 70235.83 | 88209.71 | 95200.64 | 97913.02 | 99288.10 | 100406.35 |
| **Latency** | 353µs    | 448µs    | 565µs    | 706µs    | 928µs    | 1ms      | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29934.99 | 3869.99 | 36148.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27636.39 | 29814.94 | 30766.53 | 31783.05 | 32564.31 | 33022.84 | 33901.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46834.56 | 2578.37 | 58036.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45359.84 | 46241.84 | 46743.58 | 47482.68 | 48822.58 | 50303.03 | 53043.31 |
| **Latency** | 937µs    | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53631.97 | 6308.17 | 78514.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48402.16 | 49614.93 | 51202.67 | 56836.44 | 62875.36 | 66518.01 | 72902.78 |
| **Latency** | 626µs    | 859µs    | 967µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17007.22 | 1456.66 | 24934.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16596.30 | 16979.13 | 17220.00 | 17459.82 | 17715.42 | 17859.58 | 18324.62 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29353.88 | 4195.14 | 41558.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27902.19 | 29269.83 | 30267.35 | 31216.94 | 32040.84 | 32502.64 | 33413.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13968.98 | 2596.97 | 40160.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11505.94 | 13312.29 | 14260.97 | 14864.48 | 16772.87 | 17710.13 | 18532.27 |
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
| 40903.39 | 2270.80 | 48687.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39624.44 | 40508.41 | 41099.40 | 41909.22 | 42589.41 | 43084.22 | 44107.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38519.57 | 3838.69 | 46192.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35408.94 | 37879.38 | 39581.72 | 40580.74 | 41351.32 | 41790.18 | 43004.27 |
| **Latency** | 931µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 79946.28 | 9825.45 | 101664.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66201.43 | 71749.50 | 81066.30 | 87824.17 | 92251.60 | 94232.75 | 97986.42 |
| **Latency** | 383µs    | 446µs    | 555µs    | 763µs    | 936µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6939.18  | 1652.96 | 10974.83 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5256.01 | 6337.46 | 7213.74 | 7902.57 | 8740.49 | 9068.61 | 9804.76 |
| **Latency** | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 14ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52639.11 | 5431.66 | 78463.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48638.43 | 49668.28 | 50790.13 | 54300.54 | 60163.17 | 63767.36 | 69945.57 |
| **Latency** | 668µs    | 887µs    | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-01-15T01:33:03.741Z</p>
