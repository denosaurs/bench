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
| alosaur | 41061.1 | 451698 |
| deno | 39075.2 | 390779 |
| node | 36218.19 | 398331 |
| fastify | 35216.81 | 352150 |
| drash | 31540.37 | 346905 |
| aqua | 26408 | 290503 |
| oak | 24869.46 | 273556 |
| reno | 24356.4 | 243575 |
| deno_canary | 19888.41 | 198884 |
| little_native | 14504.19 | 159550 |
| mandarinets | 13509.6 | 135100 |
| dinatra | 13478.91 | 148261 |
| abc | 13174.4 | 131751 |
| express | 11506.73 | 126565 |
| little_std | 9811.4 | 98103 |
| opine | 8642.6 | 86414 |
| tinyhttp | 4089.5 | 40893 |
| servest | 3581.5 | 35812 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8847   | 8847   | 13551   | 14271   | 13174.4 | 1472.94 | 8846   | 131751  |
| **Bytes/Sec** | 823 kB | 823 kB | 1.26 MB | 1.33 MB | 1.23 MB | 137 kB  | 823 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.46 ms | 1.64 ms | 125 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 30399  | 30399  | 42463   | 42783   | 41061.1 | 3445.62 | 30386  | 451698  |
| **Bytes/Sec** | 3.4 MB | 3.4 MB | 4.76 MB | 4.79 MB | 4.6 MB  | 386 kB  | 3.4 MB | 50.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.13 ms | 0.57 ms | 27 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19855   | 19855   | 27135   | 27279   | 26408   | 2080.62 | 19854   | 290503  |
| **Bytes/Sec** | 3.02 MB | 3.02 MB | 4.12 MB | 4.15 MB | 4.01 MB | 316 kB  | 3.02 MB | 44.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.06 ms | 0.5 ms | 23 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19247   | 19247   | 42335   | 42847  | 39075.2 | 7274.16 | 19246   | 390779  |
| **Bytes/Sec** | 2.16 MB | 2.16 MB | 4.74 MB | 4.8 MB | 4.38 MB | 815 kB  | 2.16 MB | 43.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.34 ms | 0.67 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 9143    | 9143    | 22591   | 23919   | 19888.41 | 5483.97 | 9140    | 198884  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 2.53 MB | 2.68 MB | 2.23 MB  | 614 kB  | 1.02 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.57 ms | 1.3 ms | 25 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10319  | 10319  | 13903  | 14135  | 13478.91 | 1071.11 | 10315  | 148261  |
| **Bytes/Sec** | 537 kB | 537 kB | 723 kB | 735 kB | 701 kB   | 55.7 kB | 536 kB | 7.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.36 ms | 1.3 ms | 22 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17087   | 17087   | 34367   | 34847   | 31540.37 | 5303.33 | 17078   | 346905  |
| **Bytes/Sec** | 2.36 MB | 2.36 MB | 4.74 MB | 4.81 MB | 4.35 MB  | 732 kB  | 2.36 MB | 47.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.06 ms | 0.6 ms | 36 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5339    | 5339    | 13175   | 14663   | 11506.73 | 3250.51 | 5337    | 126565  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 2.85 MB | 3.17 MB | 2.49 MB  | 702 kB  | 1.15 MB | 27.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.9 ms | 1.96 ms | 50 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22159   | 22159   | 39103   | 42079   | 35216.81 | 7399.13 | 22158   | 352150  |
| **Bytes/Sec** | 3.41 MB | 3.41 MB | 6.02 MB | 6.48 MB | 5.42 MB  | 1.14 MB | 3.41 MB | 54.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.51 ms | 0.85 ms | 30 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7079    | 7079    | 16223   | 16543   | 14504.19 | 2925.26 | 7079    | 159550  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 2.47 MB | 2.51 MB | 2.2 MB   | 445 kB  | 1.08 MB | 24.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.06 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7039    | 7039    | 10071   | 10527  | 9811.4  | 976.76 | 7038    | 98103   |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 1.53 MB | 1.6 MB | 1.49 MB | 149 kB | 1.07 MB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.52 ms | 1.15 ms | 26 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8879   | 8879   | 13959  | 14255   | 13509.6 | 1554.68 | 8873   | 135100  |
| **Bytes/Sec** | 825 kB | 825 kB | 1.3 MB | 1.33 MB | 1.26 MB | 145 kB  | 825 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.26 ms | 1.09 ms | 65 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18303   | 18303   | 40767   | 42687   | 36218.19 | 7699.67 | 18288   | 398331  |
| **Bytes/Sec** | 2.05 MB | 2.05 MB | 4.57 MB | 4.78 MB | 4.06 MB  | 863 kB  | 2.05 MB | 44.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.46 ms | 0.78 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 12719   | 12719   | 28079  | 28623   | 24869.46 | 5410.2 | 12719   | 273556  |
| **Bytes/Sec** | 1.95 MB | 1.95 MB | 4.3 MB | 4.38 MB | 3.81 MB  | 828 kB | 1.95 MB | 41.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 0.85 ms | 33 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 6263    | 6263    | 8911    | 9095    | 8642.6  | 801.86 | 6262    | 86414   |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 1.91 MB | 1.95 MB | 1.85 MB | 172 kB | 1.34 MB | 18.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 6 ms  | 4.07 ms | 1.39 ms | 45 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------ |
| **Req/Sec**   | 16215   | 16215   | 24735   | 26735   | 24356.4 | 2901.7 | 16210   | 243575 |
| **Bytes/Sec** | 2.47 MB | 2.47 MB | 3.76 MB | 4.07 MB | 3.7 MB  | 441 kB | 2.46 MB | 37 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.09 ms | 0.93 ms | 42 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2999   | 2999   | 3489   | 4127   | 3581.5 | 344.41  | 2999   | 35812   |
| **Bytes/Sec** | 345 kB | 345 kB | 401 kB | 475 kB | 412 kB | 39.6 kB | 345 kB | 4.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 10.69 ms | 17.29 ms | 64 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2987   | 2987   | 4203   | 4351   | 4089.5 | 382.65  | 2987   | 40893   |
| **Bytes/Sec** | 469 kB | 469 kB | 660 kB | 683 kB | 642 kB | 60.1 kB | 469 kB | 6.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 9 ms  | 18 ms | 9.28 ms | 3.51 ms | 139 ms |


---

<p align="center">Generated 2022-06-05T01:29:07.766Z</p>
