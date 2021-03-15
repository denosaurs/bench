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
| **Average** | 7467.46 | 21706.8 | 25377.6 | 8831 | 16628.41 | 11669 | 16082 | 22131.6 | 19411.6 | 2994.6 | 4460.5 | 13064 | 9132.6 |
| **Total** | 82136 | 217081 | 253764 | 88305 | 166266 | 116692 | 176917 | 221310 | 194117 | 29942 | 44594 | 130643 | 91321 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5127   | 5127   | 7635   | 8127   | 7467.46 | 772.73  | 5124   | 82136   |
| **Bytes/Sec** | 477 kB | 477 kB | 710 kB | 756 kB | 694 kB  | 71.9 kB | 477 kB | 7.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.73 ms | 1.82 ms | 98 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 15655   | 15655   | 22639   | 23119   | 21706.8 | 2190.93 | 15653   | 217081 |
| **Bytes/Sec** | 1.44 MB | 1.44 MB | 2.08 MB | 2.13 MB | 2 MB    | 201 kB  | 1.44 MB | 20 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.25 ms | 1.01 ms | 48 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17983  | 17983  | 26239   | 26927   | 25377.6 | 2500.93 | 17977  | 253764  |
| **Bytes/Sec** | 917 kB | 917 kB | 1.34 MB | 1.37 MB | 1.29 MB | 127 kB  | 917 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.14 ms | 0.8 ms | 51 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6531   | 6531   | 8975   | 9647   | 8831   | 804.23  | 6530   | 88305   |
| **Bytes/Sec** | 340 kB | 340 kB | 467 kB | 502 kB | 459 kB | 41.8 kB | 340 kB | 4.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 3.92 ms | 1.86 ms | 48 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10503  | 10503  | 17119   | 17887   | 16628.41 | 2064.52 | 10496  | 166266  |
| **Bytes/Sec** | 903 kB | 903 kB | 1.47 MB | 1.54 MB | 1.43 MB  | 177 kB  | 903 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.11 ms | 1.1 ms | 78 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 4671    | 4671    | 12607   | 13087   | 11669   | 2440.2 | 4670    | 116692  |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 2.72 MB | 2.83 MB | 2.52 MB | 527 kB | 1.01 MB | 25.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 9 ms  | 2.85 ms | 2.23 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6931    | 6931    | 17007  | 17903   | 16082   | 2935.39 | 6931    | 176917  |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 2.6 MB | 2.74 MB | 2.46 MB | 449 kB  | 1.06 MB | 27.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.15 ms | 1.31 ms | 32 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 10879   | 10879   | 23327   | 24031   | 22131.6 | 3771.3 | 10877   | 221310  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 2.61 MB | 2.69 MB | 2.48 MB | 422 kB | 1.22 MB | 24.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.33 ms | 1.16 ms | 35 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13647   | 13647   | 19951   | 20767   | 19411.6 | 1942.35 | 13640   | 194117  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 1.85 MB | 1.93 MB | 1.81 MB | 181 kB  | 1.27 MB | 18.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 0.91 ms | 46 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2201   | 2201   | 2947   | 3753   | 2994.6 | 396.69  | 2201   | 29942   |
| **Bytes/Sec** | 253 kB | 253 kB | 339 kB | 432 kB | 344 kB | 45.6 kB | 253 kB | 3.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.85 ms | 18.27 ms | 84 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2555   | 2555   | 4699    | 4883    | 4460.5  | 647.64 | 2554   | 44594   |
| **Bytes/Sec** | 726 kB | 726 kB | 1.33 MB | 1.39 MB | 1.27 MB | 184 kB | 725 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 15 ms | 8.47 ms | 3.66 ms | 204 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 9751   | 9751   | 13359   | 13975   | 13064  | 1143.1 | 9751   | 130643 |
| **Bytes/Sec** | 898 kB | 898 kB | 1.23 MB | 1.29 MB | 1.2 MB | 105 kB | 897 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.57 ms | 1.11 ms | 73 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6203   | 6203   | 9447   | 9623   | 9132.6 | 981.33  | 6200   | 91321   |
| **Bytes/Sec** | 484 kB | 484 kB | 737 kB | 751 kB | 712 kB | 76.6 kB | 484 kB | 7.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 3.67 ms | 2.01 ms | 98 ms |


---

<p align="center">Generated 2021-03-15T00:21:35.500Z</p>