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
| **Average** | 8292.19 | 21989.46 | 21834 | 10354.6 | 20031.64 | 8866.28 | 32566.91 | 37365.6 | 19407.6 | 3319.5 | 4351.8 | 23113.2 | 9403.8 |
| **Total** | 91212 | 241890 | 218322 | 103535 | 220323 | 97522 | 358192 | 373683 | 194058 | 33186 | 43513 | 231134 | 94028 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4847   | 4847   | 8623   | 8951   | 8292.19 | 1103.98 | 4844   | 91212   |
| **Bytes/Sec** | 451 kB | 451 kB | 802 kB | 833 kB | 771 kB  | 103 kB  | 450 kB | 8.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.54 ms | 2.42 ms | 101 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14959   | 14959   | 22751   | 23087   | 21989.46 | 2242.98 | 14959   | 241890  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 2.09 MB | 2.12 MB | 2.02 MB  | 206 kB  | 1.38 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.9 ms | 45 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15871  | 15871  | 22287   | 23423   | 21834   | 2056.08 | 15866  | 218322  |
| **Bytes/Sec** | 809 kB | 809 kB | 1.14 MB | 1.19 MB | 1.11 MB | 105 kB  | 809 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.31 ms | 0.99 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8103   | 8103   | 10591  | 10943  | 10354.6 | 771.54  | 8100   | 103535  |
| **Bytes/Sec** | 421 kB | 421 kB | 550 kB | 569 kB | 538 kB  | 40.1 kB | 421 kB | 5.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.38 ms | 1.19 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13023   | 13023   | 20831   | 20975  | 20031.64 | 2237.01 | 13021   | 220323  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.79 MB | 1.8 MB | 1.72 MB  | 192 kB  | 1.12 MB | 18.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.95 ms | 70 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3959   | 3959   | 9519    | 10023   | 8866.28 | 1658.81 | 3959   | 97522   |
| **Bytes/Sec** | 856 kB | 856 kB | 2.06 MB | 2.16 MB | 1.91 MB | 358 kB  | 855 kB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 11 ms | 3.93 ms | 2.27 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14919   | 14919   | 34527   | 34847   | 32566.91 | 5619.17 | 14919   | 358192  |
| **Bytes/Sec** | 2.28 MB | 2.28 MB | 5.28 MB | 5.33 MB | 4.98 MB  | 859 kB  | 2.28 MB | 54.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.68 ms | 0.91 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21519   | 21519   | 39391   | 39615   | 37365.6 | 5330.45 | 21515   | 373683  |
| **Bytes/Sec** | 2.41 MB | 2.41 MB | 4.41 MB | 4.44 MB | 4.18 MB | 597 kB  | 2.41 MB | 41.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.61 ms | 0.89 ms | 52 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 13271   | 13271   | 19983   | 20959   | 19407.6 | 2106.68 | 13266   | 194058 |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 1.86 MB | 1.95 MB | 1.8 MB  | 196 kB  | 1.23 MB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 1.06 ms | 72 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2389   | 2389   | 3149   | 4591   | 3319.5 | 599.22  | 2389   | 33186   |
| **Bytes/Sec** | 275 kB | 275 kB | 362 kB | 528 kB | 382 kB | 68.9 kB | 275 kB | 3.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 11.55 ms | 17.65 ms | 81 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2297   | 2297   | 4607    | 4855    | 4351.8  | 767.53 | 2297   | 43513   |
| **Bytes/Sec** | 653 kB | 653 kB | 1.31 MB | 1.38 MB | 1.24 MB | 218 kB | 652 kB | 12.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 16 ms | 8.68 ms | 3.55 ms | 185 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14887   | 14887   | 24095   | 24495   | 23113.2 | 2770.67 | 14886   | 231134  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 2.22 MB | 2.25 MB | 2.13 MB | 255 kB  | 1.37 MB | 21.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 1.04 ms | 82 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5963   | 5963   | 9711   | 9943   | 9403.8 | 1152.94 | 5963   | 94028   |
| **Bytes/Sec** | 465 kB | 465 kB | 757 kB | 776 kB | 733 kB | 89.9 kB | 465 kB | 7.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.54 ms | 1.87 ms | 87 ms |


---

<p align="center">Generated 2021-01-02T00:28:08.570Z</p>