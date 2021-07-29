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
| deno_canary | 42384 | 423865 |
| node | 39376.81 | 393779 |
| fastify | 33656 | 370164 |
| deno | 23466.8 | 234674 |
| oak | 18640.37 | 205039 |
| http | 16194.4 | 161924 |
| express | 15120.55 | 166327 |
| aqua | 13429.46 | 147714 |
| alosaur | 12044.91 | 132475 |
| little_native | 11825.1 | 130065 |
| abc | 11374.2 | 113742 |
| drash | 10111.4 | 101097 |
| mandarinets | 9038.21 | 90376 |
| reno | 9017.4 | 90169 |
| dinatra | 5537.1 | 55366 |
| opine | 5301.3 | 53002 |
| little_std | 4597.73 | 50577 |
| tinyhttp | 3833 | 38321 |
| servest | 3231.8 | 32313 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8107   | 8107   | 11679   | 11943   | 11374.2 | 1098.9 | 8107   | 113742  |
| **Bytes/Sec** | 754 kB | 754 kB | 1.09 MB | 1.11 MB | 1.06 MB | 102 kB | 754 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.21 ms | 1.24 ms | 70 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 7399   | 7399   | 12487   | 12823   | 12044.91 | 1485   | 7396   | 132475  |
| **Bytes/Sec** | 680 kB | 680 kB | 1.15 MB | 1.18 MB | 1.11 MB  | 137 kB | 680 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.93 ms | 1.58 ms | 95 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9039   | 9039   | 13887   | 14047   | 13429.46 | 1394.09 | 9034   | 147714  |
| **Bytes/Sec** | 831 kB | 831 kB | 1.28 MB | 1.29 MB | 1.24 MB  | 128 kB  | 831 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.28 ms | 1.12 ms | 71 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15479   | 15479   | 24351   | 25247   | 23466.8 | 2753.94 | 15478   | 234674  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 2.17 MB | 2.25 MB | 2.09 MB | 245 kB  | 1.38 MB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.31 ms | 0.85 ms | 22 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 32863   | 32863   | 43647   | 44415   | 42384   | 3329.42 | 32852   | 423865  |
| **Bytes/Sec** | 2.92 MB | 2.92 MB | 3.89 MB | 3.95 MB | 3.77 MB | 296 kB  | 2.92 MB | 37.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.16 ms | 0.61 ms | 16 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4017   | 4017   | 5575   | 6195   | 5537.1 | 564.96  | 4017   | 55366   |
| **Bytes/Sec** | 209 kB | 209 kB | 290 kB | 322 kB | 288 kB | 29.4 kB | 209 kB | 2.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.76 ms | 2.03 ms | 41 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6431   | 6431   | 10567  | 10623  | 10111.4 | 1235.43 | 6430   | 101097  |
| **Bytes/Sec** | 553 kB | 553 kB | 909 kB | 913 kB | 869 kB  | 106 kB  | 553 kB | 8.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.34 ms | 1.76 ms | 122 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 6847    | 6847    | 16119   | 16767   | 15120.55 | 2727.15 | 6846    | 166327  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.48 MB | 3.62 MB | 3.27 MB  | 589 kB  | 1.48 MB | 35.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.24 ms | 1.28 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 18415   | 18415   | 35263   | 36255   | 33656   | 4886.48 | 18404   | 370164 |
| **Bytes/Sec** | 2.83 MB | 2.83 MB | 5.43 MB | 5.58 MB | 5.18 MB | 753 kB  | 2.83 MB | 57 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.64 ms | 0.95 ms | 31 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12663  | 12663  | 16431  | 17215  | 16194.4 | 1251.91 | 12661  | 161924  |
| **Bytes/Sec** | 658 kB | 658 kB | 855 kB | 895 kB | 842 kB  | 65.1 kB | 658 kB | 8.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.99 ms | 1.03 ms | 23 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8591    | 8591    | 12135   | 12367  | 11825.1 | 1034.67 | 8590    | 130065  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.57 MB | 1.6 MB | 1.53 MB | 133 kB  | 1.11 MB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.14 ms | 0.84 ms | 20 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2467   | 2467   | 4855   | 5035   | 4597.73 | 693.41  | 2466   | 50577   |
| **Bytes/Sec** | 227 kB | 227 kB | 447 kB | 463 kB | 423 kB  | 63.8 kB | 227 kB | 4.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 8 ms  | 15 ms | 8.21 ms | 2.85 ms | 51 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 5739   | 5739   | 9415   | 9511   | 9038.21 | 1102.56 | 5737   | 90376  |
| **Bytes/Sec** | 534 kB | 534 kB | 876 kB | 884 kB | 840 kB  | 102 kB  | 534 kB | 8.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.2 ms | 1.22 ms | 38 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 23551   | 23551   | 41055  | 41503   | 39376.81 | 5288.03 | 23541   | 393779  |
| **Bytes/Sec** | 2.64 MB | 2.64 MB | 4.6 MB | 4.65 MB | 4.41 MB  | 592 kB  | 2.64 MB | 44.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.49 ms | 0.78 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12759   | 12759   | 19375   | 19583   | 18640.37 | 1892.65 | 12754   | 205039  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 2.52 MB | 2.55 MB | 2.42 MB  | 246 kB  | 1.66 MB | 26.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.47 ms | 1.05 ms | 49 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3415   | 3415   | 5523   | 5599   | 5301.3 | 637.06  | 3414   | 53002   |
| **Bytes/Sec** | 526 kB | 526 kB | 850 kB | 862 kB | 816 kB | 98.2 kB | 526 kB | 8.16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 12 ms | 6.94 ms | 2.45 ms | 130 ms |


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
| **Req/Sec**   | 6187   | 6187   | 9359   | 9399   | 9017.4 | 946.95  | 6184   | 90169   |
| **Bytes/Sec** | 483 kB | 483 kB | 730 kB | 733 kB | 703 kB | 73.9 kB | 482 kB | 7.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 3.98 ms | 1.7 ms | 75 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2185   | 2185   | 2853   | 4611   | 3231.8 | 750.47  | 2184   | 32313   |
| **Bytes/Sec** | 251 kB | 251 kB | 328 kB | 530 kB | 372 kB | 86.4 kB | 251 kB | 3.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 11.88 ms | 17.76 ms | 58 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3191   | 3191   | 3881   | 4041   | 3833   | 237.9   | 3191   | 38321   |
| **Bytes/Sec** | 501 kB | 501 kB | 609 kB | 634 kB | 602 kB | 37.3 kB | 501 kB | 6.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 9 ms  | 17 ms | 10.03 ms | 2.46 ms | 41 ms |


---

<p align="center">Generated 2021-07-29T00:45:30.481Z</p>
