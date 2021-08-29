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
| deno | 38314.4 | 383145 |
| fastify | 32941.6 | 329391 |
| deno_canary | 28799.2 | 287982 |
| node | 13087.2 | 130869 |
| alosaur | 12518 | 137714 |
| abc | 12510.4 | 125099 |
| oak | 12110.9 | 121107 |
| little_native | 9995.4 | 99956 |
| http | 8686.6 | 86861 |
| little_std | 7414.64 | 81553 |
| reno | 6606.1 | 66055 |
| express | 6075.46 | 66822 |
| servest | 5542.9 | 55427 |
| drash | 5240.8 | 52404 |
| dinatra | 5240.3 | 52395 |
| mandarinets | 4425.3 | 44243 |
| opine | 4272.11 | 42717 |
| tinyhttp | 3413.8 | 34129 |
| aqua | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8887   | 8887   | 12919  | 13007   | 12510.4 | 1210.31 | 8887   | 125099  |
| **Bytes/Sec** | 827 kB | 827 kB | 1.2 MB | 1.21 MB | 1.16 MB | 112 kB  | 826 kB | 11.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.53 ms | 1.16 ms | 65 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6163   | 6163   | 11639   | 22559   | 12518   | 3870.59 | 6162   | 137714  |
| **Bytes/Sec** | 549 kB | 549 kB | 1.04 MB | 2.01 MB | 1.11 MB | 345 kB  | 548 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 6 ms  | 2.82 ms | 1.71 ms | 45 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev    | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 22559   | 22559   | 38367   | 49855   | 38314.4 | 10893.14 | 22555   | 383145  |
| **Bytes/Sec** | 2.01 MB | 2.01 MB | 3.41 MB | 4.44 MB | 3.41 MB | 969 kB   | 2.01 MB | 34.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.37 ms | 0.8 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17279   | 17279   | 27295   | 37407   | 28799.2 | 8315.19 | 17279   | 287982  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 2.43 MB | 3.33 MB | 2.56 MB | 740 kB  | 1.54 MB | 25.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.88 ms | 1.17 ms | 27 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3905   | 3905   | 5307   | 5623   | 5240.3 | 479.05  | 3904   | 52395   |
| **Bytes/Sec** | 203 kB | 203 kB | 276 kB | 292 kB | 272 kB | 24.9 kB | 203 kB | 2.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 13 ms | 7.09 ms | 2.04 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3553   | 3553   | 4555   | 8043   | 5240.8 | 1448.51 | 3553   | 52404   |
| **Bytes/Sec** | 306 kB | 306 kB | 392 kB | 692 kB | 451 kB | 125 kB  | 306 kB | 4.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 7 ms  | 17 ms | 7.14 ms | 4.14 ms | 173 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4451   | 4451   | 5503    | 9823    | 6075.46 | 1513.58 | 4451   | 66822   |
| **Bytes/Sec** | 962 kB | 962 kB | 1.19 MB | 2.12 MB | 1.31 MB | 327 kB  | 961 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 7 ms  | 10 ms | 6.13 ms | 2.2 ms | 49 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16607   | 16607   | 34495   | 36159   | 32941.6 | 5497.45 | 16595   | 329391  |
| **Bytes/Sec** | 2.56 MB | 2.56 MB | 5.31 MB | 5.57 MB | 5.07 MB | 847 kB  | 2.56 MB | 50.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.66 ms | 0.99 ms | 27 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6191   | 6191   | 7207   | 12559  | 8686.6 | 2485.25 | 6191   | 86861   |
| **Bytes/Sec** | 322 kB | 322 kB | 375 kB | 653 kB | 452 kB | 129 kB  | 322 kB | 4.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.05 ms | 2.15 ms | 34 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6623   | 6623   | 10415   | 10679   | 9995.4  | 1142.79 | 6623   | 99956   |
| **Bytes/Sec** | 855 kB | 855 kB | 1.34 MB | 1.38 MB | 1.29 MB | 147 kB  | 854 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.32 ms | 1.22 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3733   | 3733   | 7879    | 8083    | 7414.64 | 1221.71 | 3733   | 81553   |
| **Bytes/Sec** | 482 kB | 482 kB | 1.02 MB | 1.04 MB | 956 kB  | 158 kB  | 482 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.87 ms | 1.87 ms | 43 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1952   | 1952   | 4283   | 6099   | 4425.3 | 1216.39 | 1952   | 44243   |
| **Bytes/Sec** | 182 kB | 182 kB | 398 kB | 567 kB | 411 kB | 113 kB  | 182 kB | 4.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 8 ms  | 21 ms | 8.51 ms | 4.41 ms | 163 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9655    | 9655    | 10935   | 22543   | 13087.2 | 4648.96 | 9650    | 130869  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.22 MB | 2.53 MB | 1.47 MB | 521 kB  | 1.08 MB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 8 ms  | 2.6 ms | 2.04 ms | 32 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3719   | 3719   | 12431   | 16167  | 12110.9 | 4261.26 | 3719   | 121107  |
| **Bytes/Sec** | 484 kB | 484 kB | 1.62 MB | 2.1 MB | 1.57 MB | 554 kB  | 483 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.89 ms | 2.44 ms | 169 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2717   | 2717   | 4063   | 5271   | 4272.11 | 895.24 | 2717   | 42717   |
| **Bytes/Sec** | 419 kB | 419 kB | 626 kB | 812 kB | 658 kB  | 138 kB | 418 kB | 6.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 8 ms  | 22 ms | 8.94 ms | 3.96 ms | 55 ms |


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
| **Req/Sec**   | 3519   | 3519   | 6335   | 7983   | 6606.1 | 1413.24 | 3519   | 66055   |
| **Bytes/Sec** | 275 kB | 275 kB | 494 kB | 623 kB | 515 kB | 110 kB  | 274 kB | 5.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 15 ms | 5.65 ms | 3.18 ms | 59 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3275   | 3275   | 5559   | 7271   | 5542.9 | 1146.18 | 3274   | 55427   |
| **Bytes/Sec** | 377 kB | 377 kB | 639 kB | 836 kB | 637 kB | 132 kB  | 377 kB | 6.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | ------- | -------- | ------ |
| **Latency** | 0 ms  | 1 ms  | 45 ms | 6.74 ms | 14.64 ms | 115 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2841   | 2841   | 3621   | 3761   | 3413.8 | 328.86  | 2840   | 34129   |
| **Bytes/Sec** | 446 kB | 446 kB | 569 kB | 590 kB | 536 kB | 51.6 kB | 446 kB | 5.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 10 ms | 19 ms | 11.22 ms | 3.23 ms | 79 ms |


---

<p align="center">Generated 2021-08-29T00:49:25.815Z</p>
