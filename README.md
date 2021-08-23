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
| deno_canary | 41796.81 | 417968 |
| fastify | 32509.46 | 357648 |
| deno | 29808.8 | 298057 |
| node | 24084.4 | 240832 |
| alosaur | 19179.8 | 191802 |
| express | 13279.8 | 132797 |
| http | 10556.6 | 105564 |
| little_native | 9662.6 | 96629 |
| little_std | 9293.8 | 92927 |
| abc | 9120.71 | 91214 |
| aqua | 8440.6 | 84403 |
| drash | 7014.7 | 70142 |
| dinatra | 6506.4 | 65053 |
| oak | 6019.5 | 60191 |
| reno | 5690 | 56894 |
| mandarinets | 4065 | 40641 |
| opine | 3834.8 | 38340 |
| servest | 1717.9 | 17179 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3365   | 3365   | 10319  | 10479  | 9120.71 | 2234.23 | 3365   | 91214   |
| **Bytes/Sec** | 313 kB | 313 kB | 959 kB | 974 kB | 848 kB  | 208 kB  | 313 kB | 8.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.76 ms | 2.2 ms | 40 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5631   | 5631   | 21103   | 25007   | 19179.8 | 6658.4 | 5628   | 191802  |
| **Bytes/Sec** | 501 kB | 501 kB | 1.88 MB | 2.23 MB | 1.71 MB | 593 kB | 501 kB | 17.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.54 ms | 1.61 ms | 43 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5451   | 5451   | 8783   | 9271   | 8440.6 | 1073.48 | 5449   | 84403   |
| **Bytes/Sec** | 502 kB | 502 kB | 808 kB | 853 kB | 777 kB | 98.8 kB | 501 kB | 7.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.25 ms | 1.89 ms | 60 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18511   | 18511   | 29935   | 41183   | 29808.8 | 9588.89 | 18501   | 298057  |
| **Bytes/Sec** | 1.65 MB | 1.65 MB | 2.66 MB | 3.66 MB | 2.65 MB | 853 kB  | 1.65 MB | 26.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.78 ms | 1.04 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 23231   | 23231   | 47423   | 49727   | 41796.81 | 9942.79 | 23221   | 417968  |
| **Bytes/Sec** | 2.07 MB | 2.07 MB | 4.22 MB | 4.42 MB | 3.72 MB  | 885 kB  | 2.07 MB | 37.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.27 ms | 0.77 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2493   | 2493   | 7787   | 8223   | 6506.4 | 2068.5 | 2492   | 65053   |
| **Bytes/Sec** | 130 kB | 130 kB | 405 kB | 428 kB | 338 kB | 108 kB | 130 kB | 3.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 16 ms | 5.57 ms | 3.59 ms | 47 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2687   | 2687   | 7567   | 8199   | 7014.7 | 1576.27 | 2687   | 70142   |
| **Bytes/Sec** | 231 kB | 231 kB | 651 kB | 705 kB | 603 kB | 136 kB  | 231 kB | 6.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 12 ms | 5.2 ms | 3.42 ms | 200 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5491    | 5491    | 14127   | 14615   | 13279.8 | 2653.93 | 5488    | 132797  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 3.05 MB | 3.16 MB | 2.87 MB | 574 kB  | 1.19 MB | 28.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.4 ms | 1.49 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11423   | 11423   | 34879   | 35487   | 32509.46 | 6750.2  | 11423   | 357648  |
| **Bytes/Sec** | 1.76 MB | 1.76 MB | 5.37 MB | 5.46 MB | 5.01 MB  | 1.04 MB | 1.76 MB | 55.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.94 ms | 1.01 ms | 43 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6595   | 6595   | 11055  | 11463  | 10556.6 | 1404.57 | 6594   | 105564  |
| **Bytes/Sec** | 343 kB | 343 kB | 575 kB | 596 kB | 549 kB  | 73.1 kB | 343 kB | 5.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.4 ms | 1.83 ms | 67 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6119   | 6119   | 10071  | 10439   | 9662.6  | 1222.28 | 6119   | 96629   |
| **Bytes/Sec** | 790 kB | 790 kB | 1.3 MB | 1.35 MB | 1.25 MB | 158 kB  | 789 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.48 ms | 1.47 ms | 34 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 4951   | 4951   | 9551    | 10503   | 9293.8 | 1509.62 | 4949   | 92927 |
| **Bytes/Sec** | 638 kB | 638 kB | 1.23 MB | 1.36 MB | 1.2 MB | 195 kB  | 638 kB | 12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.66 ms | 1.73 ms | 37 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2065   | 2065   | 4323   | 4463   | 4065   | 708.04  | 2065   | 40641   |
| **Bytes/Sec** | 192 kB | 192 kB | 402 kB | 415 kB | 378 kB | 65.8 kB | 192 kB | 3.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 8 ms  | 8 ms  | 19 ms | 9.35 ms | 3.38 ms | 56 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev    | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | -------- | ------- | ------ |
| **Req/Sec**   | 15271   | 15271   | 16143   | 40191  | 24084.4 | 10548.02 | 15266   | 240832 |
| **Bytes/Sec** | 1.71 MB | 1.71 MB | 1.81 MB | 4.5 MB | 2.7 MB  | 1.18 MB  | 1.71 MB | 27 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.93 ms | 1.24 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3241   | 3241   | 6163   | 7415   | 6019.5 | 1013.84 | 3240   | 60191   |
| **Bytes/Sec** | 421 kB | 421 kB | 801 kB | 964 kB | 783 kB | 132 kB  | 421 kB | 7.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 11 ms | 6.21 ms | 2.51 ms | 69 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 2181   | 2181   | 4119   | 4203   | 3834.8 | 623.68 | 2180   | 38340  |
| **Bytes/Sec** | 336 kB | 336 kB | 634 kB | 647 kB | 590 kB | 96 kB  | 336 kB | 5.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 8 ms  | 8 ms  | 21 ms | 9.8 ms | 5.64 ms | 282 ms |


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
| **Req/Sec**   | 2415   | 2415   | 6351   | 7119   | 5690   | 1635.57 | 2415   | 56894   |
| **Bytes/Sec** | 188 kB | 188 kB | 495 kB | 556 kB | 444 kB | 128 kB  | 188 kB | 4.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 15 ms | 6.6 ms | 3.24 ms | 49 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1286   | 1286   | 1773   | 1983   | 1717.9 | 204.54  | 1286   | 17179   |
| **Bytes/Sec** | 148 kB | 148 kB | 204 kB | 228 kB | 198 kB | 23.5 kB | 148 kB | 1.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 12 ms | 57 ms | 22.8 ms | 19.8 ms | 89 ms |


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

<p align="center">Generated 2021-08-23T00:43:01.436Z</p>
