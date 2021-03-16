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
  - [deno](#deno)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [node](#node)
  - [oak](#oak)
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)
  - [reno](#reno)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | servest | mandarinets | aqua | reno |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 6536.8 | 22558.8 | 19123.41 | 12843.2 | 18133.2 | 13960.91 | 31001.1 | 34915.64 | 14668 | 2756.6 | 5343.1 | 10413.8 | 9709.8 |
| **Total** | 65361 | 225587 | 191221 | 128426 | 181337 | 153559 | 340979 | 384011 | 146679 | 27560 | 53425 | 104138 | 97104 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4523   | 4523   | 6743   | 6903   | 6536.8 | 682.06  | 4520   | 65361   |
| **Bytes/Sec** | 421 kB | 421 kB | 627 kB | 642 kB | 608 kB | 63.4 kB | 420 kB | 6.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.67 ms | 2.35 ms | 134 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15311   | 15311   | 23311   | 23679   | 22558.8 | 2421.81 | 15309   | 225587  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 2.14 MB | 2.18 MB | 2.08 MB | 223 kB  | 1.41 MB | 20.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.86 ms | 51 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6543   | 6543   | 19871   | 25215   | 19123.41 | 6445.27 | 6543   | 191221  |
| **Bytes/Sec** | 334 kB | 334 kB | 1.01 MB | 1.29 MB | 975 kB   | 329 kB  | 334 kB | 9.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 7 ms  | 1.62 ms | 1.91 ms | 56 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9159   | 9159   | 13263  | 13951  | 12843.2 | 1418.6  | 9158   | 128426  |
| **Bytes/Sec** | 476 kB | 476 kB | 690 kB | 726 kB | 668 kB  | 73.7 kB | 476 kB | 6.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.44 ms | 1.3 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10511  | 10511  | 18351   | 20143   | 18133.2 | 2673.23 | 10507  | 181337  |
| **Bytes/Sec** | 904 kB | 904 kB | 1.58 MB | 1.73 MB | 1.56 MB | 230 kB  | 904 kB | 15.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.61 ms | 1.16 ms | 67 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5443    | 5443    | 14943   | 15223   | 13960.91 | 2751.58 | 5440    | 153559  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 3.23 MB | 3.29 MB | 3.02 MB  | 595 kB  | 1.18 MB | 33.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.31 ms | 1.39 ms | 49 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13711  | 13711  | 32575   | 34783   | 31001.1 | 5519.97 | 13704  | 340979  |
| **Bytes/Sec** | 2.1 MB | 2.1 MB | 4.98 MB | 5.32 MB | 4.74 MB | 845 kB  | 2.1 MB | 52.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.72 ms | 1.19 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------ |
| **Req/Sec**   | 19855   | 19855   | 36255   | 37279   | 34915.64 | 4806.3 | 19840   | 384011 |
| **Bytes/Sec** | 2.22 MB | 2.22 MB | 4.06 MB | 4.17 MB | 3.91 MB  | 538 kB | 2.22 MB | 43 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.58 ms | 0.83 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8919   | 8919   | 15199   | 16223   | 14668   | 1999.38 | 8913   | 146679  |
| **Bytes/Sec** | 829 kB | 829 kB | 1.41 MB | 1.51 MB | 1.36 MB | 186 kB  | 829 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.34 ms | 68 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2017   | 2017   | 2843   | 3153   | 2756.6 | 362.69  | 2017   | 27560   |
| **Bytes/Sec** | 232 kB | 232 kB | 327 kB | 362 kB | 317 kB | 41.7 kB | 232 kB | 3.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.01 ms | 18.58 ms | 66 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2913   | 2913   | 5703    | 5867    | 5343.1  | 862.45 | 2913   | 53425   |
| **Bytes/Sec** | 827 kB | 827 kB | 1.62 MB | 1.67 MB | 1.52 MB | 245 kB | 827 kB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.92 ms | 3.09 ms | 163 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6975   | 6975   | 10671  | 11151   | 10413.8 | 1169.2 | 6974   | 104138  |
| **Bytes/Sec** | 642 kB | 642 kB | 982 kB | 1.03 MB | 958 kB  | 108 kB | 642 kB | 9.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.39 ms | 1.62 ms | 95 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6807   | 6807   | 9895   | 10551  | 9709.8 | 1006.38 | 6805   | 97104   |
| **Bytes/Sec** | 531 kB | 531 kB | 772 kB | 823 kB | 757 kB | 78.5 kB | 531 kB | 7.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.55 ms | 1.83 ms | 80 ms |


---

<p align="center">Generated 2021-03-16T00:18:47.120Z</p>