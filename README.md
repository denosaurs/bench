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
| **Average** | 7765 | 23600.73 | 21405.2 | 14487.64 | 17022.8 | 8750.91 | 35498.4 | 19243.6 | 18803.6 | 3147.9 | 3878.9 | 11788.8 | 6854.7 |
| **Total** | 77643 | 259599 | 214059 | 159362 | 170228 | 96250 | 354945 | 192450 | 188047 | 31473 | 38781 | 117892 | 68544 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4487   | 4487   | 8183   | 8423   | 7765   | 1121.4 | 4484   | 77643   |
| **Bytes/Sec** | 417 kB | 417 kB | 761 kB | 783 kB | 722 kB | 104 kB | 417 kB | 7.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.66 ms | 1.95 ms | 40 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 17327   | 17327   | 24159   | 25199   | 23600.73 | 2118.2 | 17317   | 259599  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.22 MB | 2.32 MB | 2.17 MB  | 195 kB | 1.59 MB | 23.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.82 ms | 59 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14447  | 14447  | 22175   | 22767   | 21405.2 | 2348.76 | 14446  | 214059  |
| **Bytes/Sec** | 737 kB | 737 kB | 1.13 MB | 1.16 MB | 1.09 MB | 120 kB  | 737 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 0.97 ms | 45 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11103  | 11103  | 15063  | 15343  | 14487.64 | 1306.73 | 11101  | 159362  |
| **Bytes/Sec** | 578 kB | 578 kB | 783 kB | 798 kB | 753 kB   | 68 kB   | 577 kB | 8.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.27 ms | 1.19 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10863  | 10863  | 17599   | 18415   | 17022.8 | 2100.65 | 10861  | 170228  |
| **Bytes/Sec** | 934 kB | 934 kB | 1.51 MB | 1.58 MB | 1.46 MB | 181 kB  | 934 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.09 ms | 1.05 ms | 75 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4255   | 4255   | 9319    | 9791    | 8750.91 | 1508.55 | 4253   | 96250   |
| **Bytes/Sec** | 919 kB | 919 kB | 2.01 MB | 2.12 MB | 1.89 MB | 326 kB  | 919 kB | 20.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 10 ms | 4.02 ms | 2.05 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19007   | 19007   | 37375   | 38015   | 35498.4 | 5511.14 | 18997   | 354945  |
| **Bytes/Sec** | 2.91 MB | 2.91 MB | 5.72 MB | 5.82 MB | 5.43 MB | 843 kB  | 2.91 MB | 54.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.62 ms | 0.82 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 10703  | 10703  | 19935   | 22799   | 19243.6 | 3144.9 | 10702  | 192450  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 2.23 MB | 2.55 MB | 2.16 MB | 352 kB | 1.2 MB | 21.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.55 ms | 1.15 ms | 33 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11711   | 11711   | 19375  | 20239   | 18803.6 | 2399.35 | 11709   | 188047  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.8 MB | 1.88 MB | 1.75 MB | 223 kB  | 1.09 MB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.35 ms | 1.16 ms | 73 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1994   | 1994   | 3281   | 3871   | 3147.9 | 588.27  | 1994   | 31473   |
| **Bytes/Sec** | 229 kB | 229 kB | 377 kB | 445 kB | 362 kB | 67.6 kB | 229 kB | 3.62 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.22 ms | 17.99 ms | 84 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 2007   | 2007   | 4123    | 4335    | 3878.9 | 713.81 | 2007   | 38781 |
| **Bytes/Sec** | 570 kB | 570 kB | 1.17 MB | 1.23 MB | 1.1 MB | 203 kB | 570 kB | 11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 18 ms | 9.73 ms | 4.32 ms | 216 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8743   | 8743   | 11903  | 12639   | 11788.8 | 1067.08 | 8742   | 117892  |
| **Bytes/Sec** | 804 kB | 804 kB | 1.1 MB | 1.16 MB | 1.08 MB | 98.2 kB | 804 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.84 ms | 1.3 ms | 57 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3881   | 3881   | 7187   | 7431   | 6854.7 | 1020.47 | 3880   | 68544   |
| **Bytes/Sec** | 303 kB | 303 kB | 561 kB | 580 kB | 535 kB | 79.6 kB | 303 kB | 5.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.35 ms | 2.1 ms | 109 ms |


---

<p align="center">Generated 2021-02-24T00:19:05.833Z</p>