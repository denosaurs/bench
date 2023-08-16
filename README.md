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
| Vixeny (Deno)                                                                        | 70578.49 | 15663.62 | 79805.10  | 100%     |
| Fast                                                                                 | 69333.18 | 16001.89 | 79620.26  | 98%      |
| NHttp                                                                                | 67322.91 | 18246.74 | 79935.48  | 95%      |
| Hono                                                                                 | 66697.12 | 13348.58 | 74524.72  | 95%      |
| Hyper Express                                                                        | 66655.02 | 17665.29 | 86349.56  | 94%      |
| Deno                                                                                 | 66175.75 | 18689.33 | 80485.66  | 94%      |
| Bun                                                                                  | 65523.20 | 15433.12 | 87032.52  | 93%      |
| Stric                                                                                | 65265.88 | 14775.12 | 86461.45  | 92%      |
| Deso                                                                                 | 62488.83 | 14146.41 | 71706.58  | 89%      |
| Fastro                                                                               | 58411.46 | 16938.87 | 73113.41  | 83%      |
| Reno                                                                                 | 51954.05 | 11459.13 | 60501.88  | 74%      |
| Cheetah                                                                              | 51251.78 | 7529.46  | 55103.52  | 73%      |
| Node                                                                                 | 40717.45 | 5799.88  | 43506.26  | 58%      |
| http                                                                                 | 39493.28 | 10195.51 | 101010.74 | 56%      |
| Fastify                                                                              | 36768.45 | 6559.79  | 39769.34  | 52%      |
| Alosaur                                                                              | 33257.40 | 6660.68  | 43901.05  | 47%      |
| Router                                                                               | 28176.85 | 5196.65  | 42796.17  | 40%      |
| Little                                                                               | 24652.19 | 4344.45  | 30283.83  | 35%      |
| Aqua                                                                                 | 24620.80 | 3545.30  | 29189.59  | 35%      |
| Oak                                                                                  | 24299.96 | 4927.39  | 87028.96  | 34%      |
| Dinatra                                                                              | 22948.13 | 4977.00  | 49261.29  | 33%      |
| Abc                                                                                  | 20994.36 | 3092.35  | 25055.44  | 30%      |
| Danet (Oak)                                                                          | 18282.70 | 3435.95  | 23344.65  | 26%      |
| Express (Deno)                                                                       | 11082.41 | 3418.84  | 90805.90  | 16%      |
| Opine                                                                                | 10810.36 | 1910.01  | 16356.10  | 15%      |
| Express                                                                              | 7396.32  | 1741.32  | 16212.99  | 10%      |
| Servest                                                                              | 6806.28  | 2113.09  | 11061.95  | 10%      |
| Acorn                                                                                | 4863.35  | 8092.57  | 156250.00 | 7%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-9058760d-4041-4a24-9e1a-d92aa45ea03e) |          |          |           |          |

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
| 20994.36 | 3092.35 | 25055.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18829.78 | 20475.68 | 21201.52 | 22727.54 | 24206.29 | 24428.82 | 24732.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4863.35  | 8092.57 | 156250.00 |     |

