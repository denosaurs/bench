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
| **Average** | 8886.73 | 21617.1 | 23782 | 14551.64 | 19110.8 | 8785.82 | 19876 | 36911.28 | 14579.2 | 6716.5 | 2656 | 5693.5 | 22317.46 |
| **Total** | 97751 | 237757 | 237813 | 160065 | 191120 | 96652 | 218651 | 406062 | 145792 | 67164 | 26557 | 56927 | 245485 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6147   | 6147   | 9079   | 9791   | 8886.73 | 929.59  | 6144   | 97751   |
| **Bytes/Sec** | 572 kB | 572 kB | 845 kB | 911 kB | 826 kB  | 86.5 kB | 571 kB | 9.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.03 ms | 2.02 ms | 56 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14399   | 14399   | 22431   | 23407   | 21617.1 | 2400.11 | 14394   | 237757  |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 2.06 MB | 2.15 MB | 1.99 MB | 221 kB  | 1.32 MB | 21.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.02 ms | 45 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15319  | 15319  | 25887   | 26159   | 23782   | 3645.51 | 15314  | 237813  |
| **Bytes/Sec** | 781 kB | 781 kB | 1.32 MB | 1.33 MB | 1.21 MB | 186 kB  | 781 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 1.01 ms | 53 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10551  | 10551  | 14967  | 15319  | 14551.64 | 1286.32 | 10547  | 160065  |
| **Bytes/Sec** | 549 kB | 549 kB | 778 kB | 797 kB | 757 kB   | 66.8 kB | 548 kB | 8.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.27 ms | 1.22 ms | 57 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12447   | 12447   | 19903   | 20223   | 19110.8 | 2242.65 | 12443   | 191120  |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 1.71 MB | 1.74 MB | 1.64 MB | 193 kB  | 1.07 MB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 1.12 ms | 65 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4231   | 4231   | 9343    | 10151   | 8785.82 | 1589.87 | 4228   | 96652   |
| **Bytes/Sec** | 913 kB | 913 kB | 2.02 MB | 2.19 MB | 1.9 MB  | 344 kB  | 913 kB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 3.97 ms | 2.27 ms | 72 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 9903    | 9903    | 20959   | 21263   | 19876   | 3171.5 | 9903    | 218651  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 3.21 MB | 3.25 MB | 3.04 MB | 485 kB | 1.52 MB | 33.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.42 ms | 1.33 ms | 65 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 18703  | 18703  | 38975   | 39487   | 36911.28 | 5834.8 | 18700   | 406062  |
| **Bytes/Sec** | 2.1 MB | 2.1 MB | 4.37 MB | 4.42 MB | 4.13 MB  | 654 kB | 2.09 MB | 45.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.92 ms | 39 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9183   | 9183   | 15223   | 15983   | 14579.2 | 1886.53 | 9183   | 145792  |
| **Bytes/Sec** | 855 kB | 855 kB | 1.42 MB | 1.49 MB | 1.36 MB | 175 kB  | 854 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.31 ms | 1.56 ms | 74 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3947   | 3947   | 7043   | 7371   | 6716.5 | 992.55  | 3947   | 67164   |
| **Bytes/Sec** | 363 kB | 363 kB | 648 kB | 678 kB | 618 kB | 91.3 kB | 363 kB | 6.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.59 ms | 2.99 ms | 126 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1929   | 1929   | 2715   | 2935   | 2656   | 307.58  | 1929   | 26557   |
| **Bytes/Sec** | 222 kB | 222 kB | 312 kB | 338 kB | 305 kB | 35.4 kB | 222 kB | 3.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.55 ms | 18.88 ms | 88 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2969   | 2969   | 5903    | 6283    | 5693.5  | 934.96 | 2969   | 56927   |
| **Bytes/Sec** | 843 kB | 843 kB | 1.68 MB | 1.78 MB | 1.62 MB | 265 kB | 843 kB | 16.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.53 ms | 2.85 ms | 91 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15207  | 15207  | 23071  | 23743   | 22317.46 | 2295.63 | 15202  | 245485  |
| **Bytes/Sec** | 791 kB | 791 kB | 1.2 MB | 1.23 MB | 1.16 MB  | 119 kB  | 791 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.93 ms | 38 ms |


---

<p align="center">Generated 2020-12-01T00:20:50.577Z</p>