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
| **Average** | 9929.64 | 20743.6 | 25955.64 | 13050.55 | 19508.41 | 14755.46 | 21940.73 | 37274.91 | 17846 | 2836.9 | 3801.8 | 20359.6 | 6381.7 |
| **Total** | 109226 | 207448 | 285523 | 143555 | 195061 | 162298 | 241338 | 410069 | 178448 | 28366 | 38007 | 203594 | 63808 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5875   | 5875   | 10367  | 10631  | 9929.64 | 1297.09 | 5874   | 109226  |
| **Bytes/Sec** | 546 kB | 546 kB | 964 kB | 989 kB | 923 kB  | 121 kB  | 546 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.48 ms | 1.76 ms | 91 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13479   | 13479   | 21439   | 22239   | 20743.6 | 2487.95 | 13474   | 207448  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 1.97 MB | 2.05 MB | 1.91 MB | 229 kB  | 1.24 MB | 19.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.1 ms | 60 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 19295  | 19295  | 26319   | 27967   | 25955.64 | 2239.82 | 19286  | 285523  |
| **Bytes/Sec** | 984 kB | 984 kB | 1.34 MB | 1.43 MB | 1.32 MB  | 114 kB  | 984 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.73 ms | 46 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9495   | 9495   | 13503  | 13623  | 13050.55 | 1148.73 | 9494   | 143555  |
| **Bytes/Sec** | 494 kB | 494 kB | 702 kB | 709 kB | 679 kB   | 59.7 kB | 494 kB | 7.46 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.31 ms | 1.13 ms | 26 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12615   | 12615   | 20143   | 20687   | 19508.41 | 2315.39 | 12613   | 195061  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.73 MB | 1.78 MB | 1.68 MB  | 199 kB  | 1.08 MB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.32 ms | 1.1 ms | 80 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 6847    | 6847    | 15415   | 16159   | 14755.46 | 2557.51 | 6847    | 162298  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.33 MB | 3.49 MB | 3.19 MB  | 552 kB  | 1.48 MB | 35.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.25 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12711   | 12711   | 22655   | 23951   | 21940.73 | 3061.04 | 12711   | 241338  |
| **Bytes/Sec** | 1.95 MB | 1.95 MB | 3.47 MB | 3.67 MB | 3.36 MB  | 468 kB  | 1.94 MB | 36.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.27 ms | 1 ms  | 21 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22991   | 22991   | 38687   | 39487   | 37274.91 | 4547.16 | 22984   | 410069  |
| **Bytes/Sec** | 2.57 MB | 2.57 MB | 4.33 MB | 4.42 MB | 4.18 MB  | 510 kB  | 2.57 MB | 45.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.51 ms | 0.73 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12567   | 12567   | 18159   | 19775   | 17846   | 1868.01 | 12562   | 178448  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.69 MB | 1.84 MB | 1.66 MB | 174 kB  | 1.17 MB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.6 ms | 1.21 ms | 66 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1856   | 1856   | 2905   | 3247   | 2836.9 | 406.81  | 1856   | 28366   |
| **Bytes/Sec** | 214 kB | 214 kB | 334 kB | 374 kB | 326 kB | 46.8 kB | 213 kB | 3.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | ------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.6 ms | 18.53 ms | 105 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1969   | 1969   | 4167    | 4303    | 3801.8  | 732.3  | 1969   | 38007   |
| **Bytes/Sec** | 560 kB | 560 kB | 1.18 MB | 1.22 MB | 1.08 MB | 208 kB | 559 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 19 ms | 10.01 ms | 4.68 ms | 243 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14263   | 14263   | 21055   | 21887   | 20359.6 | 2131.33 | 14259   | 203594  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 1.94 MB | 2.01 MB | 1.87 MB | 196 kB  | 1.31 MB | 18.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.35 ms | 1.03 ms | 56 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4031   | 4031   | 6655   | 6743   | 6381.7 | 790     | 4031   | 63808   |
| **Bytes/Sec** | 315 kB | 315 kB | 519 kB | 526 kB | 498 kB | 61.6 kB | 314 kB | 4.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 10 ms | 5.76 ms | 2.17 ms | 70 ms |


---

<p align="center">Generated 2021-02-21T00:18:19.592Z</p>