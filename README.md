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
| Bun                                                                                  | 49830.67 | 7200.35 | 64043.56 | 100%     |
| Deno                                                                                 | 39052.47 | 6626.00 | 49448.25 | 78%      |
| Fast                                                                                 | 36161.77 | 6446.52 | 49706.90 | 73%      |
| Megalo                                                                               | 32853.44 | 5539.23 | 41478.15 | 66%      |
| Hono                                                                                 | 29620.33 | 4948.44 | 37393.07 | 59%      |
| http                                                                                 | 29154.08 | 6685.43 | 39489.99 | 59%      |
| Reno                                                                                 | 28782.19 | 4938.93 | 35176.90 | 58%      |
| Alosaur                                                                              | 21851.50 | 6290.67 | 31796.04 | 44%      |
| Router                                                                               | 20031.16 | 3921.39 | 26206.22 | 40%      |
| Little                                                                               | 16855.83 | 3705.15 | 55095.85 | 34%      |
| Aqua                                                                                 | 16064.85 | 3155.48 | 22181.66 | 32%      |
| Node                                                                                 | 15945.45 | 3034.30 | 20100.78 | 32%      |
| Oak                                                                                  | 14289.72 | 3099.47 | 19663.32 | 29%      |
| Fastify                                                                              | 14102.55 | 2909.54 | 18525.17 | 28%      |
| Dinatra                                                                              | 10122.27 | 2437.77 | 19562.51 | 20%      |
| Abc                                                                                  | 8139.01  | 1992.93 | 13985.86 | 16%      |
| Opine                                                                                | 5914.57  | 3122.30 | 99007.94 | 12%      |
| Acorn                                                                                | 4019.48  | 4410.42 | 53762.68 | 8%       |
| Express                                                                              | 3524.12  | 1023.26 | 9320.80  | 7%       |
| Servest                                                                              | 3436.18  | 1235.61 | 18695.69 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-4e43b2bb-f4e7-4631-ab88-5b41aac750b8) |          |         |          |          |

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
| 8139.01  | 1992.93 | 13985.86 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5266.14 | 7116.30 | 8636.97 | 9413.09 | 10396.17 | 10824.74 | 11366.48 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 8ms      | 9ms      | 13ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4019.48  | 4410.42 | 53762.68 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 93.88 | 2267.16 | 3057.88 | 5447.45 | 7050.61 | 8062.42 | 27368.77 |
| **Latency** | 6ms   | 8ms     | 12ms    | 21ms    | 25ms    | 27ms    | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21851.50 | 6290.67 | 31796.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11605.75 | 19901.35 | 24609.48 | 26010.54 | 27023.93 | 27530.72 | 28520.71 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16064.85 | 3155.48 | 22181.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12161.81 | 14705.39 | 17048.41 | 18113.59 | 18890.89 | 19385.30 | 20389.28 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49830.67 | 7200.35 | 64043.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40645.48 | 46809.70 | 51434.41 | 54214.58 | 57058.48 | 59388.32 | 62079.47 |
| **Latency** | 651µs    | 777µs    | 962µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39052.47 | 6626.00 | 49448.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30657.14 | 36137.17 | 40828.27 | 43721.37 | 45332.30 | 46102.25 | 47417.97 |
| **Latency** | 864µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10122.27 | 2437.77 | 19562.51 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6324.66 | 9141.86 | 10870.43 | 11662.22 | 12404.20 | 12789.14 | 13812.69 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 7ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3524.12  | 1023.26 | 9320.80 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2059.56 | 2941.44 | 3903.98 | 4232.93 | 4394.91 | 4475.00 | 4854.26 |
| **Latency** | 11ms    | 11ms    | 12ms    | 15ms    | 19ms    | 22ms    | 28ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36161.77 | 6446.52 | 49706.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29108.79 | 33619.80 | 37172.79 | 40664.11 | 42619.29 | 43323.62 | 44680.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14102.55 | 2909.54 | 18525.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10838.24 | 13894.33 | 14958.02 | 15653.83 | 16248.24 | 16590.23 | 17340.45 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 9ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29620.33 | 4948.44 | 37393.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24208.91 | 28670.50 | 30823.70 | 32546.34 | 33816.53 | 34428.53 | 35594.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29154.08 | 6685.43 | 39489.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17348.90 | 27802.56 | 31963.39 | 33271.39 | 34255.51 | 34626.97 | 35534.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 6ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16855.83 | 3705.15 | 55095.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12324.37 | 15211.27 | 17987.94 | 19244.04 | 20113.44 | 20484.29 | 21201.18 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 7ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32853.44 | 5539.23 | 41478.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27215.15 | 31286.75 | 33942.86 | 36161.97 | 38150.56 | 38791.59 | 40466.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15945.45 | 3034.30 | 20100.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12653.00 | 15665.18 | 16813.94 | 17703.01 | 18284.53 | 18564.67 | 19099.68 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14289.72 | 3099.47 | 19663.32 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9957.81 | 13217.72 | 15157.17 | 16325.31 | 17106.20 | 17511.54 | 18336.67 |
| **Latency** | 2ms     | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5914.57  | 3122.30 | 99007.94 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4331.49 | 5351.05 | 6074.22 | 6497.18 | 6879.60 | 7173.34 | 8357.62 |
| **Latency** | 6ms     | 7ms     | 8ms     | 9ms     | 10ms    | 12ms    | 16ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28782.19 | 4938.93 | 35176.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23329.18 | 28134.83 | 30129.03 | 31522.35 | 32683.04 | 33159.14 | 34240.01 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20031.16 | 3921.39 | 26206.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14733.70 | 18510.87 | 21300.16 | 22744.53 | 23470.27 | 24010.18 | 24768.44 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3436.18  | 1235.61 | 18695.69 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1714.70 | 3136.86 | 3648.12 | 4074.44 | 4528.89 | 4819.77 | 5190.40 |
| **Latency** | 12ms    | 12ms    | 13ms    | 15ms    | 20ms    | 24ms    | 31ms    |

---

<p align="center">Generated 2022-10-29T02:26:18.788Z</p>
