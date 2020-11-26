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
| **Average** | 8219.6 | 18526.8 | 20546 | 16129.46 | 18317.1 | 8519.91 | 35562.4 | 25971.28 | 18655.64 | 6977.64 | 2669.19 | 5153.5 | 23150 |
| **Total** | 82195 | 185272 | 205461 | 177412 | 201476 | 93714 | 355628 | 285669 | 205228 | 76746 | 29356 | 51532 | 231471 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4639   | 4639   | 8639   | 8855   | 8219.6 | 1216.92 | 4638   | 82195   |
| **Bytes/Sec** | 431 kB | 431 kB | 803 kB | 823 kB | 764 kB | 113 kB  | 431 kB | 7.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.56 ms | 2.13 ms | 47 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 12383   | 12383   | 19343   | 19887   | 18526.8 | 2143.03 | 12378   | 185272 |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.78 MB | 1.83 MB | 1.7 MB  | 197 kB  | 1.14 MB | 17 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.5 ms | 1.27 ms | 65 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13439  | 13439  | 21135   | 22927   | 20546   | 2494.28 | 13436  | 205461  |
| **Bytes/Sec** | 686 kB | 686 kB | 1.08 MB | 1.17 MB | 1.05 MB | 127 kB  | 685 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.41 ms | 1.23 ms | 55 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 12511  | 12511  | 16527  | 16863  | 16129.46 | 1178.76 | 12504  | 177412  |
| **Bytes/Sec** | 650 kB | 650 kB | 860 kB | 877 kB | 839 kB   | 61.4 kB | 650 kB | 9.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.1 ms | 1.15 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12719   | 12719   | 19103   | 20911  | 18317.1 | 2182.16 | 12719   | 201476  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.64 MB | 1.8 MB | 1.58 MB | 187 kB  | 1.09 MB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.6 ms | 1.18 ms | 45 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4069   | 4069   | 9047    | 9455    | 8519.91 | 1496.48 | 4069   | 93714   |
| **Bytes/Sec** | 879 kB | 879 kB | 1.95 MB | 2.04 MB | 1.84 MB | 323 kB  | 879 kB | 20.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 10 ms | 4.23 ms | 2.24 ms | 59 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17855   | 17855   | 37279  | 38143   | 35562.4 | 5932.73 | 17844   | 355628  |
| **Bytes/Sec** | 2.73 MB | 2.73 MB | 5.7 MB | 5.84 MB | 5.44 MB | 908 kB  | 2.73 MB | 54.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.75 ms | 0.92 ms | 52 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 15975   | 15975   | 26463   | 29327   | 25971.28 | 3314.77 | 15968   | 285669 |
| **Bytes/Sec** | 1.79 MB | 1.79 MB | 2.97 MB | 3.28 MB | 2.91 MB  | 371 kB  | 1.79 MB | 32 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.84 ms | 40 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13359   | 13359   | 19407   | 20591   | 18655.64 | 1860.86 | 13358   | 205228  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 1.81 MB | 1.91 MB | 1.74 MB  | 173 kB  | 1.24 MB | 19.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.55 ms | 1.39 ms | 69 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4259   | 4259   | 7303   | 7403   | 6977.64 | 886.99  | 4256   | 76746   |
| **Bytes/Sec** | 392 kB | 392 kB | 672 kB | 681 kB | 642 kB  | 81.6 kB | 392 kB | 7.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.5 ms | 2.18 ms | 65 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1665   | 1665   | 2821   | 3047   | 2669.19 | 393.92  | 1665   | 29356   |
| **Bytes/Sec** | 191 kB | 191 kB | 324 kB | 350 kB | 307 kB  | 45.3 kB | 191 kB | 3.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.48 ms | 18.97 ms | 121 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2637   | 2637   | 5475    | 5691    | 5153.5  | 877.62 | 2636   | 51532   |
| **Bytes/Sec** | 749 kB | 749 kB | 1.56 MB | 1.62 MB | 1.46 MB | 249 kB | 749 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 15 ms | 7.29 ms | 2.83 ms | 86 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 16103  | 16103  | 23887   | 24303   | 23150  | 2353.97 | 16096  | 231471 |
| **Bytes/Sec** | 837 kB | 837 kB | 1.24 MB | 1.26 MB | 1.2 MB | 122 kB  | 837 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.87 ms | 52 ms |


---

<p align="center">Generated 2020-11-26T00:17:03.664Z</p>