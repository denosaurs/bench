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
| **Average** | 6812.4 | 23380.73 | 20238.8 | 8591.8 | 17711.6 | 8705.73 | 36048.81 | 41386.91 | 15137.46 | 3027.55 | 4541.4 | 18393.2 | 8079.6 |
| **Total** | 68118 | 257184 | 202378 | 85920 | 177086 | 95765 | 360446 | 455307 | 166508 | 33298 | 45408 | 183938 | 80782 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4447   | 4447   | 7111   | 7255   | 6812.4 | 801.76  | 4447   | 68118   |
| **Bytes/Sec** | 414 kB | 414 kB | 662 kB | 675 kB | 634 kB | 74.5 kB | 414 kB | 6.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.4 ms | 2.2 ms | 38 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 15239  | 15239  | 24143   | 24911   | 23380.73 | 2606.4 | 15234  | 257184  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 2.22 MB | 2.29 MB | 2.15 MB  | 240 kB | 1.4 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.81 ms | 35 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13743  | 13743  | 21023   | 22095   | 20238.8 | 2243.51 | 13736  | 202378  |
| **Bytes/Sec** | 701 kB | 701 kB | 1.07 MB | 1.13 MB | 1.03 MB | 114 kB  | 701 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.35 ms | 1.14 ms | 56 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6499   | 6499   | 8751   | 9055   | 8591.8 | 713.66  | 6499   | 85920   |
| **Bytes/Sec** | 338 kB | 338 kB | 455 kB | 471 kB | 447 kB | 37.1 kB | 338 kB | 4.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.27 ms | 1.44 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12007   | 12007   | 18255   | 19071   | 17711.6 | 1967.36 | 12002   | 177086  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.57 MB | 1.64 MB | 1.52 MB | 169 kB  | 1.03 MB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.7 ms | 1.21 ms | 56 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4017   | 4017   | 9351    | 9543    | 8705.73 | 1543.35 | 4017   | 95765   |
| **Bytes/Sec** | 868 kB | 868 kB | 2.02 MB | 2.06 MB | 1.88 MB | 333 kB  | 868 kB | 20.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 10 ms | 4.07 ms | 2.12 ms | 47 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19295   | 19295   | 37887  | 38623   | 36048.81 | 5625.38 | 19282   | 360446  |
| **Bytes/Sec** | 2.95 MB | 2.95 MB | 5.8 MB | 5.91 MB | 5.51 MB  | 861 kB  | 2.95 MB | 55.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.63 ms | 0.81 ms | 22 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 26591   | 26591   | 43071   | 43743  | 41386.91 | 4727.65 | 26586   | 455307 |
| **Bytes/Sec** | 2.98 MB | 2.98 MB | 4.83 MB | 4.9 MB | 4.64 MB  | 530 kB  | 2.98 MB | 51 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.44 ms | 0.69 ms | 18 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9759   | 9759   | 15543   | 16463   | 15137.46 | 1748.63 | 9757   | 166508  |
| **Bytes/Sec** | 908 kB | 908 kB | 1.45 MB | 1.53 MB | 1.41 MB  | 163 kB  | 907 kB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.22 ms | 53 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2189   | 2189   | 3149   | 3791   | 3027.55 | 423.39  | 2188   | 33298   |
| **Bytes/Sec** | 252 kB | 252 kB | 362 kB | 436 kB | 348 kB  | 48.7 kB | 252 kB | 3.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.71 ms | 18.25 ms | 103 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2203   | 2203   | 4799    | 5063    | 4541.4  | 831.26 | 2203   | 45408   |
| **Bytes/Sec** | 626 kB | 626 kB | 1.36 MB | 1.44 MB | 1.29 MB | 236 kB | 626 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 17 ms | 8.28 ms | 3.76 ms | 186 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13159   | 13159   | 18607   | 20543   | 18393.2 | 1981.88 | 13156   | 183938  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 1.71 MB | 1.89 MB | 1.69 MB | 182 kB  | 1.21 MB | 16.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.54 ms | 1.28 ms | 60 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4911   | 4911   | 8455   | 8583   | 8079.6 | 1066.7  | 4911   | 80782  |
| **Bytes/Sec** | 383 kB | 383 kB | 659 kB | 669 kB | 630 kB | 83.1 kB | 383 kB | 6.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.54 ms | 1.98 ms | 94 ms |


---

<p align="center">Generated 2020-12-21T00:22:16.369Z</p>