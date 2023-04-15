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
  - [Deso](#deso)
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
  - [NHttp](#nhttp)
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
    - [Deso](#deso-1)
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
    - [NHttp](#nhttp-1)
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
| Bun                                                                                  | 41848.79 | 10545.89 | 63197.22  | 100%     |
| Hyper Express                                                                        | 35600.70 | 13914.71 | 56639.16  | 85%      |
| Deno                                                                                 | 30156.26 | 7879.33  | 48118.00  | 72%      |
| NHttp                                                                                | 28166.98 | 6677.19  | 43052.70  | 67%      |
| http                                                                                 | 27685.64 | 6655.11  | 35678.23  | 66%      |
| Hono                                                                                 | 26937.88 | 6318.64  | 36899.76  | 64%      |
| Fast                                                                                 | 26901.77 | 7133.74  | 53417.66  | 64%      |
| Fastro                                                                               | 26191.02 | 6166.89  | 61990.52  | 63%      |
| Deso                                                                                 | 26028.31 | 5995.74  | 32821.54  | 62%      |
| Megalo                                                                               | 25496.72 | 6669.96  | 36586.97  | 61%      |
| Peko                                                                                 | 24304.15 | 5477.15  | 62707.98  | 58%      |
| Reno                                                                                 | 23366.34 | 5253.33  | 32172.74  | 56%      |
| Alosaur                                                                              | 21016.74 | 5235.96  | 27988.91  | 50%      |
| Router                                                                               | 17771.48 | 3364.91  | 23343.85  | 42%      |
| Aqua                                                                                 | 16014.48 | 3162.53  | 22795.26  | 38%      |
| Node                                                                                 | 14983.28 | 2847.09  | 18322.33  | 36%      |
| Little                                                                               | 14140.00 | 3205.50  | 19635.37  | 34%      |
| Fastify                                                                              | 13904.79 | 3168.93  | 18787.57  | 33%      |
| Oak                                                                                  | 12653.44 | 4478.00  | 128752.60 | 30%      |
| Dinatra                                                                              | 10322.78 | 2159.97  | 16863.10  | 25%      |
| Abc                                                                                  | 8559.33  | 1610.41  | 13046.87  | 20%      |
| Opine                                                                                | 5537.31  | 989.25   | 11136.96  | 13%      |
| Express (Deno)                                                                       | 5034.96  | 2008.82  | 62200.96  | 12%      |
| Acorn                                                                                | 3713.39  | 4148.13  | 95365.25  | 9%       |
| Express                                                                              | 3662.72  | 1011.93  | 12882.40  | 9%       |
| Servest                                                                              | 3493.85  | 1021.49  | 7767.30   | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-00cd26e6-1ee9-4159-b089-9e238005491c) |          |          |           |          |

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

## [Deso](https://github.com/gothammm/deso)

A simple & fast HTTP web framework for Deno

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

## [NHttp](https://github.com/nhttp/nhttp)

An Simple web-framework for Deno and Friends

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
| 8559.33  | 1610.41 | 13046.87 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6365.35 | 7935.99 | 8968.21 | 9512.70 | 10101.69 | 10531.40 | 11016.10 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 7ms      | 8ms      | 12ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3713.39  | 4148.13 | 95365.25 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1798.50 | 2365.06 | 2941.33 | 4809.64 | 6310.92 | 7096.03 | 11182.31 |
| **Latency** | 7ms     | 8ms     | 14ms    | 20ms    | 23ms    | 25ms    | 27ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21016.74 | 5235.96 | 27988.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12926.60 | 19287.92 | 23285.61 | 24555.75 | 25212.74 | 25655.61 | 26409.00 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16014.48 | 3162.53 | 22795.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11904.36 | 14909.83 | 17001.66 | 18083.90 | 18776.41 | 19102.51 | 19875.04 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41848.79 | 10545.89 | 63197.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29161.46 | 35827.71 | 42141.48 | 50509.98 | 54415.63 | 56056.24 | 58682.26 |
| **Latency** | 637µs    | 814µs    | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30156.26 | 7879.33 | 48118.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18407.83 | 27007.97 | 33420.07 | 35477.00 | 36778.69 | 37147.91 | 37918.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26028.31 | 5995.74 | 32821.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17975.95 | 23784.25 | 28328.98 | 30003.15 | 30899.30 | 31426.24 | 32320.53 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10322.78 | 2159.97 | 16863.10 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7402.98 | 9525.64 | 10892.81 | 11650.18 | 12349.04 | 12730.83 | 13500.00 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 6ms      | 7ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3662.72  | 1011.93 | 12882.40 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2240.61 | 3306.38 | 3989.86 | 4259.95 | 4398.89 | 4463.07 | 5053.13 |
| **Latency** | 11ms    | 11ms    | 12ms    | 14ms    | 17ms    | 21ms    | 29ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5034.96  | 2008.82 | 62200.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3618.97 | 4479.53 | 5328.38 | 5618.06 | 5811.41 | 6072.62 | 7262.10 |
| **Latency** | 8ms     | 9ms     | 9ms     | 10ms    | 12ms    | 13ms    | 20ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26901.77 | 7133.74 | 53417.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15126.78 | 24201.23 | 29831.34 | 31782.15 | 32714.72 | 33112.28 | 33797.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 6ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 13904.79 | 3168.93 | 18787.57 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8217.51 | 13730.63 | 15022.09 | 15762.75 | 16223.05 | 16436.77 | 16831.15 |
| **Latency** | 2ms     | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      | 10ms     |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26191.02 | 6166.89 | 61990.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18069.98 | 24519.64 | 28452.87 | 30083.34 | 30923.72 | 31352.62 | 32018.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26937.88 | 6318.64 | 36899.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18011.01 | 24881.67 | 29488.74 | 31019.58 | 31897.49 | 32325.67 | 33347.32 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27685.64 | 6655.11 | 35678.23 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17400.91 | 25415.45 | 30477.32 | 32025.93 | 32872.73 | 33350.51 | 34089.37 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 35600.70 | 13914.71 | 56639.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15192.67 | 22320.36 | 38520.58 | 47698.08 | 52410.44 | 53662.90 | 55452.09 |
| **Latency** | 699µs    | 842µs    | 1ms      | 1ms      | 3ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14140.00 | 3205.50 | 19635.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10133.69 | 11672.47 | 15311.58 | 16425.80 | 17353.13 | 17724.13 | 18189.00 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25496.72 | 6669.96 | 36586.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15273.17 | 22513.56 | 28418.43 | 30128.81 | 30889.51 | 31305.31 | 32073.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28166.98 | 6677.19 | 43052.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18703.60 | 26646.43 | 30759.41 | 32448.11 | 33237.16 | 33665.40 | 34440.47 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14983.28 | 2847.09 | 18322.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11621.65 | 14747.49 | 15903.76 | 16601.10 | 17083.24 | 17297.31 | 17849.74 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 12653.44 | 4478.00 | 128752.60 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9537.53 | 11845.76 | 13394.61 | 14178.65 | 14690.11 | 15007.65 | 15816.10 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 5ms      | 5ms      | 11ms     |

### [Opine](#opine)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 5537.31  | 989.25 | 11136.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4300.75 | 5306.87 | 5790.50 | 6095.92 | 6271.93 | 6423.96 | 7293.35 |
| **Latency** | 7ms     | 8ms     | 8ms     | 9ms     | 10ms    | 12ms    | 16ms    |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24304.15 | 5477.15 | 62707.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17911.87 | 22808.28 | 26222.36 | 27545.25 | 28433.97 | 28825.75 | 29718.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23366.34 | 5253.33 | 32172.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15771.25 | 22114.15 | 25322.89 | 26714.48 | 27420.48 | 27994.06 | 28557.20 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17771.48 | 3364.91 | 23343.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13740.13 | 16746.02 | 18953.57 | 19827.53 | 20503.44 | 20888.80 | 21483.58 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3493.85  | 1021.49 | 7767.30 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2013.87 | 3289.16 | 3768.88 | 4088.16 | 4395.96 | 4582.47 | 4941.05 |
| **Latency** | 11ms    | 12ms    | 13ms    | 15ms    | 19ms    | 22ms    | 29ms    |

---

<p align="center">Generated 2023-04-15T01:42:08.844Z</p>
