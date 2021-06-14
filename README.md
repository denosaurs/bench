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
| deno_canary | 44204.8 | 441983 |
| deno | 40057.46 | 440614 |
| node | 21403.6 | 214048 |
| fastify | 20593.1 | 226524 |
| oak | 17072.41 | 170696 |
| http | 13082.4 | 130816 |
| alosaur | 11444.2 | 114442 |
| aqua | 9381.28 | 103189 |
| express | 8990.6 | 89914 |
| abc | 8700.21 | 86993 |
| dinatra | 8661.28 | 95268 |
| little_native | 8328.91 | 91625 |
| drash | 7803.6 | 78029 |
| mandarinets | 7362 | 73616 |
| reno | 7314 | 73129 |
| little_std | 4211.2 | 42112 |
| servest | 3992.9 | 39926 |
| opine | 3857.2 | 38569 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6287   | 6287   | 8927   | 9447   | 8700.21 | 861.07  | 6285   | 86993   |
| **Bytes/Sec** | 585 kB | 585 kB | 830 kB | 879 kB | 809 kB  | 80.1 kB | 585 kB | 8.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.12 ms | 1.76 ms | 98 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7167   | 7167   | 11855   | 12207   | 11444.2 | 1437.64 | 7164   | 114442  |
| **Bytes/Sec** | 659 kB | 659 kB | 1.09 MB | 1.12 MB | 1.05 MB | 132 kB  | 659 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.18 ms | 1.42 ms | 73 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6339   | 6339   | 9711   | 9951   | 9381.28 | 990.41  | 6336   | 103189  |
| **Bytes/Sec** | 583 kB | 583 kB | 893 kB | 915 kB | 863 kB  | 91.2 kB | 583 kB | 9.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.7 ms | 1.45 ms | 71 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 29535   | 29535   | 41247   | 41791   | 40057.46 | 3363.34 | 29531   | 440614  |
| **Bytes/Sec** | 2.63 MB | 2.63 MB | 3.67 MB | 3.72 MB | 3.57 MB  | 299 kB  | 2.63 MB | 39.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.4 ms | 0.68 ms | 26 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 33311   | 33311   | 45439   | 45791   | 44204.8 | 3640.26 | 33300   | 441983  |
| **Bytes/Sec** | 2.97 MB | 2.97 MB | 4.04 MB | 4.07 MB | 3.93 MB | 323 kB  | 2.96 MB | 39.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.43 ms | 0.63 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5987   | 5987   | 9015   | 9191   | 8661.28 | 870.89  | 5986   | 95268   |
| **Bytes/Sec** | 311 kB | 311 kB | 468 kB | 478 kB | 450 kB  | 45.3 kB | 311 kB | 4.95 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.19 ms | 1.48 ms | 32 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4903   | 4903   | 7975   | 8551   | 7803.6 | 1001.67 | 4903   | 78029   |
| **Bytes/Sec** | 422 kB | 422 kB | 686 kB | 735 kB | 671 kB | 86.1 kB | 422 kB | 6.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.6 ms | 1.87 ms | 100 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4351   | 4351   | 9607    | 9863    | 8990.6  | 1593.04 | 4350   | 89914   |
| **Bytes/Sec** | 940 kB | 940 kB | 2.07 MB | 2.13 MB | 1.94 MB | 344 kB  | 940 kB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.85 ms | 2 ms  | 43 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10447   | 10447   | 21935   | 22479   | 20593.1 | 3322.66 | 10445   | 226524  |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 3.38 MB | 3.46 MB | 3.17 MB | 512 kB  | 1.61 MB | 34.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.35 ms | 1.2 ms | 29 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 8423   | 8423   | 13535  | 14095  | 13082.4 | 1578.14 | 8418   | 130816 |
| **Bytes/Sec** | 438 kB | 438 kB | 704 kB | 733 kB | 680 kB  | 82.1 kB | 438 kB | 6.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.44 ms | 1.27 ms | 29 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5815   | 5815   | 8751    | 9023    | 8328.91 | 903.81 | 5812   | 91625   |
| **Bytes/Sec** | 750 kB | 750 kB | 1.13 MB | 1.16 MB | 1.07 MB | 117 kB | 750 kB | 11.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.33 ms | 1.45 ms | 37 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2401   | 2401   | 4435   | 4591   | 4211.2 | 643.72  | 2401   | 42112   |
| **Bytes/Sec** | 221 kB | 221 kB | 408 kB | 422 kB | 387 kB | 59.2 kB | 221 kB | 3.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------ | ----- |
| **Latency** | 7 ms  | 8 ms  | 17 ms | 9 ms  | 2.8 ms | 60 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4459   | 4459   | 7695   | 7815   | 7362   | 974.15  | 4459   | 73616   |
| **Bytes/Sec** | 415 kB | 415 kB | 716 kB | 727 kB | 685 kB | 90.6 kB | 415 kB | 6.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.06 ms | 1.57 ms | 35 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 11887   | 11887   | 22575   | 23679   | 21403.6 | 3347.76 | 11880   | 214048 |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 2.53 MB | 2.65 MB | 2.4 MB  | 375 kB  | 1.33 MB | 24 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.14 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12447   | 12447   | 17679  | 17919   | 17072.41 | 1591.73 | 12444   | 170696  |
| **Bytes/Sec** | 1.62 MB | 1.62 MB | 2.3 MB | 2.33 MB | 2.22 MB  | 207 kB  | 1.62 MB | 22.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.1 ms | 0.71 ms | 20 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2591   | 2591   | 4023   | 4087   | 3857.2 | 431.63  | 2591   | 38569   |
| **Bytes/Sec** | 399 kB | 399 kB | 620 kB | 630 kB | 594 kB | 66.5 kB | 399 kB | 5.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 16 ms | 9.88 ms | 3.07 ms | 173 ms |


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
| **Req/Sec**   | 4939   | 4939   | 7595   | 7695   | 7314   | 797.81  | 4936   | 73129  |
| **Bytes/Sec** | 385 kB | 385 kB | 592 kB | 600 kB | 570 kB | 62.3 kB | 385 kB | 5.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.74 ms | 1.91 ms | 58 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2491   | 2491   | 4003   | 4987   | 3992.9 | 852.06  | 2490   | 39926   |
| **Bytes/Sec** | 286 kB | 286 kB | 461 kB | 574 kB | 459 kB | 98.1 kB | 286 kB | 4.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 9.53 ms | 16.51 ms | 76 ms |


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

<p align="center">Generated 2021-06-14T00:44:24.852Z</p>
