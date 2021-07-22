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
| deno | 39199.2 | 391942 |
| deno_canary | 36993.6 | 369923 |
| node | 29335.6 | 293342 |
| fastify | 28857.6 | 288562 |
| oak | 18105.64 | 199170 |
| http | 16332.4 | 163317 |
| alosaur | 14219.2 | 142188 |
| express | 13225.8 | 132258 |
| aqua | 12330.4 | 123301 |
| little_native | 11730 | 129028 |
| drash | 10593.28 | 116526 |
| dinatra | 10315.82 | 113474 |
| mandarinets | 9934.21 | 99335 |
| reno | 9558.21 | 95577 |
| abc | 7542.8 | 75426 |
| little_std | 4744.3 | 47433 |
| opine | 3317.5 | 33171 |
| servest | 3203.4 | 32027 |
| tinyhttp | 2508.5 | 25078 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4787   | 4787   | 7791   | 8099   | 7542.8 | 929.9   | 4787   | 75426   |
| **Bytes/Sec** | 445 kB | 445 kB | 724 kB | 754 kB | 701 kB | 86.4 kB | 445 kB | 7.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.68 ms | 1.8 ms | 98 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10607  | 10607  | 14615   | 14695   | 14219.2 | 1206.56 | 10607  | 142188  |
| **Bytes/Sec** | 976 kB | 976 kB | 1.34 MB | 1.35 MB | 1.31 MB | 111 kB  | 976 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.21 ms | 1.1 ms | 65 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8639   | 8639   | 12719   | 12927   | 12330.4 | 1234.82 | 8636   | 123301  |
| **Bytes/Sec** | 795 kB | 795 kB | 1.17 MB | 1.19 MB | 1.13 MB | 114 kB  | 795 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.8 ms | 1.17 ms | 61 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20655   | 20655   | 43167   | 44639   | 39199.2 | 7312.66 | 20648   | 391942  |
| **Bytes/Sec** | 1.84 MB | 1.84 MB | 3.84 MB | 3.97 MB | 3.49 MB | 651 kB  | 1.84 MB | 34.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.32 ms | 0.78 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20863   | 20863   | 42559   | 44639   | 36993.6 | 9210.06 | 20858   | 369923  |
| **Bytes/Sec** | 1.86 MB | 1.86 MB | 3.79 MB | 3.97 MB | 3.29 MB | 820 kB  | 1.86 MB | 32.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.3 ms | 0.84 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 7579   | 7579   | 10647  | 10791  | 10315.82 | 876.94  | 7577   | 113474 |
| **Bytes/Sec** | 394 kB | 394 kB | 554 kB | 561 kB | 536 kB   | 45.6 kB | 394 kB | 5.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.29 ms | 1.19 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 7015   | 7015   | 10911  | 11535  | 10593.28 | 1169.62 | 7012   | 116526 |
| **Bytes/Sec** | 603 kB | 603 kB | 938 kB | 992 kB | 911 kB   | 101 kB  | 603 kB | 10 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.33 ms | 1.43 ms | 102 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7027    | 7027    | 12199   | 17503   | 13225.8 | 3737.96 | 7026    | 132258  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 2.64 MB | 3.78 MB | 2.86 MB | 808 kB  | 1.52 MB | 28.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 9 ms  | 2.67 ms | 1.97 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19439   | 19439   | 21791   | 40095   | 28857.6 | 9463.88 | 19437   | 288562  |
| **Bytes/Sec** | 2.99 MB | 2.99 MB | 3.35 MB | 6.18 MB | 4.44 MB | 1.46 MB | 2.99 MB | 44.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.64 ms | 1.07 ms | 24 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12055  | 12055  | 16815  | 16895  | 16332.4 | 1428.01 | 12049  | 163317  |
| **Bytes/Sec** | 627 kB | 627 kB | 874 kB | 879 kB | 849 kB  | 74.3 kB | 627 kB | 8.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 0.87 ms | 28 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7687   | 7687   | 12167   | 12279   | 11730   | 1285.68 | 7686   | 129028  |
| **Bytes/Sec** | 992 kB | 992 kB | 1.57 MB | 1.58 MB | 1.51 MB | 166 kB  | 991 kB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.15 ms | 1.01 ms | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2869   | 2869   | 4951   | 5123   | 4744.3 | 637.46  | 2868   | 47433   |
| **Bytes/Sec** | 264 kB | 264 kB | 455 kB | 471 kB | 436 kB | 58.7 kB | 264 kB | 4.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 14 ms | 7.84 ms | 2.53 ms | 47 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6195   | 6195   | 10423  | 10471  | 9934.21 | 1255.15 | 6194   | 99335   |
| **Bytes/Sec** | 577 kB | 577 kB | 969 kB | 973 kB | 924 kB  | 117 kB  | 576 kB | 9.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.37 ms | 1.32 ms | 39 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15959   | 15959   | 35199   | 38975   | 29335.6 | 9767.82 | 15959   | 293342  |
| **Bytes/Sec** | 1.79 MB | 1.79 MB | 3.94 MB | 4.37 MB | 3.29 MB | 1.09 MB | 1.79 MB | 32.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.79 ms | 1.13 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7355   | 7355   | 19263  | 19535   | 18105.64 | 3411.62 | 7353   | 199170  |
| **Bytes/Sec** | 956 kB | 956 kB | 2.5 MB | 2.54 MB | 2.35 MB  | 444 kB  | 956 kB | 25.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.89 ms | 1.32 ms | 81 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1757   | 1757   | 3311   | 4555   | 3317.5 | 880.94 | 1757   | 33171   |
| **Bytes/Sec** | 271 kB | 271 kB | 510 kB | 701 kB | 511 kB | 136 kB | 271 kB | 5.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 7 ms  | 11 ms | 25 ms | 11.56 ms | 4.96 ms | 157 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6699   | 6699   | 9887   | 9951   | 9558.21 | 956.49  | 6698   | 95577   |
| **Bytes/Sec** | 522 kB | 522 kB | 772 kB | 776 kB | 745 kB  | 74.6 kB | 522 kB | 7.46 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.44 ms | 1.73 ms | 106 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1430   | 1430   | 3281   | 4371   | 3203.4 | 793.68  | 1430   | 32027   |
| **Bytes/Sec** | 164 kB | 164 kB | 377 kB | 503 kB | 368 kB | 91.3 kB | 164 kB | 3.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.01 ms | 17.99 ms | 102 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1960   | 1960   | 2317   | 3201   | 2508.5 | 412.4   | 1960   | 25078   |
| **Bytes/Sec** | 308 kB | 308 kB | 364 kB | 503 kB | 394 kB | 64.8 kB | 308 kB | 3.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 10 ms | 15 ms | 29 ms | 15.45 ms | 5.07 ms | 70 ms |


---

<p align="center">Generated 2021-07-22T00:48:30.238Z</p>
