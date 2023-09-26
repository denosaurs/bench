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

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Deno                                                                                 | 42740.13 | 13059.31 | 59199.86 | 100%     |
| Bun                                                                                  | 39529.14 | 12242.58 | 64626.36 | 92%      |
| Vixeny (Deno)                                                                        | 38979.46 | 11648.49 | 54787.38 | 91%      |
| NHttp                                                                                | 38576.24 | 12502.25 | 55031.98 | 90%      |
| Hyper Express                                                                        | 38441.53 | 15498.36 | 64635.80 | 90%      |
| Stric                                                                                | 38217.41 | 11418.07 | 60607.58 | 89%      |
| Fast                                                                                 | 37176.50 | 12313.29 | 53064.70 | 87%      |
| Hono                                                                                 | 35817.48 | 10169.09 | 51757.94 | 84%      |
| Fastro                                                                               | 34856.51 | 10761.83 | 51603.81 | 82%      |
| Deso                                                                                 | 34798.78 | 10298.41 | 49431.66 | 81%      |
| Reno                                                                                 | 32229.57 | 7458.05  | 42506.29 | 75%      |
| Cheetah                                                                              | 30007.32 | 10547.70 | 43623.29 | 70%      |
| http                                                                                 | 24906.72 | 6823.79  | 35680.54 | 58%      |
| Alosaur                                                                              | 20388.26 | 5202.53  | 57878.00 | 48%      |
| Aqua                                                                                 | 18451.79 | 3898.86  | 25492.04 | 43%      |
| Router                                                                               | 17044.50 | 3597.59  | 40261.90 | 40%      |
| Node                                                                                 | 16551.18 | 3206.93  | 21237.74 | 39%      |
| Little                                                                               | 15289.31 | 3590.89  | 34228.72 | 36%      |
| Oak                                                                                  | 13817.19 | 3360.61  | 39385.90 | 32%      |
| Fastify                                                                              | 13637.24 | 2692.74  | 17908.41 | 32%      |
| Dinatra                                                                              | 11434.34 | 2639.17  | 21686.40 | 27%      |
| Abc                                                                                  | 9543.61  | 2147.51  | 15236.75 | 22%      |
| Danet (Oak)                                                                          | 8988.68  | 2720.76  | 16563.46 | 21%      |
| Opine                                                                                | 6423.95  | 2111.77  | 37453.18 | 15%      |
| Express (Deno)                                                                       | 6247.35  | 1524.70  | 10878.91 | 15%      |
| Acorn                                                                                | 5334.98  | 7599.36  | 75793.46 | 12%      |
| Servest                                                                              | 4162.21  | 1451.96  | 15510.33 | 10%      |
| Express                                                                              | 3774.57  | 906.15   | 9050.14  | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-e93b4d2b-0c7b-4327-a5b2-a69b5f64d1b5) |          |          |          |          |

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
| 9543.61  | 2147.51 | 15236.75 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5992.93 | 8504.11 | 10332.07 | 11107.00 | 11478.33 | 11760.85 | 12364.42 |
| **Latency** | 3ms     | 3ms     | 4ms      | 6ms      | 7ms      | 8ms      | 14ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5334.98  | 7599.36 | 75793.46 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 47.26 | 64.65 | 4598.65 | 7505.46 | 11357.87 | 14423.69 | 45561.06 |
| **Latency** | 9ms   | 10ms  | 21ms    | 27ms    | 30ms     | 33ms     | 39ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20388.26 | 5202.53 | 57878.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13682.68 | 18417.67 | 22200.96 | 23460.54 | 24513.15 | 25140.88 | 26763.79 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18451.79 | 3898.86 | 25492.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14141.34 | 17370.79 | 19345.18 | 20796.03 | 21662.67 | 22391.07 | 23983.57 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39529.14 | 12242.58 | 64626.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23608.12 | 29746.80 | 38897.37 | 50723.05 | 55800.19 | 57843.07 | 60642.10 |
| **Latency** | 646µs    | 813µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 30007.32 | 10547.70 | 43623.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15024.99 | 17262.50 | 35819.84 | 38380.75 | 40038.20 | 40932.89 | 42176.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8988.68  | 2720.76 | 16563.46 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5700.64 | 7128.47 | 9405.02 | 10725.23 | 11601.66 | 13174.52 | 15798.34 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms      | 7ms      | 9ms      | 13ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42740.13 | 13059.31 | 59199.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19337.20 | 35126.47 | 47970.77 | 52941.04 | 54901.14 | 55826.43 | 57716.01 |
| **Latency** | 740µs    | 852µs    | 978µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 34798.78 | 10298.41 | 49431.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17208.67 | 28729.12 | 39420.64 | 42294.05 | 44119.57 | 44967.16 | 46818.43 |
| **Latency** | 992µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11434.34 | 2639.17 | 21686.40 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8652.12 | 10307.15 | 11638.68 | 13190.82 | 14256.65 | 14694.18 | 15286.63 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 3774.57  | 906.15 | 9050.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2472.81 | 3418.92 | 4104.19 | 4314.56 | 4446.84 | 4543.41 | 4714.59 |
| **Latency** | 11ms    | 11ms    | 12ms    | 13ms    | 17ms    | 20ms    | 25ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6247.35  | 1524.70 | 10878.91 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4088.99 | 5524.03 | 6674.08 | 7340.71 | 7620.90 | 7731.93 | 8091.95 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 12ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37176.50 | 12313.29 | 53064.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17127.15 | 28577.07 | 42617.63 | 46412.70 | 48878.10 | 50033.70 | 52111.71 |
| **Latency** | 885µs    | 976µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13637.24 | 2692.74 | 17908.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10729.33 | 13553.72 | 14478.24 | 15040.36 | 15438.34 | 15705.87 | 16200.38 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 34856.51 | 10761.83 | 51603.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16453.04 | 27605.62 | 39418.28 | 42860.03 | 45120.47 | 46320.76 | 48909.25 |
| **Latency** | 935µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35817.48 | 10169.09 | 51757.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17355.77 | 30383.06 | 39718.02 | 43306.66 | 45642.48 | 47052.63 | 48836.55 |
| **Latency** | 934µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24906.72 | 6823.79 | 35680.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14931.65 | 22112.91 | 27787.98 | 29368.39 | 30585.22 | 31225.23 | 32605.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38441.53 | 15498.36 | 64635.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16766.29 | 22412.87 | 40714.63 | 52724.47 | 57514.61 | 59309.82 | 61340.71 |
| **Latency** | 636µs    | 791µs    | 964µs    | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15289.31 | 3590.89 | 34228.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10728.03 | 14018.54 | 16305.56 | 17469.98 | 18529.90 | 19090.30 | 20090.84 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

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
| 38576.24 | 12502.25 | 55031.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18102.66 | 30025.05 | 44352.51 | 47921.15 | 50122.80 | 51131.95 | 52726.62 |
| **Latency** | 870µs    | 952µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16551.18 | 3206.93 | 21237.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12972.33 | 16314.76 | 17448.08 | 18301.55 | 18927.17 | 19249.97 | 19948.39 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13817.19 | 3360.61 | 39385.90 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9937.11 | 12610.91 | 14426.21 | 15731.44 | 16817.57 | 17943.97 | 19494.92 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6423.95  | 2111.77 | 37453.18 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4628.68 | 5746.94 | 6776.88 | 7261.25 | 7562.05 | 7793.78 | 11415.37 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 10ms    | 12ms    | 18ms     |

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
| 32229.57 | 7458.05 | 42506.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18862.34 | 30668.23 | 35213.91 | 36923.07 | 38187.25 | 38874.83 | 40103.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17044.50 | 3597.59 | 40261.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12787.38 | 15896.81 | 18168.16 | 19157.96 | 19939.47 | 20583.54 | 22090.01 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38217.41 | 11418.07 | 60607.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23259.19 | 28344.36 | 38296.26 | 48709.84 | 53500.82 | 55342.24 | 58029.30 |
| **Latency** | 672µs    | 840µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4162.21  | 1451.96 | 15510.33 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2038.87 | 3735.62 | 4616.30 | 5008.04 | 5345.68 | 5728.50 | 6394.82 |
| **Latency** | 6ms     | 9ms     | 11ms    | 14ms    | 19ms    | 22ms    | 29ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38979.46 | 11648.49 | 54787.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18205.01 | 31741.43 | 44143.24 | 47835.64 | 49409.64 | 50280.20 | 51915.32 |
| **Latency** | 882µs    | 960µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-09-26T01:25:16.408Z</p>
