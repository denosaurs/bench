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
| node | 42147.64 | 463647 |
| deno_canary | 37747.64 | 415251 |
| fastify | 23614.8 | 236127 |
| deno | 20182.8 | 201854 |
| http | 18313.82 | 201429 |
| alosaur | 16017.6 | 160162 |
| oak | 15834.8 | 158352 |
| abc | 14674.55 | 161416 |
| drash | 14523.2 | 145220 |
| aqua | 13649.6 | 136495 |
| little_native | 12983.64 | 142813 |
| mandarinets | 11037.4 | 110370 |
| express | 9884.91 | 108739 |
| reno | 9702.6 | 97024 |
| dinatra | 8672.19 | 95382 |
| tinyhttp | 6358 | 63572 |
| opine | 6138.4 | 61377 |
| little_std | 5802.7 | 58015 |
| servest | 5576.9 | 55765 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 11575   | 11575   | 14943   | 15503   | 14674.55 | 1056.13 | 11571   | 161416 |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.39 MB | 1.44 MB | 1.36 MB  | 98.3 kB | 1.08 MB | 15 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.21 ms | 0.95 ms | 45 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11231   | 11231   | 16447   | 17215   | 16017.6 | 1618.36 | 11228   | 160162  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.51 MB | 1.58 MB | 1.47 MB | 149 kB  | 1.03 MB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 0.97 ms | 64 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9503   | 9503   | 14119  | 14255   | 13649.6 | 1388.64 | 9499   | 136495  |
| **Bytes/Sec** | 874 kB | 874 kB | 1.3 MB | 1.31 MB | 1.26 MB | 128 kB  | 874 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.24 ms | 1.06 ms | 59 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------ |
| **Req/Sec**   | 14223   | 14223   | 21055   | 21391  | 20182.8 | 2103.8 | 14221   | 201854 |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 1.87 MB | 1.9 MB | 1.8 MB  | 187 kB | 1.27 MB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.4 ms | 0.96 ms | 26 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 27519   | 27519   | 38911   | 40671   | 37747.64 | 3576.14 | 27516   | 415251 |
| **Bytes/Sec** | 2.45 MB | 2.45 MB | 3.46 MB | 3.62 MB | 3.36 MB  | 318 kB  | 2.45 MB | 37 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.42 ms | 0.75 ms | 41 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6507   | 6507   | 8887   | 9279   | 8672.19 | 710.03  | 6507   | 95382   |
| **Bytes/Sec** | 338 kB | 338 kB | 462 kB | 482 kB | 451 kB  | 36.9 kB | 338 kB | 4.96 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.23 ms | 1.22 ms | 26 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 10591  | 10591  | 14903   | 15183   | 14523.2 | 1315.9 | 10588  | 145220  |
| **Bytes/Sec** | 911 kB | 911 kB | 1.28 MB | 1.31 MB | 1.25 MB | 113 kB | 911 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.17 ms | 0.9 ms | 53 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4415   | 4415   | 10559   | 11127  | 9884.91 | 1861.92 | 4414   | 108739  |
| **Bytes/Sec** | 954 kB | 954 kB | 2.28 MB | 2.4 MB | 2.14 MB | 402 kB  | 953 kB | 23.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.5 ms | 1.74 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13279   | 13279   | 24879   | 25743   | 23614.8 | 3503.17 | 13276   | 236127  |
| **Bytes/Sec** | 2.04 MB | 2.04 MB | 3.83 MB | 3.96 MB | 3.64 MB | 539 kB  | 2.04 MB | 36.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.91 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14303  | 14303  | 18591  | 20767   | 18313.82 | 1757.66 | 14300  | 201429  |
| **Bytes/Sec** | 744 kB | 744 kB | 967 kB | 1.08 MB | 952 kB   | 91.5 kB | 744 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.76 ms | 1.06 ms | 55 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 9103    | 9103    | 14055   | 14823   | 12983.64 | 2012.09 | 9096    | 142813  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.81 MB | 1.91 MB | 1.67 MB  | 260 kB  | 1.17 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.39 ms | 1.28 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3441   | 3441   | 6083   | 6207   | 5802.7 | 801.89  | 3441   | 58015   |
| **Bytes/Sec** | 317 kB | 317 kB | 560 kB | 571 kB | 534 kB | 73.7 kB | 317 kB | 5.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 12 ms | 6.54 ms | 1.86 ms | 45 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7507   | 7507   | 11407   | 11511   | 11037.4 | 1178.22 | 7506   | 110370  |
| **Bytes/Sec** | 698 kB | 698 kB | 1.06 MB | 1.07 MB | 1.03 MB | 110 kB  | 698 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.19 ms | 1.12 ms | 91 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 26863   | 26863   | 43967   | 44383   | 42147.64 | 4877.74 | 26862   | 463647  |
| **Bytes/Sec** | 3.01 MB | 3.01 MB | 4.92 MB | 4.97 MB | 4.72 MB  | 546 kB  | 3.01 MB | 51.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.28 ms | 0.72 ms | 41 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11335   | 11335   | 16295   | 16831   | 15834.8 | 1556.27 | 11330   | 158352  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.12 MB | 2.19 MB | 2.06 MB | 202 kB  | 1.47 MB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.14 ms | 0.72 ms | 21 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4287   | 4287   | 6295   | 6583    | 6138.4 | 627.21  | 4287   | 61377   |
| **Bytes/Sec** | 660 kB | 660 kB | 969 kB | 1.01 MB | 945 kB | 96.5 kB | 660 kB | 9.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ----- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 9 ms  | 6 ms  | 2.39 ms | 158 ms |


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
| **Req/Sec**   | 6623   | 6623   | 10015  | 10207  | 9702.6 | 1035.46 | 6621   | 97024   |
| **Bytes/Sec** | 517 kB | 517 kB | 781 kB | 796 kB | 757 kB | 80.8 kB | 516 kB | 7.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.48 ms | 1.63 ms | 65 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3339   | 3339   | 5575   | 6579   | 5576.9 | 926.23 | 3338   | 55765   |
| **Bytes/Sec** | 384 kB | 384 kB | 641 kB | 757 kB | 641 kB | 107 kB | 384 kB | 6.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 45 ms | 6.73 ms | 14.54 ms | 60 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4543   | 4543   | 6559   | 6711   | 6358   | 616.19 | 4541   | 63572   |
| **Bytes/Sec** | 604 kB | 604 kB | 872 kB | 892 kB | 845 kB | 82 kB  | 604 kB | 8.46 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 10 ms | 5.94 ms | 1.82 ms | 62 ms |


---

<p align="center">Generated 2021-05-15T00:53:29.384Z</p>
