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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Hyper Express                                                                        | 44361.83 | 15467.36 | 63670.21 | 100%     |
| Bun                                                                                  | 43178.87 | 10208.27 | 62598.47 | 97%      |
| Deno                                                                                 | 39757.16 | 11794.27 | 52703.15 | 90%      |
| Fast                                                                                 | 37060.60 | 10493.82 | 50260.34 | 84%      |
| NHttp                                                                                | 36777.43 | 9514.75  | 46700.58 | 83%      |
| Hono                                                                                 | 36513.35 | 8003.40  | 47078.42 | 82%      |
| Deso                                                                                 | 34969.02 | 6592.85  | 43935.94 | 79%      |
| Fastro                                                                               | 33996.19 | 4901.46  | 40916.37 | 77%      |
| Megalo                                                                               | 32410.23 | 6134.83  | 40485.01 | 73%      |
| Reno                                                                                 | 28034.97 | 3612.05  | 33108.61 | 63%      |
| http                                                                                 | 26851.42 | 6466.12  | 34871.86 | 61%      |
| Peko                                                                                 | 22461.92 | 4946.86  | 35540.93 | 51%      |
| Alosaur                                                                              | 21600.23 | 5445.52  | 84175.08 | 49%      |
| Node                                                                                 | 18537.13 | 3789.40  | 25662.72 | 42%      |
| Router                                                                               | 17132.80 | 3579.58  | 30300.82 | 39%      |
| Aqua                                                                                 | 15902.83 | 2849.62  | 20479.31 | 36%      |
| Little                                                                               | 14348.97 | 2826.47  | 18738.82 | 32%      |
| Fastify                                                                              | 14326.16 | 2556.39  | 17688.62 | 32%      |
| Oak                                                                                  | 12196.04 | 2728.61  | 19028.05 | 27%      |
| Dinatra                                                                              | 10193.55 | 2068.66  | 21598.27 | 23%      |
| Abc                                                                                  | 8788.82  | 1387.33  | 12068.47 | 20%      |
| Opine                                                                                | 5361.94  | 2958.03  | 81967.21 | 12%      |
| Express (Deno)                                                                       | 4872.67  | 1030.82  | 6752.35  | 11%      |
| Express                                                                              | 4141.34  | 1017.79  | 15760.19 | 9%       |
| Acorn                                                                                | 4011.04  | 7855.59  | 96942.58 | 9%       |
| Servest                                                                              | 3374.54  | 1019.62  | 7694.57  | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-4a20905c-cda6-48fb-bc68-1e905e489ece) |          |          |          |          |

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
| 8788.82  | 1387.33 | 12068.47 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7145.08 | 8235.65 | 9043.40 | 9631.87 | 10233.09 | 10528.29 | 10981.04 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4011.04  | 7855.59 | 96942.58 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 94.02 | 1971.46 | 2741.81 | 3898.18 | 5458.90 | 6243.02 | 49342.11 |
| **Latency** | 9ms   | 10ms    | 19ms    | 25ms    | 28ms    | 31ms    | 35ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21600.23 | 5445.52 | 84175.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15922.47 | 19547.18 | 23403.77 | 24407.83 | 25100.69 | 25656.90 | 26583.72 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15902.83 | 2849.62 | 20479.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13668.95 | 15311.02 | 16624.10 | 17501.75 | 18125.02 | 18548.17 | 19194.64 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43178.87 | 10208.27 | 62598.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30486.56 | 34263.48 | 42640.71 | 53273.84 | 56326.66 | 57655.34 | 59630.53 |
| **Latency** | 631µs    | 804µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39757.16 | 11794.27 | 52703.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18294.54 | 34530.38 | 45010.79 | 48008.64 | 49725.80 | 50455.09 | 52033.11 |
| **Latency** | 888µs    | 963µs    | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34969.02 | 6592.85 | 43935.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24128.31 | 35337.45 | 37164.91 | 38507.70 | 39461.16 | 40225.74 | 42050.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10193.55 | 2068.66 | 21598.27 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7847.55 | 9131.40 | 10922.82 | 11399.72 | 11833.23 | 12123.72 | 12831.53 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 6ms      | 6ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4141.34  | 1017.79 | 15760.19 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2758.20 | 4071.87 | 4444.44 | 4614.15 | 4767.02 | 4868.30 | 5056.43 |
| **Latency** | 10ms    | 10ms    | 11ms    | 11ms    | 15ms    | 18ms    | 24ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4872.67  | 1030.82 | 6752.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3364.70 | 4431.45 | 5315.02 | 5496.32 | 5629.68 | 5759.64 | 5935.84 |
| **Latency** | 8ms     | 9ms     | 9ms     | 10ms    | 12ms    | 15ms    | 21ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37060.60 | 10493.82 | 50260.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17406.62 | 33586.74 | 41701.67 | 43818.85 | 45588.90 | 46579.77 | 48951.40 |
| **Latency** | 965µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14326.16 | 2556.39 | 17688.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12024.77 | 14376.77 | 15082.20 | 15602.65 | 15945.61 | 16166.61 | 16532.57 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33996.19 | 4901.46 | 40916.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28740.24 | 33480.69 | 35193.56 | 36724.50 | 37716.88 | 38317.63 | 39223.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36513.35 | 8003.40 | 47078.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20045.90 | 37163.11 | 39308.25 | 40811.83 | 42473.47 | 43523.06 | 45240.25 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26851.42 | 6466.12 | 34871.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17438.22 | 24370.43 | 29463.10 | 30932.77 | 31751.56 | 32418.78 | 33612.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44361.83 | 15467.36 | 63670.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17559.88 | 32263.23 | 51614.84 | 56617.54 | 58529.25 | 59496.74 | 61030.60 |
| **Latency** | 635µs    | 762µs    | 935µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14348.97 | 2826.47 | 18738.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11268.67 | 13610.34 | 15206.89 | 15964.31 | 16713.49 | 17045.11 | 17728.44 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32410.23 | 6134.83 | 40485.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22354.32 | 32266.84 | 34500.69 | 35893.68 | 36912.21 | 37512.75 | 38920.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36777.43 | 9514.75 | 46700.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17515.22 | 34622.17 | 41155.12 | 42916.26 | 44227.37 | 44850.63 | 45858.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18537.13 | 3789.40 | 25662.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13464.09 | 18750.58 | 19790.44 | 20470.22 | 20979.81 | 21240.14 | 21869.34 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12196.04 | 2728.61 | 19028.05 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8605.94 | 11312.33 | 13081.50 | 13905.12 | 14433.80 | 14768.21 | 15641.12 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5361.94  | 2958.03 | 81967.21 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3885.05 | 4763.10 | 5582.81 | 5901.92 | 6161.35 | 6396.51 | 7149.61 |
| **Latency** | 7ms     | 8ms     | 9ms     | 9ms     | 11ms    | 13ms    | 22ms    |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22461.92 | 4946.86 | 35540.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17008.84 | 20607.02 | 24304.40 | 25403.92 | 26279.07 | 26636.39 | 27500.23 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28034.97 | 3612.05 | 33108.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25695.85 | 27813.03 | 28818.74 | 29725.75 | 30648.04 | 31304.70 | 32284.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17132.80 | 3579.58 | 30300.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12917.86 | 15954.92 | 18384.11 | 19226.17 | 19955.70 | 20255.71 | 20922.82 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3374.54  | 1019.62 | 7694.57 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2000.20 | 3114.83 | 3627.02 | 3980.81 | 4349.22 | 4529.74 | 4798.93 |
| **Latency** | 12ms    | 12ms    | 13ms    | 16ms    | 19ms    | 26ms    | 29ms    |

---

<p align="center">Generated 2023-05-01T01:45:16.601Z</p>
