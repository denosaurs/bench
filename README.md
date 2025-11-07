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
| Bun                                                                                  | 124268.00 | 13085.48 | 150412.03 | 100%     |
| Stric                                                                                | 114131.58 | 13974.11 | 150915.26 | 92%      |
| Hyper Express                                                                        | 113489.98 | 12756.04 | 148505.42 | 91%      |
| Elysia                                                                               | 90409.76  | 9064.20  | 130869.73 | 73%      |
| Deno                                                                                 | 84422.75  | 4662.60  | 104803.11 | 68%      |
| NHttp                                                                                | 78177.80  | 3832.40  | 87611.85  | 63%      |
| Vixeny (Deno)                                                                        | 76333.43  | 3469.84  | 91724.24  | 61%      |
| Fastro                                                                               | 75468.68  | 9958.53  | 106900.48 | 61%      |
| Fast                                                                                 | 74857.80  | 4605.68  | 91769.69  | 60%      |
| Hono                                                                                 | 74730.92  | 4289.25  | 111386.55 | 60%      |
| Megalo                                                                               | 70664.51  | 3605.14  | 74803.41  | 57%      |
| Deso                                                                                 | 68714.40  | 4085.79  | 81045.65  | 55%      |
| Alosaur                                                                              | 64386.97  | 3692.04  | 68263.83  | 52%      |
| Cheetah                                                                              | 58966.39  | 3339.37  | 61882.35  | 47%      |
| Reno                                                                                 | 57845.78  | 2876.97  | 60539.94  | 47%      |
| http                                                                                 | 52622.32  | 6270.97  | 63449.06  | 42%      |
| Router                                                                               | 50330.48  | 5740.75  | 58539.99  | 41%      |
| Danet V2 (Hono)                                                                      | 47505.41  | 3351.42  | 51217.81  | 38%      |
| Danet (Oak)                                                                          | 42585.65  | 4256.90  | 47612.62  | 34%      |
| Oak                                                                                  | 40106.61  | 4106.14  | 43123.72  | 32%      |
| Little                                                                               | 36427.63  | 4835.98  | 43097.72  | 29%      |
| Node                                                                                 | 35733.29  | 2966.18  | 42656.19  | 29%      |
| Aqua                                                                                 | 35403.79  | 4420.27  | 44213.42  | 28%      |
| Fastify                                                                              | 31882.14  | 3083.91  | 34562.35  | 26%      |
| Dinatra                                                                              | 23363.35  | 3663.32  | 29288.37  | 19%      |
| Abc                                                                                  | 19587.23  | 2281.32  | 29364.06  | 16%      |
| Express (Deno)                                                                       | 11049.91  | 2431.20  | 14011.81  | 9%       |
| Express                                                                              | 8692.36   | 1628.88  | 11838.92  | 7%       |
| Servest                                                                              | 7594.98   | 2514.57  | 15958.29  | 6%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-1445b74d-6fe0-4763-be7e-cc8926358859) |           |          |           |          |

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
| 19587.23 | 2281.32 | 29364.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17421.08 | 18553.21 | 19954.02 | 21056.18 | 21742.47 | 22110.67 | 22779.93 |
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
| 64386.97 | 3692.04 | 68263.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 62708.52 | 64115.46 | 65033.60 | 65700.21 | 66351.50 | 66709.04 | 67574.74 |
| **Latency** | 680µs    | 711µs    | 784µs    | 821µs    | 849µs    | 880µs    | 986µs    |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35403.79 | 4420.27 | 44213.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32604.60 | 34203.19 | 36126.13 | 37519.29 | 39349.04 | 39807.32 | 41673.70 |
| **Latency** | 871µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 124268.00 | 13085.48 | 150412.03 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 105863.52 | 114510.13 | 125304.69 | 134470.17 | 141604.89 | 143945.07 | 147767.11 |
| **Latency** | 242µs     | 305µs     | 382µs     | 466µs     | 596µs     | 677µs     | 875µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58966.39 | 3339.37 | 61882.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57611.90 | 58636.08 | 59533.24 | 60101.38 | 60627.94 | 60853.74 | 61294.44 |
| **Latency** | 740µs    | 773µs    | 857µs    | 895µs    | 936µs    | 976µs    | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42585.65 | 4256.90 | 47612.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38693.19 | 40804.74 | 43340.76 | 45420.90 | 46560.35 | 46804.08 | 47212.37 |
| **Latency** | 981µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47505.41 | 3351.42 | 51217.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46676.83 | 47499.91 | 47915.59 | 48555.54 | 48992.78 | 49208.66 | 49736.63 |
| **Latency** | 914µs    | 947µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 84422.75 | 4662.60 | 104803.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 79738.35 | 82479.29 | 84385.50 | 86493.73 | 89305.41 | 91164.08 | 96719.77 |
| **Latency** | 490µs    | 543µs    | 593µs    | 637µs    | 688µs    | 731µs    | 829µs    |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 68714.40 | 4085.79 | 81045.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66701.19 | 68176.97 | 69309.00 | 70331.86 | 71177.13 | 71644.81 | 72958.78 |
| **Latency** | 665µs    | 689µs    | 719µs    | 748µs    | 789µs    | 833µs    | 928µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23363.35 | 3663.32 | 29288.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20634.86 | 21812.28 | 23758.89 | 25974.26 | 26879.28 | 27304.23 | 28103.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 3ms      |

