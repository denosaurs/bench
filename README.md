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
| deno_canary | 36797.6 | 367973 |
| deno | 30522.8 | 305193 |
| alosaur | 29185.6 | 291826 |
| oak | 25169.6 | 251719 |
| aqua | 21976 | 241762 |
| node | 21341.2 | 213385 |
| reno | 21139.2 | 211389 |
| fastify | 20191.64 | 222123 |
| express | 14090.91 | 154995 |
| little_native | 13561.4 | 135615 |
| little_std | 11853.82 | 130388 |
| abc | 9061 | 90597 |
| opine | 7890.55 | 86795 |
| tinyhttp | 5165.73 | 56818 |
| dinatra | 4974.5 | 49741 |
| servest | 3289.2 | 32886 |
| drash | 1238.41 | 12384 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6775   | 6775   | 9327   | 9647   | 9061   | 794.75  | 6773   | 90597   |
| **Bytes/Sec** | 630 kB | 630 kB | 867 kB | 897 kB | 842 kB | 73.8 kB | 630 kB | 8.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 3.93 ms | 1.6 ms | 78 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 12511   | 12511   | 33631   | 34015   | 29185.6 | 7601.61 | 12504   | 291826 |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 2.99 MB | 3.03 MB | 2.6 MB  | 677 kB  | 1.11 MB | 26 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.19 ms | 0.74 ms | 41 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13799   | 13799   | 24383   | 24495   | 21976   | 4151.26 | 13796   | 241762  |
| **Bytes/Sec** | 1.78 MB | 1.78 MB | 3.15 MB | 3.16 MB | 2.83 MB | 536 kB  | 1.78 MB | 31.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.81 ms | 29 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13711   | 13711   | 35167   | 35871   | 30522.8 | 7978.72 | 13705   | 305193  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 3.13 MB | 3.19 MB | 2.72 MB | 710 kB  | 1.22 MB | 27.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.52 ms | 0.95 ms | 29 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16623   | 16623   | 41567  | 42015   | 36797.6 | 7795.71 | 16616   | 367973  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.7 MB | 3.74 MB | 3.27 MB | 694 kB  | 1.48 MB | 32.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.36 ms | 0.72 ms | 24 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%  | Avg    | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------ | ------ | ------- | ------- | ------- |
| **Req/Sec**   | 1878    | 1878    | 5755   | 5991   | 4974.5 | 1465.99 | 1878    | 49741   |
| **Bytes/Sec** | 97.7 kB | 97.7 kB | 299 kB | 312 kB | 259 kB | 76.2 kB | 97.7 kB | 2.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 21 ms | 7.55 ms | 4.41 ms | 69 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1128   | 1128   | 1250   | 1269   | 1238.41 | 38.18   | 1128   | 12384   |
| **Bytes/Sec** | 471 kB | 471 kB | 521 kB | 529 kB | 516 kB  | 15.9 kB | 470 kB | 5.16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 21 ms | 32 ms | 36 ms | 31.78 ms | 7.38 ms | 274 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev  | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 6919   | 6919   | 16311   | 16655  | 14090.91 | 3615.2 | 6919    | 154995  |
| **Bytes/Sec** | 1.5 MB | 1.5 MB | 3.52 MB | 3.6 MB | 3.04 MB  | 781 kB | 1.49 MB | 33.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.4 ms | 1.46 ms | 26 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 9631    | 9631    | 21615   | 22271   | 20191.64 | 3449.91 | 9630    | 222123  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.33 MB | 3.43 MB | 3.11 MB  | 531 kB  | 1.48 MB | 34.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.45 ms | 1.18 ms | 37 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7003   | 7003   | 14759  | 15239   | 13561.4 | 2571.33 | 7002   | 135615  |
| **Bytes/Sec** | 904 kB | 904 kB | 1.9 MB | 1.97 MB | 1.75 MB | 332 kB  | 903 kB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.35 ms | 1.1 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 6491   | 6491   | 13535   | 13703   | 11853.82 | 2715   | 6491   | 130388  |
| **Bytes/Sec** | 838 kB | 838 kB | 1.75 MB | 1.77 MB | 1.53 MB  | 350 kB | 837 kB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.68 ms | 1.42 ms | 24 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 10671  | 10671  | 22559   | 23711   | 21341.2 | 3653.1 | 10668   | 213385  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 2.53 MB | 2.65 MB | 2.39 MB | 409 kB | 1.19 MB | 23.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.4 ms | 1.19 ms | 30 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16639   | 16639   | 28271   | 28895   | 25169.6 | 5121.29 | 16632   | 251719  |
| **Bytes/Sec** | 2.16 MB | 2.16 MB | 3.68 MB | 3.76 MB | 3.27 MB | 666 kB  | 2.16 MB | 32.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.76 ms | 44 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 5471    | 5471    | 8191    | 8255    | 7890.55 | 775.62 | 5470    | 86795   |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.56 MB | 1.58 MB | 1.51 MB | 148 kB | 1.04 MB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 5 ms  | 7 ms  | 4.63 ms | 1.56 ms | 68 ms |


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
| **Req/Sec**   | 12031   | 12031   | 22047   | 26463   | 21139.2 | 5256.16 | 12024   | 211389  |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 2.84 MB | 3.41 MB | 2.73 MB | 678 kB  | 1.55 MB | 27.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.12 ms | 24 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2483   | 2483   | 3245   | 3831   | 3289.2 | 361.03  | 2482   | 32886   |
| **Bytes/Sec** | 285 kB | 285 kB | 373 kB | 441 kB | 378 kB | 41.5 kB | 285 kB | 3.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 11.64 ms | 17.75 ms | 88 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3863   | 3863   | 5347   | 5503   | 5165.73 | 432.02  | 3862   | 56818   |
| **Bytes/Sec** | 607 kB | 607 kB | 839 kB | 864 kB | 811 kB  | 67.8 kB | 606 kB | 8.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 7 ms  | 15 ms | 7.25 ms | 2.72 ms | 108 ms |


---

<p align="center">Generated 2022-01-31T00:51:28.392Z</p>
