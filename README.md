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
| fastify | 28016.73 | 308186 |
| alosaur | 27165.2 | 271643 |
| deno | 24012.8 | 240120 |
| node | 16078 | 160783 |
| http | 15309.46 | 168392 |
| express | 13794.2 | 137937 |
| little_std | 12487.2 | 124868 |
| deno_canary | 12374 | 123731 |
| drash | 10526.2 | 105255 |
| little_native | 9396.55 | 103352 |
| abc | 9378.1 | 103148 |
| oak | 9277 | 92772 |
| mandarinets | 8987.1 | 89860 |
| reno | 8944.8 | 89454 |
| dinatra | 8625 | 86244 |
| opine | 5055.7 | 50548 |
| servest | 2836 | 31194 |
| tinyhttp | 2304.7 | 23040 |
| aqua | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3461   | 3461   | 10231  | 10879   | 9378.1 | 2160.24 | 3460   | 103148  |
| **Bytes/Sec** | 322 kB | 322 kB | 951 kB | 1.01 MB | 872 kB | 201 kB  | 322 kB | 9.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.77 ms | 2.18 ms | 60 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9039   | 9039   | 28623   | 31807   | 27165.2 | 6163.06 | 9032   | 271643  |
| **Bytes/Sec** | 804 kB | 804 kB | 2.55 MB | 2.83 MB | 2.42 MB | 548 kB  | 804 kB | 24.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.96 ms | 30 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16639   | 16639   | 25327   | 25599   | 24012.8 | 2630.13 | 16633   | 240120  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.25 MB | 2.28 MB | 2.14 MB | 234 kB  | 1.48 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.34 ms | 0.92 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5% | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ----- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 9047   | 9047   | 10399  | 22463 | 12374  | 4063.86 | 9041   | 123731 |
| **Bytes/Sec** | 805 kB | 805 kB | 925 kB | 2 MB  | 1.1 MB | 362 kB  | 805 kB | 11 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 8 ms  | 2.77 ms | 2.09 ms | 27 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7455   | 7455   | 8623   | 8959   | 8625   | 421.8   | 7454   | 86244   |
| **Bytes/Sec** | 388 kB | 388 kB | 448 kB | 466 kB | 448 kB | 21.9 kB | 388 kB | 4.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.31 ms | 1.8 ms | 41 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5451   | 5451   | 11175  | 11247  | 10526.2 | 1715.38 | 5451   | 105255  |
| **Bytes/Sec** | 469 kB | 469 kB | 961 kB | 967 kB | 905 kB  | 147 kB  | 469 kB | 9.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.7 ms | 94 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4859    | 4859    | 14503   | 15615   | 13794.2 | 3079.96 | 4856    | 137937  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 3.13 MB | 3.37 MB | 2.98 MB | 665 kB  | 1.05 MB | 29.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.7 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15759   | 15759   | 34527   | 35519   | 28016.73 | 8817.73 | 15754   | 308186  |
| **Bytes/Sec** | 2.43 MB | 2.43 MB | 5.32 MB | 5.47 MB | 4.31 MB  | 1.36 MB | 2.43 MB | 47.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.17 ms | 1.05 ms | 23 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11583  | 11583  | 15799  | 15863  | 15309.46 | 1198.19 | 11583  | 168392  |
| **Bytes/Sec** | 603 kB | 603 kB | 821 kB | 825 kB | 796 kB   | 62.2 kB | 602 kB | 8.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.2 ms | 0.91 ms | 34 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5971   | 5971   | 9743    | 9975    | 9396.55 | 1095.42 | 5970   | 103352  |
| **Bytes/Sec** | 771 kB | 771 kB | 1.26 MB | 1.29 MB | 1.21 MB | 141 kB  | 770 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.6 ms | 1.39 ms | 25 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9103    | 9103    | 12831   | 13095   | 12487.2 | 1137.69 | 9099    | 124868  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.66 MB | 1.69 MB | 1.61 MB | 147 kB  | 1.17 MB | 16.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.74 ms | 1.01 ms | 20 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3441   | 3441   | 10095  | 10255  | 8987.1 | 2161.54 | 3441   | 89860   |
| **Bytes/Sec** | 320 kB | 320 kB | 938 kB | 954 kB | 836 kB | 201 kB  | 320 kB | 8.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.75 ms | 2.14 ms | 107 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 8663   | 8663   | 11439   | 22383   | 16078  | 5528.17 | 8659   | 160783 |
| **Bytes/Sec** | 970 kB | 970 kB | 1.28 MB | 2.51 MB | 1.8 MB | 619 kB  | 970 kB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 7 ms  | 1.96 ms | 1.88 ms | 45 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4279   | 4279   | 9415    | 12351   | 9277    | 1949.67 | 4279   | 92772   |
| **Bytes/Sec** | 557 kB | 557 kB | 1.22 MB | 1.61 MB | 1.21 MB | 253 kB  | 556 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max    |
| ----------- | ----- | ----- | ----- | ----- | ----- | ------ |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 4 ms  | 2 ms  | 120 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3335   | 3335   | 5255   | 5335   | 5055.7 | 581.59  | 3334   | 50548   |
| **Bytes/Sec** | 514 kB | 514 kB | 809 kB | 821 kB | 778 kB | 89.5 kB | 513 kB | 7.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 13 ms | 7.56 ms | 2.14 ms | 101 ms |


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
| **Req/Sec**   | 5867   | 5867   | 9399   | 9663   | 8944.8 | 1124.76 | 5864   | 89454   |
| **Bytes/Sec** | 457 kB | 457 kB | 733 kB | 754 kB | 698 kB | 87.8 kB | 457 kB | 6.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.91 ms | 2.11 ms | 106 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1658   | 1658   | 2231   | 6315   | 2836   | 1481.1 | 1658   | 31194   |
| **Bytes/Sec** | 191 kB | 191 kB | 257 kB | 727 kB | 326 kB | 170 kB | 191 kB | 3.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.58 ms | 18.73 ms | 136 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1480   | 1480   | 2433   | 3161   | 2304.7 | 424.77  | 1480   | 23040   |
| **Bytes/Sec** | 232 kB | 232 kB | 382 kB | 496 kB | 362 kB | 66.6 kB | 232 kB | 3.62 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 11 ms | 15 ms | 32 ms | 16.86 ms | 5.26 ms | 66 ms |


---

<p align="center">Generated 2021-09-02T00:47:04.729Z</p>
