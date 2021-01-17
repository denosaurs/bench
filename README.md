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
| **Average** | 9710.21 | 21013.46 | 26248 | 8764.21 | 18673.82 | 9368.91 | 19886.19 | 23305.2 | 16649.6 | 2883.4 | 4508.4 | 26366.4 | 8093.8 |
| **Total** | 97098 | 231152 | 262473 | 87625 | 205398 | 103058 | 218763 | 233044 | 166488 | 28831 | 45077 | 263661 | 80937 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6131   | 6131   | 9999   | 10511  | 9710.21 | 1211.86 | 6128   | 97098   |
| **Bytes/Sec** | 570 kB | 570 kB | 930 kB | 977 kB | 903 kB  | 113 kB  | 570 kB | 9.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.58 ms | 1.83 ms | 90 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12719   | 12719   | 21903   | 22127   | 21013.46 | 2635.55 | 12713   | 231152  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 2.02 MB | 2.04 MB | 1.93 MB  | 243 kB  | 1.17 MB | 21.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.25 ms | 1.04 ms | 47 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18863  | 18863  | 26927   | 27887   | 26248   | 2500.97 | 18848  | 262473  |
| **Bytes/Sec** | 962 kB | 962 kB | 1.37 MB | 1.42 MB | 1.34 MB | 128 kB  | 961 kB | 13.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.74 ms | 49 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6359   | 6359   | 9031   | 9239   | 8764.21 | 823.88  | 6356   | 87625   |
| **Bytes/Sec** | 331 kB | 331 kB | 470 kB | 480 kB | 456 kB  | 42.8 kB | 331 kB | 4.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 4.21 ms | 1.5 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12055   | 12055   | 19279   | 19839   | 18673.82 | 2124.65 | 12048   | 205398  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.66 MB | 1.71 MB | 1.61 MB  | 183 kB  | 1.04 MB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.43 ms | 1.11 ms | 61 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4467   | 4467   | 9903    | 10367   | 9368.91 | 1621.98 | 4467   | 103058  |
| **Bytes/Sec** | 965 kB | 965 kB | 2.14 MB | 2.24 MB | 2.02 MB | 350 kB  | 965 kB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.66 ms | 1.75 ms | 35 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 9999    | 9999    | 20703   | 21839   | 19886.19 | 3182.03 | 9999    | 218763  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 3.17 MB | 3.34 MB | 3.04 MB  | 487 kB  | 1.53 MB | 33.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.42 ms | 1.17 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13047   | 13047   | 24351   | 25119   | 23305.2 | 3473.18 | 13044   | 233044  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 2.73 MB | 2.81 MB | 2.61 MB | 389 kB  | 1.46 MB | 26.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.98 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11927   | 11927   | 16815   | 17951   | 16649.6 | 1671.22 | 11924   | 166488  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.56 MB | 1.67 MB | 1.55 MB | 156 kB  | 1.11 MB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.98 ms | 1.17 ms | 56 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2181   | 2181   | 2993   | 3267   | 2883.4 | 329.42  | 2181   | 28831   |
| **Bytes/Sec** | 251 kB | 251 kB | 344 kB | 376 kB | 332 kB | 37.9 kB | 251 kB | 3.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.37 ms | 18.4 ms | 75 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2255   | 2255   | 4867    | 4943   | 4508.4  | 818.34 | 2255   | 45077   |
| **Bytes/Sec** | 641 kB | 641 kB | 1.38 MB | 1.4 MB | 1.28 MB | 232 kB | 640 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 7 ms  | 7 ms  | 16 ms | 8.24 ms | 4.4 ms | 247 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 19423   | 19423   | 27135  | 27359   | 26366.4 | 2322.9 | 19412   | 263661  |
| **Bytes/Sec** | 1.79 MB | 1.79 MB | 2.5 MB | 2.52 MB | 2.43 MB | 214 kB | 1.79 MB | 24.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.67 ms | 45 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4855   | 4855   | 8399   | 8727   | 8093.8 | 1090.53 | 4853   | 80937   |
| **Bytes/Sec** | 379 kB | 379 kB | 655 kB | 680 kB | 631 kB | 85.1 kB | 379 kB | 6.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.56 ms | 2.1 ms | 121 ms |


---

<p align="center">Generated 2021-01-17T00:45:22.917Z</p>