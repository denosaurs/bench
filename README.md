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
| Bun                                                                                  | 60612.89 | 9720.37  | 80254.08  | 100%     |
| Hyper Express                                                                        | 57381.56 | 16351.63 | 76742.55  | 95%      |
| Deno                                                                                 | 44167.36 | 10343.08 | 56250.11  | 73%      |
| NHttp                                                                                | 40818.74 | 8835.35  | 70492.03  | 67%      |
| Fast                                                                                 | 39957.56 | 8038.31  | 49073.35  | 66%      |
| Hono                                                                                 | 39602.26 | 7820.53  | 44959.85  | 65%      |
| http                                                                                 | 38757.23 | 8760.34  | 48917.01  | 64%      |
| Deso                                                                                 | 37686.50 | 7515.18  | 43450.77  | 62%      |
| Fastro                                                                               | 37652.44 | 7609.65  | 69930.07  | 62%      |
| Megalo                                                                               | 37417.90 | 7665.79  | 43331.84  | 62%      |
| Peko                                                                                 | 35389.62 | 7093.40  | 43908.16  | 58%      |
| Reno                                                                                 | 35030.18 | 6137.40  | 44428.31  | 58%      |
| Node                                                                                 | 34462.57 | 5650.17  | 37677.59  | 57%      |
| Alosaur                                                                              | 31102.64 | 5951.14  | 101741.97 | 51%      |
| Fastify                                                                              | 30357.41 | 5916.49  | 33448.12  | 50%      |
| Router                                                                               | 27699.75 | 4256.01  | 30782.22  | 46%      |
| Little                                                                               | 24090.68 | 3890.11  | 27712.48  | 40%      |
| Aqua                                                                                 | 21769.80 | 3829.57  | 26693.40  | 36%      |
| Oak                                                                                  | 21718.66 | 3395.00  | 25464.27  | 36%      |
| Dinatra                                                                              | 18091.57 | 3425.73  | 35326.70  | 30%      |
| Abc                                                                                  | 15072.18 | 3634.68  | 19512.59  | 25%      |
| Opine                                                                                | 8997.61  | 1402.85  | 13396.72  | 15%      |
| Express (Deno)                                                                       | 8529.17  | 1646.06  | 15076.74  | 14%      |
| Express                                                                              | 6437.86  | 1471.66  | 10021.15  | 11%      |
| Servest                                                                              | 5518.04  | 1520.36  | 13452.63  | 9%       |
| Acorn                                                                                | 4041.86  | 4643.04  | 108457.52 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-e327de2e-0f1e-422c-b49f-cefce330f971) |          |          |           |          |

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
| 15072.18 | 3634.68 | 19512.59 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8713.27 | 13338.08 | 16028.77 | 17969.58 | 18923.94 | 19090.43 | 19320.08 |
| **Latency** | 2ms     | 2ms      | 2ms      | 2ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4041.86  | 4643.04 | 108457.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1842.38 | 2437.06 | 2916.70 | 4143.23 | 8182.36 | 10275.72 | 12108.14 |
| **Latency** | 4ms     | 6ms     | 13ms    | 18ms    | 22ms    | 23ms     | 24ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 31102.64 | 5951.14 | 101741.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22598.63 | 32001.29 | 33335.36 | 33710.93 | 34054.05 | 34325.90 | 34813.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21769.80 | 3829.57 | 26693.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16666.19 | 20441.12 | 23703.83 | 24126.09 | 24309.52 | 24467.67 | 25186.92 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60612.89 | 9720.37 | 80254.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50238.26 | 53498.30 | 57512.18 | 70727.87 | 73208.35 | 74147.92 | 76718.51 |
| **Latency** | 494µs    | 627µs    | 761µs    | 914µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44167.36 | 10343.08 | 56250.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31551.17 | 42554.70 | 49204.51 | 49847.31 | 50336.86 | 50580.76 | 51032.85 |
| **Latency** | 883µs    | 976µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37686.50 | 7515.18 | 43450.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29402.39 | 39044.47 | 40859.62 | 41420.61 | 42013.88 | 42224.44 | 42483.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18091.57 | 3425.73 | 35326.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14108.63 | 15905.85 | 19342.38 | 19782.76 | 20527.52 | 21619.91 | 22238.29 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6437.86  | 1471.66 | 10021.15 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4238.14 | 5308.18 | 7245.50 | 7369.06 | 7438.68 | 7471.35 | 7513.15 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 11ms    | 11ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8529.17  | 1646.06 | 15076.74 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 6741.41 | 8450.42 | 8969.01 | 9264.26 | 9452.43 | 10068.60 | 11927.84 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 7ms      | 13ms     |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39957.56 | 8038.31 | 49073.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31102.04 | 41547.43 | 43522.67 | 44021.20 | 44320.45 | 44477.64 | 44917.11 |
| **Latency** | 986µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30357.41 | 5916.49 | 33448.12 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29535.36 | 31365.87 | 32154.01 | 32754.33 | 32978.82 | 33094.31 | 33224.25 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37652.44 | 7609.65 | 69930.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29214.34 | 39018.37 | 40717.54 | 41212.80 | 41819.96 | 42091.38 | 42584.23 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39602.26 | 7820.53 | 44959.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31041.25 | 40318.90 | 42916.75 | 43600.33 | 43995.93 | 44166.79 | 44531.34 |
| **Latency** | 991µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38757.23 | 8760.34 | 48917.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25097.16 | 36786.49 | 42909.04 | 43613.13 | 43993.09 | 44202.67 | 44593.19 |
| **Latency** | 999µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57381.56 | 16351.63 | 76742.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34696.37 | 36831.10 | 65914.47 | 72368.34 | 73776.52 | 74253.40 | 75318.83 |
| **Latency** | 517µs    | 614µs    | 755µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24090.68 | 3890.11 | 27712.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21462.97 | 22621.19 | 25830.43 | 26101.93 | 26274.25 | 26370.87 | 26995.34 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37417.90 | 7665.79 | 43331.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30436.03 | 37918.55 | 40741.53 | 41184.07 | 41759.07 | 42035.80 | 42357.33 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40818.74 | 8835.35 | 70492.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30904.61 | 41036.22 | 44756.17 | 45475.91 | 45900.95 | 46074.53 | 46409.34 |
| **Latency** | 958µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34462.57 | 5650.17 | 37677.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34065.38 | 35110.15 | 35748.95 | 36608.33 | 36903.66 | 37055.56 | 37279.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21718.66 | 3395.00 | 25464.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18802.05 | 22103.30 | 22935.06 | 23145.71 | 23425.14 | 24103.17 | 24451.88 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8997.61  | 1402.85 | 13396.72 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 7603.11 | 8245.67 | 9190.52 | 9587.63 | 10617.79 | 11269.10 | 12072.18 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms      | 6ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35389.62 | 7093.40 | 43908.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27904.05 | 35201.01 | 38620.42 | 39014.00 | 39303.33 | 39482.29 | 39991.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35030.18 | 6137.40 | 44428.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27678.06 | 36432.74 | 37325.48 | 37827.23 | 38407.75 | 38620.60 | 38958.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27699.75 | 4256.01 | 30782.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23799.00 | 27939.73 | 29375.63 | 29642.01 | 29858.59 | 29997.19 | 30416.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5518.04  | 1520.36 | 13452.63 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3206.09 | 5463.20 | 6050.06 | 6370.20 | 6628.12 | 6719.15 | 7179.64 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 13ms    | 22ms    |

---

<p align="center">Generated 2023-04-27T01:43:12.840Z</p>
