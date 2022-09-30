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
  - [Fast](#fast)
  - [Fastify](#fastify)
  - [Hono](#hono)
  - [http](#http)
  - [Little](#little)
  - [Megalo](#megalo)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
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
    - [Fast](#fast-1)
    - [Fastify](#fastify-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Little](#little-1)
    - [Megalo](#megalo-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Bun                                                                                  | 75303.98 | 4545.52  | 183039.55 | 100%     |
| Deno                                                                                 | 64428.72 | 4220.08  | 72884.70  | 86%      |
| Fast                                                                                 | 63835.57 | 5533.24  | 68064.53  | 85%      |
| Megalo                                                                               | 58944.88 | 5032.79  | 62430.85  | 78%      |
| Hono                                                                                 | 58450.36 | 5406.12  | 63333.89  | 78%      |
| Reno                                                                                 | 47525.34 | 4286.81  | 51186.61  | 63%      |
| http                                                                                 | 45564.42 | 8371.10  | 52624.45  | 61%      |
| Node                                                                                 | 42411.28 | 6581.55  | 46140.11  | 56%      |
| Alosaur                                                                              | 35069.90 | 8215.34  | 42807.29  | 47%      |
| Fastify                                                                              | 33391.19 | 10548.36 | 41083.84  | 44%      |
| Router                                                                               | 31857.43 | 4024.68  | 35398.98  | 42%      |
| Little                                                                               | 29826.51 | 4380.23  | 33569.87  | 40%      |
| Oak                                                                                  | 26589.37 | 4289.97  | 31793.81  | 35%      |
| Aqua                                                                                 | 24237.57 | 3427.57  | 28146.17  | 32%      |
| Dinatra                                                                              | 18749.88 | 3200.85  | 23272.11  | 25%      |
| Abc                                                                                  | 14441.48 | 3920.37  | 20345.09  | 19%      |
| Opine                                                                                | 10271.61 | 1473.45  | 14415.50  | 14%      |
| Express                                                                              | 7884.66  | 1540.90  | 9234.08   | 10%      |
| Servest                                                                              | 5874.84  | 1700.55  | 10268.85  | 8%       |
| Acorn                                                                                | 4435.13  | 4619.75  | 69588.53  | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-406570f3-bc08-480f-a179-01edd4b20f61) |          |          |           |          |

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

## [Fast](https://deno.land/x/fast)

Small web framework with near-native performance.

## [Fastify](https://www.fastify.io/)

Fast and low overhead web framework, for Node.js

## [Hono](https://github.com/honojs/hono)

Ultrafast web framework for Cloudflare Workers and Deno. Fast, but not only
fast.

## [http](https://deno.land/std/http)

The deno standard library http server

## [Little](https://deno.land/x/little)

A minimalistic connect-like web framework. Automatically works out of the box
with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.

## [Megalo](https://github.com/tsar-boomba/megalo)

Deno HTTP server framework focused on speed

## [Node](https://nodejs.org/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## [Oak](https://deno.land/x/oak)

A middleware framework for Deno's native HTTP server, Deno Deploy and Node.js
16.5 and later. It also includes a middleware router.

## [Opine](https://deno.land/x/opine)

Fast, minimalist web framework for Deno ported from ExpressJS.

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
| 14441.48 | 3920.37 | 20345.09 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9936.67 | 10164.14 | 15431.04 | 17715.00 | 19473.61 | 19653.42 | 19868.77 |
| **Latency** | 2ms     | 2ms      | 2ms      | 4ms      | 4ms      | 5ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 4435.13  | 4619.75 | 69588.53 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 1929.25 | 2645.45 | 3306.61 | 4868.90 | 9398.72 | 11613.32 | 13777.39 |
| **Latency** | 3ms     | 4ms     | 11ms    | 17ms    | 21ms    | 23ms     | 26ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35069.90 | 8215.34 | 42807.29 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23176.99 | 32802.32 | 39096.10 | 39945.75 | 40522.16 | 40767.96 | 41335.52 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24237.57 | 3427.57 | 28146.17 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 21465.07 | 22684.65 | 25700.88 | 26155.38 | 26424.78 | 26715.55 | 27395.62 |
| **Latency** | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 75303.98 | 4545.52 | 183039.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 71340.58 | 74616.20 | 75782.39 | 76911.58 | 77879.64 | 78320.14 | 80947.12 |
| **Latency** | 441µs    | 533µs    | 707µs    | 736µs    | 767µs    | 794µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 64428.72 | 4220.08 | 72884.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60629.64 | 63528.51 | 65541.22 | 66549.31 | 67223.11 | 67723.63 | 68725.00 |
| **Latency** | 572µs    | 644µs    | 794µs    | 853µs    | 894µs    | 938µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18749.88 | 3200.85 | 23272.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15335.87 | 15948.29 | 20322.53 | 20659.89 | 20892.97 | 21023.20 | 21313.28 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev  | Max |
| -------- | ------- | ------- | --- |
| 7884.66  | 1540.90 | 9234.08 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5598.52 | 7951.93 | 8604.48 | 8745.83 | 8851.34 | 8958.86 | 9101.73 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 14ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63835.57 | 5533.24 | 68064.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60114.61 | 63784.84 | 65210.45 | 66011.92 | 66635.35 | 67048.28 | 67648.10 |
| **Latency** | 663µs    | 707µs    | 751µs    | 836µs    | 882µs    | 923µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 33391.19 | 10548.36 | 41083.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 15340.82 | 34117.38 | 38902.75 | 39867.80 | 40202.49 | 40320.18 | 40575.04 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58450.36 | 5406.12 | 63333.89 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55754.52 | 57957.25 | 59720.90 | 60619.93 | 61209.66 | 61514.01 | 62224.73 |
| **Latency** | 748µs    | 789µs    | 826µs    | 875µs    | 931µs    | 978µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45564.42 | 8371.10 | 52624.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 33057.10 | 47208.01 | 49250.58 | 49935.07 | 50341.30 | 50559.61 | 50983.44 |
| **Latency** | 878µs    | 935µs    | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29826.51 | 4380.23 | 33569.87 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26450.51 | 28002.78 | 31907.32 | 32317.10 | 32630.10 | 32876.24 | 33299.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 58944.88 | 5032.79 | 62430.85 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58009.24 | 59025.35 | 59820.69 | 60467.74 | 60901.19 | 61202.78 | 61754.56 |
| **Latency** | 735µs    | 776µs    | 827µs    | 883µs    | 957µs    | 1ms      | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42411.28 | 6581.55 | 46140.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42026.86 | 43280.47 | 43870.15 | 44634.33 | 44938.16 | 45107.18 | 45366.65 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26589.37 | 4289.97 | 31793.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23047.01 | 25963.63 | 28329.20 | 28703.98 | 29065.51 | 29366.53 | 29749.50 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10271.61 | 1473.45 | 14415.50 |     |

| **Stat**    | 10      | 25      | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | ------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9103.36 | 9750.90 | 10774.44 | 10888.03 | 11001.08 | 11669.57 | 12685.36 |
| **Latency** | 3ms     | 3ms     | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 47525.34 | 4286.81 | 51186.61 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 46501.84 | 47422.75 | 48227.95 | 49100.47 | 49748.71 | 50050.94 | 50518.05 |
| **Latency** | 948µs    | 993µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31857.43 | 4024.68 | 35398.98 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27573.05 | 31416.44 | 33641.53 | 33961.39 | 34261.22 | 34621.79 | 35028.19 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 5874.84  | 1700.55 | 10268.85 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 3453.88 | 5741.39 | 6404.48 | 6876.46 | 7286.48 | 7398.60 | 8269.31 |
| **Latency** | 7ms     | 7ms     | 7ms     | 8ms     | 11ms    | 13ms    | 18ms    |

---

<p align="center">Generated 2022-09-30T11:40:07.827Z</p>
