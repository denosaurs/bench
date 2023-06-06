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
| Deno                                                                                 | 54150.44 | 13360.44 | 65078.37  | 100%     |
| Hyper Express                                                                        | 52507.16 | 14978.99 | 67336.27  | 97%      |
| Bun                                                                                  | 51946.29 | 11289.86 | 67720.16  | 96%      |
| Fast                                                                                 | 48013.59 | 10691.77 | 55906.34  | 89%      |
| NHttp                                                                                | 47018.04 | 11560.92 | 55694.08  | 87%      |
| Deso                                                                                 | 45845.99 | 8002.94  | 51468.75  | 85%      |
| Hono                                                                                 | 45423.79 | 9237.42  | 51648.79  | 84%      |
| Fastro                                                                               | 45117.16 | 7765.04  | 50866.75  | 83%      |
| Megalo                                                                               | 44557.45 | 8183.38  | 50532.81  | 82%      |
| Reno                                                                                 | 39439.45 | 4523.76  | 42619.13  | 73%      |
| Cheetah                                                                              | 31211.68 | 3157.12  | 34100.88  | 58%      |
| http                                                                                 | 29752.97 | 9190.52  | 77223.30  | 55%      |
| Peko                                                                                 | 29673.01 | 6517.05  | 54134.63  | 55%      |
| Node                                                                                 | 29185.70 | 4835.52  | 32528.26  | 54%      |
| Alosaur                                                                              | 26483.40 | 6246.14  | 71036.68  | 49%      |
| Fastify                                                                              | 26331.65 | 5468.71  | 29388.71  | 49%      |
| Router                                                                               | 23461.76 | 4704.48  | 54307.61  | 43%      |
| Little                                                                               | 20521.06 | 4296.24  | 35386.03  | 38%      |
| Aqua                                                                                 | 19896.42 | 3556.89  | 28528.72  | 37%      |
| Oak                                                                                  | 18135.05 | 4265.18  | 70116.39  | 33%      |
| Dinatra                                                                              | 15648.11 | 3437.91  | 34901.88  | 29%      |
| Acorn                                                                                | 14930.88 | 21328.51 | 106940.43 | 28%      |
| Abc                                                                                  | 13709.20 | 2572.28  | 19472.75  | 25%      |
| Opine                                                                                | 8152.42  | 2227.17  | 59798.06  | 15%      |
| Express (Deno)                                                                       | 6905.05  | 1523.89  | 9406.35   | 13%      |
| Express                                                                              | 5604.08  | 1257.71  | 9322.12   | 10%      |
| Servest                                                                              | 4815.29  | 1532.80  | 7274.77   | 9%       |
| ![Chart](https://quickchart.io/chart/render/sf-c421c493-8bad-44af-9a82-00623e2ab22a) |          |          |           |          |

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
| 13709.20 | 2572.28 | 19472.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10814.87 | 12167.20 | 14752.56 | 15311.81 | 15674.96 | 16522.47 | 17178.18 |
| **Latency** | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 14930.88 | 21328.51 | 106940.43 |     |

| **Stat**    | 10    | 25    | 50      | 75       | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 69.24 | 86.71 | 4947.93 | 25071.45 | 51500.24 | 56520.19 | 61930.12 |
| **Latency** | 6ms   | 8ms   | 18ms    | 25ms     | 28ms     | 30ms     | 38ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26483.40 | 6246.14 | 71036.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20221.48 | 23045.15 | 29222.86 | 29763.26 | 30238.73 | 30749.64 | 31821.84 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19896.42 | 3556.89 | 28528.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17430.05 | 18820.00 | 20929.48 | 21660.69 | 22448.37 | 23337.71 | 24170.93 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 51946.29 | 11289.86 | 67720.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38459.40 | 42222.49 | 53370.68 | 62725.64 | 64504.78 | 65206.16 | 66495.80 |
| **Latency** | 570µs    | 709µs    | 857µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31211.68 | 3157.12 | 34100.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30639.67 | 31319.17 | 31907.17 | 32288.48 | 32718.07 | 33022.67 | 33513.26 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 54150.44 | 13360.44 | 65078.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24505.76 | 56459.58 | 60382.44 | 61810.83 | 62617.86 | 62908.51 | 63555.42 |
| **Latency** | 720µs    | 764µs    | 822µs    | 877µs    | 1ms      | 2ms      | 2ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45845.99 | 8002.94 | 51468.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33662.78 | 47609.76 | 48903.93 | 49606.42 | 50103.26 | 50345.26 | 50854.93 |
| **Latency** | 925µs    | 966µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15648.11 | 3437.91 | 34901.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12215.24 | 13514.13 | 16409.44 | 18016.86 | 18672.05 | 19252.09 | 19978.33 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 6ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5604.08  | 1257.71 | 9322.12 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3451.60 | 5887.35 | 6140.01 | 6237.10 | 6297.61 | 6340.49 | 6437.20 |
| **Latency** | 7ms     | 7ms     | 8ms     | 8ms     | 11ms    | 13ms    | 19ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 6905.05  | 1523.89 | 9406.35 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4594.29 | 6473.62 | 7587.93 | 7762.63 | 7886.56 | 8003.10 | 8662.63 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 8ms     | 11ms    | 17ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 48013.59 | 10691.77 | 55906.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23536.03 | 49489.10 | 53216.06 | 53796.35 | 54240.73 | 54575.36 | 55312.10 |
| **Latency** | 844µs    | 889µs    | 923µs    | 970µs    | 1ms      | 2ms      | 2ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26331.65 | 5468.71 | 29388.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25773.42 | 27110.30 | 28076.61 | 28468.85 | 28729.24 | 28862.01 | 29120.92 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45117.16 | 7765.04 | 50866.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32105.89 | 46724.67 | 47866.91 | 48757.35 | 49546.52 | 49889.05 | 50372.18 |
| **Latency** | 939µs    | 987µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45423.79 | 9237.42 | 51648.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26941.38 | 47177.36 | 49536.64 | 50207.61 | 50631.88 | 50836.09 | 51155.50 |
| **Latency** | 912µs    | 954µs    | 991µs    | 1ms      | 1ms      | 2ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29752.97 | 9190.52 | 77223.30 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17616.98 | 21484.20 | 35092.92 | 37188.24 | 37827.13 | 38252.03 | 39225.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 52507.16 | 14978.99 | 67336.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30271.71 | 32014.36 | 61824.02 | 64684.92 | 65609.75 | 66108.82 | 66790.85 |
| **Latency** | 586µs    | 673µs    | 842µs    | 914µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20521.06 | 4296.24 | 35386.03 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16998.23 | 19718.46 | 21815.92 | 22987.09 | 23526.78 | 24223.84 | 24938.87 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 44557.45 | 8183.38 | 50532.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30613.45 | 46597.89 | 47679.11 | 48371.70 | 49216.77 | 49605.91 | 49992.95 |
| **Latency** | 947µs    | 990µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 47018.04 | 11560.92 | 55694.08 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22157.61 | 49406.72 | 52611.52 | 53282.41 | 53975.43 | 54420.67 | 55021.74 |
| **Latency** | 831µs    | 895µs    | 930µs    | 982µs    | 1ms      | 2ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29185.70 | 4835.52 | 32528.26 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28862.60 | 29800.49 | 30345.78 | 31006.79 | 31293.78 | 31446.19 | 31680.36 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18135.05 | 4265.18 | 70116.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13910.31 | 17292.70 | 19319.50 | 20172.16 | 20897.27 | 22032.11 | 23301.69 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8152.42  | 2227.17 | 59798.06 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 6608.10 | 7524.12 | 8482.55 | 8677.93 | 8833.54 | 9833.41 | 12968.88 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 7ms     | 8ms     | 13ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29673.01 | 6517.05 | 54134.63 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24213.55 | 27271.19 | 32212.05 | 33121.35 | 34051.87 | 34681.95 | 35241.09 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39439.45 | 4523.76 | 42619.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 38576.86 | 39706.45 | 40304.01 | 41209.87 | 41602.60 | 41784.80 | 42085.46 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23461.76 | 4704.48 | 54307.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19741.86 | 21944.40 | 25016.27 | 26016.82 | 26839.89 | 27340.86 | 28012.70 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4815.29  | 1532.80 | 7274.77 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2825.14 | 3913.45 | 5537.87 | 5710.90 | 5802.50 | 6699.70 | 6923.19 |
| **Latency** | 8ms     | 8ms     | 9ms     | 12ms    | 13ms    | 18ms    | 23ms    |

---

<p align="center">Generated 2023-06-06T02:02:10.675Z</p>
