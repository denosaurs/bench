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
| **Average** | 7213.2 | 19121.82 | 21462 | 8065.46 | 19376.41 | 16697.64 | 36484 | 28278.4 | 16908.41 | 2982 | 4567.11 | 12249.1 | 5596.9 |
| **Total** | 72124 | 210325 | 214626 | 88712 | 193788 | 183672 | 364848 | 282811 | 169081 | 29816 | 45665 | 134735 | 55958 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4995   | 4995   | 7443   | 7639   | 7213.2 | 745.85  | 4993   | 72124   |
| **Bytes/Sec** | 464 kB | 464 kB | 692 kB | 711 kB | 671 kB | 69.4 kB | 464 kB | 6.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.04 ms | 1.98 ms | 117 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11639   | 11639   | 19919   | 20431   | 19121.82 | 2395.09 | 11635   | 210325  |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 1.83 MB | 1.88 MB | 1.76 MB  | 220 kB  | 1.07 MB | 19.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.41 ms | 1.19 ms | 69 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13799  | 13799  | 22047   | 23119   | 21462   | 2591.81 | 13797  | 214626  |
| **Bytes/Sec** | 704 kB | 704 kB | 1.12 MB | 1.18 MB | 1.09 MB | 132 kB  | 704 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.31 ms | 1 ms  | 58 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5955   | 5955   | 8279   | 8575   | 8065.46 | 691.48  | 5955   | 88712   |
| **Bytes/Sec** | 310 kB | 310 kB | 431 kB | 446 kB | 419 kB  | 35.9 kB | 310 kB | 4.61 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.53 ms | 1.88 ms | 38 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 12143   | 12143   | 20191   | 20575   | 19376.41 | 2436.2 | 12137   | 193788  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.74 MB | 1.77 MB | 1.67 MB  | 210 kB | 1.04 MB | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.31 ms | 1.06 ms | 74 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7691    | 7691    | 17631   | 17935   | 16697.64 | 2867.75 | 7689    | 183672  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 3.81 MB | 3.87 MB | 3.61 MB  | 620 kB  | 1.66 MB | 39.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.12 ms | 1.05 ms | 39 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20863   | 20863   | 38271   | 38687   | 36484   | 5226.22 | 20850   | 364848  |
| **Bytes/Sec** | 3.19 MB | 3.19 MB | 5.86 MB | 5.92 MB | 5.58 MB | 800 kB  | 3.19 MB | 55.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.37 ms | 0.78 ms | 18 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19503   | 19503   | 22975   | 39839   | 28278.4 | 8026.61 | 19494   | 282811  |
| **Bytes/Sec** | 2.19 MB | 2.19 MB | 2.57 MB | 4.46 MB | 3.17 MB | 899 kB  | 2.18 MB | 31.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 0.85 ms | 1.15 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11271   | 11271   | 17279   | 18703   | 16908.41 | 1977.54 | 11267   | 169081  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.61 MB | 1.74 MB | 1.57 MB  | 184 kB  | 1.05 MB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.98 ms | 1.16 ms | 76 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2087   | 2087   | 2975   | 3351   | 2982   | 344.89  | 2086   | 29816   |
| **Bytes/Sec** | 240 kB | 240 kB | 342 kB | 386 kB | 343 kB | 39.7 kB | 240 kB | 3.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.92 ms | 18.21 ms | 84 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ----- |
| **Req/Sec**   | 2605   | 2605   | 4731    | 5143    | 4567.11 | 691.1  | 2604   | 45665 |
| **Bytes/Sec** | 740 kB | 740 kB | 1.34 MB | 1.46 MB | 1.3 MB  | 196 kB | 740 kB | 13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 8 ms  | 15 ms | 8.27 ms | 3.22 ms | 176 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9151   | 9151   | 12695   | 13063  | 12249.1 | 1036.89 | 9145   | 134735  |
| **Bytes/Sec** | 842 kB | 842 kB | 1.17 MB | 1.2 MB | 1.13 MB | 95.5 kB | 841 kB | 12.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.72 ms | 1.19 ms | 62 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3787   | 3787   | 5763   | 6083   | 5596.9 | 630.89  | 3787   | 55958   |
| **Bytes/Sec** | 295 kB | 295 kB | 450 kB | 474 kB | 437 kB | 49.2 kB | 295 kB | 4.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.78 ms | 2.78 ms | 149 ms |


---

<p align="center">Generated 2021-03-09T00:18:15.049Z</p>