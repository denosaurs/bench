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
  - [Alosaur](#alosaur)
  - [Aqua](#aqua)
  - [Bun](#bun)
  - [Deno](#deno)
  - [Dinatra](#dinatra)
  - [Drash](#drash)
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
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Deno](#deno-1)
    - [Dinatra](#dinatra-1)
    - [Drash](#drash-1)
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

| Framework | Mean     | Stddev  | Max      | Relative |
| --------- | -------- | ------- | -------- | -------- |
| Bun       | 79712.21 | 8223.87 | 95781.46 | 100%     |
| Deno      | 51302.58 | 7393.63 | 56221.70 | 64%      |
| http      | 47301.80 | 6468.25 | 51522.23 | 59%      |
| Hono      | 46160.46 | 7011.14 | 50818.55 | 58%      |
| Node      | 45792.43 | 6770.95 | 48613.16 | 57%      |
| Fast      | 45343.33 | 6993.25 | 50518.73 | 57%      |
| Fastify   | 39966.83 | 6551.46 | 55435.73 | 50%      |
| Alosaur   | 37520.41 | 6134.05 | 42216.17 | 47%      |
| Reno      | 35287.01 | 4706.79 | 39151.60 | 44%      |
| Router    | 32010.53 | 3618.78 | 35216.21 | 40%      |
| Oak       | 27020.28 | 4120.30 | 35207.06 | 34%      |
| Aqua      | 24262.36 | 2640.85 | 27314.03 | 30%      |
| Abc       | 17288.00 | 3437.75 | 22729.88 | 22%      |
| Little    | 15898.43 | 1770.97 | 19413.19 | 20%      |
| Dinatra   | 12877.36 | 2121.89 | 15500.14 | 16%      |
| Opine     | 10423.98 | 1353.93 | 13076.24 | 13%      |
| Express   | 8326.05  | 1478.39 | 9687.09  | 10%      |
| Servest   | 6354.29  | 1761.76 | 11080.36 | 8%       |
| Drash     | 0.00     | 0.00    | 0.00     | 0%       |

# Frameworks

## [Abc](https://deno.land/x/abc)

A better Deno framework to create web application

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

## [Drash](https://deno.land/x/drash)

A REST microframework for Deno's HTTP server with zero dependencies.

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
| 17288.00 | 3437.75 | 22729.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11261.02 | 16520.50 | 18633.92 | 19435.78 | 20409.71 | 20680.24 | 21100.64 |
| **Latency** | 2µs      | 2µs      | 2µs      | 2µs      | 4µs      | 4µs      | 5µs      |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37520.41 | 6134.05 | 42216.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28651.88 | 39183.56 | 39936.29 | 40328.75 | 40709.77 | 41012.43 | 41473.98 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 3µs      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24262.36 | 2640.85 | 27314.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22013.44 | 22944.99 | 25318.56 | 25483.09 | 25718.43 | 26131.87 | 26810.49 |
| **Latency** | 1µs      | 1µs      | 1µs      | 2µs      | 2µs      | 2µs      | 3µs      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 79712.21 | 8223.87 | 95781.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74538.81 | 79106.39 | 80621.82 | 82114.84 | 84809.40 | 92037.80 | 94860.78 |
| **Latency** | 424ns    | 499ns    | 657ns    | 691ns    | 715ns    | 759ns    | 1µs      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51302.58 | 7393.63 | 56221.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39652.37 | 53338.44 | 54028.67 | 54507.12 | 54894.92 | 55065.02 | 55417.94 |
| **Latency** | 808ns    | 853ns    | 941ns    | 994ns    | 1µs      | 1µs      | 3µs      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12877.36 | 2121.89 | 15500.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10257.55 | 12446.81 | 13756.27 | 14046.64 | 14161.04 | 14202.28 | 14409.23 |
| **Latency** | 3µs      | 3µs      | 3µs      | 3µs      | 4µs      | 6µs      | 6µs      |

### [Drash](#drash)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 8326.05  | 1478.39 | 9687.09 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6210.56 | 8310.23 | 9034.26 | 9173.41 | 9252.93 | 9284.78 | 9318.94 |
| **Latency** | 5µs     | 5µs     | 5µs     | 5µs     | 7µs     | 8µs     | 12µs    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45343.33 | 6993.25 | 50518.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36800.59 | 47224.12 | 47913.93 | 48362.22 | 48748.59 | 48992.89 | 49417.58 |
| **Latency** | 906ns    | 952ns    | 1µs      | 1µs      | 1µs      | 1µs      | 3µs      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39966.83 | 6551.46 | 55435.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39844.18 | 40945.47 | 41458.82 | 42029.37 | 42407.16 | 42545.90 | 42766.74 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 2µs      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46160.46 | 7011.14 | 50818.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37043.12 | 48086.58 | 48907.85 | 49353.82 | 49759.81 | 49985.92 | 50334.59 |
| **Latency** | 886ns    | 934ns    | 1µs      | 1µs      | 1µs      | 1µs      | 3µs      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47301.80 | 6468.25 | 51522.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37724.86 | 49071.18 | 49638.57 | 50065.38 | 50404.38 | 50647.42 | 51075.65 |
| **Latency** | 876ns    | 922ns    | 1µs      | 1µs      | 1µs      | 1µs      | 3µs      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15898.43 | 1770.97 | 19413.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14278.40 | 16187.42 | 16501.17 | 16598.77 | 16727.61 | 16966.18 | 17873.11 |
| **Latency** | 2µs      | 3µs      | 3µs      | 3µs      | 3µs      | 4µs      | 5µs      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45792.43 | 6770.95 | 48613.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45712.83 | 46771.59 | 47196.79 | 47929.75 | 48178.56 | 48275.83 | 48452.36 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 2µs      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27020.28 | 4120.30 | 35207.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24146.96 | 26977.79 | 28317.01 | 28910.52 | 29645.35 | 29933.28 | 30220.94 |
| **Latency** | 1µs      | 1µs      | 1µs      | 2µs      | 2µs      | 2µs      | 3µs      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10423.98 | 1353.93 | 13076.24 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9576.98 | 10111.24 | 10838.02 | 10906.49 | 10976.96 | 11540.87 | 12393.47 |
| **Latency** | 3µs     | 3µs      | 4µs      | 5µs      | 5µs      | 6µs      | 7µs      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35287.01 | 4706.79 | 39151.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29655.25 | 36432.03 | 37050.44 | 37263.91 | 37600.76 | 37888.30 | 38367.64 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 3µs      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32010.53 | 3618.78 | 35216.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28133.40 | 32417.52 | 33414.18 | 33622.31 | 34018.85 | 34405.66 | 34888.26 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 3µs      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6354.29  | 1761.76 | 11080.36 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 3908.72 | 5835.07 | 6673.08 | 7276.37 | 8020.76 | 8550.62 | 10757.43 |
| **Latency** | 6µs     | 6µs     | 7µs     | 7µs     | 10µs    | 11µs    | 17µs     |

---

<p align="center">Generated 2022-09-06T23:13:39.883Z</p>
