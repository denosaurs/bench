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
| Stric                                                                                | 157572.63 | 5390.79  | 179372.29 | 100%     |
| Bun                                                                                  | 157277.93 | 5298.99  | 171866.90 | 100%     |
| Elysia                                                                               | 151102.49 | 4743.77  | 162221.40 | 96%      |
| Hyper Express                                                                        | 150290.59 | 8962.39  | 166330.75 | 95%      |
| Deno                                                                                 | 130448.30 | 10064.82 | 155862.35 | 83%      |
| NHttp                                                                                | 125870.57 | 9360.99  | 153225.24 | 80%      |
| Fastro                                                                               | 123880.90 | 10457.58 | 148652.01 | 79%      |
| Vixeny (Deno)                                                                        | 123187.68 | 9951.02  | 152458.86 | 78%      |
| Hono                                                                                 | 117651.49 | 10745.29 | 148823.84 | 75%      |
| Fast                                                                                 | 115671.93 | 12396.78 | 150509.80 | 73%      |
| Megalo                                                                               | 102374.88 | 8543.30  | 124294.04 | 65%      |
| Alosaur                                                                              | 98011.24  | 5624.85  | 109406.62 | 62%      |
| Reno                                                                                 | 87371.87  | 4258.22  | 96991.23  | 55%      |
| http                                                                                 | 73762.06  | 9115.46  | 85460.55  | 47%      |
| Danet V2 (Hono)                                                                      | 72322.69  | 5398.95  | 77823.47  | 46%      |
| Node                                                                                 | 64883.60  | 7142.66  | 76928.36  | 41%      |
| Danet (Oak)                                                                          | 64564.21  | 5531.76  | 70411.96  | 41%      |
| Fastify                                                                              | 58870.65  | 7121.92  | 87604.36  | 37%      |
| Oak                                                                                  | 57085.86  | 5550.76  | 62232.52  | 36%      |
| Aqua                                                                                 | 52741.47  | 5845.71  | 60695.13  | 33%      |
| Little                                                                               | 52075.83  | 6542.44  | 58759.99  | 33%      |
| Abc                                                                                  | 33447.51  | 3423.33  | 38848.65  | 21%      |
| Express                                                                              | 16587.63  | 3360.95  | 22633.94  | 11%      |
| Express (Deno)                                                                       | 15057.16  | 2690.00  | 18378.10  | 10%      |
| Servest                                                                              | 11178.01  | 2748.30  | 27793.48  | 7%       |
| Acorn                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Cheetah                                                                              | 0.00      | 0.00     | 0.00      | 0%       |
| Deso                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Dinatra                                                                              | 0.00      | 0.00     | 0.00      | 0%       |
| Opine                                                                                | 0.00      | 0.00     | 0.00      | 0%       |
| Peko                                                                                 | 0.00      | 0.00     | 0.00      | 0%       |
| Router                                                                               | 0.00      | 0.00     | 0.00      | 0%       |
| Vixeny (Bun)                                                                         | 0.00      | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-2bbe921f-f29e-4fff-baa6-21a21d707075) |           |          |           |          |

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
| 33447.51 | 3423.33 | 38848.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31154.77 | 32678.07 | 33780.28 | 35131.65 | 36565.07 | 37275.42 | 38204.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      |

### [Acorn](#acorn)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 98011.24 | 5624.85 | 109406.62 |     |

