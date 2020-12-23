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
| **Average** | 6068.3 | 22202 | 22352.37 | 17760 | 20593.1 | 8710.5 | 35141.46 | 26463.6 | 21502.19 | 3251.7 | 5062.9 | 26045.82 | 7766.8 |
| **Total** | 60673 | 222013 | 245884 | 195362 | 226516 | 87098 | 386500 | 264627 | 236507 | 32514 | 50618 | 286500 | 77666 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3001   | 3001   | 6451   | 6683   | 6068.3 | 1055.32 | 3000   | 60673   |
| **Bytes/Sec** | 279 kB | 279 kB | 600 kB | 622 kB | 564 kB | 98.2 kB | 279 kB | 5.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 4 ms  | 5 ms  | 14 ms | 6.14 ms | 3 ms  | 47 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15055   | 15055   | 22975   | 23439   | 22202   | 2407.06 | 15054   | 222013  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 2.11 MB | 2.16 MB | 2.04 MB | 221 kB  | 1.38 MB | 20.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.95 ms | 72 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15415  | 15415  | 22943   | 24335   | 22352.37 | 2361.94 | 15411  | 245884  |
| **Bytes/Sec** | 786 kB | 786 kB | 1.17 MB | 1.24 MB | 1.14 MB  | 120 kB  | 786 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 0.89 ms | 53 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 14959  | 14959  | 17871  | 19119  | 17760  | 1215.67 | 14953  | 195362  |
| **Bytes/Sec** | 778 kB | 778 kB | 929 kB | 994 kB | 924 kB | 63.3 kB | 778 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.71 ms | 0.91 ms | 22 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15167  | 15167  | 20767   | 22495   | 20593.1 | 1819.76 | 15165  | 226516  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 1.79 MB | 1.93 MB | 1.77 MB | 156 kB  | 1.3 MB | 19.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.33 ms | 0.93 ms | 71 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4091   | 4091   | 9159    | 10055   | 8710.5  | 1745.53 | 4091   | 87098   |
| **Bytes/Sec** | 884 kB | 884 kB | 1.98 MB | 2.17 MB | 1.88 MB | 377 kB  | 884 kB | 18.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.06 ms | 2.03 ms | 43 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16191   | 16191   | 36863   | 38367   | 35141.46 | 6031.15 | 16184   | 386500  |
| **Bytes/Sec** | 2.48 MB | 2.48 MB | 5.64 MB | 5.87 MB | 5.38 MB  | 922 kB  | 2.48 MB | 59.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.42 ms | 0.96 ms | 58 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14983   | 14983   | 27775   | 28111   | 26463.6 | 3837.24 | 14977   | 264627  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 3.11 MB | 3.15 MB | 2.96 MB | 430 kB  | 1.68 MB | 29.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.06 ms | 0.89 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 15599   | 15599   | 22095   | 22895   | 21502.19 | 1891.74 | 15597   | 236507 |
| **Bytes/Sec** | 1.45 MB | 1.45 MB | 2.05 MB | 2.13 MB | 2 MB     | 176 kB  | 1.45 MB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.84 ms | 41 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1876   | 1876   | 3221   | 4077   | 3251.7 | 561.58  | 1876   | 32514   |
| **Bytes/Sec** | 216 kB | 216 kB | 370 kB | 469 kB | 374 kB | 64.6 kB | 216 kB | 3.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 11.81 ms | 17.83 ms | 83 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2459   | 2459   | 5455    | 5627   | 5062.9  | 952.55 | 2458   | 50618   |
| **Bytes/Sec** | 698 kB | 698 kB | 1.55 MB | 1.6 MB | 1.44 MB | 270 kB | 698 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.38 ms | 3.63 ms | 193 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19295   | 19295   | 26639   | 27167  | 26045.82 | 2157.56 | 19295   | 286500  |
| **Bytes/Sec** | 1.78 MB | 1.78 MB | 2.45 MB | 2.5 MB | 2.4 MB   | 198 kB  | 1.78 MB | 26.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.71 ms | 50 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4603   | 4603   | 8123   | 8391   | 7766.8 | 1075.16 | 4602   | 77666   |
| **Bytes/Sec** | 359 kB | 359 kB | 634 kB | 654 kB | 606 kB | 83.9 kB | 359 kB | 6.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.68 ms | 2.31 ms | 105 ms |


---

<p align="center">Generated 2020-12-23T12:51:22.623Z</p>