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
| **Average** | 7186.8 | 23273.82 | 21591.6 | 9221.4 | 21307.6 | 9561 | 32760.8 | 38898.4 | 19053.2 | 2907 | 4547.11 | 17945.82 | 7604 |
| **Total** | 71858 | 256018 | 215925 | 92215 | 213083 | 95601 | 327637 | 389004 | 190519 | 31969 | 45467 | 197414 | 76037 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4819   | 4819   | 7399   | 7763   | 7186.8 | 804.64  | 4816   | 71858   |
| **Bytes/Sec** | 448 kB | 448 kB | 688 kB | 722 kB | 668 kB | 74.9 kB | 448 kB | 6.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.02 ms | 2.01 ms | 121 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15247  | 15247  | 24255   | 24751   | 23273.82 | 2628.96 | 15245  | 256018  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 2.23 MB | 2.28 MB | 2.14 MB  | 242 kB  | 1.4 MB | 23.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.92 ms | 37 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 15175  | 15175  | 22063   | 23327   | 21591.6 | 2247.08 | 15173  | 215925 |
| **Bytes/Sec** | 774 kB | 774 kB | 1.13 MB | 1.19 MB | 1.1 MB  | 115 kB  | 774 kB | 11 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.31 ms | 0.98 ms | 35 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 6931   | 6931   | 9223   | 10143  | 9221.4 | 865.76 | 6928   | 92215  |
| **Bytes/Sec** | 360 kB | 360 kB | 480 kB | 527 kB | 480 kB | 45 kB  | 360 kB | 4.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.77 ms | 1.43 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14559   | 14559   | 21983   | 22911   | 21307.6 | 2299.55 | 14556   | 213083  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 1.89 MB | 1.97 MB | 1.83 MB | 198 kB  | 1.25 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.9 ms | 69 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4391   | 4391   | 10239   | 11055   | 9561    | 1827.21 | 4390   | 95601   |
| **Bytes/Sec** | 949 kB | 949 kB | 2.21 MB | 2.39 MB | 2.07 MB | 395 kB  | 948 kB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.66 ms | 1.78 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17679   | 17679   | 34495   | 35359   | 32760.8 | 5066.54 | 17674  | 327637  |
| **Bytes/Sec** | 2.71 MB | 2.71 MB | 5.28 MB | 5.41 MB | 5.01 MB | 775 kB  | 2.7 MB | 50.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.66 ms | 0.9 ms | 21 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 24111  | 24111  | 40319   | 41855   | 38898.4 | 4999.08 | 24107  | 389004  |
| **Bytes/Sec** | 2.7 MB | 2.7 MB | 4.52 MB | 4.69 MB | 4.36 MB | 560 kB  | 2.7 MB | 43.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.28 ms | 0.71 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12783   | 12783   | 19727   | 20495   | 19053.2 | 2148.99 | 12777   | 190519  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 1.83 MB | 1.91 MB | 1.77 MB | 200 kB  | 1.19 MB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.39 ms | 1.16 ms | 80 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2035   | 2035   | 3001   | 3249   | 2907   | 310.91  | 2035   | 31969   |
| **Bytes/Sec** | 234 kB | 234 kB | 345 kB | 374 kB | 334 kB | 35.7 kB | 234 kB | 3.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.28 ms | 18.46 ms | 93 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2605   | 2605   | 4803    | 4979    | 4547.11 | 676.42 | 2605   | 45467   |
| **Bytes/Sec** | 740 kB | 740 kB | 1.36 MB | 1.41 MB | 1.29 MB | 192 kB | 740 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 8.31 ms | 3.49 ms | 196 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11487   | 11487   | 18671   | 19183   | 17945.82 | 2113.94 | 11481   | 197414  |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.72 MB | 1.77 MB | 1.65 MB  | 195 kB  | 1.06 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.68 ms | 1.12 ms | 50 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4875   | 4875   | 7963   | 8071   | 7604   | 923.34 | 4875   | 76037   |
| **Bytes/Sec** | 380 kB | 380 kB | 621 kB | 630 kB | 593 kB | 72 kB  | 380 kB | 5.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.79 ms | 2.21 ms | 98 ms |


---

<p align="center">Generated 2021-03-26T00:38:53.405Z</p>