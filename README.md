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
| **Average** | 8657.4 | 18311.6 | 22373.2 | 13231.2 | 19646.8 | 9131.64 | 18606.91 | 19343.6 | 16380.8 | 3004.28 | 3242.5 | 9623.1 | 7678.8 |
| **Total** | 86566 | 183123 | 223716 | 132308 | 196465 | 100441 | 204684 | 193428 | 163797 | 33045 | 32420 | 105853 | 76776 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5283   | 5283   | 9015   | 9415   | 8657.4 | 1158.89 | 5283   | 86566   |
| **Bytes/Sec** | 492 kB | 492 kB | 838 kB | 876 kB | 805 kB | 108 kB  | 491 kB | 8.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.96 ms | 2.51 ms | 114 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11703   | 11703   | 18511  | 20015   | 18311.6 | 2266.42 | 11700   | 183123  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.7 MB | 1.84 MB | 1.68 MB | 208 kB  | 1.08 MB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.61 ms | 1.29 ms | 55 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15503  | 15503  | 22991   | 23647   | 22373.2 | 2328.02 | 15499  | 223716  |
| **Bytes/Sec** | 791 kB | 791 kB | 1.17 MB | 1.21 MB | 1.14 MB | 119 kB  | 790 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 0.98 ms | 52 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8991   | 8991   | 13623  | 14271  | 13231.2 | 1451    | 8990   | 132308  |
| **Bytes/Sec** | 468 kB | 468 kB | 708 kB | 742 kB | 688 kB  | 75.3 kB | 467 kB | 6.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.31 ms | 1.22 ms | 27 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12943   | 12943   | 20303   | 21327   | 19646.8 | 2320.72 | 12938   | 196465  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.75 MB | 1.84 MB | 1.69 MB | 200 kB  | 1.11 MB | 16.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.35 ms | 1.17 ms | 56 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4203   | 4203   | 9815    | 9975    | 9131.64 | 1658.05 | 4202   | 100441  |
| **Bytes/Sec** | 908 kB | 908 kB | 2.12 MB | 2.15 MB | 1.97 MB | 358 kB  | 908 kB | 21.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.8 ms | 1.93 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8823    | 8823    | 19759   | 20255  | 18606.91 | 3153.04 | 8819    | 204684  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 3.02 MB | 3.1 MB | 2.85 MB  | 483 kB  | 1.35 MB | 31.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.53 ms | 1.37 ms | 32 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10007   | 10007   | 20335   | 20911   | 19343.6 | 3131.51 | 10003   | 193428  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 2.28 MB | 2.34 MB | 2.17 MB | 351 kB  | 1.12 MB | 21.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.53 ms | 1.27 ms | 35 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 10999   | 10999   | 16639   | 18079   | 16380.8 | 1892.6 | 10998   | 163797  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.55 MB | 1.68 MB | 1.52 MB | 176 kB | 1.02 MB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.18 ms | 1.11 ms | 46 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2153   | 2153   | 3085   | 3737   | 3004.28 | 409.46  | 2153   | 33045  |
| **Bytes/Sec** | 248 kB | 248 kB | 355 kB | 430 kB | 345 kB  | 47.1 kB | 248 kB | 3.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.82 ms | 18.24 ms | 96 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1650   | 1650   | 3493   | 3641    | 3242.5 | 599.75 | 1650   | 32420   |
| **Bytes/Sec** | 469 kB | 469 kB | 992 kB | 1.03 MB | 921 kB | 170 kB | 469 kB | 9.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 9 ms  | 10 ms | 22 ms | 11.88 ms | 5.49 ms | 261 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6623   | 6623   | 9983   | 10239  | 9623.1 | 971.9   | 6622   | 105853  |
| **Bytes/Sec** | 609 kB | 609 kB | 918 kB | 942 kB | 885 kB | 89.5 kB | 609 kB | 9.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.6 ms | 1.76 ms | 89 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5039   | 5039   | 7727   | 8367   | 7678.8 | 934.46  | 5039   | 76776   |
| **Bytes/Sec** | 393 kB | 393 kB | 603 kB | 652 kB | 599 kB | 72.8 kB | 393 kB | 5.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.71 ms | 1.68 ms | 58 ms |


---

<p align="center">Generated 2021-03-02T00:18:34.865Z</p>