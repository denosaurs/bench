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
| **Average** | 13968.8 | 9247.5 | 20644.41 | 12035.2 | 20140.41 | 13769.4 | 32513.2 | 20121.41 | 14734.4 | 2489.81 | 4042.8 | 10486.2 | 7202.37 |
| **Total** | 139683 | 92475 | 206437 | 120348 | 201387 | 137690 | 325069 | 201171 | 147348 | 24891 | 40414 | 104852 | 79213 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 10591  | 10591  | 14263   | 15015  | 13968.8 | 1178.95 | 10589  | 139683 |
| **Bytes/Sec** | 985 kB | 985 kB | 1.33 MB | 1.4 MB | 1.3 MB  | 110 kB  | 985 kB | 13 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.31 ms | 1.16 ms | 60 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2373   | 2373   | 10519  | 10959   | 9247.5 | 2644   | 2372   | 92475   |
| **Bytes/Sec** | 218 kB | 218 kB | 968 kB | 1.01 MB | 851 kB | 243 kB | 218 kB | 8.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 11 ms | 3.82 ms | 2.94 ms | 56 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 12375  | 12375  | 21263   | 22351   | 20644.41 | 2782.15 | 12369  | 206437  |
| **Bytes/Sec** | 631 kB | 631 kB | 1.08 MB | 1.14 MB | 1.05 MB  | 142 kB  | 631 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.17 ms | 50 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8511   | 8511   | 12407  | 13087  | 12035.2 | 1244.38 | 8505   | 120348  |
| **Bytes/Sec** | 442 kB | 442 kB | 645 kB | 681 kB | 626 kB  | 64.8 kB | 442 kB | 6.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.63 ms | 1.47 ms | 32 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13463   | 13463   | 20879  | 21071   | 20140.41 | 2233.59 | 13463   | 201387  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.8 MB | 1.81 MB | 1.73 MB  | 192 kB  | 1.16 MB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.92 ms | 58 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 5643    | 5643    | 14839   | 15047   | 13769.4 | 2762.1 | 5643    | 137690  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 3.21 MB | 3.25 MB | 2.97 MB | 596 kB | 1.22 MB | 29.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.34 ms | 1.45 ms | 34 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13215   | 13215   | 34399   | 35647   | 32513.2 | 6454.95 | 13210   | 325069  |
| **Bytes/Sec** | 2.02 MB | 2.02 MB | 5.26 MB | 5.45 MB | 4.97 MB | 987 kB  | 2.02 MB | 49.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.61 ms | 0.96 ms | 25 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 4775   | 4775   | 18543   | 30127   | 20121.41 | 6433.56 | 4772   | 201171  |
| **Bytes/Sec** | 535 kB | 535 kB | 2.08 MB | 3.38 MB | 2.25 MB  | 721 kB  | 534 kB | 22.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 6 ms  | 1.46 ms | 1.87 ms | 43 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9279   | 9279   | 15415   | 16023   | 14734.4 | 1874.39 | 9273   | 147348  |
| **Bytes/Sec** | 863 kB | 863 kB | 1.43 MB | 1.49 MB | 1.37 MB | 174 kB  | 862 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.36 ms | 1.41 ms | 72 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1913   | 1913   | 2497   | 2923   | 2489.81 | 271.77  | 1913   | 24891   |
| **Bytes/Sec** | 220 kB | 220 kB | 287 kB | 336 kB | 286 kB  | 31.2 kB | 220 kB | 2.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 52 ms | 15.56 ms | 19.03 ms | 110 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2381   | 2381   | 4243   | 4439    | 4042.8  | 589.61 | 2380   | 40414   |
| **Bytes/Sec** | 676 kB | 676 kB | 1.2 MB | 1.26 MB | 1.15 MB | 167 kB | 676 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 17 ms | 9.4 ms | 3.77 ms | 193 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7611   | 7611   | 10743  | 11335   | 10486.2 | 988.85  | 7609   | 104852  |
| **Bytes/Sec** | 700 kB | 700 kB | 988 kB | 1.04 MB | 965 kB  | 90.9 kB | 700 kB | 9.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.35 ms | 1.24 ms | 64 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5067   | 5067   | 7355   | 7699   | 7202.37 | 699.9   | 5064   | 79213   |
| **Bytes/Sec** | 395 kB | 395 kB | 574 kB | 601 kB | 562 kB  | 54.6 kB | 395 kB | 6.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.1 ms | 2.05 ms | 114 ms |


---

<p align="center">Generated 2021-03-04T00:19:09.274Z</p>