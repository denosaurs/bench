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
| Bun                                                                                  | 52259.77 | 6309.86 | 66131.63  | 100%     |
| Deno                                                                                 | 43569.48 | 5877.93 | 52351.63  | 83%      |
| Fast                                                                                 | 40104.17 | 5950.39 | 49510.29  | 77%      |
| Megalo                                                                               | 38515.56 | 5841.17 | 48125.77  | 74%      |
| Hono                                                                                 | 34625.14 | 4581.44 | 41740.86  | 66%      |
| http                                                                                 | 31186.31 | 5970.56 | 39693.58  | 60%      |
| Reno                                                                                 | 30683.97 | 3917.75 | 36360.67  | 59%      |
| Alosaur                                                                              | 24208.20 | 5625.21 | 30814.61  | 46%      |
| Router                                                                               | 21023.98 | 3221.80 | 26877.53  | 40%      |
| Little                                                                               | 18306.54 | 2910.92 | 23507.28  | 35%      |
| Aqua                                                                                 | 17182.08 | 2992.32 | 22104.13  | 33%      |
| Node                                                                                 | 15219.25 | 2589.83 | 25582.43  | 29%      |
| Oak                                                                                  | 15035.20 | 2641.80 | 19862.07  | 29%      |
| Fastify                                                                              | 12606.46 | 2398.01 | 37730.13  | 24%      |
| Dinatra                                                                              | 10935.49 | 2144.94 | 14775.59  | 21%      |
| Abc                                                                                  | 8776.54  | 1585.54 | 12457.37  | 17%      |
| Opine                                                                                | 6294.83  | 1894.33 | 62813.68  | 12%      |
| Acorn                                                                                | 4345.30  | 6873.23 | 140845.07 | 8%       |
| Servest                                                                              | 3649.90  | 1132.13 | 17076.88  | 7%       |
| Express                                                                              | 3418.86  | 929.87  | 10356.87  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-c320dacf-943b-4bae-b939-ea838cec7a79) |          |         |           |          |

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
| 8776.54  | 1585.54 | 12457.37 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 6426.59 | 8111.08 | 9240.44 | 9650.81 | 10410.16 | 10834.63 | 11250.14 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms      | 8ms      | 10ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4345.30  | 6873.23 | 140845.07 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1306.00 | 2430.40 | 3142.14 | 5500.04 | 7188.71 | 8080.57 | 36800.33 |
| **Latency** | 6ms     | 7ms     | 13ms    | 19ms    | 22ms    | 25ms    | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24208.20 | 5625.21 | 30814.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15381.71 | 24213.01 | 26566.58 | 27363.30 | 27986.69 | 28294.04 | 29260.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17182.08 | 2992.32 | 22104.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14015.27 | 16407.01 | 18113.03 | 18939.00 | 19553.72 | 19919.11 | 20561.55 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52259.77 | 6309.86 | 66131.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42829.03 | 50610.27 | 54306.95 | 55829.53 | 57576.47 | 58603.38 | 61706.66 |
| **Latency** | 626µs    | 749µs    | 945µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43569.48 | 5877.93 | 52351.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36117.98 | 42321.49 | 45529.21 | 47060.13 | 48189.73 | 48726.70 | 50036.42 |
| **Latency** | 782µs    | 920µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10935.49 | 2144.94 | 14775.59 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8112.80 | 10154.30 | 11387.05 | 12418.71 | 13020.44 | 13411.50 | 14026.76 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 5ms      | 6ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev   | Max |
| -------- | ------ | -------- | --- |
| 3418.86  | 929.87 | 10356.87 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2214.43 | 2941.93 | 3761.72 | 3956.85 | 4100.92 | 4151.60 | 4654.17 |
| **Latency** | 12ms    | 12ms    | 13ms    | 15ms    | 19ms    | 22ms    | 27ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40104.17 | 5950.39 | 49510.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32970.22 | 37722.18 | 42159.88 | 44073.07 | 45155.00 | 45725.02 | 46928.53 |
| **Latency** | 927µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12606.46 | 2398.01 | 37730.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10617.08 | 12623.46 | 13198.57 | 13676.43 | 14018.62 | 14208.92 | 14723.53 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 10ms     |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34625.14 | 4581.44 | 41740.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30741.39 | 33256.85 | 35633.80 | 37305.54 | 38553.03 | 39128.24 | 40436.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31186.31 | 5970.56 | 39693.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21210.81 | 31207.45 | 33650.79 | 34570.83 | 35249.80 | 35689.18 | 36529.27 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18306.54 | 2910.92 | 23507.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14761.94 | 17309.15 | 19236.34 | 20075.54 | 20747.10 | 21231.64 | 22011.12 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38515.56 | 5841.17 | 48125.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32404.81 | 36280.12 | 40348.55 | 42361.76 | 43400.80 | 43950.03 | 44789.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15219.25 | 2589.83 | 25582.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12713.33 | 15226.62 | 15964.63 | 16488.68 | 16880.83 | 17129.60 | 17530.12 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 5ms      | 7ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15035.20 | 2641.80 | 19862.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11931.50 | 14482.37 | 15864.59 | 16544.36 | 17140.04 | 17505.86 | 18197.64 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 5ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6294.83  | 1894.33 | 62813.68 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5429.93 | 6060.93 | 6453.01 | 6633.52 | 6822.10 | 6981.65 | 8161.12 |
| **Latency** | 5ms     | 7ms     | 8ms     | 8ms     | 9ms     | 10ms    | 13ms    |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30683.97 | 3917.75 | 36360.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28223.04 | 30212.07 | 31440.64 | 32625.56 | 33622.86 | 34016.80 | 35098.68 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21023.98 | 3221.80 | 26877.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16804.65 | 20508.40 | 22147.39 | 22859.94 | 23513.86 | 23879.16 | 24692.53 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3649.90  | 1132.13 | 17076.88 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2112.74 | 3500.77 | 3909.69 | 4228.85 | 4582.96 | 4759.80 | 5159.43 |
| **Latency** | 11ms    | 11ms    | 12ms    | 14ms    | 18ms    | 21ms    | 27ms    |

---

<p align="center">Generated 2022-10-21T02:23:02.432Z</p>
