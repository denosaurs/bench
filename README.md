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
  - [pogo](#pogo)
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | pogo | servest | mandarinets | aqua |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 7982 | 22502.19 | 26429.82 | 13668.73 | 22665.46 | 13671.1 | 33064.37 | 39016.81 | 13076.2 | 5917.9 | 2635.2 | 5552.9 | 23738.8 |
| **Total** | 87793 | 247530 | 290710 | 150360 | 249319 | 150375 | 363693 | 390208 | 130747 | 59177 | 26348 | 55528 | 237370 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4843   | 4843   | 8383   | 9287   | 7982   | 1202   | 4842   | 87793   |
| **Bytes/Sec** | 451 kB | 451 kB | 779 kB | 863 kB | 742 kB | 112 kB | 450 kB | 8.16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.63 ms | 2.43 ms | 116 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15511   | 15511   | 23359   | 23887  | 22502.19 | 2260.89 | 15509   | 247530  |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 2.15 MB | 2.2 MB | 2.07 MB  | 208 kB  | 1.43 MB | 22.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.87 ms | 48 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 19199  | 19199  | 27183   | 27839   | 26429.82 | 2330.81 | 19194  | 290710  |
| **Bytes/Sec** | 979 kB | 979 kB | 1.39 MB | 1.42 MB | 1.35 MB  | 119 kB  | 979 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.71 ms | 47 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9175   | 9175   | 14119  | 14383  | 13668.73 | 1434.46 | 9175   | 150360  |
| **Bytes/Sec** | 477 kB | 477 kB | 734 kB | 748 kB | 711 kB   | 74.6 kB | 477 kB | 7.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.38 ms | 52 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16495   | 16495   | 23215 | 24111   | 22665.46 | 2016.19 | 16482   | 249319  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2 MB  | 2.07 MB | 1.95 MB  | 174 kB  | 1.42 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.77 ms | 40 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5479    | 5479    | 14663   | 15047   | 13671.1 | 2674.76 | 5477    | 150375  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 3.17 MB | 3.25 MB | 2.95 MB | 578 kB  | 1.18 MB | 32.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.4 ms | 1.6 ms | 46 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13607   | 13607   | 35103   | 36415   | 33064.37 | 6247.55 | 13600   | 363693  |
| **Bytes/Sec** | 2.08 MB | 2.08 MB | 5.37 MB | 5.57 MB | 5.06 MB  | 956 kB  | 2.08 MB | 55.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.95 ms | 1.02 ms | 57 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 20527  | 20527  | 41343   | 42751   | 39016.81 | 6306.82 | 20526  | 390208  |
| **Bytes/Sec** | 2.3 MB | 2.3 MB | 4.63 MB | 4.79 MB | 4.37 MB  | 706 kB  | 2.3 MB | 43.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.33 ms | 0.89 ms | 44 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7719   | 7719   | 13487   | 14423   | 13076.2 | 1847.06 | 7718   | 130747  |
| **Bytes/Sec** | 718 kB | 718 kB | 1.25 MB | 1.34 MB | 1.22 MB | 172 kB  | 718 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.54 ms | 1.93 ms | 86 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3617   | 3617   | 6139   | 6395   | 5917.9 | 784.39  | 3616   | 59177   |
| **Bytes/Sec** | 333 kB | 333 kB | 565 kB | 589 kB | 544 kB | 72.2 kB | 333 kB | 5.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 13 ms | 6.26 ms | 3.01 ms | 77 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1969   | 1969   | 2619   | 3225   | 2635.2 | 312.11  | 1969   | 26348   |
| **Bytes/Sec** | 227 kB | 227 kB | 301 kB | 371 kB | 303 kB | 35.9 kB | 226 kB | 3.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 52 ms | 14.66 ms | 18.91 ms | 99 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3039   | 3039   | 5875    | 6055    | 5552.9  | 882.42 | 3039   | 55528   |
| **Bytes/Sec** | 863 kB | 863 kB | 1.67 MB | 1.72 MB | 1.58 MB | 251 kB | 863 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.79 ms | 3.46 ms | 208 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15991  | 15991  | 24687   | 24959  | 23738.8 | 2614.08 | 15984  | 237370  |
| **Bytes/Sec** | 831 kB | 831 kB | 1.28 MB | 1.3 MB | 1.23 MB | 136 kB  | 831 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.86 ms | 43 ms |


---

<p align="center">Generated 2020-11-28T00:17:33.973Z</p>