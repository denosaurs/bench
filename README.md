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
| deno | 43113.6 | 431122 |
| node | 42549.6 | 425541 |
| deno_canary | 40029.82 | 440310 |
| fastify | 21208.37 | 233308 |
| express | 16873.28 | 185609 |
| oak | 16550.91 | 182053 |
| http | 15652.8 | 156536 |
| alosaur | 13968 | 139684 |
| aqua | 13261.6 | 132604 |
| little_native | 11724.55 | 128977 |
| abc | 10321.8 | 103218 |
| dinatra | 9288.55 | 102168 |
| drash | 8298 | 82975 |
| mandarinets | 6996.7 | 69961 |
| reno | 6135.9 | 61350 |
| opine | 5492.7 | 54923 |
| servest | 4361.7 | 43609 |
| little_std | 4193.9 | 41930 |
| tinyhttp | 3302.6 | 33020 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ----- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7191   | 7191   | 10767 | 10927   | 10321.8 | 1090.32 | 7188   | 103218 |
| **Bytes/Sec** | 669 kB | 669 kB | 1 MB  | 1.02 MB | 960 kB  | 101 kB  | 668 kB | 9.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.3 ms | 1.62 ms | 116 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10079  | 10079  | 14415   | 14583   | 13968   | 1306.03 | 10076  | 139684  |
| **Bytes/Sec** | 927 kB | 927 kB | 1.33 MB | 1.34 MB | 1.29 MB | 120 kB  | 927 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.21 ms | 74 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9647   | 9647   | 13519   | 13847   | 13261.6 | 1217.73 | 9645   | 132604  |
| **Bytes/Sec** | 888 kB | 888 kB | 1.24 MB | 1.27 MB | 1.22 MB | 112 kB  | 887 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.31 ms | 1.09 ms | 59 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 33375   | 33375   | 44255   | 44607   | 43113.6 | 3272.08 | 33372   | 431122  |
| **Bytes/Sec** | 2.97 MB | 2.97 MB | 3.94 MB | 3.97 MB | 3.84 MB | 291 kB  | 2.97 MB | 38.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.29 ms | 0.63 ms | 15 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 28719   | 28719   | 41535  | 43007   | 40029.82 | 3752.95 | 28717   | 440310  |
| **Bytes/Sec** | 2.56 MB | 2.56 MB | 3.7 MB | 3.83 MB | 3.56 MB  | 334 kB  | 2.56 MB | 39.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.38 ms | 0.76 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6295   | 6295   | 9623   | 10111  | 9288.55 | 1005.78 | 6294   | 102168  |
| **Bytes/Sec** | 327 kB | 327 kB | 500 kB | 526 kB | 483 kB  | 52.3 kB | 327 kB | 5.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.78 ms | 1.65 ms | 32 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5411   | 5411   | 8567   | 9263   | 8298   | 1058.4  | 5411   | 82975   |
| **Bytes/Sec** | 465 kB | 465 kB | 737 kB | 796 kB | 713 kB | 90.9 kB | 465 kB | 7.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.31 ms | 1.9 ms | 105 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7703    | 7703    | 17823   | 18223   | 16873.28 | 2921.01 | 7702    | 185609  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 3.85 MB | 3.93 MB | 3.64 MB  | 631 kB  | 1.66 MB | 40.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.11 ms | 1.02 ms | 26 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 9551    | 9551    | 22479   | 23615   | 21208.37 | 3758.87 | 9545    | 233308  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 3.46 MB | 3.64 MB | 3.27 MB  | 579 kB  | 1.47 MB | 35.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.31 ms | 1.12 ms | 25 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11727  | 11727  | 16111  | 16255  | 15652.8 | 1320.01 | 11723  | 156536  |
| **Bytes/Sec** | 610 kB | 610 kB | 838 kB | 845 kB | 814 kB  | 68.7 kB | 610 kB | 8.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.19 ms | 0.99 ms | 59 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7715   | 7715   | 12159   | 12343   | 11724.55 | 1277.86 | 7715   | 128977  |
| **Bytes/Sec** | 995 kB | 995 kB | 1.57 MB | 1.59 MB | 1.51 MB  | 165 kB  | 995 kB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.15 ms | 0.99 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2557   | 2557   | 4371   | 4567   | 4193.9 | 557.56  | 2556   | 41930   |
| **Bytes/Sec** | 235 kB | 235 kB | 402 kB | 420 kB | 386 kB | 51.3 kB | 235 kB | 3.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 17 ms | 9.02 ms | 2.82 ms | 51 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3909   | 3909   | 7323   | 7579   | 6996.7 | 1035.87 | 3908   | 69961   |
| **Bytes/Sec** | 364 kB | 364 kB | 681 kB | 705 kB | 651 kB | 96.4 kB | 363 kB | 6.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.21 ms | 1.96 ms | 93 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ----- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 26063   | 26063   | 44415   | 44671 | 42549.6 | 5501.13 | 26061   | 425541  |
| **Bytes/Sec** | 2.92 MB | 2.92 MB | 4.97 MB | 5 MB  | 4.77 MB | 616 kB  | 2.92 MB | 47.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.43 ms | 0.71 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11023   | 11023   | 16975   | 17775   | 16550.91 | 1800.52 | 11016   | 182053  |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 2.21 MB | 2.31 MB | 2.15 MB  | 234 kB  | 1.43 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.07 ms | 1.02 ms | 60 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3853   | 3853   | 5699   | 5803   | 5492.7 | 554.45  | 3853   | 54923   |
| **Bytes/Sec** | 593 kB | 593 kB | 878 kB | 893 kB | 846 kB | 85.4 kB | 593 kB | 8.46 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 11 ms | 6.6 ms | 2.08 ms | 118 ms |


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
| **Req/Sec**   | 3881   | 3881   | 6367   | 6819   | 6135.9 | 772.79  | 3880   | 61350   |
| **Bytes/Sec** | 303 kB | 303 kB | 497 kB | 532 kB | 479 kB | 60.3 kB | 303 kB | 4.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 11 ms | 5.97 ms | 2.93 ms | 176 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2457   | 2457   | 4499   | 5751   | 4361.7 | 1188.11 | 2456   | 43609   |
| **Bytes/Sec** | 283 kB | 283 kB | 517 kB | 662 kB | 502 kB | 137 kB  | 282 kB | 5.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 8.67 ms | 16.07 ms | 65 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2637   | 2637   | 3401   | 3521   | 3302.6 | 245.21  | 2637   | 33020   |
| **Bytes/Sec** | 414 kB | 414 kB | 534 kB | 553 kB | 518 kB | 38.4 kB | 414 kB | 5.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 11 ms | 20 ms | 11.59 ms | 3.17 ms | 72 ms |


---

<p align="center">Generated 2021-07-30T00:49:14.147Z</p>
