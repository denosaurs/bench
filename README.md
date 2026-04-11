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

| Framework                                                                            | Mean     | Stddev  | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | -------- | -------- |
| Hyper Express                                                                        | 79256.75 | 5585.99 | 94683.69 | 100%     |
| Bun                                                                                  | 78724.97 | 4812.15 | 91780.56 | 99%      |
| Stric                                                                                | 77075.18 | 4795.36 | 89730.17 | 97%      |
| Elysia                                                                               | 72780.17 | 6710.45 | 93373.67 | 92%      |
| Deno                                                                                 | 60851.96 | 5701.62 | 84698.61 | 77%      |
| Fastro                                                                               | 59089.50 | 6560.33 | 81105.24 | 75%      |
| Fast                                                                                 | 57261.04 | 6580.91 | 78610.00 | 72%      |
| NHttp                                                                                | 56556.36 | 4512.77 | 83137.22 | 71%      |
| Vixeny (Deno)                                                                        | 56546.83 | 4668.98 | 80373.42 | 71%      |
| Hono                                                                                 | 54455.17 | 3835.00 | 76141.83 | 69%      |
| Megalo                                                                               | 50643.98 | 2878.46 | 63711.99 | 64%      |
| Deso                                                                                 | 49089.38 | 2519.95 | 60441.52 | 62%      |
| Alosaur                                                                              | 48194.32 | 2728.10 | 54810.21 | 61%      |
| Cheetah                                                                              | 43690.34 | 3268.80 | 46949.33 | 55%      |
| Reno                                                                                 | 43300.74 | 2095.58 | 46005.48 | 55%      |
| http                                                                                 | 42563.89 | 4584.55 | 48957.17 | 54%      |
| Router                                                                               | 40794.10 | 4445.42 | 47463.77 | 51%      |
| Danet V2 (Hono)                                                                      | 37842.77 | 2552.38 | 41651.54 | 48%      |
| Danet (Oak)                                                                          | 36119.98 | 2518.65 | 38525.56 | 46%      |
| Oak                                                                                  | 32742.84 | 3214.77 | 36200.90 | 41%      |
| Aqua                                                                                 | 31882.94 | 3963.33 | 40500.45 | 40%      |
| Little                                                                               | 31518.29 | 4005.76 | 36862.67 | 40%      |
| Node                                                                                 | 25402.65 | 2543.11 | 30218.72 | 32%      |
| Dinatra                                                                              | 22666.47 | 3499.53 | 34509.93 | 29%      |
| Fastify                                                                              | 20151.98 | 3427.50 | 37727.98 | 25%      |
| Abc                                                                                  | 14569.29 | 1556.43 | 18318.10 | 18%      |
| Express (Deno)                                                                       | 11148.75 | 2459.74 | 13730.20 | 14%      |
| Express                                                                              | 7540.21  | 1575.60 | 10363.96 | 10%      |
| Servest                                                                              | 6535.45  | 2101.42 | 15773.31 | 8%       |
| Acorn                                                                                | 0.00     | 0.00    | 0.00     | 0%       |
| Opine                                                                                | 0.00     | 0.00    | 0.00     | 0%       |
| Peko                                                                                 | 0.00     | 0.00    | 0.00     | 0%       |
| Vixeny (Bun)                                                                         | 0.00     | 0.00    | 0.00     | 0%       |
| ![Chart](https://quickchart.io/chart/render/zf-a3469267-77fd-410b-a8c5-cf0310ea573b) |          |         |          |          |

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
| 14569.29 | 1556.43 | 18318.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13241.68 | 14003.58 | 14815.28 | 15390.49 | 15913.72 | 16315.16 | 17467.79 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      |

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
| 48194.32 | 2728.10 | 54810.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47344.92 | 47983.02 | 48613.89 | 49038.62 | 49536.85 | 49760.18 | 50645.02 |
| **Latency** | 918µs    | 957µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31882.94 | 3963.33 | 40500.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28988.44 | 30827.37 | 32521.37 | 33924.09 | 35095.89 | 35902.18 | 38210.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78724.97 | 4812.15 | 91780.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72864.16 | 75793.98 | 78724.60 | 81942.95 | 84754.28 | 86108.45 | 89321.43 |
| **Latency** | 394µs    | 508µs    | 615µs    | 734µs    | 883µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43690.34 | 3268.80 | 46949.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43059.39 | 43835.78 | 44302.84 | 44714.03 | 45139.93 | 45330.51 | 45872.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36119.98 | 2518.65 | 38525.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35401.79 | 35993.31 | 36518.42 | 36862.44 | 37395.97 | 37633.07 | 37940.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37842.77 | 2552.38 | 41651.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37223.47 | 37727.80 | 38213.23 | 38646.71 | 38960.10 | 39149.68 | 39766.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60851.96 | 5701.62 | 84698.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56953.24 | 58061.39 | 59775.43 | 63727.67 | 67416.40 | 70118.16 | 75208.49 |
| **Latency** | 627µs    | 748µs    | 834µs    | 906µs    | 956µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49089.38 | 2519.95 | 60441.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47944.24 | 48404.34 | 49130.43 | 49834.71 | 50782.01 | 51664.45 | 54846.15 |
| **Latency** | 943µs    | 976µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22666.47 | 3499.53 | 34509.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20473.91 | 21450.58 | 23335.98 | 24723.61 | 25833.08 | 26183.45 | 26796.67 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 72780.17 | 6710.45 | 93373.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64201.44 | 68551.56 | 73254.03 | 77397.27 | 80903.68 | 82709.46 | 86709.60 |
| **Latency** | 434µs    | 541µs    | 653µs    | 788µs    | 966µs    | 1ms      | 1ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7540.21  | 1575.60 | 10363.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5344.33 | 6628.71 | 7588.40 | 8647.30 | 9617.50 | 9924.53 | 10169.60 |
| **Latency** | 4ms     | 5ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms     |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11148.75 | 2459.74 | 13730.20 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7248.00 | 10678.56 | 12219.27 | 12635.53 | 12858.61 | 12952.53 | 13468.93 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 7ms      | 11ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 57261.04 | 6580.91 | 78610.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52000.55 | 53515.25 | 55713.89 | 60691.93 | 65201.93 | 69159.53 | 76515.85 |
| **Latency** | 642µs    | 775µs    | 891µs    | 978µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20151.98 | 3427.50 | 37727.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18355.61 | 18830.22 | 19381.89 | 20529.89 | 24172.67 | 26172.91 | 32217.70 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59089.50 | 6560.33 | 81105.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53410.24 | 54883.78 | 58180.38 | 62559.11 | 67611.82 | 71141.21 | 76305.72 |
| **Latency** | 620µs    | 735µs    | 866µs    | 956µs    | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54455.17 | 3835.00 | 76141.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52259.43 | 53052.10 | 53955.33 | 55167.33 | 58548.46 | 60512.69 | 66733.79 |
| **Latency** | 781µs    | 856µs    | 928µs    | 988µs    | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42563.89 | 4584.55 | 48957.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39373.42 | 41191.17 | 43820.37 | 44949.70 | 45955.64 | 46412.34 | 47261.18 |
| **Latency** | 863µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 79256.75 | 5585.99 | 94683.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72192.12 | 76138.79 | 79515.10 | 83013.10 | 85717.47 | 87440.57 | 90706.06 |
| **Latency** | 393µs    | 505µs    | 607µs    | 735µs    | 870µs    | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31518.29 | 4005.76 | 36862.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29584.85 | 31109.09 | 32297.66 | 33406.17 | 34216.08 | 34842.29 | 35799.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50643.98 | 2878.46 | 63711.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49411.06 | 50087.48 | 50800.35 | 51489.75 | 52341.92 | 53151.76 | 56578.07 |
| **Latency** | 869µs    | 914µs    | 993µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56556.36 | 4512.77 | 83137.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53170.72 | 54524.27 | 55737.04 | 57965.78 | 61634.41 | 63999.91 | 71173.14 |
| **Latency** | 724µs    | 824µs    | 896µs    | 959µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25402.65 | 2543.11 | 30218.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24431.14 | 25088.07 | 25703.96 | 26406.31 | 26985.41 | 27479.09 | 28369.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32742.84 | 3214.77 | 36200.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32229.96 | 33010.48 | 33330.85 | 33738.52 | 34225.08 | 34403.69 | 34788.99 |
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
| 43300.74 | 2095.58 | 46005.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42524.64 | 43129.35 | 43517.29 | 44080.92 | 44422.36 | 44613.07 | 45111.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40794.10 | 4445.42 | 47463.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38010.41 | 39292.85 | 41982.70 | 43225.67 | 44038.22 | 44528.11 | 45432.75 |
| **Latency** | 887µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 77075.18 | 4795.36 | 89730.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 71156.97 | 73997.03 | 77358.07 | 80461.33 | 82902.63 | 84276.43 | 87056.90 |
| **Latency** | 400µs    | 518µs    | 627µs    | 749µs    | 908µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6535.45  | 2101.42 | 15773.31 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4801.68 | 5640.05 | 6613.35 | 7662.12 | 8682.54 | 9422.07 | 11322.48 |
| **Latency** | 5ms     | 6ms     | 7ms     | 8ms     | 9ms     | 12ms    | 15ms     |

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
| 56546.83 | 4668.98 | 80373.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53301.69 | 54534.60 | 55921.81 | 58116.15 | 61863.47 | 64405.13 | 70518.84 |
| **Latency** | 723µs    | 821µs    | 894µs    | 959µs    | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2026-04-11T03:03:41.476Z</p>
