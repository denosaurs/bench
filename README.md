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
  - [Alosaur](#alosaur)
  - [Aqua](#aqua)
  - [Bun](#bun)
  - [Deno](#deno)
  - [Dinatra](#dinatra)
  - [Drash](#drash)
  - [Express](#express)
  - [Fast](#fast)
  - [Fastify](#fastify)
  - [Hono](#hono)
  - [http](#http)
  - [Little](#little)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
  - [Reno](#reno)
  - [Router](#router)
  - [tinyhttp](#tinyhttp)
  - [Servest](#servest)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Deno](#deno-1)
    - [Dinatra](#dinatra-1)
    - [Drash](#drash-1)
    - [Express](#express-1)
    - [Fast](#fast-1)
    - [Fastify](#fastify-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Little](#little-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [tinyhttp](#tinyhttp-1)
    - [Servest](#servest-1)

# Overview

## Hello, bench!

| Framework | Average   | Stddev  | Max       |
| --------- | --------- | ------- | --------- |
| Bun       | 136007.78 | 4843.99 | 148244.74 |
| Deno      | 63330.84  | 3259.47 | 67403.34  |
| Fast      | 60636.25  | 3135.76 | 64298.14  |
| http      | 58498.93  | 3101.10 | 62280.38  |
| Hono      | 55631.57  | 3362.35 | 60280.89  |
| Alosaur   | 48095.89  | 4507.74 | 53344.43  |
| Reno      | 42998.78  | 2429.49 | 45884.39  |
| Router    | 40128.66  | 2068.96 | 43081.77  |
| Oak       | 36343.66  | 2750.00 | 39038.72  |
| Aqua      | 32120.31  | 2155.60 | 34830.87  |
| Node      | 30320.11  | 3544.53 | 36455.27  |
| Fastify   | 24448.57  | 2607.00 | 27948.30  |
| Abc       | 16476.62  | 1378.81 | 18084.88  |
| Drash     | 16432.44  | 1408.30 | 18337.97  |
| Opine     | 13589.22  | 1116.04 | 14910.56  |
| Little    | 12042.92  | 840.60  | 12925.92  |
| Dinatra   | 10211.54  | 1061.98 | 11411.66  |
| Express   | 7445.65   | 711.71  | 8035.96   |
| tinyhttp  | 2586.10   | 967.76  | 3623.00   |
| Servest   | 2277.30   | 915.63  | 5222.27   |

# Frameworks

## [Abc](https://deno.land/x/abc)

A better Deno framework to create web application

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

## [Drash](https://deno.land/x/drash)

A REST microframework for Deno's HTTP server with zero dependencies.

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

## [tinyhttp](https://deno.land/x/tinyhttp)

🦕 Deno port of tinyhttp, 0-legacy, tiny & fast web framework

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16476.62 | 1378.81 | 18084.88 | 16802.04 | 17133.93 | 17520.92 | 17702.50 | 17967.80 |
| **Latency** | 2ms      | 463µs   | 60ms     | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 1.53 MB | 1.02 MB | 2.55 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 164773 | 0   | 0   | 0   | 0      | 164773 |

### [Alosaur](#alosaur)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48095.89 | 4507.74 | 53344.43 | 49121.59 | 51382.75 | 52166.89 | 52463.78 | 52897.98 |
| **Latency** | 829µs    | 171µs   | 14ms     | 791µs    | 844µs    | 953µs    | 1ms      | 1ms      |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 5.39 MB | 2.98 MB | 8.37 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 480791 | 0   | 0   | 0   | 0      | 480791 |

### [Aqua](#aqua)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 32120.31 | 2155.60 | 34830.87 | 32420.88 | 33304.23 | 34001.29 | 34265.03 | 34521.17 |
| **Latency** | 1ms      | 197µs   | 28ms     | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 4.88 MB | 1.99 MB | 6.87 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 321093 | 0   | 0   | 0   | 0      | 321093 |

### [Bun](#bun)

| **Stat**    | Average   | Stddev  | Max       | 50%       | 75%       | 90%       | 95%       | 99%       |
| ----------- | --------- | ------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Req/Sec** | 136007.78 | 4843.99 | 148244.74 | 136270.92 | 138370.51 | 140741.63 | 141763.82 | 143987.28 |
| **Latency** | 292µs     | 31µs    | 5ms       | 268µs     | 340µs     | 441µs     | 490µs     | 578µs     |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 12.5 MB | 8.43 MB | 20.9 MB |

| **Stat**     | 1xx | 2xx     | 3xx | 4xx | 5xx | Others | Total   |
| ------------ | --- | ------- | --- | --- | --- | ------ | ------- |
| **Requests** | 0   | 1359988 | 0   | 0   | 0   | 0      | 1359988 |

### [Deno](#deno)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63330.84 | 3259.47 | 67403.34 | 64070.67 | 65293.19 | 65975.29 | 66273.37 | 66921.14 |
| **Latency** | 629µs    | 101µs   | 14ms     | 619µs    | 662µs    | 712µs    | 774µs    | 1ms      |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 9.63 MB | 3.93 MB | 13.6 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 633262 | 0   | 0   | 0   | 0      | 633262 |

### [Dinatra](#dinatra)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10211.54 | 1061.98 | 11411.66 | 10594.76 | 10727.36 | 10790.89 | 10823.80 | 10876.37 |
| **Latency** | 3ms      | 939µs   | 37ms     | 3ms      | 3ms      | 4ms      | 5ms      | 5ms      |

| **Stat**      | Read   | Written | Total   |
| ------------- | ------ | ------- | ------- |
| **Bytes/Sec** | 531 kB | 633 kB  | 1.16 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 102096 | 0   | 0   | 0   | 0      | 102096 |

### [Drash](#drash)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16432.44 | 1408.30 | 18337.97 | 16668.18 | 17125.01 | 17532.59 | 17762.79 | 17997.19 |
| **Latency** | 2ms      | 488µs   | 63ms     | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 1.53 MB | 1.02 MB | 2.55 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 164347 | 0   | 0   | 0   | 0      | 164347 |

### [Express](#express)

| **Stat**    | Average | Stddev | Max     | 50%     | 75%     | 90%     | 95%     | 99%     |
| ----------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 7445.65 | 711.71 | 8035.96 | 7687.16 | 7872.77 | 7949.25 | 7973.46 | 8016.45 |
| **Latency** | 5ms     | 681µs  | 25ms    | 5ms     | 5ms     | 6ms     | 7ms     | 9ms     |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 1.79 MB | 462 kB  | 2.25 MB |

| **Stat**     | 1xx | 2xx   | 3xx | 4xx | 5xx | Others | Total |
| ------------ | --- | ----- | --- | --- | --- | ------ | ----- |
| **Requests** | 0   | 74489 | 0   | 0   | 0   | 0      | 74489 |

### [Fast](#fast)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 60636.25 | 3135.76 | 64298.14 | 61334.73 | 62400.11 | 62993.63 | 63234.70 | 63747.13 |
| **Latency** | 657µs    | 107µs   | 15ms     | 646µs    | 687µs    | 738µs    | 800µs    | 1ms      |

| **Stat**      | Read    | Written | Total |
| ------------- | ------- | ------- | ----- |
| **Bytes/Sec** | 9.22 MB | 3.76 MB | 13 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 606362 | 0   | 0   | 0   | 0      | 606362 |

### [Fastify](#fastify)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24448.57 | 2607.00 | 27948.30 | 24937.09 | 25448.22 | 25943.03 | 26267.30 | 26788.85 |
| **Latency** | 1ms      | 224µs   | 13ms     | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 4.35 MB | 1.52 MB | 5.87 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 244395 | 0   | 0   | 0   | 0      | 244395 |

### [Hono](#hono)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55631.57 | 3362.35 | 60280.89 | 55953.64 | 57652.96 | 58210.52 | 58434.48 | 59365.55 |
| **Latency** | 717µs    | 127µs   | 17ms     | 703µs    | 745µs    | 799µs    | 868µs    | 1ms      |

| **Stat**      | Read    | Written | Total |
| ------------- | ------- | ------- | ----- |
| **Bytes/Sec** | 8.51 MB | 3.45 MB | 12 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 556302 | 0   | 0   | 0   | 0      | 556302 |

### [http](#http)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58498.93 | 3101.10 | 62280.38 | 59361.01 | 60292.07 | 60890.49 | 61150.65 | 61495.59 |
| **Latency** | 681µs    | 111µs   | 14ms     | 671µs    | 712µs    | 762µs    | 824µs    | 1ms      |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 9.71 MB | 3.63 MB | 13.3 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 584905 | 0   | 0   | 0   | 0      | 584905 |

### [Little](#little)

| **Stat**    | Average  | Stddev | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------ | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 12042.92 | 840.60 | 12925.92 | 12293.01 | 12451.45 | 12509.07 | 12534.53 | 12582.40 |
| **Latency** | 3ms      | 256µs  | 17ms     | 3ms      | 3ms      | 3ms      | 3ms      | 4ms      |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 1.83 MB | 747 kB  | 2.58 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 120414 | 0   | 0   | 0   | 0      | 120414 |

### [Node](#node)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 30320.11 | 3544.53 | 36455.27 | 30625.90 | 32000.08 | 33323.42 | 33855.76 | 35350.31 |
| **Latency** | 1ms      | 203µs   | 16ms     | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

| **Stat**      | Read    | Written | Total |
| ------------- | ------- | ------- | ----- |
| **Bytes/Sec** | 4.12 MB | 1.88 MB | 6 MB  |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 303174 | 0   | 0   | 0   | 0      | 303174 |

### [Oak](#oak)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 36343.66 | 2750.00 | 39038.72 | 36807.90 | 37760.15 | 38220.72 | 38427.12 | 38747.10 |
| **Latency** | 1ms      | 197µs   | 28ms     | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 5.56 MB | 2.25 MB | 7.81 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 363419 | 0   | 0   | 0   | 0      | 363419 |

### [Opine](#opine)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 13589.22 | 1116.04 | 14910.56 | 13753.92 | 14129.02 | 14358.48 | 14417.88 | 14698.77 |
| **Latency** | 2ms      | 533µs   | 55ms     | 2ms      | 3ms      | 3ms      | 3ms      | 4ms      |

| **Stat**      | Read    | Written | Total   |
| ------------- | ------- | ------- | ------- |
| **Bytes/Sec** | 2.91 MB | 842 kB  | 3.75 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 135893 | 0   | 0   | 0   | 0      | 135893 |

### [Reno](#reno)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42998.78 | 2429.49 | 45884.39 | 43569.48 | 44269.43 | 44774.96 | 44946.57 | 45223.31 |
| **Latency** | 928µs    | 142µs   | 21ms     | 913µs    | 951µs    | 998µs    | 1ms      | 1ms      |

| **Stat**      | Read    | Written | Total  |
| ------------- | ------- | ------- | ------ |
| **Bytes/Sec** | 6.54 MB | 2.67 MB | 9.2 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 429935 | 0   | 0   | 0   | 0      | 429935 |

### [Router](#router)

| **Stat**    | Average  | Stddev  | Max      | 50%      | 75%      | 90%      | 95%      | 99%      |
| ----------- | -------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40128.66 | 2068.96 | 43081.77 | 40376.93 | 41235.52 | 41801.45 | 42101.27 | 42581.64 |
| **Latency** | 994µs    | 142µs   | 20ms     | 976µs    | 1ms      | 1ms      | 1ms      | 1ms      |

| **Stat**      | Read   | Written | Total   |
| ------------- | ------ | ------- | ------- |
| **Bytes/Sec** | 6.1 MB | 2.49 MB | 8.59 MB |

| **Stat**     | 1xx | 2xx    | 3xx | 4xx | 5xx | Others | Total  |
| ------------ | --- | ------ | --- | --- | --- | ------ | ------ |
| **Requests** | 0   | 401248 | 0   | 0   | 0   | 0      | 401248 |

### [tinyhttp](#tinyhttp)

| **Stat**    | Average | Stddev | Max     | 50%     | 75%     | 90%     | 95%     | 99%     |
| ----------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2586.10 | 967.76 | 3623.00 | 2769.00 | 3095.00 | 3515.00 | 3623.00 | 3623.00 |
| **Latency** | 4ms     | 7ms    | 60ms    | 1ms     | 2ms     | 2ms     | 48ms    | 49ms    |

| **Stat**      | Read   | Written | Total  |
| ------------- | ------ | ------- | ------ |
| **Bytes/Sec** | 296 kB | 0 B     | 296 kB |

| **Stat**     | 1xx | 2xx   | 3xx | 4xx | 5xx | Others | Total |
| ------------ | --- | ----- | --- | --- | --- | ------ | ----- |
| **Requests** | 0   | 25859 | 0   | 0   | 0   | 0      | 25859 |

### [Servest](#servest)

| **Stat**    | Average | Stddev | Max     | 50%     | 75%     | 90%     | 95%     | 99%     |
| ----------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 2277.30 | 915.63 | 5222.27 | 2092.83 | 2913.25 | 3708.17 | 3933.50 | 4453.54 |
| **Latency** | 17ms    | 6ms    | 78ms    | 17ms    | 20ms    | 28ms    | 31ms    | 35ms    |

| **Stat**      | Read   | Written | Total  |
| ------------- | ------ | ------- | ------ |
| **Bytes/Sec** | 357 kB | 141 kB  | 498 kB |

| **Stat**     | 1xx | 2xx   | 3xx | 4xx | 5xx | Others | Total |
| ------------ | --- | ----- | --- | --- | --- | ------ | ----- |
| **Requests** | 0   | 22795 | 0   | 0   | 0   | 0      | 22795 |

---

<p align="center">Generated 2022-07-10T16:26:40.070Z</p>
