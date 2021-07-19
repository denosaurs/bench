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
  - [aqua](#aqua)
  - [deno](#deno)
  - [deno_canary](#deno_canary)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [http](#http)
  - [little_native](#little_native)
  - [little_std](#little_std)
  - [mandarinets](#mandarinets)
  - [node](#node)
  - [oak](#oak)
  - [opine](#opine)
  - [pogo](#pogo)
  - [reno](#reno)
  - [servest](#servest)
  - [tinyhttp](#tinyhttp)

## Overview

| **Framework** | **Average** | **Total** |
| --- | --- | --- |
| deno | 42218.19 | 464375 |
| deno_canary | 40965.6 | 409678 |
| node | 39924 | 399268 |
| fastify | 19514.55 | 214670 |
| http | 15929.2 | 159281 |
| oak | 15001.1 | 165004 |
| express | 13984.91 | 153827 |
| alosaur | 13957.46 | 153518 |
| drash | 12031.64 | 132343 |
| aqua | 11847.8 | 118475 |
| abc | 11568.8 | 115679 |
| dinatra | 10109 | 101088 |
| little_native | 9946.73 | 109417 |
| mandarinets | 9236.6 | 92357 |
| reno | 6679.6 | 66798 |
| opine | 5279.7 | 52790 |
| little_std | 4180.37 | 45978 |
| tinyhttp | 3647.4 | 36467 |
| servest | 3191.6 | 31909 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8439   | 8439   | 11935   | 11975   | 11568.8 | 1045.75 | 8437   | 115679  |
| **Bytes/Sec** | 785 kB | 785 kB | 1.11 MB | 1.11 MB | 1.08 MB | 97.2 kB | 785 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.17 ms | 1.29 ms | 95 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9327   | 9327   | 14447   | 14551   | 13957.46 | 1468.51 | 9320   | 153518  |
| **Bytes/Sec** | 858 kB | 858 kB | 1.33 MB | 1.34 MB | 1.28 MB  | 135 kB  | 857 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.23 ms | 76 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7971   | 7971   | 12247   | 12463   | 11847.8 | 1297.19 | 7970   | 118475  |
| **Bytes/Sec** | 734 kB | 734 kB | 1.13 MB | 1.15 MB | 1.09 MB | 119 kB  | 733 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.08 ms | 1.16 ms | 61 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 32895   | 32895   | 43263   | 43871   | 42218.19 | 3002.89 | 32871   | 464375  |
| **Bytes/Sec** | 2.93 MB | 2.93 MB | 3.85 MB | 3.91 MB | 3.76 MB  | 268 kB  | 2.93 MB | 41.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.21 ms | 0.63 ms | 19 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 29199  | 29199  | 41887   | 43519   | 40965.6 | 3989.78 | 29189  | 409678  |
| **Bytes/Sec** | 2.6 MB | 2.6 MB | 3.73 MB | 3.87 MB | 3.65 MB | 355 kB  | 2.6 MB | 36.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.16 ms | 0.65 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7359   | 7359   | 10431  | 10543  | 10109  | 920.86  | 7356   | 101088  |
| **Bytes/Sec** | 383 kB | 383 kB | 542 kB | 548 kB | 526 kB | 47.9 kB | 383 kB | 5.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.35 ms | 1.33 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8359   | 8359   | 12423   | 12559   | 12031.64 | 1170.57 | 8359   | 132343  |
| **Bytes/Sec** | 719 kB | 719 kB | 1.07 MB | 1.08 MB | 1.03 MB  | 101 kB  | 719 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.11 ms | 1.24 ms | 99 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5363    | 5363    | 15095   | 15487   | 13984.91 | 2826.04 | 5360    | 153827  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 3.26 MB | 3.34 MB | 3.02 MB  | 611 kB  | 1.16 MB | 33.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.34 ms | 1.44 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8519    | 8519    | 20543   | 22239   | 19514.55 | 3645.44 | 8515    | 214670  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 3.16 MB | 3.42 MB | 3.01 MB  | 561 kB  | 1.31 MB | 33.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.43 ms | 1.3 ms | 32 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11239  | 11239  | 16359  | 16815  | 15929.2 | 1582.68 | 11235  | 159281  |
| **Bytes/Sec** | 585 kB | 585 kB | 850 kB | 874 kB | 828 kB  | 82.2 kB | 584 kB | 8.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.17 ms | 0.94 ms | 43 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6023   | 6023   | 10423   | 10599   | 9946.73 | 1266.86 | 6021   | 109417  |
| **Bytes/Sec** | 777 kB | 777 kB | 1.34 MB | 1.37 MB | 1.28 MB | 163 kB  | 777 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.36 ms | 1.33 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2419   | 2419   | 4371   | 4611   | 4180.37 | 601.25  | 2419   | 45978   |
| **Bytes/Sec** | 223 kB | 223 kB | 402 kB | 424 kB | 385 kB  | 55.3 kB | 223 kB | 4.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 8 ms  | 8 ms  | 17 ms | 9.04 ms | 2.65 ms | 55 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5987   | 5987   | 9647   | 9727   | 9236.6 | 1090.57 | 5984   | 92357   |
| **Bytes/Sec** | 557 kB | 557 kB | 897 kB | 904 kB | 859 kB | 102 kB  | 557 kB | 8.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.01 ms | 1.25 ms | 35 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 24287   | 24287   | 41727   | 42207   | 39924   | 5251.11 | 24287   | 399268  |
| **Bytes/Sec** | 2.72 MB | 2.72 MB | 4.67 MB | 4.73 MB | 4.47 MB | 588 kB  | 2.72 MB | 44.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.52 ms | 0.78 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9567    | 9567    | 15551   | 15863   | 15001.1 | 1738.53 | 9567    | 165004  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 2.02 MB | 2.06 MB | 1.95 MB | 226 kB  | 1.24 MB | 21.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.17 ms | 1.14 ms | 85 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3407   | 3407   | 5499   | 5603   | 5279.7 | 632.98  | 3407   | 52790   |
| **Bytes/Sec** | 525 kB | 525 kB | 847 kB | 863 kB | 813 kB | 97.5 kB | 525 kB | 8.13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.96 ms | 2.08 ms | 38 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4215   | 4215   | 6863   | 7135   | 6679.6 | 833     | 4215   | 66798   |
| **Bytes/Sec** | 329 kB | 329 kB | 536 kB | 557 kB | 521 kB | 64.9 kB | 329 kB | 5.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.5 ms | 2.58 ms | 139 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2673   | 2673   | 3181   | 3759   | 3191.6 | 311.16  | 2672   | 31909   |
| **Bytes/Sec** | 307 kB | 307 kB | 366 kB | 432 kB | 367 kB | 35.8 kB | 307 kB | 3.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.04 ms | 18.03 ms | 92 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2885   | 2885   | 3761   | 3801   | 3647.4 | 262.14  | 2885   | 36467   |
| **Bytes/Sec** | 453 kB | 453 kB | 590 kB | 597 kB | 572 kB | 41.1 kB | 453 kB | 5.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 9 ms  | 18 ms | 10.34 ms | 2.63 ms | 35 ms |


---

<p align="center">Generated 2021-07-19T00:48:31.700Z</p>
