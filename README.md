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
| Bun                                                                                  | 67519.46 | 10368.36 | 91944.47  | 100%     |
| Hyper Express                                                                        | 65415.23 | 17301.42 | 85257.34  | 97%      |
| NHttp                                                                                | 56422.92 | 12171.65 | 69790.96  | 84%      |
| Fast                                                                                 | 55170.06 | 13998.67 | 68893.13  | 82%      |
| Hono                                                                                 | 54449.27 | 14878.84 | 66020.20  | 81%      |
| Deno                                                                                 | 52781.10 | 13461.44 | 72475.15  | 78%      |
| Megalo                                                                               | 52080.06 | 11564.41 | 65978.82  | 77%      |
| Fastro                                                                               | 51040.62 | 17324.60 | 155440.41 | 76%      |
| http                                                                                 | 43806.55 | 8701.70  | 51012.03  | 65%      |
| Deso                                                                                 | 42300.28 | 8726.42  | 62359.54  | 63%      |
| Peko                                                                                 | 42271.52 | 8032.36  | 48750.42  | 63%      |
| Node                                                                                 | 41513.60 | 6515.61  | 45549.48  | 61%      |
| Reno                                                                                 | 39843.67 | 12126.22 | 169491.53 | 59%      |
| Alosaur                                                                              | 36836.09 | 7293.06  | 42493.34  | 55%      |
| Fastify                                                                              | 36564.93 | 6245.42  | 39772.65  | 54%      |
| Router                                                                               | 31656.35 | 4644.31  | 38558.09  | 47%      |
| Little                                                                               | 28410.46 | 4619.41  | 33492.67  | 42%      |
| Oak                                                                                  | 25409.84 | 5033.60  | 89212.58  | 38%      |
| Aqua                                                                                 | 25108.78 | 3754.91  | 28680.94  | 37%      |
| Dinatra                                                                              | 20455.65 | 4218.81  | 45351.47  | 30%      |
| Abc                                                                                  | 18100.56 | 2717.71  | 21887.03  | 27%      |
| Express (Deno)                                                                       | 10834.28 | 5510.45  | 136035.16 | 16%      |
| Opine                                                                                | 10737.28 | 5931.05  | 168511.47 | 16%      |
| Express                                                                              | 7888.35  | 1420.12  | 9292.71   | 12%      |
| Servest                                                                              | 6254.76  | 1676.88  | 9277.83   | 9%       |
| Acorn                                                                                | 4453.37  | 4428.06  | 76804.92  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-0e9f24c5-9011-4cb5-88c5-2155e2930cef) |          |          |           |          |

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
| 18100.56 | 2717.71 | 21887.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15712.96 | 16905.31 | 19060.70 | 19619.31 | 20049.20 | 20936.67 | 21487.43 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4453.37  | 4428.06 | 76804.92 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2095.13 | 2706.47 | 3390.90 | 4886.89 | 9442.21 | 11438.18 | 13964.16 |
| **Latency** | 3ms     | 5ms     | 11ms    | 16ms    | 20ms    | 21ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36836.09 | 7293.06 | 42493.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27813.46 | 36555.09 | 40114.69 | 40884.08 | 41208.50 | 41433.91 | 41897.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25108.78 | 3754.91 | 28680.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22345.72 | 23800.15 | 26446.77 | 27137.71 | 27895.65 | 28179.96 | 28447.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67519.46 | 10368.36 | 91944.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55347.33 | 58516.10 | 64220.24 | 78191.70 | 80543.10 | 81505.31 | 83224.99 |
| **Latency** | 452µs    | 571µs    | 691µs    | 831µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52781.10 | 13461.44 | 72475.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35383.38 | 47027.11 | 51394.53 | 65699.61 | 67065.49 | 67531.53 | 68436.42 |
| **Latency** | 593µs    | 717µs    | 834µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42300.28 | 8726.42 | 62359.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29545.58 | 38353.97 | 46603.19 | 47708.45 | 48082.58 | 48265.90 | 48748.55 |
| **Latency** | 906µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20455.65 | 4218.81 | 45351.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15804.73 | 19520.57 | 20935.10 | 23087.70 | 24344.95 | 24656.56 | 25445.53 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7888.35  | 1420.12 | 9292.71 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5661.75 | 7727.71 | 8574.05 | 8725.45 | 8815.13 | 8852.11 | 8895.87 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 10834.28 | 5510.45 | 136035.16 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6733.34 | 10571.91 | 11377.04 | 11574.96 | 12498.39 | 14830.84 | 15621.67 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 6ms      | 6ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55170.06 | 13998.67 | 68893.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35303.37 | 49505.22 | 62417.98 | 63825.88 | 64618.44 | 64994.84 | 65830.04 |
| **Latency** | 700µs    | 744µs    | 791µs    | 849µs    | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36564.93 | 6245.42 | 39772.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36260.80 | 37415.97 | 38126.54 | 38805.81 | 39202.60 | 39367.19 | 39568.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 51040.62 | 17324.60 | 155440.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19071.26 | 49706.25 | 58908.77 | 60316.04 | 61312.01 | 61861.64 | 62822.39 |
| **Latency** | 767µs    | 797µs    | 827µs    | 866µs    | 1ms      | 1ms      | 6ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54449.27 | 14878.84 | 66020.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27347.75 | 50866.44 | 61815.79 | 63428.32 | 64224.80 | 64657.74 | 65412.17 |
| **Latency** | 707µs    | 752µs    | 794µs    | 849µs    | 948µs    | 1ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43806.55 | 8701.70 | 51012.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35038.38 | 43175.36 | 47772.24 | 48449.69 | 48917.52 | 49237.15 | 49648.35 |
| **Latency** | 893µs    | 972µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65415.23 | 17301.42 | 85257.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39625.58 | 42912.25 | 76415.72 | 79256.94 | 80398.32 | 80846.53 | 81937.96 |
| **Latency** | 472µs    | 556µs    | 685µs    | 752µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28410.46 | 4619.41 | 33492.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25698.37 | 27208.88 | 30114.63 | 30987.40 | 31705.57 | 31959.25 | 32295.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52080.06 | 11564.41 | 65978.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36700.22 | 52021.14 | 57342.34 | 58244.00 | 58829.77 | 59247.77 | 59903.15 |
| **Latency** | 765µs    | 814µs    | 866µs    | 924µs    | 999µs    | 1ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56422.92 | 12171.65 | 69790.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41623.15 | 53990.02 | 61915.24 | 63508.65 | 64284.47 | 64753.33 | 65622.06 |
| **Latency** | 704µs    | 748µs    | 792µs    | 845µs    | 930µs    | 1ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41513.60 | 6515.61 | 45549.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40110.28 | 42320.58 | 43100.27 | 43924.44 | 44500.73 | 44827.63 | 45328.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25409.84 | 5033.60 | 89212.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22104.78 | 24246.60 | 27075.52 | 27724.57 | 28114.17 | 28421.70 | 28812.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 10737.28 | 5931.05 | 168511.47 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9605.15 | 10046.37 | 10689.75 | 11015.71 | 11475.40 | 12014.60 | 12625.60 |
| **Latency** | 3ms     | 4ms      | 4ms      | 5ms      | 5ms      | 5ms      | 7ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42271.52 | 8032.36 | 48750.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35297.44 | 40458.29 | 45897.22 | 46516.08 | 47012.03 | 47345.25 | 47799.97 |
| **Latency** | 925µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 39843.67 | 12126.22 | 169491.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19972.81 | 32707.05 | 45705.97 | 46712.38 | 48047.23 | 49259.37 | 50945.84 |
| **Latency** | 987µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31656.35 | 4644.31 | 38558.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27749.84 | 30299.56 | 33540.54 | 33976.12 | 34312.39 | 34820.75 | 35319.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6254.76  | 1676.88 | 9277.83 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4101.95 | 6046.78 | 6815.81 | 7229.54 | 7597.94 | 7765.23 | 8983.69 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 11ms    | 19ms    |

---

<p align="center">Generated 2023-04-11T13:07:13.945Z</p>
