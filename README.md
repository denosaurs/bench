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
| **Average** | 7330.4 | 20124.73 | 23843.2 | 15706.4 | 17902.19 | 16517.41 | 39666.4 | 33815.2 | 17465.82 | 2598 | 5248.3 | 21495.64 | 9346.6 |
| **Total** | 73297 | 221341 | 238394 | 157050 | 196891 | 165181 | 396653 | 338189 | 192106 | 25976 | 52475 | 236427 | 93471 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4975   | 4975   | 7583   | 7771   | 7330.4 | 799.77  | 4974   | 73297   |
| **Bytes/Sec** | 463 kB | 463 kB | 706 kB | 723 kB | 682 kB | 74.4 kB | 463 kB | 6.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 4.92 ms | 1.82 ms | 57 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13455   | 13455   | 20831   | 21375   | 20124.73 | 2150.06 | 13448   | 221341  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 1.92 MB | 1.97 MB | 1.85 MB  | 198 kB  | 1.24 MB | 20.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.01 ms | 62 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16495  | 16495  | 24447   | 25583  | 23843.2 | 2550.36 | 16489  | 238394  |
| **Bytes/Sec** | 841 kB | 841 kB | 1.25 MB | 1.3 MB | 1.22 MB | 130 kB  | 841 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.19 ms | 0.87 ms | 43 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12967  | 12967  | 15415  | 17199  | 15706.4 | 1248.81 | 12962  | 157050  |
| **Bytes/Sec** | 674 kB | 674 kB | 802 kB | 894 kB | 817 kB  | 64.9 kB | 674 kB | 8.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 0.95 ms | 22 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12095   | 12095   | 18527   | 19183   | 17902.19 | 1912.78 | 12092   | 196891  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.59 MB | 1.65 MB | 1.54 MB  | 164 kB  | 1.04 MB | 16.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.72 ms | 0.99 ms | 56 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ----- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7751    | 7751    | 17615   | 18543 | 16517.41 | 3021.42 | 7749    | 165181  |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 3.81 MB | 4 MB  | 3.57 MB  | 653 kB  | 1.67 MB | 35.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2 ms  | 1.18 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 24303   | 24303   | 41567   | 43167   | 39666.4 | 5426.65 | 24290   | 396653  |
| **Bytes/Sec** | 3.72 MB | 3.72 MB | 6.36 MB | 6.61 MB | 6.07 MB | 830 kB  | 3.72 MB | 60.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.31 ms | 0.71 ms | 23 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17279   | 17279   | 35359   | 37503  | 33815.2 | 5632.09 | 17274   | 338189  |
| **Bytes/Sec** | 1.94 MB | 1.94 MB | 3.96 MB | 4.2 MB | 3.79 MB | 631 kB  | 1.93 MB | 37.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.71 ms | 0.9 ms | 30 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 11615   | 11615   | 18159   | 18959   | 17465.82 | 1942.6 | 11608   | 192106  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.69 MB | 1.76 MB | 1.62 MB  | 181 kB | 1.08 MB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.69 ms | 1.21 ms | 72 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1841   | 1841   | 2705   | 2907   | 2598   | 321.17  | 1841   | 25976   |
| **Bytes/Sec** | 212 kB | 212 kB | 311 kB | 334 kB | 299 kB | 36.9 kB | 212 kB | 2.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 51 ms | 14.89 ms | 18.94 ms | 106 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2797   | 2797   | 5575    | 5787    | 5248.3  | 839.18 | 2797   | 52475   |
| **Bytes/Sec** | 795 kB | 795 kB | 1.58 MB | 1.64 MB | 1.49 MB | 238 kB | 794 kB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ----- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 7 ms  | 3.11 ms | 181 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14839   | 14839   | 22223   | 22431   | 21495.64 | 2115.43 | 14832   | 236427  |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 2.04 MB | 2.06 MB | 1.98 MB  | 195 kB  | 1.36 MB | 21.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.82 ms | 43 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 6639   | 6639   | 9591   | 9863   | 9346.6 | 910.07 | 6639   | 93471   |
| **Bytes/Sec** | 518 kB | 518 kB | 748 kB | 770 kB | 729 kB | 71 kB  | 518 kB | 7.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 3.56 ms | 1.9 ms | 92 ms |


---

<p align="center">Generated 2021-04-03T00:39:58.939Z</p>