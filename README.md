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
| Deno                                                                                 | 65444.59 | 13453.69 | 97455.98  | 100%     |
| Bun                                                                                  | 64298.11 | 10949.73 | 78755.15  | 98%      |
| Fast                                                                                 | 59246.16 | 12075.39 | 66847.09  | 91%      |
| Hono                                                                                 | 58851.31 | 12815.25 | 67515.99  | 90%      |
| NHttp                                                                                | 58382.64 | 13333.29 | 68023.39  | 89%      |
| Fastro                                                                               | 56537.56 | 12341.59 | 88298.27  | 86%      |
| Deso                                                                                 | 56303.88 | 10858.42 | 63730.33  | 86%      |
| Hyper Express                                                                        | 56101.11 | 16007.28 | 76580.21  | 86%      |
| Megalo                                                                               | 53913.48 | 10801.94 | 61062.47  | 82%      |
| Reno                                                                                 | 47110.70 | 5441.45  | 52021.20  | 72%      |
| http                                                                                 | 39168.99 | 9312.37  | 96077.72  | 60%      |
| Cheetah                                                                              | 37964.06 | 5845.90  | 41715.98  | 58%      |
| Peko                                                                                 | 35799.17 | 7544.39  | 51845.71  | 55%      |
| Node                                                                                 | 34754.63 | 5402.24  | 37548.85  | 53%      |
| Alosaur                                                                              | 32307.28 | 7046.26  | 38892.09  | 49%      |
| Fastify                                                                              | 29252.96 | 7435.80  | 33757.86  | 45%      |
| Router                                                                               | 27811.13 | 5184.42  | 38212.97  | 42%      |
| Little                                                                               | 24348.30 | 4308.74  | 29912.40  | 37%      |
| Aqua                                                                                 | 23726.36 | 3673.82  | 36489.90  | 36%      |
| Oak                                                                                  | 21657.79 | 4645.21  | 27333.73  | 33%      |
| Dinatra                                                                              | 18440.03 | 3818.43  | 37520.13  | 28%      |
| Abc                                                                                  | 14738.79 | 4002.11  | 21062.26  | 23%      |
| Acorn                                                                                | 11702.94 | 19602.54 | 116275.69 | 18%      |
| Opine                                                                                | 8990.80  | 10497.71 | 128858.01 | 14%      |
| Express (Deno)                                                                       | 8427.58  | 1704.45  | 10634.15  | 13%      |
| Express                                                                              | 6727.09  | 1410.25  | 11488.54  | 10%      |
| Servest                                                                              | 5541.98  | 1590.57  | 8305.44   | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-ebc824fe-ec2c-44ae-b355-8c9e873bc225) |          |          |           |          |

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
| 14738.79 | 4002.11 | 21062.26 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8824.31 | 10315.65 | 16234.31 | 17257.87 | 18897.03 | 19108.48 | 19645.64 |
| **Latency** | 2ms     | 2ms      | 2ms      | 3ms      | 5ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 11702.94 | 19602.54 | 116275.69 |     |

