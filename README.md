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
| **Average** | 6706.3 | 24287.28 | 25147.2 | 12241.6 | 20785.82 | 14358.37 | 34028.37 | 42819.64 | 17158 | 3222.6 | 5797.3 | 20185.2 | 9325.8 |
| **Total** | 67055 | 267118 | 251454 | 122425 | 228638 | 157931 | 374278 | 471000 | 171576 | 32220 | 57971 | 201859 | 93244 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4029   | 4029   | 7027   | 7203   | 6706.3 | 909.01  | 4028   | 67055   |
| **Bytes/Sec** | 375 kB | 375 kB | 653 kB | 670 kB | 624 kB | 84.5 kB | 375 kB | 6.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.63 ms | 2.63 ms | 149 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17295   | 17295   | 24991  | 25503   | 24287.28 | 2234.01 | 17281   | 267118  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.3 MB | 2.35 MB | 2.23 MB  | 206 kB  | 1.59 MB | 24.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.76 ms | 62 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18239  | 18239  | 25519  | 26943   | 25147.2 | 2428.02 | 18225  | 251454  |
| **Bytes/Sec** | 930 kB | 930 kB | 1.3 MB | 1.37 MB | 1.28 MB | 124 kB  | 929 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.76 ms | 35 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9591   | 9591   | 11607  | 14287  | 12241.6 | 1414.78 | 9591   | 122425  |
| **Bytes/Sec** | 499 kB | 499 kB | 604 kB | 743 kB | 637 kB  | 73.6 kB | 499 kB | 6.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.74 ms | 1.4 ms | 25 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13159   | 13159   | 21663   | 22319   | 20785.82 | 2487.29 | 13154   | 228638  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 1.86 MB | 1.92 MB | 1.79 MB  | 214 kB  | 1.13 MB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.89 ms | 55 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5847    | 5847    | 15343   | 15599   | 14358.37 | 2748.27 | 5845    | 157931  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 3.31 MB | 3.37 MB | 3.1 MB   | 594 kB  | 1.26 MB | 34.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.26 ms | 1.29 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17391   | 17391   | 35679   | 36351   | 34028.37 | 5304.91 | 17380   | 374278  |
| **Bytes/Sec** | 2.66 MB | 2.66 MB | 5.46 MB | 5.56 MB | 5.21 MB  | 812 kB  | 2.66 MB | 57.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.46 ms | 1.09 ms | 65 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 27535   | 27535   | 44415   | 44799   | 42819.64 | 4851.98 | 27524   | 471000  |
| **Bytes/Sec** | 3.08 MB | 3.08 MB | 4.97 MB | 5.02 MB | 4.8 MB   | 543 kB  | 3.08 MB | 52.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.41 ms | 0.7 ms | 34 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 10119  | 10119  | 17631   | 19039   | 17158  | 2406.89 | 10116  | 171576 |
| **Bytes/Sec** | 941 kB | 941 kB | 1.64 MB | 1.77 MB | 1.6 MB | 224 kB  | 941 kB | 16 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.92 ms | 1.31 ms | 72 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2097   | 2097   | 3171   | 4399   | 3222.6 | 658.1   | 2097   | 32220   |
| **Bytes/Sec** | 241 kB | 241 kB | 365 kB | 506 kB | 371 kB | 75.7 kB | 241 kB | 3.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 11.94 ms | 17.83 ms | 70 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3071   | 3071   | 5995   | 6651    | 5797.3  | 984.28 | 3071   | 57971   |
| **Bytes/Sec** | 872 kB | 872 kB | 1.7 MB | 1.89 MB | 1.65 MB | 280 kB | 872 kB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.39 ms | 2.9 ms | 168 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13239   | 13239   | 20815   | 21567   | 20185.2 | 2342.04 | 13235   | 201859  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 1.91 MB | 1.98 MB | 1.86 MB | 215 kB  | 1.22 MB | 18.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.34 ms | 61 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6159   | 6159   | 9663   | 9839   | 9325.8 | 1059.28 | 6156   | 93244   |
| **Bytes/Sec** | 480 kB | 480 kB | 754 kB | 767 kB | 727 kB | 82.7 kB | 480 kB | 7.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.55 ms | 1.83 ms | 87 ms |


---

<p align="center">Generated 2020-12-19T00:19:50.693Z</p>