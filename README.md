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
| **Average** | 7392.8 | 22218.55 | 23423.64 | 8930.6 | 18923.6 | 8296.82 | 34888.81 | 35551.2 | 15998.91 | 2859.2 | 4511.11 | 11763.2 | 6955.2 |
| **Total** | 73923 | 244408 | 257656 | 89303 | 189240 | 91260 | 348888 | 355527 | 175968 | 28588 | 45105 | 117620 | 69553 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4427   | 4427   | 7691   | 8171   | 7392.8 | 1044.52 | 4425   | 73923   |
| **Bytes/Sec** | 412 kB | 412 kB | 715 kB | 760 kB | 687 kB | 97.2 kB | 412 kB | 6.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.93 ms | 2.47 ms | 126 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15191  | 15191  | 23071   | 23935  | 22218.55 | 2373.29 | 15186  | 244408  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 2.12 MB | 2.2 MB | 2.04 MB  | 218 kB  | 1.4 MB | 22.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.23 ms | 0.92 ms | 47 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 16015  | 16015  | 24095   | 24799   | 23423.64 | 2381   | 16010  | 257656  |
| **Bytes/Sec** | 817 kB | 817 kB | 1.23 MB | 1.26 MB | 1.19 MB  | 121 kB | 817 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.21 ms | 0.94 ms | 31 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6287   | 6287   | 9239   | 9447   | 8930.6 | 893.78  | 6287   | 89303   |
| **Bytes/Sec** | 327 kB | 327 kB | 480 kB | 491 kB | 464 kB | 46.4 kB | 327 kB | 4.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.1 ms | 1.52 ms | 32 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11615  | 11615  | 19551   | 20287   | 18923.6 | 2464.17 | 11614  | 189240  |
| **Bytes/Sec** | 999 kB | 999 kB | 1.68 MB | 1.74 MB | 1.63 MB | 212 kB  | 999 kB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.14 ms | 59 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3955   | 3955   | 8767    | 9439    | 8296.82 | 1478.53 | 3955   | 91260   |
| **Bytes/Sec** | 855 kB | 855 kB | 1.89 MB | 2.04 MB | 1.79 MB | 319 kB  | 854 kB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 11 ms | 4.33 ms | 2.22 ms | 58 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18767   | 18767   | 36607  | 37183   | 34888.81 | 5383.39 | 18767   | 348888  |
| **Bytes/Sec** | 2.87 MB | 2.87 MB | 5.6 MB | 5.69 MB | 5.34 MB  | 823 kB  | 2.87 MB | 53.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.55 ms | 0.81 ms | 25 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21039   | 21039   | 37471  | 37663   | 35551.2 | 4876.11 | 21027   | 355527  |
| **Bytes/Sec** | 2.36 MB | 2.36 MB | 4.2 MB | 4.22 MB | 3.98 MB | 547 kB  | 2.36 MB | 39.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.55 ms | 0.86 ms | 53 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11167   | 11167   | 16463   | 18335  | 15998.91 | 1882.41 | 11160   | 175968  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.53 MB | 1.7 MB | 1.49 MB  | 175 kB  | 1.04 MB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.05 ms | 1.24 ms | 69 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1929   | 1929   | 2931   | 3321   | 2859.2 | 368.05  | 1929   | 28588   |
| **Bytes/Sec** | 222 kB | 222 kB | 337 kB | 382 kB | 329 kB | 42.3 kB | 222 kB | 3.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.51 ms | 18.45 ms | 95 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2277   | 2277   | 4755    | 4987    | 4511.11 | 775.79 | 2277   | 45105   |
| **Bytes/Sec** | 647 kB | 647 kB | 1.35 MB | 1.42 MB | 1.28 MB | 220 kB | 647 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 17 ms | 8.42 ms | 4.18 ms | 219 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8863   | 8863   | 11943  | 12655   | 11763.2 | 1003.44 | 8862   | 117620  |
| **Bytes/Sec** | 816 kB | 816 kB | 1.1 MB | 1.16 MB | 1.08 MB | 92.2 kB | 815 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.97 ms | 1.21 ms | 69 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4447   | 4447   | 7251   | 7411   | 6955.2 | 855.92  | 4447   | 69553   |
| **Bytes/Sec** | 347 kB | 347 kB | 566 kB | 578 kB | 542 kB | 66.7 kB | 347 kB | 5.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max    |
| ----------- | ----- | ----- | ----- | ------- | ----- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.29 ms | 2 ms  | 102 ms |


---

<p align="center">Generated 2021-02-28T00:18:54.156Z</p>