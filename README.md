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
| **Average** | 9006.21 | 23553.82 | 21170 | 8987.82 | 15083.28 | 13869 | 18185.28 | 40146.19 | 18628.73 | 7630.6 | 2800.4 | 4752 | 19909.2 |
| **Total** | 90061 | 259074 | 211700 | 98855 | 165911 | 138675 | 200041 | 441603 | 204921 | 76302 | 27999 | 47509 | 199063 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5539   | 5539   | 9391   | 9623   | 9006.21 | 1166.93 | 5537   | 90061   |
| **Bytes/Sec** | 432 kB | 432 kB | 732 kB | 751 kB | 702 kB  | 91 kB   | 432 kB | 7.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.87 ms | 1.85 ms | 46 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16087   | 16087   | 24383   | 24623   | 23553.82 | 2373.61 | 16080   | 259074  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.24 MB | 2.27 MB | 2.17 MB  | 218 kB  | 1.48 MB | 23.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.89 ms | 89 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13871  | 13871  | 21951   | 22559   | 21170   | 2470.86 | 13864  | 211700  |
| **Bytes/Sec** | 707 kB | 707 kB | 1.12 MB | 1.15 MB | 1.08 MB | 126 kB  | 707 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.33 ms | 1.12 ms | 40 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6683   | 6683   | 9199   | 9559   | 8987.82 | 759.51  | 6682   | 98855   |
| **Bytes/Sec** | 348 kB | 348 kB | 478 kB | 497 kB | 467 kB  | 39.4 kB | 347 kB | 5.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.84 ms | 1.82 ms | 64 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8783   | 8783   | 15695   | 16295  | 15083.28 | 2022.49 | 8776   | 165911  |
| **Bytes/Sec** | 755 kB | 755 kB | 1.35 MB | 1.4 MB | 1.3 MB   | 174 kB  | 755 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.47 ms | 93 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg   | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------ | ----- | ------- | ------ | ------ |
| **Req/Sec**   | 5559   | 5559   | 14855   | 15255  | 13869 | 2826.55 | 5556   | 138675 |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 3.21 MB | 3.3 MB | 3 MB  | 611 kB  | 1.2 MB | 30 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.34 ms | 1.66 ms | 66 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7799    | 7799    | 19135   | 20063   | 18185.28 | 3331.04 | 7799    | 200041  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 2.93 MB | 3.07 MB | 2.78 MB  | 509 kB  | 1.19 MB | 30.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.59 ms | 1.6 ms | 48 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20207   | 20207   | 42271   | 43167   | 40146.19 | 6361.16 | 20202   | 441603  |
| **Bytes/Sec** | 2.26 MB | 2.26 MB | 4.73 MB | 4.84 MB | 4.5 MB   | 713 kB  | 2.26 MB | 49.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.26 ms | 0.82 ms | 34 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 12839  | 12839  | 19071   | 20095   | 18628.73 | 1933.3 | 12839   | 204921  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.77 MB | 1.87 MB | 1.73 MB  | 180 kB | 1.19 MB | 19.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.45 ms | 1.4 ms | 103 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4491   | 4491   | 7915   | 8215   | 7630.6 | 1060.28 | 4489   | 76302   |
| **Bytes/Sec** | 413 kB | 413 kB | 729 kB | 756 kB | 702 kB | 97.6 kB | 413 kB | 7.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.66 ms | 2.15 ms | 56 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2115   | 2115   | 2861   | 3291   | 2800.4 | 305.84  | 2115   | 27999   |
| **Bytes/Sec** | 243 kB | 243 kB | 329 kB | 378 kB | 322 kB | 35.1 kB | 243 kB | 3.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.81 ms | 18.62 ms | 131 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2215   | 2215   | 5143    | 5311    | 4752    | 918.98 | 2215   | 47509   |
| **Bytes/Sec** | 629 kB | 629 kB | 1.46 MB | 1.51 MB | 1.35 MB | 261 kB | 629 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 16 ms | 8.05 ms | 4.21 ms | 232 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13503  | 13503  | 20511   | 21295   | 19909.2 | 2178.53 | 13501  | 199063  |
| **Bytes/Sec** | 702 kB | 702 kB | 1.07 MB | 1.11 MB | 1.04 MB | 113 kB  | 702 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.4 ms | 1.35 ms | 73 ms |


---

<p align="center">Generated 2020-11-07T00:29:16.007Z</p>