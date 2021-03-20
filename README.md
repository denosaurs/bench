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
| **Average** | 6897.6 | 24249.6 | 23403.6 | 9613.64 | 16674 | 13178.2 | 22147.6 | 23689.2 | 17099.28 | 3003.2 | 6054.3 | 9848.6 | 7059.6 |
| **Total** | 68966 | 242495 | 234043 | 105749 | 166708 | 131780 | 221483 | 236892 | 188070 | 30030 | 60537 | 98481 | 70596 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4923   | 4923   | 7055   | 7303   | 6897.6 | 667.76  | 4921   | 68966   |
| **Bytes/Sec** | 458 kB | 458 kB | 656 kB | 679 kB | 641 kB | 62.1 kB | 458 kB | 6.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.42 ms | 1.69 ms | 102 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16719   | 16719   | 24751   | 26607   | 24249.6 | 2599.64 | 16711   | 242495  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 2.28 MB | 2.45 MB | 2.23 MB | 239 kB  | 1.54 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.78 ms | 60 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14799  | 14799  | 24111   | 25167   | 23403.6 | 2894.66 | 14797  | 234043  |
| **Bytes/Sec** | 755 kB | 755 kB | 1.23 MB | 1.28 MB | 1.19 MB | 148 kB  | 755 kB | 11.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.2 ms | 0.96 ms | 37 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 8167   | 8167   | 10047  | 10391  | 9613.64 | 749.82 | 8165   | 105749 |
| **Bytes/Sec** | 425 kB | 425 kB | 522 kB | 541 kB | 500 kB  | 39 kB  | 425 kB | 5.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.61 ms | 1.35 ms | 27 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10287  | 10287  | 17375   | 17967   | 16674   | 2153.77 | 10280  | 166708  |
| **Bytes/Sec** | 884 kB | 884 kB | 1.49 MB | 1.55 MB | 1.43 MB | 185 kB  | 884 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.97 ms | 1.12 ms | 72 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5179    | 5179    | 14239   | 14511   | 13178.2 | 2750.09 | 5177    | 131780  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 3.08 MB | 3.14 MB | 2.85 MB | 594 kB  | 1.12 MB | 28.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.45 ms | 1.55 ms | 34 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10911   | 10911   | 23375   | 24735   | 22147.6 | 3805.78 | 10905   | 221483  |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 3.58 MB | 3.78 MB | 3.39 MB | 582 kB  | 1.67 MB | 33.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.27 ms | 1.03 ms | 24 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14247  | 14247  | 24735   | 25663   | 23689.2 | 3200.87 | 14245  | 236892  |
| **Bytes/Sec** | 1.6 MB | 1.6 MB | 2.77 MB | 2.87 MB | 2.65 MB | 358 kB  | 1.6 MB | 26.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.94 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg      | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | -------- | ------- | ----- | ------- |
| **Req/Sec**   | 10767 | 10767 | 17631   | 18639   | 17099.28 | 2092.55 | 10762 | 188070  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 1.64 MB | 1.73 MB | 1.59 MB  | 195 kB  | 1 MB  | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.08 ms | 1.19 ms | 76 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2151   | 2151   | 2969   | 3381   | 3003.2 | 344.44  | 2151   | 30030   |
| **Bytes/Sec** | 247 kB | 247 kB | 342 kB | 389 kB | 345 kB | 39.6 kB | 247 kB | 3.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.82 ms | 18.22 ms | 99 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 3713    | 3713    | 6343   | 6591    | 6054.3  | 808.9  | 3712    | 60537   |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.8 MB | 1.87 MB | 1.72 MB | 230 kB | 1.05 MB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 6.03 ms | 2.51 ms | 153 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6739   | 6739   | 10079  | 10559  | 9848.6 | 1079.7  | 6738   | 98481   |
| **Bytes/Sec** | 620 kB | 620 kB | 928 kB | 971 kB | 906 kB | 99.4 kB | 620 kB | 9.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.59 ms | 1.97 ms | 66 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5043   | 5043   | 7307   | 7479   | 7059.6 | 690.05  | 5042   | 70596   |
| **Bytes/Sec** | 393 kB | 393 kB | 570 kB | 584 kB | 551 kB | 53.8 kB | 393 kB | 5.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.16 ms | 2.3 ms | 104 ms |


---

<p align="center">Generated 2021-03-20T00:17:54.714Z</p>