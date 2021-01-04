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
| **Average** | 8477.4 | 18102.8 | 21322.8 | 8933.28 | 21150.8 | 8581 | 21012.73 | 40322.4 | 16698 | 2608.81 | 5492.7 | 24900.8 | 7701.6 |
| **Total** | 84758 | 180998 | 213220 | 98273 | 211518 | 94391 | 231127 | 403247 | 166987 | 26081 | 54917 | 249002 | 77019 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5387   | 5387   | 8871   | 9135   | 8477.4 | 1063.95 | 5385   | 84758   |
| **Bytes/Sec** | 501 kB | 501 kB | 825 kB | 849 kB | 788 kB | 98.9 kB | 501 kB | 7.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.41 ms | 2.12 ms | 106 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12095   | 12095   | 18623   | 19215   | 18102.8 | 2027.55 | 12094   | 180998  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.71 MB | 1.77 MB | 1.67 MB | 186 kB  | 1.11 MB | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.69 ms | 1.11 ms | 57 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14215  | 14215  | 21887   | 22799   | 21322.8 | 2407.98 | 14215  | 213220  |
| **Bytes/Sec** | 725 kB | 725 kB | 1.12 MB | 1.16 MB | 1.09 MB | 123 kB  | 725 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.3 ms | 1.01 ms | 49 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7107   | 7107   | 9023   | 9639   | 8933.28 | 619.53  | 7105   | 98273   |
| **Bytes/Sec** | 370 kB | 370 kB | 469 kB | 501 kB | 465 kB  | 32.2 kB | 369 kB | 5.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.06 ms | 1.44 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14415   | 14415   | 21999   | 22319   | 21150.8 | 2311.36 | 14414   | 211518  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 1.89 MB | 1.92 MB | 1.82 MB | 199 kB  | 1.24 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 1.19 ms | 75 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3953   | 3953   | 9135    | 9519    | 8581    | 1560.2 | 3952   | 94391   |
| **Bytes/Sec** | 854 kB | 854 kB | 1.97 MB | 2.06 MB | 1.85 MB | 337 kB | 854 kB | 20.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 10 ms | 4.15 ms | 2.12 ms | 35 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 10071   | 10071   | 22367   | 22799   | 21012.73 | 3531.43 | 10071   | 231127  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 3.42 MB | 3.49 MB | 3.21 MB  | 540 kB  | 1.54 MB | 35.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.41 ms | 1.55 ms | 81 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 26543   | 26543   | 41983  | 44063   | 40322.4 | 4743.07 | 26537   | 403247  |
| **Bytes/Sec** | 2.97 MB | 2.97 MB | 4.7 MB | 4.94 MB | 4.52 MB | 531 kB  | 2.97 MB | 45.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.3 ms | 0.69 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10895   | 10895   | 17295   | 18143   | 16698   | 1973.24 | 10892   | 166987  |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.61 MB | 1.69 MB | 1.55 MB | 184 kB  | 1.01 MB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.14 ms | 1.12 ms | 74 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ----- |
| **Req/Sec**   | 1581   | 1581   | 2713   | 2965   | 2608.81 | 372.88  | 1581   | 26081 |
| **Bytes/Sec** | 182 kB | 182 kB | 312 kB | 341 kB | 300 kB  | 42.8 kB | 182 kB | 3 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 52 ms | 14.82 ms | 18.98 ms | 119 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2489   | 2489   | 5891    | 6067    | 5492.7  | 1048.2 | 2488   | 54917   |
| **Bytes/Sec** | 707 kB | 707 kB | 1.67 MB | 1.72 MB | 1.56 MB | 298 kB | 707 kB | 15.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 6.97 ms | 3.63 ms | 206 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17279   | 17279   | 25615   | 26255   | 24900.8 | 2556.13 | 17272   | 249002  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.36 MB | 2.42 MB | 2.29 MB | 235 kB  | 1.59 MB | 22.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.81 ms | 55 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4759   | 4759   | 7999   | 8247   | 7701.6 | 993.05  | 4757   | 77019   |
| **Bytes/Sec** | 371 kB | 371 kB | 624 kB | 643 kB | 601 kB | 77.5 kB | 371 kB | 6.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.67 ms | 2.24 ms | 108 ms |


---

<p align="center">Generated 2021-01-04T00:31:12.178Z</p>