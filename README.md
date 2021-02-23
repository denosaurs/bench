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
| **Average** | 9668.21 | 21006.91 | 22054 | 15048.37 | 20108.41 | 12826.2 | 31856.73 | 33238.19 | 21333.2 | 3017.64 | 3664 | 10175.82 | 5037.5 |
| **Total** | 96686 | 231106 | 220531 | 165523 | 201080 | 128252 | 350417 | 365620 | 213339 | 33184 | 36637 | 111943 | 50368 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5647   | 5647   | 10111  | 10703  | 9668.21 | 1395.46 | 5646   | 96686   |
| **Bytes/Sec** | 525 kB | 525 kB | 941 kB | 995 kB | 899 kB  | 130 kB  | 525 kB | 8.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.6 ms | 1.86 ms | 32 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14791   | 14791   | 21775 | 23087   | 21006.91 | 2180.41 | 14790   | 231106  |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 2 MB  | 2.12 MB | 1.93 MB  | 201 kB  | 1.36 MB | 21.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.35 ms | 1.13 ms | 60 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14007  | 14007  | 22703   | 23903   | 22054   | 2747.16 | 14004  | 220531  |
| **Bytes/Sec** | 714 kB | 714 kB | 1.16 MB | 1.22 MB | 1.12 MB | 140 kB  | 714 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.28 ms | 1.06 ms | 50 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11039  | 11039  | 15511  | 15743  | 15048.37 | 1289.17 | 11033  | 165523  |
| **Bytes/Sec** | 574 kB | 574 kB | 807 kB | 819 kB | 783 kB   | 67.1 kB | 574 kB | 8.61 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.2 ms | 0.93 ms | 24 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12599   | 12599   | 20927  | 21231   | 20108.41 | 2511.82 | 12596   | 201080  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.8 MB | 1.83 MB | 1.73 MB  | 216 kB  | 1.08 MB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 1.03 ms | 84 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5131    | 5131    | 12967  | 15367   | 12826.2 | 2770.71 | 5131    | 128252  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 2.8 MB | 3.32 MB | 2.77 MB | 598 kB  | 1.11 MB | 27.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.61 ms | 1.62 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17343   | 17343   | 33343  | 33727   | 31856.73 | 4600.01 | 17337   | 350417  |
| **Bytes/Sec** | 2.65 MB | 2.65 MB | 5.1 MB | 5.16 MB | 4.87 MB  | 704 kB  | 2.65 MB | 53.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.7 ms | 0.96 ms | 30 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14207   | 14207   | 35455   | 36159   | 33238.19 | 6101.54 | 14204   | 365620  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 3.97 MB | 4.05 MB | 3.72 MB  | 683 kB  | 1.59 MB | 40.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.66 ms | 0.92 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15855   | 15855   | 22047   | 22991   | 21333.2 | 1981.41 | 15854   | 213339  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.05 MB | 2.14 MB | 1.98 MB | 184 kB  | 1.47 MB | 19.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.91 ms | 58 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2049   | 2049   | 2983   | 4119   | 3017.64 | 580.51  | 2048   | 33184   |
| **Bytes/Sec** | 236 kB | 236 kB | 343 kB | 474 kB | 347 kB  | 66.8 kB | 236 kB | 3.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.74 ms | 18.08 ms | 94 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1843   | 1843   | 4017    | 4095    | 3664    | 693.72 | 1843   | 36637   |
| **Bytes/Sec** | 524 kB | 524 kB | 1.14 MB | 1.16 MB | 1.04 MB | 197 kB | 523 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 20 ms | 10.44 ms | 4.59 ms | 229 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7135   | 7135   | 10471  | 10831  | 10175.82 | 985.6   | 7135   | 111943  |
| **Bytes/Sec** | 657 kB | 657 kB | 963 kB | 996 kB | 936 kB   | 90.6 kB | 656 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.45 ms | 1.38 ms | 69 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3301   | 3301   | 5271   | 5487   | 5037.5 | 603.96  | 3300   | 50368   |
| **Bytes/Sec** | 257 kB | 257 kB | 411 kB | 428 kB | 393 kB | 47.1 kB | 257 kB | 3.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 13 ms | 7.45 ms | 2.79 ms | 157 ms |


---

<p align="center">Generated 2021-02-23T00:18:06.635Z</p>