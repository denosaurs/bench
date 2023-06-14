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
| Deno                                                                                 | 42895.84 | 13076.59 | 60704.19  | 100%     |
| Bun                                                                                  | 41558.10 | 12725.64 | 61754.17  | 97%      |
| Fast                                                                                 | 38728.02 | 11398.34 | 52933.05  | 90%      |
| Hono                                                                                 | 37978.17 | 9946.61  | 52329.40  | 89%      |
| NHttp                                                                                | 36982.92 | 10188.11 | 50857.98  | 86%      |
| Hyper Express                                                                        | 36788.52 | 13895.80 | 60185.37  | 86%      |
| Deso                                                                                 | 36275.86 | 9294.76  | 48904.56  | 85%      |
| Megalo                                                                               | 36233.77 | 9062.75  | 47795.57  | 84%      |
| Fastro                                                                               | 34915.02 | 9688.44  | 47237.40  | 81%      |
| Reno                                                                                 | 31558.08 | 5498.90  | 38154.23  | 74%      |
| Cheetah                                                                              | 28389.02 | 5432.02  | 35908.88  | 66%      |
| http                                                                                 | 24505.27 | 6875.38  | 57724.37  | 57%      |
| Peko                                                                                 | 22419.51 | 5817.34  | 30596.72  | 52%      |
| Alosaur                                                                              | 20220.53 | 4856.58  | 30077.94  | 47%      |
| Node                                                                                 | 17609.30 | 3316.56  | 22501.86  | 41%      |
| Router                                                                               | 17015.74 | 4079.48  | 63104.49  | 40%      |
| Aqua                                                                                 | 15309.46 | 3576.36  | 32003.68  | 36%      |
| Fastify                                                                              | 14824.28 | 3145.21  | 20444.20  | 35%      |
| Little                                                                               | 14179.80 | 3511.30  | 38533.64  | 33%      |
| Oak                                                                                  | 12003.37 | 2727.33  | 18204.70  | 28%      |
| Dinatra                                                                              | 10436.80 | 2522.13  | 17110.00  | 24%      |
| Abc                                                                                  | 9224.28  | 1885.34  | 13006.76  | 22%      |
| Acorn                                                                                | 5727.87  | 8957.50  | 125260.96 | 13%      |
| Opine                                                                                | 5460.65  | 2520.19  | 38767.02  | 13%      |
| Express (Deno)                                                                       | 5257.58  | 1292.12  | 7499.64   | 12%      |
| Servest                                                                              | 3605.29  | 1135.43  | 14042.83  | 8%       |
| Express                                                                              | 3469.59  | 991.48   | 11088.39  | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-160e5cc7-4d5c-4060-8bcc-8addd56e6bcf) |          |          |           |          |

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
| 9224.28  | 1885.34 | 13006.76 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6884.89 | 8417.00 | 9871.78 | 10443.65 | 10904.47 | 11167.68 | 11798.67 |
| **Latency** | 3ms     | 4ms     | 4ms     | 6ms      | 8ms      | 9ms      | 13ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5727.87  | 8957.50 | 125260.96 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 47.53 | 63.41 | 5002.06 | 7903.50 | 12192.04 | 15707.28 | 48215.54 |
| **Latency** | 8ms   | 10ms  | 19ms    | 26ms    | 30ms     | 32ms     | 38ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20220.53 | 4856.58 | 30077.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14337.87 | 18249.48 | 21959.96 | 23319.64 | 24283.07 | 24735.63 | 25807.17 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15309.46 | 3576.36 | 32003.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11226.06 | 14113.56 | 16202.39 | 17522.55 | 18360.02 | 18926.35 | 20704.66 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 9ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41558.10 | 12725.64 | 61754.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23599.89 | 30226.05 | 44111.99 | 53652.68 | 56499.60 | 57831.91 | 59653.15 |
| **Latency** | 655µs    | 812µs    | 988µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28389.02 | 5432.02 | 35908.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21243.79 | 27300.79 | 30016.26 | 31657.99 | 32924.75 | 33423.12 | 34428.01 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42895.84 | 13076.59 | 60704.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19096.84 | 36379.72 | 48219.47 | 52841.54 | 54704.46 | 55431.68 | 57432.82 |
| **Latency** | 770µs    | 863µs    | 971µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36275.86 | 9294.76 | 48904.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17649.30 | 32947.81 | 40240.37 | 42718.00 | 44021.28 | 44922.06 | 46459.15 |
| **Latency** | 980µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10436.80 | 2522.13 | 17110.00 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7283.47 | 9410.57 | 10941.62 | 12033.35 | 13048.06 | 13503.48 | 14092.12 |
| **Latency** | 3ms     | 3ms     | 3ms      | 5ms      | 6ms      | 8ms      | 13ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3469.59  | 991.48 | 11088.39 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2313.49 | 2853.97 | 3624.40 | 4318.10 | 4472.05 | 4579.65 | 4743.79 |
| **Latency** | 11ms    | 11ms    | 12ms    | 16ms    | 19ms    | 22ms    | 28ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5257.58  | 1292.12 | 7499.64 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3401.60 | 4696.40 | 5784.31 | 6105.49 | 6351.99 | 6528.75 | 6983.62 |
| **Latency** | 7ms     | 7ms     | 8ms     | 10ms    | 12ms    | 15ms    | 20ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38728.02 | 11398.34 | 52933.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18421.03 | 31309.52 | 43715.60 | 47240.30 | 49175.82 | 50176.57 | 51729.06 |
| **Latency** | 889µs    | 973µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14824.28 | 3145.21 | 20444.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11103.46 | 14750.17 | 15917.86 | 16522.16 | 16923.56 | 17180.78 | 17570.67 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34915.02 | 9688.44 | 47237.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16949.35 | 31066.30 | 39228.31 | 41710.40 | 43191.60 | 44401.12 | 46059.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37978.17 | 9946.61 | 52329.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18642.35 | 33760.70 | 42052.64 | 44776.20 | 46622.93 | 47838.36 | 49821.01 |
| **Latency** | 954µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24505.27 | 6875.38 | 57724.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14907.78 | 21788.94 | 27118.90 | 29067.18 | 30110.59 | 30631.30 | 31623.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36788.52 | 13895.80 | 60185.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16593.73 | 24506.90 | 38435.05 | 49940.10 | 54253.69 | 55485.11 | 57387.63 |
| **Latency** | 683µs    | 835µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14179.80 | 3511.30 | 38533.64 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9562.89 | 12828.52 | 15122.61 | 16350.48 | 17053.09 | 17585.01 | 19359.21 |
| **Latency** | 2ms     | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36233.77 | 9062.75 | 47795.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18200.22 | 33839.15 | 40119.65 | 42230.74 | 43618.22 | 44429.06 | 45723.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36982.92 | 10188.11 | 50857.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17634.05 | 32411.10 | 40795.56 | 44057.82 | 46621.56 | 47765.22 | 49278.50 |
| **Latency** | 914µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17609.30 | 3316.56 | 22501.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14210.31 | 17389.95 | 18700.82 | 19370.94 | 19873.79 | 20130.65 | 20621.73 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12003.37 | 2727.33 | 18204.70 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8089.75 | 11081.55 | 12874.32 | 13692.28 | 14265.23 | 14672.12 | 16730.39 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5460.65  | 2520.19 | 38767.02 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 2992.98 | 4720.14 | 5587.19 | 6016.37 | 6593.72 | 8734.18 | 15091.52 |
| **Latency** | 7ms     | 8ms     | 9ms     | 10ms    | 12ms    | 14ms    | 21ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22419.51 | 5817.34 | 30596.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14065.60 | 20256.39 | 24657.49 | 26304.57 | 27254.33 | 27863.13 | 29091.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31558.08 | 5498.90 | 38154.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24022.82 | 30626.90 | 33421.29 | 34663.55 | 35804.67 | 36316.57 | 37304.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17015.74 | 4079.48 | 63104.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12038.80 | 15826.19 | 18124.20 | 19315.16 | 20212.83 | 20773.16 | 22129.40 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3605.29  | 1135.43 | 14042.83 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2211.82 | 3115.07 | 3903.71 | 4253.26 | 4584.63 | 4904.71 | 5247.47 |
| **Latency** | 7ms     | 10ms    | 13ms    | 17ms    | 20ms    | 24ms    | 30ms    |

---

<p align="center">Generated 2023-06-14T01:53:45.475Z</p>
