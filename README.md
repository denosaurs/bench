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
| deno_canary | 43159.28 | 474790 |
| deno | 34556 | 345564 |
| node | 31351.2 | 313476 |
| oak | 16648 | 166487 |
| http | 16444.41 | 164443 |
| express | 14233.4 | 142329 |
| aqua | 13710.4 | 137110 |
| fastify | 12342.6 | 123416 |
| abc | 10238.21 | 102373 |
| alosaur | 10044.21 | 100434 |
| little_native | 9452.5 | 94532 |
| dinatra | 8767.1 | 87677 |
| reno | 8605.9 | 86055 |
| drash | 7208.3 | 72077 |
| opine | 6023.9 | 60241 |
| mandarinets | 5503.1 | 60528 |
| little_std | 4081.7 | 40813 |
| servest | 2801.4 | 28009 |
| tinyhttp | 2352.81 | 23520 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6859   | 6859   | 10639  | 10815   | 10238.21 | 1133.02 | 6856   | 102373  |
| **Bytes/Sec** | 638 kB | 638 kB | 989 kB | 1.01 MB | 952 kB   | 105 kB  | 638 kB | 9.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.33 ms | 1.27 ms | 27 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6911   | 6911   | 8791   | 12295   | 10044.21 | 1986.09 | 6909   | 100434  |
| **Bytes/Sec** | 636 kB | 636 kB | 808 kB | 1.13 MB | 924 kB   | 183 kB  | 636 kB | 9.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.6 ms | 1.89 ms | 100 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9687   | 9687   | 14167  | 14367   | 13710.4 | 1351.61 | 9686   | 137110  |
| **Bytes/Sec** | 891 kB | 891 kB | 1.3 MB | 1.32 MB | 1.26 MB | 124 kB  | 891 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.26 ms | 1.07 ms | 67 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18479   | 18479   | 38591   | 40639   | 34556   | 7938.47 | 18476   | 345564  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 3.43 MB | 3.62 MB | 3.08 MB | 707 kB  | 1.64 MB | 30.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.61 ms | 0.91 ms | 23 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev    | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | -------- | ------- | ------- |
| **Req/Sec**   | 22815   | 22815   | 49759   | 52159   | 43159.28 | 10720.09 | 22813   | 474790  |
| **Bytes/Sec** | 2.03 MB | 2.03 MB | 4.43 MB | 4.64 MB | 3.84 MB  | 954 kB   | 2.03 MB | 42.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.23 ms | 0.66 ms | 20 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2721   | 2721   | 9487   | 9983   | 8767.1 | 2122.07 | 2721   | 87677   |
| **Bytes/Sec** | 142 kB | 142 kB | 494 kB | 519 kB | 456 kB | 110 kB  | 141 kB | 4.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 12 ms | 4.06 ms | 2.45 ms | 50 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3015   | 3015   | 8091   | 8471   | 7208.3 | 1813.68 | 3014   | 72077  |
| **Bytes/Sec** | 259 kB | 259 kB | 696 kB | 729 kB | 620 kB | 156 kB  | 259 kB | 6.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.95 ms | 2.83 ms | 46 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7311    | 7311    | 15911   | 17327   | 14233.4 | 3963.79 | 7311    | 142329  |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 3.44 MB | 3.74 MB | 3.07 MB | 856 kB  | 1.58 MB | 30.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.43 ms | 1.35 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 7519    | 7519    | 8255    | 18815  | 12342.6 | 4911.79 | 7516    | 123416 |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.27 MB | 2.9 MB | 1.9 MB  | 756 kB  | 1.16 MB | 19 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 8 ms  | 2.74 ms | 2.28 ms | 44 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 12215  | 12215  | 16895  | 17023  | 16444.41 | 1411.84 | 12209  | 164443  |
| **Bytes/Sec** | 635 kB | 635 kB | 879 kB | 885 kB | 855 kB   | 73.5 kB | 635 kB | 8.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.13 ms | 0.8 ms | 23 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3585   | 3585   | 10231   | 10495   | 9452.5  | 1990.62 | 3585   | 94532   |
| **Bytes/Sec** | 463 kB | 463 kB | 1.32 MB | 1.35 MB | 1.22 MB | 257 kB  | 462 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.59 ms | 2.12 ms | 40 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2347   | 2347   | 4335   | 4479   | 4081.7 | 619.51 | 2347   | 40813   |
| **Bytes/Sec** | 216 kB | 216 kB | 399 kB | 412 kB | 375 kB | 57 kB  | 216 kB | 3.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 6 ms  | 8 ms  | 17 ms | 9.26 ms | 2.9 ms | 55 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3403   | 3403   | 5987   | 6299   | 5503.1 | 968.78 | 3403   | 60528   |
| **Bytes/Sec** | 317 kB | 317 kB | 557 kB | 586 kB | 512 kB | 90 kB  | 316 kB | 5.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.8 ms | 2.28 ms | 39 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16479   | 16479   | 34207   | 36927   | 31351.2 | 7197.83 | 16465   | 313476  |
| **Bytes/Sec** | 1.84 MB | 1.84 MB | 3.83 MB | 4.13 MB | 3.51 MB | 806 kB  | 1.84 MB | 35.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.76 ms | 1.09 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10383   | 10383   | 17503   | 17711  | 16648   | 2139.15 | 10379   | 166487  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.28 MB | 2.3 MB | 2.16 MB | 278 kB  | 1.35 MB | 21.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.12 ms | 1.07 ms | 43 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3729   | 3729   | 5783   | 7359    | 6023.9 | 1028.8 | 3729   | 60241   |
| **Bytes/Sec** | 574 kB | 574 kB | 891 kB | 1.13 MB | 928 kB | 158 kB | 574 kB | 9.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.16 ms | 1.96 ms | 41 ms |


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
| **Req/Sec**   | 3727   | 3727   | 9127   | 9511   | 8605.9 | 1643.13 | 3726   | 86055   |
| **Bytes/Sec** | 291 kB | 291 kB | 712 kB | 742 kB | 671 kB | 128 kB  | 291 kB | 6.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.22 ms | 2.8 ms | 189 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1176   | 1176   | 2817   | 4303   | 2801.4 | 867.5   | 1176   | 28009   |
| **Bytes/Sec** | 135 kB | 135 kB | 324 kB | 495 kB | 322 kB | 99.7 kB | 135 kB | 3.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 51 ms | 13.76 ms | 18.79 ms | 75 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1360   | 1360   | 2521   | 2681   | 2352.81 | 397.81  | 1360   | 23520   |
| **Bytes/Sec** | 214 kB | 214 kB | 396 kB | 421 kB | 369 kB  | 62.4 kB | 214 kB | 3.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 12 ms | 14 ms | 39 ms | 16.54 ms | 6.91 ms | 59 ms |


---

<p align="center">Generated 2021-07-23T00:47:54.343Z</p>
