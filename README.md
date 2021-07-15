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
| deno_canary | 42040.8 | 420395 |
| node | 40060.37 | 440671 |
| fastify | 38256.73 | 420804 |
| deno | 22505.2 | 225032 |
| express | 16039.8 | 160369 |
| oak | 15622.8 | 156227 |
| aqua | 13264.8 | 132646 |
| drash | 12032.8 | 120326 |
| http | 11736.55 | 129097 |
| dinatra | 10203.4 | 102026 |
| alosaur | 10132.6 | 101335 |
| little_native | 9759.82 | 107353 |
| mandarinets | 9088.6 | 90882 |
| reno | 9004.6 | 90048 |
| abc | 7844 | 86283 |
| opine | 6773.2 | 67730 |
| little_std | 4355.4 | 43553 |
| servest | 3044.9 | 30443 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4603   | 4603   | 8187   | 8863   | 7844   | 1100.15 | 4600   | 86283   |
| **Bytes/Sec** | 428 kB | 428 kB | 761 kB | 824 kB | 729 kB | 102 kB  | 428 kB | 8.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.64 ms | 2 ms  | 64 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6579   | 6579   | 10487  | 10735  | 10132.6 | 1191.36 | 6576   | 101335  |
| **Bytes/Sec** | 605 kB | 605 kB | 965 kB | 988 kB | 932 kB  | 110 kB  | 605 kB | 9.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.72 ms | 95 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9479   | 9479   | 13671   | 13743   | 13264.8 | 1263.74 | 9478   | 132646  |
| **Bytes/Sec** | 872 kB | 872 kB | 1.26 MB | 1.26 MB | 1.22 MB | 116 kB  | 872 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.08 ms | 65 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 14567  | 14567  | 23615  | 24575   | 22505.2 | 2814.78 | 14564  | 225032 |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 2.1 MB | 2.19 MB | 2 MB    | 250 kB  | 1.3 MB | 20 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.39 ms | 1.07 ms | 32 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 32207   | 32207   | 43327   | 43871  | 42040.8 | 3385.08 | 32202   | 420395  |
| **Bytes/Sec** | 2.87 MB | 2.87 MB | 3.86 MB | 3.9 MB | 3.74 MB | 301 kB  | 2.87 MB | 37.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.25 ms | 0.68 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7599   | 7599   | 10479  | 10631  | 10203.4 | 874.7   | 7599   | 102026  |
| **Bytes/Sec** | 395 kB | 395 kB | 545 kB | 553 kB | 531 kB  | 45.5 kB | 395 kB | 5.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.33 ms | 1.41 ms | 36 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8391   | 8391   | 12447   | 12551   | 12032.8 | 1216.28 | 8390   | 120326  |
| **Bytes/Sec** | 722 kB | 722 kB | 1.07 MB | 1.08 MB | 1.03 MB | 105 kB  | 722 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.12 ms | 1.16 ms | 87 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6803    | 6803    | 17199   | 17439   | 16039.8 | 3118.13 | 6803    | 160369  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 3.72 MB | 3.76 MB | 3.46 MB | 673 kB  | 1.47 MB | 34.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.15 ms | 1.17 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 22719  | 22719  | 40255  | 40383   | 38256.73 | 5014.99 | 22709  | 420804  |
| **Bytes/Sec** | 3.5 MB | 3.5 MB | 6.2 MB | 6.22 MB | 5.89 MB  | 772 kB  | 3.5 MB | 64.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.33 ms | 0.78 ms | 25 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7279   | 7279   | 12303  | 12551  | 11736.55 | 1455.59 | 7279   | 129097  |
| **Bytes/Sec** | 379 kB | 379 kB | 640 kB | 653 kB | 610 kB   | 75.7 kB | 379 kB | 6.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.13 ms | 1.45 ms | 98 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6319   | 6319   | 10167   | 10519   | 9759.82 | 1122.11 | 6317   | 107353  |
| **Bytes/Sec** | 815 kB | 815 kB | 1.31 MB | 1.36 MB | 1.26 MB | 145 kB  | 815 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.37 ms | 1.29 ms | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2555   | 2555   | 4575   | 4803   | 4355.4 | 629.86  | 2555   | 43553   |
| **Bytes/Sec** | 235 kB | 235 kB | 421 kB | 442 kB | 401 kB | 57.9 kB | 235 kB | 4.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 7 ms  | 8 ms  | 17 ms | 8.71 ms | 2.6 ms | 51 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5739   | 5739   | 9511   | 9567   | 9088.6 | 1122.56 | 5737   | 90882   |
| **Bytes/Sec** | 534 kB | 534 kB | 885 kB | 889 kB | 845 kB | 104 kB  | 534 kB | 8.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.19 ms | 1.78 ms | 130 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 23423   | 23423   | 41983  | 42367   | 40060.37 | 5295.65 | 23415   | 440671  |
| **Bytes/Sec** | 2.62 MB | 2.62 MB | 4.7 MB | 4.75 MB | 4.49 MB  | 593 kB  | 2.62 MB | 49.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.45 ms | 0.76 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11407   | 11407   | 15247   | 17583   | 15622.8 | 1735.93 | 11403   | 156227  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 1.98 MB | 2.29 MB | 2.03 MB | 226 kB  | 1.48 MB | 20.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.27 ms | 1.17 ms | 50 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4103   | 4103   | 7047    | 7183    | 6773.2  | 895.75 | 4103   | 67730   |
| **Bytes/Sec** | 632 kB | 632 kB | 1.09 MB | 1.11 MB | 1.04 MB | 138 kB | 632 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.47 ms | 2.16 ms | 136 ms |


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
| **Req/Sec**   | 6347   | 6347   | 9343   | 9391   | 9004.6 | 892.93  | 6345   | 90048   |
| **Bytes/Sec** | 495 kB | 495 kB | 729 kB | 733 kB | 702 kB | 69.7 kB | 495 kB | 7.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.12 ms | 1.68 ms | 71 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2229   | 2229   | 2747   | 4279   | 3044.9 | 603.56  | 2229   | 30443  |
| **Bytes/Sec** | 256 kB | 256 kB | 316 kB | 492 kB | 350 kB | 69.4 kB | 256 kB | 3.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 12.64 ms | 18.11 ms | 61 ms |


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

<p align="center">Generated 2021-07-15T00:46:45.050Z</p>
