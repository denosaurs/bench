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
| Vixeny (Deno)                                                                        | 64153.19 | 12928.35 | 72254.68 | 100%     |
| NHttp                                                                                | 62420.18 | 13034.01 | 71006.37 | 97%      |
| Deno                                                                                 | 60703.74 | 16130.25 | 73517.72 | 95%      |
| Bun                                                                                  | 59834.93 | 11813.35 | 77831.93 | 93%      |
| Stric                                                                                | 59369.00 | 10611.85 | 76512.83 | 93%      |
| Hono                                                                                 | 59124.14 | 14374.46 | 69305.81 | 92%      |
| Hyper Express                                                                        | 59115.46 | 17393.88 | 76096.09 | 92%      |
| Deso                                                                                 | 56854.56 | 11792.77 | 64683.11 | 89%      |
| Fast                                                                                 | 55265.89 | 19059.70 | 70947.55 | 86%      |
| Fastro                                                                               | 52452.01 | 13981.51 | 64879.11 | 82%      |
| Reno                                                                                 | 49605.35 | 6678.83  | 59205.58 | 77%      |
| Cheetah                                                                              | 45010.21 | 5717.45  | 49388.65 | 70%      |
| http                                                                                 | 35875.84 | 8863.29  | 43212.97 | 56%      |
| Fastify                                                                              | 30886.94 | 5635.70  | 33894.54 | 48%      |
| Node                                                                                 | 30478.26 | 9314.46  | 38512.94 | 48%      |
| Peko                                                                                 | 29760.31 | 7984.78  | 86340.53 | 46%      |
| Alosaur                                                                              | 28986.11 | 6167.26  | 39233.59 | 45%      |
| Router                                                                               | 25504.16 | 4280.16  | 31518.04 | 40%      |
| Aqua                                                                                 | 21887.31 | 3329.23  | 27739.97 | 34%      |
| Little                                                                               | 21831.35 | 3975.40  | 37900.42 | 34%      |
| Oak                                                                                  | 20209.69 | 3863.01  | 26011.01 | 32%      |
| Dinatra                                                                              | 19138.10 | 4342.18  | 37735.14 | 30%      |
| Danet (Oak)                                                                          | 15983.06 | 4397.53  | 90770.19 | 25%      |
| Abc                                                                                  | 15348.09 | 4160.03  | 21435.67 | 24%      |
| Opine                                                                                | 8983.37  | 2696.91  | 37225.05 | 14%      |
| Express (Deno)                                                                       | 8409.05  | 1699.94  | 11006.36 | 13%      |
| Express                                                                              | 6486.39  | 1307.56  | 8936.09  | 10%      |
| Acorn                                                                                | 6153.78  | 8509.42  | 87719.30 | 10%      |
| Servest                                                                              | 5713.72  | 1820.93  | 8829.24  | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-b386e2d8-a998-4f3b-8bca-c4133e44ef5f) |          |          |          |          |

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
| 15348.09 | 4160.03 | 21435.67 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8949.62 | 14548.07 | 16935.46 | 17704.50 | 19678.31 | 19946.06 | 20387.48 |
| **Latency** | 2ms     | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6153.78  | 8509.42 | 87719.30 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 48.31 | 67.98 | 5693.05 | 8261.23 | 13406.25 | 17975.51 | 46947.59 |
| **Latency** | 6ms   | 8ms   | 17ms    | 24ms    | 29ms     | 31ms     | 35ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28986.11 | 6167.26 | 39233.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24000.58 | 26003.08 | 31575.38 | 32164.18 | 32751.02 | 33287.21 | 34579.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21887.31 | 3329.23 | 27739.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20140.87 | 21023.10 | 22936.35 | 23600.40 | 24112.16 | 24415.49 | 25605.53 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59834.93 | 11813.35 | 77831.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46137.04 | 50055.89 | 61406.45 | 71291.95 | 72990.14 | 73812.60 | 75467.53 |
| **Latency** | 494µs    | 617µs    | 764µs    | 937µs    | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45010.21 | 5717.45 | 49388.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44707.34 | 45910.76 | 46411.84 | 46854.15 | 47176.63 | 47372.68 | 47614.01 |
| **Latency** | 982µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15983.06 | 4397.53 | 90770.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12997.91 | 15237.62 | 16685.64 | 17223.47 | 17629.90 | 19063.88 | 21545.89 |
| **Latency** | 1ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60703.74 | 16130.25 | 73517.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29706.35 | 54306.49 | 69475.30 | 71192.12 | 71883.03 | 72319.69 | 72958.38 |
| **Latency** | 551µs    | 616µs    | 749µs    | 790µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56854.56 | 11792.77 | 64683.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32193.45 | 60234.40 | 61797.29 | 62596.94 | 63202.69 | 63415.49 | 63838.69 |
| **Latency** | 708µs    | 761µs    | 799µs    | 843µs    | 991µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19138.10 | 4342.18 | 37735.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15607.31 | 16732.93 | 20861.56 | 22203.22 | 22815.02 | 23046.99 | 24697.14 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6486.39  | 1307.56 | 8936.09 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4331.66 | 6647.92 | 7079.13 | 7201.72 | 7283.46 | 7319.52 | 7370.61 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 10ms    | 11ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8409.05  | 1699.94 | 11006.36 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6356.13 | 8002.55 | 9179.73 | 9306.87 | 9389.96 | 9529.24 | 10100.58 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55265.89 | 19059.70 | 70947.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26332.82 | 27519.40 | 67616.82 | 68808.85 | 69396.23 | 69708.27 | 70229.40 |
| **Latency** | 651µs    | 696µs    | 735µs    | 792µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30886.94 | 5635.70 | 33894.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29945.49 | 31740.28 | 32502.90 | 33073.06 | 33317.96 | 33466.24 | 33708.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52452.01 | 13981.51 | 64879.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27809.11 | 44722.81 | 60655.21 | 61533.18 | 61876.55 | 62062.68 | 62383.52 |
| **Latency** | 735µs    | 788µs    | 827µs    | 861µs    | 988µs    | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59124.14 | 14374.46 | 69305.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26860.46 | 62062.03 | 66031.66 | 67136.89 | 67820.46 | 68185.03 | 68668.68 |
| **Latency** | 665µs    | 710µs    | 747µs    | 794µs    | 975µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35875.84 | 8863.29 | 43212.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23451.27 | 32415.57 | 40140.00 | 41207.43 | 41769.68 | 42113.23 | 42759.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59115.46 | 17393.88 | 76096.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33222.26 | 36649.90 | 69634.82 | 73165.62 | 74307.85 | 74760.89 | 75543.81 |
| **Latency** | 507µs    | 582µs    | 750µs    | 796µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21831.35 | 3975.40 | 37900.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19001.26 | 21237.90 | 23210.23 | 23903.70 | 24309.24 | 24688.42 | 25474.64 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

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
| 62420.18 | 13034.01 | 71006.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33112.54 | 65361.93 | 67926.40 | 68619.04 | 69121.25 | 69317.57 | 69847.44 |
| **Latency** | 650µs    | 694µs    | 734µs    | 772µs    | 878µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30478.26 | 9314.46 | 38512.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14261.48 | 28504.01 | 35417.05 | 36343.66 | 36633.75 | 36771.16 | 37008.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20209.69 | 3863.01 | 26011.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17867.08 | 19311.62 | 21448.48 | 22042.05 | 22573.20 | 23140.13 | 24693.18 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8983.37  | 2696.91 | 37225.05 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6108.89 | 7866.33 | 9611.20 | 10331.55 | 10631.18 | 10845.79 | 12662.86 |
| **Latency** | 3ms     | 4ms     | 5ms     | 6ms      | 7ms      | 8ms      | 16ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29760.31 | 7984.78 | 86340.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20110.50 | 27485.29 | 33005.68 | 34165.06 | 34915.81 | 35274.75 | 36228.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49605.35 | 6678.83 | 59205.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48718.60 | 50742.72 | 51341.52 | 52133.49 | 52514.30 | 52706.94 | 53013.91 |
| **Latency** | 854µs    | 935µs    | 975µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25504.16 | 4280.16 | 31518.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22913.39 | 24079.31 | 26958.88 | 27664.47 | 28151.45 | 28648.41 | 29704.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59369.00 | 10611.85 | 76512.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46234.57 | 49514.74 | 58794.08 | 70316.52 | 71726.02 | 72360.49 | 73910.15 |
| **Latency** | 500µs    | 628µs    | 776µs    | 959µs    | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5713.72  | 1820.93 | 8829.24 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3518.91 | 4635.52 | 6338.43 | 6912.04 | 7200.71 | 7405.96 | 8641.52 |
| **Latency** | 5ms     | 6ms     | 8ms     | 10ms    | 13ms    | 16ms    | 21ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64153.19 | 12928.35 | 72254.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38980.98 | 67339.24 | 69316.55 | 70132.99 | 70642.58 | 71000.18 | 71656.08 |
| **Latency** | 631µs    | 673µs    | 719µs    | 760µs    | 841µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-07-29T01:33:00.805Z</p>