| **Stat**    | 10       | 25       | 50       | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 94279.39 | 97012.90 | 98815.85 | 100013.45 | 101740.76 | 103551.74 | 106418.78 |
| **Latency** | 439µs    | 468µs    | 510µs    | 542µs     | 569µs     | 596µs     | 691µs     |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52741.47 | 5845.71 | 60695.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49072.81 | 51628.08 | 53908.41 | 55553.58 | 57766.58 | 58409.37 | 59373.14 |
| **Latency** | 615µs    | 858µs    | 955µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Bun](#bun)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 157277.93 | 5298.99 | 171866.90 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 152092.77 | 155102.63 | 157651.49 | 160216.69 | 162706.35 | 164277.30 | 166534.11 |
| **Latency** | 202µs     | 259µs     | 316µs     | 375µs     | 416µs     | 455µs     | 569µs     |

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
| 64564.21 | 5531.76 | 70411.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59979.34 | 61135.46 | 67234.48 | 67931.66 | 68475.76 | 68720.39 | 69558.31 |
| **Latency** | 649µs    | 700µs    | 762µs    | 838µs    | 878µs    | 928µs    | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 72322.69 | 5398.95 | 77823.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 70743.05 | 72606.39 | 73402.14 | 74106.54 | 74716.46 | 74996.70 | 75424.08 |
| **Latency** | 595µs    | 622µs    | 695µs    | 726µs    | 775µs    | 820µs    | 929µs    |

### [Deno](#deno)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 130448.30 | 10064.82 | 155862.35 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 117127.33 | 122718.53 | 132288.69 | 138445.89 | 141905.93 | 144118.80 | 147538.49 |
| **Latency** | 283µs     | 335µs     | 382µs     | 428µs     | 473µs     | 503µs     | 584µs     |

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
| 151102.49 | 4743.77 | 162221.40 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 146331.59 | 148958.02 | 151552.96 | 154037.46 | 156249.52 | 157566.89 | 159151.19 |
| **Latency** | 215µs     | 274µs     | 329µs     | 380µs     | 424µs     | 476µs     | 621µs     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16587.63 | 3360.95 | 22633.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12476.20 | 14395.99 | 16385.12 | 19301.05 | 20876.11 | 21951.89 | 22363.52 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15057.16 | 2690.00 | 18378.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11333.73 | 14816.80 | 15963.85 | 16637.31 | 16866.51 | 17005.65 | 17355.28 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Fast](#fast)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 115671.93 | 12396.78 | 150509.80 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 101006.16 | 106528.75 | 115719.66 | 124514.98 | 130723.12 | 135788.69 | 144148.12 |
| **Latency** | 320µs     | 371µs     | 432µs     | 486µs     | 534µs     | 564µs     | 661µs     |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58870.65 | 7121.92 | 87604.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56282.29 | 57772.01 | 58873.13 | 60291.21 | 65218.78 | 68319.05 | 74673.38 |
| **Latency** | 629µs    | 802µs    | 836µs    | 877µs    | 1ms      | 1ms      | 1ms      |

### [Fastro](#fastro)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 123880.90 | 10457.58 | 148652.01 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 111109.52 | 117577.53 | 125403.69 | 131121.81 | 135505.98 | 138390.33 | 143008.17 |
| **Latency** | 298µs     | 351µs     | 402µs     | 451µs     | 497µs     | 528µs     | 627µs     |

### [Hono](#hono)

| **Stat**  | Mean     | Stddev    | Max |
| --------- | -------- | --------- | --- |
| 117651.49 | 10745.29 | 148823.84 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 104540.11 | 111740.81 | 118064.52 | 124517.33 | 130273.21 | 133354.14 | 140537.29 |
| **Latency** | 318µs     | 369µs     | 425µs     | 474µs     | 520µs     | 552µs     | 651µs     |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 73762.06 | 9115.46 | 85460.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65308.25 | 71375.80 | 75509.31 | 79623.41 | 81613.41 | 82534.38 | 83859.19 |
| **Latency** | 469µs    | 606µs    | 666µs    | 715µs    | 777µs    | 836µs    | 1ms      |

### [Hyper Express](#hyper-express)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 150290.59 | 8962.39 | 166330.75 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 137843.12 | 142543.39 | 153598.23 | 157457.60 | 159519.00 | 160568.98 | 163043.19 |
| **Latency** | 217µs     | 276µs     | 332µs     | 384µs     | 432µs     | 469µs     | 600µs     |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52075.83 | 6542.44 | 58759.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48715.44 | 52392.17 | 53862.00 | 54828.62 | 56013.80 | 56636.27 | 57989.63 |
| **Latency** | 624µs    | 876µs    | 964µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Megalo](#megalo)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 102374.88 | 8543.30 | 124294.04 |     |

| **Stat**    | 10       | 25       | 50        | 75        | 90        | 95        | 99        |
| ----------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 92572.33 | 97868.76 | 103877.10 | 107133.69 | 111328.93 | 113707.86 | 118758.12 |
| **Latency** | 391µs    | 440µs    | 487µs     | 527µs     | 576µs     | 610µs     | 718µs     |

### [NHttp](#nhttp)

| **Stat**  | Mean    | Stddev    | Max |
| --------- | ------- | --------- | --- |
| 125870.57 | 9360.99 | 153225.24 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 116751.53 | 121451.01 | 126468.89 | 131204.70 | 135929.24 | 138944.95 | 143013.58 |
| **Latency** | 294µs     | 346µs     | 396µs     | 444µs     | 483µs     | 515µs     | 615µs     |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64883.60 | 7142.66 | 76928.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 59715.48 | 64718.92 | 66137.96 | 67567.20 | 69163.15 | 70214.46 | 73235.68 |
| **Latency** | 623µs    | 717µs    | 750µs    | 792µs    | 917µs    | 1ms      | 1ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 57085.86 | 5550.76 | 62232.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53112.93 | 54599.90 | 59124.22 | 59806.89 | 60515.29 | 61046.06 | 61682.95 |
| **Latency** | 790µs    | 812µs    | 841µs    | 899µs    | 974µs    | 1ms      | 1ms      |

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
| 87371.87 | 4258.22 | 96991.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 86079.18 | 87402.28 | 88174.20 | 88654.46 | 89138.70 | 89418.00 | 90340.68 |
| **Latency** | 497µs    | 522µs    | 575µs    | 604µs    | 632µs    | 674µs    | 729µs    |

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
| 157572.63 | 5390.79 | 179372.29 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 152351.80 | 155184.14 | 158026.01 | 160742.87 | 163144.60 | 164685.14 | 167515.19 |
| **Latency** | 201µs     | 258µs     | 316µs     | 374µs     | 416µs     | 454µs     | 568µs     |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11178.01 | 2748.30 | 27793.48 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6917.31 | 10109.96 | 11348.91 | 12689.77 | 14321.47 | 15239.01 | 16857.00 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 7ms      | 9ms      |

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
| 123187.68 | 9951.02 | 152458.86 |     |

| **Stat**    | 10        | 25        | 50        | 75        | 90        | 95        | 99        |
| ----------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 111711.59 | 117488.05 | 123448.86 | 129166.91 | 135050.57 | 138620.11 | 145305.74 |
| **Latency** | 300µs     | 354µs     | 406µs     | 455µs     | 495µs     | 524µs     | 615µs     |

---

<p align="center">Generated 2026-08-12T02:41:01.231Z</p>
