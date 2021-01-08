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
| **Average** | 7279.2 | 21435.28 | 23522 | 13510.91 | 19073.1 | 13279.8 | 20564 | 33600 | 15312.4 | 2713.6 | 5432.7 | 25625.6 | 8340.19 |
| **Total** | 72784 | 235784 | 235200 | 148601 | 209800 | 132801 | 226226 | 369607 | 153100 | 27133 | 54324 | 256237 | 91738 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5031   | 5031   | 7531   | 7743   | 7279.2 | 781.94  | 5029   | 72784   |
| **Bytes/Sec** | 468 kB | 468 kB | 700 kB | 720 kB | 677 kB | 72.8 kB | 468 kB | 6.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.99 ms | 2.23 ms | 98 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13055  | 13055  | 22239   | 22511   | 21435.28 | 2656.56 | 13051  | 235784  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 2.05 MB | 2.07 MB | 1.97 MB  | 244 kB  | 1.2 MB | 21.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.21 ms | 1.02 ms | 49 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 14975  | 14975  | 24639   | 25471  | 23522  | 2967.31 | 14969  | 235200 |
| **Bytes/Sec** | 764 kB | 764 kB | 1.26 MB | 1.3 MB | 1.2 MB | 151 kB  | 763 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.21 ms | 1.03 ms | 53 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9791   | 9791   | 13943  | 14143  | 13510.91 | 1200.61 | 9791   | 148601  |
| **Bytes/Sec** | 509 kB | 509 kB | 725 kB | 736 kB | 703 kB   | 62.4 kB | 509 kB | 7.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.29 ms | 1.11 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 10735  | 10735  | 20255   | 20479   | 19073.1 | 2702.64 | 10732  | 209800 |
| **Bytes/Sec** | 923 kB | 923 kB | 1.74 MB | 1.76 MB | 1.64 MB | 232 kB  | 923 kB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.17 ms | 66 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5131    | 5131    | 14263   | 14999   | 13279.8 | 2814.24 | 5128    | 132801  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 3.08 MB | 3.24 MB | 2.87 MB | 608 kB  | 1.11 MB | 28.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.45 ms | 1.6 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9679    | 9679    | 22031   | 22799   | 20564   | 3553.88 | 9678    | 226226  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.37 MB | 3.49 MB | 3.15 MB | 544 kB  | 1.48 MB | 34.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.44 ms | 1.25 ms | 24 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19119   | 19119   | 34463   | 36959   | 33600   | 4767.61 | 19118   | 369607  |
| **Bytes/Sec** | 2.14 MB | 2.14 MB | 3.86 MB | 4.14 MB | 3.76 MB | 534 kB  | 2.14 MB | 41.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.57 ms | 0.9 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10015  | 10015  | 15967   | 16415   | 15312.4 | 1831.76 | 10012  | 153100  |
| **Bytes/Sec** | 931 kB | 931 kB | 1.48 MB | 1.53 MB | 1.42 MB | 170 kB  | 931 kB | 14.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.27 ms | 80 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1583   | 1583   | 2707   | 3405   | 2713.6 | 479.59  | 1583   | 27133   |
| **Bytes/Sec** | 182 kB | 182 kB | 311 kB | 392 kB | 312 kB | 55.2 kB | 182 kB | 3.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.23 ms | 18.78 ms | 97 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2529   | 2529   | 5811    | 5963    | 5432.7  | 1007.14 | 2529   | 54324   |
| **Bytes/Sec** | 718 kB | 718 kB | 1.65 MB | 1.69 MB | 1.54 MB | 286 kB  | 718 kB | 15.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 15 ms | 6.94 ms | 2.87 ms | 71 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 19567  | 19567  | 26207   | 26607   | 25625.6 | 2043.39 | 19552  | 256237  |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 2.41 MB | 2.45 MB | 2.36 MB | 188 kB  | 1.8 MB | 23.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.75 ms | 39 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5207   | 5207   | 8655   | 9151   | 8340.19 | 1011.03 | 5205   | 91738   |
| **Bytes/Sec** | 406 kB | 406 kB | 675 kB | 714 kB | 651 kB  | 78.9 kB | 406 kB | 7.16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.42 ms | 1.92 ms | 97 ms |


---

<p align="center">Generated 2021-01-08T00:33:59.132Z</p>