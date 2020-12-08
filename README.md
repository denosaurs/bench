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
  - [pogo](#pogo)
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | pogo | servest | mandarinets | aqua |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 8252.6 | 17772.73 | 25442.19 | 13863.2 | 14947.64 | 14787 | 37913.46 | 23001.82 | 19210.55 | 5088.11 | 3370.9 | 5440.1 | 23626.55 |
| **Total** | 82522 | 195490 | 279860 | 138634 | 164413 | 147872 | 417047 | 252998 | 211291 | 50874 | 33707 | 54396 | 259882 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4791   | 4791   | 8471   | 9287   | 8252.6 | 1222.22 | 4789   | 82522   |
| **Bytes/Sec** | 445 kB | 445 kB | 788 kB | 864 kB | 767 kB | 114 kB  | 445 kB | 7.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.49 ms | 2.44 ms | 89 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 11903   | 11903   | 18303   | 19263   | 17772.73 | 1932.15 | 11896   | 195490 |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.68 MB | 1.77 MB | 1.64 MB  | 178 kB  | 1.09 MB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.69 ms | 1.34 ms | 78 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 18287  | 18287  | 26479   | 27055   | 25442.19 | 2444.71 | 18279  | 279860  |
| **Bytes/Sec** | 932 kB | 932 kB | 1.35 MB | 1.38 MB | 1.3 MB   | 125 kB  | 932 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 1.09 ms | 65 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9023   | 9023   | 14439  | 15007  | 13863.2 | 1671.11 | 9018   | 138634  |
| **Bytes/Sec** | 469 kB | 469 kB | 751 kB | 780 kB | 721 kB  | 87 kB   | 469 kB | 7.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.35 ms | 1.7 ms | 59 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 9567   | 9567   | 15647   | 16495   | 14947.64 | 1869.2 | 9562   | 164413  |
| **Bytes/Sec** | 823 kB | 823 kB | 1.35 MB | 1.42 MB | 1.29 MB  | 161 kB | 822 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.25 ms | 1.37 ms | 69 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5651    | 5651    | 15831   | 16319   | 14787   | 3105.73 | 5649    | 147872  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 3.42 MB | 3.52 MB | 3.19 MB | 671 kB  | 1.22 MB | 31.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.59 ms | 73 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20319   | 20319   | 39583   | 40991   | 37913.46 | 5614.53 | 20313   | 417047  |
| **Bytes/Sec** | 3.11 MB | 3.11 MB | 6.05 MB | 6.27 MB | 5.8 MB   | 859 kB  | 3.11 MB | 63.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.43 ms | 0.86 ms | 45 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12223   | 12223   | 24143  | 25391   | 23001.82 | 3531.81 | 12217   | 252998  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 2.7 MB | 2.84 MB | 2.58 MB  | 395 kB  | 1.37 MB | 28.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 1 ms  | 44 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12263   | 12263   | 19903   | 20719   | 19210.55 | 2316.08 | 12262   | 211291  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.85 MB | 1.93 MB | 1.79 MB  | 215 kB  | 1.14 MB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.3 ms | 1.17 ms | 67 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2943   | 2943   | 5335   | 5515   | 5088.11 | 727.49  | 2943   | 50874   |
| **Bytes/Sec** | 271 kB | 271 kB | 491 kB | 507 kB | 468 kB  | 66.9 kB | 271 kB | 4.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 15 ms | 7.38 ms | 3.38 ms | 87 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2363   | 2363   | 3381   | 4903   | 3370.9 | 663.81  | 2363   | 33707   |
| **Bytes/Sec** | 272 kB | 272 kB | 389 kB | 564 kB | 388 kB | 76.4 kB | 272 kB | 3.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.37 ms | 17.69 ms | 79 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2515   | 2515   | 5815    | 6095    | 5440.1  | 1033.44 | 2514   | 54396   |
| **Bytes/Sec** | 714 kB | 714 kB | 1.65 MB | 1.73 MB | 1.54 MB | 294 kB  | 714 kB | 15.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 6.86 ms | 2.89 ms | 70 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14935  | 14935  | 24575   | 24927  | 23626.55 | 2777.37 | 14933  | 259882  |
| **Bytes/Sec** | 777 kB | 777 kB | 1.28 MB | 1.3 MB | 1.23 MB  | 144 kB  | 777 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 1.04 ms | 55 ms |


---

<p align="center">Generated 2020-12-08T00:19:00.493Z</p>