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
| NHttp                                                                                | 61833.72 | 13665.44 | 70831.29  | 100%     |
| Deno                                                                                 | 60280.94 | 16436.02 | 74617.77  | 97%      |
| Fast                                                                                 | 59894.19 | 14681.64 | 70409.10  | 97%      |
| Bun                                                                                  | 59189.84 | 12078.62 | 150375.94 | 96%      |
| Hono                                                                                 | 58984.22 | 14008.70 | 69390.09  | 95%      |
| Hyper Express                                                                        | 58610.90 | 16019.20 | 77520.86  | 95%      |
| Deso                                                                                 | 56975.11 | 12753.67 | 65865.15  | 92%      |
| Fastro                                                                               | 56237.31 | 12809.97 | 65070.69  | 91%      |
| Megalo                                                                               | 55497.84 | 11676.37 | 63683.98  | 90%      |
| Reno                                                                                 | 48041.91 | 7497.91  | 52891.90  | 78%      |
| Cheetah                                                                              | 43133.48 | 4490.69  | 45981.57  | 70%      |
| http                                                                                 | 36391.83 | 8084.14  | 47512.94  | 59%      |
| Node                                                                                 | 34515.39 | 5887.06  | 37695.71  | 56%      |
| Peko                                                                                 | 32322.20 | 7135.46  | 39760.99  | 52%      |
| Fastify                                                                              | 31390.06 | 5833.48  | 34317.87  | 51%      |
| Alosaur                                                                              | 28706.62 | 5929.05  | 37909.41  | 46%      |
| Router                                                                               | 25700.81 | 5096.99  | 33261.62  | 42%      |
| Little                                                                               | 23021.94 | 3918.65  | 29146.23  | 37%      |
| Aqua                                                                                 | 21960.63 | 3344.81  | 27314.09  | 36%      |
| Oak                                                                                  | 20710.11 | 3958.40  | 26949.81  | 33%      |
| Dinatra                                                                              | 18877.18 | 4172.34  | 37318.36  | 31%      |
| Abc                                                                                  | 16939.08 | 2229.81  | 20806.01  | 27%      |
| Opine                                                                                | 9395.59  | 2712.18  | 35249.40  | 15%      |
| Express (Deno)                                                                       | 9166.88  | 1921.95  | 13995.08  | 15%      |
| Express                                                                              | 6447.05  | 1460.99  | 11654.77  | 10%      |
| Acorn                                                                                | 6082.78  | 7555.05  | 70349.19  | 10%      |
| Servest                                                                              | 5736.43  | 1744.59  | 8858.93   | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-c3445071-e7e4-4fa9-bead-651c4f153ced) |          |          |           |          |

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
| 16939.08 | 2229.81 | 20806.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15709.11 | 16158.57 | 16954.58 | 17748.62 | 19605.17 | 19802.65 | 20033.64 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6082.78  | 7555.05 | 70349.19 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 50.89 | 67.67 | 5450.26 | 8967.09 | 13089.75 | 17470.44 | 37114.77 |
| **Latency** | 5ms   | 7ms   | 16ms    | 23ms    | 27ms     | 29ms     | 34ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28706.62 | 5929.05 | 37909.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23135.30 | 25760.87 | 31290.38 | 32183.77 | 32847.43 | 33317.18 | 34574.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21960.63 | 3344.81 | 27314.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20297.80 | 21206.95 | 22982.19 | 23686.93 | 24186.69 | 24566.54 | 25473.89 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 59189.84 | 12078.62 | 150375.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45204.01 | 49140.00 | 58902.27 | 70724.66 | 72609.34 | 73250.39 | 74651.71 |
| **Latency** | 497µs    | 625µs    | 771µs    | 960µs    | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43133.48 | 4490.69 | 45981.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42319.83 | 43279.03 | 44128.62 | 44789.13 | 45223.00 | 45395.47 | 45643.68 |
| **Latency** | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60280.94 | 16436.02 | 74617.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30178.34 | 48971.84 | 69945.46 | 71618.58 | 72615.15 | 72977.80 | 73837.92 |
| **Latency** | 549µs    | 613µs    | 742µs    | 788µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56975.11 | 12753.67 | 65865.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27132.53 | 60150.75 | 62833.85 | 63609.35 | 64334.68 | 64646.49 | 65248.22 |
| **Latency** | 707µs    | 742µs    | 773µs    | 839µs    | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18877.18 | 4172.34 | 37318.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15422.81 | 16535.35 | 20614.72 | 21529.04 | 22205.08 | 22608.34 | 24349.89 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6447.05  | 1460.99 | 11654.77 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4207.32 | 5552.02 | 7184.78 | 7371.20 | 7459.22 | 7509.61 | 7584.49 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 10ms    | 12ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9166.88  | 1921.95 | 13995.08 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6667.33 | 8873.37 | 10019.42 | 10191.05 | 10290.09 | 10440.20 | 11336.32 |
| **Latency** | 4ms     | 4ms     | 5ms      | 5ms      | 6ms      | 7ms      | 13ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59894.19 | 14681.64 | 70409.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27118.21 | 63175.76 | 66803.29 | 67783.28 | 68512.28 | 68910.95 | 69623.61 |
| **Latency** | 655µs    | 698µs    | 746µs    | 789µs    | 942µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31390.06 | 5833.48 | 34317.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30600.02 | 32327.44 | 33036.69 | 33604.67 | 33866.40 | 33984.99 | 34105.82 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56237.31 | 12809.97 | 65070.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26847.57 | 59281.59 | 62064.55 | 62990.08 | 63719.75 | 64111.54 | 64552.34 |
| **Latency** | 715µs    | 751µs    | 784µs    | 845µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58984.22 | 14008.70 | 69390.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27065.26 | 62185.22 | 65526.90 | 66817.63 | 67470.20 | 67912.43 | 68382.62 |
| **Latency** | 673µs    | 711µs    | 743µs    | 800µs    | 989µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36391.83 | 8084.14 | 47512.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26424.69 | 33618.46 | 40204.38 | 41124.22 | 41647.16 | 41995.18 | 42741.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58610.90 | 16019.20 | 77520.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35591.43 | 37534.87 | 68695.42 | 72033.06 | 73131.37 | 73737.53 | 74823.65 |
| **Latency** | 515µs    | 602µs    | 759µs    | 875µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23021.94 | 3918.65 | 29146.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20715.93 | 22281.07 | 24201.19 | 25087.74 | 25622.46 | 26050.88 | 26917.74 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55497.84 | 11676.37 | 63683.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32048.67 | 58759.07 | 60609.64 | 61377.28 | 62035.93 | 62495.55 | 62927.75 |
| **Latency** | 736µs    | 772µs    | 812µs    | 863µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61833.72 | 13665.44 | 70831.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30440.76 | 65108.56 | 68019.66 | 68895.99 | 69484.94 | 69806.91 | 70225.36 |
| **Latency** | 641µs    | 682µs    | 735µs    | 785µs    | 879µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34515.39 | 5887.06 | 37695.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34361.13 | 35413.42 | 36006.81 | 36613.88 | 36902.18 | 37037.75 | 37320.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20710.11 | 3958.40 | 26949.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18153.35 | 19895.96 | 21999.59 | 22635.52 | 23305.26 | 23638.51 | 25610.60 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9395.59  | 2712.18 | 35249.40 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6803.67 | 7703.54 | 8875.91 | 11316.01 | 13179.87 | 13583.95 | 14456.73 |
| **Latency** | 2ms     | 5ms     | 5ms     | 5ms      | 6ms      | 7ms      | 12ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32322.20 | 7135.46 | 39760.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25737.77 | 30505.46 | 35211.24 | 36300.15 | 36832.01 | 37338.61 | 38111.01 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48041.91 | 7497.91 | 52891.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39403.50 | 49623.76 | 50553.63 | 51248.05 | 51835.76 | 52064.42 | 52406.24 |
| **Latency** | 879µs    | 929µs    | 989µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25700.81 | 5096.99 | 33261.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18387.11 | 24680.22 | 27911.40 | 28863.45 | 29429.66 | 29850.41 | 30882.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5736.43  | 1744.59 | 8858.93 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4112.46 | 4720.48 | 6236.29 | 6905.59 | 7160.21 | 7435.12 | 8357.77 |
| **Latency** | 4ms     | 5ms     | 8ms     | 11ms    | 14ms    | 16ms    | 22ms    |

---

<p align="center">Generated 2023-06-15T01:51:58.262Z</p>
