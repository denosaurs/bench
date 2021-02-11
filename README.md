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
| **Average** | 6954.4 | 16660.8 | 18728.41 | 0 | 21661.46 | 14166.37 | 29862.19 | 36111.2 | 17994.55 | 2691.4 | 4571.3 | 22778.8 | 6904.8 |
| **Total** | 69540 | 166617 | 187287 | 0 | 238277 | 155817 | 328471 | 361070 | 197934 | 26909 | 45703 | 227770 | 69038 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4339   | 4339   | 7187   | 7519   | 6954.4 | 900.28  | 4339   | 69540   |
| **Bytes/Sec** | 404 kB | 404 kB | 668 kB | 699 kB | 647 kB | 83.7 kB | 404 kB | 6.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.24 ms | 2.21 ms | 49 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10751  | 10751  | 17119   | 18079   | 16660.8 | 2027.18 | 10745  | 166617  |
| **Bytes/Sec** | 989 kB | 989 kB | 1.57 MB | 1.66 MB | 1.53 MB | 187 kB  | 989 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.89 ms | 1.37 ms | 58 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10399  | 10399  | 19071  | 21871   | 18728.41 | 2974.25 | 10394  | 187287  |
| **Bytes/Sec** | 530 kB | 530 kB | 972 kB | 1.12 MB | 955 kB   | 152 kB  | 530 kB | 9.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.57 ms | 1.39 ms | 46 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 13591   | 13591   | 22575   | 22735   | 21661.46 | 2560.4 | 13586   | 238277  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.94 MB | 1.95 MB | 1.86 MB  | 220 kB | 1.17 MB | 20.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.85 ms | 48 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5847    | 5847    | 15279  | 15431   | 14166.37 | 2708.87 | 5844    | 155817  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 3.3 MB | 3.33 MB | 3.06 MB  | 585 kB  | 1.26 MB | 33.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.31 ms | 38 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 14743   | 14743   | 31775   | 34015  | 29862.19 | 5037.3 | 14737   | 328471  |
| **Bytes/Sec** | 2.25 MB | 2.25 MB | 4.86 MB | 5.2 MB | 4.57 MB  | 771 kB | 2.25 MB | 50.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.88 ms | 0.92 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18031   | 18031   | 37599   | 38847   | 36111.2 | 6061.03 | 18018   | 361070  |
| **Bytes/Sec** | 2.02 MB | 2.02 MB | 4.21 MB | 4.35 MB | 4.04 MB | 679 kB  | 2.02 MB | 40.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.38 ms | 0.84 ms | 30 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12071   | 12071   | 18319  | 19887   | 17994.55 | 1966.63 | 12069   | 197934  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.7 MB | 1.85 MB | 1.67 MB  | 183 kB  | 1.12 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.54 ms | 1.21 ms | 56 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1795   | 1795   | 2757   | 3121   | 2691.4 | 329.57  | 1795   | 26909   |
| **Bytes/Sec** | 206 kB | 206 kB | 317 kB | 359 kB | 309 kB | 37.9 kB | 206 kB | 3.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.34 ms | 18.74 ms | 106 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 2235   | 2235   | 4963    | 5135    | 4571.3 | 852.02 | 2235   | 45703 |
| **Bytes/Sec** | 635 kB | 635 kB | 1.41 MB | 1.46 MB | 1.3 MB | 242 kB | 635 kB | 13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 16 ms | 8.22 ms | 3.82 ms | 203 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 15975   | 15975   | 23471   | 23871  | 22778.8 | 2275.78 | 15969   | 227770 |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.16 MB | 2.2 MB | 2.1 MB  | 210 kB  | 1.47 MB | 21 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.8 ms | 51 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4487   | 4487   | 7123   | 7559   | 6904.8 | 841.87  | 4485   | 69038   |
| **Bytes/Sec** | 350 kB | 350 kB | 556 kB | 590 kB | 538 kB | 65.7 kB | 350 kB | 5.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.27 ms | 2.22 ms | 104 ms |


---

<p align="center">Generated 2021-02-11T00:27:38.592Z</p>