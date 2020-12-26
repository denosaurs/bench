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
| **Average** | 6143.5 | 20475.28 | 21156.8 | 8862.19 | 18256.37 | 12978 | 26583.6 | 22807.6 | 19649.2 | 2599.4 | 5569.5 | 23832.37 | 7838.8 |
| **Total** | 61432 | 225229 | 211557 | 97483 | 200825 | 142745 | 265838 | 228052 | 196482 | 25989 | 55688 | 262161 | 78377 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3509   | 3509   | 6439   | 6963   | 6143.5 | 946.97  | 3509   | 61432   |
| **Bytes/Sec** | 326 kB | 326 kB | 599 kB | 648 kB | 571 kB | 88.1 kB | 326 kB | 5.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 6.11 ms | 2.97 ms | 140 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13615   | 13615   | 21135   | 21359   | 20475.28 | 2173.16 | 13613   | 225229  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 1.94 MB | 1.97 MB | 1.88 MB  | 200 kB  | 1.25 MB | 20.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.92 ms | 52 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17375  | 17375  | 21071   | 22831   | 21156.8 | 1486.47 | 17363  | 211557  |
| **Bytes/Sec** | 886 kB | 886 kB | 1.07 MB | 1.16 MB | 1.08 MB | 75.9 kB | 886 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.33 ms | 1.14 ms | 50 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6995   | 6995   | 9127   | 9551   | 8862.19 | 732.93  | 6992   | 97483   |
| **Bytes/Sec** | 364 kB | 364 kB | 475 kB | 497 kB | 461 kB  | 38.1 kB | 364 kB | 5.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 4.02 ms | 1.71 ms | 43 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12887   | 12887   | 18559  | 20495   | 18256.37 | 1865.66 | 12885   | 200825  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.6 MB | 1.76 MB | 1.57 MB  | 160 kB  | 1.11 MB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.64 ms | 1.1 ms | 58 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- |
| **Req/Sec**   | 5215    | 5215    | 13671   | 14983   | 12978  | 2536.35 | 5213    | 142745  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 2.95 MB | 3.24 MB | 2.8 MB | 548 kB  | 1.13 MB | 30.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.53 ms | 1.68 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 14919   | 14919   | 28095  | 28799   | 26583.6 | 3963.1 | 14913   | 265838  |
| **Bytes/Sec** | 2.28 MB | 2.28 MB | 4.3 MB | 4.41 MB | 4.07 MB | 606 kB | 2.28 MB | 40.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.08 ms | 0.91 ms | 19 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11975   | 11975   | 23983   | 24591   | 22807.6 | 3640.79 | 11969   | 228052  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 2.68 MB | 2.75 MB | 2.55 MB | 408 kB  | 1.34 MB | 25.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.27 ms | 1.08 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13559   | 13559   | 20255   | 20735   | 19649.2 | 2041.69 | 13558   | 196482  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 1.88 MB | 1.93 MB | 1.83 MB | 190 kB  | 1.26 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 1.17 ms | 89 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1743   | 1743   | 2671   | 2957   | 2599.4 | 343.96  | 1743   | 25989   |
| **Bytes/Sec** | 200 kB | 200 kB | 307 kB | 340 kB | 299 kB | 39.5 kB | 200 kB | 2.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | ------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 52 ms | 14.9 ms | 18.98 ms | 123 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2757   | 2757   | 5939    | 6063    | 5569.5  | 979.28 | 2757   | 55688   |
| **Bytes/Sec** | 783 kB | 783 kB | 1.69 MB | 1.72 MB | 1.58 MB | 278 kB | 783 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.8 ms | 3.05 ms | 184 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16239   | 16239   | 24223   | 25407   | 23832.37 | 2452.85 | 16235   | 262161  |
| **Bytes/Sec** | 1.49 MB | 1.49 MB | 2.23 MB | 2.34 MB | 2.19 MB  | 226 kB  | 1.49 MB | 24.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.99 ms | 51 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4895   | 4895   | 8199   | 8487   | 7838.8 | 998.89  | 4893   | 78377   |
| **Bytes/Sec** | 382 kB | 382 kB | 639 kB | 662 kB | 611 kB | 77.9 kB | 382 kB | 6.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.68 ms | 2.23 ms | 104 ms |


---

<p align="center">Generated 2020-12-26T00:23:28.433Z</p>