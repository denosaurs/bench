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
| **Average** | 7927.2 | 22710.8 | 26854.55 | 8971.8 | 17085.1 | 13679.8 | 32860.73 | 44012 | 14007.2 | 5432.1 | 2464.31 | 4822.11 | 24536 |
| **Total** | 79270 | 227110 | 295368 | 89719 | 187934 | 136786 | 361437 | 440120 | 140075 | 54318 | 24638 | 48206 | 269874 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4467   | 4467   | 8279   | 8687   | 7927.2 | 1189.16 | 4466   | 79270   |
| **Bytes/Sec** | 415 kB | 415 kB | 770 kB | 808 kB | 737 kB | 111 kB  | 415 kB | 7.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.69 ms | 2.93 ms | 84 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15791   | 15791   | 23247   | 24735   | 22710.8 | 2390.41 | 15786   | 227110  |
| **Bytes/Sec** | 1.45 MB | 1.45 MB | 2.14 MB | 2.28 MB | 2.09 MB | 220 kB  | 1.45 MB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.08 ms | 75 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21263   | 21263   | 27407  | 28799   | 26854.55 | 1930.3  | 21251   | 295368  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.4 MB | 1.47 MB | 1.37 MB  | 98.6 kB | 1.08 MB | 15.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.12 ms | 0.88 ms | 62 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7119   | 7119   | 9223   | 9871   | 8971.8 | 921.16  | 7117   | 89719   |
| **Bytes/Sec** | 370 kB | 370 kB | 479 kB | 513 kB | 467 kB | 47.9 kB | 370 kB | 4.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 3.93 ms | 1.65 ms | 46 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 10831  | 10831  | 17807   | 18783   | 17085.1 | 2090.1 | 10830  | 187934  |
| **Bytes/Sec** | 932 kB | 932 kB | 1.53 MB | 1.62 MB | 1.47 MB | 180 kB | 931 kB | 16.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.85 ms | 1.41 ms | 57 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5507    | 5507    | 14679   | 15087   | 13679.8 | 2776.83 | 5506    | 136786  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 3.17 MB | 3.26 MB | 2.95 MB | 600 kB  | 1.19 MB | 29.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.36 ms | 1.88 ms | 94 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16311  | 16311  | 34943   | 35391   | 32860.73 | 5341.36 | 16307   | 361437  |
| **Bytes/Sec** | 2.5 MB | 2.5 MB | 5.35 MB | 5.41 MB | 5.03 MB  | 817 kB  | 2.49 MB | 55.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.03 ms | 0.91 ms | 63 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 27727  | 27727  | 45759   | 46271   | 44012   | 5446.11 | 27713  | 440120  |
| **Bytes/Sec** | 3.1 MB | 3.1 MB | 5.13 MB | 5.18 MB | 4.93 MB | 610 kB  | 3.1 MB | 49.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.16 ms | 0.67 ms | 39 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 9103   | 9103   | 14359   | 16135  | 14007.2 | 1751.39 | 9099   | 140075 |
| **Bytes/Sec** | 846 kB | 846 kB | 1.34 MB | 1.5 MB | 1.3 MB  | 163 kB  | 846 kB | 13 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.43 ms | 1.65 ms | 63 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 3335   | 3335   | 5671   | 5879   | 5432.1 | 721.86  | 3334   | 54318 |
| **Bytes/Sec** | 307 kB | 307 kB | 522 kB | 541 kB | 500 kB | 66.4 kB | 307 kB | 5 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.9 ms | 2.8 ms | 72 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1534   | 1534   | 2467   | 2953   | 2464.31 | 394.85  | 1534   | 24638   |
| **Bytes/Sec** | 177 kB | 177 kB | 284 kB | 340 kB | 283 kB  | 45.4 kB | 176 kB | 2.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 52 ms | 15.76 ms | 19.31 ms | 119 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2443   | 2443   | 5179    | 5323    | 4822.11 | 835.95 | 2442   | 48206   |
| **Bytes/Sec** | 694 kB | 694 kB | 1.47 MB | 1.51 MB | 1.37 MB | 237 kB | 694 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.87 ms | 4.02 ms | 227 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 16831  | 16831  | 25503   | 25775   | 24536   | 2513.06 | 16818  | 269874 |
| **Bytes/Sec** | 875 kB | 875 kB | 1.33 MB | 1.34 MB | 1.28 MB | 131 kB  | 875 kB | 14 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.81 ms | 37 ms |


---

<p align="center">Generated 2020-12-04T00:18:10.135Z</p>