| **Stat**    | 10    | 25    | 50      | 75       | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60.74 | 78.85 | 4514.89 | 10370.66 | 53368.08 | 63630.82 | 70013.30 |
| **Latency** | 5ms   | 7ms   | 17ms    | 23ms     | 26ms     | 28ms     | 30ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 32307.28 | 7046.26 | 38892.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26808.98 | 30337.60 | 35223.24 | 36111.74 | 36714.63 | 37412.93 | 38266.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 23726.36 | 3673.82 | 36489.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21942.46 | 23154.35 | 24381.03 | 25531.10 | 26230.91 | 26952.30 | 27957.31 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 64298.11 | 10949.73 | 78755.15 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48216.14 | 52371.50 | 70135.77 | 73434.12 | 74912.77 | 75408.66 | 76971.03 |
| **Latency** | 482µs    | 590µs    | 741µs    | 815µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 37964.06 | 5845.90 | 41715.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36722.67 | 39154.08 | 39803.08 | 40232.80 | 40518.95 | 40698.82 | 41033.91 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65444.59 | 13453.69 | 97455.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 37435.72 | 67508.47 | 70819.51 | 72243.13 | 73122.86 | 73615.48 | 74207.82 |
| **Latency** | 556µs    | 644µs    | 723µs    | 767µs    | 826µs    | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56303.88 | 10858.42 | 63730.33 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36739.40 | 59055.27 | 60642.20 | 61521.90 | 62286.90 | 62613.52 | 63131.94 |
| **Latency** | 737µs    | 777µs    | 808µs    | 852µs    | 997µs    | 1ms      | 2ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18440.03 | 3818.43 | 37520.13 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15332.30 | 16567.40 | 20027.17 | 20514.79 | 21218.81 | 21984.04 | 23507.45 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6727.09  | 1410.25 | 11488.54 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4300.85 | 7026.87 | 7367.54 | 7474.35 | 7547.98 | 7573.90 | 7633.64 |
| **Latency** | 6ms     | 6ms     | 6ms     | 6ms     | 9ms     | 11ms    | 16ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8427.58  | 1704.45 | 10634.15 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 6501.65 | 8121.22 | 9181.48 | 9350.91 | 9433.83 | 9470.76 | 9818.39 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 59246.16 | 12075.39 | 66847.09 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34499.92 | 62689.93 | 64431.21 | 65134.78 | 65687.66 | 65941.83 | 66429.84 |
| **Latency** | 687µs    | 739µs    | 765µs    | 802µs    | 926µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29252.96 | 7435.80 | 33757.86 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13536.45 | 31425.02 | 32367.45 | 33113.45 | 33320.53 | 33441.94 | 33570.30 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56537.56 | 12341.59 | 88298.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28514.52 | 59668.12 | 62037.06 | 62790.05 | 63503.77 | 63851.04 | 64253.12 |
| **Latency** | 727µs    | 768µs    | 796µs    | 829µs    | 1ms      | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58851.31 | 12815.25 | 67515.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30762.35 | 62074.30 | 64526.33 | 65512.24 | 66250.14 | 66573.69 | 67069.29 |
| **Latency** | 684µs    | 727µs    | 761µs    | 814µs    | 941µs    | 1ms      | 2ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39168.99 | 9312.37 | 96077.72 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26291.46 | 36290.28 | 43614.31 | 44703.49 | 45594.18 | 45928.39 | 46632.61 |
| **Latency** | 880µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 56101.11 | 16007.28 | 76580.21 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33309.15 | 37502.79 | 62958.60 | 71002.18 | 72525.28 | 73098.16 | 74226.00 |
| **Latency** | 527µs    | 627µs    | 769µs    | 985µs    | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24348.30 | 4308.74 | 29912.40 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22181.39 | 23608.42 | 25506.35 | 26622.70 | 27025.91 | 27542.10 | 28802.64 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 53913.48 | 10801.94 | 61062.47 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32311.98 | 56956.11 | 58413.26 | 59024.79 | 59622.81 | 59985.93 | 60508.51 |
| **Latency** | 762µs    | 810µs    | 848µs    | 889µs    | 1ms      | 1ms      | 2ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 58382.64 | 13333.29 | 68023.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27203.63 | 62158.75 | 64423.41 | 65336.15 | 65896.64 | 66215.49 | 66907.33 |
| **Latency** | 694µs    | 738µs    | 765µs    | 802µs    | 950µs    | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34754.63 | 5402.24 | 37548.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34329.21 | 35507.84 | 36056.28 | 36820.07 | 37062.67 | 37187.43 | 37317.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21657.79 | 4645.21 | 27333.73 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18588.24 | 20849.47 | 23468.20 | 24058.29 | 24406.46 | 25125.94 | 26848.16 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Opine](#opine)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 8990.80  | 10497.71 | 128858.01 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 5205.72 | 6782.78 | 8353.36 | 10078.04 | 10748.39 | 12742.90 | 25780.92 |
| **Latency** | 4ms     | 4ms     | 5ms     | 6ms      | 9ms      | 11ms     | 24ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35799.17 | 7544.39 | 51845.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29520.28 | 33119.77 | 39133.15 | 40110.31 | 40649.47 | 41034.95 | 41978.29 |
| **Latency** | 964µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47110.70 | 5441.45 | 52021.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 45666.57 | 47726.60 | 48410.55 | 49170.33 | 49750.27 | 50036.55 | 50373.57 |
| **Latency** | 944µs    | 980µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27811.13 | 5184.42 | 38212.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24320.07 | 26350.71 | 29393.87 | 30492.51 | 31684.69 | 32209.51 | 32967.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5541.98  | 1590.57 | 8305.44 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4132.35 | 4631.53 | 6082.90 | 6605.87 | 6787.15 | 6992.55 | 7333.96 |
| **Latency** | 7ms     | 7ms     | 7ms     | 10ms    | 11ms    | 15ms    | 20ms    |

---

<p align="center">Generated 2023-05-20T01:35:06.396Z</p>
