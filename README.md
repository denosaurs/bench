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
| deno_canary | 37904.81 | 379057 |
| alosaur | 34061.1 | 374677 |
| deno | 32624.4 | 326264 |
| reno | 25389.46 | 279287 |
| oak | 23768.37 | 261448 |
| fastify | 19128.41 | 191286 |
| aqua | 18306.55 | 201390 |
| node | 17567.6 | 175686 |
| abc | 14432.37 | 158761 |
| little_std | 11666 | 128315 |
| dinatra | 9732.21 | 97320 |
| opine | 9521 | 95202 |
| express | 8126 | 81259 |
| little_native | 6936.8 | 69362 |
| tinyhttp | 5204.3 | 52035 |
| servest | 3479.5 | 34790 |
| drash | 1217.1 | 12171 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11063   | 11063   | 14783   | 15111   | 14432.37 | 1089.65 | 11061   | 158761  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.38 MB | 1.41 MB | 1.34 MB  | 101 kB  | 1.03 MB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.19 ms | 1.04 ms | 65 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17327   | 17327   | 37983   | 38207  | 34061.1 | 7637.93 | 17323   | 374677  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 3.38 MB | 3.4 MB | 3.03 MB | 680 kB  | 1.54 MB | 33.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.73 ms | 0.73 ms | 31 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------ |
| **Req/Sec**   | 11135   | 11135   | 20559   | 20863   | 18306.55 | 3451.3 | 11134   | 201390 |
| **Bytes/Sec** | 1.44 MB | 1.44 MB | 2.65 MB | 2.69 MB | 2.36 MB  | 445 kB | 1.44 MB | 26 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.56 ms | 0.99 ms | 26 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 16119   | 16119   | 35839   | 39039   | 32624.4 | 7924.38 | 16115   | 326264 |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 3.19 MB | 3.48 MB | 2.9 MB  | 706 kB  | 1.43 MB | 29 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.56 ms | 0.87 ms | 22 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19423   | 19423   | 43071   | 43775  | 37904.81 | 8418.74 | 19412   | 379057  |
| **Bytes/Sec** | 1.73 MB | 1.73 MB | 3.83 MB | 3.9 MB | 3.37 MB  | 749 kB  | 1.73 MB | 33.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.47 ms | 0.74 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7647   | 7647   | 9959   | 10143  | 9732.21 | 701.79  | 7644   | 97320   |
| **Bytes/Sec** | 398 kB | 398 kB | 518 kB | 527 kB | 506 kB  | 36.5 kB | 397 kB | 5.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.38 ms | 1.6 ms | 34 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1092   | 1092   | 1233   | 1250   | 1217.1 | 44.74   | 1092   | 12171   |
| **Bytes/Sec** | 455 kB | 455 kB | 514 kB | 521 kB | 508 kB | 18.7 kB | 455 kB | 5.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------ | ------ |
| **Latency** | 22 ms | 33 ms | 37 ms | 32.35 ms | 7.5 ms | 278 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4391   | 4391   | 8311   | 10095   | 8126    | 1918.59 | 4390   | 81259   |
| **Bytes/Sec** | 949 kB | 949 kB | 1.8 MB | 2.18 MB | 1.76 MB | 414 kB  | 948 kB | 17.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.4 ms | 2.2 ms | 39 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9727   | 9727   | 20463   | 21215   | 19128.41 | 3336.98 | 9726   | 191286  |
| **Bytes/Sec** | 1.5 MB | 1.5 MB | 3.15 MB | 3.27 MB | 2.95 MB  | 514 kB  | 1.5 MB | 29.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.56 ms | 1.34 ms | 46 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4575   | 4575   | 7891    | 8147    | 6936.8 | 1404.67 | 4572   | 69362   |
| **Bytes/Sec** | 590 kB | 590 kB | 1.02 MB | 1.05 MB | 895 kB | 181 kB  | 590 kB | 8.95 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 5.21 ms | 2.14 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6071   | 6071   | 12703   | 12871   | 11666  | 2142.21 | 6069   | 128315  |
| **Bytes/Sec** | 783 kB | 783 kB | 1.64 MB | 1.66 MB | 1.5 MB | 276 kB  | 783 kB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.86 ms | 1.39 ms | 25 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9719    | 9719    | 19967   | 22015   | 17567.6 | 5046.51 | 9719    | 175686  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 2.24 MB | 2.47 MB | 1.97 MB | 565 kB  | 1.09 MB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.7 ms | 1.54 ms | 30 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 12095   | 12095   | 25983   | 26831   | 23768.37 | 4645.56 | 12095   | 261448 |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.38 MB | 3.49 MB | 3.09 MB  | 604 kB  | 1.57 MB | 34 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.88 ms | 52 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7375    | 7375    | 9791    | 9895    | 9521    | 734.34 | 7375    | 95202   |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 1.87 MB | 1.89 MB | 1.82 MB | 140 kB | 1.41 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.77 ms | 1.33 ms | 69 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 13767   | 13767   | 27951   | 29231   | 25389.46 | 5175.79 | 13764   | 279287 |
| **Bytes/Sec** | 1.78 MB | 1.78 MB | 3.61 MB | 3.77 MB | 3.28 MB  | 668 kB  | 1.78 MB | 36 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.74 ms | 30 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 2869   | 2869   | 3577   | 4183   | 3479.5 | 412.55  | 2868   | 34790 |
| **Bytes/Sec** | 330 kB | 330 kB | 411 kB | 481 kB | 400 kB | 47.5 kB | 330 kB | 4 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 11.05 ms | 17.43 ms | 67 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3833   | 3833   | 5319   | 5539   | 5204.3 | 464     | 3833   | 52035   |
| **Bytes/Sec** | 602 kB | 602 kB | 836 kB | 869 kB | 817 kB | 72.8 kB | 602 kB | 8.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 7 ms  | 15 ms | 7.28 ms | 2.83 ms | 120 ms |


---

<p align="center">Generated 2022-01-24T00:51:49.806Z</p>
