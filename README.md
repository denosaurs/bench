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
  - [reno](#reno)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | pogo | servest | mandarinets | aqua | reno |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 8116.4 | 22070.19 | 28048.73 | 12750.4 | 18276.41 | 13859.46 | 38265.46 | 42342.55 | 17809.2 | 8114 | 2932.4 | 4659.3 | 21666.8 | 9308.6 |
| **Total** | 81156 | 242786 | 308525 | 127497 | 182764 | 152452 | 420955 | 465757 | 178095 | 81144 | 29321 | 46588 | 216662 | 93082 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 5235   | 5235   | 8359   | 8783   | 8116.4 | 1000.2 | 5235   | 81156   |
| **Bytes/Sec** | 487 kB | 487 kB | 777 kB | 817 kB | 755 kB | 93 kB  | 487 kB | 7.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.6 ms | 2.26 ms | 133 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15111   | 15111   | 22703   | 23199   | 22070.19 | 2214.88 | 15111   | 242786  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 2.09 MB | 2.13 MB | 2.03 MB  | 204 kB  | 1.39 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.86 ms | 48 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21759   | 21759   | 28751   | 29439  | 28048.73 | 2079.48 | 21755   | 308525  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.47 MB | 1.5 MB | 1.43 MB  | 106 kB  | 1.11 MB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.1 ms | 0.59 ms | 36 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8719   | 8719   | 13135  | 13647  | 12750.4 | 1369.48 | 8716   | 127497  |
| **Bytes/Sec** | 453 kB | 453 kB | 684 kB | 710 kB | 663 kB  | 71.2 kB | 453 kB | 6.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.51 ms | 1.47 ms | 36 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11447  | 11447  | 18799   | 19727  | 18276.41 | 2318.38 | 11445  | 182764  |
| **Bytes/Sec** | 985 kB | 985 kB | 1.62 MB | 1.7 MB | 1.57 MB  | 199 kB  | 984 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.51 ms | 1.27 ms | 66 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5863    | 5863    | 14751   | 15167   | 13859.46 | 2564.03 | 5862    | 152452  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 3.19 MB | 3.28 MB | 2.99 MB  | 554 kB  | 1.27 MB | 32.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.3 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21823   | 21823   | 39967   | 40703   | 38265.46 | 5225.69 | 21820   | 420955  |
| **Bytes/Sec** | 3.34 MB | 3.34 MB | 6.12 MB | 6.23 MB | 5.85 MB  | 799 kB  | 3.34 MB | 64.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.35 ms | 0.73 ms | 18 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 27663  | 27663  | 43647   | 44351   | 42342.55 | 4655.15 | 27657  | 465757  |
| **Bytes/Sec** | 3.1 MB | 3.1 MB | 4.89 MB | 4.97 MB | 4.74 MB  | 521 kB  | 3.1 MB | 52.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.37 ms | 0.65 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11063   | 11063   | 18191   | 20143   | 17809.2 | 2407.78 | 11061   | 178095  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.69 MB | 1.87 MB | 1.66 MB | 224 kB  | 1.03 MB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.59 ms | 1.27 ms | 65 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4927   | 4927   | 8495   | 8703   | 8114   | 1075.28 | 4925   | 81144   |
| **Bytes/Sec** | 453 kB | 453 kB | 782 kB | 801 kB | 747 kB | 99 kB   | 453 kB | 7.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.6 ms | 2.22 ms | 125 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2195   | 2195   | 3071   | 3545   | 2932.4 | 394.59  | 2195   | 29321   |
| **Bytes/Sec** | 253 kB | 253 kB | 353 kB | 408 kB | 337 kB | 45.4 kB | 252 kB | 3.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.14 ms | 18.39 ms | 98 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2395   | 2395   | 4951    | 5223    | 4659.3  | 825.05 | 2395   | 46588   |
| **Bytes/Sec** | 680 kB | 680 kB | 1.41 MB | 1.48 MB | 1.32 MB | 234 kB | 680 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 8.13 ms | 3.65 ms | 200 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14967   | 14967   | 22079   | 23567   | 21666.8 | 2340.98 | 14960   | 216662  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 2.03 MB | 2.17 MB | 1.99 MB | 215 kB  | 1.38 MB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.33 ms | 1.03 ms | 43 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6083   | 6083   | 9639   | 9791   | 9308.6 | 1078.01 | 6080   | 93082   |
| **Bytes/Sec** | 474 kB | 474 kB | 752 kB | 763 kB | 726 kB | 84.1 kB | 474 kB | 7.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.57 ms | 1.69 ms | 27 ms |


---

<p align="center">Generated 2020-12-18T13:28:59.153Z</p>