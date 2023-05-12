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
| Deno                                                                                 | 66597.69 | 14745.91 | 76818.36  | 100%     |
| Bun                                                                                  | 61866.32 | 10677.19 | 78920.74  | 93%      |
| Fast                                                                                 | 61642.88 | 12995.55 | 71231.57  | 93%      |
| NHttp                                                                                | 61060.14 | 13705.78 | 71584.70  | 92%      |
| Hono                                                                                 | 59239.60 | 13657.79 | 69713.94  | 89%      |
| Fastro                                                                               | 59001.09 | 13506.18 | 68256.28  | 89%      |
| Hyper Express                                                                        | 58862.26 | 16174.05 | 76655.39  | 88%      |
| Megalo                                                                               | 56914.59 | 10990.93 | 64270.35  | 85%      |
| Deso                                                                                 | 56813.44 | 12948.32 | 65360.08  | 85%      |
| Reno                                                                                 | 46825.12 | 9249.29  | 53112.81  | 70%      |
| Cheetah                                                                              | 40475.40 | 3822.61  | 42534.68  | 61%      |
| http                                                                                 | 38762.06 | 8679.56  | 46214.80  | 58%      |
| Node                                                                                 | 35568.01 | 4880.25  | 39331.08  | 53%      |
| Peko                                                                                 | 35163.80 | 7384.10  | 104030.53 | 53%      |
| Alosaur                                                                              | 31548.61 | 6507.85  | 64634.68  | 47%      |
| Router                                                                               | 27394.24 | 4736.14  | 31874.59  | 41%      |
| Fastify                                                                              | 26568.93 | 9622.91  | 34306.51  | 40%      |
| Little                                                                               | 24334.91 | 4280.77  | 28880.29  | 37%      |
| Aqua                                                                                 | 22846.64 | 3278.13  | 26036.38  | 34%      |
| Oak                                                                                  | 21781.29 | 4282.85  | 27503.29  | 33%      |
| Dinatra                                                                              | 18739.83 | 4131.41  | 37961.66  | 28%      |
| Abc                                                                                  | 15837.70 | 3081.57  | 19790.71  | 24%      |
| Opine                                                                                | 9513.07  | 1768.43  | 13497.75  | 14%      |
| Express (Deno)                                                                       | 8678.73  | 1721.14  | 13782.25  | 13%      |
| Express                                                                              | 6597.16  | 1285.51  | 9739.27   | 10%      |
| Servest                                                                              | 5285.13  | 1695.50  | 8306.26   | 8%       |
| Acorn                                                                                | 3464.48  | 4399.29  | 70371.99  | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-65d85233-2ae8-49c5-9ca0-2032248b06dd) |          |          |           |          |

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
| 15837.70 | 3081.57 | 19790.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10003.20 | 15714.28 | 16649.76 | 17453.84 | 18427.14 | 18534.12 | 18906.78 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3464.48  | 4399.29 | 70371.99 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 97.81 | 2025.09 | 2700.31 | 3960.84 | 6873.19 | 8379.58 | 10806.40 |
| **Latency** | 5ms   | 7ms     | 17ms    | 22ms    | 26ms    | 28ms    | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31548.61 | 6507.85 | 64634.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27710.73 | 29658.33 | 34105.06 | 34913.06 | 35329.58 | 35528.27 | 36323.55 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22846.64 | 3278.13 | 26036.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21590.20 | 22197.17 | 24094.12 | 24534.77 | 24746.05 | 24843.29 | 25238.56 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61866.32 | 10677.19 | 78920.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50183.15 | 53329.20 | 63038.26 | 71808.40 | 73694.33 | 74576.45 | 76181.93 |
| **Latency** | 492µs    | 619µs    | 756µs    | 876µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40475.40 | 3822.61 | 42534.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40214.80 | 40947.43 | 41294.79 | 41606.45 | 41918.92 | 42053.35 | 42269.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66597.69 | 14745.91 | 76818.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32101.43 | 69024.95 | 73608.06 | 74713.34 | 75466.23 | 75846.71 | 76464.19 |
| **Latency** | 527µs    | 593µs    | 713µs    | 751µs    | 850µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56813.44 | 12948.32 | 65360.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27704.96 | 60168.54 | 62925.20 | 63784.78 | 64339.91 | 64735.89 | 65174.91 |
| **Latency** | 726µs    | 748µs    | 772µs    | 811µs    | 989µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18739.83 | 4131.41 | 37961.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15630.78 | 17422.29 | 20105.62 | 20825.09 | 21509.24 | 21927.39 | 24416.69 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6597.16  | 1285.51 | 9739.27 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4403.48 | 6746.89 | 7208.00 | 7305.26 | 7397.50 | 7426.66 | 7471.20 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 11ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8678.73  | 1721.14 | 13782.25 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6536.59 | 8396.04 | 9427.94 | 9570.61 | 9642.38 | 9675.55 | 10189.83 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61642.88 | 12995.55 | 71231.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33321.02 | 65311.08 | 67312.39 | 68213.01 | 68953.23 | 69302.54 | 69884.04 |
| **Latency** | 676µs    | 702µs    | 723µs    | 757µs    | 908µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26568.93 | 9622.91 | 34306.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12053.00 | 12378.60 | 32433.06 | 33266.18 | 33625.21 | 33811.48 | 34014.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      | 4ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59001.09 | 13506.18 | 68256.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28390.00 | 62213.05 | 65619.02 | 66392.55 | 67027.49 | 67354.54 | 68001.37 |
| **Latency** | 700µs    | 728µs    | 746µs    | 776µs    | 977µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59239.60 | 13657.79 | 69713.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28616.90 | 62501.25 | 65836.21 | 66770.81 | 67435.77 | 67818.98 | 68418.47 |
| **Latency** | 692µs    | 717µs    | 737µs    | 782µs    | 968µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38762.06 | 8679.56 | 46214.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29205.26 | 36294.01 | 42935.67 | 43846.04 | 44347.92 | 44561.76 | 45025.83 |
| **Latency** | 983µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58862.26 | 16174.05 | 76655.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35405.69 | 38109.18 | 68627.50 | 72475.63 | 73576.10 | 74208.00 | 75109.51 |
| **Latency** | 516µs    | 604µs    | 754µs    | 853µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24334.91 | 4280.77 | 28880.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22306.48 | 23811.68 | 25740.30 | 26585.67 | 26843.85 | 27127.62 | 27806.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56914.59 | 10990.93 | 64270.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34917.82 | 59707.80 | 61526.15 | 62213.10 | 62664.47 | 63068.15 | 63796.35 |
| **Latency** | 753µs    | 774µs    | 796µs    | 824µs    | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61060.14 | 13705.78 | 71584.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29301.18 | 63161.09 | 67602.75 | 68733.03 | 69438.18 | 69840.01 | 70618.40 |
| **Latency** | 657µs    | 697µs    | 724µs    | 769µs    | 949µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35568.01 | 4880.25 | 39331.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35277.67 | 35923.41 | 36576.50 | 37306.77 | 37601.21 | 37739.31 | 37997.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21781.29 | 4282.85 | 27503.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19878.13 | 20837.01 | 23369.40 | 24001.93 | 24314.44 | 24610.09 | 26545.13 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9513.07  | 1768.43 | 13497.75 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7409.81 | 9325.41 | 10053.09 | 10409.83 | 10552.10 | 10928.60 | 12360.82 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 35163.80 | 7384.10 | 104030.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31137.65 | 32973.46 | 38214.93 | 38884.79 | 39317.17 | 39569.50 | 40323.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46825.12 | 9249.29 | 53112.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24933.62 | 49741.79 | 50669.46 | 51312.86 | 52076.07 | 52220.92 | 52506.63 |
| **Latency** | 933µs    | 953µs    | 968µs    | 991µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27394.24 | 4736.14 | 31874.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24708.42 | 25913.55 | 29341.32 | 29855.64 | 30139.17 | 30325.50 | 30825.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5285.13  | 1695.50 | 8306.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3204.59 | 4605.72 | 5909.58 | 6500.98 | 6830.61 | 6915.53 | 7021.35 |
| **Latency** | 7ms     | 7ms     | 8ms     | 10ms    | 13ms    | 18ms    | 21ms    |

---

<p align="center">Generated 2023-05-12T01:34:59.423Z</p>
