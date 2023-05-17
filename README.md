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
| Deno                                                                                 | 43525.67 | 11236.75 | 56705.61  | 100%     |
| Bun                                                                                  | 41044.65 | 11051.74 | 62436.68  | 94%      |
| Hyper Express                                                                        | 37434.38 | 14853.36 | 58043.22  | 86%      |
| Deso                                                                                 | 37274.61 | 7957.39  | 45732.88  | 86%      |
| NHttp                                                                                | 36724.85 | 10032.22 | 49002.06  | 84%      |
| Hono                                                                                 | 36483.46 | 9085.42  | 47732.64  | 84%      |
| Fast                                                                                 | 35978.06 | 10536.28 | 47720.01  | 83%      |
| Fastro                                                                               | 35616.27 | 9296.32  | 48268.23  | 82%      |
| Megalo                                                                               | 33065.22 | 7366.69  | 42333.83  | 76%      |
| Reno                                                                                 | 30519.30 | 5283.21  | 36398.34  | 70%      |
| http                                                                                 | 27451.28 | 7748.60  | 74324.83  | 63%      |
| Peko                                                                                 | 26271.62 | 5422.91  | 36569.23  | 60%      |
| Cheetah                                                                              | 24354.27 | 2912.16  | 28440.33  | 56%      |
| Alosaur                                                                              | 23972.83 | 5324.86  | 82685.63  | 55%      |
| Router                                                                               | 18992.08 | 3538.05  | 25463.52  | 44%      |
| Aqua                                                                                 | 17563.21 | 3033.10  | 22896.66  | 40%      |
| Node                                                                                 | 15774.54 | 3427.16  | 19750.99  | 36%      |
| Fastify                                                                              | 14933.24 | 2925.76  | 18209.42  | 34%      |
| Little                                                                               | 14255.08 | 3216.23  | 19500.72  | 33%      |
| Dinatra                                                                              | 11969.58 | 2418.12  | 22107.44  | 28%      |
| Oak                                                                                  | 11225.30 | 2701.38  | 19426.56  | 26%      |
| Abc                                                                                  | 8456.49  | 2348.11  | 12156.74  | 19%      |
| Opine                                                                                | 6050.48  | 1434.30  | 8812.36   | 14%      |
| Express (Deno)                                                                       | 5153.06  | 1031.15  | 9058.06   | 12%      |
| Acorn                                                                                | 4451.43  | 9714.13  | 117647.06 | 10%      |
| Express                                                                              | 4043.69  | 839.61   | 10566.37  | 9%       |
| Servest                                                                              | 3854.85  | 1025.51  | 6048.10   | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-116e9ace-d5bb-45b9-9378-75f225ec7ff7) |          |          |           |          |

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
| 8456.49  | 2348.11 | 12156.74 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5259.91 | 5991.79 | 9336.31 | 10414.86 | 10942.12 | 11264.19 | 11790.24 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms      | 8ms      | 9ms      | 12ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4451.43  | 9714.13 | 117647.06 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 99.04 | 2017.82 | 2558.74 | 3742.71 | 5802.39 | 6804.63 | 60951.33 |
| **Latency** | 8ms   | 10ms    | 18ms    | 24ms    | 27ms    | 30ms    | 37ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23972.83 | 5324.86 | 82685.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18738.87 | 22805.45 | 25348.90 | 26882.24 | 27706.19 | 28300.53 | 29130.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17563.21 | 3033.10 | 22896.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15004.63 | 16850.81 | 18162.98 | 19321.60 | 20078.08 | 20460.83 | 21319.53 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41044.65 | 11051.74 | 62436.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28022.08 | 32253.83 | 40199.85 | 51649.53 | 54810.36 | 56134.19 | 58905.24 |
| **Latency** | 660µs    | 830µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24354.27 | 2912.16 | 28440.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21619.77 | 24199.68 | 25164.39 | 25710.51 | 26271.98 | 26591.71 | 27241.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43525.67 | 11236.75 | 56705.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19851.59 | 41827.98 | 48226.91 | 51007.57 | 52539.36 | 53258.12 | 55106.13 |
| **Latency** | 843µs    | 910µs    | 995µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37274.61 | 7957.39 | 45732.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20783.50 | 37510.84 | 40638.16 | 41914.39 | 42776.10 | 43350.24 | 44257.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11969.58 | 2418.12 | 22107.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10029.98 | 10919.42 | 12249.96 | 13546.45 | 14358.13 | 14827.27 | 15495.11 |
| **Latency** | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 5ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 4043.69  | 839.61 | 10566.37 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2784.13 | 3928.83 | 4369.12 | 4490.71 | 4586.82 | 4659.31 | 4815.31 |
| **Latency** | 10ms    | 11ms    | 11ms    | 12ms    | 15ms    | 17ms    | 22ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5153.06  | 1031.15 | 9058.06 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3674.12 | 4860.77 | 5507.45 | 5723.04 | 5947.34 | 6099.29 | 6616.64 |
| **Latency** | 8ms     | 8ms     | 9ms     | 9ms     | 11ms    | 14ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35978.06 | 10536.28 | 47720.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17581.03 | 28662.17 | 41356.21 | 43221.37 | 44320.40 | 44947.84 | 46247.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14933.24 | 2925.76 | 18209.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12207.19 | 15203.79 | 15875.87 | 16314.50 | 16623.26 | 16834.66 | 17051.82 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35616.27 | 9296.32 | 48268.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17420.89 | 32326.15 | 39964.64 | 41642.79 | 42952.36 | 43628.13 | 45125.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36483.46 | 9085.42 | 47732.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17521.05 | 36101.41 | 39966.70 | 42169.90 | 43833.71 | 44547.62 | 46307.36 |
| **Latency** | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27451.28 | 7748.60 | 74324.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16447.87 | 24672.93 | 29607.96 | 33089.51 | 33819.92 | 34195.84 | 34864.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37434.38 | 14853.36 | 58043.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15650.27 | 23319.63 | 40391.29 | 51933.72 | 54857.58 | 55619.14 | 56461.06 |
| **Latency** | 691µs    | 822µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14255.08 | 3216.23 | 19500.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10468.31 | 13052.46 | 14800.28 | 16463.69 | 17384.77 | 17757.23 | 18422.35 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33065.22 | 7366.69 | 42333.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20526.50 | 30512.85 | 36279.17 | 37910.96 | 39074.74 | 39507.55 | 40529.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36724.85 | 10032.22 | 49002.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17456.59 | 31955.35 | 41235.55 | 43470.51 | 45407.36 | 46237.09 | 47315.64 |
| **Latency** | 970µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15774.54 | 3427.16 | 19750.99 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8390.67 | 16031.29 | 16925.64 | 17674.49 | 18271.28 | 18581.85 | 19285.07 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11225.30 | 2701.38 | 19426.56 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7659.06 | 10660.56 | 11811.53 | 12901.63 | 13742.92 | 14031.08 | 14783.47 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 12ms     |

### [Opine](#opine)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6050.48  | 1434.30 | 8812.36 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4179.17 | 5432.40 | 6300.40 | 6995.38 | 7427.50 | 7822.79 | 8601.14 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 10ms    | 12ms    | 19ms    |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26271.62 | 5422.91 | 36569.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20910.35 | 25066.91 | 27850.54 | 29403.00 | 30345.42 | 30899.69 | 31933.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30519.30 | 5283.21 | 36398.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22709.19 | 30357.56 | 32216.05 | 33424.55 | 34306.12 | 34914.87 | 35686.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18992.08 | 3538.05 | 25463.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15680.67 | 18104.99 | 19961.33 | 21056.40 | 21884.95 | 22302.82 | 23330.51 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3854.85  | 1025.51 | 6048.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2741.14 | 3407.90 | 4162.98 | 4486.21 | 4723.57 | 4889.75 | 5325.00 |
| **Latency** | 10ms    | 11ms    | 11ms    | 14ms    | 17ms    | 22ms    | 25ms    |

---

<p align="center">Generated 2023-05-17T01:45:18.076Z</p>
