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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Deno                                                                                 | 65138.83 | 15243.64 | 75883.87 | 100%     |
| Bun                                                                                  | 61490.29 | 10385.44 | 83018.31 | 94%      |
| Hyper Express                                                                        | 60659.69 | 16119.52 | 77645.08 | 93%      |
| NHttp                                                                                | 59539.72 | 13372.32 | 68817.23 | 91%      |
| Fast                                                                                 | 58529.27 | 12478.51 | 66124.86 | 90%      |
| Hono                                                                                 | 56788.91 | 14301.90 | 68101.05 | 87%      |
| Deso                                                                                 | 56556.48 | 10705.79 | 68988.12 | 87%      |
| Fastro                                                                               | 54737.57 | 13276.50 | 64120.60 | 84%      |
| Megalo                                                                               | 54376.62 | 12363.21 | 62643.88 | 83%      |
| Reno                                                                                 | 47303.30 | 4910.29  | 50302.54 | 73%      |
| http                                                                                 | 38813.90 | 8179.97  | 45724.41 | 60%      |
| Cheetah                                                                              | 36982.18 | 4949.14  | 39660.27 | 57%      |
| Peko                                                                                 | 35266.98 | 7230.94  | 43692.18 | 54%      |
| Node                                                                                 | 35251.66 | 6026.99  | 39026.55 | 54%      |
| Fastify                                                                              | 31927.95 | 6447.80  | 35215.53 | 49%      |
| Alosaur                                                                              | 31680.10 | 6648.35  | 39774.61 | 49%      |
| Router                                                                               | 27821.77 | 4666.22  | 32202.03 | 43%      |
| Little                                                                               | 24011.00 | 4036.85  | 29451.61 | 37%      |
| Aqua                                                                                 | 22990.62 | 3905.44  | 28196.39 | 35%      |
| Oak                                                                                  | 21565.13 | 3975.41  | 26971.54 | 33%      |
| Dinatra                                                                              | 19491.77 | 4013.96  | 38167.21 | 30%      |
| Abc                                                                                  | 17526.54 | 2650.54  | 22048.41 | 27%      |
| Opine                                                                                | 9671.64  | 1713.07  | 18148.46 | 15%      |
| Express (Deno)                                                                       | 8626.44  | 1711.84  | 11891.15 | 13%      |
| Express                                                                              | 5859.26  | 1599.82  | 11531.35 | 9%       |
| Servest                                                                              | 5741.73  | 1623.41  | 8562.21  | 9%       |
| Acorn                                                                                | 3578.94  | 5200.61  | 74347.71 | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-f1d635f8-94c1-40d4-972c-ddd256eeaee4) |          |          |          |          |

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
| 17526.54 | 2650.54 | 22048.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15644.88 | 17500.86 | 18069.95 | 18615.23 | 19420.21 | 19990.06 | 21066.71 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3578.94  | 5200.61 | 74347.71 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 98.35 | 2094.47 | 2692.21 | 3964.70 | 6089.29 | 8571.47 | 10456.81 |
| **Latency** | 5ms   | 7ms     | 17ms    | 22ms    | 26ms    | 28ms    | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31680.10 | 6648.35 | 39774.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27719.14 | 29844.98 | 34315.78 | 35167.01 | 35578.60 | 35915.64 | 36674.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22990.62 | 3905.44 | 28196.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21917.98 | 22533.16 | 24125.34 | 24853.87 | 25398.63 | 25847.33 | 26275.15 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61490.29 | 10385.44 | 83018.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50051.08 | 53637.88 | 58668.74 | 72539.21 | 74560.31 | 75268.75 | 76967.06 |
| **Latency** | 489µs    | 618µs    | 750µs    | 900µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36982.18 | 4949.14 | 39660.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36607.71 | 38101.55 | 38367.21 | 38702.49 | 39039.23 | 39201.89 | 39516.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65138.83 | 15243.64 | 75883.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29946.44 | 68073.57 | 72405.13 | 73799.69 | 74423.88 | 74759.30 | 75237.82 |
| **Latency** | 553µs    | 636µs    | 698µs    | 749µs    | 848µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56556.48 | 10705.79 | 68988.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37017.44 | 59200.17 | 60806.15 | 61475.89 | 62075.70 | 62264.21 | 62618.86 |
| **Latency** | 759µs    | 780µs    | 803µs    | 837µs    | 977µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19491.77 | 4013.96 | 38167.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16516.20 | 17449.22 | 20993.88 | 22225.52 | 22614.84 | 22779.80 | 23605.38 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5859.26  | 1599.82 | 11531.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4056.84 | 4305.76 | 6865.43 | 7133.75 | 7222.83 | 7257.71 | 7316.91 |
| **Latency** | 6ms     | 6ms     | 7ms     | 10ms    | 11ms    | 12ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8626.44  | 1711.84 | 11891.15 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6606.42 | 8356.76 | 9384.89 | 9524.33 | 9585.40 | 9623.94 | 10044.55 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58529.27 | 12478.51 | 66124.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32236.45 | 61984.95 | 64203.88 | 64805.87 | 65205.91 | 65439.96 | 65717.01 |
| **Latency** | 721µs    | 747µs    | 764µs    | 792µs    | 924µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31927.95 | 6447.80 | 35215.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29830.74 | 33110.95 | 33938.37 | 34469.99 | 34766.07 | 34903.51 | 35030.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54737.57 | 13276.50 | 64120.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26319.84 | 58019.13 | 61334.42 | 62177.90 | 62810.75 | 63164.30 | 63732.54 |
| **Latency** | 756µs    | 778µs    | 800µs    | 830µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56788.91 | 14301.90 | 68101.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26901.94 | 59626.26 | 64117.35 | 64924.03 | 65595.78 | 65832.47 | 66304.01 |
| **Latency** | 714µs    | 742µs    | 763µs    | 800µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38813.90 | 8179.97 | 45724.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31728.79 | 36257.96 | 42568.70 | 43418.24 | 43923.74 | 44110.61 | 44588.59 |
| **Latency** | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60659.69 | 16119.52 | 77645.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36421.87 | 39416.57 | 71109.28 | 73317.23 | 74231.33 | 74685.08 | 75354.30 |
| **Latency** | 513µs    | 587µs    | 750µs    | 793µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24011.00 | 4036.85 | 29451.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22049.62 | 23622.87 | 25381.52 | 26134.97 | 26403.00 | 26583.17 | 27282.67 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54376.62 | 12363.21 | 62643.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26130.06 | 57668.08 | 60203.04 | 60849.32 | 61235.61 | 61532.62 | 62227.41 |
| **Latency** | 770µs    | 792µs    | 815µs    | 845µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59539.72 | 13372.32 | 68817.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27910.06 | 63214.96 | 65801.34 | 66467.82 | 66941.52 | 67125.58 | 67409.92 |
| **Latency** | 701µs    | 728µs    | 746µs    | 772µs    | 912µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35251.66 | 6026.99 | 39026.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34105.47 | 36279.11 | 36861.94 | 37535.29 | 37835.58 | 38019.78 | 38419.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21565.13 | 3975.41 | 26971.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20007.45 | 20887.53 | 22708.64 | 23299.20 | 24022.99 | 24416.49 | 26201.94 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9671.64  | 1713.07 | 18148.46 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8066.50 | 9462.74 | 10094.69 | 10434.72 | 10738.91 | 11415.53 | 12568.89 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35266.98 | 7230.94 | 43692.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31613.92 | 33349.53 | 38409.23 | 39013.18 | 39460.01 | 39924.37 | 40348.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47303.30 | 4910.29 | 50302.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46268.85 | 47749.21 | 48396.89 | 49047.60 | 49363.85 | 49581.00 | 49994.52 |
| **Latency** | 984µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27821.77 | 4666.22 | 32202.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25532.36 | 26433.48 | 29614.53 | 30064.12 | 30565.59 | 30956.03 | 31522.53 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5741.73  | 1623.41 | 8562.21 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4340.85 | 5024.37 | 6314.59 | 6731.03 | 7076.93 | 7176.89 | 7547.14 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 15ms    | 19ms    |

---

<p align="center">Generated 2023-05-14T01:47:36.287Z</p>