| **Stat**    | 10    | 25     | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ------ | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 59.60 | 600.03 | 3528.67 | 7183.92 | 8966.00 | 10854.64 | 20648.78 |
| **Latency** | 5ms   | 7ms    | 15ms    | 22ms    | 26ms    | 28ms     | 36ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33257.40 | 6660.68 | 43901.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28874.29 | 30745.83 | 35810.88 | 36564.48 | 37133.16 | 37656.51 | 38925.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24620.80 | 3545.30 | 29189.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22803.07 | 23908.91 | 25664.26 | 26407.58 | 26853.67 | 27505.34 | 28625.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65523.20 | 15433.12 | 87032.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45719.37 | 50200.30 | 74825.76 | 79412.04 | 80719.03 | 81511.88 | 83577.61 |
| **Latency** | 460µs    | 568µs    | 687µs    | 924µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51251.78 | 7529.46 | 55103.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50007.20 | 52435.33 | 53210.84 | 53835.72 | 54245.22 | 54438.64 | 54946.37 |
| **Latency** | 853µs    | 892µs    | 933µs    | 972µs    | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18282.70 | 3435.95 | 23344.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16621.67 | 18153.70 | 19435.24 | 19902.66 | 20210.01 | 20577.27 | 21762.65 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66175.75 | 18689.33 | 80485.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31632.80 | 57918.77 | 77022.64 | 78218.30 | 78890.99 | 79247.87 | 79825.07 |
| **Latency** | 508µs    | 557µs    | 678µs    | 719µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62488.83 | 14146.41 | 71706.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30716.73 | 66519.60 | 68911.34 | 69727.22 | 70303.14 | 70695.93 | 71112.42 |
| **Latency** | 638µs    | 684µs    | 716µs    | 753µs    | 902µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22948.13 | 4977.00 | 49261.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20224.24 | 21351.74 | 23582.26 | 25933.71 | 26746.89 | 28275.85 | 29171.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7396.32  | 1741.32 | 16212.99 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5227.14 | 6004.65 | 8360.82 | 8515.62 | 8615.71 | 8653.77 | 8695.59 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 9ms     | 10ms    | 14ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11082.41 | 3418.84 | 90805.90 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8409.84 | 10586.09 | 12024.22 | 12209.07 | 12317.09 | 12514.35 | 13983.96 |
| **Latency** | 4ms     | 4ms      | 4ms      | 4ms      | 5ms      | 6ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69333.18 | 16001.89 | 79620.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31118.31 | 73805.86 | 76607.16 | 77421.62 | 78007.33 | 78269.99 | 78802.05 |
| **Latency** | 580µs    | 611µs    | 647µs    | 689µs    | 758µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36768.45 | 6559.79 | 39769.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36735.71 | 37827.69 | 38477.03 | 39082.99 | 39305.25 | 39421.37 | 39589.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58411.46 | 16938.87 | 73113.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27469.57 | 51304.31 | 69008.55 | 69938.04 | 70291.71 | 70467.35 | 70861.93 |
| **Latency** | 647µs    | 690µs    | 726µs    | 757µs    | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66697.12 | 13348.58 | 74524.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41603.44 | 70433.36 | 71963.59 | 72638.52 | 73345.74 | 73631.33 | 74002.10 |
| **Latency** | 611µs    | 656µs    | 687µs    | 718µs    | 843µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 39493.28 | 10195.51 | 101010.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23039.79 | 37768.76 | 44698.61 | 45957.93 | 46535.17 | 46970.64 | 47714.41 |
| **Latency** | 987µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66655.02 | 17665.29 | 86349.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41220.94 | 42469.82 | 78722.35 | 80916.72 | 81806.06 | 82247.22 | 83140.25 |
| **Latency** | 467µs    | 537µs    | 677µs    | 745µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24652.19 | 4344.45 | 30283.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21852.75 | 24454.81 | 25829.03 | 26868.45 | 27204.36 | 27450.89 | 28410.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

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
| 67322.91 | 18246.74 | 79935.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29120.67 | 70531.53 | 76476.01 | 77618.15 | 78534.86 | 78918.46 | 79465.69 |
| **Latency** | 577µs    | 610µs    | 648µs    | 690µs    | 822µs    | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40717.45 | 5799.88 | 43506.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40656.68 | 41511.79 | 42018.24 | 42577.66 | 42907.47 | 43085.49 | 43359.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24299.96 | 4927.39 | 87028.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22138.39 | 23802.00 | 25628.55 | 26351.71 | 26892.00 | 27603.00 | 28700.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10810.36 | 1910.01 | 16356.10 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8931.05 | 10685.22 | 11394.02 | 11613.31 | 11771.61 | 12238.48 | 14467.74 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 5ms      | 5ms      | 9ms      |

### [Peko](#peko)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51954.05 | 11459.13 | 60501.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26165.78 | 54923.28 | 57145.94 | 57833.82 | 58509.06 | 58751.34 | 59101.89 |
| **Latency** | 774µs    | 841µs    | 877µs    | 905µs    | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28176.85 | 5196.65 | 42796.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21534.14 | 27730.42 | 30005.80 | 30899.42 | 31539.28 | 31956.05 | 32967.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65265.88 | 14775.12 | 86461.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45690.25 | 49371.51 | 72911.11 | 78956.23 | 80511.59 | 81579.75 | 83728.77 |
| **Latency** | 461µs    | 572µs    | 690µs    | 976µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6806.28  | 2113.09 | 11061.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5005.07 | 5888.05 | 7477.56 | 8053.91 | 8590.74 | 8858.77 | 10700.32 |
| **Latency** | 4ms     | 5ms     | 7ms     | 8ms     | 10ms    | 13ms    | 18ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 70578.49 | 15663.62 | 79805.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33565.03 | 74654.15 | 77162.37 | 77958.77 | 78544.29 | 78883.92 | 79404.03 |
| **Latency** | 570µs    | 605µs    | 643µs    | 685µs    | 751µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-08-16T01:21:27.709Z</p>
