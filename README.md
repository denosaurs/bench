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
| **Average** | 6716 | 21210 | 24515.28 | 12749.6 | 20088.41 | 14876.91 | 20250.8 | 22741.2 | 19220.41 | 2621.5 | 4260.11 | 20953.82 | 11072.8 |
| **Total** | 67161 | 212069 | 269664 | 127491 | 200854 | 163652 | 202509 | 227424 | 192199 | 26211 | 42590 | 230488 | 110719 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4515   | 4515   | 6775   | 7295   | 6716   | 777.15  | 4515   | 67161   |
| **Bytes/Sec** | 420 kB | 420 kB | 630 kB | 678 kB | 625 kB | 72.2 kB | 420 kB | 6.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.47 ms | 2.18 ms | 119 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14239   | 14239   | 21903   | 22767   | 21210   | 2380.97 | 14234   | 212069  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 2.01 MB | 2.09 MB | 1.95 MB | 219 kB  | 1.31 MB | 19.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.31 ms | 1.01 ms | 30 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15895  | 15895  | 25263   | 25919   | 24515.28 | 2742.44 | 15895  | 269664  |
| **Bytes/Sec** | 811 kB | 811 kB | 1.29 MB | 1.32 MB | 1.25 MB  | 140 kB  | 811 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.81 ms | 46 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8687   | 8687   | 13055  | 13551  | 12749.6 | 1367.65 | 8686   | 127491  |
| **Bytes/Sec** | 452 kB | 452 kB | 679 kB | 705 kB | 663 kB  | 71 kB   | 452 kB | 6.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.49 ms | 1.55 ms | 34 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14479   | 14479   | 20751   | 21311   | 20088.41 | 1934.84 | 14472   | 200854  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 1.78 MB | 1.83 MB | 1.73 MB  | 166 kB  | 1.24 MB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.97 ms | 50 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 6159    | 6159    | 15839   | 16311   | 14876.91 | 2806.72 | 6158    | 163652  |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 3.42 MB | 3.52 MB | 3.21 MB  | 606 kB  | 1.33 MB | 35.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.21 ms | 1.24 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 10119   | 10119   | 21583  | 21983   | 20250.8 | 3463.18 | 10113   | 202509 |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 3.3 MB | 3.36 MB | 3.1 MB  | 530 kB  | 1.55 MB | 31 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.42 ms | 1.23 ms | 27 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12015   | 12015   | 23743   | 24959  | 22741.2 | 3622.44 | 12011   | 227424  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.66 MB | 2.8 MB | 2.55 MB | 406 kB  | 1.35 MB | 25.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.27 ms | 1 ms  | 34 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13799   | 13799   | 19743   | 20703   | 19220.41 | 1883.91 | 13792   | 192199  |
| **Bytes/Sec** | 1.28 MB | 1.28 MB | 1.84 MB | 1.93 MB | 1.79 MB  | 175 kB  | 1.28 MB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.4 ms | 1.37 ms | 59 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1968   | 1968   | 2643   | 2913   | 2621.5 | 265.67  | 1968   | 26211   |
| **Bytes/Sec** | 226 kB | 226 kB | 304 kB | 335 kB | 301 kB | 30.6 kB | 226 kB | 3.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.73 ms | 18.82 ms | 101 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2459   | 2459   | 4475    | 4707    | 4260.11 | 626.24 | 2459   | 42590   |
| **Bytes/Sec** | 698 kB | 698 kB | 1.27 MB | 1.34 MB | 1.21 MB | 178 kB | 698 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------ | ------ |
| **Latency** | 7 ms  | 8 ms  | 16 ms | 8.9 ms | 3.5 ms | 187 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13823   | 13823   | 22111   | 22447   | 20953.82 | 2416.81 | 13820   | 230488  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 2.03 MB | 2.06 MB | 1.93 MB  | 222 kB  | 1.27 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.25 ms | 0.96 ms | 52 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8223   | 8223   | 11375  | 11503  | 11072.8 | 952.42  | 8218   | 110719  |
| **Bytes/Sec** | 641 kB | 641 kB | 887 kB | 898 kB | 864 kB  | 74.4 kB | 641 kB | 8.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.33 ms | 1.44 ms | 74 ms |


---

<p align="center">Generated 2021-04-08T00:43:58.595Z</p>