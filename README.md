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
| Bun                                                                                  | 60024.71 | 9431.68  | 80734.98  | 100%     |
| Hyper Express                                                                        | 58573.23 | 15517.32 | 162162.16 | 98%      |
| NHttp                                                                                | 50764.52 | 11449.25 | 66217.43  | 85%      |
| Deno                                                                                 | 49309.92 | 13539.85 | 66458.27  | 82%      |
| Fastro                                                                               | 49099.02 | 15986.08 | 59595.79  | 82%      |
| Hono                                                                                 | 47238.99 | 15002.38 | 62420.04  | 79%      |
| Fast                                                                                 | 46807.25 | 14427.67 | 63800.45  | 78%      |
| Megalo                                                                               | 46645.74 | 12112.68 | 83448.46  | 78%      |
| http                                                                                 | 40584.65 | 8894.76  | 46629.22  | 68%      |
| Reno                                                                                 | 38704.02 | 10158.22 | 50052.52  | 64%      |
| Node                                                                                 | 37310.22 | 5504.53  | 40874.93  | 62%      |
| Peko                                                                                 | 36525.60 | 9164.71  | 45010.46  | 61%      |
| Alosaur                                                                              | 34114.70 | 6757.68  | 42152.57  | 57%      |
| Fastify                                                                              | 31004.31 | 5790.51  | 34366.09  | 52%      |
| Router                                                                               | 29511.64 | 4664.06  | 34196.71  | 49%      |
| Little                                                                               | 26589.83 | 4473.78  | 33597.71  | 44%      |
| Aqua                                                                                 | 24820.80 | 3524.88  | 28955.10  | 41%      |
| Oak                                                                                  | 23573.99 | 3705.04  | 32768.73  | 39%      |
| Dinatra                                                                              | 18388.64 | 3511.45  | 34661.81  | 31%      |
| Abc                                                                                  | 14555.65 | 4069.46  | 19972.88  | 24%      |
| Express (Deno)                                                                       | 10073.02 | 4643.25  | 105534.53 | 17%      |
| Opine                                                                                | 9841.25  | 1321.25  | 15415.87  | 16%      |
| Express                                                                              | 6746.92  | 1335.10  | 9001.48   | 11%      |
| Servest                                                                              | 5610.14  | 1497.89  | 8138.63   | 9%       |
| Acorn                                                                                | 3892.88  | 2721.66  | 32546.52  | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-12a9fa42-c571-4514-8440-bc26725ca202) |          |          |           |          |

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
| 14555.65 | 4069.46 | 19972.88 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8631.88 | 9744.60 | 16203.94 | 17600.04 | 18994.67 | 19169.66 | 19375.67 |
| **Latency** | 2ms     | 2ms     | 2ms      | 3ms      | 5ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3892.88  | 2721.66 | 32546.52 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2015.93 | 2470.66 | 2946.74 | 3983.72 | 8344.18 | 10510.01 | 12728.18 |
| **Latency** | 4ms     | 5ms     | 13ms    | 18ms    | 21ms    | 22ms     | 23ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34114.70 | 6757.68 | 42152.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24948.07 | 34324.13 | 37168.87 | 37544.50 | 38033.30 | 38390.16 | 38844.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24820.80 | 3524.88 | 28955.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22201.40 | 23206.77 | 26315.87 | 26571.01 | 26937.43 | 27422.12 | 27886.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60024.71 | 9431.68 | 80734.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50557.80 | 53208.22 | 57034.40 | 69754.42 | 73157.47 | 73884.44 | 75298.13 |
| **Latency** | 500µs    | 629µs    | 765µs    | 941µs    | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49309.92 | 13539.85 | 66458.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30304.05 | 42041.04 | 54056.96 | 60648.40 | 61555.94 | 61943.22 | 62865.66 |
| **Latency** | 636µs    | 748µs    | 903µs    | 1ms      | 1ms      | 1ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18388.64 | 3511.45 | 34661.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15623.33 | 16522.69 | 19626.17 | 20034.73 | 20313.71 | 20625.02 | 23678.49 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6746.92  | 1335.10 | 9001.48 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4504.29 | 6825.55 | 7401.21 | 7492.10 | 7559.59 | 7582.60 | 7625.34 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 10073.02 | 4643.25 | 105534.53 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7024.60 | 8694.69 | 10672.06 | 10862.05 | 11750.80 | 12224.86 | 15513.29 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 6ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46807.25 | 14427.67 | 63800.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23314.26 | 41425.44 | 54246.33 | 57750.92 | 58639.13 | 59331.05 | 60185.39 |
| **Latency** | 757µs    | 817µs    | 882µs    | 976µs    | 1ms      | 1ms      | 5ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31004.31 | 5790.51 | 34366.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29989.21 | 32031.17 | 32651.04 | 33139.87 | 33391.93 | 33492.88 | 33706.17 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49099.02 | 15986.08 | 59595.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17503.73 | 51834.89 | 55879.01 | 57041.46 | 57816.97 | 58348.75 | 58904.27 |
| **Latency** | 799µs    | 840µs    | 880µs    | 921µs    | 989µs    | 1ms      | 7ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47238.99 | 15002.38 | 62420.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19408.60 | 42005.17 | 55101.83 | 58107.16 | 58703.69 | 59091.70 | 59656.86 |
| **Latency** | 770µs    | 824µs    | 870µs    | 967µs    | 1ms      | 1ms      | 5ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40584.65 | 8894.76 | 46629.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25600.39 | 38018.75 | 44914.07 | 45528.54 | 45918.12 | 46100.69 | 46437.58 |
| **Latency** | 953µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 58573.23 | 15517.32 | 162162.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36885.42 | 41849.52 | 62674.37 | 73143.39 | 74801.74 | 75419.75 | 76890.69 |
| **Latency** | 509µs    | 613µs    | 743µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26589.83 | 4473.78 | 33597.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21679.86 | 25264.81 | 28215.33 | 29097.29 | 29777.65 | 29977.11 | 30312.80 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 46645.74 | 12112.68 | 83448.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30768.72 | 41520.90 | 53025.63 | 54212.65 | 55011.18 | 55428.65 | 56128.45 |
| **Latency** | 818µs    | 872µs    | 937µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50764.52 | 11449.25 | 66217.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34947.24 | 44568.45 | 56820.08 | 58880.26 | 59568.78 | 59827.11 | 60507.90 |
| **Latency** | 759µs    | 808µs    | 859µs    | 943µs    | 1ms      | 1ms      | 4ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37310.22 | 5504.53 | 40874.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36778.82 | 37878.15 | 38578.44 | 39187.52 | 39700.57 | 40079.89 | 40600.54 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23573.99 | 3705.04 | 32768.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20696.12 | 23461.78 | 24620.02 | 25232.07 | 26088.67 | 26287.34 | 26676.33 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9841.25  | 1321.25 | 15415.87 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8735.18 | 9522.59 | 10229.69 | 10333.18 | 10610.38 | 11234.98 | 12206.02 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 5ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36525.60 | 9164.71 | 45010.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23414.60 | 31572.84 | 42200.56 | 42648.38 | 42903.50 | 43116.53 | 43660.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38704.02 | 10158.22 | 50052.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22201.63 | 40119.08 | 43244.59 | 44320.09 | 45078.97 | 45400.80 | 47002.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29511.64 | 4664.06 | 34196.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25439.75 | 29012.86 | 31516.12 | 31758.54 | 31944.19 | 32091.30 | 32747.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5610.14  | 1497.89 | 8138.63 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3400.25 | 5638.47 | 6170.67 | 6445.27 | 6701.09 | 6775.36 | 7141.35 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 12ms    | 12ms    | 21ms    |

---

<p align="center">Generated 2023-04-06T01:32:43.904Z</p>
