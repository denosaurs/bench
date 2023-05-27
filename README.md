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
| Bun                                                                                  | 46501.02 | 12327.63 | 67431.16  | 100%     |
| Hyper Express                                                                        | 46404.74 | 16784.37 | 66723.56  | 100%     |
| Fast                                                                                 | 36614.89 | 8831.79  | 48218.63  | 79%      |
| NHttp                                                                                | 36455.50 | 9275.51  | 47855.22  | 78%      |
| Deno                                                                                 | 36388.41 | 13178.07 | 58708.26  | 78%      |
| Deso                                                                                 | 34793.89 | 7388.45  | 43028.54  | 75%      |
| Hono                                                                                 | 34680.16 | 7525.65  | 45840.06  | 75%      |
| Fastro                                                                               | 33861.37 | 5864.51  | 41719.48  | 73%      |
| Megalo                                                                               | 32283.66 | 8287.51  | 42022.90  | 69%      |
| Reno                                                                                 | 29825.29 | 5552.80  | 37167.28  | 64%      |
| http                                                                                 | 27685.57 | 7676.62  | 42264.01  | 60%      |
| Peko                                                                                 | 25680.21 | 6378.89  | 34947.96  | 55%      |
| Cheetah                                                                              | 24329.48 | 3674.60  | 28673.34  | 52%      |
| Alosaur                                                                              | 22488.53 | 6304.51  | 36668.38  | 48%      |
| Aqua                                                                                 | 17520.32 | 3428.32  | 22968.31  | 38%      |
| Node                                                                                 | 17416.79 | 2944.16  | 21675.01  | 37%      |
| Little                                                                               | 16738.21 | 3556.15  | 22660.45  | 36%      |
| Router                                                                               | 15375.57 | 4161.36  | 26030.53  | 33%      |
| Fastify                                                                              | 13542.71 | 2915.11  | 20052.21  | 29%      |
| Oak                                                                                  | 13115.56 | 2762.97  | 19921.34  | 28%      |
| Dinatra                                                                              | 11288.30 | 2419.25  | 20674.97  | 24%      |
| Acorn                                                                                | 10374.07 | 17210.27 | 116279.07 | 22%      |
| Abc                                                                                  | 9494.00  | 1665.47  | 14330.40  | 20%      |
| Opine                                                                                | 5848.88  | 2096.70  | 36991.71  | 13%      |
| Express (Deno)                                                                       | 4845.00  | 1095.26  | 9813.38   | 10%      |
| Servest                                                                              | 3941.65  | 1162.05  | 8948.15   | 8%       |
| Express                                                                              | 3731.17  | 946.61   | 12381.33  | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-657d09f6-77e2-41cc-9e42-eefb55200bde) |          |          |           |          |

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
| 9494.00  | 1665.47 | 14330.40 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7335.26 | 8708.29 | 10130.31 | 10650.00 | 10898.15 | 11030.24 | 11334.36 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 10374.07 | 17210.27 | 116279.07 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 58.31 | 81.72 | 4794.46 | 8220.67 | 45184.08 | 51509.22 | 60275.05 |
| **Latency** | 8ms   | 10ms  | 19ms    | 25ms    | 28ms     | 29ms     | 35ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22488.53 | 6304.51 | 36668.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12142.64 | 20023.26 | 25506.85 | 26691.53 | 27442.55 | 27903.13 | 28865.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17520.32 | 3428.32 | 22968.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13917.88 | 16781.18 | 18313.42 | 19569.77 | 20263.00 | 21117.62 | 22486.03 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46501.02 | 12327.63 | 67431.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30429.72 | 35482.29 | 47926.99 | 58534.66 | 60769.07 | 61921.18 | 63605.31 |
| **Latency** | 597µs    | 735µs    | 912µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24329.48 | 3674.60 | 28673.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21124.91 | 24201.67 | 25378.21 | 26184.41 | 26736.96 | 27200.00 | 28237.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36388.41 | 13178.07 | 58708.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16147.21 | 25686.84 | 39219.75 | 46824.52 | 52630.74 | 54505.13 | 56118.42 |
| **Latency** | 839µs    | 930µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34793.89 | 7388.45 | 43028.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21346.55 | 33996.32 | 37812.37 | 39344.92 | 40519.84 | 41111.96 | 42006.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11288.30 | 2419.25 | 20674.97 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8913.14 | 10301.36 | 11432.40 | 12913.22 | 13683.56 | 14069.27 | 15227.02 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3731.17  | 946.61 | 12381.33 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2502.48 | 3200.62 | 4076.78 | 4288.18 | 4428.63 | 4499.11 | 4741.18 |
| **Latency** | 11ms    | 11ms    | 12ms    | 14ms    | 17ms    | 20ms    | 25ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4845.00  | 1095.26 | 9813.38 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3342.41 | 4363.31 | 5229.22 | 5543.20 | 5762.00 | 5881.08 | 6245.99 |
| **Latency** | 8ms     | 8ms     | 9ms     | 10ms    | 13ms    | 16ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36614.89 | 8831.79 | 48218.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20155.51 | 33664.42 | 40209.66 | 42536.72 | 44111.65 | 44850.42 | 46104.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13542.71 | 2915.11 | 20052.21 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8934.34 | 13522.91 | 14643.40 | 15201.76 | 15595.98 | 15801.99 | 16248.16 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 10ms     |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33861.37 | 5864.51 | 41719.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24506.74 | 33685.74 | 35823.79 | 37032.04 | 38222.36 | 38808.73 | 40153.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34680.16 | 7525.65 | 45840.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21428.31 | 33173.12 | 37291.83 | 39104.85 | 40820.16 | 42106.90 | 44873.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27685.57 | 7676.62 | 42264.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15887.26 | 24954.78 | 30948.57 | 32703.43 | 33823.32 | 34230.27 | 35034.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46404.74 | 16784.37 | 66723.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16735.86 | 33675.24 | 54355.05 | 59546.77 | 61823.17 | 62660.37 | 64032.83 |
| **Latency** | 514µs    | 693µs    | 898µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16738.21 | 3556.15 | 22660.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12363.91 | 16206.23 | 17610.65 | 18687.36 | 19796.13 | 20355.59 | 21548.54 |
| **Latency** | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32283.66 | 8287.51 | 42022.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16312.80 | 31101.71 | 35890.97 | 37339.75 | 38484.09 | 39217.88 | 40678.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36455.50 | 9275.51 | 47855.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18431.79 | 34866.07 | 40193.72 | 42503.34 | 44051.71 | 45196.04 | 46113.13 |
| **Latency** | 970µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17416.79 | 2944.16 | 21675.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14855.48 | 17130.92 | 18067.48 | 18907.65 | 19715.27 | 20018.51 | 20625.67 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13115.56 | 2762.97 | 19921.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10314.44 | 12305.72 | 13739.68 | 14670.76 | 15418.34 | 16211.11 | 17929.41 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5848.88  | 2096.70 | 36991.71 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4176.03 | 5493.12 | 6069.19 | 6429.44 | 6694.86 | 6893.27 | 10952.74 |
| **Latency** | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 12ms    | 20ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25680.21 | 6378.89 | 34947.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16011.11 | 23573.96 | 28116.14 | 29873.91 | 31228.84 | 31983.93 | 33159.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29825.29 | 5552.80 | 37167.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20579.67 | 29377.15 | 31503.35 | 33134.83 | 34315.93 | 34843.08 | 35730.08 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15375.57 | 4161.36 | 26030.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10317.59 | 12994.06 | 16000.21 | 18093.57 | 20310.61 | 21270.84 | 23101.28 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3941.65  | 1162.05 | 8948.15 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2527.89 | 3472.82 | 4274.25 | 4612.18 | 5065.79 | 5258.57 | 5574.19 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 16ms    | 20ms    | 24ms    |

---

<p align="center">Generated 2023-05-27T01:43:16.590Z</p>
