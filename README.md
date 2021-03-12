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
| **Average** | 6470 | 25884.37 | 21211.6 | 9091.82 | 21087.6 | 8983.6 | 33142.55 | 24965.2 | 15871.64 | 3170.6 | 4475.3 | 10812.6 | 11864.8 |
| **Total** | 64695 | 284739 | 212092 | 100005 | 210885 | 89837 | 364600 | 249639 | 174568 | 31704 | 44745 | 108118 | 118635 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4587   | 4587   | 6547   | 7071   | 6470   | 702.44  | 4585   | 64695   |
| **Bytes/Sec** | 426 kB | 426 kB | 609 kB | 658 kB | 602 kB | 65.4 kB | 426 kB | 6.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.72 ms | 2.14 ms | 61 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18879   | 18879   | 26447   | 27519   | 25884.37 | 2267.96 | 18866   | 284739  |
| **Bytes/Sec** | 1.74 MB | 1.74 MB | 2.43 MB | 2.53 MB | 2.38 MB  | 209 kB  | 1.74 MB | 26.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.76 ms | 32 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14047  | 14047  | 21887   | 23071   | 21211.6 | 2452.14 | 14041  | 212092  |
| **Bytes/Sec** | 716 kB | 716 kB | 1.12 MB | 1.18 MB | 1.08 MB | 125 kB  | 716 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.16 ms | 48 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 6707   | 6707   | 9375   | 9583   | 9091.82 | 767.68 | 6705   | 100005 |
| **Bytes/Sec** | 349 kB | 349 kB | 487 kB | 498 kB | 473 kB  | 40 kB  | 349 kB | 5.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 3.86 ms | 1.55 ms | 40 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14215   | 14215   | 21343   | 23999   | 21087.6 | 2464.34 | 14212   | 210885  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 1.84 MB | 2.06 MB | 1.81 MB | 212 kB  | 1.22 MB | 18.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.3 ms | 0.87 ms | 50 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4243   | 4243   | 9647    | 9839    | 8983.6  | 1670.89 | 4242   | 89837   |
| **Bytes/Sec** | 916 kB | 916 kB | 2.08 MB | 2.13 MB | 1.94 MB | 361 kB  | 916 kB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.84 ms | 2.1 ms | 55 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16799   | 16799   | 34943   | 35487   | 33142.55 | 5209.14 | 16792   | 364600  |
| **Bytes/Sec** | 2.57 MB | 2.57 MB | 5.35 MB | 5.43 MB | 5.07 MB  | 797 kB  | 2.57 MB | 55.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.94 ms | 0.81 ms | 22 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 15551   | 15551   | 25855  | 27167   | 24965.2 | 3192.14 | 15547   | 249639 |
| **Bytes/Sec** | 1.74 MB | 1.74 MB | 2.9 MB | 3.04 MB | 2.8 MB  | 357 kB  | 1.74 MB | 28 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.85 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9967   | 9967   | 16511   | 16975   | 15871.64 | 1919.96 | 9963   | 174568  |
| **Bytes/Sec** | 927 kB | 927 kB | 1.53 MB | 1.58 MB | 1.48 MB  | 179 kB  | 927 kB | 16.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.33 ms | 70 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2181   | 2181   | 3063   | 3855   | 3170.6 | 471.93  | 2181   | 31704   |
| **Bytes/Sec** | 251 kB | 251 kB | 352 kB | 443 kB | 365 kB | 54.3 kB | 251 kB | 3.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev | Max   |
| ----------- | ----- | ----- | ----- | -------- | ----- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.13 ms | 18 ms | 70 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2639   | 2639   | 4651    | 4807    | 4475.3  | 623.52 | 2638   | 44745   |
| **Bytes/Sec** | 750 kB | 750 kB | 1.32 MB | 1.37 MB | 1.27 MB | 177 kB | 749 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 15 ms | 8.43 ms | 3.15 ms | 171 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7819   | 7819   | 11167   | 11479   | 10812.6 | 1017.62 | 7816   | 108118  |
| **Bytes/Sec** | 719 kB | 719 kB | 1.03 MB | 1.06 MB | 995 kB  | 93.7 kB | 719 kB | 9.95 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.24 ms | 1.24 ms | 81 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8567   | 8567   | 12207  | 12519  | 11864.8 | 1107.85 | 8561   | 118635  |
| **Bytes/Sec** | 668 kB | 668 kB | 952 kB | 976 kB | 925 kB  | 86.4 kB | 668 kB | 9.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.81 ms | 1.57 ms | 36 ms |


---

<p align="center">Generated 2021-03-12T00:19:14.047Z</p>