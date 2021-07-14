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
| deno | 42292 | 422874 |
| fastify | 37958.55 | 417569 |
| deno_canary | 25292.8 | 252921 |
| node | 22160.4 | 221597 |
| http | 16076.8 | 160751 |
| oak | 14180 | 155965 |
| alosaur | 13964 | 139637 |
| express | 12467.4 | 124662 |
| aqua | 12045 | 120443 |
| abc | 11602.4 | 116020 |
| drash | 11398.2 | 113966 |
| little_native | 10421.64 | 114632 |
| dinatra | 9688.21 | 96875 |
| reno | 9352.6 | 93516 |
| opine | 6263.2 | 62630 |
| mandarinets | 6192.46 | 68111 |
| little_std | 4739.7 | 47389 |
| servest | 4037.5 | 40369 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8535   | 8535   | 12031   | 12119   | 11602.4 | 1045.1  | 8534   | 116020  |
| **Bytes/Sec** | 794 kB | 794 kB | 1.12 MB | 1.13 MB | 1.08 MB | 97.1 kB | 794 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.17 ms | 0.94 ms | 25 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10055  | 10055  | 14535   | 14615   | 13964   | 1324.56 | 10049  | 139637  |
| **Bytes/Sec** | 925 kB | 925 kB | 1.34 MB | 1.35 MB | 1.28 MB | 122 kB  | 925 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.18 ms | 48 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7983   | 7983   | 12303   | 13015  | 12045   | 1385.46 | 7980   | 120443  |
| **Bytes/Sec** | 734 kB | 734 kB | 1.13 MB | 1.2 MB | 1.11 MB | 128 kB  | 734 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.93 ms | 1.25 ms | 84 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 30591   | 30591   | 43679   | 44095   | 42292   | 3927.3 | 30591   | 422874  |
| **Bytes/Sec** | 2.72 MB | 2.72 MB | 3.89 MB | 3.92 MB | 3.76 MB | 349 kB | 2.72 MB | 37.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.14 ms | 0.63 ms | 19 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17055   | 17055   | 26095   | 26767   | 25292.8 | 2758.97 | 17052   | 252921  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 2.32 MB | 2.38 MB | 2.25 MB | 245 kB  | 1.52 MB | 22.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.29 ms | 0.88 ms | 28 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6687   | 6687   | 10023  | 10191  | 9688.21 | 1006.49 | 6685   | 96875   |
| **Bytes/Sec** | 348 kB | 348 kB | 521 kB | 530 kB | 504 kB  | 52.4 kB | 348 kB | 5.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.43 ms | 1.53 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7011   | 7011   | 11863   | 12135   | 11398.2 | 1470.65 | 7011   | 113966 |
| **Bytes/Sec** | 603 kB | 603 kB | 1.02 MB | 1.04 MB | 980 kB  | 126 kB  | 603 kB | 9.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.08 ms | 1.6 ms | 96 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4263   | 4263   | 13519   | 14287   | 12467.4 | 2864.82 | 4262   | 124662  |
| **Bytes/Sec** | 921 kB | 921 kB | 2.92 MB | 3.09 MB | 2.69 MB | 619 kB  | 921 kB | 26.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 8 ms  | 2.61 ms | 1.96 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21519   | 21519   | 39615  | 40287   | 37958.55 | 5240.56 | 21517   | 417569  |
| **Bytes/Sec** | 3.31 MB | 3.31 MB | 6.1 MB | 6.21 MB | 5.85 MB  | 807 kB  | 3.31 MB | 64.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.77 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11487  | 11487  | 16591  | 16703  | 16076.8 | 1533.15 | 11483  | 160751  |
| **Bytes/Sec** | 598 kB | 598 kB | 862 kB | 869 kB | 836 kB  | 79.7 kB | 597 kB | 8.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.16 ms | 0.9 ms | 50 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6519   | 6519   | 10791   | 11047   | 10421.64 | 1237.78 | 6516   | 114632  |
| **Bytes/Sec** | 841 kB | 841 kB | 1.39 MB | 1.43 MB | 1.34 MB  | 160 kB  | 841 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.26 ms | 1.24 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2943   | 2943   | 4951   | 5175   | 4739.7 | 620.49  | 2943   | 47389   |
| **Bytes/Sec** | 271 kB | 271 kB | 455 kB | 476 kB | 436 kB | 57.1 kB | 271 kB | 4.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.88 ms | 2.29 ms | 48 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3885   | 3885   | 6455   | 6875   | 6192.46 | 769.7   | 3884   | 68111   |
| **Bytes/Sec** | 361 kB | 361 kB | 601 kB | 639 kB | 576 kB  | 71.6 kB | 361 kB | 6.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 5.96 ms | 2.02 ms | 119 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9855   | 9855   | 23247  | 24607   | 22160.4 | 4143.14 | 9852   | 221597  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 2.6 MB | 2.76 MB | 2.48 MB | 464 kB  | 1.1 MB | 24.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.31 ms | 34 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9519    | 9519    | 14535   | 15471   | 14180   | 1514.63 | 9516    | 155965  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 1.89 MB | 2.01 MB | 1.84 MB | 197 kB  | 1.24 MB | 20.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.24 ms | 83 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ----- | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4299   | 4299   | 6495  | 6551    | 6263.2 | 661.71 | 4298   | 62630   |
| **Bytes/Sec** | 662 kB | 662 kB | 1 MB  | 1.01 MB | 965 kB | 102 kB | 662 kB | 9.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.67 ms | 1.85 ms | 92 ms |


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
| **Req/Sec**   | 6827   | 6827   | 9671   | 9711   | 9352.6 | 849.83  | 6824   | 93516   |
| **Bytes/Sec** | 532 kB | 532 kB | 755 kB | 757 kB | 729 kB | 66.3 kB | 532 kB | 7.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.54 ms | 1.58 ms | 82 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2945   | 2945   | 3589   | 5071   | 4037.5 | 879.93 | 2944   | 40369   |
| **Bytes/Sec** | 339 kB | 339 kB | 413 kB | 583 kB | 464 kB | 101 kB | 339 kB | 4.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 9.42 ms | 16.56 ms | 77 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


---

<p align="center">Generated 2021-07-14T00:43:18.377Z</p>
