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
  - [Express (Deno)](#express-deno)
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
    - [Express (Deno)](#express-deno-1)
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
| Hyper Express                                                                        | 52581.74 | 15187.10 | 69479.31  | 100%     |
| Bun                                                                                  | 51838.26 | 10327.31 | 70519.67  | 99%      |
| Hono                                                                                 | 41368.26 | 12441.14 | 55207.14  | 79%      |
| Deno                                                                                 | 41192.17 | 12310.77 | 165067.46 | 78%      |
| Megalo                                                                               | 39576.27 | 11106.07 | 51125.35  | 75%      |
| Fast                                                                                 | 39252.61 | 13224.41 | 56215.17  | 75%      |
| Fastro                                                                               | 39050.59 | 15025.12 | 81454.23  | 74%      |
| http                                                                                 | 35498.82 | 8367.52  | 142857.14 | 68%      |
| Peko                                                                                 | 33908.42 | 6993.87  | 59641.55  | 64%      |
| Reno                                                                                 | 31548.90 | 9613.54  | 44411.05  | 60%      |
| Node                                                                                 | 31100.72 | 4821.01  | 34728.82  | 59%      |
| Alosaur                                                                              | 29329.86 | 6559.35  | 36306.85  | 56%      |
| Fastify                                                                              | 27019.23 | 5378.15  | 29814.16  | 51%      |
| Router                                                                               | 25239.22 | 4335.67  | 62150.02  | 48%      |
| Little                                                                               | 22662.88 | 3819.05  | 26314.56  | 43%      |
| Aqua                                                                                 | 20493.18 | 3410.51  | 25209.48  | 39%      |
| Oak                                                                                  | 20222.32 | 3609.59  | 28972.04  | 38%      |
| Dinatra                                                                              | 15913.37 | 3500.87  | 22894.93  | 30%      |
| Abc                                                                                  | 13961.75 | 2730.11  | 19129.60  | 27%      |
| Opine                                                                                | 8134.91  | 1097.95  | 11442.87  | 15%      |
| Express (Deno)                                                                       | 7694.91  | 2822.99  | 76383.66  | 15%      |
| Express                                                                              | 5171.66  | 1480.81  | 9948.12   | 10%      |
| Servest                                                                              | 4814.92  | 1319.74  | 6894.10   | 9%       |
| Acorn                                                                                | 4147.52  | 3989.39  | 78073.15  | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-6d9d828d-edec-47da-a366-4dd47d9269fa) |          |          |           |          |

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

## [Express (Deno)](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js, run on Deno

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
| 13961.75 | 2730.11 | 19129.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10618.25 | 12867.93 | 15230.75 | 15466.39 | 15729.40 | 16038.73 | 16974.79 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4147.52  | 3989.39 | 78073.15 |     |

| **Stat**    | 10     | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------ | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 800.31 | 2300.04 | 3080.87 | 5453.17 | 8119.52 | 9822.20 | 19768.38 |
| **Latency** | 5ms    | 6ms     | 13ms    | 20ms    | 24ms    | 26ms    | 27ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29329.86 | 6559.35 | 36306.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19704.92 | 29585.78 | 32411.98 | 33004.60 | 33375.17 | 33611.89 | 34119.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20493.18 | 3410.51 | 25209.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17480.24 | 19008.73 | 22027.57 | 22370.91 | 22571.05 | 22789.19 | 23737.20 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51838.26 | 10327.31 | 70519.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40354.01 | 44370.12 | 48951.37 | 62202.46 | 65722.97 | 66465.37 | 67887.57 |
| **Latency** | 565µs    | 714µs    | 857µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 41192.17 | 12310.77 | 165067.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26941.55 | 36419.28 | 39948.76 | 52648.34 | 56013.40 | 56625.91 | 57591.60 |
| **Latency** | 728µs    | 896µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15913.37 | 3500.87 | 22894.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11108.10 | 14909.09 | 16145.20 | 18808.71 | 19409.85 | 19639.09 | 20241.85 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5171.66  | 1480.81 | 9948.12 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3360.83 | 3818.17 | 6079.27 | 6267.18 | 6352.40 | 6387.77 | 6492.06 |
| **Latency** | 7ms     | 7ms     | 8ms     | 10ms    | 13ms    | 15ms    | 21ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7694.91  | 2822.99 | 76383.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6005.73 | 7302.92 | 8107.58 | 8333.41 | 8598.45 | 9226.99 | 10161.27 |
| **Latency** | 5ms     | 6ms     | 6ms     | 6ms     | 8ms     | 8ms     | 15ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39252.61 | 13224.41 | 56215.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17255.55 | 33470.50 | 40600.03 | 51001.50 | 51932.17 | 52460.38 | 53318.10 |
| **Latency** | 864µs    | 930µs    | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27019.23 | 5378.15 | 29814.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24791.47 | 27982.53 | 28727.84 | 29113.37 | 29343.99 | 29465.98 | 29647.71 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39050.59 | 15025.12 | 81454.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14981.48 | 37068.61 | 46812.14 | 48418.37 | 50080.23 | 50881.82 | 51570.28 |
| **Latency** | 945µs    | 987µs    | 1ms      | 1ms      | 1ms      | 2ms      | 9ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41368.26 | 12441.14 | 55207.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20299.20 | 36804.40 | 46611.62 | 50742.09 | 51544.10 | 52004.64 | 52868.17 |
| **Latency** | 884µs    | 942µs    | 999µs    | 1ms      | 1ms      | 1ms      | 5ms      |

### [http](#http)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 35498.82 | 8367.52 | 142857.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24831.52 | 35103.87 | 39008.17 | 39550.59 | 39862.56 | 40021.54 | 40419.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52581.74 | 15187.10 | 69479.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30844.53 | 32795.65 | 61206.46 | 65772.85 | 66934.11 | 67403.15 | 68331.58 |
| **Latency** | 575µs    | 678µs    | 828µs    | 964µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22662.88 | 3819.05 | 26314.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19938.73 | 21566.40 | 24354.86 | 24627.19 | 24831.35 | 25148.21 | 25767.00 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39576.27 | 11106.07 | 51125.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22233.47 | 36231.07 | 45732.36 | 47396.63 | 48118.11 | 48501.51 | 49104.25 |
| **Latency** | 925µs    | 996µs    | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31100.72 | 4821.01 | 34728.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30818.16 | 31604.40 | 32175.91 | 32822.95 | 33092.64 | 33216.25 | 33574.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20222.32 | 3609.59 | 28972.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16711.16 | 19748.34 | 21707.03 | 22050.38 | 22396.88 | 22713.58 | 23212.62 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8134.91  | 1097.95 | 11442.87 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 7054.29 | 7710.42 | 8472.61 | 8663.22 | 8848.28 | 9279.69 | 10459.26 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 7ms     | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33908.42 | 6993.87 | 59641.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25354.75 | 34203.40 | 36982.45 | 37423.40 | 37987.17 | 38211.37 | 38674.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31548.90 | 9613.54 | 44411.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15634.61 | 23810.94 | 36679.57 | 38324.89 | 39305.70 | 39722.74 | 40667.60 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25239.22 | 4335.67 | 62150.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20418.98 | 25636.90 | 26690.57 | 27316.37 | 27847.26 | 28095.10 | 28432.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4814.92  | 1319.74 | 6894.10 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2483.08 | 5026.98 | 5314.68 | 5531.15 | 5660.56 | 5733.08 | 6157.25 |
| **Latency** | 8ms     | 9ms     | 9ms     | 9ms     | 14ms    | 16ms    | 25ms    |

---

<p align="center">Generated 2023-03-31T01:43:57.635Z</p>
