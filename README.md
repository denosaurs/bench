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
| **Average** | 9017.8 | 16574 | 21025.2 | 8870.6 | 18902.8 | 15242.73 | 33413.82 | 36652 | 18746.8 | 7414.8 | 3085.2 | 4086.5 | 20894 |
| **Total** | 90164 | 165736 | 210261 | 88693 | 189025 | 167683 | 367575 | 366520 | 187460 | 74143 | 30846 | 40862 | 208941 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5679   | 5679   | 9335   | 9783   | 9017.8 | 1137.07 | 5678   | 90164   |
| **Bytes/Sec** | 443 kB | 443 kB | 728 kB | 763 kB | 703 kB | 88.6 kB | 443 kB | 7.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.91 ms | 2.01 ms | 86 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9543   | 9543   | 17023   | 18543   | 16574   | 2415.77 | 9541   | 165736  |
| **Bytes/Sec** | 878 kB | 878 kB | 1.57 MB | 1.71 MB | 1.52 MB | 222 kB  | 878 kB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.99 ms | 1.6 ms | 73 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 12791  | 12791  | 21871   | 23199   | 21025.2 | 2851.8 | 12787  | 210261  |
| **Bytes/Sec** | 652 kB | 652 kB | 1.12 MB | 1.18 MB | 1.07 MB | 146 kB | 652 kB | 10.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.49 ms | 72 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5455   | 5455   | 9159   | 9487   | 8870.6 | 1147.73 | 5452   | 88693   |
| **Bytes/Sec** | 284 kB | 284 kB | 476 kB | 493 kB | 461 kB | 59.7 kB | 284 kB | 4.61 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.05 ms | 2.06 ms | 83 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11871   | 11871   | 19631   | 20319   | 18902.8 | 2395.46 | 11866   | 189025  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.69 MB | 1.75 MB | 1.63 MB | 206 kB  | 1.02 MB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.41 ms | 1.21 ms | 43 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5751    | 5751    | 16295   | 17135  | 15242.73 | 3095.62 | 5750    | 167683  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 3.52 MB | 3.7 MB | 3.29 MB  | 669 kB  | 1.24 MB | 36.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.21 ms | 1.5 ms | 63 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17423   | 17423   | 35359   | 36127   | 33413.82 | 5148.98 | 17421   | 367575  |
| **Bytes/Sec** | 2.67 MB | 2.67 MB | 5.41 MB | 5.53 MB | 5.11 MB  | 788 kB  | 2.67 MB | 56.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.94 ms | 0.92 ms | 59 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg    | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------ | ------- | ------- | ------- |
| **Req/Sec**   | 19311   | 19311   | 38783   | 39295  | 36652  | 5848.66 | 19302   | 366520  |
| **Bytes/Sec** | 2.16 MB | 2.16 MB | 4.35 MB | 4.4 MB | 4.1 MB | 655 kB  | 2.16 MB | 41.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.56 ms | 0.96 ms | 59 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12663   | 12663   | 19167   | 20495   | 18746.8 | 2106.51 | 12660   | 187460  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.78 MB | 1.91 MB | 1.74 MB | 196 kB  | 1.18 MB | 17.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.41 ms | 1.14 ms | 51 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4539   | 4539   | 7743   | 8087   | 7414.8 | 992.48  | 4539   | 74143   |
| **Bytes/Sec** | 418 kB | 418 kB | 712 kB | 744 kB | 682 kB | 91.2 kB | 418 kB | 6.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.79 ms | 2.32 ms | 92 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2131   | 2131   | 2899   | 3973   | 3085.2 | 591.75 | 2131   | 30846   |
| **Bytes/Sec** | 245 kB | 245 kB | 333 kB | 457 kB | 355 kB | 68 kB  | 245 kB | 3.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.47 ms | 18.15 ms | 121 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2015   | 2015   | 4351    | 4899    | 4086.5  | 854.47 | 2015   | 40862   |
| **Bytes/Sec** | 572 kB | 572 kB | 1.24 MB | 1.39 MB | 1.16 MB | 243 kB | 572 kB | 11.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 19 ms | 9.25 ms | 4.57 ms | 108 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14119  | 14119  | 21263   | 23343   | 20894   | 2385.58 | 14113  | 208941  |
| **Bytes/Sec** | 734 kB | 734 kB | 1.11 MB | 1.21 MB | 1.09 MB | 124 kB  | 734 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.29 ms | 1.13 ms | 59 ms |


---

<p align="center">Generated 2020-11-05T00:27:29.054Z</p>