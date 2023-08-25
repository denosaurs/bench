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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Deno                                                                                 | 44366.76 | 13588.42 | 61239.45 | 100%     |
| Stric                                                                                | 42485.99 | 12059.35 | 63252.40 | 96%      |
| Vixeny (Deno)                                                                        | 41599.72 | 11406.97 | 56632.29 | 94%      |
| Hono                                                                                 | 40155.67 | 10391.43 | 53087.07 | 91%      |
| Bun                                                                                  | 39911.64 | 13537.79 | 60711.60 | 90%      |
| Hyper Express                                                                        | 39543.00 | 15459.21 | 61000.78 | 89%      |
| Fastro                                                                               | 39049.52 | 10049.44 | 54579.02 | 88%      |
| Fast                                                                                 | 38544.08 | 11712.22 | 54239.62 | 87%      |
| NHttp                                                                                | 37722.04 | 10792.28 | 54013.97 | 85%      |
| Deso                                                                                 | 36584.75 | 9730.06  | 51044.51 | 82%      |
| Reno                                                                                 | 33286.28 | 6395.99  | 41400.42 | 75%      |
| Cheetah                                                                              | 32501.97 | 6262.65  | 41259.94 | 73%      |
| http                                                                                 | 25793.15 | 7453.54  | 36126.91 | 58%      |
| Alosaur                                                                              | 20375.39 | 5208.86  | 60240.30 | 46%      |
| Router                                                                               | 17994.82 | 4272.02  | 25581.75 | 41%      |
| Aqua                                                                                 | 17985.82 | 3824.57  | 25089.33 | 41%      |
| Node                                                                                 | 16657.83 | 3139.63  | 21756.35 | 38%      |
| Little                                                                               | 14031.62 | 2873.79  | 20955.04 | 32%      |
| Fastify                                                                              | 13245.52 | 2392.53  | 18892.97 | 30%      |
| Oak                                                                                  | 12914.97 | 3078.81  | 34588.12 | 29%      |
| Dinatra                                                                              | 12593.82 | 2747.59  | 25789.55 | 28%      |
| Abc                                                                                  | 10668.50 | 1995.70  | 16391.67 | 24%      |
| Danet (Oak)                                                                          | 9250.90  | 2530.07  | 23626.83 | 21%      |
| Opine                                                                                | 6537.36  | 1955.29  | 42408.10 | 15%      |
| Express (Deno)                                                                       | 6485.66  | 1398.02  | 8523.85  | 15%      |
| Acorn                                                                                | 4928.05  | 6438.95  | 55904.38 | 11%      |
| Servest                                                                              | 4017.14  | 1366.00  | 15474.15 | 9%       |
| Express                                                                              | 3978.37  | 938.94   | 8166.17  | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-5ca0f4bc-ef81-4ca6-93f4-7db8e4f830ea) |          |          |          |          |

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
| 10668.50 | 1995.70 | 16391.67 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7870.10 | 9931.16 | 10950.26 | 12033.95 | 12738.39 | 13101.57 | 13719.07 |
| **Latency** | 3ms     | 3ms     | 3ms      | 5ms      | 6ms      | 7ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4928.05  | 6438.95 | 55904.38 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 51.29 | 70.56 | 4085.96 | 7040.50 | 10527.22 | 14163.01 | 40007.16 |
| **Latency** | 9ms   | 11ms  | 20ms    | 26ms    | 30ms     | 33ms     | 40ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20375.39 | 5208.86 | 60240.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14145.12 | 17821.38 | 22303.78 | 23437.91 | 24301.94 | 24821.15 | 26242.24 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17985.82 | 3824.57 | 25089.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13926.38 | 16750.24 | 19053.22 | 20239.09 | 21238.51 | 21918.62 | 23048.94 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39911.64 | 13537.79 | 60711.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21121.68 | 27077.16 | 43505.77 | 52204.16 | 55153.00 | 56898.49 | 59272.37 |
| **Latency** | 659µs    | 820µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32501.97 | 6262.65 | 41259.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23793.68 | 31884.62 | 34257.90 | 36218.11 | 37518.77 | 38301.89 | 39680.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9250.90  | 2530.07 | 23626.83 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6071.72 | 8167.96 | 9563.18 | 10572.65 | 11787.76 | 13122.14 | 15032.15 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 6ms      | 8ms      | 13ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44366.76 | 13588.42 | 61239.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19704.14 | 36900.37 | 50275.47 | 54327.68 | 56484.67 | 57542.64 | 59331.13 |
| **Latency** | 745µs    | 828µs    | 942µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36584.75 | 9730.06 | 51044.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17936.41 | 33280.72 | 40510.94 | 43092.22 | 45291.04 | 46313.43 | 48414.04 |
| **Latency** | 961µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12593.82 | 2747.59 | 25789.55 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9998.99 | 11300.23 | 13062.05 | 14231.88 | 15211.95 | 15739.68 | 16969.73 |
| **Latency** | 2ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 3978.37  | 938.94 | 8166.17 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2610.21 | 3723.56 | 4315.45 | 4527.66 | 4679.22 | 4770.41 | 5635.82 |
| **Latency** | 10ms    | 10ms    | 11ms    | 12ms    | 16ms    | 19ms    | 24ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6485.66  | 1398.02 | 8523.85 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4441.96 | 6177.86 | 7013.82 | 7375.96 | 7648.28 | 7787.48 | 8145.55 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 9ms     | 11ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38544.08 | 11712.22 | 54239.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17843.44 | 31025.66 | 43352.03 | 47225.51 | 49722.39 | 50623.26 | 52877.10 |
| **Latency** | 866µs    | 954µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13245.52 | 2392.53 | 18892.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11179.60 | 13172.58 | 13890.43 | 14450.29 | 14883.05 | 15136.03 | 15871.09 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39049.52 | 10049.44 | 54579.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18988.49 | 35793.69 | 43014.19 | 45739.62 | 48093.82 | 49207.77 | 50935.33 |
| **Latency** | 880µs    | 992µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40155.67 | 10391.43 | 53087.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18442.75 | 39025.08 | 44256.21 | 46809.77 | 48604.37 | 49267.02 | 50605.04 |
| **Latency** | 882µs    | 970µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25793.15 | 7453.54 | 36126.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13022.01 | 23070.73 | 28933.72 | 30760.26 | 32104.18 | 32638.47 | 33855.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39543.00 | 15459.21 | 61000.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15501.40 | 24742.96 | 45320.00 | 52923.14 | 55749.51 | 56957.47 | 59040.88 |
| **Latency** | 645µs    | 808µs    | 986µs    | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14031.62 | 2873.79 | 20955.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10803.35 | 13316.43 | 14629.70 | 15736.93 | 16474.80 | 16971.49 | 18395.77 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

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
| 37722.04 | 10792.28 | 54013.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18163.47 | 32057.47 | 41987.93 | 45153.29 | 47735.40 | 49217.72 | 51788.47 |
| **Latency** | 887µs    | 984µs    | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16657.83 | 3139.63 | 21756.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13910.30 | 16454.30 | 17362.68 | 18280.80 | 19119.70 | 19604.71 | 20353.53 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12914.97 | 3078.81 | 34588.12 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8760.41 | 11985.22 | 13641.59 | 14577.58 | 15466.82 | 16868.38 | 18266.66 |
| **Latency** | 2ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6537.36  | 1955.29 | 42408.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4939.05 | 6160.40 | 6842.61 | 7228.44 | 7549.49 | 7810.07 | 10496.60 |
| **Latency** | 5ms     | 7ms     | 7ms     | 8ms     | 10ms    | 11ms    | 15ms     |

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
| 33286.28 | 6395.99 | 41400.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24066.43 | 33152.37 | 35215.15 | 36846.28 | 38128.75 | 38722.46 | 39743.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17994.82 | 4272.02 | 25581.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12147.59 | 16824.62 | 19270.92 | 20639.52 | 21722.13 | 22421.07 | 23455.03 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42485.99 | 12059.35 | 63252.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24836.85 | 31720.22 | 45820.75 | 53098.24 | 56307.22 | 57465.02 | 59683.05 |
| **Latency** | 636µs    | 801µs    | 992µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4017.14  | 1366.00 | 15474.15 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2208.81 | 3637.72 | 4383.28 | 4766.59 | 5074.08 | 5391.39 | 6392.05 |
| **Latency** | 7ms     | 9ms     | 12ms    | 15ms    | 19ms    | 23ms    | 29ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41599.72 | 11406.97 | 56632.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18987.92 | 38416.21 | 46136.81 | 49380.48 | 51529.83 | 52675.82 | 53856.19 |
| **Latency** | 828µs    | 912µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-08-25T01:23:08.506Z</p>
