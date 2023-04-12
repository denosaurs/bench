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
| Bun                                                                                  | 53049.32 | 9269.25  | 71058.92  | 100%     |
| Hyper Express                                                                        | 49054.94 | 14355.00 | 68444.25  | 92%      |
| Deno                                                                                 | 45627.12 | 12655.68 | 58104.44  | 86%      |
| NHttp                                                                                | 43550.36 | 10672.13 | 57033.89  | 82%      |
| Fastro                                                                               | 41737.74 | 14063.39 | 115148.89 | 79%      |
| Hono                                                                                 | 41379.23 | 14503.12 | 53356.04  | 78%      |
| Megalo                                                                               | 41201.57 | 10253.06 | 50287.54  | 78%      |
| Fast                                                                                 | 39257.73 | 13549.48 | 57228.16  | 74%      |
| http                                                                                 | 34881.61 | 7992.76  | 43281.75  | 66%      |
| Deso                                                                                 | 34191.80 | 7336.51  | 40613.67  | 64%      |
| Reno                                                                                 | 34054.21 | 9625.64  | 49451.88  | 64%      |
| Peko                                                                                 | 33808.38 | 6936.46  | 39722.93  | 64%      |
| Alosaur                                                                              | 30004.60 | 5864.11  | 38226.36  | 57%      |
| Node                                                                                 | 29110.91 | 5217.89  | 32849.82  | 55%      |
| Fastify                                                                              | 26190.27 | 5488.03  | 29750.77  | 49%      |
| Router                                                                               | 25567.62 | 4019.09  | 30331.49  | 48%      |
| Little                                                                               | 22651.46 | 3979.96  | 26687.42  | 43%      |
| Aqua                                                                                 | 20686.75 | 3310.50  | 25690.18  | 39%      |
| Oak                                                                                  | 19496.62 | 3374.94  | 22832.75  | 37%      |
| Dinatra                                                                              | 15527.83 | 3355.22  | 32178.14  | 29%      |
| Abc                                                                                  | 12361.01 | 3605.85  | 17927.68  | 23%      |
| Express (Deno)                                                                       | 8630.86  | 4638.72  | 66715.59  | 16%      |
| Opine                                                                                | 8021.70  | 1026.72  | 10887.03  | 15%      |
| Express                                                                              | 5441.02  | 1501.79  | 12072.69  | 10%      |
| Servest                                                                              | 4741.51  | 1295.13  | 6917.66   | 9%       |
| Acorn                                                                                | 3676.85  | 2679.04  | 54091.23  | 7%       |
| ![Chart](https://quickchart.io/chart/render/sf-959212fc-a998-4384-acac-e860cb856679) |          |          |           |          |

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
| 12361.01 | 3605.85 | 17927.68 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 7018.36 | 8313.77 | 14213.45 | 15322.78 | 15646.26 | 16052.60 | 17040.57 |
| **Latency** | 3ms     | 3ms     | 3ms      | 4ms      | 6ms      | 6ms      | 8ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 3676.85  | 2679.04 | 54091.23 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 1804.12 | 2300.75 | 2826.56 | 4243.85 | 7323.88 | 8409.45 | 10301.97 |
| **Latency** | 5ms     | 6ms     | 14ms    | 20ms    | 23ms    | 24ms    | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30004.60 | 5864.11 | 38226.36 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20311.51 | 30780.86 | 32506.72 | 33100.06 | 33508.09 | 33754.36 | 34366.12 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20686.75 | 3310.50 | 25690.18 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17805.10 | 18866.35 | 22219.66 | 22488.31 | 22717.96 | 22911.21 | 23696.36 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 53049.32 | 9269.25 | 71058.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42785.22 | 46211.84 | 50800.83 | 62841.87 | 64972.14 | 65892.17 | 67857.74 |
| **Latency** | 567µs    | 707µs    | 861µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 45627.12 | 12655.68 | 58104.44 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24400.16 | 39425.42 | 52066.27 | 53640.55 | 54326.73 | 54768.39 | 55810.93 |
| **Latency** | 720µs    | 801µs    | 999µs    | 1ms      | 1ms      | 1ms      | 4ms      |

### [Deso](#deso)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34191.80 | 7336.51 | 40613.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25841.00 | 31779.68 | 37758.25 | 38455.63 | 38942.19 | 39167.38 | 39746.65 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 15527.83 | 3355.22 | 32178.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10853.88 | 14428.09 | 16875.47 | 17351.83 | 18461.42 | 18941.42 | 19750.71 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      | 7ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5441.02  | 1501.79 | 12072.69 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3213.55 | 4537.42 | 6220.61 | 6357.77 | 6425.04 | 6463.58 | 7385.50 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 13ms    | 15ms    | 21ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8630.86  | 4638.72 | 66715.59 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 5826.27 | 8230.04 | 8664.04 | 8869.07 | 9057.87 | 9574.44 | 28604.07 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 8ms     | 8ms     | 15ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 39257.73 | 13549.48 | 57228.16 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17104.14 | 33308.55 | 43105.37 | 50803.75 | 51847.89 | 52313.20 | 53237.45 |
| **Latency** | 869µs    | 934µs    | 1ms      | 1ms      | 1ms      | 2ms      | 5ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26190.27 | 5488.03 | 29750.77 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23224.07 | 27110.52 | 28065.86 | 28490.22 | 28729.20 | 28878.74 | 29060.35 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 5ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev    | Max |
| -------- | -------- | --------- | --- |
| 41737.74 | 14063.39 | 115148.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 18292.69 | 43587.08 | 47477.23 | 48938.33 | 49724.68 | 50225.39 | 50964.86 |
| **Latency** | 930µs    | 981µs    | 1ms      | 1ms      | 1ms      | 1ms      | 8ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41379.23 | 14503.12 | 53356.04 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15425.86 | 38132.28 | 48823.85 | 50462.24 | 51204.14 | 51562.81 | 52018.02 |
| **Latency** | 889µs    | 946µs    | 1ms      | 1ms      | 1ms      | 1ms      | 8ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34881.61 | 7992.76 | 43281.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24133.22 | 34366.55 | 38713.80 | 39335.66 | 39765.47 | 40005.90 | 40388.31 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 49054.94 | 14355.00 | 68444.25 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30265.88 | 31805.61 | 52225.41 | 63525.19 | 65239.87 | 65945.27 | 66811.38 |
| **Latency** | 592µs    | 712µs    | 857µs    | 1ms      | 1ms      | 1ms      | 2ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22651.46 | 3979.96 | 26687.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 19343.92 | 21206.50 | 24169.51 | 24863.75 | 25560.24 | 25800.63 | 26143.60 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 4ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 41201.57 | 10253.06 | 50287.54 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23492.01 | 42189.30 | 45717.21 | 46824.62 | 47615.07 | 48103.81 | 48969.10 |
| **Latency** | 949µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 5ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 43550.36 | 10672.13 | 57033.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28234.04 | 37117.34 | 48920.38 | 51237.76 | 52161.71 | 52703.00 | 53739.55 |
| **Latency** | 856µs    | 923µs    | 993µs    | 1ms      | 1ms      | 1ms      | 5ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29110.91 | 5217.89 | 32849.82 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27313.29 | 29757.63 | 30477.01 | 31293.78 | 31661.64 | 31937.55 | 32360.41 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 19496.62 | 3374.94 | 22832.75 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16116.43 | 18804.82 | 20939.01 | 21159.49 | 21417.58 | 21840.93 | 22361.76 |
| **Latency** | 1ms      | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 5ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 8021.70  | 1026.72 | 10887.03 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 7009.09 | 7690.78 | 8306.62 | 8521.70 | 8695.78 | 8870.33 | 10136.26 |
| **Latency** | 5ms     | 5ms     | 6ms     | 6ms     | 7ms     | 7ms     | 10ms     |

### [Peko](#peko)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 33808.38 | 6936.46 | 39722.93 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25302.95 | 32896.74 | 37017.23 | 37562.68 | 38038.39 | 38296.13 | 38793.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 34054.21 | 9625.64 | 49451.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17017.81 | 34093.69 | 38621.89 | 39722.48 | 40418.33 | 40807.43 | 41706.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      | 5ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25567.62 | 4019.09 | 30331.49 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20699.19 | 25866.91 | 26962.84 | 27628.01 | 28031.46 | 28231.87 | 28588.90 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 4741.51  | 1295.13 | 6917.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2438.08 | 4966.84 | 5228.58 | 5408.29 | 5500.42 | 5613.51 | 6309.08 |
| **Latency** | 9ms     | 9ms     | 9ms     | 10ms    | 14ms    | 15ms    | 25ms    |

---

<p align="center">Generated 2023-04-12T01:41:07.546Z</p>
