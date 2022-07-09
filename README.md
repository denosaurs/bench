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
  - [Alosaur](#alosaur)
  - [Aqua](#aqua)
  - [Bun](#bun)
  - [Deno](#deno)
  - [Dinatra](#dinatra)
  - [Drash](#drash)
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
  - [tinyhttp](#tinyhttp)
  - [Servest](#servest)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Deno](#deno-1)
    - [Dinatra](#dinatra-1)
    - [Drash](#drash-1)
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
    - [tinyhttp](#tinyhttp-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework | Average  | Stddev  | Min      | Max      | Total     |
| --------- | -------- | ------- | -------- | -------- | --------- |
| Deno      | 42986.19 | 2915.82 | 33867.00 | 44360.00 | 472784.00 |
| Fast      | 42485.60 | 3358.12 | 32578.00 | 44248.00 | 424847.00 |
| http      | 42383.20 | 3347.70 | 32512.00 | 43958.00 | 423806.00 |
| Node      | 41757.60 | 4791.03 | 27478.00 | 44190.00 | 417603.00 |
| Hono      | 39559.20 | 3027.61 | 30554.00 | 41048.00 | 395646.00 |
| Bun       | 38915.64 | 2134.14 | 32204.00 | 39920.00 | 428124.00 |
| Fastify   | 36432.73 | 4539.75 | 22163.00 | 38696.00 | 400784.00 |
| Reno      | 30560.00 | 2270.81 | 23909.00 | 31844.00 | 305600.00 |
| Router    | 28726.55 | 1819.04 | 23190.00 | 29784.00 | 315986.00 |
| Alosaur   | 27237.82 | 8412.01 | 15485.00 | 35324.00 | 299650.00 |
| Oak       | 24928.73 | 2195.25 | 18043.00 | 25854.00 | 274239.00 |
| Aqua      | 23416.00 | 1735.03 | 18228.00 | 24136.00 | 234141.00 |
| Abc       | 17115.28 | 1381.26 | 12776.00 | 17808.00 | 188267.00 |
| Drash     | 16179.20 | 1259.43 | 12825.00 | 17248.00 | 161771.00 |
| Little    | 13985.10 | 1149.69 | 10436.00 | 14539.00 | 153830.00 |
| Dinatra   | 11399.20 | 842.68  | 9074.00  | 12032.00 | 113977.00 |
| Opine     | 9581.00  | 922.34  | 6853.00  | 10146.00 | 95801.00  |
| Express   | 6849.30  | 974.90  | 3967.00  | 7387.00  | 68492.00  |
| Servest   | 5390.80  | 432.22  | 4106.00  | 5693.00  | 53908.00  |
| tinyhttp  | 3960.80  | 642.40  | 3160.00  | 5400.00  | 39599.00  |

# Frameworks

## [Abc](https://deno.land/x/abc)

A better Deno framework to create web application

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

## [Drash](https://deno.land/x/drash)

A REST microframework for Deno's HTTP server with zero dependencies.

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

## [tinyhttp](https://deno.land/x/tinyhttp)

🦕 Deno port of tinyhttp, 0-legacy, tiny & fast web framework

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 17115.28 | 1381.26 | 12776.00 | 17808.00 | 188267.00 |
| **Bytes/Sec** | 1.59 MB  | 128 kB  | 1.19 MB  | 1.66 MB  | 17.5 MB   |
| **Latency**   | 2ms      | 700µs   | 1ms      | 35ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 12783.00 | 12783.00 | 17583.00 | 17695.00 | 17823.00 | 17823.00 |
| **Bytes/Sec** | 1.19 MB  | 1.19 MB  | 1.64 MB  | 1.64 MB  | 1.66 MB  | 1.66 MB  |
| **Latency**   | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Alosaur](#alosaur)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 27237.82 | 8412.01 | 15485.00 | 35324.00 | 299650.00 |
| **Bytes/Sec** | 3.05 MB  | 942 kB  | 1.73 MB  | 3.96 MB  | 33.6 MB   |
| **Latency**   | 1ms      | 960µs   | 1ms      | 22ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 15487.00 | 15487.00 | 31487.00 | 35295.00 | 35327.00 | 35327.00 |
| **Bytes/Sec** | 1.73 MB  | 1.73 MB  | 3.53 MB  | 3.95 MB  | 3.96 MB  | 3.96 MB  |
| **Latency**   | 0ms      | 0ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 23416.00 | 1735.03 | 18228.00 | 24136.00 | 234141.00 |
| **Bytes/Sec** | 3.56 MB  | 264 kB  | 2.77 MB  | 3.67 MB  | 35.6 MB   |
| **Latency**   | 1ms      | 700µs   | 1ms      | 41ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 18239.00 | 18239.00 | 24031.00 | 24127.00 | 24143.00 | 24143.00 |
| **Bytes/Sec** | 2.77 MB  | 2.77 MB  | 3.65 MB  | 3.67 MB  | 3.67 MB  | 3.67 MB  |
| **Latency**   | 0ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 38915.64 | 2134.14 | 32204.00 | 39920.00 | 428124.00 |
| **Bytes/Sec** | 3.58 MB  | 196 kB  | 2.96 MB  | 3.67 MB  | 39.4 MB   |
| **Latency**   | 210µs    | 480µs   | 1ms      | 18ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 32207.00 | 32207.00 | 39615.00 | 39903.00 | 39935.00 | 39935.00 |
| **Bytes/Sec** | 2.96 MB  | 2.96 MB  | 3.65 MB  | 3.67 MB  | 3.67 MB  | 3.67 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 42986.19 | 2915.82 | 33867.00 | 44360.00 | 472784.00 |
| **Bytes/Sec** | 6.53 MB  | 444 kB  | 5.15 MB  | 6.74 MB  | 71.9 MB   |
| **Latency**   | 470µs    | 670µs   | 1ms      | 19ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 33887.00 | 33887.00 | 43999.00 | 44319.00 | 44383.00 | 44383.00 |
| **Bytes/Sec** | 5.15 MB  | 5.15 MB  | 6.68 MB  | 6.73 MB  | 6.75 MB  | 6.75 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat**      | Average  | Stddev  | Min     | Max      | Total     |
| ------------- | -------- | ------- | ------- | -------- | --------- |
| **Req/Sec**   | 11399.20 | 842.68  | 9074.00 | 12032.00 | 113977.00 |
| **Bytes/Sec** | 593 kB   | 43.8 kB | 472 kB  | 626 kB   | 5.93 MB   |
| **Latency**   | 3ms      | 2ms     | 1ms     | 85ms     | N/A       |

| **Stat**      | 1       | 2.5     | 50       | 90       | 97.5     | 99       |
| ------------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 9079.00 | 9079.00 | 11559.00 | 11991.00 | 12039.00 | 12039.00 |
| **Bytes/Sec** | 472 kB  | 472 kB  | 601 kB   | 624 kB   | 626 kB   | 626 kB   |
| **Latency**   | 2ms     | 2ms     | 3ms      | 3ms      | 7ms      | 7ms      |

### [Drash](#drash)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 16179.20 | 1259.43 | 12825.00 | 17248.00 | 161771.00 |
| **Bytes/Sec** | 1.5 MB   | 117 kB  | 1.19 MB  | 1.6 MB   | 15 MB     |
| **Latency**   | 2ms      | 920µs   | 1ms      | 47ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 12831.00 | 12831.00 | 16591.00 | 17231.00 | 17263.00 | 17263.00 |
| **Bytes/Sec** | 1.19 MB  | 1.19 MB  | 1.54 MB  | 1.6 MB   | 1.6 MB   | 1.6 MB   |
| **Latency**   | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat**      | Average | Stddev | Min     | Max     | Total    |
| ------------- | ------- | ------ | ------- | ------- | -------- |
| **Req/Sec**   | 6849.30 | 974.90 | 3967.00 | 7387.00 | 68492.00 |
| **Bytes/Sec** | 1.64 MB | 234 kB | 952 kB  | 1.77 MB | 16.4 MB  |
| **Latency**   | 5ms     | 1ms    | 1ms     | 36ms    | N/A      |

| **Stat**      | 1       | 2.5     | 50      | 90      | 97.5    | 99      |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 3967.00 | 3967.00 | 7191.00 | 7263.00 | 7387.00 | 7387.00 |
| **Bytes/Sec** | 952 kB  | 952 kB  | 1.73 MB | 1.74 MB | 1.77 MB | 1.77 MB |
| **Latency**   | 4ms     | 5ms     | 5ms     | 7ms     | 11ms    | 13ms    |

### [Fast](#fast)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 42485.60 | 3358.12 | 32578.00 | 44248.00 | 424847.00 |
| **Bytes/Sec** | 6.46 MB  | 512 kB  | 4.95 MB  | 6.73 MB  | 64.6 MB   |
| **Latency**   | 160µs    | 620µs   | 1ms      | 27ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 32591.00 | 32591.00 | 43647.00 | 44095.00 | 44255.00 | 44255.00 |
| **Bytes/Sec** | 4.95 MB  | 4.95 MB  | 6.64 MB  | 6.71 MB  | 6.73 MB  | 6.73 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 36432.73 | 4539.75 | 22163.00 | 38696.00 | 400784.00 |
| **Bytes/Sec** | 6.49 MB  | 808 kB  | 3.95 MB  | 6.89 MB  | 71.3 MB   |
| **Latency**   | 460µs    | 760µs   | 1ms      | 23ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 22175.00 | 22175.00 | 37631.00 | 38623.00 | 38719.00 | 38719.00 |
| **Bytes/Sec** | 3.95 MB  | 3.95 MB  | 6.7 MB   | 6.87 MB  | 6.89 MB  | 6.89 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 2ms      | 2ms      |

### [Hono](#hono)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 39559.20 | 3027.61 | 30554.00 | 41048.00 | 395646.00 |
| **Bytes/Sec** | 6.05 MB  | 463 kB  | 4.67 MB  | 6.28 MB  | 60.5 MB   |
| **Latency**   | 170µs    | 640µs   | 1ms      | 22ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 30559.00 | 30559.00 | 40479.00 | 40927.00 | 41055.00 | 41055.00 |
| **Bytes/Sec** | 4.68 MB  | 4.68 MB  | 6.19 MB  | 6.26 MB  | 6.28 MB  | 6.28 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 2ms      | 3ms      |

### [http](#http)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 42383.20 | 3347.70 | 32512.00 | 43958.00 | 423806.00 |
| **Bytes/Sec** | 7.04 MB  | 556 kB  | 5.4 MB   | 7.3 MB   | 70.4 MB   |
| **Latency**   | 170µs    | 600µs   | 1ms      | 20ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 32527.00 | 32527.00 | 43647.00 | 43935.00 | 43967.00 | 43967.00 |
| **Bytes/Sec** | 5.4 MB   | 5.4 MB   | 7.25 MB  | 7.29 MB  | 7.3 MB   | 7.3 MB   |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 13985.10 | 1149.69 | 10436.00 | 14539.00 | 153830.00 |
| **Bytes/Sec** | 2.13 MB  | 175 kB  | 1.59 MB  | 2.21 MB  | 23.4 MB   |
| **Latency**   | 2ms      | 780µs   | 1ms      | 20ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 10439.00 | 10439.00 | 14455.00 | 14511.00 | 14543.00 | 14543.00 |
| **Bytes/Sec** | 1.59 MB  | 1.59 MB  | 2.2 MB   | 2.21 MB  | 2.21 MB  | 2.21 MB  |
| **Latency**   | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Node](#node)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 41757.60 | 4791.03 | 27478.00 | 44190.00 | 417603.00 |
| **Bytes/Sec** | 5.68 MB  | 652 kB  | 3.74 MB  | 6.01 MB  | 56.8 MB   |
| **Latency**   | 230µs    | 620µs   | 1ms      | 23ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 27487.00 | 27487.00 | 43007.00 | 44127.00 | 44191.00 | 44191.00 |
| **Bytes/Sec** | 3.74 MB  | 3.74 MB  | 5.85 MB  | 6 MB     | 6.01 MB  | 6.01 MB  |
| **Latency**   | 0ms      | 0ms      | 0ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 24928.73 | 2195.25 | 18043.00 | 25854.00 | 274239.00 |
| **Bytes/Sec** | 3.81 MB  | 336 kB  | 2.76 MB  | 3.96 MB  | 42 MB     |
| **Latency**   | 1ms      | 660µs   | 1ms      | 23ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 18047.00 | 18047.00 | 25711.00 | 25839.00 | 25855.00 | 25855.00 |
| **Bytes/Sec** | 2.76 MB  | 2.76 MB  | 3.93 MB  | 3.95 MB  | 3.96 MB  | 3.96 MB  |
| **Latency**   | 0ms      | 1ms      | 1ms      | 1ms      | 3ms      | 3ms      |

### [Opine](#opine)

| **Stat**      | Average | Stddev | Min     | Max      | Total    |
| ------------- | ------- | ------ | ------- | -------- | -------- |
| **Req/Sec**   | 9581.00 | 922.34 | 6853.00 | 10146.00 | 95801.00 |
| **Bytes/Sec** | 2.05 MB | 197 kB | 1.47 MB | 2.17 MB  | 20.5 MB  |
| **Latency**   | 3ms     | 1ms    | 1ms     | 43ms     | N/A      |

| **Stat**      | 1       | 2.5     | 50      | 90       | 97.5     | 99       |
| ------------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec**   | 6855.00 | 6855.00 | 9919.00 | 10071.00 | 10151.00 | 10151.00 |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.12 MB | 2.15 MB  | 2.17 MB  | 2.17 MB  |
| **Latency**   | 1ms     | 1ms     | 4ms     | 4ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 30560.00 | 2270.81 | 23909.00 | 31844.00 | 305600.00 |
| **Bytes/Sec** | 4.65 MB  | 346 kB  | 3.63 MB  | 4.84 MB  | 46.5 MB   |
| **Latency**   | 1ms      | 560µs   | 1ms      | 20ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 23919.00 | 23919.00 | 31359.00 | 31695.00 | 31855.00 | 31855.00 |
| **Bytes/Sec** | 3.64 MB  | 3.64 MB  | 4.77 MB  | 4.82 MB  | 4.84 MB  | 4.84 MB  |
| **Latency**   | 0ms      | 0ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat**      | Average  | Stddev  | Min      | Max      | Total     |
| ------------- | -------- | ------- | -------- | -------- | --------- |
| **Req/Sec**   | 28726.55 | 1819.04 | 23190.00 | 29784.00 | 315986.00 |
| **Bytes/Sec** | 4.37 MB  | 276 kB  | 3.52 MB  | 4.53 MB  | 48 MB     |
| **Latency**   | 1ms      | 550µs   | 1ms      | 27ms     | N/A       |

| **Stat**      | 1        | 2.5      | 50       | 90       | 97.5     | 99       |
| ------------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec**   | 23199.00 | 23199.00 | 29407.00 | 29727.00 | 29791.00 | 29791.00 |
| **Bytes/Sec** | 3.53 MB  | 3.53 MB  | 4.47 MB  | 4.52 MB  | 4.53 MB  | 4.53 MB  |
| **Latency**   | 0ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [tinyhttp](#tinyhttp)

| **Stat**      | Average | Stddev  | Min     | Max     | Total    |
| ------------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec**   | 3960.80 | 642.40  | 3160.00 | 5400.00 | 39599.00 |
| **Bytes/Sec** | 455 kB  | 73.8 kB | 363 kB  | 621 kB  | 4.55 MB  |
| **Latency**   | 9ms     | 16ms    | 1ms     | 56ms    | N/A      |

| **Stat**      | 1       | 2.5     | 50      | 90      | 97.5    | 99      |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 3161.00 | 3161.00 | 3855.00 | 4519.00 | 5403.00 | 5403.00 |
| **Bytes/Sec** | 364 kB  | 364 kB  | 443 kB  | 519 kB  | 621 kB  | 621 kB  |
| **Latency**   | 0ms     | 0ms     | 2ms     | 44ms    | 47ms    | 48ms    |

### [Servest](#servest)

| **Stat**      | Average | Stddev  | Min     | Max     | Total    |
| ------------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec**   | 5390.80 | 432.22  | 4106.00 | 5693.00 | 53908.00 |
| **Bytes/Sec** | 846 kB  | 67.8 kB | 645 kB  | 894 kB  | 8.46 MB  |
| **Latency**   | 6ms     | 2ms     | 1ms     | 67ms    | N/A      |

| **Stat**      | 1       | 2.5     | 50      | 90      | 97.5    | 99      |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4107.00 | 4107.00 | 5503.00 | 5559.00 | 5695.00 | 5695.00 |
| **Bytes/Sec** | 645 kB  | 645 kB  | 864 kB  | 873 kB  | 894 kB  | 894 kB  |
| **Latency**   | 4ms     | 5ms     | 6ms     | 10ms    | 16ms    | 18ms    |

---

<p align="center">Generated 2022-07-09T18:46:42.633Z</p>
