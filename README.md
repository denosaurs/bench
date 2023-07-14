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
| Hyper Express                                                                        | 38275.38 | 14992.36 | 57719.63  | 100%     |
| Bun                                                                                  | 38247.02 | 11200.78 | 60335.61  | 100%     |
| Stric                                                                                | 37685.33 | 10765.81 | 59505.66  | 98%      |
| Deno                                                                                 | 37398.01 | 13122.15 | 58162.76  | 98%      |
| NHttp                                                                                | 35415.82 | 10126.37 | 47395.17  | 93%      |
| Vixeny (Deno)                                                                        | 35309.15 | 9834.88  | 48023.42  | 92%      |
| Hono                                                                                 | 34377.61 | 10172.73 | 48273.67  | 90%      |
| Deso                                                                                 | 33777.91 | 9123.34  | 44731.65  | 88%      |
| Fast                                                                                 | 33491.89 | 10462.36 | 47094.54  | 88%      |
| Reno                                                                                 | 28275.27 | 7243.43  | 39472.61  | 74%      |
| http                                                                                 | 24897.41 | 7051.50  | 55826.16  | 65%      |
| Peko                                                                                 | 20229.15 | 5619.72  | 28434.76  | 53%      |
| Cheetah                                                                              | 20216.64 | 3694.42  | 26048.76  | 53%      |
| Alosaur                                                                              | 19183.33 | 5306.77  | 27336.29  | 50%      |
| Node                                                                                 | 16327.09 | 3431.93  | 21506.83  | 43%      |
| Router                                                                               | 15454.73 | 3807.17  | 21306.63  | 40%      |
| Aqua                                                                                 | 14587.22 | 3346.49  | 32522.90  | 38%      |
| Little                                                                               | 13696.44 | 3671.80  | 57142.35  | 36%      |
| Fastify                                                                              | 12822.36 | 3219.92  | 18977.76  | 34%      |
| Oak                                                                                  | 11259.18 | 3168.35  | 48095.05  | 29%      |
| Dinatra                                                                              | 10003.19 | 2928.42  | 20089.38  | 26%      |
| Abc                                                                                  | 9373.09  | 1779.69  | 14127.42  | 24%      |
| Danet (Oak)                                                                          | 9043.34  | 3896.60  | 114282.45 | 24%      |
| Acorn                                                                                | 5932.48  | 9612.34  | 89443.84  | 15%      |
| Opine                                                                                | 5603.04  | 3641.08  | 51736.12  | 15%      |
| Express (Deno)                                                                       | 5101.18  | 1362.83  | 9336.55   | 13%      |
| Express                                                                              | 3640.80  | 1085.98  | 13228.42  | 10%      |
| Servest                                                                              | 3533.50  | 1156.79  | 7391.34   | 9%       |
| Fastro                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-11157ac4-6fdf-48a1-9780-fd77cf74a74d) |          |          |           |          |

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
| 9373.09  | 1779.69 | 14127.42 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6724.73 | 8529.41 | 9976.20 | 10616.43 | 10956.40 | 11122.22 | 11791.15 |
| **Latency** | 3ms     | 4ms     | 4ms     | 6ms      | 7ms      | 8ms      | 12ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5932.48  | 9612.34 | 89443.84 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 53.78 | 75.28 | 4045.44 | 7322.22 | 13501.29 | 18535.34 | 50178.56 |
| **Latency** | 8ms   | 10ms  | 20ms    | 26ms    | 30ms     | 32ms     | 38ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19183.33 | 5306.77 | 27336.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12153.66 | 16643.73 | 21170.16 | 22753.35 | 23808.74 | 24345.04 | 25660.91 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 8ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14587.22 | 3346.49 | 32522.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10962.97 | 13416.87 | 15414.30 | 16692.50 | 17478.70 | 17957.38 | 19430.01 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38247.02 | 11200.78 | 60335.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24011.71 | 29518.96 | 37623.99 | 48434.76 | 52942.76 | 54414.01 | 56071.62 |
| **Latency** | 687µs    | 860µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20216.64 | 3694.42 | 26048.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15521.33 | 19713.16 | 21484.21 | 22416.22 | 23042.80 | 23200.17 | 23851.46 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9043.34  | 3896.60 | 114282.45 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6021.53 | 7739.75 | 9204.21 | 10229.11 | 11762.12 | 13077.50 | 14530.35 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms      | 7ms      | 9ms      | 13ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37398.01 | 13122.15 | 58162.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17941.22 | 24314.04 | 41457.35 | 48923.46 | 52124.17 | 53120.06 | 54896.72 |
| **Latency** | 818µs    | 912µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33777.91 | 9123.34 | 44731.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16359.02 | 30627.64 | 37666.02 | 40162.98 | 41604.89 | 42107.48 | 43374.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10003.19 | 2928.42 | 20089.38 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5720.16 | 8607.38 | 10597.44 | 12007.01 | 13071.34 | 13500.78 | 14425.47 |
| **Latency** | 3ms     | 3ms     | 3ms      | 6ms      | 7ms      | 9ms      | 15ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3640.80  | 1085.98 | 13228.42 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2148.11 | 3092.99 | 4040.68 | 4324.68 | 4433.78 | 4496.71 | 4640.07 |
| **Latency** | 11ms    | 11ms    | 12ms    | 15ms    | 19ms    | 22ms    | 28ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5101.18  | 1362.83 | 9336.55 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3238.16 | 4468.17 | 5502.41 | 6084.81 | 6365.83 | 6554.63 | 6923.80 |
| **Latency** | 7ms     | 8ms     | 8ms     | 10ms    | 13ms    | 16ms    | 21ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 33491.89 | 10462.36 | 47094.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16457.56 | 25896.94 | 38264.19 | 41778.86 | 43516.61 | 44361.55 | 45722.43 |
| **Latency** | 989µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12822.36 | 3219.92 | 18977.76 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6754.56 | 12511.48 | 14102.21 | 14805.29 | 15238.36 | 15564.56 | 16178.19 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 5ms      | 7ms      | 10ms     |

