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
    - [Cheetah](#cheetah-1)
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
| Deno                                                                                 | 64231.38 | 14266.76 | 74129.94  | 100%     |
| Bun                                                                                  | 59982.60 | 11934.72 | 78531.76  | 93%      |
| Hyper Express                                                                        | 58644.41 | 16821.57 | 78116.36  | 91%      |
| Fast                                                                                 | 56939.92 | 11395.27 | 64203.42  | 89%      |
| NHttp                                                                                | 55641.17 | 11567.73 | 62786.43  | 87%      |
| Hono                                                                                 | 53801.23 | 11525.47 | 61274.17  | 84%      |
| Deso                                                                                 | 52917.64 | 10070.90 | 59787.15  | 82%      |
| Megalo                                                                               | 51650.74 | 8296.34  | 57194.09  | 80%      |
| Fastro                                                                               | 46883.29 | 13238.47 | 57403.96  | 73%      |
| Reno                                                                                 | 45382.26 | 6075.28  | 48987.63  | 71%      |
| http                                                                                 | 37488.11 | 8722.05  | 46891.54  | 58%      |
| Cheetah                                                                              | 36622.06 | 3300.69  | 39258.86  | 57%      |
| Node                                                                                 | 35047.37 | 5659.49  | 38329.91  | 55%      |
| Peko                                                                                 | 34438.64 | 7665.87  | 83403.93  | 54%      |
| Fastify                                                                              | 30969.34 | 5937.78  | 34378.35  | 48%      |
| Alosaur                                                                              | 30312.07 | 6869.63  | 39624.18  | 47%      |
| Router                                                                               | 27787.20 | 4920.49  | 34528.60  | 43%      |
| Little                                                                               | 24295.75 | 4688.69  | 30256.58  | 38%      |
| Aqua                                                                                 | 23575.57 | 3555.57  | 30919.69  | 37%      |
| Oak                                                                                  | 22196.56 | 4339.86  | 27504.32  | 35%      |
| Dinatra                                                                              | 18291.61 | 3887.58  | 38283.67  | 28%      |
| Abc                                                                                  | 16561.28 | 2178.28  | 19885.22  | 26%      |
| Acorn                                                                                | 10625.47 | 18875.63 | 122159.78 | 17%      |
| Opine                                                                                | 9517.33  | 2705.01  | 59389.48  | 15%      |
| Express (Deno)                                                                       | 8268.44  | 1802.25  | 12232.87  | 13%      |
| Express                                                                              | 6588.51  | 1393.29  | 9424.20   | 10%      |
| Servest                                                                              | 5787.79  | 1732.02  | 8405.34   | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-fcef6f9a-c7d6-4c16-a78a-3f42c9bcbe62) |          |          |           |          |

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
| 16561.28 | 2178.28 | 19885.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15187.21 | 15739.93 | 16543.62 | 18181.65 | 18915.53 | 19058.18 | 19434.66 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 10625.47 | 18875.63 | 122159.78 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 57.88 | 82.18 | 4561.11 | 8963.05 | 45933.88 | 60586.48 | 70301.34 |
| **Latency** | 5ms   | 7ms   | 17ms    | 23ms    | 26ms     | 28ms     | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30312.07 | 6869.63 | 39624.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23205.11 | 26823.84 | 33493.37 | 34601.62 | 35358.33 | 35766.55 | 36673.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23575.57 | 3555.57 | 30919.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21848.73 | 22790.74 | 24066.23 | 25432.73 | 26316.90 | 27159.04 | 27976.32 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59982.60 | 11934.72 | 78531.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45104.40 | 49045.01 | 64854.96 | 70969.22 | 72521.54 | 73237.90 | 74595.63 |
| **Latency** | 497µs    | 623µs    | 764µs    | 931µs    | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36622.06 | 3300.69 | 39258.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36202.49 | 36936.15 | 37289.27 | 37621.03 | 38036.09 | 38235.64 | 38639.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64231.38 | 14266.76 | 74129.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29623.62 | 67518.13 | 70578.92 | 71676.19 | 72326.60 | 72619.51 | 73115.98 |
| **Latency** | 605µs    | 655µs    | 705µs    | 760µs    | 835µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52917.64 | 10070.90 | 59787.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33503.11 | 55725.16 | 56938.01 | 57790.59 | 58290.44 | 58520.31 | 59141.80 |
| **Latency** | 779µs    | 825µs    | 863µs    | 911µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18291.61 | 3887.58 | 38283.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15245.72 | 16518.58 | 20211.60 | 20586.93 | 21110.48 | 21569.27 | 23592.05 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6588.51  | 1393.29 | 9424.20 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4342.73 | 6507.21 | 7287.97 | 7404.88 | 7480.27 | 7528.01 | 7592.18 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 11ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8268.44  | 1802.25 | 12232.87 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5673.19 | 7905.44 | 9119.08 | 9273.47 | 9395.15 | 9547.55 | 10056.77 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 14ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56939.92 | 11395.27 | 64203.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34103.96 | 59971.58 | 61686.26 | 62254.52 | 62681.38 | 62872.20 | 63251.64 |
| **Latency** | 720µs    | 772µs    | 797µs    | 838µs    | 983µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30969.34 | 5937.78 | 34378.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28353.83 | 31916.54 | 32836.74 | 33391.46 | 33712.10 | 33848.37 | 34042.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46883.29 | 13238.47 | 57403.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24223.23 | 34170.14 | 54622.88 | 55508.82 | 56436.48 | 56745.28 | 57133.04 |
| **Latency** | 835µs    | 869µs    | 905µs    | 948µs    | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53801.23 | 11525.47 | 61274.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28106.70 | 56872.14 | 58633.91 | 59630.44 | 60185.97 | 60443.55 | 60814.71 |
| **Latency** | 749µs    | 794µs    | 832µs    | 887µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37488.11 | 8722.05 | 46891.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24200.49 | 34500.86 | 41664.09 | 42922.77 | 43752.03 | 44118.88 | 44782.35 |
| **Latency** | 913µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58644.41 | 16821.57 | 78116.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35139.33 | 37147.53 | 69209.34 | 72931.32 | 74108.10 | 74665.08 | 75250.92 |
| **Latency** | 509µs    | 593µs    | 752µs    | 866µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24295.75 | 4688.69 | 30256.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20539.66 | 23761.47 | 25670.06 | 26910.66 | 27381.68 | 28004.46 | 29129.35 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51650.74 | 8296.34 | 57194.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40424.62 | 53815.55 | 54556.15 | 55131.38 | 56012.83 | 56262.41 | 56638.15 |
| **Latency** | 832µs    | 867µs    | 903µs    | 940µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55641.17 | 11567.73 | 62786.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30209.65 | 58782.83 | 60956.63 | 61535.02 | 61891.19 | 62076.88 | 62415.56 |
| **Latency** | 735µs    | 779µs    | 807µs    | 845µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35047.37 | 5659.49 | 38329.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34338.43 | 35797.34 | 36317.04 | 37270.78 | 37594.33 | 37713.17 | 37933.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22196.56 | 4339.86 | 27504.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19779.50 | 21212.26 | 23818.24 | 24292.86 | 24610.09 | 25196.37 | 26712.27 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9517.33  | 2705.01 | 59389.48 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6737.46 | 8837.04 | 9669.17 | 10147.03 | 11784.39 | 13609.20 | 15868.79 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 6ms      | 7ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34438.64 | 7665.87 | 83403.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26140.01 | 32228.07 | 37590.61 | 38609.62 | 39316.39 | 39906.00 | 40586.67 |
| **Latency** | 989µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45382.26 | 6075.28 | 48987.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44293.00 | 46288.79 | 46962.09 | 47657.76 | 48190.60 | 48406.63 | 48678.86 |
| **Latency** | 985µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27787.20 | 4920.49 | 34528.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24318.71 | 26280.53 | 29624.36 | 30309.31 | 31102.15 | 31766.32 | 32873.05 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5787.79  | 1732.02 | 8405.34 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4225.22 | 4649.75 | 6362.97 | 6922.96 | 7147.02 | 8055.75 | 8316.33 |
| **Latency** | 7ms     | 7ms     | 7ms     | 10ms    | 10ms    | 14ms    | 19ms    |

---

<p align="center">Generated 2023-06-01T02:19:02.325Z</p>
