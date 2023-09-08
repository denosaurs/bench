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
| Deno                                                                                 | 41529.56 | 12396.16 | 56234.07 | 100%     |
| Stric                                                                                | 40652.71 | 12772.94 | 58975.96 | 98%      |
| Bun                                                                                  | 38022.99 | 13316.97 | 61115.70 | 92%      |
| Vixeny (Deno)                                                                        | 37522.20 | 10917.28 | 51309.66 | 90%      |
| Fast                                                                                 | 36287.72 | 10067.12 | 49086.36 | 87%      |
| NHttp                                                                                | 36097.78 | 10100.08 | 48597.03 | 87%      |
| Hyper Express                                                                        | 35583.61 | 14801.81 | 60727.83 | 86%      |
| Fastro                                                                               | 33737.28 | 9349.14  | 46321.16 | 81%      |
| Hono                                                                                 | 32350.96 | 8920.48  | 43641.27 | 78%      |
| Cheetah                                                                              | 30699.25 | 6733.78  | 39874.07 | 74%      |
| Reno                                                                                 | 29688.57 | 6280.30  | 36294.01 | 71%      |
| http                                                                                 | 23362.59 | 7150.62  | 32220.76 | 56%      |
| Alosaur                                                                              | 19687.96 | 5485.51  | 68405.01 | 47%      |
| Aqua                                                                                 | 16953.00 | 4225.22  | 26636.31 | 41%      |
| Node                                                                                 | 16903.25 | 3724.63  | 21825.60 | 41%      |
| Router                                                                               | 15891.58 | 4437.66  | 39014.21 | 38%      |
| Fastify                                                                              | 13714.12 | 3108.57  | 17402.18 | 33%      |
| Little                                                                               | 13055.73 | 3769.88  | 69838.19 | 31%      |
| Oak                                                                                  | 11306.04 | 3037.40  | 18064.14 | 27%      |
| Abc                                                                                  | 9937.76  | 1938.37  | 14269.85 | 24%      |
| Dinatra                                                                              | 9874.29  | 2942.37  | 20126.86 | 24%      |
| Danet (Oak)                                                                          | 8333.84  | 2793.54  | 33444.68 | 20%      |
| Opine                                                                                | 6308.53  | 3071.45  | 66523.96 | 15%      |
| Acorn                                                                                | 5878.41  | 9911.45  | 94936.71 | 14%      |
| Express (Deno)                                                                       | 5685.16  | 1548.09  | 25773.20 | 14%      |
| Express                                                                              | 3678.43  | 1101.60  | 15850.87 | 9%       |
| Servest                                                                              | 3662.23  | 1405.92  | 18156.07 | 9%       |
| Deso                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-ace76a21-7112-4f0f-afb8-5f1bca1ad2cd) |          |          |          |          |

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
| 9937.76  | 1938.37 | 14269.85 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7054.23 | 8901.38 | 10537.36 | 11386.23 | 11807.40 | 12033.79 | 12731.77 |
| **Latency** | 3ms     | 3ms     | 4ms      | 6ms      | 7ms      | 8ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5878.41  | 9911.45 | 94936.71 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 52.44 | 77.08 | 3803.21 | 6761.01 | 12040.49 | 20437.09 | 50250.90 |
| **Latency** | 9ms   | 11ms  | 20ms    | 26ms    | 30ms     | 34ms     | 45ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19687.96 | 5485.51 | 68405.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12580.33 | 16632.35 | 21780.05 | 23554.96 | 24385.65 | 24860.55 | 26000.40 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16953.00 | 4225.22 | 26636.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11708.26 | 15201.45 | 18279.95 | 19809.22 | 20643.62 | 21313.66 | 22748.61 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38022.99 | 13316.97 | 61115.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20126.88 | 26933.93 | 39022.84 | 51111.18 | 54411.17 | 55200.85 | 57007.15 |
| **Latency** | 678µs    | 844µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30699.25 | 6733.78 | 39874.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20113.11 | 28144.53 | 33671.40 | 35214.70 | 36154.43 | 36716.46 | 37702.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8333.84  | 2793.54 | 33444.68 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5049.38 | 6762.30 | 8675.15 | 10018.60 | 11013.31 | 12361.03 | 14605.44 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms      | 8ms      | 10ms     | 15ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41529.56 | 12396.16 | 56234.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19114.63 | 33635.18 | 46252.54 | 51509.03 | 53504.25 | 54441.70 | 55341.81 |
| **Latency** | 816µs    | 892µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9874.29  | 2942.37 | 20126.86 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5669.87 | 8079.60 | 10529.85 | 11876.59 | 13150.11 | 13742.14 | 14536.09 |
| **Latency** | 3ms     | 3ms     | 4ms      | 6ms      | 7ms      | 9ms      | 16ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3678.43  | 1101.60 | 15850.87 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2284.68 | 3163.57 | 4060.24 | 4304.20 | 4406.15 | 4460.61 | 5424.25 |
| **Latency** | 11ms    | 11ms    | 12ms    | 14ms    | 18ms    | 21ms    | 28ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5685.16  | 1548.09 | 25773.20 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3432.08 | 5101.52 | 6239.35 | 6626.23 | 6860.39 | 7058.33 | 7740.37 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 11ms    | 14ms    | 20ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36287.72 | 10067.12 | 49086.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17946.91 | 30241.30 | 40667.75 | 44036.37 | 45519.53 | 46207.20 | 47130.45 |
| **Latency** | 972µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13714.12 | 3108.57 | 17402.18 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9402.50 | 13413.01 | 14883.96 | 15504.43 | 15919.35 | 16134.45 | 16727.36 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      | 11ms     |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33737.28 | 9349.14 | 46321.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16542.19 | 27994.78 | 37741.73 | 40667.74 | 42556.87 | 43448.48 | 44816.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32350.96 | 8920.48 | 43641.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16006.33 | 27685.65 | 36316.55 | 39026.28 | 40703.90 | 41301.84 | 42626.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23362.59 | 7150.62 | 32220.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12463.82 | 19839.55 | 26123.19 | 28959.74 | 30039.83 | 30487.01 | 31363.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35583.61 | 14801.81 | 60727.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15390.00 | 22328.72 | 36900.96 | 49159.85 | 55129.88 | 56436.45 | 58287.74 |
| **Latency** | 677µs    | 857µs    | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13055.73 | 3769.88 | 69838.19 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8743.70 | 11679.82 | 13605.39 | 15110.67 | 16060.75 | 16888.52 | 18460.05 |
| **Latency** | 2ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 9ms      |

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
| 36097.78 | 10100.08 | 48597.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17728.48 | 30404.45 | 40540.95 | 43927.96 | 45308.56 | 45946.70 | 47000.75 |
| **Latency** | 988µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16903.25 | 3724.63 | 21825.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11736.93 | 15945.54 | 18457.70 | 19286.14 | 19722.80 | 19935.41 | 20527.64 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11306.04 | 3037.40 | 18064.14 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6810.73 | 10121.31 | 12196.17 | 13304.83 | 14168.10 | 14652.39 | 16404.55 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 6ms      | 7ms      | 11ms     |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6308.53  | 3071.45 | 66523.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4276.14 | 5586.88 | 6627.93 | 7072.29 | 7303.88 | 7525.76 | 11027.23 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 11ms    | 12ms    | 22ms     |

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
| 29688.57 | 6280.30 | 36294.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19668.81 | 28126.33 | 32289.64 | 33707.40 | 34601.94 | 35045.42 | 35723.08 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15891.58 | 4437.66 | 39014.21 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8900.82 | 13869.31 | 17280.51 | 19052.54 | 19935.06 | 20537.14 | 21719.90 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40652.71 | 12772.94 | 58975.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22504.19 | 28475.02 | 43195.51 | 52627.70 | 55321.38 | 56343.32 | 57904.47 |
| **Latency** | 668µs    | 820µs    | 994µs    | 1ms      | 2ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3662.23  | 1405.92 | 18156.07 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1701.73 | 3145.41 | 4023.89 | 4458.48 | 4944.57 | 5349.79 | 5853.80 |
| **Latency** | 7ms     | 10ms    | 13ms    | 17ms    | 21ms    | 27ms    | 33ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37522.20 | 10917.28 | 51309.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18108.80 | 31412.33 | 42201.56 | 46002.86 | 47797.32 | 48669.66 | 50127.37 |
| **Latency** | 915µs    | 999µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

---

<p align="center">Generated 2023-09-08T01:24:09.365Z</p>
