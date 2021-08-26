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
| deno_canary | 35654.4 | 356558 |
| node | 33068.81 | 330677 |
| fastify | 30841.6 | 308403 |
| alosaur | 21678.4 | 216795 |
| http | 15617.6 | 156164 |
| oak | 13982.73 | 153813 |
| deno | 13521.6 | 135217 |
| little_native | 10734.3 | 107328 |
| little_std | 9901.4 | 99006 |
| reno | 9463.9 | 94621 |
| abc | 9369.55 | 103061 |
| express | 9081.71 | 90811 |
| aqua | 8885 | 88834 |
| dinatra | 6686.37 | 73548 |
| drash | 5462.7 | 54623 |
| mandarinets | 4624.3 | 46235 |
| opine | 3076.1 | 30751 |
| servest | 2530.4 | 25302 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3737   | 3737   | 10647  | 10991   | 9369.55 | 2436.64 | 3736   | 103061  |
| **Bytes/Sec** | 348 kB | 348 kB | 990 kB | 1.02 MB | 871 kB  | 227 kB  | 347 kB | 9.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.76 ms | 2.29 ms | 134 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13831   | 13831   | 21359  | 28863   | 21678.4 | 6503.26 | 13828   | 216795  |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 1.9 MB | 2.57 MB | 1.93 MB | 579 kB  | 1.23 MB | 19.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.39 ms | 1.03 ms | 42 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5679   | 5679   | 9119   | 9535   | 8885   | 1080.55 | 5677   | 88834   |
| **Bytes/Sec** | 522 kB | 522 kB | 839 kB | 877 kB | 817 kB | 99.4 kB | 522 kB | 8.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 3.95 ms | 2.01 ms | 110 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 9647   | 9647   | 10103  | 22767   | 13521.6 | 4953.1 | 9643   | 135217 |
| **Bytes/Sec** | 859 kB | 859 kB | 900 kB | 2.03 MB | 1.2 MB  | 441 kB | 858 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.46 ms | 1.72 ms | 22 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20591   | 20591   | 42047   | 43359   | 35654.4 | 9392.18 | 20588   | 356558  |
| **Bytes/Sec** | 1.83 MB | 1.83 MB | 3.74 MB | 3.86 MB | 3.17 MB | 836 kB  | 1.83 MB | 31.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.32 ms | 0.84 ms | 24 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4947   | 4947   | 6995   | 7611   | 6686.37 | 820.98  | 4947   | 73548   |
| **Bytes/Sec** | 257 kB | 257 kB | 364 kB | 396 kB | 348 kB  | 42.7 kB | 257 kB | 3.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.48 ms | 3.51 ms | 64 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3405   | 3405   | 5327   | 7147   | 5462.7 | 954.92  | 3404   | 54623  |
| **Bytes/Sec** | 293 kB | 293 kB | 458 kB | 615 kB | 470 kB | 82.1 kB | 293 kB | 4.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 7 ms  | 13 ms | 6.83 ms | 2.81 ms | 70 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4067   | 4067   | 9775    | 10039   | 9081.71 | 1763.68 | 4066   | 90811   |
| **Bytes/Sec** | 879 kB | 879 kB | 2.11 MB | 2.17 MB | 1.96 MB | 381 kB  | 878 kB | 19.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.78 ms | 1.98 ms | 41 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16943   | 16943   | 38047   | 38591   | 30841.6 | 9369.9  | 16934   | 308403  |
| **Bytes/Sec** | 2.61 MB | 2.61 MB | 5.86 MB | 5.94 MB | 4.75 MB | 1.44 MB | 2.61 MB | 47.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.87 ms | 1.01 ms | 23 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11679  | 11679  | 16151  | 16335  | 15617.6 | 1367.85 | 11678  | 156164  |
| **Bytes/Sec** | 608 kB | 608 kB | 840 kB | 849 kB | 812 kB  | 71 kB   | 607 kB | 8.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 1.02 ms | 23 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3411   | 3411   | 11583  | 11935   | 10734.3 | 2457.44 | 3410   | 107328  |
| **Bytes/Sec** | 440 kB | 440 kB | 1.5 MB | 1.54 MB | 1.38 MB | 317 kB  | 440 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.37 ms | 1.78 ms | 38 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6379   | 6379   | 10343   | 10487   | 9901.4  | 1190.49 | 6378   | 99006   |
| **Bytes/Sec** | 823 kB | 823 kB | 1.33 MB | 1.35 MB | 1.28 MB | 154 kB  | 823 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.33 ms | 1.34 ms | 27 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2345   | 2345   | 4935   | 5003   | 4624.3 | 775.37  | 2345   | 46235  |
| **Bytes/Sec** | 218 kB | 218 kB | 459 kB | 465 kB | 430 kB | 72.1 kB | 218 kB | 4.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 17 ms | 8.16 ms | 3.05 ms | 47 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev    | Min    | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | -------- | ------ | ------ |
| **Req/Sec**   | 19695   | 19695   | 39935   | 42751   | 33068.81 | 10382.37 | 19685  | 330677 |
| **Bytes/Sec** | 2.21 MB | 2.21 MB | 4.47 MB | 4.79 MB | 3.7 MB   | 1.16 MB  | 2.2 MB | 37 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------ | ----- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.7 ms | 1 ms  | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 4179   | 4179   | 15567   | 15735   | 13982.73 | 3379.04 | 4178   | 153813 |
| **Bytes/Sec** | 543 kB | 543 kB | 2.02 MB | 2.04 MB | 1.82 MB  | 439 kB  | 543 kB | 20 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.4 ms | 1.61 ms | 49 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1537   | 1537   | 3077   | 4323   | 3076.1 | 701.17 | 1537   | 30751   |
| **Bytes/Sec** | 237 kB | 237 kB | 474 kB | 666 kB | 474 kB | 108 kB | 237 kB | 4.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev | Max    |
| ----------- | ----- | ----- | ----- | -------- | ----- | ------ |
| **Latency** | 8 ms  | 12 ms | 22 ms | 12.51 ms | 5 ms  | 216 ms |


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
| **Req/Sec**   | 3565   | 3565   | 10511  | 10567  | 9463.9 | 2210.47 | 3564   | 94621   |
| **Bytes/Sec** | 278 kB | 278 kB | 820 kB | 824 kB | 738 kB | 172 kB  | 278 kB | 7.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 3.69 ms | 2.52 ms | 149 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1237   | 1237   | 2851   | 3161   | 2530.4 | 673.91  | 1237   | 25302   |
| **Bytes/Sec** | 142 kB | 142 kB | 328 kB | 364 kB | 291 kB | 77.5 kB | 142 kB | 2.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 53 ms | 15.32 ms | 19.25 ms | 92 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


---

<p align="center">Generated 2021-08-26T00:44:00.591Z</p>
