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
| Hyper Express                                                                        | 81594.40 | 16426.09 | 106770.69 | 100%     |
| Bun                                                                                  | 81260.04 | 9854.29  | 103779.18 | 100%     |
| Stric                                                                                | 80162.04 | 9706.45  | 102900.65 | 98%      |
| Vixeny (Bun)                                                                         | 77949.37 | 13375.64 | 101397.15 | 96%      |
| Elysia                                                                               | 77352.17 | 12493.90 | 100957.76 | 95%      |
| Deno                                                                                 | 63852.62 | 11569.15 | 89704.97  | 78%      |
| NHttp                                                                                | 56303.74 | 8067.09  | 83981.30  | 69%      |
| Vixeny (Deno)                                                                        | 53063.03 | 5138.29  | 77512.88  | 65%      |
| Fast                                                                                 | 52948.41 | 4763.05  | 80216.01  | 65%      |
| Hono                                                                                 | 52209.48 | 4713.51  | 73666.31  | 64%      |
| Fastro                                                                               | 50891.29 | 3511.93  | 79363.11  | 62%      |
| Megalo                                                                               | 49030.14 | 3582.64  | 69068.73  | 60%      |
| Deso                                                                                 | 46513.23 | 2739.89  | 60588.08  | 57%      |
| Alosaur                                                                              | 44787.40 | 3074.71  | 71469.91  | 55%      |
| http                                                                                 | 44598.62 | 4792.12  | 52510.19  | 55%      |
| Cheetah                                                                              | 43134.69 | 2551.84  | 48806.85  | 53%      |
| Router                                                                               | 42417.75 | 4095.75  | 51096.70  | 52%      |
| Reno                                                                                 | 41212.28 | 2180.65  | 46228.75  | 51%      |
| Danet V2 (Hono)                                                                      | 36290.62 | 2457.48  | 48031.41  | 44%      |
| Oak                                                                                  | 34335.29 | 3384.51  | 38144.72  | 42%      |
| Danet (Oak)                                                                          | 34033.20 | 2187.16  | 36203.73  | 42%      |
| Aqua                                                                                 | 33788.36 | 3567.26  | 39306.33  | 41%      |
| Little                                                                               | 33448.94 | 4394.71  | 39145.53  | 41%      |
| Dinatra                                                                              | 17932.47 | 2414.29  | 23336.17  | 22%      |
| Node                                                                                 | 17818.07 | 1645.73  | 27716.68  | 22%      |
| Fastify                                                                              | 16620.43 | 1659.09  | 24287.07  | 20%      |
| Opine                                                                                | 15396.56 | 2586.14  | 25717.81  | 19%      |
| Abc                                                                                  | 15270.91 | 1617.39  | 25141.45  | 19%      |
| Express (Deno)                                                                       | 12363.88 | 2169.67  | 14492.26  | 15%      |
| Express                                                                              | 6571.55  | 1008.17  | 8385.02   | 8%       |
| Servest                                                                              | 6379.80  | 1492.29  | 11057.63  | 8%       |
| Acorn                                                                                | 3745.08  | 2605.15  | 16998.39  | 5%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-3d54ebae-c89a-4509-b9d2-92842f01ea7c) |          |          |           |          |

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
| 15270.91 | 1617.39 | 25141.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13929.08 | 14842.15 | 15415.08 | 16189.10 | 16687.92 | 16856.80 | 17356.92 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3745.08  | 2605.15 | 16998.39 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1932.77 | 2445.89 | 2989.70 | 3931.77 | 5715.16 | 6807.71 | 15813.32 |
| **Latency** | 3ms     | 7ms     | 12ms    | 17ms    | 21ms    | 24ms    | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44787.40 | 3074.71 | 71469.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42776.76 | 43854.15 | 44744.65 | 45572.95 | 46625.03 | 49633.53 | 52381.04 |
| **Latency** | 974µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33788.36 | 3567.26 | 39306.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31867.45 | 33028.95 | 34602.01 | 35553.01 | 36251.25 | 36986.70 | 38001.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 81260.04 | 9854.29 | 103779.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 68128.12 | 73209.28 | 81052.94 | 89301.97 | 94883.16 | 97241.06 | 100779.20 |
| **Latency** | 365µs    | 455µs    | 576µs    | 726µs    | 923µs    | 1ms      | 1ms       |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43134.69 | 2551.84 | 48806.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41934.40 | 42609.74 | 43306.09 | 44173.28 | 45046.40 | 45403.36 | 46588.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34033.20 | 2187.16 | 36203.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33416.06 | 34125.75 | 34357.43 | 34648.98 | 34965.46 | 35203.42 | 35484.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36290.62 | 2457.48 | 48031.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35610.17 | 36306.23 | 36615.73 | 36919.83 | 37343.50 | 37506.70 | 37985.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63852.62 | 11569.15 | 89704.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52977.18 | 54175.25 | 58588.79 | 73961.37 | 82157.28 | 84825.78 | 88094.84 |
| **Latency** | 530µs    | 581µs    | 822µs    | 941µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46513.23 | 2739.89 | 60588.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44529.05 | 45395.33 | 46247.54 | 47397.09 | 49378.82 | 50625.78 | 53565.19 |
| **Latency** | 979µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17932.47 | 2414.29 | 23336.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15871.77 | 16992.02 | 18615.23 | 19363.81 | 19942.83 | 20249.42 | 20878.15 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 77352.17 | 12493.90 | 100957.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60844.56 | 68627.09 | 79729.49 | 84947.80 | 92669.51 | 95294.79 | 98702.29 |
| **Latency** | 406µs    | 497µs    | 569µs    | 748µs    | 985µs    | 1ms      | 1ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6571.55  | 1008.17 | 8385.02 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5099.20 | 6249.26 | 6697.59 | 6973.99 | 7888.25 | 7995.63 | 8146.96 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 8ms     | 10ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12363.88 | 2169.67 | 14492.26 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9349.90 | 12572.41 | 13201.78 | 13449.96 | 13570.07 | 13686.68 | 14093.52 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 9ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52948.41 | 4763.05 | 80216.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49019.01 | 50171.71 | 51468.05 | 55110.02 | 59565.64 | 62166.39 | 66037.38 |
| **Latency** | 702µs    | 882µs    | 967µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16620.43 | 1659.09 | 24287.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15827.14 | 16312.01 | 16939.77 | 17316.76 | 17619.13 | 17790.95 | 18252.61 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50891.29 | 3511.93 | 79363.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48567.53 | 49506.63 | 50448.56 | 51576.14 | 54413.24 | 57129.56 | 62227.11 |
| **Latency** | 844µs    | 914µs    | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52209.48 | 4713.51 | 73666.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48545.77 | 49617.27 | 50836.43 | 54373.02 | 58446.75 | 61194.76 | 64998.21 |
| **Latency** | 729µs    | 894µs    | 979µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44598.62 | 4792.12 | 52510.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40723.77 | 43604.73 | 45911.98 | 46979.21 | 48070.38 | 48952.74 | 50142.59 |
| **Latency** | 833µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 81594.40 | 16426.09 | 106770.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 57913.83 | 65204.54 | 82667.43 | 97120.19 | 100373.68 | 101826.20 | 104134.45 |
| **Latency** | 363µs    | 457µs    | 569µs    | 713µs    | 922µs     | 1ms       | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33448.94 | 4394.71 | 39145.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31326.93 | 33240.62 | 34442.64 | 35526.89 | 36310.02 | 36736.46 | 37720.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49030.14 | 3582.64 | 69068.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46381.99 | 47464.43 | 48692.47 | 50702.24 | 52940.52 | 54290.62 | 57382.49 |
| **Latency** | 856µs    | 949µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56303.74 | 8067.09 | 83981.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49482.72 | 50856.95 | 53066.83 | 61141.36 | 68406.23 | 72671.08 | 77431.65 |
| **Latency** | 589µs    | 774µs    | 927µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17818.07 | 1645.73 | 27716.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17321.70 | 17719.81 | 17987.59 | 18283.84 | 18614.48 | 18984.93 | 20118.02 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34335.29 | 3384.51 | 38144.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34071.00 | 34400.81 | 34916.67 | 35309.61 | 35764.07 | 36173.80 | 37148.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15396.56 | 2586.14 | 25717.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13143.85 | 15269.30 | 15974.82 | 16356.76 | 17290.57 | 18243.03 | 19808.20 |
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
| 41212.28 | 2180.65 | 46228.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39624.68 | 40926.29 | 41573.11 | 42112.36 | 42609.38 | 43040.66 | 44356.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42417.75 | 4095.75 | 51096.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39750.11 | 41500.68 | 43320.91 | 44427.44 | 45447.86 | 46045.22 | 46809.19 |
| **Latency** | 862µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 80162.04 | 9706.45 | 102900.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67783.71 | 71817.25 | 79751.64 | 87589.35 | 94104.63 | 95933.74 | 99615.26 |
| **Latency** | 370µs    | 462µs    | 586µs    | 739µs    | 932µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6379.80  | 1492.29 | 11057.63 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5171.77 | 5657.84 | 6575.33 | 7061.12 | 7963.90 | 8554.25 | 9225.97 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 14ms    |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 77949.37 | 13375.64 | 101397.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60281.27 | 65034.98 | 78352.18 | 90532.39 | 95273.20 | 97120.07 | 99862.74 |
| **Latency** | 374µs    | 463µs    | 587µs    | 782µs    | 955µs    | 1ms      | 1ms      |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53063.03 | 5138.29 | 77512.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49893.03 | 50713.14 | 51634.20 | 53119.11 | 60218.70 | 64603.62 | 71622.60 |
| **Latency** | 756µs    | 880µs    | 962µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-05-06T01:30:02.266Z</p>
