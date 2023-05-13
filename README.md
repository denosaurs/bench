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
  - [Cheetah](#cheetah)
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
    - [Cheetah](#cheetah-1)
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
| Deno                                                                                 | 66228.63 | 13820.79 | 75252.87  | 100%     |
| Bun                                                                                  | 61440.29 | 9796.53  | 86249.57  | 93%      |
| Hyper Express                                                                        | 59188.92 | 16501.20 | 77725.05  | 89%      |
| NHttp                                                                                | 58883.54 | 12472.91 | 66878.89  | 89%      |
| Fast                                                                                 | 58702.57 | 13234.45 | 67511.16  | 89%      |
| Fastro                                                                               | 58444.46 | 12020.64 | 66522.97  | 88%      |
| Hono                                                                                 | 57261.81 | 13945.12 | 67238.01  | 86%      |
| Deso                                                                                 | 55424.15 | 11783.30 | 63302.22  | 84%      |
| Megalo                                                                               | 53563.00 | 11724.52 | 61529.24  | 81%      |
| Reno                                                                                 | 46776.90 | 5845.16  | 50360.43  | 71%      |
| http                                                                                 | 38673.99 | 8219.76  | 48103.16  | 58%      |
| Cheetah                                                                              | 37181.70 | 4004.04  | 42580.57  | 56%      |
| Node                                                                                 | 36012.83 | 5751.01  | 39170.32  | 54%      |
| Peko                                                                                 | 35076.38 | 6908.53  | 45495.91  | 53%      |
| Alosaur                                                                              | 32679.06 | 6693.10  | 67745.07  | 49%      |
| Router                                                                               | 27296.14 | 4811.43  | 31798.50  | 41%      |
| Fastify                                                                              | 26811.89 | 10131.18 | 35504.22  | 40%      |
| Aqua                                                                                 | 23326.26 | 3396.43  | 28858.04  | 35%      |
| Little                                                                               | 22917.39 | 6163.97  | 153838.26 | 35%      |
| Oak                                                                                  | 21447.72 | 4097.23  | 26809.80  | 32%      |
| Dinatra                                                                              | 19256.38 | 4037.18  | 39236.00  | 29%      |
| Abc                                                                                  | 16506.54 | 3430.25  | 21537.58  | 25%      |
| Opine                                                                                | 9689.23  | 1617.09  | 13321.53  | 15%      |
| Express (Deno)                                                                       | 8585.61  | 1691.33  | 12396.81  | 13%      |
| Express                                                                              | 6705.60  | 1257.35  | 9924.37   | 10%      |
| Servest                                                                              | 5739.04  | 1668.58  | 8444.29   | 9%       |
| Acorn                                                                                | 3319.71  | 3553.44  | 68775.32  | 5%       |
| ![Chart](https://quickchart.io/chart/render/sf-44e1d6a9-b3a1-4ac2-988d-30b7c0065421) |          |          |           |          |

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

## [Cheetah](https://github.com/azurystudio/cheetah)

🐈 A blazing fast framework for the modern web.

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
| 16506.54 | 3430.25 | 21537.58 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9254.75 | 16368.01 | 17816.90 | 18336.83 | 18960.59 | 19693.06 | 20630.14 |
| **Latency** | 2ms     | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3319.71  | 3553.44 | 68775.32 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ----- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 98.00 | 2066.12 | 2718.58 | 3995.67 | 6250.16 | 8618.28 | 10102.69 |
| **Latency** | 5ms   | 7ms     | 16ms    | 22ms    | 26ms    | 28ms    | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32679.06 | 6693.10 | 67745.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29248.50 | 30904.80 | 35181.50 | 35780.33 | 36411.07 | 36796.55 | 37589.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23326.26 | 3396.43 | 28858.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22017.22 | 22702.32 | 24152.25 | 24900.88 | 25441.60 | 26074.01 | 26601.97 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61440.29 | 9796.53 | 86249.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50303.93 | 53433.94 | 61229.70 | 70905.05 | 72816.65 | 73651.13 | 76217.16 |
| **Latency** | 495µs    | 622µs    | 767µs    | 890µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37181.70 | 4004.04 | 42580.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36940.94 | 37565.19 | 38085.12 | 38395.68 | 38806.42 | 39037.04 | 39356.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66228.63 | 13820.79 | 75252.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33002.16 | 69384.91 | 71939.25 | 73299.16 | 73945.57 | 74257.10 | 74671.48 |
| **Latency** | 573µs    | 642µs    | 693µs    | 741µs    | 820µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55424.15 | 11783.30 | 63302.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30387.34 | 58609.53 | 60761.67 | 61485.16 | 62107.76 | 62354.56 | 62726.67 |
| **Latency** | 757µs    | 779µs    | 803µs    | 840µs    | 988µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19256.38 | 4037.18 | 39236.00 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16129.44 | 17130.41 | 20759.71 | 21930.59 | 22407.58 | 22706.02 | 24586.45 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6705.60  | 1257.35 | 9924.37 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4607.49 | 6841.98 | 7288.00 | 7408.63 | 7483.78 | 7512.81 | 7572.58 |
| **Latency** | 6ms     | 6ms     | 6ms     | 7ms     | 9ms     | 11ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8585.61  | 1691.33 | 12396.81 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6766.33 | 8340.07 | 9262.26 | 9433.14 | 9500.94 | 9538.10 | 10914.36 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 13ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58702.57 | 13234.45 | 67511.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27613.40 | 61882.63 | 65014.64 | 65758.83 | 66218.88 | 66412.58 | 66775.81 |
| **Latency** | 709µs    | 736µs    | 753µs    | 782µs    | 930µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 26811.89 | 10131.18 | 35504.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12180.95 | 12372.82 | 33248.72 | 34145.26 | 34462.91 | 34596.02 | 34797.63 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      | 4ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58444.46 | 12020.64 | 66522.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33791.08 | 61518.78 | 63575.99 | 64219.60 | 64796.03 | 65084.53 | 65516.06 |
| **Latency** | 717µs    | 755µs    | 770µs    | 796µs    | 928µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57261.81 | 13945.12 | 67238.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27055.61 | 60513.03 | 64081.73 | 64951.66 | 65516.73 | 65786.52 | 66107.27 |
| **Latency** | 715µs    | 741µs    | 761µs    | 798µs    | 955µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38673.99 | 8219.76 | 48103.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29585.66 | 36278.82 | 42507.66 | 43415.43 | 43954.51 | 44154.20 | 44483.50 |
| **Latency** | 991µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59188.92 | 16501.20 | 77725.05 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36100.55 | 37780.29 | 69001.21 | 73141.35 | 74400.09 | 75157.52 | 76047.54 |
| **Latency** | 510µs    | 599µs    | 749µs    | 862µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 22917.39 | 6163.97 | 153838.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16456.92 | 22178.82 | 24026.21 | 26011.33 | 26347.21 | 26567.52 | 27211.58 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53563.00 | 11724.52 | 61529.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26410.93 | 57036.80 | 59129.88 | 59718.23 | 60133.39 | 60409.66 | 61020.45 |
| **Latency** | 788µs    | 810µs    | 832µs    | 860µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58883.54 | 12472.91 | 66878.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30305.01 | 62068.60 | 64561.67 | 65172.03 | 65504.50 | 65706.26 | 65970.28 |
| **Latency** | 717µs    | 744µs    | 761µs    | 787µs    | 917µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36012.83 | 5751.01 | 39170.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35445.83 | 36906.47 | 37487.92 | 38016.18 | 38340.08 | 38537.20 | 38899.79 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21447.72 | 4097.23 | 26809.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18674.05 | 20744.21 | 22636.67 | 23428.24 | 24233.45 | 24530.92 | 25616.53 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9689.23  | 1617.09 | 13321.53 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8170.80 | 9519.48 | 10163.79 | 10408.22 | 10515.93 | 11038.59 | 12399.26 |
| **Latency** | 4ms     | 4ms     | 4ms      | 5ms      | 5ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35076.38 | 6908.53 | 45495.91 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31125.29 | 32819.21 | 38025.30 | 38724.63 | 39040.14 | 39322.62 | 39846.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46776.90 | 5845.16 | 50360.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45007.91 | 47745.15 | 48304.62 | 49106.66 | 49451.39 | 49658.19 | 49909.22 |
| **Latency** | 982µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27296.14 | 4811.43 | 31798.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24598.04 | 25884.00 | 29338.54 | 29783.18 | 30045.55 | 30190.11 | 30766.93 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5739.04  | 1668.58 | 8444.29 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4452.74 | 4958.99 | 6328.58 | 6683.07 | 7000.28 | 7068.53 | 8324.76 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 10ms    | 17ms    | 19ms    |

---

<p align="center">Generated 2023-05-13T01:33:38.858Z</p>
