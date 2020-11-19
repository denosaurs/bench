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
| **Average** | 8778.6 | 21580.4 | 28918.55 | 13464.37 | 20611 | 14614.73 | 19707.6 | 42242.19 | 14736.8 | 8588.55 | 3030.2 | 3938.7 | 19115.6 |
| **Total** | 87778 | 215790 | 318112 | 148093 | 206113 | 160755 | 197077 | 464667 | 147351 | 94476 | 30297 | 39380 | 191160 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5367   | 5367   | 9199   | 9311   | 8778.6 | 1151.53 | 5364   | 87778   |
| **Bytes/Sec** | 499 kB | 499 kB | 856 kB | 866 kB | 816 kB | 107 kB  | 499 kB | 8.16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.11 ms | 2.39 ms | 133 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 14663   | 14663   | 22431   | 22815  | 21580.4 | 2353   | 14657   | 215790  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.06 MB | 2.1 MB | 1.99 MB | 217 kB | 1.35 MB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 1.11 ms | 86 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21231   | 21231   | 29871   | 31055   | 28918.55 | 2588.38 | 21217   | 318112  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.52 MB | 1.58 MB | 1.47 MB  | 132 kB  | 1.08 MB | 16.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.09 ms | 0.67 ms | 49 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 9023   | 9023   | 14087  | 14375  | 13464.37 | 1466.87 | 9016   | 148093 |
| **Bytes/Sec** | 469 kB | 469 kB | 733 kB | 748 kB | 700 kB   | 76.3 kB | 469 kB | 7.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.36 ms | 1.57 ms | 47 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7543   | 7543   | 21951   | 22463   | 20611   | 4363.81 | 7542   | 206113  |
| **Bytes/Sec** | 649 kB | 649 kB | 1.89 MB | 1.93 MB | 1.77 MB | 375 kB  | 649 kB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.28 ms | 1.34 ms | 99 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 5563   | 5563   | 15695   | 16135   | 14614.73 | 2939.68 | 5560   | 160755  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 3.39 MB | 3.49 MB | 3.16 MB  | 635 kB  | 1.2 MB | 34.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.56 ms | 49 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9935    | 9935    | 20431   | 22335   | 19707.6 | 3420.53 | 9929    | 197077  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 3.13 MB | 3.42 MB | 3.01 MB | 523 kB  | 1.52 MB | 30.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.44 ms | 1.36 ms | 63 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 25855  | 25855  | 44351   | 44895   | 42242.19 | 5341.65 | 25853  | 464667 |
| **Bytes/Sec** | 2.9 MB | 2.9 MB | 4.97 MB | 5.03 MB | 4.73 MB  | 598 kB  | 2.9 MB | 52 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.2 ms | 0.78 ms | 43 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8415   | 8415   | 15247   | 16247   | 14736.8 | 2129.34 | 8412   | 147351  |
| **Bytes/Sec** | 782 kB | 782 kB | 1.42 MB | 1.51 MB | 1.37 MB | 198 kB  | 782 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.3 ms | 1.39 ms | 58 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5443   | 5443   | 8943   | 9095   | 8588.55 | 1005.38 | 5443   | 94476   |
| **Bytes/Sec** | 501 kB | 501 kB | 823 kB | 837 kB | 790 kB  | 92.4 kB | 501 kB | 8.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.45 ms | 1.97 ms | 68 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2081   | 2081   | 3163   | 3637   | 3030.2 | 513.04 | 2081   | 30297   |
| **Bytes/Sec** | 239 kB | 239 kB | 364 kB | 418 kB | 348 kB | 59 kB  | 239 kB | 3.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.74 ms | 18.26 ms | 107 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1917   | 1917   | 4291    | 4439    | 3938.7  | 747.04 | 1917   | 39380   |
| **Bytes/Sec** | 545 kB | 545 kB | 1.22 MB | 1.26 MB | 1.12 MB | 212 kB | 544 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 9 ms  | 20 ms | 9.66 ms | 4.14 ms | 99 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12367  | 12367  | 19807   | 20287   | 19115.6 | 2266.95 | 12366  | 191160  |
| **Bytes/Sec** | 643 kB | 643 kB | 1.03 MB | 1.06 MB | 994 kB  | 118 kB  | 643 kB | 9.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.47 ms | 1.26 ms | 59 ms |


---

<p align="center">Generated 2020-11-19T00:17:15.262Z</p>