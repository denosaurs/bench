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
| **Average** | 8486 | 20271.6 | 28728 | 13278.91 | 16800.37 | 14353.64 | 19901.2 | 23107.6 | 18090 | 2612.31 | 4418.61 | 11455.2 | 5455.5 |
| **Total** | 93340 | 202725 | 287260 | 146063 | 184797 | 157879 | 199027 | 231070 | 180871 | 26119 | 44177 | 114548 | 54551 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4667   | 4667   | 8919   | 9095   | 8486   | 1223.35 | 4664   | 93340   |
| **Bytes/Sec** | 434 kB | 434 kB | 829 kB | 845 kB | 789 kB | 114 kB  | 434 kB | 8.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.43 ms | 2.34 ms | 115 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13863   | 13863   | 21055   | 21455   | 20271.6 | 2182.46 | 13857   | 202725  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 1.94 MB | 1.97 MB | 1.87 MB | 201 kB  | 1.27 MB | 18.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.31 ms | 0.99 ms | 63 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22175   | 22175   | 29359  | 29663   | 28728   | 2190.92 | 22163   | 287260  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 1.5 MB | 1.51 MB | 1.47 MB | 112 kB  | 1.13 MB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.08 ms | 0.57 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 10071  | 10071  | 13823  | 14775  | 13278.91 | 1632.76 | 10065  | 146063 |
| **Bytes/Sec** | 524 kB | 524 kB | 719 kB | 769 kB | 690 kB   | 84.9 kB | 523 kB | 7.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.38 ms | 1.18 ms | 26 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10631  | 10631  | 17327   | 18031   | 16800.37 | 1985.95 | 10628  | 184797  |
| **Bytes/Sec** | 914 kB | 914 kB | 1.49 MB | 1.55 MB | 1.44 MB  | 171 kB  | 914 kB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.97 ms | 1.14 ms | 64 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5979    | 5979    | 15391   | 15551   | 14353.64 | 2703.17 | 5976    | 157879  |
| **Bytes/Sec** | 1.29 MB | 1.29 MB | 3.32 MB | 3.36 MB | 3.1 MB   | 584 kB  | 1.29 MB | 34.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.27 ms | 1.28 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10031   | 10031   | 20847   | 21375   | 19901.2 | 3301.17 | 10031   | 199027  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 3.19 MB | 3.27 MB | 3.04 MB | 505 kB  | 1.53 MB | 30.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.5 ms | 1.21 ms | 29 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12511  | 12511  | 24143   | 25263   | 23107.6 | 3572.52 | 12507  | 231070  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 2.71 MB | 2.83 MB | 2.59 MB | 400 kB  | 1.4 MB | 25.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.29 ms | 0.94 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 11087   | 11087   | 18991   | 19551   | 18090   | 2375.6 | 11084   | 180871  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.77 MB | 1.82 MB | 1.68 MB | 221 kB | 1.03 MB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.46 ms | 1.27 ms | 72 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ----- |
| **Req/Sec**   | 1738   | 1738   | 2631   | 3037   | 2612.31 | 347.57  | 1738   | 26119 |
| **Bytes/Sec** | 200 kB | 200 kB | 303 kB | 349 kB | 300 kB  | 39.9 kB | 200 kB | 3 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 52 ms | 14.76 ms | 18.92 ms | 129 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2335   | 2335   | 4643    | 5003    | 4418.61 | 791.9  | 2335   | 44177   |
| **Bytes/Sec** | 664 kB | 664 kB | 1.32 MB | 1.42 MB | 1.25 MB | 225 kB | 663 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 7 ms  | 8 ms  | 17 ms | 8.56 ms | 3.7 ms | 206 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8799   | 8799   | 11599   | 12927   | 11455.2 | 1102.22 | 8794   | 114548  |
| **Bytes/Sec** | 809 kB | 809 kB | 1.07 MB | 1.19 MB | 1.05 MB | 101 kB  | 809 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.06 ms | 1.12 ms | 30 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3721   | 3721   | 5655   | 5799   | 5455.5 | 595     | 3720   | 54551   |
| **Bytes/Sec** | 290 kB | 290 kB | 441 kB | 452 kB | 425 kB | 46.4 kB | 290 kB | 4.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.83 ms | 2.48 ms | 110 ms |


---

<p align="center">Generated 2021-02-26T00:18:14.608Z</p>