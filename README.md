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
  - [Danet (Oak)](#danet-oak)
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
  - [Stric](#stric)
  - [Servest](#servest)
  - [Vixeny (Deno)](#vixeny-deno)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Acorn](#acorn-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Cheetah](#cheetah-1)
    - [Danet (Oak)](#danet-oak-1)
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
    - [Stric](#stric-1)
    - [Servest](#servest-1)
    - [Vixeny (Deno)](#vixeny-deno-1)

# Overview

## Hello, bench!

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Hyper Express                                                                        | 80406.28 | 15869.24 | 100981.79 | 100%     |
| Bun                                                                                  | 78491.45 | 11167.26 | 101182.93 | 98%      |
| Stric                                                                                | 77670.23 | 10674.94 | 102209.32 | 97%      |
| Deno                                                                                 | 55386.69 | 7742.94  | 84957.67  | 69%      |
| NHttp                                                                                | 49770.51 | 2330.18  | 70603.21  | 62%      |
| Fast                                                                                 | 48616.19 | 3607.45  | 72170.90  | 60%      |
| Vixeny (Deno)                                                                        | 48589.45 | 3138.90  | 64315.01  | 60%      |
| Fastro                                                                               | 46940.49 | 2840.27  | 74511.11  | 58%      |
| Hono                                                                                 | 46448.81 | 3088.82  | 67459.62  | 58%      |
| Megalo                                                                               | 45318.98 | 2979.92  | 70989.25  | 56%      |
| Deso                                                                                 | 43631.05 | 2149.22  | 62299.51  | 54%      |
| Cheetah                                                                              | 40114.22 | 2314.54  | 44730.33  | 50%      |
| Reno                                                                                 | 39330.33 | 2089.39  | 44988.74  | 49%      |
| http                                                                                 | 36953.13 | 3466.12  | 47183.53  | 46%      |
| Alosaur                                                                              | 32627.96 | 3900.68  | 37406.57  | 41%      |
| Router                                                                               | 29349.52 | 3029.27  | 35211.11  | 37%      |
| Aqua                                                                                 | 27645.46 | 2968.19  | 32011.52  | 34%      |
| Little                                                                               | 26914.19 | 3304.93  | 31742.94  | 33%      |
| Oak                                                                                  | 25952.05 | 3570.74  | 30082.02  | 32%      |
| Danet (Oak)                                                                          | 19436.03 | 3101.76  | 24260.90  | 24%      |
| Node                                                                                 | 17091.02 | 1408.69  | 21339.08  | 21%      |
| Fastify                                                                              | 15985.32 | 1447.52  | 21341.21  | 20%      |
| Dinatra                                                                              | 15920.51 | 1817.82  | 19717.52  | 20%      |
| Abc                                                                                  | 14346.16 | 1566.60  | 20763.44  | 18%      |
| Opine                                                                                | 12773.60 | 1976.90  | 17356.10  | 16%      |
| Express (Deno)                                                                       | 11457.25 | 1925.40  | 13400.74  | 14%      |
| Servest                                                                              | 6819.79  | 1484.34  | 10602.09  | 8%       |
| Express                                                                              | 6304.93  | 936.54   | 7961.11   | 8%       |
| Acorn                                                                                | 5539.96  | 10776.71 | 102168.01 | 7%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-e4d6be4a-0eca-4397-a97c-f0d79bf7651b) |          |          |           |          |

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

## [Danet (Oak)](https://docs.danet.land/)

The most mature backend framework for Deno

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

## [Stric](https://bun.sh/docs/ecosystem/stric)

Stric is a minimalist, fast web framework for Bun.

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

## [Vixeny (Deno)](https://github.com/mimiMonads/functor)

A pure functional web framework

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14346.16 | 1566.60 | 20763.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13053.67 | 13741.47 | 14511.77 | 14939.33 | 15403.66 | 16109.24 | 18621.62 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      | 6ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 5539.96  | 10776.71 | 102168.01 |     |

| **Stat**    | 10    | 25      | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ------- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 90.21 | 2202.08 | 3257.32 | 5286.27 | 10073.67 | 11951.57 | 75823.63 |
| **Latency** | 4ms   | 8ms     | 14ms    | 19ms    | 23ms     | 25ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32627.96 | 3900.68 | 37406.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29925.81 | 31609.63 | 33851.06 | 34692.23 | 35341.49 | 35754.73 | 36466.03 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27645.46 | 2968.19 | 32011.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26031.29 | 27206.77 | 28335.10 | 29109.35 | 29717.20 | 30014.37 | 30716.12 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 78491.45 | 11167.26 | 101182.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63650.48 | 69455.65 | 80211.87 | 87174.41 | 90945.64 | 94066.68 | 97730.02 |
| **Latency** | 402µs    | 469µs    | 564µs    | 765µs    | 959µs    | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40114.22 | 2314.54 | 44730.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39026.99 | 39641.40 | 40304.53 | 41017.08 | 41747.86 | 42338.13 | 43213.44 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19436.03 | 3101.76 | 24260.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17923.37 | 19421.23 | 20214.53 | 20823.62 | 21291.17 | 21806.18 | 23011.29 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55386.69 | 7742.94 | 84957.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50504.97 | 51302.07 | 52221.11 | 54608.84 | 68458.67 | 74226.80 | 81797.01 |
| **Latency** | 604µs    | 836µs    | 942µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 43631.05 | 2149.22 | 62299.51 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42320.88 | 43128.14 | 43656.66 | 44273.49 | 44953.12 | 45456.09 | 48549.24 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15920.51 | 1817.82 | 19717.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14649.04 | 15318.71 | 16144.55 | 17043.00 | 17566.20 | 17816.08 | 18465.04 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 5ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 6304.93  | 936.54 | 7961.11 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5018.52 | 6028.98 | 6454.96 | 6696.37 | 7614.51 | 7805.89 | 7905.55 |
| **Latency** | 6ms     | 7ms     | 7ms     | 8ms     | 9ms     | 10ms    | 13ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11457.25 | 1925.40 | 13400.74 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8229.06 | 11521.89 | 12213.69 | 12449.91 | 12571.38 | 12831.87 | 13243.03 |
| **Latency** | 3ms     | 4ms      | 4ms      | 4ms      | 4ms      | 6ms      | 9ms      |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48616.19 | 3607.45 | 72170.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46035.77 | 46767.00 | 47631.85 | 49928.37 | 53362.28 | 55780.10 | 58818.76 |
| **Latency** | 868µs    | 995µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15985.32 | 1447.52 | 21341.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15730.48 | 16000.54 | 16212.57 | 16417.45 | 16619.99 | 16778.97 | 17309.96 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 3ms      | 3ms      | 6ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46940.49 | 2840.27 | 74511.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45182.70 | 46016.58 | 46624.72 | 47512.52 | 49344.43 | 50809.51 | 55096.61 |
| **Latency** | 970µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 46448.81 | 3088.82 | 67459.62 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44502.40 | 45324.01 | 46110.65 | 47208.63 | 49442.87 | 50963.35 | 56127.48 |
| **Latency** | 972µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36953.13 | 3466.12 | 47183.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33924.67 | 35762.51 | 37946.38 | 38904.61 | 39645.88 | 40013.91 | 41002.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 80406.28 | 15869.24 | 100981.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99        |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- |
| **Req/Sec** | 57087.83 | 64819.40 | 85618.95 | 94807.55 | 97651.90 | 98846.15 | 100144.31 |
| **Latency** | 368µs    | 458µs    | 571µs    | 736µs    | 934µs    | 1ms      | 1ms       |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26914.19 | 3304.93 | 31742.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25111.20 | 26869.15 | 27622.28 | 28441.15 | 29097.56 | 29526.85 | 30031.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45318.98 | 2979.92 | 70989.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 43402.11 | 44174.88 | 45117.85 | 46422.45 | 47915.85 | 49315.92 | 51858.33 |
| **Latency** | 986µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49770.51 | 2330.18 | 70603.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48211.46 | 48992.14 | 49645.90 | 50290.98 | 51067.91 | 52275.02 | 57544.59 |
| **Latency** | 914µs    | 959µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 17091.02 | 1408.69 | 21339.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16867.07 | 17104.51 | 17254.41 | 17482.29 | 17720.34 | 17912.92 | 18416.67 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25952.05 | 3570.74 | 30082.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24514.21 | 25880.05 | 26804.12 | 27535.36 | 28147.14 | 28522.74 | 29215.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12773.60 | 1976.90 | 17356.10 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11017.74 | 12668.23 | 13293.92 | 13690.95 | 14040.81 | 14620.12 | 15808.93 |
| **Latency** | 3ms      | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39330.33 | 2089.39 | 44988.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38158.30 | 38928.31 | 39414.53 | 40211.59 | 41006.56 | 41353.99 | 42607.43 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29349.52 | 3029.27 | 35211.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27601.93 | 28857.91 | 30143.29 | 30890.33 | 31490.76 | 31850.35 | 32602.01 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 77670.23 | 10674.94 | 102209.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64430.08 | 68618.27 | 76237.39 | 86845.81 | 92947.68 | 95436.30 | 98801.88 |
| **Latency** | 380µs    | 472µs    | 601µs    | 767µs    | 962µs    | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6819.79  | 1484.34 | 10602.09 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5427.09 | 6312.59 | 7070.64 | 7612.90 | 8312.78 | 8854.00 | 9575.29 |
| **Latency** | 4ms     | 5ms     | 7ms     | 8ms     | 10ms    | 12ms    | 15ms    |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48589.45 | 3138.90 | 64315.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46428.93 | 47221.81 | 48048.90 | 49157.06 | 52431.98 | 54335.99 | 58513.23 |
| **Latency** | 921µs    | 989µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

---

<p align="center">Generated 2023-11-01T01:29:44.496Z</p>
