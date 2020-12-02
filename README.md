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
| **Average** | 8022.6 | 23550.8 | 24862.4 | 8487.1 | 19874.55 | 13625 | 35128 | 40132 | 16006.4 | 5996.5 | 2437.5 | 4532.4 | 17860 |
| **Total** | 80226 | 235476 | 248654 | 93352 | 218602 | 136237 | 386396 | 401365 | 160062 | 59959 | 24369 | 45317 | 196438 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4567   | 4567   | 8367   | 8799   | 8022.6 | 1184.13 | 4567   | 80226   |
| **Bytes/Sec** | 425 kB | 425 kB | 778 kB | 818 kB | 746 kB | 110 kB  | 425 kB | 7.46 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.53 ms | 2.47 ms | 120 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15407   | 15407   | 24383   | 24735   | 23550.8 | 2721.78 | 15405   | 235476  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2.24 MB | 2.28 MB | 2.17 MB | 250 kB  | 1.42 MB | 21.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.84 ms | 36 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17871  | 17871  | 25487  | 26479   | 24862.4 | 2376.64 | 17871  | 248654  |
| **Bytes/Sec** | 912 kB | 912 kB | 1.3 MB | 1.35 MB | 1.27 MB | 121 kB  | 911 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.87 ms | 47 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5487   | 5487   | 8775   | 9087   | 8487.1 | 966.62  | 5486   | 93352   |
| **Bytes/Sec** | 285 kB | 285 kB | 456 kB | 473 kB | 441 kB | 50.2 kB | 285 kB | 4.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.33 ms | 1.96 ms | 88 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 12959   | 12959   | 20527   | 21087   | 19874.55 | 2223.3 | 12954   | 218602  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.77 MB | 1.81 MB | 1.71 MB  | 191 kB | 1.11 MB | 18.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.26 ms | 1.04 ms | 48 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5375    | 5375    | 14583   | 14999   | 13625   | 2806.47 | 5373    | 136237  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 3.15 MB | 3.24 MB | 2.94 MB | 606 kB  | 1.16 MB | 29.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.36 ms | 1.65 ms | 60 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19119   | 19119   | 36831   | 37343   | 35128   | 5092.13 | 19105   | 386396  |
| **Bytes/Sec** | 2.92 MB | 2.92 MB | 5.64 MB | 5.71 MB | 5.37 MB | 779 kB  | 2.92 MB | 59.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.93 ms | 0.72 ms | 38 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 23551   | 23551   | 42015   | 42207   | 40132  | 5531.43 | 23549   | 401365 |
| **Bytes/Sec** | 2.64 MB | 2.64 MB | 4.71 MB | 4.73 MB | 4.5 MB | 620 kB  | 2.64 MB | 45 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.2 ms | 0.72 ms | 33 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9647   | 9647   | 16431   | 18575   | 16006.4 | 2275.27 | 9645   | 160062  |
| **Bytes/Sec** | 897 kB | 897 kB | 1.53 MB | 1.73 MB | 1.49 MB | 212 kB  | 897 kB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.04 ms | 1.62 ms | 79 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3723   | 3723   | 6127   | 6871   | 5996.5 | 882.79  | 3722   | 59959   |
| **Bytes/Sec** | 343 kB | 343 kB | 564 kB | 632 kB | 552 kB | 81.3 kB | 342 kB | 5.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 12 ms | 6.18 ms | 2.43 ms | 52 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ----- | ------ | ------ |
| **Req/Sec**   | 1458   | 1458   | 2497   | 2841   | 2437.5 | 356.4 | 1458   | 24369  |
| **Bytes/Sec** | 168 kB | 168 kB | 287 kB | 327 kB | 280 kB | 41 kB | 168 kB | 2.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 7 ms  | 52 ms | 15.89 ms | 19.32 ms | 119 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2215   | 2215   | 4895    | 5003    | 4532.4  | 822.85 | 2214   | 45317   |
| **Bytes/Sec** | 629 kB | 629 kB | 1.39 MB | 1.42 MB | 1.29 MB | 234 kB | 629 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 17 ms | 8.22 ms | 3.76 ms | 107 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 10847  | 10847  | 18671  | 19231  | 17860  | 2261.33 | 10844  | 196438  |
| **Bytes/Sec** | 564 kB | 564 kB | 971 kB | 999 kB | 929 kB | 118 kB  | 564 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.62 ms | 1.57 ms | 71 ms |


---

<p align="center">Generated 2020-12-02T00:18:28.754Z</p>