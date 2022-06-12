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
| node | 47052.37 | 517600 |
| deno_canary | 41058.4 | 410579 |
| fastify | 33468.81 | 334682 |
| oak | 28230.19 | 310503 |
| reno | 26204.4 | 262026 |
| aqua | 23605.2 | 236028 |
| drash | 21448.37 | 235924 |
| deno | 19450.8 | 194496 |
| alosaur | 18152 | 181533 |
| abc | 16651.64 | 183163 |
| little_native | 13534.73 | 148887 |
| dinatra | 12002.4 | 120029 |
| mandarinets | 11874.6 | 118742 |
| little_std | 8515.4 | 85146 |
| opine | 8409.4 | 84084 |
| express | 8128.9 | 81276 |
| tinyhttp | 4188.3 | 41876 |
| servest | 3252.1 | 32515 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 12423   | 12423   | 17199  | 17343   | 16651.64 | 1391.72 | 12421   | 183163 |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.6 MB | 1.61 MB | 1.55 MB  | 129 kB  | 1.16 MB | 17 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.13 ms | 0.93 ms | 62 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9119    | 9119    | 21247   | 23999   | 18152   | 6177.48 | 9119    | 181533  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 2.38 MB | 2.69 MB | 2.03 MB | 692 kB  | 1.02 MB | 20.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 1.72 ms | 1.55 ms | 53 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13807  | 13807  | 24447   | 28111   | 23605.2 | 4451.24 | 13803  | 236028  |
| **Bytes/Sec** | 2.1 MB | 2.1 MB | 3.72 MB | 4.27 MB | 3.59 MB | 676 kB  | 2.1 MB | 35.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.76 ms | 23 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13207   | 13207   | 19983   | 21135   | 19450.8 | 2177.35 | 13201   | 194496  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.24 MB | 2.37 MB | 2.18 MB | 244 kB  | 1.48 MB | 21.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.51 ms | 1.21 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 31503   | 31503   | 42047   | 42495   | 41058.4 | 3193.59 | 31498   | 410579 |
| **Bytes/Sec** | 3.53 MB | 3.53 MB | 4.71 MB | 4.76 MB | 4.6 MB  | 358 kB  | 3.53 MB | 46 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.29 ms | 0.58 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9255   | 9255   | 12303  | 12559  | 12002.4 | 934.53  | 9254   | 120029  |
| **Bytes/Sec** | 481 kB | 481 kB | 640 kB | 653 kB | 624 kB  | 48.6 kB | 481 kB | 6.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.01 ms | 1.41 ms | 21 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14063   | 14063   | 22175   | 23247   | 21448.37 | 2391.23 | 14057   | 235924  |
| **Bytes/Sec** | 1.94 MB | 1.94 MB | 3.06 MB | 3.21 MB | 2.96 MB  | 330 kB  | 1.94 MB | 32.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.4 ms | 1.05 ms | 49 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3835   | 3835   | 8703    | 9007    | 8128.9  | 1479.97 | 3834   | 81276   |
| **Bytes/Sec** | 828 kB | 828 kB | 1.88 MB | 1.95 MB | 1.76 MB | 320 kB  | 828 kB | 17.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.47 ms | 1.97 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18271   | 18271   | 35455   | 36063   | 33468.81 | 5228.08 | 18261   | 334682  |
| **Bytes/Sec** | 2.81 MB | 2.81 MB | 5.46 MB | 5.55 MB | 5.15 MB  | 805 kB  | 2.81 MB | 51.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.72 ms | 0.92 ms | 44 ms |


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
| **Req/Sec**   | 6915    | 6915    | 14887   | 15463   | 13534.73 | 2772.01 | 6915    | 148887  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 2.26 MB | 2.35 MB | 2.06 MB  | 421 kB  | 1.05 MB | 22.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.41 ms | 1.23 ms | 28 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6199   | 6199   | 8735    | 8983    | 8515.4  | 785.15 | 6197   | 85146   |
| **Bytes/Sec** | 942 kB | 942 kB | 1.33 MB | 1.36 MB | 1.29 MB | 119 kB | 942 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.24 ms | 1.31 ms | 30 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7815   | 7815   | 12343   | 12431   | 11874.6 | 1356.37 | 7815   | 118742 |
| **Bytes/Sec** | 727 kB | 727 kB | 1.15 MB | 1.16 MB | 1.1 MB  | 126 kB  | 727 kB | 11 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3.16 ms | 1.26 ms | 71 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 29359   | 29359   | 48927   | 49407   | 47052.37 | 5632.93 | 29344   | 517600 |
| **Bytes/Sec** | 3.29 MB | 3.29 MB | 5.48 MB | 5.53 MB | 5.27 MB  | 631 kB  | 3.29 MB | 58 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.27 ms | 0.6 ms | 18 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15879   | 15879   | 30735  | 31423   | 28230.19 | 4894.43 | 15873   | 310503  |
| **Bytes/Sec** | 2.43 MB | 2.43 MB | 4.7 MB | 4.81 MB | 4.32 MB  | 749 kB  | 2.43 MB | 47.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.12 ms | 0.63 ms | 32 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev  | Min     | Total |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------ | ------- | ----- |
| **Req/Sec**   | 5739    | 5739    | 8663    | 8919    | 8409.4 | 901.88 | 5738    | 84084 |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 1.85 MB | 1.91 MB | 1.8 MB | 193 kB | 1.23 MB | 18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 7 ms  | 4.17 ms | 1.49 ms | 41 ms |


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
| **Req/Sec**   | 15639   | 15639   | 24927   | 33855   | 26204.4 | 7608.08 | 15637   | 262026  |
| **Bytes/Sec** | 2.38 MB | 2.38 MB | 3.79 MB | 5.14 MB | 3.98 MB | 1.16 MB | 2.38 MB | 39.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.25 ms | 0.71 ms | 20 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2299   | 2299   | 3033   | 4187   | 3252.1 | 512.53  | 2298   | 32515   |
| **Bytes/Sec** | 264 kB | 264 kB | 349 kB | 481 kB | 374 kB | 58.9 kB | 264 kB | 3.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 11.79 ms | 17.91 ms | 101 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3209   | 3209   | 4291   | 4515   | 4188.3 | 347.19  | 3208   | 41876   |
| **Bytes/Sec** | 504 kB | 504 kB | 673 kB | 709 kB | 657 kB | 54.5 kB | 504 kB | 6.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 8 ms  | 17 ms | 9.06 ms | 3.25 ms | 112 ms |


---

<p align="center">Generated 2022-06-12T01:41:36.610Z</p>
