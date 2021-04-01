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
| **Average** | 8300 | 23162 | 13700 | 9314.9 | 10929.4 | 10179.1 | 27442.4 | 23178 | 15755.2 | 2967.4 | 4520.8 | 18732.73 | 7487.6 |
| **Total** | 82995 | 231617 | 136993 | 93132 | 109305 | 101788 | 274434 | 231775 | 157554 | 29666 | 45206 | 206029 | 74877 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5607   | 5607   | 8567   | 9263   | 8300   | 978.7   | 5604   | 82995   |
| **Bytes/Sec** | 521 kB | 521 kB | 797 kB | 861 kB | 772 kB | 91.1 kB | 521 kB | 7.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.41 ms | 1.91 ms | 84 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16063   | 16063   | 23807   | 24495   | 23162   | 2382.28 | 16057   | 231617  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.19 MB | 2.25 MB | 2.13 MB | 219 kB  | 1.48 MB | 21.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 1.28 ms | 1.14 ms | 49 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 9615   | 9615   | 10135  | 19903   | 13700  | 4000.99 | 9610   | 136993  |
| **Bytes/Sec** | 490 kB | 490 kB | 517 kB | 1.02 MB | 699 kB | 204 kB  | 490 kB | 6.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.4 ms | 1.99 ms | 50 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3071   | 3071   | 8863   | 13175  | 9314.9 | 3130.06 | 3071   | 93132   |
| **Bytes/Sec** | 160 kB | 160 kB | 461 kB | 685 kB | 484 kB | 163 kB  | 160 kB | 4.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 13 ms | 3.65 ms | 3.13 ms | 41 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7451   | 7451   | 9551   | 17183   | 10929.4 | 3428.05 | 7451   | 109305 |
| **Bytes/Sec** | 641 kB | 641 kB | 821 kB | 1.48 MB | 940 kB  | 295 kB  | 641 kB | 9.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 8 ms  | 3.2 ms | 2.07 ms | 78 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2279   | 2279   | 10839   | 14863   | 10179.1 | 4005.24 | 2278   | 101788 |
| **Bytes/Sec** | 492 kB | 492 kB | 2.34 MB | 3.21 MB | 2.2 MB  | 865 kB  | 492 kB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 14 ms | 3.43 ms | 3.29 ms | 45 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 13927   | 13927   | 30783   | 31791   | 27442.4 | 6392.76 | 13923   | 274434 |
| **Bytes/Sec** | 2.13 MB | 2.13 MB | 4.71 MB | 4.87 MB | 4.2 MB  | 978 kB  | 2.13 MB | 42 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 0.95 ms | 1.36 ms | 30 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 13151   | 13151   | 24207   | 25311   | 23178  | 3371.48 | 13144   | 231775 |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.71 MB | 2.83 MB | 2.6 MB | 378 kB  | 1.47 MB | 26 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.28 ms | 1.05 ms | 42 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8319   | 8319   | 16431   | 18063   | 15755.2 | 2625.75 | 8317   | 157554  |
| **Bytes/Sec** | 774 kB | 774 kB | 1.53 MB | 1.68 MB | 1.47 MB | 244 kB  | 773 kB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.15 ms | 1.32 ms | 71 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ----- | ------ | ------- |
| **Req/Sec**   | 2283   | 2283   | 2939   | 3535   | 2967.4 | 348.3 | 2282   | 29666   |
| **Bytes/Sec** | 263 kB | 263 kB | 338 kB | 407 kB | 341 kB | 40 kB | 262 kB | 3.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.97 ms | 18.29 ms | 93 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3011   | 3011   | 4639    | 5487    | 4520.8  | 817.88 | 3011   | 45206   |
| **Bytes/Sec** | 856 kB | 856 kB | 1.32 MB | 1.56 MB | 1.28 MB | 232 kB | 855 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 17 ms | 8.33 ms | 4.21 ms | 187 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 13263   | 13263   | 19231   | 20335   | 18732.73 | 1832.73 | 13256   | 206029 |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 1.77 MB | 1.87 MB | 1.72 MB  | 169 kB  | 1.22 MB | 19 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.55 ms | 1.09 ms | 61 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5163   | 5163   | 7671   | 7919   | 7487.6 | 782.13  | 5162   | 74877   |
| **Bytes/Sec** | 403 kB | 403 kB | 599 kB | 618 kB | 584 kB | 61.1 kB | 403 kB | 5.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.76 ms | 2.13 ms | 105 ms |


---

<p align="center">Generated 2021-04-01T00:41:33.204Z</p>