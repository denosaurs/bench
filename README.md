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
| **Average** | 10903.2 | 10696.6 | 26365.82 | 13425.6 | 14624 | 14067.1 | 19793.2 | 42444.37 | 17997.46 | 3189.4 | 4158.2 | 10732.6 | 5798.4 |
| **Total** | 109029 | 106961 | 290021 | 134257 | 146230 | 154734 | 197900 | 466870 | 197969 | 31888 | 41574 | 107318 | 57978 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8207   | 8207   | 11231   | 12431   | 10903.2 | 1089.85 | 8200   | 109029  |
| **Bytes/Sec** | 763 kB | 763 kB | 1.04 MB | 1.16 MB | 1.01 MB | 101 kB  | 763 kB | 10.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.17 ms | 1.82 ms | 106 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6939   | 6939   | 10983   | 11991  | 10696.6 | 1330.27 | 6939   | 106961  |
| **Bytes/Sec** | 638 kB | 638 kB | 1.01 MB | 1.1 MB | 984 kB  | 122 kB  | 638 kB | 9.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.3 ms | 1.52 ms | 86 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 19327  | 19327  | 27055   | 27999   | 26365.82 | 2307.99 | 19325  | 290021  |
| **Bytes/Sec** | 986 kB | 986 kB | 1.38 MB | 1.43 MB | 1.34 MB  | 118 kB  | 986 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.69 ms | 38 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9855   | 9855   | 13743  | 14255  | 13425.6 | 1218.31 | 9852   | 134257  |
| **Bytes/Sec** | 513 kB | 513 kB | 715 kB | 741 kB | 698 kB  | 63.3 kB | 512 kB | 6.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.22 ms | 39 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8879   | 8879   | 14999   | 15791   | 14624   | 1957.42 | 8874   | 146230  |
| **Bytes/Sec** | 763 kB | 763 kB | 1.29 MB | 1.36 MB | 1.26 MB | 168 kB  | 763 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.28 ms | 1.39 ms | 94 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6003   | 6003   | 15047   | 15215   | 14067.1 | 2594.14 | 6000   | 154734  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 3.25 MB | 3.29 MB | 3.04 MB | 560 kB  | 1.3 MB | 33.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.28 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10535   | 10535   | 20495   | 23023   | 19793.2 | 3326.53 | 10535   | 197900  |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 3.14 MB | 3.52 MB | 3.03 MB | 509 kB  | 1.61 MB | 30.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.5 ms | 1.11 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ----- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 26543   | 26543   | 44191   | 44671 | 42444.37 | 5058.96 | 26529   | 466870  |
| **Bytes/Sec** | 2.97 MB | 2.97 MB | 4.95 MB | 5 MB  | 4.75 MB  | 567 kB  | 2.97 MB | 52.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.24 ms | 0.64 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11751   | 11751   | 18559   | 19647   | 17997.46 | 2064.17 | 11750   | 197969  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.73 MB | 1.83 MB | 1.67 MB  | 192 kB  | 1.09 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.5 ms | 1.25 ms | 73 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2397   | 2397   | 3109   | 3973   | 3189.4 | 453.33  | 2397   | 31888   |
| **Bytes/Sec** | 276 kB | 276 kB | 358 kB | 457 kB | 367 kB | 52.1 kB | 276 kB | 3.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.06 ms | 17.95 ms | 79 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2473   | 2473   | 4443    | 4563   | 4158.2  | 626.55 | 2472   | 41574   |
| **Bytes/Sec** | 702 kB | 702 kB | 1.26 MB | 1.3 MB | 1.18 MB | 178 kB | 702 kB | 11.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 8 ms  | 8 ms  | 16 ms | 9.1 ms | 3.66 ms | 201 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7555   | 7555   | 10999   | 11311   | 10732.6 | 1071.99 | 7553   | 107318  |
| **Bytes/Sec** | 695 kB | 695 kB | 1.01 MB | 1.04 MB | 987 kB  | 98.6 kB | 695 kB | 9.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.29 ms | 1.26 ms | 63 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4367   | 4367   | 5955   | 6143   | 5798.4 | 491.33  | 4365   | 57978   |
| **Bytes/Sec** | 340 kB | 340 kB | 464 kB | 479 kB | 452 kB | 38.4 kB | 340 kB | 4.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.41 ms | 2.03 ms | 62 ms |


---

<p align="center">Generated 2021-03-05T00:17:53.702Z</p>