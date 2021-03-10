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
| **Average** | 9451.4 | 20847.64 | 21681.2 | 9246.21 | 16798.91 | 14375.4 | 35093.1 | 23401.82 | 15272.8 | 3179.91 | 5202.9 | 11701.6 | 8551.1 |
| **Total** | 94511 | 229322 | 216833 | 92458 | 184758 | 143745 | 386007 | 257417 | 152731 | 34975 | 52020 | 116998 | 94061 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7247   | 7247   | 9695   | 9831   | 9451.4 | 741.33  | 7247   | 94511   |
| **Bytes/Sec** | 674 kB | 674 kB | 901 kB | 914 kB | 879 kB | 68.9 kB | 674 kB | 8.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.48 ms | 1.39 ms | 86 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13967   | 13967   | 21487   | 22559   | 20847.64 | 2271.44 | 13961   | 229322  |
| **Bytes/Sec** | 1.29 MB | 1.29 MB | 1.98 MB | 2.08 MB | 1.92 MB  | 209 kB  | 1.28 MB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.3 ms | 1.02 ms | 49 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14167  | 14167  | 22447   | 23631   | 21681.2 | 2553.21 | 14161  | 216833  |
| **Bytes/Sec** | 722 kB | 722 kB | 1.14 MB | 1.21 MB | 1.11 MB | 130 kB  | 722 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.06 ms | 50 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6923   | 6923   | 9447   | 9927   | 9246.21 | 800.63  | 6923   | 92458   |
| **Bytes/Sec** | 360 kB | 360 kB | 491 kB | 516 kB | 481 kB  | 41.6 kB | 360 kB | 4.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 3.82 ms | 1.51 ms | 41 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10807  | 10807  | 17407  | 17791   | 16798.91 | 1910.51 | 10806  | 184758  |
| **Bytes/Sec** | 930 kB | 930 kB | 1.5 MB | 1.53 MB | 1.44 MB  | 164 kB  | 929 kB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.1 ms | 1.14 ms | 83 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 5871    | 5871    | 15423   | 15975   | 14375.4 | 2877.67 | 5871    | 143745 |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 3.33 MB | 3.45 MB | 3.1 MB  | 621 kB  | 1.27 MB | 31 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.27 ms | 1.33 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19471   | 19471   | 37119   | 37727   | 35093.1 | 5033.82 | 19462   | 386007  |
| **Bytes/Sec** | 2.98 MB | 2.98 MB | 5.68 MB | 5.77 MB | 5.37 MB | 771 kB  | 2.98 MB | 59.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.47 ms | 0.84 ms | 27 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 11999   | 11999   | 24415   | 25327   | 23401.82 | 3623.1 | 11999   | 257417  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 2.74 MB | 2.84 MB | 2.62 MB  | 406 kB | 1.34 MB | 28.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.98 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9735   | 9735   | 15791   | 17119   | 15272.8 | 1981.08 | 9732   | 152731  |
| **Bytes/Sec** | 905 kB | 905 kB | 1.47 MB | 1.59 MB | 1.42 MB | 184 kB  | 905 kB | 14.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.25 ms | 62 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2457   | 2457   | 3111   | 4057   | 3179.91 | 474.27  | 2457   | 34975   |
| **Bytes/Sec** | 283 kB | 283 kB | 358 kB | 467 kB | 366 kB  | 54.6 kB | 283 kB | 4.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 12.1 ms | 17.87 ms | 82 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2871   | 2871   | 5523    | 5663    | 5202.9  | 822.57 | 2870   | 52020   |
| **Bytes/Sec** | 815 kB | 815 kB | 1.57 MB | 1.61 MB | 1.48 MB | 234 kB | 815 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 14 ms | 6.99 ms | 2.83 ms | 79 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8551   | 8551   | 12039   | 12167   | 11701.6 | 1053.78 | 8545   | 116998  |
| **Bytes/Sec** | 786 kB | 786 kB | 1.11 MB | 1.12 MB | 1.08 MB | 97 kB   | 786 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 4 ms  | 3.11 ms | 1.05 ms | 81 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5799   | 5799   | 8863   | 9079   | 8551.1 | 886.46  | 5796   | 94061   |
| **Bytes/Sec** | 452 kB | 452 kB | 692 kB | 708 kB | 667 kB | 69.2 kB | 452 kB | 7.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.15 ms | 2.22 ms | 103 ms |


---

<p align="center">Generated 2021-03-10T00:19:04.046Z</p>