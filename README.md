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
| **Average** | 8799.4 | 21341.2 | 24998.4 | 13728.37 | 23105.1 | 13811.4 | 34413.82 | 32117.6 | 18497.2 | 3521.1 | 4711.3 | 24118.4 | 8016 |
| **Total** | 87992 | 213410 | 249978 | 150999 | 254180 | 138123 | 378567 | 321109 | 184954 | 35201 | 47110 | 241164 | 80150 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 5559   | 5559   | 9239   | 9375   | 8799.4 | 1110.8 | 5557   | 87992   |
| **Bytes/Sec** | 517 kB | 517 kB | 860 kB | 871 kB | 818 kB | 103 kB | 517 kB | 8.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.16 ms | 1.95 ms | 100 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12271   | 12271   | 22127   | 23535   | 21341.2 | 3078.32 | 12271   | 213410  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 2.04 MB | 2.16 MB | 1.96 MB | 283 kB  | 1.13 MB | 19.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.32 ms | 1.09 ms | 66 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 17855  | 17855  | 25887   | 26159   | 24998.4 | 2408.1 | 17853  | 249978  |
| **Bytes/Sec** | 911 kB | 911 kB | 1.32 MB | 1.33 MB | 1.27 MB | 123 kB | 911 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.15 ms | 1 ms  | 77 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10151  | 10151  | 14199  | 14399  | 13728.37 | 1167.77 | 10145  | 150999  |
| **Bytes/Sec** | 528 kB | 528 kB | 738 kB | 749 kB | 714 kB   | 60.7 kB | 528 kB | 7.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.29 ms | 1.16 ms | 25 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16175   | 16175   | 23775   | 24303   | 23105.1 | 2200.88 | 16174   | 254180  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 2.04 MB | 2.09 MB | 1.99 MB | 189 kB  | 1.39 MB | 21.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.77 ms | 63 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5567   | 5567   | 14943   | 15319   | 13811.4 | 2839.06 | 5564   | 138123  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 3.23 MB | 3.31 MB | 2.98 MB | 614 kB  | 1.2 MB | 29.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.35 ms | 1.41 ms | 30 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17311   | 17311   | 35999   | 36863   | 34413.82 | 5425.71 | 17304   | 378567  |
| **Bytes/Sec** | 2.65 MB | 2.65 MB | 5.51 MB | 5.64 MB | 5.27 MB  | 830 kB  | 2.65 MB | 57.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.52 ms | 0.87 ms | 21 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 17807   | 17807   | 33631   | 34047   | 32117.6 | 4776.75 | 17804   | 321109 |
| **Bytes/Sec** | 1.99 MB | 1.99 MB | 3.76 MB | 3.81 MB | 3.6 MB  | 535 kB  | 1.99 MB | 36 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.99 ms | 0.74 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11831  | 11831  | 19183   | 19807   | 18497.2 | 2242.21 | 11829  | 184954  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.78 MB | 1.84 MB | 1.72 MB | 208 kB  | 1.1 MB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.39 ms | 1.17 ms | 78 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2271   | 2271   | 3311   | 4767   | 3521.1 | 685.34  | 2270   | 35201   |
| **Bytes/Sec** | 261 kB | 261 kB | 381 kB | 548 kB | 405 kB | 78.8 kB | 261 kB | 4.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 10.89 ms | 17.47 ms | 71 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2127   | 2127   | 5043    | 5363    | 4711.3  | 936.63 | 2127   | 47110   |
| **Bytes/Sec** | 604 kB | 604 kB | 1.43 MB | 1.52 MB | 1.34 MB | 266 kB | 604 kB | 13.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 8.04 ms | 4.29 ms | 237 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17391  | 17391  | 24927   | 25503   | 24118.4 | 2326.45 | 17379  | 241164  |
| **Bytes/Sec** | 1.6 MB | 1.6 MB | 2.29 MB | 2.35 MB | 2.22 MB | 214 kB  | 1.6 MB | 22.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.81 ms | 39 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4863   | 4863   | 8375   | 8535   | 8016   | 1059.97 | 4861   | 80150   |
| **Bytes/Sec** | 379 kB | 379 kB | 653 kB | 666 kB | 625 kB | 82.7 kB | 379 kB | 6.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.57 ms | 2.16 ms | 98 ms |


---

<p align="center">Generated 2021-01-07T00:34:27.510Z</p>