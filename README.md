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
| fastify | 42162.19 | 463795 |
| node | 41420.37 | 455584 |
| deno | 36429.82 | 400682 |
| deno_canary | 20325.2 | 203236 |
| express | 14829.4 | 148288 |
| drash | 13999.2 | 139999 |
| abc | 12912 | 129103 |
| http | 12075.8 | 120749 |
| alosaur | 11865 | 118635 |
| aqua | 11729.8 | 117291 |
| oak | 11569 | 115689 |
| little_native | 9904.6 | 99048 |
| reno | 8097.4 | 80971 |
| mandarinets | 7897.2 | 78971 |
| dinatra | 5883.2 | 58829 |
| opine | 5786.1 | 57853 |
| servest | 4841.8 | 48413 |
| tinyhttp | 3646 | 36454 |
| little_std | 3049.6 | 30490 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 9839   | 9839   | 13303   | 13399   | 12912  | 1046.64 | 9834   | 129103 |
| **Bytes/Sec** | 915 kB | 915 kB | 1.24 MB | 1.25 MB | 1.2 MB | 97.4 kB | 915 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.33 ms | 1.05 ms | 25 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7295   | 7295   | 12359   | 12543   | 11865   | 1532.34 | 7292   | 118635  |
| **Bytes/Sec** | 671 kB | 671 kB | 1.14 MB | 1.15 MB | 1.09 MB | 141 kB  | 671 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.07 ms | 1.47 ms | 60 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7887   | 7887   | 12111   | 12359   | 11729.8 | 1300.58 | 7884   | 117291  |
| **Bytes/Sec** | 726 kB | 726 kB | 1.11 MB | 1.14 MB | 1.08 MB | 120 kB  | 725 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.11 ms | 1.2 ms | 74 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 26655   | 26655   | 37759   | 38463   | 36429.82 | 3348.06 | 26650   | 400682  |
| **Bytes/Sec** | 2.37 MB | 2.37 MB | 3.36 MB | 3.42 MB | 3.24 MB  | 297 kB  | 2.37 MB | 35.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.68 ms | 0.81 ms | 23 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13423  | 13423  | 21199   | 21887   | 20325.2 | 2392.08 | 13422   | 203236  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.89 MB | 1.95 MB | 1.81 MB | 213 kB  | 1.19 MB | 18.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.47 ms | 1.2 ms | 28 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4419   | 4419   | 6027   | 6219   | 5883.2 | 500.9   | 4417   | 58829   |
| **Bytes/Sec** | 230 kB | 230 kB | 314 kB | 324 kB | 306 kB | 26.1 kB | 230 kB | 3.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 6.31 ms | 1.81 ms | 45 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 10511  | 10511  | 14399   | 14615   | 13999.2 | 1183.84 | 10511  | 139999 |
| **Bytes/Sec** | 904 kB | 904 kB | 1.24 MB | 1.26 MB | 1.2 MB  | 102 kB  | 904 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.23 ms | 0.96 ms | 38 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 5883    | 5883    | 15719  | 16511   | 14829.4 | 3050.45 | 5881    | 148288 |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 3.4 MB | 3.57 MB | 3.2 MB  | 659 kB  | 1.27 MB | 32 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.21 ms | 1.37 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 24463   | 24463   | 44319   | 44895   | 42162.19 | 5738.06 | 24451   | 463795  |
| **Bytes/Sec** | 3.77 MB | 3.77 MB | 6.83 MB | 6.91 MB | 6.49 MB  | 884 kB  | 3.77 MB | 71.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.26 ms | 0.73 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8011   | 8011   | 12471  | 12895  | 12075.8 | 1386.46 | 8010   | 120749  |
| **Bytes/Sec** | 417 kB | 417 kB | 649 kB | 671 kB | 628 kB  | 72 kB   | 417 kB | 6.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.77 ms | 1.45 ms | 63 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6355   | 6355   | 10375   | 10463   | 9904.6  | 1197.64 | 6352   | 99048   |
| **Bytes/Sec** | 820 kB | 820 kB | 1.34 MB | 1.35 MB | 1.28 MB | 155 kB  | 819 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.33 ms | 1.31 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1967   | 1967   | 3145   | 3621   | 3049.6 | 431.14  | 1967   | 30490   |
| **Bytes/Sec** | 181 kB | 181 kB | 290 kB | 333 kB | 280 kB | 39.6 kB | 181 kB | 2.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------ | ----- |
| **Latency** | 9 ms  | 12 ms | 23 ms | 12.62 ms | 3.5 ms | 50 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4467   | 4467   | 8271   | 8511   | 7897.2 | 1166.03 | 4466   | 78971   |
| **Bytes/Sec** | 415 kB | 415 kB | 769 kB | 792 kB | 735 kB | 108 kB  | 415 kB | 7.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.5 ms | 1.7 ms | 34 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 26031   | 26031   | 43231   | 43839   | 41420.37 | 4959.28 | 26016   | 455584 |
| **Bytes/Sec** | 2.91 MB | 2.91 MB | 4.84 MB | 4.91 MB | 4.64 MB  | 556 kB  | 2.91 MB | 51 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.26 ms | 0.72 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 8143    | 8143    | 11927   | 12655   | 11569  | 1232.5 | 8142    | 115689 |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.55 MB | 1.65 MB | 1.5 MB | 160 kB | 1.06 MB | 15 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.99 ms | 1.38 ms | 66 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3735   | 3735   | 5923   | 6267   | 5786.1 | 701.13 | 3734   | 57853   |
| **Bytes/Sec** | 575 kB | 575 kB | 912 kB | 965 kB | 891 kB | 108 kB | 575 kB | 8.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.41 ms | 2.18 ms | 131 ms |


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
| **Req/Sec**   | 4851   | 4851   | 8471   | 8623   | 8097.4 | 1088.78 | 4850   | 80971   |
| **Bytes/Sec** | 378 kB | 378 kB | 660 kB | 673 kB | 632 kB | 84.9 kB | 378 kB | 6.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.45 ms | 2.63 ms | 173 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2967   | 2967   | 5179   | 5803   | 4841.8 | 869.37 | 2966   | 48413   |
| **Bytes/Sec** | 341 kB | 341 kB | 596 kB | 668 kB | 557 kB | 100 kB | 341 kB | 5.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 7.76 ms | 15.38 ms | 75 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2943   | 2943   | 3721   | 3769   | 3646   | 239.91  | 2943   | 36454   |
| **Bytes/Sec** | 462 kB | 462 kB | 584 kB | 592 kB | 572 kB | 37.6 kB | 462 kB | 5.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 9 ms  | 20 ms | 10.31 ms | 2.64 ms | 37 ms |


---

<p align="center">Generated 2021-07-18T00:48:36.312Z</p>
