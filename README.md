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
| **Average** | 6840.8 | 17467.6 | 22226 | 12960.8 | 20987.6 | 10455.46 | 37663.2 | 37178.4 | 20034 | 2997.4 | 5245 | 18802 | 10659.4 |
| **Total** | 68404 | 174688 | 222248 | 129611 | 209870 | 115011 | 376680 | 371809 | 200351 | 29969 | 57688 | 188022 | 106596 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4599   | 4599   | 7131   | 7339   | 6840.8 | 769.93  | 4596   | 68404   |
| **Bytes/Sec** | 428 kB | 428 kB | 663 kB | 682 kB | 636 kB | 71.7 kB | 427 kB | 6.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.5 ms | 2.09 ms | 126 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10607  | 10607  | 17903   | 19215   | 17467.6 | 2366.86 | 10605  | 174688  |
| **Bytes/Sec** | 976 kB | 976 kB | 1.65 MB | 1.77 MB | 1.61 MB | 218 kB  | 976 kB | 16.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.77 ms | 1.39 ms | 58 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14671  | 14671  | 23071   | 23679   | 22226   | 2552.01 | 14666  | 222248  |
| **Bytes/Sec** | 748 kB | 748 kB | 1.18 MB | 1.21 MB | 1.13 MB | 130 kB  | 748 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.25 ms | 0.97 ms | 49 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9207   | 9207   | 13295  | 13599  | 12960.8 | 1259.49 | 9204   | 129611  |
| **Bytes/Sec** | 479 kB | 479 kB | 692 kB | 707 kB | 674 kB  | 65.5 kB | 479 kB | 6.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.34 ms | 1.23 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 14799   | 14799   | 21743   | 22111  | 20987.6 | 2115.15 | 14792   | 209870 |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 1.87 MB | 1.9 MB | 1.8 MB  | 182 kB  | 1.27 MB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.82 ms | 30 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 5019    | 5019    | 11103  | 11503   | 10455.46 | 1769.5 | 5018    | 115011  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 2.4 MB | 2.48 MB | 2.26 MB  | 382 kB | 1.08 MB | 24.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.36 ms | 1.54 ms | 43 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20559   | 20559   | 39551   | 39871  | 37663.2 | 5709.99 | 20547   | 376680  |
| **Bytes/Sec** | 3.15 MB | 3.15 MB | 6.05 MB | 6.1 MB | 5.76 MB | 874 kB  | 3.14 MB | 57.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.41 ms | 0.77 ms | 19 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 21983   | 21983   | 38783   | 39327   | 37178.4 | 5085.9 | 21973   | 371809  |
| **Bytes/Sec** | 2.46 MB | 2.46 MB | 4.35 MB | 4.41 MB | 4.16 MB | 570 kB | 2.46 MB | 41.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.52 ms | 0.77 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13855   | 13855   | 20543   | 21823   | 20034   | 2156.19 | 13851   | 200351  |
| **Bytes/Sec** | 1.29 MB | 1.29 MB | 1.91 MB | 2.03 MB | 1.86 MB | 201 kB  | 1.29 MB | 18.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 1.02 ms | 62 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2039   | 2039   | 3005   | 3697   | 2997.4 | 411.15  | 2039   | 29969   |
| **Bytes/Sec** | 234 kB | 234 kB | 346 kB | 425 kB | 345 kB | 47.3 kB | 234 kB | 3.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.86 ms | 18.13 ms | 96 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2815   | 2815   | 5579    | 5647   | 5245    | 789.01 | 2814   | 57688   |
| **Bytes/Sec** | 799 kB | 799 kB | 1.58 MB | 1.6 MB | 1.49 MB | 224 kB | 799 kB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.95 ms | 2.88 ms | 161 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12287   | 12287   | 19391   | 19999   | 18802   | 2181.88 | 12282   | 188022  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 1.78 MB | 1.84 MB | 1.73 MB | 201 kB  | 1.13 MB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.41 ms | 1.13 ms | 68 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7639   | 7639   | 10975  | 11127  | 10659.4 | 1010.21 | 7638   | 106596  |
| **Bytes/Sec** | 596 kB | 596 kB | 856 kB | 868 kB | 832 kB  | 78.8 kB | 596 kB | 8.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.41 ms | 1.62 ms | 72 ms |


---

<p align="center">Generated 2021-03-25T00:38:51.370Z</p>