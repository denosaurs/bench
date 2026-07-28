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
| Stric                                                                                | 120279.54 | 4993.30 | 133313.76 | 100%     |
| Hyper Express                                                                        | 115255.74 | 5997.43 | 133570.47 | 96%      |
| Bun                                                                                  | 112989.95 | 6018.48 | 134436.87 | 94%      |
| Elysia                                                                               | 112958.54 | 5410.66 | 127200.09 | 94%      |
| Deno                                                                                 | 100368.52 | 6362.33 | 116868.13 | 83%      |
| Vixeny (Deno)                                                                        | 90381.72  | 7290.80 | 117710.02 | 75%      |
| Fast                                                                                 | 89369.68  | 7748.43 | 119753.78 | 74%      |
| Fastro                                                                               | 88965.64  | 6854.96 | 114717.09 | 74%      |
| NHttp                                                                                | 88780.63  | 7413.52 | 121661.63 | 74%      |
| Hono                                                                                 | 85657.83  | 7369.86 | 116046.13 | 71%      |
| Megalo                                                                               | 78149.17  | 5085.10 | 96615.03  | 65%      |
| Alosaur                                                                              | 72126.29  | 4629.15 | 81476.97  | 60%      |
| Cheetah                                                                              | 66877.64  | 4281.04 | 72510.36  | 56%      |
| Reno                                                                                 | 66637.49  | 3729.62 | 70024.60  | 55%      |
| Danet V2 (Hono)                                                                      | 56217.96  | 4299.88 | 60233.63  | 47%      |
| http                                                                                 | 55872.91  | 7439.93 | 64945.58  | 46%      |
| Router                                                                               | 53345.46  | 6935.64 | 62334.17  | 44%      |
| Danet (Oak)                                                                          | 49007.15  | 4471.93 | 54810.38  | 41%      |
| Node                                                                                 | 47422.64  | 4964.33 | 56157.52  | 39%      |
| Oak                                                                                  | 46397.63  | 5145.37 | 51080.61  | 39%      |
| Fastify                                                                              | 43456.55  | 4896.03 | 48726.62  | 36%      |
| Aqua                                                                                 | 37651.43  | 4784.04 | 44593.35  | 31%      |
| Little                                                                               | 36593.79  | 5268.95 | 45210.56  | 30%      |
| Dinatra                                                                              | 27096.15  | 4589.43 | 36492.22  | 23%      |
| Abc                                                                                  | 19584.12  | 2511.21 | 24756.97  | 16%      |
| Express                                                                              | 12193.71  | 2577.49 | 17216.81  | 10%      |
| Express (Deno)                                                                       | 11399.44  | 2584.21 | 15946.80  | 9%       |
| Servest                                                                              | 8439.73   | 2776.20 | 19240.85  | 7%       |
| Acorn                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Deso                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00    | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-8c75d309-7e8c-4800-ac7b-99f499ff7ff3) |           |         |           |          |

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
| 19584.12 | 2511.21 | 24756.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16905.13 | 18037.75 | 20053.99 | 21281.02 | 22193.86 | 22723.78 | 23909.54 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

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
| 72126.29 | 4629.15 | 81476.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69634.81 | 71035.17 | 72464.23 | 74091.17 | 75597.53 | 76373.25 | 77733.21 |
| **Latency** | 600µs    | 635µs    | 690µs    | 734µs    | 769µs    | 800µs    | 939µs    |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37651.43 | 4784.04 | 44593.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34035.24 | 36315.43 | 38503.73 | 40291.65 | 41875.24 | 42328.92 | 43606.96 |
| **Latency** | 845µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 112989.95 | 6018.48 | 134436.87 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 105230.78 | 109038.07 | 113105.30 | 116818.86 | 120524.92 | 123029.43 | 127212.07 |
| **Latency** | 274µs     | 358µs     | 435µs     | 518µs     | 599µs     | 662µs     | 829µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 66877.64 | 4281.04 | 72510.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64209.93 | 66245.41 | 67611.97 | 68636.15 | 69338.52 | 69625.04 | 70342.92 |
| **Latency** | 645µs    | 680µs    | 746µs    | 789µs    | 837µs    | 877µs    | 978µs    |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49007.15 | 4471.93 | 54810.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46300.31 | 47422.56 | 48919.60 | 51757.86 | 53233.49 | 53524.85 | 54321.83 |
| **Latency** | 857µs    | 919µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56217.96 | 4299.88 | 60233.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54312.75 | 55730.56 | 57002.46 | 57802.95 | 58460.01 | 58701.81 | 59243.56 |
| **Latency** | 767µs    | 802µs    | 893µs    | 937µs    | 988µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 100368.52 | 6362.33 | 116868.13 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 93908.11 | 97116.59 | 100420.85 | 104132.31 | 107351.81 | 109396.84 | 113124.11 |
| **Latency** | 376µs    | 443µs    | 498µs     | 551µs     | 605µs     | 644µs     | 738µs     |

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
| 27096.15 | 4589.43 | 36492.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23830.66 | 25640.96 | 27545.43 | 29794.17 | 31855.88 | 32920.42 | 34550.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Elysia](#elysia)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 112958.54 | 5410.66 | 127200.09 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 105916.65 | 109739.37 | 113268.04 | 116620.65 | 119426.47 | 121048.64 | 124058.24 |
| **Latency** | 283µs     | 363µs     | 435µs     | 503µs     | 589µs     | 667µs     | 862µs     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12193.71 | 2577.49 | 17216.81 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9104.66 | 11323.29 | 12304.27 | 13334.42 | 16008.00 | 16405.62 | 16880.59 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 7ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11399.44 | 2584.21 | 15946.80 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7626.70 | 11040.58 | 12386.18 | 12939.59 | 13355.75 | 13585.46 | 13924.36 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 89369.68 | 7748.43 | 119753.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 82400.70 | 84714.49 | 88384.25 | 93506.41 | 98315.08 | 102915.82 | 109577.28 |
| **Latency** | 432µs    | 500µs    | 563µs    | 615µs    | 659µs    | 696µs     | 816µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43456.55 | 4896.03 | 48726.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42121.16 | 43424.03 | 44507.64 | 45182.50 | 45761.08 | 46089.96 | 46843.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 88965.64 | 6854.96 | 114717.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 82632.80 | 85319.89 | 88573.33 | 92632.56 | 96700.33 | 99058.89 | 105880.55 |
| **Latency** | 433µs    | 502µs    | 564µs    | 617µs    | 665µs    | 709µs    | 846µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 85657.83 | 7369.86 | 116046.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 79864.91 | 82553.64 | 85217.98 | 88808.47 | 93228.80 | 96666.88 | 103784.12 |
| **Latency** | 456µs    | 526µs    | 585µs    | 635µs    | 681µs    | 726µs    | 881µs     |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55872.91 | 7439.93 | 64945.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51002.31 | 53937.09 | 57906.18 | 60106.65 | 61415.87 | 62237.22 | 63651.37 |
| **Latency** | 613µs    | 795µs    | 888µs    | 936µs    | 994µs    | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 115255.74 | 5997.43 | 133570.47 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 109832.28 | 112807.19 | 115620.13 | 118478.30 | 121141.67 | 122341.33 | 124449.11 |
| **Latency** | 276µs     | 358µs     | 433µs     | 497µs     | 570µs     | 631µs     | 815µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36593.79 | 5268.95 | 45210.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34052.86 | 35886.60 | 37712.05 | 39181.33 | 40553.07 | 41248.08 | 42715.07 |
| **Latency** | 857µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78149.17 | 5085.10 | 96615.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74465.02 | 76167.26 | 78302.99 | 80307.54 | 82417.57 | 84258.38 | 88812.51 |
| **Latency** | 544µs    | 586µs    | 638µs    | 682µs    | 722µs    | 768µs    | 873µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 88780.63 | 7413.52 | 121661.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 82126.78 | 84355.39 | 88020.91 | 92642.26 | 97720.32 | 101605.39 | 107204.77 |
| **Latency** | 432µs    | 502µs    | 567µs    | 620µs    | 665µs    | 706µs     | 844µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47422.64 | 4964.33 | 56157.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45555.19 | 46786.03 | 47967.17 | 49342.98 | 50626.72 | 51221.34 | 52612.88 |
| **Latency** | 934µs    | 980µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46397.63 | 5145.37 | 51080.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44211.61 | 46001.84 | 47312.69 | 48524.08 | 49538.82 | 50031.71 | 50548.06 |
| **Latency** | 972µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

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
| 66637.49 | 3729.62 | 70024.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65435.98 | 66320.36 | 67235.97 | 67829.17 | 68401.61 | 68709.71 | 69428.94 |
| **Latency** | 652µs    | 685µs    | 754µs    | 792µs    | 827µs    | 876µs    | 970µs    |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53345.46 | 6935.64 | 62334.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48082.30 | 51979.81 | 54678.00 | 57561.16 | 59200.92 | 60142.07 | 61260.15 |
| **Latency** | 634µs    | 839µs    | 929µs    | 989µs    | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 120279.54 | 4993.30 | 133313.76 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 114131.74 | 117325.28 | 120551.09 | 123562.34 | 126234.92 | 127703.32 | 130454.27 |
| **Latency** | 260µs     | 337µs     | 410µs     | 486µs     | 560µs     | 615µs     | 766µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8439.73  | 2776.20 | 19240.85 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5425.27 | 7139.60 | 9007.98 | 10145.88 | 10903.46 | 11842.13 | 14046.62 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms      | 7ms      | 10ms     | 13ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 90381.72 | 7290.80 | 117710.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 83519.93 | 86200.66 | 89770.60 | 94410.86 | 99159.92 | 102620.50 | 107427.60 |
| **Latency** | 426µs    | 493µs    | 557µs    | 609µs    | 653µs    | 691µs     | 823µs     |

---

<p align="center">Generated 2026-07-28T03:30:53.281Z</p>
