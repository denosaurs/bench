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
| Deno                                                                                 | 66753.82 | 16075.26 | 77024.77  | 100%     |
| Bun                                                                                  | 64476.09 | 11008.69 | 83365.63  | 97%      |
| Hyper Express                                                                        | 62807.96 | 16890.23 | 78797.31  | 94%      |
| NHttp                                                                                | 58113.56 | 12754.02 | 65609.04  | 87%      |
| Fast                                                                                 | 58084.38 | 13666.05 | 66515.22  | 87%      |
| Hono                                                                                 | 57049.31 | 12356.07 | 64623.63  | 85%      |
| Deso                                                                                 | 55845.92 | 11182.51 | 64855.27  | 84%      |
| Megalo                                                                               | 54103.29 | 10425.59 | 60871.36  | 81%      |
| Fastro                                                                               | 53807.25 | 6663.13  | 58036.83  | 81%      |
| Reno                                                                                 | 47237.91 | 5680.70  | 50370.84  | 71%      |
| http                                                                                 | 39036.23 | 8826.30  | 46812.74  | 58%      |
| Cheetah                                                                              | 37990.44 | 3695.00  | 40218.04  | 57%      |
| Node                                                                                 | 35977.17 | 5362.32  | 38856.65  | 54%      |
| Peko                                                                                 | 33358.10 | 8131.95  | 52723.46  | 50%      |
| Alosaur                                                                              | 33061.98 | 6346.60  | 41002.02  | 50%      |
| Fastify                                                                              | 30464.14 | 5132.13  | 33544.53  | 46%      |
| Router                                                                               | 28587.74 | 5144.49  | 34770.01  | 43%      |
| Little                                                                               | 25260.78 | 4422.72  | 49999.38  | 38%      |
| Aqua                                                                                 | 24509.49 | 3435.75  | 31179.27  | 37%      |
| Oak                                                                                  | 23110.53 | 4295.52  | 28825.31  | 35%      |
| Dinatra                                                                              | 19530.90 | 4330.74  | 25400.06  | 29%      |
| Abc                                                                                  | 15089.17 | 4659.90  | 31189.10  | 23%      |
| Opine                                                                                | 9630.35  | 5397.75  | 81884.07  | 14%      |
| Express (Deno)                                                                       | 8595.94  | 1683.31  | 11100.34  | 13%      |
| Express                                                                              | 6835.51  | 1402.69  | 11768.23  | 10%      |
| Servest                                                                              | 6127.76  | 1792.96  | 8818.22   | 9%       |
| Acorn                                                                                | 5765.55  | 8213.93  | 133333.33 | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-f21c60d9-1140-4961-9caf-d19a8a326879) |          |          |           |          |

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
| 15089.17 | 4659.90 | 31189.10 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9214.81 | 9562.90 | 17426.26 | 18601.80 | 19524.35 | 20908.93 | 21557.88 |
| **Latency** | 2ms     | 2ms     | 2ms      | 3ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 5765.55  | 8213.93 | 133333.33 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 52.84 | 95.06 | 3847.47 | 8139.43 | 11253.01 | 15304.83 | 33011.75 |
| **Latency** | 5ms   | 7ms   | 16ms    | 22ms    | 26ms     | 27ms     | 29ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33061.98 | 6346.60 | 41002.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28895.91 | 30802.06 | 35444.55 | 36479.05 | 37481.86 | 37945.96 | 38624.49 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24509.49 | 3435.75 | 31179.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23108.71 | 24047.30 | 25132.35 | 26268.48 | 26692.33 | 27077.01 | 28315.77 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64476.09 | 11008.69 | 83365.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 50849.18 | 54649.05 | 69435.22 | 74131.67 | 75480.66 | 76178.07 | 78383.94 |
| **Latency** | 477µs    | 594µs    | 736µs    | 836µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37990.44 | 3695.00 | 40218.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36600.65 | 38414.41 | 38907.31 | 39280.78 | 39595.03 | 39804.74 | 40027.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66753.82 | 16075.26 | 77024.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30704.31 | 70938.18 | 74404.78 | 75443.54 | 75973.93 | 76311.76 | 76725.61 |
| **Latency** | 552µs    | 620µs    | 679µs    | 728µs    | 814µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 55845.92 | 11182.51 | 64855.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35304.46 | 59006.91 | 60434.88 | 61261.79 | 61714.11 | 61954.45 | 62629.99 |
| **Latency** | 750µs    | 786µs    | 814µs    | 850µs    | 996µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19530.90 | 4330.74 | 25400.06 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16064.06 | 17941.75 | 21207.96 | 22700.60 | 23007.77 | 23145.91 | 23669.65 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6835.51  | 1402.69 | 11768.23 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4548.98 | 6911.54 | 7487.06 | 7584.63 | 7650.55 | 7678.77 | 7750.59 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 15ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8595.94  | 1683.31 | 11100.34 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6266.05 | 8415.99 | 9346.85 | 9461.52 | 9523.60 | 9559.00 | 9920.62 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58084.38 | 13666.05 | 66515.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27207.53 | 62650.59 | 64628.53 | 65215.12 | 65536.89 | 65696.50 | 65942.04 |
| **Latency** | 686µs    | 730µs    | 764µs    | 811µs    | 950µs    | 1ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30464.14 | 5132.13 | 33544.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29677.39 | 31123.89 | 31759.63 | 32400.36 | 32651.84 | 32724.46 | 32887.73 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53807.25 | 6663.13 | 58036.83 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 51430.52 | 54701.52 | 55786.76 | 56402.13 | 57210.65 | 57425.71 | 57729.83 |
| **Latency** | 821µs    | 854µs    | 890µs    | 923µs    | 998µs    | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57049.31 | 12356.07 | 64623.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29664.90 | 60111.28 | 62765.56 | 63587.62 | 63892.78 | 64015.87 | 64270.44 |
| **Latency** | 713µs    | 757µs    | 785µs    | 825µs    | 973µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39036.23 | 8826.30 | 46812.74 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24442.28 | 37392.97 | 43361.50 | 44377.87 | 45034.08 | 45469.44 | 46044.49 |
| **Latency** | 884µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 62807.96 | 16890.23 | 78797.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37317.90 | 41507.04 | 73005.08 | 75797.80 | 76548.70 | 77024.62 | 77794.68 |
| **Latency** | 495µs    | 565µs    | 727µs    | 757µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25260.78 | 4422.72 | 49999.38 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22839.70 | 24749.56 | 26348.93 | 27457.41 | 28041.70 | 28782.00 | 29638.12 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54103.29 | 10425.59 | 60871.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33804.66 | 56922.64 | 58506.94 | 58930.11 | 59334.88 | 59808.25 | 60343.06 |
| **Latency** | 771µs    | 817µs    | 852µs    | 887µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58113.56 | 12754.02 | 65609.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29431.72 | 61875.83 | 64338.84 | 64804.39 | 65011.55 | 65136.62 | 65354.10 |
| **Latency** | 704µs    | 745µs    | 770µs    | 804µs    | 958µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35977.17 | 5362.32 | 38856.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35473.71 | 36691.65 | 37169.43 | 37767.15 | 38028.44 | 38186.60 | 38409.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23110.53 | 4295.52 | 28825.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20710.31 | 22548.33 | 24244.71 | 25145.71 | 26367.31 | 26976.12 | 27671.13 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9630.35  | 5397.75 | 81884.07 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 6416.09 | 8204.99 | 9870.64 | 10300.91 | 11490.30 | 12933.49 | 15422.02 |
| **Latency** | 4ms     | 4ms     | 5ms     | 5ms      | 6ms      | 7ms      | 13ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33358.10 | 8131.95 | 52723.46 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21712.11 | 31465.70 | 37554.75 | 38823.38 | 39643.43 | 40169.57 | 40882.75 |
| **Latency** | 985µs    | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47237.91 | 5680.70 | 50370.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46440.61 | 48136.59 | 48600.35 | 49133.03 | 49568.77 | 49809.84 | 50155.48 |
| **Latency** | 956µs    | 988µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28587.74 | 5144.49 | 34770.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25903.77 | 27967.09 | 29897.53 | 31416.20 | 32198.11 | 32771.11 | 33339.13 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6127.76  | 1792.96 | 8818.22 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4843.91 | 5316.35 | 6466.25 | 7309.76 | 7531.90 | 7612.76 | 8709.99 |
| **Latency** | 7ms     | 7ms     | 7ms     | 9ms     | 9ms     | 14ms    | 17ms    |

---

<p align="center">Generated 2023-05-28T01:55:19.687Z</p>