### [Fastro](#fastro)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 34377.61 | 10172.73 | 48273.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16480.09 | 28730.37 | 39207.41 | 41853.92 | 42942.26 | 43622.04 | 44700.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24897.41 | 7051.50 | 55826.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14491.38 | 21921.87 | 27808.22 | 29633.42 | 30826.01 | 31242.73 | 32317.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38275.38 | 14992.36 | 57719.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14923.54 | 23049.54 | 44403.89 | 51094.91 | 53713.30 | 54722.38 | 56229.04 |
| **Latency** | 679µs    | 839µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13696.44 | 3671.80 | 57142.35 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8910.05 | 12902.94 | 14608.58 | 15824.49 | 16542.97 | 17079.90 | 18872.58 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 10ms     |

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
| 35415.82 | 10126.37 | 47395.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16312.03 | 31058.00 | 39624.18 | 42779.58 | 44503.14 | 45297.28 | 46034.42 |
| **Latency** | 981µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16327.09 | 3431.93 | 21506.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11523.48 | 16153.59 | 17458.45 | 18272.32 | 18840.65 | 19135.74 | 19922.86 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11259.18 | 3168.35 | 48095.05 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7168.80 | 10202.63 | 12140.17 | 13096.99 | 13716.48 | 14112.59 | 15670.01 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 6ms      | 7ms      | 12ms     |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5603.04  | 3641.08 | 51736.12 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 2601.79 | 4554.55 | 5597.67 | 6109.70 | 7407.24 | 9765.77 | 18153.80 |
| **Latency** | 7ms     | 8ms     | 9ms     | 10ms    | 13ms    | 15ms    | 22ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20229.15 | 5619.72 | 28434.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11624.85 | 18029.53 | 22337.85 | 24033.59 | 24984.59 | 25569.66 | 27084.32 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28275.27 | 7243.43 | 39472.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15480.16 | 25609.05 | 31152.58 | 33248.46 | 34513.38 | 35130.83 | 35850.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15454.73 | 3807.17 | 21306.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10741.55 | 13759.21 | 16690.58 | 18070.46 | 18803.41 | 19346.00 | 20507.54 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37685.33 | 10765.81 | 59505.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23186.83 | 28804.25 | 38521.48 | 47545.89 | 51315.27 | 52541.91 | 54318.89 |
| **Latency** | 698µs    | 875µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3533.50  | 1156.79 | 7391.34 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1829.38 | 3146.02 | 3876.12 | 4242.46 | 4569.82 | 4825.49 | 5266.79 |
| **Latency** | 8ms     | 10ms    | 13ms    | 17ms    | 22ms    | 26ms    | 34ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35309.15 | 9834.88 | 48023.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16924.33 | 30175.62 | 39323.11 | 42518.61 | 44511.48 | 45474.97 | 46804.58 |
| **Latency** | 970µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

---

<p align="center">Generated 2023-07-14T02:08:33.542Z</p>
