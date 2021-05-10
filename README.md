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
| deno_canary | 37466.4 | 374604 |
| deno | 33520 | 368733 |
| http | 23010.19 | 253108 |
| node | 19623.6 | 196232 |
| fastify | 19390.8 | 193903 |
| alosaur | 19125.2 | 191247 |
| express | 18156.41 | 181578 |
| oak | 16504.73 | 181543 |
| little_native | 13051.28 | 143564 |
| mandarinets | 10645.4 | 106449 |
| aqua | 10641 | 106415 |
| drash | 10579 | 105781 |
| reno | 10102.21 | 101020 |
| abc | 9565 | 95633 |
| dinatra | 8380.73 | 92170 |
| tinyhttp | 6154.4 | 61538 |
| little_std | 4588.9 | 45886 |
| opine | 4453.5 | 44530 |
| servest | 3886.64 | 42745 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5855   | 5855   | 9919   | 10311  | 9565   | 1253.59 | 5852   | 95633   |
| **Bytes/Sec** | 544 kB | 544 kB | 923 kB | 958 kB | 889 kB | 117 kB  | 544 kB | 8.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.58 ms | 1.7 ms | 97 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14287   | 14287   | 19807   | 19903   | 19125.2 | 1650.43 | 14286   | 191247  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 1.82 MB | 1.83 MB | 1.76 MB | 152 kB  | 1.31 MB | 17.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 0.86 ms | 34 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6407   | 6407   | 10999   | 11471   | 10641  | 1432.25 | 6406   | 106415  |
| **Bytes/Sec** | 590 kB | 590 kB | 1.01 MB | 1.06 MB | 979 kB | 132 kB  | 589 kB | 9.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.33 ms | 1.57 ms | 52 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 19135  | 19135  | 35423   | 35583   | 33520   | 4650.61 | 19127  | 368733  |
| **Bytes/Sec** | 1.7 MB | 1.7 MB | 3.15 MB | 3.17 MB | 2.98 MB | 414 kB  | 1.7 MB | 32.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.43 ms | 0.82 ms | 21 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 29247  | 29247  | 38207  | 39327  | 37466.4 | 2899.06 | 29236  | 374604  |
| **Bytes/Sec** | 2.6 MB | 2.6 MB | 3.4 MB | 3.5 MB | 3.33 MB | 258 kB  | 2.6 MB | 33.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.63 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6687   | 6687   | 8559   | 8879   | 8380.73 | 569.42  | 6685   | 92170   |
| **Bytes/Sec** | 348 kB | 348 kB | 445 kB | 462 kB | 436 kB  | 29.6 kB | 348 kB | 4.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.29 ms | 1.33 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 6619   | 6619   | 10999  | 11263  | 10579  | 1326.82 | 6618   | 105781 |
| **Bytes/Sec** | 569 kB | 569 kB | 946 kB | 969 kB | 910 kB | 114 kB  | 569 kB | 9.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.3 ms | 1.46 ms | 55 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8999    | 8999    | 19263   | 19615   | 18156.41 | 3091.26 | 8999    | 181578  |
| **Bytes/Sec** | 1.94 MB | 1.94 MB | 4.16 MB | 4.24 MB | 3.92 MB  | 668 kB  | 1.94 MB | 39.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.78 ms | 1.08 ms | 26 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9599    | 9599    | 20207   | 21295   | 19390.8 | 3362.19 | 9596    | 193903  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.11 MB | 3.28 MB | 2.99 MB | 518 kB  | 1.48 MB | 29.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.43 ms | 1.16 ms | 28 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 17103  | 17103  | 23823   | 24319   | 23010.19 | 1986.58 | 17102  | 253108  |
| **Bytes/Sec** | 889 kB | 889 kB | 1.24 MB | 1.26 MB | 1.2 MB   | 103 kB  | 889 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.68 ms | 34 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8911    | 8911    | 13439   | 13759   | 13051.28 | 1326.96 | 8905    | 143564  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.73 MB | 1.78 MB | 1.68 MB  | 171 kB  | 1.15 MB | 18.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.58 ms | 0.93 ms | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2607   | 2607   | 4875   | 4979   | 4588.9 | 702.85  | 2606   | 45886   |
| **Bytes/Sec** | 240 kB | 240 kB | 449 kB | 458 kB | 422 kB | 64.7 kB | 240 kB | 4.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 15 ms | 8.03 ms | 2.55 ms | 53 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 6579   | 6579   | 11103   | 11191   | 10645.4 | 1359.32 | 6576   | 106449 |
| **Bytes/Sec** | 612 kB | 612 kB | 1.03 MB | 1.04 MB | 990 kB  | 126 kB  | 612 kB | 9.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.25 ms | 1.14 ms | 74 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 10151   | 10151   | 21087   | 21519   | 19623.6 | 3314.57 | 10144   | 196232 |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 2.36 MB | 2.41 MB | 2.2 MB  | 371 kB  | 1.14 MB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.49 ms | 1.24 ms | 34 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 12343  | 12343  | 16959  | 17711  | 16504.73 | 1418.86 | 12343  | 181543  |
| **Bytes/Sec** | 1.6 MB | 1.6 MB | 2.2 MB | 2.3 MB | 2.15 MB  | 184 kB  | 1.6 MB | 23.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.99 ms | 0.8 ms | 24 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3205   | 3205   | 4575   | 4743   | 4453.5 | 429.49  | 3205   | 44530   |
| **Bytes/Sec** | 494 kB | 494 kB | 705 kB | 731 kB | 686 kB | 66.1 kB | 494 kB | 6.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 14 ms | 8.49 ms | 2.33 ms | 50 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6907   | 6907   | 10463  | 10687  | 10102.21 | 1072.02 | 6907   | 101020  |
| **Bytes/Sec** | 539 kB | 539 kB | 816 kB | 834 kB | 788 kB   | 83.5 kB | 539 kB | 7.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.48 ms | 69 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2669   | 2669   | 3829   | 4971   | 3886.64 | 647.77  | 2669   | 42745   |
| **Bytes/Sec** | 307 kB | 307 kB | 440 kB | 571 kB | 447 kB  | 74.5 kB | 307 kB | 4.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------ | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 9.8 ms | 16.74 ms | 77 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4319   | 4319   | 6375   | 6599   | 6154.4 | 644.38  | 4318   | 61538   |
| **Bytes/Sec** | 574 kB | 574 kB | 848 kB | 878 kB | 818 kB | 85.7 kB | 574 kB | 8.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 6 ms  | 11 ms | 6.05 ms | 2.28 ms | 104 ms |


---

<p align="center">Generated 2021-05-10T00:45:53.465Z</p>
