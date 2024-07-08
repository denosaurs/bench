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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Bun                                                                                  | 79308.38 | 9774.91  | 98411.00  | 100%     |
| Hyper Express                                                                        | 79013.96 | 15830.43 | 98729.70  | 100%     |
| Stric                                                                                | 77187.58 | 9638.17  | 98897.49  | 97%      |
| Vixeny (Bun)                                                                         | 75691.09 | 13934.50 | 99241.01  | 95%      |
| Elysia                                                                               | 74678.46 | 12587.29 | 100269.46 | 94%      |
| Deno                                                                                 | 66113.13 | 11898.89 | 90301.33  | 83%      |
| Vixeny (Deno)                                                                        | 56633.66 | 9541.27  | 85232.45  | 71%      |
| NHttp                                                                                | 53401.79 | 7212.50  | 85313.08  | 67%      |
| Fast                                                                                 | 52438.10 | 6981.79  | 84298.10  | 66%      |
| Hono                                                                                 | 52314.00 | 7782.47  | 81910.01  | 66%      |
| Fastro                                                                               | 51501.74 | 5160.39  | 78135.07  | 65%      |
| Megalo                                                                               | 48347.59 | 3547.34  | 68624.39  | 61%      |
| Deso                                                                                 | 46464.63 | 2831.10  | 64884.80  | 59%      |
| Alosaur                                                                              | 46075.78 | 2937.40  | 56611.45  | 58%      |
| http                                                                                 | 43465.73 | 3611.73  | 51029.43  | 55%      |
| Router                                                                               | 43061.34 | 3312.01  | 51101.55  | 54%      |
| Cheetah                                                                              | 42122.82 | 2526.58  | 50028.11  | 53%      |
| Reno                                                                                 | 41227.06 | 2368.30  | 59016.00  | 52%      |
| Danet V2 (Hono)                                                                      | 36427.21 | 2285.05  | 42810.39  | 46%      |
| Danet (Oak)                                                                          | 34648.13 | 2247.85  | 38413.19  | 44%      |
| Aqua                                                                                 | 33959.34 | 2996.00  | 39074.74  | 43%      |
| Little                                                                               | 33365.20 | 3678.84  | 38703.23  | 42%      |
| Oak                                                                                  | 32366.19 | 2799.26  | 37457.00  | 41%      |
| Acorn                                                                                | 30198.04 | 2300.03  | 32621.78  | 38%      |
| Node                                                                                 | 17337.53 | 1516.36  | 19720.83  | 22%      |
| Dinatra                                                                              | 16894.95 | 1718.85  | 22515.54  | 21%      |
| Fastify                                                                              | 15729.36 | 1613.70  | 22610.66  | 20%      |
| Opine                                                                                | 15229.79 | 2230.50  | 20185.78  | 19%      |
| Express (Deno)                                                                       | 14548.46 | 2250.60  | 16447.48  | 18%      |
| Abc                                                                                  | 13729.11 | 1290.79  | 20509.41  | 17%      |
| Servest                                                                              | 7024.84  | 1303.60  | 9535.89   | 9%       |
| Express                                                                              | 6198.89  | 976.63   | 7936.81   | 8%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-31239ab6-9b31-4856-a03a-e790479ddb2b) |          |          |           |          |

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
| 13729.11 | 1290.79 | 20509.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12434.49 | 13122.70 | 13839.25 | 14550.41 | 15020.19 | 15247.28 | 15810.42 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30198.04 | 2300.03 | 32621.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28780.05 | 29500.30 | 30907.39 | 31270.91 | 31559.32 | 31811.92 | 32137.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46075.78 | 2937.40 | 56611.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43851.53 | 45109.02 | 46012.01 | 47432.81 | 49087.64 | 50293.31 | 52755.72 |
| **Latency** | 940µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33959.34 | 2996.00 | 39074.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32279.78 | 33071.29 | 34342.35 | 35482.23 | 36225.04 | 36984.27 | 38162.01 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 79308.38 | 9774.91 | 98411.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65615.58 | 71352.51 | 80842.92 | 86722.18 | 90740.62 | 91696.69 | 95942.84 |
| **Latency** | 388µs    | 451µs    | 562µs    | 772µs    | 940µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42122.82 | 2526.58 | 50028.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40381.62 | 41507.28 | 42260.99 | 43101.37 | 44134.22 | 44726.26 | 46518.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34648.13 | 2247.85 | 38413.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34210.02 | 34517.89 | 34983.51 | 35358.86 | 35656.22 | 35840.44 | 36270.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36427.21 | 2285.05 | 42810.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35733.02 | 36421.75 | 36691.75 | 37074.46 | 37473.88 | 37636.44 | 38044.42 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66113.13 | 11898.89 | 90301.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53606.37 | 55060.43 | 63881.61 | 77171.80 | 83120.23 | 85908.62 | 89019.95 |
| **Latency** | 517µs    | 571µs    | 759µs    | 921µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46464.63 | 2831.10 | 64884.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44625.78 | 45417.62 | 46188.54 | 46992.23 | 48866.73 | 51161.14 | 55467.86 |
| **Latency** | 986µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16894.95 | 1718.85 | 22515.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15311.19 | 16105.79 | 17097.40 | 17928.20 | 18661.57 | 18983.36 | 19803.27 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 74678.46 | 12587.29 | 100269.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58408.62 | 62853.48 | 75028.41 | 85841.74 | 91599.03 | 93941.54 | 97016.10 |
| **Latency** | 389µs    | 482µs    | 612µs    | 815µs    | 999µs    | 1ms      | 1ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6198.89  | 976.63 | 7936.81 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4812.68 | 5838.71 | 6306.92 | 6649.29 | 7561.78 | 7729.25 | 7845.43 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14548.46 | 2250.60 | 16447.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12711.66 | 14635.87 | 15314.29 | 15702.15 | 15821.07 | 15908.39 | 16116.14 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52438.10 | 6981.79 | 84298.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48472.52 | 49393.42 | 50329.29 | 51500.81 | 62378.93 | 69977.99 | 79442.54 |
| **Latency** | 658µs    | 892µs    | 982µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15729.36 | 1613.70 | 22610.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15213.68 | 15709.71 | 16015.38 | 16303.02 | 16562.60 | 16721.78 | 17148.91 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51501.74 | 5160.39 | 78135.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48034.54 | 48943.12 | 50025.95 | 52100.33 | 58454.41 | 62668.69 | 69182.69 |
| **Latency** | 746µs    | 906µs    | 992µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52314.00 | 7782.47 | 81910.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47549.35 | 48460.40 | 49524.85 | 51559.07 | 64859.71 | 70859.79 | 77869.59 |
| **Latency** | 623µs    | 891µs    | 991µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43465.73 | 3611.73 | 51029.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40232.35 | 42117.54 | 44062.38 | 45417.06 | 46578.00 | 47402.09 | 49421.34 |
| **Latency** | 865µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 79013.96 | 15830.43 | 98729.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 56037.27 | 62252.44 | 84826.00 | 93112.35 | 96061.01 | 97263.79 | 98049.86 |
| **Latency** | 357µs    | 464µs    | 585µs    | 753µs    | 960µs    | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33365.20 | 3678.84 | 38703.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31218.95 | 32865.62 | 34161.86 | 35250.88 | 36006.92 | 36421.13 | 37508.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48347.59 | 3547.34 | 68624.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46005.39 | 46790.19 | 47695.90 | 48862.21 | 52343.76 | 55019.64 | 59811.85 |
| **Latency** | 890µs    | 964µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53401.79 | 7212.50 | 85313.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49444.50 | 50306.13 | 51160.65 | 52397.62 | 63364.69 | 71285.89 | 82161.39 |
| **Latency** | 646µs    | 875µs    | 964µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17337.53 | 1516.36 | 19720.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17015.19 | 17263.90 | 17525.05 | 17840.30 | 18142.30 | 18338.98 | 18866.16 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32366.19 | 2799.26 | 37457.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32048.28 | 32381.37 | 32945.74 | 33314.82 | 33587.76 | 33757.67 | 34093.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15229.79 | 2230.50 | 20185.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12914.45 | 15040.97 | 15622.59 | 16149.87 | 16812.60 | 18275.74 | 19662.55 |
| **Latency** | 1ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      |

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
| 41227.06 | 2368.30 | 59016.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39302.87 | 40712.18 | 41502.33 | 42214.96 | 43134.04 | 43555.70 | 44980.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43061.34 | 3312.01 | 51101.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40504.91 | 41951.04 | 43613.27 | 44836.21 | 45881.76 | 46311.05 | 47046.87 |
| **Latency** | 860µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 77187.58 | 9638.17 | 98897.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64967.89 | 69522.76 | 76118.11 | 84417.45 | 91071.49 | 93303.04 | 97768.21 |
| **Latency** | 382µs    | 478µs    | 607µs    | 768µs    | 967µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7024.84  | 1303.60 | 9535.89 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5561.76 | 6365.33 | 7302.60 | 7710.42 | 8575.20 | 8879.31 | 9274.95 |
| **Latency** | 5ms     | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 12ms    |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 75691.09 | 13934.50 | 99241.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57080.19 | 61957.84 | 76965.98 | 88749.30 | 93156.38 | 95734.89 | 97876.61 |
| **Latency** | 385µs    | 474µs    | 600µs    | 812µs    | 981µs    | 1ms      | 1ms      |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56633.66 | 9541.27 | 85232.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49704.02 | 50656.96 | 51845.00 | 61190.27 | 72313.38 | 78159.90 | 83627.84 |
| **Latency** | 579µs    | 719µs    | 929µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-07-08T01:46:06.250Z</p>
