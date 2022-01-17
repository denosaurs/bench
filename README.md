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
  - [deco](#deco)
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
| deno | 34866.81 | 348658 |
| alosaur | 34026.4 | 340215 |
| node | 33258.4 | 332587 |
| oak | 28563.28 | 314197 |
| deno_canary | 19584.41 | 195850 |
| reno | 18810 | 188075 |
| aqua | 18797.46 | 206777 |
| fastify | 18304.41 | 183032 |
| deco | 16960.41 | 169611 |
| little_std | 14264.55 | 156917 |
| abc | 14081.82 | 154890 |
| express | 12858.37 | 141439 |
| little_native | 12647.2 | 126472 |
| opine | 9865 | 98647 |
| dinatra | 9088.55 | 99965 |
| tinyhttp | 4133.8 | 41335 |
| servest | 3531.1 | 35307 |
| drash | 1303.7 | 13037 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 10927   | 10927   | 14455   | 14743   | 14081.82 | 1042.48 | 10925   | 154890  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.34 MB | 1.37 MB | 1.31 MB  | 96.9 kB | 1.02 MB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.25 ms | 1.08 ms | 56 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18271   | 18271   | 37279   | 37823   | 34026.4 | 6086.69 | 18259   | 340215  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 3.32 MB | 3.37 MB | 3.03 MB | 542 kB  | 1.63 MB | 30.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.7 ms | 0.72 ms | 37 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11039   | 11039   | 20079   | 21919   | 18797.46 | 3550.03 | 11037   | 206777  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2.59 MB | 2.83 MB | 2.42 MB  | 458 kB  | 1.42 MB | 26.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.52 ms | 0.97 ms | 25 ms |


### [deco](https://deno.land/x/deco)

> Deco is a utility library for Deno developers


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8975    | 8975    | 18639  | 20959   | 16960.41 | 4385.28 | 8968    | 169611  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 2.4 MB | 2.71 MB | 2.19 MB  | 566 kB  | 1.16 MB | 21.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.86 ms | 1.46 ms | 36 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 16191   | 16191   | 37919   | 40831   | 34866.81 | 8043.13 | 16189   | 348658 |
| **Bytes/Sec** | 1.44 MB | 1.44 MB | 3.37 MB | 3.63 MB | 3.1 MB   | 715 kB  | 1.44 MB | 31 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.48 ms | 0.8 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 8983   | 8983   | 22863   | 24383   | 19584.41 | 5693.1 | 8978   | 195850  |
| **Bytes/Sec** | 799 kB | 799 kB | 2.04 MB | 2.17 MB | 1.74 MB  | 507 kB | 799 kB | 17.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.66 ms | 1.34 ms | 25 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7367   | 7367   | 9615   | 9919   | 9088.55 | 880.94  | 7365   | 99965  |
| **Bytes/Sec** | 383 kB | 383 kB | 500 kB | 516 kB | 473 kB  | 45.7 kB | 383 kB | 5.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.65 ms | 2.42 ms | 48 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1128   | 1128   | 1324   | 1372   | 1303.7 | 69.85   | 1128   | 13037   |
| **Bytes/Sec** | 471 kB | 471 kB | 552 kB | 572 kB | 544 kB | 29.1 kB | 470 kB | 5.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 20 ms | 30 ms | 38 ms | 30.17 ms | 6.06 ms | 229 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 4867    | 4867    | 13871 | 14503   | 12858.37 | 2658.17 | 4866    | 141439  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 3 MB  | 3.13 MB | 2.78 MB  | 574 kB  | 1.05 MB | 30.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.48 ms | 1.66 ms | 38 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11375   | 11375   | 18671   | 22943   | 18304.41 | 2867.64 | 11368   | 183032  |
| **Bytes/Sec** | 1.75 MB | 1.75 MB | 2.88 MB | 3.53 MB | 2.82 MB  | 442 kB  | 1.75 MB | 28.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.74 ms | 1.26 ms | 27 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8951    | 8951    | 13399   | 13839   | 12647.2 | 1694.64 | 8948    | 126472  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.73 MB | 1.78 MB | 1.63 MB | 218 kB  | 1.15 MB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.2 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6775   | 6775   | 14895   | 16975   | 14264.55 | 2894.05 | 6773   | 156917  |
| **Bytes/Sec** | 874 kB | 874 kB | 1.92 MB | 2.19 MB | 1.84 MB  | 373 kB  | 874 kB | 20.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.02 ms | 20 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20383   | 20383   | 37855   | 38911   | 33258.4 | 7787.03 | 20381   | 332587  |
| **Bytes/Sec** | 2.28 MB | 2.28 MB | 4.24 MB | 4.36 MB | 3.72 MB | 872 kB  | 2.28 MB | 37.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.59 ms | 0.89 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14567   | 14567   | 31471   | 31695   | 28563.28 | 5186.16 | 14561   | 314197  |
| **Bytes/Sec** | 1.89 MB | 1.89 MB | 4.09 MB | 4.12 MB | 3.71 MB  | 674 kB  | 1.89 MB | 40.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.79 ms | 0.8 ms | 32 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7239    | 7239    | 10167   | 10207   | 9865    | 876.76 | 7239    | 98647   |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 1.94 MB | 1.95 MB | 1.88 MB | 167 kB | 1.38 MB | 18.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.69 ms | 1.28 ms | 38 ms |


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
| **Req/Sec**   | 10615   | 10615   | 21391   | 23711   | 18810   | 4518.45 | 10610   | 188075  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 2.76 MB | 3.06 MB | 2.43 MB | 583 kB  | 1.37 MB | 24.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.57 ms | 1.24 ms | 28 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2413   | 2413   | 3315   | 4423   | 3531.1 | 613.65  | 2412   | 35307   |
| **Bytes/Sec** | 278 kB | 278 kB | 381 kB | 509 kB | 406 kB | 70.6 kB | 277 kB | 4.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 10.83 ms | 17.29 ms | 67 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3039   | 3039   | 4123   | 4667   | 4133.8 | 420.24 | 3038   | 41335   |
| **Bytes/Sec** | 477 kB | 477 kB | 647 kB | 733 kB | 649 kB | 66 kB  | 477 kB | 6.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 8 ms  | 19 ms | 9.19 ms | 3.67 ms | 109 ms |


---

<p align="center">Generated 2022-01-17T00:36:58.193Z</p>
