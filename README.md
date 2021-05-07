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
| fastify | 39346.19 | 432815 |
| node | 36388 | 363861 |
| deno_canary | 29449.6 | 294507 |
| http | 25362.19 | 278945 |
| deno | 23734.4 | 237335 |
| alosaur | 16441.2 | 164415 |
| abc | 13286.4 | 132859 |
| drash | 12381 | 123792 |
| dinatra | 12202.4 | 122033 |
| aqua | 11045.64 | 121499 |
| oak | 10044.6 | 100424 |
| reno | 8310.6 | 83108 |
| little_native | 8021.64 | 88244 |
| express | 7766.6 | 77661 |
| mandarinets | 7427.1 | 74265 |
| opine | 6196.4 | 61949 |
| tinyhttp | 5929.3 | 59291 |
| little_std | 5472.7 | 54719 |
| servest | 3975.7 | 39751 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8591   | 8591   | 13967  | 14183   | 13286.4 | 1635.71 | 8585   | 132859  |
| **Bytes/Sec** | 799 kB | 799 kB | 1.3 MB | 1.32 MB | 1.24 MB | 152 kB  | 798 kB | 12.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.36 ms | 1.13 ms | 36 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8719   | 8719   | 18415   | 20111   | 16441.2 | 3893.08 | 8713   | 164415  |
| **Bytes/Sec** | 802 kB | 802 kB | 1.69 MB | 1.85 MB | 1.51 MB | 358 kB  | 802 kB | 15.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.87 ms | 1.51 ms | 59 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7871   | 7871   | 11231   | 11879   | 11045.64 | 1033.21 | 7870   | 121499  |
| **Bytes/Sec** | 724 kB | 724 kB | 1.03 MB | 1.09 MB | 1.02 MB  | 95 kB   | 724 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.19 ms | 1.3 ms | 82 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17247   | 17247   | 24399   | 24895   | 23734.4 | 2176.47 | 17235   | 237335  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 2.17 MB | 2.22 MB | 2.11 MB | 194 kB  | 1.53 MB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.74 ms | 25 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21535   | 21535   | 30175   | 31695   | 29449.6 | 2717.01 | 21535   | 294507  |
| **Bytes/Sec** | 1.92 MB | 1.92 MB | 2.68 MB | 2.82 MB | 2.62 MB | 242 kB  | 1.92 MB | 26.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.03 ms | 0.75 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8831   | 8831   | 12527  | 12855  | 12202.4 | 1143.68 | 8829   | 122033  |
| **Bytes/Sec** | 459 kB | 459 kB | 652 kB | 669 kB | 635 kB  | 59.5 kB | 459 kB | 6.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.87 ms | 1.24 ms | 38 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8023   | 8023   | 12815  | 13103   | 12381   | 1458.75 | 8020   | 123792  |
| **Bytes/Sec** | 690 kB | 690 kB | 1.1 MB | 1.13 MB | 1.06 MB | 125 kB  | 690 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.8 ms | 1.1 ms | 44 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4111   | 4111   | 8059    | 8895    | 7766.6  | 1368.76 | 4108   | 77661   |
| **Bytes/Sec** | 888 kB | 888 kB | 1.74 MB | 1.92 MB | 1.68 MB | 296 kB  | 887 kB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.74 ms | 1.91 ms | 47 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 24303   | 24303   | 40895  | 41791   | 39346.19 | 4807.18 | 24296   | 432815  |
| **Bytes/Sec** | 3.74 MB | 3.74 MB | 6.3 MB | 6.44 MB | 6.06 MB  | 741 kB  | 3.74 MB | 66.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.27 ms | 0.67 ms | 19 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg      | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | -------- | ------- | ----- | ------- |
| **Req/Sec**   | 19311 | 19311 | 25999   | 26335   | 25362.19 | 1930.98 | 19305 | 278945  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 1.35 MB | 1.37 MB | 1.32 MB  | 100 kB  | 1 MB  | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.1 ms | 0.52 ms | 19 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5295   | 5295   | 8263    | 8527   | 8021.64 | 871.9  | 5294   | 88244   |
| **Bytes/Sec** | 683 kB | 683 kB | 1.07 MB | 1.1 MB | 1.03 MB | 112 kB | 683 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.4 ms | 1.28 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3333   | 3333   | 5779   | 5859   | 5472.7 | 740.29  | 3332   | 54719   |
| **Bytes/Sec** | 307 kB | 307 kB | 532 kB | 539 kB | 503 kB | 68.1 kB | 307 kB | 5.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 6 ms  | 6 ms  | 12 ms | 6.68 ms | 1.9 ms | 34 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3999   | 3999   | 7711   | 8207   | 7427.1 | 1208.84 | 3998   | 74265   |
| **Bytes/Sec** | 372 kB | 372 kB | 717 kB | 763 kB | 691 kB | 112 kB  | 372 kB | 6.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 4.87 ms | 2.26 ms | 131 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21151   | 21151   | 38015   | 38399  | 36388   | 5089.25 | 21139   | 363861  |
| **Bytes/Sec** | 2.37 MB | 2.37 MB | 4.26 MB | 4.3 MB | 4.08 MB | 570 kB  | 2.37 MB | 40.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.67 ms | 0.75 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6691   | 6691   | 10383   | 10583   | 10044.6 | 1123.13 | 6688   | 100424  |
| **Bytes/Sec** | 870 kB | 870 kB | 1.35 MB | 1.38 MB | 1.31 MB | 146 kB  | 869 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.45 ms | 1.48 ms | 85 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4491   | 4491   | 6303   | 6555    | 6196.4 | 578.71  | 4491   | 61949   |
| **Bytes/Sec** | 692 kB | 692 kB | 970 kB | 1.01 MB | 954 kB | 89.1 kB | 692 kB | 9.54 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 9 ms  | 5.98 ms | 1.93 ms | 129 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 5479   | 5479   | 8527   | 8919   | 8310.6 | 961.99 | 5478   | 83108   |
| **Bytes/Sec** | 428 kB | 428 kB | 665 kB | 696 kB | 648 kB | 75 kB  | 427 kB | 6.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.41 ms | 1.69 ms | 79 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2831   | 2831   | 3927   | 5279   | 3975.7 | 745.57  | 2831   | 39751   |
| **Bytes/Sec** | 326 kB | 326 kB | 452 kB | 607 kB | 457 kB | 85.7 kB | 326 kB | 4.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | ------- | -------- | ------ |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 9.57 ms | 16.68 ms | 112 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3975   | 3975   | 6195   | 6287   | 5929.3 | 674.34  | 3975   | 59291   |
| **Bytes/Sec** | 529 kB | 529 kB | 824 kB | 837 kB | 789 kB | 89.7 kB | 529 kB | 7.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 11 ms | 6.26 ms | 2.32 ms | 90 ms |


---

<p align="center">Generated 2021-05-07T00:44:30.285Z</p>
