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
| **Average** | 6389.5 | 19402 | 27389.82 | 13060 | 22383.64 | 13561.28 | 35571.64 | 38253.6 | 14777.2 | 3077 | 3673.7 | 25635.64 | 8074.2 |
| **Total** | 63890 | 194018 | 301261 | 130589 | 246224 | 149172 | 391278 | 382532 | 147759 | 30766 | 36730 | 281992 | 80740 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3881   | 3881   | 6719   | 6895   | 6389.5 | 862.41  | 3881   | 63890   |
| **Bytes/Sec** | 361 kB | 361 kB | 625 kB | 642 kB | 594 kB | 80.2 kB | 361 kB | 5.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.79 ms | 3.64 ms | 141 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12207   | 12207   | 20207   | 20591   | 19402   | 2424.32 | 12200   | 194018  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.86 MB | 1.89 MB | 1.78 MB | 223 kB  | 1.12 MB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.08 ms | 31 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 19535  | 19535  | 28207   | 28943   | 27389.82 | 2545   | 19527  | 301261  |
| **Bytes/Sec** | 996 kB | 996 kB | 1.44 MB | 1.48 MB | 1.4 MB   | 130 kB | 996 kB | 15.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.1 ms | 0.65 ms | 41 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 9575   | 9575   | 13207  | 13999  | 13060  | 1230.08 | 9573   | 130589  |
| **Bytes/Sec** | 498 kB | 498 kB | 687 kB | 728 kB | 679 kB | 63.9 kB | 498 kB | 6.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.4 ms | 1.27 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15247   | 15247   | 23087   | 23599   | 22383.64 | 2288.64 | 15244   | 246224  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 1.99 MB | 2.03 MB | 1.93 MB  | 197 kB  | 1.31 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.93 ms | 72 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5247    | 5247    | 14711   | 14855   | 13561.28 | 2755.44 | 5244    | 149172  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 3.18 MB | 3.21 MB | 2.93 MB  | 595 kB  | 1.13 MB | 32.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.36 ms | 1.43 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20959   | 20959   | 36863   | 38015   | 35571.64 | 4705.25 | 20956   | 391278  |
| **Bytes/Sec** | 3.21 MB | 3.21 MB | 5.64 MB | 5.82 MB | 5.44 MB  | 720 kB  | 3.21 MB | 59.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.43 ms | 0.81 ms | 19 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23807   | 23807   | 40095   | 40735   | 38253.6 | 4879.57 | 23804   | 382532  |
| **Bytes/Sec** | 2.67 MB | 2.67 MB | 4.49 MB | 4.56 MB | 4.28 MB | 546 kB  | 2.67 MB | 42.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.75 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9839   | 9839   | 15103  | 16767   | 14777.2 | 1781.22 | 9836   | 147759  |
| **Bytes/Sec** | 915 kB | 915 kB | 1.4 MB | 1.56 MB | 1.37 MB | 166 kB  | 915 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.31 ms | 1.29 ms | 36 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2441   | 2441   | 3081   | 3523   | 3077   | 304.58 | 2441   | 30766   |
| **Bytes/Sec** | 281 kB | 281 kB | 355 kB | 405 kB | 354 kB | 35 kB  | 281 kB | 3.54 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 49 ms | 12.53 ms | 18.19 ms | 88 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1920   | 1920   | 3897    | 4167    | 3673.7  | 676.48 | 1920   | 36730   |
| **Bytes/Sec** | 546 kB | 546 kB | 1.11 MB | 1.18 MB | 1.04 MB | 192 kB | 545 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 20 ms | 10.39 ms | 4.91 ms | 239 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18351   | 18351   | 26351   | 27119   | 25635.64 | 2350.04 | 18343   | 281992  |
| **Bytes/Sec** | 1.69 MB | 1.69 MB | 2.42 MB | 2.49 MB | 2.36 MB  | 216 kB  | 1.69 MB | 25.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.74 ms | 24 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4999   | 4999   | 8431   | 8631   | 8074.2 | 1037.74 | 4996   | 80740  |
| **Bytes/Sec** | 390 kB | 390 kB | 657 kB | 673 kB | 630 kB | 81 kB   | 390 kB | 6.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.53 ms | 2.23 ms | 101 ms |


---

<p align="center">Generated 2020-12-28T00:25:56.335Z</p>