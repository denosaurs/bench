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
| **Average** | 8310.4 | 24837.1 | 23066.8 | 13347.28 | 18974.91 | 14420.55 | 34501.1 | 33445.1 | 19303.6 | 7198.3 | 3066.1 | 5017.55 | 25749.1 |
| **Total** | 83109 | 273217 | 230692 | 146818 | 208694 | 158625 | 379536 | 367914 | 193042 | 71979 | 30659 | 55184 | 283231 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4383   | 4383   | 8735   | 8999   | 8310.4 | 1326.71 | 4382   | 83109   |
| **Bytes/Sec** | 408 kB | 408 kB | 813 kB | 837 kB | 773 kB | 123 kB  | 408 kB | 7.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.55 ms | 2.42 ms | 82 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16975   | 16975   | 25647   | 26127  | 24837.1 | 2522.61 | 16975   | 273217  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 2.36 MB | 2.4 MB | 2.28 MB | 232 kB  | 1.56 MB | 25.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.13 ms | 0.84 ms | 55 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15095  | 15095  | 23519  | 25359   | 23066.8 | 2802.83 | 15093  | 230692  |
| **Bytes/Sec** | 770 kB | 770 kB | 1.2 MB | 1.29 MB | 1.18 MB | 143 kB  | 770 kB | 11.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.27 ms | 1.02 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9071   | 9071   | 13791  | 13983  | 13347.28 | 1362.8  | 9071   | 146818  |
| **Bytes/Sec** | 472 kB | 472 kB | 717 kB | 728 kB | 694 kB   | 70.8 kB | 472 kB | 7.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.37 ms | 1.48 ms | 64 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12455   | 12455   | 19839   | 20319   | 18974.91 | 2153.51 | 12453   | 208694  |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 1.71 MB | 1.75 MB | 1.63 MB  | 185 kB  | 1.07 MB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.52 ms | 70 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5627    | 5627    | 15527   | 15727  | 14420.55 | 2847.82 | 5625    | 158625  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 3.35 MB | 3.4 MB | 3.11 MB  | 615 kB  | 1.22 MB | 34.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.26 ms | 1.46 ms | 59 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17567   | 17567   | 36287   | 36831   | 34501.1 | 5394.69 | 17562   | 379536  |
| **Bytes/Sec** | 2.69 MB | 2.69 MB | 5.55 MB | 5.63 MB | 5.28 MB | 825 kB  | 2.69 MB | 58.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.98 ms | 0.8 ms | 54 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17007   | 17007   | 33983   | 39455   | 33445.1 | 5765.46 | 17007  | 367914  |
| **Bytes/Sec** | 1.91 MB | 1.91 MB | 3.81 MB | 4.42 MB | 3.75 MB | 645 kB  | 1.9 MB | 41.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.62 ms | 1.01 ms | 39 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 12919  | 12919  | 19807   | 20751   | 19303.6 | 2182.29 | 12916  | 193042 |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.84 MB | 1.93 MB | 1.8 MB  | 203 kB  | 1.2 MB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.13 ms | 41 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4085   | 4085   | 7571   | 7723   | 7198.3 | 1054.45 | 4085   | 71979   |
| **Bytes/Sec** | 376 kB | 376 kB | 697 kB | 711 kB | 662 kB | 97 kB   | 376 kB | 6.62 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.86 ms | 2.49 ms | 63 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2089   | 2089   | 2983   | 4099   | 3066.1 | 506.26  | 2089   | 30659   |
| **Bytes/Sec** | 240 kB | 240 kB | 343 kB | 472 kB | 353 kB | 58.3 kB | 240 kB | 3.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.56 ms | 18.25 ms | 115 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2413   | 2413   | 5375    | 5627   | 5017.55 | 886.58 | 2413   | 55184   |
| **Bytes/Sec** | 686 kB | 686 kB | 1.53 MB | 1.6 MB | 1.42 MB | 252 kB | 685 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.52 ms | 3.22 ms | 94 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19439   | 19439   | 26159   | 28095   | 25749.1 | 2156.91 | 19433   | 283231  |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.36 MB | 1.46 MB | 1.34 MB | 112 kB  | 1.01 MB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.86 ms | 40 ms |


---

<p align="center">Generated 2020-12-07T00:20:30.597Z</p>