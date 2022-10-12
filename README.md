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
| Bun                                                                                  | 87485.18 | 6691.67 | 95114.16 | 100%     |
| Deno                                                                                 | 66468.01 | 4424.44 | 72337.86 | 76%      |
| Fast                                                                                 | 60776.98 | 4626.94 | 66992.98 | 69%      |
| Hono                                                                                 | 60533.60 | 5011.61 | 65473.41 | 69%      |
| Megalo                                                                               | 59949.04 | 4926.09 | 66560.72 | 69%      |
| Reno                                                                                 | 48565.25 | 4412.19 | 53928.68 | 56%      |
| http                                                                                 | 44852.90 | 8996.49 | 51038.57 | 51%      |
| Alosaur                                                                              | 37615.31 | 8096.02 | 43865.76 | 43%      |
| Node                                                                                 | 34588.38 | 4749.60 | 40078.64 | 40%      |
| Router                                                                               | 32998.69 | 4901.60 | 37109.80 | 38%      |
| Little                                                                               | 30778.61 | 5358.11 | 35370.50 | 35%      |
| Fastify                                                                              | 29875.06 | 4337.37 | 32826.91 | 34%      |
| Oak                                                                                  | 28587.87 | 4932.63 | 33722.92 | 33%      |
| Aqua                                                                                 | 27314.00 | 3982.07 | 32031.75 | 31%      |
| Dinatra                                                                              | 19031.27 | 3250.71 | 22377.67 | 22%      |
| Abc                                                                                  | 14205.30 | 3157.53 | 19165.44 | 16%      |
| Opine                                                                                | 12940.52 | 2062.79 | 15892.28 | 15%      |
| Express                                                                              | 7632.65  | 1435.10 | 9700.83  | 9%       |
| Servest                                                                              | 5859.34  | 1804.86 | 8778.93  | 7%       |
| Acorn                                                                                | 4865.01  | 3102.08 | 18248.00 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-310dff6a-507d-42aa-b5d3-bf38d024cb53) |          |         |          |          |

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
| 14205.30 | 3157.53 | 19165.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10978.02 | 11397.35 | 15045.50 | 17223.52 | 17723.64 | 17903.45 | 18172.42 |
| **Latency** | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 4ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4865.01  | 3102.08 | 18248.00 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2657.84 | 3028.42 | 3901.72 | 5059.38 | 8503.25 | 12946.24 | 16310.16 |
| **Latency** | 3ms     | 4ms     | 10ms    | 13ms    | 16ms    | 18ms     | 20ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37615.31 | 8096.02 | 43865.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26046.95 | 39258.44 | 41389.26 | 41809.90 | 42152.76 | 42447.49 | 43131.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27314.00 | 3982.07 | 32031.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24502.34 | 25520.75 | 29058.79 | 29602.39 | 29956.65 | 30381.83 | 30787.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 87485.18 | 6691.67 | 95114.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 80700.29 | 87553.43 | 89340.84 | 90613.76 | 91594.29 | 92074.33 | 93035.95 |
| **Latency** | 353µs    | 448µs    | 606µs    | 634µs    | 671µs    | 770µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 66468.01 | 4424.44 | 72337.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61948.36 | 65901.10 | 67378.31 | 68745.49 | 69954.01 | 70565.04 | 71514.46 |
| **Latency** | 501µs    | 612µs    | 790µs    | 849µs    | 915µs    | 987µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19031.27 | 3250.71 | 22377.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15857.25 | 16551.73 | 20662.21 | 20895.82 | 21116.74 | 21384.92 | 21749.92 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7632.65  | 1435.10 | 9700.83 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5756.05 | 6900.76 | 8439.49 | 8562.59 | 8631.87 | 8660.19 | 8721.04 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60776.98 | 4626.94 | 66992.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58582.89 | 60540.40 | 61696.03 | 62434.84 | 63120.05 | 63513.26 | 64744.34 |
| **Latency** | 622µs    | 699µs    | 835µs    | 899µs    | 943µs    | 987µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29875.06 | 4337.37 | 32826.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29748.75 | 30419.81 | 31031.71 | 31247.10 | 31357.01 | 31433.73 | 31785.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60533.60 | 5011.61 | 65473.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58185.31 | 60523.23 | 61565.46 | 62254.17 | 62985.00 | 63341.13 | 64586.41 |
| **Latency** | 613µs    | 676µs    | 842µs    | 907µs    | 960µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44852.90 | 8996.49 | 51038.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29303.83 | 47632.27 | 48947.63 | 49281.27 | 49587.89 | 49745.51 | 50148.96 |
| **Latency** | 894µs    | 939µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30778.61 | 5358.11 | 35370.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26714.83 | 28578.05 | 33515.84 | 33924.37 | 34171.35 | 34407.94 | 34882.00 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 59949.04 | 4926.09 | 66560.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58407.93 | 59738.45 | 60864.27 | 61624.96 | 62138.53 | 62404.06 | 63103.97 |
| **Latency** | 678µs    | 753µs    | 809µs    | 887µs    | 948µs    | 999µs    | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34588.38 | 4749.60 | 40078.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34118.22 | 35074.75 | 35632.95 | 36133.30 | 36476.86 | 36613.27 | 36782.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28587.87 | 4932.63 | 33722.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23810.54 | 26923.25 | 30899.06 | 31196.73 | 31463.33 | 31825.49 | 32234.12 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12940.52 | 2062.79 | 15892.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11891.09 | 12512.69 | 13684.85 | 13949.13 | 14087.52 | 14227.61 | 15516.59 |
| **Latency** | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48565.25 | 4412.19 | 53928.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48232.61 | 48801.12 | 49278.73 | 49818.81 | 50348.54 | 50665.88 | 51090.82 |
| **Latency** | 928µs    | 979µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32998.69 | 4901.60 | 37109.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28006.25 | 32083.28 | 35109.09 | 35643.43 | 36154.84 | 36447.79 | 36769.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5859.34  | 1804.86 | 8778.93 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3310.45 | 5247.94 | 6526.62 | 7073.10 | 7430.56 | 7574.99 | 8500.16 |
| **Latency** | 6ms     | 6ms     | 7ms     | 9ms     | 12ms    | 14ms    | 18ms    |

---

<p align="center">Generated 2022-10-12T02:55:18.408Z</p>
