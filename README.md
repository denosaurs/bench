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
| deno | 28297.6 | 282950 |
| deno_canary | 25112 | 251110 |
| node | 24295.6 | 242975 |
| fastify | 20413.2 | 204123 |
| http | 17505.82 | 192571 |
| oak | 14817.6 | 148178 |
| drash | 14346.4 | 143456 |
| express | 14134.2 | 141346 |
| little_native | 14060.8 | 140616 |
| abc | 12703.2 | 127031 |
| alosaur | 12504.8 | 125045 |
| aqua | 11190 | 111892 |
| dinatra | 8525.21 | 85252 |
| reno | 7484.8 | 74838 |
| mandarinets | 6717.9 | 67172 |
| tinyhttp | 6366.8 | 63666 |
| little_std | 4707.8 | 47074 |
| servest | 4625.37 | 50874 |
| opine | 4322.5 | 43222 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9063   | 9063   | 13015   | 13431   | 12703.2 | 1235.22 | 9062   | 127031  |
| **Bytes/Sec** | 843 kB | 843 kB | 1.21 MB | 1.25 MB | 1.18 MB | 115 kB  | 843 kB | 11.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.51 ms | 1.08 ms | 54 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8319   | 8319   | 12863   | 13559   | 12504.8 | 1466.14 | 8312   | 125045  |
| **Bytes/Sec** | 765 kB | 765 kB | 1.18 MB | 1.25 MB | 1.15 MB | 135 kB  | 765 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.6 ms | 1.61 ms | 97 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7963   | 7963   | 11487   | 12791   | 11190   | 1748.39 | 7963   | 111892  |
| **Bytes/Sec** | 733 kB | 733 kB | 1.06 MB | 1.18 MB | 1.03 MB | 161 kB  | 733 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.12 ms | 1.56 ms | 76 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18287   | 18287   | 29615   | 30943   | 28297.6 | 3562.66 | 18278   | 282950  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 2.64 MB | 2.75 MB | 2.52 MB | 317 kB  | 1.63 MB | 25.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 5 ms  | 0.81 ms | 1.6 ms | 39 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18543   | 18543   | 25679   | 26879   | 25112   | 2265.61 | 18542   | 251110  |
| **Bytes/Sec** | 1.65 MB | 1.65 MB | 2.29 MB | 2.39 MB | 2.23 MB | 201 kB  | 1.65 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.75 ms | 22 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5507   | 5507   | 8927   | 9199   | 8525.21 | 1057.82 | 5507   | 85252   |
| **Bytes/Sec** | 286 kB | 286 kB | 464 kB | 478 kB | 443 kB  | 55 kB   | 286 kB | 4.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.25 ms | 1.52 ms | 39 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10903  | 10903  | 14535   | 15815   | 14346.4 | 1286.05 | 10896  | 143456  |
| **Bytes/Sec** | 937 kB | 937 kB | 1.25 MB | 1.36 MB | 1.23 MB | 111 kB  | 937 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.19 ms | 0.97 ms | 63 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6075    | 6075    | 15119   | 15511   | 14134.2 | 2741.07 | 6075    | 141346  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 3.27 MB | 3.35 MB | 3.05 MB | 592 kB  | 1.31 MB | 30.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.28 ms | 1.29 ms | 30 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 10991   | 10991   | 21295   | 22863   | 20413.2 | 3386.2 | 10990   | 204123  |
| **Bytes/Sec** | 1.69 MB | 1.69 MB | 3.28 MB | 3.52 MB | 3.14 MB | 521 kB | 1.69 MB | 31.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.16 ms | 24 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------ | ------ | ------ |
| **Req/Sec**   | 11111  | 11111  | 18015  | 18943  | 17505.82 | 2073.2 | 11107  | 192571 |
| **Bytes/Sec** | 578 kB | 578 kB | 937 kB | 985 kB | 910 kB   | 108 kB | 578 kB | 10 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.72 ms | 1.1 ms | 47 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10175   | 10175   | 14495   | 14567   | 14060.8 | 1297.46 | 10169   | 140616  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 1.87 MB | 1.88 MB | 1.81 MB | 167 kB  | 1.31 MB | 18.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.18 ms | 0.8 ms | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2619   | 2619   | 4983   | 5167   | 4707.8 | 757.29  | 2619   | 47074   |
| **Bytes/Sec** | 241 kB | 241 kB | 458 kB | 475 kB | 433 kB | 69.6 kB | 241 kB | 4.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.94 ms | 2.62 ms | 56 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3825   | 3825   | 6963   | 7375   | 6717.9 | 979.98  | 3825   | 67172   |
| **Bytes/Sec** | 356 kB | 356 kB | 648 kB | 686 kB | 625 kB | 91.1 kB | 356 kB | 6.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.52 ms | 1.79 ms | 36 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11959   | 11959   | 25663   | 26591   | 24295.6 | 4205.13 | 11958   | 242975  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 2.88 MB | 2.98 MB | 2.72 MB | 471 kB  | 1.34 MB | 27.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.83 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9775    | 9775    | 15223   | 15735   | 14817.6 | 1702.05 | 9771    | 148178  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 1.98 MB | 2.05 MB | 1.93 MB | 221 kB  | 1.27 MB | 19.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.19 ms | 0.9 ms | 26 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2911   | 2911   | 4515   | 4611   | 4322.5 | 484.57  | 2910   | 43222   |
| **Bytes/Sec** | 448 kB | 448 kB | 696 kB | 710 kB | 666 kB | 74.7 kB | 448 kB | 6.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 15 ms | 8.8 ms | 2.25 ms | 49 ms |


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
| **Req/Sec**   | 4719   | 4719   | 7759   | 8183   | 7484.8 | 952.2   | 4716   | 74838   |
| **Bytes/Sec** | 368 kB | 368 kB | 605 kB | 638 kB | 584 kB | 74.3 kB | 368 kB | 5.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.83 ms | 2.26 ms | 104 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2585   | 2585   | 4931   | 5947   | 4625.37 | 1092.06 | 2584   | 50874   |
| **Bytes/Sec** | 297 kB | 297 kB | 567 kB | 684 kB | 532 kB  | 126 kB  | 297 kB | 5.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 8.15 ms | 15.7 ms | 65 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4423   | 4423   | 6623   | 6719   | 6366.8 | 661.33 | 4421   | 63666   |
| **Bytes/Sec** | 588 kB | 588 kB | 881 kB | 893 kB | 847 kB | 88 kB  | 588 kB | 8.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 11 ms | 5.91 ms | 1.96 ms | 76 ms |


---

<p align="center">Generated 2021-05-25T00:58:01.586Z</p>
