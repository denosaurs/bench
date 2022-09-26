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
| Bun       | 67809.42 | 7495.99 | 86045.99  | 100%     |
| Deno      | 58032.82 | 5490.14 | 69761.84  | 86%      |
| Fast      | 56967.05 | 6302.03 | 68744.29  | 84%      |
| Hono      | 50244.78 | 5639.38 | 137214.21 | 74%      |
| Reno      | 42809.50 | 4756.44 | 52755.44  | 63%      |
| http      | 40543.97 | 8015.05 | 50477.57  | 60%      |
| Node      | 35721.39 | 5731.85 | 42710.11  | 53%      |
| Alosaur   | 31587.47 | 6690.07 | 39429.12  | 47%      |
| Fastify   | 30384.68 | 5460.46 | 37956.42  | 45%      |
| Router    | 28323.63 | 4305.05 | 35837.08  | 42%      |
| Little    | 25706.62 | 4340.57 | 32003.47  | 38%      |
| Oak       | 22828.93 | 3769.16 | 41475.38  | 34%      |
| Aqua      | 21677.28 | 3743.55 | 28211.71  | 32%      |
| Dinatra   | 16106.23 | 3387.48 | 36537.53  | 24%      |
| Abc       | 13289.93 | 2386.69 | 20076.38  | 20%      |
| Opine     | 9234.69  | 4504.39 | 154133.67 | 14%      |
| Express   | 6178.28  | 1465.78 | 9202.77   | 9%       |
| Servest   | 4942.57  | 1484.88 | 10183.70  | 7%       |
| Acorn     | 3884.67  | 3410.20 | 54957.93  | 6%       |

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
| 13289.93 | 2386.69 | 20076.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10400.54 | 12320.40 | 14010.31 | 14711.56 | 15536.45 | 16059.61 | 16727.14 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3884.67  | 3410.20 | 54957.93 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1643.84 | 2326.38 | 2911.05 | 4293.27 | 7953.34 | 9769.15 | 12321.92 |
| **Latency** | 4ms     | 6ms     | 13ms    | 19ms    | 23ms    | 24ms    | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31587.47 | 6690.07 | 39429.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20310.50 | 32710.02 | 34160.63 | 34962.10 | 35905.63 | 36392.16 | 37391.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21677.28 | 3743.55 | 28211.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17215.18 | 20055.95 | 23091.09 | 23960.56 | 24828.11 | 25153.86 | 26191.53 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67809.42 | 7495.99 | 86045.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61171.36 | 65964.57 | 68426.44 | 71640.58 | 75010.34 | 76902.04 | 80106.93 |
| **Latency** | 496µs    | 587µs    | 736µs    | 826µs    | 883µs    | 948µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58032.82 | 5490.14 | 69761.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52678.85 | 56408.26 | 58972.06 | 60995.84 | 62869.47 | 64167.90 | 66633.10 |
| **Latency** | 615µs    | 718µs    | 857µs    | 953µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16106.23 | 3387.48 | 36537.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11411.00 | 15116.12 | 16947.48 | 17988.57 | 19631.54 | 20087.27 | 21010.19 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6178.28  | 1465.78 | 9202.77 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3700.99 | 6307.36 | 6761.31 | 6996.11 | 7240.75 | 7403.18 | 7704.07 |
| **Latency** | 6ms     | 7ms     | 7ms     | 7ms     | 10ms    | 12ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56967.05 | 6302.03 | 68744.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52035.20 | 55465.18 | 57811.93 | 60138.11 | 62521.77 | 63704.22 | 66055.15 |
| **Latency** | 669µs    | 764µs    | 851µs    | 942µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30384.68 | 5460.46 | 37956.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29035.61 | 30469.36 | 31567.15 | 32626.31 | 33536.80 | 34210.72 | 35432.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 50244.78 | 5639.38 | 137214.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47115.38 | 48883.91 | 50734.34 | 52433.92 | 54142.35 | 55265.14 | 58205.05 |
| **Latency** | 818µs    | 894µs    | 977µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40543.97 | 8015.05 | 50477.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27613.42 | 41471.20 | 43340.18 | 44774.94 | 46115.43 | 47117.64 | 48617.83 |
| **Latency** | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25706.62 | 4340.57 | 32003.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21701.44 | 24204.27 | 27123.78 | 28203.01 | 29026.61 | 29594.87 | 30571.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35721.39 | 5731.85 | 42710.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34332.50 | 35621.25 | 36689.03 | 37911.62 | 39174.69 | 40128.75 | 41351.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22828.93 | 3769.16 | 41475.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18732.15 | 22503.30 | 23908.05 | 24708.06 | 25542.83 | 26107.74 | 26958.54 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9234.69  | 4504.39 | 154133.67 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7914.54 | 8832.19 | 9272.37 | 9659.57 | 10150.37 | 10492.72 | 11951.26 |
| **Latency** | 4ms     | 5ms     | 5ms     | 5ms     | 6ms      | 6ms      | 9ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42809.50 | 4756.44 | 52755.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40849.69 | 42023.38 | 43526.45 | 44943.47 | 46011.80 | 46830.69 | 48786.72 |
| **Latency** | 983µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28323.63 | 4305.05 | 35837.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22906.39 | 28001.57 | 29612.91 | 30721.40 | 31576.81 | 32386.91 | 33682.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4942.57  | 1484.88 | 10183.70 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2429.66 | 4953.68 | 5394.79 | 5728.67 | 6035.89 | 6320.77 | 6891.42 |
| **Latency** | 8ms     | 8ms     | 9ms     | 10ms    | 14ms    | 16ms    | 21ms    |

---

<p align="center">Generated 2022-09-26T02:56:55.323Z</p>
