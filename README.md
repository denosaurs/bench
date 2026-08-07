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

| Framework                                                                            | Mean      | Stddev  | Max       | Relative |
| ------------------------------------------------------------------------------------ | --------- | ------- | --------- | -------- |
| Stric                                                                                | 131983.80 | 6949.47 | 148502.99 | 100%     |
| Bun                                                                                  | 130955.87 | 7691.87 | 145964.74 | 99%      |
| Hyper Express                                                                        | 128203.46 | 7380.51 | 143578.39 | 97%      |
| Elysia                                                                               | 124096.18 | 8056.63 | 168909.41 | 94%      |
| Deno                                                                                 | 113195.76 | 7950.55 | 129352.89 | 86%      |
| NHttp                                                                                | 105210.27 | 9029.13 | 130946.34 | 80%      |
| Fastro                                                                               | 103781.60 | 9063.04 | 131040.64 | 79%      |
| Vixeny (Deno)                                                                        | 103261.02 | 8741.83 | 127413.63 | 78%      |
| Fast                                                                                 | 101359.06 | 9525.01 | 128073.69 | 77%      |
| Hono                                                                                 | 98964.30  | 9427.87 | 131355.27 | 75%      |
| Megalo                                                                               | 90476.32  | 6600.14 | 105831.54 | 69%      |
| Alosaur                                                                              | 82225.32  | 6761.42 | 95892.49  | 62%      |
| Reno                                                                                 | 74423.63  | 5031.31 | 82432.17  | 56%      |
| http                                                                                 | 65663.00  | 8931.94 | 77394.29  | 50%      |
| Danet V2 (Hono)                                                                      | 62299.36  | 5732.51 | 78338.46  | 47%      |
| Danet (Oak)                                                                          | 56011.84  | 4970.60 | 61892.68  | 42%      |
| Node                                                                                 | 54974.64  | 6013.34 | 63913.17  | 42%      |
| Oak                                                                                  | 52306.17  | 6076.97 | 59501.67  | 40%      |
| Fastify                                                                              | 49014.83  | 5787.57 | 54899.43  | 37%      |
| Aqua                                                                                 | 45429.27  | 5448.24 | 53430.30  | 34%      |
| Little                                                                               | 43829.25  | 6036.83 | 51744.27  | 33%      |
| Abc                                                                                  | 25680.31  | 3618.72 | 34979.21  | 19%      |
| Express                                                                              | 13312.85  | 2529.76 | 19901.32  | 10%      |
| Express (Deno)                                                                       | 13146.99  | 2504.72 | 16912.95  | 10%      |
| Servest                                                                              | 9436.88   | 2436.68 | 19146.93  | 7%       |
| Acorn                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Cheetah                                                                              | 0.00      | 0.00    | 0.00      | 0%       |
| Deso                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Dinatra                                                                              | 0.00      | 0.00    | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00    | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00    | 0.00      | 0%       |
| Router                                                                               | 0.00      | 0.00    | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00    | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-f2e8559a-17b5-49f6-a603-8918916340f8) |           |         |           |          |

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
| 25680.31 | 3618.72 | 34979.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21915.92 | 24046.40 | 25833.59 | 27823.44 | 29700.11 | 31071.86 | 32604.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

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
| 82225.32 | 6761.42 | 95892.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 75720.12 | 78396.30 | 83527.36 | 86909.50 | 88124.46 | 89013.23 | 91689.36 |
| **Latency** | 517µs    | 555µs    | 602µs    | 647µs    | 695µs    | 720µs    | 811µs    |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45429.27 | 5448.24 | 53430.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41275.62 | 44243.82 | 46513.62 | 48328.81 | 49958.83 | 50613.85 | 51896.74 |
| **Latency** | 706µs    | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 130955.87 | 7691.87 | 145964.74 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 120438.20 | 125929.29 | 132260.24 | 136570.19 | 140119.41 | 141530.33 | 144006.00 |
| **Latency** | 237µs     | 308µs     | 377µs     | 448µs     | 514µs     | 565µs     | 699µs     |

### [Cheetah](#cheetah)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56011.84 | 4970.60 | 61892.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51948.51 | 53428.30 | 56800.69 | 59600.95 | 60300.08 | 60625.35 | 61245.32 |
| **Latency** | 746µs    | 812µs    | 875µs    | 960µs    | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 62299.36 | 5732.51 | 78338.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57860.61 | 60448.42 | 64061.81 | 65234.25 | 65949.54 | 66180.49 | 66478.30 |
| **Latency** | 682µs    | 721µs    | 795µs    | 843µs    | 914µs    | 945µs    | 1ms      |

### [Deno](#deno)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 113195.76 | 7950.55 | 129352.89 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 103629.50 | 108360.73 | 114305.45 | 118584.30 | 121522.71 | 123974.62 | 127526.10 |
| **Latency** | 332µs     | 390µs     | 440µs     | 489µs     | 541µs     | 577µs     | 672µs     |

