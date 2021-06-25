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
| deno | 47431.28 | 521760 |
| deno_canary | 43536 | 478871 |
| node | 32384 | 323865 |
| fastify | 32334 | 323349 |
| oak | 20241.2 | 202425 |
| express | 14041.64 | 154447 |
| alosaur | 12933.6 | 129317 |
| http | 12485.8 | 124864 |
| drash | 12297.1 | 135255 |
| little_native | 10722.73 | 117938 |
| abc | 10614.6 | 106147 |
| dinatra | 10486.73 | 115344 |
| aqua | 9432.21 | 94307 |
| mandarinets | 9401.8 | 94011 |
| reno | 8002.6 | 80017 |
| opine | 5244.9 | 52439 |
| servest | 3201.8 | 32012 |
| little_std | 3018.46 | 33199 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7295   | 7295   | 11023   | 11087   | 10614.6 | 1112.59 | 7294   | 106147  |
| **Bytes/Sec** | 678 kB | 678 kB | 1.03 MB | 1.03 MB | 987 kB  | 104 kB  | 678 kB | 9.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.25 ms | 1.06 ms | 29 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8911   | 8911   | 13375   | 13799   | 12933.6 | 1409.93 | 8905   | 129317  |
| **Bytes/Sec** | 820 kB | 820 kB | 1.23 MB | 1.27 MB | 1.19 MB | 130 kB  | 819 kB | 11.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.38 ms | 1.19 ms | 39 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5855   | 5855   | 9823   | 10183  | 9432.21 | 1227.54 | 5852   | 94307   |
| **Bytes/Sec** | 539 kB | 539 kB | 904 kB | 936 kB | 868 kB  | 113 kB  | 538 kB | 8.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.72 ms | 1.79 ms | 38 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 36831   | 36831   | 48799   | 49599   | 47431.28 | 3515.4 | 36830   | 521760  |
| **Bytes/Sec** | 3.28 MB | 3.28 MB | 4.34 MB | 4.42 MB | 4.22 MB  | 312 kB | 3.28 MB | 46.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.09 ms | 0.48 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 32799   | 32799   | 44639   | 45503   | 43536   | 3513.31 | 32784   | 478871  |
| **Bytes/Sec** | 2.92 MB | 2.92 MB | 3.97 MB | 4.05 MB | 3.87 MB | 313 kB  | 2.92 MB | 42.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.45 ms | 0.64 ms | 15 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 7659   | 7659   | 10855  | 10943  | 10486.73 | 908.24  | 7657   | 115344 |
| **Bytes/Sec** | 398 kB | 398 kB | 565 kB | 569 kB | 545 kB   | 47.2 kB | 398 kB | 6 MB   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.3 ms | 1.14 ms | 25 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8567   | 8567   | 12775  | 12831  | 12297.1 | 1193.57 | 8560   | 135255  |
| **Bytes/Sec** | 736 kB | 736 kB | 1.1 MB | 1.1 MB | 1.06 MB | 103 kB  | 736 kB | 11.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3 ms  | 1.01 ms | 72 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 5475    | 5475    | 15063   | 15415   | 14041.64 | 2783.7 | 5474    | 154447  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 3.25 MB | 3.33 MB | 3.03 MB  | 601 kB | 1.18 MB | 33.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.3 ms | 1.4 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15999   | 15999   | 34591   | 35967   | 32334   | 5615.31 | 15997   | 323349  |
| **Bytes/Sec** | 2.46 MB | 2.46 MB | 5.33 MB | 5.54 MB | 4.98 MB | 865 kB  | 2.46 MB | 49.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.7 ms | 1.02 ms | 24 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6687   | 6687   | 12783  | 13855  | 12485.8 | 1992.16 | 6687   | 124864  |
| **Bytes/Sec** | 348 kB | 348 kB | 665 kB | 721 kB | 649 kB  | 104 kB  | 348 kB | 6.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.64 ms | 1.47 ms | 46 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6783   | 6783   | 11063   | 11487   | 10722.73 | 1272.92 | 6780   | 117938  |
| **Bytes/Sec** | 875 kB | 875 kB | 1.43 MB | 1.48 MB | 1.38 MB  | 164 kB  | 875 kB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.25 ms | 1.15 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1803   | 1803   | 3205   | 3301   | 3018.46 | 420.09  | 1803   | 33199   |
| **Bytes/Sec** | 166 kB | 166 kB | 295 kB | 304 kB | 278 kB  | 38.7 kB | 166 kB | 3.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------ | ----- |
| **Latency** | 9 ms  | 12 ms | 22 ms | 12.74 ms | 3.3 ms | 56 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6159   | 6159   | 9735   | 9831   | 9401.8 | 1084.18 | 6157   | 94011   |
| **Bytes/Sec** | 573 kB | 573 kB | 905 kB | 914 kB | 874 kB | 101 kB  | 573 kB | 8.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 6 ms  | 3.71 ms | 1.28 ms | 81 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16495   | 16495   | 34815  | 36735   | 32384   | 5633.66 | 16482   | 323865  |
| **Bytes/Sec** | 1.85 MB | 1.85 MB | 3.9 MB | 4.11 MB | 3.63 MB | 631 kB  | 1.85 MB | 36.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.75 ms | 0.97 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%    | 2.5%  | 50%    | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------ | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 15415 | 15415 | 20735  | 21183   | 20241.2 | 1637.28 | 15415 | 202425  |
| **Bytes/Sec** | 2 MB  | 2 MB  | 2.7 MB | 2.75 MB | 2.63 MB | 213 kB  | 2 MB  | 26.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.72 ms | 21 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3431   | 3431   | 5535   | 5603   | 5244.9 | 639.35  | 3430   | 52439   |
| **Bytes/Sec** | 528 kB | 528 kB | 852 kB | 863 kB | 808 kB | 98.5 kB | 528 kB | 8.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 7.05 ms | 2.22 ms | 48 ms |


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
| **Req/Sec**   | 4875   | 4875   | 8171   | 8839   | 8002.6 | 1082.52 | 4874   | 80017   |
| **Bytes/Sec** | 380 kB | 380 kB | 637 kB | 689 kB | 624 kB | 84.4 kB | 380 kB | 6.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.54 ms | 1.7 ms | 33 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2703   | 2703   | 3049   | 3813   | 3201.8 | 375.71  | 2702   | 32012   |
| **Bytes/Sec** | 311 kB | 311 kB | 351 kB | 439 kB | 368 kB | 43.2 kB | 311 kB | 3.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 12.02 ms | 17.91 ms | 74 ms |


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

<p align="center">Generated 2021-06-25T00:50:16.306Z</p>
