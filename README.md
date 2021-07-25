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
| deno_canary | 39141.1 | 430563 |
| fastify | 32144 | 321420 |
| node | 31989.6 | 319878 |
| express | 14686 | 161532 |
| deno | 13954.8 | 139536 |
| http | 13340 | 133387 |
| aqua | 11877.4 | 118771 |
| abc | 11553 | 115518 |
| little_native | 11537.4 | 115375 |
| drash | 10221.8 | 102215 |
| dinatra | 8421.3 | 84209 |
| reno | 7979.8 | 79787 |
| mandarinets | 7246.7 | 72455 |
| alosaur | 7195.7 | 71954 |
| oak | 6374.9 | 63742 |
| little_std | 4811.9 | 48109 |
| opine | 3424.3 | 34239 |
| servest | 3013.91 | 33150 |
| tinyhttp | 2500.6 | 25000 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8071   | 8071   | 11919   | 11991   | 11553   | 1161.58 | 8071   | 115518  |
| **Bytes/Sec** | 751 kB | 751 kB | 1.11 MB | 1.12 MB | 1.07 MB | 108 kB  | 751 kB | 10.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.18 ms | 1.06 ms | 28 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3109   | 3109   | 6123   | 11631   | 7195.7 | 2653.9 | 3108   | 71954   |
| **Bytes/Sec** | 286 kB | 286 kB | 563 kB | 1.07 MB | 662 kB | 244 kB | 286 kB | 6.62 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 5 ms  | 11 ms | 5.15 ms | 3.23 ms | 185 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6707   | 6707   | 12351   | 13575   | 11877.4 | 1823.53 | 6704   | 118771  |
| **Bytes/Sec** | 617 kB | 617 kB | 1.14 MB | 1.25 MB | 1.09 MB | 168 kB  | 617 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.07 ms | 1.5 ms | 51 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9415   | 9415   | 9831   | 24239   | 13954.8 | 5826.32 | 9411   | 139536  |
| **Bytes/Sec** | 838 kB | 838 kB | 875 kB | 2.16 MB | 1.24 MB | 518 kB  | 838 kB | 12.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.39 ms | 1.84 ms | 28 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20319   | 20319   | 44031   | 44447   | 39141.1 | 8335.19 | 20313   | 430563  |
| **Bytes/Sec** | 1.81 MB | 1.81 MB | 3.92 MB | 3.96 MB | 3.48 MB | 742 kB  | 1.81 MB | 38.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.28 ms | 0.78 ms | 20 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2407   | 2407   | 9383   | 9607   | 8421.3 | 2176.74 | 2407   | 84209   |
| **Bytes/Sec** | 125 kB | 125 kB | 488 kB | 500 kB | 438 kB | 113 kB  | 125 kB | 4.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 12 ms | 4.31 ms | 2.82 ms | 46 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6719   | 6719   | 10599  | 10839  | 10221.8 | 1184.66 | 6717   | 102215  |
| **Bytes/Sec** | 578 kB | 578 kB | 911 kB | 932 kB | 879 kB  | 102 kB  | 578 kB | 8.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.34 ms | 1.59 ms | 106 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7263    | 7263    | 17023   | 17647   | 14686   | 4076.2 | 7263    | 161532  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.68 MB | 3.81 MB | 3.17 MB | 881 kB | 1.57 MB | 34.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.38 ms | 1.33 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19551   | 19551   | 36287   | 40767   | 32144   | 9350.66 | 19537   | 321420  |
| **Bytes/Sec** | 3.01 MB | 3.01 MB | 5.59 MB | 6.28 MB | 4.95 MB | 1.44 MB | 3.01 MB | 49.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.51 ms | 1.01 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 9471   | 9471   | 13863  | 14415  | 13340  | 1455.85 | 9471   | 133387  |
| **Bytes/Sec** | 493 kB | 493 kB | 721 kB | 750 kB | 694 kB | 75.6 kB | 492 kB | 6.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.43 ms | 1.23 ms | 62 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 8123    | 8123    | 11959   | 12031   | 11537.4 | 1146.6 | 8123    | 115375  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.54 MB | 1.55 MB | 1.49 MB | 148 kB | 1.05 MB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.16 ms | 0.97 ms | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2853   | 2853   | 5059   | 5223   | 4811.9 | 679.94  | 2853   | 48109   |
| **Bytes/Sec** | 263 kB | 263 kB | 466 kB | 480 kB | 443 kB | 62.5 kB | 262 kB | 4.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 14 ms | 7.82 ms | 2.39 ms | 47 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2805   | 2805   | 6643   | 9567   | 7246.7 | 2135.13 | 2805   | 72455   |
| **Bytes/Sec** | 261 kB | 261 kB | 618 kB | 889 kB | 674 kB | 199 kB  | 261 kB | 6.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 13 ms | 5.16 ms | 2.63 ms | 38 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17311   | 17311   | 36991   | 38719   | 31989.6 | 9119.62 | 17303   | 319878  |
| **Bytes/Sec** | 1.94 MB | 1.94 MB | 4.14 MB | 4.34 MB | 3.58 MB | 1.02 MB | 1.94 MB | 35.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.52 ms | 1.08 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2767   | 2767   | 5679   | 11967   | 6374.9 | 2430.81 | 2767   | 63742   |
| **Bytes/Sec** | 360 kB | 360 kB | 738 kB | 1.56 MB | 829 kB | 316 kB  | 360 kB | 8.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 6 ms  | 13 ms | 5.81 ms | 3.27 ms | 68 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1923   | 1923   | 3155   | 4615   | 3424.3 | 768.29 | 1923   | 34239   |
| **Bytes/Sec** | 296 kB | 296 kB | 486 kB | 711 kB | 527 kB | 118 kB | 296 kB | 5.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 7 ms  | 11 ms | 21 ms | 11.2 ms | 4.1 ms | 138 ms |


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
| **Req/Sec**   | 4203   | 4203   | 7099   | 9839   | 7979.8 | 1797.57 | 4200   | 79787   |
| **Bytes/Sec** | 328 kB | 328 kB | 554 kB | 767 kB | 622 kB | 140 kB  | 328 kB | 6.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.51 ms | 2.57 ms | 166 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1492   | 1492   | 2987   | 4311   | 3013.91 | 662.03  | 1492   | 33150   |
| **Bytes/Sec** | 172 kB | 172 kB | 344 kB | 496 kB | 347 kB  | 76.1 kB | 172 kB | 3.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.78 ms | 18.33 ms | 105 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1600   | 1600   | 2641   | 2759   | 2500.6 | 359.46  | 1600   | 25000   |
| **Bytes/Sec** | 251 kB | 251 kB | 415 kB | 433 kB | 393 kB | 56.4 kB | 251 kB | 3.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 12 ms | 13 ms | 34 ms | 15.57 ms | 5.43 ms | 53 ms |


---

<p align="center">Generated 2021-07-25T00:48:57.755Z</p>
