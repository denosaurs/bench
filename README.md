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

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Bun                                                                                  | 75017.33 | 11847.07 | 92225.44  | 100%     |
| Deno                                                                                 | 69690.19 | 4996.38  | 76927.92  | 93%      |
| Fast                                                                                 | 68233.66 | 5281.58  | 72590.56  | 91%      |
| Megalo                                                                               | 64072.96 | 5449.05  | 70091.43  | 85%      |
| Hono                                                                                 | 61283.68 | 5180.35  | 66771.14  | 82%      |
| Reno                                                                                 | 50303.81 | 4151.22  | 53661.88  | 67%      |
| http                                                                                 | 47007.32 | 7940.51  | 52188.81  | 63%      |
| Node                                                                                 | 42018.54 | 11178.96 | 50267.57  | 56%      |
| Fastify                                                                              | 39896.34 | 6620.41  | 43127.79  | 53%      |
| Alosaur                                                                              | 38058.76 | 7560.23  | 44128.52  | 51%      |
| Router                                                                               | 32278.26 | 3999.62  | 35777.59  | 43%      |
| Little                                                                               | 30525.05 | 4483.62  | 34528.05  | 41%      |
| Oak                                                                                  | 27167.26 | 4658.06  | 96826.77  | 36%      |
| Aqua                                                                                 | 25499.60 | 3141.06  | 30074.96  | 34%      |
| Dinatra                                                                              | 19748.96 | 3219.69  | 26611.75  | 26%      |
| Abc                                                                                  | 17411.37 | 2351.71  | 20993.37  | 23%      |
| Opine                                                                                | 10718.41 | 1371.10  | 13281.42  | 14%      |
| Express                                                                              | 8199.65  | 1618.97  | 9630.17   | 11%      |
| Servest                                                                              | 6229.29  | 1708.09  | 9433.26   | 8%       |
| Acorn                                                                                | 5008.85  | 5987.75  | 142318.16 | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-8cb89922-7207-426b-8b04-d8cc81ba5013) |          |          |           |          |

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
| 17411.37 | 2351.71 | 20993.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15201.47 | 16251.75 | 17526.34 | 19320.50 | 19952.67 | 20517.27 | 20799.04 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5008.85  | 5987.75 | 142318.16 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 2062.40 | 2708.34 | 3495.35 | 5032.17 | 10963.49 | 13801.04 | 26445.12 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 19ms     | 22ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38058.76 | 7560.23 | 44128.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28309.43 | 38421.49 | 41466.14 | 41974.86 | 42549.82 | 42831.92 | 43248.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25499.60 | 3141.06 | 30074.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22909.46 | 24050.15 | 26867.18 | 27093.65 | 27623.29 | 28042.99 | 28475.07 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 75017.33 | 11847.07 | 92225.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52017.64 | 75515.34 | 79426.12 | 80810.75 | 82391.09 | 83513.61 | 87720.44 |
| **Latency** | 431µs    | 516µs    | 674µs    | 699µs    | 744µs    | 915µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 69690.19 | 4996.38 | 76927.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 66064.94 | 69134.08 | 70834.92 | 71783.48 | 72580.78 | 73004.78 | 73659.16 |
| **Latency** | 534µs    | 596µs    | 738µs    | 784µs    | 822µs    | 857µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19748.96 | 3219.69 | 26611.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16255.67 | 16859.67 | 21338.40 | 21626.13 | 21871.13 | 22446.04 | 23412.24 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 8199.65  | 1618.97 | 9630.17 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5720.78 | 8019.51 | 9005.97 | 9136.94 | 9211.17 | 9240.69 | 9285.74 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 68233.66 | 5281.58 | 72590.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64037.98 | 67914.83 | 69715.55 | 70529.01 | 71121.25 | 71403.37 | 71925.97 |
| **Latency** | 616µs    | 665µs    | 703µs    | 778µs    | 823µs    | 843µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39896.34 | 6620.41 | 43127.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39895.93 | 40908.73 | 41435.77 | 42022.46 | 42303.99 | 42453.68 | 42710.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61283.68 | 5180.35 | 66771.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58969.25 | 60456.50 | 62353.11 | 63313.02 | 63973.93 | 64434.71 | 65336.23 |
| **Latency** | 736µs    | 765µs    | 794µs    | 830µs    | 868µs    | 891µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47007.32 | 7940.51 | 52188.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35749.23 | 48922.23 | 50512.86 | 50949.52 | 51283.31 | 51461.84 | 51807.43 |
| **Latency** | 861µs    | 908µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30525.05 | 4483.62 | 34528.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27324.16 | 28930.23 | 32682.57 | 32989.83 | 33226.45 | 33863.96 | 34319.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64072.96 | 5449.05 | 70091.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61749.81 | 63233.70 | 64729.41 | 66602.29 | 67517.09 | 67938.34 | 68941.67 |
| **Latency** | 674µs    | 717µs    | 760µs    | 810µs    | 877µs    | 927µs    | 1ms      |

### [Node](#node)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 42018.54 | 11178.96 | 50267.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16875.51 | 45709.36 | 46995.63 | 47636.91 | 48035.30 | 48224.65 | 48477.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27167.26 | 4658.06 | 96826.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23463.70 | 26494.57 | 28852.22 | 29046.47 | 29232.33 | 29524.92 | 30039.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10718.41 | 1371.10 | 13281.42 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9591.72 | 10527.05 | 11131.30 | 11205.73 | 11283.51 | 11857.80 | 12816.93 |
| **Latency** | 3ms     | 3ms      | 4ms      | 5ms      | 5ms      | 6ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 50303.81 | 4151.22 | 53661.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49652.81 | 50351.74 | 50950.63 | 51524.40 | 52171.66 | 52425.89 | 53011.86 |
| **Latency** | 905µs    | 944µs    | 975µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32278.26 | 3999.62 | 35777.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28353.57 | 31820.87 | 34005.91 | 34311.95 | 34625.96 | 34950.12 | 35342.98 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6229.29  | 1708.09 | 9433.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4022.99 | 6048.84 | 6757.39 | 7226.54 | 7544.97 | 7812.44 | 8755.10 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 11ms    | 12ms    | 17ms    |

---

<p align="center">Generated 2022-10-11T02:44:07.159Z</p>
