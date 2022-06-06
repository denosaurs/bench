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
| fastify | 41192 | 453099 |
| drash | 34888 | 383778 |
| reno | 32627.2 | 326304 |
| oak | 29961.46 | 329583 |
| alosaur | 25234 | 252358 |
| aqua | 23754.8 | 237546 |
| deno | 21108.4 | 211080 |
| node | 20599.6 | 205999 |
| deno_canary | 20268 | 202655 |
| express | 17160.19 | 188740 |
| little_native | 14910.2 | 149089 |
| abc | 13243.2 | 132436 |
| opine | 10622.73 | 116836 |
| dinatra | 9401 | 94014 |
| little_std | 7610.19 | 83703 |
| mandarinets | 7174 | 71729 |
| tinyhttp | 5254.8 | 52541 |
| servest | 4287.2 | 42868 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8535   | 8535   | 13727   | 14295   | 13243.2 | 1635.49 | 8535   | 132436  |
| **Bytes/Sec** | 794 kB | 794 kB | 1.28 MB | 1.33 MB | 1.23 MB | 152 kB  | 794 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.49 ms | 1.52 ms | 79 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15047   | 15047   | 27391   | 32607   | 25234   | 7360.62 | 15042   | 252358  |
| **Bytes/Sec** | 1.69 MB | 1.69 MB | 3.07 MB | 3.65 MB | 2.83 MB | 825 kB  | 1.68 MB | 28.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.27 ms | 0.93 ms | 39 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13271   | 13271   | 25631  | 25951   | 23754.8 | 4005.68 | 13269   | 237546  |
| **Bytes/Sec** | 2.02 MB | 2.02 MB | 3.9 MB | 3.94 MB | 3.61 MB | 609 kB  | 2.02 MB | 36.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.67 ms | 24 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14071   | 14071   | 22095   | 23583   | 21108.4 | 2713.41 | 14064   | 211080  |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 2.48 MB | 2.64 MB | 2.36 MB | 304 kB  | 1.58 MB | 23.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.43 ms | 0.99 ms | 27 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14391   | 14391   | 20575  | 23151   | 20268   | 2817.64 | 14386   | 202655  |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 2.3 MB | 2.59 MB | 2.27 MB | 315 kB  | 1.61 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.52 ms | 1.03 ms | 29 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6463   | 6463   | 9759   | 9927   | 9401   | 992.37  | 6463   | 94014   |
| **Bytes/Sec** | 336 kB | 336 kB | 507 kB | 516 kB | 489 kB | 51.6 kB | 336 kB | 4.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.57 ms | 1.93 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 25823   | 25823   | 35903   | 36319   | 34888   | 2943.82 | 25816   | 383778 |
| **Bytes/Sec** | 3.56 MB | 3.56 MB | 4.95 MB | 5.01 MB | 4.81 MB | 406 kB  | 3.56 MB | 53 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.99 ms | 0.53 ms | 31 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7663    | 7663    | 18255   | 18767   | 17160.19 | 3079.24 | 7663    | 188740  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 3.94 MB | 4.05 MB | 3.71 MB  | 665 kB  | 1.66 MB | 40.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.11 ms | 0.98 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 22719  | 22719  | 43231   | 43711   | 41192   | 5892.41 | 22709  | 453099  |
| **Bytes/Sec** | 3.5 MB | 3.5 MB | 6.66 MB | 6.73 MB | 6.34 MB | 907 kB  | 3.5 MB | 69.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.21 ms | 0.69 ms | 21 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7463    | 7463    | 16175   | 16431  | 14910.2 | 2823.5 | 7461    | 149089  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 2.46 MB | 2.5 MB | 2.27 MB | 429 kB | 1.13 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1 ms  | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4583   | 4583   | 8543   | 8855    | 7610.19 | 1473.02 | 4582   | 83703   |
| **Bytes/Sec** | 697 kB | 697 kB | 1.3 MB | 1.35 MB | 1.16 MB | 224 kB  | 696 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.76 ms | 1.9 ms | 32 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4215   | 4215   | 7447   | 7631   | 7174   | 988.98  | 4215   | 71729   |
| **Bytes/Sec** | 392 kB | 392 kB | 693 kB | 710 kB | 667 kB | 91.9 kB | 392 kB | 6.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.08 ms | 1.91 ms | 68 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10439   | 10439   | 21743   | 22367  | 20599.6 | 3477.09 | 10439   | 205999  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 2.44 MB | 2.5 MB | 2.31 MB | 389 kB  | 1.17 MB | 23.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.45 ms | 1.23 ms | 30 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 21487   | 21487   | 30815   | 31247   | 29961.46 | 2726.5 | 21475   | 329583  |
| **Bytes/Sec** | 3.29 MB | 3.29 MB | 4.72 MB | 4.78 MB | 4.58 MB  | 417 kB | 3.29 MB | 50.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.05 ms | 0.57 ms | 43 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------ |
| **Req/Sec**   | 7835    | 7835    | 10895   | 11111   | 10622.73 | 889.75 | 7834    | 116836 |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 2.33 MB | 2.38 MB | 2.27 MB  | 190 kB | 1.68 MB | 25 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.21 ms | 1.23 ms | 38 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23759   | 23759   | 33663   | 33983   | 32627.2 | 2978.95 | 23759   | 326304  |
| **Bytes/Sec** | 3.61 MB | 3.61 MB | 5.12 MB | 5.17 MB | 4.96 MB | 452 kB  | 3.61 MB | 49.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.01 ms | 0.49 ms | 20 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3191   | 3191   | 4115   | 5407   | 4287.2 | 754.94  | 3190   | 42868   |
| **Bytes/Sec** | 367 kB | 367 kB | 473 kB | 622 kB | 493 kB | 86.8 kB | 367 kB | 4.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 8.85 ms | 16.15 ms | 67 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4163   | 4163   | 5567   | 5663   | 5254.8 | 493.88  | 4163   | 52541   |
| **Bytes/Sec** | 654 kB | 654 kB | 874 kB | 889 kB | 825 kB | 77.5 kB | 654 kB | 8.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 16 ms | 7.07 ms | 2.69 ms | 66 ms |


---

<p align="center">Generated 2022-06-06T01:25:14.255Z</p>
