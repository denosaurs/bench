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
| **Average** | 8503 | 25931.2 | 28496.73 | 15308 | 21366.8 | 15194.73 | 17021.2 | 36372 | 17407.6 | 3330.2 | 5327.3 | 19652.73 | 7654.8 |
| **Total** | 85026 | 259342 | 313460 | 153071 | 213656 | 167122 | 170190 | 363695 | 174103 | 33300 | 53269 | 216169 | 76541 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5227   | 5227   | 8919   | 9055   | 8503   | 1113.53 | 5225   | 85026   |
| **Bytes/Sec** | 486 kB | 486 kB | 829 kB | 842 kB | 791 kB | 104 kB  | 486 kB | 7.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.4 ms | 2.05 ms | 105 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 17983   | 17983   | 26703   | 27199  | 25931.2 | 2662.8 | 17983   | 259342  |
| **Bytes/Sec** | 1.65 MB | 1.65 MB | 2.46 MB | 2.5 MB | 2.39 MB | 245 kB | 1.65 MB | 23.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.76 ms | 38 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 20607   | 20607   | 29247   | 29759   | 28496.73 | 2511.72 | 20592   | 313460 |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.49 MB | 1.52 MB | 1.45 MB  | 128 kB  | 1.05 MB | 16 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.09 ms | 0.65 ms | 52 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 11807  | 11807  | 15655  | 15903  | 15308  | 1176.53 | 11803  | 153071  |
| **Bytes/Sec** | 614 kB | 614 kB | 814 kB | 827 kB | 796 kB | 61.2 kB | 614 kB | 7.96 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.19 ms | 0.88 ms | 23 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13599   | 13599   | 22175   | 22543   | 21366.8 | 2595.56 | 13594   | 213656  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.91 MB | 1.94 MB | 1.84 MB | 223 kB  | 1.17 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.91 ms | 51 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 6819    | 6819    | 16135   | 16399   | 15194.73 | 2687.01 | 6816    | 167122  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 3.49 MB | 3.54 MB | 3.28 MB  | 580 kB  | 1.47 MB | 36.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.16 ms | 1.15 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 8255    | 8255    | 17775   | 18751   | 17021.2 | 2945.47 | 8253    | 170190 |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 2.72 MB | 2.87 MB | 2.6 MB  | 450 kB  | 1.26 MB | 26 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2 ms  | 1.27 ms | 40 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19775   | 19775   | 38079   | 39327  | 36372   | 5596.23 | 19767   | 363695  |
| **Bytes/Sec** | 2.22 MB | 2.22 MB | 4.27 MB | 4.4 MB | 4.07 MB | 626 kB  | 2.21 MB | 40.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.62 ms | 0.79 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11655   | 11655   | 17615   | 19695   | 17407.6 | 2050.74 | 11651   | 174103  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.64 MB | 1.83 MB | 1.62 MB | 191 kB  | 1.08 MB | 16.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.63 ms | 1.34 ms | 66 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2377   | 2377   | 3253   | 4363   | 3330.2 | 617.86 | 2376   | 33300   |
| **Bytes/Sec** | 273 kB | 273 kB | 374 kB | 502 kB | 383 kB | 71 kB  | 273 kB | 3.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.51 ms | 17.62 ms | 89 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2675   | 2675   | 5711    | 5839    | 5327.3  | 946.05 | 2674   | 53269   |
| **Bytes/Sec** | 760 kB | 760 kB | 1.62 MB | 1.66 MB | 1.51 MB | 269 kB | 759 kB | 15.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 14 ms | 6.99 ms | 3.13 ms | 174 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13543   | 13543   | 20047   | 21471   | 19652.73 | 2026.27 | 13541   | 216169  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 1.84 MB | 1.98 MB | 1.81 MB  | 186 kB  | 1.25 MB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.13 ms | 56 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5075   | 5075   | 7959   | 8071   | 7654.8 | 865.15  | 5074   | 76541   |
| **Bytes/Sec** | 396 kB | 396 kB | 621 kB | 630 kB | 597 kB | 67.5 kB | 396 kB | 5.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.74 ms | 2.11 ms | 126 ms |


---

<p align="center">Generated 2021-01-23T00:49:27.522Z</p>