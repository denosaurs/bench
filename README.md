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
| **Average** | 6966.8 | 19986.8 | 24174.19 | 15139.28 | 21380.73 | 13107.1 | 26301.2 | 41663.28 | 17064.8 | 3197.37 | 4386 | 18548.73 | 9180.6 |
| **Total** | 69657 | 199853 | 265934 | 166523 | 235201 | 144165 | 263009 | 458263 | 170641 | 35166 | 43858 | 204027 | 91806 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4643   | 4643   | 7091   | 7547   | 6966.8 | 803.36  | 4640   | 69657   |
| **Bytes/Sec** | 432 kB | 432 kB | 659 kB | 702 kB | 648 kB | 74.8 kB | 432 kB | 6.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.31 ms | 2.21 ms | 121 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13591   | 13591   | 20783   | 21471   | 19986.8 | 2202.28 | 13589   | 199853  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 1.91 MB | 1.98 MB | 1.84 MB | 203 kB  | 1.25 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.07 ms | 69 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 15423  | 15423  | 25231   | 26031   | 24174.19 | 2882.5 | 15421  | 265934  |
| **Bytes/Sec** | 787 kB | 787 kB | 1.29 MB | 1.33 MB | 1.23 MB  | 147 kB | 786 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.18 ms | 0.92 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11503  | 11503  | 15575  | 15831  | 15139.28 | 1170.1  | 11499  | 166523  |
| **Bytes/Sec** | 598 kB | 598 kB | 810 kB | 823 kB | 787 kB   | 60.9 kB | 598 kB | 8.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.21 ms | 0.95 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14759   | 14759   | 21935   | 23935   | 21380.73 | 2230.36 | 14752   | 235201  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 1.89 MB | 2.06 MB | 1.84 MB  | 192 kB  | 1.27 MB | 20.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.91 ms | 74 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5187    | 5187    | 13967   | 14487   | 13107.1 | 2575.13 | 5184    | 144165  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 3.02 MB | 3.13 MB | 2.83 MB | 556 kB  | 1.12 MB | 31.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.45 ms | 1.56 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14671   | 14671   | 27135   | 29503   | 26301.2 | 4015.52 | 14670   | 263009  |
| **Bytes/Sec** | 2.24 MB | 2.24 MB | 4.15 MB | 4.51 MB | 4.02 MB | 615 kB  | 2.24 MB | 40.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.11 ms | 0.8 ms | 25 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 26911   | 26911   | 43359   | 44127   | 41663.28 | 4787.99 | 26897   | 458263  |
| **Bytes/Sec** | 3.01 MB | 3.01 MB | 4.86 MB | 4.94 MB | 4.67 MB  | 537 kB  | 3.01 MB | 51.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.28 ms | 0.66 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10471  | 10471  | 17727   | 18751   | 17064.8 | 2301.69 | 10470  | 170641  |
| **Bytes/Sec** | 974 kB | 974 kB | 1.65 MB | 1.74 MB | 1.59 MB | 214 kB  | 974 kB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.87 ms | 1.23 ms | 56 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2309   | 2309   | 3197   | 3839   | 3197.37 | 500.32  | 2308   | 35166   |
| **Bytes/Sec** | 265 kB | 265 kB | 368 kB | 442 kB | 368 kB  | 57.6 kB | 265 kB | 4.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ----- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 12 ms | 17.78 ms | 76 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 0     | 0     | 5335    | 5703    | 4386    | 1962.62 | 1148   | 43858   |
| **Bytes/Sec** | 0 B   | 0 B   | 1.51 MB | 1.62 MB | 1.25 MB | 557 kB  | 326 kB | 12.5 MB |


| **Stat**    | 2.5%    | 50%     | 95.5%   | Avg        | Stdev     | Max     |
| ----------- | ------- | ------- | ------- | ---------- | --------- | ------- |
| **Latency** | 1654 ms | 2640 ms | 3137 ms | 2573.55 ms | 340.42 ms | 3308 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12647   | 12647   | 19359   | 20239   | 18548.73 | 1996.03 | 12642   | 204027  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.78 MB | 1.86 MB | 1.71 MB  | 184 kB  | 1.16 MB | 18.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.57 ms | 1.11 ms | 59 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6211   | 6211   | 9575   | 9703   | 9180.6 | 1016.4  | 6210   | 91806   |
| **Bytes/Sec** | 485 kB | 485 kB | 747 kB | 757 kB | 716 kB | 79.2 kB | 484 kB | 7.16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.61 ms | 2.01 ms | 93 ms |


---

<p align="center">Generated 2021-04-06T00:41:56.049Z</p>