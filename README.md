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
| **Average** | 9999 | 21138.55 | 24332.37 | 13301.46 | 23363.2 | 12835.46 | 33508.4 | 24750 | 17789.2 | 6826.4 | 2776.5 | 4962.7 | 20214 |
| **Total** | 99977 | 232521 | 267631 | 146310 | 233600 | 141191 | 335123 | 247477 | 177908 | 68260 | 27762 | 49623 | 202120 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 6315   | 6315   | 10223  | 10967   | 9999   | 1267.66 | 6312   | 99977  |
| **Bytes/Sec** | 587 kB | 587 kB | 951 kB | 1.02 MB | 930 kB | 118 kB  | 587 kB | 9.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.46 ms | 1.9 ms | 68 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14863   | 14863   | 21487   | 22783  | 21138.55 | 2090.43 | 14858   | 232521  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 1.98 MB | 2.1 MB | 1.94 MB  | 192 kB  | 1.37 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.32 ms | 0.93 ms | 44 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 16479  | 16479  | 25167   | 25887   | 24332.37 | 2564.51 | 16473  | 267631  |
| **Bytes/Sec** | 840 kB | 840 kB | 1.28 MB | 1.32 MB | 1.24 MB  | 131 kB  | 840 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.89 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9127   | 9127   | 13607  | 14295  | 13301.46 | 1369.64 | 9124   | 146310  |
| **Bytes/Sec** | 475 kB | 475 kB | 708 kB | 743 kB | 692 kB   | 71.2 kB | 474 kB | 7.61 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.39 ms | 1.49 ms | 59 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17039   | 17039   | 24015   | 24927   | 23363.2 | 2133.11 | 17033   | 233600  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.07 MB | 2.14 MB | 2.01 MB | 183 kB  | 1.46 MB | 20.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.14 ms | 0.72 ms | 38 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5199    | 5199    | 13647   | 14471   | 12835.46 | 2543.87 | 5196    | 141191  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 2.95 MB | 3.13 MB | 2.77 MB  | 550 kB  | 1.12 MB | 30.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.54 ms | 1.78 ms | 53 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13535   | 13535   | 35519   | 36671   | 33508.4 | 6675.68 | 13532   | 335123  |
| **Bytes/Sec** | 2.07 MB | 2.07 MB | 5.44 MB | 5.61 MB | 5.13 MB | 1.02 MB | 2.07 MB | 51.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.86 ms | 1.16 ms | 83 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 14903   | 14903   | 25455   | 26911   | 24750   | 3362.5 | 14902   | 247477  |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 2.85 MB | 3.01 MB | 2.77 MB | 377 kB | 1.67 MB | 27.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.18 ms | 1.11 ms | 58 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12463   | 12463   | 17983   | 19519   | 17789.2 | 1869.57 | 12463   | 177908  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.67 MB | 1.82 MB | 1.65 MB | 174 kB  | 1.16 MB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.56 ms | 1.37 ms | 52 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4483   | 4483   | 7219   | 7543   | 6826.4 | 914.73  | 4481   | 68260   |
| **Bytes/Sec** | 412 kB | 412 kB | 664 kB | 694 kB | 628 kB | 84.1 kB | 412 kB | 6.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.31 ms | 3.01 ms | 80 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1750   | 1750   | 2863   | 3113   | 2776.5 | 372.79  | 1750   | 27762   |
| **Bytes/Sec** | 201 kB | 201 kB | 329 kB | 358 kB | 319 kB | 42.8 kB | 201 kB | 3.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.9 ms | 18.58 ms | 67 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2257   | 2257   | 5391    | 5455    | 4962.7  | 963.43 | 2257   | 49623   |
| **Bytes/Sec** | 641 kB | 641 kB | 1.53 MB | 1.55 MB | 1.41 MB | 274 kB | 641 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.59 ms | 3.19 ms | 88 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 10631  | 10631  | 21039   | 23263   | 20214   | 3480.3 | 10628  | 202120  |
| **Bytes/Sec** | 553 kB | 553 kB | 1.09 MB | 1.21 MB | 1.05 MB | 181 kB | 553 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.2 ms | 48 ms |


---

<p align="center">Generated 2020-11-24T00:18:16.356Z</p>