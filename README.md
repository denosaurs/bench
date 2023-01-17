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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Bun                                                                                  | 51828.86 | 9446.03  | 68759.68 | 100%     |
| Hyper Express                                                                        | 42339.01 | 9438.86  | 49078.66 | 82%      |
| Fast                                                                                 | 41482.63 | 12707.67 | 58033.40 | 80%      |
| http                                                                                 | 38962.01 | 8539.94  | 45287.64 | 75%      |
| Deno                                                                                 | 37674.79 | 9717.27  | 58249.26 | 73%      |
| Hono                                                                                 | 37167.52 | 9532.74  | 58479.75 | 72%      |
| Peko                                                                                 | 35550.97 | 7395.77  | 43170.02 | 69%      |
| Megalo                                                                               | 34999.36 | 11297.93 | 50720.12 | 68%      |
| Fastro                                                                               | 34462.77 | 8440.96  | 41303.50 | 66%      |
| Reno                                                                                 | 33964.99 | 9564.41  | 43941.12 | 66%      |
| Node                                                                                 | 30146.05 | 5763.69  | 35800.53 | 58%      |
| Alosaur                                                                              | 28796.17 | 7270.36  | 36685.32 | 56%      |
| Router                                                                               | 25817.26 | 4598.54  | 30069.67 | 50%      |
| Little                                                                               | 23574.73 | 4480.95  | 27960.41 | 45%      |
| Aqua                                                                                 | 21666.75 | 3704.32  | 25729.68 | 42%      |
| Fastify                                                                              | 21349.52 | 8481.55  | 29489.18 | 41%      |
| Oak                                                                                  | 21142.77 | 4066.55  | 26012.08 | 41%      |
| Dinatra                                                                              | 16448.83 | 4100.32  | 32336.30 | 32%      |
| Abc                                                                                  | 14914.08 | 2548.47  | 18668.05 | 29%      |
| Opine                                                                                | 8095.03  | 1165.14  | 10653.99 | 16%      |
| Express                                                                              | 5595.23  | 1479.82  | 8605.59  | 11%      |
| Servest                                                                              | 4930.28  | 1542.01  | 9720.54  | 10%      |
| Acorn                                                                                | 4124.84  | 3653.21  | 20392.49 | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-4816d1b1-24ed-42db-bb84-cf52ad586db6) |          |          |          |          |

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
| 14914.08 | 2548.47 | 18668.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11163.52 | 13407.37 | 16124.93 | 16519.66 | 16862.56 | 17063.26 | 17562.13 |
| **Latency** | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4124.84  | 3653.21 | 20392.49 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1734.30 | 2372.96 | 2875.39 | 4418.57 | 8307.75 | 10550.49 | 19231.51 |
| **Latency** | 5ms     | 6ms     | 13ms    | 20ms    | 23ms    | 25ms     | 27ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28796.17 | 7270.36 | 36685.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17604.75 | 26136.25 | 32535.99 | 33382.50 | 33706.51 | 33931.86 | 34420.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21666.75 | 3704.32 | 25729.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18370.49 | 20028.01 | 23215.31 | 23806.09 | 24251.49 | 24535.60 | 24982.19 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 51828.86 | 9446.03 | 68759.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 41949.71 | 45008.19 | 49396.92 | 61776.87 | 64418.24 | 65357.33 | 66609.70 |
| **Latency** | 577µs    | 725µs    | 869µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37674.79 | 9717.27 | 58249.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25751.90 | 33326.27 | 37522.89 | 42325.62 | 52227.52 | 54172.51 | 55377.41 |
| **Latency** | 774µs    | 958µs    | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16448.83 | 4100.32 | 32336.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11039.49 | 15012.83 | 17610.47 | 19518.08 | 20214.60 | 20606.57 | 21151.16 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 8ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5595.23  | 1479.82 | 8605.59 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3054.75 | 5583.29 | 6286.82 | 6467.58 | 6567.50 | 6623.57 | 6704.68 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 12ms    | 15ms    | 21ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41482.63 | 12707.67 | 58033.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23035.86 | 35033.95 | 41414.87 | 53607.99 | 54943.35 | 55486.13 | 56479.44 |
| **Latency** | 806µs    | 875µs    | 987µs    | 1ms      | 1ms      | 2ms      | 5ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21349.52 | 8481.55 | 29489.18 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9637.08 | 10090.56 | 26655.02 | 27802.99 | 28147.12 | 28309.45 | 28590.68 |
| **Latency** | 1ms     | 1ms      | 1ms      | 1ms      | 4ms      | 5ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34462.77 | 8440.96 | 41303.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20434.16 | 34587.88 | 38585.34 | 39339.51 | 39832.71 | 40049.32 | 40591.39 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37167.52 | 9532.74 | 58479.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25355.10 | 33963.71 | 37125.26 | 41713.62 | 50240.15 | 52319.11 | 54214.20 |
| **Latency** | 807µs    | 966µs    | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38962.01 | 8539.94 | 45287.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23855.39 | 40303.02 | 42709.41 | 43349.45 | 43801.98 | 44090.82 | 44571.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42339.01 | 9438.86 | 49078.66 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20261.86 | 44758.32 | 46485.66 | 47266.78 | 47730.53 | 48000.61 | 48363.99 |
| **Latency** | 989µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23574.73 | 4480.95 | 27960.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19008.26 | 21731.89 | 25770.90 | 26194.49 | 26606.08 | 26949.08 | 27364.54 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 34999.36 | 11297.93 | 50720.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16814.43 | 30533.18 | 36249.66 | 45207.18 | 48648.46 | 49278.69 | 50022.85 |
| **Latency** | 916µs    | 999µs    | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30146.05 | 5763.69 | 35800.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27424.54 | 30860.13 | 31730.61 | 32660.25 | 33073.59 | 33280.16 | 33741.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21142.77 | 4066.55 | 26012.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16600.98 | 21353.48 | 22704.10 | 23193.29 | 23833.50 | 24106.08 | 24592.63 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8095.03  | 1165.14 | 10653.99 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6863.27 | 7779.67 | 8446.20 | 8674.83 | 8893.32 | 9151.92 | 10099.80 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 7ms     | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35550.97 | 7395.77 | 43170.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24052.57 | 36772.12 | 38654.11 | 39311.65 | 39833.24 | 40095.82 | 40420.87 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33964.99 | 9564.41 | 43941.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17751.31 | 31507.70 | 38810.25 | 39914.21 | 40602.68 | 40920.30 | 41629.01 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25817.26 | 4598.54 | 30069.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20034.01 | 25526.11 | 27802.11 | 28299.12 | 28860.08 | 29148.30 | 29592.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4930.28  | 1542.01 | 9720.54 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2214.28 | 4939.52 | 5575.91 | 5768.34 | 5914.78 | 6007.25 | 7063.45 |
| **Latency** | 8ms     | 8ms     | 8ms     | 9ms     | 14ms    | 16ms    | 27ms    |

---

<p align="center">Generated 2023-01-17T01:48:16.503Z</p>
