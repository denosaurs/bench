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
| deno | 43011.2 | 430166 |
| deno_canary | 37712.37 | 414827 |
| alosaur | 37462.55 | 412105 |
| fastify | 33015.2 | 330148 |
| oak | 23973.1 | 263699 |
| reno | 23521.6 | 235230 |
| node | 22118.8 | 221177 |
| aqua | 18153.2 | 181501 |
| little_std | 13834.4 | 138334 |
| express | 13243.46 | 145677 |
| abc | 13238.4 | 132388 |
| opine | 10007.8 | 100067 |
| dinatra | 9444.55 | 103887 |
| little_native | 8033 | 80320 |
| tinyhttp | 5349.55 | 58835 |
| servest | 3570.3 | 35700 |
| drash | 1397.3 | 13973 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7131   | 7131   | 14751   | 14983   | 13238.4 | 2965.26 | 7130   | 132388  |
| **Bytes/Sec** | 664 kB | 664 kB | 1.37 MB | 1.39 MB | 1.23 MB | 276 kB  | 663 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.45 ms | 1.37 ms | 60 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20655   | 20655   | 41407   | 42175   | 37462.55 | 6870.28 | 20650   | 412105  |
| **Bytes/Sec** | 1.84 MB | 1.84 MB | 3.69 MB | 3.75 MB | 3.33 MB  | 612 kB  | 1.84 MB | 36.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.24 ms | 0.65 ms | 27 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11295   | 11295   | 19759   | 21039   | 18153.2 | 3621.41 | 11291   | 181501  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 2.55 MB | 2.71 MB | 2.34 MB | 467 kB  | 1.46 MB | 23.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.53 ms | 1.07 ms | 27 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 34591   | 34591   | 44863   | 45183   | 43011.2 | 3809.25 | 34562   | 430166  |
| **Bytes/Sec** | 3.08 MB | 3.08 MB | 3.99 MB | 4.02 MB | 3.83 MB | 340 kB  | 3.08 MB | 38.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.28 ms | 0.59 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16327   | 16327   | 41439   | 43263   | 37712.37 | 7787.33 | 16323   | 414827  |
| **Bytes/Sec** | 1.45 MB | 1.45 MB | 3.69 MB | 3.85 MB | 3.36 MB  | 693 kB  | 1.45 MB | 36.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.44 ms | 0.77 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7531   | 7531   | 9695   | 9767   | 9444.55 | 620.56  | 7528   | 103887 |
| **Bytes/Sec** | 392 kB | 392 kB | 504 kB | 508 kB | 491 kB  | 32.3 kB | 391 kB | 5.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.46 ms | 1.95 ms | 44 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1264   | 1264   | 1412   | 1423   | 1397.3 | 45.78   | 1264   | 13973   |
| **Bytes/Sec** | 527 kB | 527 kB | 589 kB | 593 kB | 583 kB | 19.1 kB | 527 kB | 5.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 19 ms | 30 ms | 34 ms | 28.1 ms | 7.77 ms | 257 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5127    | 5127    | 14279   | 14343  | 13243.46 | 2627.56 | 5125    | 145677  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 3.08 MB | 3.1 MB | 2.86 MB  | 567 kB  | 1.11 MB | 31.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.38 ms | 1.48 ms | 38 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 20783  | 20783  | 36639   | 38783   | 33015.2 | 7409.31 | 20777  | 330148  |
| **Bytes/Sec** | 3.2 MB | 3.2 MB | 5.64 MB | 5.97 MB | 5.08 MB | 1.14 MB | 3.2 MB | 50.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.51 ms | 0.95 ms | 20 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5739   | 5739   | 8567   | 8711    | 8033    | 1073.69 | 5736   | 80320   |
| **Bytes/Sec** | 740 kB | 740 kB | 1.1 MB | 1.12 MB | 1.04 MB | 138 kB  | 740 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.5 ms | 1.69 ms | 36 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10015   | 10015   | 14719  | 14815   | 13834.4 | 1774.72 | 10012   | 138334  |
| **Bytes/Sec** | 1.29 MB | 1.29 MB | 1.9 MB | 1.91 MB | 1.78 MB | 229 kB  | 1.29 MB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.24 ms | 0.97 ms | 21 ms |


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
| **Req/Sec**   | 12103   | 12103   | 25343   | 27743   | 22118.8 | 5918.53 | 12098   | 221177  |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 2.84 MB | 3.11 MB | 2.48 MB | 663 kB  | 1.35 MB | 24.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.06 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12671   | 12671   | 28063   | 29439   | 23973.1 | 5963.91 | 12666   | 263699  |
| **Bytes/Sec** | 1.65 MB | 1.65 MB | 3.65 MB | 3.83 MB | 3.12 MB | 775 kB  | 1.65 MB | 34.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.81 ms | 24 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7299    | 7299    | 10335   | 10407   | 10007.8 | 908.88 | 7299    | 100067  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 1.97 MB | 1.99 MB | 1.91 MB | 173 kB | 1.39 MB | 19.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.65 ms | 1.29 ms | 38 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12167   | 12167   | 27375   | 27855   | 23521.6 | 6315.31 | 12166   | 235230  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.53 MB | 3.59 MB | 3.03 MB | 815 kB  | 1.57 MB | 30.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.3 ms | 0.91 ms | 26 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2907   | 2907   | 3531   | 4347   | 3570.3 | 361.78  | 2906   | 35700   |
| **Bytes/Sec** | 334 kB | 334 kB | 406 kB | 500 kB | 411 kB | 41.6 kB | 334 kB | 4.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 10.73 ms | 17.31 ms | 71 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3717   | 3717   | 5511   | 5647   | 5349.55 | 522.53 | 3716   | 58835   |
| **Bytes/Sec** | 584 kB | 584 kB | 865 kB | 886 kB | 840 kB  | 82 kB  | 583 kB | 9.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 15 ms | 7.11 ms | 2.86 ms | 106 ms |


---

<p align="center">Generated 2022-01-16T00:58:30.167Z</p>
