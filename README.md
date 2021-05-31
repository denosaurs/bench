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
| fastify | 36440.81 | 364389 |
| deno | 30329.6 | 303301 |
| node | 25991.6 | 259912 |
| deno_canary | 23848 | 238475 |
| http | 23259.2 | 232578 |
| alosaur | 19695.64 | 216652 |
| express | 16293 | 162922 |
| abc | 14892 | 148915 |
| drash | 14472.8 | 144724 |
| aqua | 12480.37 | 137280 |
| reno | 12088.8 | 120880 |
| oak | 11436.6 | 114363 |
| little_native | 11181.8 | 111817 |
| mandarinets | 10783.46 | 118619 |
| dinatra | 7722.37 | 84939 |
| opine | 5759.91 | 63353 |
| tinyhttp | 5297.1 | 52964 |
| little_std | 4041.4 | 40411 |
| servest | 3347.46 | 36815 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 10807 | 10807 | 15335   | 15487   | 14892   | 1363.94 | 10801 | 148915  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 1.43 MB | 1.44 MB | 1.39 MB | 127 kB  | 1 MB  | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.16 ms | 0.84 ms | 27 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 14575   | 14575   | 20271   | 20831   | 19695.64 | 1672.6 | 14571   | 216652  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 1.86 MB | 1.92 MB | 1.81 MB  | 154 kB | 1.34 MB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.82 ms | 32 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8903   | 8903   | 12983  | 13351   | 12480.37 | 1276.57 | 8900   | 137280  |
| **Bytes/Sec** | 819 kB | 819 kB | 1.2 MB | 1.23 MB | 1.15 MB  | 117 kB  | 819 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.62 ms | 1.3 ms | 68 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 24207   | 24207   | 30415   | 32767   | 30329.6 | 2691.32 | 24203   | 303301 |
| **Bytes/Sec** | 2.15 MB | 2.15 MB | 2.71 MB | 2.92 MB | 2.7 MB  | 240 kB  | 2.15 MB | 27 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.13 ms | 0.58 ms | 21 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17375   | 17375   | 24415   | 25615   | 23848   | 2267.92 | 17375   | 238475  |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 2.17 MB | 2.28 MB | 2.12 MB | 201 kB  | 1.55 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 0.72 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5231   | 5231   | 8059   | 8175   | 7722.37 | 821.49  | 5229   | 84939   |
| **Bytes/Sec** | 272 kB | 272 kB | 419 kB | 425 kB | 402 kB  | 42.7 kB | 272 kB | 4.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.64 ms | 1.64 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10415  | 10415  | 14951   | 15015   | 14472.8 | 1357.24 | 10412  | 144724  |
| **Bytes/Sec** | 895 kB | 895 kB | 1.29 MB | 1.29 MB | 1.24 MB | 117 kB  | 895 kB | 12.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.18 ms | 0.89 ms | 67 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7271    | 7271    | 17375   | 17807   | 16293   | 3052.41 | 7271    | 162922  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.75 MB | 3.85 MB | 3.52 MB | 659 kB  | 1.57 MB | 35.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 1.14 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 21711   | 21711   | 38111   | 39647  | 36440.81 | 5060.3 | 21702   | 364389  |
| **Bytes/Sec** | 3.34 MB | 3.34 MB | 5.87 MB | 6.1 MB | 5.61 MB  | 779 kB | 3.34 MB | 56.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.59 ms | 0.81 ms | 20 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17903  | 17903  | 23807   | 24271   | 23259.2 | 1798.26 | 17895  | 232578  |
| **Bytes/Sec** | 931 kB | 931 kB | 1.24 MB | 1.26 MB | 1.21 MB | 93.5 kB | 931 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.63 ms | 37 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7455   | 7455   | 11567   | 11799   | 11181.8 | 1252.61 | 7455   | 111817  |
| **Bytes/Sec** | 962 kB | 962 kB | 1.49 MB | 1.52 MB | 1.44 MB | 162 kB  | 962 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.16 ms | 0.96 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2301   | 2301   | 4227   | 4479   | 4041.4 | 617.45  | 2300   | 40411   |
| **Bytes/Sec** | 212 kB | 212 kB | 389 kB | 412 kB | 372 kB | 56.8 kB | 212 kB | 3.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 18 ms | 9.39 ms | 2.99 ms | 49 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 6715   | 6715   | 11239   | 11311   | 10783.46 | 1291.43 | 6713   | 118619 |
| **Bytes/Sec** | 625 kB | 625 kB | 1.05 MB | 1.05 MB | 1 MB     | 120 kB  | 624 kB | 11 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.23 ms | 1.19 ms | 71 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15367   | 15367   | 26943   | 28159   | 25991.6 | 3675.43 | 15363   | 259912  |
| **Bytes/Sec** | 1.72 MB | 1.72 MB | 3.02 MB | 3.15 MB | 2.91 MB | 412 kB  | 1.72 MB | 29.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.81 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7843    | 7843    | 11855   | 12471   | 11436.6 | 1249.77 | 7841    | 114363  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.54 MB | 1.62 MB | 1.49 MB | 163 kB  | 1.02 MB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.07 ms | 1.13 ms | 31 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3719   | 3719   | 6003   | 6071   | 5759.91 | 651.94 | 3719   | 63353   |
| **Bytes/Sec** | 573 kB | 573 kB | 924 kB | 935 kB | 887 kB  | 100 kB | 573 kB | 9.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 6.46 ms | 1.95 ms | 110 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9151   | 9151   | 12279  | 13239   | 12088.8 | 1102.99 | 9145   | 120880  |
| **Bytes/Sec** | 714 kB | 714 kB | 958 kB | 1.03 MB | 943 kB  | 86 kB   | 713 kB | 9.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.74 ms | 1.43 ms | 66 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2501   | 2501   | 3127   | 4823   | 3347.46 | 617.38  | 2501   | 36815   |
| **Bytes/Sec** | 288 kB | 288 kB | 360 kB | 554 kB | 385 kB  | 70.9 kB | 288 kB | 4.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.46 ms | 17.67 ms | 76 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3641   | 3641   | 5519   | 5751   | 5297.1 | 590.98  | 3640   | 52964   |
| **Bytes/Sec** | 484 kB | 484 kB | 734 kB | 765 kB | 704 kB | 78.6 kB | 484 kB | 7.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 7.04 ms | 2.33 ms | 56 ms |


---

<p align="center">Generated 2021-05-31T01:59:38.779Z</p>
