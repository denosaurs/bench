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
| **Average** | 9009.28 | 25388.37 | 28187.2 | 8274 | 23359.6 | 14332.19 | 33728.73 | 45162.91 | 20942.91 | 2650.4 | 3927.1 | 23202.19 | 8015 |
| **Total** | 99094 | 279269 | 281872 | 82733 | 233601 | 157648 | 370970 | 496805 | 230382 | 26498 | 39261 | 255216 | 80144 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5999   | 5999   | 9271   | 9703   | 9009.28 | 975.97  | 5998   | 99094   |
| **Bytes/Sec** | 558 kB | 558 kB | 862 kB | 902 kB | 838 kB  | 90.7 kB | 558 kB | 9.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4 ms  | 1.85 ms | 99 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17103   | 17103   | 26127  | 26991   | 25388.37 | 2679.78 | 17098   | 279269  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 2.4 MB | 2.48 MB | 2.34 MB  | 246 kB  | 1.57 MB | 25.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.71 ms | 29 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21135   | 21135   | 29023   | 29471  | 28187.2 | 2375.04 | 21133   | 281872  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.48 MB | 1.5 MB | 1.44 MB | 121 kB  | 1.08 MB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.1 ms | 0.67 ms | 31 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 6215   | 6215   | 8535   | 8727   | 8274   | 724.63  | 6212   | 82733  |
| **Bytes/Sec** | 323 kB | 323 kB | 444 kB | 454 kB | 430 kB | 37.7 kB | 323 kB | 4.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.38 ms | 1.67 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16199   | 16199   | 24191   | 24415  | 23359.6 | 2397.88 | 16197   | 233601  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 2.08 MB | 2.1 MB | 2.01 MB | 206 kB  | 1.39 MB | 20.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.78 ms | 59 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5951    | 5951    | 15343   | 15687   | 14332.19 | 2706.36 | 5951    | 157648  |
| **Bytes/Sec** | 1.29 MB | 1.29 MB | 3.32 MB | 3.39 MB | 3.1 MB   | 584 kB  | 1.29 MB | 34.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.26 ms | 1.42 ms | 55 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17839   | 17839   | 35103   | 35839   | 33728.73 | 5037.83 | 17824   | 370970  |
| **Bytes/Sec** | 2.73 MB | 2.73 MB | 5.37 MB | 5.48 MB | 5.16 MB  | 771 kB  | 2.73 MB | 56.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.76 ms | 0.84 ms | 27 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 30271   | 30271   | 46815   | 48415   | 45162.91 | 4871.28 | 30256   | 496805  |
| **Bytes/Sec** | 3.39 MB | 3.39 MB | 5.24 MB | 5.42 MB | 5.06 MB  | 546 kB  | 3.39 MB | 55.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.29 ms | 0.62 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 15303   | 15303   | 21567   | 22015   | 20942.91 | 1817.2 | 15303   | 230382  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2.01 MB | 2.05 MB | 1.95 MB  | 169 kB | 1.42 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.22 ms | 0.96 ms | 63 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1707   | 1707   | 2647   | 3189   | 2650.4 | 369     | 1707   | 26498   |
| **Bytes/Sec** | 196 kB | 196 kB | 305 kB | 367 kB | 305 kB | 42.4 kB | 196 kB | 3.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 51 ms | 14.54 ms | 18.91 ms | 117 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2129   | 2129   | 4143    | 4535    | 3927.1  | 662.92 | 2128   | 39261   |
| **Bytes/Sec** | 605 kB | 605 kB | 1.18 MB | 1.29 MB | 1.12 MB | 188 kB | 604 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 7 ms  | 9 ms  | 18 ms | 9.7 ms | 4.43 ms | 233 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17279   | 17279   | 23807   | 24095   | 23202.19 | 1887.79 | 17266   | 255216  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.19 MB | 2.22 MB | 2.13 MB  | 174 kB  | 1.59 MB | 23.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.76 ms | 56 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4463   | 4463   | 8455   | 8647   | 8015   | 1201.68 | 4463   | 80144   |
| **Bytes/Sec** | 348 kB | 348 kB | 659 kB | 675 kB | 625 kB | 93.7 kB | 348 kB | 6.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.59 ms | 2.15 ms | 84 ms |


---

<p align="center">Generated 2021-01-28T00:24:26.598Z</p>