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
| fastify | 41570.19 | 457239 |
| node | 37245.82 | 409724 |
| alosaur | 35028 | 350297 |
| deno | 29606.8 | 296051 |
| reno | 28438.91 | 312823 |
| oak | 25390.91 | 279293 |
| aqua | 21819.28 | 240014 |
| deno_canary | 20147.2 | 201492 |
| express | 15525.28 | 170762 |
| little_native | 13482.2 | 134816 |
| abc | 11976 | 119763 |
| little_std | 11080.91 | 121895 |
| opine | 10429 | 104284 |
| dinatra | 5361.6 | 53611 |
| tinyhttp | 5236.3 | 52355 |
| servest | 3121.8 | 31212 |
| drash | 1246 | 12460 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8543   | 8543   | 12383   | 12783   | 11976   | 1201.9 | 8543   | 119763  |
| **Bytes/Sec** | 795 kB | 795 kB | 1.15 MB | 1.19 MB | 1.11 MB | 112 kB | 794 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.01 ms | 1.5 ms | 114 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17871   | 17871   | 36959   | 40607   | 35028   | 7028.17 | 17866   | 350297  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 3.29 MB | 3.61 MB | 3.12 MB | 626 kB  | 1.59 MB | 31.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.51 ms | 0.77 ms | 30 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 12527   | 12527   | 23023   | 24607   | 21819.28 | 3509.41 | 12520   | 240014 |
| **Bytes/Sec** | 1.62 MB | 1.62 MB | 2.97 MB | 3.17 MB | 2.81 MB  | 453 kB  | 1.62 MB | 31 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.8 ms | 24 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13455  | 13455  | 34943   | 35199   | 29606.8 | 7931.15 | 13455  | 296051  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 3.11 MB | 3.13 MB | 2.64 MB | 706 kB  | 1.2 MB | 26.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.6 ms | 1.03 ms | 22 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9679   | 9679   | 21279   | 25359   | 20147.2 | 5119.62 | 9679   | 201492  |
| **Bytes/Sec** | 862 kB | 862 kB | 1.89 MB | 2.26 MB | 1.79 MB | 455 kB  | 861 kB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 1.6 ms | 1.3 ms | 24 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4271   | 4271   | 5507   | 5847   | 5361.6 | 503.8   | 4270   | 53611   |
| **Bytes/Sec** | 222 kB | 222 kB | 286 kB | 304 kB | 279 kB | 26.2 kB | 222 kB | 2.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.96 ms | 2.52 ms | 53 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ----- | ------ | ------ |
| **Req/Sec**   | 1128   | 1128   | 1258   | 1273   | 1246   | 40.77 | 1128   | 12460  |
| **Bytes/Sec** | 471 kB | 471 kB | 525 kB | 531 kB | 520 kB | 17 kB | 470 kB | 5.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 21 ms | 32 ms | 35 ms | 31.6 ms | 7.34 ms | 271 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 7223    | 7223    | 16511   | 16671  | 15525.28 | 2657   | 7222    | 170762  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 3.57 MB | 3.6 MB | 3.35 MB  | 574 kB | 1.56 MB | 36.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 1.06 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 24159   | 24159   | 43679   | 44447   | 41570.19 | 5642.79 | 24150   | 457239  |
| **Bytes/Sec** | 3.72 MB | 3.72 MB | 6.73 MB | 6.84 MB | 6.4 MB   | 869 kB  | 3.72 MB | 70.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.21 ms | 0.67 ms | 19 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7707   | 7707   | 15071   | 15239   | 13482.2 | 2656.61 | 7707   | 134816  |
| **Bytes/Sec** | 994 kB | 994 kB | 1.94 MB | 1.97 MB | 1.74 MB | 343 kB  | 994 kB | 17.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.38 ms | 1.1 ms | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 5835   | 5835   | 12279   | 13135   | 11080.91 | 2081.81 | 5834   | 121895  |
| **Bytes/Sec** | 753 kB | 753 kB | 1.58 MB | 1.69 MB | 1.43 MB  | 268 kB  | 753 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.2 ms | 1.46 ms | 25 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18671   | 18671   | 41631   | 42591   | 37245.82 | 7583.69 | 18671   | 409724  |
| **Bytes/Sec** | 2.09 MB | 2.09 MB | 4.66 MB | 4.77 MB | 4.17 MB  | 849 kB  | 2.09 MB | 45.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.34 ms | 0.71 ms | 18 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13623   | 13623   | 27791   | 28623   | 25390.91 | 4754.61 | 13616   | 279293  |
| **Bytes/Sec** | 1.77 MB | 1.77 MB | 3.61 MB | 3.72 MB | 3.3 MB   | 618 kB  | 1.77 MB | 36.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.16 ms | 0.69 ms | 46 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7807    | 7807    | 10775   | 10839   | 10429   | 884.87 | 7804    | 104284  |
| **Bytes/Sec** | 1.49 MB | 1.49 MB | 2.06 MB | 2.07 MB | 1.99 MB | 169 kB | 1.49 MB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 5 ms  | 3.18 ms | 1.15 ms | 31 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14703  | 14703  | 31631   | 32031   | 28438.91 | 5238.78 | 14702  | 312823  |
| **Bytes/Sec** | 1.9 MB | 1.9 MB | 4.08 MB | 4.13 MB | 3.67 MB  | 676 kB  | 1.9 MB | 40.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.68 ms | 20 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2465   | 2465   | 3093   | 3667   | 3121.8 | 375.95  | 2465   | 31212   |
| **Bytes/Sec** | 284 kB | 284 kB | 356 kB | 422 kB | 359 kB | 43.2 kB | 283 kB | 3.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.3 ms | 18.05 ms | 84 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3913   | 3913   | 5387   | 5471   | 5236.3 | 446.83  | 3913   | 52355   |
| **Bytes/Sec** | 614 kB | 614 kB | 846 kB | 859 kB | 822 kB | 70.2 kB | 614 kB | 8.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 7 ms  | 16 ms | 7.25 ms | 2.75 ms | 103 ms |


---

<p align="center">Generated 2022-02-02T00:54:33.105Z</p>
