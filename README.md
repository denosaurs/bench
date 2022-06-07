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
  - [aqua](#aqua)
  - [deno](#deno)
  - [deno_canary](#deno_canary)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [http](#http)
  - [little_native](#little_native)
  - [little_std](#little_std)
  - [mandarinets](#mandarinets)
  - [node](#node)
  - [oak](#oak)
  - [opine](#opine)
  - [pogo](#pogo)
  - [reno](#reno)
  - [servest](#servest)
  - [tinyhttp](#tinyhttp)

## Overview

| **Framework** | **Average** | **Total** |
| --- | --- | --- |
| deno | 44163.2 | 441691 |
| deno_canary | 40037.6 | 400352 |
| drash | 32714.4 | 327166 |
| alosaur | 30669.6 | 306645 |
| aqua | 21988 | 219850 |
| oak | 21837.46 | 240206 |
| reno | 19226.8 | 192286 |
| fastify | 19089.2 | 190891 |
| abc | 16436 | 180795 |
| node | 15723.8 | 157212 |
| little_std | 14288.19 | 157174 |
| little_native | 12129.46 | 133421 |
| dinatra | 11980 | 131780 |
| express | 11089 | 110867 |
| mandarinets | 7309.6 | 73089 |
| opine | 6872.4 | 68716 |
| tinyhttp | 5331.5 | 53304 |
| servest | 2966.6 | 29658 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13071   | 13071   | 16815   | 16959   | 16436   | 1074.43 | 13068   | 180795  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 1.56 MB | 1.58 MB | 1.53 MB | 100 kB  | 1.22 MB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.86 ms | 74 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18143   | 18143   | 30047   | 38751   | 30669.6 | 8622.82 | 18140   | 306645  |
| **Bytes/Sec** | 2.03 MB | 2.03 MB | 3.36 MB | 4.34 MB | 3.43 MB | 965 kB  | 2.03 MB | 34.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.63 ms | 0.87 ms | 24 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13759   | 13759   | 24335  | 25231   | 21988   | 4327.85 | 13759   | 219850  |
| **Bytes/Sec** | 2.09 MB | 2.09 MB | 3.7 MB | 3.83 MB | 3.34 MB | 657 kB  | 2.09 MB | 33.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.3 ms | 0.92 ms | 28 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 33631   | 33631   | 45471  | 45951   | 44163.2 | 3591.09 | 33627   | 441691  |
| **Bytes/Sec** | 3.77 MB | 3.77 MB | 5.1 MB | 5.15 MB | 4.95 MB | 402 kB  | 3.77 MB | 49.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.37 ms | 0.61 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 30319  | 30319  | 41119   | 41503   | 40037.6 | 3248.28 | 30306   | 400352  |
| **Bytes/Sec** | 3.4 MB | 3.4 MB | 4.61 MB | 4.65 MB | 4.48 MB | 364 kB  | 3.39 MB | 44.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.25 ms | 0.59 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 9367   | 9367   | 12303  | 12551  | 11980  | 864.27 | 9363   | 131780  |
| **Bytes/Sec** | 487 kB | 487 kB | 639 kB | 653 kB | 623 kB | 45 kB  | 487 kB | 6.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.95 ms | 1.65 ms | 48 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 20271  | 20271  | 35039   | 38047   | 32714.4 | 5755.5 | 20270  | 327166  |
| **Bytes/Sec** | 2.8 MB | 2.8 MB | 4.83 MB | 5.25 MB | 4.51 MB | 794 kB | 2.8 MB | 45.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.95 ms | 0.63 ms | 32 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5123    | 5123    | 13375   | 13639   | 11089   | 3344.43 | 5121    | 110867  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 2.89 MB | 2.95 MB | 2.39 MB | 722 kB  | 1.11 MB | 23.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 8 ms  | 2.99 ms | 1.95 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9015    | 9015    | 20143  | 20799  | 19089.2 | 3380.62 | 9014    | 190891  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 3.1 MB | 3.2 MB | 2.94 MB | 521 kB  | 1.39 MB | 29.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.51 ms | 1.22 ms | 26 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6247   | 6247   | 13671   | 14311   | 12129.46 | 3011.51 | 6246   | 133421  |
| **Bytes/Sec** | 950 kB | 950 kB | 2.08 MB | 2.17 MB | 1.84 MB  | 458 kB  | 949 kB | 20.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.65 ms | 1.47 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7379    | 7379    | 15839   | 16127   | 14288.19 | 2674.85 | 7377    | 157174  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 2.41 MB | 2.45 MB | 2.17 MB  | 407 kB  | 1.12 MB | 23.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.32 ms | 1.11 ms | 23 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4747   | 4747   | 7851   | 8943   | 7309.6 | 1471.17 | 4746   | 73089  |
| **Bytes/Sec** | 442 kB | 442 kB | 730 kB | 832 kB | 680 kB | 137 kB  | 441 kB | 6.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 5.01 ms | 2.17 ms | 92 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8159   | 8159   | 17599   | 19807   | 15723.8 | 4981.08 | 8157   | 157212  |
| **Bytes/Sec** | 914 kB | 914 kB | 1.97 MB | 2.22 MB | 1.76 MB | 558 kB  | 914 kB | 17.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.99 ms | 1.68 ms | 30 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11719   | 11719   | 24447   | 25439   | 21837.46 | 4489.84 | 11718   | 240206  |
| **Bytes/Sec** | 1.79 MB | 1.79 MB | 3.74 MB | 3.89 MB | 3.34 MB  | 687 kB  | 1.79 MB | 36.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.33 ms | 0.96 ms | 43 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 4959    | 4959    | 7107    | 7491   | 6872.4  | 715.93 | 4957    | 68716   |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.52 MB | 1.6 MB | 1.47 MB | 153 kB | 1.06 MB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 9 ms  | 5.32 ms | 1.69 ms | 54 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14983   | 14983   | 18047   | 22735   | 19226.8 | 2298.41 | 14980   | 192286  |
| **Bytes/Sec** | 2.28 MB | 2.28 MB | 2.74 MB | 3.45 MB | 2.92 MB | 349 kB  | 2.28 MB | 29.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.54 ms | 1.06 ms | 49 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2203   | 2203   | 2985   | 3367   | 2966.6 | 356.58  | 2202   | 29658   |
| **Bytes/Sec** | 253 kB | 253 kB | 343 kB | 387 kB | 341 kB | 41.1 kB | 253 kB | 3.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.98 ms | 18.4 ms | 94 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3861   | 3861   | 5499   | 5879   | 5331.5 | 545.68  | 3860   | 53304   |
| **Bytes/Sec** | 606 kB | 606 kB | 863 kB | 923 kB | 837 kB | 85.7 kB | 606 kB | 8.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 15 ms | 6.92 ms | 2.96 ms | 71 ms |


---

<p align="center">Generated 2022-06-07T01:19:42.876Z</p>
