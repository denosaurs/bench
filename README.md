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

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | servest | mandarinets | aqua | reno |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 6977.7 | 21342.91 | 18721.2 | 8166.19 | 18266 | 8915.21 | 34218.4 | 23028.4 | 18610.55 | 2746.55 | 5510.3 | 23875.2 | 6815.2 |
| **Total** | 69770 | 234755 | 187212 | 89811 | 182649 | 89146 | 342173 | 230272 | 204706 | 30207 | 55096 | 238730 | 68147 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3811   | 3811   | 7531   | 7791   | 6977.7 | 1163.58 | 3811   | 69770   |
| **Bytes/Sec** | 355 kB | 355 kB | 700 kB | 725 kB | 649 kB | 108 kB  | 354 kB | 6.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 5.2 ms | 2.94 ms | 129 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14087  | 14087  | 22047   | 23023   | 21342.91 | 2391.22 | 14086  | 234755  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 2.03 MB | 2.12 MB | 1.96 MB  | 220 kB  | 1.3 MB | 21.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.27 ms | 0.98 ms | 48 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12167  | 12167  | 18975  | 20911   | 18721.2 | 2425.37 | 12163  | 187212  |
| **Bytes/Sec** | 621 kB | 621 kB | 968 kB | 1.07 MB | 955 kB  | 124 kB  | 620 kB | 9.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.6 ms | 1.15 ms | 56 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5559   | 5559   | 8367   | 8791   | 8166.19 | 847.76  | 5556   | 89811   |
| **Bytes/Sec** | 289 kB | 289 kB | 435 kB | 457 kB | 425 kB  | 44.1 kB | 289 kB | 4.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 10 ms | 4.51 ms | 1.91 ms | 44 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12239   | 12239   | 18671   | 19567   | 18266   | 2045.66 | 12234   | 182649  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.61 MB | 1.68 MB | 1.57 MB | 176 kB  | 1.05 MB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.62 ms | 1.1 ms | 71 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4235   | 4235   | 9335    | 10223   | 8915.21 | 1674.08 | 4233   | 89146   |
| **Bytes/Sec** | 914 kB | 914 kB | 2.02 MB | 2.21 MB | 1.93 MB | 362 kB  | 914 kB | 19.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 10 ms | 3.91 ms | 2.04 ms | 36 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17311   | 17311   | 35935  | 36639   | 34218.4 | 5646.65 | 17297   | 342173  |
| **Bytes/Sec** | 2.65 MB | 2.65 MB | 5.5 MB | 5.61 MB | 5.24 MB | 864 kB  | 2.65 MB | 52.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.5 ms | 0.88 ms | 24 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11863   | 11863   | 24127  | 24783   | 23028.4 | 3731.23 | 11862   | 230272  |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 2.7 MB | 2.78 MB | 2.58 MB | 418 kB  | 1.33 MB | 25.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.28 ms | 1.02 ms | 38 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 12463   | 12463   | 18975   | 20767   | 18610.55 | 2047.64 | 12463   | 204706 |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.76 MB | 1.93 MB | 1.73 MB  | 190 kB  | 1.16 MB | 19 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.09 ms | 53 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1760   | 1760   | 2849   | 3041   | 2746.55 | 342.05  | 1760   | 30207   |
| **Bytes/Sec** | 202 kB | 202 kB | 328 kB | 350 kB | 316 kB  | 39.3 kB | 202 kB | 3.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 14.07 ms | 18.62 ms | 108 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2637   | 2637   | 5835    | 6159    | 5510.3  | 994.93 | 2637   | 55096   |
| **Bytes/Sec** | 749 kB | 749 kB | 1.66 MB | 1.75 MB | 1.56 MB | 283 kB | 749 kB | 15.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 6.74 ms | 3.06 ms | 179 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 19215   | 19215   | 24191   | 25391   | 23875.2 | 1695.04 | 19208   | 238730 |
| **Bytes/Sec** | 1.77 MB | 1.77 MB | 2.23 MB | 2.34 MB | 2.2 MB  | 156 kB  | 1.77 MB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.77 ms | 44 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4367   | 4367   | 7035   | 7391   | 6815.2 | 841.29  | 4364   | 68147   |
| **Bytes/Sec** | 340 kB | 340 kB | 549 kB | 577 kB | 532 kB | 65.6 kB | 340 kB | 5.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.46 ms | 2.29 ms | 109 ms |


---

<p align="center">Generated 2021-02-14T00:18:29.107Z</p>