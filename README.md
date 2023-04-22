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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Bun                                                                                  | 57739.33 | 10384.89 | 76055.09  | 100%     |
| Hyper Express                                                                        | 53766.97 | 16750.13 | 75930.92  | 93%      |
| Deno                                                                                 | 40048.08 | 11323.03 | 50410.45  | 69%      |
| NHttp                                                                                | 39760.77 | 8230.13  | 46845.82  | 69%      |
| Fast                                                                                 | 39467.41 | 8254.32  | 49070.34  | 68%      |
| http                                                                                 | 39115.14 | 8534.33  | 48448.67  | 68%      |
| Hono                                                                                 | 38624.78 | 7642.69  | 44589.06  | 67%      |
| Megalo                                                                               | 36250.62 | 8644.47  | 43997.30  | 63%      |
| Fastro                                                                               | 36090.13 | 7558.85  | 42658.47  | 63%      |
| Deso                                                                                 | 35853.38 | 8056.69  | 46629.33  | 62%      |
| Node                                                                                 | 34659.22 | 5393.24  | 38198.48  | 60%      |
| Peko                                                                                 | 33823.97 | 7289.69  | 49417.67  | 59%      |
| Reno                                                                                 | 33127.43 | 7156.53  | 39753.14  | 57%      |
| Fastify                                                                              | 29864.72 | 6142.35  | 34957.24  | 52%      |
| Alosaur                                                                              | 29858.70 | 6147.94  | 35187.33  | 52%      |
| Router                                                                               | 27007.55 | 4522.64  | 35900.22  | 47%      |
| Little                                                                               | 23180.11 | 4506.37  | 28943.35  | 40%      |
| Oak                                                                                  | 21425.15 | 3631.08  | 26218.59  | 37%      |
| Aqua                                                                                 | 21222.21 | 3957.46  | 25738.79  | 37%      |
| Dinatra                                                                              | 16981.46 | 3961.80  | 28185.39  | 29%      |
| Abc                                                                                  | 13949.59 | 4167.80  | 20343.03  | 24%      |
| Opine                                                                                | 8782.15  | 2467.28  | 75139.95  | 15%      |
| Express (Deno)                                                                       | 7970.98  | 1952.66  | 39886.91  | 14%      |
| Express                                                                              | 6306.41  | 1451.09  | 10314.82  | 11%      |
| Servest                                                                              | 5394.35  | 1675.76  | 27405.29  | 9%       |
| Acorn                                                                                | 3933.79  | 4230.50  | 103092.78 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-b2408ff0-ac97-44ca-8c51-c9e2ac9e5cc8) |          |          |           |          |

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
| 13949.59 | 4167.80 | 20343.03 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7962.55 | 9299.27 | 15504.89 | 17550.72 | 18398.42 | 18622.07 | 19008.64 |
| **Latency** | 2ms     | 2ms     | 2ms      | 3ms      | 5ms      | 6ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 3933.79  | 4230.50 | 103092.78 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1874.08 | 2417.18 | 3001.07 | 4204.21 | 7781.92 | 9313.98 | 11111.86 |
| **Latency** | 5ms     | 6ms     | 13ms    | 18ms    | 22ms    | 23ms    | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29858.70 | 6147.94 | 35187.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21600.16 | 29906.21 | 32718.89 | 33214.86 | 33557.31 | 33782.32 | 34127.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21222.21 | 3957.46 | 25738.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17324.90 | 20183.43 | 22646.59 | 23515.69 | 24111.92 | 24419.57 | 24884.32 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57739.33 | 10384.89 | 76055.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46287.81 | 49620.21 | 55241.81 | 68312.12 | 70641.79 | 71785.72 | 73956.06 |
| **Latency** | 512µs    | 645µs    | 784µs    | 958µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40048.08 | 11323.03 | 50410.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23036.73 | 32400.57 | 46418.46 | 48058.92 | 48567.88 | 48930.70 | 49451.30 |
| **Latency** | 921µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35853.38 | 8056.69 | 46629.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26685.11 | 34862.65 | 39422.38 | 40207.14 | 40613.04 | 40822.85 | 41512.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16981.46 | 3961.80 | 28185.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12214.26 | 14953.38 | 18164.80 | 19566.17 | 20710.30 | 21086.08 | 21486.90 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6306.41  | 1451.09 | 10314.82 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3938.91 | 6439.13 | 6957.59 | 7104.17 | 7205.25 | 7264.27 | 7384.31 |
| **Latency** | 6ms     | 7ms     | 7ms     | 7ms     | 10ms    | 12ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7970.98  | 1952.66 | 39886.91 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6095.05 | 7478.89 | 8516.96 | 8835.13 | 9101.07 | 9557.17 | 10562.92 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 8ms     | 15ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39467.41 | 8254.32 | 49070.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29910.09 | 41247.97 | 43006.07 | 43707.75 | 44088.06 | 44240.95 | 44659.73 |
| **Latency** | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29864.72 | 6142.35 | 34957.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28123.27 | 30816.56 | 31668.32 | 32398.73 | 32698.66 | 32841.95 | 33148.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36090.13 | 7558.85 | 42658.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27403.01 | 36518.89 | 39341.21 | 40119.55 | 40544.30 | 40844.89 | 41306.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38624.78 | 7642.69 | 44589.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29923.86 | 38939.61 | 42122.63 | 42614.24 | 42912.25 | 43136.11 | 43730.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39115.14 | 8534.33 | 48448.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29365.99 | 39711.83 | 42865.06 | 43615.54 | 44026.32 | 44253.78 | 44713.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53766.97 | 16750.13 | 75930.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30577.89 | 35475.82 | 59539.19 | 69845.21 | 71571.66 | 72250.49 | 73207.74 |
| **Latency** | 529µs    | 635µs    | 778µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23180.11 | 4506.37 | 28943.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17284.34 | 22097.83 | 25014.94 | 25753.90 | 26133.33 | 26447.04 | 27325.80 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36250.62 | 8644.47 | 43997.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23705.66 | 32090.58 | 40676.49 | 41331.71 | 41824.48 | 42123.06 | 42642.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39760.77 | 8230.13 | 46845.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29807.71 | 37906.49 | 43847.29 | 44406.15 | 44713.80 | 45012.24 | 45619.71 |
| **Latency** | 987µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34659.22 | 5393.24 | 38198.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33854.11 | 35261.29 | 35921.85 | 36743.29 | 37051.40 | 37153.77 | 37350.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21425.15 | 3631.08 | 26218.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18344.73 | 20902.07 | 22713.83 | 23131.90 | 23602.41 | 24056.23 | 24625.32 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8782.15  | 2467.28 | 75139.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 7684.75 | 8268.89 | 9083.02 | 9313.04 | 9561.80 | 10201.21 | 11254.13 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 6ms      | 11ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33823.97 | 7289.69 | 49417.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25640.29 | 32087.88 | 37124.78 | 37904.23 | 38409.28 | 38706.41 | 39146.29 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33127.43 | 7156.53 | 39753.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25187.94 | 32708.69 | 36423.37 | 36981.19 | 37293.46 | 37500.43 | 38036.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27007.55 | 4522.64 | 35900.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22993.99 | 25787.95 | 28820.96 | 29389.41 | 29764.28 | 30040.15 | 30585.08 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5394.35  | 1675.76 | 27405.29 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3018.28 | 5334.39 | 5920.79 | 6230.26 | 6500.25 | 6586.12 | 7630.23 |
| **Latency** | 7ms     | 8ms     | 8ms     | 9ms     | 13ms    | 14ms    | 23ms    |

---

<p align="center">Generated 2023-04-22T01:40:35.522Z</p>
