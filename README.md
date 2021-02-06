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
| **Average** | 6406.9 | 21315.6 | 21271.6 | 10095.21 | 24070.4 | 16567.82 | 34632.81 | 24012.4 | 15419.2 | 2970.1 | 4459.4 | 25276.8 | 6402.9 |
| **Total** | 64064 | 213160 | 212723 | 100951 | 240706 | 182244 | 346316 | 240127 | 154177 | 29697 | 44591 | 252753 | 64026 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3719   | 3719   | 6567   | 7075   | 6406.9 | 915.28  | 3719   | 64064   |
| **Bytes/Sec** | 346 kB | 346 kB | 611 kB | 658 kB | 596 kB | 85.1 kB | 346 kB | 5.96 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 13 ms | 5.75 ms | 2.96 ms | 118 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13423   | 13423   | 22095   | 22847  | 21315.6 | 2656.06 | 13418   | 213160  |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 2.03 MB | 2.1 MB | 1.96 MB | 244 kB  | 1.23 MB | 19.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.27 ms | 1.03 ms | 50 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13959  | 13959  | 22223   | 22783   | 21271.6 | 2529.59 | 13956  | 212723  |
| **Bytes/Sec** | 712 kB | 712 kB | 1.13 MB | 1.16 MB | 1.08 MB | 129 kB  | 712 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.33 ms | 1.1 ms | 57 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8271   | 8271   | 10303  | 10623  | 10095.21 | 680.54  | 8267   | 100951  |
| **Bytes/Sec** | 430 kB | 430 kB | 536 kB | 552 kB | 525 kB   | 35.4 kB | 430 kB | 5.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.47 ms | 1.24 ms | 26 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17055   | 17055   | 24879   | 25087   | 24070.4 | 2345.95 | 17055   | 240706  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.14 MB | 2.16 MB | 2.07 MB | 201 kB  | 1.47 MB | 20.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.74 ms | 56 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7875   | 7875   | 17647   | 17935   | 16567.82 | 2796.51 | 7873   | 182244  |
| **Bytes/Sec** | 1.7 MB | 1.7 MB | 3.81 MB | 3.87 MB | 3.58 MB  | 604 kB  | 1.7 MB | 39.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.13 ms | 1.03 ms | 25 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 19695   | 19695   | 35871   | 38111   | 34632.81 | 5068.36 | 19684   | 346316 |
| **Bytes/Sec** | 3.01 MB | 3.01 MB | 5.48 MB | 5.83 MB | 5.3 MB   | 776 kB  | 3.01 MB | 53 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.5 ms | 0.84 ms | 25 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13319   | 13319   | 25055   | 26111   | 24012.4 | 3611.73 | 13318   | 240127  |
| **Bytes/Sec** | 1.49 MB | 1.49 MB | 2.81 MB | 2.92 MB | 2.69 MB | 404 kB  | 1.49 MB | 26.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.97 ms | 31 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10495  | 10495  | 15895   | 16327   | 15419.2 | 1660.67 | 10488  | 154177  |
| **Bytes/Sec** | 976 kB | 976 kB | 1.48 MB | 1.52 MB | 1.43 MB | 154 kB  | 975 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.1 ms | 37 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2026   | 2026   | 3043   | 3305   | 2970.1 | 350.29  | 2026   | 29697   |
| **Bytes/Sec** | 233 kB | 233 kB | 350 kB | 380 kB | 342 kB | 40.3 kB | 233 kB | 3.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.95 ms | 18.26 ms | 93 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2197   | 2197   | 4823    | 4931   | 4459.4  | 806.08 | 2197   | 44591   |
| **Bytes/Sec** | 624 kB | 624 kB | 1.37 MB | 1.4 MB | 1.27 MB | 229 kB | 624 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 17 ms | 8.34 ms | 4.65 ms | 239 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 18287   | 18287   | 26159   | 26623   | 25276.8 | 2366.3 | 18286   | 252753  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 2.41 MB | 2.45 MB | 2.33 MB | 218 kB | 1.68 MB | 23.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.73 ms | 41 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3899   | 3899   | 6655   | 6931   | 6402.9 | 844.54  | 3898   | 64026   |
| **Bytes/Sec** | 304 kB | 304 kB | 519 kB | 541 kB | 499 kB | 65.9 kB | 304 kB | 4.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.79 ms | 2.53 ms | 123 ms |


---

<p align="center">Generated 2021-02-06T00:17:57.223Z</p>