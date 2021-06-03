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
| deno_canary | 46206.55 | 508322 |
| deno | 44764.8 | 447632 |
| fastify | 38540.37 | 423891 |
| node | 36964 | 369629 |
| http | 20876.41 | 208755 |
| oak | 16628 | 166268 |
| dinatra | 14893.6 | 148920 |
| alosaur | 14589.46 | 160480 |
| express | 14293.8 | 142930 |
| aqua | 14244 | 142425 |
| drash | 14106.4 | 141060 |
| abc | 12654.4 | 126533 |
| mandarinets | 9634.37 | 105966 |
| little_native | 8352.6 | 83527 |
| reno | 7662.6 | 76617 |
| tinyhttp | 7086.4 | 70862 |
| opine | 4278.8 | 42785 |
| little_std | 3451.73 | 37964 |
| servest | 3374.37 | 37115 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 9103   | 9103   | 13055   | 13255   | 12654.4 | 1205.6 | 9101   | 126533  |
| **Bytes/Sec** | 847 kB | 847 kB | 1.21 MB | 1.23 MB | 1.18 MB | 112 kB | 846 kB | 11.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.43 ms | 1.15 ms | 53 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9335   | 9335   | 15143   | 15815   | 14589.46 | 1721.91 | 9334   | 160480  |
| **Bytes/Sec** | 859 kB | 859 kB | 1.39 MB | 1.46 MB | 1.34 MB  | 158 kB  | 859 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.28 ms | 1.15 ms | 31 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9799   | 9799   | 14759   | 15063   | 14244   | 1503.86 | 9793   | 142425  |
| **Bytes/Sec** | 901 kB | 901 kB | 1.36 MB | 1.39 MB | 1.31 MB | 138 kB  | 901 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.22 ms | 1.05 ms | 55 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 35359   | 35359   | 45727   | 46175   | 44764.8 | 3151.29 | 35347   | 447632  |
| **Bytes/Sec** | 3.15 MB | 3.15 MB | 4.07 MB | 4.11 MB | 3.98 MB | 280 kB  | 3.15 MB | 39.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.39 ms | 0.58 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 37823   | 37823   | 47519   | 49343   | 46206.55 | 3367.5 | 37817   | 508322  |
| **Bytes/Sec** | 3.37 MB | 3.37 MB | 4.23 MB | 4.39 MB | 4.11 MB  | 300 kB | 3.37 MB | 45.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.14 ms | 0.47 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11455  | 11455  | 15159  | 15559  | 14893.6 | 1161.88 | 11450  | 148920  |
| **Bytes/Sec** | 595 kB | 595 kB | 788 kB | 809 kB | 774 kB  | 60.5 kB | 595 kB | 7.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.23 ms | 0.95 ms | 19 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9511   | 9511   | 14639   | 14863   | 14106.4 | 1554.27 | 9511   | 141060  |
| **Bytes/Sec** | 818 kB | 818 kB | 1.26 MB | 1.28 MB | 1.21 MB | 134 kB  | 818 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.22 ms | 1.09 ms | 60 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6007   | 6007   | 14999   | 15943   | 14293.8 | 2829.48 | 6006   | 142930  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 3.24 MB | 3.44 MB | 3.09 MB | 611 kB  | 1.3 MB | 30.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.38 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 23759   | 23759   | 40415   | 41023   | 38540.37 | 4797.44 | 23748   | 423891  |
| **Bytes/Sec** | 3.66 MB | 3.66 MB | 6.23 MB | 6.32 MB | 5.93 MB  | 739 kB  | 3.66 MB | 65.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.26 ms | 0.7 ms | 20 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14887  | 14887  | 21663   | 22015   | 20876.41 | 2047.49 | 14885  | 208755  |
| **Bytes/Sec** | 774 kB | 774 kB | 1.13 MB | 1.14 MB | 1.09 MB  | 106 kB  | 774 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.23 ms | 0.91 ms | 46 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5563   | 5563   | 8655    | 8887    | 8352.6  | 945.84 | 5563   | 83527   |
| **Bytes/Sec** | 718 kB | 718 kB | 1.12 MB | 1.15 MB | 1.08 MB | 122 kB | 718 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.29 ms | 1.3 ms | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2139   | 2139   | 3685   | 3789   | 3451.73 | 479.71  | 2139   | 37964   |
| **Bytes/Sec** | 197 kB | 197 kB | 339 kB | 349 kB | 318 kB  | 44.1 kB | 197 kB | 3.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 10 ms | 19 ms | 11.11 ms | 2.91 ms | 61 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5779   | 5779   | 10031  | 10215  | 9634.37 | 1226.3 | 5776   | 105966  |
| **Bytes/Sec** | 538 kB | 538 kB | 933 kB | 950 kB | 896 kB  | 114 kB | 537 kB | 9.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.57 ms | 1.41 ms | 96 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21983   | 21983   | 38431  | 39103   | 36964   | 5002.44 | 21970   | 369629  |
| **Bytes/Sec** | 2.46 MB | 2.46 MB | 4.3 MB | 4.38 MB | 4.14 MB | 560 kB  | 2.46 MB | 41.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.47 ms | 0.78 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11887   | 11887   | 17119   | 17599   | 16628   | 1638.96 | 11883   | 166268  |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 2.23 MB | 2.29 MB | 2.16 MB | 213 kB  | 1.54 MB | 21.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.12 ms | 0.73 ms | 24 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3111   | 3111   | 4455   | 4643   | 4278.8 | 447.09  | 3111   | 42785   |
| **Bytes/Sec** | 479 kB | 479 kB | 686 kB | 715 kB | 659 kB | 68.8 kB | 479 kB | 6.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 14 ms | 8.87 ms | 2.87 ms | 154 ms |


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
| **Req/Sec**   | 4407   | 4407   | 8023   | 8231   | 7662.6 | 1106.15 | 4407   | 76617   |
| **Bytes/Sec** | 344 kB | 344 kB | 626 kB | 642 kB | 598 kB | 86.2 kB | 344 kB | 5.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.64 ms | 1.98 ms | 64 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2167   | 2167   | 3435   | 4379   | 3374.37 | 604.09  | 2167   | 37115   |
| **Bytes/Sec** | 249 kB | 249 kB | 395 kB | 504 kB | 388 kB  | 69.5 kB | 249 kB | 4.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.39 ms | 17.6 ms | 63 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5231   | 5231   | 7283   | 7459   | 7086.4 | 629.37  | 5231   | 70862   |
| **Bytes/Sec** | 696 kB | 696 kB | 969 kB | 992 kB | 942 kB | 83.7 kB | 696 kB | 9.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 9 ms  | 5.14 ms | 1.54 ms | 55 ms |


---

<p align="center">Generated 2021-06-03T02:04:06.648Z</p>
