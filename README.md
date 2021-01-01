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
| **Average** | 6968.8 | 19397.2 | 29125.1 | 15516 | 15112.4 | 9106 | 39085.6 | 21006.8 | 13984.8 | 2922.8 | 5470.1 | 26944.73 | 9429 |
| **Total** | 69681 | 193980 | 320391 | 170666 | 151124 | 91056 | 390848 | 210091 | 139843 | 29224 | 54701 | 296371 | 94289 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4467   | 4467   | 7219   | 7475   | 6968.8 | 842.36  | 4465   | 69681   |
| **Bytes/Sec** | 415 kB | 415 kB | 672 kB | 695 kB | 648 kB | 78.3 kB | 415 kB | 6.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.22 ms | 2.07 ms | 43 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10703  | 10703  | 20367   | 20895   | 19397.2 | 2920.96 | 10701  | 193980  |
| **Bytes/Sec** | 985 kB | 985 kB | 1.87 MB | 1.92 MB | 1.78 MB | 269 kB  | 984 kB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.4 ms | 1.16 ms | 53 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22463   | 22463   | 29599   | 31215   | 29125.1 | 2195.55 | 22455   | 320391  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.51 MB | 1.59 MB | 1.49 MB | 112 kB  | 1.15 MB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.08 ms | 0.62 ms | 46 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 11535  | 11535  | 16071  | 16343  | 15516  | 1346.88 | 11530  | 170666  |
| **Bytes/Sec** | 600 kB | 600 kB | 836 kB | 850 kB | 807 kB | 70 kB   | 600 kB | 8.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.21 ms | 1.21 ms | 46 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 8599   | 8599   | 15695   | 16703   | 15112.4 | 2220.32 | 8599   | 151124 |
| **Bytes/Sec** | 740 kB | 740 kB | 1.35 MB | 1.44 MB | 1.3 MB  | 191 kB  | 740 kB | 13 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.35 ms | 68 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4155   | 4155   | 9831    | 10111   | 9106    | 1735.92 | 4152   | 91056   |
| **Bytes/Sec** | 897 kB | 897 kB | 2.12 MB | 2.18 MB | 1.97 MB | 375 kB  | 897 kB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.78 ms | 1.9 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22047   | 22047   | 40959   | 41407   | 39085.6 | 5690.85 | 22045   | 390848  |
| **Bytes/Sec** | 3.37 MB | 3.37 MB | 6.27 MB | 6.33 MB | 5.98 MB | 870 kB  | 3.37 MB | 59.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.27 ms | 0.78 ms | 33 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11055   | 11055   | 21743   | 23039   | 21006.8 | 3402.48 | 11052   | 210091  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 2.44 MB | 2.58 MB | 2.35 MB | 381 kB  | 1.24 MB | 23.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.17 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 8367   | 8367   | 14511   | 15295   | 13984.8 | 1914.31 | 8361   | 139843 |
| **Bytes/Sec** | 778 kB | 778 kB | 1.35 MB | 1.42 MB | 1.3 MB  | 178 kB  | 778 kB | 13 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.55 ms | 91 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1893   | 1893   | 2871   | 3475   | 2922.8 | 424.73  | 1893   | 29224   |
| **Bytes/Sec** | 218 kB | 218 kB | 330 kB | 400 kB | 336 kB | 48.8 kB | 218 kB | 3.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 13.19 ms | 18.38 ms | 94 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2699   | 2699   | 5831    | 5963    | 5470.1  | 961.41 | 2698   | 54701   |
| **Bytes/Sec** | 766 kB | 766 kB | 1.66 MB | 1.69 MB | 1.55 MB | 273 kB | 766 kB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 14 ms | 6.91 ms | 2.73 ms | 64 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19743   | 19743   | 27727   | 28655   | 26944.73 | 2359.46 | 19730   | 296371  |
| **Bytes/Sec** | 1.82 MB | 1.82 MB | 2.55 MB | 2.64 MB | 2.48 MB  | 217 kB  | 1.82 MB | 27.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.1 ms | 0.7 ms | 44 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6191   | 6191   | 9783   | 9927   | 9429   | 1083.61 | 6190   | 94289   |
| **Bytes/Sec** | 483 kB | 483 kB | 763 kB | 774 kB | 736 kB | 84.5 kB | 483 kB | 7.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.54 ms | 1.89 ms | 111 ms |


---

<p align="center">Generated 2021-01-01T00:28:30.988Z</p>