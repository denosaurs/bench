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
  - [deco](#deco)
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
| deno | 41755.2 | 417545 |
| node | 36502.55 | 401473 |
| deco | 36424 | 400681 |
| alosaur | 33955.64 | 373463 |
| deno_canary | 31314.8 | 313137 |
| reno | 24127.28 | 265408 |
| fastify | 17599.2 | 176008 |
| express | 16358.8 | 163583 |
| oak | 14742.4 | 147427 |
| little_std | 14437.6 | 144370 |
| aqua | 13519.82 | 148708 |
| little_native | 13510.4 | 135102 |
| dinatra | 9550.6 | 95481 |
| opine | 9421 | 94199 |
| abc | 9317.8 | 93179 |
| tinyhttp | 4581.9 | 45814 |
| servest | 2889 | 28885 |
| drash | 1268.2 | 12682 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6759   | 6759   | 9391   | 10039  | 9317.8 | 888.95  | 6758   | 93179   |
| **Bytes/Sec** | 629 kB | 629 kB | 873 kB | 933 kB | 867 kB | 82.7 kB | 628 kB | 8.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.72 ms | 1.53 ms | 86 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19519   | 19519   | 37791   | 38303   | 33955.64 | 6293.33 | 19509   | 373463  |
| **Bytes/Sec** | 1.74 MB | 1.74 MB | 3.36 MB | 3.41 MB | 3.02 MB  | 560 kB  | 1.74 MB | 33.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.69 ms | 0.73 ms | 29 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7443   | 7443   | 15607   | 16495   | 13519.82 | 3135.61 | 7440   | 148708  |
| **Bytes/Sec** | 960 kB | 960 kB | 2.01 MB | 2.13 MB | 1.74 MB  | 404 kB  | 960 kB | 19.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.52 ms | 1.49 ms | 33 ms |


### [deco](https://deno.land/x/deco)

> Deco is a utility library for Deno developers


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg    | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------ | ------ | ------- | ------- |
| **Req/Sec**   | 18847   | 18847   | 40255   | 41087  | 36424  | 6638.8 | 18842   | 400681  |
| **Bytes/Sec** | 2.43 MB | 2.43 MB | 5.19 MB | 5.3 MB | 4.7 MB | 857 kB | 2.43 MB | 51.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.34 ms | 0.7 ms | 18 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 24239   | 24239   | 44671   | 48799   | 41755.2 | 8580.37 | 24224   | 417545  |
| **Bytes/Sec** | 2.16 MB | 2.16 MB | 3.98 MB | 4.35 MB | 3.72 MB | 763 kB  | 2.16 MB | 37.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.27 ms | 0.66 ms | 15 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15031   | 15031   | 36415   | 37695   | 31314.8 | 7573.72 | 15024   | 313137  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 3.24 MB | 3.35 MB | 2.79 MB | 674 kB  | 1.34 MB | 27.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.55 ms | 0.92 ms | 20 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7303   | 7303   | 9863   | 9959   | 9550.6 | 760.52  | 7303   | 95481   |
| **Bytes/Sec** | 380 kB | 380 kB | 513 kB | 518 kB | 496 kB | 39.5 kB | 380 kB | 4.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.45 ms | 1.72 ms | 37 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1128   | 1128   | 1284   | 1298   | 1268.2 | 47.71   | 1128   | 12682   |
| **Bytes/Sec** | 471 kB | 471 kB | 536 kB | 542 kB | 529 kB | 19.9 kB | 470 kB | 5.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 21 ms | 31 ms | 35 ms | 30.95 ms | 7.32 ms | 277 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8255    | 8255    | 18783   | 19343   | 16358.8 | 4112.97 | 8252    | 163583  |
| **Bytes/Sec** | 1.78 MB | 1.78 MB | 4.06 MB | 4.18 MB | 3.53 MB | 889 kB  | 1.78 MB | 35.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.22 ms | 1.08 ms | 24 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ----- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8791    | 8791    | 18703   | 19487 | 17599.2 | 3103.34 | 8785    | 176008  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.88 MB | 3 MB  | 2.71 MB | 478 kB  | 1.35 MB | 27.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.75 ms | 1.33 ms | 29 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ----- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8799    | 8799    | 15103   | 15471 | 13510.4 | 2588.15 | 8795    | 135102  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 1.95 MB | 2 MB  | 1.74 MB | 334 kB  | 1.13 MB | 17.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.37 ms | 1.11 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11103   | 11103   | 15215   | 15415   | 14437.6 | 1644.22 | 11096   | 144370  |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 1.96 MB | 1.99 MB | 1.86 MB | 212 kB  | 1.43 MB | 18.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.19 ms | 0.87 ms | 21 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 19919   | 19919   | 40607   | 42783   | 36502.55 | 7740.88 | 19906   | 401473 |
| **Bytes/Sec** | 2.23 MB | 2.23 MB | 4.55 MB | 4.79 MB | 4.09 MB  | 867 kB  | 2.23 MB | 45 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.59 ms | 0.79 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8111    | 8111    | 16671   | 18751   | 14742.4 | 4080.59 | 8110    | 147427  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 2.17 MB | 2.44 MB | 1.92 MB | 531 kB  | 1.05 MB | 19.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.25 ms | 1.54 ms | 38 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev  | Min     | Total |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------ | ------- | ----- |
| **Req/Sec**   | 7143    | 7143    | 9711    | 9807    | 9421   | 770.83 | 7142    | 94199 |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 1.85 MB | 1.87 MB | 1.8 MB | 147 kB | 1.36 MB | 18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 5 ms  | 3.84 ms | 1.22 ms | 36 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11879   | 11879   | 26959   | 28159   | 24127.28 | 5647.12 | 11874   | 265408  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 3.48 MB | 3.63 MB | 3.11 MB  | 729 kB  | 1.53 MB | 34.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.85 ms | 22 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2385   | 2385   | 2799   | 3293   | 2889   | 252.22 | 2384   | 28885   |
| **Bytes/Sec** | 274 kB | 274 kB | 322 kB | 379 kB | 332 kB | 29 kB  | 274 kB | 3.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 13.36 ms | 18.41 ms | 79 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3165   | 3165   | 4755   | 5035   | 4581.9 | 520.38  | 3165   | 45814   |
| **Bytes/Sec** | 497 kB | 497 kB | 746 kB | 791 kB | 719 kB | 81.6 kB | 497 kB | 7.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 7 ms  | 18 ms | 8.27 ms | 3.83 ms | 136 ms |


---

<p align="center">Generated 2022-02-14T00:34:30.908Z</p>
