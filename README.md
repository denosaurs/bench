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
| **Average** | 6370.5 | 20586.8 | 23891.2 | 12913.6 | 20590 | 16116.91 | 32185.1 | 35637.1 | 18642 | 7350.5 | 2965.4 | 4916.28 | 25432 |
| **Total** | 63700 | 205856 | 238913 | 129125 | 205890 | 177263 | 354015 | 391996 | 186425 | 73496 | 29649 | 54076 | 279761 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3455   | 3455   | 6759   | 6887   | 6370.5 | 986.72 | 3454   | 63700   |
| **Bytes/Sec** | 270 kB | 270 kB | 527 kB | 538 kB | 497 kB | 77 kB  | 269 kB | 4.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.85 ms | 3.23 ms | 112 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11991  | 11991  | 21455   | 22031   | 20586.8 | 2888.86 | 11990  | 205856  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.97 MB | 2.03 MB | 1.89 MB | 266 kB  | 1.1 MB | 18.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.3 ms | 1.22 ms | 58 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17791  | 17791  | 24447   | 26447   | 23891.2 | 2355.59 | 17785  | 238913  |
| **Bytes/Sec** | 907 kB | 907 kB | 1.25 MB | 1.35 MB | 1.22 MB | 120 kB  | 907 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.23 ms | 1 ms  | 47 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8479   | 8479   | 13471  | 13711  | 12913.6 | 1501.48 | 8475   | 129125  |
| **Bytes/Sec** | 441 kB | 441 kB | 700 kB | 713 kB | 671 kB  | 78 kB   | 441 kB | 6.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.4 ms | 1.57 ms | 48 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13703   | 13703   | 21391   | 21903   | 20590   | 2362.55 | 13699   | 205890  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.84 MB | 1.88 MB | 1.77 MB | 203 kB  | 1.18 MB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 1.18 ms | 52 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7051    | 7051    | 16879   | 17823   | 16116.91 | 2933.82 | 7051    | 177263  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 3.65 MB | 3.85 MB | 3.48 MB  | 633 kB  | 1.52 MB | 38.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.07 ms | 1.26 ms | 45 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13967   | 13967   | 34271   | 35007   | 32185.1 | 5836.18 | 13965   | 354015  |
| **Bytes/Sec** | 2.14 MB | 2.14 MB | 5.24 MB | 5.36 MB | 4.92 MB | 893 kB  | 2.14 MB | 54.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.02 ms | 0.96 ms | 43 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20463   | 20463   | 37439   | 37983   | 35637.1 | 4877.41 | 20463   | 391996  |
| **Bytes/Sec** | 2.29 MB | 2.29 MB | 4.19 MB | 4.26 MB | 3.99 MB | 546 kB  | 2.29 MB | 43.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.65 ms | 0.89 ms | 45 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12271   | 12271   | 19295   | 20095   | 18642   | 2172.47 | 12268   | 186425  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.79 MB | 1.87 MB | 1.73 MB | 202 kB  | 1.14 MB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.35 ms | 1.18 ms | 48 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4079   | 4079   | 7763   | 7863   | 7350.5 | 1113.81 | 4078   | 73496   |
| **Bytes/Sec** | 375 kB | 375 kB | 714 kB | 723 kB | 676 kB | 102 kB  | 375 kB | 6.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.77 ms | 3.48 ms | 237 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1897   | 1897   | 2915   | 3781   | 2965.4 | 451.27  | 1897   | 29649   |
| **Bytes/Sec** | 218 kB | 218 kB | 335 kB | 435 kB | 341 kB | 51.9 kB | 218 kB | 3.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.95 ms | 18.38 ms | 127 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2331   | 2331   | 5283   | 5391    | 4916.28 | 877.34 | 2330   | 54076   |
| **Bytes/Sec** | 662 kB | 662 kB | 1.5 MB | 1.53 MB | 1.4 MB  | 249 kB | 662 kB | 15.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.78 ms | 3 ms  | 83 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16719  | 16719  | 25919   | 27807   | 25432   | 2912.64 | 16708  | 279761  |
| **Bytes/Sec** | 869 kB | 869 kB | 1.35 MB | 1.45 MB | 1.32 MB | 152 kB  | 869 kB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.75 ms | 31 ms |


---

<p align="center">Generated 2020-11-08T00:19:58.737Z</p>