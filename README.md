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
| Bun                                                                                  | 59929.31 | 10431.70 | 78371.37 | 100%     |
| Hyper Express                                                                        | 51620.57 | 13392.29 | 61108.44 | 86%      |
| Hono                                                                                 | 50699.99 | 13287.31 | 66167.96 | 85%      |
| Fast                                                                                 | 50548.73 | 13101.44 | 65357.02 | 84%      |
| Deno                                                                                 | 50265.08 | 12767.80 | 65258.55 | 84%      |
| http                                                                                 | 44482.64 | 10426.61 | 52408.99 | 74%      |
| Fastro                                                                               | 41578.17 | 9234.88  | 48112.80 | 69%      |
| Peko                                                                                 | 40828.59 | 8847.95  | 47872.13 | 68%      |
| Megalo                                                                               | 39293.51 | 11573.06 | 60927.01 | 66%      |
| Reno                                                                                 | 36406.95 | 11837.49 | 73683.82 | 61%      |
| Node                                                                                 | 34925.01 | 7350.94  | 39612.02 | 58%      |
| Alosaur                                                                              | 33283.00 | 8543.28  | 40882.46 | 56%      |
| Fastify                                                                              | 32626.17 | 6100.93  | 36220.41 | 54%      |
| Router                                                                               | 30642.42 | 4797.41  | 35483.91 | 51%      |
| Little                                                                               | 28024.63 | 4690.38  | 49875.31 | 47%      |
| Oak                                                                                  | 25484.30 | 4190.08  | 36224.47 | 43%      |
| Aqua                                                                                 | 25287.96 | 4031.56  | 31431.62 | 42%      |
| Dinatra                                                                              | 20296.41 | 3756.93  | 27846.32 | 34%      |
| Abc                                                                                  | 18018.87 | 2657.29  | 22273.48 | 30%      |
| Opine                                                                                | 9719.47  | 1660.40  | 29720.13 | 16%      |
| Express                                                                              | 6863.44  | 1393.78  | 11956.71 | 11%      |
| Servest                                                                              | 5685.03  | 1711.97  | 8518.63  | 9%       |
| Acorn                                                                                | 4075.48  | 3088.44  | 23364.30 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-883895ed-b753-4f55-8642-6cbc935daf42) |          |          |          |          |

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
| 18018.87 | 2657.29 | 22273.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16096.02 | 17416.76 | 18634.42 | 19136.80 | 20293.33 | 20702.79 | 21219.67 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4075.48  | 3088.44 | 23364.30 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1930.95 | 2503.57 | 3080.40 | 4297.51 | 8613.20 | 10929.00 | 13684.33 |
| **Latency** | 4ms     | 5ms     | 12ms    | 18ms    | 22ms    | 23ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33283.00 | 8543.28 | 40882.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20944.88 | 24775.49 | 38023.45 | 38662.83 | 39156.07 | 39404.60 | 40006.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25287.96 | 4031.56 | 31431.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22298.93 | 23617.81 | 26874.04 | 27505.87 | 27968.90 | 28275.12 | 28922.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59929.31 | 10431.70 | 78371.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47747.96 | 51226.46 | 60485.73 | 69888.97 | 72204.27 | 73222.50 | 74828.70 |
| **Latency** | 501µs    | 634µs    | 771µs    | 916µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50265.08 | 12767.80 | 65258.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32201.48 | 42119.53 | 52927.64 | 62122.77 | 63322.12 | 63808.52 | 64626.18 |
| **Latency** | 602µs    | 744µs    | 889µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20296.41 | 3756.93 | 27846.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15506.72 | 19135.47 | 21736.39 | 22551.34 | 23862.84 | 24402.01 | 24994.48 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6863.44  | 1393.78 | 11956.71 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4416.80 | 6876.56 | 7558.83 | 7669.05 | 7766.19 | 7794.10 | 7827.11 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 15ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50548.73 | 13101.44 | 65357.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31201.04 | 43477.97 | 57030.19 | 60938.95 | 61592.94 | 61952.44 | 62580.94 |
| **Latency** | 695µs    | 767µs    | 852µs    | 955µs    | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32626.17 | 6100.93 | 36220.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31065.97 | 33707.53 | 34455.93 | 34972.20 | 35220.90 | 35347.48 | 35636.82 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41578.17 | 9234.88 | 48112.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29194.77 | 40809.49 | 46215.37 | 46752.90 | 47112.86 | 47318.10 | 47624.03 |
| **Latency** | 939µs    | 996µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50699.99 | 13287.31 | 66167.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32445.72 | 42713.76 | 55229.35 | 61975.64 | 63000.76 | 63327.83 | 64227.20 |
| **Latency** | 618µs    | 731µs    | 886µs    | 978µs    | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44482.64 | 10426.61 | 52408.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28870.49 | 43411.85 | 49829.85 | 50317.77 | 50662.97 | 50909.32 | 51300.15 |
| **Latency** | 872µs    | 933µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51620.57 | 13392.29 | 61108.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22807.86 | 55032.61 | 58264.82 | 58995.72 | 59291.46 | 59414.94 | 59598.61 |
| **Latency** | 780µs    | 791µs    | 806µs    | 828µs    | 1ms      | 2ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28024.63 | 4690.38 | 49875.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22965.98 | 26215.48 | 30003.92 | 30849.99 | 31467.04 | 31782.57 | 32129.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39293.51 | 11573.06 | 60927.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22102.63 | 32713.95 | 41365.32 | 45222.11 | 54270.76 | 55930.97 | 57312.35 |
| **Latency** | 801µs    | 891µs    | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34925.01 | 7350.94 | 39612.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25218.15 | 36315.64 | 37382.75 | 38176.87 | 38644.19 | 38851.03 | 39331.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25484.30 | 4190.08 | 36224.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20825.86 | 25658.85 | 27001.40 | 27620.77 | 28140.19 | 28562.03 | 28989.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9719.47  | 1660.40 | 29720.13 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8201.93 | 9095.42 | 10033.74 | 10394.10 | 10946.91 | 11917.53 | 13037.58 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 6ms      | 6ms      | 9ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40828.59 | 8847.95 | 47872.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29405.64 | 41115.13 | 44830.57 | 45649.81 | 46360.82 | 46622.98 | 47070.48 |
| **Latency** | 957µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36406.95 | 11837.49 | 73683.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17812.10 | 26693.47 | 43198.14 | 45293.12 | 46071.53 | 46501.14 | 47208.03 |
| **Latency** | 996µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30642.42 | 4797.41 | 35483.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25367.72 | 30157.87 | 32661.13 | 33212.50 | 33617.20 | 33991.83 | 34433.02 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5685.03  | 1711.97 | 8518.63 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2802.64 | 5611.51 | 6273.66 | 6672.27 | 7026.17 | 7182.83 | 7903.80 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 12ms    | 14ms    | 22ms    |

---

<p align="center">Generated 2022-12-16T01:43:35.603Z</p>
