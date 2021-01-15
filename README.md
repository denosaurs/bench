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
| **Average** | 8164 | 23554.55 | 25761.6 | 14358.19 | 14788 | 15987.1 | 31550.19 | 22286 | 20900.73 | 3046 | 4796.3 | 23403.28 | 8252.6 |
| **Total** | 81642 | 259110 | 257621 | 157931 | 147872 | 175839 | 347031 | 222828 | 229898 | 30453 | 47963 | 257415 | 82512 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4911   | 4911   | 8487   | 8767   | 8164   | 1099.81 | 4910   | 81642   |
| **Bytes/Sec** | 457 kB | 457 kB | 790 kB | 816 kB | 759 kB | 102 kB  | 457 kB | 7.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.61 ms | 2.08 ms | 97 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14895   | 14895   | 24319   | 24863   | 23554.55 | 2750.59 | 14894   | 259110  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 2.24 MB | 2.29 MB | 2.17 MB  | 253 kB  | 1.37 MB | 23.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.79 ms | 52 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18511  | 18511  | 26383   | 27039   | 25761.6 | 2436.11 | 18510  | 257621  |
| **Bytes/Sec** | 944 kB | 944 kB | 1.35 MB | 1.38 MB | 1.31 MB | 124 kB  | 944 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.82 ms | 53 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10111  | 10111  | 14895  | 15439  | 14358.19 | 1452.83 | 10107  | 157931  |
| **Bytes/Sec** | 526 kB | 526 kB | 775 kB | 803 kB | 747 kB   | 75.6 kB | 526 kB | 8.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.31 ms | 1.33 ms | 48 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8207   | 8207   | 15255   | 16015   | 14788   | 2230.74 | 8200   | 147872  |
| **Bytes/Sec** | 706 kB | 706 kB | 1.31 MB | 1.38 MB | 1.27 MB | 192 kB  | 705 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.31 ms | 1.41 ms | 70 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 7531    | 7531    | 17119  | 18127   | 15987.1 | 3017.61 | 7531    | 175839 |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 3.7 MB | 3.92 MB | 3.45 MB | 652 kB  | 1.63 MB | 38 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.05 ms | 1.19 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16279   | 16279   | 32959   | 34143   | 31550.19 | 4887.85 | 16272   | 347031  |
| **Bytes/Sec** | 2.49 MB | 2.49 MB | 5.04 MB | 5.22 MB | 4.83 MB  | 748 kB  | 2.49 MB | 53.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.89 ms | 0.86 ms | 21 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 11575  | 11575  | 23407   | 24175   | 22286  | 3626.67 | 11569  | 222828 |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 2.62 MB | 2.71 MB | 2.5 MB | 406 kB  | 1.3 MB | 25 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.33 ms | 1.08 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14711   | 14711   | 21503 | 22879   | 20900.73 | 2020.96 | 14710   | 229898  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 2 MB  | 2.13 MB | 1.94 MB  | 188 kB  | 1.37 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.87 ms | 24 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2371   | 2371   | 3025   | 3359   | 3046   | 265.71  | 2370   | 30453  |
| **Bytes/Sec** | 273 kB | 273 kB | 348 kB | 386 kB | 350 kB | 30.6 kB | 273 kB | 3.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.61 ms | 18.2 ms | 98 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2481   | 2481   | 5251    | 5359    | 4796.3  | 848.77 | 2481   | 47963   |
| **Bytes/Sec** | 705 kB | 705 kB | 1.49 MB | 1.52 MB | 1.36 MB | 241 kB | 705 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.95 ms | 3.6 ms | 203 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15407   | 15407   | 24207   | 24479   | 23403.28 | 2535.31 | 15402   | 257415  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2.23 MB | 2.25 MB | 2.15 MB  | 233 kB  | 1.42 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.93 ms | 67 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5347   | 5347   | 8535   | 8679   | 8252.6 | 972.78  | 5344   | 82512   |
| **Bytes/Sec** | 417 kB | 417 kB | 666 kB | 677 kB | 644 kB | 75.9 kB | 417 kB | 6.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.45 ms | 1.87 ms | 59 ms |


---

<p align="center">Generated 2021-01-15T00:46:06.884Z</p>