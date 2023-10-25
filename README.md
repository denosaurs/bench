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

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Fast                                                                                 | 53046.34 | 13281.47 | 63237.56 | 100%     |
| Deso                                                                                 | 52446.98 | 7089.46  | 58515.33 | 99%      |
| Vixeny (Deno)                                                                        | 52437.68 | 14250.70 | 64057.22 | 99%      |
| NHttp                                                                                | 51112.66 | 16367.58 | 66906.28 | 96%      |
| Hono                                                                                 | 50965.63 | 12928.80 | 60669.38 | 96%      |
| Megalo                                                                               | 49659.91 | 11432.70 | 57847.76 | 94%      |
| Fastro                                                                               | 49387.30 | 12240.27 | 58384.71 | 93%      |
| Hyper Express                                                                        | 47535.49 | 12861.07 | 69174.07 | 90%      |
| Stric                                                                                | 47306.44 | 9710.00  | 69668.43 | 89%      |
| Bun                                                                                  | 47031.10 | 11275.14 | 71163.44 | 89%      |
| Deno                                                                                 | 45190.06 | 13457.23 | 65311.39 | 85%      |
| Reno                                                                                 | 44241.43 | 5037.76  | 47809.45 | 83%      |
| Cheetah                                                                              | 42436.84 | 8974.20  | 48355.73 | 80%      |
| http                                                                                 | 31520.53 | 7439.79  | 69902.37 | 59%      |
| Node                                                                                 | 29041.63 | 4710.28  | 32835.34 | 55%      |
| Fastify                                                                              | 27369.23 | 5118.04  | 30344.69 | 52%      |
| Alosaur                                                                              | 25281.52 | 5586.20  | 32522.44 | 48%      |
| Router                                                                               | 23497.88 | 4561.25  | 29221.31 | 44%      |
| Aqua                                                                                 | 21731.52 | 4583.79  | 53520.83 | 41%      |
| Little                                                                               | 20420.61 | 4622.44  | 71544.25 | 38%      |
| Oak                                                                                  | 19584.24 | 4293.40  | 25734.75 | 37%      |
| Dinatra                                                                              | 16970.35 | 3781.79  | 36309.60 | 32%      |
| Danet (Oak)                                                                          | 14862.42 | 3090.60  | 24547.50 | 28%      |
| Abc                                                                                  | 12701.86 | 4470.08  | 19824.49 | 24%      |
| Opine                                                                                | 9245.11  | 3298.67  | 65526.19 | 17%      |
| Express (Deno)                                                                       | 8869.05  | 2561.80  | 63965.43 | 17%      |
| Acorn                                                                                | 6340.73  | 8533.42  | 97048.34 | 12%      |
| Servest                                                                              | 5527.61  | 1833.97  | 9328.31  | 10%      |
| Express                                                                              | 5164.23  | 1786.93  | 39586.04 | 10%      |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-d9926a1c-0510-407f-a693-0dfa47268281) |          |          |          |          |

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
| 12701.86 | 4470.08 | 19824.49 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7573.53 | 8263.41 | 14209.15 | 16670.46 | 18064.74 | 18950.69 | 19560.39 |
| **Latency** | 2ms     | 2ms     | 2ms      | 4ms      | 5ms      | 9ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6340.73  | 8533.42 | 97048.34 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 41.22 | 58.98 | 5818.64 | 8264.97 | 14890.89 | 22243.41 | 41822.90 |
| **Latency** | 6ms   | 8ms   | 19ms    | 27ms    | 31ms     | 33ms     | 37ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25281.52 | 5586.20 | 32522.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19278.30 | 23186.90 | 27561.90 | 28514.95 | 29115.24 | 29512.62 | 30319.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21731.52 | 4583.79 | 53520.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18209.73 | 20423.84 | 23266.65 | 24108.30 | 24821.07 | 25291.21 | 26425.74 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47031.10 | 11275.14 | 71163.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33923.89 | 38436.68 | 45918.56 | 56730.01 | 62289.92 | 64461.99 | 68373.79 |
| **Latency** | 582µs    | 730µs    | 911µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42436.84 | 8974.20 | 48355.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29014.06 | 44917.28 | 45835.05 | 46290.45 | 46665.55 | 46948.56 | 47328.00 |
| **Latency** | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14862.42 | 3090.60 | 24547.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11719.59 | 13978.76 | 15796.41 | 16435.41 | 17169.52 | 18423.11 | 20229.40 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45190.06 | 13457.23 | 65311.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24610.12 | 33583.18 | 47872.02 | 57911.27 | 60708.77 | 61629.24 | 63262.66 |
| **Latency** | 676µs    | 784µs    | 860µs    | 1ms      | 2ms      | 2ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52446.98 | 7089.46 | 58515.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50965.43 | 53433.33 | 54406.72 | 55136.59 | 55626.48 | 55880.73 | 56328.40 |
| **Latency** | 806µs    | 866µs    | 909µs    | 952µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16970.35 | 3781.79 | 36309.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13708.55 | 15319.79 | 17906.34 | 19422.47 | 20459.53 | 20902.43 | 21422.83 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5164.23  | 1786.93 | 39586.04 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3202.32 | 3751.10 | 5991.84 | 6192.56 | 6281.87 | 6318.98 | 6432.82 |
| **Latency** | 7ms     | 8ms     | 8ms     | 10ms    | 13ms    | 15ms    | 19ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8869.05  | 2561.80 | 63965.43 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5955.11 | 8591.66 | 9521.08 | 9798.84 | 10203.92 | 10533.60 | 10819.02 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 8ms      | 15ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53046.34 | 13281.47 | 63237.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23289.75 | 54607.82 | 59527.06 | 60608.08 | 61395.08 | 61793.35 | 62435.83 |
| **Latency** | 733µs    | 781µs    | 834µs    | 884µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27369.23 | 5118.04 | 30344.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25224.79 | 28055.90 | 29043.68 | 29448.96 | 29635.34 | 29725.64 | 29907.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49387.30 | 12240.27 | 58384.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22918.17 | 49636.91 | 55424.59 | 56557.89 | 57348.27 | 57596.39 | 58185.32 |
| **Latency** | 782µs    | 845µs    | 889µs    | 941µs    | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50965.63 | 12928.80 | 60669.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22811.03 | 52928.77 | 57327.72 | 58394.52 | 59140.43 | 59556.85 | 60163.27 |
| **Latency** | 763µs    | 815µs    | 861µs    | 913µs    | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31520.53 | 7439.79 | 69902.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21657.04 | 27959.09 | 35062.19 | 36039.63 | 36617.34 | 37020.47 | 37838.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47535.49 | 12861.07 | 69174.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31144.63 | 33013.98 | 48038.93 | 60015.27 | 64076.49 | 65106.15 | 66710.31 |
| **Latency** | 604µs    | 745µs    | 877µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20420.61 | 4622.44 | 71544.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15578.32 | 19649.03 | 21858.45 | 22801.10 | 23429.34 | 23910.08 | 25177.15 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49659.91 | 11432.70 | 57847.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23496.71 | 52241.87 | 54817.73 | 55617.67 | 56283.06 | 56628.63 | 57256.06 |
| **Latency** | 799µs    | 851µs    | 900µs    | 956µs    | 1ms      | 2ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51112.66 | 16367.58 | 66906.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24144.52 | 36706.38 | 61026.89 | 63561.90 | 64632.52 | 65086.26 | 66023.05 |
| **Latency** | 675µs    | 737µs    | 809µs    | 873µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29041.63 | 4710.28 | 32835.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28292.04 | 29600.24 | 30162.54 | 30877.21 | 31145.81 | 31263.98 | 31512.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19584.24 | 4293.40 | 25734.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15582.18 | 18832.66 | 21108.53 | 21867.78 | 22386.57 | 22738.67 | 24065.84 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9245.11  | 3298.67 | 65526.19 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6601.41 | 7186.63 | 9116.41 | 11148.08 | 13040.34 | 13578.43 | 14366.78 |
| **Latency** | 3ms     | 5ms     | 5ms     | 6ms      | 6ms      | 7ms      | 12ms     |

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
| 44241.43 | 5037.76 | 47809.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43228.71 | 44626.51 | 45405.19 | 46112.18 | 46546.18 | 46818.92 | 47316.60 |
| **Latency** | 971µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23497.88 | 4561.25 | 29221.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19950.57 | 22141.94 | 25100.36 | 25901.40 | 26576.58 | 27047.27 | 28204.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47306.44 | 9710.00 | 69668.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34731.40 | 39189.98 | 46904.42 | 55415.19 | 60646.69 | 63177.48 | 66302.86 |
| **Latency** | 583µs    | 732µs    | 924µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5527.61  | 1833.97 | 9328.31 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3181.89 | 4682.81 | 6150.58 | 6717.76 | 7046.96 | 7250.76 | 8752.26 |
| **Latency** | 5ms     | 6ms     | 8ms     | 10ms    | 14ms    | 18ms    | 24ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52437.68 | 14250.70 | 64057.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23591.64 | 48215.35 | 60087.13 | 61318.48 | 62112.07 | 62602.77 | 63379.43 |
| **Latency** | 724µs    | 769µs    | 829µs    | 884µs    | 1ms      | 2ms      | 2ms      |

---

<p align="center">Generated 2023-10-25T01:24:41.257Z</p>
