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
| NHttp                                                                                | 71621.68 | 13555.84 | 78835.93  | 100%     |
| Deno                                                                                 | 68689.93 | 17960.59 | 81639.35  | 96%      |
| Bun                                                                                  | 67488.56 | 12858.07 | 85836.24  | 94%      |
| Hono                                                                                 | 66758.38 | 15953.75 | 76504.23  | 93%      |
| Fast                                                                                 | 65493.70 | 18700.37 | 79216.35  | 91%      |
| Fastro                                                                               | 65412.88 | 14956.46 | 75360.77  | 91%      |
| Hyper Express                                                                        | 63489.02 | 18429.03 | 86481.22  | 89%      |
| Megalo                                                                               | 62153.33 | 14717.12 | 71917.96  | 87%      |
| Deso                                                                                 | 61468.04 | 16311.31 | 73003.63  | 86%      |
| Reno                                                                                 | 53589.99 | 7408.43  | 57724.92  | 75%      |
| Cheetah                                                                              | 48329.64 | 5195.61  | 51425.73  | 67%      |
| Node                                                                                 | 42340.99 | 6993.09  | 46384.37  | 59%      |
| http                                                                                 | 39823.30 | 8795.89  | 47314.47  | 56%      |
| Peko                                                                                 | 35357.46 | 7955.31  | 88969.03  | 49%      |
| Alosaur                                                                              | 32190.77 | 6644.13  | 40706.75  | 45%      |
| Fastify                                                                              | 30349.38 | 11073.57 | 39501.09  | 42%      |
| Router                                                                               | 28329.16 | 4803.67  | 36906.61  | 40%      |
| Little                                                                               | 24050.60 | 4448.85  | 31271.27  | 34%      |
| Oak                                                                                  | 23208.11 | 4005.23  | 30271.41  | 32%      |
| Aqua                                                                                 | 23177.56 | 3164.34  | 27698.25  | 32%      |
| Dinatra                                                                              | 22259.65 | 4827.16  | 48309.18  | 31%      |
| Abc                                                                                  | 16781.87 | 4973.55  | 36475.68  | 23%      |
| Express (Deno)                                                                       | 10859.82 | 2141.13  | 15798.72  | 15%      |
| Opine                                                                                | 10197.42 | 2543.66  | 65657.23  | 14%      |
| Express                                                                              | 8043.20  | 1389.75  | 11500.95  | 11%      |
| Servest                                                                              | 6549.74  | 1917.23  | 9794.42   | 9%       |
| Acorn                                                                                | 4718.99  | 7113.43  | 147058.82 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-a7f2e4aa-893d-48ab-bcd7-48deecfc22ea) |          |          |           |          |

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
| 16781.87 | 4973.55 | 36475.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10265.37 | 11658.23 | 18444.81 | 21725.33 | 22210.18 | 22344.52 | 22554.14 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4718.99  | 7113.43 | 147058.82 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 57.41 | 1525.51 | 3731.87 | 6889.58 | 9725.76 | 11139.30 | 13232.58 |
| **Latency** | 5ms   | 7ms     | 14ms    | 21ms    | 26ms    | 29ms     | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32190.77 | 6644.13 | 40706.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26802.82 | 30059.58 | 34895.58 | 35928.71 | 36612.93 | 37115.19 | 38018.08 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23177.56 | 3164.34 | 27698.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21700.98 | 22692.04 | 23963.97 | 24695.63 | 25132.53 | 25658.24 | 26679.85 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67488.56 | 12858.07 | 85836.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50878.44 | 54707.76 | 72118.88 | 79886.08 | 81429.11 | 82227.74 | 83737.39 |
| **Latency** | 450µs    | 560µs    | 679µs    | 839µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48329.64 | 5195.61 | 51425.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47638.95 | 48853.98 | 49601.43 | 50080.03 | 50462.23 | 50586.41 | 50844.10 |
| **Latency** | 892µs    | 944µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68689.93 | 17960.59 | 81639.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31990.11 | 69916.55 | 78061.62 | 79337.03 | 80068.68 | 80366.20 | 81172.35 |
| **Latency** | 498µs    | 549µs    | 667µs    | 705µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61468.04 | 16311.31 | 73003.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28028.22 | 62025.26 | 70139.08 | 71065.89 | 71677.18 | 71924.18 | 72626.17 |
| **Latency** | 636µs    | 665µs    | 698µs    | 763µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22259.65 | 4827.16 | 48309.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20462.61 | 21371.64 | 22410.56 | 24258.56 | 24823.31 | 25127.60 | 42583.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8043.20  | 1389.75 | 11500.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5950.82 | 8148.55 | 8662.02 | 8754.19 | 8813.84 | 8840.13 | 8891.40 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 12ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10859.82 | 2141.13 | 15798.72 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8072.27 | 10652.34 | 11535.67 | 11885.92 | 12472.13 | 12845.84 | 13033.21 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65493.70 | 18700.37 | 79216.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28043.95 | 70332.83 | 75457.14 | 76231.39 | 76626.60 | 76744.30 | 77111.35 |
| **Latency** | 588µs    | 624µs    | 659µs    | 703µs    | 930µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 30349.38 | 11073.57 | 39501.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15112.05 | 15387.21 | 37719.53 | 38475.69 | 38866.76 | 39020.87 | 39210.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65412.88 | 14956.46 | 75360.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30334.19 | 69731.17 | 72341.74 | 73018.81 | 73588.16 | 73975.71 | 74554.76 |
| **Latency** | 620µs    | 653µs    | 676µs    | 717µs    | 848µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66758.38 | 15953.75 | 76504.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30818.70 | 71380.42 | 74219.80 | 74963.92 | 75744.44 | 75974.21 | 76304.21 |
| **Latency** | 603µs    | 634µs    | 660µs    | 707µs    | 840µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39823.30 | 8795.89 | 47314.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25387.90 | 38420.47 | 43974.00 | 45033.05 | 45593.33 | 45848.71 | 46412.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63489.02 | 18429.03 | 86481.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40776.17 | 41854.34 | 74000.60 | 80726.49 | 81845.53 | 82423.75 | 83654.54 |
| **Latency** | 467µs    | 555µs    | 678µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24050.60 | 4448.85 | 31271.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17689.15 | 24034.46 | 25316.97 | 26716.96 | 27096.28 | 27438.96 | 28385.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62153.33 | 14717.12 | 71917.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29109.31 | 65872.45 | 69504.43 | 70048.33 | 70420.68 | 70619.58 | 70978.33 |
| **Latency** | 643µs    | 676µs    | 711µs    | 759µs    | 916µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 71621.68 | 13555.84 | 78835.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52604.14 | 75028.53 | 76712.17 | 77406.17 | 77820.21 | 78003.88 | 78392.43 |
| **Latency** | 577µs    | 613µs    | 650µs    | 684µs    | 756µs    | 904µs    | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42340.99 | 6993.09 | 46384.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41539.00 | 43525.22 | 44217.66 | 44731.26 | 45255.18 | 45578.35 | 45944.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23208.11 | 4005.23 | 30271.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21549.03 | 22890.34 | 24393.36 | 25055.71 | 25522.36 | 25957.40 | 26944.81 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10197.42 | 2543.66 | 65657.23 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8301.23 | 10024.16 | 10625.68 | 10900.47 | 11173.28 | 12100.38 | 13017.11 |
| **Latency** | 3ms     | 4ms      | 4ms      | 5ms      | 5ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35357.46 | 7955.31 | 88969.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23425.84 | 34590.64 | 38719.81 | 39845.14 | 40351.83 | 40779.80 | 41575.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53589.99 | 7408.43 | 57724.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49720.80 | 55208.19 | 55813.30 | 56413.71 | 56880.10 | 57095.25 | 57365.68 |
| **Latency** | 795µs    | 842µs    | 903µs    | 940µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28329.16 | 4803.67 | 36906.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26110.68 | 27760.17 | 29816.91 | 30686.31 | 31187.97 | 31659.64 | 32711.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6549.74  | 1917.23 | 9794.42 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5100.55 | 5687.94 | 7210.30 | 7782.40 | 8161.56 | 8337.59 | 8976.40 |
| **Latency** | 4ms     | 5ms     | 7ms     | 9ms     | 11ms    | 13ms    | 19ms    |

---

<p align="center">Generated 2023-06-11T02:08:50.150Z</p>
