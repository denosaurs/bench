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
| Deno                                                                                 | 69159.66 | 16735.84 | 80950.72  | 100%     |
| Bun                                                                                  | 67806.55 | 13058.34 | 88788.88  | 98%      |
| Hyper Express                                                                        | 65738.98 | 17195.86 | 83381.39  | 95%      |
| NHttp                                                                                | 63639.02 | 12061.68 | 70328.37  | 92%      |
| Hono                                                                                 | 62577.45 | 13037.00 | 161290.32 | 90%      |
| Fastro                                                                               | 60386.27 | 10548.15 | 66944.79  | 87%      |
| Fast                                                                                 | 60092.06 | 16174.81 | 72270.58  | 87%      |
| Deso                                                                                 | 58924.43 | 12421.42 | 67458.89  | 85%      |
| Megalo                                                                               | 57883.87 | 11093.17 | 65146.41  | 84%      |
| Reno                                                                                 | 49920.64 | 5779.66  | 53072.35  | 72%      |
| Cheetah                                                                              | 41989.79 | 3946.64  | 44409.69  | 61%      |
| Node                                                                                 | 41258.21 | 7699.06  | 46087.19  | 60%      |
| http                                                                                 | 41225.17 | 9127.57  | 49067.57  | 60%      |
| Peko                                                                                 | 36157.80 | 8351.40  | 44222.28  | 52%      |
| Fastify                                                                              | 34874.79 | 8905.37  | 40480.01  | 50%      |
| Alosaur                                                                              | 34208.91 | 7267.65  | 107142.43 | 49%      |
| Router                                                                               | 29448.38 | 5392.58  | 35546.48  | 43%      |
| Little                                                                               | 25746.37 | 5469.39  | 31807.07  | 37%      |
| Aqua                                                                                 | 24169.34 | 3334.73  | 32005.26  | 35%      |
| Oak                                                                                  | 24003.70 | 4899.45  | 29317.73  | 35%      |
| Dinatra                                                                              | 22122.88 | 4482.07  | 49812.99  | 32%      |
| Abc                                                                                  | 19213.79 | 2694.25  | 22637.22  | 28%      |
| Opine                                                                                | 10595.29 | 3904.73  | 70442.18  | 15%      |
| Express (Deno)                                                                       | 9742.21  | 1954.36  | 14202.46  | 14%      |
| Acorn                                                                                | 8758.21  | 11542.97 | 142482.45 | 13%      |
| Express                                                                              | 7981.78  | 1357.03  | 9607.39   | 12%      |
| Servest                                                                              | 6701.32  | 2021.37  | 9643.17   | 10%      |
| ![Chart](https://quickchart.io/chart/render/sf-07cd8fbc-eeb7-4a85-b5a9-8ac6897da0c1) |          |          |           |          |

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
| 19213.79 | 2694.25 | 22637.22 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16831.04 | 17605.00 | 20247.01 | 21209.96 | 21716.71 | 21908.42 | 22221.10 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 8758.21  | 11542.97 | 142482.45 |     |

| **Stat**    | 10    | 25    | 50      | 75       | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 57.21 | 88.97 | 4415.53 | 13527.72 | 25962.67 | 26970.23 | 30244.26 |
| **Latency** | 4ms   | 6ms   | 15ms    | 20ms     | 24ms     | 29ms     | 31ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 34208.91 | 7267.65 | 107142.43 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29609.05 | 31617.88 | 36527.77 | 37623.54 | 38463.76 | 38987.18 | 39945.13 |
| **Latency** | 978µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24169.34 | 3334.73 | 32005.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22871.01 | 23703.54 | 24845.24 | 25755.90 | 26099.82 | 26840.18 | 27886.71 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67806.55 | 13058.34 | 88788.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 52011.98 | 56090.63 | 71916.98 | 80118.41 | 81627.37 | 82338.01 | 84248.51 |
| **Latency** | 448µs    | 556µs    | 679µs    | 833µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41989.79 | 3946.64 | 44409.69 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40849.46 | 42472.89 | 43016.18 | 43305.50 | 43601.56 | 43802.06 | 44186.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 69159.66 | 16735.84 | 80950.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32535.37 | 72301.97 | 77443.93 | 78640.67 | 79314.05 | 79723.69 | 80105.91 |
| **Latency** | 524µs    | 596µs    | 649µs    | 697µs    | 884µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58924.43 | 12421.42 | 67458.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29816.33 | 62164.51 | 64541.92 | 65312.66 | 65891.59 | 66147.91 | 66554.41 |
| **Latency** | 707µs    | 740µs    | 766µs    | 800µs    | 950µs    | 1ms      | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22122.88 | 4482.07 | 49812.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20610.25 | 21434.56 | 22408.18 | 23944.71 | 24506.55 | 24934.59 | 27124.70 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7981.78  | 1357.03 | 9607.39 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5906.84 | 7940.56 | 8637.55 | 8740.53 | 8811.96 | 8831.33 | 8865.13 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 7ms     | 8ms     | 12ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 9742.21  | 1954.36 | 14202.46 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7093.54 | 9544.79 | 10577.18 | 10776.18 | 10846.07 | 10904.14 | 11741.35 |
| **Latency** | 4ms     | 4ms     | 4ms      | 4ms      | 5ms      | 7ms      | 12ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60092.06 | 16174.81 | 72270.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29564.35 | 52676.18 | 69310.27 | 70197.34 | 70671.84 | 70891.92 | 71125.64 |
| **Latency** | 651µs    | 689µs    | 714µs    | 751µs    | 1ms      | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34874.79 | 8905.37 | 40480.01 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16952.84 | 37928.32 | 38852.32 | 39502.24 | 39830.91 | 39978.62 | 40244.53 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60386.27 | 10548.15 | 66944.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 44253.41 | 63328.28 | 64218.40 | 64802.37 | 65423.33 | 65797.17 | 66267.28 |
| **Latency** | 715µs    | 749µs    | 775µs    | 802µs    | 911µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 62577.45 | 13037.00 | 161290.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38801.04 | 65820.86 | 68107.96 | 68739.33 | 69345.41 | 69545.69 | 69887.72 |
| **Latency** | 670µs    | 703µs    | 727µs    | 759µs    | 886µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41225.17 | 9127.57 | 49067.57 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26049.42 | 39813.81 | 45559.09 | 46813.43 | 47422.21 | 47721.71 | 48428.91 |
| **Latency** | 840µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65738.98 | 17195.86 | 83381.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40823.56 | 41989.67 | 77210.11 | 79642.77 | 80644.12 | 81094.39 | 81878.03 |
| **Latency** | 473µs    | 553µs    | 686µs    | 773µs    | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25746.37 | 5469.39 | 31807.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16966.30 | 25922.74 | 27276.72 | 28804.81 | 29432.19 | 30162.02 | 31174.48 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57883.87 | 11093.17 | 65146.41 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38104.09 | 60923.60 | 62326.64 | 62988.16 | 63595.70 | 63921.57 | 64559.22 |
| **Latency** | 732µs    | 768µs    | 797µs    | 826µs    | 963µs    | 1ms      | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63639.02 | 12061.68 | 70328.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39820.18 | 67208.55 | 68723.17 | 69312.28 | 69620.70 | 69772.37 | 69966.28 |
| **Latency** | 665µs    | 699µs    | 722µs    | 750µs    | 880µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 41258.21 | 7699.06 | 46087.19 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36993.47 | 42834.12 | 43717.81 | 44419.87 | 44905.72 | 45072.45 | 45331.61 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24003.70 | 4899.45 | 29317.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19011.15 | 23999.22 | 25801.79 | 26565.05 | 26857.74 | 27410.33 | 28970.48 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10595.29 | 3904.73 | 70442.18 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8003.89 | 10122.82 | 10811.22 | 11123.57 | 12108.54 | 13107.69 | 15557.16 |
| **Latency** | 2ms     | 4ms      | 4ms      | 5ms      | 5ms      | 6ms      | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36157.80 | 8351.40 | 44222.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22583.31 | 35115.69 | 39631.78 | 41421.00 | 42473.74 | 42960.94 | 43493.12 |
| **Latency** | 927µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 49920.64 | 5779.66 | 53072.35 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 49312.49 | 50745.90 | 51298.85 | 51838.20 | 52268.86 | 52451.28 | 52752.09 |
| **Latency** | 910µs    | 937µs    | 970µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29448.38 | 5392.58 | 35546.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24239.49 | 29025.86 | 31301.02 | 32282.97 | 32860.67 | 33570.56 | 34827.62 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6701.32  | 2021.37 | 9643.17 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5124.94 | 5867.55 | 7301.01 | 8181.46 | 8569.95 | 8636.00 | 8741.94 |
| **Latency** | 6ms     | 6ms     | 6ms     | 8ms     | 9ms     | 13ms    | 16ms    |

---

<p align="center">Generated 2023-05-25T01:42:52.585Z</p>
