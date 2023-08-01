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
| Vixeny (Deno)                                                                        | 51087.85 | 12677.17 | 61290.80 | 100%     |
| Bun                                                                                  | 48096.06 | 12468.50 | 66705.64 | 94%      |
| Fast                                                                                 | 47905.58 | 13405.39 | 60280.91 | 94%      |
| Deno                                                                                 | 47430.40 | 14684.34 | 65822.67 | 93%      |
| Stric                                                                                | 45270.86 | 11772.12 | 70486.97 | 89%      |
| Deso                                                                                 | 43603.32 | 11843.24 | 54546.40 | 85%      |
| Hyper Express                                                                        | 42923.73 | 13421.05 | 66603.52 | 84%      |
| NHttp                                                                                | 41342.70 | 11792.37 | 59971.80 | 81%      |
| Hono                                                                                 | 40018.04 | 13493.56 | 59517.90 | 78%      |
| Fastro                                                                               | 37801.40 | 12591.47 | 54762.45 | 74%      |
| Cheetah                                                                              | 36414.46 | 6955.11  | 42706.73 | 71%      |
| Reno                                                                                 | 35611.45 | 8362.37  | 47276.91 | 70%      |
| http                                                                                 | 29461.56 | 8210.53  | 61063.42 | 58%      |
| Node                                                                                 | 27422.32 | 6166.83  | 33822.83 | 54%      |
| Fastify                                                                              | 23570.23 | 5715.80  | 30649.39 | 46%      |
| Peko                                                                                 | 22818.86 | 6443.16  | 48467.51 | 45%      |
| Alosaur                                                                              | 19973.25 | 8197.21  | 90900.83 | 39%      |
| Router                                                                               | 19287.14 | 5373.28  | 70957.62 | 38%      |
| Aqua                                                                                 | 18121.80 | 3605.37  | 27573.05 | 35%      |
| Little                                                                               | 17727.81 | 4675.48  | 25000.60 | 35%      |
| Oak                                                                                  | 16046.45 | 3976.26  | 22858.35 | 31%      |
| Dinatra                                                                              | 15813.77 | 4026.97  | 37661.59 | 31%      |
| Abc                                                                                  | 14552.01 | 2814.78  | 19457.86 | 28%      |
| Danet (Oak)                                                                          | 9961.36  | 3606.27  | 33389.86 | 19%      |
| Opine                                                                                | 7203.50  | 3365.37  | 59946.17 | 14%      |
| Express (Deno)                                                                       | 7193.61  | 1524.22  | 10416.65 | 14%      |
| Acorn                                                                                | 6687.93  | 9710.47  | 89940.37 | 13%      |
| Express                                                                              | 5132.37  | 1363.04  | 9440.45  | 10%      |
| Servest                                                                              | 4807.11  | 1620.91  | 10571.94 | 9%       |
| Megalo                                                                               | 0.00     | 0.00     | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-e2338aad-a7ac-442c-a26a-e00966f45030) |          |          |          |          |

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
| 14552.01 | 2814.78 | 19457.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10737.35 | 12930.26 | 15443.02 | 16770.12 | 17222.74 | 17485.99 | 18172.89 |
| **Latency** | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6687.93  | 9710.47 | 89940.37 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 44.48 | 65.04 | 4505.65 | 8462.91 | 17993.35 | 27792.19 | 46483.04 |
| **Latency** | 8ms   | 10ms  | 19ms    | 27ms    | 30ms     | 32ms     | 51ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19973.25 | 8197.21 | 90900.83 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9937.84 | 14690.90 | 20132.86 | 27477.49 | 28386.58 | 28807.25 | 29879.80 |
| **Latency** | 1ms     | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      | 8ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18121.80 | 3605.37 | 27573.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14465.98 | 17015.69 | 18809.63 | 20450.23 | 21109.72 | 21615.15 | 23181.00 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48096.06 | 12468.50 | 66705.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31577.80 | 37666.78 | 51510.50 | 59217.88 | 61910.07 | 62892.13 | 64537.67 |
| **Latency** | 602µs    | 745µs    | 889µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36414.46 | 6955.11 | 42706.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25374.82 | 37409.16 | 39237.11 | 39870.43 | 40315.22 | 40521.88 | 40994.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9961.36  | 3606.27 | 33389.86 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5410.63 | 7629.71 | 10214.63 | 12418.05 | 14141.63 | 14686.95 | 17623.37 |
| **Latency** | 3ms     | 3ms     | 4ms      | 5ms      | 8ms      | 9ms      | 14ms     |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47430.40 | 14684.34 | 65822.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24528.84 | 35113.07 | 51217.02 | 60936.09 | 63097.88 | 63743.19 | 64711.93 |
| **Latency** | 644µs    | 772µs    | 864µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43603.32 | 11843.24 | 54546.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21711.87 | 36336.69 | 50212.33 | 52163.48 | 52912.45 | 53248.84 | 53941.29 |
| **Latency** | 833µs    | 902µs    | 957µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15813.77 | 4026.97 | 37661.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11262.51 | 13909.16 | 16573.05 | 18713.72 | 19714.35 | 20193.74 | 21233.71 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5132.37  | 1363.04 | 9440.45 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3102.44 | 4591.77 | 5808.97 | 6034.19 | 6145.15 | 6203.26 | 6316.01 |
| **Latency** | 8ms     | 8ms     | 8ms     | 10ms    | 13ms    | 16ms    | 21ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7193.61  | 1524.22 | 10416.65 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5106.90 | 6676.00 | 7705.01 | 8059.48 | 8408.05 | 8644.00 | 8927.56 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 8ms     | 10ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47905.58 | 13405.39 | 60280.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22902.35 | 38894.62 | 55407.89 | 57614.02 | 58265.86 | 58542.05 | 59545.59 |
| **Latency** | 766µs    | 821µs    | 873µs    | 989µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23570.23 | 5715.80 | 30649.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15863.52 | 22658.30 | 25818.56 | 27015.67 | 27775.14 | 28068.35 | 28635.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 37801.40 | 12591.47 | 54762.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18980.82 | 30208.44 | 40256.35 | 48634.54 | 51413.89 | 52239.04 | 53513.46 |
| **Latency** | 856µs    | 933µs    | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 40018.04 | 13493.56 | 59517.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21003.99 | 30620.65 | 40452.58 | 53028.72 | 55956.17 | 56918.51 | 58412.89 |
| **Latency** | 789µs    | 854µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29461.56 | 8210.53 | 61063.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18704.00 | 25854.72 | 33002.44 | 35068.50 | 35994.26 | 36475.15 | 37422.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42923.73 | 13421.05 | 66603.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26114.34 | 30608.56 | 43886.99 | 54044.84 | 61079.52 | 63202.28 | 64914.53 |
| **Latency** | 643µs    | 801µs    | 920µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17727.81 | 4675.48 | 25000.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10495.80 | 16544.81 | 19170.80 | 20824.63 | 21549.83 | 22218.01 | 23561.28 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 8ms      |

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
| 41342.70 | 11792.37 | 59971.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22423.04 | 34445.65 | 41465.69 | 52053.83 | 55592.35 | 56603.82 | 57737.93 |
| **Latency** | 794µs    | 865µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27422.32 | 6166.83 | 33822.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18733.70 | 28302.42 | 29737.92 | 30742.27 | 31161.85 | 31426.55 | 32409.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16046.45 | 3976.26 | 22858.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11233.47 | 14545.60 | 17205.19 | 18826.11 | 19529.59 | 19931.19 | 21125.76 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7203.50  | 3365.37 | 59946.17 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5221.89 | 6343.89 | 7240.77 | 8131.71 | 8441.07 | 8712.16 | 14228.84 |
| **Latency** | 5ms     | 6ms     | 7ms     | 7ms     | 9ms     | 10ms    | 18ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22818.86 | 6443.16 | 48467.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15740.23 | 19511.23 | 22800.63 | 28502.50 | 29860.89 | 30428.35 | 31331.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35611.45 | 8362.37 | 47276.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22430.36 | 29777.88 | 39260.13 | 42131.54 | 43662.18 | 44449.05 | 45586.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19287.14 | 5373.28 | 70957.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12654.87 | 16887.79 | 20280.70 | 23046.66 | 24179.60 | 24613.10 | 25581.25 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45270.86 | 11772.12 | 70486.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30387.52 | 37074.11 | 44928.55 | 55834.58 | 60331.30 | 62198.20 | 64449.22 |
| **Latency** | 609µs    | 758µs    | 910µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4807.11  | 1620.91 | 10571.94 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2621.30 | 4110.04 | 5470.71 | 5834.28 | 6024.97 | 6157.81 | 7396.44 |
| **Latency** | 5ms     | 7ms     | 10ms    | 12ms    | 16ms    | 20ms    | 27ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51087.85 | 12677.17 | 61290.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23304.46 | 50357.44 | 57166.79 | 58626.72 | 59543.81 | 60081.20 | 60738.61 |
| **Latency** | 750µs    | 803µs    | 855µs    | 921µs    | 1ms      | 2ms      | 2ms      |

---

<p align="center">Generated 2023-08-01T01:51:39.412Z</p>
