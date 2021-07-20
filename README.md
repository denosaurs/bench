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
| node | 36448.81 | 364479 |
| fastify | 20574.19 | 226297 |
| deno_canary | 19752 | 197516 |
| deno | 14562 | 145604 |
| http | 13229.46 | 145527 |
| oak | 12672.8 | 126733 |
| alosaur | 11528.6 | 115282 |
| little_native | 11448.19 | 125917 |
| abc | 11331 | 113320 |
| drash | 10245 | 102451 |
| express | 9512.6 | 95133 |
| aqua | 9051.8 | 90526 |
| reno | 7523.19 | 82753 |
| mandarinets | 6914.1 | 69139 |
| dinatra | 6850.8 | 68507 |
| opine | 6049.5 | 60485 |
| little_std | 3990.9 | 39904 |
| servest | 3454.6 | 34542 |
| tinyhttp | 2490.31 | 24896 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8019   | 8019   | 11687   | 11807  | 11331   | 1108.95 | 8017   | 113320  |
| **Bytes/Sec** | 746 kB | 746 kB | 1.09 MB | 1.1 MB | 1.05 MB | 103 kB  | 746 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.21 ms | 1.26 ms | 88 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5027   | 5027   | 12583   | 13039  | 11528.6 | 2384.41 | 5027   | 115282  |
| **Bytes/Sec** | 463 kB | 463 kB | 1.16 MB | 1.2 MB | 1.06 MB | 219 kB  | 462 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 2 ms  | 2 ms  | 8 ms  | 2.84 ms | 2 ms  | 44 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5667   | 5667   | 9447   | 9655   | 9051.8 | 1147.88 | 5665   | 90526   |
| **Bytes/Sec** | 521 kB | 521 kB | 869 kB | 888 kB | 833 kB | 106 kB  | 521 kB | 8.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.81 ms | 1.91 ms | 72 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 9559   | 9559   | 10663  | 22303   | 14562  | 5273.41 | 9555   | 145604 |
| **Bytes/Sec** | 850 kB | 850 kB | 949 kB | 1.98 MB | 1.3 MB | 469 kB  | 850 kB | 13 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 8 ms  | 2.24 ms | 1.94 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11823   | 11823   | 18095   | 27631   | 19752   | 6713.86 | 11821   | 197516  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.61 MB | 2.46 MB | 1.76 MB | 597 kB  | 1.05 MB | 17.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 1.67 ms | 1.44 ms | 20 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5055   | 5055   | 7007   | 7167   | 6850.8 | 602.98  | 5054   | 68507   |
| **Bytes/Sec** | 263 kB | 263 kB | 365 kB | 373 kB | 356 kB | 31.4 kB | 263 kB | 3.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.42 ms | 1.93 ms | 49 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4223   | 4223   | 10871  | 11247  | 10245  | 2022.21 | 4221   | 102451  |
| **Bytes/Sec** | 363 kB | 363 kB | 935 kB | 967 kB | 881 kB | 174 kB  | 363 kB | 8.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.43 ms | 2.64 ms | 200 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4363   | 4363   | 10143   | 10679   | 9512.6  | 1796.43 | 4360   | 95133   |
| **Bytes/Sec** | 942 kB | 942 kB | 2.19 MB | 2.31 MB | 2.05 MB | 388 kB  | 942 kB | 20.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.7 ms | 1.83 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8495    | 8495    | 21679   | 22415   | 20574.19 | 3844.62 | 8493    | 226297  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 3.34 MB | 3.45 MB | 3.17 MB  | 592 kB  | 1.31 MB | 34.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.33 ms | 1.16 ms | 29 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8447   | 8447   | 13767  | 14047  | 13229.46 | 1538.04 | 8446   | 145527  |
| **Bytes/Sec** | 439 kB | 439 kB | 716 kB | 730 kB | 688 kB   | 79.9 kB | 439 kB | 7.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.4 ms | 1.29 ms | 67 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7883    | 7883    | 11831   | 11999   | 11448.19 | 1135.49 | 7882    | 125917  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.53 MB | 1.55 MB | 1.48 MB  | 147 kB  | 1.02 MB | 16.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.18 ms | 1.03 ms | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1939   | 1939   | 4323   | 4495   | 3990.9 | 753.29  | 1939   | 39904   |
| **Bytes/Sec** | 178 kB | 178 kB | 398 kB | 413 kB | 367 kB | 69.3 kB | 178 kB | 3.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 18 ms | 9.5 ms | 3.81 ms | 91 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2349   | 2349   | 7991   | 8207   | 6914.1 | 1896.9 | 2348   | 69139   |
| **Bytes/Sec** | 218 kB | 218 kB | 743 kB | 763 kB | 643 kB | 176 kB | 218 kB | 6.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 13 ms | 5.21 ms | 2.96 ms | 41 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 18719  | 18719  | 39615   | 42879  | 36448.81 | 8109.88 | 18718  | 364479  |
| **Bytes/Sec** | 2.1 MB | 2.1 MB | 4.44 MB | 4.8 MB | 4.08 MB  | 908 kB  | 2.1 MB | 40.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.56 ms | 0.9 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 8295    | 8295    | 13231   | 13791   | 12672.8 | 1551.6 | 8295    | 126733  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.72 MB | 1.79 MB | 1.65 MB | 202 kB | 1.08 MB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.6 ms | 1.5 ms | 89 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2993   | 2993   | 6371   | 6739    | 6049.5 | 1040.14 | 2993   | 60485   |
| **Bytes/Sec** | 461 kB | 461 kB | 982 kB | 1.04 MB | 932 kB | 160 kB  | 461 kB | 9.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 6 ms  | 12 ms | 6.09 ms | 2.84 ms | 153 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3841   | 3841   | 7243   | 9783   | 7523.19 | 1615.16 | 3841   | 82753   |
| **Bytes/Sec** | 300 kB | 300 kB | 565 kB | 763 kB | 587 kB  | 126 kB  | 300 kB | 6.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 3 ms  | 5 ms  | 9 ms  | 4.81 ms | 2.3 ms | 141 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1819   | 1819   | 3193   | 5235   | 3454.6 | 1024.8 | 1819   | 34542   |
| **Bytes/Sec** | 209 kB | 209 kB | 367 kB | 602 kB | 397 kB | 118 kB | 209 kB | 3.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.1 ms | 17.5 ms | 96 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1616   | 1616   | 2561   | 2743   | 2490.31 | 339.94  | 1616   | 24896   |
| **Bytes/Sec** | 254 kB | 254 kB | 402 kB | 431 kB | 391 kB  | 53.3 kB | 254 kB | 3.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 12 ms | 13 ms | 35 ms | 15.62 ms | 5.48 ms | 51 ms |


---

<p align="center">Generated 2021-07-20T00:50:27.993Z</p>
