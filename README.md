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

| Framework                                                                            | Mean      | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | --------- | -------- | --------- | -------- |
| Stric                                                                                | 121080.89 | 12854.40 | 147399.67 | 100%     |
| Bun                                                                                  | 112334.13 | 13103.93 | 146902.22 | 93%      |
| Hyper Express                                                                        | 104885.44 | 10278.46 | 137242.45 | 87%      |
| Elysia                                                                               | 94118.85  | 9830.71  | 131719.54 | 78%      |
| Deno                                                                                 | 81320.04  | 3635.59  | 95429.55  | 67%      |
| Fastro                                                                               | 74339.22  | 9822.39  | 106939.88 | 61%      |
| NHttp                                                                                | 74033.87  | 3428.51  | 105062.50 | 61%      |
| Vixeny (Deno)                                                                        | 73851.67  | 3297.99  | 87969.50  | 61%      |
| Hono                                                                                 | 73643.39  | 4165.02  | 103292.53 | 61%      |
| Fast                                                                                 | 72974.70  | 3814.35  | 95356.52  | 60%      |
| Megalo                                                                               | 68418.36  | 3396.58  | 73612.78  | 57%      |
| Deso                                                                                 | 66442.64  | 3453.94  | 71394.24  | 55%      |
| Alosaur                                                                              | 60191.54  | 3808.90  | 78161.67  | 50%      |
| Reno                                                                                 | 56328.43  | 3048.24  | 60689.42  | 47%      |
| Cheetah                                                                              | 54957.80  | 3342.75  | 58617.32  | 45%      |
| http                                                                                 | 51820.78  | 6274.74  | 62316.53  | 43%      |
| Router                                                                               | 48546.98  | 5691.03  | 56357.67  | 40%      |
| Danet V2 (Hono)                                                                      | 45297.71  | 3678.64  | 50473.15  | 37%      |
| Danet (Oak)                                                                          | 40670.14  | 2958.52  | 43057.67  | 34%      |
| Oak                                                                                  | 39209.88  | 3991.52  | 45863.95  | 32%      |
| Node                                                                                 | 35730.55  | 3089.51  | 40403.26  | 30%      |
| Aqua                                                                                 | 35394.40  | 4223.85  | 41367.05  | 29%      |
| Little                                                                               | 35089.57  | 4614.57  | 40326.25  | 29%      |
| Fastify                                                                              | 32164.00  | 3763.50  | 43554.98  | 27%      |
| Dinatra                                                                              | 23155.25  | 3791.76  | 29333.08  | 19%      |
| Abc                                                                                  | 18211.48  | 2247.30  | 24863.47  | 15%      |
| Express (Deno)                                                                       | 10980.77  | 2382.81  | 13345.08  | 9%       |
| Express                                                                              | 8708.02   | 1509.56  | 11579.78  | 7%       |
| Servest                                                                              | 7352.68   | 2452.55  | 15862.35  | 6%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-4b37b038-0d42-4a78-a9c3-cf4624260eb3) |           |          |           |          |

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
| 18211.48 | 2247.30 | 24863.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16236.56 | 17174.58 | 18612.03 | 19571.75 | 20316.72 | 20804.03 | 21228.62 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60191.54 | 3808.90 | 78161.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58434.64 | 59680.59 | 60725.60 | 61620.39 | 62321.51 | 62947.43 | 64100.62 |
| **Latency** | 722µs    | 759µs    | 834µs    | 879µs    | 915µs    | 951µs    | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35394.40 | 4223.85 | 41367.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33053.07 | 34542.63 | 36153.08 | 37606.30 | 38452.10 | 39042.41 | 40550.60 |
| **Latency** | 864µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 112334.13 | 13103.93 | 146902.22 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 96382.05 | 102027.84 | 110269.34 | 122192.01 | 130962.86 | 135081.47 | 142250.09 |
| **Latency** | 266µs    | 333µs     | 419µs     | 522µs     | 657µs     | 743µs     | 967µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54957.80 | 3342.75 | 58617.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53534.28 | 54540.77 | 55384.71 | 56226.76 | 56730.91 | 57040.18 | 57521.66 |
| **Latency** | 787µs    | 823µs    | 916µs    | 959µs    | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40670.14 | 2958.52 | 43057.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39640.11 | 40268.07 | 41131.54 | 41837.61 | 42239.40 | 42486.76 | 42883.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45297.71 | 3678.64 | 50473.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44842.91 | 45447.47 | 45838.22 | 46354.53 | 46646.99 | 46820.37 | 47178.59 |
| **Latency** | 954µs    | 988µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 81320.04 | 3635.59 | 95429.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 78889.59 | 80108.82 | 81303.59 | 82582.81 | 84350.59 | 86042.33 | 89825.46 |
| **Latency** | 522µs    | 566µs    | 616µs    | 657µs    | 698µs    | 743µs    | 827µs    |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 66442.64 | 3453.94 | 71394.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65204.33 | 66141.07 | 66853.05 | 67513.69 | 68232.79 | 68791.54 | 70005.11 |
| **Latency** | 691µs    | 714µs    | 744µs    | 771µs    | 811µs    | 865µs    | 941µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23155.25 | 3791.76 | 29333.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20408.80 | 21282.26 | 23743.41 | 25766.06 | 27055.84 | 27430.47 | 27920.25 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 94118.85 | 9830.71 | 131719.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 83969.59 | 87086.70 | 92005.37 | 99759.67 | 108201.45 | 112709.08 | 122081.76 |
| **Latency** | 315µs    | 420µs    | 520µs    | 598µs    | 730µs     | 895µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8708.02  | 1509.56 | 11579.78 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6673.29 | 8508.23 | 8935.77 | 9229.38 | 10616.91 | 11182.73 | 11457.59 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 7ms      | 7ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10980.77 | 2382.81 | 13345.08 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7368.72 | 10682.75 | 11945.66 | 12346.37 | 12508.17 | 12688.42 | 13082.29 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 72974.70 | 3814.35 | 95356.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 71535.55 | 72512.93 | 73346.67 | 74212.88 | 75141.23 | 75925.24 | 77622.98 |
| **Latency** | 597µs    | 632µs    | 687µs    | 725µs    | 755µs    | 793µs    | 905µs    |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32164.00 | 3763.50 | 43554.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30118.05 | 30978.91 | 32435.28 | 33102.96 | 34311.41 | 38363.16 | 40410.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 74339.22 | 9822.39 | 106939.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 67622.18 | 69438.90 | 71205.83 | 78002.04 | 87788.87 | 93960.24 | 102340.17 |
| **Latency** | 470µs    | 608µs    | 689µs    | 752µs    | 788µs    | 823µs    | 982µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 73643.39 | 4165.02 | 103292.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 71925.07 | 72938.27 | 73873.69 | 74725.94 | 75832.35 | 76289.40 | 79028.32 |
| **Latency** | 592µs    | 626µs    | 682µs    | 720µs    | 751µs    | 785µs    | 858µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51820.78 | 6274.74 | 62316.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47814.91 | 49535.19 | 54079.18 | 55164.30 | 55975.92 | 56651.49 | 57673.19 |
| **Latency** | 649µs    | 898µs    | 976µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 104885.44 | 10278.46 | 137242.45 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 92885.48 | 97769.85 | 103545.04 | 111191.76 | 118407.05 | 123073.80 | 131936.40 |
| **Latency** | 280µs    | 357µs    | 469µs     | 564µs     | 652µs     | 766µs     | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35089.57 | 4614.57 | 40326.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32838.51 | 35203.93 | 35983.39 | 37212.35 | 37953.21 | 38296.69 | 39339.82 |
| **Latency** | 884µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 68418.36 | 3396.58 | 73612.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67255.52 | 68220.62 | 68764.99 | 69555.73 | 70280.10 | 70709.02 | 71730.46 |
| **Latency** | 639µs    | 672µs    | 735µs    | 772µs    | 804µs    | 844µs    | 920µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 74033.87 | 3428.51 | 105062.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72400.33 | 73244.22 | 74174.73 | 75129.33 | 76202.61 | 77040.94 | 79430.73 |
| **Latency** | 590µs    | 625µs    | 679µs    | 716µs    | 745µs    | 774µs    | 868µs    |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35730.55 | 3089.51 | 40403.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35121.06 | 35618.08 | 36125.24 | 36637.93 | 37123.14 | 37334.95 | 37754.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39209.88 | 3991.52 | 45863.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38565.67 | 39351.79 | 39959.13 | 40401.23 | 40885.40 | 41098.63 | 41647.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

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
| 56328.43 | 3048.24 | 60689.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55336.21 | 56246.57 | 56799.57 | 57382.19 | 57739.34 | 58010.96 | 58478.31 |
| **Latency** | 775µs    | 807µs    | 900µs    | 938µs    | 972µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48546.98 | 5691.03 | 56357.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45419.09 | 46972.57 | 50409.22 | 51751.24 | 52424.72 | 52809.53 | 54203.90 |
| **Latency** | 683µs    | 968µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 121080.89 | 12854.40 | 147399.67 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 103727.07 | 111229.50 | 120898.10 | 131436.09 | 138145.05 | 141751.48 | 145233.37 |
| **Latency** | 249µs     | 313µs     | 391µs     | 480µs     | 610µs     | 691µs     | 898µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7352.68  | 2452.55 | 15862.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5327.00 | 6140.23 | 7647.03 | 8934.62 | 10000.29 | 10406.31 | 11737.21 |
| **Latency** | 5ms     | 5ms     | 6ms     | 7ms     | 8ms      | 11ms     | 14ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 73851.67 | 3297.99 | 87969.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72110.07 | 73126.65 | 74102.65 | 75024.59 | 76014.63 | 76535.15 | 79033.68 |
| **Latency** | 592µs    | 626µs    | 680µs    | 718µs    | 746µs    | 775µs    | 879µs    |

---

<p align="center">Generated 2025-12-13T02:13:52.880Z</p>
