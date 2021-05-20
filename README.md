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
| deno_canary | 43849.6 | 438420 |
| deno | 41753.6 | 417494 |
| fastify | 32719.64 | 359926 |
| node | 22938.8 | 229383 |
| http | 22262.4 | 222608 |
| express | 15473.64 | 170205 |
| aqua | 14516 | 145151 |
| alosaur | 14009.6 | 140075 |
| drash | 12993.6 | 129942 |
| little_native | 11868.2 | 118685 |
| oak | 11759.8 | 117591 |
| dinatra | 11669.6 | 116700 |
| abc | 11055.82 | 121611 |
| reno | 9245.8 | 92445 |
| mandarinets | 7098.1 | 70979 |
| tinyhttp | 6152 | 61515 |
| servest | 5199.3 | 51988 |
| opine | 5021.11 | 50205 |
| little_std | 3546.82 | 39011 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7223   | 7223   | 11351   | 11783  | 11055.82 | 1227.97 | 7223   | 121611  |
| **Bytes/Sec** | 672 kB | 672 kB | 1.06 MB | 1.1 MB | 1.03 MB  | 114 kB  | 672 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.23 ms | 1.11 ms | 31 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9327   | 9327   | 14415   | 14895   | 14009.6 | 1581.36 | 9321   | 140075  |
| **Bytes/Sec** | 858 kB | 858 kB | 1.33 MB | 1.37 MB | 1.29 MB | 146 kB  | 858 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.28 ms | 1.06 ms | 39 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 9839   | 9839   | 14975   | 15655   | 14516   | 1590.8 | 9834   | 145151  |
| **Bytes/Sec** | 905 kB | 905 kB | 1.38 MB | 1.44 MB | 1.34 MB | 146 kB | 905 kB | 13.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.21 ms | 1.01 ms | 54 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 33823   | 33823   | 42911   | 43327   | 41753.6 | 2828.31 | 33801   | 417494  |
| **Bytes/Sec** | 3.01 MB | 3.01 MB | 3.82 MB | 3.86 MB | 3.72 MB | 252 kB  | 3.01 MB | 37.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.38 ms | 0.63 ms | 27 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 33599   | 33599   | 45279   | 45695   | 43849.6 | 3498.55 | 33576   | 438420 |
| **Bytes/Sec** | 2.99 MB | 2.99 MB | 4.03 MB | 4.07 MB | 3.9 MB  | 311 kB  | 2.99 MB | 39 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.36 ms | 0.61 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8303   | 8303   | 12087  | 12215  | 11669.6 | 1135.45 | 8303   | 116700  |
| **Bytes/Sec** | 432 kB | 432 kB | 629 kB | 635 kB | 607 kB  | 59 kB   | 432 kB | 6.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.19 ms | 1.09 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8639   | 8639   | 13439   | 13903  | 12993.6 | 1466.88 | 8634   | 129942  |
| **Bytes/Sec** | 743 kB | 743 kB | 1.16 MB | 1.2 MB | 1.12 MB | 126 kB  | 743 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.52 ms | 1.06 ms | 65 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7075    | 7075    | 16511   | 16783   | 15473.64 | 2699.25 | 7073    | 170205  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 3.57 MB | 3.62 MB | 3.34 MB  | 583 kB  | 1.53 MB | 36.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.15 ms | 1.19 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15599  | 15599  | 34879   | 35263   | 32719.64 | 5504.08 | 15596  | 359926  |
| **Bytes/Sec** | 2.4 MB | 2.4 MB | 5.37 MB | 5.43 MB | 5.04 MB  | 848 kB  | 2.4 MB | 55.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.67 ms | 0.98 ms | 47 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16783  | 16783  | 22799   | 23327   | 22262.4 | 1848.4  | 16769  | 222608  |
| **Bytes/Sec** | 872 kB | 872 kB | 1.19 MB | 1.21 MB | 1.16 MB | 96.2 kB | 872 kB | 11.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.71 ms | 24 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7319   | 7319   | 12415  | 12519   | 11868.2 | 1523.02 | 7317   | 118685  |
| **Bytes/Sec** | 944 kB | 944 kB | 1.6 MB | 1.62 MB | 1.53 MB | 197 kB  | 944 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.1 ms | 1.05 ms | 25 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2215   | 2215   | 3689   | 3835   | 3546.82 | 444.07  | 2215   | 39011   |
| **Bytes/Sec** | 204 kB | 204 kB | 339 kB | 353 kB | 326 kB  | 40.8 kB | 204 kB | 3.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 10 ms | 19 ms | 10.83 ms | 2.76 ms | 60 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3891   | 3891   | 7399   | 7639   | 7098.1 | 1073.95 | 3890   | 70979  |
| **Bytes/Sec** | 362 kB | 362 kB | 688 kB | 711 kB | 660 kB | 99.9 kB | 362 kB | 6.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.13 ms | 1.87 ms | 42 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14551   | 14551   | 23743   | 25151   | 22938.8 | 2891.81 | 14551   | 229383  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 2.66 MB | 2.82 MB | 2.57 MB | 324 kB  | 1.63 MB | 25.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.79 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7979    | 7979    | 12215   | 12599   | 11759.8 | 1316.14 | 7976    | 117591  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.59 MB | 1.64 MB | 1.53 MB | 171 kB  | 1.04 MB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.91 ms | 1.21 ms | 39 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3481   | 3481   | 5259   | 5427   | 5021.11 | 568.13  | 3480   | 50205   |
| **Bytes/Sec** | 536 kB | 536 kB | 810 kB | 836 kB | 773 kB  | 87.6 kB | 536 kB | 7.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 12 ms | 7.46 ms | 2.11 ms | 46 ms |


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
| **Req/Sec**   | 6167   | 6167   | 9591   | 9855   | 9245.8 | 1066.48 | 6167   | 92445   |
| **Bytes/Sec** | 481 kB | 481 kB | 748 kB | 769 kB | 721 kB | 83.1 kB | 481 kB | 7.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.63 ms | 1.79 ms | 71 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3019   | 3019   | 5767   | 6535   | 5199.3 | 1329.85 | 3018   | 51988   |
| **Bytes/Sec** | 347 kB | 347 kB | 663 kB | 752 kB | 598 kB | 153 kB  | 347 kB | 5.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 7.23 ms | 15.01 ms | 61 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4123   | 4123   | 6327   | 6723   | 6152   | 711.77  | 4120   | 61515   |
| **Bytes/Sec** | 548 kB | 548 kB | 842 kB | 894 kB | 818 kB | 94.7 kB | 548 kB | 8.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 11 ms | 6.05 ms | 2.08 ms | 65 ms |


---

<p align="center">Generated 2021-05-20T00:51:09.648Z</p>
