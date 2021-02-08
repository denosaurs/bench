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
| **Average** | 9265 | 21168.4 | 22361.2 | 13092 | 16549.82 | 14518.73 | 32846.55 | 37269.1 | 16118.19 | 2738.7 | 3613.2 | 19330.8 | 7450.4 |
| **Total** | 92648 | 211666 | 223593 | 143995 | 182049 | 159702 | 361288 | 410000 | 177278 | 27383 | 36129 | 193319 | 74501 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5703   | 5703   | 9615   | 9951   | 9265   | 1206.76 | 5701   | 92648   |
| **Bytes/Sec** | 530 kB | 530 kB | 894 kB | 925 kB | 862 kB | 112 kB  | 530 kB | 8.62 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.66 ms | 1.98 ms | 91 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 13599   | 13599   | 21919   | 22639   | 21168.4 | 2562.1 | 13592   | 211666  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 2.02 MB | 2.08 MB | 1.95 MB | 236 kB | 1.25 MB | 19.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.29 ms | 1.07 ms | 80 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 14295  | 14295  | 22959   | 24639   | 22361.2 | 2820.4 | 14288  | 223593  |
| **Bytes/Sec** | 729 kB | 729 kB | 1.17 MB | 1.26 MB | 1.14 MB | 144 kB | 729 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.3 ms | 1.09 ms | 49 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 9231   | 9231   | 13471  | 13727  | 13092  | 1234.19 | 9227   | 143995  |
| **Bytes/Sec** | 480 kB | 480 kB | 701 kB | 714 kB | 681 kB | 64.2 kB | 480 kB | 7.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.2 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10287  | 10287  | 17055   | 18047   | 16549.82 | 2038.86 | 10282  | 182049  |
| **Bytes/Sec** | 885 kB | 885 kB | 1.47 MB | 1.55 MB | 1.42 MB  | 175 kB  | 884 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.07 ms | 1.07 ms | 74 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5795    | 5795    | 15599   | 15727  | 14518.73 | 2818.93 | 5794    | 159702  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 3.37 MB | 3.4 MB | 3.14 MB  | 609 kB  | 1.25 MB | 34.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.28 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17535   | 17535   | 34143   | 35839   | 32846.55 | 4968.78 | 17534   | 361288  |
| **Bytes/Sec** | 2.68 MB | 2.68 MB | 5.22 MB | 5.48 MB | 5.02 MB  | 760 kB  | 2.68 MB | 55.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.69 ms | 0.88 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20719   | 20719   | 39135   | 39679   | 37269.1 | 5335.44 | 20712   | 410000  |
| **Bytes/Sec** | 2.32 MB | 2.32 MB | 4.39 MB | 4.44 MB | 4.17 MB | 598 kB  | 2.32 MB | 45.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.41 ms | 0.77 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11095   | 11095   | 16655   | 17375   | 16118.19 | 1665.72 | 11092   | 177278  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.55 MB | 1.61 MB | 1.5 MB   | 155 kB  | 1.03 MB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.06 ms | 1.31 ms | 77 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1950   | 1950   | 2735   | 3107   | 2738.7 | 333.87  | 1950   | 27383   |
| **Bytes/Sec** | 224 kB | 224 kB | 315 kB | 357 kB | 315 kB | 38.4 kB | 224 kB | 3.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 14.09 ms | 18.62 ms | 90 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1951   | 1951   | 3845    | 4041    | 3613.2  | 616.38 | 1951   | 36129   |
| **Bytes/Sec** | 554 kB | 554 kB | 1.09 MB | 1.15 MB | 1.03 MB | 175 kB | 554 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 10 ms | 19 ms | 10.57 ms | 4.95 ms | 255 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13303   | 13303   | 20159   | 20911   | 19330.8 | 2137.85 | 13297   | 193319  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 1.85 MB | 1.92 MB | 1.78 MB | 197 kB  | 1.22 MB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.43 ms | 1.06 ms | 44 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4179   | 4179   | 7675   | 8591   | 7450.4 | 1153.12 | 4179   | 74501   |
| **Bytes/Sec** | 326 kB | 326 kB | 599 kB | 670 kB | 581 kB | 89.9 kB | 326 kB | 5.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.93 ms | 2.46 ms | 111 ms |


---

<p align="center">Generated 2021-02-08T00:25:46.322Z</p>