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
| Bun                                                                                  | 66012.13 | 10854.79 | 87837.19  | 100%     |
| Hyper Express                                                                        | 64498.43 | 18218.38 | 82640.88  | 98%      |
| Deno                                                                                 | 46950.08 | 11049.67 | 54855.30  | 71%      |
| NHttp                                                                                | 44156.73 | 9545.93  | 163934.43 | 67%      |
| Fast                                                                                 | 42705.95 | 8207.73  | 48623.09  | 65%      |
| Hono                                                                                 | 42494.05 | 8126.20  | 48077.68  | 64%      |
| http                                                                                 | 41314.34 | 9172.56  | 58041.89  | 63%      |
| Megalo                                                                               | 41107.36 | 7558.69  | 49215.89  | 62%      |
| Deso                                                                                 | 40960.37 | 7541.10  | 47153.64  | 62%      |
| Fastro                                                                               | 40267.11 | 8421.38  | 92432.65  | 61%      |
| Node                                                                                 | 40083.40 | 6692.50  | 44009.80  | 61%      |
| Peko                                                                                 | 38576.52 | 7650.87  | 43946.52  | 58%      |
| Reno                                                                                 | 37325.28 | 7026.70  | 55064.52  | 57%      |
| Fastify                                                                              | 35671.71 | 6759.67  | 39309.27  | 54%      |
| Alosaur                                                                              | 33065.23 | 6270.16  | 39485.83  | 50%      |
| Router                                                                               | 28877.31 | 4524.97  | 45797.60  | 44%      |
| Little                                                                               | 25834.79 | 3555.36  | 30664.15  | 39%      |
| Oak                                                                                  | 23947.08 | 3963.56  | 29356.49  | 36%      |
| Aqua                                                                                 | 23393.80 | 3159.33  | 26986.41  | 35%      |
| Dinatra                                                                              | 20515.32 | 4317.03  | 41083.37  | 31%      |
| Abc                                                                                  | 18137.23 | 2355.18  | 22031.93  | 27%      |
| Opine                                                                                | 9641.11  | 1191.70  | 11945.42  | 15%      |
| Express (Deno)                                                                       | 9206.34  | 1617.34  | 15037.67  | 14%      |
| Express                                                                              | 7107.85  | 1806.11  | 10367.87  | 11%      |
| Servest                                                                              | 6134.98  | 1633.00  | 9017.55   | 9%       |
| Acorn                                                                                | 4991.58  | 8900.87  | 141843.97 | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-347901dc-b788-45cc-b8f1-52ea4dba7ed0) |          |          |           |          |

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
| 18137.23 | 2355.18 | 22031.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15700.51 | 16348.36 | 18858.95 | 19342.28 | 20690.68 | 20862.35 | 21354.64 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4991.58  | 8900.87 | 141843.97 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2007.50 | 2701.37 | 3567.08 | 5103.61 | 9326.09 | 10691.80 | 14023.96 |
| **Latency** | 4ms     | 5ms     | 11ms    | 16ms    | 20ms    | 21ms     | 22ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33065.23 | 6270.16 | 39485.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25613.50 | 33678.57 | 35619.30 | 36198.34 | 36843.99 | 37202.50 | 37736.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23393.80 | 3159.33 | 26986.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21044.53 | 22209.23 | 24637.95 | 24872.98 | 25117.17 | 25596.03 | 26180.82 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66012.13 | 10854.79 | 87837.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54021.75 | 58114.86 | 62838.17 | 77730.77 | 79765.10 | 80411.18 | 82527.26 |
| **Latency** | 456µs    | 579µs    | 697µs    | 852µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46950.08 | 11049.67 | 54855.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27824.93 | 42082.36 | 52696.28 | 53367.72 | 53742.18 | 53998.02 | 54514.32 |
| **Latency** | 825µs    | 911µs    | 971µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40960.37 | 7541.10 | 47153.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34522.00 | 40119.13 | 44291.49 | 44731.71 | 45074.69 | 45414.68 | 45910.89 |
| **Latency** | 957µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20515.32 | 4317.03 | 41083.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15843.20 | 19571.96 | 21006.65 | 23012.75 | 24383.42 | 24812.32 | 25482.80 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7107.85  | 1806.11 | 10367.87 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5253.78 | 5600.93 | 8223.49 | 8671.24 | 8769.69 | 8823.79 | 8888.95 |
| **Latency** | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 10ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9206.34  | 1617.34 | 15037.67 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7991.52 | 9289.72 | 9819.02 | 9962.64 | 10046.35 | 10090.31 | 10584.43 |
| **Latency** | 3ms     | 5ms     | 5ms     | 5ms     | 6ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42705.95 | 8207.73 | 48623.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35055.15 | 41014.56 | 46393.93 | 47014.41 | 47427.44 | 47629.70 | 48047.34 |
| **Latency** | 919µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35671.71 | 6759.67 | 39309.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33603.89 | 36935.68 | 37602.69 | 38347.79 | 38699.30 | 38821.35 | 39068.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40267.11 | 8421.38 | 92432.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30608.85 | 41220.94 | 43803.12 | 44420.69 | 44950.24 | 45295.94 | 45764.53 |
| **Latency** | 966µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42494.05 | 8126.20 | 48077.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35149.76 | 42161.79 | 46105.99 | 46530.31 | 46937.12 | 47257.06 | 47731.77 |
| **Latency** | 926µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41314.34 | 9172.56 | 58041.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25131.79 | 37178.68 | 46026.02 | 46542.12 | 46921.14 | 47167.23 | 47635.73 |
| **Latency** | 927µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64498.43 | 18218.38 | 82640.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37951.03 | 39873.98 | 76823.26 | 79023.70 | 80173.01 | 80623.00 | 81446.86 |
| **Latency** | 475µs    | 552µs    | 690µs    | 747µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25834.79 | 3555.36 | 30664.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23655.46 | 24842.54 | 27003.02 | 27561.69 | 28027.27 | 28355.92 | 28873.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41107.36 | 7558.69 | 49215.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35060.25 | 38849.85 | 44409.56 | 44853.75 | 45401.67 | 45661.88 | 45961.83 |
| **Latency** | 956µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 44156.73 | 9545.93 | 163934.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34911.32 | 42700.22 | 48065.11 | 48523.54 | 49124.97 | 49398.09 | 49713.61 |
| **Latency** | 892µs    | 980µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40083.40 | 6692.50 | 44009.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39059.93 | 41044.54 | 41815.68 | 42498.38 | 42994.81 | 43225.71 | 43622.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23947.08 | 3963.56 | 29356.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21214.52 | 23110.02 | 25216.52 | 25846.66 | 26337.88 | 26682.05 | 27112.04 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9641.11  | 1191.70 | 11945.42 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8769.58 | 9456.95 | 10002.80 | 10104.24 | 10180.08 | 10278.54 | 11464.05 |
| **Latency** | 3ms     | 4ms     | 5ms      | 5ms      | 6ms      | 6ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38576.52 | 7650.87 | 43946.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32603.95 | 38133.89 | 41865.42 | 42411.51 | 42852.46 | 43144.10 | 43507.40 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37325.28 | 7026.70 | 55064.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31322.85 | 38805.62 | 40148.37 | 40559.09 | 40887.98 | 41104.37 | 41525.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28877.31 | 4524.97 | 45797.60 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25517.25 | 27778.20 | 30599.39 | 31217.64 | 31639.35 | 31895.62 | 32306.29 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6134.98  | 1633.00 | 9017.55 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4007.68 | 6014.16 | 6674.59 | 7115.12 | 7478.41 | 7583.46 | 8139.60 |
| **Latency** | 6ms     | 7ms     | 7ms     | 7ms     | 11ms    | 12ms    | 19ms    |

---

<p align="center">Generated 2023-04-21T01:34:01.769Z</p>
