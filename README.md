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
| **Average** | 8048.2 | 20880.73 | 28364.37 | 9049.64 | 13268.8 | 13290.37 | 33075.64 | 35111.2 | 15482.19 | 3115.1 | 5053.5 | 18124.41 | 8575 |
| **Total** | 80484 | 229675 | 312007 | 99549 | 132676 | 146199 | 363769 | 351064 | 170293 | 31144 | 50524 | 181254 | 85740 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5599   | 5599   | 8351   | 8847   | 8048.2 | 874.71  | 5598   | 80484   |
| **Bytes/Sec** | 521 kB | 521 kB | 777 kB | 823 kB | 748 kB | 81.4 kB | 521 kB | 7.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.52 ms | 1.73 ms | 73 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10295  | 10295  | 25487   | 26463   | 20880.73 | 6144.51 | 10289  | 229675  |
| **Bytes/Sec** | 947 kB | 947 kB | 2.34 MB | 2.44 MB | 1.92 MB  | 565 kB  | 947 kB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.42 ms | 1.03 ms | 54 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21919   | 21919   | 29071   | 29679   | 28364.37 | 2108.28 | 21913   | 312007  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.48 MB | 1.51 MB | 1.45 MB  | 107 kB  | 1.12 MB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.08 ms | 0.59 ms | 36 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6779   | 6779   | 9247   | 9455   | 9049.64 | 732.07  | 6778   | 99549   |
| **Bytes/Sec** | 353 kB | 353 kB | 481 kB | 492 kB | 471 kB  | 38.1 kB | 352 kB | 5.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 3.87 ms | 1.41 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8415   | 8415   | 14095   | 14871   | 13268.8 | 1895.94 | 8413   | 132676  |
| **Bytes/Sec** | 724 kB | 724 kB | 1.21 MB | 1.28 MB | 1.14 MB | 163 kB  | 724 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.55 ms | 1.73 ms | 89 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5723    | 5723    | 14183   | 14695   | 13290.37 | 2471.72 | 5721    | 146199  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 3.06 MB | 3.17 MB | 2.87 MB  | 534 kB  | 1.24 MB | 31.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.41 ms | 1.48 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18111   | 18111   | 34559   | 35679   | 33075.64 | 4812.39 | 18108   | 363769  |
| **Bytes/Sec** | 2.77 MB | 2.77 MB | 5.29 MB | 5.46 MB | 5.06 MB  | 736 kB  | 2.77 MB | 55.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.72 ms | 0.91 ms | 29 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20383   | 20383   | 36287   | 38367  | 35111.2 | 5008.71 | 20381   | 351064  |
| **Bytes/Sec** | 2.28 MB | 2.28 MB | 4.07 MB | 4.3 MB | 3.93 MB | 561 kB  | 2.28 MB | 39.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.62 ms | 0.85 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9543   | 9543   | 16151  | 16719   | 15482.19 | 1947.01 | 9541   | 170293  |
| **Bytes/Sec** | 888 kB | 888 kB | 1.5 MB | 1.56 MB | 1.44 MB  | 181 kB  | 887 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.14 ms | 1.3 ms | 73 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2245   | 2245   | 2997   | 4155   | 3115.1 | 594.08  | 2245   | 31144   |
| **Bytes/Sec** | 258 kB | 258 kB | 345 kB | 478 kB | 358 kB | 68.3 kB | 258 kB | 3.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.36 ms | 17.99 ms | 90 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2629   | 2629   | 5363    | 5519    | 5053.5  | 852.45 | 2628   | 50524   |
| **Bytes/Sec** | 746 kB | 746 kB | 1.52 MB | 1.57 MB | 1.43 MB | 242 kB | 746 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 14 ms | 7.29 ms | 3.33 ms | 184 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg      | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | -------- | ------- | ----- | ------- |
| **Req/Sec**   | 10903 | 10903 | 18831   | 19439   | 18124.41 | 2427.87 | 10902 | 181254  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 1.73 MB | 1.79 MB | 1.67 MB  | 223 kB  | 1 MB  | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.5 ms | 1.27 ms | 57 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5539   | 5539   | 8839   | 9191   | 8575   | 1023.96 | 5537   | 85740   |
| **Bytes/Sec** | 432 kB | 432 kB | 690 kB | 717 kB | 669 kB | 79.8 kB | 432 kB | 6.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.2 ms | 2.29 ms | 89 ms |


---

<p align="center">Generated 2021-03-30T00:40:37.238Z</p>