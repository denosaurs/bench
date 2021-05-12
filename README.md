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
| deno_canary | 43024 | 430228 |
| fastify | 37680.73 | 414481 |
| deno | 23412.8 | 234103 |
| http | 19396.41 | 193926 |
| node | 19344.41 | 193437 |
| alosaur | 13604 | 136033 |
| aqua | 12711.2 | 127105 |
| abc | 11250.55 | 123760 |
| mandarinets | 11085.4 | 110841 |
| dinatra | 10919.1 | 120104 |
| oak | 10193.4 | 101933 |
| drash | 10121.4 | 101201 |
| reno | 9763.8 | 97646 |
| little_native | 8142.2 | 81412 |
| express | 7441.91 | 81856 |
| tinyhttp | 6831.6 | 68309 |
| opine | 6514 | 71650 |
| little_std | 3475.8 | 34752 |
| servest | 3334.1 | 33337 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8255   | 8255   | 11687   | 11967   | 11250.55 | 1031.09 | 8249   | 123760  |
| **Bytes/Sec** | 767 kB | 767 kB | 1.09 MB | 1.11 MB | 1.05 MB  | 96 kB   | 767 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.07 ms | 1.19 ms | 28 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8975   | 8975   | 14175  | 15255  | 13604   | 1692.08 | 8970   | 136033  |
| **Bytes/Sec** | 825 kB | 825 kB | 1.3 MB | 1.4 MB | 1.25 MB | 156 kB  | 825 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.38 ms | 1.28 ms | 67 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8911   | 8911   | 13151   | 13319   | 12711.2 | 1275.13 | 8906   | 127105  |
| **Bytes/Sec** | 820 kB | 820 kB | 1.21 MB | 1.23 MB | 1.17 MB | 117 kB  | 819 kB | 11.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 2.64 ms | 1.03 ms | 27 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17855   | 17855   | 23743   | 25327   | 23412.8 | 2038.88 | 17841   | 234103  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.11 MB | 2.25 MB | 2.08 MB | 182 kB  | 1.59 MB | 20.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.29 ms | 0.77 ms | 21 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 33247   | 33247   | 44319   | 44863   | 43024   | 3350.21 | 33223   | 430228  |
| **Bytes/Sec** | 2.96 MB | 2.96 MB | 3.94 MB | 3.99 MB | 3.83 MB | 298 kB  | 2.96 MB | 38.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.29 ms | 0.59 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7175   | 7175   | 11407  | 11639  | 10919.1 | 1219.91 | 7175   | 120104  |
| **Bytes/Sec** | 373 kB | 373 kB | 593 kB | 605 kB | 568 kB  | 63.4 kB | 373 kB | 6.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.3 ms | 1.34 ms | 37 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 6915   | 6915   | 10511  | 10687  | 10121.4 | 1089.14 | 6912   | 101201 |
| **Bytes/Sec** | 595 kB | 595 kB | 904 kB | 919 kB | 870 kB  | 93.6 kB | 594 kB | 8.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.36 ms | 1.3 ms | 81 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3597   | 3597   | 7999    | 8103    | 7441.91 | 1295.16 | 3596   | 81856   |
| **Bytes/Sec** | 777 kB | 777 kB | 1.73 MB | 1.75 MB | 1.61 MB | 280 kB  | 777 kB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 11 ms | 4.83 ms | 2.21 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22495   | 22495   | 39455   | 40159   | 37680.73 | 4931.33 | 22490   | 414481  |
| **Bytes/Sec** | 3.47 MB | 3.47 MB | 6.07 MB | 6.18 MB | 5.8 MB   | 759 kB  | 3.46 MB | 63.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.38 ms | 0.76 ms | 20 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13943  | 13943  | 20079   | 20319   | 19396.41 | 1844.08 | 13936  | 193926  |
| **Bytes/Sec** | 725 kB | 725 kB | 1.04 MB | 1.06 MB | 1.01 MB  | 95.9 kB | 725 kB | 10.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.28 ms | 0.9 ms | 29 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5403   | 5403   | 8423    | 8599    | 8142.2  | 919.64 | 5403   | 81412   |
| **Bytes/Sec** | 697 kB | 697 kB | 1.09 MB | 1.11 MB | 1.05 MB | 119 kB | 697 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.36 ms | 1.32 ms | 27 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2231   | 2231   | 3605   | 3891   | 3475.8 | 455.07  | 2231   | 34752  |
| **Bytes/Sec** | 205 kB | 205 kB | 332 kB | 358 kB | 320 kB | 41.9 kB | 205 kB | 3.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 19 ms | 11.03 ms | 2.81 ms | 46 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 7691   | 7691   | 11463   | 11887   | 11085.4 | 1145.6 | 7688   | 110841  |
| **Bytes/Sec** | 715 kB | 715 kB | 1.07 MB | 1.11 MB | 1.03 MB | 107 kB | 715 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.11 ms | 1.1 ms | 70 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9839   | 9839   | 19951   | 22655   | 19344.41 | 3399.07 | 9838   | 193437  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 2.23 MB | 2.54 MB | 2.17 MB  | 380 kB  | 1.1 MB | 21.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 1.57 ms | 1.41 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6939   | 6939   | 10527   | 10767  | 10193.4 | 1096.85 | 6937   | 101933  |
| **Bytes/Sec** | 902 kB | 902 kB | 1.37 MB | 1.4 MB | 1.33 MB | 143 kB  | 902 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.35 ms | 1.33 ms | 80 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg   | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------ | ------- | ----- | ------ | ------ | ----- |
| **Req/Sec**   | 5239   | 5239   | 6439   | 7099    | 6514  | 512.59 | 5236   | 71650 |
| **Bytes/Sec** | 806 kB | 806 kB | 992 kB | 1.09 MB | 1 MB  | 79 kB  | 806 kB | 11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 5 ms  | 6 ms  | 8 ms  | 5.77 ms | 1.4 ms | 45 ms |


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
| **Req/Sec**   | 6547   | 6547   | 10047  | 10575  | 9763.8 | 1086.51 | 6545   | 97646   |
| **Bytes/Sec** | 511 kB | 511 kB | 784 kB | 825 kB | 762 kB | 84.7 kB | 511 kB | 7.62 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.48 ms | 1.75 ms | 55 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2667   | 2667   | 3295   | 4839   | 3334.1 | 558.27  | 2666   | 33337   |
| **Bytes/Sec** | 307 kB | 307 kB | 379 kB | 557 kB | 383 kB | 64.2 kB | 307 kB | 3.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 11.5 ms | 17.63 ms | 67 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5039   | 5039   | 6991   | 7271   | 6831.6 | 615.05  | 5036   | 68309   |
| **Bytes/Sec** | 670 kB | 670 kB | 930 kB | 967 kB | 908 kB | 81.8 kB | 670 kB | 9.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 9 ms  | 5.35 ms | 1.69 ms | 39 ms |


---

<p align="center">Generated 2021-05-12T00:47:29.505Z</p>
