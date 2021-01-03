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
| **Average** | 8533 | 22138.55 | 19107.6 | 13015.64 | 16560 | 16367.8 | 33388.4 | 21828.4 | 16121.2 | 2656.2 | 4816.11 | 25837.82 | 6140.1 |
| **Total** | 85328 | 243523 | 191075 | 143160 | 182143 | 163662 | 333868 | 218274 | 161201 | 26557 | 48154 | 284194 | 61396 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5079   | 5079   | 8943   | 9127   | 8533   | 1170.56 | 5076   | 85328   |
| **Bytes/Sec** | 472 kB | 472 kB | 831 kB | 849 kB | 794 kB | 109 kB  | 472 kB | 7.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.38 ms | 2.09 ms | 105 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12183   | 12183   | 23247   | 23583   | 22138.55 | 3166.35 | 12180   | 243523  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 2.14 MB | 2.17 MB | 2.04 MB  | 291 kB  | 1.12 MB | 22.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 1.07 ms | 55 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 10431  | 10431  | 20111   | 20607   | 19107.6 | 2921.9 | 10429  | 191075  |
| **Bytes/Sec** | 532 kB | 532 kB | 1.03 MB | 1.05 MB | 975 kB  | 149 kB | 532 kB | 9.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.59 ms | 1.3 ms | 52 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8935   | 8935   | 13551  | 13703  | 13015.64 | 1327.71 | 8930   | 143160  |
| **Bytes/Sec** | 464 kB | 464 kB | 705 kB | 713 kB | 677 kB   | 69.1 kB | 464 kB | 7.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.36 ms | 1.3 ms | 34 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 9719   | 9719   | 16879   | 18079   | 16560   | 2233   | 9713   | 182143  |
| **Bytes/Sec** | 836 kB | 836 kB | 1.45 MB | 1.55 MB | 1.42 MB | 192 kB | 835 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.01 ms | 1.18 ms | 83 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7243    | 7243    | 17503   | 17711   | 16367.8 | 3076.56 | 7243    | 163662  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 3.78 MB | 3.82 MB | 3.54 MB | 664 kB  | 1.56 MB | 35.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.13 ms | 1.1 ms | 36 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15663  | 15663  | 35199   | 36799   | 33388.4 | 5992.98 | 15662  | 333868  |
| **Bytes/Sec** | 2.4 MB | 2.4 MB | 5.39 MB | 5.63 MB | 5.11 MB | 916 kB  | 2.4 MB | 51.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.78 ms | 0.94 ms | 42 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11639  | 11639  | 22767   | 23647   | 21828.4 | 3420.29 | 11635  | 218274  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 2.55 MB | 2.65 MB | 2.44 MB | 383 kB  | 1.3 MB | 24.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.33 ms | 1.08 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 9799   | 9799   | 16879   | 17807   | 16121.2 | 2201.18 | 9792   | 161201 |
| **Bytes/Sec** | 911 kB | 911 kB | 1.57 MB | 1.66 MB | 1.5 MB  | 205 kB  | 911 kB | 15 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.07 ms | 1.19 ms | 74 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1725   | 1725   | 2697   | 3081   | 2656.2 | 377.65  | 1725   | 26557   |
| **Bytes/Sec** | 198 kB | 198 kB | 310 kB | 355 kB | 305 kB | 43.4 kB | 198 kB | 3.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 50 ms | 14.53 ms | 18.75 ms | 105 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2459   | 2459   | 5139    | 5255    | 4816.11 | 815.32 | 2458   | 48154   |
| **Bytes/Sec** | 698 kB | 698 kB | 1.46 MB | 1.49 MB | 1.37 MB | 231 kB | 698 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 16 ms | 7.9 ms | 3.68 ms | 212 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17311   | 17311   | 26751   | 27023   | 25837.82 | 2710.89 | 17296   | 284194  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.46 MB | 2.49 MB | 2.38 MB  | 250 kB  | 1.59 MB | 26.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.77 ms | 44 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3835   | 3835   | 6363   | 6603   | 6140.1 | 785.7   | 3835   | 61396   |
| **Bytes/Sec** | 299 kB | 299 kB | 496 kB | 515 kB | 479 kB | 61.3 kB | 299 kB | 4.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 11 ms | 5.98 ms | 2.38 ms | 120 ms |


---

<p align="center">Generated 2021-01-03T00:28:37.882Z</p>