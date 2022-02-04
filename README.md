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
  - [deco](#deco)
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
| deno_canary | 37634.4 | 376358 |
| deco | 34812 | 348127 |
| node | 34278.4 | 342790 |
| fastify | 33183.28 | 365001 |
| alosaur | 29428.8 | 294266 |
| reno | 28505.82 | 313563 |
| deno | 28353.2 | 283536 |
| oak | 25883.28 | 284730 |
| aqua | 21250.8 | 212489 |
| express | 15425.8 | 154265 |
| abc | 14091.28 | 154982 |
| dinatra | 9725.64 | 106965 |
| opine | 9418.73 | 103607 |
| little_std | 8775.4 | 87749 |
| little_native | 7902.37 | 86930 |
| tinyhttp | 4394.7 | 43936 |
| servest | 3691.7 | 36912 |
| drash | 955.6 | 9556 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10631  | 10631  | 14455   | 14639   | 14091.28 | 1107.52 | 10625  | 154982  |
| **Bytes/Sec** | 988 kB | 988 kB | 1.34 MB | 1.36 MB | 1.31 MB  | 103 kB  | 988 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.21 ms | 1.02 ms | 56 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16671   | 16671   | 33151   | 34655   | 29428.8 | 6015.43 | 16669   | 294266  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.95 MB | 3.08 MB | 2.62 MB | 535 kB  | 1.48 MB | 26.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.75 ms | 39 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12823   | 12823   | 23455   | 24255   | 21250.8 | 3709.57 | 12817   | 212489  |
| **Bytes/Sec** | 1.65 MB | 1.65 MB | 3.03 MB | 3.13 MB | 2.74 MB | 479 kB  | 1.65 MB | 27.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.29 ms | 0.84 ms | 23 ms |


### [deco](https://deno.land/x/deco)

> Deco is a utility library for Deno developers


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16783   | 16783   | 38911   | 39327   | 34812   | 7260.57 | 16768   | 348127  |
| **Bytes/Sec** | 2.16 MB | 2.16 MB | 5.02 MB | 5.07 MB | 4.49 MB | 937 kB  | 2.16 MB | 44.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.71 ms | 0.76 ms | 28 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14663  | 14663  | 30671   | 35231   | 28353.2 | 6625.56 | 14657  | 283536  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 2.73 MB | 3.14 MB | 2.52 MB | 590 kB  | 1.3 MB | 25.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.77 ms | 1.03 ms | 22 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18271   | 18271   | 42847   | 43327   | 37634.4 | 8846.19 | 18260   | 376358  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 3.81 MB | 3.86 MB | 3.35 MB | 788 kB  | 1.63 MB | 33.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.71 ms | 16 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7815   | 7815   | 9895   | 10167  | 9725.64 | 624.21  | 7812   | 106965  |
| **Bytes/Sec** | 406 kB | 406 kB | 514 kB | 529 kB | 506 kB  | 32.5 kB | 406 kB | 5.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.38 ms | 1.68 ms | 40 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 856    | 856    | 950    | 1012   | 955.6  | 39.72   | 856    | 9556    |
| **Bytes/Sec** | 357 kB | 357 kB | 396 kB | 422 kB | 398 kB | 16.5 kB | 357 kB | 3.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 26 ms | 43 ms | 52 ms | 41.34 ms | 11.69 ms | 360 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7311    | 7311    | 16495   | 16735   | 15425.8 | 2742.48 | 7311    | 154265  |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 3.56 MB | 3.61 MB | 3.33 MB | 592 kB  | 1.58 MB | 33.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.17 ms | 1.12 ms | 25 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21135   | 21135   | 37439   | 37823   | 33183.28 | 7139.49 | 21127   | 365001  |
| **Bytes/Sec** | 3.25 MB | 3.25 MB | 5.77 MB | 5.82 MB | 5.11 MB  | 1.1 MB  | 3.25 MB | 56.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.72 ms | 0.86 ms | 30 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4731   | 4731   | 8847    | 9055    | 7902.37 | 1588.94 | 4731   | 86930   |
| **Bytes/Sec** | 610 kB | 610 kB | 1.14 MB | 1.17 MB | 1.02 MB | 205 kB  | 610 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.6 ms | 1.64 ms | 28 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4475   | 4475   | 10015   | 11039   | 8775.4  | 2386.03 | 4473   | 87749   |
| **Bytes/Sec** | 577 kB | 577 kB | 1.29 MB | 1.42 MB | 1.13 MB | 308 kB  | 577 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 10 ms | 4.11 ms | 2.31 ms | 35 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19375   | 19375   | 36191   | 36959   | 34278.4 | 5154.52 | 19373   | 342790  |
| **Bytes/Sec** | 2.17 MB | 2.17 MB | 4.05 MB | 4.14 MB | 3.84 MB | 577 kB  | 2.17 MB | 38.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.6 ms | 0.84 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 14815   | 14815   | 28223   | 30911   | 25883.28 | 5123.08 | 14810   | 284730 |
| **Bytes/Sec** | 1.93 MB | 1.93 MB | 3.67 MB | 4.02 MB | 3.36 MB  | 666 kB  | 1.93 MB | 37 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.08 ms | 0.75 ms | 36 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7263    | 7263    | 9695    | 9767    | 9418.73 | 698.75 | 7261    | 103607  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 1.85 MB | 1.87 MB | 1.8 MB  | 133 kB | 1.39 MB | 19.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 5 ms  | 3.8 ms | 1.19 ms | 55 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 14383   | 14383   | 31743   | 32015   | 28505.82 | 5322.9 | 14376   | 313563  |
| **Bytes/Sec** | 1.86 MB | 1.86 MB | 4.09 MB | 4.13 MB | 3.68 MB  | 687 kB | 1.85 MB | 40.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.7 ms | 21 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3021   | 3021   | 3505   | 4847   | 3691.7 | 496.16 | 3021   | 36912   |
| **Bytes/Sec** | 348 kB | 348 kB | 403 kB | 558 kB | 424 kB | 57 kB  | 347 kB | 4.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 10.33 ms | 17.1 ms | 64 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 3105   | 3105   | 4587   | 4739   | 4394.7 | 458.45 | 3104   | 43936  |
| **Bytes/Sec** | 487 kB | 487 kB | 720 kB | 744 kB | 690 kB | 72 kB  | 487 kB | 6.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 8 ms  | 19 ms | 8.56 ms | 3.48 ms | 122 ms |


---

<p align="center">Generated 2022-02-04T00:34:28.048Z</p>
