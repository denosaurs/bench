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
| Bun                                                                                  | 69337.16 | 6452.49 | 83356.59 | 100%     |
| Deno                                                                                 | 59155.13 | 3962.53 | 64911.27 | 85%      |
| Fast                                                                                 | 56774.62 | 5043.46 | 62721.86 | 82%      |
| Megalo                                                                               | 55707.85 | 4173.30 | 59012.79 | 80%      |
| Hono                                                                                 | 52866.71 | 5865.07 | 57704.53 | 76%      |
| Reno                                                                                 | 44876.56 | 3354.43 | 48119.14 | 65%      |
| http                                                                                 | 43566.24 | 8168.11 | 49359.76 | 63%      |
| Node                                                                                 | 37088.98 | 5525.95 | 40411.07 | 53%      |
| Alosaur                                                                              | 33172.27 | 7087.98 | 47516.66 | 48%      |
| Fastify                                                                              | 32081.93 | 5802.76 | 35237.65 | 46%      |
| Router                                                                               | 29376.89 | 4161.49 | 33712.92 | 42%      |
| Little                                                                               | 27679.62 | 4497.85 | 31649.69 | 40%      |
| Oak                                                                                  | 24434.14 | 3850.75 | 28002.79 | 35%      |
| Aqua                                                                                 | 23820.50 | 3306.70 | 27543.17 | 34%      |
| Dinatra                                                                              | 16833.45 | 3619.27 | 35250.59 | 24%      |
| Abc                                                                                  | 15027.71 | 2654.05 | 17837.07 | 22%      |
| Opine                                                                                | 9891.56  | 1490.13 | 17031.63 | 14%      |
| Express                                                                              | 6677.75  | 1597.30 | 8642.16  | 10%      |
| Servest                                                                              | 5468.32  | 1584.47 | 9312.67  | 8%       |
| Acorn                                                                                | 4138.96  | 3428.49 | 22157.05 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-ea1e11a6-6753-4214-9728-01ea2c4e8ca7) |          |         |          |          |

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
| 15027.71 | 2654.05 | 17837.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10837.27 | 12948.93 | 16367.49 | 16726.40 | 16942.67 | 17106.65 | 17305.51 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4138.96  | 3428.49 | 22157.05 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1819.96 | 2401.21 | 3014.69 | 4312.64 | 8754.32 | 10778.97 | 20162.83 |
| **Latency** | 4ms     | 5ms     | 12ms    | 18ms    | 22ms    | 24ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33172.27 | 7087.98 | 47516.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21154.67 | 34187.64 | 36317.01 | 36818.35 | 37204.78 | 37515.87 | 38032.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23820.50 | 3306.70 | 27543.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20696.95 | 22374.92 | 25032.89 | 25641.24 | 26344.13 | 26723.37 | 27081.68 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69337.16 | 6452.49 | 83356.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64445.01 | 68732.89 | 70726.77 | 72042.81 | 73547.70 | 74746.13 | 81241.31 |
| **Latency** | 478µs    | 569µs    | 749µs    | 793µs    | 842µs    | 905µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59155.13 | 3962.53 | 64911.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55818.34 | 58604.60 | 60090.41 | 61004.37 | 61767.19 | 62183.79 | 62992.51 |
| **Latency** | 607µs    | 691µs    | 879µs    | 933µs    | 976µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16833.45 | 3619.27 | 35250.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11928.13 | 15112.22 | 17238.59 | 19864.90 | 20189.15 | 20351.42 | 20829.72 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6677.75  | 1597.30 | 8642.16 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4018.92 | 6327.39 | 7493.20 | 7639.18 | 7747.72 | 7789.18 | 7853.23 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 10ms    | 12ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56774.62 | 5043.46 | 62721.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53412.20 | 56006.08 | 58110.95 | 59046.51 | 59793.50 | 60203.52 | 60713.27 |
| **Latency** | 700µs    | 783µs    | 856µs    | 947µs    | 998µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32081.93 | 5802.76 | 35237.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31400.89 | 32735.96 | 33748.21 | 34304.07 | 34540.70 | 34664.77 | 34915.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52866.71 | 5865.07 | 57704.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50201.94 | 52608.33 | 54261.78 | 55335.49 | 56110.57 | 56502.18 | 57102.76 |
| **Latency** | 819µs    | 864µs    | 906µs    | 957µs    | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43566.24 | 8168.11 | 49359.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29502.03 | 45830.63 | 47078.70 | 47553.33 | 47977.44 | 48166.47 | 48601.98 |
| **Latency** | 924µs    | 980µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27679.62 | 4497.85 | 31649.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23855.54 | 25368.80 | 29838.70 | 30283.70 | 30667.99 | 30977.70 | 31310.28 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55707.85 | 4173.30 | 59012.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 53925.02 | 55702.93 | 56523.64 | 57145.67 | 57604.52 | 57905.12 | 58488.30 |
| **Latency** | 775µs    | 826µs    | 875µs    | 933µs    | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37088.98 | 5525.95 | 40411.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36602.14 | 37564.17 | 38210.26 | 39172.01 | 39469.40 | 39603.70 | 39864.12 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24434.14 | 3850.75 | 28002.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20371.75 | 24515.89 | 25940.69 | 26327.60 | 26797.79 | 27184.24 | 27542.12 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9891.56  | 1490.13 | 17031.63 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8604.55 | 9212.64 | 10204.36 | 10469.01 | 11136.53 | 12077.48 | 12939.25 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 6ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44876.56 | 3354.43 | 48119.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43903.39 | 44709.32 | 45448.45 | 46074.11 | 46551.68 | 46930.30 | 47462.28 |
| **Latency** | 979µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29376.89 | 4161.49 | 33712.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23954.16 | 28687.44 | 31109.91 | 31706.28 | 32189.18 | 32466.81 | 32822.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5468.32  | 1584.47 | 9312.67 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2878.22 | 5442.39 | 5964.47 | 6334.15 | 6652.61 | 6768.42 | 7985.16 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 13ms    | 14ms    | 20ms    |

---

<p align="center">Generated 2022-10-05T02:35:11.686Z</p>
