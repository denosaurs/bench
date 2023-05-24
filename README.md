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
| Deno                                                                                 | 64086.62 | 15105.63 | 74507.77  | 100%     |
| Bun                                                                                  | 60307.66 | 12314.55 | 80472.47  | 94%      |
| Fast                                                                                 | 58113.82 | 13221.37 | 66687.93  | 91%      |
| Hyper Express                                                                        | 57586.26 | 15955.82 | 75718.89  | 90%      |
| NHttp                                                                                | 57035.78 | 13934.29 | 66916.73  | 89%      |
| Hono                                                                                 | 56674.95 | 13249.97 | 66450.10  | 88%      |
| Fastro                                                                               | 56265.89 | 12167.77 | 64545.17  | 88%      |
| Deso                                                                                 | 55956.04 | 10331.78 | 62984.12  | 87%      |
| Megalo                                                                               | 54623.82 | 9501.66  | 60601.14  | 85%      |
| Reno                                                                                 | 45602.46 | 6191.42  | 50002.01  | 71%      |
| http                                                                                 | 39414.26 | 8494.38  | 63289.83  | 62%      |
| Cheetah                                                                              | 38941.79 | 3206.27  | 41107.52  | 61%      |
| Peko                                                                                 | 35813.19 | 9035.86  | 154639.18 | 56%      |
| Alosaur                                                                              | 32289.97 | 7020.83  | 41183.74  | 50%      |
| Fastify                                                                              | 30215.85 | 6821.43  | 34627.38  | 47%      |
| Node                                                                                 | 29229.03 | 10546.88 | 38006.84  | 46%      |
| Router                                                                               | 27023.87 | 5748.92  | 33853.08  | 42%      |
| Little                                                                               | 24207.11 | 5305.10  | 116920.20 | 38%      |
| Aqua                                                                                 | 23683.31 | 3691.13  | 35627.86  | 37%      |
| Oak                                                                                  | 22392.10 | 4538.36  | 32967.81  | 35%      |
| Dinatra                                                                              | 18384.66 | 4127.61  | 41220.85  | 29%      |
| Abc                                                                                  | 14584.28 | 3982.29  | 21052.69  | 23%      |
| Acorn                                                                                | 11937.17 | 18250.52 | 78259.28  | 19%      |
| Opine                                                                                | 9854.42  | 3072.92  | 75118.61  | 15%      |
| Express (Deno)                                                                       | 8338.06  | 1738.91  | 14233.02  | 13%      |
| Express                                                                              | 6550.74  | 1363.97  | 11160.14  | 10%      |
| Servest                                                                              | 5509.68  | 1643.29  | 8280.01   | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-24b7d035-585e-408a-a661-29f1b967baf4) |          |          |           |          |

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
| 14584.28 | 3982.29 | 21052.69 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8802.80 | 10006.86 | 16128.51 | 17134.58 | 18993.47 | 19439.01 | 19951.68 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 11937.17 | 18250.52 | 78259.28 |     |

