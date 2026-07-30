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

| Framework                                                                            | Mean      | Stddev  | Max       | Relative |
| ------------------------------------------------------------------------------------ | --------- | ------- | --------- | -------- |
| Bun                                                                                  | 135368.72 | 4681.02 | 155617.85 | 100%     |
| Stric                                                                                | 134750.11 | 4764.09 | 146793.43 | 100%     |
| Hyper Express                                                                        | 132453.44 | 5858.49 | 145371.73 | 98%      |
| Elysia                                                                               | 129282.21 | 5786.15 | 142308.15 | 96%      |
| Deno                                                                                 | 115558.55 | 7827.89 | 132703.14 | 85%      |
| NHttp                                                                                | 106389.40 | 7614.18 | 127326.39 | 79%      |
| Vixeny (Deno)                                                                        | 106280.92 | 7585.11 | 132299.50 | 79%      |
| Fast                                                                                 | 106194.44 | 8532.80 | 133765.72 | 78%      |
| Fastro                                                                               | 105983.58 | 7836.18 | 131227.45 | 78%      |
| Hono                                                                                 | 101161.48 | 8452.00 | 132180.79 | 75%      |
| Megalo                                                                               | 91692.82  | 6086.71 | 106204.57 | 68%      |
| Alosaur                                                                              | 86996.64  | 4938.51 | 95103.61  | 64%      |
| Cheetah                                                                              | 76638.56  | 4393.73 | 81627.72  | 57%      |
| Reno                                                                                 | 76546.57  | 4469.74 | 85304.70  | 57%      |
| http                                                                                 | 67732.02  | 8203.42 | 79178.27  | 50%      |
| Router                                                                               | 64266.98  | 7521.22 | 72089.34  | 47%      |
| Danet V2 (Hono)                                                                      | 62631.93  | 4932.88 | 76513.93  | 46%      |
| Danet (Oak)                                                                          | 58252.24  | 4356.92 | 74034.31  | 43%      |
| Node                                                                                 | 57721.72  | 6200.67 | 76548.99  | 43%      |
| Oak                                                                                  | 54719.33  | 5433.31 | 58795.92  | 40%      |
| Fastify                                                                              | 52686.46  | 7473.85 | 76287.41  | 39%      |
| Aqua                                                                                 | 46939.32  | 5169.20 | 53373.12  | 35%      |
| Little                                                                               | 45949.19  | 5814.93 | 53041.56  | 34%      |
| Dinatra                                                                              | 33750.32  | 5021.13 | 42809.08  | 25%      |
| Abc                                                                                  | 28692.73  | 3633.51 | 36169.30  | 21%      |
| Express                                                                              | 14211.74  | 2611.45 | 20087.93  | 10%      |
| Express (Deno)                                                                       | 13482.11  | 2524.75 | 16881.55  | 10%      |
| Servest                                                                              | 9720.96   | 2429.16 | 19240.29  | 7%       |
| Acorn                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Deso                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00    | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-ecf38396-2585-4c8c-a0b2-cf9ec4ace41e) |           |         |           |          |

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
| 28692.73 | 3633.51 | 36169.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25606.96 | 27639.16 | 29076.04 | 30672.42 | 32555.53 | 32995.85 | 33852.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Acorn](#acorn)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 86996.64 | 4938.51 | 95103.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 85064.88 | 86313.63 | 87549.63 | 88553.32 | 89704.16 | 90536.54 | 92528.39 |
| **Latency** | 500µs    | 530µs    | 575µs    | 608µs    | 634µs    | 658µs    | 745µs    |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46939.32 | 5169.20 | 53373.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44516.85 | 46437.54 | 47628.51 | 49617.84 | 50697.61 | 51154.12 | 52602.73 |
| **Latency** | 691µs    | 966µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 135368.72 | 4681.02 | 155617.85 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 129807.98 | 132513.33 | 135501.48 | 138350.94 | 141057.15 | 142416.01 | 145069.65 |
| **Latency** | 232µs     | 301µs     | 366µs     | 436µs     | 490µs     | 535µs     | 666µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 76638.56 | 4393.73 | 81627.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 75712.14 | 76411.74 | 77236.92 | 77858.07 | 78345.64 | 78604.64 | 79237.79 |
| **Latency** | 566µs    | 595µs    | 654µs    | 686µs    | 726µs    | 767µs    | 822µs    |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58252.24 | 4356.92 | 74034.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56838.77 | 58375.78 | 59024.66 | 59720.87 | 60087.45 | 60405.10 | 60839.10 |
| **Latency** | 733µs    | 769µs    | 859µs    | 903µs    | 974µs    | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 62631.93 | 4932.88 | 76513.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59700.49 | 62309.15 | 63804.77 | 64470.01 | 65199.17 | 65470.73 | 66127.86 |
| **Latency** | 685µs    | 717µs    | 800µs    | 838µs    | 904µs    | 946µs    | 1ms      |

### [Deno](#deno)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 115558.55 | 7827.89 | 132703.14 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 109122.56 | 112506.66 | 116512.13 | 119656.13 | 122244.61 | 124104.72 | 127075.29 |
| **Latency** | 326µs     | 384µs     | 432µs     | 478µs     | 524µs     | 559µs     | 654µs     |

### [Deso](#deso)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33750.32 | 5021.13 | 42809.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30108.40 | 32909.73 | 34476.27 | 36109.93 | 38730.51 | 39634.22 | 40861.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Elysia](#elysia)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 129282.21 | 5786.15 | 142308.15 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 123017.48 | 126313.02 | 129888.64 | 133126.39 | 135746.90 | 137165.09 | 140081.55 |
| **Latency** | 250µs     | 319µs     | 381µs     | 442µs     | 506µs     | 569µs     | 735µs     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14211.74 | 2611.45 | 20087.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11904.22 | 13061.06 | 14244.24 | 15084.36 | 17695.52 | 19307.48 | 19914.67 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13482.11 | 2524.75 | 16881.55 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9999.35 | 13295.63 | 14484.58 | 14948.26 | 15203.71 | 15420.61 | 15968.00 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fast](#fast)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 106194.44 | 8532.80 | 133765.72 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 98688.90 | 101337.94 | 105620.48 | 110955.21 | 116371.99 | 119605.55 | 126313.16 |
| **Latency** | 362µs    | 417µs     | 474µs     | 521µs     | 559µs     | 592µs     | 687µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52686.46 | 7473.85 | 76287.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49344.69 | 50913.62 | 51837.20 | 53658.46 | 61681.11 | 64114.48 | 68522.47 |
| **Latency** | 583µs    | 902µs    | 935µs    | 973µs    | 1ms      | 1ms      | 1ms      |

### [Fastro](#fastro)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 105983.58 | 7836.18 | 131227.45 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 98620.53 | 101760.61 | 105871.69 | 110532.20 | 115204.80 | 117923.43 | 122507.95 |
| **Latency** | 362µs    | 420µs     | 473µs     | 521µs     | 563µs     | 598µs     | 701µs     |

### [Hono](#hono)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 101161.48 | 8452.00 | 132180.79 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 95055.81 | 97286.83 | 100232.91 | 105492.26 | 109930.57 | 112952.65 | 123515.12 |
| **Latency** | 381µs    | 441µs    | 497µs     | 541µs     | 582µs     | 620µs     | 725µs     |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67732.02 | 8203.42 | 79178.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62904.68 | 66363.37 | 69725.39 | 72306.07 | 73664.68 | 74425.49 | 75700.30 |
| **Latency** | 518µs    | 649µs    | 733µs    | 773µs    | 824µs    | 921µs    | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 132453.44 | 5858.49 | 145371.73 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 127129.47 | 129854.05 | 132951.41 | 135833.20 | 138003.50 | 139547.08 | 141798.41 |
| **Latency** | 244µs     | 313µs     | 376µs     | 434µs     | 491µs     | 544µs     | 698µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45949.19 | 5814.93 | 53041.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43145.20 | 46298.89 | 47358.54 | 48319.82 | 49624.29 | 50120.29 | 51115.38 |
| **Latency** | 705µs    | 969µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 91692.82 | 6086.71 | 106204.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 88618.34 | 90493.46 | 91926.91 | 93519.29 | 96933.09 | 98963.91 | 103657.88 |
| **Latency** | 459µs    | 499µs    | 544µs    | 581µs    | 618µs    | 666µs    | 750µs     |

### [NHttp](#nhttp)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 106389.40 | 7614.18 | 127326.39 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 99306.15 | 101867.76 | 106124.97 | 110920.64 | 115243.67 | 118480.56 | 124339.65 |
| **Latency** | 361µs    | 420µs     | 474µs     | 520µs     | 555µs     | 584µs     | 678µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 57721.72 | 6200.67 | 76548.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55524.74 | 57510.77 | 58712.46 | 59900.16 | 61020.07 | 61775.50 | 63970.06 |
| **Latency** | 757µs    | 807µs    | 837µs    | 872µs    | 1ms      | 1ms      | 1ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54719.33 | 5433.31 | 58795.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53409.98 | 54907.24 | 55705.05 | 56506.55 | 57115.52 | 57380.29 | 58139.55 |
| **Latency** | 835µs    | 856µs    | 882µs    | 913µs    | 1ms      | 1ms      | 1ms      |

### [Opine](#opine)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

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
| 76546.57 | 4469.74 | 85304.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74906.84 | 76240.98 | 77308.77 | 78287.48 | 78779.40 | 79055.68 | 79458.60 |
| **Latency** | 567µs    | 596µs    | 654µs    | 688µs    | 723µs    | 769µs    | 847µs    |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64266.98 | 7521.22 | 72089.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60739.35 | 63569.01 | 65539.87 | 68328.27 | 69488.76 | 70064.30 | 71280.18 |
| **Latency** | 540µs    | 700µs    | 776µs    | 814µs    | 864µs    | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 134750.11 | 4764.09 | 146793.43 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 129073.92 | 131768.97 | 134842.48 | 138142.30 | 140516.08 | 141927.96 | 143952.11 |
| **Latency** | 231µs     | 300µs     | 367µs     | 437µs     | 495µs     | 544µs     | 677µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9720.96  | 2429.16 | 19240.29 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6140.92 | 8502.81 | 10204.79 | 11198.43 | 12263.61 | 12895.02 | 14400.37 |
| **Latency** | 3ms     | 4ms     | 4ms      | 5ms      | 6ms      | 8ms      | 10ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 106280.92 | 7585.11 | 132299.50 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 99818.68 | 102010.84 | 106242.03 | 110720.17 | 114626.96 | 117303.92 | 121330.36 |
| **Latency** | 360µs    | 420µs     | 473µs     | 520µs     | 557µs     | 588µs     | 689µs     |

---

<p align="center">Generated 2026-07-30T03:05:39.484Z</p>
