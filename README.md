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
| **Average** | 10011 | 21994 | 26442.91 | 14080.8 | 15384.4 | 8996 | 37581.82 | 36642.4 | 15140.4 | 2766.7 | 4627.11 | 20524 | 7365.6 |
| **Total** | 100104 | 219942 | 290869 | 140793 | 153835 | 98947 | 413420 | 366382 | 151371 | 27663 | 46260 | 225754 | 73651 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7363   | 7363   | 10175  | 11303   | 10011  | 977.94  | 7363   | 100104  |
| **Bytes/Sec** | 685 kB | 685 kB | 946 kB | 1.05 MB | 931 kB | 90.9 kB | 685 kB | 9.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.47 ms | 1.7 ms | 76 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14911   | 14911   | 22703   | 23119   | 21994   | 2375.77 | 14907   | 219942  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 2.09 MB | 2.13 MB | 2.02 MB | 218 kB  | 1.37 MB | 20.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.87 ms | 49 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 18639  | 18639  | 26863   | 28303   | 26442.91 | 2600.08 | 18629  | 290869  |
| **Bytes/Sec** | 950 kB | 950 kB | 1.37 MB | 1.44 MB | 1.35 MB  | 133 kB  | 950 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.73 ms | 37 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10847  | 10847  | 14263  | 15103  | 14080.8 | 1136.19 | 10842  | 140793  |
| **Bytes/Sec** | 564 kB | 564 kB | 742 kB | 785 kB | 732 kB  | 59 kB   | 564 kB | 7.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.19 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9215   | 9215   | 15991   | 16591   | 15384.4 | 2093.05 | 9212   | 153835  |
| **Bytes/Sec** | 793 kB | 793 kB | 1.38 MB | 1.43 MB | 1.32 MB | 180 kB  | 792 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.26 ms | 1.31 ms | 58 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4219   | 4219   | 9559    | 9951    | 8996    | 1579.37 | 4219   | 98947   |
| **Bytes/Sec** | 911 kB | 911 kB | 2.06 MB | 2.15 MB | 1.94 MB | 341 kB  | 911 kB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 3.92 ms | 1.98 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20959   | 20959   | 39455   | 39807   | 37581.82 | 5281.64 | 20959   | 413420  |
| **Bytes/Sec** | 3.21 MB | 3.21 MB | 6.03 MB | 6.09 MB | 5.75 MB  | 808 kB  | 3.21 MB | 63.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.32 ms | 0.83 ms | 43 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 22447   | 22447   | 38271   | 39295  | 36642.4 | 4783.81 | 22436   | 366382 |
| **Bytes/Sec** | 2.51 MB | 2.51 MB | 4.28 MB | 4.4 MB | 4.1 MB  | 536 kB  | 2.51 MB | 41 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.78 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10367  | 10367  | 15559   | 16399   | 15140.4 | 1668.27 | 10360  | 151371  |
| **Bytes/Sec** | 964 kB | 964 kB | 1.45 MB | 1.52 MB | 1.41 MB | 155 kB  | 963 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.21 ms | 1.23 ms | 63 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1926   | 1926   | 2759   | 3215   | 2766.7 | 322.43 | 1926   | 27663   |
| **Bytes/Sec** | 222 kB | 222 kB | 317 kB | 370 kB | 318 kB | 37 kB  | 221 kB | 3.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.94 ms | 18.66 ms | 110 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2333   | 2333   | 4963    | 5107    | 4627.11 | 822.31 | 2332   | 46260   |
| **Bytes/Sec** | 663 kB | 663 kB | 1.41 MB | 1.45 MB | 1.31 MB | 234 kB | 662 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 17 ms | 8.2 ms | 4.22 ms | 238 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14199   | 14199   | 20623  | 22623   | 20524   | 2267.37 | 14196   | 225754  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 1.9 MB | 2.08 MB | 1.89 MB | 209 kB  | 1.31 MB | 20.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.39 ms | 1.07 ms | 43 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4603   | 4603   | 7571   | 8043   | 7365.6 | 943.43  | 4603   | 73651   |
| **Bytes/Sec** | 359 kB | 359 kB | 590 kB | 628 kB | 574 kB | 73.5 kB | 359 kB | 5.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.85 ms | 2.15 ms | 100 ms |


---

<p align="center">Generated 2021-01-09T00:33:21.231Z</p>