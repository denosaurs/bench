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
| **Average** | 8146.8 | 25148.8 | 22587.6 | 15635.2 | 18146 | 15088.2 | 22748.4 | 36570.4 | 17810.8 | 2728 | 4813.5 | 26571.2 | 8855.8 |
| **Total** | 81471 | 251486 | 225872 | 156339 | 181423 | 150859 | 227472 | 365704 | 178132 | 27274 | 48129 | 265713 | 88550 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5043   | 5043   | 8495   | 8671   | 8146.8 | 1050.02 | 5041   | 81471   |
| **Bytes/Sec** | 469 kB | 469 kB | 790 kB | 806 kB | 758 kB | 97.7 kB | 469 kB | 7.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.57 ms | 2.23 ms | 109 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18575   | 18575   | 25871   | 26239   | 25148.8 | 2210.45 | 18572   | 251486  |
| **Bytes/Sec** | 1.71 MB | 1.71 MB | 2.38 MB | 2.41 MB | 2.31 MB | 203 kB  | 1.71 MB | 23.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.71 ms | 46 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14047  | 14047  | 23167   | 25007   | 22587.6 | 2967.95 | 14041  | 225872  |
| **Bytes/Sec** | 716 kB | 716 kB | 1.18 MB | 1.27 MB | 1.15 MB | 151 kB  | 716 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.24 ms | 1.04 ms | 45 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12295  | 12295  | 16047  | 16311  | 15635.2 | 1140.81 | 12293  | 156339  |
| **Bytes/Sec** | 639 kB | 639 kB | 835 kB | 848 kB | 813 kB  | 59.3 kB | 639 kB | 8.13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.18 ms | 0.9 ms | 25 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11967   | 11967   | 18687   | 19567   | 18146   | 2120.56 | 11960   | 181423  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.61 MB | 1.68 MB | 1.56 MB | 183 kB  | 1.03 MB | 15.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.65 ms | 1.12 ms | 55 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6495   | 6495   | 16023   | 16719   | 15088.2 | 2910.21 | 6492   | 150859  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 3.46 MB | 3.61 MB | 3.26 MB | 629 kB  | 1.4 MB | 32.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.45 ms | 57 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12599   | 12599   | 23615   | 24607   | 22748.4 | 3431.43 | 12595   | 227472  |
| **Bytes/Sec** | 1.93 MB | 1.93 MB | 3.61 MB | 3.76 MB | 3.48 MB | 525 kB  | 1.93 MB | 34.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.98 ms | 20 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 21023   | 21023   | 38303   | 38879   | 36570.4 | 5199.06 | 21018   | 365704 |
| **Bytes/Sec** | 2.36 MB | 2.36 MB | 4.29 MB | 4.35 MB | 4.1 MB  | 582 kB  | 2.35 MB | 41 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.36 ms | 0.79 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13207   | 13207   | 18143   | 19823   | 17810.8 | 1731.31 | 13205   | 178132  |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 1.69 MB | 1.84 MB | 1.66 MB | 161 kB  | 1.23 MB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.7 ms | 1.22 ms | 79 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1945   | 1945   | 2699   | 3331   | 2728   | 454.84  | 1945   | 27274   |
| **Bytes/Sec** | 224 kB | 224 kB | 310 kB | 383 kB | 314 kB | 52.3 kB | 224 kB | 3.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 14.17 ms | 18.72 ms | 90 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2489   | 2489   | 5163    | 5255    | 4813.5  | 819.08 | 2488   | 48129   |
| **Bytes/Sec** | 707 kB | 707 kB | 1.47 MB | 1.49 MB | 1.37 MB | 233 kB | 707 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.91 ms | 3.77 ms | 216 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 19615  | 19615  | 27279   | 27615   | 26571.2 | 2327.37 | 19603  | 265713  |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 2.51 MB | 2.54 MB | 2.44 MB | 214 kB  | 1.8 MB | 24.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.67 ms | 45 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5619   | 5619   | 9183   | 9447   | 8855.8 | 1088.68 | 5617   | 88550   |
| **Bytes/Sec** | 438 kB | 438 kB | 716 kB | 737 kB | 691 kB | 84.9 kB | 438 kB | 6.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4 ms  | 1.82 ms | 74 ms |


---

<p align="center">Generated 2020-12-23T15:52:08.397Z</p>