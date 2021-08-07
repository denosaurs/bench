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
| node | 41957.1 | 461468 |
| fastify | 41773.82 | 459436 |
| deno | 35456.73 | 390026 |
| deno_canary | 23643.2 | 236431 |
| oak | 18472.37 | 203217 |
| express | 16167.4 | 161665 |
| alosaur | 14263.64 | 156900 |
| aqua | 12180 | 121798 |
| abc | 11494.4 | 114952 |
| drash | 10482.21 | 104823 |
| dinatra | 10007 | 100069 |
| mandarinets | 9167.4 | 91659 |
| reno | 9039 | 90390 |
| little_native | 7311.6 | 73106 |
| opine | 6054.4 | 60534 |
| http | 5682.8 | 56821 |
| little_std | 4040.91 | 44441 |
| servest | 3264.9 | 32642 |
| tinyhttp | 2752.3 | 27514 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8207   | 8207   | 11903   | 11959   | 11494.4 | 1101.25 | 8202   | 114952  |
| **Bytes/Sec** | 763 kB | 763 kB | 1.11 MB | 1.11 MB | 1.07 MB | 103 kB  | 763 kB | 10.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.18 ms | 1.02 ms | 30 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 9799   | 9799   | 14775   | 14855   | 14263.64 | 1420.8 | 9799   | 156900  |
| **Bytes/Sec** | 902 kB | 902 kB | 1.36 MB | 1.37 MB | 1.31 MB  | 131 kB | 902 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.13 ms | 73 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8655   | 8655   | 12559   | 13007  | 12180   | 1190.85 | 8652   | 121798  |
| **Bytes/Sec** | 796 kB | 796 kB | 1.16 MB | 1.2 MB | 1.12 MB | 110 kB  | 796 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.91 ms | 1.21 ms | 57 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 25167   | 25167   | 37151   | 37567   | 35456.73 | 3413.56 | 25155   | 390026  |
| **Bytes/Sec** | 2.24 MB | 2.24 MB | 3.31 MB | 3.34 MB | 3.16 MB  | 304 kB  | 2.24 MB | 34.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.76 ms | 0.8 ms | 25 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 16479   | 16479   | 24463   | 24847   | 23643.2 | 2408.19 | 16473   | 236431 |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.18 MB | 2.21 MB | 2.1 MB  | 214 kB  | 1.47 MB | 21 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.3 ms | 0.82 ms | 24 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 7195   | 7195   | 10255  | 10559  | 10007  | 946.84  | 7193   | 100069 |
| **Bytes/Sec** | 374 kB | 374 kB | 534 kB | 549 kB | 520 kB | 49.2 kB | 374 kB | 5.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.38 ms | 1.59 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6995   | 6995   | 10951  | 11071  | 10482.21 | 1180.21 | 6993   | 104823  |
| **Bytes/Sec** | 602 kB | 602 kB | 942 kB | 952 kB | 901 kB   | 102 kB  | 601 kB | 9.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.32 ms | 1.44 ms | 35 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6967    | 6967    | 17247   | 17679   | 16167.4 | 3096.6 | 6965   | 161665  |
| **Bytes/Sec** | 1.51 MB | 1.51 MB | 3.72 MB | 3.82 MB | 3.49 MB | 669 kB | 1.5 MB | 34.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.15 ms | 1.16 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21151   | 21151   | 44671   | 45087   | 41773.82 | 6784.27 | 21137   | 459436  |
| **Bytes/Sec** | 3.26 MB | 3.26 MB | 6.88 MB | 6.94 MB | 6.43 MB  | 1.04 MB | 3.26 MB | 70.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.26 ms | 0.75 ms | 32 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4279   | 4279   | 5843   | 5935   | 5682.8 | 475.77  | 4278   | 56821   |
| **Bytes/Sec** | 222 kB | 222 kB | 304 kB | 308 kB | 295 kB | 24.7 kB | 222 kB | 2.95 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 10 ms | 6.48 ms | 1.75 ms | 44 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4979   | 4979   | 7499   | 8039    | 7311.6 | 818.46 | 4978   | 73106   |
| **Bytes/Sec** | 643 kB | 643 kB | 967 kB | 1.04 MB | 943 kB | 106 kB | 642 kB | 9.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 4.97 ms | 1.49 ms | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2421   | 2421   | 4247   | 4407   | 4040.91 | 544.42  | 2420   | 44441   |
| **Bytes/Sec** | 223 kB | 223 kB | 391 kB | 406 kB | 372 kB  | 50.1 kB | 223 kB | 4.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 8 ms  | 8 ms  | 17 ms | 9.38 ms | 2.97 ms | 46 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5983   | 5983   | 9503   | 9671   | 9167.4 | 1067.04 | 5982   | 91659   |
| **Bytes/Sec** | 557 kB | 557 kB | 884 kB | 899 kB | 852 kB | 99.2 kB | 556 kB | 8.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.12 ms | 1.33 ms | 85 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 25855  | 25855  | 44031   | 44511   | 41957.1 | 5199.77 | 25847   | 461468  |
| **Bytes/Sec** | 2.9 MB | 2.9 MB | 4.93 MB | 4.98 MB | 4.7 MB  | 582 kB  | 2.89 MB | 51.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.35 ms | 0.75 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12575   | 12575   | 19103   | 19343   | 18472.37 | 1877.27 | 12574   | 203217  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 2.48 MB | 2.51 MB | 2.4 MB   | 244 kB  | 1.63 MB | 26.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.93 ms | 1.02 ms | 74 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4143   | 4143   | 6283   | 6411   | 6054.4 | 648.63  | 4143   | 60534   |
| **Bytes/Sec** | 638 kB | 638 kB | 967 kB | 987 kB | 932 kB | 99.7 kB | 638 kB | 9.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 6.25 ms | 2.1 ms | 69 ms |


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
| **Req/Sec**   | 6923   | 6923   | 9263   | 9343   | 9039   | 707.77  | 6922   | 90390   |
| **Bytes/Sec** | 540 kB | 540 kB | 722 kB | 729 kB | 705 kB | 55.2 kB | 540 kB | 7.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.1 ms | 1.65 ms | 90 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2721   | 2721   | 3017   | 4391   | 3264.9 | 524.87  | 2720   | 32642   |
| **Bytes/Sec** | 313 kB | 313 kB | 347 kB | 505 kB | 375 kB | 60.3 kB | 313 kB | 3.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 11.75 ms | 17.79 ms | 95 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2038   | 2038   | 2841   | 2961   | 2752.3 | 261.95  | 2038   | 27514   |
| **Bytes/Sec** | 320 kB | 320 kB | 446 kB | 465 kB | 432 kB | 41.1 kB | 320 kB | 4.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 11 ms | 13 ms | 24 ms | 14.07 ms | 3.64 ms | 102 ms |


---

<p align="center">Generated 2021-08-07T00:42:52.890Z</p>
