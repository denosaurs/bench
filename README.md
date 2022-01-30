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
| node | 36576.81 | 365769 |
| alosaur | 33472.81 | 334755 |
| fastify | 33113.46 | 364205 |
| reno | 31830.19 | 350109 |
| deno | 30526 | 305211 |
| deno_canary | 28093.2 | 280909 |
| oak | 22601.1 | 248600 |
| aqua | 22096.8 | 220970 |
| express | 15408.55 | 169486 |
| little_std | 13624.19 | 149873 |
| abc | 11841.6 | 118421 |
| opine | 9557.8 | 95570 |
| little_native | 7787.6 | 77858 |
| dinatra | 4960.8 | 49605 |
| tinyhttp | 4158.3 | 41579 |
| servest | 3269.2 | 32688 |
| drash | 1034.7 | 10347 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 8455   | 8455   | 12287   | 12431   | 11841.6 | 1148.07 | 8455   | 118421 |
| **Bytes/Sec** | 786 kB | 786 kB | 1.14 MB | 1.16 MB | 1.1 MB  | 107 kB  | 786 kB | 11 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.13 ms | 1.33 ms | 71 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18383   | 18383   | 37279   | 37951   | 33472.81 | 6482.76 | 18372   | 334755  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 3.32 MB | 3.38 MB | 2.98 MB  | 577 kB  | 1.64 MB | 29.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.81 ms | 0.71 ms | 29 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16191   | 16191   | 23711   | 25039   | 22096.8 | 3145.98 | 16189   | 220970  |
| **Bytes/Sec** | 2.09 MB | 2.09 MB | 3.06 MB | 3.23 MB | 2.85 MB | 406 kB  | 2.09 MB | 28.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 0.76 ms | 20 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15791  | 15791  | 30975   | 37567   | 30526   | 6881.53 | 15785  | 305211  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 2.76 MB | 3.34 MB | 2.72 MB | 612 kB  | 1.4 MB | 27.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.69 ms | 0.99 ms | 21 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ----- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 13143   | 13143   | 31279   | 33695 | 28093.2 | 7158.18 | 13140   | 280909 |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 2.79 MB | 3 MB  | 2.5 MB  | 637 kB  | 1.17 MB | 25 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.81 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4077   | 4077   | 4763   | 5751   | 4960.8 | 688.52  | 4077   | 49605   |
| **Bytes/Sec** | 212 kB | 212 kB | 248 kB | 299 kB | 258 kB | 35.8 kB | 212 kB | 2.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 7.56 ms | 2.91 ms | 54 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 912    | 912    | 1050   | 1060   | 1034.7 | 42.76   | 912    | 10347   |
| **Bytes/Sec** | 380 kB | 380 kB | 438 kB | 442 kB | 431 kB | 17.8 kB | 380 kB | 4.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 25 ms | 38 ms | 44 ms | 38.09 ms | 8.92 ms | 325 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7207    | 7207    | 16367   | 16671  | 15408.55 | 2636.73 | 7204    | 169486  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 3.53 MB | 3.6 MB | 3.33 MB  | 570 kB  | 1.56 MB | 36.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.17 ms | 1.1 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17455   | 17455   | 37727   | 38271   | 33113.46 | 7275.11 | 17440   | 364205  |
| **Bytes/Sec** | 2.69 MB | 2.69 MB | 5.81 MB | 5.89 MB | 5.1 MB   | 1.12 MB | 2.69 MB | 56.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.95 ms | 23 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 4615   | 4615   | 8247    | 8991    | 7787.6 | 1330.85 | 4615   | 77858 |
| **Bytes/Sec** | 595 kB | 595 kB | 1.06 MB | 1.16 MB | 1 MB   | 172 kB  | 595 kB | 10 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.6 ms | 1.67 ms | 32 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6931   | 6931   | 15079   | 15215   | 13624.19 | 2471.98 | 6931   | 149873  |
| **Bytes/Sec** | 894 kB | 894 kB | 1.94 MB | 1.96 MB | 1.76 MB  | 319 kB  | 894 kB | 19.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.34 ms | 1.07 ms | 21 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 21039   | 21039   | 41503   | 41919  | 36576.81 | 7993.85 | 21027   | 365769 |
| **Bytes/Sec** | 2.36 MB | 2.36 MB | 4.65 MB | 4.7 MB | 4.1 MB   | 896 kB  | 2.36 MB | 41 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.44 ms | 0.77 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12535   | 12535   | 24015   | 26047   | 22601.1 | 4012.59 | 12528   | 248600  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 3.12 MB | 3.39 MB | 2.94 MB | 522 kB  | 1.63 MB | 32.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.29 ms | 0.96 ms | 59 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 6959    | 6959    | 9895    | 9967   | 9557.8  | 879.73 | 6959    | 95570   |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 1.89 MB | 1.9 MB | 1.83 MB | 168 kB | 1.33 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 6 ms  | 3.8 ms | 1.26 ms | 34 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16191   | 16191   | 35551   | 35935   | 31830.19 | 6038.05 | 16191   | 350109  |
| **Bytes/Sec** | 2.09 MB | 2.09 MB | 4.59 MB | 4.64 MB | 4.11 MB  | 779 kB  | 2.09 MB | 45.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.04 ms | 0.57 ms | 19 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2291   | 2291   | 3213   | 3903   | 3269.2 | 514.43  | 2291   | 32688   |
| **Bytes/Sec** | 264 kB | 264 kB | 369 kB | 449 kB | 376 kB | 59.1 kB | 263 kB | 3.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 11.7 ms | 17.87 ms | 67 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2381   | 2381   | 4583   | 4827   | 4158.3 | 898.28 | 2380   | 41579   |
| **Bytes/Sec** | 374 kB | 374 kB | 720 kB | 758 kB | 653 kB | 141 kB | 374 kB | 6.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 21 ms | 9.16 ms | 4.59 ms | 128 ms |


---

<p align="center">Generated 2022-01-30T00:53:26.107Z</p>
