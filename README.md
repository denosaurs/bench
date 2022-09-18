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

| Framework | Mean     | Stddev   | Max       | Relative |
| --------- | -------- | -------- | --------- | -------- |
| Bun       | 68110.97 | 12373.88 | 91622.69  | 100%     |
| Fast      | 61343.09 | 7690.91  | 74865.85  | 90%      |
| Deno      | 60099.10 | 5467.52  | 70034.86  | 88%      |
| Hono      | 54597.92 | 6818.39  | 68059.50  | 80%      |
| Reno      | 44905.97 | 5129.26  | 55972.57  | 66%      |
| http      | 41738.32 | 8233.02  | 54392.70  | 61%      |
| Node      | 38410.39 | 6570.41  | 48037.04  | 56%      |
| Alosaur   | 32952.45 | 7240.14  | 72083.95  | 48%      |
| Fastify   | 32235.20 | 5886.34  | 52320.92  | 47%      |
| Router    | 28557.25 | 4223.74  | 36134.73  | 42%      |
| Little    | 26359.05 | 4131.22  | 34063.18  | 39%      |
| Oak       | 24093.98 | 3968.90  | 30263.91  | 35%      |
| Aqua      | 22831.88 | 3577.30  | 29092.14  | 34%      |
| Abc       | 16149.02 | 2901.76  | 22981.17  | 24%      |
| Dinatra   | 13135.09 | 2897.44  | 18808.30  | 19%      |
| Opine     | 9598.32  | 4675.18  | 122031.70 | 14%      |
| Express   | 6275.55  | 1698.55  | 10580.12  | 9%       |
| Servest   | 5485.33  | 1629.62  | 9339.51   | 8%       |
| Acorn     | 4241.10  | 4177.31  | 65834.31  | 6%       |

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
| 16149.02 | 2901.76 | 22981.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12618.86 | 14641.21 | 16237.29 | 18440.34 | 19437.41 | 19873.59 | 20684.43 |
| **Latency** | 1ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4241.10  | 4177.31 | 65834.31 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1321.68 | 2415.79 | 3334.65 | 5036.84 | 8573.41 | 10317.72 | 13220.68 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 21ms    | 23ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32952.45 | 7240.14 | 72083.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21991.80 | 32753.85 | 34962.28 | 37082.91 | 38915.27 | 39816.09 | 41084.08 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22831.88 | 3577.30 | 29092.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19251.93 | 21785.43 | 23235.31 | 25004.40 | 26436.22 | 27044.65 | 27813.43 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 68110.97 | 12373.88 | 91622.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50000.88 | 66028.65 | 70332.27 | 75251.19 | 79861.31 | 82305.56 | 86617.12 |
| **Latency** | 458µs    | 558µs    | 693µs    | 807µs    | 882µs    | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60099.10 | 5467.52 | 70034.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54647.24 | 58221.80 | 60634.83 | 63308.72 | 65525.85 | 66904.52 | 68306.45 |
| **Latency** | 592µs    | 696µs    | 830µs    | 924µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13135.09 | 2897.44 | 18808.30 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9136.28 | 12665.63 | 13976.23 | 14842.77 | 15557.78 | 16070.90 | 17121.59 |
| **Latency** | 2ms     | 3ms      | 3ms      | 3ms      | 5ms      | 6ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6275.55  | 1698.55 | 10580.12 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3948.66 | 4887.24 | 7003.36 | 7455.49 | 7777.15 | 8006.90 | 8371.07 |
| **Latency** | 6ms     | 6ms     | 7ms     | 7ms     | 11ms    | 12ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61343.09 | 7690.91 | 74865.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55331.03 | 58629.36 | 62045.47 | 65648.71 | 69033.94 | 70536.03 | 72900.06 |
| **Latency** | 618µs    | 697µs    | 788µs    | 875µs    | 971µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32235.20 | 5886.34 | 52320.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29260.90 | 31416.06 | 33210.66 | 35227.88 | 36923.31 | 37701.18 | 38979.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 54597.92 | 6818.39 | 68059.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49533.74 | 52132.15 | 54805.29 | 58083.40 | 61529.12 | 63412.11 | 65525.77 |
| **Latency** | 721µs    | 800µs    | 892µs    | 986µs    | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41738.32 | 8233.02 | 54392.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28964.40 | 41403.77 | 44147.96 | 46403.54 | 48650.13 | 49696.27 | 51282.66 |
| **Latency** | 901µs    | 995µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26359.05 | 4131.22 | 34063.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21857.21 | 25073.85 | 27105.87 | 28819.67 | 30215.79 | 31188.03 | 32614.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38410.39 | 6570.41 | 48037.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34890.05 | 37014.47 | 39497.54 | 41858.64 | 43789.82 | 44729.12 | 46512.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24093.98 | 3968.90 | 30263.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19635.94 | 23050.68 | 24875.47 | 26517.54 | 27766.46 | 28260.94 | 29127.55 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9598.32  | 4675.18 | 122031.70 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8004.11 | 8885.42 | 9538.94 | 10302.92 | 10981.10 | 11313.70 | 12892.60 |
| **Latency** | 3ms     | 4ms     | 5ms     | 5ms      | 6ms      | 6ms      | 9ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44905.97 | 5129.26 | 55972.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41366.17 | 42824.81 | 44931.96 | 47521.45 | 50375.91 | 51671.08 | 54402.14 |
| **Latency** | 895µs    | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28557.25 | 4223.74 | 36134.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22867.83 | 27317.23 | 29359.48 | 31007.79 | 32794.20 | 33416.96 | 35037.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5485.33  | 1629.62 | 9339.51 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2906.63 | 5300.86 | 5939.39 | 6436.88 | 6924.53 | 7198.79 | 7788.42 |
| **Latency** | 7ms     | 7ms     | 8ms     | 9ms     | 13ms    | 14ms    | 21ms    |

---

<p align="center">Generated 2022-09-18T03:04:06.674Z</p>
