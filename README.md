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
| Hyper Express                                                                        | 60961.67 | 17607.71 | 82165.25  | 100%     |
| Bun                                                                                  | 60865.38 | 11472.77 | 80606.51  | 100%     |
| Deno                                                                                 | 53936.88 | 13223.10 | 68940.88  | 88%      |
| Hono                                                                                 | 52167.90 | 14309.62 | 68429.18  | 86%      |
| Fast                                                                                 | 51955.49 | 12225.01 | 63743.42  | 85%      |
| Megalo                                                                               | 45059.45 | 14212.31 | 61799.45  | 74%      |
| Fastro                                                                               | 44051.03 | 15989.66 | 62324.25  | 72%      |
| http                                                                                 | 42853.21 | 9084.68  | 50732.16  | 70%      |
| Peko                                                                                 | 38683.69 | 8555.90  | 80580.83  | 63%      |
| Reno                                                                                 | 38009.61 | 11093.43 | 104649.10 | 62%      |
| Node                                                                                 | 37798.97 | 7328.81  | 43631.74  | 62%      |
| Fastify                                                                              | 33983.46 | 6402.79  | 38928.29  | 56%      |
| Alosaur                                                                              | 33328.04 | 7400.80  | 41376.18  | 55%      |
| Router                                                                               | 29325.72 | 5227.13  | 34780.00  | 48%      |
| Little                                                                               | 26544.49 | 5103.38  | 32679.98  | 44%      |
| Oak                                                                                  | 23211.22 | 5185.15  | 77085.33  | 38%      |
| Aqua                                                                                 | 22623.32 | 4389.74  | 29793.51  | 37%      |
| Dinatra                                                                              | 17759.41 | 4110.77  | 34400.28  | 29%      |
| Abc                                                                                  | 15704.15 | 2964.84  | 20595.00  | 26%      |
| Express (Deno)                                                                       | 10317.49 | 4924.30  | 83890.18  | 17%      |
| Opine                                                                                | 9481.53  | 1397.79  | 12538.73  | 16%      |
| Express                                                                              | 7166.33  | 1703.27  | 11160.22  | 12%      |
| Servest                                                                              | 5487.70  | 1611.77  | 8896.88   | 9%       |
| Acorn                                                                                | 5347.88  | 5844.92  | 60790.89  | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-08be2324-252d-4fa5-8cd5-eccfbbcd6b54) |          |          |           |          |

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
| 15704.15 | 2964.84 | 20595.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11918.58 | 14501.73 | 16139.02 | 17924.14 | 18913.13 | 19260.41 | 19766.06 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5347.88  | 5844.92 | 60790.89 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 93.11 | 2335.96 | 3543.19 | 5513.91 | 11222.38 | 21436.46 | 25590.98 |
| **Latency** | 4ms   | 5ms     | 12ms    | 18ms    | 22ms     | 23ms     | 27ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33328.04 | 7400.80 | 41376.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23204.65 | 30146.79 | 36921.81 | 37985.17 | 38722.68 | 39015.51 | 39812.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22623.32 | 4389.74 | 29793.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16810.10 | 21211.68 | 24368.49 | 25461.38 | 26063.17 | 26427.45 | 27108.02 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60865.38 | 11472.77 | 80606.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47500.44 | 52064.67 | 59503.46 | 72019.02 | 74717.61 | 75917.91 | 77639.21 |
| **Latency** | 483µs    | 616µs    | 732µs    | 923µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53936.88 | 13223.10 | 68940.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34064.93 | 46536.14 | 60038.72 | 63623.85 | 64728.49 | 65369.10 | 66331.35 |
| **Latency** | 604µs    | 718µs    | 831µs    | 934µs    | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17759.41 | 4110.77 | 34400.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13336.67 | 15456.40 | 19406.66 | 20511.04 | 21135.80 | 21526.90 | 22605.49 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7166.33  | 1703.27 | 11160.22 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4718.14 | 6677.77 | 7967.20 | 8158.71 | 8275.36 | 8358.38 | 8723.51 |
| **Latency** | 5ms     | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10317.49 | 4924.30 | 83890.18 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6485.05 | 7976.56 | 10838.06 | 11699.67 | 12437.27 | 13353.68 | 18152.10 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 6ms      | 7ms      | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51955.49 | 12225.01 | 63743.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33569.74 | 49168.89 | 57626.87 | 59031.17 | 59955.17 | 60529.51 | 61783.88 |
| **Latency** | 739µs    | 789µs    | 854µs    | 944µs    | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33983.46 | 6402.79 | 38928.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29850.64 | 34687.29 | 35961.73 | 36765.69 | 37321.52 | 37550.31 | 38150.22 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44051.03 | 15989.66 | 62324.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17033.83 | 40114.30 | 49667.87 | 55952.63 | 57264.70 | 58055.37 | 59309.87 |
| **Latency** | 784µs    | 831µs    | 902µs    | 1ms      | 1ms      | 1ms      | 7ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52167.90 | 14309.62 | 68429.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30626.68 | 47258.95 | 57684.13 | 60976.01 | 65493.79 | 66316.66 | 67459.80 |
| **Latency** | 699µs    | 756µs    | 827µs    | 923µs    | 1ms      | 1ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42853.21 | 9084.68 | 50732.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31806.28 | 39112.89 | 47186.23 | 48508.57 | 49181.48 | 49440.50 | 49847.69 |
| **Latency** | 894µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60961.67 | 17607.71 | 82165.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36143.27 | 40619.43 | 67996.36 | 76906.79 | 78636.83 | 79314.94 | 80571.55 |
| **Latency** | 482µs    | 583µs    | 698µs    | 897µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26544.49 | 5103.38 | 32679.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21247.19 | 25274.16 | 28239.54 | 29875.41 | 30286.87 | 30599.47 | 31259.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45059.45 | 14212.31 | 61799.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21640.19 | 36504.29 | 52411.46 | 55335.59 | 57051.13 | 58877.47 | 60334.84 |
| **Latency** | 791µs    | 849µs    | 915µs    | 1ms      | 1ms      | 2ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37798.97 | 7328.81 | 43631.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30770.39 | 38705.96 | 40292.57 | 41275.02 | 41942.26 | 42307.51 | 42961.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23211.22 | 5185.15 | 77085.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18141.33 | 21401.56 | 25088.67 | 25986.55 | 26502.33 | 26755.71 | 27560.18 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9481.53  | 1397.79 | 12538.73 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7931.07 | 8978.05 | 10001.02 | 10255.93 | 10440.25 | 10707.80 | 11544.00 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 6ms      | 6ms      | 9ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38683.69 | 8555.90 | 80580.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28457.95 | 33993.70 | 42725.99 | 43918.81 | 44521.74 | 44864.40 | 45792.16 |
| **Latency** | 962µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 38009.61 | 11093.43 | 104649.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20083.71 | 30708.07 | 43693.97 | 45279.35 | 46016.56 | 46675.58 | 48179.90 |
| **Latency** | 957µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29325.72 | 5227.13 | 34780.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24185.72 | 26942.90 | 31617.02 | 32210.33 | 32816.44 | 33230.36 | 33752.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5487.70  | 1611.77 | 8896.88 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3156.84 | 5114.21 | 6018.59 | 6490.87 | 6806.80 | 6982.03 | 8136.60 |
| **Latency** | 7ms     | 7ms     | 8ms     | 9ms     | 12ms    | 14ms    | 23ms    |

---

<p align="center">Generated 2023-04-02T01:43:39.535Z</p>
