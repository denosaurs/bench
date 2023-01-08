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
  - [Fastro](#fastro)
  - [Hono](#hono)
  - [http](#http)
  - [Hyper Express](#hyper-express)
  - [Little](#little)
  - [Megalo](#megalo)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
  - [Peko](#peko)
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
    - [Fastro](#fastro-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Hyper Express](#hyper-express-1)
    - [Little](#little-1)
    - [Megalo](#megalo-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Peko](#peko-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Bun                                                                                  | 60411.36 | 11810.37 | 79464.89  | 100%     |
| Hyper Express                                                                        | 51750.19 | 11792.08 | 59205.29  | 86%      |
| Hono                                                                                 | 48842.32 | 12933.63 | 66445.95  | 81%      |
| Deno                                                                                 | 47733.20 | 11609.21 | 67330.53  | 79%      |
| Fast                                                                                 | 46929.71 | 12743.05 | 62265.13  | 78%      |
| Megalo                                                                               | 45369.09 | 13309.14 | 60543.45  | 75%      |
| http                                                                                 | 43044.49 | 10568.92 | 50704.09  | 71%      |
| Fastro                                                                               | 41865.65 | 8505.56  | 48813.83  | 69%      |
| Peko                                                                                 | 40469.48 | 9528.80  | 53754.07  | 67%      |
| Reno                                                                                 | 38785.10 | 11730.57 | 71524.40  | 64%      |
| Node                                                                                 | 36827.51 | 6215.07  | 40333.86  | 61%      |
| Alosaur                                                                              | 34962.83 | 7583.67  | 51007.40  | 58%      |
| Fastify                                                                              | 31632.82 | 6301.87  | 35912.86  | 52%      |
| Router                                                                               | 27898.72 | 5967.69  | 36000.55  | 46%      |
| Little                                                                               | 27894.67 | 4701.68  | 33058.02  | 46%      |
| Oak                                                                                  | 25184.80 | 4330.50  | 29162.53  | 42%      |
| Aqua                                                                                 | 25153.45 | 3812.15  | 29036.31  | 42%      |
| Dinatra                                                                              | 18727.74 | 4039.77  | 23396.57  | 31%      |
| Abc                                                                                  | 16549.16 | 3561.73  | 21463.95  | 27%      |
| Opine                                                                                | 9994.57  | 4486.11  | 149251.91 | 17%      |
| Express                                                                              | 6910.92  | 1527.23  | 10723.52  | 11%      |
| Servest                                                                              | 6034.60  | 4542.42  | 141843.97 | 10%      |
| Acorn                                                                                | 4110.51  | 4232.72  | 101347.93 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-339372ef-6036-4d88-bed4-58fa098c4af8) |          |          |           |          |

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

## [Fastro](https://fastro.dev)

Fast and simple web application framework for deno

## [Hono](https://github.com/honojs/hono)

Ultrafast web framework for Cloudflare Workers and Deno. Fast, but not only
fast.

## [http](https://deno.land/std/http)

The deno standard library http server

## [Hyper Express](https://github.com/kartikk221/hyper-express)

High performance Node.js webserver with a simple-to-use API powered by
uWebsockets.js under the hood.

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

## [Peko](https://peko.deno.dev)

Featherweight server/router framework + middleware and handler library 🐣

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
| 16549.16 | 3561.73 | 21463.95 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9218.28 | 15334.50 | 17754.19 | 18512.98 | 20168.77 | 20498.22 | 20779.41 |
| **Latency** | 2ms     | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4110.51  | 4232.72 | 101347.93 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2006.63 | 2483.56 | 3000.88 | 4123.58 | 8853.30 | 10750.82 | 12600.92 |
| **Latency** | 4ms     | 5ms     | 12ms    | 17ms    | 21ms    | 23ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34962.83 | 7583.67 | 51007.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24136.05 | 36717.39 | 38354.41 | 38868.86 | 39231.92 | 39447.08 | 39994.85 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25153.45 | 3812.15 | 29036.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22334.26 | 23631.74 | 26597.56 | 27280.09 | 27991.78 | 28268.36 | 28550.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60411.36 | 11810.37 | 79464.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46154.12 | 49914.61 | 59737.07 | 72437.86 | 74115.76 | 74941.41 | 77007.90 |
| **Latency** | 494µs    | 615µs    | 753µs    | 943µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47733.20 | 11609.21 | 67330.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32110.77 | 40994.98 | 47423.18 | 58600.45 | 62415.81 | 63006.06 | 64105.35 |
| **Latency** | 631µs    | 793µs    | 910µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18727.74 | 4039.77 | 23396.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11825.56 | 15913.16 | 21072.24 | 21389.09 | 21560.45 | 21662.85 | 22450.37 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6910.92  | 1527.23 | 10723.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4353.66 | 6734.30 | 7669.20 | 7792.60 | 7892.53 | 7924.52 | 7979.59 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46929.71 | 12743.05 | 62265.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29079.53 | 41036.56 | 46455.57 | 59119.63 | 60536.44 | 61019.65 | 61604.17 |
| **Latency** | 732µs    | 796µs    | 891µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31632.82 | 6301.87 | 35912.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30546.83 | 32672.95 | 33585.73 | 34163.98 | 34422.81 | 34516.66 | 34684.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41865.65 | 8505.56 | 48813.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29601.24 | 42000.13 | 45939.20 | 46524.29 | 46910.96 | 47105.34 | 47427.27 |
| **Latency** | 942µs    | 998µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48842.32 | 12933.63 | 66445.95 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31450.01 | 41186.11 | 52548.18 | 60108.43 | 61055.85 | 61509.91 | 62274.92 |
| **Latency** | 641µs    | 777µs    | 912µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43044.49 | 10568.92 | 50704.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25524.81 | 37417.67 | 48815.60 | 49348.84 | 49801.97 | 50032.63 | 50335.23 |
| **Latency** | 891µs    | 950µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51750.19 | 11792.08 | 59205.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22832.42 | 55781.40 | 57024.50 | 57740.96 | 58010.40 | 58122.60 | 58385.22 |
| **Latency** | 804µs    | 816µs    | 829µs    | 849µs    | 1ms      | 2ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27894.67 | 4701.68 | 33058.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22418.57 | 26369.84 | 29969.81 | 30875.10 | 31185.78 | 31750.63 | 32243.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45369.09 | 13309.14 | 60543.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23338.26 | 37207.05 | 53004.21 | 54947.24 | 56127.28 | 56549.92 | 57358.65 |
| **Latency** | 806µs    | 860µs    | 927µs    | 999µs    | 1ms      | 2ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36827.51 | 6215.07 | 40333.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34734.36 | 37653.07 | 38577.90 | 39380.31 | 39724.20 | 39904.13 | 40122.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25184.80 | 4330.50 | 29162.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21117.51 | 24617.96 | 26984.59 | 27246.64 | 27634.72 | 28128.67 | 28537.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9994.57  | 4486.11 | 149251.91 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8205.66 | 9210.87 | 10178.81 | 10500.48 | 11552.39 | 12372.83 | 14106.40 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 6ms      | 6ms      | 9ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40469.48 | 9528.80 | 53754.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24775.72 | 35885.03 | 45438.14 | 46108.61 | 46447.21 | 46618.62 | 46907.86 |
| **Latency** | 950µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38785.10 | 11730.57 | 71524.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18682.00 | 30884.84 | 45416.78 | 46136.31 | 46751.17 | 47090.39 | 47789.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27898.72 | 5967.69 | 36000.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20109.99 | 24011.11 | 29540.00 | 32933.24 | 33369.95 | 33795.73 | 34483.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6034.60  | 4542.42 | 141843.97 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3221.58 | 5842.94 | 6531.74 | 6866.81 | 7222.27 | 7301.19 | 8467.14 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 12ms    | 14ms    | 21ms    |

---

<p align="center">Generated 2023-01-08T01:53:45.737Z</p>
