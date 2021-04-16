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

## Table of Contents

- [Overview](#overview)
- [benchmark bare](#benchmark-bare)
  - [abc](#abc)
  - [alosaur](#alosaur)
  - [deno](#deno)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [node](#node)
  - [oak](#oak)
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)
  - [reno](#reno)

## Overview

| **Framework** | abc   | alosaur | deno   | dinatra | drash  | express | fastify  | node     | oak      | servest | mandarinets | aqua    | reno   |
| ------------- | ----- | ------- | ------ | ------- | ------ | ------- | -------- | -------- | -------- | ------- | ----------- | ------- | ------ |
| **Average**   | 7454  | 18585.2 | 25224  | 9859.4  | 16406  | 8326.1  | 20204.73 | 42147.64 | 21086.91 | 2991.8  | 4091.3      | 24340.8 | 8991.4 |
| **Total**     | 81988 | 185872  | 252263 | 98601   | 164046 | 83256   | 222248   | 463574   | 231971   | 29916   | 40912       | 243411  | 89903  |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5207   | 5207   | 7667   | 7951   | 7454   | 727.61  | 5204   | 81988   |
| **Bytes/Sec** | 484 kB | 484 kB | 713 kB | 740 kB | 693 kB | 67.7 kB | 484 kB | 7.62 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ---- | ---- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms | 4 ms | 8 ms  | 4.68 ms | 1.84 ms | 108 ms |

### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators

| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11431   | 11431   | 19439   | 19695   | 18585.2 | 2397.35 | 11429   | 185872  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.79 MB | 1.81 MB | 1.71 MB | 221 kB  | 1.05 MB | 17.1 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms | 1 ms | 4 ms  | 1.51 ms | 1.18 ms | 77 ms |

### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime

| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16943  | 16943  | 26255   | 26607   | 25224   | 2789.85 | 16943  | 252263  |
| **Bytes/Sec** | 864 kB | 864 kB | 1.34 MB | 1.36 MB | 1.29 MB | 142 kB  | 864 kB | 12.9 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms | 1 ms | 4 ms  | 1.16 ms | 0.83 ms | 42 ms |

### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7607   | 7607   | 10079  | 10623  | 9859.4 | 865     | 7607   | 98601   |
| **Bytes/Sec** | 396 kB | 396 kB | 524 kB | 552 kB | 513 kB | 44.9 kB | 396 kB | 5.13 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms | 3 ms | 7 ms  | 3.53 ms | 1.41 ms | 31 ms |

### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.

| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9431   | 9431   | 17263   | 17775   | 16406   | 2356.69 | 9427   | 164046  |
| **Bytes/Sec** | 811 kB | 811 kB | 1.48 MB | 1.53 MB | 1.41 MB | 203 kB  | 811 kB | 14.1 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms | 2 ms | 4 ms  | 2.11 ms | 1.08 ms | 36 ms |

### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 4047   | 4047   | 8783   | 10039   | 8326.1 | 1579.27 | 4046   | 83256 |
| **Bytes/Sec** | 874 kB | 874 kB | 1.9 MB | 2.17 MB | 1.8 MB | 341 kB  | 874 kB | 18 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms | 4 ms | 10 ms | 4.26 ms | 2.04 ms | 33 ms |

### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js

| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 11375   | 11375   | 21423   | 22815   | 20204.73 | 3123.93 | 11375   | 222248 |
| **Bytes/Sec** | 1.74 MB | 1.74 MB | 3.28 MB | 3.49 MB | 3.09 MB  | 478 kB  | 1.74 MB | 34 MB  |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms | 1 ms | 3 ms  | 1.36 ms | 1.01 ms | 25 ms |

### [node](https://nodejs.org)

> Node.js JavaScript runtime

| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 26703   | 26703   | 43839   | 44383   | 42147.64 | 4917.74 | 26691   | 463574  |
| **Bytes/Sec** | 2.99 MB | 2.99 MB | 4.91 MB | 4.97 MB | 4.72 MB  | 551 kB  | 2.99 MB | 51.9 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms | 0 ms | 1 ms  | 0.38 ms | 0.67 ms | 23 ms |

### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕

| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14295   | 14295   | 21919   | 22479   | 21086.91 | 2234.28 | 14289   | 231971  |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 2.04 MB | 2.09 MB | 1.96 MB  | 208 kB  | 1.33 MB | 21.6 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms | 1 ms | 3 ms  | 1.18 ms | 0.81 ms | 28 ms |

### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2339   | 2339   | 2969   | 3519   | 2991.8 | 390.36  | 2339   | 29916   |
| **Bytes/Sec** | 269 kB | 269 kB | 342 kB | 405 kB | 344 kB | 44.9 kB | 269 kB | 3.44 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms | 4 ms | 49 ms | 12.87 ms | 18.2 ms | 85 ms |

### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, decorator-driven, MVC framework for Deno.

| **Stat**      | 1%  | 2.5% | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | --- | ---- | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 0   | 0    | 4979    | 5491    | 4091.3  | 1820.71 | 1212   | 40912   |
| **Bytes/Sec** | 0 B | 0 B  | 1.41 MB | 1.56 MB | 1.16 MB | 517 kB  | 344 kB | 11.6 MB |

| **Stat**    | 2.5%    | 50%     | 95.5%   | Avg        | Stdev     | Max     |
| ----------- | ------- | ------- | ------- | ---------- | --------- | ------- |
| **Latency** | 1598 ms | 2425 ms | 2884 ms | 2392.88 ms | 264.26 ms | 3060 ms |

### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno

| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17967   | 17967   | 25023  | 25311   | 24340.8 | 2135.08 | 17963   | 243411  |
| **Bytes/Sec** | 1.65 MB | 1.65 MB | 2.3 MB | 2.33 MB | 2.24 MB | 196 kB  | 1.65 MB | 22.4 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms | 1 ms | 3 ms  | 1.14 ms | 0.73 ms | 51 ms |

### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard
> HTTP module

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5975   | 5975   | 9343   | 9423   | 8991.4 | 1008.31 | 5974   | 89903   |
| **Bytes/Sec** | 466 kB | 466 kB | 729 kB | 735 kB | 701 kB | 78.6 kB | 466 kB | 7.01 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev | Max   |
| ----------- | ---- | ---- | ----- | ------- | ----- | ----- |
| **Latency** | 3 ms | 3 ms | 10 ms | 3.68 ms | 2 ms  | 89 ms |

---

<p align="center">Generated 2021-04-13T00:43:59.014Z</p>
