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
  - [Deno](#deno)
  - [Dinatra](#dinatra)
  - [Express](#express)
  - [Fast](#fast)
  - [Fastify](#fastify)
  - [Hono](#hono)
  - [http](#http)
  - [Little](#little)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
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
    - [Deno](#deno-1)
    - [Dinatra](#dinatra-1)
    - [Express](#express-1)
    - [Fast](#fast-1)
    - [Fastify](#fastify-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Little](#little-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework | Mean     | Stddev  | Max       | Relative |
| --------- | -------- | ------- | --------- | -------- |
| Bun       | 79809.02 | 7320.89 | 92449.12  | 100%     |
| Deno      | 69007.62 | 5681.12 | 77137.53  | 86%      |
| Fast      | 67296.23 | 6499.35 | 73115.63  | 84%      |
| Hono      | 59565.49 | 5898.33 | 67803.86  | 75%      |
| http      | 46499.76 | 8081.98 | 58768.76  | 58%      |
| Node      | 46254.94 | 6889.81 | 49268.84  | 58%      |
| Fastify   | 39882.94 | 6775.08 | 43008.04  | 50%      |
| Alosaur   | 38038.41 | 6897.33 | 43557.66  | 48%      |
| Reno      | 36012.58 | 3059.23 | 50382.52  | 45%      |
| Router    | 32494.97 | 4517.16 | 37272.90  | 41%      |
| Little    | 30738.25 | 4095.16 | 35401.92  | 39%      |
| Oak       | 26881.80 | 5721.28 | 158730.16 | 34%      |
| Aqua      | 24388.99 | 3058.99 | 27621.53  | 31%      |
| Abc       | 18256.48 | 2370.32 | 21880.64  | 23%      |
| Dinatra   | 15626.20 | 3305.98 | 20643.35  | 20%      |
| Opine     | 10435.84 | 4547.80 | 152091.25 | 13%      |
| Express   | 8259.93  | 1658.66 | 11331.24  | 10%      |
| Servest   | 6324.10  | 1709.86 | 10256.60  | 8%       |
| Acorn     | 4607.13  | 4624.12 | 87474.80  | 6%       |

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

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

## [Express](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js

## [Fast](https://deno.land/x/fast)

Small web framework with near-native performance.

## [Fastify](https://www.fastify.io/)

Fast and low overhead web framework, for Node.js

## [Hono](https://github.com/honojs/hono)

Ultrafast web framework for Cloudflare Workers and Deno. Fast, but not only
fast.

## [http](https://deno.land/std/http)

The deno standard library http server

## [Little](https://deno.land/x/little)

A minimalistic connect-like web framework. Automatically works out of the box
with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.

## [Node](https://nodejs.org/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## [Oak](https://deno.land/x/oak)

A middleware framework for Deno's native HTTP server, Deno Deploy and Node.js
16.5 and later. It also includes a middleware router.

## [Opine](https://deno.land/x/opine)

Fast, minimalist web framework for Deno ported from ExpressJS.

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
| 18256.48 | 2370.32 | 21880.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15620.86 | 17342.25 | 19312.68 | 19613.04 | 19934.49 | 20192.58 | 21186.12 |
| **Latency** | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4607.13  | 4624.12 | 87474.80 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 2202.26 | 2797.60 | 3467.89 | 5104.80 | 10101.98 | 12424.61 | 14815.06 |
| **Latency** | 3ms     | 4ms     | 11ms    | 17ms    | 19ms     | 20ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38038.41 | 6897.33 | 43557.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29212.16 | 38137.55 | 41096.69 | 41601.92 | 42015.82 | 42262.43 | 42712.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24388.99 | 3058.99 | 27621.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22427.61 | 23502.03 | 25529.05 | 25874.03 | 26374.80 | 26852.40 | 27406.05 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 79809.02 | 7320.89 | 92449.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 75285.03 | 79737.18 | 81513.56 | 82610.43 | 84035.25 | 85454.60 | 87808.46 |
| **Latency** | 426µs    | 494µs    | 655µs    | 683µs    | 705µs    | 760µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69007.62 | 5681.12 | 77137.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 65250.69 | 68812.83 | 70505.39 | 71318.29 | 72044.10 | 72445.99 | 73335.98 |
| **Latency** | 538µs    | 599µs    | 744µs    | 790µs    | 825µs    | 864µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15626.20 | 3305.98 | 20643.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12464.40 | 14848.36 | 17042.21 | 17209.58 | 17406.73 | 17940.84 | 18473.78 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8259.93  | 1658.66 | 11331.24 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5840.70 | 7819.29 | 9108.08 | 9243.98 | 9323.47 | 9350.93 | 9380.46 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67296.23 | 6499.35 | 73115.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63225.12 | 67318.67 | 69098.02 | 69853.67 | 70382.86 | 70670.81 | 71067.33 |
| **Latency** | 563µs    | 629µs    | 746µs    | 805µs    | 830µs    | 858µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39882.94 | 6775.08 | 43008.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39943.41 | 40934.96 | 41565.96 | 42101.76 | 42427.45 | 42570.11 | 42752.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59565.49 | 5898.33 | 67803.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58387.44 | 59651.93 | 60810.19 | 61335.36 | 61760.33 | 62099.79 | 63406.82 |
| **Latency** | 764µs    | 788µs    | 813µs    | 837µs    | 870µs    | 905µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46499.76 | 8081.98 | 58768.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36258.71 | 48377.84 | 49927.64 | 50393.40 | 50874.18 | 51110.59 | 51507.11 |
| **Latency** | 868µs    | 917µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30738.25 | 4095.16 | 35401.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28219.67 | 29569.75 | 32409.95 | 32949.33 | 33222.53 | 33538.14 | 34024.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46254.94 | 6889.81 | 49268.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46310.98 | 47303.47 | 47718.95 | 48315.33 | 48557.17 | 48649.00 | 48892.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 26881.80 | 5721.28 | 158730.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23848.58 | 26178.99 | 28170.73 | 28673.40 | 29480.08 | 29786.23 | 30120.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 10435.84 | 4547.80 | 152091.25 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9202.74 | 9873.76 | 10656.41 | 10767.88 | 11314.05 | 11859.91 | 12740.24 |
| **Latency** | 3ms     | 3ms     | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36012.58 | 3059.23 | 50382.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35756.42 | 36072.43 | 36379.96 | 36636.55 | 36849.66 | 36952.76 | 42843.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32494.97 | 4517.16 | 37272.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28942.19 | 31386.97 | 34437.10 | 34751.70 | 35105.88 | 35443.36 | 35822.12 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6324.10  | 1709.86 | 10256.60 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4129.22 | 5945.05 | 6848.61 | 7329.04 | 7619.48 | 7940.08 | 9409.22 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 12ms    | 16ms    |

---

<p align="center">Generated 2022-09-13T02:53:26.906Z</p>
