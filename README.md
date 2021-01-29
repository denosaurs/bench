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
| **Average** | 9734.6 | 22344.4 | 24540.8 | 8824.21 | 22135.6 | 8787.6 | 39188 | 42262.55 | 18816.41 | 2961 | 5456.1 | 21335.6 | 6424.7 |
| **Total** | 97330 | 223423 | 245402 | 88235 | 221348 | 87868 | 391872 | 464824 | 188161 | 32568 | 54558 | 213346 | 64242 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 6415   | 6415   | 10063  | 10311  | 9734.6 | 1117.8 | 6414   | 97330   |
| **Bytes/Sec** | 597 kB | 597 kB | 936 kB | 959 kB | 905 kB | 104 kB | 597 kB | 9.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.54 ms | 1.71 ms | 37 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 13615   | 13615   | 23215   | 23663   | 22344.4 | 2920.2 | 13615   | 223423  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 2.14 MB | 2.18 MB | 2.06 MB | 268 kB | 1.25 MB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.21 ms | 0.98 ms | 27 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16975  | 16975  | 25503  | 25903   | 24540.8 | 2574.18 | 16969  | 245402  |
| **Bytes/Sec** | 866 kB | 866 kB | 1.3 MB | 1.32 MB | 1.25 MB | 131 kB  | 865 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.78 ms | 32 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6975   | 6975   | 8879   | 9535   | 8824.21 | 671.48  | 6972   | 88235   |
| **Bytes/Sec** | 363 kB | 363 kB | 462 kB | 496 kB | 459 kB  | 34.9 kB | 363 kB | 4.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 4.03 ms | 1.51 ms | 34 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 15975   | 15975   | 22511   | 23583   | 22135.6 | 2129.39 | 15972   | 221348 |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 1.94 MB | 2.03 MB | 1.9 MB  | 183 kB  | 1.37 MB | 19 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.85 ms | 71 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 4131   | 4131   | 9383    | 10063   | 8787.6 | 1663.62 | 4129   | 87868 |
| **Bytes/Sec** | 892 kB | 892 kB | 2.03 MB | 2.17 MB | 1.9 MB | 359 kB  | 892 kB | 19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.06 ms | 1.94 ms | 38 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg   | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ----- | ------- | ------- | ------ |
| **Req/Sec**   | 23871   | 23871   | 40703   | 41567   | 39188 | 5136.57 | 23862   | 391872 |
| **Bytes/Sec** | 3.65 MB | 3.65 MB | 6.23 MB | 6.36 MB | 6 MB  | 786 kB  | 3.65 MB | 60 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.37 ms | 0.74 ms | 24 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 27935   | 27935   | 44159   | 44479   | 42262.55 | 4631.05 | 27924   | 464824  |
| **Bytes/Sec** | 3.13 MB | 3.13 MB | 4.94 MB | 4.98 MB | 4.73 MB  | 518 kB  | 3.13 MB | 52.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.28 ms | 0.64 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13199   | 13199   | 19295   | 20399  | 18816.41 | 1962.11 | 13193   | 188161  |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 1.79 MB | 1.9 MB | 1.75 MB  | 183 kB  | 1.23 MB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.32 ms | 1.05 ms | 38 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2389   | 2389   | 2907   | 3581   | 2961   | 357.7   | 2389   | 32568   |
| **Bytes/Sec** | 275 kB | 275 kB | 334 kB | 412 kB | 340 kB | 41.2 kB | 275 kB | 3.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 13.02 ms | 18.31 ms | 81 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2903   | 2903   | 5755    | 5975   | 5456.1  | 887.35 | 2903   | 54558   |
| **Bytes/Sec** | 825 kB | 825 kB | 1.63 MB | 1.7 MB | 1.55 MB | 252 kB | 824 kB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.86 ms | 3.28 ms | 202 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14695   | 14695   | 21887   | 22495   | 21335.6 | 2233.11 | 14694   | 213346  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.01 MB | 2.07 MB | 1.96 MB | 205 kB  | 1.35 MB | 19.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.25 ms | 0.93 ms | 44 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3809   | 3809   | 6679   | 6983   | 6424.7 | 894.47  | 3808   | 64242   |
| **Bytes/Sec** | 297 kB | 297 kB | 521 kB | 545 kB | 501 kB | 69.7 kB | 297 kB | 5.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.75 ms | 2.59 ms | 112 ms |


---

<p align="center">Generated 2021-01-29T00:22:15.292Z</p>