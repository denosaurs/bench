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
| deno | 38614.55 | 424779 |
| node | 38088.81 | 380885 |
| fastify | 37709.82 | 414833 |
| deno_canary | 34973.6 | 349695 |
| oak | 15586.55 | 171457 |
| http | 14004 | 140043 |
| drash | 12123.2 | 121208 |
| alosaur | 11817.28 | 129987 |
| aqua | 11181.4 | 111805 |
| dinatra | 10565.28 | 116213 |
| express | 10154 | 111696 |
| abc | 9859.8 | 98598 |
| little_native | 9367.1 | 103034 |
| reno | 7821.6 | 78212 |
| mandarinets | 7672.4 | 76715 |
| opine | 6149.6 | 61494 |
| little_std | 5113.5 | 51135 |
| servest | 3719.3 | 37188 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7083   | 7083   | 9975   | 10839   | 9859.8 | 1104.99 | 7082   | 98598   |
| **Bytes/Sec** | 659 kB | 659 kB | 928 kB | 1.01 MB | 917 kB | 103 kB  | 659 kB | 9.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.57 ms | 1.41 ms | 76 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 7703   | 7703   | 12455   | 12519   | 11817.28 | 1333.02 | 7702   | 129987 |
| **Bytes/Sec** | 709 kB | 709 kB | 1.15 MB | 1.15 MB | 1.09 MB  | 123 kB  | 709 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.9 ms | 1.57 ms | 90 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6979   | 6979   | 11511   | 11879   | 11181.4 | 1411   | 6976   | 111805  |
| **Bytes/Sec** | 642 kB | 642 kB | 1.06 MB | 1.09 MB | 1.03 MB | 130 kB | 642 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.26 ms | 1.52 ms | 93 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 27807   | 27807   | 39295  | 41631  | 38614.55 | 3671.16 | 27798   | 424779  |
| **Bytes/Sec** | 2.48 MB | 2.48 MB | 3.5 MB | 3.7 MB | 3.44 MB  | 327 kB  | 2.47 MB | 37.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.44 ms | 0.8 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23327   | 23327   | 36351   | 37119  | 34973.6 | 3925.46 | 23320   | 349695  |
| **Bytes/Sec** | 2.08 MB | 2.08 MB | 3.23 MB | 3.3 MB | 3.11 MB | 349 kB  | 2.08 MB | 31.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.65 ms | 0.87 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7643   | 7643   | 10863  | 10983  | 10565.28 | 931.74  | 7641   | 116213  |
| **Bytes/Sec** | 398 kB | 398 kB | 565 kB | 571 kB | 549 kB   | 48.4 kB | 397 kB | 6.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.27 ms | 1.07 ms | 26 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8319   | 8319   | 12575   | 12727   | 12123.2 | 1277.33 | 8318   | 121208  |
| **Bytes/Sec** | 716 kB | 716 kB | 1.08 MB | 1.09 MB | 1.04 MB | 110 kB  | 715 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.09 ms | 1.16 ms | 77 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4807    | 4807    | 10743   | 11319   | 10154   | 1791.18 | 4807    | 111696  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 2.32 MB | 2.45 MB | 2.19 MB | 387 kB  | 1.04 MB | 24.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.45 ms | 1.63 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 22111   | 22111   | 39647   | 40127   | 37709.82 | 4995.98 | 22104  | 414833  |
| **Bytes/Sec** | 3.41 MB | 3.41 MB | 6.11 MB | 6.18 MB | 5.81 MB  | 769 kB  | 3.4 MB | 63.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.28 ms | 0.79 ms | 37 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 10151  | 10151  | 14471  | 14863  | 14004  | 1320.9  | 10147  | 140043  |
| **Bytes/Sec** | 528 kB | 528 kB | 753 kB | 773 kB | 728 kB | 68.7 kB | 528 kB | 7.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.11 ms | 54 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5711   | 5711   | 9759    | 10207   | 9367.1  | 1199.49 | 5711   | 103034  |
| **Bytes/Sec** | 737 kB | 737 kB | 1.26 MB | 1.32 MB | 1.21 MB | 155 kB  | 737 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.68 ms | 1.6 ms | 28 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 3013   | 3013   | 5423   | 5491   | 5113.5 | 728.35 | 3013   | 51135  |
| **Bytes/Sec** | 277 kB | 277 kB | 499 kB | 505 kB | 470 kB | 67 kB  | 277 kB | 4.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.61 ms | 2.1 ms | 53 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4647   | 4647   | 7891   | 8503   | 7672.4 | 1043.14 | 4645   | 76715   |
| **Bytes/Sec** | 432 kB | 432 kB | 734 kB | 791 kB | 713 kB | 97 kB   | 432 kB | 7.13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.6 ms | 1.67 ms | 36 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20751   | 20751   | 39711   | 41439   | 38088.81 | 5825.19 | 20743   | 380885  |
| **Bytes/Sec** | 2.32 MB | 2.32 MB | 4.45 MB | 4.64 MB | 4.27 MB  | 653 kB  | 2.32 MB | 42.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.85 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 10383   | 10383   | 16135  | 16367   | 15586.55 | 1662.73 | 10382   | 171457  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.1 MB | 2.13 MB | 2.03 MB  | 216 kB  | 1.35 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.15 ms | 0.87 ms | 23 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4223   | 4223   | 6283   | 6679    | 6149.6 | 664.47 | 4223   | 61494   |
| **Bytes/Sec** | 651 kB | 651 kB | 967 kB | 1.03 MB | 947 kB | 102 kB | 650 kB | 9.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 9 ms  | 6.02 ms | 2.12 ms | 139 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 5027   | 5027   | 8151   | 8335   | 7821.6 | 942.18  | 5025   | 78212  |
| **Bytes/Sec** | 392 kB | 392 kB | 636 kB | 650 kB | 610 kB | 73.5 kB | 392 kB | 6.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.52 ms | 1.9 ms | 103 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2505   | 2505   | 3205   | 5619   | 3719.3 | 1041.79 | 2504   | 37188   |
| **Bytes/Sec** | 288 kB | 288 kB | 369 kB | 646 kB | 428 kB | 120 kB  | 288 kB | 4.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 10.26 ms | 17.05 ms | 74 ms |


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

<p align="center">Generated 2021-07-13T00:49:01.873Z</p>
