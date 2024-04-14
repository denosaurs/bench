<div align="center">
  <h1><code>bench</code></h1>
  <p>
    <strong>📊 Daily benchmarks of deno & node & bun HTTP frameworks</strong>
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
  - [Danet V2 (Hono)](#danet-v2-hono)
  - [Deno](#deno)
  - [Deso](#deso)
  - [Dinatra](#dinatra)
  - [Elysia](#elysia)
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
  - [Vixeny (Bun)](#vixeny-bun)
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
    - [Danet V2 (Hono)](#danet-v2-hono-1)
    - [Deno](#deno-1)
    - [Deso](#deso-1)
    - [Dinatra](#dinatra-1)
    - [Elysia](#elysia-1)
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
    - [Vixeny (Bun)](#vixeny-bun-1)
    - [Vixeny (Deno)](#vixeny-deno-1)

# Overview

## Hello, bench!

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Hyper Express                                                                        | 81469.23 | 16444.65 | 102555.85 | 100%     |
| Stric                                                                                | 80758.78 | 9890.30  | 101957.95 | 99%      |
| Bun                                                                                  | 79837.87 | 9950.79  | 103117.82 | 98%      |
| Elysia                                                                               | 77684.27 | 13377.97 | 102089.85 | 95%      |
| Vixeny (Bun)                                                                         | 77324.51 | 14022.90 | 101997.61 | 95%      |
| Deno                                                                                 | 63894.53 | 11285.90 | 89185.77  | 78%      |
| Vixeny (Deno)                                                                        | 53019.94 | 6288.76  | 81574.29  | 65%      |
| NHttp                                                                                | 52425.44 | 5881.26  | 79218.51  | 64%      |
| Hono                                                                                 | 51714.98 | 4704.20  | 69444.94  | 63%      |
| Fast                                                                                 | 50494.89 | 4063.14  | 80758.23  | 62%      |
| Fastro                                                                               | 49718.93 | 3059.90  | 69851.26  | 61%      |
| Deso                                                                                 | 47595.19 | 3222.37  | 70001.42  | 58%      |
| Megalo                                                                               | 47267.24 | 2692.01  | 63909.78  | 58%      |
| Alosaur                                                                              | 45149.84 | 2572.69  | 53395.18  | 55%      |
| http                                                                                 | 43935.98 | 4125.52  | 50497.23  | 54%      |
| Cheetah                                                                              | 43019.27 | 2651.67  | 53534.88  | 53%      |
| Router                                                                               | 41888.77 | 4129.68  | 49024.93  | 51%      |
| Reno                                                                                 | 41763.51 | 2274.89  | 48671.41  | 51%      |
| Danet V2 (Hono)                                                                      | 35486.33 | 2324.19  | 44640.57  | 44%      |
| Aqua                                                                                 | 33936.75 | 3691.59  | 38676.57  | 42%      |
| Danet (Oak)                                                                          | 33827.57 | 2111.81  | 38712.94  | 42%      |
| Oak                                                                                  | 33675.20 | 2930.20  | 35888.01  | 41%      |
| Little                                                                               | 32690.65 | 4030.61  | 41067.74  | 40%      |
| Dinatra                                                                              | 17944.04 | 2509.94  | 31331.48  | 22%      |
| Node                                                                                 | 17447.60 | 1482.87  | 19489.11  | 21%      |
| Fastify                                                                              | 16714.20 | 2619.20  | 32329.29  | 21%      |
| Opine                                                                                | 14888.68 | 2577.06  | 19894.78  | 18%      |
| Abc                                                                                  | 14434.82 | 1563.98  | 26022.87  | 18%      |
| Express (Deno)                                                                       | 12063.88 | 2137.37  | 15105.48  | 15%      |
| Servest                                                                              | 6480.26  | 1572.28  | 11243.67  | 8%       |
| Express                                                                              | 6381.36  | 956.67   | 8019.58   | 8%       |
| Acorn                                                                                | 3725.92  | 2885.40  | 50251.00  | 5%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-812d7c8f-5980-4cc5-809b-8dad0e5516f1) |          |          |           |          |

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

## [Danet V2 (Hono)](https://danet.land/)

The most mature backend framework for Deno, V2 in Alpha

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Deso](https://github.com/gothammm/deso)

A simple & fast HTTP web framework for Deno

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

## [Elysia](https://elysiajs.com/)

Ergonomic Framework for Humans

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

## [Vixeny (Bun)](https://vixeny.dev/)

A pure functional web framework

## [Vixeny (Deno)](https://vixeny.dev/)

A pure functional web framework

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14434.82 | 1563.98 | 26022.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13230.70 | 13926.03 | 14637.93 | 15044.36 | 15409.46 | 15614.19 | 19074.97 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3725.92  | 2885.40 | 50251.00 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1850.42 | 2437.64 | 3000.40 | 3887.92 | 5283.32 | 9496.63 | 15212.84 |
| **Latency** | 3ms     | 8ms     | 13ms    | 17ms    | 21ms    | 25ms    | 33ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45149.84 | 2572.69 | 53395.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43039.85 | 44233.80 | 45176.20 | 46309.22 | 47540.12 | 48704.13 | 51297.32 |
| **Latency** | 967µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33936.75 | 3691.59 | 38676.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32214.95 | 33321.54 | 34652.99 | 35726.24 | 36489.60 | 37111.45 | 37904.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 79837.87 | 9950.79 | 103117.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66675.06 | 71667.92 | 79128.89 | 87614.38 | 94167.63 | 96637.77 | 99716.17 |
| **Latency** | 372µs    | 462µs    | 586µs    | 743µs    | 934µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43019.27 | 2651.67 | 53534.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41409.95 | 42504.67 | 43200.09 | 44091.29 | 44917.51 | 45540.59 | 46652.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33827.57 | 2111.81 | 38712.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33213.04 | 33644.83 | 34170.58 | 34488.02 | 34753.43 | 34953.82 | 35341.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35486.33 | 2324.19 | 44640.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35023.83 | 35440.82 | 35764.32 | 36229.20 | 36520.67 | 36673.04 | 37126.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63894.53 | 11285.90 | 89185.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53393.30 | 54513.25 | 58748.80 | 73027.75 | 81484.95 | 84601.72 | 87626.97 |
| **Latency** | 534µs    | 582µs    | 820µs    | 937µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47595.19 | 3222.37 | 70001.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45061.22 | 46135.58 | 47153.80 | 49103.15 | 51255.17 | 52529.00 | 55685.08 |
| **Latency** | 911µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17944.04 | 2509.94 | 31331.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16008.00 | 17222.66 | 18488.99 | 19322.66 | 19881.21 | 20255.99 | 21245.92 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 77684.27 | 13377.97 | 102089.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 59219.56 | 64632.06 | 79306.82 | 89488.81 | 95052.98 | 96643.04 | 100031.13 |
| **Latency** | 381µs    | 468µs    | 581µs    | 781µs    | 966µs    | 1ms      | 1ms       |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6381.36  | 956.67 | 8019.58 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4927.37 | 6101.31 | 6570.28 | 6718.97 | 7672.76 | 7817.69 | 7969.34 |
| **Latency** | 6ms     | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12063.88 | 2137.37 | 15105.48 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8603.66 | 12274.74 | 12811.69 | 13180.92 | 13354.10 | 13586.36 | 14039.84 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 9ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50494.89 | 4063.14 | 80758.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48189.95 | 48939.47 | 49686.95 | 50610.97 | 54023.78 | 58053.30 | 67107.66 |
| **Latency** | 850µs    | 925µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16714.20 | 2619.20 | 32329.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15467.67 | 15837.76 | 16709.87 | 17326.04 | 17844.24 | 18561.14 | 28348.71 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49718.93 | 3059.90 | 69851.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47759.65 | 48568.78 | 49335.95 | 50159.27 | 52100.53 | 55348.17 | 60006.21 |
| **Latency** | 875µs    | 937µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51714.98 | 4704.20 | 69444.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48006.46 | 48962.41 | 50247.94 | 54061.45 | 58343.56 | 60418.46 | 64619.15 |
| **Latency** | 709µs    | 902µs    | 990µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43935.98 | 4125.52 | 50497.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40716.12 | 43037.06 | 44842.44 | 46026.01 | 47104.90 | 47631.43 | 49123.70 |
| **Latency** | 848µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 81469.23 | 16444.65 | 102555.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 57575.70 | 64583.33 | 87512.38 | 96458.19 | 99145.38 | 100042.92 | 101263.18 |
| **Latency** | 365µs    | 452µs    | 561µs    | 724µs    | 931µs    | 1ms       | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32690.65 | 4030.61 | 41067.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30800.97 | 32463.70 | 33517.22 | 34538.02 | 35365.96 | 35888.29 | 36970.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47267.24 | 2692.01 | 63909.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45501.34 | 46343.43 | 47240.37 | 47958.20 | 49569.71 | 50846.55 | 54929.61 |
| **Latency** | 927µs    | 983µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52425.44 | 5881.26 | 79218.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48707.03 | 49513.70 | 50439.56 | 52831.64 | 60611.53 | 66228.00 | 72185.21 |
| **Latency** | 670µs    | 894µs    | 981µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17447.60 | 1482.87 | 19489.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17016.94 | 17351.30 | 17640.16 | 17960.02 | 18298.58 | 18438.99 | 18855.74 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33675.20 | 2930.20 | 35888.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33201.10 | 33903.08 | 34213.00 | 34487.11 | 34832.70 | 35037.87 | 35352.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14888.68 | 2577.06 | 19894.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12405.93 | 14530.66 | 15478.37 | 15910.56 | 17071.10 | 18135.87 | 19298.06 |
| **Latency** | 1ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 7ms      |

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
| 41763.51 | 2274.89 | 48671.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40778.25 | 41207.55 | 41957.96 | 42621.02 | 43330.93 | 44009.45 | 45370.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41888.77 | 4129.68 | 49024.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39419.53 | 41033.94 | 42836.80 | 43897.34 | 44730.74 | 45568.05 | 46592.30 |
| **Latency** | 877µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 80758.78 | 9890.30 | 101957.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 67934.57 | 72761.43 | 79970.95 | 88908.85 | 94704.33 | 97097.82 | 100830.93 |
| **Latency** | 368µs    | 457µs    | 579µs    | 732µs    | 927µs    | 1ms      | 1ms       |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6480.26  | 1572.28 | 11243.67 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5139.18 | 5761.97 | 6626.25 | 7308.24 | 8313.85 | 8815.04 | 9581.09 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 14ms    |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 77324.51 | 14022.90 | 101997.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58385.14 | 63550.52 | 78265.05 | 90512.74 | 95061.67 | 96958.82 | 99829.09 |
| **Latency** | 377µs    | 463µs    | 586µs    | 796µs    | 967µs    | 1ms      | 1ms      |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53019.94 | 6288.76 | 81574.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49207.20 | 50007.30 | 50955.31 | 52640.48 | 62306.81 | 66889.29 | 76500.42 |
| **Latency** | 664µs    | 883µs    | 970µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-04-14T01:57:43.758Z</p>
