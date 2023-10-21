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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| NHttp                                                                                | 43014.04 | 11029.43 | 57002.66  | 100%     |
| Vixeny (Deno)                                                                        | 37959.37 | 10383.72 | 50666.82  | 88%      |
| Stric                                                                                | 37858.50 | 9570.98  | 63553.69  | 88%      |
| Hyper Express                                                                        | 37730.96 | 14229.21 | 62281.52  | 88%      |
| Fast                                                                                 | 37610.67 | 10439.45 | 50744.26  | 87%      |
| Bun                                                                                  | 36606.72 | 11240.69 | 60991.98  | 85%      |
| Hono                                                                                 | 36416.66 | 9472.37  | 49345.53  | 85%      |
| Fastro                                                                               | 34298.40 | 9326.96  | 45232.61  | 80%      |
| Megalo                                                                               | 34170.19 | 9307.19  | 46753.47  | 79%      |
| Deso                                                                                 | 34157.93 | 9357.17  | 44358.24  | 79%      |
| Deno                                                                                 | 33045.85 | 11445.56 | 53414.84  | 77%      |
| Reno                                                                                 | 31900.16 | 6868.73  | 42426.21  | 74%      |
| Cheetah                                                                              | 31223.24 | 8096.12  | 40627.09  | 73%      |
| http                                                                                 | 24816.36 | 6625.14  | 39723.88  | 58%      |
| Alosaur                                                                              | 19739.84 | 5244.02  | 44510.28  | 46%      |
| Aqua                                                                                 | 16552.14 | 4224.27  | 35434.47  | 38%      |
| Router                                                                               | 16462.40 | 4263.92  | 26920.33  | 38%      |
| Node                                                                                 | 15640.46 | 2794.37  | 19720.95  | 36%      |
| Little                                                                               | 15071.02 | 5012.41  | 135746.61 | 35%      |
| Oak                                                                                  | 13860.48 | 3425.15  | 20571.35  | 32%      |
| Fastify                                                                              | 13011.82 | 2626.51  | 17132.94  | 30%      |
| Dinatra                                                                              | 11091.33 | 2665.71  | 19692.65  | 26%      |
| Abc                                                                                  | 9995.60  | 2000.45  | 17215.94  | 23%      |
| Danet (Oak)                                                                          | 8876.84  | 2635.67  | 17295.79  | 21%      |
| Opine                                                                                | 6725.68  | 1862.23  | 26954.18  | 16%      |
| Express (Deno)                                                                       | 5734.87  | 1617.60  | 36231.88  | 13%      |
| Acorn                                                                                | 5386.45  | 9052.71  | 110112.11 | 13%      |
| Servest                                                                              | 4165.92  | 1398.53  | 8860.74   | 10%      |
| Express                                                                              | 3866.00  | 1495.55  | 39306.69  | 9%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-2458a5f6-c9dd-4460-bdbc-1c90a8a70c62) |          |          |           |          |

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
| 9995.60  | 2000.45 | 17215.94 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6743.08 | 9153.53 | 10643.15 | 11305.42 | 11758.42 | 12126.17 | 12937.08 |
| **Latency** | 3ms     | 3ms     | 4ms      | 6ms      | 7ms      | 8ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5386.45  | 9052.71 | 110112.11 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 45.39 | 65.73 | 4380.97 | 6902.26 | 10612.00 | 15577.29 | 46631.88 |
| **Latency** | 9ms   | 11ms  | 21ms    | 28ms    | 33ms     | 34ms     | 40ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19739.84 | 5244.02 | 44510.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13032.30 | 17317.11 | 21819.66 | 23057.72 | 23852.34 | 24448.34 | 25634.38 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16552.14 | 4224.27 | 35434.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10988.75 | 15209.40 | 18010.59 | 19202.65 | 20005.31 | 20641.10 | 22285.25 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36606.72 | 11240.69 | 60991.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21129.20 | 28597.56 | 37022.52 | 45581.50 | 51169.65 | 53318.77 | 57165.07 |
| **Latency** | 696µs    | 851µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31223.24 | 8096.12 | 40627.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15685.77 | 29427.31 | 34704.45 | 36347.74 | 37631.17 | 38529.60 | 39564.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8876.84  | 2635.67 | 17295.79 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5597.84 | 7223.54 | 9414.38 | 10596.50 | 11302.67 | 12590.24 | 14797.99 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms      | 8ms      | 9ms      | 14ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 33045.85 | 11445.56 | 53414.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17411.10 | 22461.04 | 35017.78 | 43142.18 | 47273.64 | 48416.84 | 50066.46 |
| **Latency** | 828µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34157.93 | 9357.17 | 44358.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17110.15 | 30365.33 | 38610.73 | 40490.01 | 41831.92 | 42643.19 | 43601.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11091.33 | 2665.71 | 19692.65 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7813.62 | 10026.79 | 11426.08 | 13018.20 | 14010.13 | 14336.35 | 14904.90 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 12ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3866.00  | 1495.55 | 39306.69 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2380.27 | 3379.39 | 4256.29 | 4439.57 | 4542.45 | 4607.94 | 4801.88 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 17ms    | 19ms    | 27ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5734.87  | 1617.60 | 36231.88 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3740.48 | 5069.43 | 6200.88 | 6652.81 | 6884.81 | 7101.32 | 7621.32 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 11ms    | 13ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37610.67 | 10439.45 | 50744.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18123.43 | 33042.71 | 42489.77 | 44800.56 | 46518.26 | 47236.62 | 48594.40 |
| **Latency** | 944µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13011.82 | 2626.51 | 17132.94 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9445.46 | 12852.86 | 13855.18 | 14358.48 | 15019.11 | 15313.67 | 15782.74 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 10ms     |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34298.40 | 9326.96 | 45232.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17443.15 | 30119.96 | 38810.07 | 40808.27 | 42090.60 | 42812.96 | 44088.29 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36416.66 | 9472.37 | 49345.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17501.80 | 32998.03 | 40008.93 | 43013.88 | 44847.23 | 45536.55 | 46900.28 |
| **Latency** | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24816.36 | 6625.14 | 39723.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14226.78 | 21908.82 | 27821.21 | 29378.00 | 30203.24 | 30726.41 | 31524.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37730.96 | 14229.21 | 62281.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17919.92 | 24677.23 | 38750.81 | 50857.63 | 55862.65 | 57196.58 | 59132.43 |
| **Latency** | 670µs    | 815µs    | 989µs    | 1ms      | 2ms      | 2ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 15071.02 | 5012.41 | 135746.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10862.26 | 13700.02 | 15816.00 | 17117.72 | 18005.85 | 18511.97 | 19763.09 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34170.19 | 9307.19 | 46753.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17139.56 | 29236.44 | 38315.03 | 40840.94 | 42531.58 | 43350.03 | 44675.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43014.04 | 11029.43 | 57002.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20506.73 | 39815.85 | 47509.80 | 50426.86 | 52394.90 | 53457.79 | 54667.68 |
| **Latency** | 836µs    | 911µs    | 998µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15640.46 | 2794.37 | 19720.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12802.34 | 15405.28 | 16409.23 | 17041.80 | 17791.14 | 18245.48 | 19070.42 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13860.48 | 3425.15 | 20571.35 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9124.33 | 12712.06 | 14729.82 | 16012.72 | 16929.61 | 17535.63 | 19135.12 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6725.68  | 1862.23 | 26954.18 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5201.10 | 6242.65 | 7020.55 | 7446.75 | 7797.81 | 8021.57 | 12130.77 |
| **Latency** | 5ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 16ms     |

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
| 31900.16 | 6868.73 | 42426.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21039.98 | 30303.17 | 34504.02 | 36312.82 | 37528.70 | 38220.82 | 39108.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16462.40 | 4263.92 | 26920.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10931.37 | 14112.21 | 17490.17 | 19569.38 | 20664.96 | 21326.94 | 22603.87 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37858.50 | 9570.98 | 63553.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26182.36 | 30560.01 | 37134.01 | 45241.81 | 50735.26 | 54053.78 | 57717.61 |
| **Latency** | 684µs    | 853µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4165.92  | 1398.53 | 8860.74 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2238.04 | 3562.51 | 4637.74 | 5044.01 | 5390.23 | 5641.29 | 6628.79 |
| **Latency** | 6ms     | 9ms     | 11ms    | 14ms    | 18ms    | 22ms    | 30ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37959.37 | 10383.72 | 50666.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17850.09 | 33321.53 | 42863.27 | 45052.10 | 46470.28 | 47231.94 | 49077.95 |
| **Latency** | 933µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-10-21T01:23:11.176Z</p>
