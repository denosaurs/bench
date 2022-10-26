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

| Framework                                                                            | Mean     | Stddev  | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | ------- | --------- | -------- |
| Bun                                                                                  | 75339.86 | 3054.00 | 88424.39  | 100%     |
| Deno                                                                                 | 63830.41 | 6971.74 | 71101.94  | 85%      |
| Fast                                                                                 | 62633.31 | 5908.34 | 66922.65  | 83%      |
| Hono                                                                                 | 61018.67 | 4682.03 | 64244.39  | 81%      |
| Megalo                                                                               | 60039.73 | 4339.28 | 63699.37  | 80%      |
| Reno                                                                                 | 48510.53 | 3875.66 | 51571.53  | 64%      |
| http                                                                                 | 45546.64 | 7730.23 | 51924.11  | 60%      |
| Node                                                                                 | 42921.60 | 6383.12 | 45811.88  | 57%      |
| Alosaur                                                                              | 36164.51 | 7127.40 | 42109.59  | 48%      |
| Fastify                                                                              | 36015.59 | 7675.58 | 40327.80  | 48%      |
| Router                                                                               | 31845.01 | 3794.84 | 35301.53  | 42%      |
| Little                                                                               | 30211.22 | 4128.10 | 35060.90  | 40%      |
| Oak                                                                                  | 26260.69 | 4008.98 | 31054.56  | 35%      |
| Aqua                                                                                 | 24414.54 | 2798.99 | 29369.45  | 32%      |
| Dinatra                                                                              | 20044.42 | 3338.58 | 23815.80  | 27%      |
| Abc                                                                                  | 14166.62 | 4312.24 | 21241.80  | 19%      |
| Opine                                                                                | 10408.54 | 1399.40 | 14704.84  | 14%      |
| Express                                                                              | 7833.92  | 1401.02 | 10477.83  | 10%      |
| Servest                                                                              | 6270.49  | 1769.76 | 11231.49  | 8%       |
| Acorn                                                                                | 4675.34  | 6333.07 | 149253.73 | 6%       |
| ![Chart](https://quickchart.io/chart/render/sf-2f8633e2-f2fa-42c5-9f4e-5ba4b95a5a6d) |          |         |           |          |

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
| 14166.62 | 4312.24 | 21241.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10310.31 | 10491.96 | 15417.18 | 18214.56 | 19483.57 | 20548.23 | 20928.63 |
| **Latency** | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      | 4ms      | 7ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4675.34  | 6333.07 | 149253.73 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95       | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 2128.89 | 2783.90 | 3356.08 | 4930.30 | 9136.38 | 11975.92 | 14322.60 |
| **Latency** | 3ms     | 4ms     | 11ms    | 16ms    | 20ms    | 22ms     | 25ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36164.51 | 7127.40 | 42109.59 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26808.30 | 37080.33 | 39334.73 | 39747.40 | 40062.28 | 40386.54 | 41019.54 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 4ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 24414.54 | 2798.99 | 29369.45 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22308.00 | 23488.56 | 25493.90 | 25799.92 | 26435.91 | 26920.92 | 27421.16 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 75339.86 | 3054.00 | 88424.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 72417.71 | 74238.74 | 75339.92 | 76308.38 | 77654.58 | 79839.90 | 86500.19 |
| **Latency** | 459µs    | 528µs    | 706µs    | 738µs    | 757µs    | 777µs    | 1ms      |

### [Deno](#deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 63830.41 | 6971.74 | 71101.94 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 61227.56 | 64228.27 | 65783.46 | 66519.28 | 67202.27 | 67632.47 | 68305.47 |
| **Latency** | 557µs    | 635µs    | 807µs    | 851µs    | 892µs    | 965µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 20044.42 | 3338.58 | 23815.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16340.76 | 16937.67 | 21656.20 | 21874.18 | 22611.93 | 23054.64 | 23530.36 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 2ms      | 4ms      | 4ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7833.92  | 1401.02 | 10477.83 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5656.96 | 7814.06 | 8515.57 | 8658.69 | 8726.86 | 8748.98 | 8785.91 |
| **Latency** | 5ms     | 5ms     | 5ms     | 5ms     | 8ms     | 9ms     | 13ms    |

### [Fast](#fast)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 62633.31 | 5908.34 | 66922.65 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58964.73 | 62377.32 | 64232.73 | 65038.34 | 65571.43 | 65827.01 | 66319.35 |
| **Latency** | 647µs    | 717µs    | 768µs    | 854µs    | 893µs    | 922µs    | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 36015.59 | 7675.58 | 40327.80 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27743.38 | 37870.79 | 38574.04 | 39108.19 | 39474.58 | 39614.64 | 39854.18 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Hono](#hono)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 61018.67 | 4682.03 | 64244.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58711.71 | 60715.15 | 61887.91 | 62807.24 | 63235.93 | 63503.15 | 63893.88 |
| **Latency** | 714µs    | 750µs    | 798µs    | 855µs    | 886µs    | 907µs    | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 45546.64 | 7730.23 | 51924.11 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 34422.01 | 47071.00 | 48902.91 | 49399.76 | 49756.62 | 49960.70 | 50256.27 |
| **Latency** | 897µs    | 943µs    | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 30211.22 | 4128.10 | 35060.90 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27441.43 | 28893.37 | 31804.44 | 32341.06 | 32915.36 | 33218.14 | 33596.78 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 60039.73 | 4339.28 | 63699.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 58551.50 | 59846.00 | 60817.96 | 61528.28 | 62037.07 | 62363.33 | 62865.35 |
| **Latency** | 731µs    | 773µs    | 815µs    | 866µs    | 917µs    | 960µs    | 1ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 42921.60 | 6383.12 | 45811.88 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 42845.40 | 43719.66 | 44301.76 | 45009.36 | 45278.77 | 45407.25 | 45589.34 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26260.69 | 4008.98 | 31054.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 22711.80 | 25134.67 | 27614.90 | 28331.19 | 29147.57 | 29380.22 | 29734.72 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 2ms      | 3ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 10408.54 | 1399.40 | 14704.84 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9282.67 | 10190.38 | 10844.36 | 10920.77 | 11009.39 | 11564.08 | 12709.78 |
| **Latency** | 3ms     | 3ms      | 4ms      | 5ms      | 5ms      | 6ms      | 8ms      |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 48510.53 | 3875.66 | 51571.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47857.90 | 48493.71 | 49112.25 | 49728.32 | 50207.51 | 50548.00 | 51059.09 |
| **Latency** | 935µs    | 979µs    | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31845.01 | 3794.84 | 35301.53 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27959.85 | 31578.50 | 33221.24 | 33808.44 | 34504.13 | 34695.23 | 34958.89 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 6270.49  | 1769.76 | 11231.49 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 4101.19 | 6140.52 | 6820.80 | 7234.50 | 7520.86 | 7833.68 | 9319.66 |
| **Latency** | 6ms     | 6ms     | 7ms     | 8ms     | 10ms    | 12ms    | 17ms    |

---

<p align="center">Generated 2022-10-26T02:34:28.975Z</p>
