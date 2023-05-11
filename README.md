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
| Deno                                                                                 | 56913.10 | 13691.74 | 67064.19  | 100%     |
| NHttp                                                                                | 54234.88 | 12495.51 | 64969.13  | 95%      |
| Bun                                                                                  | 52722.67 | 9906.86  | 71494.69  | 93%      |
| Fast                                                                                 | 52052.87 | 12877.41 | 61816.85  | 91%      |
| Fastro                                                                               | 51609.04 | 11500.98 | 60215.00  | 91%      |
| Hono                                                                                 | 51000.78 | 12427.71 | 60637.03  | 90%      |
| Deso                                                                                 | 50724.37 | 11088.33 | 58429.23  | 89%      |
| Hyper Express                                                                        | 48500.16 | 13393.90 | 68154.74  | 85%      |
| Megalo                                                                               | 48282.15 | 10444.56 | 56239.60  | 85%      |
| Reno                                                                                 | 41684.29 | 5736.78  | 45896.57  | 73%      |
| Cheetah                                                                              | 34276.64 | 3890.59  | 37360.16  | 60%      |
| http                                                                                 | 33625.39 | 7828.64  | 118100.94 | 59%      |
| Peko                                                                                 | 30836.72 | 6224.37  | 39375.32  | 54%      |
| Node                                                                                 | 30079.21 | 6123.21  | 34928.29  | 53%      |
| Alosaur                                                                              | 27761.72 | 6216.50  | 71307.81  | 49%      |
| Fastify                                                                              | 26047.55 | 4929.65  | 29989.38  | 46%      |
| Router                                                                               | 23605.17 | 4544.40  | 31676.39  | 41%      |
| Little                                                                               | 20577.33 | 3975.95  | 24945.24  | 36%      |
| Aqua                                                                                 | 19839.41 | 3787.58  | 34988.97  | 35%      |
| Oak                                                                                  | 18810.43 | 3834.09  | 56889.67  | 33%      |
| Dinatra                                                                              | 16187.51 | 3249.83  | 32366.39  | 28%      |
| Abc                                                                                  | 14464.19 | 1876.44  | 17138.53  | 25%      |
| Opine                                                                                | 8171.39  | 1380.96  | 11728.39  | 14%      |
| Express (Deno)                                                                       | 7329.00  | 1537.70  | 11029.93  | 13%      |
| Express                                                                              | 5473.39  | 1330.86  | 11294.91  | 10%      |
| Acorn                                                                                | 4928.36  | 10853.97 | 108689.75 | 9%       |
| Servest                                                                              | 4843.57  | 1407.22  | 8884.66   | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-97b30a83-69db-499d-aefc-347248f02817) |          |          |           |          |

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
| 14464.19 | 1876.44 | 17138.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13104.06 | 13712.08 | 15153.65 | 15539.17 | 15831.51 | 16049.29 | 16629.89 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 4928.36  | 10853.97 | 108689.75 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 96.34 | 1920.41 | 2595.62 | 3828.91 | 7035.39 | 8199.60 | 61041.54 |
| **Latency** | 6ms   | 8ms     | 18ms    | 25ms    | 28ms    | 30ms    | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27761.72 | 6216.50 | 71307.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23408.67 | 25700.27 | 30195.93 | 30943.60 | 31342.31 | 31632.47 | 32406.43 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19839.41 | 3787.58 | 34988.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18320.34 | 19286.41 | 20907.58 | 21692.36 | 22152.45 | 22554.02 | 23267.41 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52722.67 | 9906.86 | 71494.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42330.39 | 45739.33 | 49870.58 | 62940.29 | 65403.93 | 66161.59 | 68576.28 |
| **Latency** | 563µs    | 705µs    | 856µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34276.64 | 3890.59 | 37360.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33808.12 | 34814.98 | 35255.70 | 35649.75 | 36090.24 | 36268.56 | 36826.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56913.10 | 13691.74 | 67064.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26102.08 | 59410.11 | 63113.26 | 64708.59 | 65452.47 | 65813.83 | 66603.34 |
| **Latency** | 610µs    | 703µs    | 819µs    | 865µs    | 998µs    | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50724.37 | 11088.33 | 58429.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27116.20 | 53910.79 | 55513.33 | 56328.18 | 56839.24 | 57136.01 | 57620.75 |
| **Latency** | 819µs    | 846µs    | 874µs    | 916µs    | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16187.51 | 3249.83 | 32366.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14625.09 | 15449.60 | 16165.28 | 17896.70 | 19307.94 | 19529.90 | 20229.47 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5473.39  | 1330.86 | 11294.91 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3371.52 | 5487.53 | 6046.75 | 6197.81 | 6281.48 | 6319.85 | 6986.01 |
| **Latency** | 7ms     | 8ms     | 8ms     | 8ms     | 12ms    | 14ms    | 19ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7329.00  | 1537.70 | 11029.93 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5376.38 | 7024.31 | 8048.86 | 8164.45 | 8271.92 | 8452.84 | 8766.52 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52052.87 | 12877.41 | 61816.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23729.43 | 55335.43 | 58281.61 | 58935.38 | 59371.71 | 59649.74 | 60260.88 |
| **Latency** | 786µs    | 814µs    | 837µs    | 877µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26047.55 | 4929.65 | 29989.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25502.56 | 26724.59 | 27508.26 | 27906.90 | 28146.45 | 28259.36 | 28571.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51609.04 | 11500.98 | 60215.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24421.64 | 54913.20 | 56711.75 | 57621.34 | 58317.24 | 58698.67 | 59458.88 |
| **Latency** | 798µs    | 828µs    | 860µs    | 901µs    | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51000.78 | 12427.71 | 60637.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23628.48 | 53162.13 | 56864.38 | 57884.83 | 58639.33 | 58972.25 | 59461.29 |
| **Latency** | 796µs    | 826µs    | 851µs    | 897µs    | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 33625.39 | 7828.64 | 118100.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27177.26 | 30526.84 | 36782.78 | 37635.43 | 38126.70 | 38449.90 | 39075.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48500.16 | 13393.90 | 68154.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30379.34 | 33780.12 | 51675.80 | 61608.65 | 64000.10 | 64820.76 | 66450.66 |
| **Latency** | 600µs    | 727µs    | 872µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20577.33 | 3975.95 | 24945.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18101.63 | 19996.56 | 21869.12 | 22695.49 | 23003.30 | 23556.61 | 24300.29 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48282.15 | 10444.56 | 56239.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25407.62 | 51150.39 | 52842.98 | 53559.25 | 54319.52 | 54576.41 | 55322.13 |
| **Latency** | 876µs    | 901µs    | 926µs    | 959µs    | 1ms      | 2ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54234.88 | 12495.51 | 64969.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26396.74 | 57026.15 | 59911.89 | 60646.61 | 61273.09 | 61644.29 | 62678.96 |
| **Latency** | 758µs    | 793µs    | 817µs    | 852µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30079.21 | 6123.21 | 34928.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26051.32 | 31106.22 | 31965.53 | 32686.95 | 33114.90 | 33334.33 | 34045.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18810.43 | 3834.09 | 56889.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16507.74 | 17629.57 | 20238.41 | 20603.22 | 21001.24 | 21269.92 | 21823.25 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8171.39  | 1380.96 | 11728.39 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6962.80 | 7940.26 | 8561.63 | 8851.58 | 9050.19 | 9282.07 | 10365.01 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 6ms     | 8ms     | 12ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30836.72 | 6224.37 | 39375.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26013.75 | 28761.81 | 33321.28 | 34262.01 | 34741.23 | 34965.00 | 35500.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41684.29 | 5736.78 | 45896.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40313.30 | 42315.94 | 43120.51 | 43926.17 | 44375.70 | 44667.26 | 45159.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23605.17 | 4544.40 | 31676.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20616.25 | 22215.10 | 25410.38 | 25884.90 | 26297.47 | 26746.72 | 27623.44 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4843.57  | 1407.22 | 8884.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3337.04 | 4204.87 | 5513.32 | 5680.90 | 5772.26 | 5824.75 | 6315.78 |
| **Latency** | 8ms     | 8ms     | 9ms     | 11ms    | 12ms    | 19ms    | 23ms    |

---

<p align="center">Generated 2023-05-11T01:42:22.880Z</p>
