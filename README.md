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
| **Average** | 6366.7 | 24304 | 23290 | 15556 | 20971.6 | 10132.55 | 22886 | 36745.46 | 21314.55 | 2861.6 | 3672 | 27580.8 | 8196.8 |
| **Total** | 63664 | 243026 | 232889 | 171102 | 209704 | 111451 | 228865 | 404237 | 234435 | 28611 | 36718 | 275806 | 81967 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3477   | 3477   | 6559   | 6967   | 6366.7 | 974.34  | 3477   | 63664   |
| **Bytes/Sec** | 324 kB | 324 kB | 610 kB | 648 kB | 592 kB | 90.6 kB | 323 kB | 5.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.85 ms | 2.88 ms | 124 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17567   | 17567   | 24639   | 26559   | 24304   | 2428.72 | 17554   | 243026  |
| **Bytes/Sec** | 1.62 MB | 1.62 MB | 2.27 MB | 2.44 MB | 2.24 MB | 223 kB  | 1.61 MB | 22.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.83 ms | 43 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15455  | 15455  | 23999   | 25183   | 23290   | 2663.03 | 15449  | 232889  |
| **Bytes/Sec** | 788 kB | 788 kB | 1.22 MB | 1.28 MB | 1.19 MB | 136 kB  | 788 kB | 11.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.87 ms | 35 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 11831  | 11831  | 15967  | 16151  | 15556  | 1192.18 | 11824  | 171102 |
| **Bytes/Sec** | 615 kB | 615 kB | 830 kB | 840 kB | 809 kB | 62.1 kB | 615 kB | 8.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.18 ms | 0.87 ms | 25 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 14431   | 14431   | 21423   | 23023   | 20971.6 | 2319.14 | 14431   | 209704 |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 1.84 MB | 1.98 MB | 1.8 MB  | 199 kB  | 1.24 MB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.88 ms | 26 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 4595   | 4595   | 10751   | 11487   | 10132.55 | 1864.93 | 4594   | 111451  |
| **Bytes/Sec** | 993 kB | 993 kB | 2.32 MB | 2.48 MB | 2.19 MB  | 403 kB  | 992 kB | 24.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.47 ms | 1.66 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 10199   | 10199   | 24031   | 25199   | 22886  | 4270.31 | 10197   | 228865 |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 3.68 MB | 3.85 MB | 3.5 MB | 653 kB  | 1.56 MB | 35 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.27 ms | 1.06 ms | 27 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21551   | 21551   | 38399  | 39007   | 36745.46 | 4846.43 | 21542   | 404237  |
| **Bytes/Sec** | 2.41 MB | 2.41 MB | 4.3 MB | 4.37 MB | 4.12 MB  | 543 kB  | 2.41 MB | 45.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.48 ms | 0.77 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15935   | 15935   | 21919   | 22687   | 21314.55 | 1753.34 | 15929   | 234435  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.04 MB | 2.11 MB | 1.98 MB  | 163 kB  | 1.48 MB | 21.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.86 ms | 52 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1991   | 1991   | 2815   | 3517   | 2861.6 | 398.11  | 1991   | 28611   |
| **Bytes/Sec** | 229 kB | 229 kB | 324 kB | 404 kB | 329 kB | 45.8 kB | 229 kB | 3.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.47 ms | 18.4 ms | 95 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1916   | 1916   | 3973    | 4115    | 3672    | 654.45 | 1916   | 36718   |
| **Bytes/Sec** | 544 kB | 544 kB | 1.13 MB | 1.17 MB | 1.04 MB | 186 kB | 544 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 20 ms | 10.41 ms | 4.14 ms | 195 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20527   | 20527   | 27775   | 29359  | 27580.8 | 2474.59 | 20524   | 275806  |
| **Bytes/Sec** | 1.89 MB | 1.89 MB | 2.56 MB | 2.7 MB | 2.54 MB | 228 kB  | 1.89 MB | 25.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.09 ms | 0.66 ms | 47 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4959   | 4959   | 8447   | 8839   | 8196.8 | 1103.88 | 4957   | 81967   |
| **Bytes/Sec** | 387 kB | 387 kB | 659 kB | 689 kB | 639 kB | 86.1 kB | 387 kB | 6.39 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.54 ms | 2.01 ms | 95 ms |


---

<p align="center">Generated 2021-01-24T00:45:26.814Z</p>