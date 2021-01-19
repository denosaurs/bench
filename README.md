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
| **Average** | 8675 | 25628.37 | 27999.28 | 13532 | 19799.6 | 14368.55 | 39571.64 | 40380.37 | 19207.6 | 3167.2 | 5704.5 | 23805.82 | 9375.1 |
| **Total** | 86735 | 281905 | 307972 | 148859 | 197990 | 158053 | 435275 | 444169 | 192084 | 31667 | 57035 | 261870 | 103115 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5755   | 5755   | 8999   | 9223   | 8675   | 991.93  | 5754   | 86735   |
| **Bytes/Sec** | 536 kB | 536 kB | 837 kB | 858 kB | 807 kB | 92.2 kB | 535 kB | 8.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.29 ms | 1.72 ms | 74 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17823   | 17823   | 26431   | 26671   | 25628.37 | 2478.32 | 17808   | 281905  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 2.43 MB | 2.45 MB | 2.36 MB  | 228 kB  | 1.64 MB | 25.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.72 ms | 43 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21151   | 21151   | 28559   | 29919   | 27999.28 | 2293.51 | 21139   | 307972  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.46 MB | 1.53 MB | 1.43 MB  | 117 kB  | 1.08 MB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.09 ms | 0.68 ms | 35 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 9239   | 9239   | 14039  | 14223  | 13532  | 1378.13 | 9236   | 148859  |
| **Bytes/Sec** | 481 kB | 481 kB | 730 kB | 740 kB | 704 kB | 71.7 kB | 480 kB | 7.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.3 ms | 1.2 ms | 42 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 12983   | 12983   | 20447   | 21503   | 19799.6 | 2335.98 | 12978   | 197990 |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.76 MB | 1.85 MB | 1.7 MB  | 201 kB  | 1.12 MB | 17 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.12 ms | 39 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 6279    | 6279    | 15327   | 15631   | 14368.55 | 2598.96 | 6276    | 158053  |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 3.31 MB | 3.38 MB | 3.1 MB   | 562 kB  | 1.36 MB | 34.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.24 ms | 1.22 ms | 34 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21535  | 21535  | 41471   | 41887   | 39571.64 | 5717.94 | 21529   | 435275  |
| **Bytes/Sec** | 3.3 MB | 3.3 MB | 6.34 MB | 6.41 MB | 6.05 MB  | 875 kB  | 3.29 MB | 66.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.72 ms | 20 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 24287   | 24287   | 41823   | 43423   | 40380.37 | 5125.88 | 24273   | 444169  |
| **Bytes/Sec** | 2.72 MB | 2.72 MB | 4.69 MB | 4.87 MB | 4.52 MB  | 574 kB  | 2.72 MB | 49.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.42 ms | 0.71 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13031   | 13031   | 19919   | 20543   | 19207.6 | 2109.54 | 13029   | 192084  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 1.85 MB | 1.91 MB | 1.79 MB | 196 kB  | 1.21 MB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.29 ms | 1.08 ms | 51 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2199   | 2199   | 3153   | 3869   | 3167.2 | 422.01  | 2198   | 31667   |
| **Bytes/Sec** | 253 kB | 253 kB | 362 kB | 445 kB | 364 kB | 48.5 kB | 253 kB | 3.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.17 ms | 18.01 ms | 73 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2951   | 2951   | 6075    | 6179    | 5704.5  | 951.33 | 2950   | 57035   |
| **Bytes/Sec** | 838 kB | 838 kB | 1.73 MB | 1.76 MB | 1.62 MB | 270 kB | 838 kB | 16.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 12 ms | 6.68 ms | 3.02 ms | 188 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16815   | 16815   | 24527   | 25263   | 23805.82 | 2259.71 | 16803   | 261870  |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 2.26 MB | 2.32 MB | 2.19 MB  | 208 kB  | 1.55 MB | 24.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.8 ms | 56 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7207   | 7207   | 9471   | 10631  | 9375.1 | 892.21  | 7207   | 103115  |
| **Bytes/Sec** | 562 kB | 562 kB | 738 kB | 829 kB | 731 kB | 69.6 kB | 562 kB | 8.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.79 ms | 1.69 ms | 77 ms |


---

<p align="center">Generated 2021-01-19T00:51:41.940Z</p>