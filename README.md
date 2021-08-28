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
| fastify | 29146.4 | 291410 |
| deno | 20971.2 | 209727 |
| node | 17368.8 | 173669 |
| alosaur | 16596 | 165954 |
| http | 14866.55 | 163518 |
| deno_canary | 14585.6 | 145859 |
| little_native | 11598.73 | 127588 |
| drash | 10515.46 | 115653 |
| abc | 10146.9 | 101474 |
| express | 9406.8 | 94063 |
| aqua | 8888.21 | 88878 |
| reno | 7407.7 | 74079 |
| oak | 7080.64 | 77882 |
| mandarinets | 5660.9 | 56601 |
| opine | 5541.4 | 55402 |
| little_std | 4954.46 | 54497 |
| dinatra | 4656.9 | 46560 |
| servest | 1793.7 | 17937 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3787   | 3787   | 11439   | 11783  | 10146.9 | 2556.88 | 3787   | 101474  |
| **Bytes/Sec** | 352 kB | 352 kB | 1.06 MB | 1.1 MB | 944 kB  | 238 kB  | 352 kB | 9.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.55 ms | 1.9 ms | 48 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8551   | 8551   | 14095   | 29279   | 16596   | 6199.95 | 8549   | 165954  |
| **Bytes/Sec** | 761 kB | 761 kB | 1.25 MB | 2.61 MB | 1.48 MB | 552 kB  | 761 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 1.97 ms | 1.6 ms | 33 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5247   | 5247   | 9199   | 9647   | 8888.21 | 1233.68 | 5246   | 88878   |
| **Bytes/Sec** | 483 kB | 483 kB | 846 kB | 887 kB | 818 kB  | 113 kB  | 483 kB | 8.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 3.98 ms | 2.06 ms | 105 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15023   | 15023   | 15991   | 29519   | 20971.2 | 6640.36 | 15017   | 209727  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 1.42 MB | 2.63 MB | 1.87 MB | 591 kB  | 1.34 MB | 18.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.43 ms | 1.29 ms | 35 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 10055  | 10055  | 10527  | 23455   | 14585.6 | 5115.5 | 10050  | 145859 |
| **Bytes/Sec** | 894 kB | 894 kB | 937 kB | 2.09 MB | 1.3 MB  | 455 kB | 894 kB | 13 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.29 ms | 1.78 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2347   | 2347   | 5247   | 5623   | 4656.9 | 1170.44 | 2346   | 46560   |
| **Bytes/Sec** | 122 kB | 122 kB | 273 kB | 292 kB | 242 kB | 60.9 kB | 122 kB | 2.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 18 ms | 8.08 ms | 3.74 ms | 45 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 4735   | 4735   | 11231  | 11311  | 10515.46 | 1868.94 | 4735   | 115653  |
| **Bytes/Sec** | 407 kB | 407 kB | 966 kB | 972 kB | 904 kB   | 161 kB  | 407 kB | 9.95 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.42 ms | 1.79 ms | 40 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5603    | 5603    | 10623  | 11479   | 9406.8  | 2306.23 | 5602    | 94063   |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 2.3 MB | 2.48 MB | 2.03 MB | 498 kB  | 1.21 MB | 20.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.77 ms | 1.68 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18319   | 18319   | 22063  | 40447   | 29146.4 | 9807.59 | 18304   | 291410  |
| **Bytes/Sec** | 2.82 MB | 2.82 MB | 3.4 MB | 6.23 MB | 4.49 MB | 1.51 MB | 2.82 MB | 44.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.61 ms | 1.15 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 11135  | 11135  | 15319  | 15439  | 14866.55 | 1201.96 | 11129  | 163518 |
| **Bytes/Sec** | 579 kB | 579 kB | 797 kB | 803 kB | 773 kB   | 62.5 kB | 579 kB | 8.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.01 ms | 39 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7899    | 7899    | 12007   | 12247   | 11598.73 | 1178.95 | 7897    | 127588  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.55 MB | 1.58 MB | 1.5 MB   | 152 kB  | 1.02 MB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.16 ms | 1.07 ms | 42 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4019   | 4019   | 4475   | 7547   | 4954.46 | 1160.83 | 4019   | 54497   |
| **Bytes/Sec** | 519 kB | 519 kB | 578 kB | 973 kB | 639 kB  | 150 kB  | 518 kB | 7.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 8 ms  | 12 ms | 7.56 ms | 2.29 ms | 28 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2883   | 2883   | 5947   | 6231   | 5660.9 | 948.06  | 2883   | 56601   |
| **Bytes/Sec** | 268 kB | 268 kB | 553 kB | 580 kB | 526 kB | 88.1 kB | 268 kB | 5.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 16 ms | 6.7 ms | 2.96 ms | 132 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10159   | 10159   | 17567   | 24223   | 17368.8 | 5790.57 | 10155   | 173669  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.97 MB | 2.71 MB | 1.94 MB | 648 kB  | 1.14 MB | 19.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.79 ms | 1.64 ms | 34 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3569   | 3569   | 6803   | 13463   | 7080.64 | 2222.08 | 3568   | 77882   |
| **Bytes/Sec** | 464 kB | 464 kB | 884 kB | 1.75 MB | 920 kB  | 289 kB  | 464 kB | 10.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 5 ms  | 11 ms | 5.11 ms | 2.17 ms | 42 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2449   | 2449   | 6163   | 6203   | 5541.4 | 1252.33 | 2449   | 55402   |
| **Bytes/Sec** | 377 kB | 377 kB | 949 kB | 955 kB | 853 kB | 193 kB  | 377 kB | 8.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 15 ms | 6.91 ms | 3.01 ms | 47 ms |


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
| **Req/Sec**   | 3231   | 3231   | 7907   | 8607   | 7407.7 | 1551.37 | 3230   | 74079   |
| **Bytes/Sec** | 252 kB | 252 kB | 617 kB | 672 kB | 578 kB | 121 kB  | 252 kB | 5.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 12 ms | 4.95 ms | 3.01 ms | 140 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1333   | 1333   | 1778   | 2129   | 1793.7 | 269.21 | 1333   | 17937   |
| **Bytes/Sec** | 153 kB | 153 kB | 205 kB | 245 kB | 206 kB | 31 kB  | 153 kB | 2.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 1 ms  | 11 ms | 59 ms | 21.78 ms | 20.48 ms | 188 ms |


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

<p align="center">Generated 2021-08-28T00:43:44.540Z</p>
