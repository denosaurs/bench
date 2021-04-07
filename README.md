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
| **Average** | 9286.21 | 18574 | 21696.37 | 12735.64 | 18494 | 16608.2 | 34626.19 | 27225.1 | 20959.6 | 3095.8 | 3686 | 24543.28 | 10913 |
| **Total** | 92856 | 185741 | 238669 | 140089 | 184927 | 166090 | 380870 | 299451 | 209590 | 30956 | 36853 | 269992 | 109129 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6819   | 6819   | 9559   | 9887   | 9286.21 | 848.58  | 6817   | 92856   |
| **Bytes/Sec** | 634 kB | 634 kB | 889 kB | 920 kB | 864 kB  | 78.9 kB | 634 kB | 8.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.62 ms | 1.55 ms | 81 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10439  | 10439  | 19407   | 20175   | 18574   | 2759.89 | 10437  | 185741  |
| **Bytes/Sec** | 961 kB | 961 kB | 1.78 MB | 1.86 MB | 1.71 MB | 254 kB  | 960 kB | 17.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.51 ms | 1.3 ms | 75 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15191  | 15191  | 22223   | 23359   | 21696.37 | 2134.22 | 15191  | 238669  |
| **Bytes/Sec** | 775 kB | 775 kB | 1.13 MB | 1.19 MB | 1.11 MB  | 109 kB  | 775 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.28 ms | 0.93 ms | 39 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8759   | 8759   | 13127  | 13583  | 12735.64 | 1331.79 | 8759   | 140089  |
| **Bytes/Sec** | 456 kB | 456 kB | 683 kB | 707 kB | 662 kB   | 69.2 kB | 455 kB | 7.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.42 ms | 1.28 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10663  | 10663  | 18863   | 20271   | 18494   | 2690.15 | 10662  | 184927  |
| **Bytes/Sec** | 917 kB | 917 kB | 1.62 MB | 1.74 MB | 1.59 MB | 231 kB  | 917 kB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.41 ms | 1.23 ms | 69 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7531    | 7531    | 17727   | 18031   | 16608.2 | 3061.41 | 7529    | 166090  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 3.83 MB | 3.89 MB | 3.59 MB | 661 kB  | 1.63 MB | 35.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 1.11 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19855   | 19855   | 36159   | 38687   | 34626.19 | 5163.65 | 19851   | 380870  |
| **Bytes/Sec** | 3.04 MB | 3.04 MB | 5.53 MB | 5.92 MB | 5.3 MB   | 790 kB  | 3.04 MB | 58.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.94 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16311   | 16311   | 28063   | 29167   | 27225.1 | 3496.71 | 16305   | 299451  |
| **Bytes/Sec** | 1.83 MB | 1.83 MB | 3.14 MB | 3.27 MB | 3.05 MB | 392 kB  | 1.83 MB | 33.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.79 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14471   | 14471   | 21631   | 22255   | 20959.6 | 2214.25 | 14465   | 209590  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.01 MB | 2.07 MB | 1.95 MB | 206 kB  | 1.35 MB | 19.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 1.06 ms | 60 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2287   | 2287   | 3081   | 3797   | 3095.8 | 479.01  | 2286   | 30956   |
| **Bytes/Sec** | 263 kB | 263 kB | 354 kB | 437 kB | 356 kB | 55.1 kB | 263 kB | 3.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.4 ms | 18 ms | 71 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1038   | 1038   | 4011    | 4323    | 3686    | 968.02 | 1038   | 36853   |
| **Bytes/Sec** | 295 kB | 295 kB | 1.14 MB | 1.23 MB | 1.05 MB | 275 kB | 295 kB | 10.5 MB |


| **Stat**    | 2.5%   | 50%    | 95.5%  | Avg       | Stdev    | Max     |
| ----------- | ------ | ------ | ------ | --------- | -------- | ------- |
| **Latency** | 559 ms | 597 ms | 966 ms | 628.73 ms | 97.94 ms | 1179 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18255   | 18255   | 25375   | 25535   | 24543.28 | 2065.21 | 18252   | 269992  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 2.33 MB | 2.35 MB | 2.26 MB  | 190 kB  | 1.68 MB | 24.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.67 ms | 27 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 8071   | 8071   | 11455  | 11751  | 10913  | 1097.83 | 8069   | 109129  |
| **Bytes/Sec** | 630 kB | 630 kB | 893 kB | 916 kB | 851 kB | 85.6 kB | 629 kB | 8.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.37 ms | 1.69 ms | 85 ms |


---

<p align="center">Generated 2021-04-07T00:40:55.599Z</p>