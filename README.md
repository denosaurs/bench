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

| Framework | Mean     | Stddev  | Max      | Relative |
| --------- | -------- | ------- | -------- | -------- |
| Bun       | 69311.59 | 7707.46 | 90656.82 | 100%     |
| Deno      | 60049.39 | 6982.11 | 76366.00 | 87%      |
| Fast      | 56875.22 | 6167.06 | 66244.82 | 82%      |
| Hono      | 51788.49 | 6350.35 | 65047.05 | 75%      |
| http      | 37670.83 | 7090.35 | 48142.80 | 54%      |
| Node      | 35283.53 | 5830.32 | 48612.65 | 51%      |
| Alosaur   | 31165.83 | 6639.27 | 46882.71 | 45%      |
| Fastify   | 30235.54 | 6556.91 | 39331.10 | 44%      |
| Reno      | 29048.30 | 2957.01 | 38390.63 | 42%      |
| Router    | 27344.63 | 4045.42 | 34240.74 | 39%      |
| Little    | 24029.72 | 3690.64 | 34894.64 | 35%      |
| Oak       | 22362.31 | 3791.11 | 30026.61 | 32%      |
| Aqua      | 21364.53 | 3120.62 | 27148.05 | 31%      |
| Abc       | 13226.50 | 3137.29 | 20352.01 | 19%      |
| Dinatra   | 12509.12 | 2835.53 | 17228.26 | 18%      |
| Opine     | 8965.31  | 1435.09 | 26211.82 | 13%      |
| Express   | 6140.43  | 1403.63 | 10921.44 | 9%       |
| Servest   | 5000.56  | 1454.55 | 9802.07  | 7%       |
| Acorn     | 3972.41  | 3975.57 | 63725.60 | 6%       |

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
| 13226.50 | 3137.29 | 20352.01 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8225.78 | 11306.34 | 13447.89 | 15363.31 | 17276.99 | 18171.68 | 19171.78 |
| **Latency** | 2ms     | 2ms      | 3ms      | 4ms      | 5ms      | 6ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3972.41  | 3975.57 | 63725.60 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1820.33 | 2355.09 | 2925.97 | 4201.20 | 7901.15 | 9863.66 | 12038.54 |
| **Latency** | 4ms     | 6ms     | 13ms    | 19ms    | 22ms    | 24ms    | 27ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31165.83 | 6639.27 | 46882.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20807.92 | 31460.75 | 33064.84 | 34563.28 | 36420.06 | 37500.62 | 39222.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21364.53 | 3120.62 | 27148.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18328.39 | 20534.53 | 22068.95 | 23040.09 | 24184.92 | 24926.56 | 26094.50 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69311.59 | 7707.46 | 90656.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61458.43 | 67084.58 | 69609.10 | 73266.75 | 77422.51 | 79902.76 | 85843.05 |
| **Latency** | 473µs    | 569µs    | 718µs    | 816µs    | 870µs    | 938µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60049.39 | 6982.11 | 76366.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53885.41 | 57929.68 | 60592.17 | 63661.71 | 66590.41 | 69117.34 | 71810.86 |
| **Latency** | 587µs    | 687µs    | 829µs    | 928µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12509.12 | 2835.53 | 17228.26 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8359.44 | 12250.73 | 13378.54 | 14068.81 | 14849.63 | 15292.69 | 16365.64 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 5ms      | 7ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6140.43  | 1403.63 | 10921.44 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3951.21 | 6201.93 | 6646.06 | 6900.72 | 7169.70 | 7312.18 | 7854.52 |
| **Latency** | 6ms     | 7ms     | 7ms     | 7ms     | 10ms    | 12ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56875.22 | 6167.06 | 66244.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52673.78 | 55839.69 | 57925.53 | 59810.95 | 61428.92 | 62532.11 | 64096.11 |
| **Latency** | 657µs    | 750µs    | 868µs    | 957µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30235.54 | 6556.91 | 39331.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25205.31 | 30215.13 | 31649.08 | 33398.55 | 34940.56 | 35789.14 | 37218.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51788.49 | 6350.35 | 65047.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48031.25 | 49951.48 | 52227.47 | 54935.20 | 57211.48 | 58461.96 | 60914.56 |
| **Latency** | 766µs    | 863µs    | 953µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37670.83 | 7090.35 | 48142.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25103.53 | 39327.56 | 40451.73 | 40961.42 | 41646.30 | 42181.59 | 43567.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24029.72 | 3690.64 | 34894.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20404.83 | 23137.04 | 25258.73 | 26082.62 | 26766.36 | 27109.24 | 28241.35 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35283.53 | 5830.32 | 48612.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33709.13 | 34918.19 | 35971.97 | 37543.20 | 39319.30 | 40366.64 | 43021.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22362.31 | 3791.11 | 30026.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18143.11 | 22218.24 | 23010.87 | 24235.99 | 25564.21 | 26404.78 | 28512.56 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8965.31  | 1435.09 | 26211.82 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7663.09 | 8564.36 | 9077.31 | 9601.64 | 10067.29 | 10543.30 | 11948.57 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 6ms      | 7ms      | 9ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29048.30 | 2957.01 | 38390.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27516.97 | 28047.56 | 28859.77 | 30366.53 | 31929.72 | 32942.19 | 34279.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27344.63 | 4045.42 | 34240.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22301.83 | 26805.92 | 28431.29 | 29564.77 | 30601.38 | 31332.32 | 32985.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5000.56  | 1454.55 | 9802.07 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2708.53 | 5034.24 | 5443.83 | 5730.32 | 6070.61 | 6381.60 | 6970.13 |
| **Latency** | 8ms     | 8ms     | 9ms     | 9ms     | 13ms    | 16ms    | 22ms    |

---

<p align="center">Generated 2022-09-15T02:59:56.151Z</p>
