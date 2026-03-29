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
| Stric                                                                                | 110105.86 | 6225.23  | 126010.47 | 100%     |
| Bun                                                                                  | 109822.79 | 6713.15  | 127364.26 | 100%     |
| Hyper Express                                                                        | 104846.69 | 7903.02  | 127986.37 | 95%      |
| Elysia                                                                               | 96100.09  | 11886.21 | 119415.89 | 87%      |
| Deno                                                                                 | 89284.95  | 7621.40  | 117627.84 | 81%      |
| NHttp                                                                                | 80230.97  | 8506.62  | 117525.53 | 73%      |
| Fastro                                                                               | 80138.25  | 7747.41  | 116710.81 | 73%      |
| Fast                                                                                 | 79008.44  | 8913.53  | 116248.35 | 72%      |
| Vixeny (Deno)                                                                        | 78712.37  | 8097.72  | 115109.65 | 71%      |
| Hono                                                                                 | 75575.52  | 7847.41  | 117771.73 | 69%      |
| Deso                                                                                 | 72328.04  | 8010.38  | 99731.46  | 66%      |
| Megalo                                                                               | 69173.99  | 4098.79  | 89925.54  | 63%      |
| Alosaur                                                                              | 64533.70  | 3477.55  | 71788.95  | 59%      |
| Cheetah                                                                              | 58654.23  | 3471.46  | 63942.39  | 53%      |
| Reno                                                                                 | 58339.95  | 3183.71  | 65686.68  | 53%      |
| http                                                                                 | 52842.10  | 6509.62  | 60561.18  | 48%      |
| Router                                                                               | 50478.78  | 5695.01  | 57521.91  | 46%      |
| Danet V2 (Hono)                                                                      | 47201.78  | 3422.44  | 49556.62  | 43%      |
| Danet (Oak)                                                                          | 44411.58  | 3422.84  | 47614.56  | 40%      |
| Oak                                                                                  | 39987.31  | 4987.21  | 46713.04  | 36%      |
| Aqua                                                                                 | 37202.35  | 4295.12  | 64012.97  | 34%      |
| Little                                                                               | 36319.25  | 5050.46  | 42590.18  | 33%      |
| Node                                                                                 | 35652.17  | 3168.45  | 42634.90  | 32%      |
| Fastify                                                                              | 31852.18  | 3102.13  | 37507.09  | 29%      |
| Dinatra                                                                              | 24152.42  | 3658.21  | 34643.91  | 22%      |
| Abc                                                                                  | 19302.61  | 2120.12  | 26565.99  | 18%      |
| Express (Deno)                                                                       | 11194.51  | 2415.36  | 13738.07  | 10%      |
| Express                                                                              | 8836.30   | 1526.91  | 12038.65  | 8%       |
| Servest                                                                              | 7917.23   | 2560.86  | 16701.54  | 7%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-c8549032-5eb6-4319-93d9-dd23a75dbeb5) |           |          |           |          |

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
| 19302.61 | 2120.12 | 26565.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17512.37 | 18326.67 | 19816.33 | 20548.18 | 21111.38 | 21409.30 | 22135.26 |
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
| 64533.70 | 3477.55 | 71788.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63324.66 | 64233.82 | 65038.80 | 65606.83 | 66118.75 | 66448.90 | 67653.69 |
| **Latency** | 681µs    | 711µs    | 782µs    | 818µs    | 846µs    | 872µs    | 991µs    |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37202.35 | 4295.12 | 64012.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35102.59 | 36254.00 | 38009.46 | 39389.17 | 40017.73 | 40744.43 | 42099.33 |
| **Latency** | 836µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 109822.79 | 6713.15 | 127364.26 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 100450.90 | 105736.07 | 110413.31 | 114422.24 | 117845.43 | 120008.73 | 123006.35 |
| **Latency** | 282µs     | 359µs     | 446µs     | 518µs     | 661µs     | 725µs     | 889µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58654.23 | 3471.46 | 63942.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57610.13 | 58474.95 | 59029.85 | 59714.70 | 60300.70 | 60617.65 | 61174.69 |
| **Latency** | 744µs    | 776µs    | 861µs    | 899µs    | 940µs    | 985µs    | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44411.58 | 3422.84 | 47614.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43152.48 | 44042.84 | 44797.29 | 45723.34 | 46434.45 | 46633.53 | 47072.03 |
| **Latency** | 968µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47201.78 | 3422.44 | 49556.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46527.50 | 47343.27 | 47698.13 | 48073.39 | 48524.46 | 48709.92 | 49110.01 |
| **Latency** | 921µs    | 954µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 89284.95 | 7621.40 | 117627.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- |
| **Req/Sec** | 81535.52 | 83502.16 | 88716.47 | 94042.14 | 98918.34 | 102233.61 | 108508.29 |
| **Latency** | 405µs    | 484µs    | 571µs    | 632µs    | 678µs    | 722µs     | 813µs     |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 72328.04 | 8010.38 | 99731.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66609.70 | 68464.28 | 70127.70 | 75643.09 | 82610.35 | 87054.11 | 94792.98 |
| **Latency** | 489µs    | 665µs    | 710µs    | 744µs    | 786µs    | 827µs    | 942µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24152.42 | 3658.21 | 34643.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21705.35 | 22806.35 | 24347.15 | 26784.39 | 27547.94 | 27821.04 | 28743.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 96100.09 | 11886.21 | 119415.89 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 81006.62 | 87054.30 | 97723.64 | 105726.96 | 110478.66 | 112394.62 | 116111.88 |
| **Latency** | 325µs    | 404µs    | 486µs    | 589µs     | 744µs     | 886µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8836.30  | 1526.91 | 12038.65 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6966.34 | 8569.97 | 9102.08 | 9267.80 | 10666.34 | 11510.77 | 11794.76 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 7ms      | 7ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11194.51 | 2415.36 | 13738.07 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7486.46 | 11055.55 | 12249.53 | 12568.76 | 12750.70 | 12837.35 | 13271.76 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 79008.44 | 8913.53 | 116248.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 72912.10 | 74146.31 | 75852.30 | 81930.36 | 90122.12 | 97666.01 | 110882.04 |
| **Latency** | 457µs    | 583µs    | 650µs    | 704µs    | 738µs    | 767µs    | 864µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31852.18 | 3102.13 | 37507.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31322.53 | 31878.85 | 32364.10 | 32757.51 | 33042.61 | 33206.96 | 33858.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 80138.25 | 7747.41 | 116710.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 74971.81 | 76107.94 | 77404.97 | 82761.94 | 90350.36 | 95842.03 | 106032.62 |
| **Latency** | 465µs    | 578µs    | 639µs    | 688µs    | 721µs    | 754µs    | 842µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 75575.52 | 7847.41 | 117771.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 71140.58 | 72331.92 | 73544.22 | 76214.87 | 83913.06 | 90861.53 | 105107.97 |
| **Latency** | 502µs    | 614µs    | 674µs    | 722µs    | 757µs    | 793µs    | 889µs     |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52842.10 | 6509.62 | 60561.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48917.51 | 50591.72 | 54928.17 | 56264.55 | 57379.36 | 58020.57 | 58946.61 |
| **Latency** | 648µs    | 841µs    | 952µs    | 998µs    | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 104846.69 | 7903.02 | 127986.37 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 95207.13 | 100526.53 | 105525.07 | 110093.00 | 113910.80 | 116100.42 | 121049.09 |
| **Latency** | 301µs    | 374µs     | 463µs     | 554µs     | 678µs     | 759µs     | 978µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36319.25 | 5050.46 | 42590.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33861.56 | 35918.74 | 37158.19 | 38937.08 | 39794.17 | 40600.36 | 41910.13 |
| **Latency** | 861µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69173.99 | 4098.79 | 89925.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 67358.35 | 68356.27 | 69176.00 | 70026.39 | 71530.46 | 73594.81 | 80354.71 |
| **Latency** | 631µs    | 667µs    | 728µs    | 768µs    | 801µs    | 840µs    | 928µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 80230.97 | 8506.62 | 117525.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 74310.78 | 75496.75 | 76905.36 | 83303.67 | 92804.21 | 98003.10 | 107626.03 |
| **Latency** | 453µs    | 575µs    | 641µs    | 694µs    | 725µs    | 752µs    | 848µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35652.17 | 3168.45 | 42634.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34998.82 | 35584.78 | 36090.56 | 36546.79 | 37026.52 | 37298.12 | 38610.25 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39987.31 | 4987.21 | 46713.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38604.23 | 40124.18 | 40828.14 | 41518.57 | 42612.21 | 43535.81 | 46033.10 |
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
| 58339.95 | 3183.71 | 65686.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57465.58 | 58295.60 | 58713.48 | 59365.91 | 59790.80 | 60019.00 | 60635.03 |
| **Latency** | 750µs    | 782µs    | 867µs    | 906µs    | 939µs    | 987µs    | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50478.78 | 5695.01 | 57521.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47428.61 | 49105.77 | 52023.50 | 53494.51 | 54456.20 | 55027.14 | 56514.11 |
| **Latency** | 667µs    | 902µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 110105.86 | 6225.23 | 126010.47 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 101998.29 | 105807.85 | 110462.51 | 114428.31 | 117925.61 | 119530.93 | 123440.86 |
| **Latency** | 281µs     | 358µs     | 447µs     | 515µs     | 659µs     | 725µs     | 887µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7917.23  | 2560.86 | 16701.54 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5338.32 | 6552.32 | 8233.15 | 9522.69 | 10599.78 | 11202.97 | 13156.57 |
| **Latency** | 4ms     | 5ms     | 6ms     | 6ms     | 8ms      | 11ms     | 13ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 78712.37 | 8097.72 | 115109.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 73504.31 | 74714.41 | 76075.80 | 80859.30 | 89039.42 | 95374.39 | 106942.42 |
| **Latency** | 470µs    | 590µs    | 650µs    | 700µs    | 732µs    | 761µs    | 866µs     |

---

<p align="center">Generated 2026-03-29T03:35:17.917Z</p>
