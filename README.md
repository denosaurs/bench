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
| **Average** | 7141.3 | 18566.8 | 18987.28 | 9657.8 | 16057.1 | 7861.1 | 20201.82 | 21787.6 | 19633.1 | 2994 | 3675.3 | 18699.28 | 7665 |
| **Total** | 71405 | 185663 | 208824 | 96571 | 176620 | 78610 | 222220 | 217854 | 215944 | 29935 | 36749 | 205685 | 76644 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3971   | 3971   | 7455   | 7683   | 7141.3 | 1064.9 | 3970   | 71405   |
| **Bytes/Sec** | 369 kB | 369 kB | 693 kB | 715 kB | 664 kB | 99 kB  | 369 kB | 6.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 5.08 ms | 2.51 ms | 102 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11583   | 11583   | 19199   | 19935   | 18566.8 | 2352.87 | 11579   | 185663  |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 1.77 MB | 1.83 MB | 1.71 MB | 216 kB  | 1.07 MB | 17.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.44 ms | 1.2 ms | 74 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 12639  | 12639  | 19519  | 20303   | 18987.28 | 2042.74 | 12636  | 208824  |
| **Bytes/Sec** | 645 kB | 645 kB | 995 kB | 1.04 MB | 968 kB   | 104 kB  | 644 kB | 10.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.46 ms | 1.22 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7047   | 7047   | 9959   | 10063  | 9657.8 | 874.17  | 7045   | 96571   |
| **Bytes/Sec** | 367 kB | 367 kB | 518 kB | 524 kB | 502 kB | 45.4 kB | 366 kB | 5.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.58 ms | 1.49 ms | 32 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10519  | 10519  | 16447   | 17727   | 16057.1 | 1863.61 | 10512  | 176620  |
| **Bytes/Sec** | 904 kB | 904 kB | 1.41 MB | 1.52 MB | 1.38 MB | 160 kB  | 904 kB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.09 ms | 1.36 ms | 79 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 3759   | 3759   | 8327   | 8839    | 7861.1 | 1434.53 | 3759   | 78610 |
| **Bytes/Sec** | 812 kB | 812 kB | 1.8 MB | 1.91 MB | 1.7 MB | 310 kB  | 812 kB | 17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.61 ms | 2.2 ms | 54 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 10047   | 10047   | 21247   | 21839   | 20201.82 | 3246.75 | 10041   | 222220 |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 3.25 MB | 3.34 MB | 3.09 MB  | 497 kB  | 1.54 MB | 34 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.47 ms | 1.21 ms | 27 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11359   | 11359   | 22863   | 24383   | 21787.6 | 3615.64 | 11356   | 217854  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 2.56 MB | 2.73 MB | 2.44 MB | 405 kB  | 1.27 MB | 24.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.23 ms | 36 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 12943  | 12943  | 20559   | 20799   | 19633.1 | 2172.8 | 12936  | 215944  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.91 MB | 1.93 MB | 1.83 MB | 202 kB | 1.2 MB | 20.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 1.06 ms | 45 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1985   | 1985   | 2925   | 3783   | 2994   | 523     | 1985   | 29935   |
| **Bytes/Sec** | 228 kB | 228 kB | 336 kB | 435 kB | 344 kB | 60.1 kB | 228 kB | 3.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.88 ms | 18.21 ms | 88 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1865   | 1865   | 3997    | 4099    | 3675.3  | 678.34 | 1865   | 36749   |
| **Bytes/Sec** | 530 kB | 530 kB | 1.14 MB | 1.16 MB | 1.04 MB | 193 kB | 530 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 9 ms  | 20 ms | 10.43 ms | 3.91 ms | 87 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12703   | 12703   | 19279   | 19727   | 18699.28 | 1924.47 | 12702   | 205685  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.77 MB | 1.81 MB | 1.72 MB  | 177 kB  | 1.17 MB | 18.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.49 ms | 1.19 ms | 32 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4527   | 4527   | 8107   | 8239   | 7665   | 1074.07 | 4525   | 76644   |
| **Bytes/Sec** | 353 kB | 353 kB | 632 kB | 643 kB | 598 kB | 83.8 kB | 353 kB | 5.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.7 ms | 2.34 ms | 101 ms |


---

<p align="center">Generated 2020-12-20T00:18:53.756Z</p>