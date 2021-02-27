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
| **Average** | 7299.9 | 21853.46 | 29217.6 | 12013.46 | 22967.6 | 16326.2 | 19598.91 | 40470.55 | 16512.41 | 2903.19 | 3875.1 | 12059.2 | 6009.9 |
| **Total** | 72999 | 240392 | 292138 | 132138 | 229676 | 163235 | 215577 | 445162 | 165101 | 31929 | 38745 | 120592 | 60089 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3887   | 3887   | 7563   | 8215   | 7299.9 | 1193.57 | 3887   | 72999   |
| **Bytes/Sec** | 362 kB | 362 kB | 703 kB | 764 kB | 679 kB | 111 kB  | 361 kB | 6.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 4.99 ms | 2.26 ms | 63 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 15015   | 15015   | 22479   | 23439   | 21853.46 | 2202.9 | 15013   | 240392  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 2.07 MB | 2.16 MB | 2.01 MB  | 203 kB | 1.38 MB | 22.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.84 ms | 47 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 22623   | 22623   | 29903   | 30511   | 29217.6 | 2217.7 | 22614   | 292138  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.53 MB | 1.56 MB | 1.49 MB | 113 kB | 1.15 MB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.07 ms | 0.57 ms | 31 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8399   | 8399   | 12447  | 12671  | 12013.46 | 1168.41 | 8396   | 132138  |
| **Bytes/Sec** | 437 kB | 437 kB | 647 kB | 659 kB | 625 kB   | 60.7 kB | 437 kB | 6.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.67 ms | 1.46 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15847   | 15847   | 23711   | 24063   | 22967.6 | 2382.12 | 15846   | 229676  |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 2.04 MB | 2.07 MB | 1.97 MB | 205 kB  | 1.36 MB | 19.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.77 ms | 33 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7271    | 7271    | 17327   | 17919   | 16326.2 | 3039.75 | 7271    | 163235  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.74 MB | 3.87 MB | 3.53 MB | 656 kB  | 1.57 MB | 35.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 1.15 ms | 34 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 8807    | 8807    | 20751   | 21151   | 19598.91 | 3436.02 | 8805    | 215577 |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 3.17 MB | 3.24 MB | 3 MB     | 526 kB  | 1.35 MB | 33 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.4 ms | 1.15 ms | 38 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 25919  | 25919  | 42399   | 43839   | 40470.55 | 4946.18 | 25919  | 445162  |
| **Bytes/Sec** | 2.9 MB | 2.9 MB | 4.75 MB | 4.91 MB | 4.53 MB  | 553 kB  | 2.9 MB | 49.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.44 ms | 0.7 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11023   | 11023   | 16943   | 17855   | 16512.41 | 1869.55 | 11018   | 165101  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.57 MB | 1.66 MB | 1.54 MB  | 174 kB  | 1.02 MB | 15.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.1 ms | 1.14 ms | 36 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2427   | 2427   | 2911   | 3411   | 2903.19 | 283.89  | 2426   | 31929   |
| **Bytes/Sec** | 279 kB | 279 kB | 335 kB | 392 kB | 334 kB  | 32.7 kB | 279 kB | 3.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 49 ms | 13.26 ms | 18.31 ms | 72 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 2121   | 2121   | 4075    | 4383    | 3875.1 | 627.94 | 2120   | 38745 |
| **Bytes/Sec** | 602 kB | 602 kB | 1.16 MB | 1.25 MB | 1.1 MB | 178 kB | 602 kB | 11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 9 ms  | 18 ms | 9.83 ms | 4.48 ms | 233 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8855   | 8855   | 12415   | 12847   | 12059.2 | 1131.66 | 8853   | 120592  |
| **Bytes/Sec** | 815 kB | 815 kB | 1.14 MB | 1.18 MB | 1.11 MB | 104 kB  | 814 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.86 ms | 1.26 ms | 64 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3761   | 3761   | 6295   | 6499   | 6009.9 | 789.46  | 3761   | 60089   |
| **Bytes/Sec** | 293 kB | 293 kB | 491 kB | 507 kB | 469 kB | 61.6 kB | 293 kB | 4.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 11 ms | 6.14 ms | 2.43 ms | 137 ms |


---

<p align="center">Generated 2021-02-27T00:18:19.830Z</p>