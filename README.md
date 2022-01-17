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
| deno_canary | 42056.8 | 420565 |
| deno | 38978.4 | 389755 |
| fastify | 32829.6 | 328320 |
| node | 32143.6 | 321441 |
| reno | 30059.2 | 300610 |
| oak | 26627.2 | 266263 |
| alosaur | 20593.2 | 205923 |
| aqua | 17719.6 | 177181 |
| abc | 13948.73 | 153430 |
| little_native | 13770.37 | 151473 |
| little_std | 11572.73 | 127301 |
| dinatra | 9616.6 | 96163 |
| express | 7795.3 | 77943 |
| opine | 6283.2 | 62823 |
| tinyhttp | 5711.6 | 57111 |
| servest | 2984.6 | 29842 |
| drash | 1126.91 | 11269 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10479  | 10479  | 14319   | 14423   | 13948.73 | 1103.26 | 10474  | 153430  |
| **Bytes/Sec** | 974 kB | 974 kB | 1.33 MB | 1.34 MB | 1.3 MB   | 103 kB  | 974 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.22 ms | 1 ms  | 68 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10719  | 10719  | 23663   | 25439   | 20593.2 | 5695.33 | 10712  | 205923  |
| **Bytes/Sec** | 954 kB | 954 kB | 2.11 MB | 2.27 MB | 1.83 MB | 507 kB  | 953 kB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.39 ms | 1.26 ms | 43 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9983    | 9983    | 19391  | 20543   | 17719.6 | 3445.08 | 9976    | 177181  |
| **Bytes/Sec** | 1.29 MB | 1.29 MB | 2.5 MB | 2.65 MB | 2.29 MB | 445 kB  | 1.29 MB | 22.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.72 ms | 1.04 ms | 25 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 17839   | 17839   | 42463   | 46399   | 38978.4 | 7897.3 | 17838   | 389755  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 3.78 MB | 4.13 MB | 3.47 MB | 703 kB | 1.59 MB | 34.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.32 ms | 0.7 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23407   | 23407   | 44159   | 49055   | 42056.8 | 8417.56 | 23406   | 420565  |
| **Bytes/Sec** | 2.08 MB | 2.08 MB | 3.93 MB | 4.37 MB | 3.74 MB | 749 kB  | 2.08 MB | 37.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.24 ms | 0.63 ms | 16 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------ | ----- | ------ | ----- |
| **Req/Sec**   | 7635   | 7635   | 9767   | 10015  | 9616.6 | 672.4 | 7632   | 96163 |
| **Bytes/Sec** | 397 kB | 397 kB | 508 kB | 520 kB | 500 kB | 35 kB | 397 kB | 5 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.42 ms | 1.72 ms | 36 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 1036   | 1036   | 1121   | 1180   | 1126.91 | 38.07   | 1036   | 11269  |
| **Bytes/Sec** | 432 kB | 432 kB | 468 kB | 492 kB | 470 kB  | 15.9 kB | 432 kB | 4.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 24 ms | 35 ms | 41 ms | 34.94 ms | 5.38 ms | 210 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3639   | 3639   | 8215    | 8935    | 7795.3  | 1510.71 | 3638   | 77943   |
| **Bytes/Sec** | 786 kB | 786 kB | 1.77 MB | 1.93 MB | 1.68 MB | 326 kB  | 786 kB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 11 ms | 4.66 ms | 2.37 ms | 47 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21119   | 21119   | 37375   | 38367   | 32829.6 | 7153.36 | 21106   | 328320  |
| **Bytes/Sec** | 3.25 MB | 3.25 MB | 5.75 MB | 5.91 MB | 5.06 MB | 1.1 MB  | 3.25 MB | 50.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.48 ms | 0.93 ms | 25 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5% | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ----- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 7139   | 7139   | 15159   | 15487 | 13770.37 | 2596.9 | 7137   | 151473  |
| **Bytes/Sec** | 921 kB | 921 kB | 1.96 MB | 2 MB  | 1.78 MB  | 335 kB | 921 kB | 19.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.32 ms | 1.04 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 5731   | 5731   | 13103   | 13359   | 11572.73 | 2683.15 | 5728   | 127301  |
| **Bytes/Sec** | 739 kB | 739 kB | 1.69 MB | 1.72 MB | 1.49 MB  | 346 kB  | 739 kB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 7 ms  | 2.99 ms | 1.49 ms | 25 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 15999   | 15999   | 37535   | 38143   | 32143.6 | 8770.69 | 15998   | 321441 |
| **Bytes/Sec** | 1.79 MB | 1.79 MB | 4.21 MB | 4.27 MB | 3.6 MB  | 982 kB  | 1.79 MB | 36 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.6 ms | 0.95 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18143   | 18143   | 28527   | 31151   | 26627.2 | 4925.31 | 18143   | 266263  |
| **Bytes/Sec** | 2.36 MB | 2.36 MB | 3.71 MB | 4.05 MB | 3.46 MB | 640 kB  | 2.36 MB | 34.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1 ms  | 0.79 ms | 42 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------ | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 4199   | 4199   | 6491    | 6823   | 6283.2 | 714    | 4196   | 62823 |
| **Bytes/Sec** | 802 kB | 802 kB | 1.24 MB | 1.3 MB | 1.2 MB | 136 kB | 801 kB | 12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 10 ms | 5.87 ms | 1.94 ms | 46 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 24095   | 24095   | 31407   | 31503   | 30059.2 | 2646.76 | 24080   | 300610  |
| **Bytes/Sec** | 3.11 MB | 3.11 MB | 4.05 MB | 4.07 MB | 3.88 MB | 342 kB  | 3.11 MB | 38.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.06 ms | 0.45 ms | 19 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2317   | 2317   | 3079   | 3587   | 2984.6 | 407.72  | 2317   | 29842   |
| **Bytes/Sec** | 266 kB | 266 kB | 354 kB | 413 kB | 343 kB | 46.9 kB | 266 kB | 3.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.91 ms | 18.32 ms | 90 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4355   | 4355   | 5843   | 5975   | 5711.6 | 456.18  | 4352   | 57111   |
| **Bytes/Sec** | 684 kB | 684 kB | 917 kB | 938 kB | 897 kB | 71.7 kB | 683 kB | 8.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 14 ms | 6.49 ms | 2.54 ms | 92 ms |


---

<p align="center">Generated 2022-01-17T00:56:35.453Z</p>