| **Stat**    | 10    | 25    | 50      | 75       | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56.82 | 68.73 | 5406.01 | 11560.72 | 45097.99 | 59807.32 | 69212.20 |
| **Latency** | 5ms   | 7ms   | 16ms    | 23ms     | 27ms     | 28ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32289.97 | 7020.83 | 41183.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25845.82 | 30095.31 | 35220.38 | 36219.15 | 37038.14 | 37623.52 | 38456.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23683.31 | 3691.13 | 35627.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21977.99 | 23228.06 | 24241.66 | 25422.55 | 26124.29 | 26837.74 | 27914.63 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60307.66 | 12314.55 | 80472.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45412.62 | 49826.38 | 61489.89 | 72308.53 | 73929.58 | 74645.38 | 76716.87 |
| **Latency** | 490µs    | 607µs    | 751µs    | 941µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38941.79 | 3206.27 | 41107.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38452.23 | 39133.39 | 39547.00 | 39974.29 | 40216.30 | 40378.29 | 40621.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64086.62 | 15105.63 | 74507.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30038.40 | 67408.67 | 71130.48 | 72512.22 | 73124.20 | 73438.08 | 74023.58 |
| **Latency** | 566µs    | 648µs    | 711µs    | 762µs    | 858µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55956.04 | 10331.78 | 62984.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36386.61 | 58680.89 | 59850.13 | 60642.97 | 61287.55 | 61730.15 | 62362.27 |
| **Latency** | 754µs    | 791µs    | 821µs    | 861µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18384.66 | 4127.61 | 41220.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15231.38 | 16471.03 | 20113.45 | 20642.69 | 21239.94 | 22113.40 | 23518.35 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6550.74  | 1363.97 | 11160.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4343.16 | 6753.14 | 7171.27 | 7273.97 | 7341.62 | 7370.38 | 7443.91 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 11ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8338.06  | 1738.91 | 14233.02 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6244.56 | 8093.55 | 9130.65 | 9264.68 | 9337.06 | 9386.63 | 9887.69 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58113.82 | 13221.37 | 66687.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27386.74 | 61600.93 | 64266.62 | 64941.47 | 65455.54 | 65827.55 | 66266.49 |
| **Latency** | 694µs    | 743µs    | 768µs    | 809µs    | 934µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30215.85 | 6821.43 | 34627.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14123.71 | 31728.51 | 32780.59 | 33404.30 | 33672.01 | 33802.65 | 34075.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56265.89 | 12167.77 | 64545.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29572.41 | 59211.24 | 61733.87 | 62555.58 | 63481.15 | 63756.22 | 64255.16 |
| **Latency** | 713µs    | 766µs    | 796µs    | 835µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56674.95 | 13249.97 | 66450.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26609.02 | 59101.11 | 62997.11 | 64046.68 | 64748.27 | 65121.41 | 65832.18 |
| **Latency** | 699µs    | 743µs    | 779µs    | 834µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39414.26 | 8494.38 | 63289.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32001.26 | 35702.12 | 43321.13 | 44284.93 | 45043.20 | 45465.82 | 46222.11 |
| **Latency** | 887µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57586.26 | 15955.82 | 75718.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35731.10 | 37262.11 | 66739.41 | 71735.19 | 73231.46 | 73829.55 | 74604.35 |
| **Latency** | 518µs    | 620µs    | 762µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 24207.11 | 5305.10 | 116920.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21344.73 | 23403.28 | 25301.78 | 26559.76 | 27051.87 | 27605.35 | 29204.76 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54623.82 | 9501.66 | 60601.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41144.83 | 57082.20 | 58117.44 | 58719.96 | 59230.21 | 59630.00 | 60145.55 |
| **Latency** | 788µs    | 822µs    | 851µs    | 880µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57035.78 | 13934.29 | 66916.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26953.64 | 60214.97 | 63960.30 | 64743.79 | 65301.96 | 65534.07 | 66137.03 |
| **Latency** | 698µs    | 742µs    | 769µs    | 818µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 29229.03 | 10546.88 | 38006.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12823.72 | 13083.74 | 35523.09 | 36389.88 | 36904.06 | 37076.28 | 37345.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22392.10 | 4538.36 | 32967.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19312.36 | 21269.41 | 23875.21 | 24658.93 | 25792.28 | 26403.17 | 27116.54 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9854.42  | 3072.92 | 75118.61 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7203.24 | 9405.73 | 10162.29 | 10641.18 | 11415.06 | 12788.62 | 13923.98 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 11ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 35813.19 | 9035.86 | 154639.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28603.84 | 33020.14 | 39513.42 | 40526.55 | 41112.76 | 41422.82 | 42173.35 |
| **Latency** | 954µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45602.46 | 6191.42 | 50002.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44616.49 | 46540.79 | 47205.80 | 47834.42 | 48411.12 | 48640.84 | 49024.99 |
| **Latency** | 981µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27023.87 | 5748.92 | 33853.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19246.76 | 25779.93 | 29411.76 | 30274.48 | 31276.35 | 31933.65 | 32750.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5509.68  | 1643.29 | 8280.01 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4010.22 | 4603.87 | 6144.92 | 6579.11 | 6814.38 | 6892.80 | 7439.22 |
| **Latency** | 7ms     | 7ms     | 7ms     | 10ms    | 11ms    | 18ms    | 20ms    |

---

<p align="center">Generated 2023-05-24T01:47:49.279Z</p>
