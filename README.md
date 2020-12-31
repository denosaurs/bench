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
| **Average** | 8430.4 | 26579.64 | 28598.55 | 8726 | 23728 | 13593.8 | 33279.28 | 37680.81 | 16528.8 | 2502.81 | 5604.5 | 19465.1 | 6581.5 |
| **Total** | 84299 | 292376 | 314587 | 95986 | 237263 | 135936 | 366053 | 376814 | 165295 | 25024 | 56039 | 214090 | 65813 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5271   | 5271   | 8807   | 9087   | 8430.4 | 1083.77 | 5271   | 84299   |
| **Bytes/Sec** | 490 kB | 490 kB | 819 kB | 845 kB | 784 kB | 101 kB  | 490 kB | 7.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.48 ms | 2.03 ms | 99 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20191   | 20191   | 27279   | 28271  | 26579.64 | 2160.11 | 20184   | 292376  |
| **Bytes/Sec** | 1.86 MB | 1.86 MB | 2.51 MB | 2.6 MB | 2.45 MB  | 199 kB  | 1.86 MB | 26.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.1 ms | 0.64 ms | 39 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 21167   | 21167   | 29263   | 30127   | 28598.55 | 2377.32 | 21161   | 314587 |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.49 MB | 1.54 MB | 1.46 MB  | 121 kB  | 1.08 MB | 16 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.08 ms | 0.63 ms | 45 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5939   | 5939   | 8999   | 9551   | 8726   | 931.37  | 5938   | 95986   |
| **Bytes/Sec** | 309 kB | 309 kB | 468 kB | 497 kB | 454 kB | 48.4 kB | 309 kB | 4.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.16 ms | 1.87 ms | 34 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16911   | 16911   | 24687   | 25519  | 23728   | 2488.88 | 16902   | 237263  |
| **Bytes/Sec** | 1.45 MB | 1.45 MB | 2.12 MB | 2.2 MB | 2.04 MB | 214 kB  | 1.45 MB | 20.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.74 ms | 25 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5943    | 5943    | 14567   | 14823  | 13593.8 | 2616.88 | 5943    | 135936  |
| **Bytes/Sec** | 1.28 MB | 1.28 MB | 3.15 MB | 3.2 MB | 2.94 MB | 565 kB  | 1.28 MB | 29.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.34 ms | 1.37 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 17599   | 17599   | 34975   | 35327  | 33279.28 | 4987.24 | 17586   | 366053 |
| **Bytes/Sec** | 2.69 MB | 2.69 MB | 5.35 MB | 5.4 MB | 5.09 MB  | 763 kB  | 2.69 MB | 56 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.72 ms | 0.86 ms | 24 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 23167   | 23167   | 39167   | 39679   | 37680.81 | 4846.45 | 23162   | 376814  |
| **Bytes/Sec** | 2.59 MB | 2.59 MB | 4.39 MB | 4.44 MB | 4.22 MB  | 543 kB  | 2.59 MB | 42.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.37 ms | 0.77 ms | 37 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10663  | 10663  | 17183  | 17759   | 16528.8 | 2003.37 | 10658  | 165295  |
| **Bytes/Sec** | 991 kB | 991 kB | 1.6 MB | 1.65 MB | 1.54 MB | 186 kB  | 991 kB | 15.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.16 ms | 1.15 ms | 65 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1509   | 1509   | 2581   | 2879   | 2502.81 | 385.72  | 1509   | 25024   |
| **Bytes/Sec** | 174 kB | 174 kB | 297 kB | 331 kB | 288 kB  | 44.3 kB | 174 kB | 2.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 52 ms | 15.44 ms | 19.08 ms | 111 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2875   | 2875   | 6003   | 6147    | 5604.5  | 956.84 | 2874   | 56039   |
| **Bytes/Sec** | 817 kB | 817 kB | 1.7 MB | 1.75 MB | 1.59 MB | 272 kB | 816 kB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.76 ms | 2.56 ms | 71 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12967   | 12967   | 20127   | 20927   | 19465.1 | 2112.68 | 12965   | 214090  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 1.85 MB | 1.93 MB | 1.79 MB | 194 kB  | 1.19 MB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.42 ms | 1.24 ms | 58 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3729   | 3729   | 6923   | 7131   | 6581.5 | 969.47  | 3729   | 65813   |
| **Bytes/Sec** | 291 kB | 291 kB | 540 kB | 557 kB | 513 kB | 75.6 kB | 291 kB | 5.13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.63 ms | 2.49 ms | 118 ms |


---

<p align="center">Generated 2020-12-31T00:29:23.745Z</p>