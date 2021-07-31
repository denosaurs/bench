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
| deno_canary | 42733.6 | 427325 |
| deno | 40796 | 407936 |
| node | 38119.2 | 381184 |
| fastify | 35477.1 | 390257 |
| express | 16743.8 | 167409 |
| oak | 16272 | 162734 |
| http | 15384.8 | 153844 |
| aqua | 12235.4 | 122354 |
| abc | 11524 | 115233 |
| little_native | 11503.82 | 126534 |
| alosaur | 9995 | 99949 |
| drash | 9059 | 90573 |
| reno | 8930.6 | 89303 |
| mandarinets | 7962 | 79606 |
| opine | 6303.6 | 63038 |
| dinatra | 6174 | 67909 |
| little_std | 4934.46 | 54274 |
| tinyhttp | 3396.4 | 33957 |
| servest | 3258.1 | 32573 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8303   | 8303   | 11847  | 12095   | 11524   | 1084.72 | 8299   | 115233  |
| **Bytes/Sec** | 772 kB | 772 kB | 1.1 MB | 1.12 MB | 1.07 MB | 101 kB  | 772 kB | 10.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.19 ms | 1.09 ms | 37 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 7123   | 7123   | 10087  | 11527   | 9995   | 1096.54 | 7121   | 99949  |
| **Bytes/Sec** | 655 kB | 655 kB | 928 kB | 1.06 MB | 920 kB | 101 kB  | 655 kB | 9.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.54 ms | 1.59 ms | 92 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8159   | 8159   | 12631   | 12943   | 12235.4 | 1362.41 | 8159   | 122354  |
| **Bytes/Sec** | 751 kB | 751 kB | 1.16 MB | 1.19 MB | 1.13 MB | 125 kB  | 751 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.9 ms | 1.12 ms | 37 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 29519   | 29519   | 41439   | 44671   | 40796   | 3957.32 | 29508   | 407936  |
| **Bytes/Sec** | 2.63 MB | 2.63 MB | 3.69 MB | 3.98 MB | 3.63 MB | 352 kB  | 2.63 MB | 36.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.75 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ----- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 31839   | 31839   | 44383   | 44991 | 42733.6 | 3827.73 | 31839   | 427325 |
| **Bytes/Sec** | 2.83 MB | 2.83 MB | 3.95 MB | 4 MB  | 3.8 MB  | 341 kB  | 2.83 MB | 38 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.14 ms | 0.65 ms | 30 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4407   | 4407   | 6367   | 6547   | 6174   | 578.09  | 4404   | 67909   |
| **Bytes/Sec** | 229 kB | 229 kB | 331 kB | 340 kB | 321 kB | 30.1 kB | 229 kB | 3.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------ | ----- | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.9 ms | 2 ms  | 36 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5715   | 5715   | 9279   | 9895   | 9059   | 1142.67 | 5712   | 90573   |
| **Bytes/Sec** | 491 kB | 491 kB | 798 kB | 850 kB | 779 kB | 98.3 kB | 491 kB | 7.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 7 ms  | 3.9 ms | 1.57 ms | 56 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7703    | 7703    | 17487   | 19791   | 16743.8 | 3688.01 | 7700    | 167409  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 3.77 MB | 4.28 MB | 3.62 MB | 796 kB  | 1.66 MB | 36.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.86 ms | 1.4 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18255   | 18255   | 37343   | 38111   | 35477.1 | 5617.35 | 18244   | 390257  |
| **Bytes/Sec** | 2.81 MB | 2.81 MB | 5.75 MB | 5.87 MB | 5.46 MB | 865 kB  | 2.81 MB | 60.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.4 ms | 0.9 ms | 38 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 11231  | 11231  | 15911  | 16007  | 15384.8 | 1400.72 | 11231  | 153844 |
| **Bytes/Sec** | 584 kB | 584 kB | 827 kB | 833 kB | 800 kB  | 72.8 kB | 584 kB | 8 MB   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.21 ms | 1.02 ms | 53 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7679   | 7679   | 11959   | 12119   | 11503.82 | 1224.89 | 7677   | 126534  |
| **Bytes/Sec** | 991 kB | 991 kB | 1.54 MB | 1.56 MB | 1.48 MB  | 158 kB  | 990 kB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.19 ms | 1.02 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3103   | 3103   | 5115   | 5287   | 4934.46 | 589.83  | 3102   | 54274   |
| **Bytes/Sec** | 285 kB | 285 kB | 471 kB | 486 kB | 454 kB  | 54.3 kB | 285 kB | 4.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 13 ms | 7.64 ms | 2.22 ms | 46 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4879   | 4879   | 8303   | 8639   | 7962   | 1053.38 | 4879   | 79606  |
| **Bytes/Sec** | 454 kB | 454 kB | 772 kB | 803 kB | 740 kB | 97.9 kB | 454 kB | 7.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.45 ms | 1.68 ms | 100 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21823   | 21823   | 39903   | 41567   | 38119.2 | 5664.79 | 21808   | 381184  |
| **Bytes/Sec** | 2.44 MB | 2.44 MB | 4.47 MB | 4.66 MB | 4.27 MB | 635 kB  | 2.44 MB | 42.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.38 ms | 0.85 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 10359   | 10359   | 17103   | 17311   | 16272   | 1998.1 | 10359   | 162734  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.22 MB | 2.25 MB | 2.12 MB | 260 kB | 1.35 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.16 ms | 1.44 ms | 114 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ----- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4395   | 4395   | 6511  | 6611    | 6303.6 | 640.81  | 4394   | 63038   |
| **Bytes/Sec** | 677 kB | 677 kB | 1 MB  | 1.02 MB | 971 kB | 98.7 kB | 677 kB | 9.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.61 ms | 1.82 ms | 107 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5791   | 5791   | 9215   | 9527   | 8930.6 | 1056    | 5791   | 89303   |
| **Bytes/Sec** | 452 kB | 452 kB | 719 kB | 743 kB | 697 kB | 82.3 kB | 452 kB | 6.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.01 ms | 1.99 ms | 120 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2419   | 2419   | 2887   | 4927   | 3258.1 | 713.18 | 2418   | 32573   |
| **Bytes/Sec** | 278 kB | 278 kB | 332 kB | 567 kB | 375 kB | 82 kB  | 278 kB | 3.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 47 ms | 11.82 ms | 17.82 ms | 77 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2599   | 2599   | 3481   | 3561   | 3396.4 | 273.89 | 2598   | 33957   |
| **Bytes/Sec** | 408 kB | 408 kB | 547 kB | 559 kB | 533 kB | 43 kB  | 408 kB | 5.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 20 ms | 11.21 ms | 2.77 ms | 41 ms |


---

<p align="center">Generated 2021-07-31T00:47:23.806Z</p>
