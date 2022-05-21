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
| node | 45765.6 | 457688 |
| fastify | 36981.6 | 369781 |
| drash | 32616.73 | 358739 |
| reno | 32074.91 | 352799 |
| aqua | 23045.2 | 230450 |
| alosaur | 21188.4 | 211884 |
| deno | 20990 | 209904 |
| deno_canary | 20882.8 | 208807 |
| oak | 16961.2 | 169596 |
| little_native | 13680.19 | 150493 |
| abc | 12896.8 | 128961 |
| little_std | 12828 | 141091 |
| dinatra | 12746.55 | 140198 |
| mandarinets | 12148.8 | 121492 |
| opine | 8495.8 | 84939 |
| express | 7920.5 | 79193 |
| tinyhttp | 6176.8 | 61762 |
| servest | 3199.19 | 35187 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 8391   | 8391   | 13407   | 13647   | 12896.8 | 1515.52 | 8387   | 128961 |
| **Bytes/Sec** | 780 kB | 780 kB | 1.25 MB | 1.27 MB | 1.2 MB  | 141 kB  | 780 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.56 ms | 1.49 ms | 77 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14167   | 14167   | 21887   | 22399   | 21188.4 | 2363.26 | 14161   | 211884  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.45 MB | 2.51 MB | 2.37 MB | 265 kB  | 1.59 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.46 ms | 0.98 ms | 37 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   | Total  |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- | ------ |
| **Req/Sec**   | 13167 | 13167 | 25551   | 25903   | 23045.2 | 4221.86 | 13164 | 230450 |
| **Bytes/Sec** | 2 MB  | 2 MB  | 3.88 MB | 3.94 MB | 3.5 MB  | 642 kB  | 2 MB  | 35 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.69 ms | 24 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14567   | 14567   | 21503   | 22639   | 20990   | 2180.17 | 14565   | 209904  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 2.41 MB | 2.54 MB | 2.35 MB | 244 kB  | 1.63 MB | 23.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.39 ms | 0.94 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15847   | 15847   | 21567   | 21823   | 20882.8 | 1723.77 | 15843   | 208807  |
| **Bytes/Sec** | 1.77 MB | 1.77 MB | 2.42 MB | 2.44 MB | 2.34 MB | 193 kB  | 1.77 MB | 23.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.33 ms | 0.88 ms | 34 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9735   | 9735   | 13087  | 13327  | 12746.55 | 969.72  | 9732   | 140198  |
| **Bytes/Sec** | 506 kB | 506 kB | 680 kB | 693 kB | 663 kB   | 50.4 kB | 506 kB | 7.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.35 ms | 1.43 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 23807   | 23807   | 33727   | 33951   | 32616.73 | 2836.3 | 23796   | 358739  |
| **Bytes/Sec** | 3.28 MB | 3.28 MB | 4.65 MB | 4.69 MB | 4.5 MB   | 391 kB | 3.28 MB | 49.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.02 ms | 0.53 ms | 34 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3573   | 3573   | 8551    | 8991    | 7920.5  | 1590.79 | 3573   | 79193   |
| **Bytes/Sec** | 772 kB | 772 kB | 1.85 MB | 1.94 MB | 1.71 MB | 343 kB  | 772 kB | 17.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.61 ms | 2.17 ms | 35 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21615   | 21615   | 38559   | 39167   | 36981.6 | 5133.11 | 21609   | 369781  |
| **Bytes/Sec** | 3.33 MB | 3.33 MB | 5.94 MB | 6.03 MB | 5.69 MB | 791 kB  | 3.33 MB | 56.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.3 ms | 0.76 ms | 20 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7019    | 7019    | 15111  | 17151   | 13680.19 | 3004.89 | 7016    | 150493  |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 2.3 MB | 2.61 MB | 2.08 MB  | 457 kB  | 1.07 MB | 22.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.45 ms | 1.35 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9071    | 9071    | 13031   | 13951   | 12828   | 1237.14 | 9064    | 141091  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 1.98 MB | 2.12 MB | 1.95 MB | 188 kB  | 1.38 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 2.8 ms | 0.93 ms | 28 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8679   | 8679   | 12527   | 12679   | 12148.8 | 1161.35 | 8678   | 121492  |
| **Bytes/Sec** | 807 kB | 807 kB | 1.17 MB | 1.18 MB | 1.13 MB | 108 kB  | 807 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3.13 ms | 0.98 ms | 79 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 27951   | 27951   | 47711   | 48063   | 45765.6 | 5943.45 | 27946   | 457688  |
| **Bytes/Sec** | 3.13 MB | 3.13 MB | 5.35 MB | 5.38 MB | 5.13 MB | 666 kB  | 3.13 MB | 51.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.35 ms | 0.66 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11719   | 11719   | 17279   | 19343   | 16961.2 | 1927.31 | 11718   | 169596  |
| **Bytes/Sec** | 1.79 MB | 1.79 MB | 2.64 MB | 2.96 MB | 2.59 MB | 295 kB  | 1.79 MB | 25.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.86 ms | 1.14 ms | 47 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6083   | 6083   | 8695    | 8863   | 8495.8  | 807.94 | 6082   | 84939   |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 1.86 MB | 1.9 MB | 1.82 MB | 173 kB | 1.3 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 6 ms  | 4.11 ms | 1.42 ms | 61 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22863   | 22863   | 33087   | 33727   | 32074.91 | 2969.46 | 22852   | 352799  |
| **Bytes/Sec** | 3.48 MB | 3.48 MB | 5.03 MB | 5.12 MB | 4.87 MB  | 451 kB  | 3.47 MB | 53.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.03 ms | 0.48 ms | 19 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2573   | 2573   | 3217   | 3763   | 3199.19 | 325.64  | 2573   | 35187   |
| **Bytes/Sec** | 296 kB | 296 kB | 370 kB | 433 kB | 368 kB  | 37.4 kB | 296 kB | 4.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ----- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12 ms | 17.96 ms | 90 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ----- | ------- | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 4143   | 4143   | 6375  | 6535    | 6176.8 | 682.57 | 4141   | 61762  |
| **Bytes/Sec** | 650 kB | 650 kB | 1 MB  | 1.03 MB | 970 kB | 107 kB | 650 kB | 9.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 6 ms  | 14 ms | 6.17 ms | 2.54 ms | 113 ms |


---

<p align="center">Generated 2022-05-21T01:10:10.333Z</p>
