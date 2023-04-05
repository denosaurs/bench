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
| Bun                                                                                  | 58850.52 | 10250.26 | 75609.34  | 100%     |
| Hyper Express                                                                        | 57684.54 | 15410.73 | 74231.87  | 98%      |
| Hono                                                                                 | 48748.64 | 13279.70 | 57878.64  | 83%      |
| Fastro                                                                               | 46917.01 | 16801.07 | 60188.00  | 80%      |
| NHttp                                                                                | 45758.62 | 10536.57 | 58323.52  | 78%      |
| Fast                                                                                 | 45539.28 | 13281.83 | 62678.25  | 77%      |
| Deno                                                                                 | 45472.34 | 12513.84 | 64575.11  | 77%      |
| Megalo                                                                               | 43438.08 | 11755.23 | 55081.26  | 74%      |
| http                                                                                 | 39514.64 | 7636.72  | 48238.76  | 67%      |
| Reno                                                                                 | 37755.91 | 8732.48  | 47979.21  | 64%      |
| Peko                                                                                 | 37534.45 | 7241.64  | 43107.31  | 64%      |
| Node                                                                                 | 35537.47 | 6280.56  | 39322.56  | 60%      |
| Alosaur                                                                              | 32799.24 | 6592.93  | 40653.22  | 56%      |
| Fastify                                                                              | 31058.16 | 5105.15  | 34659.90  | 53%      |
| Router                                                                               | 28350.23 | 4831.61  | 32896.30  | 48%      |
| Aqua                                                                                 | 23806.93 | 3429.40  | 28673.11  | 40%      |
| Little                                                                               | 22743.87 | 5372.12  | 46305.48  | 39%      |
| Oak                                                                                  | 22159.13 | 3914.67  | 25924.05  | 38%      |
| Dinatra                                                                              | 17959.62 | 3865.61  | 36927.35  | 31%      |
| Abc                                                                                  | 15976.42 | 2509.02  | 19315.85  | 27%      |
| Express (Deno)                                                                       | 9920.06  | 4873.65  | 111084.66 | 17%      |
| Opine                                                                                | 9269.17  | 1310.89  | 12740.26  | 16%      |
| Express                                                                              | 6084.88  | 4020.42  | 124521.92 | 10%      |
| Servest                                                                              | 5466.78  | 1492.85  | 7989.77   | 9%       |
| Acorn                                                                                | 4194.08  | 4673.66  | 81914.53  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-6a2a5c84-78b4-4f83-967d-1f9f22f3f5ce) |          |          |           |          |

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
| 15976.42 | 2509.02 | 19315.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13147.30 | 15203.92 | 16137.40 | 17843.13 | 18326.85 | 18463.48 | 18661.55 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4194.08  | 4673.66 | 81914.53 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2012.07 | 2466.95 | 3063.54 | 4300.53 | 8240.14 | 10463.85 | 12632.34 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 22ms    | 23ms     | 24ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32799.24 | 6592.93 | 40653.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23266.26 | 33301.80 | 35632.36 | 36358.77 | 36856.72 | 37086.14 | 37458.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23806.93 | 3429.40 | 28673.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20863.64 | 22243.08 | 25014.71 | 25620.71 | 26239.95 | 26495.39 | 26859.85 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58850.52 | 10250.26 | 75609.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46207.17 | 49803.95 | 61605.50 | 68529.42 | 70169.07 | 70689.73 | 71834.28 |
| **Latency** | 511µs    | 645µs    | 791µs    | 939µs    | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45472.34 | 12513.84 | 64575.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27796.46 | 39471.82 | 45052.04 | 57176.82 | 58567.59 | 59154.73 | 60051.35 |
| **Latency** | 667µs    | 828µs    | 958µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17959.62 | 3865.61 | 36927.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14026.49 | 15179.00 | 19641.61 | 20023.79 | 20338.00 | 20887.39 | 22273.95 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 6084.88  | 4020.42 | 124521.92 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4015.98 | 4326.95 | 6959.35 | 7121.28 | 7216.23 | 7258.49 | 7343.68 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 11ms    | 12ms    | 18ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 9920.06  | 4873.65 | 111084.66 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6653.19 | 8838.52 | 10325.07 | 10574.17 | 11431.97 | 12066.23 | 16407.11 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 6ms      | 7ms      | 13ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45539.28 | 13281.83 | 62678.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24398.38 | 40474.64 | 51642.60 | 55483.31 | 56508.96 | 57310.70 | 58782.59 |
| **Latency** | 787µs    | 851µs    | 917µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31058.16 | 5105.15 | 34659.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30475.22 | 31641.34 | 32428.80 | 33024.06 | 33271.42 | 33425.29 | 33676.38 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46917.01 | 16801.07 | 60188.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13774.05 | 48248.00 | 54527.68 | 56229.60 | 57096.80 | 57522.49 | 58036.26 |
| **Latency** | 780µs    | 830µs    | 902µs    | 986µs    | 1ms      | 1ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48748.64 | 13279.70 | 57878.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24586.18 | 50712.42 | 54428.58 | 55423.02 | 56131.73 | 56502.55 | 57282.31 |
| **Latency** | 809µs    | 860µs    | 902µs    | 965µs    | 1ms      | 1ms      | 6ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39514.64 | 7636.72 | 48238.76 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29500.82 | 40350.99 | 42788.17 | 43403.84 | 43877.95 | 44123.67 | 44554.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57684.54 | 15410.73 | 74231.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34149.79 | 38456.43 | 66701.16 | 69911.75 | 70857.25 | 71397.99 | 72207.80 |
| **Latency** | 530µs    | 616µs    | 786µs    | 839µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22743.87 | 5372.12 | 46305.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16529.71 | 18548.37 | 23676.57 | 27795.47 | 28054.01 | 28219.80 | 28600.15 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43438.08 | 11755.23 | 55081.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27189.92 | 38922.86 | 49365.02 | 52161.39 | 52946.94 | 53326.74 | 53987.72 |
| **Latency** | 845µs    | 907µs    | 982µs    | 1ms      | 1ms      | 1ms      | 5ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45758.62 | 10536.57 | 58323.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32156.31 | 41077.32 | 45198.44 | 55225.25 | 56287.32 | 56748.20 | 57341.41 |
| **Latency** | 796µs    | 859µs    | 932µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35537.47 | 6280.56 | 39322.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33889.25 | 36554.39 | 37237.74 | 37927.06 | 38352.45 | 38567.40 | 38930.11 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22159.13 | 3914.67 | 25924.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18411.19 | 20849.94 | 23916.97 | 24178.84 | 24401.60 | 24691.36 | 25309.02 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9269.17  | 1310.89 | 12740.26 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 8007.70 | 8635.60 | 9549.93 | 9791.97 | 10440.41 | 11352.18 | 12182.71 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms      | 6ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37534.45 | 7241.64 | 43107.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29233.93 | 37994.75 | 40698.99 | 41132.06 | 41601.21 | 41895.90 | 42216.45 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37755.91 | 8732.48 | 47979.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22216.50 | 40004.57 | 41121.02 | 42029.30 | 42816.41 | 43212.35 | 43807.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28350.23 | 4831.61 | 32896.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23924.92 | 28827.71 | 30075.24 | 30650.60 | 31343.18 | 31587.04 | 31872.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5466.78  | 1492.85 | 7989.77 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3121.67 | 5502.71 | 6005.00 | 6324.29 | 6541.51 | 6639.18 | 7693.94 |
| **Latency** | 7ms     | 8ms     | 8ms     | 8ms     | 12ms    | 13ms    | 22ms    |

---

<p align="center">Generated 2023-04-05T15:10:34.830Z</p>
