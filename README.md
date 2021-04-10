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
| **Average** | 7084 | 17530.55 | 25908.8 | 8426.91 | 21118.19 | 8693.19 | 32466.91 | 22244.4 | 15225.6 | 2758.5 | 4938.5 | 19738.8 | 8957.8 |
| **Total** | 70838 | 192850 | 259054 | 92698 | 232300 | 95612 | 357131 | 222454 | 152245 | 27582 | 49373 | 197376 | 89568 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5027   | 5027   | 7307   | 7667   | 7084   | 711     | 5026   | 70838   |
| **Bytes/Sec** | 467 kB | 467 kB | 680 kB | 713 kB | 659 kB | 66.1 kB | 467 kB | 6.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.21 ms | 1.94 ms | 116 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11015   | 11015   | 18239   | 18799   | 17530.55 | 2116.65 | 11012   | 192850  |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.68 MB | 1.73 MB | 1.61 MB  | 195 kB  | 1.01 MB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.7 ms | 1.38 ms | 78 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17711  | 17711  | 26703   | 27359  | 25908.8 | 2752.66 | 17696  | 259054  |
| **Bytes/Sec** | 903 kB | 903 kB | 1.36 MB | 1.4 MB | 1.32 MB | 140 kB  | 902 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.69 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6083   | 6083   | 8631   | 9183   | 8426.91 | 796.59  | 6081   | 92698   |
| **Bytes/Sec** | 316 kB | 316 kB | 449 kB | 477 kB | 438 kB  | 41.4 kB | 316 kB | 4.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.33 ms | 1.5 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 12319   | 12319   | 22031  | 22271   | 21118.19 | 2791.66 | 12315   | 232300 |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.9 MB | 1.92 MB | 1.82 MB  | 240 kB  | 1.06 MB | 20 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.96 ms | 52 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4087   | 4087   | 9095    | 9903    | 8693.19 | 1609.3 | 4087   | 95612   |
| **Bytes/Sec** | 883 kB | 883 kB | 1.96 MB | 2.14 MB | 1.88 MB | 347 kB | 883 kB | 20.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.03 ms | 1.99 ms | 38 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 17679   | 17679   | 33823   | 35199   | 32466.91 | 4763.09 | 17679  | 357131  |
| **Bytes/Sec** | 2.71 MB | 2.71 MB | 5.18 MB | 5.39 MB | 4.97 MB  | 729 kB  | 2.7 MB | 54.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.64 ms | 0.92 ms | 20 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13143   | 13143   | 23103   | 24559   | 22244.4 | 3158.33 | 13138   | 222454  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.59 MB | 2.75 MB | 2.49 MB | 354 kB  | 1.47 MB | 24.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.96 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9287   | 9287   | 15967   | 17007   | 15225.6 | 2113.14 | 9281   | 152245  |
| **Bytes/Sec** | 863 kB | 863 kB | 1.48 MB | 1.58 MB | 1.42 MB | 197 kB  | 863 kB | 14.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.23 ms | 1.39 ms | 69 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2030   | 2030   | 2797   | 3175   | 2758.5 | 339.77  | 2030   | 27582   |
| **Bytes/Sec** | 233 kB | 233 kB | 322 kB | 365 kB | 317 kB | 39.1 kB | 233 kB | 3.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | ----- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 14 ms | 18.53 ms | 107 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 2711   | 2711   | 5267   | 5363    | 4938.5 | 797.71 | 2711   | 49373 |
| **Bytes/Sec** | 770 kB | 770 kB | 1.5 MB | 1.52 MB | 1.4 MB | 227 kB | 770 kB | 14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.83 ms | 3.72 ms | 222 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13031  | 13031  | 19983   | 21375   | 19738.8 | 2350.76 | 13030  | 197376  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.84 MB | 1.97 MB | 1.82 MB | 216 kB  | 1.2 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.39 ms | 1.21 ms | 68 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5895   | 5895   | 9335   | 9495   | 8957.8 | 1030.38 | 5893   | 89568   |
| **Bytes/Sec** | 460 kB | 460 kB | 728 kB | 740 kB | 699 kB | 80.3 kB | 460 kB | 6.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 3.78 ms | 1.99 ms | 41 ms |


---

<p align="center">Generated 2021-04-10T00:42:36.535Z</p>