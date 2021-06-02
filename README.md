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
| deno_canary | 45709.1 | 502860 |
| node | 41317.6 | 413138 |
| deno | 26572.8 | 265733 |
| fastify | 17919.6 | 179160 |
| alosaur | 17810 | 178106 |
| http | 17680.41 | 176787 |
| express | 16770.8 | 167720 |
| aqua | 16161.2 | 161632 |
| oak | 15316 | 168456 |
| drash | 14657.6 | 146570 |
| little_native | 12254.6 | 122527 |
| abc | 11185.8 | 111847 |
| mandarinets | 10575.8 | 105749 |
| dinatra | 8110.6 | 81114 |
| reno | 7874.6 | 78731 |
| little_std | 6382.46 | 70200 |
| opine | 5704.9 | 57039 |
| tinyhttp | 5331.1 | 53307 |
| servest | 3018.1 | 33194 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7071   | 7071   | 11663   | 11831  | 11185.8 | 1383.53 | 7071   | 111847  |
| **Bytes/Sec** | 658 kB | 658 kB | 1.08 MB | 1.1 MB | 1.04 MB | 129 kB  | 658 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.26 ms | 1.24 ms | 30 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11599   | 11599   | 17951   | 19679   | 17810   | 2266.16 | 11595   | 178106  |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 1.65 MB | 1.81 MB | 1.64 MB | 209 kB  | 1.07 MB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.85 ms | 0.93 ms | 53 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11767   | 11767   | 16639   | 16815   | 16161.2 | 1468.61 | 11765   | 161632  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.53 MB | 1.55 MB | 1.49 MB | 135 kB  | 1.08 MB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.81 ms | 58 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20031   | 20031   | 27007  | 27983   | 26572.8 | 2256.33 | 20023   | 265733  |
| **Bytes/Sec** | 1.78 MB | 1.78 MB | 2.4 MB | 2.49 MB | 2.37 MB | 201 kB  | 1.78 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.21 ms | 0.72 ms | 27 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 35167   | 35167   | 47103   | 47615   | 45709.1 | 3494.35 | 35165   | 502860  |
| **Bytes/Sec** | 3.13 MB | 3.13 MB | 4.19 MB | 4.24 MB | 4.07 MB | 311 kB  | 3.13 MB | 44.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.34 ms | 0.63 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6083   | 6083   | 8303   | 8503   | 8110.6 | 685.77  | 6081   | 81114   |
| **Bytes/Sec** | 316 kB | 316 kB | 432 kB | 442 kB | 422 kB | 35.7 kB | 316 kB | 4.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.45 ms | 1.47 ms | 37 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10439  | 10439  | 15071  | 15319   | 14657.6 | 1410.06 | 10438  | 146570  |
| **Bytes/Sec** | 898 kB | 898 kB | 1.3 MB | 1.32 MB | 1.26 MB | 121 kB  | 898 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.16 ms | 0.84 ms | 57 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9015    | 9015    | 17503   | 18399   | 16770.8 | 2608.99 | 9011    | 167720  |
| **Bytes/Sec** | 1.95 MB | 1.95 MB | 3.78 MB | 3.98 MB | 3.62 MB | 564 kB  | 1.95 MB | 36.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.09 ms | 0.92 ms | 24 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8807    | 8807    | 18719   | 19247   | 17919.6 | 3049.06 | 8803    | 179160  |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 2.88 MB | 2.96 MB | 2.76 MB | 470 kB  | 1.36 MB | 27.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.64 ms | 1.33 ms | 33 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 11855  | 11855  | 18271  | 18863  | 17680.41 | 1954   | 11853  | 176787  |
| **Bytes/Sec** | 616 kB | 616 kB | 950 kB | 980 kB | 919 kB   | 102 kB | 616 kB | 9.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.63 ms | 1.07 ms | 31 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 7767  | 7767  | 12591   | 13111   | 12254.6 | 1517.92 | 7764  | 122527  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 1.62 MB | 1.69 MB | 1.58 MB | 196 kB  | 1 MB  | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.94 ms | 1.06 ms | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3799   | 3799   | 6715   | 6771   | 6382.46 | 832.15  | 3799   | 70200   |
| **Bytes/Sec** | 350 kB | 350 kB | 618 kB | 623 kB | 587 kB  | 76.5 kB | 350 kB | 6.46 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 11 ms | 5.57 ms | 1.67 ms | 36 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6931   | 6931   | 10991   | 11103   | 10575.8 | 1218.56 | 6931   | 105749  |
| **Bytes/Sec** | 645 kB | 645 kB | 1.02 MB | 1.03 MB | 984 kB  | 113 kB  | 645 kB | 9.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.25 ms | 1.03 ms | 26 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 25103   | 25103   | 43615   | 44383   | 41317.6 | 5525.47 | 25090   | 413138  |
| **Bytes/Sec** | 2.81 MB | 2.81 MB | 4.88 MB | 4.97 MB | 4.63 MB | 619 kB  | 2.81 MB | 46.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.41 ms | 0.7 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10287   | 10287   | 15863   | 16319   | 15316   | 1632.48 | 10280   | 168456  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 2.06 MB | 2.12 MB | 1.99 MB | 212 kB  | 1.34 MB | 21.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.16 ms | 1.1 ms | 62 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3991   | 3991   | 5895   | 6015   | 5704.9 | 580.32  | 3991   | 57039   |
| **Bytes/Sec** | 615 kB | 615 kB | 908 kB | 926 kB | 878 kB | 89.3 kB | 615 kB | 8.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 6.45 ms | 1.93 ms | 120 ms |


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
| **Req/Sec**   | 4875   | 4875   | 8143   | 8439   | 7874.6 | 1009.54 | 4872   | 78731   |
| **Bytes/Sec** | 380 kB | 380 kB | 635 kB | 658 kB | 614 kB | 78.8 kB | 380 kB | 6.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.58 ms | 1.88 ms | 84 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2427   | 2427   | 3065   | 3433   | 3018.1 | 330.23  | 2427   | 33194   |
| **Bytes/Sec** | 279 kB | 279 kB | 353 kB | 395 kB | 347 kB | 37.9 kB | 279 kB | 3.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.77 ms | 18.23 ms | 84 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3473   | 3473   | 5451   | 5823   | 5331.1 | 649.96  | 3472   | 53307   |
| **Bytes/Sec** | 462 kB | 462 kB | 725 kB | 774 kB | 709 kB | 86.5 kB | 462 kB | 7.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 13 ms | 7 ms  | 2.55 ms | 71 ms |


---

<p align="center">Generated 2021-06-02T02:26:50.174Z</p>
