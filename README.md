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
| node | 38266.91 | 420899 |
| fastify | 32756.73 | 360339 |
| deno_canary | 22846.8 | 228477 |
| alosaur | 22347.6 | 223464 |
| deno | 21387.6 | 213859 |
| oak | 15688.6 | 156875 |
| aqua | 15133.6 | 151334 |
| little_native | 12220.8 | 122200 |
| abc | 10118.21 | 101186 |
| little_std | 9883.46 | 108706 |
| express | 7943.9 | 79436 |
| dinatra | 6818.8 | 68182 |
| drash | 6783.6 | 67831 |
| opine | 4672.5 | 46719 |
| servest | 4224.9 | 42245 |
| tinyhttp | 2842.1 | 31258 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |
| reno | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6651   | 6651   | 10463  | 10815   | 10118.21 | 1194.94 | 6649   | 101186  |
| **Bytes/Sec** | 618 kB | 618 kB | 973 kB | 1.01 MB | 941 kB   | 111 kB  | 618 kB | 9.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.42 ms | 1.62 ms | 77 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11967   | 11967   | 23983   | 26047   | 22347.6 | 4238.25 | 11960   | 223464  |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 2.13 MB | 2.32 MB | 1.99 MB | 377 kB  | 1.06 MB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.31 ms | 1.02 ms | 47 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10391   | 10391   | 15575   | 15975   | 15133.6 | 1597.95 | 10387   | 151334  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 2.01 MB | 2.06 MB | 1.95 MB | 206 kB  | 1.34 MB | 19.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.21 ms | 1.1 ms | 31 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 10407  | 10407  | 24815   | 26495   | 21387.6 | 6134.11 | 10400  | 213859 |
| **Bytes/Sec** | 926 kB | 926 kB | 2.21 MB | 2.36 MB | 1.9 MB  | 546 kB  | 926 kB | 19 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.51 ms | 1.24 ms | 29 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11551   | 11551   | 25823  | 26959  | 22846.8 | 4951.18 | 11551   | 228477  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 2.3 MB | 2.4 MB | 2.03 MB | 441 kB  | 1.03 MB | 20.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.38 ms | 0.95 ms | 22 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4295   | 4295   | 6959   | 7443   | 6818.8 | 867.06  | 4292   | 68182   |
| **Bytes/Sec** | 223 kB | 223 kB | 362 kB | 387 kB | 355 kB | 45.1 kB | 223 kB | 3.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 11 ms | 5.49 ms | 2.15 ms | 41 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4251   | 4251   | 7067   | 7775   | 6783.6 | 1156.92 | 4250   | 67831   |
| **Bytes/Sec** | 366 kB | 366 kB | 608 kB | 669 kB | 583 kB | 99.5 kB | 366 kB | 5.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.36 ms | 3.33 ms | 173 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3833   | 3833   | 8471    | 8719    | 7943.9  | 1420.85 | 3832   | 79436   |
| **Bytes/Sec** | 828 kB | 828 kB | 1.83 MB | 1.88 MB | 1.72 MB | 307 kB  | 828 kB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.59 ms | 2.16 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16143   | 16143   | 34783   | 35327   | 32756.73 | 5343.42 | 16142   | 360339  |
| **Bytes/Sec** | 2.49 MB | 2.49 MB | 5.35 MB | 5.44 MB | 5.04 MB  | 823 kB  | 2.49 MB | 55.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.86 ms | 0.93 ms | 32 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 9399    | 9399    | 12535   | 12703   | 12220.8 | 948.2  | 9395    | 122200  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 1.62 MB | 1.64 MB | 1.58 MB | 122 kB | 1.21 MB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3.06 ms | 0.75 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 6495   | 6495   | 11023   | 11159   | 9883.46 | 1896.57 | 6495   | 108706 |
| **Bytes/Sec** | 838 kB | 838 kB | 1.42 MB | 1.44 MB | 1.27 MB | 245 kB  | 838 kB | 14 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.5 ms | 1.4 ms | 29 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22607   | 22607   | 43327   | 44031   | 38266.91 | 8013.71 | 22594   | 420899  |
| **Bytes/Sec** | 2.53 MB | 2.53 MB | 4.85 MB | 4.93 MB | 4.29 MB  | 897 kB  | 2.53 MB | 47.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.46 ms | 0.83 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6307   | 6307   | 17167   | 18319   | 15688.6 | 3964.79 | 6304   | 156875  |
| **Bytes/Sec** | 820 kB | 820 kB | 2.23 MB | 2.38 MB | 2.04 MB | 515 kB  | 820 kB | 20.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 1.18 ms | 44 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3111   | 3111   | 4747   | 5207   | 4672.5 | 560.29  | 3111   | 46719   |
| **Bytes/Sec** | 479 kB | 479 kB | 731 kB | 802 kB | 720 kB | 86.2 kB | 479 kB | 7.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 8.07 ms | 3.32 ms | 152 ms |


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


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2661   | 2661   | 4007   | 5831   | 4224.9 | 1077.94 | 2661   | 42245   |
| **Bytes/Sec** | 306 kB | 306 kB | 461 kB | 671 kB | 486 kB | 124 kB  | 306 kB | 4.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 8.99 ms | 16.27 ms | 72 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2157   | 2157   | 2961   | 3059   | 2842.1 | 254.41  | 2157   | 31258   |
| **Bytes/Sec** | 339 kB | 339 kB | 465 kB | 481 kB | 446 kB | 39.9 kB | 339 kB | 4.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 11 ms | 13 ms | 22 ms | 13.58 ms | 3.47 ms | 113 ms |


---

<p align="center">Generated 2021-09-22T00:51:23.812Z</p>
