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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Deno                                                                                 | 44591.81 | 12055.45 | 62633.13  | 100%     |
| Hyper Express                                                                        | 44198.22 | 15740.37 | 68930.23  | 99%      |
| Stric                                                                                | 43294.47 | 13134.53 | 67802.94  | 97%      |
| Vixeny (Deno)                                                                        | 40277.47 | 11348.67 | 57468.57  | 90%      |
| NHttp                                                                                | 39199.41 | 10256.20 | 55932.13  | 88%      |
| Bun                                                                                  | 38450.94 | 10749.98 | 58963.66  | 86%      |
| Fast                                                                                 | 38267.69 | 10034.11 | 50731.77  | 86%      |
| Hono                                                                                 | 38120.33 | 9087.21  | 53302.01  | 85%      |
| Deso                                                                                 | 37264.23 | 8601.38  | 50634.14  | 84%      |
| Fastro                                                                               | 36730.03 | 8570.60  | 49962.10  | 82%      |
| Reno                                                                                 | 32097.04 | 6020.90  | 41905.05  | 72%      |
| Cheetah                                                                              | 28033.99 | 8174.26  | 39888.60  | 63%      |
| http                                                                                 | 25283.99 | 7188.67  | 38072.36  | 57%      |
| Alosaur                                                                              | 19411.25 | 6640.61  | 114068.44 | 44%      |
| Router                                                                               | 17837.82 | 4051.22  | 25709.94  | 40%      |
| Aqua                                                                                 | 17394.53 | 3753.83  | 24238.79  | 39%      |
| Node                                                                                 | 16687.97 | 3085.00  | 22322.62  | 37%      |
| Little                                                                               | 14703.29 | 3102.76  | 50190.93  | 33%      |
| Fastify                                                                              | 13966.50 | 2780.77  | 18131.48  | 31%      |
| Oak                                                                                  | 12780.73 | 2874.94  | 21187.32  | 29%      |
| Dinatra                                                                              | 11257.46 | 2425.55  | 18902.90  | 25%      |
| Danet (Oak)                                                                          | 9077.92  | 2437.40  | 35701.66  | 20%      |
| Abc                                                                                  | 8864.36  | 2511.38  | 14711.26  | 20%      |
| Opine                                                                                | 6466.40  | 2689.57  | 56972.10  | 15%      |
| Express (Deno)                                                                       | 6115.21  | 1328.08  | 8324.39   | 14%      |
| Acorn                                                                                | 5004.65  | 7161.64  | 127659.57 | 11%      |
| Servest                                                                              | 3878.73  | 1316.70  | 8972.25   | 9%       |
| Express                                                                              | 3630.83  | 1021.40  | 9456.55   | 8%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-a7588489-11c0-447d-b068-d53295c18cb0) |          |          |           |          |

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
| 8864.36  | 2511.38 | 14711.26 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5597.04 | 6458.91 | 9628.99 | 11053.18 | 11503.39 | 11826.66 | 12573.19 |
| **Latency** | 3ms     | 3ms     | 4ms     | 6ms      | 8ms      | 11ms     | 14ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5004.65  | 7161.64 | 127659.57 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 48.78 | 66.36 | 4534.83 | 7356.07 | 10830.87 | 13230.50 | 30425.96 |
| **Latency** | 8ms   | 10ms  | 19ms    | 26ms    | 30ms     | 33ms     | 37ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 19411.25 | 6640.61 | 114068.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11386.47 | 16579.77 | 21573.36 | 22960.18 | 23911.98 | 24431.30 | 25827.66 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 8ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17394.53 | 3753.83 | 24238.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13002.34 | 16197.13 | 18446.67 | 19554.09 | 20610.23 | 21456.27 | 22910.54 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38450.94 | 10749.98 | 58963.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23803.81 | 28757.33 | 40015.25 | 48279.53 | 50924.50 | 52234.01 | 55018.77 |
| **Latency** | 687µs    | 874µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28033.99 | 8174.26 | 39888.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14378.52 | 24141.31 | 31621.22 | 33577.60 | 35122.87 | 36201.49 | 38255.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 5ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9077.92  | 2437.40 | 35701.66 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6202.56 | 7899.60 | 9307.37 | 10289.47 | 11492.37 | 12569.77 | 14581.33 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 7ms      | 8ms      | 12ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44591.81 | 12055.45 | 62633.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19576.39 | 42754.60 | 48908.43 | 52407.43 | 55100.65 | 56527.83 | 58909.56 |
| **Latency** | 750µs    | 856µs    | 978µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37264.23 | 8601.38 | 50634.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19401.00 | 36541.72 | 40312.53 | 42475.25 | 44044.09 | 45294.59 | 47213.77 |
| **Latency** | 975µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11257.46 | 2425.55 | 18902.90 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8714.22 | 10327.04 | 11565.44 | 12818.44 | 13690.57 | 14155.77 | 15151.55 |
| **Latency** | 3ms     | 3ms      | 3ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3630.83  | 1021.40 | 9456.55 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2349.56 | 2933.63 | 4002.25 | 4356.86 | 4555.76 | 4648.46 | 5208.60 |
| **Latency** | 10ms    | 11ms    | 12ms    | 15ms    | 19ms    | 21ms    | 27ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6115.21  | 1328.08 | 8324.39 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4157.37 | 5650.82 | 6533.69 | 6900.66 | 7298.99 | 7481.06 | 7969.35 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 10ms    | 12ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38267.69 | 10034.11 | 50731.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17592.67 | 36872.49 | 42576.05 | 44527.54 | 46188.97 | 47128.57 | 48691.35 |
| **Latency** | 929µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13966.50 | 2780.77 | 18131.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11219.93 | 13916.42 | 14844.47 | 15401.79 | 15809.58 | 16079.53 | 16664.05 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36730.03 | 8570.60 | 49962.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20530.50 | 34762.07 | 40005.07 | 42189.26 | 43866.56 | 44980.53 | 46923.69 |
| **Latency** | 985µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38120.33 | 9087.21 | 53302.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21108.39 | 37266.39 | 41267.29 | 43429.26 | 45415.50 | 46670.52 | 49269.19 |
| **Latency** | 953µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25283.99 | 7188.67 | 38072.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13702.40 | 22866.89 | 28127.05 | 30048.48 | 31459.67 | 32273.65 | 34112.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44198.22 | 15740.37 | 68930.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16121.85 | 33266.30 | 51234.08 | 56062.11 | 59106.22 | 60610.70 | 63122.19 |
| **Latency** | 607µs    | 761µs    | 929µs    | 1ms      | 1ms      | 3ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14703.29 | 3102.76 | 50190.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11939.56 | 13704.08 | 15233.84 | 16394.20 | 17212.15 | 17797.00 | 19678.16 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Megalo](#megalo)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39199.41 | 10256.20 | 55932.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18202.13 | 36809.26 | 43223.10 | 45693.75 | 48006.65 | 49300.71 | 51075.31 |
| **Latency** | 888µs    | 981µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16687.97 | 3085.00 | 22322.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14660.74 | 16449.74 | 17268.79 | 18141.61 | 19110.96 | 19795.88 | 21026.78 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12780.73 | 2874.94 | 21187.32 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9011.93 | 11904.08 | 13511.95 | 14303.71 | 15236.40 | 16226.82 | 17997.16 |
| **Latency** | 2ms     | 3ms      | 3ms      | 4ms      | 5ms      | 5ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6466.40  | 2689.57 | 56972.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4550.11 | 5980.31 | 6673.90 | 7142.27 | 7536.71 | 7878.83 | 12403.65 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 10ms    | 12ms    | 17ms     |

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
| 32097.04 | 6020.90 | 41905.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23551.42 | 31607.89 | 33789.66 | 35316.86 | 37085.80 | 38130.63 | 39875.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17837.82 | 4051.22 | 25709.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11527.82 | 16808.69 | 19045.42 | 20291.83 | 21402.16 | 22034.71 | 23747.08 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43294.47 | 13134.53 | 67802.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23496.98 | 30112.75 | 48260.90 | 54330.60 | 57809.44 | 59615.00 | 63152.60 |
| **Latency** | 620µs    | 781µs    | 970µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3878.73  | 1316.70 | 8972.25 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2019.21 | 3553.35 | 4223.59 | 4624.34 | 5081.47 | 5351.42 | 6340.48 |
| **Latency** | 7ms     | 9ms     | 12ms    | 15ms    | 19ms    | 23ms    | 30ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40277.47 | 11348.67 | 57468.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17867.83 | 37627.59 | 44412.13 | 47805.41 | 50127.66 | 51810.53 | 54709.28 |
| **Latency** | 841µs    | 940µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-08-28T01:23:43.661Z</p>
