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
| deno_canary | 43359.28 | 476965 |
| deno | 36634.4 | 366338 |
| fastify | 31061.2 | 310622 |
| node | 24290.55 | 267190 |
| express | 16314 | 179429 |
| aqua | 15590.4 | 155900 |
| oak | 14744.4 | 147442 |
| http | 13434.55 | 147770 |
| alosaur | 11745.4 | 117438 |
| little_native | 11613.46 | 127752 |
| dinatra | 8566.73 | 94237 |
| reno | 7744.6 | 77434 |
| abc | 7688 | 76880 |
| mandarinets | 7673.28 | 84402 |
| drash | 7173.6 | 71727 |
| opine | 6271.46 | 68978 |
| servest | 3067.6 | 30670 |
| little_std | 2951.8 | 29513 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5247   | 5247   | 7883   | 8263   | 7688   | 840.43  | 5245   | 76880   |
| **Bytes/Sec** | 488 kB | 488 kB | 733 kB | 769 kB | 715 kB | 78.2 kB | 488 kB | 7.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.7 ms | 2.26 ms | 130 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7971   | 7971   | 12095   | 12391   | 11745.4 | 1266.58 | 7969   | 117438  |
| **Bytes/Sec** | 733 kB | 733 kB | 1.11 MB | 1.14 MB | 1.08 MB | 117 kB  | 733 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.01 ms | 1.58 ms | 92 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11751   | 11751   | 15999   | 16191   | 15590.4 | 1283.35 | 11751   | 155900  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.47 MB | 1.49 MB | 1.43 MB | 118 kB  | 1.08 MB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.15 ms | 0.82 ms | 57 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 25983   | 25983   | 37951   | 38783   | 36634.4 | 3677.47 | 25980   | 366338  |
| **Bytes/Sec** | 2.31 MB | 2.31 MB | 3.38 MB | 3.45 MB | 3.26 MB | 327 kB  | 2.31 MB | 32.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.65 ms | 0.79 ms | 19 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 31103   | 31103   | 44959 | 45183   | 43359.28 | 3928.81 | 31099   | 476965  |
| **Bytes/Sec** | 2.77 MB | 2.77 MB | 4 MB  | 4.02 MB | 3.86 MB  | 350 kB  | 2.77 MB | 42.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.11 ms | 0.57 ms | 20 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 5971   | 5971   | 8831   | 9111   | 8566.73 | 832.14  | 5968   | 94237  |
| **Bytes/Sec** | 311 kB | 311 kB | 459 kB | 474 kB | 445 kB  | 43.3 kB | 310 kB | 4.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.31 ms | 1.48 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4635   | 4635   | 7591   | 7711   | 7173.6 | 892     | 4633   | 71727   |
| **Bytes/Sec** | 399 kB | 399 kB | 653 kB | 663 kB | 617 kB | 76.7 kB | 398 kB | 6.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 10 ms | 5.04 ms | 2.11 ms | 44 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7587    | 7587    | 17263   | 17567   | 16314   | 2777.4 | 7585    | 179429  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 3.73 MB | 3.79 MB | 3.52 MB | 600 kB | 1.64 MB | 38.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.13 ms | 1.07 ms | 34 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14143   | 14143   | 32863   | 34527   | 31061.2 | 5687.28 | 14136   | 310622  |
| **Bytes/Sec** | 2.18 MB | 2.18 MB | 5.06 MB | 5.32 MB | 4.78 MB | 877 kB  | 2.18 MB | 47.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.83 ms | 1.02 ms | 25 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9191   | 9191   | 13887  | 14127  | 13434.55 | 1348.66 | 9190   | 147770  |
| **Bytes/Sec** | 478 kB | 478 kB | 722 kB | 735 kB | 699 kB   | 70.1 kB | 478 kB | 7.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.18 ms | 27 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8255    | 8255    | 11959   | 12095   | 11613.46 | 1065.51 | 8250    | 127752  |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.54 MB | 1.56 MB | 1.5 MB   | 137 kB  | 1.06 MB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.16 ms | 0.86 ms | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1687   | 1687   | 3095   | 3375   | 2951.8 | 466.49  | 1687   | 29513   |
| **Bytes/Sec** | 155 kB | 155 kB | 285 kB | 311 kB | 272 kB | 42.9 kB | 155 kB | 2.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 12 ms | 24 ms | 13.05 ms | 3.75 ms | 67 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4307   | 4307   | 8043   | 8139   | 7673.28 | 1070.54 | 4305   | 84402   |
| **Bytes/Sec** | 400 kB | 400 kB | 748 kB | 757 kB | 714 kB  | 99.6 kB | 400 kB | 7.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.57 ms | 1.7 ms | 82 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12079   | 12079   | 25407   | 27119   | 24290.55 | 4019.61 | 12075   | 267190  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.85 MB | 3.04 MB | 2.72 MB  | 450 kB  | 1.35 MB | 29.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.2 ms | 1.01 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8199    | 8199    | 15167   | 16463   | 14744.4 | 2240.76 | 8194    | 147442  |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 1.97 MB | 2.14 MB | 1.92 MB | 291 kB  | 1.07 MB | 19.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.3 ms | 1.46 ms | 80 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4375   | 4375   | 6491    | 6531    | 6271.46 | 606.32  | 4372   | 68978   |
| **Bytes/Sec** | 674 kB | 674 kB | 1000 kB | 1.01 MB | 966 kB  | 93.4 kB | 673 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.67 ms | 1.92 ms | 110 ms |


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
| **Req/Sec**   | 4367   | 4367   | 8151   | 8303   | 7744.6 | 1134.91 | 4365   | 77434   |
| **Bytes/Sec** | 340 kB | 340 kB | 636 kB | 647 kB | 604 kB | 88.6 kB | 340 kB | 6.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------ | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.6 ms | 2.6 ms | 151 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2375   | 2375   | 3039   | 3559   | 3067.6 | 343.53  | 2374   | 30670   |
| **Bytes/Sec** | 273 kB | 273 kB | 349 kB | 409 kB | 353 kB | 39.5 kB | 273 kB | 3.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.53 ms | 18.19 ms | 101 ms |


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

<p align="center">Generated 2021-08-09T00:48:55.754Z</p>
