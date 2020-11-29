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
| **Average** | 8348.4 | 24499.2 | 23661.2 | 9960.6 | 17429.2 | 9833 | 34070.55 | 37641.46 | 16937.82 | 5504.7 | 2963.5 | 4551.5 | 23672.4 |
| **Total** | 83479 | 244978 | 236601 | 99612 | 174283 | 98327 | 374815 | 414041 | 186307 | 55040 | 29629 | 45510 | 236715 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4579   | 4579   | 8871   | 9103   | 8348.4 | 1287.2 | 4576   | 83479   |
| **Bytes/Sec** | 426 kB | 426 kB | 825 kB | 846 kB | 776 kB | 120 kB | 426 kB | 7.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.52 ms | 2.4 ms | 83 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18463  | 18463  | 25023  | 27311   | 24499.2 | 2278.74 | 18457  | 244978  |
| **Bytes/Sec** | 1.7 MB | 1.7 MB | 2.3 MB | 2.51 MB | 2.25 MB | 210 kB  | 1.7 MB | 22.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.94 ms | 53 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 16319  | 16319  | 24415   | 25247   | 23661.2 | 2482.1 | 16317  | 236601  |
| **Bytes/Sec** | 833 kB | 833 kB | 1.25 MB | 1.29 MB | 1.21 MB | 127 kB | 832 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.88 ms | 47 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7603   | 7603   | 10167  | 10407  | 9960.6 | 794.07  | 7602   | 99612   |
| **Bytes/Sec** | 396 kB | 396 kB | 529 kB | 541 kB | 518 kB | 41.3 kB | 395 kB | 5.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.48 ms | 1.65 ms | 51 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 11295  | 11295  | 17935   | 19055   | 17429.2 | 2087.53 | 11294  | 174283 |
| **Bytes/Sec** | 972 kB | 972 kB | 1.54 MB | 1.64 MB | 1.5 MB  | 179 kB  | 971 kB | 15 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.78 ms | 1.31 ms | 54 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4671    | 4671    | 10495   | 10815   | 9833    | 1760.31 | 4670    | 98327   |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 2.27 MB | 2.34 MB | 2.12 MB | 380 kB  | 1.01 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.51 ms | 1.94 ms | 75 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18687   | 18687   | 35615   | 36063   | 34070.55 | 4873.38 | 18683   | 374815  |
| **Bytes/Sec** | 2.86 MB | 2.86 MB | 5.45 MB | 5.51 MB | 5.21 MB  | 746 kB  | 2.86 MB | 57.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.99 ms | 0.76 ms | 46 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19791   | 19791   | 39679   | 40223   | 37641.46 | 5685.51 | 19782   | 414041  |
| **Bytes/Sec** | 2.22 MB | 2.22 MB | 4.44 MB | 4.51 MB | 4.22 MB  | 637 kB  | 2.22 MB | 46.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.25 ms | 0.86 ms | 56 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10623  | 10623  | 17407   | 18783   | 16937.82 | 2125.47 | 10620  | 186307  |
| **Bytes/Sec** | 988 kB | 988 kB | 1.62 MB | 1.75 MB | 1.58 MB  | 198 kB  | 988 kB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.88 ms | 1.35 ms | 62 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3457   | 3457   | 5779   | 5959   | 5504.7 | 717.19  | 3456   | 55040   |
| **Bytes/Sec** | 318 kB | 318 kB | 532 kB | 548 kB | 506 kB | 65.9 kB | 318 kB | 5.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.89 ms | 2.74 ms | 78 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1722   | 1722   | 3033   | 4019   | 2963.5 | 624.36  | 1722   | 29629   |
| **Bytes/Sec** | 198 kB | 198 kB | 349 kB | 462 kB | 341 kB | 71.8 kB | 198 kB | 3.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.98 ms | 18.26 ms | 74 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2036   | 2036   | 4999    | 5147    | 4551.5  | 961.74 | 2036   | 45510   |
| **Bytes/Sec** | 579 kB | 579 kB | 1.42 MB | 1.46 MB | 1.29 MB | 273 kB | 578 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 17 ms | 8.3 ms | 5.54 ms | 270 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16383  | 16383  | 24495   | 24991  | 23672.4 | 2481.53 | 16382  | 236715  |
| **Bytes/Sec** | 852 kB | 852 kB | 1.27 MB | 1.3 MB | 1.23 MB | 129 kB  | 852 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 1.04 ms | 47 ms |


---

<p align="center">Generated 2020-11-29T00:18:48.228Z</p>