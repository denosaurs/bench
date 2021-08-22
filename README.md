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
| node | 30037.6 | 300330 |
| deno | 29275.2 | 292736 |
| alosaur | 20510.2 | 205083 |
| oak | 14436.8 | 144358 |
| deno_canary | 14362.8 | 143614 |
| fastify | 14208 | 142090 |
| abc | 9752.21 | 97514 |
| little_native | 9687.8 | 96868 |
| little_std | 9314 | 102448 |
| aqua | 9113 | 91126 |
| http | 8987.6 | 89874 |
| drash | 7763.55 | 85395 |
| dinatra | 5716.4 | 57161 |
| express | 5506.82 | 60575 |
| reno | 5115.9 | 51144 |
| mandarinets | 4059.7 | 40594 |
| opine | 3855 | 38541 |
| servest | 2863.2 | 28626 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6719   | 6719   | 10103  | 10559  | 9752.21 | 1040.8  | 6719   | 97514   |
| **Bytes/Sec** | 625 kB | 625 kB | 940 kB | 982 kB | 907 kB  | 96.7 kB | 625 kB | 9.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.48 ms | 1.47 ms | 38 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6551   | 6551   | 24079   | 25615   | 20510.2 | 7044.77 | 6550   | 205083  |
| **Bytes/Sec** | 583 kB | 583 kB | 2.14 MB | 2.28 MB | 1.83 MB | 627 kB  | 583 kB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.49 ms | 1.4 ms | 38 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6143   | 6143   | 9431   | 9615   | 9113   | 1006.44 | 6142   | 91126   |
| **Bytes/Sec** | 565 kB | 565 kB | 867 kB | 885 kB | 838 kB | 92.6 kB | 565 kB | 8.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.81 ms | 1.7 ms | 95 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev    | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 20399   | 20399   | 21087   | 45887   | 29275.2 | 10314.67 | 20387   | 292736  |
| **Bytes/Sec** | 1.81 MB | 1.81 MB | 1.88 MB | 4.08 MB | 2.61 MB | 918 kB   | 1.81 MB | 26.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.78 ms | 1.07 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9679   | 9679   | 10607  | 24431   | 14362.8 | 5564.71 | 9672   | 143614  |
| **Bytes/Sec** | 861 kB | 861 kB | 944 kB | 2.17 MB | 1.28 MB | 495 kB  | 861 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.74 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4303   | 4303   | 5827   | 6027   | 5716.4 | 483.45  | 4303   | 57161   |
| **Bytes/Sec** | 224 kB | 224 kB | 303 kB | 313 kB | 297 kB | 25.1 kB | 224 kB | 2.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.51 ms | 2.22 ms | 39 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3073   | 3073   | 8359   | 8751   | 7763.55 | 1644.77 | 3073   | 85395   |
| **Bytes/Sec** | 264 kB | 264 kB | 719 kB | 752 kB | 668 kB  | 141 kB  | 264 kB | 7.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.69 ms | 3.21 ms | 210 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3525   | 3525   | 4919    | 8639    | 5506.82 | 1425.48 | 3525   | 60575   |
| **Bytes/Sec** | 762 kB | 762 kB | 1.06 MB | 1.87 MB | 1.19 MB | 308 kB  | 761 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 7 ms  | 13 ms | 6.76 ms | 2.75 ms | 52 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8831    | 8831    | 9919    | 21695   | 14208   | 5776.59 | 8825    | 142090  |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 1.53 MB | 3.34 MB | 2.19 MB | 890 kB  | 1.36 MB | 21.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 7 ms  | 2.26 ms | 1.93 ms | 30 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6315   | 6315   | 7819   | 11719  | 8987.6 | 2191.84 | 6314   | 89874   |
| **Bytes/Sec** | 328 kB | 328 kB | 407 kB | 609 kB | 467 kB | 114 kB  | 328 kB | 4.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 4.05 ms | 2.37 ms | 92 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5107   | 5107   | 10223   | 10391   | 9687.8  | 1541.07 | 5107   | 96868   |
| **Bytes/Sec** | 659 kB | 659 kB | 1.32 MB | 1.34 MB | 1.25 MB | 199 kB  | 659 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.42 ms | 1.8 ms | 59 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4339   | 4339   | 10535   | 10887  | 9314   | 2272.65 | 4336   | 102448  |
| **Bytes/Sec** | 560 kB | 560 kB | 1.36 MB | 1.4 MB | 1.2 MB | 293 kB  | 559 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.71 ms | 1.82 ms | 36 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1921   | 1921   | 4267   | 5051   | 4059.7 | 814.09  | 1921   | 40594   |
| **Bytes/Sec** | 179 kB | 179 kB | 397 kB | 470 kB | 378 kB | 75.7 kB | 179 kB | 3.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 8 ms  | 20 ms | 9.35 ms | 3.78 ms | 54 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 19647  | 19647  | 22111   | 39935   | 30037.6 | 9522.56 | 19640  | 300330  |
| **Bytes/Sec** | 2.2 MB | 2.2 MB | 2.48 MB | 4.47 MB | 3.36 MB | 1.07 MB | 2.2 MB | 33.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.8 ms | 1.11 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9023    | 9023    | 15623   | 16111   | 14436.8 | 2516.26 | 9022    | 144358  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 2.03 MB | 2.09 MB | 1.88 MB | 327 kB  | 1.17 MB | 18.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.37 ms | 1.24 ms | 52 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2371   | 2371   | 3985   | 4283   | 3855   | 533.44  | 2370   | 38541   |
| **Bytes/Sec** | 365 kB | 365 kB | 614 kB | 659 kB | 594 kB | 82.2 kB | 365 kB | 5.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 9 ms  | 20 ms | 9.86 ms | 3.72 ms | 75 ms |


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
| **Req/Sec**   | 2301   | 2301   | 5543   | 5763   | 5115.9 | 1032.94 | 2300   | 51144   |
| **Bytes/Sec** | 179 kB | 179 kB | 432 kB | 450 kB | 399 kB | 80.6 kB | 179 kB | 3.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 18 ms | 7.3 ms | 4.65 ms | 235 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2079   | 2079   | 2909   | 3547   | 2863.2 | 433.98  | 2079   | 28626   |
| **Bytes/Sec** | 239 kB | 239 kB | 335 kB | 408 kB | 329 kB | 49.9 kB | 239 kB | 3.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.48 ms | 18.49 ms | 127 ms |


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

<p align="center">Generated 2021-08-22T00:45:21.153Z</p>
