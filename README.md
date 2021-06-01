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
| deno | 48771.2 | 487761 |
| deno_canary | 44316.8 | 443173 |
| node | 41567.28 | 457219 |
| http | 22403.64 | 246424 |
| fastify | 21132.4 | 211319 |
| express | 16502.6 | 165016 |
| alosaur | 15353.82 | 168886 |
| drash | 15188.8 | 151881 |
| oak | 14881.1 | 163695 |
| dinatra | 13396.8 | 133977 |
| abc | 13125.6 | 131254 |
| aqua | 11390.6 | 113897 |
| reno | 11325.4 | 113257 |
| mandarinets | 8811 | 88109 |
| little_native | 8019 | 80185 |
| tinyhttp | 6441.6 | 64415 |
| opine | 4344.3 | 43434 |
| servest | 3737.46 | 41108 |
| little_std | 3431.91 | 37746 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9271   | 9271   | 13455   | 13943  | 13125.6 | 1307.84 | 9269   | 131254  |
| **Bytes/Sec** | 862 kB | 862 kB | 1.25 MB | 1.3 MB | 1.22 MB | 122 kB  | 862 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.37 ms | 1.06 ms | 54 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10759  | 10759  | 15799   | 16671   | 15353.82 | 1585.27 | 10756  | 168886  |
| **Bytes/Sec** | 990 kB | 990 kB | 1.45 MB | 1.53 MB | 1.41 MB  | 146 kB  | 990 kB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.22 ms | 1.02 ms | 71 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7311   | 7311   | 11727   | 12791   | 11390.6 | 1411.35 | 7311   | 113897  |
| **Bytes/Sec** | 673 kB | 673 kB | 1.08 MB | 1.18 MB | 1.05 MB | 130 kB  | 673 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.96 ms | 1.45 ms | 36 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 39007   | 39007   | 50015   | 50239   | 48771.2 | 3299.3 | 38994   | 487761  |
| **Bytes/Sec** | 3.47 MB | 3.47 MB | 4.45 MB | 4.47 MB | 4.34 MB | 294 kB | 3.47 MB | 43.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.32 ms | 0.55 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 35231   | 35231   | 45727   | 45887   | 44316.8 | 3183.3 | 35218   | 443173  |
| **Bytes/Sec** | 3.14 MB | 3.14 MB | 4.07 MB | 4.08 MB | 3.94 MB | 283 kB | 3.13 MB | 39.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.35 ms | 0.58 ms | 16 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9983   | 9983   | 13847  | 14095  | 13396.8 | 1170.2  | 9982   | 133977  |
| **Bytes/Sec** | 519 kB | 519 kB | 720 kB | 733 kB | 697 kB  | 60.8 kB | 519 kB | 6.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.3 ms | 1.06 ms | 20 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12199   | 12199   | 15119  | 17071   | 15188.8 | 1340.84 | 12193   | 151881  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.3 MB | 1.47 MB | 1.31 MB | 115 kB  | 1.05 MB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.14 ms | 0.73 ms | 25 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7271    | 7271    | 17615  | 17903   | 16502.6 | 3105.25 | 7271    | 165016  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.8 MB | 3.87 MB | 3.56 MB | 671 kB  | 1.57 MB | 35.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 1.13 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11079   | 11079   | 22191   | 24559   | 21132.4 | 3602.57 | 11078   | 211319  |
| **Bytes/Sec** | 1.71 MB | 1.71 MB | 3.42 MB | 3.78 MB | 3.25 MB | 555 kB  | 1.71 MB | 32.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.15 ms | 25 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 16591  | 16591  | 22975  | 23359   | 22403.64 | 1864.59 | 16578  | 246424  |
| **Bytes/Sec** | 862 kB | 862 kB | 1.2 MB | 1.21 MB | 1.17 MB  | 97.1 kB | 862 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.75 ms | 27 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5279   | 5279   | 8335    | 8535   | 8019    | 925.88 | 5278   | 80185   |
| **Bytes/Sec** | 681 kB | 681 kB | 1.08 MB | 1.1 MB | 1.03 MB | 119 kB | 681 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.46 ms | 1.38 ms | 25 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1987   | 1987   | 3649   | 3737   | 3431.91 | 507.64  | 1987   | 37746   |
| **Bytes/Sec** | 183 kB | 183 kB | 336 kB | 344 kB | 316 kB  | 46.7 kB | 183 kB | 3.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 20 ms | 11.18 ms | 3.05 ms | 63 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5235   | 5235   | 9279   | 9439   | 8811   | 1211.94 | 5232   | 88109   |
| **Bytes/Sec** | 487 kB | 487 kB | 863 kB | 878 kB | 820 kB | 113 kB  | 487 kB | 8.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.26 ms | 1.42 ms | 33 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 27359   | 27359   | 43167   | 43551   | 41567.28 | 4557.53 | 27347   | 457219  |
| **Bytes/Sec** | 3.06 MB | 3.06 MB | 4.84 MB | 4.88 MB | 4.66 MB  | 511 kB  | 3.06 MB | 51.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.28 ms | 0.63 ms | 18 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10383   | 10383   | 15351 | 15631   | 14881.1 | 1434.24 | 10378   | 163695  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2 MB  | 2.03 MB | 1.93 MB | 187 kB  | 1.35 MB | 21.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.17 ms | 0.82 ms | 25 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3017   | 3017   | 4479   | 4675   | 4344.3 | 451.1   | 3016   | 43434   |
| **Bytes/Sec** | 465 kB | 465 kB | 690 kB | 720 kB | 669 kB | 69.5 kB | 464 kB | 6.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 15 ms | 8.75 ms | 2.58 ms | 134 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8075   | 8075   | 11687  | 11863  | 11325.4 | 1092.16 | 8075   | 113257  |
| **Bytes/Sec** | 630 kB | 630 kB | 911 kB | 926 kB | 883 kB  | 85.1 kB | 630 kB | 8.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.3 ms | 1.32 ms | 62 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2347   | 2347   | 3305   | 5811   | 3737.46 | 1068.4 | 2347   | 41108   |
| **Bytes/Sec** | 270 kB | 270 kB | 380 kB | 668 kB | 430 kB  | 123 kB | 270 kB | 4.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 10.21 ms | 17.03 ms | 69 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4499   | 4499   | 6631   | 6987   | 6441.6 | 667.47  | 4499   | 64415   |
| **Bytes/Sec** | 599 kB | 599 kB | 882 kB | 929 kB | 857 kB | 88.7 kB | 598 kB | 8.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 10 ms | 5.86 ms | 1.92 ms | 53 ms |


---

<p align="center">Generated 2021-06-01T02:21:30.017Z</p>