### [Deso](#deso)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Dinatra](#dinatra)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Elysia](#elysia)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 124096.18 | 8056.63 | 168909.41 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 113189.79 | 118216.03 | 124822.62 | 130111.72 | 133908.82 | 135897.45 | 139264.47 |
| **Latency** | 257µs     | 329µs     | 398µs     | 463µs     | 536µs     | 601µs     | 777µs     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13312.85 | 2529.76 | 19901.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10336.11 | 11954.56 | 13510.02 | 14558.59 | 16307.70 | 17737.18 | 19340.19 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13146.99 | 2504.72 | 16912.95 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9339.60 | 12604.55 | 13865.61 | 14798.40 | 15118.15 | 15359.01 | 15972.84 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Fast](#fast)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 101359.06 | 9525.01 | 128073.69 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 89965.55 | 95424.90 | 101595.34 | 106921.76 | 112812.00 | 117382.60 | 122686.97 |
| **Latency** | 377µs    | 436µs    | 495µs     | 544µs     | 594µs     | 625µs     | 726µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49014.83 | 5787.57 | 54899.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45532.74 | 47674.71 | 50824.47 | 51742.26 | 52449.34 | 52830.03 | 53415.07 |
| **Latency** | 917µs    | 931µs    | 953µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastro](#fastro)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 103781.60 | 9063.04 | 131040.64 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 92637.10 | 98600.19 | 104128.93 | 109435.80 | 114281.65 | 117018.37 | 125039.68 |
| **Latency** | 369µs    | 426µs    | 483µs     | 532µs     | 582µs     | 615µs     | 719µs     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 98964.30 | 9427.87 | 131355.27 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 88636.65 | 93233.67 | 99042.05 | 104274.54 | 109621.45 | 113150.50 | 121611.67 |
| **Latency** | 388µs    | 450µs    | 507µs    | 554µs     | 604µs     | 636µs     | 735µs     |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 65663.00 | 8931.94 | 77394.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57327.86 | 63029.36 | 67547.00 | 71866.83 | 73923.88 | 74525.53 | 75667.55 |
| **Latency** | 532µs    | 669µs    | 741µs    | 808µs    | 884µs    | 1ms      | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 128203.46 | 7380.51 | 143578.39 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 118728.86 | 124324.80 | 129503.91 | 133148.04 | 136228.73 | 137911.38 | 140312.61 |
| **Latency** | 250µs     | 321µs     | 388µs     | 449µs     | 511µs     | 566µs     | 722µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43829.25 | 6036.83 | 51744.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39952.35 | 42480.06 | 45268.82 | 47153.46 | 48405.67 | 49227.33 | 50500.89 |
| **Latency** | 733µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 90476.32 | 6600.14 | 105831.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 83613.35 | 87744.65 | 91629.87 | 93604.80 | 96566.41 | 98104.84 | 102703.53 |
| **Latency** | 460µs    | 503µs    | 550µs    | 591µs    | 640µs    | 672µs    | 764µs     |

### [NHttp](#nhttp)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 105210.27 | 9029.13 | 130946.34 |     |

| **Stat**    | 10       | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 94877.97 | 100608.83 | 105401.58 | 110736.83 | 115165.19 | 118687.17 | 124458.29 |
| **Latency** | 360µs    | 419µs     | 476µs     | 526µs     | 575µs     | 611µs     | 719µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54974.64 | 6013.34 | 63913.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50519.86 | 53702.13 | 56503.00 | 57782.51 | 58762.93 | 59478.23 | 61230.05 |
| **Latency** | 805µs    | 836µs    | 866µs    | 940µs    | 1ms      | 1ms      | 1ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52306.17 | 6076.97 | 59501.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47808.34 | 50249.83 | 53462.03 | 56139.12 | 57067.11 | 57503.40 | 58370.55 |
| **Latency** | 840µs    | 869µs    | 917µs    | 994µs    | 1ms      | 1ms      | 1ms      |

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
| 74423.63 | 5031.31 | 82432.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 68867.10 | 71711.54 | 76115.34 | 77708.48 | 78452.75 | 78808.80 | 79396.05 |
| **Latency** | 575µs    | 612µs    | 667µs    | 710µs    | 767µs    | 796µs    | 886µs    |

### [Router](#router)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Stric](#stric)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 131983.80 | 6949.47 | 148502.99 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 122391.11 | 127729.91 | 132981.50 | 137019.81 | 140123.55 | 142035.39 | 144638.14 |
| **Latency** | 237µs     | 306µs     | 375µs     | 445µs     | 507µs     | 556µs     | 691µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9436.88  | 2436.68 | 19146.93 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6123.44 | 8330.46 | 9907.36 | 10873.57 | 12130.55 | 12942.75 | 14371.51 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 6ms      | 8ms      | 11ms     |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 103261.02 | 8741.83 | 127413.63 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 92518.24 | 98153.99 | 103661.09 | 109010.52 | 112947.97 | 116303.44 | 120923.79 |
| **Latency** | 369µs    | 429µs    | 485µs     | 535µs     | 584µs     | 617µs     | 721µs     |

---

<p align="center">Generated 2026-08-07T03:19:27.472Z</p>
