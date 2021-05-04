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
| deno | 44772.37 | 492456 |
| fastify | 39594.91 | 435522 |
| node | 23124.4 | 231242 |
| deno_canary | 19518.41 | 195176 |
| http | 16675.2 | 166729 |
| oak | 16161.2 | 161603 |
| alosaur | 14979.2 | 149784 |
| express | 13944.2 | 139436 |
| little_native | 11943.4 | 119434 |
| dinatra | 11866.6 | 118670 |
| aqua | 10795.4 | 107949 |
| drash | 10780.6 | 107803 |
| abc | 10507.46 | 115562 |
| reno | 8152.8 | 81535 |
| mandarinets | 7246 | 72450 |
| tinyhttp | 6302.4 | 63014 |
| opine | 5298.9 | 52982 |
| little_std | 4733.9 | 47333 |
| servest | 3220.2 | 32197 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6687   | 6687   | 10847   | 11151   | 10507.46 | 1221.91 | 6685   | 115562  |
| **Bytes/Sec** | 622 kB | 622 kB | 1.01 MB | 1.04 MB | 977 kB   | 114 kB  | 622 kB | 10.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.33 ms | 1.38 ms | 85 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9695   | 9695   | 15743   | 16375   | 14979.2 | 1955.68 | 9689   | 149784  |
| **Bytes/Sec** | 891 kB | 891 kB | 1.45 MB | 1.51 MB | 1.38 MB | 180 kB  | 891 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.25 ms | 1.3 ms | 46 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7295   | 7295   | 11271   | 11471   | 10795.4 | 1208.08 | 7294   | 107949  |
| **Bytes/Sec** | 671 kB | 671 kB | 1.04 MB | 1.06 MB | 993 kB  | 111 kB  | 671 kB | 9.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.3 ms | 1.29 ms | 32 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 38047   | 38047   | 45279   | 47423   | 44772.37 | 2266.05 | 38026   | 492456  |
| **Bytes/Sec** | 3.39 MB | 3.39 MB | 4.03 MB | 4.22 MB | 3.98 MB  | 202 kB  | 3.38 MB | 43.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.2 ms | 0.51 ms | 15 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12935   | 12935   | 19199   | 24239   | 19518.41 | 3280.33 | 12930   | 195176  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.71 MB | 2.16 MB | 1.74 MB  | 292 kB  | 1.15 MB | 17.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.63 ms | 1.4 ms | 29 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8127   | 8127   | 12391  | 12519  | 11866.6 | 1275.98 | 8125   | 118670  |
| **Bytes/Sec** | 423 kB | 423 kB | 644 kB | 651 kB | 617 kB  | 66.4 kB | 423 kB | 6.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.18 ms | 1.16 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6643   | 6643   | 11031  | 12431   | 10780.6 | 1457.66 | 6640   | 107803  |
| **Bytes/Sec** | 571 kB | 571 kB | 949 kB | 1.07 MB | 927 kB  | 125 kB  | 571 kB | 9.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.33 ms | 1.56 ms | 73 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5775    | 5775    | 15015   | 15335   | 13944.2 | 2777.21 | 5775    | 139436  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 3.24 MB | 3.31 MB | 3.01 MB | 600 kB  | 1.25 MB | 30.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.33 ms | 1.45 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 25183   | 25183   | 40703   | 42335   | 39594.91 | 4601.58 | 25172   | 435522  |
| **Bytes/Sec** | 3.88 MB | 3.88 MB | 6.27 MB | 6.52 MB | 6.1 MB   | 709 kB  | 3.88 MB | 67.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.19 ms | 0.62 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11439  | 11439  | 17215  | 18111  | 16675.2 | 1930.17 | 11437  | 166729  |
| **Bytes/Sec** | 595 kB | 595 kB | 895 kB | 941 kB | 867 kB  | 100 kB  | 595 kB | 8.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.04 ms | 1.07 ms | 55 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 7767  | 7767  | 12343   | 12575   | 11943.4 | 1396.91 | 7766  | 119434  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 1.59 MB | 1.62 MB | 1.54 MB | 180 kB  | 1 MB  | 15.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.11 ms | 0.94 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2705   | 2705   | 5055   | 5147   | 4733.9 | 715.67  | 2705   | 47333   |
| **Bytes/Sec** | 249 kB | 249 kB | 465 kB | 473 kB | 435 kB | 65.8 kB | 249 kB | 4.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 15 ms | 7.86 ms | 2.31 ms | 47 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4175   | 4175   | 7535   | 7883   | 7246   | 1039    | 4172   | 72450   |
| **Bytes/Sec** | 388 kB | 388 kB | 701 kB | 733 kB | 674 kB | 96.6 kB | 388 kB | 6.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 4.99 ms | 1.8 ms | 88 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13911   | 13911   | 24383   | 24863   | 23124.4 | 3151.52 | 13910   | 231242  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 2.73 MB | 2.79 MB | 2.59 MB | 353 kB  | 1.56 MB | 25.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.83 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 11415   | 11415   | 16847   | 16943  | 16161.2 | 1609.36 | 11415   | 161603 |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.19 MB | 2.2 MB | 2.1 MB  | 209 kB  | 1.48 MB | 21 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.13 ms | 0.94 ms | 45 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3723   | 3723   | 5495   | 5551   | 5298.9 | 530.58  | 3723   | 52982   |
| **Bytes/Sec** | 573 kB | 573 kB | 846 kB | 855 kB | 816 kB | 81.7 kB | 573 kB | 8.16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 11 ms | 7.13 ms | 1.99 ms | 127 ms |


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
| **Req/Sec**   | 5339   | 5339   | 8503   | 8695   | 8152.8 | 962.56  | 5338   | 81535   |
| **Bytes/Sec** | 417 kB | 417 kB | 664 kB | 678 kB | 636 kB | 75.1 kB | 416 kB | 6.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.47 ms | 1.85 ms | 103 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2397   | 2397   | 3103   | 3917   | 3220.2 | 420.23  | 2397   | 32197  |
| **Bytes/Sec** | 276 kB | 276 kB | 357 kB | 451 kB | 370 kB | 48.3 kB | 276 kB | 3.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 11.92 ms | 17.79 ms | 85 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4159   | 4159   | 6571   | 6819   | 6302.4 | 736.88  | 4158   | 63014   |
| **Bytes/Sec** | 553 kB | 553 kB | 874 kB | 907 kB | 838 kB | 97.9 kB | 553 kB | 8.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 10 ms | 5.96 ms | 1.94 ms | 79 ms |


---

<p align="center">Generated 2021-05-04T18:41:49.976Z</p>
