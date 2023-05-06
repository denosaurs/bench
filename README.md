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
| Deno                                                                                 | 56233.34 | 14074.97 | 68533.62  | 100%     |
| NHttp                                                                                | 52314.91 | 11065.03 | 61322.11  | 93%      |
| Bun                                                                                  | 50301.39 | 9817.60  | 71290.39  | 89%      |
| Fast                                                                                 | 50254.91 | 12778.90 | 60658.92  | 89%      |
| Hono                                                                                 | 50188.20 | 11018.86 | 58711.30  | 89%      |
| Fastro                                                                               | 49197.39 | 11250.88 | 59012.18  | 87%      |
| Megalo                                                                               | 47652.95 | 9376.79  | 55358.38  | 85%      |
| Deso                                                                                 | 46317.43 | 10988.21 | 55972.25  | 82%      |
| Hyper Express                                                                        | 42486.75 | 11467.98 | 65959.00  | 76%      |
| Reno                                                                                 | 40815.31 | 5466.59  | 45277.73  | 73%      |
| Cheetah                                                                              | 32957.15 | 3023.30  | 35909.53  | 59%      |
| http                                                                                 | 31736.48 | 7823.38  | 40922.12  | 56%      |
| Peko                                                                                 | 28846.21 | 6854.79  | 35440.45  | 51%      |
| Node                                                                                 | 28165.52 | 5485.45  | 32091.50  | 50%      |
| Alosaur                                                                              | 26355.47 | 6181.31  | 76140.59  | 47%      |
| Fastify                                                                              | 26260.69 | 5052.00  | 29928.13  | 47%      |
| Router                                                                               | 22779.33 | 4703.05  | 27990.29  | 41%      |
| Little                                                                               | 19365.73 | 4277.38  | 25712.13  | 34%      |
| Aqua                                                                                 | 18929.99 | 3387.22  | 23693.53  | 34%      |
| Oak                                                                                  | 18118.96 | 4117.97  | 54558.35  | 32%      |
| Dinatra                                                                              | 15581.97 | 2964.73  | 20986.52  | 28%      |
| Abc                                                                                  | 11262.62 | 3666.17  | 23745.39  | 20%      |
| Opine                                                                                | 7813.44  | 2579.77  | 58600.70  | 14%      |
| Express (Deno)                                                                       | 7165.06  | 1702.69  | 28430.35  | 13%      |
| Express                                                                              | 5492.95  | 1210.79  | 8826.57   | 10%      |
| Servest                                                                              | 4478.72  | 1557.72  | 8374.40   | 8%       |
| Acorn                                                                                | 3549.08  | 6516.35  | 101005.00 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-e637d4a3-f337-473f-9620-855d34ef1a07) |          |          |           |          |

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
| 11262.62 | 3666.17 | 23745.39 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6310.53 | 7548.98 | 12629.53 | 14260.15 | 15285.90 | 15849.09 | 16508.57 |
| **Latency** | 3ms     | 3ms     | 3ms      | 4ms      | 7ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 3549.08  | 6516.35 | 101005.00 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 99.31 | 1956.23 | 2579.49 | 3505.12 | 6083.46 | 7115.72 | 41098.56 |
| **Latency** | 7ms   | 9ms     | 19ms    | 24ms    | 29ms    | 30ms    | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26355.47 | 6181.31 | 76140.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21153.23 | 24398.57 | 28359.25 | 29580.14 | 30136.18 | 30555.91 | 31202.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18929.99 | 3387.22 | 23693.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16819.53 | 18260.12 | 19986.52 | 20733.89 | 21098.87 | 21391.10 | 22269.70 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50301.39 | 9817.60 | 71290.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38532.38 | 42933.50 | 48617.42 | 60380.84 | 63230.37 | 64143.00 | 65773.95 |
| **Latency** | 587µs    | 740µs    | 891µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32957.15 | 3023.30 | 35909.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31516.69 | 33014.51 | 33612.42 | 34211.42 | 34690.88 | 34995.61 | 35375.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56233.34 | 14074.97 | 68533.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25534.46 | 57505.19 | 62537.54 | 64605.18 | 65826.96 | 66408.23 | 67208.71 |
| **Latency** | 623µs    | 724µs    | 801µs    | 862µs    | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46317.43 | 10988.21 | 55972.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23133.20 | 45835.31 | 51365.59 | 52955.13 | 54056.27 | 54522.93 | 55233.66 |
| **Latency** | 845µs    | 877µs    | 920µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15581.97 | 2964.73 | 20986.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13220.22 | 14932.40 | 16335.26 | 17105.36 | 17682.89 | 18925.92 | 19624.13 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5492.95  | 1210.79 | 8826.57 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3425.59 | 5708.40 | 5981.42 | 6117.39 | 6212.02 | 6270.22 | 6377.03 |
| **Latency** | 8ms     | 8ms     | 8ms     | 8ms     | 11ms    | 14ms    | 19ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7165.06  | 1702.69 | 28430.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5008.46 | 6703.42 | 7690.47 | 8123.72 | 8277.04 | 8507.71 | 8861.68 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50254.91 | 12778.90 | 60658.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23272.16 | 50760.94 | 56240.74 | 57800.02 | 58731.79 | 59224.54 | 60006.90 |
| **Latency** | 778µs    | 820µs    | 858µs    | 934µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26260.69 | 5052.00 | 29928.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23887.70 | 26536.38 | 27734.98 | 28522.00 | 29050.00 | 29307.36 | 29564.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49197.39 | 11250.88 | 59012.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23520.21 | 49841.42 | 54228.94 | 55783.33 | 56875.33 | 57413.83 | 58244.50 |
| **Latency** | 823µs    | 855µs    | 887µs    | 947µs    | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50188.20 | 11018.86 | 58711.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27364.92 | 52298.76 | 54918.10 | 56141.50 | 57023.56 | 57425.40 | 58002.46 |
| **Latency** | 820µs    | 848µs    | 877µs    | 932µs    | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31736.48 | 7823.38 | 40922.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20901.71 | 28741.67 | 35422.27 | 36615.73 | 37272.46 | 37573.60 | 38240.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42486.75 | 11467.98 | 65959.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27579.01 | 31321.95 | 43322.28 | 51928.32 | 57460.94 | 59989.52 | 63259.51 |
| **Latency** | 663µs    | 785µs    | 968µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19365.73 | 4277.38 | 25712.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13931.36 | 18603.34 | 20706.87 | 22151.02 | 22613.02 | 22970.22 | 23680.77 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47652.95 | 9376.79 | 55358.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29280.55 | 49628.33 | 51288.26 | 52423.11 | 53149.05 | 53533.05 | 54591.22 |
| **Latency** | 887µs    | 916µs    | 947µs    | 990µs    | 1ms      | 2ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52314.91 | 11065.03 | 61322.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28173.87 | 54108.16 | 56733.51 | 58118.64 | 59154.44 | 59600.67 | 60466.04 |
| **Latency** | 784µs    | 818µs    | 849µs    | 904µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28165.52 | 5485.45 | 32091.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26315.82 | 28705.15 | 29673.92 | 30552.89 | 31058.69 | 31412.60 | 31757.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18118.96 | 4117.97 | 54558.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15050.09 | 17047.29 | 19587.46 | 20334.06 | 20661.62 | 20970.65 | 21543.00 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7813.44  | 2579.77 | 58600.70 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5907.06 | 7427.17 | 8111.69 | 8518.52 | 8821.54 | 9080.95 | 10475.65 |
| **Latency** | 5ms     | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 14ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28846.21 | 6854.79 | 35440.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21591.65 | 26101.34 | 31723.52 | 33048.56 | 33801.73 | 34160.17 | 34935.83 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40815.31 | 5466.59 | 45277.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37038.46 | 41411.28 | 42373.37 | 43203.79 | 43819.16 | 44160.81 | 44600.55 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22779.33 | 4703.05 | 27990.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18974.59 | 21421.24 | 24460.57 | 25451.17 | 25953.32 | 26196.60 | 26784.26 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4478.72  | 1557.72 | 8374.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2524.31 | 3425.25 | 5221.73 | 5527.63 | 5711.90 | 5846.33 | 6961.90 |
| **Latency** | 9ms     | 9ms     | 9ms     | 12ms    | 16ms    | 22ms    | 28ms    |

---

<p align="center">Generated 2023-05-06T01:31:24.336Z</p>
