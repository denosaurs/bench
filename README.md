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
| fastify | 32476 | 324724 |
| node | 30881.6 | 308814 |
| reno | 23268.73 | 255960 |
| deno | 22542 | 225384 |
| aqua | 19170.55 | 210867 |
| alosaur | 19138.41 | 191393 |
| deno_canary | 17979.6 | 179801 |
| oak | 16839.6 | 168385 |
| little_native | 12671.2 | 126704 |
| express | 11801.2 | 118016 |
| little_std | 11375.4 | 113750 |
| drash | 10083.21 | 100822 |
| abc | 9306 | 102356 |
| dinatra | 6862.8 | 68627 |
| servest | 6350.3 | 63503 |
| opine | 4529.3 | 45282 |
| tinyhttp | 3594 | 35933 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6375   | 6375   | 9599   | 9943   | 9306   | 977.17  | 6372   | 102356  |
| **Bytes/Sec** | 593 kB | 593 kB | 893 kB | 925 kB | 865 kB | 90.9 kB | 593 kB | 9.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.76 ms | 1.85 ms | 94 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------ |
| **Req/Sec**   | 10599  | 10599  | 21727   | 22959   | 19138.41 | 4369   | 10594  | 191393 |
| **Bytes/Sec** | 943 kB | 943 kB | 1.93 MB | 2.04 MB | 1.7 MB   | 389 kB | 943 kB | 17 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.5 ms | 1.37 ms | 46 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 12087   | 12087   | 21039   | 21343   | 19170.55 | 3209.2 | 12081   | 210867  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 2.72 MB | 2.75 MB | 2.47 MB  | 414 kB | 1.56 MB | 27.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.32 ms | 0.97 ms | 32 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11143  | 11143  | 25119   | 27119   | 22542   | 5246.96 | 11142  | 225384  |
| **Bytes/Sec** | 992 kB | 992 kB | 2.24 MB | 2.41 MB | 2.01 MB | 467 kB  | 992 kB | 20.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.43 ms | 1.15 ms | 22 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 9687   | 9687   | 19535   | 22911   | 17979.6 | 4658.44 | 9681   | 179801 |
| **Bytes/Sec** | 862 kB | 862 kB | 1.74 MB | 2.04 MB | 1.6 MB  | 415 kB  | 862 kB | 16 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.77 ms | 1.43 ms | 25 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4795   | 4795   | 7355   | 8011   | 6862.8 | 1020.63 | 4792   | 68627   |
| **Bytes/Sec** | 249 kB | 249 kB | 382 kB | 417 kB | 357 kB | 53.1 kB | 249 kB | 3.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 5.26 ms | 2.98 ms | 56 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7171   | 7171   | 10719  | 11439  | 10083.21 | 1555.14 | 7169   | 100822  |
| **Bytes/Sec** | 617 kB | 617 kB | 922 kB | 984 kB | 867 kB   | 134 kB  | 617 kB | 8.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.56 ms | 1.9 ms | 75 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5219    | 5219    | 13911 | 14383   | 11801.2 | 3444.06 | 5217    | 118016  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 3 MB  | 3.11 MB | 2.55 MB | 744 kB  | 1.13 MB | 25.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.73 ms | 1.8 ms | 45 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg   | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | ----- | ------- | ------- | ------ |
| **Req/Sec**   | 18255   | 18255   | 37663  | 37919   | 32476 | 7855.38 | 18254   | 324724 |
| **Bytes/Sec** | 2.81 MB | 2.81 MB | 5.8 MB | 5.84 MB | 5 MB  | 1.21 MB | 2.81 MB | 50 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 1.07 ms | 22 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8439    | 8439    | 14031   | 14919   | 12671.2 | 2409.93 | 8436    | 126704  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.81 MB | 1.92 MB | 1.63 MB | 311 kB  | 1.09 MB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.43 ms | 1.2 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6103   | 6103   | 12303   | 13151  | 11375.4 | 2233.78 | 6102   | 113750  |
| **Bytes/Sec** | 787 kB | 787 kB | 1.59 MB | 1.7 MB | 1.47 MB | 288 kB  | 787 kB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.05 ms | 1.46 ms | 25 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16671   | 16671   | 33151   | 37503  | 30881.6 | 7836.16 | 16657   | 308814  |
| **Bytes/Sec** | 1.87 MB | 1.87 MB | 3.71 MB | 4.2 MB | 3.46 MB | 878 kB  | 1.87 MB | 34.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.76 ms | 1.12 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9519    | 9519    | 17471   | 20111   | 16839.6 | 3487.83 | 9512    | 168385  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 2.27 MB | 2.62 MB | 2.19 MB | 454 kB  | 1.24 MB | 21.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.66 ms | 1.26 ms | 31 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3039   | 3039   | 4715   | 4875   | 4529.3 | 514.58  | 3038   | 45282   |
| **Bytes/Sec** | 468 kB | 468 kB | 726 kB | 751 kB | 697 kB | 79.2 kB | 468 kB | 6.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 6 ms  | 8 ms  | 14 ms | 8.35 ms | 2.7 ms | 122 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 13479   | 13479   | 25839   | 26367  | 23268.73 | 4241.69 | 13478   | 255960 |
| **Bytes/Sec** | 1.74 MB | 1.74 MB | 3.33 MB | 3.4 MB | 3 MB     | 547 kB  | 1.74 MB | 33 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.84 ms | 37 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 3865   | 3865   | 6587   | 6979   | 6350.3 | 875.59 | 3865   | 63503  |
| **Bytes/Sec** | 445 kB | 445 kB | 758 kB | 803 kB | 730 kB | 101 kB | 444 kB | 7.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 43 ms | 5.77 ms | 13.75 ms | 71 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2837   | 2837   | 3681   | 3775   | 3594   | 262.93  | 2837   | 35933   |
| **Bytes/Sec** | 445 kB | 445 kB | 578 kB | 593 kB | 564 kB | 41.2 kB | 445 kB | 5.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 10 ms | 17 ms | 10.69 ms | 2.72 ms | 79 ms |


---

<p align="center">Generated 2021-10-11T10:14:20.929Z</p>
