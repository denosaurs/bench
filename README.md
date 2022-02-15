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
  - [deco](#deco)
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
| node | 40208 | 402099 |
| deno | 38288 | 382844 |
| deno_canary | 37524 | 375266 |
| fastify | 31898.91 | 350897 |
| oak | 25425.82 | 279683 |
| alosaur | 25020.8 | 250216 |
| reno | 24737.82 | 272132 |
| deco | 22464 | 224636 |
| aqua | 20917.6 | 209178 |
| abc | 13976 | 139755 |
| little_std | 13875.28 | 152633 |
| little_native | 13668.91 | 150358 |
| dinatra | 9723.82 | 106950 |
| opine | 9219.46 | 101415 |
| express | 7023.55 | 77248 |
| tinyhttp | 4508.7 | 45081 |
| servest | 3775.4 | 37750 |
| drash | 1104.1 | 11041 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 10935   | 10935   | 14303   | 14439   | 13976  | 1018.08 | 10928   | 139755 |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.33 MB | 1.34 MB | 1.3 MB | 94.9 kB | 1.02 MB | 13 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.2 ms | 1.03 ms | 58 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 16415   | 16415   | 21631   | 34655   | 25020.8 | 6829.4 | 16409   | 250216  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 1.93 MB | 3.08 MB | 2.23 MB | 608 kB | 1.46 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.35 ms | 0.87 ms | 46 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 12551   | 12551   | 23311   | 23759   | 20917.6 | 4004.55 | 12544   | 209178 |
| **Bytes/Sec** | 1.62 MB | 1.62 MB | 3.01 MB | 3.07 MB | 2.7 MB  | 517 kB  | 1.62 MB | 27 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.3 ms | 0.91 ms | 23 ms |


### [deco](https://deno.land/x/deco)

> Deco is a utility library for Deno developers


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 12695   | 12695   | 24191   | 25103   | 22464  | 4178.64 | 12690   | 224636 |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 3.12 MB | 3.24 MB | 2.9 MB | 539 kB  | 1.64 MB | 29 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.43 ms | 1.19 ms | 30 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18351   | 18351   | 42655   | 43743   | 38288   | 8018.95 | 18343   | 382844  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 3.79 MB | 3.89 MB | 3.41 MB | 713 kB  | 1.63 MB | 34.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.41 ms | 0.71 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 17855   | 17855   | 42303   | 42847   | 37524   | 7787.1 | 17842   | 375266  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 3.76 MB | 3.81 MB | 3.34 MB | 694 kB | 1.59 MB | 33.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.41 ms | 0.72 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7387   | 7387   | 9991   | 10207  | 9723.82 | 760.15  | 7387   | 106950  |
| **Bytes/Sec** | 384 kB | 384 kB | 520 kB | 531 kB | 506 kB  | 39.5 kB | 384 kB | 5.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.78 ms | 45 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 1020   | 1020   | 1091   | 1165   | 1104.1 | 40.52   | 1020   | 11041  |
| **Bytes/Sec** | 425 kB | 425 kB | 455 kB | 486 kB | 460 kB | 16.9 kB | 425 kB | 4.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 23 ms | 36 ms | 45 ms | 35.69 ms | 8.42 ms | 281 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4011   | 4011   | 8007    | 8823   | 7023.55 | 1814.82 | 4010   | 77248   |
| **Bytes/Sec** | 866 kB | 866 kB | 1.73 MB | 1.9 MB | 1.52 MB | 392 kB  | 866 kB | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 13 ms | 5.21 ms | 2.92 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 18319   | 18319   | 35807   | 37087   | 31898.91 | 6689.65 | 18318   | 350897 |
| **Bytes/Sec** | 2.82 MB | 2.82 MB | 5.51 MB | 5.71 MB | 4.91 MB  | 1.03 MB | 2.82 MB | 54 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.7 ms | 0.92 ms | 21 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7079   | 7079   | 14999   | 15375   | 13668.91 | 2407.45 | 7077   | 150358  |
| **Bytes/Sec** | 913 kB | 913 kB | 1.94 MB | 1.98 MB | 1.76 MB  | 311 kB  | 913 kB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.34 ms | 1.05 ms | 20 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8199    | 8199    | 15271   | 15631   | 13875.28 | 2579.26 | 8192    | 152633  |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.97 MB | 2.02 MB | 1.79 MB  | 333 kB  | 1.06 MB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.32 ms | 1.06 ms | 28 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 23887   | 23887   | 45471   | 46431  | 40208  | 8444.27 | 23876   | 402099 |
| **Bytes/Sec** | 2.67 MB | 2.67 MB | 5.09 MB | 5.2 MB | 4.5 MB | 946 kB  | 2.67 MB | 45 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.44 ms | 0.74 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12135   | 12135   | 28623   | 29423   | 25425.82 | 5246.23 | 12129   | 279683  |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 3.72 MB | 3.83 MB | 3.31 MB  | 682 kB  | 1.58 MB | 36.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.07 ms | 0.91 ms | 39 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 6999    | 6999    | 9439   | 9583    | 9219.46 | 706.65 | 6999    | 101415  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 1.8 MB | 1.83 MB | 1.76 MB | 135 kB | 1.34 MB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 5 ms  | 3.86 ms | 1.22 ms | 59 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12487   | 12487   | 28031   | 28431   | 24737.82 | 5275.34 | 12486   | 272132  |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 3.61 MB | 3.67 MB | 3.19 MB  | 680 kB  | 1.61 MB | 35.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.78 ms | 22 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3061   | 3061   | 3809   | 4583   | 3775.4 | 427.06  | 3061   | 37750   |
| **Bytes/Sec** | 352 kB | 352 kB | 438 kB | 527 kB | 434 kB | 49.1 kB | 352 kB | 4.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 10.09 ms | 16.98 ms | 67 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3165   | 3165   | 4699   | 4855   | 4508.7 | 467.98  | 3165   | 45081   |
| **Bytes/Sec** | 497 kB | 497 kB | 738 kB | 762 kB | 708 kB | 73.4 kB | 497 kB | 7.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 19 ms | 8.44 ms | 3.68 ms | 129 ms |


---

<p align="center">Generated 2022-02-15T00:38:51.712Z</p>
