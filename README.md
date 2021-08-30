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
| deno | 38536.81 | 385341 |
| fastify | 31841.82 | 350277 |
| deno_canary | 26343.2 | 263384 |
| node | 22665.2 | 226646 |
| alosaur | 18079.41 | 180794 |
| oak | 17325 | 173246 |
| http | 14279.4 | 142786 |
| abc | 11708 | 117075 |
| drash | 10882.2 | 108810 |
| little_std | 9421.28 | 103625 |
| reno | 9161 | 100773 |
| little_native | 8993.6 | 89925 |
| dinatra | 8709.91 | 95806 |
| express | 8290 | 82895 |
| mandarinets | 5505.3 | 55051 |
| opine | 3589 | 35885 |
| tinyhttp | 2738.7 | 27378 |
| servest | 2290.1 | 22900 |
| aqua | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5615   | 5615   | 12927  | 13039   | 11708   | 2508.48 | 5614   | 117075  |
| **Bytes/Sec** | 522 kB | 522 kB | 1.2 MB | 1.21 MB | 1.09 MB | 233 kB  | 522 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.71 ms | 1.55 ms | 35 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6311   | 6311   | 20479   | 24447   | 18079.41 | 6807.92 | 6311   | 180794  |
| **Bytes/Sec** | 562 kB | 562 kB | 1.82 MB | 2.18 MB | 1.61 MB  | 606 kB  | 562 kB | 16.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.68 ms | 1.54 ms | 40 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 21295  | 21295  | 42879   | 44255   | 38536.81 | 7827.96 | 21295  | 385341  |
| **Bytes/Sec** | 1.9 MB | 1.9 MB | 3.82 MB | 3.94 MB | 3.43 MB  | 696 kB  | 1.9 MB | 34.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.23 ms | 0.78 ms | 21 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17775   | 17775   | 18463   | 39007   | 26343.2 | 8966.04 | 17773   | 263384  |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 1.64 MB | 3.47 MB | 2.34 MB | 797 kB  | 1.58 MB | 23.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.06 ms | 1.16 ms | 20 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2951   | 2951   | 9367   | 9687   | 8709.91 | 1862.66 | 2951   | 95806   |
| **Bytes/Sec** | 153 kB | 153 kB | 487 kB | 504 kB | 453 kB  | 96.9 kB | 153 kB | 4.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 11 ms | 3.89 ms | 2.57 ms | 48 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 7691   | 7691   | 11239  | 11359  | 10882.2 | 1069.1 | 7690   | 108810  |
| **Bytes/Sec** | 662 kB | 662 kB | 967 kB | 977 kB | 936 kB  | 92 kB  | 661 kB | 9.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.29 ms | 1.27 ms | 39 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4343   | 4343   | 8115    | 10183  | 8290    | 1595.62 | 4341   | 82895   |
| **Bytes/Sec** | 938 kB | 938 kB | 1.75 MB | 2.2 MB | 1.79 MB | 345 kB  | 938 kB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 12 ms | 4.3 ms | 2.83 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14943  | 14943  | 33599   | 34303   | 31841.82 | 5382.41 | 14943  | 350277  |
| **Bytes/Sec** | 2.3 MB | 2.3 MB | 5.17 MB | 5.28 MB | 4.9 MB   | 829 kB  | 2.3 MB | 53.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.9 ms | 0.92 ms | 27 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6063   | 6063   | 15671  | 16023  | 14279.4 | 3153.88 | 6063   | 142786  |
| **Bytes/Sec** | 315 kB | 315 kB | 815 kB | 833 kB | 742 kB  | 164 kB  | 315 kB | 7.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.37 ms | 1.33 ms | 36 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5831   | 5831   | 9567    | 10207   | 8993.6  | 1481.74 | 5830   | 89925   |
| **Bytes/Sec** | 752 kB | 752 kB | 1.23 MB | 1.32 MB | 1.16 MB | 191 kB  | 752 kB | 11.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.73 ms | 1.78 ms | 33 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6043   | 6043   | 9735    | 10095  | 9421.28 | 1083.07 | 6041   | 103625  |
| **Bytes/Sec** | 780 kB | 780 kB | 1.26 MB | 1.3 MB | 1.22 MB | 140 kB  | 779 kB | 13.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.6 ms | 1.5 ms | 31 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2038   | 2038   | 6067   | 7139   | 5505.3 | 1623.03 | 2038   | 55051   |
| **Bytes/Sec** | 190 kB | 190 kB | 565 kB | 664 kB | 512 kB | 151 kB  | 190 kB | 5.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 17 ms | 6.78 ms | 3.64 ms | 56 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12359   | 12359   | 23919   | 25263   | 22665.2 | 3625.53 | 12354   | 226646  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 2.68 MB | 2.83 MB | 2.54 MB | 406 kB  | 1.38 MB | 25.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.31 ms | 1.04 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5567   | 5567   | 19023   | 19247  | 17325   | 4078.25 | 5566   | 173246  |
| **Bytes/Sec** | 724 kB | 724 kB | 2.47 MB | 2.5 MB | 2.25 MB | 530 kB  | 724 kB | 22.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 1.29 ms | 38 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1760   | 1760   | 3897   | 4103   | 3589   | 728.89 | 1760   | 35885   |
| **Bytes/Sec** | 271 kB | 271 kB | 601 kB | 632 kB | 553 kB | 112 kB | 271 kB | 5.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 23 ms | 10.74 ms | 6.18 ms | 295 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4037   | 4037   | 10039  | 10151  | 9161   | 1848.2 | 4037   | 100773  |
| **Bytes/Sec** | 315 kB | 315 kB | 783 kB | 792 kB | 715 kB | 144 kB | 315 kB | 7.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.73 ms | 2.31 ms | 125 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1481   | 1481   | 1808   | 3939   | 2290.1 | 841.93  | 1481   | 22900   |
| **Bytes/Sec** | 170 kB | 170 kB | 208 kB | 453 kB | 263 kB | 96.8 kB | 170 kB | 2.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 8 ms  | 54 ms | 16.96 ms | 19.51 ms | 132 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 1880   | 1880   | 2835   | 3161   | 2738.7 | 424.91  | 1880   | 27378  |
| **Bytes/Sec** | 295 kB | 295 kB | 445 kB | 496 kB | 430 kB | 66.7 kB | 295 kB | 4.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 10 ms | 13 ms | 24 ms | 14.11 ms | 4.28 ms | 85 ms |


---

<p align="center">Generated 2021-08-30T00:46:00.375Z</p>