### [Elysia](#elysia)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 90409.76 | 9064.20 | 130869.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 80107.23 | 83939.54 | 89548.52 | 95775.35 | 101629.26 | 106363.20 | 116967.26 |
| **Latency** | 320µs    | 417µs    | 532µs    | 644µs    | 794µs     | 949µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8692.36  | 1628.88 | 11838.92 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6423.39 | 8072.24 | 9055.22 | 9328.44 | 10726.94 | 11389.86 | 11732.66 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 7ms      | 8ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11049.91 | 2431.20 | 14011.81 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7025.63 | 10660.69 | 12188.22 | 12562.52 | 12734.29 | 12823.42 | 13113.78 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 7ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 74857.80 | 4605.68 | 91769.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72151.23 | 73806.24 | 74945.04 | 76314.44 | 78255.70 | 81331.41 | 86297.02 |
| **Latency** | 576µs    | 616µs    | 671µs    | 711µs    | 747µs    | 794µs    | 887µs    |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31882.14 | 3083.91 | 34562.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31014.76 | 31899.56 | 32462.95 | 32869.72 | 33164.47 | 33377.68 | 33849.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 75468.68 | 9958.53 | 106900.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 68385.09 | 69941.03 | 71953.25 | 79824.74 | 89127.58 | 96350.17 | 103827.77 |
| **Latency** | 468µs    | 590µs    | 679µs    | 744µs    | 779µs    | 810µs    | 983µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 74730.92 | 4289.25 | 111386.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72722.01 | 73835.73 | 75017.29 | 76123.59 | 77295.63 | 78029.55 | 80030.07 |
| **Latency** | 583µs    | 617µs    | 671µs    | 709µs    | 741µs    | 775µs    | 855µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52622.32 | 6270.97 | 63449.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48559.21 | 50512.27 | 54909.82 | 55996.66 | 56922.52 | 57575.24 | 58430.14 |
| **Latency** | 638µs    | 887µs    | 960µs    | 993µs    | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 113489.98 | 12756.04 | 148505.42 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 98249.27 | 104025.11 | 112530.29 | 122073.70 | 130805.66 | 136876.94 | 144018.77 |
| **Latency** | 257µs    | 329µs     | 419µs     | 529µs     | 629µs     | 722µs     | 950µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36427.63 | 4835.98 | 43097.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34610.26 | 36100.18 | 37210.19 | 38872.63 | 39528.05 | 40371.35 | 41572.59 |
| **Latency** | 854µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 70664.51 | 3605.14 | 74803.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69033.89 | 70275.00 | 71133.08 | 71913.67 | 72582.21 | 73118.26 | 74050.65 |
| **Latency** | 620µs    | 652µs    | 711µs    | 748µs    | 778µs    | 813µs    | 881µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78177.80 | 3832.40 | 87611.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 76153.56 | 77204.70 | 78391.07 | 79548.17 | 80988.71 | 82325.25 | 85408.72 |
| **Latency** | 554µs    | 591µs    | 643µs    | 680µs    | 711µs    | 745µs    | 838µs    |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35733.29 | 2966.18 | 42656.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35166.48 | 35694.74 | 36119.59 | 36544.64 | 36937.39 | 37211.06 | 37954.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40106.61 | 4106.14 | 43123.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39350.79 | 40240.51 | 40901.76 | 41432.88 | 41853.75 | 42137.91 | 42553.25 |
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
| 57845.78 | 2876.97 | 60539.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56853.07 | 57634.10 | 58387.84 | 58797.25 | 59322.25 | 59581.16 | 59979.62 |
| **Latency** | 754µs    | 787µs    | 876µs    | 915µs    | 949µs    | 997µs    | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50330.48 | 5740.75 | 58539.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47125.57 | 48904.84 | 52067.51 | 53343.84 | 54261.60 | 54777.04 | 55941.02 |
| **Latency** | 661µs    | 941µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 114131.58 | 13974.11 | 150915.26 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 100605.36 | 104355.13 | 108458.13 | 123962.94 | 137243.79 | 142132.76 | 146956.64 |
| **Latency** | 276µs     | 346µs     | 417µs     | 482µs     | 649µs     | 752µs     | 916µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7594.98  | 2514.57 | 15958.29 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5231.14 | 6308.07 | 7945.32 | 9199.90 | 10204.36 | 10904.98 | 12198.89 |
| **Latency** | 5ms     | 5ms     | 6ms     | 6ms     | 8ms      | 11ms     | 13ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 76333.43 | 3469.84 | 91724.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74522.93 | 75438.26 | 76463.98 | 77439.91 | 78601.45 | 79668.23 | 81485.92 |
| **Latency** | 570µs    | 606µs    | 658µs    | 696µs    | 725µs    | 757µs    | 851µs    |

---

<p align="center">Generated 2025-11-07T02:11:53.593Z</p>
