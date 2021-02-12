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
| **Average** | 9949.8 | 17912.41 | 22634 | 13946.55 | 14436 | 7534.4 | 21462 | 19806.91 | 18859.6 | 2673.4 | 4765.7 | 24524.37 | 7434.8 |
| **Total** | 99487 | 179128 | 226322 | 153393 | 158791 | 75335 | 214600 | 217880 | 188576 | 26730 | 47654 | 269763 | 74346 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6583   | 6583   | 10335  | 10535  | 9949.8 | 1133.51 | 6583   | 99487   |
| **Bytes/Sec** | 612 kB | 612 kB | 961 kB | 980 kB | 925 kB | 105 kB  | 612 kB | 9.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.5 ms | 1.86 ms | 103 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10335  | 10335  | 18815   | 19055   | 17912.41 | 2550.26 | 10330  | 179128  |
| **Bytes/Sec** | 951 kB | 951 kB | 1.73 MB | 1.75 MB | 1.65 MB  | 235 kB  | 950 kB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.55 ms | 1.39 ms | 77 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13311  | 13311  | 23295   | 24703   | 22634   | 3173.75 | 13306  | 226322  |
| **Bytes/Sec** | 679 kB | 679 kB | 1.19 MB | 1.26 MB | 1.15 MB | 162 kB  | 679 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 0.96 ms | 37 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9679   | 9679   | 14407  | 15559  | 13946.55 | 1715.77 | 9673   | 153393  |
| **Bytes/Sec** | 503 kB | 503 kB | 749 kB | 809 kB | 725 kB   | 89.2 kB | 503 kB | 7.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.33 ms | 1.15 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8815   | 8815   | 15127  | 15455   | 14436   | 1818.97 | 8810   | 158791  |
| **Bytes/Sec** | 758 kB | 758 kB | 1.3 MB | 1.33 MB | 1.24 MB | 157 kB  | 758 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.33 ms | 1.23 ms | 65 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 6199    | 6199    | 6255    | 13455   | 7534.4  | 2415.4 | 6196    | 75335   |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 1.35 MB | 2.91 MB | 1.63 MB | 521 kB | 1.34 MB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 6 ms  | 7 ms  | 4.97 ms | 2.02 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11991   | 11991   | 22095   | 23855   | 21462   | 3225.34 | 11986   | 214600  |
| **Bytes/Sec** | 1.83 MB | 1.83 MB | 3.38 MB | 3.65 MB | 3.28 MB | 494 kB  | 1.83 MB | 32.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.31 ms | 1.05 ms | 34 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11799   | 11799   | 20399   | 21519   | 19806.91 | 2588.66 | 11794   | 217880  |
| **Bytes/Sec** | 1.32 MB | 1.32 MB | 2.29 MB | 2.41 MB | 2.22 MB  | 290 kB  | 1.32 MB | 24.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.42 ms | 0.99 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 12431   | 12431   | 19375  | 20895   | 18859.6 | 2251.9 | 12429   | 188576  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.8 MB | 1.94 MB | 1.75 MB | 209 kB | 1.16 MB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.43 ms | 1.09 ms | 48 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1847   | 1847   | 2645   | 3139   | 2673.4 | 362.62  | 1847   | 26730   |
| **Bytes/Sec** | 212 kB | 212 kB | 304 kB | 361 kB | 307 kB | 41.7 kB | 212 kB | 3.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 51 ms | 14.46 ms | 18.77 ms | 112 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2327   | 2327   | 5191    | 5323    | 4765.7  | 875.95 | 2326   | 47654   |
| **Bytes/Sec** | 661 kB | 661 kB | 1.47 MB | 1.51 MB | 1.35 MB | 249 kB | 661 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.98 ms | 3.98 ms | 225 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18415   | 18415   | 25103   | 25967   | 24524.37 | 1997.93 | 18413   | 269763  |
| **Bytes/Sec** | 1.69 MB | 1.69 MB | 2.31 MB | 2.39 MB | 2.26 MB  | 183 kB  | 1.69 MB | 24.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.68 ms | 30 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4551   | 4551   | 7739   | 8003   | 7434.8 | 978.66  | 4551   | 74346  |
| **Bytes/Sec** | 355 kB | 355 kB | 604 kB | 625 kB | 580 kB | 76.3 kB | 355 kB | 5.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.86 ms | 2.16 ms | 99 ms |


---

<p align="center">Generated 2021-02-12T00:18:27.309Z</p>