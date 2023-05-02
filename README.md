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
| Deno                                                                                 | 54592.12 | 14718.69 | 66007.71  | 100%     |
| Bun                                                                                  | 52784.40 | 8683.63  | 70281.16  | 97%      |
| Hyper Express                                                                        | 50787.39 | 13899.12 | 67055.02  | 93%      |
| NHttp                                                                                | 49170.24 | 9990.71  | 55546.97  | 90%      |
| Fast                                                                                 | 48636.50 | 9421.79  | 55220.74  | 89%      |
| Hono                                                                                 | 48177.69 | 9012.63  | 55019.68  | 88%      |
| Deso                                                                                 | 46252.52 | 8647.65  | 53527.69  | 85%      |
| Fastro                                                                               | 44947.69 | 7151.97  | 50421.44  | 82%      |
| Megalo                                                                               | 43863.35 | 9278.39  | 50323.48  | 80%      |
| Reno                                                                                 | 38084.27 | 3709.14  | 40932.38  | 70%      |
| http                                                                                 | 31612.38 | 7279.81  | 37448.26  | 58%      |
| Node                                                                                 | 28661.03 | 4527.06  | 32535.64  | 53%      |
| Peko                                                                                 | 27602.82 | 6408.45  | 41767.50  | 51%      |
| Fastify                                                                              | 26714.41 | 5422.64  | 29877.77  | 49%      |
| Alosaur                                                                              | 24348.30 | 5542.86  | 31665.15  | 45%      |
| Router                                                                               | 22286.92 | 4237.58  | 56406.28  | 41%      |
| Little                                                                               | 19525.63 | 3853.51  | 26971.24  | 36%      |
| Aqua                                                                                 | 18941.32 | 3268.29  | 22772.20  | 35%      |
| Oak                                                                                  | 17369.35 | 3577.47  | 22661.13  | 32%      |
| Dinatra                                                                              | 15066.43 | 3657.69  | 31395.18  | 28%      |
| Abc                                                                                  | 12506.63 | 2958.90  | 23378.49  | 23%      |
| Opine                                                                                | 7539.51  | 1795.58  | 51409.92  | 14%      |
| Express (Deno)                                                                       | 6742.06  | 1543.82  | 9019.66   | 12%      |
| Express                                                                              | 5323.01  | 1328.96  | 10852.20  | 10%      |
| Servest                                                                              | 4516.03  | 1357.79  | 6826.96   | 8%       |
| Acorn                                                                                | 4359.76  | 9048.34  | 106538.41 | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-a64fb249-3afa-4d5e-a9c4-9a9981997e0f) |          |          |           |          |

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
| 12506.63 | 2958.90 | 23378.49 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7810.40 | 11215.27 | 13441.96 | 14594.06 | 15546.09 | 16422.16 | 16862.66 |
| **Latency** | 3ms     | 3ms      | 3ms      | 3ms      | 5ms      | 6ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4359.76  | 9048.34 | 106538.41 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 94.73 | 1868.06 | 2550.97 | 3762.74 | 6677.24 | 7768.31 | 55493.90 |
| **Latency** | 6ms   | 8ms     | 19ms    | 24ms    | 29ms    | 30ms    | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24348.30 | 5542.86 | 31665.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18504.81 | 21112.67 | 26826.31 | 27730.46 | 28208.97 | 28502.28 | 29301.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18941.32 | 3268.29 | 22772.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17019.28 | 18112.68 | 20307.51 | 20760.33 | 21014.16 | 21254.27 | 21935.50 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 52784.40 | 8683.63 | 70281.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42218.92 | 45107.91 | 51509.46 | 61802.69 | 63627.76 | 64542.18 | 66272.17 |
| **Latency** | 578µs    | 722µs    | 872µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54592.12 | 14718.69 | 66007.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25233.13 | 57698.82 | 61731.21 | 63043.21 | 63832.27 | 64338.96 | 64995.11 |
| **Latency** | 696µs    | 757µs    | 798µs    | 858µs    | 1ms      | 1ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46252.52 | 8647.65 | 53527.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29281.58 | 48207.50 | 49645.34 | 50502.38 | 51117.44 | 51302.57 | 51679.92 |
| **Latency** | 919µs    | 945µs    | 975µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15066.43 | 3657.69 | 31395.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11221.95 | 12649.46 | 16797.13 | 17478.43 | 18163.48 | 18374.28 | 19029.30 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5323.01  | 1328.96 | 10852.20 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3329.50 | 5283.32 | 5886.29 | 6028.93 | 6128.25 | 6172.90 | 6372.97 |
| **Latency** | 8ms     | 8ms     | 8ms     | 8ms     | 12ms    | 14ms    | 20ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6742.06  | 1543.82 | 9019.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4505.99 | 6323.34 | 7511.98 | 7718.20 | 7807.27 | 7857.62 | 8515.63 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 11ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48636.50 | 9421.79 | 55220.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32205.03 | 51015.62 | 52432.28 | 53110.95 | 53536.16 | 53836.37 | 54306.82 |
| **Latency** | 874µs    | 900µs    | 928µs    | 966µs    | 1ms      | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26714.41 | 5422.64 | 29877.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22973.48 | 27522.92 | 28535.18 | 29075.39 | 29363.51 | 29474.07 | 29681.42 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44947.69 | 7151.97 | 50421.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35887.67 | 46228.33 | 47234.77 | 48158.41 | 48934.40 | 49233.24 | 49867.09 |
| **Latency** | 986µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48177.69 | 9012.63 | 55019.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32623.64 | 50305.42 | 51728.43 | 52502.07 | 53016.83 | 53288.98 | 53902.94 |
| **Latency** | 882µs    | 911µs    | 939µs    | 981µs    | 1ms      | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31612.38 | 7279.81 | 37448.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22597.56 | 28504.40 | 35041.32 | 35702.38 | 36347.83 | 36650.17 | 37035.96 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 50787.39 | 13899.12 | 67055.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29426.71 | 35958.14 | 58320.27 | 62720.83 | 64026.41 | 64582.89 | 65558.02 |
| **Latency** | 599µs    | 702µs    | 864µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19525.63 | 3853.51 | 26971.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15444.40 | 18787.58 | 20810.99 | 21828.94 | 22260.56 | 22550.19 | 23169.00 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43863.35 | 9278.39 | 50323.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22491.61 | 46633.31 | 47711.51 | 48308.37 | 49217.36 | 49527.23 | 50004.22 |
| **Latency** | 976µs    | 999µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49170.24 | 9990.71 | 55546.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29677.12 | 51999.63 | 53430.15 | 54060.86 | 54471.29 | 54720.85 | 55048.12 |
| **Latency** | 852µs    | 881µs    | 912µs    | 952µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28661.03 | 4527.06 | 32535.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27386.43 | 29008.87 | 29671.98 | 30488.29 | 30805.10 | 30988.50 | 31202.66 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17369.35 | 3577.47 | 22661.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15040.31 | 16310.27 | 18823.21 | 19168.79 | 19428.63 | 19720.51 | 20593.47 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7539.51  | 1795.58 | 51409.92 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6394.23 | 7189.26 | 7858.65 | 8096.90 | 8281.34 | 8630.07 | 9602.37 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 7ms     | 8ms     | 13ms    |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27602.82 | 6408.45 | 41767.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18869.80 | 25275.69 | 30552.08 | 31507.07 | 31870.90 | 32140.79 | 32852.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 5ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38084.27 | 3709.14 | 40932.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37428.37 | 38154.08 | 38723.43 | 39408.23 | 39927.58 | 40109.55 | 40416.64 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22286.92 | 4237.58 | 56406.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18982.18 | 20608.12 | 23959.09 | 24437.64 | 24745.88 | 24932.27 | 25818.10 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4516.03  | 1357.79 | 6826.96 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2827.40 | 3710.36 | 5134.09 | 5304.36 | 5443.34 | 5662.72 | 6216.97 |
| **Latency** | 9ms     | 9ms     | 9ms     | 12ms    | 13ms    | 22ms    | 24ms    |

---

<p align="center">Generated 2023-05-02T01:42:10.102Z</p>
