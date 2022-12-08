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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Bun                                                                                  | 61632.74 | 9601.98  | 81970.20 | 100%     |
| Hyper Express                                                                        | 51265.92 | 12031.28 | 60210.06 | 83%      |
| Deno                                                                                 | 50079.02 | 12646.44 | 69519.21 | 81%      |
| Megalo                                                                               | 48292.71 | 11718.15 | 58023.64 | 78%      |
| Hono                                                                                 | 45753.27 | 15083.95 | 61855.08 | 74%      |
| http                                                                                 | 45558.45 | 9012.92  | 52322.35 | 74%      |
| Fast                                                                                 | 43371.09 | 11547.27 | 64164.87 | 70%      |
| Reno                                                                                 | 41199.67 | 8690.00  | 48572.07 | 67%      |
| Peko                                                                                 | 40914.30 | 8916.65  | 48971.09 | 66%      |
| Fastro                                                                               | 40774.53 | 9246.90  | 49503.81 | 66%      |
| Node                                                                                 | 35516.57 | 6064.71  | 38802.62 | 58%      |
| Alosaur                                                                              | 33902.66 | 7861.06  | 40360.95 | 55%      |
| Fastify                                                                              | 32022.70 | 5240.44  | 34957.68 | 52%      |
| Router                                                                               | 29190.45 | 5791.95  | 36935.50 | 47%      |
| Little                                                                               | 27186.49 | 5366.56  | 32519.26 | 44%      |
| Oak                                                                                  | 25199.44 | 4396.19  | 29206.85 | 41%      |
| Aqua                                                                                 | 24432.28 | 4142.55  | 29011.98 | 40%      |
| Dinatra                                                                              | 19542.55 | 3713.98  | 23744.56 | 32%      |
| Abc                                                                                  | 14693.42 | 4626.39  | 20913.67 | 24%      |
| Opine                                                                                | 10416.35 | 1481.13  | 14212.14 | 17%      |
| Express                                                                              | 6707.44  | 1432.01  | 8938.14  | 11%      |
| Servest                                                                              | 5935.75  | 1767.51  | 11090.33 | 10%      |
| Acorn                                                                                | 4025.92  | 3275.86  | 65477.77 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-c0777171-d126-4d8d-861c-6097d62005df) |          |          |          |          |

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
| 14693.42 | 4626.39 | 20913.67 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8884.02 | 9545.97 | 16744.64 | 18113.52 | 19756.11 | 20141.54 | 20546.23 |
| **Latency** | 2ms     | 2ms     | 2ms      | 3ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4025.92  | 3275.86 | 65477.77 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1958.33 | 2501.90 | 3001.16 | 4102.99 | 8624.14 | 10892.87 | 13147.19 |
| **Latency** | 4ms     | 5ms     | 12ms    | 17ms    | 21ms    | 22ms     | 24ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33902.66 | 7861.06 | 40360.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22774.79 | 33693.98 | 37776.25 | 38527.47 | 38967.65 | 39175.67 | 39520.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24432.28 | 4142.55 | 29011.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17538.59 | 22710.80 | 26313.88 | 27111.64 | 27616.19 | 28051.16 | 28385.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61632.74 | 9601.98 | 81970.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49615.11 | 52747.81 | 61327.95 | 71530.49 | 73320.26 | 74096.83 | 76411.46 |
| **Latency** | 495µs    | 620µs    | 762µs    | 884µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50079.02 | 12646.44 | 69519.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33361.74 | 42212.56 | 53029.22 | 61309.88 | 62586.48 | 63103.27 | 63940.71 |
| **Latency** | 610µs    | 744µs    | 894µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19542.55 | 3713.98 | 23744.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15370.14 | 16687.56 | 21325.33 | 21631.98 | 21957.24 | 22506.00 | 23156.42 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6707.44  | 1432.01 | 8938.14 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4306.87 | 6913.11 | 7415.40 | 7524.20 | 7601.50 | 7636.48 | 7679.69 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 10ms    | 11ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43371.09 | 11547.27 | 64164.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25501.45 | 40821.52 | 44119.72 | 48329.58 | 59363.34 | 60213.07 | 61251.83 |
| **Latency** | 734µs    | 825µs    | 987µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32022.70 | 5240.44 | 34957.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31600.32 | 32642.34 | 33473.88 | 33889.71 | 34198.83 | 34333.20 | 34607.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40774.53 | 9246.90 | 49503.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27567.53 | 39384.27 | 45404.40 | 46035.77 | 46457.47 | 46662.63 | 47033.29 |
| **Latency** | 954µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45753.27 | 15083.95 | 61855.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18317.35 | 35520.85 | 54566.53 | 56561.03 | 57234.17 | 57601.20 | 58816.30 |
| **Latency** | 806µs    | 851µs    | 891µs    | 960µs    | 1ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45558.45 | 9012.92 | 52322.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31766.94 | 47654.74 | 49568.75 | 50137.73 | 50485.10 | 50731.31 | 51221.23 |
| **Latency** | 878µs    | 929µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51265.92 | 12031.28 | 60210.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23002.99 | 55334.71 | 56876.06 | 57656.92 | 58021.89 | 58197.02 | 58478.79 |
| **Latency** | 807µs    | 819µs    | 835µs    | 857µs    | 1ms      | 2ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27186.49 | 5366.56 | 32519.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18058.64 | 25511.67 | 29883.90 | 30904.16 | 31342.73 | 31609.71 | 32052.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48292.71 | 11718.15 | 58023.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30667.08 | 47808.91 | 53803.62 | 55280.70 | 56010.50 | 56331.40 | 56890.88 |
| **Latency** | 810µs    | 859µs    | 914µs    | 977µs    | 1ms      | 1ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35516.57 | 6064.71 | 38802.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34882.93 | 36337.62 | 37088.91 | 37745.20 | 38037.94 | 38184.67 | 38558.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25199.44 | 4396.19 | 29206.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20904.98 | 25113.01 | 26993.03 | 27359.18 | 28072.04 | 28365.57 | 28754.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10416.35 | 1481.13 | 14212.14 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9165.60 | 9903.44 | 10816.19 | 11034.36 | 11405.67 | 12039.47 | 13219.08 |
| **Latency** | 3ms     | 4ms     | 4ms      | 5ms      | 5ms      | 5ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40914.30 | 8916.65 | 48971.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30405.11 | 36337.15 | 45523.13 | 46095.65 | 46445.57 | 46658.20 | 47026.07 |
| **Latency** | 948µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41199.67 | 8690.00 | 48572.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24688.07 | 42822.58 | 44993.46 | 45661.06 | 46285.91 | 46582.01 | 47197.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29190.45 | 5791.95 | 36935.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22601.30 | 25159.57 | 31393.47 | 33918.91 | 34614.79 | 34948.83 | 35618.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5935.75  | 1767.51 | 11090.33 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3122.03 | 5900.05 | 6560.34 | 6916.38 | 7283.16 | 7378.88 | 8199.51 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 12ms    | 14ms    | 22ms    |

---

<p align="center">Generated 2022-12-08T01:50:01.446Z</p>
