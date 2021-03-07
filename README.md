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
| **Average** | 10499.8 | 11459.8 | 22549.2 | 9088.19 | 20747.6 | 8893.91 | 18160 | 22222 | 22354.8 | 2892.2 | 4785.91 | 13897.82 | 5846.9 |
| **Total** | 104993 | 114591 | 225456 | 99959 | 207477 | 97831 | 199728 | 222233 | 223519 | 28919 | 52637 | 152878 | 58462 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7059   | 7059   | 10863   | 11487   | 10499.8 | 1230.02 | 7058   | 104993  |
| **Bytes/Sec** | 657 kB | 657 kB | 1.01 MB | 1.07 MB | 976 kB  | 114 kB  | 656 kB | 9.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.38 ms | 1.55 ms | 87 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8115   | 8115   | 11799   | 11975  | 11459.8 | 1118.53 | 8113   | 114591  |
| **Bytes/Sec** | 746 kB | 746 kB | 1.09 MB | 1.1 MB | 1.05 MB | 103 kB  | 746 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 4 ms  | 3.14 ms | 1.15 ms | 84 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15247  | 15247  | 22927   | 24255   | 22549.2 | 2507.35 | 15240  | 225456  |
| **Bytes/Sec** | 778 kB | 778 kB | 1.17 MB | 1.24 MB | 1.15 MB | 128 kB  | 777 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.28 ms | 0.99 ms | 40 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 6235   | 6235   | 9383   | 9647   | 9088.19 | 912.85  | 6232   | 99959  |
| **Bytes/Sec** | 324 kB | 324 kB | 488 kB | 502 kB | 473 kB  | 47.5 kB | 324 kB | 5.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 3.85 ms | 1.69 ms | 59 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13871   | 13871   | 21551   | 21759   | 20747.6 | 2302.13 | 13868   | 207477  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 1.85 MB | 1.87 MB | 1.78 MB | 198 kB  | 1.19 MB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.95 ms | 75 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4091   | 4091   | 9439    | 9807    | 8893.91 | 1608.18 | 4091   | 97831   |
| **Bytes/Sec** | 884 kB | 884 kB | 2.04 MB | 2.12 MB | 1.92 MB | 347 kB  | 884 kB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 3.92 ms | 1.97 ms | 36 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 9103    | 9103    | 19455   | 19791   | 18160   | 3013.8 | 9101    | 199728  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 2.98 MB | 3.03 MB | 2.78 MB | 461 kB | 1.39 MB | 30.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.62 ms | 1.16 ms | 23 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13671   | 13671   | 23311   | 24191   | 22222   | 3045.46 | 13664   | 222233  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 2.61 MB | 2.71 MB | 2.49 MB | 341 kB  | 1.53 MB | 24.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.32 ms | 0.98 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16007   | 16007   | 23023   | 23551   | 22354.8 | 2142.42 | 16005   | 223519  |
| **Bytes/Sec** | 1.49 MB | 1.49 MB | 2.14 MB | 2.19 MB | 2.08 MB | 199 kB  | 1.49 MB | 20.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.73 ms | 48 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2049   | 2049   | 2997   | 3213   | 2892.2 | 335.92  | 2048   | 28919   |
| **Bytes/Sec** | 236 kB | 236 kB | 345 kB | 370 kB | 333 kB | 38.6 kB | 236 kB | 3.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.34 ms | 18.47 ms | 65 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2753   | 2753   | 5019    | 5243    | 4785.91 | 680.29 | 2753   | 52637   |
| **Bytes/Sec** | 782 kB | 782 kB | 1.43 MB | 1.49 MB | 1.36 MB | 193 kB | 782 kB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.91 ms | 3.04 ms | 180 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10743  | 10743  | 14119  | 14823   | 13897.82 | 1042.15 | 10743  | 152878  |
| **Bytes/Sec** | 989 kB | 989 kB | 1.3 MB | 1.36 MB | 1.28 MB  | 95.8 kB | 988 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.33 ms | 0.91 ms | 53 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4039   | 4039   | 6071   | 6283   | 5846.9 | 628.91  | 4039   | 58462   |
| **Bytes/Sec** | 315 kB | 315 kB | 474 kB | 490 kB | 456 kB | 49.1 kB | 315 kB | 4.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 11 ms | 6.42 ms | 2.41 ms | 122 ms |


---

<p align="center">Generated 2021-03-07T00:18:01.353Z</p>