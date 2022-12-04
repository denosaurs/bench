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
| Bun                                                                                  | 62349.23 | 10019.30 | 81414.35 | 100%     |
| Hyper Express                                                                        | 53517.18 | 11684.23 | 59838.71 | 86%      |
| Fast                                                                                 | 50493.80 | 13660.46 | 66556.68 | 81%      |
| Deno                                                                                 | 50191.43 | 13230.21 | 68561.03 | 81%      |
| Hono                                                                                 | 49898.96 | 11616.91 | 61100.40 | 80%      |
| Megalo                                                                               | 46828.81 | 12296.21 | 59020.46 | 75%      |
| http                                                                                 | 44452.99 | 9004.12  | 50887.77 | 71%      |
| Fastro                                                                               | 41737.08 | 7964.04  | 48657.43 | 67%      |
| Peko                                                                                 | 41227.81 | 8552.54  | 47911.05 | 66%      |
| Reno                                                                                 | 40527.03 | 8758.94  | 48361.97 | 65%      |
| Node                                                                                 | 37346.59 | 6755.02  | 41571.37 | 60%      |
| Alosaur                                                                              | 35703.17 | 7498.05  | 47466.40 | 57%      |
| Router                                                                               | 32398.57 | 4337.30  | 36335.70 | 52%      |
| Fastify                                                                              | 31212.35 | 7754.19  | 35800.12 | 50%      |
| Little                                                                               | 28900.85 | 4650.58  | 33195.84 | 46%      |
| Oak                                                                                  | 26222.14 | 3799.52  | 30107.11 | 42%      |
| Aqua                                                                                 | 26173.95 | 3711.08  | 29730.91 | 42%      |
| Dinatra                                                                              | 20233.05 | 3995.08  | 28858.32 | 32%      |
| Abc                                                                                  | 16954.75 | 4058.97  | 22459.96 | 27%      |
| Opine                                                                                | 10443.32 | 1595.60  | 35445.14 | 17%      |
| Express                                                                              | 6792.54  | 1783.69  | 41705.11 | 11%      |
| Servest                                                                              | 6112.95  | 1628.01  | 9771.67  | 10%      |
| Acorn                                                                                | 3976.03  | 2792.87  | 22944.65 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-90b7b870-6730-43d1-b006-273004e1c702) |          |          |          |          |

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
| 16954.75 | 4058.97 | 22459.96 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9645.97 | 16280.20 | 18713.78 | 19585.36 | 20512.29 | 20791.50 | 21385.60 |
| **Latency** | 2ms     | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3976.03  | 2792.87 | 22944.65 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2043.38 | 2529.56 | 2960.47 | 3985.16 | 8850.36 | 11249.31 | 13397.08 |
| **Latency** | 4ms     | 5ms     | 12ms    | 17ms    | 21ms    | 22ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35703.17 | 7498.05 | 47466.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25610.07 | 37009.62 | 38921.66 | 39518.37 | 40050.17 | 40337.57 | 40736.06 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26173.95 | 3711.08 | 29730.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23451.97 | 24584.81 | 27816.60 | 28203.57 | 28777.48 | 29151.45 | 29562.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62349.23 | 10019.30 | 81414.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50888.61 | 53555.65 | 59056.88 | 73310.73 | 74828.17 | 75535.86 | 78204.41 |
| **Latency** | 485µs    | 605µs    | 745µs    | 908µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50191.43 | 13230.21 | 68561.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32907.46 | 42240.72 | 53823.49 | 61900.40 | 63302.94 | 63763.89 | 64709.06 |
| **Latency** | 603µs    | 745µs    | 891µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20233.05 | 3995.08 | 28858.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15821.62 | 19541.11 | 21279.25 | 22465.30 | 24132.86 | 24474.14 | 24997.04 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6792.54  | 1783.69 | 41705.11 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4414.24 | 6762.94 | 7444.64 | 7578.10 | 7656.56 | 7715.66 | 7788.77 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 16ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50493.80 | 13660.46 | 66556.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29568.04 | 43211.52 | 57714.94 | 60433.08 | 61115.07 | 61544.54 | 62228.41 |
| **Latency** | 717µs    | 772µs    | 841µs    | 953µs    | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31212.35 | 7754.19 | 35800.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12795.41 | 33351.92 | 34152.83 | 34753.41 | 35005.84 | 35125.53 | 35309.70 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41737.08 | 7964.04 | 48657.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30327.59 | 42328.55 | 45554.51 | 45990.19 | 46292.89 | 46508.78 | 46939.25 |
| **Latency** | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49898.96 | 11616.91 | 61100.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30600.51 | 47404.11 | 55910.43 | 57077.09 | 57653.87 | 58015.25 | 58535.51 |
| **Latency** | 799µs    | 842µs    | 880µs    | 937µs    | 1ms      | 1ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44452.99 | 9004.12 | 50887.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31514.61 | 45455.31 | 48915.98 | 49417.77 | 49779.89 | 50034.93 | 50267.33 |
| **Latency** | 895µs    | 948µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53517.18 | 11684.23 | 59838.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27763.49 | 57342.03 | 58448.36 | 58899.94 | 59126.42 | 59266.79 | 59522.43 |
| **Latency** | 781µs    | 792µs    | 806µs    | 825µs    | 1ms      | 2ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28900.85 | 4650.58 | 33195.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25108.02 | 27089.15 | 31162.95 | 31580.27 | 31919.18 | 32229.34 | 32782.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46828.81 | 12296.21 | 59020.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27900.22 | 41617.22 | 52770.28 | 55141.17 | 56324.60 | 56813.45 | 57593.39 |
| **Latency** | 804µs    | 858µs    | 923µs    | 991µs    | 1ms      | 1ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37346.59 | 6755.02 | 41571.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34632.44 | 38432.14 | 39343.15 | 40011.85 | 40635.22 | 40846.84 | 41092.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26222.14 | 3799.52 | 30107.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22572.10 | 26530.17 | 27677.94 | 28044.05 | 28479.97 | 28740.41 | 29202.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10443.32 | 1595.60 | 35445.14 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9256.09 | 10022.82 | 10783.09 | 10946.69 | 11173.40 | 11986.02 | 13249.12 |
| **Latency** | 3ms     | 4ms      | 4ms      | 5ms      | 5ms      | 5ms      | 7ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41227.81 | 8552.54 | 47911.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31648.02 | 38254.57 | 45400.87 | 46009.04 | 46372.21 | 46563.72 | 46923.04 |
| **Latency** | 954µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40527.03 | 8758.94 | 48361.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25116.96 | 42112.49 | 44551.53 | 45229.69 | 45726.82 | 46028.00 | 46496.27 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32398.57 | 4337.30 | 36335.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27781.95 | 32267.00 | 34186.71 | 34684.02 | 35090.15 | 35342.29 | 35666.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6112.95  | 1628.01 | 9771.67 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3636.57 | 5938.16 | 6727.76 | 7047.33 | 7333.33 | 7425.69 | 7630.25 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 11ms    | 12ms    | 19ms    |

---

<p align="center">Generated 2022-12-04T12:00:06.674Z</p>
