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
  - [Megalo](#megalo)
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
    - [Megalo](#megalo-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev  | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | -------- | -------- |
| Bun                                                                                  | 67269.76 | 5403.38 | 82875.71 | 100%     |
| Deno                                                                                 | 55809.56 | 6632.37 | 65712.70 | 83%      |
| Fast                                                                                 | 53322.29 | 4745.74 | 59357.01 | 79%      |
| Megalo                                                                               | 52172.75 | 4730.93 | 57841.44 | 78%      |
| Hono                                                                                 | 50334.85 | 5633.78 | 55807.99 | 75%      |
| Reno                                                                                 | 42827.43 | 3776.21 | 48321.79 | 64%      |
| http                                                                                 | 39801.68 | 8099.41 | 45887.33 | 59%      |
| Node                                                                                 | 31610.42 | 5185.28 | 35525.69 | 47%      |
| Alosaur                                                                              | 31222.38 | 6832.83 | 37585.40 | 46%      |
| Router                                                                               | 28278.36 | 4214.34 | 33914.35 | 42%      |
| Fastify                                                                              | 27186.59 | 4712.43 | 30030.43 | 40%      |
| Little                                                                               | 25201.57 | 4121.37 | 28952.03 | 37%      |
| Aqua                                                                                 | 22397.30 | 3184.15 | 27105.68 | 33%      |
| Oak                                                                                  | 21676.53 | 3955.15 | 26551.33 | 32%      |
| Dinatra                                                                              | 16372.78 | 3654.10 | 34714.88 | 24%      |
| Abc                                                                                  | 13061.34 | 3146.22 | 17617.52 | 19%      |
| Opine                                                                                | 8882.77  | 1309.64 | 19789.51 | 13%      |
| Express                                                                              | 5912.94  | 1456.65 | 19110.01 | 9%       |
| Servest                                                                              | 5093.77  | 1537.50 | 10960.65 | 8%       |
| Acorn                                                                                | 3871.45  | 3561.62 | 59405.55 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-0ec4bd9e-c955-4304-965e-d82c3ec90c4a) |          |         |          |          |

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

## [Megalo](https://github.com/tsar-boomba/megalo)

Deno HTTP server framework focused on speed

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
| 13061.34 | 3146.22 | 17617.52 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7646.21 | 11007.64 | 14643.85 | 15319.06 | 15793.37 | 16273.63 | 17123.53 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 5ms      | 6ms      | 9ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3871.45  | 3561.62 | 59405.55 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1726.05 | 2311.32 | 2939.83 | 4111.19 | 7979.31 | 9607.22 | 12103.78 |
| **Latency** | 4ms     | 6ms     | 13ms    | 19ms    | 23ms    | 24ms    | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31222.38 | 6832.83 | 37585.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19609.30 | 32254.94 | 33996.67 | 34803.95 | 35551.72 | 35842.42 | 36338.97 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22397.30 | 3184.15 | 27105.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19361.26 | 21489.90 | 23450.67 | 24081.59 | 24817.97 | 25223.14 | 25985.36 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67269.76 | 5403.38 | 82875.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61179.89 | 65126.27 | 67593.21 | 70006.53 | 72645.28 | 75537.21 | 78126.04 |
| **Latency** | 509µs    | 598µs    | 754µs    | 836µs    | 883µs    | 931µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55809.56 | 6632.37 | 65712.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49627.45 | 54920.50 | 57526.75 | 59350.10 | 60797.82 | 61629.17 | 63575.03 |
| **Latency** | 644µs    | 744µs    | 886µs    | 975µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16372.78 | 3654.10 | 34714.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11262.58 | 15135.77 | 17105.21 | 19263.72 | 19998.39 | 20456.48 | 21136.87 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5912.94  | 1456.65 | 19110.01 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3549.71 | 6063.01 | 6460.30 | 6630.19 | 6850.79 | 6960.93 | 7383.83 |
| **Latency** | 7ms     | 7ms     | 7ms     | 7ms     | 11ms    | 13ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53322.29 | 4745.74 | 59357.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48894.73 | 52328.94 | 54652.73 | 55834.79 | 56540.39 | 57144.18 | 58190.64 |
| **Latency** | 779µs    | 837µs    | 902µs    | 997µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27186.59 | 4712.43 | 30030.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26687.35 | 27661.50 | 28568.65 | 28927.57 | 29165.11 | 29354.10 | 29713.76 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50334.85 | 5633.78 | 55807.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47209.56 | 49841.21 | 51738.36 | 52732.83 | 53537.11 | 54027.14 | 55131.60 |
| **Latency** | 842µs    | 900µs    | 953µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39801.68 | 8099.41 | 45887.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24870.18 | 42021.56 | 43089.32 | 43583.92 | 43917.26 | 44153.56 | 44558.94 |
| **Latency** | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25201.57 | 4121.37 | 28952.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21247.02 | 22962.67 | 27132.76 | 27447.01 | 27807.05 | 28168.52 | 28610.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52172.75 | 4730.93 | 57841.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48321.03 | 51517.16 | 53142.12 | 54495.54 | 55509.61 | 56012.16 | 56832.00 |
| **Latency** | 807µs    | 867µs    | 930µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31610.42 | 5185.28 | 35525.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31264.19 | 32128.69 | 32998.77 | 33511.83 | 33853.60 | 34077.46 | 34510.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21676.53 | 3955.15 | 26551.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17732.68 | 21611.52 | 23102.38 | 23772.34 | 24353.15 | 24601.47 | 24962.12 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8882.77  | 1309.64 | 19789.51 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 7618.62 | 8723.44 | 9144.17 | 9453.08 | 9781.76 | 10005.96 | 11483.64 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 6ms     | 7ms      | 9ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42827.43 | 3776.21 | 48321.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41201.36 | 42211.66 | 43290.18 | 44390.62 | 45261.30 | 45711.11 | 46995.04 |
| **Latency** | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28278.36 | 4214.34 | 33914.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22904.47 | 28209.96 | 29640.10 | 30639.35 | 31438.22 | 31906.97 | 32827.67 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5093.77  | 1537.50 | 10960.65 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2605.27 | 5022.26 | 5576.95 | 5924.01 | 6179.91 | 6499.22 | 7361.19 |
| **Latency** | 8ms     | 8ms     | 8ms     | 10ms    | 14ms    | 16ms    | 22ms    |

---

<p align="center">Generated 2022-11-06T02:28:07.604Z</p>
