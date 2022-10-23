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
| Bun                                                                                  | 67372.41 | 7765.81 | 85109.92  | 100%     |
| Fast                                                                                 | 57248.47 | 6119.93 | 68250.27  | 85%      |
| Deno                                                                                 | 56979.99 | 6797.36 | 69025.08  | 85%      |
| Megalo                                                                               | 53798.86 | 7775.39 | 66225.60  | 80%      |
| Hono                                                                                 | 52975.47 | 6258.27 | 62610.97  | 79%      |
| Reno                                                                                 | 39811.00 | 4902.94 | 46159.67  | 59%      |
| http                                                                                 | 39270.60 | 8145.71 | 49986.98  | 58%      |
| Node                                                                                 | 34248.20 | 6011.52 | 41981.14  | 51%      |
| Alosaur                                                                              | 30913.41 | 6606.38 | 42743.02  | 46%      |
| Router                                                                               | 25782.43 | 4373.58 | 33675.96  | 38%      |
| Little                                                                               | 24781.66 | 4274.66 | 31745.79  | 37%      |
| Fastify                                                                              | 24545.80 | 8716.54 | 34847.81  | 36%      |
| Aqua                                                                                 | 22449.27 | 3332.18 | 28736.45  | 33%      |
| Oak                                                                                  | 21747.68 | 3597.46 | 26272.56  | 32%      |
| Dinatra                                                                              | 16660.19 | 3443.31 | 33312.62  | 25%      |
| Abc                                                                                  | 14309.04 | 2346.91 | 18699.57  | 21%      |
| Opine                                                                                | 8650.31  | 1366.47 | 23618.04  | 13%      |
| Express                                                                              | 5906.95  | 1466.51 | 9633.98   | 9%       |
| Servest                                                                              | 5046.57  | 1533.22 | 10114.35  | 7%       |
| Acorn                                                                                | 4047.80  | 4080.07 | 103092.78 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-9a66c4e4-7700-4903-bd1e-74bb8724def2) |          |         |           |          |

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
| 14309.04 | 2346.91 | 18699.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11072.55 | 13433.21 | 15071.62 | 15646.59 | 16613.83 | 17034.61 | 17803.23 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4047.80  | 4080.07 | 103092.78 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1867.34 | 2431.04 | 3091.07 | 4151.62 | 8141.82 | 9681.07 | 20027.29 |
| **Latency** | 5ms     | 6ms     | 13ms    | 18ms    | 22ms    | 23ms    | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30913.41 | 6606.38 | 42743.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20511.20 | 31325.73 | 33208.68 | 34415.53 | 35783.45 | 36507.35 | 37960.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22449.27 | 3332.18 | 28736.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18981.84 | 21476.53 | 23364.15 | 24245.09 | 25480.91 | 26073.77 | 27063.31 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 67372.41 | 7765.81 | 85109.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60957.71 | 65017.15 | 67752.18 | 71739.49 | 75750.28 | 77096.09 | 79144.62 |
| **Latency** | 498µs    | 594µs    | 735µs    | 829µs    | 888µs    | 958µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56979.99 | 6797.36 | 69025.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50136.77 | 55223.38 | 58400.78 | 60739.68 | 62703.35 | 64409.72 | 66839.44 |
| **Latency** | 622µs    | 725µs    | 864µs    | 952µs    | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16660.19 | 3443.31 | 33312.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11814.08 | 15203.22 | 17218.28 | 19253.56 | 20191.22 | 20754.53 | 21585.49 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5906.95  | 1466.51 | 9633.98 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3323.40 | 5446.08 | 6418.17 | 6879.82 | 7205.12 | 7337.87 | 7524.24 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 11ms    | 13ms    | 19ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 57248.47 | 6119.93 | 68250.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51313.95 | 55302.85 | 57861.75 | 60474.42 | 63329.12 | 64707.23 | 66652.68 |
| **Latency** | 668µs    | 759µs    | 847µs    | 940µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24545.80 | 8716.54 | 34847.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10788.16 | 13391.22 | 29126.27 | 30519.70 | 31843.37 | 32592.96 | 33700.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      | 4ms      | 5ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52975.47 | 6258.27 | 62610.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48257.05 | 51032.37 | 53240.05 | 56282.86 | 59081.08 | 60133.76 | 61952.27 |
| **Latency** | 776µs    | 841µs    | 917µs    | 986µs    | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39270.60 | 8145.71 | 49986.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25747.96 | 39318.67 | 42205.72 | 43726.91 | 45426.01 | 46509.42 | 48218.23 |
| **Latency** | 969µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24781.66 | 4274.66 | 31745.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20306.73 | 22864.05 | 26125.77 | 27221.72 | 28409.13 | 29416.52 | 30547.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53798.86 | 7775.39 | 66225.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46741.67 | 52346.67 | 55504.53 | 57901.78 | 60396.99 | 61763.29 | 63917.95 |
| **Latency** | 732µs    | 803µs    | 881µs    | 972µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34248.20 | 6011.52 | 41981.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31326.65 | 33672.45 | 35450.75 | 37003.02 | 38575.67 | 39507.57 | 40970.95 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21747.68 | 3597.46 | 26272.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18028.22 | 21515.74 | 22850.00 | 23614.22 | 24414.55 | 24885.58 | 25756.80 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8650.31  | 1366.47 | 23618.04 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 7380.77 | 8319.23 | 8914.43 | 9218.99 | 9596.36 | 10010.14 | 10992.66 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 6ms     | 7ms      | 10ms     |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39811.00 | 4902.94 | 46159.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36306.96 | 39742.99 | 41000.29 | 42065.57 | 43218.66 | 43750.67 | 44762.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25782.43 | 4373.58 | 33675.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20370.69 | 24180.81 | 27317.53 | 28179.97 | 29419.46 | 30204.97 | 31444.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5046.57  | 1533.22 | 10114.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2349.25 | 5072.24 | 5546.10 | 5848.73 | 6114.32 | 6405.52 | 7321.97 |
| **Latency** | 8ms     | 8ms     | 8ms     | 9ms     | 14ms    | 16ms    | 22ms    |

---

<p align="center">Generated 2022-10-23T02:51:46.197Z</p>
