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
| Deno                                                                                 | 65053.07 | 14899.62 | 74937.44  | 100%     |
| Bun                                                                                  | 59712.59 | 11078.79 | 79300.36  | 92%      |
| Fast                                                                                 | 57867.12 | 12958.46 | 66576.67  | 89%      |
| Hyper Express                                                                        | 57806.41 | 15496.18 | 75585.34  | 89%      |
| NHttp                                                                                | 57716.06 | 13397.83 | 66361.31  | 89%      |
| Hono                                                                                 | 57274.24 | 12626.40 | 65344.64  | 88%      |
| Fastro                                                                               | 56863.33 | 12651.52 | 66728.91  | 87%      |
| Deso                                                                                 | 55950.61 | 11008.19 | 63321.10  | 86%      |
| Megalo                                                                               | 50549.97 | 13948.90 | 61145.71  | 78%      |
| Reno                                                                                 | 47581.96 | 5041.41  | 50673.11  | 73%      |
| http                                                                                 | 39164.83 | 9192.83  | 48984.49  | 60%      |
| Cheetah                                                                              | 38062.52 | 3534.42  | 40772.04  | 59%      |
| Peko                                                                                 | 35314.02 | 8201.86  | 53698.43  | 54%      |
| Node                                                                                 | 34814.82 | 5802.89  | 38191.83  | 54%      |
| Alosaur                                                                              | 32851.53 | 7148.79  | 85089.38  | 50%      |
| Fastify                                                                              | 29919.76 | 6750.12  | 34917.49  | 46%      |
| Router                                                                               | 27853.53 | 4986.09  | 34616.52  | 43%      |
| Little                                                                               | 24259.29 | 4578.85  | 29669.29  | 37%      |
| Aqua                                                                                 | 24109.20 | 3412.61  | 33408.00  | 37%      |
| Oak                                                                                  | 22394.17 | 4392.52  | 28161.63  | 34%      |
| Dinatra                                                                              | 18964.81 | 4042.62  | 40267.78  | 29%      |
| Abc                                                                                  | 16548.61 | 2854.53  | 20224.26  | 25%      |
| Acorn                                                                                | 11385.46 | 17958.88 | 120477.09 | 18%      |
| Express (Deno)                                                                       | 8415.57  | 1638.98  | 10882.40  | 13%      |
| Express                                                                              | 5874.81  | 1548.59  | 9912.52   | 9%       |
| Servest                                                                              | 5774.00  | 1667.84  | 8456.85   | 9%       |
| Opine                                                                                | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-8e2549f4-be08-4f82-ada3-0ba918af2985) |          |          |           |          |

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
| 16548.61 | 2854.53 | 20224.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14547.91 | 16100.71 | 16931.88 | 17426.89 | 19563.15 | 19820.96 | 20011.27 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 11385.46 | 17958.88 | 120477.09 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 56.72 | 65.35 | 4543.85 | 8923.97 | 42306.33 | 53252.96 | 69461.88 |
| **Latency** | 5ms   | 7ms   | 17ms    | 23ms    | 26ms     | 28ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32851.53 | 7148.79 | 85089.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27767.21 | 30617.59 | 35484.26 | 36615.43 | 37593.79 | 38048.79 | 38818.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24109.20 | 3412.61 | 33408.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22778.70 | 23511.64 | 24822.18 | 25773.84 | 26167.84 | 26798.94 | 28111.34 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59712.59 | 11078.79 | 79300.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46907.25 | 49908.03 | 58713.77 | 71012.39 | 72920.03 | 73717.15 | 74968.44 |
| **Latency** | 501µs    | 628µs    | 761µs    | 944µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38062.52 | 3534.42 | 40772.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37941.33 | 38444.25 | 38810.66 | 39132.85 | 39373.88 | 39556.07 | 39902.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65053.07 | 14899.62 | 74937.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30245.49 | 68411.25 | 71832.62 | 72948.44 | 73563.06 | 73908.34 | 74434.81 |
| **Latency** | 586µs    | 643µs    | 698µs    | 746µs    | 823µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55950.61 | 11008.19 | 63321.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35646.24 | 58926.62 | 60327.32 | 61114.17 | 61609.41 | 61928.76 | 62468.89 |
| **Latency** | 750µs    | 786µs    | 815µs    | 853µs    | 999µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18964.81 | 4042.62 | 40267.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15702.08 | 16734.85 | 20483.89 | 21217.88 | 21721.35 | 22369.57 | 24799.55 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5874.81  | 1548.59 | 9912.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4151.07 | 4332.11 | 6850.03 | 7118.10 | 7212.50 | 7248.66 | 7306.38 |
| **Latency** | 6ms     | 6ms     | 7ms     | 10ms    | 11ms    | 12ms    | 17ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8415.57  | 1638.98 | 10882.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6712.35 | 8162.62 | 9125.50 | 9257.38 | 9327.91 | 9369.67 | 9676.53 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57867.12 | 12958.46 | 66576.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27733.04 | 60520.76 | 63965.86 | 64869.45 | 65415.94 | 65729.12 | 66212.78 |
| **Latency** | 692µs    | 741µs    | 768µs    | 810µs    | 967µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29919.76 | 6750.12 | 34917.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17010.60 | 31438.13 | 32220.07 | 32910.31 | 33136.88 | 33277.31 | 33467.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56863.33 | 12651.52 | 66728.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29153.15 | 60013.99 | 62591.73 | 63413.08 | 64242.61 | 64668.11 | 65214.55 |
| **Latency** | 708µs    | 748µs    | 786µs    | 831µs    | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57274.24 | 12626.40 | 65344.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30752.72 | 60622.08 | 62906.53 | 63832.82 | 64353.82 | 64563.49 | 64913.26 |
| **Latency** | 711µs    | 753µs    | 780µs    | 819µs    | 973µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39164.83 | 9192.83 | 48984.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24515.53 | 36533.83 | 43635.27 | 44714.74 | 45449.58 | 45912.55 | 46633.12 |
| **Latency** | 884µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57806.41 | 15496.18 | 75585.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35066.05 | 40224.84 | 66387.45 | 71441.34 | 72837.77 | 73429.00 | 74231.77 |
| **Latency** | 522µs    | 620µs    | 762µs    | 925µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24259.29 | 4578.85 | 29669.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18107.49 | 23980.93 | 25469.58 | 26926.65 | 27406.13 | 27955.29 | 29004.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50549.97 | 13948.90 | 61145.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25163.26 | 43528.90 | 58582.56 | 59150.98 | 59613.35 | 60124.28 | 60783.50 |
| **Latency** | 780µs    | 815µs    | 846µs    | 887µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57716.06 | 13397.83 | 66361.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26596.66 | 61505.22 | 64146.57 | 64768.00 | 65244.62 | 65440.83 | 65821.98 |
| **Latency** | 694µs    | 743µs    | 768µs    | 810µs    | 963µs    | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34814.82 | 5802.89 | 38191.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34495.69 | 35607.26 | 36162.34 | 36959.28 | 37266.87 | 37389.88 | 37641.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22394.17 | 4392.52 | 28161.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20002.08 | 21387.56 | 23984.88 | 24509.17 | 25108.64 | 25999.16 | 27105.98 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35314.02 | 8201.86 | 53698.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26101.65 | 32862.15 | 39143.34 | 40271.35 | 40830.10 | 41304.93 | 41914.60 |
| **Latency** | 960µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47581.96 | 5041.41 | 50673.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46717.10 | 48137.36 | 48643.10 | 49422.05 | 50000.81 | 50118.85 | 50351.97 |
| **Latency** | 944µs    | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27853.53 | 4986.09 | 34616.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24703.32 | 26494.59 | 29504.21 | 30261.13 | 31404.22 | 32148.82 | 32790.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5774.00  | 1667.84 | 8456.85 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4448.08 | 4833.57 | 6322.47 | 6815.44 | 7065.31 | 7219.74 | 8296.90 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 15ms    | 19ms    |

---

<p align="center">Generated 2023-05-19T01:43:23.560Z</p>
