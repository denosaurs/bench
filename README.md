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

| Framework                                                                            | Mean     | Stddev   | Max      | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | -------- | -------- |
| Deno                                                                                 | 44188.72 | 13460.21 | 68751.84 | 100%     |
| Fast                                                                                 | 39577.81 | 11632.98 | 58587.99 | 90%      |
| NHttp                                                                                | 38716.93 | 9917.71  | 53999.97 | 88%      |
| Megalo                                                                               | 38302.38 | 9565.79  | 54086.61 | 87%      |
| Deso                                                                                 | 38297.54 | 10958.55 | 55187.79 | 87%      |
| Hono                                                                                 | 36898.15 | 10953.38 | 56014.07 | 84%      |
| Fastro                                                                               | 36840.51 | 9932.67  | 56073.34 | 83%      |
| Hyper Express                                                                        | 36605.26 | 14240.42 | 65919.92 | 83%      |
| Bun                                                                                  | 35865.16 | 9412.27  | 58116.27 | 81%      |
| Reno                                                                                 | 31700.58 | 5589.93  | 39428.34 | 72%      |
| Cheetah                                                                              | 28813.34 | 5077.27  | 38473.48 | 65%      |
| http                                                                                 | 25096.05 | 6966.90  | 40646.79 | 57%      |
| Alosaur                                                                              | 21056.59 | 4804.01  | 34816.25 | 48%      |
| Peko                                                                                 | 20483.09 | 5263.24  | 30470.81 | 46%      |
| Node                                                                                 | 18455.29 | 3129.33  | 23300.64 | 42%      |
| Router                                                                               | 16963.16 | 3269.30  | 23423.02 | 38%      |
| Aqua                                                                                 | 15153.06 | 3213.13  | 22718.28 | 34%      |
| Fastify                                                                              | 14595.60 | 2937.02  | 20508.44 | 33%      |
| Little                                                                               | 14290.28 | 2987.84  | 31905.20 | 32%      |
| Oak                                                                                  | 12137.81 | 2642.23  | 18222.48 | 27%      |
| Dinatra                                                                              | 12003.87 | 2554.55  | 24528.95 | 27%      |
| Abc                                                                                  | 9318.25  | 1513.99  | 13276.58 | 21%      |
| Express (Deno)                                                                       | 5604.54  | 1233.37  | 9709.11  | 13%      |
| Opine                                                                                | 5526.18  | 1864.05  | 38995.90 | 13%      |
| Acorn                                                                                | 5342.74  | 8294.99  | 90191.66 | 12%      |
| Express                                                                              | 3849.25  | 932.19   | 9761.95  | 9%       |
| Servest                                                                              | 3523.31  | 1020.50  | 5984.45  | 8%       |
| ![Chart](https://quickchart.io/chart/render/sf-34c975ca-0dc6-406c-9a39-25c1b8355bd3) |          |          |          |          |

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
| 9318.25  | 1513.99 | 13276.58 |     |

| **Stat**    | 10      | 25      | 50      | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | ------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7335.95 | 8534.31 | 9714.67 | 10310.21 | 10839.27 | 11147.69 | 11731.66 |
| **Latency** | 3ms     | 4ms     | 4ms     | 6ms      | 8ms      | 8ms      | 11ms     |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5342.74  | 8294.99 | 90191.66 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90       | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | -------- | -------- | -------- |
| **Req/Sec** | 49.37 | 78.86 | 3910.83 | 7053.15 | 10945.54 | 13918.84 | 49586.78 |
| **Latency** | 8ms   | 9ms   | 19ms    | 26ms    | 31ms     | 33ms     | 39ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21056.59 | 4804.01 | 34816.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15639.14 | 19303.67 | 22210.66 | 24073.43 | 25432.25 | 26252.54 | 27965.95 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15153.06 | 3213.13 | 22718.28 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12011.17 | 14100.08 | 15800.24 | 17033.18 | 18001.97 | 18750.46 | 20460.55 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 4ms      | 8ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35865.16 | 9412.27 | 58116.27 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23001.02 | 29434.90 | 35908.82 | 43900.01 | 47699.28 | 49899.59 | 54136.27 |
| **Latency** | 742µs    | 945µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 28813.34 | 5077.27 | 38473.48 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22032.28 | 27554.83 | 30125.61 | 32040.30 | 33311.00 | 34066.43 | 35250.69 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 44188.72 | 13460.21 | 68751.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20488.72 | 36793.94 | 48519.90 | 53924.81 | 57966.38 | 59914.39 | 63394.80 |
| **Latency** | 704µs    | 807µs    | 950µs    | 1ms      | 1ms      | 2ms      | 3ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 38297.54 | 10958.55 | 55187.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18035.20 | 32465.28 | 42278.88 | 46132.33 | 49024.04 | 50584.52 | 53014.89 |
| **Latency** | 853µs    | 962µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12003.87 | 2554.55 | 24528.95 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9670.10 | 10847.77 | 12141.52 | 13562.22 | 14706.53 | 15346.89 | 16345.32 |
| **Latency** | 2ms     | 3ms      | 3ms      | 5ms      | 6ms      | 6ms      | 10ms     |

### [Express](#express)

| **Stat** | Mean   | Stddev  | Max |
| -------- | ------ | ------- | --- |
| 3849.25  | 932.19 | 9761.95 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2695.82 | 3324.71 | 4113.91 | 4453.90 | 4705.84 | 4840.96 | 5142.90 |
| **Latency** | 10ms    | 11ms    | 11ms    | 13ms    | 17ms    | 18ms    | 24ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 5604.54  | 1233.37 | 9709.11 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3951.55 | 5065.34 | 5882.67 | 6347.89 | 6813.06 | 6994.40 | 7516.06 |
| **Latency** | 6ms     | 7ms     | 8ms     | 9ms     | 11ms    | 13ms    | 18ms    |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39577.81 | 11632.98 | 58587.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18438.56 | 33294.61 | 43601.38 | 47973.75 | 50968.38 | 52829.60 | 55541.73 |
| **Latency** | 816µs    | 917µs    | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14595.60 | 2937.02 | 20508.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11733.81 | 14023.30 | 15370.73 | 16258.23 | 17056.65 | 17502.65 | 18301.78 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 8ms      |

### [Fastro](#fastro)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36840.51 | 9932.67 | 56073.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18282.85 | 32643.46 | 40236.26 | 43813.43 | 46298.22 | 47741.60 | 50123.12 |
| **Latency** | 910µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36898.15 | 10953.38 | 56014.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17480.96 | 31163.92 | 40665.92 | 44633.97 | 47727.23 | 49340.18 | 52606.27 |
| **Latency** | 884µs    | 990µs    | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25096.05 | 6966.90 | 40646.79 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 14381.13 | 22410.41 | 27510.76 | 29763.14 | 31224.08 | 31988.61 | 33699.99 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 6ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 36605.26 | 14240.42 | 65919.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16280.91 | 23821.24 | 39407.56 | 49149.21 | 53836.58 | 56097.53 | 60592.03 |
| **Latency** | 670µs    | 828µs    | 1ms      | 1ms      | 2ms      | 3ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 14290.28 | 2987.84 | 31905.20 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 11320.67 | 13231.03 | 14801.11 | 16056.74 | 17009.72 | 17588.35 | 19325.00 |
| **Latency** | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 5ms      | 7ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38302.38 | 9565.79 | 54086.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20616.93 | 35602.58 | 41311.54 | 44416.93 | 47228.04 | 48707.86 | 51060.32 |
| **Latency** | 897µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [NHttp](#nhttp)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 38716.93 | 9917.71 | 53999.97 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18863.41 | 36537.65 | 42072.00 | 45243.03 | 47425.80 | 48612.21 | 50850.92 |
| **Latency** | 907µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18455.29 | 3129.33 | 23300.64 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15727.39 | 17974.68 | 19209.82 | 20098.51 | 20933.73 | 21407.92 | 21869.51 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      | 6ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 12137.81 | 2642.23 | 18222.48 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 8554.42 | 11404.92 | 12796.41 | 13639.29 | 14333.35 | 14986.75 | 16545.70 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 5ms      | 6ms      | 9ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5526.18  | 1864.05 | 38995.90 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 3920.17 | 5054.34 | 5684.41 | 6164.19 | 6564.34 | 7325.72 | 10409.09 |
| **Latency** | 7ms     | 8ms     | 9ms     | 10ms    | 11ms    | 12ms    | 18ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20483.09 | 5263.24 | 30470.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13402.56 | 18510.95 | 21901.12 | 24060.38 | 25377.92 | 26029.96 | 27890.40 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      | 4ms      | 7ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31700.58 | 5589.93 | 39428.34 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25364.14 | 30441.74 | 33213.00 | 34948.62 | 36459.01 | 37226.48 | 38716.81 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 16963.16 | 3269.30 | 23423.02 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13505.55 | 15922.94 | 17759.40 | 18824.58 | 19837.36 | 20448.20 | 21830.71 |
| **Latency** | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 4ms      | 6ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 3523.31  | 1020.50 | 5984.45 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2203.59 | 3132.58 | 3805.14 | 4160.24 | 4519.26 | 4701.51 | 5088.32 |
| **Latency** | 8ms     | 10ms    | 13ms    | 17ms    | 21ms    | 24ms    | 31ms    |

---

<p align="center">Generated 2023-06-12T02:01:43.978Z</p>
