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

| Framework                                                                            | Mean      | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | --------- | -------- | --------- | -------- |
| Stric                                                                                | 121761.41 | 13026.84 | 150387.27 | 100%     |
| Bun                                                                                  | 118862.72 | 14782.34 | 149524.74 | 98%      |
| Hyper Express                                                                        | 108368.42 | 12543.42 | 143061.24 | 89%      |
| Elysia                                                                               | 101252.49 | 10235.24 | 136804.38 | 83%      |
| Deno                                                                                 | 83491.40  | 3941.23  | 99239.44  | 69%      |
| Vixeny (Deno)                                                                        | 76932.85  | 3477.34  | 111308.75 | 63%      |
| Fast                                                                                 | 75628.95  | 3131.82  | 84805.84  | 62%      |
| Fastro                                                                               | 75615.90  | 9269.66  | 105784.45 | 62%      |
| NHttp                                                                                | 75113.63  | 3037.79  | 94880.22  | 62%      |
| Hono                                                                                 | 72678.22  | 3731.08  | 80881.98  | 60%      |
| Megalo                                                                               | 69926.89  | 3696.38  | 80487.69  | 57%      |
| Deso                                                                                 | 69070.25  | 3377.67  | 76511.74  | 57%      |
| Alosaur                                                                              | 63582.09  | 3559.72  | 67638.21  | 52%      |
| Cheetah                                                                              | 58527.23  | 3239.62  | 62929.68  | 48%      |
| Reno                                                                                 | 57270.54  | 2970.64  | 62505.98  | 47%      |
| http                                                                                 | 51882.02  | 6388.42  | 60421.62  | 43%      |
| Router                                                                               | 50070.68  | 5638.98  | 56789.18  | 41%      |
| Danet V2 (Hono)                                                                      | 49011.58  | 3616.14  | 52990.73  | 40%      |
| Danet (Oak)                                                                          | 45696.00  | 3386.81  | 47852.78  | 38%      |
| Oak                                                                                  | 40325.37  | 4193.95  | 42943.99  | 33%      |
| Node                                                                                 | 38245.94  | 3239.49  | 45735.94  | 31%      |
| Aqua                                                                                 | 37741.84  | 4601.30  | 46049.59  | 31%      |
| Little                                                                               | 35661.73  | 4565.49  | 42369.02  | 29%      |
| Fastify                                                                              | 34197.59  | 3322.84  | 36609.04  | 28%      |
| Dinatra                                                                              | 24998.23  | 3705.73  | 31864.92  | 21%      |
| Abc                                                                                  | 20640.48  | 2197.54  | 24840.81  | 17%      |
| Express (Deno)                                                                       | 11135.27  | 2338.89  | 13974.62  | 9%       |
| Express                                                                              | 9185.34   | 1588.40  | 11989.99  | 8%       |
| Servest                                                                              | 7933.77   | 2637.27  | 16994.26  | 7%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-2b51a6c5-0395-43b6-8fa3-40157cf0761c) |           |          |           |          |

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
| 20640.48 | 2197.54 | 24840.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19039.26 | 19811.56 | 20935.99 | 21898.28 | 22526.55 | 23076.30 | 24025.14 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      |

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
| 63582.09 | 3559.72 | 67638.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62307.84 | 63334.21 | 64101.68 | 64801.59 | 65372.43 | 65727.96 | 66475.06 |
| **Latency** | 690µs    | 721µs    | 794µs    | 830µs    | 857µs    | 888µs    | 998µs    |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37741.84 | 4601.30 | 46049.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35200.19 | 36832.38 | 38670.30 | 40107.43 | 40922.79 | 41823.95 | 43892.17 |
| **Latency** | 831µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 118862.72 | 14782.34 | 149524.74 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 101523.36 | 105475.28 | 118137.76 | 131503.87 | 140382.62 | 143200.20 | 147000.96 |
| **Latency** | 259µs     | 324µs     | 402µs     | 476µs     | 613µs     | 712µs     | 902µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58527.23 | 3239.62 | 62929.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57476.21 | 58423.30 | 58911.71 | 59563.27 | 59999.97 | 60237.23 | 60736.17 |
| **Latency** | 746µs    | 779µs    | 864µs    | 902µs    | 940µs    | 984µs    | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45696.00 | 3386.81 | 47852.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44624.62 | 45604.90 | 46375.47 | 46747.17 | 47019.46 | 47245.04 | 47592.42 |
| **Latency** | 945µs    | 983µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49011.58 | 3616.14 | 52990.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48448.87 | 48930.77 | 49596.07 | 49998.98 | 50504.77 | 50758.62 | 51263.03 |
| **Latency** | 887µs    | 920µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 83491.40 | 3941.23 | 99239.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 80698.71 | 82159.78 | 83521.35 | 85091.84 | 86712.16 | 88232.47 | 91860.10 |
| **Latency** | 509µs    | 552µs    | 599µs    | 640µs    | 682µs    | 723µs    | 809µs    |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69070.25 | 3377.67 | 76511.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67735.72 | 68458.66 | 69311.01 | 70261.46 | 71225.72 | 71690.09 | 72732.81 |
| **Latency** | 666µs    | 689µs    | 717µs    | 745µs    | 777µs    | 815µs    | 885µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24998.23 | 3705.73 | 31864.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22717.99 | 23901.33 | 25211.93 | 27505.32 | 28403.91 | 28943.33 | 29787.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Elysia](#elysia)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 101252.49 | 10235.24 | 136804.38 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 89428.08 | 93451.10 | 100060.76 | 107960.53 | 115222.30 | 119714.09 | 128353.33 |
| **Latency** | 286µs    | 372µs    | 487µs     | 574µs     | 687µs     | 813µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9185.34  | 1588.40 | 11989.99 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7049.00 | 8654.16 | 9438.17 | 9847.59 | 11211.31 | 11636.04 | 11831.93 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms     | 6ms      | 7ms      | 8ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11135.27 | 2338.89 | 13974.62 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7293.84 | 11007.16 | 11979.55 | 12495.33 | 12817.45 | 12913.54 | 13084.45 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 75628.95 | 3131.82 | 84805.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74018.56 | 75024.83 | 75937.41 | 76708.32 | 77641.28 | 78191.38 | 79458.09 |
| **Latency** | 580µs    | 613µs    | 664µs    | 701µs    | 727µs    | 752µs    | 830µs    |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34197.59 | 3322.84 | 36609.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33621.09 | 34217.51 | 34711.72 | 35185.13 | 35530.36 | 35751.58 | 36224.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 75615.90 | 9269.66 | 105784.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 69341.29 | 70812.85 | 73211.57 | 79624.52 | 87029.89 | 92438.78 | 100829.82 |
| **Latency** | 477µs    | 592µs    | 674µs    | 737µs    | 773µs    | 805µs    | 947µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 72678.22 | 3731.08 | 80881.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 70921.68 | 72138.66 | 73091.20 | 73984.40 | 74854.23 | 75245.36 | 76900.24 |
| **Latency** | 601µs    | 634µs    | 689µs    | 725µs    | 760µs    | 804µs    | 882µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51882.02 | 6388.42 | 60421.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47819.81 | 49791.77 | 53921.76 | 55359.34 | 56236.45 | 57018.42 | 58241.33 |
| **Latency** | 651µs    | 884µs    | 972µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 108368.42 | 12543.42 | 143061.24 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 93740.39 | 98211.14 | 106767.46 | 117002.19 | 125543.92 | 130135.51 | 138511.80 |
| **Latency** | 268µs    | 345µs    | 450µs     | 546µs     | 648µs     | 739µs     | 985µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35661.73 | 4565.49 | 42369.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33989.26 | 35509.90 | 36429.48 | 37695.76 | 38534.36 | 39115.86 | 40861.31 |
| **Latency** | 872µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69926.89 | 3696.38 | 80487.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 68615.32 | 69545.38 | 70461.58 | 71141.31 | 71918.04 | 72419.81 | 73508.28 |
| **Latency** | 626µs    | 658µs    | 718µs    | 754µs    | 786µs    | 826µs    | 900µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 75113.63 | 3037.79 | 94880.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 73413.37 | 74417.15 | 75205.27 | 76208.32 | 77159.24 | 78071.58 | 79535.45 |
| **Latency** | 583µs    | 617µs    | 668µs    | 705µs    | 733µs    | 758µs    | 855µs    |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38245.94 | 3239.49 | 45735.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37724.50 | 38162.92 | 38635.93 | 39107.84 | 39467.74 | 39720.34 | 40429.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40325.37 | 4193.95 | 42943.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39688.08 | 40533.79 | 41165.89 | 41523.76 | 42051.90 | 42324.48 | 42662.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

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
| 57270.54 | 2970.64 | 62505.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56325.90 | 57012.77 | 57622.53 | 58319.08 | 58723.28 | 59003.48 | 59553.38 |
| **Latency** | 764µs    | 796µs    | 885µs    | 923µs    | 954µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50070.68 | 5638.98 | 56789.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46710.25 | 48719.61 | 51698.51 | 53093.81 | 54062.60 | 54726.77 | 55721.88 |
| **Latency** | 667µs    | 945µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 121761.41 | 13026.84 | 150387.27 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 104529.32 | 111701.70 | 121917.73 | 131834.42 | 139435.19 | 142929.87 | 146874.10 |
| **Latency** | 247µs     | 310µs     | 387µs     | 478µs     | 607µs     | 688µs     | 896µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7933.77  | 2637.27 | 16994.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5202.36 | 6641.09 | 8315.69 | 9676.72 | 10426.52 | 11118.24 | 13291.06 |
| **Latency** | 4ms     | 5ms     | 6ms     | 6ms     | 7ms      | 10ms     | 13ms     |

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
| 76932.85 | 3477.34 | 111308.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 75228.29 | 76147.10 | 77113.36 | 78143.76 | 79203.03 | 79959.86 | 81866.28 |
| **Latency** | 567µs    | 602µs    | 652µs    | 690µs    | 718µs    | 745µs    | 834µs    |

---

<p align="center">Generated 2026-01-07T02:29:43.768Z</p>
