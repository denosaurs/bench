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

| Framework                                                                            | Mean     | Stddev  | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | --------- | -------- |
| Bun                                                                                  | 55413.75 | 8990.25 | 75916.31  | 100%     |
| Deno                                                                                 | 44104.00 | 6424.33 | 56223.30  | 80%      |
| Fast                                                                                 | 38649.32 | 5924.93 | 51493.88  | 70%      |
| Megalo                                                                               | 38608.34 | 5733.50 | 50294.23  | 70%      |
| Hono                                                                                 | 34299.67 | 6787.43 | 51131.42  | 62%      |
| http                                                                                 | 31871.55 | 6922.76 | 42924.37  | 58%      |
| Reno                                                                                 | 30653.66 | 4861.69 | 40011.29  | 55%      |
| Alosaur                                                                              | 24927.51 | 5691.47 | 34659.36  | 45%      |
| Router                                                                               | 20726.64 | 4389.78 | 28114.86  | 37%      |
| Node                                                                                 | 20040.12 | 3755.24 | 27851.66  | 36%      |
| Little                                                                               | 18959.20 | 3490.11 | 25359.98  | 34%      |
| Aqua                                                                                 | 16932.50 | 3971.75 | 63664.01  | 31%      |
| Fastify                                                                              | 16264.70 | 4843.73 | 123958.06 | 29%      |
| Oak                                                                                  | 15963.95 | 2944.31 | 22780.73  | 29%      |
| Dinatra                                                                              | 11259.08 | 2387.18 | 16859.59  | 20%      |
| Abc                                                                                  | 9174.34  | 1586.63 | 13824.77  | 17%      |
| Opine                                                                                | 6447.84  | 1881.94 | 53758.37  | 12%      |
| Acorn                                                                                | 4219.26  | 5568.74 | 113244.26 | 8%       |
| Express                                                                              | 4072.83  | 1174.29 | 14325.65  | 7%       |
| Servest                                                                              | 3958.13  | 4221.49 | 97923.03  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-2f62c1ba-0319-4152-a93d-430ad12b664e) |          |         |           |          |

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
| 9174.34  | 1586.63 | 13824.77 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6910.12 | 8426.83 | 9522.69 | 10275.53 | 10819.96 | 11078.77 | 11882.59 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 6ms      | 7ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4219.26  | 5568.74 | 113244.26 |     |

| **Stat**    | 10     | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------ | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 801.85 | 2415.89 | 3093.15 | 5463.45 | 7647.29 | 8697.23 | 15537.82 |
| **Latency** | 5ms    | 7ms     | 12ms    | 20ms    | 23ms    | 25ms    | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24927.51 | 5691.47 | 34659.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16412.73 | 23707.70 | 26679.10 | 28482.13 | 29828.63 | 30723.50 | 32355.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16932.50 | 3971.75 | 63664.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12511.52 | 15264.33 | 17809.88 | 19335.56 | 20411.32 | 21095.20 | 22302.22 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 8ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55413.75 | 8990.25 | 75916.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43378.28 | 51225.92 | 56353.85 | 61216.19 | 65529.13 | 68274.12 | 73313.95 |
| **Latency** | 547µs    | 672µs    | 838µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44104.00 | 6424.33 | 56223.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36699.26 | 41724.07 | 45466.60 | 48123.31 | 50343.24 | 51743.17 | 53675.34 |
| **Latency** | 736µs    | 895µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11259.08 | 2387.18 | 16859.59 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8206.55 | 10331.70 | 11518.29 | 12826.01 | 13843.85 | 14489.71 | 15336.40 |
| **Latency** | 3ms     | 3ms      | 4ms      | 4ms      | 5ms      | 7ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4072.83  | 1174.29 | 14325.65 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2451.30 | 3433.32 | 4457.31 | 4773.26 | 5007.20 | 5154.63 | 5558.35 |
| **Latency** | 9ms     | 10ms    | 11ms    | 12ms    | 16ms    | 19ms    | 25ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38649.32 | 5924.93 | 51493.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31356.46 | 35491.68 | 39631.23 | 42614.63 | 45003.90 | 46255.19 | 48979.17 |
| **Latency** | 920µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 16264.70 | 4843.73 | 123958.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12619.99 | 15629.60 | 16934.78 | 18035.42 | 19031.10 | 19666.15 | 20472.05 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 9ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34299.67 | 6787.43 | 51131.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27602.61 | 32309.18 | 35617.97 | 38417.71 | 40406.04 | 41674.38 | 43806.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31871.55 | 6922.76 | 42924.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22311.71 | 30210.47 | 33820.09 | 36308.81 | 38075.92 | 39159.53 | 41317.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18959.20 | 3490.11 | 25359.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14831.16 | 17695.88 | 19653.85 | 21195.90 | 22387.52 | 23113.45 | 24105.25 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38608.34 | 5733.50 | 50294.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32021.22 | 35574.00 | 39306.82 | 42630.49 | 44866.19 | 46221.89 | 48024.30 |
| **Latency** | 936µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20040.12 | 3755.24 | 27851.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16334.21 | 19612.66 | 20927.93 | 22036.91 | 22921.42 | 23556.88 | 24785.87 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15963.95 | 2944.31 | 22780.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12640.04 | 14901.26 | 16642.59 | 17699.96 | 18602.26 | 19320.06 | 20761.03 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6447.84  | 1881.94 | 53758.37 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5088.10 | 5931.28 | 6557.55 | 7059.94 | 7631.34 | 8009.12 | 9109.60 |
| **Latency** | 5ms     | 6ms     | 7ms     | 8ms     | 9ms     | 10ms    | 14ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30653.66 | 4861.69 | 40011.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25219.78 | 29122.55 | 31641.87 | 33462.05 | 35312.51 | 36366.07 | 38093.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20726.64 | 4389.78 | 28114.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15151.16 | 19261.91 | 21838.07 | 23482.35 | 24804.07 | 25354.31 | 26862.97 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3958.13  | 4221.49 | 97923.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2012.76 | 3534.22 | 4066.17 | 4428.27 | 4819.99 | 5066.34 | 6233.53 |
| **Latency** | 10ms    | 11ms    | 12ms    | 14ms    | 18ms    | 22ms    | 26ms    |

---

<p align="center">Generated 2022-10-02T03:01:30.679Z</p>
