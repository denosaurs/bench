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
| Bun                                                                                  | 54381.40 | 7307.10 | 148148.15 | 100%     |
| Deno                                                                                 | 43465.94 | 5285.15 | 53478.20  | 80%      |
| Fast                                                                                 | 42064.32 | 5960.30 | 50820.93  | 77%      |
| Megalo                                                                               | 38937.28 | 5576.60 | 47870.83  | 72%      |
| Reno                                                                                 | 33317.65 | 3895.76 | 39257.84  | 61%      |
| http                                                                                 | 33282.03 | 6723.92 | 40567.65  | 61%      |
| Hono                                                                                 | 33135.06 | 4049.02 | 42208.23  | 61%      |
| Alosaur                                                                              | 24705.23 | 5958.44 | 31578.31  | 45%      |
| Router                                                                               | 22763.68 | 3603.48 | 27846.95  | 42%      |
| Little                                                                               | 19331.77 | 3321.96 | 24404.67  | 36%      |
| Aqua                                                                                 | 18548.18 | 3123.12 | 23319.84  | 34%      |
| Node                                                                                 | 15921.93 | 2629.59 | 40702.59  | 29%      |
| Oak                                                                                  | 15890.81 | 2779.44 | 21402.41  | 29%      |
| Fastify                                                                              | 11635.01 | 3422.05 | 15669.45  | 21%      |
| Dinatra                                                                              | 11067.89 | 2081.93 | 17746.27  | 20%      |
| Abc                                                                                  | 7996.55  | 2211.50 | 13113.25  | 15%      |
| Opine                                                                                | 6761.75  | 2879.13 | 97087.38  | 12%      |
| Servest                                                                              | 3922.23  | 2114.99 | 53036.16  | 7%       |
| Acorn                                                                                | 3842.87  | 3107.98 | 50633.09  | 7%       |
| Express                                                                              | 3720.02  | 881.23  | 10065.96  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-9566eef5-fcb2-43a1-8383-cf712be23a0c) |          |         |           |          |

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
| 7996.55  | 2211.50 | 13113.25 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 5319.86 | 5617.04 | 8870.79 | 9825.94 | 10449.11 | 10770.11 | 11322.79 |
| **Latency** | 4ms     | 5ms     | 5ms     | 6ms     | 9ms      | 9ms      | 12ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3842.87  | 3107.98 | 50633.09 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 1565.95 | 2404.94 | 3098.47 | 4982.20 | 7425.43 | 8217.29 | 9275.30 |
| **Latency** | 5ms     | 7ms     | 13ms    | 19ms    | 23ms    | 25ms    | 27ms    |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24705.23 | 5958.44 | 31578.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15207.09 | 23774.88 | 27220.76 | 28339.44 | 29185.41 | 29721.19 | 30713.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18548.18 | 3123.12 | 23319.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15053.21 | 17406.31 | 19576.58 | 20398.58 | 21152.88 | 21645.25 | 22480.41 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 54381.40 | 7307.10 | 148148.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44806.67 | 52606.35 | 55615.72 | 58026.54 | 61069.82 | 62813.35 | 66198.73 |
| **Latency** | 600µs    | 715µs    | 899µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43465.94 | 5285.15 | 53478.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36033.93 | 42406.43 | 45114.06 | 46610.22 | 47819.69 | 48526.77 | 50239.96 |
| **Latency** | 772µs    | 918µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11067.89 | 2081.93 | 17746.27 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8408.09 | 10335.89 | 11422.76 | 12472.75 | 13196.24 | 13520.18 | 14056.90 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3720.02  | 881.23 | 10065.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2405.03 | 3472.83 | 4029.22 | 4208.89 | 4356.69 | 4445.53 | 4746.01 |
| **Latency** | 11ms    | 11ms    | 12ms    | 13ms    | 17ms    | 20ms    | 26ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42064.32 | 5960.30 | 50820.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33373.49 | 40310.08 | 44153.62 | 45806.05 | 47057.72 | 47872.92 | 49626.37 |
| **Latency** | 890µs    | 997µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11635.01 | 3422.05 | 15669.45 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6188.71 | 7181.82 | 13510.59 | 14062.64 | 14408.96 | 14633.69 | 14921.70 |
| **Latency** | 3ms     | 3ms     | 3ms      | 3ms      | 7ms      | 8ms      | 9ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33135.06 | 4049.02 | 42208.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29435.68 | 31708.52 | 33804.47 | 35537.61 | 36810.03 | 37822.02 | 39120.43 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33282.03 | 6723.92 | 40567.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22015.69 | 32905.68 | 35963.99 | 37003.64 | 38115.40 | 38627.13 | 39763.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19331.77 | 3321.96 | 24404.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16035.68 | 18346.81 | 20448.28 | 21327.24 | 21903.78 | 22328.46 | 23169.54 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38937.28 | 5576.60 | 47870.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32301.96 | 36053.12 | 40573.47 | 42807.38 | 44231.75 | 44961.26 | 46375.28 |
| **Latency** | 990µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15921.93 | 2629.59 | 40702.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14159.51 | 15785.28 | 16574.63 | 17100.56 | 17579.33 | 17924.60 | 18304.99 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15890.81 | 2779.44 | 21402.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12556.66 | 15315.81 | 16819.86 | 17432.14 | 17897.51 | 18380.54 | 19165.60 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6761.75  | 2879.13 | 97087.38 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5681.19 | 6321.12 | 6817.08 | 7150.43 | 7537.28 | 8020.83 | 9008.68 |
| **Latency** | 5ms     | 6ms     | 7ms     | 8ms     | 8ms     | 9ms     | 13ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33317.65 | 3895.76 | 39257.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30705.90 | 32600.16 | 34065.26 | 35236.66 | 36216.38 | 36904.14 | 37812.94 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22763.68 | 3603.48 | 27846.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18207.65 | 22091.73 | 23866.65 | 24987.04 | 25780.99 | 26348.06 | 26992.38 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3922.23  | 2114.99 | 53036.16 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2129.13 | 3654.46 | 4109.26 | 4446.05 | 4854.59 | 5038.37 | 5307.87 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 17ms    | 20ms    | 25ms    |

---

<p align="center">Generated 2022-10-30T02:47:33.629Z</p>
