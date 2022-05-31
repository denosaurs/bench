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
| node | 44685.6 | 446863 |
| deno_canary | 37032.81 | 370319 |
| alosaur | 34985.6 | 349856 |
| reno | 34105.46 | 375189 |
| fastify | 34074.4 | 340766 |
| drash | 31140 | 311413 |
| oak | 24838.91 | 273219 |
| deno | 19746 | 197432 |
| aqua | 18455.64 | 203014 |
| express | 14178.4 | 141782 |
| little_native | 14162.73 | 155768 |
| dinatra | 12339.28 | 135730 |
| mandarinets | 12009.82 | 132096 |
| opine | 10744.55 | 118195 |
| abc | 10305 | 103053 |
| little_std | 8344.91 | 91794 |
| tinyhttp | 4836.9 | 48359 |
| servest | 4812.91 | 52934 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6871   | 6871   | 10703  | 10999   | 10305  | 1174.68 | 6871   | 103053  |
| **Bytes/Sec** | 639 kB | 639 kB | 995 kB | 1.02 MB | 958 kB | 109 kB  | 639 kB | 9.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.39 ms | 1.65 ms | 87 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16847   | 16847   | 38847   | 40095   | 34985.6 | 8485.12 | 16834   | 349856  |
| **Bytes/Sec** | 1.89 MB | 1.89 MB | 4.35 MB | 4.49 MB | 3.92 MB | 950 kB  | 1.89 MB | 39.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.34 ms | 0.74 ms | 24 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11607   | 11607   | 19231   | 19535   | 18455.64 | 2193.42 | 11604   | 203014  |
| **Bytes/Sec** | 1.76 MB | 1.76 MB | 2.92 MB | 2.97 MB | 2.81 MB  | 333 kB  | 1.76 MB | 30.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.53 ms | 1.02 ms | 32 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 13695   | 13695   | 20255   | 21935   | 19746   | 2292.8 | 13693   | 197432  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 2.27 MB | 2.46 MB | 2.21 MB | 257 kB | 1.53 MB | 22.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.53 ms | 0.99 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18319   | 18319   | 40191  | 43199   | 37032.81 | 8172.34 | 18306   | 370319  |
| **Bytes/Sec** | 2.05 MB | 2.05 MB | 4.5 MB | 4.84 MB | 4.15 MB  | 916 kB  | 2.05 MB | 41.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.44 ms | 0.76 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10031  | 10031  | 12591  | 12695  | 12339.28 | 740.94  | 10027  | 135730  |
| **Bytes/Sec** | 521 kB | 521 kB | 655 kB | 660 kB | 642 kB   | 38.6 kB | 521 kB | 7.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.59 ms | 1.33 ms | 22 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 17663   | 17663   | 34719   | 35679   | 31140  | 6301.06 | 17650   | 311413 |
| **Bytes/Sec** | 2.44 MB | 2.44 MB | 4.79 MB | 4.93 MB | 4.3 MB | 870 kB  | 2.44 MB | 43 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.08 ms | 0.65 ms | 36 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7183    | 7183    | 15503   | 16831   | 14178.4 | 3393.38 | 7183    | 141782  |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 3.35 MB | 3.64 MB | 3.06 MB | 733 kB  | 1.55 MB | 30.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.41 ms | 1.43 ms | 25 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18543   | 18543   | 37439   | 39679   | 34074.4 | 7548.51 | 18536   | 340766  |
| **Bytes/Sec** | 2.85 MB | 2.85 MB | 5.76 MB | 6.11 MB | 5.25 MB | 1.16 MB | 2.85 MB | 52.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.44 ms | 0.89 ms | 26 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7095    | 7095    | 15655   | 16103   | 14162.73 | 2776.52 | 7093    | 155768  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 2.38 MB | 2.45 MB | 2.15 MB  | 422 kB  | 1.08 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.3 ms | 1.06 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ----- |
| **Req/Sec**   | 5003   | 5003   | 9215   | 9855   | 8344.91 | 1668.52 | 5003   | 91794 |
| **Bytes/Sec** | 761 kB | 761 kB | 1.4 MB | 1.5 MB | 1.27 MB | 254 kB  | 760 kB | 14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.34 ms | 1.63 ms | 28 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 8215   | 8215   | 12431   | 12519   | 12009.82 | 1207.8 | 8209   | 132096  |
| **Bytes/Sec** | 764 kB | 764 kB | 1.16 MB | 1.16 MB | 1.12 MB  | 112 kB | 763 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3.14 ms | 0.96 ms | 24 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 26463   | 26463   | 46847   | 47295  | 44685.6 | 6134.38 | 26462   | 446863 |
| **Bytes/Sec** | 2.97 MB | 2.97 MB | 5.25 MB | 5.3 MB | 5.01 MB | 687 kB  | 2.96 MB | 50 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.33 ms | 0.71 ms | 31 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14559   | 14559   | 27599   | 28223   | 24838.91 | 4885.47 | 14555   | 273219  |
| **Bytes/Sec** | 2.23 MB | 2.23 MB | 4.22 MB | 4.32 MB | 3.8 MB   | 747 kB  | 2.23 MB | 41.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.71 ms | 28 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 7951   | 7951   | 11031   | 11199  | 10744.55 | 886.83 | 7948   | 118195  |
| **Bytes/Sec** | 1.7 MB | 1.7 MB | 2.36 MB | 2.4 MB | 2.3 MB   | 190 kB | 1.7 MB | 25.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3.18 ms | 1.18 ms | 32 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 26079   | 26079   | 35071   | 35391   | 34105.46 | 2561.58 | 26072   | 375189 |
| **Bytes/Sec** | 3.96 MB | 3.96 MB | 5.33 MB | 5.38 MB | 5.18 MB  | 389 kB  | 3.96 MB | 57 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 1 ms  | 1.02 ms | 0.42 ms | 19 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2725   | 2725   | 4827   | 5799   | 4812.91 | 851.28  | 2725   | 52934   |
| **Bytes/Sec** | 314 kB | 314 kB | 555 kB | 667 kB | 553 kB  | 97.9 kB | 313 kB | 6.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 7.83 ms | 15.47 ms | 78 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3127   | 3127   | 5015   | 5151   | 4836.9 | 574.52  | 3126   | 48359   |
| **Bytes/Sec** | 491 kB | 491 kB | 787 kB | 808 kB | 759 kB | 90.2 kB | 491 kB | 7.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 7 ms  | 18 ms | 7.87 ms | 3.28 ms | 118 ms |


---

<p align="center">Generated 2022-05-31T01:27:04.606Z</p>
