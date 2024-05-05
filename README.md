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
| Bun                                                                                  | 80401.06 | 9928.84  | 102319.17 | 100%     |
| Stric                                                                                | 79945.15 | 9984.05  | 104531.19 | 99%      |
| Hyper Express                                                                        | 79465.05 | 16074.82 | 101060.99 | 99%      |
| Elysia                                                                               | 76477.17 | 14436.89 | 102021.84 | 95%      |
| Vixeny (Bun)                                                                         | 75430.21 | 13441.94 | 100313.16 | 94%      |
| Deno                                                                                 | 65130.38 | 11679.63 | 89531.95  | 81%      |
| Vixeny (Deno)                                                                        | 54019.72 | 7308.64  | 80758.64  | 67%      |
| Hono                                                                                 | 52254.46 | 6304.73  | 80087.95  | 65%      |
| NHttp                                                                                | 51183.18 | 5433.87  | 83271.56  | 64%      |
| Fast                                                                                 | 51082.51 | 4726.80  | 75101.73  | 64%      |
| Fastro                                                                               | 49573.60 | 2647.91  | 71857.77  | 62%      |
| Deso                                                                                 | 46401.69 | 2978.38  | 60327.37  | 58%      |
| Megalo                                                                               | 46096.04 | 2291.55  | 54417.43  | 57%      |
| Alosaur                                                                              | 45175.81 | 2990.23  | 58644.51  | 56%      |
| http                                                                                 | 43876.37 | 4934.06  | 53760.24  | 55%      |
| Cheetah                                                                              | 42195.84 | 2608.45  | 50490.44  | 52%      |
| Router                                                                               | 41241.38 | 4256.73  | 46781.79  | 51%      |
| Reno                                                                                 | 41117.40 | 2336.71  | 45906.01  | 51%      |
| Danet V2 (Hono)                                                                      | 35337.07 | 2429.65  | 40715.37  | 44%      |
| Aqua                                                                                 | 33708.50 | 3541.42  | 39496.35  | 42%      |
| Danet (Oak)                                                                          | 33514.74 | 2243.74  | 35932.81  | 42%      |
| Oak                                                                                  | 32804.85 | 3238.14  | 37010.03  | 41%      |
| Little                                                                               | 31513.55 | 4248.33  | 36983.74  | 39%      |
| Dinatra                                                                              | 17592.40 | 2512.74  | 29706.52  | 22%      |
| Node                                                                                 | 16688.00 | 1417.73  | 18405.16  | 21%      |
| Fastify                                                                              | 15967.84 | 1608.56  | 19597.95  | 20%      |
| Abc                                                                                  | 15062.08 | 2070.99  | 28778.47  | 19%      |
| Opine                                                                                | 15023.17 | 2631.89  | 20237.41  | 19%      |
| Express (Deno)                                                                       | 12230.31 | 2171.87  | 14171.74  | 15%      |
| Express                                                                              | 6274.20  | 1015.49  | 8033.39   | 8%       |
| Servest                                                                              | 6256.16  | 1543.21  | 10950.56  | 8%       |
| Acorn                                                                                | 3695.59  | 2556.47  | 17264.00  | 5%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-580224c0-1b8a-44ab-bc7a-1a2e9e5f1b7f) |          |          |           |          |

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
| 15062.08 | 2070.99 | 28778.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13377.15 | 14432.52 | 15106.21 | 15819.28 | 16336.35 | 16738.99 | 24055.66 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3695.59  | 2556.47 | 17264.00 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1909.54 | 2445.98 | 2950.63 | 3921.06 | 5280.32 | 7108.64 | 15629.25 |
| **Latency** | 3ms     | 8ms     | 13ms    | 17ms    | 21ms    | 24ms    | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45175.81 | 2990.23 | 58644.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43032.16 | 44187.00 | 45158.87 | 46157.93 | 47620.87 | 49624.77 | 53711.98 |
| **Latency** | 961µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33708.50 | 3541.42 | 39496.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31555.82 | 32946.31 | 34411.13 | 35472.54 | 36319.34 | 36978.05 | 38007.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 80401.06 | 9928.84 | 102319.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 67548.79 | 72240.38 | 80116.55 | 88436.15 | 94103.49 | 97046.05 | 100089.55 |
| **Latency** | 370µs    | 460µs    | 582µs    | 735µs    | 929µs    | 1ms      | 1ms       |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42195.84 | 2608.45 | 50490.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40227.33 | 41807.42 | 42422.72 | 43190.37 | 44138.98 | 44915.88 | 46354.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33514.74 | 2243.74 | 35932.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32984.38 | 33332.22 | 33856.32 | 34306.08 | 34616.29 | 34833.03 | 35120.75 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet V2 (Hono)](#danet-v2-hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35337.07 | 2429.65 | 40715.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34607.22 | 35397.27 | 35711.16 | 36210.13 | 36517.95 | 36674.84 | 37041.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65130.38 | 11679.63 | 89531.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52738.96 | 54283.64 | 62703.68 | 75467.35 | 82544.03 | 85373.33 | 87969.56 |
| **Latency** | 527µs    | 578µs    | 781µs    | 933µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46401.69 | 2978.38 | 60327.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44048.06 | 45089.66 | 46056.81 | 47785.12 | 49565.94 | 51170.66 | 54028.55 |
| **Latency** | 966µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17592.40 | 2512.74 | 29706.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15525.58 | 16831.52 | 18043.24 | 19027.62 | 19589.91 | 19981.26 | 21123.29 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Elysia](#elysia)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 76477.17 | 14436.89 | 102021.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 58520.92 | 62439.79 | 76169.37 | 90216.37 | 95737.60 | 97608.00 | 100220.08 |
| **Latency** | 380µs    | 468µs    | 597µs    | 801µs    | 975µs    | 1ms      | 1ms       |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6274.20  | 1015.49 | 8033.39 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4839.63 | 5922.74 | 6433.67 | 6709.39 | 7685.38 | 7869.28 | 7968.35 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 11ms    | 14ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12230.31 | 2171.87 | 14171.74 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8599.33 | 12409.17 | 12993.53 | 13353.95 | 13464.98 | 13522.90 | 13888.85 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 4ms      | 5ms      | 9ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51082.51 | 4726.80 | 75101.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48213.42 | 49153.61 | 50077.46 | 51030.39 | 55342.80 | 61635.06 | 69740.97 |
| **Latency** | 827µs    | 913µs    | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15967.84 | 1608.56 | 19597.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15428.06 | 15801.60 | 16277.36 | 16607.82 | 16860.69 | 17008.49 | 17498.62 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49573.60 | 2647.91 | 71857.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47915.79 | 48727.86 | 49561.72 | 50247.36 | 51104.82 | 51971.95 | 59404.19 |
| **Latency** | 880µs    | 935µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52254.46 | 6304.73 | 80087.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47577.02 | 48630.08 | 49958.00 | 55066.42 | 61606.30 | 65602.50 | 71573.89 |
| **Latency** | 647µs    | 889µs    | 987µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43876.37 | 4934.06 | 53760.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39599.04 | 42706.91 | 45144.30 | 46418.72 | 47601.29 | 48396.54 | 50376.61 |
| **Latency** | 840µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 79465.05 | 16074.82 | 101060.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 56679.49 | 62558.14 | 84099.14 | 94036.36 | 97030.72 | 98745.99 | 100156.27 |
| **Latency** | 368µs    | 459µs    | 574µs    | 756µs    | 951µs    | 1ms      | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31513.55 | 4248.33 | 36983.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29115.50 | 31093.61 | 32479.37 | 33588.78 | 34521.48 | 35069.05 | 36036.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46096.04 | 2291.55 | 54417.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44721.89 | 45437.79 | 46275.66 | 46943.46 | 47602.12 | 48394.91 | 50409.33 |
| **Latency** | 949µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51183.18 | 5433.87 | 83271.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48164.20 | 49033.44 | 50068.09 | 51098.53 | 54950.77 | 62604.23 | 75698.36 |
| **Latency** | 810µs    | 908µs    | 994µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16688.00 | 1417.73 | 18405.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16247.59 | 16594.79 | 16889.51 | 17188.77 | 17472.06 | 17671.00 | 18120.58 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32804.85 | 3238.14 | 37010.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32237.32 | 32926.90 | 33339.57 | 33900.68 | 34296.15 | 34450.36 | 34919.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15023.17 | 2631.89 | 20237.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12510.40 | 14584.55 | 15598.97 | 16164.89 | 17016.09 | 18316.04 | 19655.39 |
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
| 41117.40 | 2336.71 | 45906.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39197.39 | 40822.68 | 41403.28 | 42108.62 | 42956.10 | 43487.73 | 44318.74 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41241.38 | 4256.73 | 46781.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38502.62 | 40235.36 | 42311.59 | 43430.23 | 44211.20 | 44810.04 | 45714.87 |
| **Latency** | 881µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Stric](#stric)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 79945.15 | 9984.05 | 104531.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 66939.90 | 71701.52 | 79135.62 | 87783.32 | 94025.56 | 96769.27 | 100437.09 |
| **Latency** | 372µs    | 463µs    | 586µs    | 741µs    | 933µs    | 1ms      | 1ms       |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6256.16  | 1543.21 | 10950.56 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4933.81 | 5639.30 | 6367.53 | 7021.10 | 7943.72 | 8524.56 | 9139.81 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 15ms    |

### [Vixeny (Bun)](#vixeny-bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 75430.21 | 13441.94 | 100313.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58220.31 | 62663.15 | 74951.12 | 88310.33 | 93491.42 | 95449.21 | 98297.78 |
| **Latency** | 385µs    | 475µs    | 605µs    | 812µs    | 989µs    | 1ms      | 1ms      |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54019.72 | 7308.64 | 80758.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48730.49 | 49691.27 | 50995.91 | 56876.40 | 65551.20 | 70141.91 | 76703.93 |
| **Latency** | 613µs    | 854µs    | 960µs    | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2024-05-05T01:33:28.518Z</p>
