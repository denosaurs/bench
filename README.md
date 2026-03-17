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
| Stric                                                                                | 124840.94 | 12902.43 | 150129.08 | 100%     |
| Bun                                                                                  | 118954.06 | 14900.80 | 145825.87 | 95%      |
| Hyper Express                                                                        | 108623.68 | 13996.05 | 145762.00 | 87%      |
| Elysia                                                                               | 93943.43  | 9324.71  | 130142.99 | 75%      |
| Deno                                                                                 | 81121.35  | 4683.38  | 109781.69 | 65%      |
| Vixeny (Deno)                                                                        | 74311.19  | 3638.29  | 92435.79  | 60%      |
| NHttp                                                                                | 73202.82  | 4042.64  | 92199.22  | 59%      |
| Fastro                                                                               | 73041.39  | 3180.10  | 91421.66  | 59%      |
| Fast                                                                                 | 71852.78  | 3555.69  | 83806.06  | 58%      |
| Hono                                                                                 | 71506.42  | 3801.96  | 81987.48  | 57%      |
| Deso                                                                                 | 66996.94  | 3448.05  | 78129.43  | 54%      |
| Megalo                                                                               | 65857.46  | 3296.05  | 74720.20  | 53%      |
| Alosaur                                                                              | 62333.86  | 3544.74  | 66361.37  | 50%      |
| Reno                                                                                 | 56586.53  | 2949.85  | 59584.41  | 45%      |
| Cheetah                                                                              | 56219.19  | 3582.60  | 59261.78  | 45%      |
| http                                                                                 | 52090.71  | 6783.14  | 58908.24  | 42%      |
| Router                                                                               | 49622.44  | 5813.12  | 55631.78  | 40%      |
| Danet V2 (Hono)                                                                      | 45910.40  | 3501.19  | 52300.92  | 37%      |
| Danet (Oak)                                                                          | 42470.59  | 3050.67  | 44709.63  | 34%      |
| Oak                                                                                  | 40628.65  | 4283.60  | 44046.61  | 33%      |
| Aqua                                                                                 | 36721.57  | 4100.12  | 42811.00  | 29%      |
| Little                                                                               | 35542.52  | 4790.10  | 41530.32  | 28%      |
| Node                                                                                 | 35313.30  | 3100.36  | 43237.13  | 28%      |
| Fastify                                                                              | 31250.21  | 3070.19  | 33305.09  | 25%      |
| Dinatra                                                                              | 23837.51  | 3731.78  | 28814.77  | 19%      |
| Abc                                                                                  | 18420.20  | 2167.46  | 26636.11  | 15%      |
| Express (Deno)                                                                       | 10882.10  | 2395.41  | 13951.21  | 9%       |
| Express                                                                              | 8579.50   | 1571.42  | 11695.40  | 7%       |
| Servest                                                                              | 7893.42   | 2641.31  | 16754.01  | 6%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-b8cd6f68-eda9-4422-ac93-8fc68d03c59a) |           |          |           |          |

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
| 18420.20 | 2167.46 | 26636.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16309.76 | 17368.45 | 18810.94 | 19757.75 | 20453.05 | 20848.64 | 21589.62 |
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
| 62333.86 | 3544.74 | 66361.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61201.04 | 62025.71 | 62901.86 | 63526.51 | 64098.75 | 64411.40 | 65072.71 |
| **Latency** | 703µs    | 734µs    | 808µs    | 847µs    | 877µs    | 910µs    | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36721.57 | 4100.12 | 42811.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34886.11 | 35727.41 | 37612.92 | 38986.66 | 39424.19 | 39780.79 | 41405.78 |
| **Latency** | 834µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 118954.06 | 14900.80 | 145825.87 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 97449.62 | 106922.15 | 119822.90 | 130923.95 | 138765.58 | 141891.26 | 145015.36 |
| **Latency** | 253µs    | 318µs     | 399µs     | 488µs     | 611µs     | 706µs     | 937µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56219.19 | 3582.60 | 59261.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55182.87 | 56200.05 | 56737.71 | 57402.69 | 57793.84 | 58091.20 | 58503.14 |
| **Latency** | 773µs    | 807µs    | 898µs    | 936µs    | 983µs    | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42470.59 | 3050.67 | 44709.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41263.19 | 42239.98 | 43090.59 | 43496.97 | 43824.60 | 44123.79 | 44451.29 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45910.40 | 3501.19 | 52300.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45217.25 | 46032.56 | 46476.00 | 46815.10 | 47183.46 | 47369.55 | 47927.17 |
| **Latency** | 942µs    | 976µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 81121.35 | 4683.38 | 109781.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 78158.17 | 79314.28 | 80634.95 | 82661.91 | 85415.33 | 87364.15 | 95306.52 |
| **Latency** | 509µs    | 567µs    | 620µs    | 664µs    | 706µs    | 751µs    | 835µs    |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 66996.94 | 3448.05 | 78129.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65663.52 | 66544.04 | 67389.08 | 68137.74 | 68907.28 | 69468.50 | 70470.50 |
| **Latency** | 686µs    | 710µs    | 738µs    | 766µs    | 801µs    | 850µs    | 930µs    |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23837.51 | 3731.78 | 28814.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21324.14 | 22281.77 | 24051.42 | 26455.39 | 27239.03 | 27601.49 | 28265.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Elysia](#elysia)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 93943.43 | 9324.71 | 130142.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- |
| **Req/Sec** | 82945.65 | 87414.36 | 92812.99 | 99161.55 | 106357.19 | 111553.25 | 120439.37 |
| **Latency** | 312µs    | 400µs    | 522µs    | 619µs    | 731µs     | 888µs     | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8579.50  | 1571.42 | 11695.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6367.89 | 8338.25 | 8824.44 | 9056.58 | 10733.02 | 11265.37 | 11496.15 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 7ms      | 8ms      | 9ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10882.10 | 2395.41 | 13951.21 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7312.10 | 10550.62 | 11787.31 | 12313.05 | 12538.41 | 12713.53 | 13085.63 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 6ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 71852.78 | 3555.69 | 83806.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 70220.57 | 71181.98 | 72123.37 | 73077.46 | 74246.98 | 75010.75 | 78036.03 |
| **Latency** | 607µs    | 642µs    | 697µs    | 737µs    | 769µs    | 810µs    | 907µs    |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31250.21 | 3070.19 | 33305.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30806.37 | 31245.21 | 31736.42 | 32193.85 | 32470.77 | 32671.12 | 32889.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 73041.39 | 3180.10 | 91421.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 71308.95 | 72218.30 | 73109.79 | 74073.93 | 75320.95 | 76353.91 | 78383.86 |
| **Latency** | 596µs    | 632µs    | 686µs    | 726µs    | 759µs    | 799µs    | 884µs    |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 71506.42 | 3801.96 | 81987.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 70017.82 | 70902.58 | 71742.22 | 72703.14 | 73855.70 | 74568.70 | 76337.49 |
| **Latency** | 610µs    | 644µs    | 700µs    | 740µs    | 773µs    | 816µs    | 903µs    |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52090.71 | 6783.14 | 58908.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48404.03 | 50186.84 | 54526.09 | 55623.95 | 56412.55 | 57147.79 | 58119.77 |
| **Latency** | 646µs    | 890µs    | 964µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 108623.68 | 13996.05 | 145762.00 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 92314.01 | 97675.85 | 107585.59 | 117853.74 | 128160.94 | 133801.57 | 141791.21 |
| **Latency** | 270µs    | 343µs    | 438µs     | 558µs     | 648µs     | 738µs     | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35542.52 | 4790.10 | 41530.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33508.97 | 35558.78 | 36348.38 | 37983.24 | 38585.96 | 38928.24 | 39828.93 |
| **Latency** | 869µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 65857.46 | 3296.05 | 74720.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64851.90 | 65456.08 | 66251.34 | 66889.07 | 67438.93 | 67902.37 | 68793.15 |
| **Latency** | 662µs    | 695µs    | 761µs    | 801µs    | 837µs    | 899µs    | 983µs    |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 73202.82 | 4042.64 | 92199.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 71500.56 | 72672.75 | 73634.18 | 74748.66 | 75839.66 | 76619.32 | 78826.70 |
| **Latency** | 595µs    | 630µs    | 684µs    | 724µs    | 755µs    | 793µs    | 908µs    |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35313.30 | 3100.36 | 43237.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34725.22 | 35170.60 | 35669.22 | 36200.30 | 36619.46 | 36838.70 | 37613.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40628.65 | 4283.60 | 44046.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40013.28 | 41034.70 | 41423.38 | 41916.15 | 42418.33 | 42656.21 | 43198.19 |
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
| 56586.53 | 2949.85 | 59584.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55930.40 | 56460.08 | 57026.10 | 57465.07 | 57834.12 | 58250.12 | 58646.78 |
| **Latency** | 772µs    | 803µs    | 896µs    | 934µs    | 966µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49622.44 | 5813.12 | 55631.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46416.58 | 47782.51 | 51668.70 | 52851.30 | 53622.28 | 54238.65 | 55212.17 |
| **Latency** | 670µs    | 953µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 124840.94 | 12902.43 | 150129.08 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 107655.82 | 115115.02 | 125531.99 | 135274.77 | 142128.88 | 144609.95 | 147118.21 |
| **Latency** | 240µs     | 304µs     | 381µs     | 465µs     | 581µs     | 671µs     | 879µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7893.42  | 2641.31 | 16754.01 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5216.70 | 6519.85 | 8234.27 | 9627.82 | 10627.25 | 11438.84 | 13074.27 |
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

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 74311.19 | 3638.29 | 92435.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72459.79 | 73431.44 | 74401.58 | 75444.53 | 76921.46 | 78002.68 | 81704.27 |
| **Latency** | 587µs    | 622µs    | 675µs    | 714µs    | 744µs    | 774µs    | 882µs    |

---

<p align="center">Generated 2026-03-17T02:56:36.931Z</p>
