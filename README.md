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
| **Average** | 7312.7 | 20248.37 | 25108.8 | 13175.64 | 15511.6 | 14064.55 | 24420.4 | 38920 | 16496.8 | 7047.3 | 2914.9 | 3742 | 23431.6 |
| **Total** | 73122 | 222715 | 251126 | 144935 | 155109 | 154688 | 244190 | 428056 | 164994 | 70466 | 29144 | 37416 | 234335 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3929   | 3929   | 7551   | 8135   | 7312.7 | 1162.69 | 3928   | 73122  |
| **Bytes/Sec** | 365 kB | 365 kB | 702 kB | 757 kB | 680 kB | 108 kB  | 365 kB | 6.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 12 ms | 4.95 ms | 2.63 ms | 51 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14239   | 14239   | 20479   | 21887   | 20248.37 | 1985.72 | 14239   | 222715  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 1.88 MB | 2.01 MB | 1.86 MB  | 182 kB  | 1.31 MB | 20.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.3 ms | 1.11 ms | 50 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18783  | 18783  | 25775   | 26799   | 25108.8 | 2258.58 | 18780  | 251126  |
| **Bytes/Sec** | 958 kB | 958 kB | 1.31 MB | 1.37 MB | 1.28 MB | 115 kB  | 958 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.79 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8831   | 8831   | 13655  | 13887  | 13175.64 | 1391.99 | 8828   | 144935  |
| **Bytes/Sec** | 459 kB | 459 kB | 710 kB | 722 kB | 685 kB   | 72.4 kB | 459 kB | 7.54 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.39 ms | 1.5 ms | 57 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9559   | 9559   | 15847   | 17231   | 15511.6 | 2055.67 | 9556   | 155109  |
| **Bytes/Sec** | 822 kB | 822 kB | 1.36 MB | 1.48 MB | 1.33 MB | 177 kB  | 822 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 1.38 ms | 77 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5647    | 5647    | 14831  | 15543   | 14064.55 | 2735.05 | 5644    | 154688  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 3.2 MB | 3.36 MB | 3.04 MB  | 591 kB  | 1.22 MB | 33.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.33 ms | 1.69 ms | 70 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11383   | 11383   | 25391   | 27071   | 24420.4 | 4417.91 | 11380   | 244190  |
| **Bytes/Sec** | 1.74 MB | 1.74 MB | 3.89 MB | 4.14 MB | 3.74 MB | 676 kB  | 1.74 MB | 37.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.16 ms | 1 ms  | 47 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23391   | 23391   | 40799   | 41311   | 38920   | 4993.92 | 23379   | 428056  |
| **Bytes/Sec** | 2.62 MB | 2.62 MB | 4.57 MB | 4.63 MB | 4.36 MB | 559 kB  | 2.62 MB | 47.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.28 ms | 0.8 ms | 38 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10279  | 10279  | 17119   | 18143   | 16496.8 | 2209.03 | 10278  | 164994  |
| **Bytes/Sec** | 956 kB | 956 kB | 1.59 MB | 1.69 MB | 1.53 MB | 206 kB  | 956 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.05 ms | 1.71 ms | 65 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3879   | 3879   | 7407   | 7587   | 7047.3 | 1080.51 | 3878   | 70466   |
| **Bytes/Sec** | 357 kB | 357 kB | 681 kB | 698 kB | 648 kB | 99.4 kB | 357 kB | 6.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 4.98 ms | 2.83 ms | 82 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1842   | 1842   | 2917   | 3755   | 2914.9 | 557.62  | 1842   | 29144   |
| **Bytes/Sec** | 212 kB | 212 kB | 335 kB | 432 kB | 335 kB | 64.1 kB | 212 kB | 3.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 51 ms | 13.21 ms | 18.39 ms | 64 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1848   | 1848   | 4041    | 4235   | 3742    | 720.09 | 1848   | 37416   |
| **Bytes/Sec** | 525 kB | 525 kB | 1.15 MB | 1.2 MB | 1.06 MB | 204 kB | 525 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 20 ms | 10.21 ms | 5.14 ms | 239 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15911  | 15911  | 24143   | 24959  | 23431.6 | 2564.33 | 15905  | 234335  |
| **Bytes/Sec** | 827 kB | 827 kB | 1.26 MB | 1.3 MB | 1.22 MB | 133 kB  | 827 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.92 ms | 51 ms |


---

<p align="center">Generated 2020-12-05T00:17:58.705Z</p>