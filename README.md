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
| **Average** | 9023.4 | 20402 | 24205.46 | 8856.19 | 19396.41 | 9180 | 31980.4 | 23941.2 | 15275.2 | 5143.73 | 2824.64 | 3521.2 | 21649.2 |
| **Total** | 90222 | 204012 | 266251 | 97411 | 193953 | 91795 | 319788 | 239412 | 152740 | 56580 | 31065 | 35209 | 216472 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5631   | 5631   | 9247   | 9799   | 9023.4 | 1174.67 | 5630   | 90222   |
| **Bytes/Sec** | 439 kB | 439 kB | 721 kB | 764 kB | 704 kB | 91.5 kB | 439 kB | 7.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.85 ms | 2.2 ms | 68 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13503   | 13503   | 20959   | 22095   | 20402   | 2372.47 | 13502   | 204012  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 1.93 MB | 2.03 MB | 1.88 MB | 218 kB  | 1.24 MB | 18.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.27 ms | 1.41 ms | 90 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 16039  | 16039  | 25183   | 25631   | 24205.46 | 2652.8 | 16033  | 266251  |
| **Bytes/Sec** | 818 kB | 818 kB | 1.28 MB | 1.31 MB | 1.23 MB  | 135 kB | 818 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.93 ms | 50 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6259   | 6259   | 9119   | 9527   | 8856.19 | 849.19  | 6258   | 97411   |
| **Bytes/Sec** | 326 kB | 326 kB | 474 kB | 495 kB | 461 kB  | 44.1 kB | 325 kB | 5.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.05 ms | 1.83 ms | 53 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11943   | 11943   | 20399   | 20799   | 19396.41 | 2553.81 | 11937   | 193953  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.75 MB | 1.79 MB | 1.67 MB  | 220 kB  | 1.03 MB | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.3 ms | 1.45 ms | 60 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4159   | 4159   | 9831    | 10423   | 9180    | 1794.53 | 4156   | 91795   |
| **Bytes/Sec** | 898 kB | 898 kB | 2.12 MB | 2.25 MB | 1.98 MB | 388 kB  | 898 kB | 19.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.84 ms | 2.19 ms | 77 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12343   | 12343   | 34559   | 35935  | 31980.4 | 6783.36 | 12337   | 319788  |
| **Bytes/Sec** | 1.89 MB | 1.89 MB | 5.29 MB | 5.5 MB | 4.89 MB | 1.04 MB | 1.89 MB | 48.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.9 ms | 1.13 ms | 63 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 12623   | 12623   | 25247   | 26127   | 23941.2 | 3829.2 | 12622   | 239412  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 2.83 MB | 2.93 MB | 2.68 MB | 429 kB | 1.41 MB | 26.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.2 ms | 1.05 ms | 48 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8223   | 8223   | 16111  | 17167  | 15275.2 | 2453.77 | 8220   | 152740  |
| **Bytes/Sec** | 765 kB | 765 kB | 1.5 MB | 1.6 MB | 1.42 MB | 228 kB  | 764 kB | 14.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.22 ms | 1.74 ms | 114 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3097   | 3097   | 5451   | 5563   | 5143.73 | 691.77  | 3096   | 56580   |
| **Bytes/Sec** | 285 kB | 285 kB | 502 kB | 512 kB | 473 kB  | 63.7 kB | 285 kB | 5.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 15 ms | 7.24 ms | 3.14 ms | 154 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1989   | 1989   | 2835   | 3169   | 2824.64 | 294.86  | 1989   | 31065   |
| **Bytes/Sec** | 229 kB | 229 kB | 326 kB | 365 kB | 325 kB  | 33.9 kB | 229 kB | 3.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.67 ms | 18.71 ms | 116 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ----- |
| **Req/Sec**   | 1699   | 1699   | 3779    | 3947    | 3521.2  | 686.59 | 1699   | 35209 |
| **Bytes/Sec** | 483 kB | 483 kB | 1.07 MB | 1.12 MB | 1000 kB | 195 kB | 483 kB | 10 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------ | ------ |
| **Latency** | 8 ms  | 10 ms | 22 ms | 10.86 ms | 4.8 ms | 113 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15175  | 15175  | 22223   | 23231   | 21649.2 | 2217.89 | 15169  | 216472  |
| **Bytes/Sec** | 789 kB | 789 kB | 1.16 MB | 1.21 MB | 1.13 MB | 115 kB  | 789 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.27 ms | 1.08 ms | 55 ms |


---

<p align="center">Generated 2020-11-03T00:19:26.000Z</p>