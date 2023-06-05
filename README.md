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
| Deno                                                                                 | 41501.99 | 12768.61 | 59498.04  | 100%     |
| Bun                                                                                  | 41027.01 | 10222.18 | 62212.92  | 99%      |
| Hyper Express                                                                        | 39924.61 | 14720.86 | 65236.27  | 96%      |
| NHttp                                                                                | 38703.02 | 10731.57 | 54616.24  | 93%      |
| Fast                                                                                 | 37187.97 | 10006.43 | 50735.90  | 90%      |
| Deso                                                                                 | 36458.40 | 8994.14  | 47914.74  | 88%      |
| Megalo                                                                               | 36251.53 | 6281.13  | 45004.83  | 87%      |
| Fastro                                                                               | 34193.61 | 6391.15  | 43570.92  | 82%      |
| Hono                                                                                 | 34128.25 | 8174.02  | 46742.90  | 82%      |
| http                                                                                 | 29033.88 | 7320.33  | 46576.49  | 70%      |
| Reno                                                                                 | 28565.32 | 4457.02  | 35851.55  | 69%      |
| Cheetah                                                                              | 25374.32 | 4014.61  | 31560.91  | 61%      |
| Peko                                                                                 | 24138.30 | 6082.49  | 37832.90  | 58%      |
| Alosaur                                                                              | 22238.78 | 5673.34  | 31925.71  | 54%      |
| Aqua                                                                                 | 17830.03 | 3967.93  | 90270.51  | 43%      |
| Router                                                                               | 17652.05 | 3371.17  | 26890.93  | 43%      |
| Node                                                                                 | 17070.35 | 2937.22  | 21485.91  | 41%      |
| Little                                                                               | 16007.14 | 3199.79  | 23018.07  | 39%      |
| Fastify                                                                              | 14450.67 | 2633.75  | 18773.05  | 35%      |
| Oak                                                                                  | 12788.38 | 2815.38  | 27358.31  | 31%      |
| Acorn                                                                                | 11779.31 | 20346.53 | 155279.50 | 28%      |
| Dinatra                                                                              | 10569.27 | 2284.04  | 18618.79  | 25%      |
| Abc                                                                                  | 9687.19  | 1665.78  | 13430.46  | 23%      |
| Opine                                                                                | 6040.42  | 1852.58  | 33631.44  | 15%      |
| Express (Deno)                                                                       | 5138.65  | 1168.17  | 9863.29   | 12%      |
| Servest                                                                              | 3623.20  | 1110.66  | 6018.37   | 9%       |
| Express                                                                              | 3622.08  | 1133.61  | 12967.73  | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-25cd5455-99be-4301-be8f-4fa6f75cfedf) |          |          |           |          |

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
| 9687.19  | 1665.78 | 13430.46 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7424.26 | 8840.47 | 10100.08 | 10793.39 | 11336.82 | 11697.52 | 12511.20 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 7ms      | 9ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 11779.31 | 20346.53 | 155279.50 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 62.59 | 86.21 | 4381.82 | 7578.49 | 47498.27 | 57866.08 | 74755.39 |
| **Latency** | 7ms   | 9ms   | 17ms    | 24ms    | 27ms     | 28ms     | 35ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22238.78 | 5673.34 | 31925.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14605.80 | 20222.06 | 24056.98 | 25849.28 | 26911.77 | 27601.80 | 29241.20 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17830.03 | 3967.93 | 90270.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14375.30 | 16648.83 | 18325.72 | 19723.03 | 20915.64 | 21732.74 | 22957.04 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41027.01 | 10222.18 | 62212.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27912.22 | 33587.93 | 40815.42 | 49920.36 | 53595.73 | 55530.42 | 59214.27 |
| **Latency** | 656µs    | 833µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25374.32 | 4014.61 | 31560.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21776.73 | 24586.49 | 26279.69 | 27523.24 | 28801.66 | 29392.16 | 30305.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41501.99 | 12768.61 | 59498.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18776.73 | 34261.64 | 46804.11 | 50982.46 | 53360.06 | 54447.97 | 56164.33 |
| **Latency** | 811µs    | 889µs    | 999µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36458.40 | 8994.14 | 47914.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18287.56 | 35463.75 | 39601.89 | 42033.96 | 43926.26 | 44826.35 | 46805.05 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10569.27 | 2284.04 | 18618.79 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7840.36 | 9826.61 | 11033.63 | 11905.15 | 12747.34 | 13233.85 | 13987.27 |
| **Latency** | 3ms     | 4ms     | 4ms      | 4ms      | 6ms      | 6ms      | 12ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3622.08  | 1133.61 | 12967.73 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2014.18 | 2952.61 | 4056.29 | 4413.63 | 4625.43 | 4767.69 | 5057.27 |
| **Latency** | 10ms    | 11ms    | 11ms    | 15ms    | 19ms    | 23ms    | 32ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5138.65  | 1168.17 | 9863.29 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3466.44 | 4538.84 | 5435.83 | 5860.28 | 6323.16 | 6506.87 | 6997.23 |
| **Latency** | 8ms     | 8ms     | 8ms     | 10ms    | 12ms    | 14ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37187.97 | 10006.43 | 50735.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17541.36 | 34489.60 | 41011.39 | 43721.76 | 46179.96 | 47241.94 | 49266.43 |
| **Latency** | 926µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14450.67 | 2633.75 | 18773.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11937.61 | 14211.62 | 15036.80 | 15769.82 | 16517.47 | 17021.41 | 17948.06 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34193.61 | 6391.15 | 43570.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24937.85 | 33033.23 | 35974.75 | 38167.09 | 39569.67 | 40772.49 | 42208.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34128.25 | 8174.02 | 46742.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17608.81 | 33077.66 | 36885.86 | 39034.65 | 41138.17 | 42271.76 | 44507.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29033.88 | 7320.33 | 46576.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17331.16 | 26665.80 | 31468.35 | 33864.19 | 35343.46 | 36120.51 | 37919.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39924.61 | 14720.86 | 65236.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17913.75 | 27528.29 | 42445.61 | 53215.53 | 57520.49 | 59235.40 | 62571.89 |
| **Latency** | 635µs    | 787µs    | 968µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16007.14 | 3199.79 | 23018.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12911.22 | 15010.05 | 16663.53 | 17730.45 | 18964.81 | 19618.72 | 21222.01 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36251.53 | 6281.13 | 45004.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27042.19 | 34967.43 | 38186.23 | 40180.35 | 41758.35 | 42434.26 | 43651.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38703.02 | 10731.57 | 54616.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17854.05 | 34976.50 | 42839.30 | 46086.85 | 48247.71 | 49244.84 | 51687.03 |
| **Latency** | 881µs    | 991µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17070.35 | 2937.22 | 21485.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14820.58 | 16639.91 | 17671.36 | 18642.10 | 19537.65 | 20031.01 | 21032.56 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12788.38 | 2815.38 | 27358.31 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9910.05 | 11905.92 | 13406.53 | 14351.95 | 15172.97 | 15793.72 | 17712.39 |
| **Latency** | 2ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6040.42  | 1852.58 | 33631.44 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4324.75 | 5563.35 | 6222.83 | 6709.61 | 7169.23 | 7614.79 | 10883.52 |
| **Latency** | 5ms     | 7ms     | 8ms     | 9ms     | 11ms    | 12ms    | 18ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24138.30 | 6082.49 | 37832.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15997.65 | 22400.15 | 26029.78 | 28108.08 | 29520.83 | 30158.63 | 31949.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28565.32 | 4457.02 | 35851.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23498.95 | 27989.00 | 29658.66 | 31179.30 | 32206.37 | 33014.22 | 34137.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17652.05 | 3371.17 | 26890.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14375.01 | 16737.60 | 18301.79 | 19601.91 | 20692.24 | 21416.44 | 22387.68 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3623.20  | 1110.66 | 6018.37 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2032.08 | 3236.34 | 3878.34 | 4325.10 | 4805.74 | 5004.71 | 5274.87 |
| **Latency** | 11ms    | 12ms    | 12ms    | 15ms    | 17ms    | 22ms    | 28ms    |

---

<p align="center">Generated 2023-06-05T02:01:31.056Z</p>
