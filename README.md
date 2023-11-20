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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Hyper Express                                                                        | 83278.50 | 17579.57 | 109408.40 | 100%     |
| Bun                                                                                  | 82312.85 | 10404.37 | 106774.00 | 99%      |
| Stric                                                                                | 81890.01 | 10239.42 | 105006.57 | 98%      |
| Deno                                                                                 | 60836.89 | 10237.18 | 92272.87  | 73%      |
| NHttp                                                                                | 53460.43 | 5225.03  | 75370.97  | 64%      |
| Vixeny (Deno)                                                                        | 53205.61 | 4065.93  | 84060.52  | 64%      |
| Fast                                                                                 | 51809.76 | 3671.82  | 72905.18  | 62%      |
| Fastro                                                                               | 50863.47 | 3303.43  | 67807.11  | 61%      |
| Hono                                                                                 | 49747.38 | 2799.30  | 68149.73  | 60%      |
| Deso                                                                                 | 47924.15 | 3070.96  | 73233.91  | 58%      |
| Megalo                                                                               | 47018.85 | 3658.15  | 54124.73  | 56%      |
| Cheetah                                                                              | 42921.50 | 2563.78  | 63349.59  | 52%      |
| Reno                                                                                 | 41363.78 | 2186.00  | 58324.21  | 50%      |
| http                                                                                 | 39692.37 | 3833.98  | 48279.65  | 48%      |
| Alosaur                                                                              | 34961.72 | 4097.46  | 45334.38  | 42%      |
| Router                                                                               | 32083.60 | 3006.14  | 35908.31  | 39%      |
| Aqua                                                                                 | 29943.57 | 3196.75  | 44688.15  | 36%      |
| Little                                                                               | 28649.74 | 3222.68  | 32796.71  | 34%      |
| Oak                                                                                  | 28281.74 | 3921.75  | 32906.38  | 34%      |
| Danet (Oak)                                                                          | 20877.39 | 3152.47  | 25042.33  | 25%      |
| Node                                                                                 | 18427.67 | 1648.47  | 26858.93  | 22%      |
| Fastify                                                                              | 17814.92 | 3583.66  | 36402.18  | 21%      |
| Dinatra                                                                              | 17448.35 | 2047.89  | 21159.99  | 21%      |
| Abc                                                                                  | 15725.77 | 1588.39  | 19117.19  | 19%      |
| Opine                                                                                | 13576.25 | 1896.81  | 17445.40  | 16%      |
| Express (Deno)                                                                       | 12510.14 | 2032.45  | 14669.42  | 15%      |
| Servest                                                                              | 7239.07  | 1476.86  | 10435.68  | 9%       |
| Express                                                                              | 7001.57  | 1023.73  | 8753.09   | 8%       |
| Acorn                                                                                | 5538.25  | 9556.16  | 91348.97  | 7%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-f1f9de8b-94c3-4ca3-8897-987e6e5e104b) |          |          |           |          |

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
| 15725.77 | 1588.39 | 19117.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14413.80 | 15256.14 | 15907.10 | 16580.65 | 17211.04 | 17533.90 | 18038.53 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5538.25  | 9556.16 | 91348.97 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 86.85 | 2325.51 | 3501.96 | 5436.02 | 10700.92 | 14563.83 | 67971.72 |
| **Latency** | 4ms   | 8ms     | 13ms    | 18ms    | 23ms     | 26ms     | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34961.72 | 4097.46 | 45334.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32481.84 | 34130.07 | 36054.91 | 37112.30 | 37807.66 | 38104.07 | 39174.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29943.57 | 3196.75 | 44688.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28187.53 | 29513.72 | 30616.39 | 31472.10 | 32153.78 | 32571.77 | 33202.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 82312.85 | 10404.37 | 106774.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 69373.99 | 73933.12 | 80814.79 | 90915.57 | 97836.01 | 100401.15 | 103910.53 |
| **Latency** | 358µs    | 448µs    | 570µs    | 720µs    | 909µs    | 1ms       | 1ms       |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42921.50 | 2563.78 | 63349.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40710.30 | 42224.50 | 43290.18 | 44035.16 | 44807.29 | 45518.15 | 46989.55 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20877.39 | 3152.47 | 25042.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19253.08 | 20800.71 | 21680.72 | 22315.45 | 22798.41 | 23183.97 | 24107.27 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60836.89 | 10237.18 | 92272.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53267.03 | 54777.33 | 56326.28 | 64096.74 | 78555.55 | 84192.41 | 90026.76 |
| **Latency** | 540µs    | 689µs    | 864µs    | 935µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47924.15 | 3070.96 | 73233.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45151.46 | 46719.42 | 47798.99 | 48799.90 | 51307.26 | 52739.49 | 55951.04 |
| **Latency** | 944µs    | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17448.35 | 2047.89 | 21159.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15725.63 | 16721.15 | 17868.81 | 18720.91 | 19365.53 | 19688.24 | 20167.92 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7001.57  | 1023.73 | 8753.09 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5567.43 | 6725.11 | 7143.51 | 7350.43 | 8432.99 | 8532.35 | 8638.56 |
| **Latency** | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 12ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12510.14 | 2032.45 | 14669.42 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9792.22 | 12569.09 | 13229.48 | 13533.01 | 13690.14 | 13813.17 | 14272.12 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51809.76 | 3671.82 | 72905.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49058.57 | 50208.00 | 51188.39 | 52503.76 | 56323.77 | 58567.24 | 63450.37 |
| **Latency** | 849µs    | 923µs    | 974µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17814.92 | 3583.66 | 36402.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16472.67 | 16956.08 | 17378.80 | 17769.11 | 18209.98 | 23913.97 | 35149.44 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50863.47 | 3303.43 | 67807.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48063.50 | 49553.54 | 50605.31 | 51722.51 | 54207.22 | 56551.63 | 61712.39 |
| **Latency** | 881µs    | 934µs    | 984µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49747.38 | 2799.30 | 68149.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47830.95 | 48748.65 | 49602.15 | 50535.01 | 52279.59 | 53920.68 | 56923.77 |
| **Latency** | 912µs    | 955µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39692.37 | 3833.98 | 48279.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36523.48 | 38930.54 | 40587.00 | 41734.48 | 42632.37 | 43217.41 | 44509.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 83278.50 | 17579.57 | 109408.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 59804.07 | 64992.86 | 86668.92 | 99825.27 | 104056.18 | 105572.36 | 107392.90 |
| **Latency** | 355µs    | 438µs    | 549µs    | 721µs    | 902µs     | 1ms       | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28649.74 | 3222.68 | 32796.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27211.17 | 28417.31 | 29365.92 | 30101.93 | 30700.96 | 31107.26 | 31779.77 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47018.85 | 3658.15 | 54124.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45002.23 | 46432.45 | 47508.33 | 48331.16 | 49319.36 | 50001.53 | 51988.70 |
| **Latency** | 964µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53460.43 | 5225.03 | 75370.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49590.29 | 50900.50 | 52080.79 | 54174.56 | 60487.35 | 64393.42 | 72083.06 |
| **Latency** | 712µs    | 898µs    | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18427.67 | 1648.47 | 26858.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17515.51 | 18290.51 | 18630.07 | 18924.01 | 19214.45 | 19438.48 | 22344.19 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28281.74 | 3921.75 | 32906.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26325.53 | 28206.06 | 29233.74 | 30078.68 | 30785.67 | 31181.82 | 32054.14 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13576.25 | 1896.81 | 17445.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12383.64 | 13545.02 | 14081.55 | 14449.49 | 14706.01 | 14893.31 | 15969.42 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 7ms      |

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
| 41363.78 | 2186.00 | 58324.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39418.57 | 40918.32 | 41793.02 | 42296.21 | 42875.30 | 43291.77 | 44262.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32083.60 | 3006.14 | 35908.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29833.81 | 31772.33 | 32750.32 | 33650.08 | 34353.24 | 34712.71 | 35320.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 81890.01 | 10239.42 | 105006.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 69260.19 | 73416.42 | 80757.12 | 89692.13 | 96646.15 | 100025.25 | 103493.29 |
| **Latency** | 359µs    | 449µs    | 573µs    | 725µs    | 912µs    | 1ms       | 1ms       |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7239.07  | 1476.86 | 10435.68 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5757.14 | 6765.99 | 7522.03 | 8006.72 | 8608.36 | 9254.58 | 9984.62 |
| **Latency** | 4ms     | 5ms     | 6ms     | 8ms     | 9ms     | 11ms    | 14ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53205.61 | 4065.93 | 84060.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50105.10 | 51327.44 | 52342.07 | 53979.84 | 58158.73 | 61215.59 | 67104.93 |
| **Latency** | 813µs    | 898µs    | 950µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2023-11-20T01:29:25.837Z</p>
