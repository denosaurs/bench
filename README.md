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
| deno_canary | 39773.82 | 437512 |
| node | 37260 | 372576 |
| fastify | 33466.81 | 334659 |
| deno | 23185.2 | 231850 |
| oak | 14634.55 | 160971 |
| express | 14224.91 | 156458 |
| http | 12949.6 | 129494 |
| alosaur | 12471.64 | 137183 |
| little_native | 10465 | 104648 |
| dinatra | 10344.21 | 103434 |
| drash | 10157.8 | 101583 |
| aqua | 8959 | 89585 |
| reno | 8315.4 | 83136 |
| abc | 7367.2 | 73667 |
| mandarinets | 7282.28 | 80093 |
| opine | 6136.91 | 67500 |
| little_std | 4275.28 | 47025 |
| servest | 3101.8 | 31012 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4415   | 4415   | 7671   | 7995   | 7367.2 | 1015.23 | 4413   | 73667   |
| **Bytes/Sec** | 411 kB | 411 kB | 714 kB | 743 kB | 685 kB | 94.4 kB | 410 kB | 6.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.85 ms | 2.03 ms | 101 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8351   | 8351   | 12911   | 12975   | 12471.64 | 1306.48 | 8346   | 137183  |
| **Bytes/Sec** | 768 kB | 768 kB | 1.19 MB | 1.19 MB | 1.15 MB  | 120 kB  | 768 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.71 ms | 1.23 ms | 45 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5139   | 5139   | 9327   | 9687   | 8959   | 1295.87 | 5136   | 89585   |
| **Bytes/Sec** | 473 kB | 473 kB | 858 kB | 891 kB | 824 kB | 119 kB  | 473 kB | 8.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.9 ms | 2.18 ms | 96 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15767  | 15767  | 23775   | 24975   | 23185.2 | 2515.66 | 15762  | 231850  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 2.12 MB | 2.22 MB | 2.06 MB | 224 kB  | 1.4 MB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.35 ms | 1.31 ms | 68 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 26319   | 26319   | 41151   | 44255   | 39773.82 | 4882.85 | 26313   | 437512  |
| **Bytes/Sec** | 2.34 MB | 2.34 MB | 3.66 MB | 3.94 MB | 3.54 MB  | 434 kB  | 2.34 MB | 38.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.79 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7767   | 7767   | 10631  | 10711  | 10344.21 | 862.66  | 7764   | 103434  |
| **Bytes/Sec** | 404 kB | 404 kB | 553 kB | 557 kB | 538 kB   | 44.8 kB | 404 kB | 5.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.29 ms | 1.16 ms | 27 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6399   | 6399   | 10615  | 10823  | 10157.8 | 1273.14 | 6399   | 101583  |
| **Bytes/Sec** | 550 kB | 550 kB | 913 kB | 931 kB | 874 kB  | 110 kB  | 550 kB | 8.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.35 ms | 1.5 ms | 96 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 5539   | 5539   | 15279  | 15583   | 14224.91 | 2813.52 | 5538   | 156458  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 3.3 MB | 3.36 MB | 3.07 MB  | 608 kB  | 1.2 MB | 33.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.3 ms | 1.38 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15775   | 15775   | 35647   | 36127   | 33466.81 | 5965.25 | 15771   | 334659  |
| **Bytes/Sec** | 2.43 MB | 2.43 MB | 5.49 MB | 5.56 MB | 5.15 MB  | 919 kB  | 2.43 MB | 51.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.71 ms | 0.97 ms | 31 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8751   | 8751   | 13527  | 13831  | 12949.6 | 1463.86 | 8750   | 129494  |
| **Bytes/Sec** | 455 kB | 455 kB | 703 kB | 719 kB | 673 kB  | 76.1 kB | 455 kB | 6.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.46 ms | 1.33 ms | 66 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7079   | 7079   | 10735   | 11199   | 10465   | 1149.26 | 7078   | 104648  |
| **Bytes/Sec** | 913 kB | 913 kB | 1.38 MB | 1.44 MB | 1.35 MB | 148 kB  | 913 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.36 ms | 1.41 ms | 35 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2503   | 2503   | 4531   | 4651   | 4275.28 | 599.11  | 2502   | 47025   |
| **Bytes/Sec** | 230 kB | 230 kB | 417 kB | 428 kB | 393 kB  | 55.1 kB | 230 kB | 4.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 16 ms | 8.86 ms | 2.52 ms | 58 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3937   | 3937   | 7635   | 8023   | 7282.28 | 1088.63 | 3936   | 80093   |
| **Bytes/Sec** | 366 kB | 366 kB | 710 kB | 746 kB | 677 kB  | 101 kB  | 366 kB | 7.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.9 ms | 2.22 ms | 73 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19407   | 19407   | 39135   | 39551   | 37260   | 5956.61 | 19398   | 372576  |
| **Bytes/Sec** | 2.17 MB | 2.17 MB | 4.38 MB | 4.43 MB | 4.17 MB | 667 kB  | 2.17 MB | 41.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.57 ms | 0.82 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ----- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 9311    | 9311    | 15095   | 15407 | 14634.55 | 1692.06 | 9306    | 160971  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 1.96 MB | 2 MB  | 1.9 MB   | 220 kB  | 1.21 MB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.19 ms | 0.99 ms | 29 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4279   | 4279   | 6383   | 6419   | 6136.91 | 605.92  | 4276   | 67500   |
| **Bytes/Sec** | 659 kB | 659 kB | 983 kB | 989 kB | 945 kB  | 93.3 kB | 659 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 6.27 ms | 1.92 ms | 126 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 5479   | 5479   | 8639   | 8791   | 8315.4 | 948.51 | 5477   | 83136   |
| **Bytes/Sec** | 427 kB | 427 kB | 674 kB | 686 kB | 648 kB | 74 kB  | 427 kB | 6.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 7 ms  | 4.35 ms | 1.53 ms | 89 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2581   | 2581   | 2967   | 3595   | 3101.8 | 354.66  | 2580   | 31012   |
| **Bytes/Sec** | 297 kB | 297 kB | 341 kB | 413 kB | 357 kB | 40.8 kB | 297 kB | 3.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 12.42 ms | 18.07 ms | 93 ms |


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

<p align="center">Generated 2021-07-07T00:49:02.347Z</p>
