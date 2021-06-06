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
| deno_canary | 46236.8 | 462341 |
| fastify | 39754.91 | 437307 |
| node | 39088.81 | 390864 |
| deno | 34368 | 378070 |
| http | 19073.2 | 190747 |
| aqua | 16908.41 | 169055 |
| alosaur | 15912.4 | 159099 |
| abc | 14748 | 147474 |
| dinatra | 12000.37 | 131998 |
| drash | 11811.8 | 118107 |
| reno | 11284.91 | 124127 |
| oak | 11179.8 | 111795 |
| mandarinets | 9405 | 94037 |
| express | 8460.28 | 93044 |
| little_native | 8069.46 | 88772 |
| opine | 6657.6 | 66569 |
| tinyhttp | 5930 | 59295 |
| little_std | 4750.5 | 47504 |
| servest | 4402 | 44016 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10911   | 10911   | 15143   | 15495   | 14748   | 1287.08 | 10909   | 147474  |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.41 MB | 1.44 MB | 1.37 MB | 120 kB  | 1.01 MB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.17 ms | 0.85 ms | 46 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10183  | 10183  | 16623   | 16799   | 15912.4 | 1927.37 | 10176  | 159099  |
| **Bytes/Sec** | 936 kB | 936 kB | 1.53 MB | 1.54 MB | 1.46 MB | 177 kB  | 936 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.16 ms | 1.07 ms | 54 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12919   | 12919   | 17375  | 17583   | 16908.41 | 1348.01 | 12916   | 169055  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 1.6 MB | 1.62 MB | 1.56 MB  | 124 kB  | 1.19 MB | 15.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.08 ms | 0.68 ms | 46 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23375   | 23375   | 35775   | 37023   | 34368   | 3827.29 | 23367   | 378070  |
| **Bytes/Sec** | 2.08 MB | 2.08 MB | 3.18 MB | 3.29 MB | 3.06 MB | 341 kB  | 2.08 MB | 33.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.61 ms | 0.81 ms | 25 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 35103   | 35103   | 47423   | 49631   | 46236.8 | 4087.13 | 35072   | 462341  |
| **Bytes/Sec** | 3.12 MB | 3.12 MB | 4.22 MB | 4.42 MB | 4.12 MB | 364 kB  | 3.12 MB | 41.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.13 ms | 0.5 ms | 28 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8647   | 8647   | 12391  | 12615  | 12000.37 | 1091.17 | 8641   | 131998  |
| **Bytes/Sec** | 450 kB | 450 kB | 645 kB | 656 kB | 624 kB   | 56.8 kB | 449 kB | 6.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.04 ms | 1.18 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8067   | 8067   | 12135   | 12719   | 11811.8 | 1274.9 | 8067   | 118107  |
| **Bytes/Sec** | 694 kB | 694 kB | 1.04 MB | 1.09 MB | 1.02 MB | 109 kB | 694 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3 ms  | 1.32 ms | 75 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3903   | 3903   | 8815   | 9711   | 8460.28 | 1576.65 | 3902   | 93044   |
| **Bytes/Sec** | 843 kB | 843 kB | 1.9 MB | 2.1 MB | 1.83 MB | 340 kB  | 843 kB | 20.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.21 ms | 1.93 ms | 39 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22527   | 22527   | 41631   | 41823   | 39754.91 | 5458.88 | 22526   | 437307  |
| **Bytes/Sec** | 3.47 MB | 3.47 MB | 6.41 MB | 6.44 MB | 6.12 MB  | 841 kB  | 3.47 MB | 67.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.27 ms | 0.69 ms | 20 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13783  | 13783  | 19631   | 19951   | 19073.2 | 1771.37 | 13779  | 190747  |
| **Bytes/Sec** | 717 kB | 717 kB | 1.02 MB | 1.04 MB | 992 kB  | 92.1 kB | 717 kB | 9.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.27 ms | 0.89 ms | 51 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5391   | 5391   | 8367    | 8519   | 8069.46 | 858.97 | 5388   | 88772   |
| **Bytes/Sec** | 695 kB | 695 kB | 1.08 MB | 1.1 MB | 1.04 MB | 111 kB | 695 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.38 ms | 1.31 ms | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2551   | 2551   | 5091   | 5167   | 4750.5 | 776.96  | 2550   | 47504   |
| **Bytes/Sec** | 235 kB | 235 kB | 468 kB | 475 kB | 437 kB | 71.5 kB | 235 kB | 4.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.88 ms | 2.47 ms | 45 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5839   | 5839   | 9791   | 10047  | 9405   | 1195.33 | 5836   | 94037   |
| **Bytes/Sec** | 543 kB | 543 kB | 910 kB | 934 kB | 875 kB | 111 kB  | 543 kB | 8.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 6 ms  | 3.79 ms | 1.26 ms | 30 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 25663   | 25663   | 40287   | 42719   | 39088.81 | 4645.23 | 25661   | 390864  |
| **Bytes/Sec** | 2.88 MB | 2.88 MB | 4.51 MB | 4.78 MB | 4.38 MB  | 520 kB  | 2.87 MB | 43.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.27 ms | 0.68 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6219   | 6219   | 11751   | 12191   | 11179.8 | 1704.69 | 6216   | 111795  |
| **Bytes/Sec** | 808 kB | 808 kB | 1.53 MB | 1.59 MB | 1.45 MB | 222 kB  | 808 kB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.27 ms | 1.37 ms | 30 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4723   | 4723   | 6883    | 6963    | 6657.6  | 647.79  | 4723   | 66569   |
| **Bytes/Sec** | 728 kB | 728 kB | 1.06 MB | 1.07 MB | 1.03 MB | 99.7 kB | 727 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 8 ms  | 5.4 ms | 1.45 ms | 41 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7911   | 7911   | 11623  | 11879  | 11284.91 | 1079.5  | 7911   | 124127  |
| **Bytes/Sec** | 617 kB | 617 kB | 906 kB | 927 kB | 880 kB   | 84.1 kB | 617 kB | 9.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.29 ms | 1.22 ms | 49 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2057   | 2057   | 4575   | 5611   | 4402   | 1194.41 | 2056   | 44016   |
| **Bytes/Sec** | 237 kB | 237 kB | 526 kB | 646 kB | 506 kB | 137 kB  | 236 kB | 5.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 47 ms | 8.59 ms | 16.06 ms | 75 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4107   | 4107   | 6143   | 6687   | 5930   | 692.53  | 4105   | 59295   |
| **Bytes/Sec** | 546 kB | 546 kB | 817 kB | 889 kB | 789 kB | 92.1 kB | 546 kB | 7.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 12 ms | 6.27 ms | 2.24 ms | 60 ms |


---

<p align="center">Generated 2021-06-06T01:12:36.684Z</p>
