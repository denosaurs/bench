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
| **Average** | 11005 | 19914.8 | 30368.73 | 8938.1 | 14875.2 | 9956.91 | 22571.28 | 24367.6 | 18401.2 | 2828 | 3534.5 | 24648 | 9548.6 |
| **Total** | 110034 | 199128 | 334070 | 89376 | 148754 | 109503 | 248277 | 243689 | 184029 | 28272 | 35340 | 246480 | 95491 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6983   | 6983   | 11383   | 11671   | 11005   | 1347.91 | 6983   | 110034  |
| **Bytes/Sec** | 650 kB | 650 kB | 1.06 MB | 1.09 MB | 1.02 MB | 125 kB  | 649 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.38 ms | 1.56 ms | 81 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13575   | 13575   | 20431   | 21199   | 19914.8 | 2147.68 | 13570   | 199128  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 1.88 MB | 1.95 MB | 1.83 MB | 197 kB  | 1.25 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.4 ms | 1.16 ms | 59 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 23535  | 23535  | 31023   | 32047   | 30368.73 | 2234.03 | 23530  | 334070 |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.58 MB | 1.63 MB | 1.55 MB  | 114 kB  | 1.2 MB | 17 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.05 ms | 0.53 ms | 33 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3441   | 3441   | 9431   | 9999   | 8938.1 | 1845.92 | 3441   | 89376   |
| **Bytes/Sec** | 179 kB | 179 kB | 490 kB | 520 kB | 465 kB | 96 kB   | 179 kB | 4.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.87 ms | 2.43 ms | 57 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9279   | 9279   | 15287   | 16319  | 14875.2 | 1945.55 | 9278   | 148754  |
| **Bytes/Sec** | 798 kB | 798 kB | 1.31 MB | 1.4 MB | 1.28 MB | 167 kB  | 798 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.23 ms | 1.24 ms | 83 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5159    | 5159    | 10463   | 11151   | 9956.91 | 1557.51 | 5156    | 109503  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 2.26 MB | 2.41 MB | 2.15 MB | 337 kB  | 1.11 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.51 ms | 1.6 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 11775  | 11775  | 23503  | 24767   | 22571.28 | 3462.22 | 11772  | 248277 |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 3.6 MB | 3.79 MB | 3.45 MB  | 530 kB  | 1.8 MB | 38 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.96 ms | 29 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12487  | 12487  | 25247   | 26607   | 24367.6 | 4024.52 | 12482  | 243689  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 2.83 MB | 2.98 MB | 2.73 MB | 451 kB  | 1.4 MB | 27.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.92 ms | 35 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12023   | 12023   | 19071   | 19775   | 18401.2 | 2213.09 | 12017   | 184029  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.77 MB | 1.84 MB | 1.71 MB | 206 kB  | 1.12 MB | 17.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.5 ms | 1.12 ms | 61 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1963   | 1963   | 2845   | 3333   | 2828   | 348.75  | 1963   | 28272   |
| **Bytes/Sec** | 226 kB | 226 kB | 327 kB | 383 kB | 325 kB | 40.1 kB | 226 kB | 3.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.61 ms | 18.51 ms | 107 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 1858   | 1858   | 3813    | 3961    | 3534.5 | 618.19 | 1858   | 35340 |
| **Bytes/Sec** | 528 kB | 528 kB | 1.08 MB | 1.13 MB | 1 MB   | 176 kB | 528 kB | 10 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------ | ------ |
| **Latency** | 8 ms  | 10 ms | 20 ms | 10.81 ms | 5.2 ms | 258 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17535   | 17535   | 25535   | 25807   | 24648   | 2408.97 | 17530   | 246480  |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 2.35 MB | 2.37 MB | 2.27 MB | 221 kB  | 1.61 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.78 ms | 39 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5779   | 5779   | 9911   | 10375  | 9548.6 | 1288.31 | 5776   | 95491   |
| **Bytes/Sec** | 451 kB | 451 kB | 773 kB | 809 kB | 745 kB | 101 kB  | 451 kB | 7.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.67 ms | 1.89 ms | 92 ms |


---

<p align="center">Generated 2021-02-16T00:18:28.805Z</p>