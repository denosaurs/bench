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
| Bun                                                                                  | 60773.71 | 9838.19  | 82012.33  | 100%     |
| Hyper Express                                                                        | 55093.79 | 16983.99 | 75908.28  | 91%      |
| Fast                                                                                 | 50602.11 | 12767.34 | 64844.19  | 83%      |
| Deno                                                                                 | 50171.14 | 12455.67 | 64267.73  | 83%      |
| Hono                                                                                 | 47939.29 | 14211.31 | 60955.35  | 79%      |
| Megalo                                                                               | 45643.25 | 12490.82 | 72484.78  | 75%      |
| Fastro                                                                               | 44796.79 | 16226.40 | 58529.62  | 74%      |
| NHttp                                                                                | 43993.55 | 10625.26 | 60773.50  | 72%      |
| http                                                                                 | 40662.37 | 8306.56  | 47451.94  | 67%      |
| Reno                                                                                 | 38349.31 | 10225.92 | 48580.39  | 63%      |
| Peko                                                                                 | 38059.51 | 8018.39  | 47861.65  | 63%      |
| Node                                                                                 | 34824.93 | 5154.56  | 37712.37  | 57%      |
| Alosaur                                                                              | 33818.01 | 7077.06  | 39208.57  | 56%      |
| Fastify                                                                              | 32000.11 | 4951.79  | 34504.35  | 53%      |
| Router                                                                               | 29073.83 | 4963.83  | 33476.77  | 48%      |
| Little                                                                               | 26155.67 | 4343.65  | 29994.56  | 43%      |
| Aqua                                                                                 | 24216.56 | 3439.66  | 32547.15  | 40%      |
| Oak                                                                                  | 22877.73 | 4071.36  | 27704.94  | 38%      |
| Dinatra                                                                              | 17577.34 | 3652.19  | 24797.70  | 29%      |
| Abc                                                                                  | 15978.01 | 2331.65  | 19383.05  | 26%      |
| Express (Deno)                                                                       | 10211.43 | 4729.03  | 105149.54 | 17%      |
| Opine                                                                                | 9501.56  | 1379.99  | 14313.82  | 16%      |
| Express                                                                              | 6552.40  | 1439.90  | 11518.82  | 11%      |
| Servest                                                                              | 5622.96  | 4199.43  | 132282.21 | 9%       |
| Acorn                                                                                | 3976.88  | 3361.93  | 53429.19  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-ac261429-f169-4cf9-a00a-cca901d3105c) |          |          |           |          |

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
| 15978.01 | 2331.65 | 19383.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13109.47 | 15207.63 | 16319.49 | 17760.18 | 18231.76 | 18447.45 | 18810.01 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3976.88  | 3361.93 | 53429.19 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1967.51 | 2524.65 | 3031.13 | 4099.81 | 8043.39 | 10181.45 | 12279.58 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 21ms    | 22ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33818.01 | 7077.06 | 39208.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23801.47 | 34433.44 | 37049.76 | 37551.08 | 38105.79 | 38419.55 | 38877.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24216.56 | 3439.66 | 32547.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21206.00 | 22368.44 | 25614.06 | 25960.26 | 26257.78 | 26508.19 | 27520.17 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60773.71 | 9838.19 | 82012.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49075.07 | 51970.98 | 57978.79 | 70821.13 | 72939.50 | 73803.54 | 75809.95 |
| **Latency** | 496µs    | 625µs    | 764µs    | 906µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50171.14 | 12455.67 | 64267.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31860.51 | 43512.34 | 56528.58 | 58909.17 | 59898.57 | 60252.86 | 61131.52 |
| **Latency** | 650µs    | 736µs    | 921µs    | 992µs    | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17577.34 | 3652.19 | 24797.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13134.60 | 15938.31 | 18723.87 | 19547.59 | 20762.31 | 21299.28 | 21976.47 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6552.40  | 1439.90 | 11518.82 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4308.38 | 6628.71 | 7210.78 | 7354.99 | 7430.35 | 7474.48 | 7529.70 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 11ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 10211.43 | 4729.03 | 105149.54 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6681.95 | 8727.32 | 10507.80 | 11513.45 | 11910.68 | 12312.36 | 20781.96 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 6ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50602.11 | 12767.34 | 64844.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28600.73 | 51703.48 | 56415.69 | 57700.90 | 58416.69 | 58888.41 | 59687.76 |
| **Latency** | 771µs    | 822µs    | 872µs    | 939µs    | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32000.11 | 4951.79 | 34504.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31797.25 | 32470.01 | 33210.46 | 33750.88 | 34021.64 | 34137.07 | 34335.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44796.79 | 16226.40 | 58529.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16509.18 | 43000.72 | 52532.57 | 54201.63 | 55609.45 | 56313.32 | 57392.49 |
| **Latency** | 843µs    | 885µs    | 924µs    | 970µs    | 1ms      | 1ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47939.29 | 14211.31 | 60955.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24013.88 | 42261.94 | 55030.71 | 57511.31 | 58607.50 | 59130.63 | 59942.18 |
| **Latency** | 724µs    | 811µs    | 896µs    | 981µs    | 1ms      | 1ms      | 5ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40662.37 | 8306.56 | 47451.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29626.33 | 41979.74 | 44326.10 | 44796.61 | 45328.50 | 45551.88 | 45803.45 |
| **Latency** | 970µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55093.79 | 16983.99 | 75908.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34973.07 | 36525.90 | 63323.37 | 71630.02 | 73087.64 | 73667.56 | 74493.69 |
| **Latency** | 521µs    | 638µs    | 766µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26155.67 | 4343.65 | 29994.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22910.48 | 24485.69 | 27988.37 | 28466.08 | 28839.99 | 29426.48 | 29730.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45643.25 | 12490.82 | 72484.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27806.06 | 42362.20 | 51926.39 | 53143.41 | 54144.98 | 54530.44 | 55214.26 |
| **Latency** | 829µs    | 886µs    | 956µs    | 1ms      | 1ms      | 1ms      | 5ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43993.55 | 10625.26 | 60773.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29015.43 | 41803.70 | 43803.00 | 52324.56 | 57575.90 | 58098.09 | 59004.03 |
| **Latency** | 767µs    | 844µs    | 961µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34824.93 | 5154.56 | 37712.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34252.34 | 35404.18 | 36046.44 | 36746.23 | 37080.02 | 37208.95 | 37425.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22877.73 | 4071.36 | 27704.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19429.65 | 22950.34 | 24535.65 | 24743.47 | 24958.50 | 25324.30 | 25938.35 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9501.56  | 1379.99 | 14313.82 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8401.51 | 9006.76 | 9750.61 | 10034.52 | 10393.69 | 11333.30 | 12770.90 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms      | 6ms      | 6ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38059.51 | 8018.39 | 47861.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29371.11 | 36887.10 | 41968.04 | 42384.00 | 42648.72 | 42816.32 | 43296.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38349.31 | 10225.92 | 48580.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21221.65 | 38977.89 | 43108.32 | 44167.52 | 44980.50 | 45472.03 | 46142.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29073.83 | 4963.83 | 33476.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24009.60 | 27814.01 | 31400.98 | 31679.57 | 31905.39 | 32087.30 | 32499.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5622.96  | 4199.43 | 132282.21 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3115.86 | 5512.85 | 6045.22 | 6384.99 | 6525.91 | 6576.49 | 7664.58 |
| **Latency** | 7ms     | 8ms     | 8ms     | 8ms     | 12ms    | 13ms    | 22ms    |

---

<p align="center">Generated 2023-04-11T01:33:55.732Z</p>
