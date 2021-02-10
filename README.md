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
| **Average** | 10566.6 | 23370.91 | 29104 | 8204.37 | 15778.4 | 8944.73 | 19808.41 | 22834 | 18071.6 | 2587.31 | 3585.64 | 18735.64 | 8578.6 |
| **Total** | 105653 | 257108 | 291042 | 90237 | 157773 | 98390 | 198053 | 228361 | 180714 | 25867 | 39436 | 206096 | 85766 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6951   | 6951   | 10959   | 11183   | 10566.6 | 1214.24 | 6948   | 105653  |
| **Bytes/Sec** | 647 kB | 647 kB | 1.02 MB | 1.04 MB | 983 kB  | 113 kB  | 646 kB | 9.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.63 ms | 85 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16543   | 16543   | 23583   | 25599   | 23370.91 | 2304.25 | 16543   | 257108  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 2.17 MB | 2.36 MB | 2.15 MB  | 212 kB  | 1.52 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.81 ms | 58 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22271   | 22271   | 29903   | 30431   | 29104   | 2320.97 | 22265   | 291042  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.52 MB | 1.55 MB | 1.48 MB | 118 kB  | 1.14 MB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.08 ms | 0.6 ms | 44 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5827   | 5827   | 8479   | 8679   | 8204.37 | 771.81  | 5825   | 90237   |
| **Bytes/Sec** | 303 kB | 303 kB | 441 kB | 451 kB | 427 kB  | 40.1 kB | 303 kB | 4.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.42 ms | 1.74 ms | 40 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9951   | 9951   | 16447   | 17039   | 15778.4 | 2064.57 | 9948   | 157773  |
| **Bytes/Sec** | 856 kB | 856 kB | 1.41 MB | 1.46 MB | 1.36 MB | 177 kB  | 856 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.18 ms | 63 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4331   | 4331   | 9543    | 9767    | 8944.73 | 1539.39 | 4331   | 98390   |
| **Bytes/Sec** | 936 kB | 936 kB | 2.06 MB | 2.11 MB | 1.93 MB | 332 kB  | 935 kB | 21.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.86 ms | 1.86 ms | 34 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8639    | 8639    | 20863   | 23295   | 19808.41 | 3938.84 | 8636    | 198053  |
| **Bytes/Sec** | 1.32 MB | 1.32 MB | 3.19 MB | 3.56 MB | 3.03 MB  | 603 kB  | 1.32 MB | 30.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.52 ms | 1.15 ms | 29 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13055   | 13055   | 23983   | 24591   | 22834   | 3349.22 | 13055   | 228361  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 2.69 MB | 2.75 MB | 2.56 MB | 375 kB  | 1.46 MB | 25.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.31 ms | 1 ms  | 31 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12775   | 12775   | 18511   | 19775   | 18071.6 | 1847.76 | 12772   | 180714  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 1.72 MB | 1.84 MB | 1.68 MB | 172 kB  | 1.19 MB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.46 ms | 1.26 ms | 53 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1658   | 1658   | 2689   | 2885   | 2587.31 | 336.02  | 1658   | 25867   |
| **Bytes/Sec** | 191 kB | 191 kB | 309 kB | 332 kB | 297 kB  | 38.6 kB | 191 kB | 2.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 51 ms | 14.96 ms | 18.83 ms | 121 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1912   | 1912   | 3839    | 4029    | 3585.64 | 575.34 | 1912   | 39436   |
| **Bytes/Sec** | 543 kB | 543 kB | 1.09 MB | 1.14 MB | 1.02 MB | 163 kB | 543 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 9 ms  | 9 ms  | 19 ms | 10.63 ms | 3.88 ms | 190 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 12463   | 12463   | 19327   | 19983   | 18735.64 | 2016.46 | 12459   | 206096 |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.78 MB | 1.84 MB | 1.72 MB  | 186 kB  | 1.15 MB | 19 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.46 ms | 1.16 ms | 70 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5519   | 5519   | 8879   | 9039   | 8578.6 | 1022.5  | 5518   | 85766   |
| **Bytes/Sec** | 431 kB | 431 kB | 693 kB | 705 kB | 669 kB | 79.7 kB | 430 kB | 6.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.3 ms | 1.75 ms | 77 ms |


---

<p align="center">Generated 2021-02-10T00:25:48.788Z</p>