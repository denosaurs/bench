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
| Bun                                                                                  | 121444.87 | 4816.85 | 136484.91 | 100%     |
| Stric                                                                                | 121015.91 | 4916.45 | 137362.71 | 100%     |
| Hyper Express                                                                        | 118328.90 | 5736.80 | 132719.09 | 97%      |
| Elysia                                                                               | 115461.23 | 4966.05 | 128187.05 | 95%      |
| Deno                                                                                 | 101971.93 | 5988.33 | 116968.73 | 84%      |
| Vixeny (Deno)                                                                        | 94698.47  | 6761.55 | 114900.11 | 78%      |
| Fastro                                                                               | 94179.68  | 7007.42 | 114526.28 | 78%      |
| NHttp                                                                                | 93422.58  | 6786.28 | 119528.57 | 77%      |
| Fast                                                                                 | 91660.77  | 7224.86 | 119721.24 | 75%      |
| Hono                                                                                 | 88962.47  | 6591.10 | 109812.77 | 73%      |
| Megalo                                                                               | 81299.07  | 5032.70 | 95935.22  | 67%      |
| Alosaur                                                                              | 77482.00  | 4918.48 | 89945.44  | 64%      |
| Cheetah                                                                              | 68676.18  | 4373.15 | 76401.39  | 57%      |
| Reno                                                                                 | 68369.27  | 3939.69 | 72871.22  | 56%      |
| http                                                                                 | 58987.77  | 7597.24 | 68247.73  | 49%      |
| Danet V2 (Hono)                                                                      | 56450.30  | 4565.63 | 66418.02  | 46%      |
| Router                                                                               | 56449.52  | 6833.13 | 64828.13  | 46%      |
| Node                                                                                 | 52963.62  | 5500.10 | 64505.47  | 44%      |
| Danet (Oak)                                                                          | 52719.09  | 4235.66 | 56603.49  | 43%      |
| Oak                                                                                  | 47631.72  | 5020.82 | 52387.56  | 39%      |
| Fastify                                                                              | 47389.52  | 5567.69 | 53043.90  | 39%      |
| Aqua                                                                                 | 41762.32  | 4913.21 | 48866.85  | 34%      |
| Little                                                                               | 40405.39  | 5549.19 | 47048.35  | 33%      |
| Dinatra                                                                              | 30667.24  | 4884.90 | 42004.63  | 25%      |
| Abc                                                                                  | 26221.00  | 3427.72 | 32190.24  | 22%      |
| Express                                                                              | 13413.35  | 2760.21 | 18143.24  | 11%      |
| Express (Deno)                                                                       | 11981.39  | 2376.52 | 14746.51  | 10%      |
| Servest                                                                              | 9395.14   | 2850.47 | 20878.74  | 8%       |
| Acorn                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Deso                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00    | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-4a38d9c3-f74a-43dc-9a67-316ecf367d6f) |           |         |           |          |

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
| 26221.00 | 3427.72 | 32190.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23231.79 | 25358.34 | 26521.60 | 28310.55 | 29368.65 | 30147.01 | 30919.88 |
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
| 77482.00 | 4918.48 | 89945.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 75727.44 | 76609.81 | 77774.85 | 79248.39 | 80489.00 | 81332.21 | 83601.81 |
| **Latency** | 562µs    | 593µs    | 644µs    | 682µs    | 710µs    | 735µs    | 842µs    |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41762.32 | 4913.21 | 48866.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39495.26 | 41094.82 | 42417.83 | 44214.91 | 45385.77 | 46106.29 | 47825.27 |
| **Latency** | 762µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 121444.87 | 4816.85 | 136484.91 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 115656.09 | 118449.93 | 121600.83 | 124601.75 | 127124.01 | 129016.00 | 132201.82 |
| **Latency** | 256µs     | 332µs     | 405µs     | 488µs     | 555µs     | 605µs     | 745µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 68676.18 | 4373.15 | 76401.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67330.70 | 68247.52 | 69000.17 | 70007.49 | 71058.15 | 71702.03 | 72512.01 |
| **Latency** | 630µs    | 663µs    | 729µs    | 768µs    | 808µs    | 857µs    | 919µs    |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52719.09 | 4235.66 | 56603.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51809.69 | 52605.99 | 53240.91 | 54067.33 | 54811.67 | 55275.90 | 56112.71 |
| **Latency** | 815µs    | 852µs    | 954µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56450.30 | 4565.63 | 66418.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55233.64 | 56060.86 | 56811.36 | 57910.46 | 59074.66 | 59652.06 | 60607.71 |
| **Latency** | 761µs    | 797µs    | 888µs    | 932µs    | 992µs    | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 101971.93 | 5988.33 | 116968.73 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 96553.47 | 99000.94 | 102213.24 | 105541.53 | 108264.44 | 109690.28 | 112330.23 |
| **Latency** | 373µs    | 437µs    | 491µs     | 541µs     | 595µs     | 634µs     | 728µs     |

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
| 30667.24 | 4884.90 | 42004.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27813.67 | 29749.97 | 31001.95 | 33572.62 | 35202.92 | 35895.79 | 37287.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Elysia](#elysia)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 115461.23 | 4966.05 | 128187.05 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 109519.34 | 112514.20 | 115569.63 | 118935.62 | 121636.54 | 122810.54 | 125665.68 |
| **Latency** | 277µs     | 356µs     | 427µs     | 497µs     | 575µs     | 642µs     | 820µs     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13413.35 | 2760.21 | 18143.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10221.82 | 12049.76 | 13341.50 | 15179.66 | 17080.14 | 17468.87 | 17934.11 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11981.39 | 2376.52 | 14746.51 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8307.56 | 11603.43 | 12824.34 | 13396.52 | 13718.97 | 13877.33 | 14158.23 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 91660.77 | 7224.86 | 119721.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 85554.48 | 87593.50 | 91002.91 | 95314.65 | 100322.89 | 103409.21 | 110124.03 |
| **Latency** | 429µs    | 493µs    | 549µs    | 598µs    | 637µs     | 670µs     | 768µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47389.52 | 5567.69 | 53043.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46519.25 | 47337.11 | 48228.59 | 49120.98 | 50173.22 | 50711.97 | 51676.50 |
| **Latency** | 945µs    | 979µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 94179.68 | 7007.42 | 114526.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 88213.84 | 90236.38 | 93911.75 | 97882.63 | 102248.41 | 105295.65 | 109614.69 |
| **Latency** | 414µs    | 479µs    | 533µs    | 583µs    | 624µs     | 663µs     | 767µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 88962.47 | 6591.10 | 109812.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 84908.14 | 86123.37 | 88168.23 | 91897.20 | 95911.82 | 99229.02 | 104106.48 |
| **Latency** | 451µs    | 511µs    | 564µs    | 610µs    | 647µs    | 687µs    | 790µs     |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58987.77 | 7597.24 | 68247.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54577.98 | 57610.35 | 60974.92 | 63132.80 | 64398.91 | 64984.05 | 66900.51 |
| **Latency** | 590µs    | 752µs    | 843µs    | 888µs    | 943µs    | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 118328.90 | 5736.80 | 132719.09 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 112510.82 | 115523.47 | 118840.11 | 121725.41 | 124158.22 | 125784.93 | 128466.80 |
| **Latency** | 268µs     | 347µs     | 419µs     | 490µs     | 560µs     | 615µs     | 781µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40405.39 | 5549.19 | 47048.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37526.84 | 40628.78 | 41622.72 | 42828.69 | 44025.69 | 44713.25 | 45969.22 |
| **Latency** | 793µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 81299.07 | 5032.70 | 95935.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 79377.52 | 80204.84 | 81138.90 | 82717.42 | 85238.49 | 86619.28 | 91140.45 |
| **Latency** | 529µs    | 565µs    | 614µs    | 653µs    | 686µs    | 730µs    | 812µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 93422.58 | 6786.28 | 119528.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 87805.16 | 89446.43 | 92589.73 | 97084.26 | 101224.10 | 104188.88 | 109617.26 |
| **Latency** | 422µs    | 485µs    | 539µs    | 587µs    | 623µs     | 654µs     | 754µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52963.62 | 5500.10 | 64505.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51452.88 | 52480.24 | 53539.82 | 54768.54 | 56128.13 | 56996.93 | 59015.00 |
| **Latency** | 779µs    | 880µs    | 921µs    | 962µs    | 1ms      | 1ms      | 1ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47631.72 | 5020.82 | 52387.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46868.09 | 47374.98 | 48256.29 | 49437.81 | 50214.23 | 50628.60 | 51712.51 |
| **Latency** | 956µs    | 983µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

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
| 68369.27 | 3939.69 | 72871.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67324.23 | 67921.32 | 68604.03 | 69579.38 | 70628.96 | 71235.33 | 72179.77 |
| **Latency** | 636µs    | 667µs    | 734µs    | 773µs    | 803µs    | 851µs    | 936µs    |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56449.52 | 6833.13 | 64828.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53450.67 | 55386.45 | 57874.90 | 59901.46 | 61269.90 | 61966.98 | 63479.38 |
| **Latency** | 611µs    | 797µs    | 887µs    | 930µs    | 985µs    | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 121015.91 | 4916.45 | 137362.71 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 114946.21 | 117911.34 | 121156.23 | 124128.85 | 126915.76 | 128960.06 | 131823.10 |
| **Latency** | 257µs     | 333µs     | 407µs     | 490µs     | 557µs     | 607µs     | 751µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9395.14  | 2850.47 | 20878.74 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5899.50 | 8139.62 | 9758.90 | 11091.97 | 12492.62 | 13231.54 | 15827.65 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 6ms      | 9ms      | 11ms     |

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
| 94698.47 | 6761.55 | 114900.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 88814.43 | 91077.74 | 94663.67 | 98391.66 | 102134.12 | 104516.52 | 107994.93 |
| **Latency** | 412µs    | 476µs    | 530µs    | 580µs    | 620µs     | 657µs     | 764µs     |

---

<p align="center">Generated 2026-07-09T04:15:52.733Z</p>
