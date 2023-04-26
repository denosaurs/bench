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
| Bun                                                                                  | 61923.38 | 10425.77 | 87185.57  | 100%     |
| Hyper Express                                                                        | 56023.67 | 16217.12 | 75210.78  | 90%      |
| Deno                                                                                 | 44546.45 | 10489.79 | 58841.77  | 72%      |
| NHttp                                                                                | 41002.38 | 8475.15  | 55285.27  | 66%      |
| Fast                                                                                 | 40405.25 | 8458.89  | 86740.48  | 65%      |
| Hono                                                                                 | 40196.87 | 7959.29  | 46230.20  | 65%      |
| http                                                                                 | 39444.43 | 8955.38  | 94419.79  | 64%      |
| Fastro                                                                               | 38509.22 | 7784.46  | 43996.24  | 62%      |
| Deso                                                                                 | 37948.07 | 7388.24  | 50377.48  | 61%      |
| Megalo                                                                               | 36446.70 | 8467.26  | 43224.35  | 59%      |
| Node                                                                                 | 35034.04 | 5731.45  | 39999.80  | 57%      |
| Peko                                                                                 | 34690.84 | 7116.68  | 40326.76  | 56%      |
| Reno                                                                                 | 34245.91 | 6708.74  | 40291.33  | 55%      |
| Fastify                                                                              | 31736.46 | 5566.26  | 34803.25  | 51%      |
| Alosaur                                                                              | 30827.87 | 5569.09  | 42271.85  | 50%      |
| Router                                                                               | 27378.72 | 4211.46  | 33489.39  | 44%      |
| Little                                                                               | 23761.66 | 3620.54  | 28979.32  | 38%      |
| Aqua                                                                                 | 22794.70 | 3094.75  | 48134.20  | 37%      |
| Oak                                                                                  | 21733.10 | 3556.22  | 26414.38  | 35%      |
| Dinatra                                                                              | 18719.81 | 3601.30  | 25262.24  | 30%      |
| Abc                                                                                  | 14866.60 | 3764.75  | 20450.20  | 24%      |
| Opine                                                                                | 9157.03  | 2052.48  | 64824.89  | 15%      |
| Express (Deno)                                                                       | 8713.01  | 4435.32  | 150375.94 | 14%      |
| Express                                                                              | 6431.32  | 1428.87  | 11580.07  | 10%      |
| Servest                                                                              | 5477.60  | 1494.17  | 8026.70   | 9%       |
| Acorn                                                                                | 4022.04  | 3490.54  | 65495.10  | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-50892a63-f8fb-4f83-93a4-1b9d47be685c) |          |          |           |          |

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
| 14866.60 | 3764.75 | 20450.20 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8621.23 | 13051.96 | 15822.31 | 17806.30 | 18847.50 | 19111.66 | 19318.10 |
| **Latency** | 2ms     | 2ms      | 2ms      | 2ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4022.04  | 3490.54 | 65495.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1882.77 | 2467.79 | 3017.33 | 4217.56 | 8313.77 | 10422.45 | 12299.59 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 21ms    | 23ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30827.87 | 5569.09 | 42271.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23102.18 | 31826.12 | 33212.38 | 33561.58 | 33799.47 | 33926.14 | 34388.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22794.70 | 3094.75 | 48134.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20523.99 | 21740.56 | 23956.30 | 24204.24 | 24459.12 | 24746.09 | 25471.50 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61923.38 | 10425.77 | 87185.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50151.10 | 53895.61 | 61616.12 | 71900.92 | 73503.88 | 74417.32 | 76902.52 |
| **Latency** | 491µs    | 614µs    | 756µs    | 882µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44546.45 | 10489.79 | 58841.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28897.76 | 40852.50 | 49762.35 | 50464.58 | 50812.54 | 51025.72 | 51346.47 |
| **Latency** | 871µs    | 964µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37948.07 | 7388.24 | 50377.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30500.40 | 38650.11 | 41012.02 | 41565.60 | 42162.46 | 42342.97 | 42731.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18719.81 | 3601.30 | 25262.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15521.05 | 16516.98 | 20310.61 | 20574.93 | 20809.78 | 21151.50 | 22582.58 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6431.32  | 1428.87 | 11580.07 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4347.76 | 5442.86 | 7203.40 | 7330.52 | 7406.84 | 7448.53 | 7495.90 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 11ms    | 11ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 8713.01  | 4435.32 | 150375.94 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 7004.65 | 8572.30 | 9013.17 | 9263.66 | 9387.93 | 9777.05 | 11717.01 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 7ms     | 12ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40405.25 | 8458.89 | 86740.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31655.27 | 42112.84 | 44003.63 | 44346.05 | 44637.97 | 44894.06 | 45453.34 |
| **Latency** | 980µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31736.46 | 5566.26 | 34803.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31252.93 | 32516.52 | 33369.19 | 33781.53 | 34029.38 | 34166.06 | 34565.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38509.22 | 7784.46 | 43996.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30230.33 | 39381.35 | 41942.50 | 42447.90 | 42758.31 | 42952.13 | 43463.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40196.87 | 7959.29 | 46230.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32546.82 | 40217.43 | 43910.25 | 44351.65 | 44665.06 | 44860.20 | 45364.37 |
| **Latency** | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39444.43 | 8955.38 | 94419.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27822.79 | 38030.19 | 43473.43 | 43999.14 | 44316.10 | 44481.27 | 44807.05 |
| **Latency** | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56023.67 | 16217.12 | 75210.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32891.52 | 39674.33 | 62633.40 | 70695.75 | 72436.90 | 73175.62 | 74410.54 |
| **Latency** | 525µs    | 620µs    | 767µs    | 955µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23761.66 | 3620.54 | 28979.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21008.89 | 22404.93 | 25009.41 | 25640.60 | 26116.52 | 26401.67 | 26835.33 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36446.70 | 8467.26 | 43224.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22916.82 | 33654.63 | 40584.55 | 41054.79 | 41610.99 | 41952.70 | 42445.65 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41002.38 | 8475.15 | 55285.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31291.25 | 41514.24 | 44708.64 | 45392.30 | 45785.29 | 45993.47 | 46314.05 |
| **Latency** | 960µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35034.04 | 5731.45 | 39999.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34656.25 | 35861.08 | 36446.04 | 37104.01 | 37344.19 | 37469.07 | 37643.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21733.10 | 3556.22 | 26414.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18757.37 | 21861.04 | 23004.68 | 23299.00 | 24137.51 | 24368.44 | 24756.90 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9157.03  | 2052.48 | 64824.89 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 8020.08 | 8529.40 | 9409.16 | 9646.47 | 10109.43 | 10742.35 | 11412.34 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms      | 6ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34690.84 | 7116.68 | 40326.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23015.27 | 33504.13 | 38103.77 | 38633.73 | 38994.49 | 39135.62 | 39603.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34245.91 | 6708.74 | 40291.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26915.16 | 35629.45 | 37047.17 | 37395.91 | 37699.45 | 38168.83 | 38582.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27378.72 | 4211.46 | 33489.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23501.25 | 27710.06 | 28788.79 | 29416.86 | 29803.97 | 30028.84 | 30433.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5477.60  | 1494.17 | 8026.70 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3203.69 | 5453.35 | 6005.78 | 6334.67 | 6560.88 | 6674.10 | 7352.62 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 13ms    | 22ms    |

---

<p align="center">Generated 2023-04-26T01:40:44.053Z</p>
