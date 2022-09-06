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
| Bun       | 78733.52 | 7165.09 | 93429.87 | 100%     |
| http      | 46614.63 | 7003.92 | 51518.48 | 59%      |
| Fast      | 45588.15 | 6970.04 | 50864.41 | 58%      |
| Node      | 44948.07 | 6883.17 | 48617.14 | 57%      |
| Fastify   | 39102.54 | 6534.49 | 42773.97 | 50%      |
| Alosaur   | 36651.65 | 6620.10 | 41936.48 | 47%      |
| Reno      | 35214.74 | 3163.12 | 55888.41 | 45%      |
| Router    | 32008.46 | 3883.06 | 35635.59 | 41%      |
| Oak       | 27421.47 | 3942.77 | 33995.79 | 35%      |
| Aqua      | 23808.79 | 2985.95 | 27726.85 | 30%      |
| Abc       | 18620.18 | 2311.42 | 22565.99 | 24%      |
| Little    | 16076.89 | 1836.13 | 18814.38 | 20%      |
| Dinatra   | 12953.66 | 2254.01 | 16552.27 | 16%      |
| Opine     | 10332.33 | 1364.91 | 14213.32 | 13%      |
| Express   | 8170.32  | 1724.76 | 12152.15 | 10%      |
| Servest   | 6357.38  | 1795.42 | 11139.67 | 8%       |
| Acorn     | 5323.66  | 5641.21 | 28694.40 | 7%       |
| Deno      | 0.00     | 0.00    | 0.00     | 0%       |
| Hono      | 0.00     | 0.00    | 0.00     | 0%       |

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
| 18620.18 | 2311.42 | 22565.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16502.63 | 17834.05 | 19237.89 | 19931.08 | 20336.51 | 20645.45 | 21684.35 |
| **Latency** | 2µs      | 2µs      | 2µs      | 2µs      | 3µs      | 3µs      | 4µs      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5323.66  | 5641.21 | 28694.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 1604.07 | 2777.37 | 3479.02 | 5213.64 | 11486.77 | 14942.93 | 27416.10 |
| **Latency** | 3µs     | 4µs     | 11µs    | 16µs    | 21µs     | 22µs     | 23µs     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36651.65 | 6620.10 | 41936.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27507.20 | 38116.63 | 39210.58 | 39702.42 | 40129.46 | 40422.52 | 40920.23 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 4µs      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23808.79 | 2985.95 | 27726.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21222.92 | 22889.27 | 25018.19 | 25194.56 | 25458.62 | 25902.25 | 26583.06 |
| **Latency** | 1µs      | 1µs      | 1µs      | 2µs      | 2µs      | 2µs      | 3µs      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 78733.52 | 7165.09 | 93429.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 74442.41 | 78416.44 | 80325.67 | 81530.14 | 82848.03 | 84348.05 | 88107.02 |
| **Latency** | 427ns    | 505ns    | 665ns    | 692ns    | 719ns    | 786ns    | 1µs      |

### [Deno](#deno)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12953.66 | 2254.01 | 16552.27 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9951.14 | 13043.43 | 13914.74 | 14152.07 | 14268.91 | 14323.34 | 14470.46 |
| **Latency** | 3µs     | 3µs      | 3µs      | 3µs      | 4µs      | 6µs      | 7µs      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8170.32  | 1724.76 | 12152.15 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5626.84 | 7156.97 | 9086.13 | 9242.51 | 9337.44 | 9384.93 | 9428.18 |
| **Latency** | 5µs     | 5µs     | 5µs     | 5µs     | 8µs     | 9µs     | 13µs    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45588.15 | 6970.04 | 50864.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36621.95 | 47507.10 | 48225.42 | 48700.46 | 49102.94 | 49281.57 | 49590.27 |
| **Latency** | 903ns    | 947ns    | 1µs      | 1µs      | 1µs      | 1µs      | 3µs      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39102.54 | 6534.49 | 42773.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38879.99 | 40153.69 | 40733.37 | 41234.94 | 41565.65 | 41720.00 | 42004.59 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 2µs      |

### [Hono](#hono)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46614.63 | 7003.92 | 51518.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35704.94 | 48625.27 | 49221.63 | 49634.99 | 50026.66 | 50230.54 | 50593.97 |
| **Latency** | 885ns    | 930ns    | 1µs      | 1µs      | 1µs      | 1µs      | 3µs      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16076.89 | 1836.13 | 18814.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14359.44 | 16462.22 | 16731.61 | 16816.81 | 16952.37 | 17090.57 | 17502.20 |
| **Latency** | 2µs      | 2µs      | 2µs      | 3µs      | 3µs      | 4µs      | 5µs      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44948.07 | 6883.17 | 48617.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44701.00 | 45976.76 | 46606.50 | 47093.22 | 47427.95 | 47602.32 | 47886.65 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 2µs      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27421.47 | 3942.77 | 33995.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24012.63 | 27103.85 | 28910.47 | 29257.63 | 29813.32 | 30115.34 | 30643.93 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 2µs      | 2µs      | 3µs      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10332.33 | 1364.91 | 14213.32 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9410.82 | 9903.56 | 10730.59 | 10797.00 | 10934.60 | 11762.09 | 12542.26 |
| **Latency** | 3µs     | 3µs     | 4µs      | 5µs      | 5µs      | 6µs      | 7µs      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35214.74 | 3163.12 | 55888.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35015.74 | 35288.21 | 35554.03 | 35737.16 | 35862.75 | 35977.33 | 37290.23 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32008.46 | 3883.06 | 35635.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27767.77 | 32443.79 | 33550.19 | 33807.16 | 34300.21 | 34618.36 | 35023.25 |
| **Latency** | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 1µs      | 3µs      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6357.38  | 1795.42 | 11139.67 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 3933.12 | 5807.20 | 6672.27 | 7192.23 | 8351.23 | 8666.05 | 10882.01 |
| **Latency** | 6µs     | 6µs     | 7µs     | 8µs     | 10µs    | 11µs    | 17µs     |

---

<p align="center">Generated 2022-09-06T23:29:20.881Z</p>
