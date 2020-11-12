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
| **Average** | 8588.6 | 23028.4 | 18605.1 | 13141.6 | 19040.37 | 8841.71 | 22629.2 | 38729.46 | 16359.2 | 7000.4 | 2740.2 | 3600.4 | 26371.2 |
| **Total** | 85881 | 230267 | 204632 | 131408 | 209446 | 88420 | 226269 | 425994 | 163582 | 69996 | 27399 | 35997 | 263712 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5459   | 5459   | 8943   | 9143   | 8588.6 | 1060.28 | 5457   | 85881   |
| **Bytes/Sec** | 508 kB | 508 kB | 832 kB | 850 kB | 799 kB | 98.6 kB | 508 kB | 7.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.35 ms | 2.05 ms | 111 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14663   | 14663   | 23871  | 24383   | 23028.4 | 2795.04 | 14656   | 230267  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.2 MB | 2.24 MB | 2.12 MB | 257 kB  | 1.35 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 1.09 ms | 66 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12423  | 12423  | 19199  | 21023   | 18605.1 | 2319.46 | 12418  | 204632  |
| **Bytes/Sec** | 633 kB | 633 kB | 979 kB | 1.07 MB | 949 kB  | 118 kB  | 633 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.56 ms | 1.47 ms | 73 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8927   | 8927   | 13511  | 14039  | 13141.6 | 1456.73 | 8926   | 131408  |
| **Bytes/Sec** | 464 kB | 464 kB | 702 kB | 730 kB | 683 kB  | 75.7 kB | 464 kB | 6.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.41 ms | 1.56 ms | 73 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 10343  | 10343  | 19887   | 20239   | 19040.37 | 2759.08 | 10342  | 209446 |
| **Bytes/Sec** | 890 kB | 890 kB | 1.71 MB | 1.74 MB | 1.64 MB  | 237 kB  | 889 kB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.29 ms | 1.43 ms | 132 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3759   | 3759   | 9519    | 10103   | 8841.71 | 1868.12 | 3759   | 88420   |
| **Bytes/Sec** | 812 kB | 812 kB | 2.06 MB | 2.18 MB | 1.91 MB | 404 kB  | 812 kB | 19.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 3.99 ms | 2.56 ms | 76 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10975   | 10975   | 24063   | 24591   | 22629.2 | 3915.07 | 10971   | 226269  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 3.68 MB | 3.76 MB | 3.46 MB | 599 kB  | 1.68 MB | 34.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.28 ms | 1.24 ms | 56 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19727   | 19727   | 41023   | 41759   | 38729.46 | 6141.25 | 19723   | 425994  |
| **Bytes/Sec** | 2.21 MB | 2.21 MB | 4.59 MB | 4.68 MB | 4.34 MB  | 688 kB  | 2.21 MB | 47.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.27 ms | 0.85 ms | 39 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10919   | 10919   | 16911   | 17823   | 16359.2 | 1902.39 | 10912   | 163582  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.57 MB | 1.66 MB | 1.52 MB | 177 kB  | 1.01 MB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.08 ms | 1.27 ms | 61 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4155   | 4155   | 7439   | 7523   | 7000.4 | 1003.76 | 4154   | 69996   |
| **Bytes/Sec** | 382 kB | 382 kB | 685 kB | 692 kB | 644 kB | 92.3 kB | 382 kB | 6.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 5.1 ms | 2.81 ms | 66 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1787   | 1787   | 2699   | 3321   | 2740.2 | 453.09  | 1787   | 27399   |
| **Bytes/Sec** | 206 kB | 206 kB | 311 kB | 382 kB | 315 kB | 52.1 kB | 206 kB | 3.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.09 ms | 18.85 ms | 140 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1965   | 1965   | 3833    | 3961    | 3600.4  | 573.63 | 1965   | 35997   |
| **Bytes/Sec** | 558 kB | 558 kB | 1.09 MB | 1.13 MB | 1.02 MB | 163 kB | 558 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 10 ms | 19 ms | 10.68 ms | 3.86 ms | 105 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19695   | 19695   | 26959  | 27679   | 26371.2 | 2250.38 | 19692   | 263712  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.4 MB | 1.44 MB | 1.37 MB | 117 kB  | 1.02 MB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.73 ms | 42 ms |


---

<p align="center">Generated 2020-11-12T00:18:12.231Z</p>