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
| deno_canary | 41253.1 | 453742 |
| node | 24750.8 | 247495 |
| deno | 22664.4 | 226614 |
| fastify | 17544.2 | 175424 |
| http | 16502 | 165008 |
| express | 15698.2 | 156977 |
| oak | 15468 | 154670 |
| alosaur | 14440.8 | 144401 |
| little_native | 12536.37 | 137893 |
| drash | 11643.4 | 116421 |
| abc | 11209.8 | 112083 |
| dinatra | 10215.82 | 112367 |
| aqua | 9780.6 | 97810 |
| mandarinets | 8980.21 | 89790 |
| reno | 7737 | 77356 |
| opine | 6263.6 | 62631 |
| little_std | 4964.7 | 49639 |
| servest | 4708.46 | 51790 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8015   | 8015   | 11663   | 11727   | 11209.8 | 1086.78 | 8012   | 112083  |
| **Bytes/Sec** | 745 kB | 745 kB | 1.08 MB | 1.09 MB | 1.04 MB | 101 kB  | 745 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.21 ms | 1.15 ms | 40 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10303  | 10303  | 14903   | 15095   | 14440.8 | 1393.36 | 10296  | 144401  |
| **Bytes/Sec** | 948 kB | 948 kB | 1.37 MB | 1.39 MB | 1.33 MB | 128 kB  | 947 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.21 ms | 1.04 ms | 61 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 5931   | 5931   | 10143  | 10559  | 9780.6 | 1289.63 | 5928   | 97810 |
| **Bytes/Sec** | 546 kB | 546 kB | 933 kB | 971 kB | 900 kB | 119 kB  | 545 kB | 9 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.46 ms | 1.56 ms | 58 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13679   | 13679   | 23487   | 24815   | 22664.4 | 3117.47 | 13679   | 226614  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 2.09 MB | 2.21 MB | 2.02 MB | 277 kB  | 1.22 MB | 20.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.37 ms | 1.05 ms | 26 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 31935   | 31935   | 42719  | 43039   | 41253.1 | 3146.77 | 31925   | 453742  |
| **Bytes/Sec** | 2.84 MB | 2.84 MB | 3.8 MB | 3.83 MB | 3.67 MB | 280 kB  | 2.84 MB | 40.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.13 ms | 0.59 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7463   | 7463   | 10471  | 10695  | 10215.82 | 878.99  | 7462   | 112367  |
| **Bytes/Sec** | 388 kB | 388 kB | 545 kB | 556 kB | 531 kB   | 45.7 kB | 388 kB | 5.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.32 ms | 1.15 ms | 24 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7639   | 7639   | 12079   | 12199   | 11643.4 | 1337.93 | 7639   | 116421 |
| **Bytes/Sec** | 657 kB | 657 kB | 1.04 MB | 1.05 MB | 1 MB    | 115 kB  | 657 kB | 10 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.18 ms | 1.03 ms | 42 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7271    | 7271    | 16303   | 17151  | 15698.2 | 2844.53 | 7271    | 156977  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.52 MB | 3.7 MB | 3.39 MB | 614 kB  | 1.57 MB | 33.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.15 ms | 1.15 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7163   | 7163   | 18751   | 19871   | 17544.2 | 3631.83 | 7163   | 175424 |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 2.89 MB | 3.06 MB | 2.7 MB  | 559 kB  | 1.1 MB | 27 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.7 ms | 1.59 ms | 29 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 12263  | 12263  | 16815  | 17423  | 16502  | 1432.3  | 12257  | 165008  |
| **Bytes/Sec** | 637 kB | 637 kB | 874 kB | 906 kB | 858 kB | 74.5 kB | 637 kB | 8.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.13 ms | 0.9 ms | 58 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8927    | 8927    | 12991   | 13119   | 12536.37 | 1167.87 | 8925    | 137893  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.68 MB | 1.69 MB | 1.62 MB  | 151 kB  | 1.15 MB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.47 ms | 1.08 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2913   | 2913   | 5263   | 5363   | 4964.7 | 717.51 | 2912   | 49639   |
| **Bytes/Sec** | 268 kB | 268 kB | 484 kB | 494 kB | 457 kB | 66 kB  | 268 kB | 4.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.7 ms | 2.12 ms | 42 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6119   | 6119   | 9303   | 9399   | 8980.21 | 958.97  | 6117   | 89790   |
| **Bytes/Sec** | 569 kB | 569 kB | 865 kB | 874 kB | 835 kB  | 89.1 kB | 569 kB | 8.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.2 ms | 1.1 ms | 38 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 12783   | 12783   | 26095   | 27215   | 24750.8 | 4059.1 | 12778   | 247495  |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 2.92 MB | 3.05 MB | 2.77 MB | 455 kB | 1.43 MB | 27.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.21 ms | 1.03 ms | 44 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 9999   | 9999   | 16079   | 16383   | 15468   | 1847.2 | 9995   | 154670  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 2.09 MB | 2.13 MB | 2.01 MB | 240 kB | 1.3 MB | 20.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.17 ms | 0.92 ms | 32 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4443   | 4443   | 6487   | 6539    | 6263.6 | 611.19  | 4441   | 62631   |
| **Bytes/Sec** | 684 kB | 684 kB | 999 kB | 1.01 MB | 965 kB | 94.2 kB | 684 kB | 9.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.78 ms | 1.64 ms | 44 ms |


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
| **Req/Sec**   | 4583   | 4583   | 8135   | 8351   | 7737   | 1078.56 | 4580   | 77356   |
| **Bytes/Sec** | 357 kB | 357 kB | 635 kB | 651 kB | 603 kB | 84.1 kB | 357 kB | 6.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.58 ms | 1.95 ms | 44 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3393   | 3393   | 4779   | 6047   | 4708.46 | 872.49 | 3392   | 51790   |
| **Bytes/Sec** | 390 kB | 390 kB | 549 kB | 696 kB | 541 kB  | 100 kB | 390 kB | 5.96 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ----- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 8 ms  | 15.51 ms | 70 ms |


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

<p align="center">Generated 2021-07-05T00:43:05.432Z</p>
