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
| **Average** | 14063.2 | 12088.37 | 21909.46 | 10075 | 16151.64 | 9382.37 | 44242.19 | 21074.8 | 20256.37 | 2853.8 | 4015.2 | 12071.2 | 6972.8 |
| **Total** | 140633 | 132942 | 241003 | 100744 | 177626 | 103197 | 486667 | 210722 | 222828 | 28535 | 40149 | 120703 | 69722 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11047   | 11047   | 14215   | 15015  | 14063.2 | 1057.33 | 11047   | 140633  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.32 MB | 1.4 MB | 1.31 MB | 98.2 kB | 1.03 MB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.29 ms | 1.16 ms | 67 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8495   | 8495   | 12295   | 13015  | 12088.37 | 1176.14 | 8488   | 132942  |
| **Bytes/Sec** | 781 kB | 781 kB | 1.13 MB | 1.2 MB | 1.11 MB  | 108 kB  | 781 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.8 ms | 1.19 ms | 75 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14831  | 14831  | 22239   | 23551  | 21909.46 | 2309.95 | 14829  | 241003  |
| **Bytes/Sec** | 757 kB | 757 kB | 1.13 MB | 1.2 MB | 1.12 MB  | 118 kB  | 756 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.33 ms | 1.03 ms | 36 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 8059   | 8059   | 10263  | 10535  | 10075  | 700.12  | 8057   | 100744  |
| **Bytes/Sec** | 419 kB | 419 kB | 534 kB | 548 kB | 524 kB | 36.4 kB | 419 kB | 5.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.47 ms | 1.27 ms | 37 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10063  | 10063  | 16767   | 17295   | 16151.64 | 1980.52 | 10058  | 177626  |
| **Bytes/Sec** | 865 kB | 865 kB | 1.44 MB | 1.49 MB | 1.39 MB  | 170 kB  | 865 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.17 ms | 1.1 ms | 72 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%  | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------ | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 4647  | 4647  | 10143   | 10663  | 9382.37 | 1679.41 | 4646  | 103197  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 2.19 MB | 2.3 MB | 2.03 MB | 363 kB  | 1 MB  | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.74 ms | 1.85 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 28591   | 28591   | 45727 | 47007   | 44242.19 | 5011.06 | 28582   | 486667  |
| **Bytes/Sec** | 4.37 MB | 4.37 MB | 7 MB  | 7.19 MB | 6.77 MB  | 767 kB  | 4.37 MB | 74.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.36 ms | 0.66 ms | 19 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11367   | 11367   | 22191   | 23295   | 21074.8 | 3309.81 | 11362   | 210722  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 2.49 MB | 2.61 MB | 2.36 MB | 371 kB  | 1.27 MB | 23.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.39 ms | 1.03 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14263   | 14263   | 20847   | 21919   | 20256.37 | 1986.07 | 14262   | 222828  |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 1.94 MB | 2.04 MB | 1.88 MB  | 185 kB  | 1.33 MB | 20.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.23 ms | 0.93 ms | 47 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2279   | 2279   | 2863   | 3119   | 2853.8 | 225.64 | 2279   | 28535   |
| **Bytes/Sec** | 262 kB | 262 kB | 329 kB | 359 kB | 328 kB | 26 kB  | 262 kB | 3.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.48 ms | 18.43 ms | 82 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2261   | 2261   | 4299    | 4383    | 4015.2  | 642.67 | 2261   | 40149   |
| **Bytes/Sec** | 643 kB | 643 kB | 1.22 MB | 1.25 MB | 1.14 MB | 182 kB | 642 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 18 ms | 9.41 ms | 3.93 ms | 214 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8687   | 8687   | 12391   | 12663   | 12071.2 | 1137.05 | 8683   | 120703  |
| **Bytes/Sec** | 799 kB | 799 kB | 1.14 MB | 1.17 MB | 1.11 MB | 105 kB  | 799 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3 ms  | 1.09 ms | 65 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4951   | 4951   | 7123   | 7699   | 6972.8 | 717.09  | 4951   | 69722   |
| **Bytes/Sec** | 386 kB | 386 kB | 556 kB | 601 kB | 544 kB | 55.9 kB | 386 kB | 5.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.28 ms | 1.97 ms | 102 ms |


---

<p align="center">Generated 2021-03-06T00:17:37.037Z</p>